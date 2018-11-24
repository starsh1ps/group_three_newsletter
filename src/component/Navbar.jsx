import React, { Component } from 'react';
// import 
class Navbar extends Component{
    componentDidMount(){

        // $(document).ready(function(){
      
        //   $('.sidenav-trigger').sideNav({
        //         menuWidth: 300,
        //         edge: 'left',
        //         closeOnClick: true
        //       }
        //     );
      
        // });
}

render () {
  return (
    <div className="Navbar">
 <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
  
    </div>
    <ul className="nav navbar-nav">
      <li className><a href="#">Home</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Sport</a></li>
      <li><a href="#">Weather</a></li>
      <li><a href="#">Culture</a></li>
      <li><a href="#">Technology</a></li>
    </ul>
  </div>
</nav>
  

 
    </div>
  )
}
}
export default Navbar; 