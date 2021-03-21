const path = require('path')

const pathResolve = p => path.resolve(__dirname, '../', p)

module.exports = ({ config, mode }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': pathResolve('stories'),
    '~': pathResolve('node_modules')
  }
  config.module.rules.push({
    test: /\.scss$/,
    include: path.resolve(__dirname, '../stories'),
    use: ['style-loader', 'css-loader', 'sass-loader']
  })
  config.module.rules.push({
    test: /\.less$/,
    include: path.resolve(__dirname, '../stories'),
    use: ['style-loader', 'css-loader', 'less-loader']
  })
  if (process.env.NODE_ENV === 'production') {
    config.output.filename = 'bundle.[name].js'
    config.optimization.splitChunks.automaticNameDelimiter = '.'
    config.optimization.runtimeChunk = {
      name: entrypoint => `runtime.${entrypoint.name}`
    }
  }
  // console.log(config);
  return config
}