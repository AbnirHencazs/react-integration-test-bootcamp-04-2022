import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@mui/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Avatar from '@mui/material/Avatar'
import Link from '@mui/material/Link'

const tableHeaders = [
  'Repository',
  'Stars',
  'Forks',
  'Open issues',
  'Updated at',
]

const useStyles = makeStyles({
  container: {
    maxHeight: 440,
  },
})

export const GithubTable = ({reposList}) => {
  const classes = useStyles()

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {tableHeaders.map(name => (
              <TableCell key={name}>{name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {reposList.map(
            ({
              name,
              id,
              stargazers_count: stargazersCount,
              forks_count: forksCount,
              open_issues_count: openIssuesCount,
              updated_at: updatedAt,
              html_url: htmlUrl,
              owner: {avatar_url: avatarUrl},
            }) => (
              <TableRow key={id}>
                <TableCell>
                  <Avatar alt={name} src={avatarUrl} />
                  <Link href={htmlUrl}>{name}</Link>
                </TableCell>
                <TableCell>{stargazersCount}</TableCell>
                <TableCell>{forksCount}</TableCell>
                <TableCell>{openIssuesCount}</TableCell>
                <TableCell>{updatedAt}</TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default GithubTable

GithubTable.propTypes = {
  reposList: PropTypes.arrayOf(PropTypes.object).isRequired,
}
