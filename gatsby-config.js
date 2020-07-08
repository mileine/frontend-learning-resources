module.exports = {
  siteMetadata: {
    title: `Frontend Learning`,
    name: `Mileine`,
    siteUrl: `https://frontend-learning.netlify.app/`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/mileinesouto`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/css", "/web-animations", "/d3","/frameworks","/design"],
      ignoreIndex: false
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
