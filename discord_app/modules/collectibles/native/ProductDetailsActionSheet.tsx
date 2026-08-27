// discord_app/modules/collectibles/native/ProductDetailsActionSheet.tsx
import timestampDefault from "../../debug/Logger.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import context from "../CollectiblesAnalyticsContext.tsx";
import apexExperiment from "../experiments/ShopStandalonePdpMobileExperiment.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_9 from "../CollectiblesCategoryStore.tsx";
import { ShopCtaEnum } from "../CollectiblesShopConstants.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import { ThemeTypes } from "../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import ManaContext from "../../../../discord_common/js/packages/design/native.tsx";

require = arg1;
function PreviewProfileTrigger(handlePreviewPress) {
  handlePreviewPress = handlePreviewPress.handlePreviewPress;
  const onTrackPress = handlePreviewPress.onTrackPress;
  dependencyMap = undefined;
  closure_3 = undefined;
  importAllResult = undefined;
  closure_5 = undefined;
  const tmp = callback3();
  dependencyMap = tmp;
  let obj = handlePreviewPress(4172);
  const theme = obj.useThemeContext().theme;
  const isThemeLightResult = handlePreviewPress(1363).isThemeLight(theme);
  closure_3 = theme === ThemeTypes.MIDNIGHT;
  importAllResult = isThemeLightResult ? tmp.previewProfileButtonLight : tmp.previewProfileButtonDark;
  closure_5 = isThemeLightResult ? tmp.previewProfileButtonLightPressed : tmp.previewProfileButtonDarkPressed;
  let items = [handlePreviewPress, onTrackPress];
  obj = {
    style(pressed) {
      pressed = pressed.pressed;
      const items = [closure_2.previewProfileButton, closure_4, , ];
      let previewProfileButtonMidnight = closure_3;
      if (closure_3) {
        previewProfileButtonMidnight = closure_2.previewProfileButtonMidnight;
      }
      items[2] = previewProfileButtonMidnight;
      if (pressed) {
        pressed = closure_5;
      }
      items[3] = pressed;
      return items;
    },
    onPress: importAllResult.useCallback(() => {
      onTrackPress(closure_1_10.FULL_PROFILE_PREVIEW_BUTTON);
      handlePreviewPress();
    }, items),
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const intl = tmp2(1236).intl;
  obj[3] = intl.string(handlePreviewPress(1236).t["3Qcx6K"]);
  obj = { size: "md", color: onTrackPress(712).colors.INTERACTIVE_ICON_DEFAULT };
  obj[4] = callback2(handlePreviewPress(7676).EyeIcon, obj);
  return callback2(closure_7, obj);
}
function ProductDetailsActionSheetInner(arg0) {
  let ref1;
  ({ product, initialVariantIndex, analyticsLocations } = arg0);
  ref1 = importAllResult.useRef(null);
  const ref = importAllResult.useRef(null);
  return callback2(ref1(5574).BottomSheet, {
    scrollable: true,
    startExpanded: true,
    onExpand() {
      const current = ref1.current;
      let scrollToEndResult;
      if (current != null) {
        scrollToEndResult = current.scrollToEnd();
      }
      return scrollToEndResult;
    },
    onDismiss() {
      const current = ref1.current;
      let notifyDismissedResult;
      if (current != null) {
        notifyDismissedResult = current.notifyDismissed();
      }
      return notifyDismissedResult;
    },
    ref: importAllResult.useRef(null),
    children: callback2(closure_19, { ref: ref1, product, initialVariantIndex, analyticsLocations })
  });
}
function ManagedProductDetailsActionSheetInner(skuId) {
  skuId = skuId.skuId;
  const initialVariantIndex = skuId.initialVariantIndex;
  dependencyMap = undefined;
  let ref1;
  let obj = skuId(12489);
  const collectiblesShopProduct = obj.useCollectiblesShopProduct(skuId, { needsCategory: false, seedCategoryStore: true });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  ({ state, retry } = collectiblesShopProduct);
  obj1 = skuId(8016);
  const getOrFetchPurchases = obj1.useGetOrFetchPurchases();
  ({ hasPreviouslyFetched, fetchPurchasesError } = getOrFetchPurchases);
  ref1 = importAllResult.useRef(null);
  const items = [product, skuId, initialVariantIndex];
  if ("ready" === state) {
    if (hasPreviouslyFetched) {
      if (null != product) {
        obj = { ref: null, product: null, initialVariantIndex: null, analyticsLocations: null };
        obj[0] = ref1;
        obj[1] = product;
        obj[2] = tmp7;
        obj[3] = skuId.analyticsLocations;
        obj = { scrollable: true, startExpanded: true, onExpand: null, onDismiss: null, ref: null, children: null };
        obj[2] = function onExpand() {
          const current = ref1.current;
          let scrollToEndResult;
          if (current != null) {
            scrollToEndResult = current.scrollToEnd();
          }
          return scrollToEndResult;
        };
        obj[3] = function onDismiss() {
          const current = ref1.current;
          let notifyDismissedResult;
          if (current != null) {
            notifyDismissedResult = current.notifyDismissed();
          }
          return notifyDismissedResult;
        };
        obj[4] = ref;
        obj[5] = callback2(closure_19, obj);
        return callback2(tmp(5574).BottomSheet, obj);
      }
    }
  }
  if ("error" === state) {
    obj1 = { Illustration: null, body: null, children: null };
    obj1[0] = tmp(8833).NoResults;
    const intl = tmp(1236).intl;
    obj1[1] = intl.string(tmp(1236).t.eAn6z2);
    const obj2 = { text: null, onPress: null };
    const intl2 = tmp(1236).intl;
    obj2[0] = intl2.string(tmp(1236).t["+hivLW"]);
    obj2[1] = retry;
    obj1[2] = callback2(tmp(4880).Button, obj2);
    callback2(tmp(1297).EmptyState, obj1);
  } else {
    callback2(initialVariantIndex(12493), {});
  }
}
function ProductDetailsActionSheetWithOrderCTX(arg0) {
  analyticsLocations = arg0;
  let obj = apexExperiment;
  if (obj.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet")) {
    if ("skuId" in analyticsLocations) {
      let skuId = analyticsLocations.skuId;
    } else {
      skuId = analyticsLocations.product.skuId;
    }
    obj = { skuId: null, initialVariantIndex: null, analyticsLocations: null };
    obj[0] = skuId;
    ({ initialVariantIndex: obj3[1], analyticsLocations } = analyticsLocations);
    obj[2] = analyticsLocations;
    callback2(ManagedProductDetailsActionSheetInner, obj);
    const tmp10 = ManagedProductDetailsActionSheetInner;
    const tmp9 = callback2;
  } else {
    if ("product" in analyticsLocations) {
      obj = {};
      const merged = Object.assign(analyticsLocations);
      let tmp3 = callback2(ProductDetailsActionSheetInner, obj);
    } else {
      logger.error("ProductDetailsActionSheet opened with a skuId but no product, and the experiment is disabled");
      tmp3 = null;
    }
    return tmp3;
  }
}
let c4 = importAllResult;
({ useCallback: c5, useMemo: closure_6 } = noop);
({ Pressable: error, View: closure_8 } = get_ActivityIndicator);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = {};
let closure_16 = new timestampDefault("ProductDetailsActionSheet");
let obj = { container: { position: "relative", flex: 1 }, actionButtons: null, previewProfileButton: null, previewProfileButtonLight: null, previewProfileButtonLightPressed: null, previewProfileButtonDark: null, previewProfileButtonDarkPressed: null, previewProfileButtonMidnight: null, badgeWrapper: null };
obj = { position: "absolute", top: 0, right: ThemesDefault.space.PX_16, zIndex: 2, flexDirection: "row", gap: ThemesDefault.space.PX_8 };
obj[1] = obj;
createCacheKey = { width: require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_HEIGHT, height: require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.round, borderWidth: 1, borderColor: ThemesDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT };
obj[2] = createCacheKey;
let obj2 = { backgroundColor: null };
obj2[0] = ManaContext.setColorOpacity("white", 0.72);
obj[3] = obj2;
let obj3 = { backgroundColor: null };
obj3[0] = ManaContext.setColorOpacity("white", 0.62);
obj[4] = obj3;
let tmp5 = new timestampDefault("ProductDetailsActionSheet");
obj[5] = { backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
let obj4 = { backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj[6] = { backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
ManaContext = { borderColor: ThemesDefault.colors.BORDER_STRONG };
obj[7] = ManaContext;
let obj5 = { backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
obj[8] = { position: "absolute", top: 0, left: ThemesDefault.space.PX_16, zIndex: 2 };
let closure_17 = createCacheKey.createStyles(obj);
let closure_19 = importAllResult.forwardRef((product, ref) => {
  product = product.product;
  require = product;
  let num = product.initialVariantIndex;
  if (num === undefined) {
    num = 0;
  }
  let analyticsLocations = product.analyticsLocations;
  if (analyticsLocations === undefined) {
    analyticsLocations = [];
  }
  analyticsLocations = undefined;
  let collectiblesAnalyticsContext;
  importAllResult = undefined;
  let currentUser;
  let callback;
  closure_7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  closure_11 = undefined;
  const OTPACOMOrderExperiment = require(analyticsLocations[20]).OTPACOMOrderExperiment;
  const config = OTPACOMOrderExperiment.useConfig({ location: "ProductDetailsActionSheetInner" });
  let obj = require(analyticsLocations[21]);
  const androidShopOrdersEnabled = obj.useAndroidShopOrdersEnabled({ location: "ProductDetailsActionSheetInner" });
  const tmp5 = callback3();
  obj1 = importAllResult;
  ref = importAllResult.useRef(null);
  analyticsLocations = ref;
  const items = [];
  const tmp8 = analyticsLocations(analyticsLocations[22]);
  items[HermesBuiltin.arraySpread(analyticsLocations, 0)] = analyticsLocations(analyticsLocations[23]).COLLECTIBLES_SHOP_PROFILE_PREVIEW;
  analyticsLocations = tmp8(items).analyticsLocations;
  const tmp11 = collectiblesAnalyticsContext(importAllResult.useState(true), 2);
  collectiblesAnalyticsContext = tmp12;
  const items1 = [product];
  const tmp13 = callback(() => product(analyticsLocations[24]).getProductSkuIds(closure_0), items1);
  const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
  [tmp15, tmp16] = collectiblesAnalyticsContext(importAllResult.useState(num), 2);
  let obj2 = require(analyticsLocations[24]);
  const selectedProduct = obj2.getSelectedProduct(product, tmp15);
  importAllResult = selectedProduct;
  let obj3 = require(analyticsLocations[25]);
  obj = { skuId: selectedProduct.skuId, productSkuIds: tmp13, analyticsLocations };
  const trackPdpClick = obj3.useTrackPdpClick(obj);
  currentUser = trackPdpClick;
  const items2 = [trackPdpClick];
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({
    scrollToEnd() {
      const current = ref.current;
      let scrollToEndResult;
      if (current != null) {
        scrollToEndResult = current.scrollToEnd({ animated: true });
      }
      return scrollToEndResult;
    },
    notifyDismissed() {
      return callback(closure_1_10.CLOSE_DETAIL);
    }
  }), items2);
  const tmp14 = collectiblesAnalyticsContext(importAllResult.useState(num), 2);
  [tmp21, tmp22] = collectiblesAnalyticsContext(importAllResult.useState(undefined), 2);
  callback = tmp22;
  const tmp20 = collectiblesAnalyticsContext(importAllResult.useState(undefined), 2);
  if (selectedProduct.skuId !== tmp23[0]) {
    tmp24(selectedProduct.skuId);
    tmp22(undefined);
  }
  let tmpResult = tmp(tmp2[26]);
  const previewCollectibleProduct = tmpResult.usePreviewCollectibleProduct(selectedProduct, tmp11[0], tmp21);
  tmpResult = tmp(tmp2[27]);
  collectiblesAnalyticsContext = tmpResult.useCollectiblesAnalyticsContext();
  obj = { type: null, name: null, properties: null };
  tmp23 = collectiblesAnalyticsContext(importAllResult.useState(selectedProduct.skuId), 2);
  obj[0] = require(analyticsLocations[29]).ImpressionTypes.HALFSHEET;
  obj[1] = require(analyticsLocations[29]).ImpressionNames.SHOP_PRODUCT_DETAIL;
  obj1 = { sku_id: selectedProduct.skuId, location_stack: analyticsLocations, card_id: null, position_in_section: null, shop_session_id: null, product_sku_ids: null };
  let cardId;
  if (collectiblesAnalyticsContext != null) {
    cardId = collectiblesAnalyticsContext.cardId;
  }
  obj1[2] = cardId;
  let tilePosition;
  if (collectiblesAnalyticsContext != null) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  obj1[3] = tilePosition;
  let sessionId;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  obj1[4] = sessionId;
  obj1[5] = tmp13;
  obj[2] = obj1;
  analyticsLocations(analyticsLocations[28])(obj);
  require = product;
  analyticsLocations = tmp15;
  collectiblesAnalyticsContext = tmp34;
  importAllResult = tmp12;
  const tmp7Result = analyticsLocations(analyticsLocations[28]);
  currentUser = require(analyticsLocations[17]).useCurrentUser();
  const items3 = [product, tmp15, tmp11[1], currentUser.id, analyticsLocations, collectiblesAnalyticsContext];
  callback = obj1.useCallback(() => {
    callback(false);
    analyticsLocations(analyticsLocations[18])({
      userId: currentUser.id,
      isPreviewingChanges: true,
      sourceAnalyticsLocations: analyticsLocations,
      onClose() {
        let obj = closure_1_0(closure_1_2[19]);
        obj = { product: closure_0, initialVariantIndex: closure_1, analyticsLocations: closure_2, shopAnalyticsContext: closure_3 };
        return obj.openProductDetailsActionSheet(obj);
      }
    });
  }, items3);
  const tmp37 = product.type === require(analyticsLocations[16]).CollectiblesItemType.BUNDLE;
  closure_7 = tmp37;
  let tmp10Result = tmp10(obj1.useState(() => {
    let tmp;
    if (closure_7) {
      const first = product.items[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      tmp = type;
    }
    return tmp;
  }), 2);
  [type, c8] = tmp10Result;
  const tmp39 = currentUser;
  const tmpResult1 = require(analyticsLocations[17]);
  if (!tmp37) {
    type = selectedProduct.type;
  }
  let tmp41 = null != type;
  if (tmp41) {
    tmp41 = type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_EFFECT || type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_FRAME || type === tmp(tmp2[16]).CollectiblesItemType.AVATAR_DECORATION;
    const tmp42 = type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_EFFECT || type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_FRAME || type === tmp(tmp2[16]).CollectiblesItemType.AVATAR_DECORATION;
  }
  const items4 = [product, tmp11[1]];
  const items5 = [analyticsLocations, product.skuId];
  const tmp40 = currentUser((type) => {
    _undefined(type);
    _undefined2(type.type);
  }, []);
  const effect = obj1.useEffect(() => {
    let obj = analyticsLocations(analyticsLocations[30]);
    obj = { type: "Collectibles Shop Details Modal", location_stack: analyticsLocations, sku_id: product.skuId };
    obj.track(lib.OPEN_MODAL, obj);
  }, items5);
  const hideBadge = product.hideBadge;
  const tmp39Result = tmp39(() => {
    if (product.type === product(analyticsLocations[16]).CollectiblesItemType.BUNDLE) {
      collectiblesAnalyticsContext(false);
    }
  }, items4);
  const isProfileFramesEarlyAccessPhase = require(analyticsLocations[31]).useIsProfileFramesEarlyAccessPhase("ProductDetailsActionSheet");
  const tmpResult2 = require(analyticsLocations[31]);
  const tmp46 = selectedProduct.type === require(analyticsLocations[16]).CollectiblesItemType.PROFILE_FRAME && isProfileFramesEarlyAccessPhase && !hideBadge;
  const tmpResult3 = require(analyticsLocations[12]);
  const isThemeDarkResult = require(analyticsLocations[13]).isThemeDark(tmpResult3.useThemeContext().theme);
  const tmpResult4 = require(analyticsLocations[13]);
  const items6 = [c9];
  const stateFromStores = require(analyticsLocations[32]).useStateFromStores(items6, () => {
    const category = _undefined3.getCategory(product.categorySkuId);
    let unpublishedAt;
    if (category != null) {
      unpublishedAt = category.unpublishedAt;
    }
    return unpublishedAt;
  });
  let tmp49 = selectedProduct;
  if (tmp37) {
    tmp49 = selectedProduct;
    if (null != tmp21) {
      obj2 = { skuId: null, type: null, items: null };
      ({ skuId: obj15[0], type: obj15[1] } = tmp21);
      const items7 = [tmp21];
      obj2[2] = items7;
      tmp49 = obj2;
    }
  }
  if (tmp46) {
    let tmp50 = callback2(tmp7(tmp2[33]), { location: "ProductDetailsActionSheet", disablePressable: true });
  } else {
    tmp50 = null;
    if (null == product.badgeOverride) {
      if (tmpResult6.isDynamicProduct(tmp49)) {
        if (!hideBadge) {
          obj3 = { accessibilityLabel: null, children: null };
          const intl = tmp(tmp2[14]).intl;
          obj3[0] = intl.string(tmp(tmp2[14]).t["+drfVi"]);
          const obj4 = { icon: null, label: null, isDark: null };
          obj4[0] = tmp(tmp2[36]).DiceIcon;
          const intl2 = tmp(tmp2[14]).intl;
          obj4[1] = intl2.string(tmp(tmp2[14]).t["+drfVi"]);
          obj4[2] = isThemeDarkResult;
          obj3[1] = callback2(tmp(tmp2[35]).IconTextBadge, obj4);
          tmp50 = callback2(tmp(tmp2[34]).DynamicBadgeTooltip, obj3);
        }
      }
      if (null != stateFromStores) {
        if (tmpResult7.shouldShowLimitedTimeBadge(stateFromStores)) {
          if (!hideBadge) {
            const obj5 = { unpublishedAt: null };
            obj5[0] = stateFromStores;
            tmp50 = callback2(tmp7(tmp2[38]), obj5);
          }
        }
        tmpResult7 = tmp(tmp2[37]);
      }
      tmpResult6 = tmp(tmp2[24]);
      const tmpResult8 = tmp(tmp2[24]);
      tmp50 = null;
      if (tmp53) {
        const obj6 = { icon: null, label: null, isDark: null };
        obj6[0] = tmp(tmp2[39]).OrbsIcon;
        const intl3 = tmp(tmp2[14]).intl;
        obj6[1] = intl3.string(tmp(tmp2[14]).t["0TmQRG"]);
        obj6[2] = isThemeDarkResult;
        tmp50 = callback2(tmp(tmp2[35]).IconTextBadge, obj6);
      }
      tmp53 = tmp(tmp2[24]).isOrbsExclusiveProduct(selectedProduct) && !hideBadge;
    }
  }
  tmp10Result = tmp10(obj1.useState(false), 2);
  [tmp57, c9] = tmp10Result;
  const tmpResult5 = require(analyticsLocations[32]);
  [tmp59, c10] = collectiblesAnalyticsContext(obj1.useState(null), 2);
  const tmp10Result2 = collectiblesAnalyticsContext(obj1.useState(0), 2);
  closure_11 = tmp10Result2[1];
  const obj7 = { value: analyticsLocations, children: null };
  const obj8 = { scrollsToTop: false, style: tmp5.container, ref, children: null };
  const obj9 = { style: tmp5.actionButtons, children: null };
  if (tmp41) {
    const obj10 = { handlePreviewPress: null, onTrackPress: null };
    obj10[0] = callback;
    obj10[1] = trackPdpClick;
    tmp41 = callback2(PreviewProfileTrigger, obj10);
  }
  const items8 = [tmp41, callback2(analyticsLocations(analyticsLocations[41]), { selectedProduct, size: "md", onTrackPress: trackPdpClick })];
  obj9[1] = items8;
  const items9 = [closure_14(c8, obj9), , , , , ];
  let tmp65Result = null != tmp50;
  if (tmp65Result) {
    const obj11 = { style: null, children: null };
    obj11[0] = tmp5.badgeWrapper;
    obj11[1] = tmp50;
    tmp65Result = tmp65(tmp62, obj11);
  }
  items9[1] = tmp65Result;
  items9[2] = callback2(analyticsLocations(analyticsLocations[42]), { product: selectedProduct, handlePreviewPress: callback, onTrackPress: trackPdpClick, onBundleActiveItemChange: tmp40 });
  items9[3] = callback2(analyticsLocations(analyticsLocations[43]), { product: selectedProduct, onTrackPress: trackPdpClick });
  items9[4] = callback2(analyticsLocations(analyticsLocations[44]), { product, selectedVariantIndex: tmp15, disabled: tmp57, onVariantSelect: tmp16 });
  const tmp10Result1 = collectiblesAnalyticsContext(obj1.useState(null), 2);
  items9[5] = callback2(require(analyticsLocations[45]).Spacer, { size: analyticsLocations(analyticsLocations[10]).space.PX_16 });
  obj8[3] = items9;
  const items10 = [
    closure_14(require(analyticsLocations[40]).BottomSheetScrollView, obj8),
    callback2(analyticsLocations(analyticsLocations[46]), {
      product: selectedProduct,
      analyticsLocations,
      onTrackPress: trackPdpClick,
      isBuying: tmp57,
      onStartPurchase() {
        _undefined4(closure_4);
        lib((arg0) => arg0 + 1);
        _undefined3(true);
      }
    }),

  ];
  tmp65Result = null != tmp59;
  if (tmp65Result) {
    const obj14 = { product: null, attempt: null, analyticsLocations: null, onBuy: null, onBuySettled: null };
    obj14[0] = tmp59;
    obj14[1] = tmp10Result2[0];
    obj14[2] = analyticsLocations;
    obj14[3] = tmp39Result;
    obj14[4] = function onBuySettled() {
      return _undefined3(false);
    };
    tmp65Result = tmp65(tmp7(tmp2[47]), obj14);
  }
  items10[2] = tmp65Result;
  obj7[1] = items10;
  return closure_14(require(analyticsLocations[22]).AnalyticsLocationProvider, obj7);
});
let obj7 = { position: "absolute", top: 0, left: ThemesDefault.space.PX_16, zIndex: 2 };
const result = require("set").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheet.tsx");

export default function ProductDetailsActionSheet(shopAnalyticsContext) {
  shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
  if (shopAnalyticsContext === undefined) {
    shopAnalyticsContext = closure_15;
  }
  const merged = Object.assign(shopAnalyticsContext, Object.create(null));
  let obj = { newValue: shopAnalyticsContext, children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  obj[1] = callback2(ProductDetailsActionSheetWithOrderCTX, obj);
  return callback2(context.CollectiblesAnalyticsProvider, obj);
};