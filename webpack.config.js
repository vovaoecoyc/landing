const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
  entry: ['./src/index.js'], // точка входа
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/', // для того что бы запускать команду yarn dev без сборки проекта (при отсутствии папки dist)
  },
  devServer: {
    overlay: true, // вывод ошибок в окне браузера
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        // при таком подключении необходимо добавить тег link с css файлом в header index.html
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', // style-loader добавляет в ,<header></header> тег <style></style> здесь мы отключаем это
          use: ['css-loader', 'sass-loader'],
        }),
        //вариант сборки css файлов, когда они подключаются в header с помощью тега style, при использовании такого подключения css, стили добавляются в index.js с помощью import './css/style.css';
        // use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new ExtractTextPlugin('styles.css')],
};

module.exports = (env, options) => {
  // в зависимости от режима запуска проекта формируем правильный соурсмэп(еще куча строк кода) для develop режима, либо нет для production режима(с целью уменьшения количества кода)
  let modeProd = options.mode === 'production' ? true : false;
  config.devtool = modeProd ? 'sourse-map' : 'evel-sourcemap';

  return config;
};
