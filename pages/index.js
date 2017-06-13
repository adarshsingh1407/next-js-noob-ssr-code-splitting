import React from 'react'
import dynamic from 'next/dynamic'

import Hello2 from '../components/hello2.js'

const DynamicComponent = dynamic(import ('../components/hello'))

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <DynamicComponent/>
        Here is my App!
        <Hello2 />
      </div>
    );
  }
}

export default App
