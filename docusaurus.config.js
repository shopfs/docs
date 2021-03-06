module.exports = {
    title: "Shop FS",
    tagline: "Decentralized Data Marketplace",
    url: "https://shopfs.github.io",
    baseUrl: "/",
    onBrokenLinks: "throw",
    favicon: "img/favicon.png",
    organizationName: "shopfs", // Usually your GitHub org/user name.
    projectName: "docs", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "",
            logo: {
                alt: "shopFS Logo",
                src: "img/logo.svg"
            },
            items: [
                {
                    to: "docs/",
                    activeBasePath: "docs",
                    label: "Docs",
                    position: "left"
                },
                {
                    href: "https://github.com/shopfs",
                    label: "GitHub",
                    position: "right"
                }
            ]
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Introduction",
                            to: "docs/"
                        },
                        {
                            label: "Usage",
                            to: "docs/usage/"
                        },
                        {
                            label: "Support",
                            to: "docs/support/"
                        }
                    ]
                },
                {
                  title: 'Community',
                  items: [
                    {
                      label: 'Discord',
                      href: 'https://discord.gg/qTEg598',
                    }
                  ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/shopfs"
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} ShopFS, Inc. Built with Docusaurus.`
        }
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    // It is recommended to set document id as docs home page (`docs/` path).
                    homePageId: "introduction",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/shopfs/docs/edit/master/"
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css")
                }
            }
        ]
    ]
};
