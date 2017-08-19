# @alife/vanex-form

## 用法

```javascript
import vanexForm from '@alife/vanex-form';

import {
    use,
} from '@alife/vanex';

const fields = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Insert Email',
        rules: 'required|email|string|between:5,25'
    }
];

// 使用插件
use(vanexForm({
    name: 'form',
    fields,
    onSuccess(form) {
        console.log('success:', form.values());
    },
    onError(form, {home}) {
        const errors = form.errors();
        const errorInfo = errors[Object.keys(errors)[0]];

        home.error(errorInfo);
    }
}));

```

具体示例见项目的example。