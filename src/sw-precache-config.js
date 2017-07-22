module.exports = {
  staticFileGlobs: [
    'src/**.html',
    'src/**.js',
    'src/**.css',
    'src/assets/images/*',
    'src/assets/icons/*'
  ],
  root: 'src',
  stripPrefix: 'src/',
  navigateFallback: '/index.html'
};