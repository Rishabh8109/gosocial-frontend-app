import React , {createRef  ,useState} from 'react';
import styles from "../styles/Story.module.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import Story from "./Story";

function Stories() {
  const scrollRef = createRef();
  const arrowRef = createRef();
  const [scroll, setscroll] = useState(200);

  const avatars = [
    {
      img: "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
      username: "Pang Fang sui",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4isIlWxOex2qVPSF3mvsmsByxC0Mq0U8M_UrwRFPUkSvbbg5geYOxfT--ZfOmlu-Om0&usqp=CAU",
      username: "Armstrong",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8EfwJr3oTkP_iCisO63afTY7BZLbzVFxeVHVGE5gc2BtEjZsCgyhitu8FmdEAi_cSbo&usqp=CAU",
      username: "Russel Hicks",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvn3-4gDtCYay8vFPqaoDhz28rR6aUa_sH2P-pT2UgirXmxorNGXOOKO11eyzJVVQ4Ls&usqp=CAU",
      username: "Russel",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4isIlWxOex2qVPSF3mvsmsByxC0Mq0U8M_UrwRFPUkSvbbg5geYOxfT--ZfOmlu-Om0&usqp=CAU",
      username: "Armstrong",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8EfwJr3oTkP_iCisO63afTY7BZLbzVFxeVHVGE5gc2BtEjZsCgyhitu8FmdEAi_cSbo&usqp=CAU",
      username: "Russel Hicks",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvn3-4gDtCYay8vFPqaoDhz28rR6aUa_sH2P-pT2UgirXmxorNGXOOKO11eyzJVVQ4Ls&usqp=CAU",
      username: "Russel",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4isIlWxOex2qVPSF3mvsmsByxC0Mq0U8M_UrwRFPUkSvbbg5geYOxfT--ZfOmlu-Om0&usqp=CAU",
      username: "Armstrong",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8EfwJr3oTkP_iCisO63afTY7BZLbzVFxeVHVGE5gc2BtEjZsCgyhitu8FmdEAi_cSbo&usqp=CAU",
      username: "Russel Hicks",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvn3-4gDtCYay8vFPqaoDhz28rR6aUa_sH2P-pT2UgirXmxorNGXOOKO11eyzJVVQ4Ls&usqp=CAU",
      username: "Russel",
    },
    {
      img: "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
      username: "Pang Fang sui",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4isIlWxOex2qVPSF3mvsmsByxC0Mq0U8M_UrwRFPUkSvbbg5geYOxfT--ZfOmlu-Om0&usqp=CAU",
      username: "Armstrong",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8EfwJr3oTkP_iCisO63afTY7BZLbzVFxeVHVGE5gc2BtEjZsCgyhitu8FmdEAi_cSbo&usqp=CAU",
      username: "Russel Hicks",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvn3-4gDtCYay8vFPqaoDhz28rR6aUa_sH2P-pT2UgirXmxorNGXOOKO11eyzJVVQ4Ls&usqp=CAU",
      username: "Russel",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4isIlWxOex2qVPSF3mvsmsByxC0Mq0U8M_UrwRFPUkSvbbg5geYOxfT--ZfOmlu-Om0&usqp=CAU",
      username: "Armstrong",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8EfwJr3oTkP_iCisO63afTY7BZLbzVFxeVHVGE5gc2BtEjZsCgyhitu8FmdEAi_cSbo&usqp=CAU",
      username: "Russel Hicks",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvn3-4gDtCYay8vFPqaoDhz28rR6aUa_sH2P-pT2UgirXmxorNGXOOKO11eyzJVVQ4Ls&usqp=CAU",
      username: "Russel",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4isIlWxOex2qVPSF3mvsmsByxC0Mq0U8M_UrwRFPUkSvbbg5geYOxfT--ZfOmlu-Om0&usqp=CAU",
      username: "Armstrong",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8EfwJr3oTkP_iCisO63afTY7BZLbzVFxeVHVGE5gc2BtEjZsCgyhitu8FmdEAi_cSbo&usqp=CAU",
      username: "Russel Hicks",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvn3-4gDtCYay8vFPqaoDhz28rR6aUa_sH2P-pT2UgirXmxorNGXOOKO11eyzJVVQ4Ls&usqp=CAU",
      username: "Russel",
    },
  ];


  const scrollForwardHandler = () => {
     scrollRef.current.scroll({
       top : 0,
       left : scrollRef.current.scrollLeft + 200,
       behavior: 'smooth'
     });
      arrowRef.current.style.display = "block";
    }

  const scrollBackHandler = () => {
    scrollRef.current.scroll({
      top : 0,
      left : -scrollRef.current.scrollX,
      behavior: 'smooth'
    });
  } 

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <p>
          <strong>Some Stories</strong>
        </p>
        <BiDotsHorizontalRounded  />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.arrowBack} onClick={scrollBackHandler} ref={arrowRef}>
          <IoIosArrowBack />
         </div>
        <ul ref={scrollRef}>
          <li>
            <FiPlus className={styles.addIcon} /> <p>Create Your Story</p>
          </li>
          {avatars.map(({ img, username }, index) => (
            <Story img={img} username={username} key={index} />
          ))}
          <li></li>
        </ul>
        <div className={styles.arrowForward} onClick={scrollForwardHandler}>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}

export default Stories;
