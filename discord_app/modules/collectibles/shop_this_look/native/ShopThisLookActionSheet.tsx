// discord_app/modules/collectibles/shop_this_look/native/ShopThisLookActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../../CollectiblesActionCreators.tsx";
import CollectiblesProductUtils from "../../utils/CollectiblesProductUtils.tsx";
import ShopThisLookUtils from "../ShopThisLookUtils.tsx";
import ShopThisLookAnalyticsUtils from "../ShopThisLookAnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import StorefrontProductStore from "../../../storefront/StorefrontProductStore.tsx";

const require = globalThis.__r;

require = fn;
function ShopThisLookCard(skuId) {
  skuId = skuId.skuId;
  ({ size, onPress } = skuId);
  let memo;
  let ref;
  let callback;
  let wishlistButton = closure_11();
  const collectiblesShopProduct = skuId(9229).useCollectiblesShopProduct(skuId, {
    needsCategory: false,
    shouldFetchProduct: false,
  });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  let obj = skuId(9229);
  const tmp = skuId;
  const items = [ref];
  const items1 = [skuId];
  const stateFromStores = skuId(504).useStateFromStores(
    items,
    () => {
      const productsForSku = StorefrontProductStore.getProductsForSku(skuId);
      let found;
      if (productsForSku != null) {
        found = productsForSku.flatMap((skus) => skus.skus).find((id) => id.id === skuId);
        const flatMapResult = productsForSku.flatMap((skus) => skus.skus);
      }
      return found;
    },
    items1,
  );
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
        const bound = Math.max(
          0,
          variants.findIndex((skuId) => skuId.skuId === skuId),
        );
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
      const obj2 = {
        action: ShopThisLookAnalyticsUtils.ShopThisLookRowAction.ROW_VIEWED,
        skuId,
        productType: type,
        isDisabled: !memo,
        source: UserProfileThemeTypes.ACTION_SHEET,
      };
      const result = ShopThisLookAnalyticsUtils.trackShopThisLookRowAction(obj2);
    }
  }, items4);
  const items5 = [skuId, type, memo];
  callback = stateFromStores.useCallback(() => {
    const obj = ShopThisLookAnalyticsUtils;
    const result = obj.trackShopThisLookRowAction({
      action: ShopThisLookAnalyticsUtils.ShopThisLookRowAction.ROW_CLICKED,
      skuId,
      productType: type,
      isDisabled: !memo,
      source: UserProfileThemeTypes.ACTION_SHEET,
    });
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
      accessibilityHidden: true,
    };
    let tmp23 = closure_9(onPress(9129), obj3);
  } else {
    tmp23 = null;
    if (null != stateFromStores) {
      if (memo) {
        const obj4 = { style: wishlistButton.cardWrapper, children: null };
        const obj5 = { sku: stateFromStores, size, onPress: callback1 };
        const items7 = [closure_9(onPress(11384), obj5)];
        let tmp17Result = null != memo1;
        if (tmp17Result) {
          callback1 = { selectedProduct: memo1, style: null };
          wishlistButton = wishlistButton.wishlistButton;
          callback1.style = wishlistButton;
          tmp17Result = closure_9(onPress(9194), callback1);
        }
        items7[1] = tmp17Result;
        obj4.children = items7;
        let tmp15Result = closure_10(memo, obj4);
      } else {
        const obj6 = { sku: stateFromStores, size, overlay: tmp(9129).WishlistItemCardOverlay.LOCKED, onPress: tmp10 };
        tmp15Result = closure_9(onPress(11384), obj6);
        const tmp13 = onPress(11384);
      }
    }
  }
  return tmp23;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ACTION_SHEET_MAX_WIDTH = fn(7482).ACTION_SHEET_MAX_WIDTH;
const UserProfileThemeTypes = fn(7539).UserProfileThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4827);
let obj2 = {
  container: { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 },
  description: null,
  itemsContainer: null,
  cardWrapper: null,
  wishlistButton: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.description = { textAlign: "center", marginTop: -nativeDefault.space.PX_8 };
let obj4 = { textAlign: "center", marginTop: -nativeDefault.space.PX_8 };
obj2.itemsContainer = {
  alignSelf: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  paddingBottom: nativeDefault.space.PX_8,
};
obj2.cardWrapper = { position: "relative" };
let obj6 = {};
const merged = Object.assign(fn(9129).CARD_TOP_RIGHT_OVERLAY_POSITION);
obj6.zIndex = 1;
obj2.wishlistButton = obj6;
let closure_11 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/ShopThisLookActionSheet.tsx");

export default function ShopThisLookActionSheet(arg0) {
  _require = undefined;
  let analyticsLocations;
  ({ userId, guildId } = arg0);
  const tmp = closure_11();
  const equippedCollectibleSkuIds = require("useMaybeFetchEquippedCollectibleProducts").useEquippedCollectibleSkuIds(
    userId,
    guildId,
  );
  let obj = require("useMaybeFetchEquippedCollectibleProducts");
  let obj2 = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  ({ cardWidth: c0, rowWidth, gap } = analyticsLocations(13484)({ maxWidth: ACTION_SHEET_MAX_WIDTH }));
  const tmp2 = analyticsLocations(13484)({ maxWidth: ACTION_SHEET_MAX_WIDTH });
  analyticsLocations = analyticsLocations(7493)(analyticsLocations(7513).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
  const items = [analyticsLocations];
  dependencyMap = noop.useCallback((initialProductSkuId) => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = CollectiblesActionCreators;
    const result = obj2.openCollectiblesShopMobile({
      initialProductSkuId,
      analyticsLocations,
      analyticsSource: AnalyticsLocationDefault.USER_PROFILE_OVERFLOW_MENU,
    });
  }, items);
  const obj3 = { value: null, children: null };
  const items1 = [analyticsLocations(7513).SHOP_THIS_LOOK_ACTION_SHEET];
  obj3.value = items1;
  const obj4 = { startExpanded: true, title: null, children: null };
  const tmp3 = analyticsLocations(7493);
  const intl = require("util").intl;
  obj4.title = intl.string(require("util").t.xNdRDO);
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: null };
  const intl2 = require("util").intl;
  obj6.children = intl2.string(require("util").t["ws+0Lr"]);
  const items2 = [closure_9(require("Text/Text").Text, obj6)];
  const obj7 = {
    style: null,
    children: equippedCollectibleSkuIds.map((skuId) => {
      size = skuId;
      return closure_1_9(
        ShopThisLookCard,
        {
          skuId,
          size,
          onPress() {
            return closure_2(closure_0);
          },
        },
        skuId,
      );
    }),
  };
  const items3 = [tmp.itemsContainer, { gap, width: rowWidth }];
  obj7.style = items3;
  items2[1] = closure_9(closure_5, obj7);
  obj5.children = items2;
  obj4.children = closure_10(closure_5, obj5);
  obj3.children = closure_9(analyticsLocations(11498), obj4);
  return closure_9(require("useAnalyticsLocations").AnalyticsLocationProvider, obj3);
}
