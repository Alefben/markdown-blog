# ejs-markdown-blog
Little markdown blog built with EJS. Theme: [Cactus Dark](https://probberechts.github.io/hexo-theme-cactus/)

## Usage

- Run `npm i` and `node index.js`

## Post Layout

- Place your markdown file in `./views/blog/posts/`
- Use this layout on your `.md` file

```md
[//]: # (See 'markdown-test.md' for all the markdown possibilities)
---
title: Your Title
description: Your post's description
author: Your name, or the post writer's name, idk.
date: 31/05/2020
---

## h2 Header
blablabla
```

## Known Issues
* The post title should be same as the file name, like if the title is "Hello World", the filename should be `hello-world.md`
* The directory handling is not-so-good.It sometimes break and I'm looking forward to fix that
