import React from 'react'

const Authtabs = () => {
  return (
    <div>
      <div className="container-wrapper">
    <div className="environment">DEV</div>
    <div className="container-wrapper-auth">
        <div className="tabs">
            <div className="tabs-auth">
                <ul className="tab-group">
                    <li className='tab active'>
                        <button className="login">Sign In</button>
                    </li>
                    <li className='tab'>
                        <button className="signup">Sign Up</button>
                    </li>
                </ul>
                <div className="tab-item">
                    login component
                </div>
                <div className="tab-item">
                    register component
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Authtabs
