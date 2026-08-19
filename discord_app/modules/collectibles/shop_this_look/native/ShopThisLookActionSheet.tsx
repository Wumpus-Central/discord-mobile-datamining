// === Module 12340: ShopThisLookCard ===

// Module 12340 (ShopThisLookCard)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import getFetchState from "getFetchState" /* 8963 */;
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO" /* 6951 */;
import { UserProfileThemeTypes } from "ARBITRARY_LARGE_OFFSET" /* 7186 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
function ShopThisLookCard(skuId) {
  skuId = skuId.skuId;
  ({ size, onPress } = skuId);
  let memo;
  closure_6 = undefined;
  let callback;
  let wishlistButton = callback3();
  let obj = skuId(11998);
  const collectiblesShopProduct = obj.useCollectiblesShopProduct(skuId, { needsCategory: false, shouldFetchProduct: false });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  obj1 = skuId(589);
  const items = [closure_6];
  const items1 = [skuId];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const productsForSku = ref.getProductsForSku(skuId);
    let found;
    if (productsForSku != null) {
      found = productsForSku.flatMap((item, index) => item.skus).find((item, index) => item.id === closure_0);
      const flatMapResult = productsForSku.flatMap((item, index) => item.skus);
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
  memo = stateFromStores.useMemo(() => skuId(_undefined[13]).isShoppableCollectibleSku(stateFromStores), items2);
  const items3 = [product, skuId];
  const memo1 = stateFromStores.useMemo(() => {
    if (null == _undefined) {
      return null;
    } else {
      if (obj.getIsVariantProduct(_undefined)) {
        const _Math = Math;
        const variants = _undefined.variants;
        const bound = Math.max(0, variants.findIndex((item, index) => item.skuId === closure_0));
        return skuId(_undefined[14]).getSelectedProduct(_undefined, bound);
      } else {
        return _undefined;
      }
      obj = skuId(_undefined[14]);
    }
  }, items3);
  closure_6 = stateFromStores.useRef(false);
  const items4 = [stateFromStores, skuId, type, memo];
  const effect = stateFromStores.useEffect(() => {
    let current = null == stateFromStores;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      skuId(_undefined[15]);
      const obj = { action: null, skuId: null, productType: null, isDisabled: null, source: null };
      obj[0] = skuId(_undefined[15]).ShopThisLookRowAction.ROW_VIEWED;
      obj[1] = skuId;
      obj[2] = type;
      obj[3] = !memo;
      obj[4] = UserProfileThemeTypes.ACTION_SHEET;
      const result = obj.trackShopThisLookRowAction(obj);
    }
  }, items4);
  const items5 = [skuId, type, memo];
  callback = stateFromStores.useCallback(() => {
    skuId(_undefined[15]);
    const obj = { action: skuId(_undefined[15]).ShopThisLookRowAction.ROW_CLICKED, skuId, productType: type, isDisabled: !memo, source: UserProfileThemeTypes.ACTION_SHEET };
    const result = obj.trackShopThisLookRowAction(obj);
  }, items5);
  const items6 = [callback, onPress];
  let callback1 = stateFromStores.useCallback(() => {
    callback();
    onPress();
  }, items6);
  [][0] = callback;
  if ("loading" === collectiblesShopProduct.state) {
    obj = { size: null, renderPreview: null, accessibilityHidden: true };
    obj[0] = size;
    obj[1] = function renderPreview() {
      return callback(type, {});
    };
    let tmp23 = callback(onPress(9182), obj);
  } else {
    tmp23 = null;
    if (null != stateFromStores) {
      if (memo) {
        obj = { style: null, children: null };
        obj[0] = wishlistButton.cardWrapper;
        obj1 = { sku: null, size: null, onPress: null };
        obj1[0] = stateFromStores;
        obj1[1] = size;
        obj1[2] = callback1;
        const items7 = [callback(onPress(10367), obj1), ];
        let tmp17Result = null != memo1;
        if (tmp17Result) {
          callback1 = { selectedProduct: null, style: null };
          callback1[0] = memo1;
          wishlistButton = wishlistButton.wishlistButton;
          callback1[1] = wishlistButton;
          tmp17Result = tmp17(onPress(9240), callback1);
        }
        items7[1] = tmp17Result;
        obj[1] = items7;
        let tmp15Result = callback(memo, obj);
        tmp17 = callback;
      } else {
        const obj2 = { sku: null, size: null, overlay: null, onPress: null };
        obj2[0] = stateFromStores;
        obj2[1] = size;
        obj2[2] = skuId(9182).WishlistItemCardOverlay.LOCKED;
        obj2[3] = tmp10;
        tmp15Result = callback(onPress(10367), obj2);
        const tmp13 = onPress(10367);
      }
    }
  }
  return tmp23;
}
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginTop: -ThemesDefault.space.PX_8 };
createCacheKey[2] = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", paddingBottom: ThemesDefault.space.PX_8 };
createCacheKey[3] = { position: "relative" };
let obj3 = {};
const merged = Object.assign(require("SourceIcon").CARD_TOP_RIGHT_OVERLAY_POSITION);
obj3.zIndex = 1;
createCacheKey[4] = obj3;
let closure_11 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/collectibles/shop_this_look/native/ShopThisLookActionSheet.tsx");

export default function ShopThisLookActionSheet(arg0) {
  let _require;
  let analyticsLocations;
  ({ userId, guildId } = arg0);
  const tmp = callback3();
  let obj = _require(8960);
  const equippedCollectibleSkuIds = obj.useEquippedCollectibleSkuIds(userId, guildId);
  obj = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  ({ cardWidth: c0, rowWidth, gap } = analyticsLocations(12317)(obj));
  const tmp2 = analyticsLocations(12317)(obj);
  analyticsLocations = analyticsLocations(7139)(analyticsLocations(7159).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
  const items = [analyticsLocations];
  dependencyMap = React.useCallback((initialProductSkuId) => {
    let obj = analyticsLocations(4342);
    obj.hideActionSheet();
    obj = { initialProductSkuId, analyticsLocations, analyticsSource: analyticsLocations(7159).USER_PROFILE_OVERFLOW_MENU };
    const result = _undefined(5300).openCollectiblesShopMobile(obj);
  }, items);
  obj = { value: null, children: null };
  const items1 = [analyticsLocations(7159).SHOP_THIS_LOOK_ACTION_SHEET];
  obj[0] = items1;
  obj1 = { startExpanded: true, title: null, children: null };
  const tmp3 = analyticsLocations(7139);
  const intl = _require(1236).intl;
  obj1[1] = intl.string(_require(1236).t.xNdRDO);
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: null };
  const intl2 = _require(1236).intl;
  obj3[3] = intl2.string(_require(1236).t["ws+0Lr"]);
  const items2 = [callback(_require(4734).Text, obj3), ];
  const tmp4 = analyticsLocations(9450);
  const items3 = [tmp.itemsContainer, { gap, width: rowWidth }];
  items2[1] = callback(closure_5, {
    style: items3,
    children: equippedCollectibleSkuIds.map((item, index) => {
      closure_0 = item;
      return closure_1_9(ShopThisLookCard, {
        skuId: item,
        size: closure_0,
        onPress() {
          return closure_1_2(closure_0);
        }
      }, item);
    })
  });
  obj2[1] = items2;
  obj1[2] = callback2(closure_5, obj2);
  obj[1] = callback(tmp4, obj1);
  return callback(_require(7139).AnalyticsLocationProvider, obj);
};