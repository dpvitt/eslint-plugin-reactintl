import { getProp, getPropValue, elementType } from 'jsx-ast-utils';

const errorMessage = 'Missing defaultMessage attribute';

const isValid = (node) => {
    const defaultMessageAttr = getProp(node.attributes, 'defaultMessage');
    const defaultMessageValue = getPropValue(defaultMessageAttr);

    return defaultMessageAttr !== false && !!defaultMessageValue;
};

module.exports = {
    create: (context) => ({
        JSXOpeningElement: (node) => {
            const options = context.options[0] || {};
            const componentOptions = options.components || [];
            const typesToValidate = ['FormattedMessage'].concat(componentOptions);
            const nodeType = elementType(node);

            // Only check 'FormattedMessage' elements and custom types.
            if (typesToValidate.indexOf(nodeType) === -1) {
                return;
            }

            if (!isValid(node)) {
                context.report({
                    node,
                    message: errorMessage,
                });
            }
        },
    }),
};
