# US - github repositories list

As a developer, I want to take a quick look at the github repositories as a way
of inspiring me to be better professional.

## Acceptance Criteria:

- There must be a github repositories list page.

- The page should contain the next filters:

  - An input text with label "filter by" field in order to do the search.
  - The Search Button.

- The results section should contain:
  - Before the first search, show the initial state message “Please provide a
    search option and click in the search button”.
  - The search button should be disabled until the search is done.
  - The data should be displayed as a sticky table.
  - The header table should contain: Repository, stars, forks, open issues and
    updated at
  - Each result should have: owner avatar image, name, stars, updated at, forks,
    open issues. It should have a link that opens in a new tab the github
    repository selected.
  - Show 30 results per page.
  - If there is no results, then show a empty state message “You search has no
    results”
- Handling filter:
  - If the developer types "ruby" in the filter by repository name input and
    clicks on search, the app should return repositories with the "ruby" word
    associated.
- Handling errors:
  - If there is an unexpected error from the backend, the app should display an
    alert message error with the message from the service if any, if not show
    the generic “there is an unexpected error”.
