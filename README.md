# Protocol.Love Website

This is a simple starter project to get the protocol.love content on the Sanity platform - so that Github is not the only way to manage content (via Markdown or yaml files). 

## Features:

- Structured content and custom site builder using a customized [Sanity Studio](https://www.sanity.io) instance - [studio](studio)
  - Open source tools, free tier for three users
  - Password in CFD, Workflowy, or elsehwere (see admins)
- A blazingly fast frontend with landing pages, page parts, navigation, event mgmt, and blog
- Tailwind CSS - A utility-first CSS framework for rapidly building custom designs
- Current engine is built on [Gatsby.js](https://gatsbyjs.org)
  - Next version is on [sapper](http://sapper.svelte.dev) - a simple migration
- Global deployment on [Netlify](https://netlify.com) for studio and web app

- Create landing pages and use custom page building components for custom web frontend (https://protocol-love-studio.netlify.app)
- A simple blog with web preview from within the Studio (https://protocol-love-studio.netlify.app)
- Custom embedded objects in rich text for Instagram/Facebook posts, social media videos, LaTeX math etc, data tables, Markdown, and more
- Built in media manager - [studio](studio)
- A/B test facility


## Quick start

1. Clone this repository
2. `git clone git@github.com:thinq4yourself/protocol-love.git`
3. `npm install` to install dependencies
4. `npm run dev` to start the Studio and frontend locally
   - The Studio should be running on [http://localhost:3333](http://localhost:3333)
   - The frontend should be running on [http://localhost:8000](http://localhost:8000)
5. `npm run build` to build to production locally

> If you want to turn off preview you can set `watchMode: false` in gatsby-config.js. If you just want to preview published changes you can set `overlayDrafts: false` in gatsby-config.js.

## Deploy changes

Netlify automatically deploys new changes commited to master on GitHub - or visit the [Studio](https://studio.protocol.love). If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

## Next steps
Polish up some of the design for mobile/web containers/components - and then start to migrate from gatsby to sapper. It was simply faster to model site in gatsby rather than learning sapper while modeling in sanity/sapper. We already have a sapper migration started that uses this sanity model and works with the studio - but all of the components, helpers, pages/routes need to be created to support the model and features available in the model - as configured in Studio. 

## Stuck? Get help

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on twitter](https://twitter.com/sanity_io).
