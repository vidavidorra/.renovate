const config = {
  '*.{ts,tsx,js,jsx}': ['xo --fix'],
  '*.{vue,css,less,scss,html,htm,json,md,markdown,yml,yaml}':
    'prettier --write',
};

export default config;
