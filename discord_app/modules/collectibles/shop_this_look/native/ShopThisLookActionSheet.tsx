// === Module 12801: ShopThisLookActionSheet ===

// Module 12801 (ShopThisLookActionSheet)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6646 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import Constants from "Constants" /* 6707 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7052 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7064 */;
import WishlistItemCardBase from "WishlistItemCardBase" /* 8427 */;
import ShopThisLookUtils from "ShopThisLookUtils" /* 12802 */;
import ShopThisLookAnalyticsUtils from "ShopThisLookAnalyticsUtils" /* 12804 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import StorefrontProductStore from "StorefrontProductStore" /* 7890 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, flag, ref, tmp5;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const UserProfileThemeTypes = Constants.UserProfileThemeTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, description: obj3, itemsContainer: obj4, cardWrapper: { position: "relative" }, wishlistButton: obj5 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center", marginTop: -nativeDefault.space.PX_8 };
obj4 = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", paddingBottom: nativeDefault.space.PX_8 };
obj5 = { zIndex: 1 };
const merged = Object.assign(WishlistItemCardBase.CARD_TOP_RIGHT_OVERLAY_POSITION);
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  let first;
  let onPress;
  let productType;
  let stateFromStores;
  let tmp10;
  let tmp7;
  const tmp2 = stateFromStores;
  let obj = skuId(stateFromStores[12]);
  const cResult = obj.c(48);
  skuId = skuId.skuId;
  ({ size, onPress } = skuId);
  closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { needsCategory: false, shouldFetchProduct: false };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = skuId(tmp2[13]);
  const collectiblesShopProduct = tmpResult.useCollectiblesShopProduct(skuId, first);
  const product = collectiblesShopProduct.product;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StorefrontProductStore];
    cResult[1] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== skuId) {
    class O {
      constructor() {
        productsForSku = closure_6.getProductsForSku(skuId);
        found = undefined;
        if (productsForSku != null) {
          flatMapResult = productsForSku.flatMap(() => { /* body not rendered: F142862 */ });
          found = flatMapResult.find(() => { /* body not rendered: F142863 */ });
        }
        return found;
      }
    }
    const items1 = [skuId];
    cResult[2] = skuId;
    cResult[3] = O;
    cResult[4] = items1;
    tmp10 = items1;
  } else {
    class O {
      constructor() {
        productsForSku = closure_6.getProductsForSku(skuId);
        found = undefined;
        if (productsForSku != null) {
          flatMapResult = productsForSku.flatMap(() => { /* body not rendered: F142862 */ });
          found = flatMapResult.find(() => { /* body not rendered: F142863 */ });
        }
        return found;
      }
    }
    tmp10 = cResult[4];
  }
  const tmpResult2 = skuId(tmp2[14]);
  stateFromStores = tmpResult2.useStateFromStores(tmp7, O, tmp10);
  if (stateFromStores != null) {
    class O {
      constructor() {
        productsForSku = closure_6.getProductsForSku(skuId);
        found = undefined;
        if (productsForSku != null) {
          flatMapResult = productsForSku.flatMap(() => { /* body not rendered: F142862 */ });
          found = flatMapResult.find(() => { /* body not rendered: F142863 */ });
        }
        return found;
      }
    }
    if (tmp13 != null) {
      class O {
        constructor() {
          productsForSku = closure_6.getProductsForSku(skuId);
          found = undefined;
          if (productsForSku != null) {
            flatMapResult = productsForSku.flatMap(() => { /* body not rendered: F142862 */ });
            found = flatMapResult.find(() => { /* body not rendered: F142863 */ });
          }
          return found;
        }
      }
      if (tmp14 != null) {
        class O {
          constructor() {
            productsForSku = closure_6.getProductsForSku(skuId);
            found = undefined;
            if (productsForSku != null) {
              flatMapResult = productsForSku.flatMap(() => { /* body not rendered: F142862 */ });
              found = flatMapResult.find(() => { /* body not rendered: F142863 */ });
            }
            return found;
          }
        }
      }
    }
  }
  react = tmp12;
  if (cResult[5] !== stateFromStores) {
    class O {
      constructor() {
        productsForSku = closure_6.getProductsForSku(skuId);
        found = undefined;
        if (productsForSku != null) {
          flatMapResult = productsForSku.flatMap(() => { /* body not rendered: F142862 */ });
          found = flatMapResult.find(() => { /* body not rendered: F142863 */ });
        }
        return found;
      }
    }
    let result = obj5.isShoppableCollectibleSku(stateFromStores);
    cResult[5] = stateFromStores;
    cResult[6] = result;
  } else {
    class O {
      constructor() {
        productsForSku = closure_6.getProductsForSku(skuId);
        found = undefined;
        if (productsForSku != null) {
          flatMapResult = productsForSku.flatMap(() => { /* body not rendered: F142862 */ });
          found = flatMapResult.find(() => { /* body not rendered: F142863 */ });
        }
        return found;
      }
    }
  }
  result = tmp15;
  if (null != product) {
    class O {
      constructor() {
        productsForSku = closure_6.getProductsForSku(skuId);
        found = undefined;
        if (productsForSku != null) {
          flatMapResult = productsForSku.flatMap(() => { /* body not rendered: F142862 */ });
          found = flatMapResult.find(() => { /* body not rendered: F142863 */ });
        }
        return found;
      }
    }
    if (obj6.getIsVariantProduct(product)) {
      class O {
        constructor() {
          productsForSku = closure_6.getProductsForSku(skuId);
          found = undefined;
          if (productsForSku != null) {
            flatMapResult = productsForSku.flatMap(() => { /* body not rendered: F142862 */ });
            found = flatMapResult.find(() => { /* body not rendered: F142863 */ });
          }
          return found;
        }
      }
      if (cResult[10] !== skuId) {
        class O {
          constructor() {
            productsForSku = closure_6.getProductsForSku(skuId);
            found = undefined;
            if (productsForSku != null) {
              flatMapResult = productsForSku.flatMap(() => { /* body not rendered: F142862 */ });
              found = flatMapResult.find(() => { /* body not rendered: F142863 */ });
            }
            return found;
          }
        }
        cResult[10] = skuId;
        cResult[11] = tmp20;
      } else {
        class O {
          constructor() {
            productsForSku = closure_6.getProductsForSku(skuId);
            found = undefined;
            if (productsForSku != null) {
              flatMapResult = productsForSku.flatMap(() => { /* body not rendered: F142862 */ });
              found = flatMapResult.find(() => { /* body not rendered: F142863 */ });
            }
            return found;
          }
        }
      }
      const variants = product.variants;
      cResult[7] = product.variants;
      cResult[8] = skuId;
      cResult[9] = variants.findIndex(tmp20);
      const findIndexResult = variants.findIndex(tmp20);
    }
  }
  ref = react.useRef(false);
  if (cResult[15] === tmp15) {
    class O {
      constructor() {
        productsForSku = closure_6.getProductsForSku(skuId);
        found = undefined;
        if (productsForSku != null) {
          flatMapResult = productsForSku.flatMap(() => { /* body not rendered: F142862 */ });
          found = flatMapResult.find(() => { /* body not rendered: F142863 */ });
        }
        return found;
      }
    }
  }
  class D {
    constructor() {
      current = null == closure_2;
      if (!current) {
        tmp = closure_5;
        current = closure_5.current;
      }
      if (!current) {
        tmp2 = closure_5;
        flag = true;
        closure_5.current = true;
        tmp3 = closure_0;
        tmp4 = closure_2;
        tmp5 = closure_0(closure_2[17]);
        obj = { action: null, skuId: null, productType: null, isDisabled: null, source: null };
        trackShopThisLookRowAction = tmp5.trackShopThisLookRowAction;
        obj.action = closure_0(closure_2[17]).ShopThisLookRowAction.ROW_VIEWED;
        tmp6 = skuId;
        obj.skuId = skuId;
        tmp7 = type;
        obj.productType = type;
        tmp8 = closure_4;
        obj.isDisabled = !closure_4;
        tmp9 = UserProfileThemeTypes;
        obj.source = UserProfileThemeTypes.ACTION_SHEET;
        result = trackShopThisLookRowAction(obj);
      }
      return;
    }
  }
  const items2 = [stateFromStores, skuId, undefined, tmp15];
  cResult[15] = tmp15;
  cResult[16] = undefined;
  cResult[17] = stateFromStores;
  cResult[18] = skuId;
  cResult[19] = D;
  cResult[20] = items2;
}) : ((skuId) => {
  let _undefined;
  let items7;
  let onPress;
  let tmp22;
  skuId = skuId.skuId;
  ({ size, onPress } = skuId);
  let memo;
  ref = undefined;
  let callback;
  const tmp = closure_11();
  const tmp2 = skuId;
  let obj = skuId(8536);
  const collectiblesShopProduct = obj.useCollectiblesShopProduct(skuId, { needsCategory: false, shouldFetchProduct: false });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  const state = collectiblesShopProduct.state;
  let obj2 = skuId(504);
  const items = [ref];
  const items1 = [skuId];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const productsForSku = StorefrontProductStore.getProductsForSku(skuId);
    let found;
    if (productsForSku != null) {
      const flatMapResult = productsForSku.flatMap((skus) => skus.skus);
      found = flatMapResult.find((id) => id.id === skuId);
    }
    return found;
  }, items1);
  let type;
  if (stateFromStores != null) {
    const tenantMetadata = stateFromStores.tenantMetadata;
    if (tenantMetadata != null) {
      const collectibles = tenantMetadata.collectibles;
      if (collectibles != null) {
        type = collectibles.type;
      }
    }
  }
  const items2 = [stateFromStores];
  memo = stateFromStores.useMemo(() => {
    const obj = ShopThisLookUtils;
    return obj.isShoppableCollectibleSku(stateFromStores);
  }, items2);
  const items3 = [product, skuId];
  const memo1 = stateFromStores.useMemo(() => {
    if (null == _undefined) {
      return null;
    } else {
      const obj = CollectiblesProductUtils;
      if (obj.getIsVariantProduct(_undefined)) {
        const _Math = Math;
        const variants = _undefined.variants;
        const bound = Math.max(0, variants.findIndex((skuId) => skuId.skuId === skuId));
        const tmp2Result = CollectiblesProductUtils;
        return tmp2Result.getSelectedProduct(_undefined, bound);
      } else {
        return _undefined;
      }
    }
  }, items3);
  ref = stateFromStores.useRef(false);
  const items4 = [stateFromStores, skuId, type, memo];
  const effect = stateFromStores.useEffect(() => {
    const current = null == stateFromStores || ref.current;
    if (!current) {
      ref.current = true;
      const obj = { action: ShopThisLookAnalyticsUtils.ShopThisLookRowAction.ROW_VIEWED, skuId, productType: type, isDisabled: !memo, source: UserProfileThemeTypes.ACTION_SHEET };
      const trackShopThisLookRowAction = ShopThisLookAnalyticsUtils.trackShopThisLookRowAction;
      ShopThisLookAnalyticsUtils;
      const result = trackShopThisLookRowAction(obj);
    }
  }, items4);
  const items5 = [skuId, type, memo];
  callback = stateFromStores.useCallback(() => {
    const obj = ShopThisLookAnalyticsUtils;
    const obj2 = { action: ShopThisLookAnalyticsUtils.ShopThisLookRowAction.ROW_CLICKED, skuId, productType: type, isDisabled: !memo, source: UserProfileThemeTypes.ACTION_SHEET };
    const result = obj.trackShopThisLookRowAction(obj2);
  }, items5);
  const items6 = [callback, onPress];
  [][0] = callback;
  const callback1 = stateFromStores.useCallback(() => {
    callback();
    onPress();
  }, items6);
  if ("loading" === state) {
    const obj3 = {
      size,
      renderPreview() {
          return closure_1_9(type, {});
        },
      accessibilityHidden: true
    };
    tmp22 = closure_9(onPress(8427), obj3);
  } else {
    tmp22 = null;
    if (null != stateFromStores) {
      let tmp17Result;
      if (memo) {
        const obj4 = { style: tmp.cardWrapper, children: items7 };
        const obj5 = { sku: stateFromStores, size, onPress: callback1 };
        items7 = [closure_9(onPress(10769), obj5), ];
        let tmp19Result = null != memo1;
        const tmp18 = memo;
        if (tmp19Result) {
          const obj6 = { selectedProduct: memo1, style: tmp.wishlistButton };
          tmp19Result = closure_9(onPress(8493), obj6);
        }
        items7[1] = tmp19Result;
        tmp17Result = closure_10(tmp18, obj4);
      } else {
        const obj7 = { sku: stateFromStores, size, overlay: tmp2(8427).WishlistItemCardOverlay.LOCKED, onPress: tmp12 };
        const tmp15 = onPress(10769);
        tmp17Result = closure_9(tmp15, obj7);
      }
      tmp22 = tmp17Result;
    }
  }
  return tmp22;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsLocations;
  let cardWidth;
  let closure_2;
  let container;
  let description;
  let first;
  let gap;
  let guildId;
  let items1;
  let obj6;
  let obj7;
  let rowWidth;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp7Result;
  let userId;
  let obj = cardWidth(576);
  const cResult = obj.c(28);
  ({ userId, guildId } = arg0);
  const tmp4 = closure_11();
  let obj2 = cardWidth(7886);
  const equippedCollectibleSkuIds = obj2.useEquippedCollectibleSkuIds(userId, guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { maxWidth: ACTION_SHEET_MAX_WIDTH };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const tmp8 = analyticsLocations(12805)(first);
  cardWidth = tmp8.cardWidth;
  ({ rowWidth, gap } = tmp8);
  const tmp9 = analyticsLocations(6657);
  analyticsLocations = tmp9(analyticsLocations(6681).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
  if (cResult[1] !== analyticsLocations) {
    const fn = function y(initialProductSkuId) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = CollectiblesActionCreators;
      const obj3 = { initialProductSkuId, analyticsLocations, analyticsSource: AnalyticsLocationDefault.USER_PROFILE_OVERFLOW_MENU };
      const result = obj2.openCollectiblesShopMobile(obj3);
    };
    cResult[1] = analyticsLocations;
    cResult[2] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  dependencyMap = tmp10;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [analyticsLocations(6681).SHOP_THIS_LOOK_ACTION_SHEET];
    cResult[3] = items;
    tmp11 = items;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(cardWidth(1126).t.xNdRDO);
    cResult[4] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[4];
  }
  ({ container, description } = tmp4);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(cardWidth(1126).t["ws+0Lr"]);
    cResult[5] = stringResult1;
    tmp14 = stringResult1;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] !== tmp4.description) {
    const obj4 = { variant: "text-sm/medium", color: "text-subtle", style: description, children: tmp14 };
    const tmp18 = closure_9(cardWidth(4886).Text, obj4);
    cResult[6] = tmp4.description;
    cResult[7] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === gap) {
    let tmp19;
    if (cResult[9] === rowWidth) {
      tmp19 = cResult[10];
    }
    if (cResult[11] === tmp4.itemsContainer) {
      let tmp20;
      let tmp21;
      if (cResult[12] === tmp19) {
        tmp20 = cResult[13];
      }
      if (cResult[14] === cardWidth) {
        if (cResult[15] === tmp10) {
          if (cResult[16] === equippedCollectibleSkuIds) {
            tmp21 = cResult[17];
          }
          if (cResult[21] === tmp20) {
            let tmp24;
            if (cResult[22] === tmp21) {
              tmp24 = cResult[23];
            }
            if (cResult[24] === tmp4.container) {
              if (cResult[25] === tmp24) {
                let tmp28;
                if (cResult[26] === tmp16) {
                  tmp28 = cResult[27];
                }
                return tmp28;
              }
            }
            const obj5 = { value: tmp11, children: closure_9(tmp7Result, obj6) };
            const AnalyticsLocationProvider = tmp(6657).AnalyticsLocationProvider;
            obj6 = { startExpanded: true, title: tmp12, children: closure_10(closure_5, obj7) };
            obj7 = { style: container, children: items1 };
            items1 = [tmp16, tmp24];
            tmp7Result = analyticsLocations(10841);
            const tmp33 = closure_9(AnalyticsLocationProvider, obj5);
            cResult[24] = tmp4.container;
            cResult[25] = tmp24;
            cResult[26] = tmp16;
            cResult[27] = tmp33;
            tmp28 = tmp33;
          }
          const obj8 = { style: tmp20, children: tmp21 };
          const tmp27 = closure_9(closure_5, obj8);
          cResult[21] = tmp20;
          cResult[22] = tmp21;
          cResult[23] = tmp27;
          tmp24 = tmp27;
        }
      }
      if (cResult[18] === cardWidth) {
        let tmp22;
        if (cResult[19] === tmp10) {
          tmp22 = cResult[20];
        }
        const mapped = equippedCollectibleSkuIds.map(tmp22);
        cResult[14] = cardWidth;
        cResult[15] = tmp10;
        cResult[16] = equippedCollectibleSkuIds;
        cResult[17] = mapped;
        tmp21 = mapped;
      }
      const fn2 = function x(skuId) {
        size = skuId;
        const obj = {
          skuId,
          size,
          onPress() {
            return closure_2(skuId);
          }
        };
        return closure_1_9(closure_1_12, obj, skuId);
      };
      cResult[18] = cardWidth;
      cResult[19] = tmp10;
      cResult[20] = fn2;
      tmp22 = fn2;
    }
    const items2 = [tmp4.itemsContainer, tmp19];
    cResult[11] = tmp4.itemsContainer;
    cResult[12] = tmp19;
    cResult[13] = items2;
    tmp20 = items2;
  }
  const obj9 = { gap, width: rowWidth };
  cResult[8] = gap;
  cResult[9] = rowWidth;
  cResult[10] = obj9;
  tmp19 = obj9;
}) : ((arg0) => {
  let c0;
  let closure_2;
  let gap;
  let guildId;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  let obj4;
  let obj5;
  let rowWidth;
  let tmp4;
  let userId;
  _require = undefined;
  let analyticsLocations;
  ({ userId, guildId } = arg0);
  const tmp = closure_11();
  let obj = require("useMaybeFetchEquippedCollectibleProducts");
  const equippedCollectibleSkuIds = obj.useEquippedCollectibleSkuIds(userId, guildId);
  let obj2 = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  ({ cardWidth: c0, rowWidth, gap } = analyticsLocations(12805)(obj2));
  analyticsLocations(12805)(obj2);
  const tmp3 = analyticsLocations(6657);
  analyticsLocations = tmp3(analyticsLocations(6681).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
  const items = [analyticsLocations];
  dependencyMap = react.useCallback((initialProductSkuId) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = CollectiblesActionCreators;
    const obj3 = { initialProductSkuId, analyticsLocations, analyticsSource: AnalyticsLocationDefault.USER_PROFILE_OVERFLOW_MENU };
    const result = obj2.openCollectiblesShopMobile(obj3);
  }, items);
  let obj3 = { value: items1, children: closure_9(tmp4, obj4) };
  const AnalyticsLocationProvider = require("useAnalyticsLocations").AnalyticsLocationProvider;
  items1 = [analyticsLocations(6681).SHOP_THIS_LOOK_ACTION_SHEET];
  obj4 = { startExpanded: true, title: intl.string(require("intl").t.xNdRDO), children: closure_10(closure_5, obj5) };
  tmp4 = analyticsLocations(10841);
  intl = require("intl").intl;
  obj5 = { style: tmp.container, children: items2 };
  const obj6 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: intl2.string(require("intl").t["ws+0Lr"]) };
  const Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items2 = [closure_9(Text, obj6), ];
  const obj7 = {
    style: items3,
    children: equippedCollectibleSkuIds.map((skuId) => {
      size = skuId;
      const obj = {
        skuId,
        size,
        onPress() {
          return closure_2(skuId);
        }
      };
      return closure_1_9(closure_1_12, obj, skuId);
    })
  };
  items3 = [tmp.itemsContainer, { gap, width: rowWidth }];
  items2[1] = closure_9(closure_5, obj7);
  return closure_9(AnalyticsLocationProvider, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/ShopThisLookActionSheet.tsx");

export default tmp6;