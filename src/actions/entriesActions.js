import * as types from '../constants/actionTypes';
import axios from '../utils/axiosInstance'
import {sortByTitle}
from '../utils/sortHelpers'
export function fetchEntries() {
  return function (dispatch) {

    return axios.get('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
      .then(res => {


        let entriesSorted = res.data.entries.filter(entry => {
          return entry.releaseYear >= 2010
        })
          .sort(sortByTitle)

        return dispatch({
          type: types.UPDATE_ENTRIES,
          entries: entriesSorted
        });
      })



  };
}
