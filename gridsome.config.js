// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'luizeof',
  siteDescription: 'Dicas e Truques sobre Laravel e Flutter',
  port: 8888,
  siteUrl: "https://luizeof.dev",
  templates: {
    Post: '/:lang/blog/:title',
    Tag: '/blog/tag/:id'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-gtag',
      options: {
        config: {
          id: 'G-5QE06K3X9T',
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/blog/tag/*'],
        config: {
          '/pt-br/*': {
            changefreq: 'weekly',
            priority: 0.5,
          },
          '/en/*': {
            changefreq: 'weekly',
            priority: 0.5,
          },
        }
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: [],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
