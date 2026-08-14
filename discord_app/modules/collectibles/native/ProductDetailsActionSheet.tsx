// discord_app/modules/collectibles/native/ProductDetailsActionSheet.tsx
import initialize from "initialize";
import importAllResult from "PRODUCT_DETAILS_ACTION_SHEET_KEY";
import noop from "PRODUCT_DETAILS_ACTION_SHEET_KEY";
import get_ActivityIndicator from "useCurrentUser";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import { ShopCtaEnum } from "items";
import { AnalyticEvents } from "ME";
import sum from "sum";
import jsxProd from "apexExperiment";
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
  let importAllResult;
  let closure_5;
  const tmp = callback4();
  dependencyMap = tmp;
  let obj = handlePreviewPress(4072);
  const theme = obj.useThemeContext().theme;
  const isThemeLightResult = handlePreviewPress(1363).isThemeLight(theme);
  initialize = theme === constants2.MIDNIGHT;
  importAllResult = isThemeLightResult ? tmp.previewProfileButtonLight : tmp.previewProfileButtonDark;
  closure_5 = isThemeLightResult ? tmp.previewProfileButtonLightPressed : tmp.previewProfileButtonDarkPressed;
  let items = [handlePreviewPress, onTrackPress];
  obj = {
    style(pressed) {
      pressed = pressed.pressed;
      const items = [_undefined.previewProfileButton, closure_4, , ];
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
    onPress: importAllResult.useCallback(() => {
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
  obj[4] = callback3(handlePreviewPress(8568).EyeIcon, obj);
  return callback3(closure_7, obj);
}
function ProductDetailsActionSheetInner(arg0) {
  let analyticsLocations;
  let initialVariantIndex;
  let paymentGateway;
  let product;
  let ref1;
  ({ product, initialVariantIndex, analyticsLocations, paymentGateway } = arg0);
  ref1 = importAllResult.useRef(null);
  const obj = {
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
    children: null
  };
  obj[5] = callback3(closure_20, { ref: ref1, product, initialVariantIndex, analyticsLocations, paymentGateway });
  return callback3(ref1(5458).BottomSheet, obj);
}
function ManagedProductDetailsActionSheetInner(skuId) {
  let analyticsLocations;
  let fetchPurchasesError;
  let hasPreviouslyFetched;
  let paymentGateway;
  let retry;
  let state;
  skuId = skuId.skuId;
  const initialVariantIndex = skuId.initialVariantIndex;
  let dependencyMap;
  let ref1;
  ({ analyticsLocations, paymentGateway } = skuId);
  let obj = skuId(12252);
  const collectiblesShopProduct = obj.useCollectiblesShopProduct(skuId, { needsCategory: false, seedCategoryStore: true });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  ({ state, retry } = collectiblesShopProduct);
  let obj1 = skuId(8350);
  const getOrFetchPurchases = obj1.useGetOrFetchPurchases();
  ({ hasPreviouslyFetched, fetchPurchasesError } = getOrFetchPurchases);
  ref1 = importAllResult.useRef(null);
  const items = [product, skuId, initialVariantIndex];
  if ("ready" === state) {
    if (hasPreviouslyFetched) {
      if (null != product) {
        obj = { ref: null, product: null, initialVariantIndex: null, analyticsLocations: null, paymentGateway: null };
        obj[0] = ref1;
        obj[1] = product;
        obj[2] = tmp7;
        obj[3] = analyticsLocations;
        obj[4] = paymentGateway;
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
        obj[5] = callback3(closure_20, obj);
        return callback3(tmp(5458).BottomSheet, obj);
      }
    }
  }
  if ("error" === state) {
    obj1 = { Illustration: null, body: null, children: null };
    obj1[0] = tmp(8890).NoResults;
    const intl = tmp(1236).intl;
    obj1[1] = intl.string(tmp(1236).t.eAn6z2);
    const obj2 = { text: null, onPress: null };
    const intl2 = tmp(1236).intl;
    obj2[0] = intl2.string(tmp(1236).t["+hivLW"]);
    obj2[1] = retry;
    obj1[2] = callback3(tmp(4777).Button, obj2);
    callback3(tmp(1297).EmptyState, obj1);
  } else {
    callback3(initialVariantIndex(12256), {});
  }
}
function ProductDetailsActionSheetWithOrderCTX(arg0) {
  let analyticsLocations;
  let obj = set;
  const tmp4 = obj.isIOS() ? closure_12.APPLE_ADVANCED_COMMERCE : closure_12.GOOGLE;
  analyticsLocations = arg0;
  if (tmpResult.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet")) {
    if ("skuId" in analyticsLocations) {
      let skuId = analyticsLocations.skuId;
    } else {
      skuId = analyticsLocations.product.skuId;
    }
    obj = { skuId: null, initialVariantIndex: null, analyticsLocations: null, paymentGateway: null };
    obj[0] = skuId;
    ({ initialVariantIndex: obj4[1], analyticsLocations } = analyticsLocations);
    obj[2] = analyticsLocations;
    obj[3] = tmp4;
    callback3(ManagedProductDetailsActionSheetInner, obj);
    const tmp13 = callback3;
    const tmp14 = ManagedProductDetailsActionSheetInner;
  } else {
    if ("product" in analyticsLocations) {
      obj = {};
      const merged = Object.assign(analyticsLocations);
      obj.paymentGateway = tmp4;
      let tmp7 = callback3(ProductDetailsActionSheetInner, obj);
    } else {
      tmp6.error("ProductDetailsActionSheet opened with a skuId but no product, and the experiment is disabled");
      tmp7 = null;
    }
    return tmp7;
  }
}
let c4 = importAllResult;
({ useCallback: c5, useMemo: closure_6 } = noop);
({ Pressable: error, View: metroImportAll } = get_ActivityIndicator);
({ PaymentGateways: closure_12, ThemeTypes: map1 } = sum);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = {};
let closure_17 = new require("updateCategoriesAndProducts")("ProductDetailsActionSheet");
let obj = { container: { position: "relative", flex: 1 }, actionButtons: null, previewProfileButton: null, previewProfileButtonLight: null, previewProfileButtonLightPressed: null, previewProfileButtonDark: null, previewProfileButtonDarkPressed: null, previewProfileButtonMidnight: null, badgeWrapper: null };
obj = { position: "absolute", top: 0, right: require("Themes").space.PX_16, zIndex: 2, flexDirection: "row", gap: require("Themes").space.PX_8 };
obj[1] = obj;
createCacheKey = { width: require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_HEIGHT, height: require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.round, borderWidth: 1, borderColor: require("Themes").colors.CONTROL_SECONDARY_BORDER_DEFAULT };
obj[2] = createCacheKey;
let obj2 = { backgroundColor: null };
obj2[0] = ManaContext.setColorOpacity("white", 0.72);
obj[3] = obj2;
let obj3 = { backgroundColor: null };
obj3[0] = ManaContext.setColorOpacity("white", 0.62);
obj[4] = obj3;
const tmp6 = new require("updateCategoriesAndProducts")("ProductDetailsActionSheet");
obj[5] = { backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
let obj4 = { backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj[6] = { backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
ManaContext = { borderColor: require("Themes").colors.BORDER_STRONG };
obj[7] = ManaContext;
let obj5 = { backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
obj[8] = { position: "absolute", top: 0, left: require("Themes").space.PX_16, zIndex: 2 };
let closure_18 = createCacheKey.createStyles(obj);
let closure_20 = importAllResult.forwardRef((product, ref) => {
  let c7;
  let tmp14;
  let tmp15;
  let tmp20;
  let tmp21;
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
  c7 = undefined;
  const OTPACOMOrderExperiment = require(analyticsLocations[20]).OTPACOMOrderExperiment;
  let obj = require(analyticsLocations[21]);
  const androidShopOrdersEnabled = obj.useAndroidShopOrdersEnabled({ location: "ProductDetailsActionSheetInner" });
  const tmp4 = callback4();
  let obj1 = trackPdpClick;
  ref = trackPdpClick.useRef(null);
  analyticsLocations = ref;
  const items = [];
  const tmp7 = analyticsLocations(analyticsLocations[22]);
  items[HermesBuiltin.arraySpread(analyticsLocations, 0)] = analyticsLocations(analyticsLocations[23]).COLLECTIBLES_SHOP_PROFILE_PREVIEW;
  analyticsLocations = tmp7(items).analyticsLocations;
  const tmp10 = callback(trackPdpClick.useState(true), 2);
  callback = tmp11;
  const items1 = [product];
  const tmp12 = callback2(() => product(analyticsLocations[24]).getProductSkuIds(closure_0), items1);
  const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
  const tmp9 = callback;
  [tmp14, tmp15] = callback(trackPdpClick.useState(num), 2);
  let obj2 = require(analyticsLocations[24]);
  const selectedProduct = obj2.getSelectedProduct(product, tmp14);
  let obj3 = require(analyticsLocations[25]);
  obj = { skuId: selectedProduct.skuId, productSkuIds: tmp12, analyticsLocations };
  trackPdpClick = obj3.useTrackPdpClick(obj);
  const items2 = [trackPdpClick];
  const imperativeHandle = trackPdpClick.useImperativeHandle(ref, () => ({
    scrollToEnd() {
      const current = ref.current;
      let scrollToEndResult;
      if (current != null) {
        scrollToEndResult = current.scrollToEnd({ animated: true });
      }
      return scrollToEndResult;
    },
    notifyDismissed() {
      return callback(outer1_10.CLOSE_DETAIL);
    }
  }), items2);
  const tmp13 = callback(trackPdpClick.useState(num), 2);
  [tmp20, tmp21] = callback(trackPdpClick.useState(undefined), 2);
  currentUser = tmp21;
  const tmp19 = callback(trackPdpClick.useState(undefined), 2);
  if (selectedProduct.skuId !== tmp22[0]) {
    tmp23(selectedProduct.skuId);
    tmp21(undefined);
  }
  let tmpResult = tmp(tmp2[26]);
  const previewCollectibleProduct = tmpResult.usePreviewCollectibleProduct(selectedProduct, tmp10[0], tmp20);
  tmpResult = tmp(tmp2[27]);
  const collectiblesAnalyticsContext = tmpResult.useCollectiblesAnalyticsContext();
  obj = { type: null, name: null, properties: null };
  let tmp6Result = tmp6(tmp2[28]);
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
  obj1[5] = tmp12;
  obj[2] = obj1;
  tmp6Result(obj);
  require = product;
  analyticsLocations = tmp14;
  callback = tmp33;
  trackPdpClick = tmp11;
  tmp22 = callback(trackPdpClick.useState(selectedProduct.skuId), 2);
  currentUser = require(analyticsLocations[17]).useCurrentUser();
  const items3 = [product, tmp14, tmp10[1], currentUser.id, analyticsLocations, collectiblesAnalyticsContext];
  callback = obj1.useCallback(() => {
    trackPdpClick(false);
    analyticsLocations(analyticsLocations[18])({
      userId: currentUser.id,
      isPreviewingChanges: true,
      sourceAnalyticsLocations: analyticsLocations,
      onClose() {
        let obj = outer1_0(outer1_2[19]);
        obj = { product: closure_0, initialVariantIndex: closure_1, analyticsLocations: closure_2, shopAnalyticsContext: initialize };
        return obj.openProductDetailsActionSheet(obj);
      }
    });
  }, items3);
  const tmp36 = product.type === require(analyticsLocations[16]).CollectiblesItemType.BUNDLE;
  callback2 = tmp36;
  const tmpResult1 = require(analyticsLocations[17]);
  [type, c7] = tmp9(obj1.useState(() => {
    let tmp;
    if (c6) {
      const first = product.items[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      tmp = type;
    }
    return tmp;
  }), 2);
  const tmp38 = currentUser;
  const tmp9Result = tmp9(obj1.useState(() => {
    let tmp;
    if (c6) {
      const first = product.items[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      tmp = type;
    }
    return tmp;
  }), 2);
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
    currentUser(type);
    _undefined2(type.type);
  }, []);
  const effect = obj1.useEffect(() => {
    let obj = analyticsLocations(analyticsLocations[30]);
    obj = { type: "Collectibles Shop Details Modal", location_stack: analyticsLocations, sku_id: product.skuId };
    obj.track(outer1_11.OPEN_MODAL, obj);
  }, items5);
  const hideBadge = product.hideBadge;
  const tmp38Result = tmp38(() => {
    if (product.type === product(analyticsLocations[16]).CollectiblesItemType.BUNDLE) {
      _undefined(false);
    }
  }, items4);
  const isProfileFramesEarlyAccessPhase = require(analyticsLocations[31]).useIsProfileFramesEarlyAccessPhase("ProductDetailsActionSheet");
  const tmpResult2 = require(analyticsLocations[31]);
  const tmp45 = selectedProduct.type === require(analyticsLocations[16]).CollectiblesItemType.PROFILE_FRAME && isProfileFramesEarlyAccessPhase && !hideBadge;
  const tmpResult3 = require(analyticsLocations[12]);
  const isThemeDarkResult = require(analyticsLocations[13]).isThemeDark(tmpResult3.useThemeContext().theme);
  const tmpResult4 = require(analyticsLocations[13]);
  const items6 = [updateCategoriesAndProducts];
  const stateFromStores = require(analyticsLocations[32]).useStateFromStores(items6, () => {
    const category = outer1_9.getCategory(product.categorySkuId);
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
      ({ skuId: obj15[0], type: obj15[1] } = tmp20);
      const items7 = [tmp20];
      obj2[2] = items7;
      tmp48 = obj2;
    }
  }
  if (tmp45) {
    let tmp49 = callback3(tmp6(tmp2[33]), { location: "ProductDetailsActionSheet", disablePressable: true });
  } else {
    tmp49 = null;
    if (null == product.badgeOverride) {
      if (tmpResult6.isDynamicProduct(tmp48)) {
        if (!hideBadge) {
          obj3 = { accessibilityLabel: null, children: null };
          const intl = tmp(tmp2[14]).intl;
          obj3[0] = intl.string(tmp(tmp2[14]).t["+drfVi"]);
          const obj4 = { icon: null, label: null, isDark: null };
          obj4[0] = tmp(tmp2[36]).DiceIcon;
          const intl2 = tmp(tmp2[14]).intl;
          obj4[1] = intl2.string(tmp(tmp2[14]).t["+drfVi"]);
          obj4[2] = isThemeDarkResult;
          obj3[1] = callback3(tmp(tmp2[35]).IconTextBadge, obj4);
          tmp49 = callback3(tmp(tmp2[34]).DynamicBadgeTooltip, obj3);
        }
      }
      if (null != stateFromStores) {
        if (tmpResult7.shouldShowLimitedTimeBadge(stateFromStores)) {
          if (!hideBadge) {
            const obj5 = { unpublishedAt: null };
            obj5[0] = stateFromStores;
            tmp49 = callback3(tmp6(tmp2[38]), obj5);
          }
        }
        tmpResult7 = tmp(tmp2[37]);
      }
      tmpResult6 = tmp(tmp2[24]);
      const tmpResult8 = tmp(tmp2[24]);
      tmp49 = null;
      if (tmp52) {
        const obj6 = { icon: null, label: null, isDark: null };
        obj6[0] = tmp(tmp2[39]).OrbsIcon;
        const intl3 = tmp(tmp2[14]).intl;
        obj6[1] = intl3.string(tmp(tmp2[14]).t["0TmQRG"]);
        obj6[2] = isThemeDarkResult;
        tmp49 = callback3(tmp(tmp2[35]).IconTextBadge, obj6);
      }
      tmp52 = tmp(tmp2[24]).isOrbsExclusiveProduct(selectedProduct) && !hideBadge;
    }
  }
  const tmpResult5 = require(analyticsLocations[32]);
  const isPurchased = require(analyticsLocations[40]).useProductPurchaseState(selectedProduct).isPurchased;
  let tmp55 = !isPurchased;
  if (!isPurchased) {
    let enabled = paymentGateway === constants.APPLE_ADVANCED_COMMERCE;
    if (enabled) {
      enabled = OTPACOMOrderExperiment.useConfig({ location: "ProductDetailsActionSheetInner" }).enabled;
    }
    if (!enabled) {
      let result = paymentGateway === tmp56.GOOGLE;
      if (result) {
        result = tmp(tmp2[41]).isGooglePlayBillingSupported();
        const tmpResult10 = tmp(tmp2[41]);
      }
      if (result) {
        result = androidShopOrdersEnabled;
      }
      enabled = result;
    }
    tmp55 = enabled;
    tmp56 = constants;
  }
  const tmpResult9 = require(analyticsLocations[40]);
  const obj7 = { value: analyticsLocations, children: null };
  const obj8 = { scrollsToTop: false, style: tmp4.container, ref, children: null };
  const obj9 = { style: tmp4.actionButtons, children: null };
  if (tmp40) {
    const obj10 = { handlePreviewPress: null, onTrackPress: null };
    obj10[0] = callback;
    obj10[1] = trackPdpClick;
    tmp40 = callback3(PreviewProfileTrigger, obj10);
  }
  const items8 = [tmp40, callback3(analyticsLocations(analyticsLocations[44]), { selectedProduct, size: "md", onTrackPress: trackPdpClick })];
  obj9[1] = items8;
  const items9 = [closure_15(closure_8, obj9), , , , , ];
  let tmp63Result = null != tmp49;
  if (tmp63Result) {
    const obj11 = { style: null, children: null };
    obj11[0] = tmp4.badgeWrapper;
    obj11[1] = tmp49;
    tmp63Result = tmp63(tmp60, obj11);
  }
  items9[1] = tmp63Result;
  items9[2] = callback3(analyticsLocations(analyticsLocations[45]), { product: selectedProduct, handlePreviewPress: callback, onTrackPress: trackPdpClick, onBundleActiveItemChange: tmp39 });
  items9[3] = callback3(analyticsLocations(analyticsLocations[46]), { product: selectedProduct, onTrackPress: trackPdpClick });
  items9[4] = callback3(analyticsLocations(analyticsLocations[47]), { product, selectedVariantIndex: tmp14, onVariantSelect: tmp15 });
  const obj12 = { size: null };
  obj12[0] = analyticsLocations(analyticsLocations[10]).space.PX_16;
  items9[5] = callback3(require(analyticsLocations[48]).Spacer, obj12);
  obj8[3] = items9;
  const items10 = [closure_15(require(analyticsLocations[43]).BottomSheetScrollView, obj8), ];
  const obj13 = { skuIDs: [], activeSubscription: null, children: null };
  const obj14 = {
    paymentGateway,
    orderRequired: tmp55,
    skuIds: items11,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: analyticsLocations(analyticsLocations[42])(selectedProduct),
    onOrderRetryCancellation() {
      return analyticsLocations(analyticsLocations[51]).hideActionSheet(product(analyticsLocations[19]).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    children: null
  };
  items11 = [selectedProduct.skuId];
  tmp6Result = tmp6(tmp2[50]);
  obj14[7] = callback3(analyticsLocations(analyticsLocations[52]), { onBuy: tmp38Result, product: selectedProduct, analyticsLocations, onTrackPress: trackPdpClick });
  obj13[2] = callback3(tmp6Result, obj14, selectedProduct.skuId);
  items10[1] = callback3(require(analyticsLocations[49]).NativePaymentContextProvider, obj13);
  obj7[1] = items10;
  return closure_15(require(analyticsLocations[22]).AnalyticsLocationProvider, obj7);
});
let obj7 = { position: "absolute", top: 0, left: require("Themes").space.PX_16, zIndex: 2 };
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