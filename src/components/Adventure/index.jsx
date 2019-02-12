import React, { Component } from "react";

class Adventure extends Component {
    render() {
        const { dimension } = this.props;
        return (
            <div className="adventure">
                <h1>Adventures of Rick and Morty</h1>
                <h2>The dimension is <em>{dimension}</em></h2>
            </div>
        );
    }
}

export default Adventure;
