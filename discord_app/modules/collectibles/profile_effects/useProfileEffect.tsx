// === Module 8969: useProfileEffect ===

// Module 8969 (useProfileEffect)
import noop from "noop" /* 19 */;
import updateCategoriesAndProducts from "updateCategoriesAndProducts" /* 5301 */;
import map from "map" /* 5324 */;
import { isProfileEffectRecord } from "fromServer" /* 5307 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/collectibles/profile_effects/useProfileEffect.tsx");

export default function useProfileEffect(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_4];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    if (null != closure_0) {
      const product = closure_1_3.getProduct(closure_0);
      let first;
      if (product != null) {
        first = product.items[0];
      }
      if (isProfileEffectRecord(first)) {
        return product.items[0];
      } else {
        const purchase = closure_1_4.getPurchase(closure_0);
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
  const effect = React.useEffect(() => {
    if (table) {
      const result = callback(table[5]).maybeFetchCollectiblesProduct(callback);
      const obj = callback(table[5]);
    }
  }, items1);
  return stateFromStores;
};