import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';

import dvr from './dvr';

const getFormClass = ({
    rules,
    asyncRules,
    onSuccess,
    onError,
}) => {
    // 一个VanexForm实例对应着一个Form校验
    class VanexForm extends MobxReactForm {
        plugins() {
            return {
                dvr: {
                    package: validatorjs,
                    extend: dvr({
                        rules: rules, 
                        asyncRules: asyncRules
                    })
                }
            };
        }
    
        onSuccess(form) {
            return onSuccess(form);
        }
    
        onError(form) {
            return onError(form);
        }
    }

    return VanexForm;
};

export default (args = []) => ({
    form: context => {
        if(!Array.isArray(args)) {
            args = [args];
        }
    
        const form = args.reduce((res, item) => {
            const {
                name = 'form',
                fields,
                rules = {},
                asyncRules = {},
                onSuccess = form => {},
                onError = form => {}
            } = item;
    
            let newOnSuccess = form => {
                return onSuccess(form, context);
            };
    
            let newOnError = form => {
                return onError(form, context);
            };
    
            res[name] = new (getFormClass({
                name,
                rules,
                asyncRules,
                onSuccess: newOnSuccess,
                onError: newOnError,
            }))({
                fields,
            }, {
                name,
            });
    
            return res;
        }, {});
    
        return form;
    }
});
