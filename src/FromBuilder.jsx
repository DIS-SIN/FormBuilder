import React from 'react'
import PropTypes from 'prop-types';

class FormBuilder extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            values: {}
        }
    }

    handleValueChange = (input) => (e) => {
        let values = this.state.values
        e.preventDefault()
        values[input.key] = e.target.value
        this.props.onChange(values)
        this.setState({values: values})
    }

    render(){
        const {schema} = this.props
        const label = (label) => (
            <label>
                {label}
            </label>
        )
        const field = (input) => (
            <input {...input} onChange={this.handleValueChange(input)}/>
        )
        const dropdown = (input) => {
            return (
                <select onChange={this.handleValueChange(input)} {...input}>
                    <option></option>
                    {
                        input.options.map((option, index) => (
                            <option key={option.value} {...option}>{option.label}</option>
                        ))
                    }
                </select>
            )
        }
        const element = (input) => {
            switch(input.type){
                case "dropdown":
                    return dropdown(input)
                default:
                    return field(input)
            }
        }
        return (
            <form>
                {
                    schema.map(input => {
                        return (
                            <React.Fragment key={input.key}>
                                {input.label ? label(input.label) : null}
                                {element(input)}
                            </React.Fragment>
                        )
                    })
                }
            </form>
        )
    }
}

FormBuilder.propTypes = {
    schema: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

export default FormBuilder