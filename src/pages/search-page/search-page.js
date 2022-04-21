import React, {useState, useRef} from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Snackbar from '@mui/material/Snackbar'

import {Content} from '../../components/content'
import {GithubTable} from '../../components/github-table'
import {getRepos} from '../../services'

export const SearchPage = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [isSearchApplied, setIsSearchApplied] = useState(false)
  const [reposList, setReposList] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const searchByInput = useRef(null)

  const handleSearch = async () => {
    try {
      setIsSearching(true)
      const response = await getRepos({
        q: searchByInput.current.value,
      })

      const {data} = response

      setReposList(data.items)
      setIsSearchApplied(true)
    } catch (err) {
      console.log(err)
      setIsOpen(true)
      setErrorMessage(err.response.message)
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1">
          Github Repositories List Page
        </Typography>
      </Box>

      <Grid
        container
        spacing={2}
        justify="space-between"
        alignItems="center"
        alignContent="center"
      >
        <Grid item md={9} xs={12}>
          <TextField
            inputRef={searchByInput}
            fullWidth
            label="Filter by"
            id="filterBy"
            variant="standard"
          />
        </Grid>

        <Grid item md={3} xs={12}>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={handleSearch}
            disabled={isSearching}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      <Box my={4}>
        <Content isSearchApplied={isSearchApplied} reposList={reposList}>
          <GithubTable reposList={reposList} />
        </Content>
      </Box>

      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={() => setIsOpen(false)}
        message={errorMessage}
      />
    </Container>
  )
}
