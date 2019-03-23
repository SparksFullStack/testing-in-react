import React from 'react';
import { mount } from 'enzyme';

import CommentBox from '../CommentBox';

let wrapper;

beforeEach(() => {
    wrapper = mount(<CommentBox />);
    wrapper.find('textarea').simulate('change', { target: { value: 'new comment' } });
    wrapper.update();
});

afterEach(() => {
    wrapper.unmount();
});

it('renders a text area and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
});

it('has a textarea that users can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
});

it('empties the form state after submittal', () => {
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('textarea').prop('value')).toEqual("");
});