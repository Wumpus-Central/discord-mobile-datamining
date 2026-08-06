// discord_app/modules/collectibles/native/ProductDetailsActionSheet.tsx
import initialize from "initialize";
import apexExperiment from "apexExperiment";
import noop from "apexExperiment";
import get_ActivityIndicator from "showUserProfileActionSheet";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import { ShopCtaEnum } from "items";
import { AnalyticEvents } from "ME";
import sum from "sum";
import jsxProd from "context";
import createCacheKey from "createCacheKey";
import ManaContext from "ManaContext";
import ManaContext from "ManaContext";
import { set } from "../../../utils/PlatformUtils.tsx";
import { context } from "../CollectiblesAnalyticsContext.tsx";

let c5;
let closure_12;
let closure_14;
let closure_15;
let closure_6;
let error;
let map1;
let metroImportAll;
let require = arg1;
function PreviewProfileTrigger(handlePreviewPress) {
  handlePreviewPress = handlePreviewPress.handlePreviewPress;
  const onTrackPress = handlePreviewPress.onTrackPress;
  let dependencyMap;
  let initialize;
  let React;
  let closure_5;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = handlePreviewPress(3996);
  const theme = obj.useThemeContext().theme;
  const isThemeLightResult = handlePreviewPress(4130).isThemeLight(theme);
  initialize = theme === constants2.MIDNIGHT;
  React = isThemeLightResult ? tmp.previewProfileButtonLight : tmp.previewProfileButtonDark;
  closure_5 = isThemeLightResult ? tmp.previewProfileButtonLightPressed : tmp.previewProfileButtonDarkPressed;
  let items = [handlePreviewPress, onTrackPress];
  obj = {
    style(pressed) {
      pressed = pressed.pressed;
      const items = [_undefined.previewProfileButton, apexExperiment, , ];
      let previewProfileButtonMidnight = initialize;
      if (initialize) {
        previewProfileButtonMidnight = _undefined.previewProfileButtonMidnight;
      }
      items[2] = previewProfileButtonMidnight;
      if (pressed) {
        pressed = closure_5;
      }
      items[3] = pressed;
      return items;
    },
    onPress: React.useCallback(() => {
      onTrackPress(outer1_10.FULL_PROFILE_PREVIEW_BUTTON);
      handlePreviewPress();
    }, items),
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const intl = tmp2(1236).intl;
  obj[3] = intl.string(handlePreviewPress(1236).t["3Qcx6K"]);
  obj = { size: "md", color: null };
  obj[1] = onTrackPress(712).colors.INTERACTIVE_ICON_DEFAULT;
  obj[4] = callback3(handlePreviewPress(8420).EyeIcon, obj);
  return callback3(closure_7, obj);
}
function ProductDetailsActionSheetInner(product) {
  let tmp15;
  let tmp16;
  let tmp20;
  let tmp21;
  let tmp38;
  let type;
  product = product.product;
  let require = product;
  let num = product.initialVariantIndex;
  if (num === undefined) {
    num = 0;
  }
  let analyticsLocations = product.analyticsLocations;
  if (analyticsLocations === undefined) {
    analyticsLocations = [];
  }
  const paymentGateway = product.paymentGateway;
  analyticsLocations = undefined;
  let callback;
  let trackPdpClick;
  let currentUser;
  let callback2;
  let c7;
  let c8;
  const OTPACOMOrderExperiment = require(analyticsLocations[19]).OTPACOMOrderExperiment;
  let obj = require(analyticsLocations[20]);
  const androidShopOrdersEnabled = obj.useAndroidShopOrdersEnabled({ location: "ProductDetailsActionSheetInner" });
  const tmp4 = createCacheKey();
  let obj1 = trackPdpClick;
  const ref1 = trackPdpClick.useRef(null);
  analyticsLocations = ref1;
  const items = [];
  const ref = trackPdpClick.useRef(null);
  const tmp8 = analyticsLocations(analyticsLocations[21]);
  items[HermesBuiltin.arraySpread(analyticsLocations, 0)] = analyticsLocations(analyticsLocations[22]).COLLECTIBLES_SHOP_PROFILE_PREVIEW;
  analyticsLocations = tmp8(items).analyticsLocations;
  const tmp11 = callback(trackPdpClick.useState(true), 2);
  callback = tmp12;
  const items1 = [product];
  const tmp13 = callback2(() => product(analyticsLocations[23]).getProductSkuIds(closure_0), items1);
  const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
  const tmp10 = callback;
  [tmp15, tmp16] = callback(trackPdpClick.useState(num), 2);
  let obj2 = require(analyticsLocations[23]);
  const selectedProduct = obj2.getSelectedProduct(product, tmp15);
  let obj3 = require(analyticsLocations[24]);
  obj = { skuId: selectedProduct.skuId, productSkuIds: tmp13, analyticsLocations };
  trackPdpClick = obj3.useTrackPdpClick(obj);
  const tmp14 = callback(trackPdpClick.useState(num), 2);
  [tmp20, tmp21] = callback(trackPdpClick.useState(undefined), 2);
  currentUser = tmp21;
  const tmp19 = callback(trackPdpClick.useState(undefined), 2);
  if (selectedProduct.skuId !== tmp22[0]) {
    tmp23(selectedProduct.skuId);
    tmp21(undefined);
  }
  let tmpResult = tmp(tmp2[25]);
  const previewCollectibleProduct = tmpResult.usePreviewCollectibleProduct(selectedProduct, tmp11[0], tmp20);
  tmpResult = tmp(tmp2[26]);
  const collectiblesAnalyticsContext = tmpResult.useCollectiblesAnalyticsContext();
  obj = { type: null, name: null, properties: null };
  let tmp7Result = tmp7(tmp2[27]);
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
  obj1[5] = tmp13;
  obj[2] = obj1;
  tmp7Result(obj);
  require = product;
  analyticsLocations = tmp15;
  callback = tmp33;
  trackPdpClick = tmp12;
  tmp22 = callback(trackPdpClick.useState(selectedProduct.skuId), 2);
  currentUser = require(analyticsLocations[16]).useCurrentUser();
  const items2 = [product, tmp15, tmp11[1], currentUser.id, analyticsLocations, collectiblesAnalyticsContext];
  callback = obj1.useCallback(() => {
    trackPdpClick(false);
    analyticsLocations(analyticsLocations[17])({
      userId: currentUser.id,
      isPreviewingChanges: true,
      sourceAnalyticsLocations: analyticsLocations,
      onClose() {
        let obj = outer1_0(outer1_2[18]);
        obj = { product: closure_0, initialVariantIndex: closure_1, analyticsLocations: closure_2, shopAnalyticsContext: initialize };
        return obj.openProductDetailsActionSheet(obj);
      }
    });
  }, items2);
  const tmpResult1 = require(analyticsLocations[16]);
  callback2 = require(analyticsLocations[29]).useShopProductItems(product);
  const tmp36 = product.type === require(analyticsLocations[15]).CollectiblesItemType.BUNDLE;
  c7 = tmp36;
  const tmpResult2 = require(analyticsLocations[29]);
  [type, tmp38] = tmp10(obj1.useState(() => {
    if (c7) {
      if (null != firstProfileEffect.firstProfileEffect) {
        let NAMEPLATE = product(analyticsLocations[15]).CollectiblesItemType.PROFILE_EFFECT;
      } else if (null != tmp.firstAvatarDecoration) {
        NAMEPLATE = product(analyticsLocations[15]).CollectiblesItemType.AVATAR_DECORATION;
      } else if (null != tmp.firstNameplate) {
        NAMEPLATE = product(analyticsLocations[15]).CollectiblesItemType.NAMEPLATE;
      }
      return NAMEPLATE;
    }
  }), 2);
  c8 = tmp38;
  const tmp10Result = tmp10(obj1.useState(() => {
    if (c7) {
      if (null != firstProfileEffect.firstProfileEffect) {
        let NAMEPLATE = product(analyticsLocations[15]).CollectiblesItemType.PROFILE_EFFECT;
      } else if (null != tmp.firstAvatarDecoration) {
        NAMEPLATE = product(analyticsLocations[15]).CollectiblesItemType.AVATAR_DECORATION;
      } else if (null != tmp.firstNameplate) {
        NAMEPLATE = product(analyticsLocations[15]).CollectiblesItemType.NAMEPLATE;
      }
      return NAMEPLATE;
    }
  }), 2);
  const tmp39 = currentUser;
  if (!tmp36) {
    type = selectedProduct.type;
  }
  let tmp59Result = null != type;
  if (tmp59Result) {
    tmp59Result = type === tmp(tmp2[15]).CollectiblesItemType.PROFILE_EFFECT || type === tmp(tmp2[15]).CollectiblesItemType.PROFILE_FRAME || type === tmp(tmp2[15]).CollectiblesItemType.AVATAR_DECORATION;
    const tmp42 = type === tmp(tmp2[15]).CollectiblesItemType.PROFILE_EFFECT || type === tmp(tmp2[15]).CollectiblesItemType.PROFILE_FRAME || type === tmp(tmp2[15]).CollectiblesItemType.AVATAR_DECORATION;
  }
  const items3 = [product, tmp11[1]];
  const items4 = [analyticsLocations, product.skuId];
  const tmp40 = currentUser((type) => {
    currentUser(type);
    _undefined2(type.type);
  }, []);
  const effect = obj1.useEffect(() => {
    let obj = analyticsLocations(analyticsLocations[30]);
    obj = { type: "Collectibles Shop Details Modal", location_stack: analyticsLocations, sku_id: product.skuId };
    obj.track(outer1_11.OPEN_MODAL, obj);
  }, items4);
  const hideBadge = product.hideBadge;
  const tmp39Result = tmp39(() => {
    if (product.type === product(analyticsLocations[15]).CollectiblesItemType.BUNDLE) {
      _undefined(false);
    }
  }, items3);
  const isProfileFramesEarlyAccessPhase = require(analyticsLocations[31]).useIsProfileFramesEarlyAccessPhase("ProductDetailsActionSheet");
  const tmpResult3 = require(analyticsLocations[31]);
  const tmp46 = selectedProduct.type === require(analyticsLocations[15]).CollectiblesItemType.PROFILE_FRAME && isProfileFramesEarlyAccessPhase && !hideBadge;
  const tmpResult4 = require(analyticsLocations[11]);
  const isThemeDarkResult = require(analyticsLocations[12]).isThemeDark(tmpResult4.useThemeContext().theme);
  const tmpResult5 = require(analyticsLocations[12]);
  const items5 = [updateCategoriesAndProducts];
  const stateFromStores = require(analyticsLocations[32]).useStateFromStores(items5, () => {
    const category = outer1_9.getCategory(product.categorySkuId);
    let unpublishedAt;
    if (category != null) {
      unpublishedAt = category.unpublishedAt;
    }
    return unpublishedAt;
  });
  let tmp49 = selectedProduct;
  if (tmp36) {
    tmp49 = selectedProduct;
    if (null != tmp20) {
      obj2 = { skuId: null, type: null, items: null };
      ({ skuId: obj16[0], type: obj16[1] } = tmp20);
      const items6 = [tmp20];
      obj2[2] = items6;
      tmp49 = obj2;
    }
  }
  if (tmp46) {
    let tmp50 = callback3(tmp7(tmp2[33]), { location: "ProductDetailsActionSheet", disablePressable: true });
  } else {
    tmp50 = null;
    if (null == product.badgeOverride) {
      if (tmpResult7.isDynamicProduct(tmp49)) {
        if (!hideBadge) {
          obj3 = { accessibilityLabel: null, children: null };
          const intl = tmp(tmp2[13]).intl;
          obj3[0] = intl.string(tmp(tmp2[13]).t["+drfVi"]);
          const obj4 = { icon: null, label: null, isDark: null };
          obj4[0] = tmp(tmp2[36]).DiceIcon;
          const intl2 = tmp(tmp2[13]).intl;
          obj4[1] = intl2.string(tmp(tmp2[13]).t["+drfVi"]);
          obj4[2] = isThemeDarkResult;
          obj3[1] = callback3(tmp(tmp2[35]).IconTextBadge, obj4);
          tmp50 = callback3(tmp(tmp2[34]).DynamicBadgeTooltip, obj3);
        }
      }
      if (null != stateFromStores) {
        if (tmpResult8.shouldShowLimitedTimeBadge(stateFromStores)) {
          if (!hideBadge) {
            const obj5 = { unpublishedAt: null };
            obj5[0] = stateFromStores;
            tmp50 = callback3(tmp7(tmp2[38]), obj5);
          }
        }
        tmpResult8 = tmp(tmp2[37]);
      }
      tmpResult7 = tmp(tmp2[23]);
      const tmpResult9 = tmp(tmp2[23]);
      tmp50 = null;
      if (tmp53) {
        const obj6 = { icon: null, label: null, isDark: null };
        obj6[0] = tmp(tmp2[39]).OrbsIcon;
        const intl3 = tmp(tmp2[13]).intl;
        obj6[1] = intl3.string(tmp(tmp2[13]).t["0TmQRG"]);
        obj6[2] = isThemeDarkResult;
        tmp50 = callback3(tmp(tmp2[35]).IconTextBadge, obj6);
      }
      tmp53 = tmp(tmp2[23]).isOrbsExclusiveProduct(selectedProduct) && !hideBadge;
    }
  }
  let enabled = paymentGateway === constants.APPLE_ADVANCED_COMMERCE;
  if (enabled) {
    enabled = OTPACOMOrderExperiment.useConfig({ location: "ProductDetailsActionSheetInner" }).enabled;
  }
  if (!enabled) {
    let result = paymentGateway === tmp56.GOOGLE;
    if (result) {
      result = tmp(tmp2[40]).isGooglePlayBillingSupported();
      const tmpResult10 = tmp(tmp2[40]);
    }
    if (result) {
      result = androidShopOrdersEnabled;
    }
    enabled = result;
  }
  tmp56 = constants;
  const tmpResult6 = require(analyticsLocations[32]);
  const obj7 = { value: analyticsLocations, children: null };
  const obj8 = {
    scrollable: true,
    startExpanded: true,
    onExpand(arg0) {
      const current = analyticsLocations.current;
      let scrollToEndResult;
      if (current != null) {
        scrollToEndResult = current.scrollToEnd({ animated: true });
      }
      return scrollToEndResult;
    },
    onDismiss() {
      return trackPdpClick(outer1_10.CLOSE_DETAIL);
    },
    ref,
    children: null
  };
  const obj9 = { scrollsToTop: false, style: tmp4.container, ref: ref1, children: null };
  const obj10 = { style: tmp4.actionButtons, children: null };
  if (tmp59Result) {
    const obj11 = { handlePreviewPress: null, onTrackPress: null };
    obj11[0] = callback;
    obj11[1] = trackPdpClick;
    tmp59Result = tmp59(PreviewProfileTrigger, obj11);
  }
  const items7 = [tmp59Result, callback3(analyticsLocations(analyticsLocations[44]), { selectedProduct, size: "md", onTrackPress: trackPdpClick })];
  obj10[1] = items7;
  const items8 = [closure_15(c8, obj10), , , , , ];
  tmp59Result = null != tmp50;
  if (tmp59Result) {
    const obj12 = { style: null, children: null };
    obj12[0] = tmp4.badgeWrapper;
    obj12[1] = tmp50;
    tmp59Result = tmp59(tmp61, obj12);
  }
  items8[1] = tmp59Result;
  items8[2] = callback3(analyticsLocations(analyticsLocations[45]), { product: selectedProduct, handlePreviewPress: callback, onTrackPress: trackPdpClick, onBundleActiveItemTypeChange: tmp38, onBundleActiveItemChange: tmp40 });
  items8[3] = callback3(analyticsLocations(analyticsLocations[46]), { product: selectedProduct, onTrackPress: trackPdpClick });
  items8[4] = callback3(analyticsLocations(analyticsLocations[47]), { product, selectedVariantIndex: tmp15, onVariantSelect: tmp16 });
  const obj13 = { size: null };
  obj13[0] = analyticsLocations(analyticsLocations[9]).space.PX_16;
  items8[5] = callback3(require(analyticsLocations[48]).Spacer, obj13);
  obj9[3] = items8;
  const items9 = [closure_15(require(analyticsLocations[43]).BottomSheetScrollView, obj9), ];
  const obj14 = { skuIDs: [], activeSubscription: null, children: null };
  const obj15 = {
    paymentGateway,
    orderRequired: enabled,
    skuIds: items10,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: analyticsLocations(analyticsLocations[41])(selectedProduct),
    onOrderRetryCancellation() {
      return analyticsLocations(analyticsLocations[51]).hideActionSheet(product(analyticsLocations[18]).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    children: null
  };
  items10 = [selectedProduct.skuId];
  tmp7Result = tmp7(tmp2[50]);
  obj15[7] = callback3(analyticsLocations(analyticsLocations[52]), { onBuy: tmp39Result, product: selectedProduct, analyticsLocations, onTrackPress: trackPdpClick });
  obj14[2] = callback3(tmp7Result, obj15, selectedProduct.skuId);
  items9[1] = callback3(require(analyticsLocations[49]).NativePaymentContextProvider, obj14);
  obj8[5] = items9;
  obj7[1] = closure_15(require(analyticsLocations[42]).BottomSheet, obj8);
  return callback3(require(analyticsLocations[21]).AnalyticsLocationProvider, obj7);
}
function ProductDetailsActionSheetWithOrderCTX(arg0) {
  let obj = set;
  obj = {};
  const merged = Object.assign(arg0);
  obj.paymentGateway = obj.isIOS() ? closure_12.APPLE_ADVANCED_COMMERCE : closure_12.GOOGLE;
  return callback3(ProductDetailsActionSheetInner, obj);
}
({ useCallback: c5, useMemo: closure_6 } = noop);
({ Pressable: error, View: metroImportAll } = get_ActivityIndicator);
({ PaymentGateways: closure_12, ThemeTypes: map1 } = sum);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = {};
createCacheKey = { container: { position: "relative", flex: 1 }, actionButtons: null, previewProfileButton: null, previewProfileButtonLight: null, previewProfileButtonLightPressed: null, previewProfileButtonDark: null, previewProfileButtonDarkPressed: null, previewProfileButtonMidnight: null, badgeWrapper: null };
createCacheKey = { position: "absolute", top: 0, right: require("Themes").space.PX_16, zIndex: 2, flexDirection: "row", gap: require("Themes").space.PX_8 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_HEIGHT, height: require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.round, borderWidth: 1, borderColor: require("Themes").colors.CONTROL_SECONDARY_BORDER_DEFAULT };
let obj2 = { backgroundColor: null };
obj2[0] = ManaContext.setColorOpacity("white", 0.72);
createCacheKey[3] = obj2;
let obj3 = { backgroundColor: null };
obj3[0] = ManaContext.setColorOpacity("white", 0.62);
createCacheKey[4] = obj3;
let obj1 = { width: require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_HEIGHT, height: require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.round, borderWidth: 1, borderColor: require("Themes").colors.CONTROL_SECONDARY_BORDER_DEFAULT };
createCacheKey[5] = { backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
ManaContext = { backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
createCacheKey[6] = ManaContext;
let obj4 = { backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
createCacheKey[7] = { borderColor: require("Themes").colors.BORDER_STRONG };
ManaContext = { position: "absolute", top: 0, left: require("Themes").space.PX_16, zIndex: 2 };
createCacheKey[8] = ManaContext;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj6 = { borderColor: require("Themes").colors.BORDER_STRONG };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheet.tsx");

export default function ProductDetailsActionSheet(shopAnalyticsContext) {
  shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
  if (shopAnalyticsContext === undefined) {
    shopAnalyticsContext = closure_16;
  }
  const merged = Object.assign(shopAnalyticsContext, Object.create(null));
  let obj = { newValue: shopAnalyticsContext, children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  obj[1] = callback3(ProductDetailsActionSheetWithOrderCTX, obj);
  return callback3(context.CollectiblesAnalyticsProvider, obj);
};