import React, { Component } from 'react';

import {
    observer,
    inject,
} from 'vanex';

@inject(
    stores => ({
        home: stores.home,
        form: stores.form
    })
)
@observer
export default class Home extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {
            form,
            home,
        } = this.props;

        return (
            <div>
                <label htmlFor={form.$('email').name}>
                  {form.$('email').label}
                </label>

                <input {...form.$('email').bind()} />

                <p style={{color: 'red', fontSize: '12px'}}>{form.$('email').error}</p>

                <button type="submit" onClick={form.onSubmit}>Submit</button>
                <button type="button" onClick={form.onClear}>Clear</button>
                <button type="button" onClick={form.onReset}>Reset</button>

                <p>{form.error}</p>
            </div>
        );
    }
}
