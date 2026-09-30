// === Module 10738: iapProducts ===

// Module 10738 (iapProducts)
import billing_iapProducts from "billing/iapProducts" /* 10739 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/IAPUtils.mock.tsx");

export default {
  loadProducts() {
    return Promise.resolve(billing_iapProducts.copiedIAPProducts);
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