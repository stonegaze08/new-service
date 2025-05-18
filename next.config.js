const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    rehypePlugins: [require('rehype-raw')],
  },
})

module.exports = withNextra()
