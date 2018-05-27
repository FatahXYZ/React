import React from 'react'

export default class Test extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <h1>TEST</h1>
                </div>
                <div>
                    <button type="submit" onClick={() => this.props.history.push('/')}>
                        Retour
                    </button>
                </div>
            </div>

        )
    }
}