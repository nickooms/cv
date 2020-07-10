import React from 'react';
import { Sidenav, Nav, Dropdown, Icon } from 'rsuite';

const { Body, Header } = Sidenav;
const { Item } = Nav;
const { Item: Menu, Menu: SubMenu } = Dropdown;

const SideNav = ({ ...props }) => {
  // defaultOpenKeys={['r&d', 'skills', 'experience']}
  return (
    <Sidenav {...props} appearance="inverse">
      <Header>
        <Header style={{ color: 'white' }}>
          <center>
            <h2>Nick Ooms</h2>
            <h3>Curriculum Vitae</h3>
          </center>
        </Header>
      </Header>
      <Body>
        <Nav>
          <Item eventKey="contact-info" active icon={<Icon icon="vcard" />}>
            Contact Info
          </Item>
          <Item eventKey="summary" icon={<Icon icon="dashboard" />}>
            Summary
          </Item>
          <Item eventKey="languages">Languages</Item>
          <Dropdown eventKey="r&d" title="Research & Development" icon={<Icon icon="magic" />}>
            <Menu eventKey="r&d/itea-lascot">ITEA LASCOT</Menu>
            <Menu eventKey="r&d/iwt-serket">IWT SERKET</Menu>
            <Menu eventKey="r&d/genesis-fp7">GENESIS FP7</Menu>
          </Dropdown>
          <Dropdown eventKey="skills" title="Skills" icon={<Icon icon="magic" />}>
            <Menu eventKey="skills/itea-lascot">Development Languages</Menu>
            <Menu eventKey="skills/iwt-serket">Frameworks & Technologies</Menu>
            <Menu eventKey="skills/databases">Databases</Menu>
            <Menu eventKey="skills/operating-systems">Operating Systems</Menu>
          </Dropdown>
          <Dropdown eventKey="experience" title="Experience" icon={<Icon icon="gear-circle" />}>
            <SubMenu eventKey="experience/neanex" title="Neanex">
              <Menu eventKey="experience/neanex/robovision-3d-labeller">
                Robovision 3D labeller
              </Menu>
              <Menu eventKey="experience/neanex/neanex-bim-app">Neanex BIM application</Menu>
            </SubMenu>
            <Menu eventKey="experience/slickss">Slickss</Menu>
            <Menu eventKey="experience/freelance&open-source-projects">
              Freelance & Open Source Projects
            </Menu>
            <SubMenu eventKey="experience/cronos" title="Cronos / 4C">
              <Menu eventKey="experience/cronos/agiv">AGIV</Menu>
              <Menu eventKey="experience/cronos/itineris">Itineris</Menu>
              <Menu eventKey="experience/cronos/arcelor-mital-logistics">
                Arcelor Mital Logistics
              </Menu>
              <Menu eventKey="experience/cronos/kzenlabs">kZenLabs</Menu>
              <Menu eventKey="experience/cronos/genesis-fp7">GENESIS FP7</Menu>
            </SubMenu>
            <Menu eventKey="experience/business-solutions">Business Solutions</Menu>
            <Menu eventKey="experience/solvay-nv">Solvay NV</Menu>
          </Dropdown>
        </Nav>
      </Body>
    </Sidenav>
  );
};

export default SideNav;
