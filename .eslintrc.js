module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        '@vue/airbnb',
        '@vue/typescript',
        'plugin:vue/recommended',
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    rules: {
        indent: [2, 4, { SwitchCase: 1 }],
        'vue/html-indent': [2, 4],
        'vue/script-indent': [2, 4, { baseIndent: 0 }],
        semi: [2, 'never'],
    },
}
