import React, { useEffect, useState } from 'react'
import List from '../../components/List/List'
import ImageItem from '../../components/ImageItem/ImageItem'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchEntries } from '../../actions/entriesActions'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'
import PageHeader from '../../components/PageHeader/PageHeader'

const Movies = ({ entries, actions }) => {
  let [isLoading, setIsLoading] = useState(true)
  let [failedFetch, setFailedFetch] = useState(false)

  useEffect(() => {
    if (entries === null) {

      setTimeout(() => {
        actions.fetchEntries()
          .then(() => {
            setIsLoading(false)
          })
          .catch(err => {
            console.error(err.message)
            setFailedFetch(true)
          })

      }, 2000)


    } else {
      setIsLoading(false)
    }
  })


  function showList(entries, isLoading, failedFetch) {

    if (failedFetch) {
      return (<p>Oops something went wrong...</p>)
    }

    if (isLoading) {
      return (<p>Loading...</p>)
    }

    if (entries && entries.length !== 0) {
      entries = entries.filter((entry) => {
        return entry.programType === 'movie'
      })
    }

    return <List>
      {entries.map((entry) => {
        return (<ImageItem key={entry.title} imageSrc={entry.images['Poster Art'].url} title={entry.title}/>)
      })}
    </List>
  }

  return (
    <ErrorBoundary>
      <PageHeader title={'Popular Movies'}/>

      <S.Main>
        {showList(entries, isLoading, failedFetch)}
      </S.Main>
    </ErrorBoundary>
  )
}

const S = {
  Main: styled.div`
    padding: 25px 100px;
    margin-bottom: 50px;
`
}

function mapStateToProps(state) {

  return {
    entries: state.entries,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ fetchEntries }, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movies)