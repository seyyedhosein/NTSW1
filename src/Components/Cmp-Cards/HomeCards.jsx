import React from "react";
import { Card, Dropdown } from 'react-bootstrap'
//import logo11 from '../../images/logo11.png';
import Screenshot from '../../images/Screenshot.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../scss/Home.css';


//import headertitle from  '../../images/headertitle.png';
//import Swiper from 'react-id-swiper';


//import  autoplay  from "swiper";

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
const items = [
    <img src={Screenshot} className="yours-custom-class" />,
    <img src={Screenshot} className="yours-custom-class" />,
    <img src={Screenshot} className="yours-custom-class" />,
    <img src={Screenshot} className="yours-custom-class" />,
    <img src={Screenshot} className="yours-custom-class" />,
];


const HomeCards = () => {

    //    { data: [
    //       {
    //         id: 1,
    //         name: "img1",
    //         source: logo11,
    //       },
    //       {
    //         id: 2,
    //         name: "img2",
    //         source: logo11,
    //       },
    //       {
    //         id: 3,
    //         name: "img3",
    //         source: logo11,
    //       },
    //       {
    //         id: 4,
    //         name: "img4",
    //         source: logo11,
    //       },
    //       {
    //         id: 5,
    //         name: "img5",
    //         source: logo11,
    //       },
    //     ]}

    // const params = {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     slidesPerGroup: 3,
    //     loop: true,
    //     loopFillGroupWithBlank: true,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',

    //     },
    //     autoplay:true
    // }
    return (
        <div className="d-flex flex-column align-items-center">

            <div className={'card-row  d-flex justify-content-center'}>
                <Card className={'cardBorder mt-5  '} style={{ width: '48rem' }}>

                    <Card.Body >
                        <div className="cardHeader ">
                            <img className="svg" src="/assets/img/volume-up.svg" alt="" width="32" height="32" title="Bootstrap"></img>
                            <Card.Title className={'text1 mt-3 mr-1 d-flex'}> اطلاعیه ها - 1 </Card.Title>
                        </div>



                    </Card.Body>

                    {/* <Dropdown.Divider /> */}

                    <Card.Body className=' pb-2'>
                        <Card.Link className={'text2  pr-3  d-flex'} href="#">امکان ارسال درخواست مجوز ارزی به استان محل صدورکارتی تولیدی کارای تولیدی دارای جواز تاسیس</Card.Link>
                        <Dropdown.Divider />
                        <Card.Link className={'text2  pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل صدور کارتی تولیدی کارتی تولیدی دارای جواز تاسیس</Card.Link>

                        <Dropdown.Divider />
                        <Card.Link className={'text2  pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل صدورر کارتی تولیدی دارا کارتی تولیدی دارای جواز تاسیس</Card.Link>

                        <Dropdown.Divider />
                        <Card.Link className={'text2  pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل کارتی تولیدیصدور کاهای تولیدی دارای جواز تاسیس</Card.Link>

                        <Dropdown.Divider />
                        <Card.Link className={'text2  pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل کارتی تولیدیصدور کارای تولیدی دارای جواز تاسیس</Card.Link>

                        <div className={'d-flex pt-3 justify-content-center'}>
                            <button className={"justifyContent"}>
                                بایگانی                       </button>
                        </div>
                    </Card.Body>
                </Card>

                {/* /////////////////////// */}

                <Card className={'cardBorder  mt-5 mr-4'} style={{ width: '48rem' }}>

                    <Card.Body >
                        <div className="cardHeader">
                            <img className="svg" src="/assets/img/volume-up.svg" alt="" width="32" height="32" title="Bootstrap"></img>
                            <Card.Title className={'text1 mt-3 mr-1 d-flex'}> اطلاعیه ها - 2 </Card.Title>
                        </div>



                    </Card.Body>
                
                    {/* <Dropdown.Divider /> */}

                    <Card.Body className='pb-2'>
                        <Card.Link className={'text2 pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل صدور کارت کارتی تولیدی دارای جواز تاسیس</Card.Link>

                        <Dropdown.Divider />
                        <Card.Link className={'text2 pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل صدو کارتی تولیدی دارای جواز تاسیس</Card.Link>

                        <Dropdown.Divider />
                        <Card.Link className={'text2 pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل صدو کارتی تولیدی دارای جواز تاسیس</Card.Link>

                        <Dropdown.Divider />
                        <Card.Link className={'text2 pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل صدوکارتی تولیدی دارای جواز تاسیس</Card.Link>

                        <Dropdown.Divider />
                        <Card.Link className={'text2 pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل  کارتی تولیدی صدوردارای جواز تاسیس</Card.Link>

                        <div className={'d-flex pt-3 justify-content-center'}>
                            <button className={"justifyContent"}>
                                بایگانی
                        </button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            {/* <a >
                <Card className="cardBorder ml-4" style={{height:'23rem', width: '18rem' }}>
                    <Card.Img height="192" variant="top" src={Screenshot} />
                    <Card.Body>
                        <Card.Title className="HomeNavbar">همتا</Card.Title>
                        <Card.Text className="HomeNavbar">
                            امکان ارسال استان محل صدور کارت درخواست مجوز ارزی به استان مواحدهای تولیدی به دارای جواز تاسیس امکان  ارسال درخواست مجوز ارزی به   بازرگانی برای واحدهای تولیدی به دارای جواز تاسیس معرفی می گردد.
                            
                       </Card.Text>
                        <Card.Link href="#" className="d-flex justify-content-center">hamta.ntsw.ir</Card.Link>

                    </Card.Body>
                </Card>
            </a> */}

            {/* /////////////little Cards/////////////// */}
            {/* className="d-flex mr-4 mt-2" */}


            {/* <div className="mt-5">

                <Swiper {...params}>
                  <img src={logo11}></img>
                  
                </Swiper>

            </div> */}

            <div className="kh1">
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                />

            </div>

        </div>


    );
};
export default HomeCards;

{/* <Card className="cardBorder ml-4" style={{ width: '18rem' }}>
                   <Card.Img variant="top" height="192" src="/assets/img/logo192.png" />
                   <Card.Body >
                       <Card.Title className="d-flex">شماره1</Card.Title>
                       <Card.Text className="HomeNavbar">

                           امکان ارسال درخواست مجوز ارزی به استان محل صدور کارت بازرگانی برای واحدهای تولیدی دارای جواز تاسیس
                           امکان ارسال درخواست مجوز ارزی به استان محل صدور کارت بازرگانی برای واحدهای تولیدی دارای جواز تاسیس تغلعلا
                       </Card.Text>
                       <Card.Link href="#" className="d-flex justify-content-center">Card Link</Card.Link>

                   </Card.Body>
               </Card> */}
{/* ////////// */ }
{/* <Card className="cardBorder ml-4" style={{ width: '18rem' }}>
                   <Card.Img variant="top" height="192" src="/assets/img/logo192.png" />
                   <Card.Body>
                       <Card.Title className="d-flex">شماره 2</Card.Title>
                       <Card.Text className="HomeNavbar">
                           امکان ارسال درخواست مجوز ارزی به استان محل صدور کارت بازرگانی برای واحدهای تولیدی دارای جواز تاسیس
                           امکان ارسال درخواست مجوز ارزی به استان محل صدور کارت بازرگانی برای واحدهای تولیدی دارای جواز تاسیس تغلعلا
                       </Card.Text>
                       <Card.Link href="#" className="d-flex justify-content-center">Card Link</Card.Link>

                   </Card.Body>
               </Card> */}
{/* /////////// */ }
{/* <Card className="cardBorder ml-4" style={{ width: '18rem' }}>
                   <Card.Img height="192" variant="top" src="/assets/img/logo192.png" />
                   <Card.Body>
                       <Card.Title className="d-flex">شماره 3</Card.Title>
                       <Card.Text className="HomeNavbar">
                           امکان ارسال درخواست مجوز ارزی به استان محل صدور کارت بازرگانی برای واحدهای تولیدی دارای جواز تاسیس
                           امکان ارسال درخواست مجوز ارزی به استان محل صدور کارت بازرگانی برای واحدهای تولیدی دارای جواز تاسیس تغلعلا
                       </Card.Text>
                       <Card.Link href="#" className="d-flex justify-content-center">Card Link</Card.Link>

                   </Card.Body>
               </Card> */}
{/* ///////////// */ }
{/* <Card className=" cardBorder ml-4" style={{ width: '18rem' }}>
                   <Card.Img height="192" variant="top" src="/assets/img/logo192.png" />
                   <Card.Body>
                       <Card.Title className="d-flex">شماره 4</Card.Title>
                       <Card.Text className="HomeNavbar">
                           امکان ارسال درخواست مجوز ارزی به استان محل صدور کارت بازرگانی برای واحدهای تولیدی دارای جواز تاسیس
                           امکان ارسال درخواست مجوز ارزی به استان محل صدور کارت بازرگانی برای واحدهای تولیدی دارای جواز تاسیس تغلعلا
                       </Card.Text>
                       <Card.Link href="#" className="d-flex justify-content-center">Card Link</Card.Link>

                   </Card.Body>
               </Card> */}
{/* ////////////// */ }
{/* <Card className="cardBorder ml-4" style={{ width: '18rem' }}>
                   <Card.Img height="192" variant="top" src="/assets/img/logo192.png" />
                   <Card.Body>
                       <Card.Title className="d-flex">شماره 5</Card.Title>
                       <Card.Text className="HomeNavbar">
                           امکان ارسال درخواست مجوز ارزی به استان محل صدور کارت بازرگانی برای واحدهای تولیدی دارای جواز تاسیس
                           امکان ارسال درخواست مجوز ارزی به استان محل صدور کارت بازرگانی برای واحدهای تولیدی دارای جواز تاسیس تغلعلا
                       </Card.Text>
                       <Card.Link href="#" className="d-flex justify-content-center">Card Link</Card.Link>

                   </Card.Body>
               </Card> */}
{/* /////////////// */ }
{/* <Card className="cardBorder ml-4" style={{ width: '18rem' }}>
                   <Card.Img height="192" variant="top" src="/assets/img/logo192.png" />
                   <Card.Body>
                       <Card.Title className="HomeNavbar">شماره 6</Card.Title>
                       <Card.Text className="HomeNavbar">
                           امکان ارسال درخواست مجوز ارزی به استان محل صدور کارت بازرگانی برای واحدهای تولیدی دارای جواز تاسیس
                           امکان ارسال درخواست مجوز ارزی به استان محل صدور کارت بازرگانی برای واحدهای تولیدی دارای جواز تاسیس تغلعلا
                       </Card.Text>
                       <Card.Link href="#" className="d-flex justify-content-center">Card Link</Card.Link>

                   </Card.Body>
               </Card> */}
{/* ////////////// */ }
{/* <Card className="cardBorder ml-4" style={{ width: '18rem' }}>
                   <Card.Img variant="top" height="192" src="/assets/img/logo192.png" />
                   <Card.Body >
                       <Card.Title className="d-flex">شماره1</Card.Title>
                       <Card.Text>
                           Some quick example text to build on the card title and make up the bulk of
                           the card's content.
                       </Card.Text>

                   </Card.Body>
               </Card> */}
