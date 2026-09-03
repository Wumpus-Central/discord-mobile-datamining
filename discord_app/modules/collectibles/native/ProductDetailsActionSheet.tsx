// === Module 12764: PreviewProfileTrigger ===

// Module 12764 (PreviewProfileTrigger)
import timestampDefault from "timestamp" /* 3 */;
import ThemesDefault from "Themes" /* 709 */;
import context from "context" /* 8909 */;
import apexExperiment from "apexExperiment" /* 12760 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_9 from "updateCategoriesAndProducts" /* 7297 */;
import { ShopCtaEnum } from "items" /* 675 */;
import { AnalyticEvents } from "ME" /* 673 */;
import { ThemeTypes } from "sum" /* 502 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import ManaContext from "ManaContext" /* 4204 */;

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
  let obj = handlePreviewPress(4204);
  const theme = obj.useThemeContext().theme;
  const isThemeLightResult = handlePreviewPress(1362).isThemeLight(theme);
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
  const intl = tmp2(1233).intl;
  obj[3] = intl.string(handlePreviewPress(1233).t["3Qcx6K"]);
  obj = { size: "md", color: onTrackPress(709).colors.INTERACTIVE_ICON_DEFAULT };
  obj[4] = callback2(handlePreviewPress(7755).EyeIcon, obj);
  return callback2(closure_7, obj);
}
function ProductDetailsActionSheetInner(arg0) {
  let ref1;
  ({ product, initialVariantIndex, analyticsLocations } = arg0);
  ref1 = importAllResult.useRef(null);
  const ref = importAllResult.useRef(null);
  return callback2(ref1(5631).BottomSheet, {
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
  let obj = skuId(12812);
  const collectiblesShopProduct = obj.useCollectiblesShopProduct(skuId, { needsCategory: false, seedCategoryStore: true });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  ({ state, retry } = collectiblesShopProduct);
  obj1 = skuId(8095);
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
        return callback2(tmp(5631).BottomSheet, obj);
      }
    }
  }
  if ("error" === state) {
    obj1 = { Illustration: null, body: null, children: null };
    obj1[0] = tmp(8929).NoResults;
    const intl = tmp(1233).intl;
    obj1[1] = intl.string(tmp(1233).t.eAn6z2);
    const obj2 = { text: null, onPress: null };
    const intl2 = tmp(1233).intl;
    obj2[0] = intl2.string(tmp(1233).t["+hivLW"]);
    obj2[1] = retry;
    obj1[2] = callback2(tmp(4929).Button, obj2);
    callback2(tmp(1296).EmptyState, obj1);
  } else {
    callback2(initialVariantIndex(12816), {});
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
const tmp5 = new timestampDefault("ProductDetailsActionSheet");
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
  const tmp4 = callback3();
  let obj = importAllResult;
  ref = importAllResult.useRef(null);
  analyticsLocations = ref;
  const items = [];
  const tmp7 = analyticsLocations(analyticsLocations[21]);
  items[HermesBuiltin.arraySpread(analyticsLocations, 0)] = analyticsLocations(analyticsLocations[22]).COLLECTIBLES_SHOP_PROFILE_PREVIEW;
  analyticsLocations = tmp7(items).analyticsLocations;
  const tmp10 = collectiblesAnalyticsContext(importAllResult.useState(true), 2);
  collectiblesAnalyticsContext = tmp11;
  const items1 = [product];
  const tmp12 = callback(() => product(analyticsLocations[23]).getProductSkuIds(closure_0), items1);
  const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
  [tmp14, tmp15] = collectiblesAnalyticsContext(importAllResult.useState(num), 2);
  obj1 = require(analyticsLocations[23]);
  const selectedProduct = obj1.getSelectedProduct(product, tmp14);
  importAllResult = selectedProduct;
  let obj2 = require(analyticsLocations[24]);
  obj = { skuId: selectedProduct.skuId, productSkuIds: tmp12, analyticsLocations };
  const trackPdpClick = obj2.useTrackPdpClick(obj);
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
  const tmp13 = collectiblesAnalyticsContext(importAllResult.useState(num), 2);
  [tmp20, tmp21] = collectiblesAnalyticsContext(importAllResult.useState(undefined), 2);
  callback = tmp21;
  const tmp19 = collectiblesAnalyticsContext(importAllResult.useState(undefined), 2);
  if (selectedProduct.skuId !== tmp22[0]) {
    tmp23(selectedProduct.skuId);
    tmp21(undefined);
  }
  let tmpResult = tmp(tmp2[25]);
  const previewCollectibleProduct = tmpResult.usePreviewCollectibleProduct(selectedProduct, tmp10[0], tmp20);
  tmpResult = tmp(tmp2[26]);
  collectiblesAnalyticsContext = tmpResult.useCollectiblesAnalyticsContext();
  obj = { type: null, name: null, properties: null };
  tmp22 = collectiblesAnalyticsContext(importAllResult.useState(selectedProduct.skuId), 2);
  obj[0] = require(analyticsLocations[28]).ImpressionTypes.HALFSHEET;
  obj[1] = require(analyticsLocations[28]).ImpressionNames.SHOP_PRODUCT_DETAIL;
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
  obj1[5] = tmp12;
  obj[2] = obj1;
  analyticsLocations(analyticsLocations[27])(obj);
  require = product;
  analyticsLocations = tmp14;
  collectiblesAnalyticsContext = tmp33;
  importAllResult = tmp11;
  const tmp6Result = analyticsLocations(analyticsLocations[27]);
  currentUser = require(analyticsLocations[17]).useCurrentUser();
  const items3 = [product, tmp14, tmp10[1], currentUser.id, analyticsLocations, collectiblesAnalyticsContext];
  callback = obj.useCallback(() => {
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
  const tmp36 = product.type === require(analyticsLocations[16]).CollectiblesItemType.BUNDLE;
  closure_7 = tmp36;
  let tmp9Result = tmp9(obj.useState(() => {
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
  [type, c8] = tmp9Result;
  const tmp38 = currentUser;
  const tmpResult1 = require(analyticsLocations[17]);
  if (!tmp36) {
    type = selectedProduct.type;
  }
  let tmp40 = null != type;
  if (tmp40) {
    tmp40 = type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_EFFECT || type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_FRAME || type === tmp(tmp2[16]).CollectiblesItemType.AVATAR_DECORATION;
    const tmp41 = type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_EFFECT || type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_FRAME || type === tmp(tmp2[16]).CollectiblesItemType.AVATAR_DECORATION;
  }
  const items4 = [product, tmp10[1]];
  const items5 = [analyticsLocations, product.skuId];
  const tmp39 = currentUser((type) => {
    _undefined(type);
    _undefined2(type.type);
  }, []);
  const effect = obj.useEffect(() => {
    let obj = analyticsLocations(analyticsLocations[29]);
    obj = { type: "Collectibles Shop Details Modal", location_stack: analyticsLocations, sku_id: product.skuId };
    obj.track(lib.OPEN_MODAL, obj);
  }, items5);
  const hideBadge = product.hideBadge;
  const tmp38Result = tmp38(() => {
    if (product.type === product(analyticsLocations[16]).CollectiblesItemType.BUNDLE) {
      collectiblesAnalyticsContext(false);
    }
  }, items4);
  const isProfileFramesEarlyAccessPhase = require(analyticsLocations[30]).useIsProfileFramesEarlyAccessPhase("ProductDetailsActionSheet");
  const tmpResult2 = require(analyticsLocations[30]);
  const tmp45 = selectedProduct.type === require(analyticsLocations[16]).CollectiblesItemType.PROFILE_FRAME && isProfileFramesEarlyAccessPhase && !hideBadge;
  const tmpResult3 = require(analyticsLocations[12]);
  const isThemeDarkResult = require(analyticsLocations[13]).isThemeDark(tmpResult3.useThemeContext().theme);
  const tmpResult4 = require(analyticsLocations[13]);
  const items6 = [c9];
  const stateFromStores = require(analyticsLocations[31]).useStateFromStores(items6, () => {
    const category = _undefined3.getCategory(product.categorySkuId);
    let unpublishedAt;
    if (category != null) {
      unpublishedAt = category.unpublishedAt;
    }
    return unpublishedAt;
  });
  let tmp48 = selectedProduct;
  if (tmp36) {
    tmp48 = selectedProduct;
    if (null != tmp20) {
      obj2 = { skuId: null, type: null, items: null };
      ({ skuId: obj14[0], type: obj14[1] } = tmp20);
      const items7 = [tmp20];
      obj2[2] = items7;
      tmp48 = obj2;
    }
  }
  if (tmp45) {
    let tmp49 = callback2(tmp6(tmp2[32]), { location: "ProductDetailsActionSheet", disablePressable: true });
  } else {
    tmp49 = null;
    if (null == product.badgeOverride) {
      if (tmpResult6.isDynamicProduct(tmp48)) {
        if (!hideBadge) {
          const obj3 = { accessibilityLabel: null, children: null };
          const intl = tmp(tmp2[14]).intl;
          obj3[0] = intl.string(tmp(tmp2[14]).t["+drfVi"]);
          const obj4 = { icon: null, label: null, isDark: null };
          obj4[0] = tmp(tmp2[35]).DiceIcon;
          const intl2 = tmp(tmp2[14]).intl;
          obj4[1] = intl2.string(tmp(tmp2[14]).t["+drfVi"]);
          obj4[2] = isThemeDarkResult;
          obj3[1] = callback2(tmp(tmp2[34]).IconTextBadge, obj4);
          tmp49 = callback2(tmp(tmp2[33]).DynamicBadgeTooltip, obj3);
        }
      }
      if (null != stateFromStores) {
        if (tmpResult7.shouldShowLimitedTimeBadge(stateFromStores)) {
          if (!hideBadge) {
            const obj5 = { unpublishedAt: null };
            obj5[0] = stateFromStores;
            tmp49 = callback2(tmp6(tmp2[37]), obj5);
          }
        }
        tmpResult7 = tmp(tmp2[36]);
      }
      tmpResult6 = tmp(tmp2[23]);
      const tmpResult8 = tmp(tmp2[23]);
      tmp49 = null;
      if (tmp52) {
        const obj6 = { icon: null, label: null, isDark: null };
        obj6[0] = tmp(tmp2[38]).OrbsIcon;
        const intl3 = tmp(tmp2[14]).intl;
        obj6[1] = intl3.string(tmp(tmp2[14]).t["0TmQRG"]);
        obj6[2] = isThemeDarkResult;
        tmp49 = callback2(tmp(tmp2[34]).IconTextBadge, obj6);
      }
      tmp52 = tmp(tmp2[23]).isOrbsExclusiveProduct(selectedProduct) && !hideBadge;
    }
  }
  tmp9Result = tmp9(obj.useState(false), 2);
  [tmp56, c9] = tmp9Result;
  const tmpResult5 = require(analyticsLocations[31]);
  [tmp58, c10] = collectiblesAnalyticsContext(obj.useState(null), 2);
  const tmp9Result2 = collectiblesAnalyticsContext(obj.useState(0), 2);
  closure_11 = tmp9Result2[1];
  const obj7 = { value: analyticsLocations, children: null };
  const obj8 = { scrollsToTop: false, style: tmp4.container, ref, children: null };
  const obj9 = { style: tmp4.actionButtons, children: null };
  if (tmp40) {
    const obj10 = { handlePreviewPress: null, onTrackPress: null };
    obj10[0] = callback;
    obj10[1] = trackPdpClick;
    tmp40 = callback2(PreviewProfileTrigger, obj10);
  }
  const items8 = [tmp40, callback2(analyticsLocations(analyticsLocations[40]), { selectedProduct, size: "md", onTrackPress: trackPdpClick })];
  obj9[1] = items8;
  const items9 = [closure_14(c8, obj9), , , , , ];
  let tmp64Result = null != tmp49;
  if (tmp64Result) {
    const obj11 = { style: null, children: null };
    obj11[0] = tmp4.badgeWrapper;
    obj11[1] = tmp49;
    tmp64Result = tmp64(tmp61, obj11);
  }
  items9[1] = tmp64Result;
  items9[2] = callback2(analyticsLocations(analyticsLocations[41]), { product: selectedProduct, handlePreviewPress: callback, onTrackPress: trackPdpClick, onBundleActiveItemChange: tmp39 });
  items9[3] = callback2(analyticsLocations(analyticsLocations[42]), { product: selectedProduct, onTrackPress: trackPdpClick });
  items9[4] = callback2(analyticsLocations(analyticsLocations[43]), { product, selectedVariantIndex: tmp14, disabled: tmp56, onVariantSelect: tmp15 });
  const tmp9Result1 = collectiblesAnalyticsContext(obj.useState(null), 2);
  items9[5] = callback2(require(analyticsLocations[44]).Spacer, { size: analyticsLocations(analyticsLocations[10]).space.PX_16 });
  obj8[3] = items9;
  const items10 = [
    closure_14(require(analyticsLocations[39]).BottomSheetScrollView, obj8),
    callback2(analyticsLocations(analyticsLocations[45]), {
      product: selectedProduct,
      analyticsLocations,
      onTrackPress: trackPdpClick,
      isBuying: tmp56,
      onStartPurchase() {
        _undefined4(closure_4);
        lib((arg0) => arg0 + 1);
        _undefined3(true);
      }
    }),

  ];
  tmp64Result = null != tmp58;
  if (tmp64Result) {
    const obj14 = { product: null, attempt: null, analyticsLocations: null, onBuy: null, onBuySettled: null };
    obj14[0] = tmp58;
    obj14[1] = tmp9Result2[0];
    obj14[2] = analyticsLocations;
    obj14[3] = tmp38Result;
    obj14[4] = function onBuySettled() {
      return _undefined3(false);
    };
    tmp64Result = tmp64(tmp6(tmp2[46]), obj14);
  }
  items10[2] = tmp64Result;
  obj7[1] = items10;
  return closure_14(require(analyticsLocations[21]).AnalyticsLocationProvider, obj7);
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