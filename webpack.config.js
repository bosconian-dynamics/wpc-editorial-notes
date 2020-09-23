const path = require( 'path' );

const config = require( '@wordpress/scripts/config/webpack.config' );

const isProduction = process.env.NODE_ENV === 'production';

config.entry = {
  index: path.resolve( process.cwd(), 'src', 'index.js' )
};

config.output = {
  filename: '[name].js',
  path: path.resolve( process.cwd(), 'build' ),
};

config.resolve = {
  ...config.resolve,
  roots: [
    path.resolve( process.cwd(), 'src' ),
  ],
  alias: {
    ...config.resolve.alias,
  }
};

module.exports = config;
