//import React from 'react'
//
//import ReactDOM from 'react-dom/client'
//
//import axios from 'axios'
//
//axios.get('http://localhost:3001/api/notes').then(response => {
  //const notes = response.data
  //ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
//})
//
//const promise2 = axios.get('http://localhost:3001/api/foobar')
//console.log(promise2)
//
//const promise = axios.get('http://localhost:3001/api/notes')
//
//promise.then(response => {
  //console.log(response)
//})
//
//import App from './App'
//
//const notes = [
  //{
    //id: 1,
    //content: 'HTML is easy',
    //important: true
  //},
  //{
    //id: 2,
    //content: 'Browser can execute only JavaScript',
    //important: false
  //},
  //{
    //id: 3,
    //content: 'GET and POST are the most important methods of HTTP protocol',
    //important: true
  //}
//]
//
//ReactDOM.createRoot(document.getElementById('root')).render(
  //<App notes={notes} />
//)
//
//
//




import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)