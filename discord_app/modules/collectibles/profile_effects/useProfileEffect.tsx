// discord_app/modules/collectibles/profile_effects/useProfileEffect.tsx
import closure_2 from "../../../../_runtime/00019_noop.js";
import closure_3 from "../CollectiblesCategoryStore.tsx";
import closure_4 from "../CollectiblesPurchaseStore.tsx";
import { isProfileEffectRecord } from "../records/ProfileEffectRecord.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/collectibles/profile_effects/useProfileEffect.tsx");

export default function useProfileEffect(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_4];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => {
      if (null != closure_0) {
        const product = closure_1_3.getProduct(tmp);
        let first;
        if (product != null) {
          first = product.items[0];
        }
        if (closure_1_5(first)) {
          return product.items[0];
        } else {
          const purchase = closure_1_4.getPurchase(tmp);
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
    },
  );
  dependencyMap = tmp2;
  const items1 = [null != arg0 && null == stateFromStores, arg0];
  const effect = React.useEffect(() => {
    if (table) {
      const result = callback(table[5]).maybeFetchCollectiblesProduct(callback);
      const obj = callback(table[5]);
    }
  }, items1);
  return stateFromStores;
}
