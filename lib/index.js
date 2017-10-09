'use strict';

var _defaultMessage = require('./rules/default-message');

var _defaultMessage2 = _interopRequireDefault(_defaultMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileoverview Ensures react-intl components have a defaultMessage supplied
 * @author Dan Pavitt
 */

module.exports = {
    rules: {
        'default-message': _defaultMessage2.default
    },
    configs: {
        recommended: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            rules: {
                'default-message': 'error'
            }
        },
        strict: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            rules: {
                'default-message': 'error'
            }
        }
    }
};