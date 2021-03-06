import React, { Component } from 'react';

class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: "",
        }
    };


    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        // call action creator
        // save the comment

        this.setState({ comment: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment} />
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}

export default CommentBox;