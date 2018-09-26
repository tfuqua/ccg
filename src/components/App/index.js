//@flow
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

type Props = {};

type State = {
  open: boolean
};

class App extends Component<Props, State> {
  state = {
    open: true
  };

  render() {
    const { open } = this.state;

    return (
      <div className="App">
        <CssBaseline>
          <div>
            <AppBar>
              <Typography variant="title" color="inherit" noWrap>
                CCG Power Shell
              </Typography>
            </AppBar>

            <main>
              <div />
              <Typography variant="display1" gutterBottom>
                Orders
              </Typography>
              <Typography component="div" />
              <Typography variant="display1" gutterBottom>
                Products
              </Typography>
            </main>
          </div>
        </CssBaseline>
      </div>
    );
  }
}

export default App;
