// discord_app/modules/collectibles/shop_this_look/native/ShopThisLookActionSheet.tsx
import useCardGridLayout from "useCardGridLayout";
import get_ActivityIndicator from "WishlistButtonBase";
import getFetchState from "getFetchState";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { UserProfileThemeTypes } from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "QUICK_SWITCHER";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { context } from "../../../app_analytics/useAnalyticsLocations.tsx";
import { useEquippedCollectibleSkuIds } from "../../hooks/useMaybeFetchEquippedCollectibleProducts.tsx";

let c10;
let c4;
let c5;
let c9;
const require = arg1;
function ShopThisLookCard(skuId) {
  let onPress;
  let size;
  skuId = skuId.skuId;
  ({ size, onPress } = skuId);
  let dependencyMap;
  let stateFromStores;
  let type;
  let memo;
  let getFetchState;
  let callback;
  let wishlistButton = createCacheKey();
  let obj = skuId(12233);
  const collectiblesShopProduct = obj.useCollectiblesShopProduct(skuId, { needsCategory: false, shouldFetchProduct: false });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  let obj1 = skuId(589);
  const items = [getFetchState];
  const items1 = [skuId];
  stateFromStores = obj1.useStateFromStores(items, () => {
    const productsForSku = ref.getProductsForSku(skuId);
    let found;
    if (productsForSku != null) {
      found = productsForSku.flatMap((skus) => skus.skus).find((id) => id.id === closure_0);
      const flatMapResult = productsForSku.flatMap((skus) => skus.skus);
    }
    return found;
  }, items1);
  type = undefined;
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
      if (obj.getIsVariantProduct(tmp)) {
        const _Math = Math;
        const variants = tmp.variants;
        const bound = Math.max(0, variants.findIndex((skuId) => skuId.skuId === closure_0));
        return tmp2(tmp3[14]).getSelectedProduct(tmp, bound);
      } else {
        return tmp;
      }
      obj = skuId(_undefined[14]);
      tmp2 = skuId;
      tmp3 = _undefined;
    }
  }, items3);
  getFetchState = stateFromStores.useRef(false);
  const items4 = [stateFromStores, skuId, type, memo];
  const effect = stateFromStores.useEffect(() => {
    let current = null == stateFromStores;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      let obj = skuId(_undefined[15]);
      obj = { action: null, skuId: null, productType: null, isDisabled: null, source: null };
      obj[0] = skuId(_undefined[15]).ShopThisLookRowAction.ROW_VIEWED;
      obj[1] = skuId;
      obj[2] = type;
      obj[3] = !memo;
      obj[4] = outer1_8.ACTION_SHEET;
      const result = obj.trackShopThisLookRowAction(obj);
    }
  }, items4);
  const items5 = [skuId, type, memo];
  callback = stateFromStores.useCallback(() => {
    let obj = skuId(_undefined[15]);
    obj = { action: skuId(_undefined[15]).ShopThisLookRowAction.ROW_CLICKED, skuId, productType: type, isDisabled: !memo, source: outer1_8.ACTION_SHEET };
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
    let tmp23 = callback(onPress(9405), obj);
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
        const items7 = [callback(onPress(10151), obj1), ];
        let tmp17Result = null != memo1;
        if (tmp17Result) {
          callback1 = { selectedProduct: null, style: null };
          callback1[0] = memo1;
          wishlistButton = wishlistButton.wishlistButton;
          callback1[1] = wishlistButton;
          tmp17Result = tmp17(tmp18(9460), callback1);
        }
        items7[1] = tmp17Result;
        obj[1] = items7;
        let tmp15Result = closure_10(memo, obj);
        const tmp15 = closure_10;
        const tmp16 = memo;
        tmp17 = callback;
        tmp18 = onPress;
      } else {
        const obj2 = { sku: null, size: null, overlay: null, onPress: null };
        obj2[0] = stateFromStores;
        obj2[1] = size;
        obj2[2] = skuId(9405).WishlistItemCardOverlay.LOCKED;
        obj2[3] = tmp10;
        tmp15Result = callback(onPress(10151), obj2);
        const tmp13 = onPress(10151);
      }
    }
  }
  return tmp23;
}
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, description: null, itemsContainer: null, cardWrapper: null, wishlistButton: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginTop: -require("Themes").space.PX_8 };
let obj1 = { textAlign: "center", marginTop: -require("Themes").space.PX_8 };
createCacheKey[2] = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", paddingBottom: require("Themes").space.PX_8 };
createCacheKey[3] = { position: "relative" };
let obj3 = {};
const merged = Object.assign(require("SourceIcon").CARD_TOP_RIGHT_OVERLAY_POSITION);
obj3.zIndex = 1;
createCacheKey[4] = obj3;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", paddingBottom: require("Themes").space.PX_8 };
let result = require("getFetchState").fileFinishedImporting("modules/collectibles/shop_this_look/native/ShopThisLookActionSheet.tsx");

export default function ShopThisLookActionSheet(arg0) {
  let c0;
  let gap;
  let guildId;
  let rowWidth;
  let userId;
  let _require;
  let analyticsLocations;
  let dependencyMap;
  ({ userId, guildId } = arg0);
  const tmp = createCacheKey();
  let obj = _useEquippedCollectibleSkuIds;
  const equippedCollectibleSkuIds = obj.useEquippedCollectibleSkuIds(userId, guildId);
  obj = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  ({ cardWidth: c0, rowWidth, gap } = analyticsLocations(12547)(obj));
  const tmp2 = analyticsLocations(12547)(obj);
  analyticsLocations = analyticsLocations(5768)(analyticsLocations(5788).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
  const items = [analyticsLocations];
  dependencyMap = React.useCallback((initialProductSkuId) => {
    let obj = analyticsLocations(4310);
    obj.hideActionSheet();
    obj = { initialProductSkuId, analyticsLocations, analyticsSource: analyticsLocations(5788).USER_PROFILE_OVERFLOW_MENU };
    const result = _undefined(7048).openCollectiblesShopMobile(obj);
  }, items);
  obj = { value: null, children: null };
  const items1 = [analyticsLocations(5788).SHOP_THIS_LOOK_ACTION_SHEET];
  obj[0] = items1;
  const obj1 = { startExpanded: true, title: null, children: null };
  const tmp3 = analyticsLocations(5768);
  const intl = _getSystemLocale.intl;
  obj1[1] = intl.string(_getSystemLocale.t.xNdRDO);
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: null };
  const intl2 = _getSystemLocale.intl;
  obj3[3] = intl2.string(_getSystemLocale.t["ws+0Lr"]);
  const items2 = [callback(_Text.Text, obj3), ];
  const tmp4 = analyticsLocations(9518);
  const items3 = [tmp.itemsContainer, { gap, width: rowWidth }];
  items2[1] = callback(closure_5, {
    style: items3,
    children: equippedCollectibleSkuIds.map((skuId) => {
      let closure_0 = skuId;
      return outer1_9(outer1_12, {
        skuId,
        size: closure_0,
        onPress() {
          return outer1_2(closure_0);
        }
      }, skuId);
    })
  });
  obj2[1] = items2;
  obj1[2] = callback2(closure_5, obj2);
  obj[1] = callback(tmp4, obj1);
  return callback(_context.AnalyticsLocationProvider, obj);
};