// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';

import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => {

  return (
    <Admin dataProvider={dataProvider}>
      {/* <Resource name="users" list={ListGuesser} /> */}
      <Resource name="users" list={UserList} />
    </Admin>
  )
}
export default App;
