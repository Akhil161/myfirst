import React from 'react';
import {Link} from 'react-router-dom';
import './Subheader.css'
function Subheader(){
    return(
        <>
        <div className='subheader'>
            <div className='a'>
                <span className="all">All</span>
            </div>
            <div className='b'>
              <Link to="/shirt" > <div className='best'>Best Seller</div></Link>
            </div>
            <div className='c'>
               <Link to="/paint" ><div className='mobile'>Mobile</div></Link>
            </div>
            <div className='d'>
                <div className='customer'>Customer Service</div>
            </div>
            <div className='e'>
                <div className='today'>Today's Deal</div>
            </div>
            <div className='f'>
                <div className='fashion'>Fashion</div>
            </div>
            <div className='g'>
                <div className='electronic'>Electronics</div>
            </div>
            <div className='h'>
                <div className='prime'>Prime</div>
            </div>
            <div className='i'>
                <div className='pay'>Amazon Pay</div>
            </div>
            <div className='j'>
                <div className='home'>Home & Kitchen</div>
            </div>
            <div className='k'>
                <div className='new'>New Releases</div>
            </div>
            <div className='l'>
                <div className='computer'>Computers</div>
            </div>
            <div className='m'>
                <div className='amazon'>Shopping made easy|Download the App</div>
            </div>
        </div>
        </>
    )
}

export default Subheader