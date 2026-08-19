// discord_app/modules/collectibles/profile_frames/hooks/useProfileFrame.tsx
import updateCategoriesAndProducts from "../../CollectiblesCategoryStore.tsx";
import map from "../../CollectiblesPurchaseStore.tsx";
import { isProfileFrameRecord } from "../../records/ProfileFrameRecord.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useProfileFrame.tsx");

export default function useProfileFrame(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (null != closure_0) {
      const product = closure_1_2.getProduct(closure_0);
      let first;
      if (product != null) {
        first = product.items[0];
      }
      if (isProfileFrameRecord(first)) {
        return product.items[0];
      } else {
        const purchase = closure_1_3.getPurchase(closure_0);
        let first1;
        if (purchase != null) {
          first1 = purchase.items[0];
        }
        let first2;
        if (isProfileFrameRecord(first1)) {
          first2 = purchase.items[0];
        }
        return first2;
      }
    }
  });
};