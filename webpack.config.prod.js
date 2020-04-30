const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
    mode: "production",
    entry: {
        main: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /.js/,
                use: "babel-loader"
            },
            {
                test: /.scss/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'link:href']
                    }
                }
            },
            {
                test: /.(png|jpg|svg|ttf|otf|ico)/,
                use: {
                    loader: "url-loader",
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inlineSource: ".(js|css)",
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
            chunks: ["main"],
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new HtmlWebpackInlineSourcePlugin()
    ]
}
