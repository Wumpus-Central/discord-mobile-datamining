// discord_app/modules/wishlists/native/CollectiblesWishlistItemCard.tsx
import SKUPreview from "../../skus/native/SKUPreview.tsx";
import WishlistItemCardBaseDefault from "WishlistItemCardBase.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SentGiftsStore from "../SentGiftsStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_3 = ["sku", "isOwned", "source", "wishlistOwnerId", "size"];
let closure_6 = fn(7070).transformSKUToCollectiblesItem;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/CollectiblesWishlistItemCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (sku) => {
      const cResult = require("c").c(26);
      if (cResult[0] !== sku) {
        sku = sku.sku;
        importDefault = sku;
        ({ isOwned, source, wishlistOwnerId } = sku);
        dependencyMap = wishlistOwnerId;
        const size = sku.size;
        _require = size;
        const tmp12 = _objectWithoutProperties(sku, closure_3);
        cResult[0] = sku;
        cResult[1] = tmp12;
        class I {
          constructor() {
            hasSentGiftResult = null != closure_2;
            if (hasSentGiftResult) {
              tmp3 = closure_7;
              tmp4 = closure_1;
              hasSentGiftResult = closure_7.hasSentGift(closure_1.id, tmp);
            }
            return hasSentGiftResult;
          }
        }
        cResult[2] = size;
        cResult[3] = sku;
        cResult[4] = source;
        cResult[5] = isOwned;
        cResult[6] = wishlistOwnerId;
        let tmp8 = isOwned;
        let tmp7 = source;
        let tmp4 = tmp12;
      } else {
        tmp4 = cResult[1];
        _require = cResult[2];
        importDefault = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        dependencyMap = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SentGiftsStore];
        cResult[7] = items;
        let tmp14 = items;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] === tmp6.id) {
        if (cResult[9] === wishlistOwnerId) {
          let tmp16 = cResult[10];
          let tmp17 = cResult[11];
        }
        const stateFromStores = tmp(504).useStateFromStores(tmp14, tmp16, tmp17);
        if (cResult[12] !== tmp6) {
          const productNameAndTypeFromSku = tmp(8456).getProductNameAndTypeFromSku(tmp6);
          cResult[12] = tmp6;
          cResult[13] = productNameAndTypeFromSku;
          let tmp19 = productNameAndTypeFromSku;
          const tmpResult2 = tmp(8456);
        } else {
          tmp19 = cResult[13];
        }
        if (cResult[14] !== tmp6) {
          const tmp23 = closure_6(tmp6);
          cResult[14] = tmp6;
          cResult[15] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[15];
        }
        closure_3 = tmp21;
        if (cResult[16] === tmp21) {
          if (cResult[17] === tmp5) {
            let tmp24 = cResult[18];
          }
          if (!tmp13) {
            if (!stateFromStores) {
              let OWNED = tmp4.overlay;
            }
            if (cResult[19] === tmp19) {
              if (cResult[20] === tmp4) {
                if (cResult[21] === tmp24) {
                  if (cResult[22] === tmp5) {
                    if (cResult[23] === tmp7) {
                      if (cResult[24] === OWNED) {
                        let tmp25 = cResult[25];
                      }
                      return tmp25;
                    }
                  }
                }
              }
            }
            const obj2 = { accessibilityLabel: tmp19, renderPreview: tmp24, source: tmp7, size: tmp5 };
            const merged = Object.assign(tmp4);
            obj2.overlay = OWNED;
            const tmp32 = jsx(WishlistItemCardBaseDefault, {
              accessibilityLabel: tmp19,
              renderPreview: tmp24,
              source: tmp7,
              size: tmp5,
            });
            class I {
              constructor() {
                hasSentGiftResult = null != closure_2;
                if (hasSentGiftResult) {
                  tmp3 = closure_7;
                  tmp4 = closure_1;
                  hasSentGiftResult = closure_7.hasSentGift(closure_1.id, tmp);
                }
                return hasSentGiftResult;
              }
            }
            cResult[19] = tmp19;
            cResult[20] = tmp4;
            cResult[21] = tmp24;
            cResult[22] = tmp5;
            cResult[23] = tmp7;
            cResult[24] = OWNED;
            cResult[25] = tmp32;
            tmp25 = tmp32;
          }
          OWNED = tmp(8460).WishlistItemCardOverlay.OWNED;
        }
        const fn = function p() {
          let tmp2 = null;
          if (null != closure_3) {
            const obj = { collectiblesItemData: tmp, size };
            tmp2 = jsx(SKUPreview.CollectiblesPreview, { collectiblesItemData: tmp, size });
          }
          return tmp2;
        };
        cResult[16] = tmp21;
        cResult[17] = tmp5;
        cResult[18] = fn;
        tmp24 = fn;
        const tmpResult = tmp(504);
      }
      class I {
        constructor() {
          hasSentGiftResult = null != closure_2;
          if (hasSentGiftResult) {
            tmp3 = closure_7;
            tmp4 = closure_1;
            hasSentGiftResult = closure_7.hasSentGift(closure_1.id, tmp);
          }
          return hasSentGiftResult;
        }
      }
      const items1 = [tmp6.id, wishlistOwnerId];
      cResult[8] = tmp6.id;
      cResult[9] = wishlistOwnerId;
      cResult[10] = I;
      cResult[11] = items1;
      tmp17 = items1;
      tmp16 = I;
      let obj = require("c");
      tmp13 = undefined !== tmp8 && tmp8;
    }
  : (sku) => {
      sku = sku.sku;
      let flag = sku.isOwned;
      if (flag === undefined) {
        flag = false;
      }
      const wishlistOwnerId = sku.wishlistOwnerId;
      const size = sku.size;
      const merged = Object.assign(sku, Object.assign({ sku: 0, isOwned: 0, source: 0, wishlistOwnerId: 0, size: 0 }));
      const items = [SentGiftsStore];
      const items1 = [sku.id, wishlistOwnerId];
      const stateFromStores = sku(size[7]).useStateFromStores(
        items,
        () => {
          let hasSentGiftResult = null != wishlistOwnerId;
          if (hasSentGiftResult) {
            hasSentGiftResult = SentGiftsStore.hasSentGift(sku.id, tmp);
          }
          return hasSentGiftResult;
        },
        items1,
      );
      let obj = sku(size[7]);
      let tmp2 = sku;
      const tmp3 = size;
      const items2 = [sku];
      const productNameAndTypeFromSku = sku(size[8]).getProductNameAndTypeFromSku(sku);
      const memo = noop.useMemo(() => closure_6(sku), items2);
      const items3 = [memo, size];
      const callback = noop.useCallback(() => {
        let tmp2 = null;
        if (null != memo) {
          const obj = { collectiblesItemData: tmp, size };
          tmp2 = jsx(SKUPreview.CollectiblesPreview, { collectiblesItemData: tmp, size });
        }
        return tmp2;
      }, items3);
      const obj3 = { accessibilityLabel: productNameAndTypeFromSku, renderPreview: callback, source: sku.source, size };
      const obj2 = sku(size[8]);
      const merged1 = Object.assign(merged);
      if (!flag) {
        if (!stateFromStores) {
          let OWNED = merged.overlay;
        }
        obj3.overlay = OWNED;
        return <tmp9 {...obj3} />;
      }
      OWNED = tmp2(tmp3[10]).WishlistItemCardOverlay.OWNED;
      const tmp9 = wishlistOwnerId(size[10]);
    };
