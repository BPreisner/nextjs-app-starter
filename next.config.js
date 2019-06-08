const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const pathsAliases = {
   components: path.resolve(__dirname, 'src/components'),
   config: path.resolve(__dirname, 'src/config'),
   lib: path.resolve(__dirname, 'src/lib'),
   mudules: path.resolve(__dirname, 'src/mudules'),
   store: path.resolve(__dirname, 'src/store'),
   translations: path.resolve(__dirname, 'src/translations'),
   utils: path.resolve(__dirname, 'src/utils'),
};

module.exports = withTypescript({
   webpack(config, options) {
      if (options.isServer) {
         config.plugins.push(
            new ForkTsCheckerWebpackPlugin({
               tsconfig: '../tsconfig.json',
            }),
         );
      }

      config.resolve.alias = pathsAliases;

      return config;
   },
   distDir: '../dist',
});
