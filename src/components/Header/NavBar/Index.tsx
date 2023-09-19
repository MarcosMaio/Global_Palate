import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './NavBar.css';
import { ReactComponent as Logo} from '../../../assets/Logo.svg';
import { AiOutlineCloseCircle} from "react-icons/ai";


interface NavBarProps {
  setModalIsOpen: (isOpen: boolean) => void;
  modalIsOpen: boolean;
}

export default function NavBar({setModalIsOpen, modalIsOpen}: NavBarProps) {
      

    const [navBarCloseEffect, setNavBarCloseEffect] = useState<boolean>(false);

    const closeModal = () => {
        setNavBarCloseEffect(true);
        setTimeout(() => {
          setModalIsOpen(false);
          setNavBarCloseEffect(false); 
        }, 2000); 
    }
    
    
    useEffect(() => {
        if (modalIsOpen) {
          setNavBarCloseEffect(false); 
        }
      }, [modalIsOpen]);

    const modalStyles = {
        content: {
            
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          
        },
      };


    return (
      <div className={'Nav_Bar_Container_PopUp'}>  
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}
          className={navBarCloseEffect ? 'Nav_Bar_Modal closing' : 'Nav_Bar_Modal'}
          overlayClassName="custom-overlay"
        >
          <div className='Nav_Bar_Header'>
              <AiOutlineCloseCircle className='Nav_Bar_Close_Button' onClick={closeModal} />
                  <div className='Nav_Bar_Logo_Container'>
                      <Logo className='Nav_Bar_Logo' />
                      <div className='Nav_Bar_Border_Separation'></div>
                  </div>
                  <div>
                    <nav className='Nav_Bar_Navigation'>
                        <ul>
                          <li>
                            <span>Home</span>    
                          </li>
                          <div className='Nav_Bar_Border_Separation'></div>
                          <li>
                            <span>Menus</span> 
                          </li>
                          <div className='Nav_Bar_Border_Separation'></div>
                          <li>
                            <span>About Us</span>
                          
                          </li>
                          <div className='Nav_Bar_Border_Separation'></div>
                          <li>
                            <span>Our Chefs</span>
                          
                          </li>
                          <div className='Nav_Bar_Border_Separation'></div>
                          <li>
                            <span>Contact</span>
                            
                          </li>
                          <div className='Nav_Bar_Border_Separation'></div>
                        </ul>
                    </nav>

                      <div className='Nav_Bar_Restaurant_Information' >
                          <h2>Visit Us</h2>
                          <p>Cavendish St, Cartmel, Grange-over-Sands LA11 6QA, Uk</p>
                          <p>Open 8.00am - 23:00pm</p>
                          <p>GlobalPalate@gmail.com</p>
                      </div>
                  </div>
            </div>
        </Modal>
      </div>
    );
  }

