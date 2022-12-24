import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from "./Redux/slices/UserSlice"


function App() {

  const dispatch = useDispatch()

  const listUsers = useSelector((state) => state.User.ListUser)









  useEffect(() => {
    dispatch(fetchUser())
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <table>
          <thead>
            <th>Id</th>
            <th>Email</th>
            <th>User Name</th>
          </thead>
          <tbody>
            {listUsers && listUsers.length > 0
              &&
              listUsers.map((item, index) => {
                return (
                  <tr>
                    <th>{item.id}</th>
                    <th>{item.email}</th>
                    <th>{item.username}</th>
                  </tr>
                )
              })
            }



          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
