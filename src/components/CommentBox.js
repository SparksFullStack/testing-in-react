import React, { Component } from 'react';

class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    };


    render() {
        return (
            <form>
                <h4>Add a Comment</h4>
                <textarea />
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}

export default CommentBox;