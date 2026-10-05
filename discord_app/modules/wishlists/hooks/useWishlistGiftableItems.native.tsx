// discord_app/modules/wishlists/hooks/useWishlistGiftableItems.native.tsx
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let items = [, ,];
({ COLLECTIBLES: arr[0], PREMIUM: arr[1], SOCIAL_LAYER_GAME_ITEM: arr[2] } = Constants.SKUProductLines);
const set = new Set(items);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (items) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      items = undefined;
      const first = cResult[0];
      if (items != null) {
        items = items.items;
      }
      if (first !== items) {
        let found;
        if (items != null) {
          const items1 = items.items;
          found = items1.filter((skuProductLine) => {
            const tmp = set.has(skuProductLine.skuProductLine) && !skuProductLine.isOwned;
            return tmp;
          });
        }
        if (found == null) {
          found = [];
        }
        let items2;
        if (items != null) {
          items2 = items.items;
        }
        cResult[0] = items2;
        cResult[1] = found;
        tmp4 = found;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (arg0) => {
      let items = [arg0];
      return react.useMemo(() => {
        let found;
        if (items != null) {
          items = items.items;
          found = items.filter((skuProductLine) => {
            const tmp = set.has(skuProductLine.skuProductLine) && !skuProductLine.isOwned;
            return tmp;
          });
        }
        if (found == null) {
          found = [];
        }
        return found;
      }, items);
    };
const result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistGiftableItems.native.tsx");

export const GIFTABLE_PRODUCT_LINES = set;
export const useWishlistGiftableItems = tmp3;
