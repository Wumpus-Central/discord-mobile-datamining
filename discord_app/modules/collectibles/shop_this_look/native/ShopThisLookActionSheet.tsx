// discord_app/modules/collectibles/shop_this_look/native/ShopThisLookActionSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../storefront/StorefrontProductStore.tsx";
import { ACTION_SHEET_MAX_WIDTH } from "../../../action_sheet/native/ActionSheetConstants.tsx";
import { UserProfileThemeTypes } from "../../../user_profile/native/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { useEquippedCollectibleSkuIds } from "../../hooks/useMaybeFetchEquippedCollectibleProducts.tsx";

const require = arg1;
function ShopThisLookCard(skuId) {
  skuId = skuId.skuId;
  ({ size, onPress } = skuId);
  dependencyMap = undefined;
  let stateFromStores;
  let type;
  let memo;
  closure_6 = undefined;
  let callback;
  let wishlistButton = callback3();
  let obj = skuId(12812);
  const collectiblesShopProduct = obj.useCollectiblesShopProduct(skuId, {
    needsCategory: false,
    shouldFetchProduct: false,
  });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  obj1 = skuId(586);
  const items = [closure_6];
  const items1 = [skuId];
  stateFromStores = obj1.useStateFromStores(
    items,
    () => {
      const productsForSku = ref.getProductsForSku(skuId);
      let found;
      if (productsForSku != null) {
        found = productsForSku.flatMap((skus) => skus.skus).find((id) => id.id === closure_0);
        const flatMapResult = productsForSku.flatMap((skus) => skus.skus);
      }
      return found;
    },
    items1,
  );
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
        const bound = Math.max(
          0,
          variants.findIndex((skuId) => skuId.skuId === closure_0),
        );
        return tmp2(tmp3[14]).getSelectedProduct(tmp, bound);
      } else {
        return tmp;
      }
      obj = skuId(_undefined[14]);
      tmp2 = skuId;
      tmp3 = _undefined;
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
      let obj = skuId(_undefined[15]);
      obj = { action: null, skuId: null, productType: null, isDisabled: null, source: null };
      obj[0] = skuId(_undefined[15]).ShopThisLookRowAction.ROW_VIEWED;
      obj[1] = skuId;
      obj[2] = type;
      obj[3] = !memo;
      obj[4] = closure_1_8.ACTION_SHEET;
      const result = obj.trackShopThisLookRowAction(obj);
    }
  }, items4);
  const items5 = [skuId, type, memo];
  callback = stateFromStores.useCallback(() => {
    let obj = skuId(_undefined[15]);
    obj = {
      action: skuId(_undefined[15]).ShopThisLookRowAction.ROW_CLICKED,
      skuId,
      productType: type,
      isDisabled: !memo,
      source: closure_1_8.ACTION_SHEET,
    };
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
    let tmp23 = callback(onPress(11005), obj);
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
        const items7 = [callback(onPress(11001), obj1)];
        let tmp17Result = null != memo1;
        if (tmp17Result) {
          callback1 = { selectedProduct: null, style: null };
          callback1[0] = memo1;
          wishlistButton = wishlistButton.wishlistButton;
          callback1[1] = wishlistButton;
          tmp17Result = tmp17(tmp18(12771), callback1);
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
        obj2[2] = skuId(11005).WishlistItemCardOverlay.LOCKED;
        obj2[3] = tmp10;
        tmp15Result = callback(onPress(11001), obj2);
        const tmp13 = onPress(11001);
      }
    }
  }
  return tmp23;
}
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, description: null, itemsContainer: null, cardWrapper: null, wishlistButton: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginTop: -ThemesDefault.space.PX_8 };
let obj1 = { textAlign: "center", marginTop: -ThemesDefault.space.PX_8 };
createCacheKey[2] = {
  alignSelf: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  paddingBottom: ThemesDefault.space.PX_8,
};
createCacheKey[3] = { position: "relative" };
let obj3 = {};
const merged = Object.assign(require("SourceIcon").CARD_TOP_RIGHT_OVERLAY_POSITION);
obj3.zIndex = 1;
createCacheKey[4] = obj3;
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj2 = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", paddingBottom: ThemesDefault.space.PX_8 };
let result = require("set").fileFinishedImporting(
  "modules/collectibles/shop_this_look/native/ShopThisLookActionSheet.tsx",
);

export default function ShopThisLookActionSheet(arg0) {
  let _require;
  let analyticsLocations;
  dependencyMap = undefined;
  ({ userId, guildId } = arg0);
  const tmp = callback3();
  let obj = useEquippedCollectibleSkuIds;
  const equippedCollectibleSkuIds = obj.useEquippedCollectibleSkuIds(userId, guildId);
  obj = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  ({ cardWidth: c0, rowWidth, gap } = analyticsLocations(12758)(obj));
  const tmp2 = analyticsLocations(12758)(obj);
  analyticsLocations = analyticsLocations(5962)(analyticsLocations(5982).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
  const items = [analyticsLocations];
  dependencyMap = React.useCallback((initialProductSkuId) => {
    let obj = analyticsLocations(4445);
    obj.hideActionSheet();
    obj = {
      initialProductSkuId,
      analyticsLocations,
      analyticsSource: analyticsLocations(5982).USER_PROFILE_OVERFLOW_MENU,
    };
    const result = _undefined(7296).openCollectiblesShopMobile(obj);
  }, items);
  obj = { value: null, children: null };
  const items1 = [analyticsLocations(5982).SHOP_THIS_LOOK_ACTION_SHEET];
  obj[0] = items1;
  obj1 = { startExpanded: true, title: null, children: null };
  const tmp3 = analyticsLocations(5962);
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj1[1] = intl.string(require("../../../../intl/index.native.tsx").t.xNdRDO);
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: null };
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj3[3] = intl2.string(require("../../../../intl/index.native.tsx").t["ws+0Lr"]);
  const items2 = [callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj3)];
  const tmp4 = analyticsLocations(9236);
  const items3 = [tmp.itemsContainer, { gap, width: rowWidth }];
  items2[1] = callback(closure_5, {
    style: items3,
    children: equippedCollectibleSkuIds.map((skuId) => {
      closure_0 = skuId;
      return closure_1_9(
        closure_1_12,
        {
          skuId,
          size: closure_0,
          onPress() {
            return closure_1_2(closure_0);
          },
        },
        skuId,
      );
    }),
  });
  obj2[1] = items2;
  obj1[2] = callback2(closure_5, obj2);
  obj[1] = callback(tmp4, obj1);
  return callback(require("../../../app_analytics/useAnalyticsLocations.tsx").AnalyticsLocationProvider, obj);
}
