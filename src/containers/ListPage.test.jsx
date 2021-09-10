import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ListPage from './ListPage';
import { MemoryRouter } from 'react-router-dom';

describe('List page', () => {
  afterAll(() => cleanup());
  it('renders the list page', async () => {
    render(
      <MemoryRouter>
        <ListPage />
      </MemoryRouter>
    );
    const ul = await screen.findByRole('list', { name: 'villagers-list' });
    expect(ul).toBeInTheDocument();
    expect(ul).toMatchSnapshot();
  });
});
