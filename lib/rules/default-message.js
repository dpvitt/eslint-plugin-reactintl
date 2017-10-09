'use strict';

var _jsxAstUtils = require('jsx-ast-utils');

var errorMessage = 'Missing defaultMessage attribute';

var isValid = function isValid(node) {
    var defaultMessageAttr = (0, _jsxAstUtils.getProp)(node.attributes, 'defaultMessage');
    var defaultMessageValue = (0, _jsxAstUtils.getPropValue)(defaultMessageAttr);

    return defaultMessageAttr !== false && !!defaultMessageValue;
};

module.exports = {
    create: function create(context) {
        return {
            JSXOpeningElement: function JSXOpeningElement(node) {
                var options = context.options[0] || {};
                var componentOptions = options.components || [];
                var typesToValidate = ['FormattedMessage'].concat(componentOptions);
                var nodeType = (0, _jsxAstUtils.elementType)(node);

                // Only check 'FormattedMessage' elements and custom types.
                if (typesToValidate.indexOf(nodeType) === -1) {
                    return;
                }

                if (!isValid(node)) {
                    context.report({
                        node: node,
                        message: errorMessage
                    });
                }
            }
        };
    }
};