import { Store } from "initialize";

const require = arg1;
let c3 = null;
let c4 = false;
let c5 = null;
class GenericIAPStore extends Store {
}
const prototype = GenericIAPStore.prototype;
prototype["isGenericIapConnected"] = function isGenericIapConnected() {
  return c4;
};
prototype["genericProductsLoaded"] = function genericProductsLoaded() {
  let tmp = null != c3;
  if (tmp) {
    tmp = importDefault(12).filter(c3, (identifier) => {
      const GenericProductIds = callback(table[2]).GenericProductIds;
      return GenericProductIds.includes(identifier.identifier);
    }).length === require(5741) /* SubscriptionPlans */.GenericProductIds.length;
    const arr = importDefault(12);
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
const genericIAPStore = new GenericIAPStore(require("dispatcher"), {
  IAP_LOAD_GENERIC_PRODUCTS: function initGenericProducts(arg0) {
    let c3;
    let c5;
    ({ products: c3, storeFront: c5 } = arg0);
  },
  GENERIC_IAP_INIT_CONNECTION: function genericIapInitConnection(connected) {
    connected = connected.connected;
  },
  GENERIC_IAP_INIT_CONNECTION_FAILED: function genericIapInitConnectionFailed() {
    let c4 = false;
  },
  GENERIC_IAP_END_CONNECTION: function genericIapEndConnection() {
    let c4 = false;
  },
  GENERIC_IAP_SET_STORE_FRONT: function setStoreFront(storeFront) {
    storeFront = storeFront.storeFront;
  }
});
const result = require("SubscriptionPlans").fileFinishedImporting("modules/billing/native/GenericIAPStore.tsx");

export default genericIAPStore;