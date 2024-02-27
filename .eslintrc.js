module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'import', 'svelte3'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        'import/order': [
            'warn',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index'
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                }
            }
        ]
    },
    ignorePatterns: ['dist/', 'node_modules/', '**/*.module.scss.d.ts'],
    settings: {
        'svelte3/typescript': true,
        'svelte3/ignore-styles': () => true
    }
}
