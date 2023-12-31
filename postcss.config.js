const config = {
  plugins: {
    autoprefixer: {},
    'postcss-sorting': {
      order: ['custom-properties', 'dollar-variables', 'declarations', 'at-rules', 'rules'],
      'properties-order': 'alphabetical',
      'unspecified-properties-position': 'bottom',
    },
    cssnano: {
      preset: 'default',
    },
  },
};

export default config;
