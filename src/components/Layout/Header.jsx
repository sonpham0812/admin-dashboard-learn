import { BellFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Input } from "antd";

export default function Header() {
    return (
        <div className="flex flex-row justify-between items-center border border-solid border-gray-400 bg-gray-50 p-4">
            <Input.Search
                placeholder="Search anything..."
                allowClear
                enterButton
                style={{ width: 256 }}
            />
            <div className="flex flex-row gap-4 items-center">
                <BellFilled style={{ fontSize: 32 }} />
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </div>
        </div>
    )
}