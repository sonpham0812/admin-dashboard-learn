import React, { useState } from "react";
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

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
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
    <div className="h-screen absolute top-0 left-0">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={80}
        style={{
          background: "transparent",
        }}
      >
        <div className="flex flex-col h-full">
          {/* Logo + Toggle */}
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full text-white font-bold shadow"></div>
              {!collapsed && (
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-blue-600">
                    Falcon
                  </span>
                  <span className="text-xs text-gray-400">Admin panel</span>
                </div>
              )}
            </div>
            <Button
              type="text"
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              className="!text-gray-600"
            />
          </div>

          {/* Menu */}
          <div className="flex-1 overflow-auto px-2 py-4">
            <Menu
              mode="inline"
              inlineCollapsed={collapsed}
              selectedKeys={[selectedKey]}
              defaultOpenKeys={["ecommerce"]}
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
