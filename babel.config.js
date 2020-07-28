module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: ['babel-plugin-dynamic-import-node', '@babel/plugin-proposal-class-properties'],
  ignore: ['node_modules', 'build'],
};
