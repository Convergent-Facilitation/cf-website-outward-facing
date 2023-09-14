// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Convergent Facilitation',
  tagline: 'Getting Out of the Mess We Are in Together',
  favicon: 'img/cf-logo-hcd-arrow.webp',

  // Set the production url of your site here
  url: 'https://convergentfacilitation.netlify.app',
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
            'https://github.com/Convergent-Facilitation/cf-website/tree/main/'
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
          src: 'img/cf-logo-hcd-arrow.webp'
        },
        items: [
          { label: 'About', to: 'about', position: 'left' },
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'left',
            items: [
              {
                label: 'Case Studies',
                to: 'case-studies'
              },
              {
                label: 'The Book',
                to: 'the-book'
              },
              {
                label: 'Primer / Handout',
                to: 'primer'
              },
              {
                label: 'Newsletter',
                to: 'newsletter'
              }
            ]
          },
		  { label: 'Learn', to: '/learn', position: 'left' },
		  { label: 'Services', to: '/services', position: 'left' },
          {
            type: 'search',
            position: 'right'
          },
          { label: 'Give', to: '/give', position: 'right' },
          { label: 'Contact', to: 'contact', position: 'right' }

        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Spheres of Engagement',
                to: '/engage/what-can-you-do'
              },
              {
                label: 'Events',
                to: 'events'
              },
              {
                label: 'Co-Create on Hylo',
                to: '/engage/apply-and-apprentice/join-hylo'
              },
              {
                label: 'Practice groups',
                to: '/engage/experience-and-embody/practice-groups'
              }
            ]
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Book: The Highest Common Denominator',
                href: '/resources/the-book'
              },
              {
                label: 'Recordings Coaching Calls',
                to: '/resources/recordings-coaching-calls/overview-coaching-call-recordings'
              },
              {
                label: 'Case Studies',
                href: '/resources/case-studies'
              },
              {
                label: 'CF Facilitators',
                to: '/about#who-we-are'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'blog'
              },
              {
                label: 'Newsletter',
                to: '/contact#stay-in-the-loop'
              },
              {
                label: 'NGL Community',
                href: 'https://nglcommunity.org'
              },
              {
                label: 'Contact',
				  to: '/contact'
              },
              {
                label: 'Give',
                to: '/give'
              }

              //   {
              //     html: `
              //   <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
              //     <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
              //   </a>
              // `,
              //   },
            ]
          },
          {
            title: 'Legal (needed?)',
            // Please don't remove the privacy and terms, it's a legal
            // requirement.
            items: [
              {
                label: 'Privacy (needed?)',
                href: '/'
              },
              {
                label: 'Terms (needed?)',
                href: '/'
              },
              {
                label: 'Commons and License',
                href: '/'
              }
            ]
          }
        ],
        logo: {
          alt: 'Nonviolent Global Liberation Community Logo',
          src: '/img/ngl-logo-white.webp',
          href: 'https://nglcommunity.org'
        },
        copyright: `Nonviolent Global Liberation Community ${new Date().getFullYear()}. Built with Docusaurus.`

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
