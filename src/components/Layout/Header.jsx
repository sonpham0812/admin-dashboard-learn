import { BellFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Input } from "antd";

export default function Header() {
  return (
    <div className="sticky top-0 flex flex-row justify-end">
      <div className="flex flex-row justify-between items-center p-4 w-[calc(100%-200px)]">
        <Input.Search
          placeholder="Search anything..."
          allowClear
          enterButton
          style={{ width: 256 }}
        />
        <div className="flex flex-row gap-4 items-center">
          <BellFilled style={{ fontSize: 32 }} />
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
        </div>
      </div>
    </div>
  );
}
