module.exports = {
    svelteAllowShorthand: false,
    svelteBracketNewLine: true,
    svelteStrictMode: false,
    singleQuote: true,
    useTabs: false,
    semi: false,
    printWidth: 80,
    tabWidth: 4,
    endOfLine: "crlf",
    arrowParens: "avoid",
    trailingComma: "none",
    svelteSortOrder: "options-scripts-markup-styles",
    plugins: [require.resolve('prettier-plugin-svelte')]
}
