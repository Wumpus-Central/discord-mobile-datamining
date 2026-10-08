// === Module 12967: ShopThisLookActionSheet ===

// Module 12967 (ShopThisLookActionSheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7251 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7263 */;
import ShopThisLookUtils from "ShopThisLookUtils" /* 12968 */;
import ShopThisLookAnalyticsUtils from "ShopThisLookAnalyticsUtils" /* 12970 */;
import noop from "module_19" /* 19 */;
import StorefrontProductStore from "StorefrontProductStore" /* 8320 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ACTION_SHEET_MAX_WIDTH = fn(6830).ACTION_SHEET_MAX_WIDTH;
const UserProfileThemeTypes = fn(6891).UserProfileThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 }, description: null, itemsContainer: null, cardWrapper: null, wishlistButton: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.description = { textAlign: "center", marginTop: -nativeDefault.space.PX_8 };
let obj4 = { textAlign: "center", marginTop: -nativeDefault.space.PX_8 };
obj2.itemsContainer = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", paddingBottom: nativeDefault.space.PX_8 };
obj2.cardWrapper = { position: "relative" };
let obj6 = {};
const merged = Object.assign(fn(8946).CARD_TOP_RIGHT_OVERLAY_POSITION);
obj6.zIndex = 1;
obj2.wishlistButton = obj6;
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ShopThisLookCard(skuId) {
  const cResult = skuId(stateFromStores[12]).c(48);
  skuId = skuId.skuId;
  ({ size, onPress } = skuId);
  closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { needsCategory: false, shouldFetchProduct: false };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = skuId(stateFromStores[12]);
  const collectiblesShopProduct = skuId(stateFromStores[13]).useCollectiblesShopProduct(skuId, first);
  const product = collectiblesShopProduct.product;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StorefrontProductStore];
    cResult[1] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== skuId) {
    const fn = function v() {
      const productsForSku = StorefrontProductStore.getProductsForSku(skuId);
      let found;
      if (productsForSku != null) {
        found = productsForSku.flatMap((skus) => skus.skus).find((id) => id.id === skuId);
        const flatMapResult = productsForSku.flatMap((skus) => skus.skus);
      }
      return found;
    };
    const items1 = [skuId];
    cResult[2] = skuId;
    cResult[3] = fn;
    cResult[4] = items1;
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult = skuId(stateFromStores[13]);
  stateFromStores = skuId(stateFromStores[14]).useStateFromStores(tmp7, tmp9, tmp10);
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
  if (cResult[5] !== stateFromStores) {
    let result = tmp(tmp2[15]).isShoppableCollectibleSku(stateFromStores);
    cResult[5] = stateFromStores;
    cResult[6] = result;
    let tmp13 = result;
    const tmpResult6 = tmp(tmp2[15]);
  } else {
    tmp13 = cResult[6];
  }
  closure_4 = tmp13;
  if (null != product) {
    if (tmpResult7.getIsVariantProduct(product)) {
      if (cResult[7] === product.variants) {
        if (cResult[8] === skuId) {
          const _Math = Math;
          const bound = Math.max(0, cResult[9]);
          if (cResult[12] === product) {
          }
          const selectedProduct = tmp(tmp2[16]).getSelectedProduct(product, bound);
          cResult[12] = product;
          cResult[13] = bound;
          cResult[14] = selectedProduct;
          const tmpResult8 = tmp(tmp2[16]);
        }
      }
      if (cResult[10] !== skuId) {
        const fn2 = function x(skuId) {
          return skuId.skuId === skuId;
        };
        cResult[10] = skuId;
        cResult[11] = fn2;
        let tmp16 = fn2;
      } else {
        tmp16 = cResult[11];
      }
      const variants = product.variants;
      const findIndexResult = variants.findIndex(tmp16);
      cResult[7] = product.variants;
      cResult[8] = skuId;
      cResult[9] = findIndexResult;
    }
    tmpResult7 = tmp(tmp2[16]);
  }
  type.useRef(false);
  if (cResult[15] === tmp13) {
    if (cResult[16] === type) {
      if (cResult[17] === stateFromStores) {
        if (cResult[18] === skuId) {
          let tmp23 = cResult[19];
          let tmp24 = cResult[20];
        }
        const effect = obj8.useEffect(tmp23, tmp24);
        if (cResult[21] === tmp13) {
          if (cResult[22] === type) {
            if (cResult[23] === skuId) {
              let tmp26 = cResult[24];
            }
            StorefrontProductStore = tmp26;
            if (cResult[25] === onPress) {
              if (cResult[28] !== tmp26) {
                class K {
                  constructor() {
                    tmp = closure_6();
                    obj = closure_1(closure_2[9]);
                    obj1 = { key: "SHOP_THIS_LOOK_ITEM_UNAVAILABLE", content: null };
                    intl = closure_0(closure_2[10]).intl;
                    obj1.content = intl.string(closure_0(closure_2[10]).t.YymRft);
                    openResult = obj.open(obj1);
                    return;
                  }
                }
                cResult[28] = tmp26;
                class V {
                  constructor() {
                    tmp = closure_6();
                    tmp2 = onPress();
                    return;
                  }
                }
                cResult[29] = K;
              } else {
                class K {
                  constructor() {
                    tmp = closure_6();
                    obj = closure_1(closure_2[9]);
                    obj1 = { key: "SHOP_THIS_LOOK_ITEM_UNAVAILABLE", content: null };
                    intl = closure_0(closure_2[10]).intl;
                    obj1.content = intl.string(closure_0(closure_2[10]).t.YymRft);
                    openResult = obj.open(obj1);
                    return;
                  }
                }
              }
              class V {
                constructor() {
                  tmp = closure_6();
                  tmp2 = onPress();
                  return;
                }
              }
            }
            class V {
              constructor() {
                tmp = closure_6();
                tmp2 = onPress();
                return;
              }
            }
            cResult[25] = onPress;
            cResult[26] = tmp26;
            cResult[27] = V;
          }
        }
        class N {
          constructor() {
            obj = closure_0(closure_2[17]);
            obj1 = { action: closure_0(closure_2[17]).ShopThisLookRowAction.ROW_CLICKED, skuId, productType: type, isDisabled: !closure_4, source: UserProfileThemeTypes.ACTION_SHEET };
            result = obj.trackShopThisLookRowAction(obj1);
            return;
          }
        }
        cResult[21] = tmp13;
        cResult[22] = type;
        cResult[23] = skuId;
        cResult[24] = N;
        tmp26 = N;
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
        obj = closure_0(closure_2[17]);
        obj1 = { action: null, skuId: null, productType: null, isDisabled: null, source: null };
        obj1.action = closure_0(closure_2[17]).ShopThisLookRowAction.ROW_VIEWED;
        tmp5 = skuId;
        obj1.skuId = skuId;
        tmp6 = type;
        obj1.productType = type;
        tmp7 = closure_4;
        obj1.isDisabled = !closure_4;
        tmp8 = UserProfileThemeTypes;
        obj1.source = UserProfileThemeTypes.ACTION_SHEET;
        result = obj.trackShopThisLookRowAction(obj1);
      }
      return;
    }
  }
  const items2 = [stateFromStores, skuId, type, tmp13];
  cResult[15] = tmp13;
  cResult[16] = type;
  cResult[17] = stateFromStores;
  cResult[18] = skuId;
  cResult[19] = D;
  cResult[20] = items2;
  tmp24 = items2;
  tmp23 = D;
  obj8 = type;
  const tmpResult5 = skuId(stateFromStores[14]);
}) : (function ShopThisLookCard(skuId) {
  skuId = skuId.skuId;
  ({ size, onPress } = skuId);
  let memo;
  ref = undefined;
  let callback;
  let wishlistButton = closure_11();
  const collectiblesShopProduct = skuId(9053).useCollectiblesShopProduct(skuId, { needsCategory: false, shouldFetchProduct: false });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  let obj = skuId(9053);
  const tmp = skuId;
  const items = [ref];
  const items1 = [skuId];
  const stateFromStores = skuId(504).useStateFromStores(items, () => {
    const productsForSku = StorefrontProductStore.getProductsForSku(skuId);
    let found;
    if (productsForSku != null) {
      found = productsForSku.flatMap((skus) => skus.skus).find((id) => id.id === skuId);
      const flatMapResult = productsForSku.flatMap((skus) => skus.skus);
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
  memo = stateFromStores.useMemo(() => ShopThisLookUtils.isShoppableCollectibleSku(stateFromStores), items2);
  const items3 = [product, skuId];
  const memo1 = stateFromStores.useMemo(() => {
    if (null == _undefined) {
      return null;
    } else {
      if (obj.getIsVariantProduct(_undefined)) {
        const _Math = Math;
        const variants = _undefined.variants;
        const bound = Math.max(0, variants.findIndex((skuId) => skuId.skuId === skuId));
        return CollectiblesProductUtils.getSelectedProduct(_undefined, bound);
      } else {
        return _undefined;
      }
      obj = CollectiblesProductUtils;
    }
  }, items3);
  ref = stateFromStores.useRef(false);
  const items4 = [stateFromStores, skuId, type, memo];
  const effect = stateFromStores.useEffect(() => {
    let current = null == stateFromStores;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      const obj2 = { action: ShopThisLookAnalyticsUtils.ShopThisLookRowAction.ROW_VIEWED, skuId, productType: type, isDisabled: !memo, source: UserProfileThemeTypes.ACTION_SHEET };
      const result = ShopThisLookAnalyticsUtils.trackShopThisLookRowAction(obj2);
    }
  }, items4);
  const items5 = [skuId, type, memo];
  callback = stateFromStores.useCallback(() => {
    const obj = ShopThisLookAnalyticsUtils;
    const result = obj.trackShopThisLookRowAction({ action: ShopThisLookAnalyticsUtils.ShopThisLookRowAction.ROW_CLICKED, skuId, productType: type, isDisabled: !memo, source: UserProfileThemeTypes.ACTION_SHEET });
  }, items5);
  const items6 = [callback, onPress];
  let callback1 = stateFromStores.useCallback(() => {
    callback();
    onPress();
  }, items6);
  [][0] = callback;
  if ("loading" === collectiblesShopProduct.state) {
    const obj3 = {
      size,
      renderPreview() {
          return closure_1_9(type, {});
        },
      accessibilityHidden: true
    };
    let tmp23 = closure_9(onPress(8946), obj3);
  } else {
    tmp23 = null;
    if (null != stateFromStores) {
      if (memo) {
        const obj4 = { style: wishlistButton.cardWrapper, children: null };
        const obj5 = { sku: stateFromStores, size, onPress: callback1 };
        const items7 = [closure_9(onPress(12735), obj5), ];
        let tmp17Result = null != memo1;
        if (tmp17Result) {
          callback1 = { selectedProduct: memo1, style: null };
          wishlistButton = wishlistButton.wishlistButton;
          callback1.style = wishlistButton;
          tmp17Result = closure_9(onPress(9011), callback1);
        }
        items7[1] = tmp17Result;
        obj4.children = items7;
        let tmp15Result = closure_10(memo, obj4);
      } else {
        const obj6 = { sku: stateFromStores, size, overlay: tmp(8946).WishlistItemCardOverlay.LOCKED, onPress: tmp10 };
        tmp15Result = closure_9(onPress(12735), obj6);
        const tmp13 = onPress(12735);
      }
    }
  }
  return tmp23;
});
ReactCompilerGating = fn(558);
let obj5 = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", paddingBottom: nativeDefault.space.PX_8 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/ShopThisLookActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ShopThisLookActionSheet(arg0) {
  const cResult = cardWidth(576).c(28);
  ({ userId, guildId } = arg0);
  const tmp4 = closure_11();
  let obj = cardWidth(576);
  const equippedCollectibleSkuIds = cardWidth(8317).useEquippedCollectibleSkuIds(userId, guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { maxWidth: ACTION_SHEET_MAX_WIDTH };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  const tmp8 = analyticsLocations(12971)(first);
  cardWidth = tmp8.cardWidth;
  ({ rowWidth, gap } = tmp8);
  let obj2 = cardWidth(8317);
  analyticsLocations = analyticsLocations(6841)(analyticsLocations(6865).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
  if (cResult[1] !== analyticsLocations) {
    const fn = function k(initialProductSkuId) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const obj2 = CollectiblesActionCreators;
      const result = obj2.openCollectiblesShopMobile({ initialProductSkuId, analyticsLocations, analyticsSource: AnalyticsLocationDefault.USER_PROFILE_OVERFLOW_MENU });
    };
    cResult[1] = analyticsLocations;
    cResult[2] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  dependencyMap = tmp10;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp7(6865).SHOP_THIS_LOOK_ACTION_SHEET];
    cResult[3] = items;
    let tmp11 = items;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.xNdRDO);
    cResult[4] = stringResult;
    let tmp12 = stringResult;
  } else {
    tmp12 = cResult[4];
  }
  ({ container, description } = tmp4);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t["ws+0Lr"]);
    cResult[5] = stringResult1;
    let tmp14 = stringResult1;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] !== tmp4.description) {
    const obj4 = { variant: "text-sm/medium", color: "text-subtle", style: description, children: tmp14 };
    const tmp18 = closure_9(tmp(5086).Text, obj4);
    cResult[6] = tmp4.description;
    cResult[7] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === gap) {
    if (cResult[9] === rowWidth) {
      let tmp19 = cResult[10];
    }
    if (cResult[11] === tmp4.itemsContainer) {
      if (cResult[12] === tmp19) {
        let tmp20 = cResult[13];
      }
      if (cResult[14] === cardWidth) {
        if (cResult[15] === tmp10) {
          if (cResult[16] === equippedCollectibleSkuIds) {
            if (cResult[21] === tmp20) {
              if (cResult[22] === tmp21) {
                let tmp25 = cResult[23];
              }
              if (cResult[24] === tmp4.container) {
                if (cResult[25] === tmp25) {
                  if (cResult[26] === tmp16) {
                    let tmp29 = cResult[27];
                  }
                  return tmp29;
                }
              }
              const obj5 = { value: tmp11, children: null };
              const obj6 = { startExpanded: true, title: tmp12, children: null };
              const obj7 = { style: container, children: null };
              const items1 = [tmp16, tmp25];
              obj7.children = items1;
              obj6.children = closure_10(closure_5, obj7);
              obj5.children = closure_9(tmp7(10505), obj6);
              const tmp34 = closure_9(tmp(6841).AnalyticsLocationProvider, obj5);
              cResult[24] = tmp4.container;
              cResult[25] = tmp25;
              cResult[26] = tmp16;
              cResult[27] = tmp34;
              tmp29 = tmp34;
              const tmp7Result = tmp7(10505);
            }
            const obj8 = { style: tmp20, children: cResult[17] };
            const tmp28 = closure_9(closure_5, obj8);
            cResult[21] = tmp20;
            cResult[22] = cResult[17];
            cResult[23] = tmp28;
            tmp25 = tmp28;
          }
        }
      }
      if (cResult[18] === cardWidth) {
        if (cResult[19] === tmp10) {
          let tmp22 = cResult[20];
        }
        const mapped = equippedCollectibleSkuIds.map(tmp22);
        cResult[14] = cardWidth;
        cResult[15] = tmp10;
        cResult[16] = equippedCollectibleSkuIds;
        cResult[17] = mapped;
      }
      const fn2 = function x(skuId) {
        size = skuId;
        return closure_1_9(closure_1_12, {
          skuId,
          size,
          onPress() {
            return closure_2(closure_0);
          }
        }, skuId);
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
  const tmp9 = analyticsLocations(6841);
}) : (function ShopThisLookActionSheet(arg0) {
  _require = undefined;
  let analyticsLocations;
  ({ userId, guildId } = arg0);
  const tmp = closure_11();
  const equippedCollectibleSkuIds = require("useMaybeFetchEquippedCollectibleProducts").useEquippedCollectibleSkuIds(userId, guildId);
  let obj = require("useMaybeFetchEquippedCollectibleProducts");
  let obj2 = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  ({ cardWidth: c0, rowWidth, gap } = analyticsLocations(12971)({ maxWidth: ACTION_SHEET_MAX_WIDTH }));
  const tmp2 = analyticsLocations(12971)({ maxWidth: ACTION_SHEET_MAX_WIDTH });
  analyticsLocations = analyticsLocations(6841)(analyticsLocations(6865).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
  const items = [analyticsLocations];
  dependencyMap = noop.useCallback((initialProductSkuId) => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = CollectiblesActionCreators;
    const result = obj2.openCollectiblesShopMobile({ initialProductSkuId, analyticsLocations, analyticsSource: AnalyticsLocationDefault.USER_PROFILE_OVERFLOW_MENU });
  }, items);
  const obj3 = { value: null, children: null };
  const items1 = [analyticsLocations(6865).SHOP_THIS_LOOK_ACTION_SHEET];
  obj3.value = items1;
  const obj4 = { startExpanded: true, title: null, children: null };
  const tmp3 = analyticsLocations(6841);
  const intl = require("util").intl;
  obj4.title = intl.string(require("util").t.xNdRDO);
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: null };
  const intl2 = require("util").intl;
  obj6.children = intl2.string(require("util").t["ws+0Lr"]);
  const items2 = [closure_9(require("Text/Text").Text, obj6), ];
  const obj7 = {
    style: null,
    children: equippedCollectibleSkuIds.map((skuId) => {
      size = skuId;
      return closure_1_9(closure_1_12, {
        skuId,
        size,
        onPress() {
          return closure_2(closure_0);
        }
      }, skuId);
    })
  };
  const items3 = [tmp.itemsContainer, { gap, width: rowWidth }];
  obj7.style = items3;
  items2[1] = closure_9(closure_5, obj7);
  obj5.children = items2;
  obj4.children = closure_10(closure_5, obj5);
  obj3.children = closure_9(analyticsLocations(10505), obj4);
  return closure_9(require("useAnalyticsLocations").AnalyticsLocationProvider, obj3);
});