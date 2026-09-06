// === Module 13107: ShopThisLookActionSheet ===

// Module 13107 (ShopThisLookActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7541 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7553 */;
import ShopThisLookUtils from "ShopThisLookUtils" /* 13112 */;
import ShopThisLookAnalyticsUtils from "ShopThisLookAnalyticsUtils" /* 13114 */;
import noop from "module_19" /* 19 */;
import StorefrontProductStore from "StorefrontProductStore" /* 8220 */;

require = fn;
function ShopThisLookCard(skuId) {
  skuId = skuId.skuId;
  ({ size, onPress } = skuId);
  let memo;
  let ref;
  let callback;
  let wishlistButton = closure_11();
  let obj = skuId(13108);
  const collectiblesShopProduct = obj.useCollectiblesShopProduct(skuId, { needsCategory: false, shouldFetchProduct: false });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  let obj1 = skuId(504);
  const items = [ref];
  const items1 = [skuId];
  const stateFromStores = obj1.useStateFromStores(items, () => {
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
      const obj = { action: ShopThisLookAnalyticsUtils.ShopThisLookRowAction.ROW_VIEWED, skuId, productType: type, isDisabled: !memo, source: UserProfileThemeTypes.ACTION_SHEET };
      const result = obj.trackShopThisLookRowAction(obj);
    }
  }, items4);
  const items5 = [skuId, type, memo];
  callback = stateFromStores.useCallback(() => {
    const obj = { action: ShopThisLookAnalyticsUtils.ShopThisLookRowAction.ROW_CLICKED, skuId, productType: type, isDisabled: !memo, source: UserProfileThemeTypes.ACTION_SHEET };
    const result = obj.trackShopThisLookRowAction(obj);
  }, items5);
  const items6 = [callback, onPress];
  let callback1 = stateFromStores.useCallback(() => {
    callback();
    onPress();
  }, items6);
  [][0] = callback;
  if ("loading" === collectiblesShopProduct.state) {
    obj = {
      size,
      renderPreview() {
          return closure_1_9(type, {});
        },
      accessibilityHidden: true
    };
    let tmp23 = closure_9(onPress(8773), obj);
  } else {
    tmp23 = null;
    if (null != stateFromStores) {
      if (memo) {
        obj = { style: wishlistButton.cardWrapper, children: null };
        obj1 = { sku: stateFromStores, size, onPress: callback1 };
        const items7 = [closure_9(onPress(11033), obj1), ];
        let tmp17Result = null != memo1;
        if (tmp17Result) {
          callback1 = { selectedProduct: memo1, style: null };
          wishlistButton = wishlistButton.wishlistButton;
          callback1.style = wishlistButton;
          tmp17Result = closure_9(onPress(8839), callback1);
        }
        items7[1] = tmp17Result;
        obj.children = items7;
        let tmp15Result = closure_10(memo, obj);
      } else {
        const obj2 = { sku: stateFromStores, size, overlay: skuId(8773).WishlistItemCardOverlay.LOCKED, onPress: tmp10 };
        tmp15Result = closure_9(onPress(11033), obj2);
        const tmp13 = onPress(11033);
      }
    }
  }
  return tmp23;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ACTION_SHEET_MAX_WIDTH = fn(7151).ACTION_SHEET_MAX_WIDTH;
const UserProfileThemeTypes = fn(7208).UserProfileThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null, description: null, itemsContainer: null, cardWrapper: null, wishlistButton: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.description = { textAlign: "center", marginTop: -nativeDefault.space.PX_8 };
let obj1 = { textAlign: "center", marginTop: -nativeDefault.space.PX_8 };
createStyles.itemsContainer = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", paddingBottom: nativeDefault.space.PX_8 };
createStyles.cardWrapper = { position: "relative" };
let obj3 = {};
const merged = Object.assign(fn(8773).CARD_TOP_RIGHT_OVERLAY_POSITION);
obj3.zIndex = 1;
createStyles.wishlistButton = obj3;
let closure_11 = createStyles.createStyles(createStyles);
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/ShopThisLookActionSheet.tsx");

export default function ShopThisLookActionSheet(arg0) {
  _require = undefined;
  let analyticsLocations;
  ({ userId, guildId } = arg0);
  const tmp = closure_11();
  let obj = require("useMaybeFetchEquippedCollectibleProducts");
  const equippedCollectibleSkuIds = obj.useEquippedCollectibleSkuIds(userId, guildId);
  obj = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  ({ cardWidth: c0, rowWidth, gap } = analyticsLocations(13086)(obj));
  const tmp2 = analyticsLocations(13086)(obj);
  analyticsLocations = analyticsLocations(7162)(analyticsLocations(7182).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
  const items = [analyticsLocations];
  dependencyMap = noop.useCallback((initialProductSkuId) => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    obj = { initialProductSkuId, analyticsLocations, analyticsSource: AnalyticsLocationDefault.USER_PROFILE_OVERFLOW_MENU };
    const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj);
  }, items);
  obj = { value: null, children: null };
  const items1 = [analyticsLocations(7182).SHOP_THIS_LOOK_ACTION_SHEET];
  obj.value = items1;
  const obj1 = { startExpanded: true, title: null, children: null };
  const tmp3 = analyticsLocations(7162);
  const intl = require("util").intl;
  obj1.title = intl.string(require("util").t.xNdRDO);
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: null };
  const intl2 = require("util").intl;
  obj3.children = intl2.string(require("util").t["ws+0Lr"]);
  const items2 = [closure_9(require("Text/Text").Text, obj3), ];
  const obj4 = {
    style: null,
    children: equippedCollectibleSkuIds.map((skuId) => {
      size = skuId;
      return closure_1_9(ShopThisLookCard, {
        skuId,
        size,
        onPress() {
          return closure_2(closure_0);
        }
      }, skuId);
    })
  };
  const items3 = [tmp.itemsContainer, { gap, width: rowWidth }];
  obj4.style = items3;
  items2[1] = closure_9(closure_5, obj4);
  obj2.children = items2;
  obj1.children = closure_10(closure_5, obj2);
  obj.children = closure_9(analyticsLocations(11151), obj1);
  return closure_9(require("useAnalyticsLocations").AnalyticsLocationProvider, obj);
};