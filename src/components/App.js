import React from 'react';

import CommentList from './CommentList';
import CommentBox from './CommentBox';

export default () => {
    return (
        <div className="App">
            <CommentList />
            <CommentBox />
        </div>
    )
}