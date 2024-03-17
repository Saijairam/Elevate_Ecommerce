import React from 'react'
                         
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <h3 className='text-center p-5'>E-Shopify</h3>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a href="/" className='nav-link active'>Home</a>
                </li>
            </ul>
            <div className="nav-sections">
                <a className="nav-links" href="/">Cart</a>
                <a className="nav-links" href="/">Login</a>
            </div>
            </div>
           </div>
        </nav>
     </div>
  )
}

export default Navbar