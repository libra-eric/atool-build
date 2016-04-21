export default () => {
  return {
    cacheDirectory: true,
    presets: [
      require.resolve('./es2015'),
      require.resolve('babel-preset-react'),
      require.resolve('babel-preset-stage-0'),
    ],
    plugins: [
      require.resolve('babel-plugin-add-module-exports'),
      require.resolve('babel-plugin-typecheck'),
      require.resolve('babel-plugin-transform-decorators-legacy'),
    ],
  };
};
