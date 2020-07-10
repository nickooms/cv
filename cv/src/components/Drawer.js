import React, { useState } from 'react';
import { ButtonToolbar, Button, Drawer } from 'rsuite';
import SideNav from './SideNav';
import NavBar from './NavBar';

const Demo = () => {
  const [show, setShow] = useState(true);
  const close = () => void setShow(false);
  const toggleDrawer = () => void setShow(true);
  return (
    <>
      <NavBar onDrawer={toggleDrawer} />
      <ButtonToolbar>
        <Button onClick={toggleDrawer}>Open</Button>
      </ButtonToolbar>
      <Drawer placement="left" size="xs" show={show} onHide={close}>
        <SideNav />
      </Drawer>
    </>
  );
};

export default Demo;
