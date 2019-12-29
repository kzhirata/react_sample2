import * as React from 'react'
import { render } from 'react-dom'

import Table from './table'

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <div>
    {getGreeting(user)}
  </div>
);

console.log(element)

render(element, document.getElementById('app'))

// Component
class TableComponent extends React.Component {
  render() {
    return (
      <div>
        <Table />
      </div>
    );
  }
}

render(<TableComponent />, document.getElementById('table'))

