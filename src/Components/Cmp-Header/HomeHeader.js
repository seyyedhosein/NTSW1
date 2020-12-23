import React from 'react';
import '../../scss/Home.css'
import m1 from '../../images/m1.png';
import logo11 from '../../images/logo11.png';
import headertitle from  '../../images/headertitle.png';


// import logo from './header-title.png'

const HomeHeader=()=>{
    return (
        <div className={'HomeHeader  px-5  d-flex flex-row-reverse justify-content-between align-items-center'}>
             
             <a href={'http://www.ecommerce.gov.ir/'}> <img className={'left  pl-5'} src={m1} alt='logo'></img></a>
           <img className={'middle pr-5'} src={headertitle} alt='logo'></img>
           <a href={'https://mimt.gov.ir/'}> <img className={'right pr-5 mr-5'} src={logo11} alt='logo'></img></a>
           
            {/* <img src={Logo}></img> */}
        </div>
        
       );
    
};
export default HomeHeader;