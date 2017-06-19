/**
 * Giai phuong trinh bac 2, tra ve 2 nghiem hoac throw error
 * @param a
 * @param b
 * @param c
 * @returns {[*,*]}
 */
exports.pt2 = function (a, b, c) {
	//Kiem tra tham so dau vao
	let a_ = parseFloat(a)
	let b_ = parseFloat(b)
	let c_ = parseFloat(c)

	if (isNaN(a_)) {
		throw new Error('a is not number')
	}

	if (isNaN(b_)) {
		throw new Error('b is not number')
	}

	if (isNaN(c_)) {
		throw new Error('c is not number')
	}

	let delta = b_ * b_ - 4 * a_ * c_
	if (delta < 0) {
		throw new Error('delta nho hon 0')
	}

	let canDelta = Math.sqrt(delta)
	let haia = 2 * a_
	let x1 = (canDelta - b_) / haia
	let x2 = (-canDelta - b_) / haia
	return [x1, x2]
}

try {
	let [ x1, x2 ] = pt2(1,2, 1)
	console.log('x1 = ', x1)
	console.log('x2 = ', x2)
} catch (error) {
	console.log(error.message)
}