const siteMetadata = {
  title: 'Lebyy\'s Blog',
  author: 'Lebyy',
  headerTitle: 'Lebyy\'s Blog',
  description: '👨‍💻💭📝🌐🚀 Sharing my journey as a developer: From ideation 💡 to creation 🛠️ and launching 🚀 on the web 🌐!',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://blog.lebyy.me',
  siteRepo: 'https://github.com/Lebyy/lebyy-blog',
  siteLogo: '/static/images/logo.jfif',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'lebyy@lebyy.me',
  github: 'https://github.com/Lebyy',
  twitter: 'https://twitter.com/Lebyy_Dev',
  youtube: 'https://youtube.com/@lebyyy',
  locale: 'en-US',
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comment: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
