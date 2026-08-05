// discord_app/utils/native/IAPUtils.mock.tsx
import { items } from "../../modules/billing/native/iapProducts.tsx";
const result = require("set").fileFinishedImporting("utils/native/IAPUtils.mock.tsx");

export default {
  loadProducts() {
    return Promise.resolve(items /* items */.copiedIAPProducts);
  },
  purchaseProduct() {
    const error = new Error("IAPUtils is mocked \u2014 purchases cannot be completed in this build.");
    return Promise.reject(error);
  },
  canMakePayments() {
    return Promise.resolve(true);
  },
  restorePurchases() {
    return Promise.resolve([]);
  },
  fetchStoreFront() {
    return Promise.resolve({ country: "US", currency: "usd" });
  }
};