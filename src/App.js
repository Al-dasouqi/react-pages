import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import data from './components/data.json'
import SelectedBeast from './components/SelectedBeast';
import Form from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      show: false,
      selectedBeast: {}
    }
  }

  showModal = (event) => {

    const selectedBeast = data.find(horned => horned.title === event);
    console.log(selectedBeast);

    this.setState({ selectedBeast, show: true });
  }

  dontShowModal = () => {
    this.setState({ show: false });
  }
  render() {
    return (
      <div>
        <Header />
        <Main showModal={this.showModal} />
        <SelectedBeast show={this.state.show} dontShowModal={this.dontShowModal} selectedBeast={this.state.selectedBeast} />
        <Footer />
      </div>
    )
  }
}

export default App;
//   render() {
//     return (
//       <div>
//         < Header />
//         < Main />
//         < Footer />
//       </div>
//     )
//   }
// }
//export default App;
