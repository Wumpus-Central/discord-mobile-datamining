// === Module 12941: useTrackUserProfileWishlistView ===

// Module 12941 (useTrackUserProfileWishlistView)
import react from "react" /* 19 */;
import WishlistStore from "WishlistStore" /* 8431 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let wishlistId;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((wishlistId) => {
  let first;
  let onAction;
  let stateFromStores;
  let tmp7;
  let obj = wishlistId(onAction[3]);
  const cResult = obj.c(10);
  const tmp = wishlistId;
  wishlistId = wishlistId.wishlistId;
  const tmp2 = onAction;
  onAction = wishlistId.onAction;
  const productLines = wishlistId.productLines;
  const isVisible = wishlistId.isVisible;
  let closure_3 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStores];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== wishlistId) {
    const fn = function u() {
      return WishlistStore.isFetching(wishlistId);
    };
    cResult[1] = wishlistId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(tmp2[4]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const ref = closure_3(false);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === (undefined === isVisible || isVisible)) {
      if (cResult[5] === onAction) {
        if (cResult[6] === productLines) {
          let tmp9;
          let tmp10;
          if (cResult[7] === wishlistId) {
            tmp9 = cResult[8];
            tmp10 = cResult[9];
          }
          productLines(tmp9, tmp10);
        }
      }
    }
  }
  const fn2 = function _() {
    if (closure_3) {
      const current = stateFromStores || ref.current;
      if (!current) {
        const obj = { action: "VIEW_WISHLIST", wishlistId, productLines };
        onAction(obj);
        ref.current = true;
      }
    } else {
      ref.current = false;
    }
  };
  const items1 = [undefined === isVisible || isVisible, stateFromStores, onAction, wishlistId, productLines];
  cResult[3] = stateFromStores;
  cResult[4] = undefined === isVisible || isVisible;
  cResult[5] = onAction;
  cResult[6] = productLines;
  cResult[7] = wishlistId;
  cResult[8] = fn2;
  cResult[9] = items1;
  tmp10 = items1;
  tmp9 = fn2;
}) : ((wishlistId) => {
  wishlistId = wishlistId.wishlistId;
  const onAction = wishlistId.onAction;
  const productLines = wishlistId.productLines;
  let flag = wishlistId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  let stateFromStores;
  let obj = wishlistId(onAction[4]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => WishlistStore.isFetching(wishlistId));
  const ref = flag(false);
  const items1 = [flag, stateFromStores, onAction, wishlistId, productLines];
  productLines(() => {
    const tmp = flag;
    if (tmp) {
      const current = stateFromStores || ref.current;
      if (!current) {
        const obj = { action: "VIEW_WISHLIST", wishlistId, productLines };
        onAction(obj);
        ref.current = true;
      }
    } else {
      ref.current = false;
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useTrackUserProfileWishlistView.tsx");

export default tmp3;