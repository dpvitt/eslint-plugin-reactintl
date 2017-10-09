import defaultMessage from './rules/default-message';

/**
 * @fileoverview Ensures react-intl components have a defaultMessage supplied
 * @author Dan Pavitt
 */

module.exports = {
    rules: {
        'default-message': defaultMessage,
    },
    configs: {
        recommended: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            rules: {
                'default-message': 'error',
            },
        },
        strict: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            rules: {
                'default-message': 'error',
            },
        },
    },
};
