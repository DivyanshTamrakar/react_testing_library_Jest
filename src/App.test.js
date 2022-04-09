import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has initial color and text', () => {
  render(<App />);

  const colorButton = screen.getByRole('button',{name : 'Change color to blue'});
  // initially buttom is red
  expect(colorButton).toHaveStyle({backgroundColor:'red'})

  // click happens
  fireEvent.click(colorButton);

  // change the background color to blue
   expect(colorButton).toHaveStyle({backgroundColor:'blue'})

   expect(colorButton.textContent).toBe('Change color to red')

});