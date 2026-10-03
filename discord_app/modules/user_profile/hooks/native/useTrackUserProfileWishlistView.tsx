// discord_app/modules/user_profile/hooks/native/useTrackUserProfileWishlistView.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import WishlistStore from "../../../wishlists/WishlistStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ useEffect: c2, useRef: c3 } = noop);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useTrackUserProfileWishlistView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (wishlistId) => {
      const cResult = wishlistId(onAction[3]).c(10);
      wishlistId = wishlistId.wishlistId;
      onAction = wishlistId.onAction;
      const productLines = wishlistId.productLines;
      const isVisible = wishlistId.isVisible;
      closure_3 = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [stateFromStores];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== wishlistId) {
        const fn = function u() {
          return WishlistStore.isFetching(wishlistId);
        };
        cResult[1] = wishlistId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = wishlistId(onAction[3]);
      stateFromStores = wishlistId(onAction[4]).useStateFromStores(first, tmp7);
      closure_3(false);
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === tmp4) {
          if (cResult[5] === onAction) {
            if (cResult[6] === productLines) {
              if (cResult[7] === wishlistId) {
                let tmp9 = cResult[8];
                let tmp10 = cResult[9];
              }
              productLines(tmp9, tmp10);
            }
          }
        }
      }
      const fn2 = function _() {
        if (closure_3) {
          let current = stateFromStores;
          if (!stateFromStores) {
            current = ref.current;
          }
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
    }
  : (wishlistId) => {
      wishlistId = wishlistId.wishlistId;
      const onAction = wishlistId.onAction;
      const productLines = wishlistId.productLines;
      let flag = wishlistId.isVisible;
      if (flag === undefined) {
        flag = true;
      }
      let stateFromStores;
      const items = [stateFromStores];
      stateFromStores = wishlistId(onAction[4]).useStateFromStores(items, () => WishlistStore.isFetching(wishlistId));
      flag(false);
      const items1 = [flag, stateFromStores, onAction, wishlistId, productLines];
      productLines(() => {
        if (flag) {
          let current = stateFromStores;
          if (!stateFromStores) {
            current = ref.current;
          }
          if (!current) {
            const obj = { action: "VIEW_WISHLIST", wishlistId, productLines };
            onAction(obj);
            ref.current = true;
          }
        } else {
          ref.current = false;
        }
      }, items1);
    };
