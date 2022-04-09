import { render, screen } from '@testing-library/react';
import App from './App';

test('button has initial color and text', () => {
  render(<App />);

  const colorButton = screen.getByRole('button',{name : 'Change color to blue'});
  expect(colorButton).toHaveStyle({backgroundColor:'red'})

});

test('button turns blue when clicked',()=>{

})