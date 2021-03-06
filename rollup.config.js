import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js-harmony';

export default {
  format: 'cjs',
  entry: './src/index.js',
  dest: './index.js',
  plugins: [
    babel({
      exclude: [
        'node_modules',
        'polyfills/**'
      ]
    }),
    uglify({}, minify)
  ]
}
