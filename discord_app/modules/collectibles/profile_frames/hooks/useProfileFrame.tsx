// === Module 8562: useProfileFrame ===

// Module 8562 (useProfileFrame)
import closure_2 from "updateCategoriesAndProducts" /* 7297 */;
import closure_3 from "map" /* 7313 */;
import { isProfileFrameRecord } from "fromServer" /* 7304 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useProfileFrame.tsx");

export default function useProfileFrame(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  return _require(586).useStateFromStores(items, () => {
    if (null != closure_0) {
      const product = closure_1_2.getProduct(tmp);
      let first;
      if (product != null) {
        first = product.items[0];
      }
      if (closure_1_4(first)) {
        return product.items[0];
      } else {
        const purchase = closure_1_3.getPurchase(tmp);
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