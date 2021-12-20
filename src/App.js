import './App.css';
import NavBar from './Component/NavBar';
import Intro from './Component/Introduction';
import Pro from './Component/Project';
import proj1 from './Component/Asset/proj1.jpg';
import proj2 from './Component/Asset/proj2.jpg';
import proj3 from './Component/Asset/proj3.jpg';
import proj4 from './Component/Asset/proj4.jpg';
import Footer from './Component/Footer'
function App() {
  return (
    <div className="App">
     <NavBar/>
     <hr/>
     <Intro name='RYRY' Lastname='TOUTOU'/>
      <hr/>
      <div className="d-flex m-3">
        <Pro image={proj1} Title='Project1' Texte='my project' />
        <Pro image={proj2} Title='Project2' Texte='my project' />
        <Pro image={proj3} Title='Project3' Texte='my project' />
        <Pro image={proj4} Title='Project4' Texte='my project' />
      </div>
      <div className="contact_us">
        <form>
          <label htmlFor="fullname">Full name :</label>
          <input type="text" name="fullname" placeholder="Full name"/>
          <label htmlFor="email">Email :</label>
          <input type="text" name="email" placeholder="email"/>
          <label htmlFor="fullname">Description :</label>
          <textarea name="description" placeholder="Description" placeholder="Description"></textarea>
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
     <Footer />
    </div>
  );
}

export default App;
