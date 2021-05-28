module.exports = {
    mode : 'development',
    entry : './static/index.js',
    output : { 
      path: `${__dirname}/public`,
      filename : 'bundle.js',
    },
    devServer: {
      contentBase: "./static",
      hot: true,
      host: "localhost",
      port : 3000,
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            use: "babel-loader",
            exclude: /node_modules/
          },
          {
            test: /\.(vert|frag|glsl)$/,
            use: {
              loader: 'webpack-glsl-loader'
            }
          }
        ]
    },
  };