function tiers(index) {
	let lines = []
	const symbol = '*'
	const lineLength = index
	let result = ''
	for(let i = 0; i < index; i++) {
		let line = ''
		line += ' '.repeat(lineLength - (i+1))
		line += symbol.repeat(i+1)
		line += '\n'
		lines.push(line)
	}
	return lines.join('');
}
module.exports = tiers;
