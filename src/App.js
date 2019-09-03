import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateContent = this.updateContent.bind(this);
    this.state = {page: 'home'};
  }

  updateContent(pageType) {
    this.setState({page: pageType});
  }

  render() {
    return(
      [
        <Header updateContent={this.updateContent} />,
        <Content page={this.state.page} />,
        <Footer />
      ]
    );
  }
}

export default App;
