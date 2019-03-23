import React from 'react';
import { mount } from 'enzyme';

import CommentBox from '../CommentBox';

let wrapper;

beforeEach(() => {
    wrapper = mount(<CommentBox />)
});

afterEach(() => {
    wrapper.unmount();
});

it('renders a text area and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
});

it('has a textarea that users can type in', () => {
    wrapper.find('textarea').simulate('change', { target: { value: 'new comment' } });
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
})