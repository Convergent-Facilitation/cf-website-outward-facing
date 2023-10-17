// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Convergent Facilitation',
  tagline: 'Finding a way forward together',
  favicon: 'img/convergentfacilitation_logo.png',

  // Set the production url of your site here
  url: 'https://convergentfacilitation.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  customFields: {
    // Put your custom environment here
    googleCalendarApiKey: process.env.GOOGLECALENDARAPIKEY
  },
  onBrokenLinks: 'ignore', // later use 'throw'
  themes: [
    // ... Your other themes.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexPages: true,
        blogRouteBasePath: ['/blog', '/events'],
        blogDir: ['blog', 'events']

        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      })
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: false,
  docs: {
        /* docs plugin options */
      },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All Posts',
          authorsMapPath: '../humans.yml',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
			'https://github.com/Convergent-Facilitation/cf-website-outward-facing/tree/main'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //       image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        hideOnScroll: false,
        title: 'Convergent Facilitation',
        logo: {
          alt: 'Convergent Facilitation Logo',
          src: 'img/convergentfacilitation_logo.png'
        },
        items: [
          { label: 'What is CF', to: 'about', position: 'left' },
		  { label: 'Get Support', to: '/services', position: 'left' },
		  { label: 'Case Studies', to: '/case-studies', position: 'left' },
		  { label: 'Mission', to: '/mission', position: 'left' },
          {
            type: 'dropdown',
            label: 'Learn more',
            position: 'left',
            items: [
              {
				  label: 'Book: Highest Common Denominator',
                to: 'https://thefearlessheart.org/store/the-highest-common-denominator/'
              },
              {
                label: 'CF Handout',
                to: 'https://thefearlessheart.org/item/organizational-collaboration-primer-packet/'
              },
              {
                label: 'Intro Courses',
                to: 'cf-intro-courses'
              },
              {
                label: 'Learning Community',
                to: 'https://grow.convergentfacilitation.org'
              },
              {
                label: 'Newsletter',
                to: 'contact#stay-in-the-loop'
              }
            ]
          },
          {
            type: 'search',
            position: 'right'
          },
          { label: 'Support Our Work', to: '/give', position: 'right' },
          { label: 'Contact', to: 'contact', position: 'right' }

        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Process and Impact',
            items: [
              {
                label: 'What is CF',
                to: '/engage/what-can-you-do'
              },
              {
                label: 'Case Studies',
                to: '/engage/apply-and-apprentice/join-hylo'
              },
              {
                label: 'Book: Highest Common Denominator',
                href: 'https://thefearlessheart.org/store/the-highest-common-denominator/'
              },
              {
                label: 'CF Handout',
                href: 'https://thefearlessheart.org/item/organizational-collaboration-primer-packet'
              },
            ]
          },
          {
            title: 'Engage',
            items: [
              {
                label: 'Get Support',
                to: '/services'
              },
              {
                label: 'Mission',
                to: '/mission'
              },
              {
                label: 'Support Our Work',
                to: '/give'
              },
              {
                label: 'Introductory courses',
				to: '/cf-intro-courses'
              },
              {
                label: 'Grow CF Capacity in Community',
                href: 'https://grow.convergentfacilitation.org'
              },
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact',
                to: '/contact'
              },
              {
                label: 'Blog',
                to: 'blog'
              },
              {
                label: 'Newsletter',
                to: '/contact#stay-in-the-loop'
              },
              { label: 'NGL Community',
                href: 'https://nglcommunity.org'
              },

            ]
          },
        ],
        copyright: `Convergent Facilitation ${new Date().getFullYear()}. Built with Docusaurus.`

      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    }),
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false
      }
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        path: 'events',
        routeBasePath: 'events',
        id: 'events',
        blogSidebarTitle: 'All Events',
        showReadingTime: false,
        authorsMapPath: '../humans.yml'
      }
    ],

  ]
}

module.exports = config
