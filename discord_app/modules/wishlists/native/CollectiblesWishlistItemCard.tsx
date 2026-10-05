// === Module 10770: CollectiblesWishlistItemCard ===

// Module 10770 (CollectiblesWishlistItemCard)
import Fragment from "Fragment" /* 21 */;
import CollectiblesItemRecord from "CollectiblesItemRecord" /* 7057 */;
import SKUPreview from "SKUPreview" /* 8426 */;
import WishlistItemCardBaseDefault from "WishlistItemCardBase" /* 8427 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import SentGiftsStore from "SentGiftsStore" /* 10771 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, sku;

let closure_3 = ["sku", "isOwned", "source", "wishlistOwnerId", "size"];
let closure_6 = CollectiblesItemRecord.transformSKUToCollectiblesItem;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((sku) => {
  let closure_2;
  let id;
  let isOwned;
  let source;
  let tmp14;
  let tmp4;
  let tmp7;
  let tmp8;
  let wishlistOwnerId;
  const tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(26);
  if (cResult[0] !== sku) {
    sku = sku.sku;
    importDefault = sku;
    ({ isOwned, source, wishlistOwnerId } = sku);
    dependencyMap = wishlistOwnerId;
    size = sku.size;
    _require = size;
    const tmp12 = _objectWithoutProperties(sku, closure_3);
    cResult[0] = sku;
    cResult[1] = tmp12;
    class I {
      constructor() {
        const hasSentGiftResult = null != closure_2 && SentGiftsStore.hasSentGift(id.id, tmp);
        return hasSentGiftResult;
      }
    }
    cResult[2] = size;
    cResult[3] = sku;
    cResult[4] = source;
    cResult[5] = isOwned;
    cResult[6] = wishlistOwnerId;
    tmp8 = isOwned;
    tmp7 = source;
    tmp4 = tmp12;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    importDefault = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    dependencyMap = cResult[6];
  }
  const tmp13 = undefined !== tmp8 && tmp8;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SentGiftsStore];
    cResult[7] = items;
    tmp14 = items;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] === tmp6.id) {
    let tmp16;
    let tmp17;
    let tmp19;
    let tmp21;
    if (cResult[9] === wishlistOwnerId) {
      tmp16 = cResult[10];
      tmp17 = cResult[11];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(tmp14, tmp16, tmp17);
    if (cResult[12] !== tmp6) {
      const tmpResult2 = tmp(8423);
      const productNameAndTypeFromSku = tmpResult2.getProductNameAndTypeFromSku(tmp6);
      cResult[12] = tmp6;
      cResult[13] = productNameAndTypeFromSku;
      tmp19 = productNameAndTypeFromSku;
    } else {
      tmp19 = cResult[13];
    }
    if (cResult[14] !== tmp6) {
      const tmp23 = closure_6(tmp6);
      cResult[14] = tmp6;
      cResult[15] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[15];
    }
    closure_3 = tmp21;
    if (cResult[16] === tmp21) {
      let tmp24;
      if (cResult[17] === tmp5) {
        tmp24 = cResult[18];
      }
      if (!tmp13) {
        let OWNED;
        if (!stateFromStores) {
          OWNED = tmp4.overlay;
        }
        if (cResult[19] === tmp19) {
          if (cResult[20] === tmp4) {
            if (cResult[21] === tmp24) {
              if (cResult[22] === tmp5) {
                if (cResult[23] === tmp7) {
                  let tmp25;
                  if (cResult[24] === OWNED) {
                    tmp25 = cResult[25];
                  }
                  return tmp25;
                }
              }
            }
          }
        }
        WishlistItemCardBaseDefault;
        const merged = Object.assign(tmp4);
        const tmp32 = <tmp28 accessibilityLabel={tmp19} renderPreview={tmp24} source={tmp7} size={tmp5} overlay={OWNED} />;
        class I {
          constructor() {
            const hasSentGiftResult = null != closure_2 && SentGiftsStore.hasSentGift(id.id, tmp);
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
      OWNED = tmp(8427).WishlistItemCardOverlay.OWNED;
    }
    const fn = function p() {
      let tmp2 = null;
      if (null != closure_3) {
        tmp2 = jsx(SKUPreview.CollectiblesPreview, { collectiblesItemData: tmp, size });
      }
      return tmp2;
    };
    cResult[16] = tmp21;
    cResult[17] = tmp5;
    cResult[18] = fn;
    tmp24 = fn;
  }
  class I {
    constructor() {
      const hasSentGiftResult = null != closure_2 && SentGiftsStore.hasSentGift(id.id, tmp);
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
}) : ((sku) => {
  sku = sku.sku;
  let flag = sku.isOwned;
  if (flag === undefined) {
    flag = false;
  }
  const wishlistOwnerId = sku.wishlistOwnerId;
  size = sku.size;
  const source = sku.source;
  const merged = Object.assign(sku, Object.assign({ sku: 0, isOwned: 0, source: 0, wishlistOwnerId: 0, size: 0 }));
  let tmp2 = sku;
  const items = [SentGiftsStore];
  const items1 = [sku.id, wishlistOwnerId];
  const obj = sku(size[7]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const hasSentGiftResult = null != wishlistOwnerId && SentGiftsStore.hasSentGift(sku.id, tmp);
    return hasSentGiftResult;
  }, items1);
  const items2 = [sku];
  const obj2 = sku(size[8]);
  const productNameAndTypeFromSku = obj2.getProductNameAndTypeFromSku(sku);
  const memo = react.useMemo(() => closure_6(sku), items2);
  const items3 = [memo, size];
  const callback = react.useCallback(() => {
    let tmp2 = null;
    if (null != memo) {
      tmp2 = jsx(SKUPreview.CollectiblesPreview, { collectiblesItemData: tmp, size });
    }
    return tmp2;
  }, items3);
  const obj3 = { accessibilityLabel: productNameAndTypeFromSku, renderPreview: callback, source, size };
  wishlistOwnerId(size[10]);
  const merged1 = Object.assign(merged);
  const tmp3 = size;
  if (!flag) {
    let OWNED;
    if (!stateFromStores) {
      OWNED = merged.overlay;
    }
    obj3.overlay = OWNED;
    return <tmp9 {...obj3} />;
  }
  OWNED = tmp2(tmp3[10]).WishlistItemCardOverlay.OWNED;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/wishlists/native/CollectiblesWishlistItemCard.tsx");

export default tmp2;