// === Module 8957: useProfileFrame ===

// Module 8957 (useProfileFrame)
import updateCategoriesAndProducts from "updateCategoriesAndProducts" /* 5301 */;
import map from "map" /* 5324 */;
import { isProfileFrameRecord } from "fromServer" /* 5308 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useProfileFrame.tsx");

export default function useProfileFrame(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  return _require(589).useStateFromStores(items, () => {
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