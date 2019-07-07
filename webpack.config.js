var path = require('path');

module.exports = {
	devServer:{
		contentBase: path.join(__dirname,'dist'),
		compress: true,
		port: 9000
	},
	module: {
		rules:[{
			test: /\.(html)$/,
			use:{
				loader: 'html-loader'
			}
		}]
	}
};