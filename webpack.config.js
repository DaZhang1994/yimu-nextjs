module.exports = {
    devServer: {
      contentBase: './app',
      compress: true,
      proxy: {
        '/graphql': {
          target: 'https://yimu-nextjs-api.vercel.app/server.js',
          secure: false,
        },
      },
    },
  };