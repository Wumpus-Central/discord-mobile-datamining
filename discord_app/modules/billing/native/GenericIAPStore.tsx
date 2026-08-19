// === Module 5321: isGenericIapConnected ===

// Module 5321 (isGenericIapConnected)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import SubscriptionPlans from "SubscriptionPlans" /* 5322 */;

require = arg1;
let c3 = null;
let c4 = false;
let c5 = null;
const Store = initializeDefault.Store;
class GenericIAPStore extends Store {
}
const prototype = GenericIAPStore.prototype;
prototype["isGenericIapConnected"] = function isGenericIapConnected() {
  return c4;
};
prototype["genericProductsLoaded"] = function genericProductsLoaded() {
  let tmp = null != c3;
  if (tmp) {
    tmp = applyDefault.filter(c3, (identifier) => {
      const GenericProductIds = callback(table[2]).GenericProductIds;
      return GenericProductIds.includes(identifier.identifier);
    }).length === SubscriptionPlans.GenericProductIds.length;
    const arr = applyDefault;
  }
  return tmp;
};
prototype["getProducts"] = function getProducts() {
  return c3;
};
prototype["getStoreFront"] = function getStoreFront() {
  return c5;
};
GenericIAPStore.displayName = "GenericIAPStore";
const genericIAPStore = new GenericIAPStore(dispatcherDefault, {
  IAP_LOAD_GENERIC_PRODUCTS: function initGenericProducts(arg0) {
    ({ products: c3, storeFront: c5 } = arg0);
  },
  GENERIC_IAP_INIT_CONNECTION: function genericIapInitConnection(connected) {
    connected = connected.connected;
  },
  GENERIC_IAP_INIT_CONNECTION_FAILED: function genericIapInitConnectionFailed() {
    c4 = false;
  },
  GENERIC_IAP_END_CONNECTION: function genericIapEndConnection() {
    c4 = false;
  },
  GENERIC_IAP_SET_STORE_FRONT: function setStoreFront(storeFront) {
    storeFront = storeFront.storeFront;
  }
});
const result = require("set").fileFinishedImporting("modules/billing/native/GenericIAPStore.tsx");

export default genericIAPStore;