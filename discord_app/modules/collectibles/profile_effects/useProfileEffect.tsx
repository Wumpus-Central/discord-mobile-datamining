// === Module 8226: useProfileEffect ===

// Module 8226 (useProfileEffect)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7541 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7542 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7558 */;

require = fn;
const isProfileEffectRecord = fn(7548).isProfileEffectRecord;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_effects/useProfileEffect.tsx");

export default function useProfileEffect(arg0) {
  _require = arg0;
  const items = [CollectiblesCategoryStore, CollectiblesPurchaseStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      const product = CollectiblesCategoryStore.getProduct(closure_0);
      let first;
      if (product != null) {
        first = product.items[0];
      }
      if (isProfileEffectRecord(first)) {
        return product.items[0];
      } else {
        const purchase = CollectiblesPurchaseStore.getPurchase(closure_0);
        let first1;
        if (purchase != null) {
          first1 = purchase.items[0];
        }
        let first2;
        if (isProfileEffectRecord(first1)) {
          first2 = purchase.items[0];
        }
        return first2;
      }
    }
  });
  dependencyMap = tmp2;
  const items1 = [null != arg0 && null == stateFromStores, arg0];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      const result = CollectiblesActionCreators.maybeFetchCollectiblesProduct(closure_0);
    }
  }, items1);
  return stateFromStores;
};