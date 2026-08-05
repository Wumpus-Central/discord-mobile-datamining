// discord_app/modules/collectibles/profile_frames/hooks/useProfileFrame.tsx
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import map from "map";
import { isProfileFrameRecord } from "fromServer";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("fromServer").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useProfileFrame.tsx");

export default function useProfileFrame(arg0) {
  const _require = arg0;
  const items = [updateCategoriesAndProducts, map];
  return _initialize.useStateFromStores(items, () => {
    if (null != closure_0) {
      const product = outer1_2.getProduct(tmp);
      let first;
      if (product != null) {
        first = product.items[0];
      }
      if (outer1_4(first)) {
        return product.items[0];
      } else {
        const purchase = outer1_3.getPurchase(tmp);
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
};