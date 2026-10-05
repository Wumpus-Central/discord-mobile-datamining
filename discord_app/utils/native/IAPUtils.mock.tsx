// discord_app/utils/native/IAPUtils.mock.tsx
import billing_iapProducts from "../../modules/billing/native/iapProducts.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  loadProducts() {
    return Promise.resolve(billing_iapProducts.copiedIAPProducts);
  },
  purchaseProduct() {
    const error = new Error("IAPUtils is mocked \u2014 purchases cannot be completed in this build.");
    return reject(error);
  },
  canMakePayments() {
    return Promise.resolve(true);
  },
  restorePurchases() {
    return Promise.resolve([]);
  },
  fetchStoreFront() {
    return Promise.resolve({ country: "US", currency: "usd" });
  },
};
const result = size.fileFinishedImporting("utils/native/IAPUtils.mock.tsx");

export default obj;
