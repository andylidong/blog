module.exports = {
  title: 'LD',
  tagline: '一个混吃等死的程序猿',
  url: 'http://111.229.53.186/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '首页',
      logo: {
        alt: '首页',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/前端',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
        },
        {
          to: 'blog',
          label: '博客',
          position: 'left'
        },
        {
          href: 'https://github.com/andylidong',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '文档',
              to: 'docs/JS',
            }
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: '帮助',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/andylidong',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. LD`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
