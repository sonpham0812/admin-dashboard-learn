import axiosClient from "../axiosClient";

export const productServices = {
  getProducts: (params) => axiosClient.get("products", { params }),
};
