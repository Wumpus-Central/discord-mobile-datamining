// === Module 8819: ProductDetailsActionSheet ===

// Module 8819 (ProductDetailsActionSheet)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5388 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7807 */;
import ShopStandalonePdpMobileExperiment from "ShopStandalonePdpMobileExperiment" /* 8816 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8821 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 9543 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 9635 */;
import _slicedToArray from "module_32" /* 32 */;
import "module_19";
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7796 */;

require = fn;
function PreviewProfileTrigger(handlePreviewPress) {
  handlePreviewPress = handlePreviewPress.handlePreviewPress;
  const onTrackPress = handlePreviewPress.onTrackPress;
  const tmp = closure_19();
  dependencyMap = tmp;
  const theme = handlePreviewPress(5199).useThemeContext().theme;
  const obj = handlePreviewPress(5199);
  const isThemeLightResult = handlePreviewPress(5147).isThemeLight(theme);
  closure_3 = theme === ThemeTypes.ONYX;
  noop = isThemeLightResult ? tmp.previewProfileButtonLight : tmp.previewProfileButtonDark;
  closure_5 = isThemeLightResult ? tmp.previewProfileButtonLightPressed : tmp.previewProfileButtonDarkPressed;
  items = [handlePreviewPress, onTrackPress];
  const obj3 = {
    style(pressed) {
      pressed = pressed.pressed;
      items = [closure_2.previewProfileButton, closure_4, , ];
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
    onPress: noop.useCallback(() => {
      onTrackPress(ShopCtaEnum.FULL_PROFILE_PREVIEW_BUTTON);
      handlePreviewPress();
    }, items),
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const intl = tmp2(1113).intl;
  obj3.accessibilityLabel = intl.string(handlePreviewPress(1113).t["3Qcx6K"]);
  const obj2 = handlePreviewPress(5147);
  obj3.children = closure_14(handlePreviewPress(7164).EyeIcon, { size: "md", color: onTrackPress(575).colors.INTERACTIVE_ICON_DEFAULT });
  return closure_14(closure_7, obj3);
}
function ProductDetailsActionSheetContent(product) {
  product = product.product;
  require = product;
  let num = product.initialVariantIndex;
  if (num === undefined) {
    num = 0;
  }
  let analyticsLocations1 = product.analyticsLocations;
  if (analyticsLocations1 === undefined) {
    analyticsLocations1 = [];
  }
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  let ref;
  let selectedProduct;
  let trackPdpClick;
  c5 = undefined;
  let id;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  closure_10 = undefined;
  const OTPACOMOrderExperiment = require("ACOMExperiments").OTPACOMOrderExperiment;
  const config = OTPACOMOrderExperiment.useConfig({ location: "ProductDetailsActionSheetInner" });
  const tmp4 = closure_19();
  const collectiblesPromotionEndpointReferenceMobile = require("CollectiblesPromotionsEndpointMobileExperiment").useCollectiblesPromotionEndpointReferenceMobile("ProductDetailsActionSheet");
  let tmp8;
  let obj = require("CollectiblesPromotionsEndpointMobileExperiment");
  if (collectiblesPromotionEndpointReferenceMobile) {
    tmp8 = closure_12;
  }
  analyticsLocations1(ref[23])(tmp8);
  ref = trackPdpClick.useRef(null);
  items = [];
  const tmp7 = analyticsLocations1(ref[23]);
  const tmp6Result = analyticsLocations1(ref[24]);
  items[HermesBuiltin.arraySpread(analyticsLocations1, 0)] = analyticsLocations1(ref[25]).COLLECTIBLES_SHOP_PROFILE_PREVIEW;
  const analyticsLocations = tmp6Result(items).analyticsLocations;
  const items1 = [product];
  const tmp13 = id(() => CollectiblesProductUtils.getProductSkuIds(product), items1);
  const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations1, 0);
  [tmp16, tmp17] = selectedProduct(trackPdpClick.useState(num), 2);
  const tmp15 = selectedProduct(trackPdpClick.useState(num), 2);
  selectedProduct = require("CollectiblesProductUtils").getSelectedProduct(product, tmp16);
  const tmpResult = require("CollectiblesProductUtils");
  trackPdpClick = require("useTrackPdpClick").useTrackPdpClick({ skuId: selectedProduct.skuId, productSkuIds: tmp13, analyticsLocations });
  const items2 = [trackPdpClick];
  const imperativeHandle = trackPdpClick.useImperativeHandle(product.ref, () => ({
    scrollToEnd() {
      const current = ref.current;
      let scrollToEndResult;
      if (current != null) {
        scrollToEndResult = current.scrollToEnd({ animated: true });
      }
      return scrollToEndResult;
    },
    notifyDismissed() {
      return trackPdpClick(constants.CLOSE_DETAIL);
    }
  }), items2);
  let obj3 = { skuId: selectedProduct.skuId, productSkuIds: tmp13, analyticsLocations };
  const tmpResult13 = require("useTrackPdpClick");
  [tmp22, tmp23] = selectedProduct(trackPdpClick.useState(undefined), 2);
  c5 = tmp23;
  const tmp21 = selectedProduct(trackPdpClick.useState(undefined), 2);
  if (selectedProduct.skuId !== tmp24[0]) {
    tmp25(selectedProduct.skuId);
    tmp23(undefined);
  }
  tmp24 = selectedProduct(trackPdpClick.useState(selectedProduct.skuId), 2);
  const collectibleProfileOverrides = require("useCollectibleProfileOverrides").useCollectibleProfileOverrides(selectedProduct, tmp22);
  const tmpResult14 = require("useCollectibleProfileOverrides");
  const collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
  let obj4 = { type: null, name: null, properties: null };
  const tmpResult15 = require("CollectiblesAnalyticsContext");
  obj4.type = require("discord_common/AnalyticsUtils").ImpressionTypes.HALFSHEET;
  obj4.name = require("discord_common/AnalyticsUtils").ImpressionNames.SHOP_PRODUCT_DETAIL;
  let obj5 = { sku_id: selectedProduct.skuId, location_stack: analyticsLocations, card_id: null, position_in_section: null, shop_session_id: null, product_sku_ids: null };
  let cardId;
  if (collectiblesAnalyticsContext != null) {
    cardId = collectiblesAnalyticsContext.cardId;
  }
  obj5.card_id = cardId;
  let tilePosition;
  if (collectiblesAnalyticsContext != null) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  obj5.position_in_section = tilePosition;
  let sessionId;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  obj5.shop_session_id = sessionId;
  obj5.product_sku_ids = tmp13;
  obj4.properties = obj5;
  analyticsLocations1(ref[29])(obj4);
  closure_129_0 = product;
  closure_129_1 = tmp16;
  closure_129_2 = analyticsLocations;
  closure_129_3 = tmp35;
  closure_129_4 = collectibleProfileOverrides;
  closure_129_5 = stageCollectibleChangeForEditProfile;
  const tmp6Result2 = analyticsLocations1(ref[29]);
  const currentUser = require("useCurrentUser").useCurrentUser();
  closure_129_6 = currentUser;
  const items3 = [product, tmp16, collectibleProfileOverrides, currentUser.id, analyticsLocations, collectiblesAnalyticsContext, stageCollectibleChangeForEditProfile];
  const callback = obj2.useCallback(() => {
    showUserProfileActionSheetDefault({
      userId: id.id,
      isPreviewingChanges: true,
      collectibleProfileOverrides: trackPdpClick,
      sourceAnalyticsLocations: ref,
      onClose() {
        if (null == _undefined) {
          const obj2 = { product, initialVariantIndex, analyticsLocations, shopAnalyticsContext };
          const result = product(ref[19]).openProductDetailsActionSheet(obj2);
          const obj4 = product(ref[19]);
        } else {
          const obj5 = { skuId: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null, stageCollectibleChangeForEditProfile: null };
          const obj = product(ref[19]);
          obj5.skuId = product(ref[20]).getSelectedProduct(product, initialVariantIndex).skuId;
          obj5.initialVariantIndex = initialVariantIndex;
          obj5.analyticsLocations = analyticsLocations;
          obj5.shopAnalyticsContext = shopAnalyticsContext;
          obj5.stageCollectibleChangeForEditProfile = tmp;
          const result1 = obj.openProductDetailsActionSheetForSku(obj5);
          const obj3 = product(ref[20]);
        }
      }
    });
  }, items3);
  const tmp38 = product.type === require("CollectiblesItemType").CollectiblesItemType.BUNDLE;
  id = tmp38;
  const tmpResult16 = require("useCurrentUser");
  [type, c7] = selectedProduct(trackPdpClick.useState(() => {
    let tmp;
    if (closure_6) {
      const first = product.items[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      tmp = type;
    }
    return tmp;
  }), 2);
  const tmp14Result = selectedProduct(trackPdpClick.useState(() => {
    let tmp;
    if (closure_6) {
      const first = product.items[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      tmp = type;
    }
    return tmp;
  }), 2);
  if (!tmp38) {
    type = selectedProduct.type;
  }
  let tmp41 = null != type;
  if (tmp41) {
    tmp41 = type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_EFFECT || type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_FRAME || type === tmp(tmp2[16]).CollectiblesItemType.AVATAR_DECORATION;
    const tmp42 = type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_EFFECT || type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_FRAME || type === tmp(tmp2[16]).CollectiblesItemType.AVATAR_DECORATION;
  }
  const items4 = [analyticsLocations1, product.skuId];
  const effect = obj2.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, { type: "Collectibles Shop Details Modal", location_stack: analyticsLocations1, sku_id: product.skuId });
  }, items4);
  const hideBadge = product.hideBadge;
  const tmp40 = c5((type) => {
    _undefined(type);
    _undefined2(type.type);
  }, []);
  const tmpResult17 = require("native");
  const isThemeDarkResult = require("shared").isThemeDark(tmpResult17.useThemeContext().theme);
  const tmpResult18 = require("shared");
  const items5 = [c9];
  let categoryWillUnpublishAt = product.categoryWillUnpublishAt;
  if (categoryWillUnpublishAt == null) {
    categoryWillUnpublishAt = tmpResult19.useStateFromStores(items5, () => {
      const category = CollectiblesCategoryStore.getCategory(product.categorySkuId);
      let unpublishedAt;
      if (category != null) {
        unpublishedAt = category.unpublishedAt;
      }
      return unpublishedAt;
    });
  }
  let tmp45 = selectedProduct;
  if (tmp38) {
    tmp45 = selectedProduct;
    if (null != tmp22) {
      const obj6 = { skuId: null, type: null, items: null };
      ({ skuId: obj14.skuId, type: obj14.type } = tmp22);
      const items6 = [tmp22];
      obj6.items = items6;
      tmp45 = obj6;
    }
  }
  let tmp46 = null;
  if (null == product.badgeOverride) {
    if (tmpResult20.isDynamicProduct(tmp45)) {
      if (!hideBadge) {
        const obj7 = { accessibilityLabel: null, children: null };
        const intl = tmp(tmp2[14]).intl;
        obj7.accessibilityLabel = intl.string(tmp(tmp2[14]).t["+drfVi"]);
        const obj8 = { icon: tmp(tmp2[35]).DiceIcon, label: null, isDark: null };
        const intl2 = tmp(tmp2[14]).intl;
        obj8.label = intl2.string(tmp(tmp2[14]).t["+drfVi"]);
        obj8.isDark = isThemeDarkResult;
        obj7.children = closure_14(tmp(tmp2[34]).IconTextBadge, obj8);
        tmp46 = closure_14(tmp(tmp2[33]).DynamicBadgeTooltip, obj7);
      }
    }
    if (null != categoryWillUnpublishAt) {
      if (tmpResult21.shouldShowLimitedTimeBadge(categoryWillUnpublishAt)) {
        if (!hideBadge) {
          const obj9 = { unpublishedAt: categoryWillUnpublishAt };
          tmp46 = closure_14(tmp6(tmp2[37]), obj9);
        }
      }
      tmpResult21 = tmp(tmp2[36]);
    }
    tmpResult20 = tmp(tmp2[20]);
    const tmpResult22 = tmp(tmp2[20]);
    tmp46 = null;
    if (tmp49) {
      const obj10 = { icon: tmp(tmp2[38]).OrbsIcon, label: null, isDark: null };
      const intl3 = tmp(tmp2[14]).intl;
      obj10.label = intl3.string(tmp(tmp2[14]).t["0TmQRG"]);
      obj10.isDark = isThemeDarkResult;
      tmp46 = closure_14(tmp(tmp2[34]).IconTextBadge, obj10);
    }
    tmp49 = tmp(tmp2[20]).isOrbsExclusiveProduct(selectedProduct) && !hideBadge;
  }
  tmpResult19 = require("initialize");
  const collectiblesPromotionForProduct = require("useCollectiblesPromotionForProduct").useCollectiblesPromotionForProduct(selectedProduct);
  const tmpResult23 = require("useCollectiblesPromotionForProduct");
  let tmp62Result = require("CollectiblesPromotionBadgeUtils").shouldShowPromotionBadge(collectiblesPromotionForProduct) && !hideBadge;
  const tmpResult24 = require("CollectiblesPromotionBadgeUtils");
  [tmp54, c8] = selectedProduct(trackPdpClick.useState(false), 2);
  const tmp14Result4 = selectedProduct(trackPdpClick.useState(false), 2);
  [tmp56, c9] = selectedProduct(trackPdpClick.useState(null), 2);
  const tmp14Result6 = selectedProduct(trackPdpClick.useState(0), 2);
  closure_10 = tmp14Result6[1];
  const obj11 = { value: analyticsLocations, children: null };
  const obj12 = { scrollsToTop: false, style: tmp4.container, ref, children: null };
  const obj13 = { style: tmp4.actionButtons, children: null };
  if (tmp41) {
    const obj15 = { handlePreviewPress: callback, onTrackPress: trackPdpClick };
    tmp41 = closure_14(PreviewProfileTrigger, obj15);
  }
  const items7 = [tmp41, closure_14(analyticsLocations1(ref[42]), { selectedProduct, size: "md", onTrackPress: trackPdpClick })];
  obj13.children = items7;
  const items8 = [closure_15(c8, obj13), , , , , ];
  let tmp58Result = null != tmp46 || tmp62Result;
  if (tmp58Result) {
    const obj16 = { style: tmp4.badgeWrapper, children: null };
    const items9 = [tmp46, ];
    if (tmp62Result) {
      const obj17 = { icon: tmp(tmp2[43]).TagIcon, label: null, isDark: null };
      const intl4 = tmp(tmp2[14]).intl;
      obj17.label = intl4.string(tmp(tmp2[14]).t["nb5PC/"]);
      obj17.isDark = isThemeDarkResult;
      tmp62Result = closure_14(tmp(tmp2[34]).IconTextBadge, obj17);
    }
    items9[1] = tmp62Result;
    obj16.children = items9;
    tmp58Result = closure_15(tmp59, obj16);
  }
  items8[1] = tmp58Result;
  items8[2] = closure_14(analyticsLocations1(ref[44]), { product: selectedProduct, handlePreviewPress: callback, onTrackPress: trackPdpClick, onBundleActiveItemChange: tmp40 });
  items8[3] = closure_14(analyticsLocations1(ref[45]), { product: selectedProduct, onTrackPress: trackPdpClick });
  items8[4] = closure_14(analyticsLocations1(ref[46]), { product, selectedVariantIndex: tmp16, disabled: tmp54, onVariantSelect: tmp17 });
  const tmp14Result5 = selectedProduct(trackPdpClick.useState(null), 2);
  items8[5] = closure_14(require("native").Spacer, { size: analyticsLocations1(ref[10]).space.PX_16 });
  obj12.children = items8;
  const items10 = [
    closure_15(require("BottomSheetModal").BottomSheetScrollView, obj12),
    closure_14(analyticsLocations1(ref[48]), {
      product: selectedProduct,
      analyticsLocations,
      onTrackPress: trackPdpClick,
      isBuying: tmp54,
      onStartPurchase() {
        _undefined4(selectedProduct);
        closure_10((arg0) => arg0 + 1);
        _undefined3(true);
      },
      stageCollectibleChangeForEditProfile
    }),

  ];
  let tmp62Result2 = null != tmp56;
  if (tmp62Result2) {
    const obj20 = {
      product: tmp56,
      attempt: tmp14Result6[0],
      analyticsLocations,
      onBuySettled() {
          return _undefined3(false);
        },
      stageCollectibleChangeForEditProfile
    };
    tmp62Result2 = closure_14(tmp6(tmp2[49]), obj20);
  }
  items10[2] = tmp62Result2;
  obj11.children = items10;
  return closure_15(require("useAnalyticsLocations").AnalyticsLocationProvider, obj11);
}
function ProductDetailsActionSheetInner(arg0) {
  ({ product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = arg0);
  const ref1 = noop.useRef(null);
  const ref = noop.useRef(null);
  return gesture(Sheet_BottomSheet.BottomSheet, {
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
    ref: noop.useRef(null),
    children: gesture(ProductDetailsActionSheetContent, { ref: ref1, product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile })
  });
}
function ManagedProductDetailsActionSheetInner(skuId) {
  skuId = skuId.skuId;
  const initialVariantIndex = skuId.initialVariantIndex;
  let ref1;
  ({ analyticsLocations, stageCollectibleChangeForEditProfile } = skuId);
  const collectiblesShopProduct = skuId(9667).useCollectiblesShopProduct(skuId, { needsCategory: false, seedCategoryStore: true });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  ({ state, retry } = collectiblesShopProduct);
  let obj = skuId(9667);
  const getOrFetchPurchases = skuId(10725).useGetOrFetchPurchases();
  items = [product];
  ({ hasPreviouslyFetched, fetchPurchasesError } = getOrFetchPurchases);
  const obj3 = closure_6(() => {
    if (null != c2) {
      items = [tmp];
      let googleSkuIds = collectibles_CollectiblesUtils.getGoogleSkuIds(items);
    } else {
      googleSkuIds = closure_18;
    }
    return googleSkuIds;
  }, items);
  const obj2 = skuId(10725);
  const tmp5 = initialVariantIndex;
  initialVariantIndex(10032).useLoadedGoogleSkuIds(obj3);
  const obj4 = initialVariantIndex(10032);
  const everyResult = obj3.every((item) => set.has(item));
  ref1 = ref1.useRef(null);
  const items1 = [product, skuId, initialVariantIndex];
  if ("ready" === state) {
    if (hasPreviouslyFetched) {
      if (everyResult) {
        if (null != product) {
          const obj5 = { ref: ref1, product, initialVariantIndex: tmp9, analyticsLocations, stageCollectibleChangeForEditProfile };
          let tmp11 = closure_14(ProductDetailsActionSheetContent, obj5);
          let tmp10 = closure_14;
        }
        const obj6 = {
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
          ref,
          children: tmp11
        };
        return tmp10(tmp(5388).BottomSheet, obj6);
      }
    }
  }
  if ("error" === state) {
    const obj7 = { Illustration: tmp(8879).NoResults, body: null, children: null };
    const intl = tmp(1113).intl;
    obj7.body = intl.string(tmp(1113).t.eAn6z2);
    const obj8 = { text: null, onPress: null };
    const intl2 = tmp(1113).intl;
    obj8.text = intl2.string(tmp(1113).t["+hivLW"]);
    obj8.onPress = retry;
    obj7.children = closure_14(tmp(5758).Button, obj8);
    tmp11 = closure_14(tmp(1187).EmptyState, obj7);
    tmp10 = closure_14;
  } else {
    tmp10 = closure_14;
    tmp11 = closure_14(tmp5(15342), {});
  }
  ref = ref1.useRef(null);
}
function ProductDetailsActionSheetWithOrderCTX(arg0) {
  stageCollectibleChangeForEditProfile = arg0;
  if (obj.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet")) {
    if ("skuId" in stageCollectibleChangeForEditProfile) {
      let skuId = stageCollectibleChangeForEditProfile.skuId;
    } else {
      skuId = stageCollectibleChangeForEditProfile.product.skuId;
    }
    const obj2 = { skuId, initialVariantIndex: null, analyticsLocations: null, stageCollectibleChangeForEditProfile: null };
    ({ initialVariantIndex: obj3.initialVariantIndex, analyticsLocations: obj3.analyticsLocations, stageCollectibleChangeForEditProfile } = stageCollectibleChangeForEditProfile);
    obj2.stageCollectibleChangeForEditProfile = stageCollectibleChangeForEditProfile;
    gesture(ManagedProductDetailsActionSheetInner, obj2);
  } else {
    if ("product" in stageCollectibleChangeForEditProfile) {
      const obj5 = {};
      const merged = Object.assign(stageCollectibleChangeForEditProfile);
      let tmp3 = gesture(ProductDetailsActionSheetInner, obj5);
    } else {
      logger.error("ProductDetailsActionSheet opened with a skuId but no product, and the experiment is disabled");
      tmp3 = null;
    }
    return tmp3;
  }
  obj = ShopStandalonePdpMobileExperiment;
}
let noop = fn(19);
({ useCallback: hasOwnProperty, useMemo: closure_6 } = noop);
get_ActivityIndicator = fn(17);
({ Pressable: metroImportDefault, View: closure_8 } = get_ActivityIndicator);
const ShopCtaEnum = fn(1074).ShopCtaEnum;
const Constants = fn(1072);
({ AnalyticEvents: closure_11, COLLECTIBLES_APPLICATION_ID: closure_12 } = Constants);
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = {};
const logger = new LoggerDefault("ProductDetailsActionSheet");
let closure_18 = [];
const createStyles = fn(5140);
let obj2 = { container: { position: "relative", flex: 1 }, actionButtons: null, previewProfileButton: null, previewProfileButtonLight: null, previewProfileButtonLightPressed: null, previewProfileButtonDark: null, previewProfileButtonDarkPressed: null, previewProfileButtonMidnight: null, badgeWrapper: null };
const rect = { position: "absolute", top: 0, right: nativeDefault.space.PX_16, zIndex: 2, flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.actionButtons = rect;
let size = { width: fn(5764).MEDIUM_BUTTON_HEIGHT, height: fn(5764).MEDIUM_BUTTON_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT };
obj2.previewProfileButton = size;
let obj3 = { backgroundColor: null };
let native = fn(5199);
obj3.backgroundColor = native.setColorOpacity("white", 0.72);
obj2.previewProfileButtonLight = obj3;
let obj4 = { backgroundColor: null };
native = fn(5199);
obj4.backgroundColor = native.setColorOpacity("white", 0.62);
obj2.previewProfileButtonLightPressed = obj4;
const tmp6 = new LoggerDefault("ProductDetailsActionSheet");
obj2.previewProfileButtonDark = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
let obj5 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj2.previewProfileButtonDarkPressed = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
let obj7 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
obj2.previewProfileButtonMidnight = { borderColor: nativeDefault.colors.BORDER_STRONG };
const rect1 = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, zIndex: 2, flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.badgeWrapper = rect1;
let closure_19 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheet.tsx");

export default function ProductDetailsActionSheet(shopAnalyticsContext) {
  shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
  if (shopAnalyticsContext === undefined) {
    shopAnalyticsContext = closure_16;
  }
  const merged = Object.assign(shopAnalyticsContext, Object.assign({ shopAnalyticsContext: 0 }));
  const obj = { newValue: shopAnalyticsContext, children: null };
  const merged1 = Object.assign(merged);
  obj.children = gesture(ProductDetailsActionSheetWithOrderCTX, {});
  return gesture(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
};