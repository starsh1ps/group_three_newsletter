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
 <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
  
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">News</a></li>

    </ul>
  </div>
</nav>
  
    </div>
  )
}
}
export default Navbar;