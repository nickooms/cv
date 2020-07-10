import React from 'react';
import { Navbar, Nav, Icon /* , Dropdown */ } from 'rsuite';

const { Body } = Navbar;
const { Item } = Nav;
// const { Item: Option } = Dropdown;

const NavBar = ({ onDrawer, onSelect, activeKey, ...props }) => (
  <Navbar {...props} appearance="inverse">
    <Body>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Item icon={<Icon icon="bars" />} onClick={onDrawer} />
        <Item eventKey="2" icon={<Icon icon="home" />}>
          Home
        </Item>
        {/* <Item eventKey="3">News</Item>
        <Item eventKey="4">Products</Item>
        <Dropdown title="About">
          <Option eventKey="5">Company</Option>
          <Option eventKey="6">Team</Option>
          <Option eventKey="7">Contact</Option>
        </Dropdown> */}
      </Nav>
      <Nav pullRight>
        <Item icon={<Icon icon="cog" />}>Settings</Item>
      </Nav>
    </Body>
  </Navbar>
);

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeKey: null,
    };
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const { onDrawer } = this.props;
    const { activeKey } = this.state;
    return <NavBar onDrawer={onDrawer} activeKey={activeKey} onSelect={this.handleSelect} />;
  }
}

export default Demo;
