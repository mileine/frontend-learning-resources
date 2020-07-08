module.exports = {
  siteMetadata: {
    title: `Frontend Learning`,
    name: `Mileine`,
    siteUrl: `https://frontend-learning.netlify.app/`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: ``,
        url: ``
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/codeblock"],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
