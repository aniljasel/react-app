import Greet from "./component/greet"
import Header from "./component/header"
import Footer from "./component/Footer"
import Hero from "./component/hero"
import IdCard from "./component/ID-Card"

function App (){
  return(
    // <h1 style={{ color: 'blue', fontFamily: 'Arial, sans-serif', fontWeight: 'bold',textAlign: 'center', marginTop: '100px',
    //   fontSize: '30px' }}>Hello Anil Kumar!!</h1>
    // <Greet></Greet>
    // <div>
    //   <Header></Header>
    //   <Hero data="Anil Kumar"></Hero>
    //   <Footer></Footer>
    // </div>
    <IdCard 
      name="Anil Kumar" 
      age={30} 
      occupation="Software Engineer" 
      contact="9876543210"
    />

  )}

export default App;
