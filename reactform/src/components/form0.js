import React from 'react'

export default class MyForm0 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {
                name: "",
                email: ""
            },
            blurred: {
                email: false,
                name: false
            },
            isSaving: false
        }
    }

    handleInputChange = (newPartialInput) => {
        this.setState(state => ({
            ...state,
            input: {
                ...state.input,
                ...newPartialInput
            }
        }))
    }

    handleBlur = (fieldName) => {
        this.setState(state => ({
            ...state,
            blurred: {
                ...state.blurred,
                [fieldName]: true
            }
        }))
    }

    isEmailValid = (email) =>
        email.length > 2 &&
        email.includes('@') &&
        email.includes('.') &&
        email.indexOf('@') < email.indexOf('.') &&
        email.indexOf('.') != email.length - 1


    validate = () => {
        const errors = {};
        const { input } = this.state;

        if (!input.email) {
            errors.email = 'Email is required';
        } else if (!this.isEmailValid(input.email)) {
            errors.email = 'Please enter a valid email'
        }

        if (!input.name) {
            errors.name = 'Name is required'
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }

    render() {
        const { input, blurred } = this.state;
        const { errors, isValid } = this.validate()
        return (
            <form onSubmit={() => null}>
                <div>
                    <input
                        name="email"
                        placeholder="email"
                        value={input.email}
                        onBlur={() => this.handleBlur('email')}
                        onChange={e => this.handleInputChange({ email: e.target.value })}
                    />
                    {blurred.email && !!errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <input
                        name="name"
                        placeholder="name"
                        value={input.name}
                        onBlur={() => this.handleBlur('name')}
                        onChange={e => this.handleInputChange({ name: e.target.value })}
                    />
                    {blurred.name && !!errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <button type="submit" disabled={!isValid} onClick={() => this.props.history.push('/MyForm1')}>
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}