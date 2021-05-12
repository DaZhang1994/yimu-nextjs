module.exports = {
    devServer: {
      contentBase: './app',
      compress: true,
      proxy: {
        '/graphql': {
          target: 'https://yimu-nextjs-api.vercel.app/graphql',
          secure: false,
        },
      },
    },
  };