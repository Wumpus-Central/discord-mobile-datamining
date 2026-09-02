// === Module 12749: useTrackUserProfileWishlistView ===

// Module 12749 (useTrackUserProfileWishlistView)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import closure_4 from "get" /* 10679 */;

({ useEffect: obj1, useRef: c3 } = noop);
const result = set.fileFinishedImporting("modules/user_profile/hooks/native/useTrackUserProfileWishlistView.tsx");

export default function useTrackUserProfileWishlistView(wishlistId) {
  wishlistId = wishlistId.wishlistId;
  const onAction = wishlistId.onAction;
  const productLines = wishlistId.productLines;
  let flag = wishlistId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  let stateFromStores;
  closure_5 = undefined;
  const items = [stateFromStores];
  stateFromStores = wishlistId(onAction[2]).useStateFromStores(items, () => stateFromStores.isFetching(wishlistId));
  closure_5 = flag(false);
  const items1 = [flag, stateFromStores, onAction, wishlistId, productLines];
  productLines(() => {
    if (flag) {
      let current = stateFromStores;
      if (!stateFromStores) {
        current = ref.current;
      }
      if (!current) {
        const obj = { action: "VIEW_WISHLIST", wishlistId: null, productLines: null };
        obj[1] = wishlistId;
        obj[2] = productLines;
        onAction(obj);
        ref.current = true;
        const tmp3 = onAction;
        const tmp5 = productLines;
      }
    } else {
      ref.current = false;
    }
  }, items1);
};