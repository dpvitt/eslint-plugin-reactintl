'use strict';

var _jsxAstUtils = require('jsx-ast-utils');

var errorMessage = 'Missing defaultMessage or id attribute';

/* the component is only valid if we supply
 * a defaultMessage with the ID for components
 * requesting a translation string */
var containsIdAndDefault = function containsIdAndDefault(node) {
    var defaultMessageValue = (0, _jsxAstUtils.getPropValue)((0, _jsxAstUtils.getProp)(node.attributes, 'defaultMessage'));

    var allPropsExist = (0, _jsxAstUtils.hasEveryProp)(node.attributes, ['id', 'defaultMessage'], {
        ignoreCase: true,
        spreadStrict: false
    });

    return allPropsExist && !!defaultMessageValue;
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

                if (!containsIdAndDefault(node)) {
                    context.report({
                        node: node,
                        message: errorMessage
                    });
                }
            }
        };
    }
};