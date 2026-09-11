// === Module 7312: GenericIAPStore ===

// Module 7312 (GenericIAPStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ProductIds from "ProductIds" /* 7313 */;

require = fn;
let c3 = null;
let canMakePayments = false;
let storeFront = null;
const Store = initializeDefault.Store;
class GenericIAPStore extends Store {
}
const prototype = GenericIAPStore.prototype;
prototype["canMakePurchase"] = function canMakePurchase() {
  return canMakePayments;
};
prototype["genericProductsLoaded"] = function genericProductsLoaded() {
  let tmp = null != c3;
  if (tmp) {
    tmp = _modDef12.filter(c3, (identifier) => {
      const GenericProductIds = ProductIds.GenericProductIds;
      return GenericProductIds.includes(identifier.identifier);
    }).length === ProductIds.GenericProductIds.length;
  }
  return tmp;
};
prototype["getProducts"] = function getProducts() {
  return c3;
};
prototype["getStoreFront"] = function getStoreFront() {
  return storeFront;
};
GenericIAPStore.displayName = "GenericIAPStore";
const genericIAPStore = new GenericIAPStore(DispatcherDefault, {
  IAP_LOAD_GENERIC_PRODUCTS: function initGenericProducts(arg0) {
    ({ products: c3, storeFront } = arg0);
  },
  GENERIC_IAP_INIT_CONNECTION: function genericIapInitConnection(canMakePayments) {
    canMakePayments = canMakePayments.canMakePayments;
  },
  GENERIC_IAP_SET_STORE_FRONT: function setStoreFront(storeFront) {
    storeFront = storeFront.storeFront;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/GenericIAPStore.tsx");

export default genericIAPStore;