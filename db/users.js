const _ = require('lodash');
const Promise = require('bluebird');

const apps = [
  {id: '099db7ca', name: 'webapp1'},
  {id: 'aa23128a', name: 'webapp2'},
];

const users = [
  {id: 'c27526ad', username: 'jack', password: '1qaz', email: 'jack@example.com', fullname: 'Jack London', apps: ['099db7ca', 'aa23128a']} ,
  {id: 'e1f25f8f', username: 'tom', password: '123', email: 'tom@example.com', fullname: 'Tommy Hero', apps: ['aa23128a']}
];


exports.findByUserName = (username, callback) => {

  return callback(users[_.findIndex(users, {'username': username})]);

};

exports.findByUserNameNextTick = (username, callback) => {
  process.nextTick(() => {
    return callback(users[_.findIndex(users, {'username': username})]);
  });
};
/***
 * Returns user only if username, password, appid are matched
 * @param username
 * @param password
 * @param appid
 * @param callback
 */
exports.login = (username, password, appid, callback) => {
  process.nextTick(() => {
    let index = _.findIndex(users, {'username': username, 'password' : password});
    if (index < 0) {
      callback(new Error('Login failed'), null);
    } else {
      let user_apps = users[index].apps;
      let appIndex = _.findIndex(user_apps, (o) => {return o === appid});
      if (appIndex < 0) {
        callback(new Error('User is not allowed to use this app'), null);
      } else {
        callback(null, users[index]);
      }
    }
  });
};
/***
 * This function use Promise
 * @param username
 */
exports.getUserApps = (username) => {
  return new Promise((resolve, reject) => {
    let user = users[_.findIndex(users, {'username': username})];
    if (user) {
      resolve(user.apps);
    } else {

      reject(new Error('user is not found'));
    }
  })
};

exports.login2 = (username, password, appid) => {
  return new Promise((resolve, reject) => {
    let index = _.findIndex(users, {'username': username, 'password': password});
    if (index < 0) {
      reject(new Error('Login failed'));
    } else {
      let user_apps = users[index].apps;
      let appIndex = _.findIndex(user_apps, (o) => {
        return o === appid
      });
      if (appIndex < 0) {
        reject(new Error('User is not allowed to use this app'));
      } else {
        resolve(users[index]);
      }
    }
  });
};
