import React from 'react'

class Form extends React.Component {
    state = {
        valueInput: ''
    }
    actionSubmit = (event) => {
        //isso realmente importante para não perder o que foi escrito 
        event.preventDefault();
        
        fetch(`https://api.github.com/users/${this.state.valueInput}`)
        .then(resp =>{
            return resp.json()
        })
        .then(
            data=>{
                //aqui envio as informações para o meu app.js
                this.props.onSubmit(data);
                this.setState({ valueInput: ''})
            }
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.actionSubmit}>
                    <input type="text"
                        value={this.state.valueInput}
                        onChange={event => this.setState({valueInput: event.target.value})}
                    placeholder="insert github" required/>
                    <button type="submit">Ok</button>
                </form>
            </div>
        )
    }
}

export default Form;