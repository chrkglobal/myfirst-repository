import React from 'react';

export default class Leftmenu extends React.Component {
  render() {
    return (


      <nav className="navbar-default navbar-static-side" id="sidebar" role="navigation">
        <div className="new-scrollbar">
          <div className="sidebar-collapse">
            <ul className="nav metismenu" id="side-menu" style={{}}>
              <li className="nav-header">
                <div className="dropdown profile-element">
                  <img alt="" className="rounded-circle" src="./static/images/profile_small.jpg" />
                  <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                    <span className="block m-t-xs font-bold">David Williams</span>
                    <span className="text-muted text-xs block">Art Director <b className="caret" /></span>
                  </a>
                  <ul className="dropdown-menu animated fadeInRight m-t-xs">
                    <li><a className="dropdown-item" href="profile.html">Profile</a></li>
                    <li><a className="dropdown-item" href="contacts.html">Contacts</a></li>
                    <li><a className="dropdown-item" href="mailbox.html">Mailbox</a></li>
                    <li className="dropdown-divider" />
                    <li><a className="dropdown-item" href="login.html">Logout</a></li>
                  </ul>
                </div>
                <div className="logo-element">
                  IN+
                </div>
              </li>
              <li className="active">
                <a href="#"><i className="fa fa-th-large" /> <span className="nav-label">Dashboards</span> <span className="fa arrow" /></a>
                 
              </li>
              <li>
                <a href="layouts.html"><i className="fa fa-diamond" /> <span className="nav-label">Layouts</span></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-bar-chart-o" /> <span className="nav-label">Graphs</span><span className="fa arrow" /></a>
                 
              </li>
              <li>
                <a href="mailbox.html"><i className="fa fa-envelope" /> <span className="nav-label">Mailbox </span><span className="label label-warning float-right">16/24</span></a>
                
              </li>
              <li>
                <a href="metrics.html"><i className="fa fa-pie-chart" /> <span className="nav-label">Metrics</span></a>
              </li>
              <li>
                <a href="widgets.html"><i className="fa fa-flask" /> <span className="nav-label">Widgets</span></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-edit" /> <span className="nav-label">Forms</span><span className="fa arrow" /></a>
                
              </li>
              <li>
                <a href="#"><i className="fa fa-desktop" /> <span className="nav-label">App Views</span>  <span className="float-right label label-primary">SPECIAL</span></a>
                
              </li>
              <li>
                <a href="#"><i className="fa fa-files-o" /> <span className="nav-label">Other Pages</span><span className="fa arrow" /></a>
                <ul className="nav nav-second-level collapse" aria-expanded="false">
                  <li><a href="search_results.html">Search results</a></li>
                  <li><a href="lockscreen.html">Lockscreen</a></li>
                  <li><a href="invoice.html">Invoice</a></li>
                  <li><a href="login.html">Login</a></li>
                  <li><a href="login_two_columns.html">Login v.2</a></li>
                  <li><a href="forgot_password.html">Forget password</a></li>
                  <li><a href="register.html">Register</a></li>
                  <li><a href="404.html">404 Page</a></li>
                  <li><a href="500.html">500 Page</a></li>
                  <li><a href="empty_page.html">Empty page</a></li>
                </ul>
              </li>
              <li>
                <a href="#"><i className="fa fa-globe" /> <span className="nav-label">Miscellaneous</span><span className="label label-info float-right">NEW</span></a>
                 
              </li>
              <li>
                <a href="#"><i className="fa fa-flask" /> <span className="nav-label">UI Elements</span><span className="fa arrow" /></a>
                
              </li>
              <li>
                <a href="grid_options.html"><i className="fa fa-laptop" /> <span className="nav-label">Grid options</span></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-table" /> <span className="nav-label">Tables</span><span className="fa arrow" /></a>
                 
              </li>
              <li>
                <a href="#"><i className="fa fa-shopping-cart" /> <span className="nav-label">E-commerce</span><span className="fa arrow" /></a>
                 
              </li>
              <li>
                <a href="#"><i className="fa fa-picture-o" /> <span className="nav-label">Gallery</span><span className="fa arrow" /></a>
                
              </li>
              <li>
                <a href="#"><i className="fa fa-sitemap" /> <span className="nav-label">Menu Levels </span><span className="fa arrow" /></a>
                 
              </li>
              
              
              
            </ul>
          </div>
        </div> 
      </nav>


    );
  }
}
