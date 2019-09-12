import React, { PureComponent } from 'react'
import Mainpage from './mainpage'
import Manufacturer from './Components/manufacturer'
export class App extends PureComponent {
  render() {
    return (
      <div>
        <Manufacturer />
      </div>
    )
  }
}

export default App
