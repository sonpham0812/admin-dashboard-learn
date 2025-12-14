import { Layout, Menu, Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  ShopOutlined,
  UnorderedListOutlined,
  AppstoreOutlined,
  ProfileOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

export default function Sidebar({ isCollapsed }) {
  const location = useLocation();

  const selectedKey = (() => {
    const p = location?.pathname || "/";
    if (p.includes("/product-grid")) return "/product-grid";
    if (p.includes("/product-list")) return "/product-list";
    if (p.includes("/product-details")) return "/product-details";
    if (p.includes("/add-product")) return "/add-product";
    if (p.includes("/ecommerce")) return "/ecommerce";
    if (p.includes("/dashboard")) return "/dashboard";
    return "/dashboard";
  })();

  return (
    <div className="h-screen fixed top-16">
      <Sider
        trigger={null}
        collapsible
        collapsed={isCollapsed}
        collapsedWidth={80}
        style={{
          background: "transparent",
        }}
      >
        <div className="flex flex-col h-full">
          {/* Menu */}
          <div className="flex-1 overflow-auto py-4">
            <Menu
              mode="inline"
              inlineCollapsed={isCollapsed}
              selectedKeys={[selectedKey]}
              defaultOpenKeys={["product"]}
              style={{ borderRight: "none", backgroundColor: "transparent" }}
            >
              <Item key="/dashboard" icon={<DashboardOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
              </Item>
              <SubMenu
                key="product"
                icon={<AppstoreOutlined />}
                title="Product"
              >
                <Item key="/product-list" icon={<UnorderedListOutlined />}>
                  <Link to="/product-list">Product list</Link>
                </Item>
                <Item key="/product-grid" icon={<AppstoreOutlined />}>
                  <Link to="/product-grid">Product grid</Link>
                </Item>
                <Item key="/product-details" icon={<ProfileOutlined />}>
                  <Link to="/product-details">Product details</Link>
                </Item>
                <Item key="/add-product" icon={<PlusOutlined />}>
                  <Link to="/add-product">Add product</Link>
                </Item>
              </SubMenu>
            </Menu>
          </div>
        </div>
      </Sider>
    </div>
  );
}
