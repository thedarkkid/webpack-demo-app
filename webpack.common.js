const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:{
        index: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/static/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', //3. Inject styles into DOM
                    'css-loader', //2. Turns css into commonjs
                    'sass-loader' //1. Turns sass into css
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"] // load assets as longtext
            },{
                test: /\.(svg|png|jpeg|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }

            }
        ]
    }

};
