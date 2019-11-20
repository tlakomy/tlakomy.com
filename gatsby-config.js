module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    "gatsby-plugin-react-helmet",
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Tomasz's blog`,
    author: `Tomasz Łakomy`,
    description: `Articles and notes from Tomasz Łakomy, frontend engineer and an egghead.io instructor`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/tlakomy`,
      },
      {
        name: `github`,
        url: `https://github.com/tlakomy`,
      },
      {
        name: `egghead.io`,
        url: `https://egghead.io/instructors/tomasz-lakomy?af=6p5abz`,
      },
    ],
  },
}
