import React, { useState } from "react";
import { Input, Select, Upload, Button, Form, InputNumber, Card } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export default function AddProduct() {
  const [images, setImages] = useState([]);

  const handleUpload = ({ fileList }) => {
    setImages(fileList);
  };

  const categories = [
    { label: "Computer & Accessories", value: "computer" },
    { label: "Smartphone", value: "smartphone" },
    { label: "Tablet", value: "tablet" },
    { label: "Camera", value: "camera" },
  ];

  const brands = [
    { label: "Apple", value: "apple" },
    { label: "Samsung", value: "samsung" },
    { label: "Dell", value: "dell" },
    { label: "Lenovo", value: "lenovo" },
  ];

  const onFinish = (values) => {
    console.log("Submitted: ", values);
  };

  return (
    <div className="p-10 max-w-5xl ml-auto min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-gray-800 text-center">
        Add Product
      </h1>

      <Card className="shadow-xl rounded-2xl p-6">
        <Form
          layout="vertical"
          onFinish={onFinish}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <Form.Item
            name="name"
            label="Product Name"
            rules={[{ required: true }]}
            className="col-span-1"
          >
            <Input size="large" placeholder="Enter product name" />
          </Form.Item>

          <Form.Item
            name="brand"
            label="Brand"
            rules={[{ required: true }]}
            className="col-span-1"
          >
            <Select size="large" options={brands} placeholder="Select brand" />
          </Form.Item>

          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true }]}
            className="col-span-1"
          >
            <Select
              size="large"
              options={categories}
              placeholder="Select category"
            />
          </Form.Item>

          <Form.Item
            name="stock"
            label="Stock Quantity"
            rules={[{ required: true }]}
            className="col-span-1"
          >
            <InputNumber
              size="large"
              className="w-full"
              min={0}
              placeholder="Enter stock quantity"
            />
          </Form.Item>

          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true }]}
            className="col-span-1"
          >
            <InputNumber
              size="large"
              className="w-full"
              min={0}
              placeholder="Enter price"
            />
          </Form.Item>

          <Form.Item
            name="discount"
            label="Discount (%)"
            className="col-span-1"
          >
            <InputNumber
              size="large"
              className="w-full"
              min={0}
              max={100}
              placeholder="Enter discount"
            />
          </Form.Item>

          <Form.Item
            name="description"
            label="Product Description"
            rules={[{ required: true }]}
            className="col-span-1 md:col-span-2"
          >
            <TextArea rows={4} placeholder="Describe the product" />
          </Form.Item>

          <Form.Item
            label="Product Images"
            className="col-span-1 md:col-span-2"
          >
            <Upload
              listType="picture-card"
              multiple
              fileList={images}
              onChange={handleUpload}
              beforeUpload={() => false}
            >
              {images.length < 8 && (
                <div className="text-center text-gray-600">
                  <UploadOutlined />
                  <div>Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>

          <div className="col-span-1 md:col-span-2 flex justify-center mt-6">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="px-10 py-5 text-lg rounded-xl shadow"
            >
              Add Product
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
