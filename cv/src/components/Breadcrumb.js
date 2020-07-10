import { Breadcrumb, Icon } from 'rsuite';

const NavLink = (props) => <Breadcrumb.Item componentClass={Link} {...props} />;

export default () => (
  <Breadcrumb separator={<Icon icon="angle-right" />}>
    <NavLink href="/en/">Home</NavLink>
    <NavLink href="/en/components/overview">Components</NavLink>
    <NavLink active>Breadcrumb</NavLink>
  </Breadcrumb>
);
