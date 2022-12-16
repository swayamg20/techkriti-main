import React from 'react';
import Sidenav from './sidenav';

const Layout = ({children}) => {
    return(
        <>
        {/* <div style={{"border":"2px solid red"}}>
            {/* <Toolbar/>
            <Sides/>
            <Backdrop/> 
            
    </div> */}
        <Sidenav/>        
        <main>{children}</main>
        </>
    )
}

export default Layout;

