module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Tomasz's blog`,
    author: `Tomasz Łakomy`,
    description: `Sometimes I put my thoughts into writing. Sometimes they even make sense. This is where they'll live`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/tlakomy`,
      },
      {
        name: `github`,
        url: `https://github.com/tlakomy`,
      },
    ],
  },
}
