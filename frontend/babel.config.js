module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
          components: './src/components',
          types: './src/types',
          layouts: './src/layouts',
        },
      },
    ],
  ],
};
