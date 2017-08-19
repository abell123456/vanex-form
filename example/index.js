import React from 'react';
import { render } from 'react-dom';

import vanexForm from '../';

import fields from './fields';

import Home from './component';

import {
    inject,
    observer,
    start,
    use,
} from 'vanex';

import './index.scss';

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


// model部分
const home = {
    name: 'home',

    constants: {},

    data: {
        email: null,
    },

    syncs: {
        error(error) {
            alert(error);
        }
    },

    effects: {
        
    }
};

// 开启应用
start({
    component: Home,
    container: '#root',
    models: {
        home,
    },
});
