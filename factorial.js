exports.factorial = function(N) {

	let n = parseInt(N)

	if (isNaN(n)) {
		throw new Error('n is not number');
	}

	if (n === 0 && n === 1) return 1


	let result = 1
	for (let i = 1; i <= n; i++) {
		result = result * i
	}

	return result
}
