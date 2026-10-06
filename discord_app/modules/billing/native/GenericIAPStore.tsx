// === Module 17604: GenericIAPStore ===

// Module 17604 (GenericIAPStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ProductIds from "ProductIds" /* 6926 */;
import size from "module_2" /* 2 */;

let c3 = null;
let canMakePayments = false;
let storeFront = null;
const Store = get_initializedDefault.Store;
class GenericIAPStore extends Store {
  canMakePurchase() {
    return canMakePayments;
  }
  genericProductsLoaded() {
    let tmp = null != c3;
    if (tmp) {
      const arr = _modDef12;
      tmp = arr.filter(c3, (identifier) => {
        const GenericProductIds = ProductIds.GenericProductIds;
        return GenericProductIds.includes(identifier.identifier);
      }).length === ProductIds.GenericProductIds.length;
    }
    return tmp;
  }
  getProducts() {
    return c3;
  }
  getStoreFront() {
    return storeFront;
  }
}
const prototype = GenericIAPStore.prototype;
GenericIAPStore.displayName = "GenericIAPStore";
const obj = {
  IAP_LOAD_GENERIC_PRODUCTS: function initGenericProducts(arg0) {
    ({ products: c3, storeFront } = arg0);
  },
  GENERIC_IAP_INIT_CONNECTION: function genericIapInitConnection(canMakePayments) {
    canMakePayments = canMakePayments.canMakePayments;
  },
  GENERIC_IAP_SET_STORE_FRONT: function setStoreFront(storeFront) {
    storeFront = storeFront.storeFront;
  }
};
const genericIAPStore = new GenericIAPStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/billing/native/GenericIAPStore.tsx");

export default genericIAPStore;