import { screen, render } from '@testing-library/react';
import Application from './application';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading', {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const pageHeading2 = screen.getByRole('heading', {
      level: 2,
    });
    expect(pageHeading2).toBeInTheDocument();

    // const nameElement = screen.getByRole('textbox', {
    //   name: 'Name',
    // });
    // const nameElement = screen.getByPlaceholderText('Fullname');
    const nameElement = screen.getByDisplayValue('Kadir');
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    // const termsElement = screen.getByRole('checkbox');
    const termsElement = screen.getByLabelText('I agree the terms and conditions');
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});
