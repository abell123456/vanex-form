// 更多校验规则请参考：https://www.npmjs.com/package/validatorjs

export default [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Insert Email',
        rules: 'required|email|string|between:5,25',
        type: 'email'
    }
];
