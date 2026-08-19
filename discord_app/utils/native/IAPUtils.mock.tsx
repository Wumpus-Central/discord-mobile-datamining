// === Module 7727: items ===

// Module 7727 (items)
import obj132 from "obj132" /* 2 */;
import items from "items" /* 7728 */;

const result = obj132.fileFinishedImporting("utils/native/IAPUtils.mock.tsx");

export default {
  loadProducts() {
    return Promise.resolve(items.copiedIAPProducts);
  },
  purchaseProduct() {
    error = new Error("IAPUtils is mocked \u2014 purchases cannot be completed in this build.");
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