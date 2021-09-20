import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mocktoggleModal = jest.fn();

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  }

afterEach(cleanup);

describe('Modal Renders', () => {
    // render test
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} onClose={mocktoggleModal}/>);
    });
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={mocktoggleModal}/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        // Arrange: Render Modal
        const { getByText } = render(<Modal
            onClose={mocktoggleModal}
            currentPhoto={currentPhoto}
            />)
        // Act: Simulate click event
        fireEvent.click(getByText('Close this modal'));
        // Assert: Expected matcher
        expect(mocktoggleModal).toHaveBeenCalledTimes(1);
    });
})