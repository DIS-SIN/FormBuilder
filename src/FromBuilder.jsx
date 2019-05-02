import React from 'react'

class FormBuilder extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
        this.handleValueChange = this.handleValueChange.bind(this)
    }

    handleValueChange = (input) => (e) => {
        e.preventDefault()
        this.setState({[input.key]: e.target.value})
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
        const dropdown = (input) => (
            <select onChange={this.handleValueChange(input)} {...input}>
                {
                    input.options.map(option => (
                        <option key={option.value} {...option}>{option.label}</option>
                    ))
                }
            </select>
        )
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

export default FormBuilder