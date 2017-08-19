export default({rules, asyncRules}) => ($validator) => {
    // register async rules
    Object
        .keys(asyncRules)
        .forEach(key => $validator.registerAsyncRule(key, asyncRules[key]));

    // register sync rules
    Object
        .keys(rules)
        .forEach(key => $validator.register(key, rules[key].function, rules[key].message));
};
