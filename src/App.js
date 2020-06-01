import React from 'react';
import './App.css';
import {Layout , Header , Navigation ,Drawer ,Content} from 'react-mdl'
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
       <div className="demo-big-content">
    <Layout>
        <Header title={<Link style={{textDecoration:'none' , color : 'white' }} to="/"> My Portfolio</Link>} scroll className="header-color"> 
            <Navigation>
                <Link to="/resume">Resume</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
                {/* <Link to="/resume">Resume</Link> */}
            </Navigation>
        </Header>
        <Drawer title="My Portfolio" title={<Link style={{textDecoration:'none' , color : 'black' }} to="/"> My Portfolio</Link>}>
            <Navigation>
            <Link to="/resume">Resume</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>


    // </div>
  );
}

export default App;
