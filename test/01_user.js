const chai = require('chai');
chai.should();

const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const db = require('../db');

const Promise = require("bluebird");

describe("Test db/users", () => {
  /***
   * This is blocking ~ synchronous test
   */
  it('Should find user by username', () => {

    let username = db.users.findByUserName('jack', (user) => {
      return user.username;
    });
    username.should.equal('jack');

  });


  /* Cách viết này gây lỗi bởi đoạn lệnh return result.should.equal('jack'); chạy trước khi
   db.users.findByUserName2 trả về kết quả

   it('Should find user by username - process.nexttick', function() {

   let result = db.users.findByUserName2('jack', (user) => {

   return user.username;

   });
   return result.should.equal('jack');
   });*/

  /* Cách viết này cũng gây lỗi mặc dù nó pass bởi hàm return nằm bên trong hàm callback
   it('Should find user by username - process.nexttick', function() {

   db.users.findByUserName2('jack', (user) => {

   return user.username.should.equal('jacks');

   });
   });
   */

  //Cách đúng đắn là truyền done
  it('Should find user by username - process.nexttick', (done) => {

    db.users.findByUserNameNextTick('jack', (user) => {
      user.username.should.equal('jack');
      done();
    });
  });


  /***
   *Áp dụng đối với hàm callback
   */
  it('Login user: jack, password: 1qaz and appid', function (done) {
    db.users.login('jack', '1qaz', '099db7ca', (error, user) => {
      user.username.should.equal('jack');
      done();  //Báo với mocha, hàm test này đã xong
    });

  });

  /***
   * Sử dụng promise code viết gọn hơn
   */
  it('Login user: jack, password: 1qaz and promise', () => {
    return db.users.login2('jack', '1qaz', '099db7ca').should.eventually.have.property('username').equal('jack');
  });

   it('Correct user/pass but wrong appid should return error', () => {
    return db.users.login2('jack', '1qaz', 'NonExistAppId').should.eventually.rejectedWith('User is not allowed to use this app');
  });



  it('it should return apps when input correct user', () => {
    return db.users.getUserApps('tom').should.eventually.contain('aa23128a');
  });

  /***
   * Test error return when username is incorrect
   */
  it('it should throw error when input incorrect user', () => {
    return db.users.getUserApps('tommy').should.eventually.rejectedWith('user is not found');
  });

});