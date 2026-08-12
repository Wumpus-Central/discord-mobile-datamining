// discord_app/modules/collectibles/shop_this_look/native/ShopThisLookActionSheet.tsx
import QUICK_SWITCHER from "QUICK_SWITCHER";
import get_ActivityIndicator from "useCardGridLayout";
import getFetchState from "getFetchState";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { UserProfileThemeTypes } from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "openCollectiblesShop";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
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
  let stateFromStores;
  let type;
  let memo;
  let closure_5;
  let callback;
  let obj = skuId(stateFromStores[10]);
  let obj1 = skuId(stateFromStores[11]);
  const items = [callback];
  const items1 = [skuId];
  stateFromStores = obj1.useStateFromStores(items, () => {
    const productsForSku = callback.getProductsForSku(skuId);
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
  memo = type.useMemo(() => skuId(stateFromStores[12]).isShoppableCollectibleSku(stateFromStores), items2);
  closure_5 = type.useRef(false);
  const items3 = [stateFromStores, skuId, type, memo];
  const effect = type.useEffect(() => {
    let current = null == stateFromStores;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      let obj = skuId(stateFromStores[13]);
      obj = { action: null, skuId: null, productType: null, isDisabled: null, source: null };
      obj[0] = skuId(stateFromStores[13]).ShopThisLookRowAction.ROW_VIEWED;
      obj[1] = skuId;
      obj[2] = type;
      obj[3] = !memo;
      obj[4] = outer1_8.ACTION_SHEET;
      const result = obj.trackShopThisLookRowAction(obj);
    }
  }, items3);
  const items4 = [skuId, type, memo];
  callback = type.useCallback(() => {
    let obj = skuId(stateFromStores[13]);
    obj = { action: skuId(stateFromStores[13]).ShopThisLookRowAction.ROW_CLICKED, skuId, productType: type, isDisabled: !memo, source: outer1_8.ACTION_SHEET };
    const result = obj.trackShopThisLookRowAction(obj);
  }, items4);
  const items5 = [callback, onPress];
  [][0] = callback;
  const callback1 = type.useCallback(() => {
    callback();
    onPress();
  }, items5);
  if ("loading" === obj.useCollectiblesShopProduct(skuId, { needsCategory: false, shouldFetchProduct: false }).state) {
    obj = { size: null, renderPreview: null, accessibilityHidden: true };
    obj[0] = size;
    obj[1] = function renderPreview() {
      return callback(memo, {});
    };
    let tmp10 = callback(onPress(tmp2[14]), obj);
  } else {
    tmp10 = null;
    if (null != stateFromStores) {
      if (memo) {
        obj = { sku: null, size: null, onPress: null };
        obj[0] = stateFromStores;
        obj[1] = size;
        obj[2] = callback1;
        obj1 = obj;
      } else {
        obj1 = { sku: null, size: null, overlay: null, onPress: null };
        obj1[0] = stateFromStores;
        obj1[1] = size;
        obj1[2] = skuId(tmp2[14]).WishlistItemCardOverlay.LOCKED;
        obj1[3] = tmp9;
      }
      callback(onPress(tmp2[15]), obj1);
      const tmp11 = callback;
      const tmp13 = onPress(tmp2[15]);
    }
  }
  return tmp10;
}
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, description: null, itemsContainer: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginTop: -require("Themes").space.PX_8 };
let obj1 = { textAlign: "center", marginTop: -require("Themes").space.PX_8 };
createCacheKey[2] = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", paddingBottom: require("Themes").space.PX_8 };
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
  analyticsLocations = analyticsLocations(5767)(analyticsLocations(5787).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
  const items = [analyticsLocations];
  dependencyMap = React.useCallback((initialProductSkuId) => {
    let obj = analyticsLocations(4312);
    obj.hideActionSheet();
    obj = { initialProductSkuId, analyticsLocations, analyticsSource: analyticsLocations(5787).USER_PROFILE_OVERFLOW_MENU };
    const result = _undefined(7042).openCollectiblesShopMobile(obj);
  }, items);
  obj = { startExpanded: true, title: null, children: null };
  const tmp3 = analyticsLocations(5767);
  const intl = _getSystemLocale.intl;
  obj[1] = intl.string(_getSystemLocale.t.xNdRDO);
  const obj1 = { style: tmp.container, children: null };
  const obj2 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: null };
  const intl2 = _getSystemLocale.intl;
  obj2[3] = intl2.string(_getSystemLocale.t["ws+0Lr"]);
  const items1 = [callback(_Text.Text, obj2), ];
  const tmp4 = analyticsLocations(9514);
  const items2 = [tmp.itemsContainer, { gap, width: rowWidth }];
  items1[1] = callback(closure_5, {
    style: items2,
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
  obj1[1] = items1;
  obj[2] = callback2(closure_5, obj1);
  return callback(tmp4, obj);
};