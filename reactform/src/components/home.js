import React from 'react'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>   
                <div style={{position : 'absolute', left : 200, top: 100}}>
                    <button type="submit" onClick={() => this.props.history.push('/MyForm')}>
                        Next screen
                    </button>
                </div>

            </div>

        );
    }
}