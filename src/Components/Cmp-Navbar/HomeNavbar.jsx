import { React } from "react";
import { Dropdown } from "react-bootstrap";
import '../../scss/Home.css';


const HomeNavbar = () => {
    return (
        <ul className="nav nav-pills bg-info  d-flex flex-row-reverse  justify-content-center">
           
            <Dropdown>
                <Dropdown.Toggle className="d-flex   justify-content-center align-items-center" variant="info" id="dropdown-basic">
                   ثبت نام
                </Dropdown.Toggle>

                <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1">ثبت نام کاربران ایرانی</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Item href="#/action-2">  ثبت نام کاربران خارجی </Dropdown.Item>
                     <Dropdown.Item href="#/action-3">(forein customers)</Dropdown.Item>
                     
                </Dropdown.Menu>
            </Dropdown>
            
           
           
            <li className="nav-item">
                <a className="nav-link text-white" href="#">ورود</a>
            </li>
            
            <Dropdown>
                <Dropdown.Toggle className="d-flex   justify-content-center align-items-center" variant="info" id="dropdown-basic" >
                    سوالات متداول
                </Dropdown.Toggle>

                <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1">تجارت داخلی</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Item href="#/action-2">تجارت خارجی</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Item href="#/action-3">شناسه کالا</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
           
            <Dropdown>
                <Dropdown.Toggle className="d-flex   justify-content-center align-items-center" variant="info" id="dropdown-basic">    استعلامات  </Dropdown.Toggle>

                       
               
                <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1">شناسه کالا</Dropdown.Item>
                     
                </Dropdown.Menu>
            </Dropdown>
           
            <li className="nav-item">
                <a className="nav-link text-white text-white" href="#">زیر سامانه ها</a>
            </li>

            <li className="nav-item">
                <a className="nav-link text-white " href="#">صفحه اصلی</a>
            </li>

        </ul>
    );
};
export default HomeNavbar;