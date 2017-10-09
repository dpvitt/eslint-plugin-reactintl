import { getProp, getPropValue, hasEveryProp, elementType } from 'jsx-ast-utils';

const errorMessage = 'Missing defaultMessage or id attribute';

/* the component is only valid if we supply
 * a defaultMessage with the ID for components
 * requesting a translation string */
const containsIdAndDefault = (node) => {
    const defaultMessageValue = getPropValue(
        getProp(node.attributes, 'defaultMessage')
    );

    const allPropsExist = hasEveryProp(node.attributes, ['id', 'defaultMessage'], {
        ignoreCase: true,
        spreadStrict: false,
    });

    return (allPropsExist && !!defaultMessageValue);
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

            if (!containsIdAndDefault(node)) {
                context.report({
                    node,
                    message: errorMessage,
                });
            }
        },
    }),
};
