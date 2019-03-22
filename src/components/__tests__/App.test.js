import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

it('shows a comment box', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    // testing the existence of the components
    expect(div.innerHTML).toContain('Comment Box goes here');

    ReactDOM.unmountComponentAtNode(div);
});

it('shows a comment list', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    expect(div.innerHTML).toContain('Comment List goes here');

    ReactDOM.unmountComponentAtNode(div);
});