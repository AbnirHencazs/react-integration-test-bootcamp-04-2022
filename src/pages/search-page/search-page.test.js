import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {SearchPage} from '.'

const setup = () => render(<SearchPage />)

const getSearchBtn = () => screen.getByRole('button', {name: /search/i})

describe('SearchPage', () => {
  it('should display the github repositories page title', () => {
    setup()
    const heading = screen.getByRole('heading', {
      name: /github repositories list page/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('should contain the "filter by" input', () => {
    setup()
    const filterByInputEl = screen.getByLabelText(/filter by/i)

    expect(filterByInputEl).toBeInTheDocument()
  })

  it('should contain the "Search" button', () => {
    setup()
    const searchBtnEl = screen.getByRole('button', {name: /search/i})

    expect(searchBtnEl).toBeInTheDocument()
  })

  it('before the first search, show the initial state message "Please provide a search option and click in the search button"', () => {
    setup()

    const initialMessageEl = screen.getByText(
      /please provide a search option and click in the search button/i,
    )

    expect(initialMessageEl).toBeInTheDocument()
  })

  it('the search button should be disabled until the search is done', async () => {
    setup()

    const searchBtnEl = getSearchBtn()

    expect(searchBtnEl).toBeEnabled()

    userEvent.click(searchBtnEl)

    expect(searchBtnEl).not.toBeEnabled()

    await waitFor(() => expect(searchBtnEl).toBeEnabled(), {timeout: 5000})
  })

  it('the data should be displayed as a sticky table', async () => {
    setup()

    const filterByInputEl = screen.getByLabelText(/filter by/i)

    userEvent.type(filterByInputEl, 'wizeline academy')

    userEvent.click(getSearchBtn())

    const resultsTable = await screen.findByRole('table')

    const [firstCell] = await screen.findAllByRole('cell')

    expect(resultsTable).toBeInTheDocument()
    expect(firstCell).toHaveTextContent('Wizeline academy')
  })
})
