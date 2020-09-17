import React, { useContext } from 'react'
import { openModal, closeModal } from '@redq/reuse-modal'
import NavbarWrapper from 'components/Navbar'
import Drawer from 'components/Drawer'
import Button from 'components/Button'
import Logo from 'components/UIElements/Logo'
import ScrollSpyMenu from 'components/ScrollSpyMenu'
import { Container } from './navbar.style'
import SearchPanel from '../SearchPanel'
import LoginModal from '../LoginModal'
import CopyrightSection from '../CopyrightsSection'
import { Search, X, Plus, Menu, User } from 'react-feather'
import { DrawerContext } from 'contexts/DrawerContext'
import data from 'common/data'
// Default close button for modal
const CloseModalButton = () => (
  <Button
    className='modalCloseBtn'
    variant='fab'
    onClick={() => closeModal()}
    icon={<X />}
  />
)
// Alt close button for modal
const CloseModalButtonAlt = () => (
  <Button
    className='modalCloseBtn alt'
    variant='fab'
    onClick={() => closeModal()}
    icon={<Plus />}
  />
)
const Navbar = ({ navbarStyle, logoStyle }) => {
  const { state, dispatch } = useContext(DrawerContext)
  // Search modal handler
  const handleSearchModal = () => {
    openModal({
      config: {
        className: 'search-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: { transform: 'translateY(100px)' },
        animationTo: { transform: 'translateY(0)' },
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: SearchPanel,
      componentProps: {},
      closeComponent: CloseModalButtonAlt,
      closeOnClickOutside: false,
    })
  }
  // Authentication modal handler
  const handleLoginModal = () => {
    openModal({
      config: {
        className: 'login-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: { transform: 'translateY(100px)' },
        animationTo: { transform: 'translateY(0)' },
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false,
    })
  }
  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    })
  }
  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo href='#' logoSrc={'/logo-1-black.png'} title='Codehole' />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            variant='textButton'
            onClick={handleSearchModal}
            icon={<Search />}
            aria-label='search'
          />

          <Drawer
            width='420px'
            placement='right'
            drawerHandler={<Menu />}
            open={state.isOpen}
            toggleHandler={toggleHandler}
          >
            <ScrollSpyMenu
              menuItems={data.menuItems}
              drawerClose={true}
              offset={-100}
            />
            <CopyrightSection />
          </Drawer>
        </div>
      </Container>
    </NavbarWrapper>
  )
}
export default Navbar
