module.exports = {
    base: '/',
    title: 'Pensonal Blog',
    description: 'just playing',
    repo: 'https://github.com/SundayR0SE/',
    repoLabel: 'Github',
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {text: '基础', items: [
                {text: 'Javascript', link: '/Javascript'},
                {text: 'Html', link: '/Html'},
                {text: 'Css', link: '/Css'}
            ]},
            {text: 'Webpack', link: '/webpack'},
            {text: '其他', link: '/other'},
        ],
        sidebar: 'auto',
        lastUpdated: true,
    }
}