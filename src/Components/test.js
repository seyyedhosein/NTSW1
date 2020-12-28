import React, { useState } from "react";

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import '../../scss/Home.css';
const Test = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const sayHello=()=>{
        let Text1 = "at least 4 nums requiered!!";
        document.querySelector('#p1').innerHTML=Text1;
    }

    return (
        <>
           <div className="justify"   >
            <ul className="nav nav-pills bg-info navbar2 d-flex flex-row-reverse  justify-content-center align-items-center">

                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret className="d-flex   justify-content-center align-items-center" variant="info" id="dropdown-basic">
                        ثبت نام
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="darkblue" class="icon mr-2 bi bi-arrow-bar-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z" />
                        </svg>
                        <p id="p1" ></p>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem >ثبت نام کاربران ایرانی</DropdownItem>
                        {/* <Dropdown.Divider /> */}
                        <DropdownItem onBlur={sayHello}>ثبت نام کاربران خارجی </DropdownItem>
                        <DropdownItem>(forein customers)</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Really Really Long Action (Really!)</DropdownItem>
                    </DropdownMenu>
                </Dropdown>



            </ul>
           
        </div >
        </>
    )
}

export default Test;