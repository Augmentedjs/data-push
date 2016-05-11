({
    baseUrl: ".",
    paths: {
        backbone: "../lib/backbone-min",
        underscore: "../lib/lodash.min",
        jquery: "../lib/jquery.min",
        augmented: "../lib/augmented",
        augmentedPresentation: "../lib/augmentedPresentation"
    },
    include: [],
    name: "dataPushRequire",
    out: "dataPushRequire-built.js",
    optimize: "uglify2",
    preserveLicenseComments: false,
    generateSourceMaps: true,
    useStrict: true
})
