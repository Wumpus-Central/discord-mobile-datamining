import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
// discord_app/modules/collectibles/profile_effects/useProfileEffect.tsx
import noop from "noop";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import map from "map";
import { isProfileEffectRecord } from "fromServer";

const require = arg1;
let result = require("map").fileFinishedImporting("modules/collectibles/profile_effects/useProfileEffect.tsx");

export default function useProfileEffect(arg0) {
  const _require = arg0;
  const items = [updateCategoriesAndProducts, map];
  const stateFromStores = _initialize.useStateFromStores(items, () => {
    if (null != closure_0) {
      const product = outer1_3.getProduct(tmp);
      let first;
      if (product != null) {
        first = product.items[0];
      }
      if (outer1_5(first)) {
        return product.items[0];
      } else {
        const purchase = outer1_4.getPurchase(tmp);
        let first1;
        if (purchase != null) {
          first1 = purchase.items[0];
        }
        let first2;
        if (tmp4(first1)) {
          first2 = purchase.items[0];
        }
        return first2;
      }
    }
  });
  const dependencyMap = tmp2;
  const items1 = [null != arg0 && null == stateFromStores, arg0];
  const effect = React.useEffect(() => {
    if (tmp2) {
      const result = callback(tmp2[5]).maybeFetchCollectiblesProduct(callback);
      const obj = callback(tmp2[5]);
    }
  }, items1);
  return stateFromStores;
};