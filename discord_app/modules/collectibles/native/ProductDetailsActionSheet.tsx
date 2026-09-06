// discord_app/modules/collectibles/native/ProductDetailsActionSheet.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import ShopStandalonePdpMobileExperiment from "../experiments/ShopStandalonePdpMobileExperiment.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import CollectiblesAnalyticsContext from "../CollectiblesAnalyticsContext.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import "module_19";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

require = fn;
function PreviewProfileTrigger(handlePreviewPress) {
  handlePreviewPress = handlePreviewPress.handlePreviewPress;
  const onTrackPress = handlePreviewPress.onTrackPress;
  const tmp = closure_17();
  dependencyMap = tmp;
  let obj = handlePreviewPress(4271);
  const theme = obj.useThemeContext().theme;
  const isThemeLightResult = handlePreviewPress(4411).isThemeLight(theme);
  closure_3 = theme === ThemeTypes.MIDNIGHT;
  noop = isThemeLightResult ? tmp.previewProfileButtonLight : tmp.previewProfileButtonDark;
  closure_5 = isThemeLightResult ? tmp.previewProfileButtonLightPressed : tmp.previewProfileButtonDarkPressed;
  let items = [handlePreviewPress, onTrackPress];
  obj = {
    style(pressed) {
      pressed = pressed.pressed;
      const items = [closure_2.previewProfileButton, closure_4, ,];
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
    children: null,
  };
  const intl = tmp2(1114).intl;
  obj.accessibilityLabel = intl.string(handlePreviewPress(1114).t["3Qcx6K"]);
  obj = { size: "md", color: onTrackPress(576).colors.INTERACTIVE_ICON_DEFAULT };
  obj.children = closure_13(handlePreviewPress(6970).EyeIcon, obj);
  return closure_13(closure_7, obj);
}
function ProductDetailsActionSheetInner(arg0) {
  ({ product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = arg0);
  const ref1 = noop.useRef(null);
  const ref = noop.useRef(null);
  return map1(Sheet_BottomSheet.BottomSheet, {
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
    children: map1(closure_19, {
      ref: ref1,
      product,
      initialVariantIndex,
      analyticsLocations,
      stageCollectibleChangeForEditProfile,
    }),
  });
}
function ManagedProductDetailsActionSheetInner(skuId) {
  skuId = skuId.skuId;
  const initialVariantIndex = skuId.initialVariantIndex;
  ({ analyticsLocations, stageCollectibleChangeForEditProfile } = skuId);
  let obj = skuId(13108);
  const collectiblesShopProduct = obj.useCollectiblesShopProduct(skuId, {
    needsCategory: false,
    seedCategoryStore: true,
  });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  ({ state, retry } = collectiblesShopProduct);
  let obj1 = skuId(10734);
  const getOrFetchPurchases = obj1.useGetOrFetchPurchases();
  ({ hasPreviouslyFetched, fetchPurchasesError } = getOrFetchPurchases);
  const ref1 = noop.useRef(null);
  const items = [product, skuId, initialVariantIndex];
  if ("ready" === state) {
    if (hasPreviouslyFetched) {
      if (null != product) {
        obj = {
          ref: ref1,
          product,
          initialVariantIndex: tmp7,
          analyticsLocations,
          stageCollectibleChangeForEditProfile,
        };
        obj = {
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
          children: null,
        };
        obj.children = closure_13(closure_19, obj);
        return closure_13(tmp(7150).BottomSheet, obj);
      }
    }
  }
  if ("error" === state) {
    obj1 = { Illustration: tmp(8232).NoResults, body: null, children: null };
    const intl = tmp(1114).intl;
    obj1.body = intl.string(tmp(1114).t.eAn6z2);
    const obj2 = { text: null, onPress: null };
    const intl2 = tmp(1114).intl;
    obj2.text = intl2.string(tmp(1114).t["+hivLW"]);
    obj2.onPress = retry;
    obj1.children = closure_13(tmp(4975).Button, obj2);
    closure_13(tmp(1178).EmptyState, obj1);
  } else {
    closure_13(initialVariantIndex(13167), {});
  }
  ref = noop.useRef(null);
}
function ProductDetailsActionSheetWithOrderCTX(arg0) {
  stageCollectibleChangeForEditProfile = arg0;
  let obj = ShopStandalonePdpMobileExperiment;
  if (obj.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet")) {
    if ("skuId" in stageCollectibleChangeForEditProfile) {
      let skuId = stageCollectibleChangeForEditProfile.skuId;
    } else {
      skuId = stageCollectibleChangeForEditProfile.product.skuId;
    }
    obj = { skuId, initialVariantIndex: null, analyticsLocations: null, stageCollectibleChangeForEditProfile: null };
    ({
      initialVariantIndex: obj3.initialVariantIndex,
      analyticsLocations: obj3.analyticsLocations,
      stageCollectibleChangeForEditProfile,
    } = stageCollectibleChangeForEditProfile);
    obj.stageCollectibleChangeForEditProfile = stageCollectibleChangeForEditProfile;
    map1(ManagedProductDetailsActionSheetInner, obj);
  } else {
    if ("product" in stageCollectibleChangeForEditProfile) {
      obj = {};
      const merged = Object.assign(stageCollectibleChangeForEditProfile);
      let tmp3 = map1(ProductDetailsActionSheetInner, obj);
    } else {
      logger.error("ProductDetailsActionSheet opened with a skuId but no product, and the experiment is disabled");
      tmp3 = null;
    }
    return tmp3;
  }
}
let noop = fn(19);
({ useCallback: hasOwnProperty, useMemo: metroRequire } = noop);
get_ActivityIndicator = fn(17);
({ Pressable: closure_7, View: closure_8 } = get_ActivityIndicator);
const ShopCtaEnum = fn(1076).ShopCtaEnum;
const AnalyticEvents = fn(1074).AnalyticEvents;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = {};
const logger = new LoggerDefault("ProductDetailsActionSheet");
fn(4560);
let obj = {
  container: { position: "relative", flex: 1 },
  actionButtons: null,
  previewProfileButton: null,
  previewProfileButtonLight: null,
  previewProfileButtonLightPressed: null,
  previewProfileButtonDark: null,
  previewProfileButtonDarkPressed: null,
  previewProfileButtonMidnight: null,
  badgeWrapper: null,
};
const rect = {
  position: "absolute",
  top: 0,
  right: nativeDefault.space.PX_16,
  zIndex: 2,
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
};
obj.actionButtons = rect;
let size = {
  width: fn(4980).MEDIUM_BUTTON_HEIGHT,
  height: fn(4980).MEDIUM_BUTTON_HEIGHT,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
  borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT,
};
obj.previewProfileButton = size;
obj = { backgroundColor: null };
let native = fn(4271);
obj.backgroundColor = native.setColorOpacity("white", 0.72);
obj.previewProfileButtonLight = obj;
const createStyles = { backgroundColor: null };
native = fn(4271);
createStyles.backgroundColor = native.setColorOpacity("white", 0.62);
obj.previewProfileButtonLightPressed = createStyles;
const tmp5 = new LoggerDefault("ProductDetailsActionSheet");
obj.previewProfileButtonDark = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
let obj2 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj.previewProfileButtonDarkPressed = {
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE,
};
let obj3 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
obj.previewProfileButtonMidnight = { borderColor: nativeDefault.colors.BORDER_STRONG };
const rect1 = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, zIndex: 2 };
obj.badgeWrapper = rect1;
let closure_17 = createStyles.createStyles(obj);
let closure_19 = noop.forwardRef((product, arg1) => {
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
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  let ref;
  _slicedToArray = undefined;
  let selectedProduct;
  c6 = undefined;
  closure_7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  closure_11 = undefined;
  const OTPACOMOrderExperiment = require("ACOMExperiments").OTPACOMOrderExperiment;
  const config = OTPACOMOrderExperiment.useConfig({ location: "ProductDetailsActionSheetInner" });
  const tmp4 = closure_17();
  ref = selectedProduct.useRef(null);
  const items = [];
  const tmp7 = analyticsLocations(ref[22]);
  items[HermesBuiltin.arraySpread(analyticsLocations, 0)] = analyticsLocations(
    ref[23],
  ).COLLECTIBLES_SHOP_PROFILE_PREVIEW;
  analyticsLocations = tmp7(items).analyticsLocations;
  const tmp10 = _slicedToArray(selectedProduct.useState(true), 2);
  _slicedToArray = tmp11;
  const items1 = [product];
  const tmp12 = c6(() => CollectiblesProductUtils.getProductSkuIds(product), items1);
  const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
  [tmp14, tmp15] = _slicedToArray(selectedProduct.useState(num), 2);
  let obj1 = require("CollectiblesProductUtils");
  selectedProduct = obj1.getSelectedProduct(product, tmp14);
  let obj2 = require("useTrackPdpClick");
  let obj = { skuId: selectedProduct.skuId, productSkuIds: tmp12, analyticsLocations };
  const trackPdpClick = obj2.useTrackPdpClick(obj);
  const items2 = [trackPdpClick];
  const imperativeHandle = selectedProduct.useImperativeHandle(
    arg1,
    () => ({
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
      },
    }),
    items2,
  );
  const tmp13 = _slicedToArray(selectedProduct.useState(num), 2);
  [tmp20, tmp21] = _slicedToArray(selectedProduct.useState(undefined), 2);
  c6 = tmp21;
  const tmp19 = _slicedToArray(selectedProduct.useState(undefined), 2);
  if (selectedProduct.skuId !== tmp22[0]) {
    tmp23(selectedProduct.skuId);
    tmp21(undefined);
  }
  let tmpResult = tmp(tmp2[25]);
  const previewCollectibleProduct = tmpResult.usePreviewCollectibleProduct(selectedProduct, tmp10[0], tmp20);
  tmpResult = tmp(tmp2[26]);
  const collectiblesAnalyticsContext = tmpResult.useCollectiblesAnalyticsContext();
  obj = { type: null, name: null, properties: null };
  tmp22 = _slicedToArray(selectedProduct.useState(selectedProduct.skuId), 2);
  obj.type = require("discord_common/AnalyticsUtils").ImpressionTypes.HALFSHEET;
  obj.name = require("discord_common/AnalyticsUtils").ImpressionNames.SHOP_PRODUCT_DETAIL;
  obj1 = {
    sku_id: selectedProduct.skuId,
    location_stack: analyticsLocations,
    card_id: null,
    position_in_section: null,
    shop_session_id: null,
    product_sku_ids: null,
  };
  let cardId;
  if (collectiblesAnalyticsContext != null) {
    cardId = collectiblesAnalyticsContext.cardId;
  }
  obj1.card_id = cardId;
  let tilePosition;
  if (collectiblesAnalyticsContext != null) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  obj1.position_in_section = tilePosition;
  let sessionId;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  obj1.shop_session_id = sessionId;
  obj1.product_sku_ids = tmp12;
  obj.properties = obj1;
  analyticsLocations(ref[27])(obj);
  closure_129_0 = product;
  closure_129_1 = tmp14;
  closure_129_2 = analyticsLocations;
  closure_129_3 = tmp33;
  closure_129_4 = tmp11;
  closure_129_5 = stageCollectibleChangeForEditProfile;
  const tmp6Result = analyticsLocations(ref[27]);
  const currentUser = require("useCurrentUser").useCurrentUser();
  closure_129_6 = currentUser;
  const items3 = [
    product,
    tmp14,
    tmp10[1],
    currentUser.id,
    analyticsLocations,
    collectiblesAnalyticsContext,
    stageCollectibleChangeForEditProfile,
  ];
  const callback = obj.useCallback(() => {
    selectedProduct(false);
    showUserProfileActionSheetDefault({
      userId: _undefined.id,
      isPreviewingChanges: true,
      sourceAnalyticsLocations: ref,
      onClose() {
        if (null == trackPdpClick) {
          let obj = { product, initialVariantIndex, analyticsLocations, shopAnalyticsContext };
          const result = product(ref[19]).openProductDetailsActionSheet(obj);
          const obj4 = product(ref[19]);
        } else {
          product(ref[19]);
          obj = {
            skuId: product(ref[20]).getSelectedProduct(product, initialVariantIndex).skuId,
            initialVariantIndex,
            analyticsLocations,
            shopAnalyticsContext,
            stageCollectibleChangeForEditProfile: tmp,
          };
          const result1 = obj.openProductDetailsActionSheetForSku(obj);
          const obj3 = product(ref[20]);
        }
      },
    });
  }, items3);
  const tmp36 = product.type === require("CollectiblesItemType").CollectiblesItemType.BUNDLE;
  closure_7 = tmp36;
  let tmp9Result = tmp9(
    obj.useState(() => {
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
    }),
    2,
  );
  [type, c8] = tmp9Result;
  const tmp38 = trackPdpClick;
  const tmpResult1 = require("useCurrentUser");
  if (!tmp36) {
    type = selectedProduct.type;
  }
  let tmp40 = null != type;
  if (tmp40) {
    tmp40 =
      type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_EFFECT ||
      type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_FRAME ||
      type === tmp(tmp2[16]).CollectiblesItemType.AVATAR_DECORATION;
    const tmp41 =
      type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_EFFECT ||
      type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_FRAME ||
      type === tmp(tmp2[16]).CollectiblesItemType.AVATAR_DECORATION;
  }
  const items4 = [product, tmp10[1]];
  const items5 = [analyticsLocations, product.skuId];
  const tmp39 = trackPdpClick((type) => {
    _undefined(type);
    _undefined2(type.type);
  }, []);
  const effect = obj.useEffect(() => {
    const obj = { type: "Collectibles Shop Details Modal", location_stack: analyticsLocations, sku_id: product.skuId };
    obj.track(AnalyticEvents.OPEN_MODAL, obj);
  }, items5);
  const hideBadge = product.hideBadge;
  const tmp38Result = tmp38(() => {
    if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      closure_3(false);
    }
  }, items4);
  const isProfileFramesEarlyAccessPhase =
    require("useCanPurchaseFrames").useIsProfileFramesEarlyAccessPhase("ProductDetailsActionSheet");
  const tmpResult2 = require("useCanPurchaseFrames");
  const tmp45 =
    selectedProduct.type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME &&
    isProfileFramesEarlyAccessPhase &&
    !hideBadge;
  const tmpResult3 = require("native");
  const isThemeDarkResult = require("shared").isThemeDark(tmpResult3.useThemeContext().theme);
  const tmpResult4 = require("shared");
  const items6 = [c9];
  const stateFromStores = require("initialize").useStateFromStores(items6, () => {
    const category = CollectiblesCategoryStore.getCategory(product.categorySkuId);
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
      ({ skuId: obj14.skuId, type: obj14.type } = tmp20);
      const items7 = [tmp20];
      obj2.items = items7;
      tmp48 = obj2;
    }
  }
  if (tmp45) {
    let tmp49 = closure_13(tmp6(tmp2[32]), { location: "ProductDetailsActionSheet", disablePressable: true });
  } else {
    tmp49 = null;
    if (null == product.badgeOverride) {
      if (tmpResult6.isDynamicProduct(tmp48)) {
        if (!hideBadge) {
          let obj3 = { accessibilityLabel: null, children: null };
          const intl = tmp(tmp2[14]).intl;
          obj3.accessibilityLabel = intl.string(tmp(tmp2[14]).t["+drfVi"]);
          let obj4 = { icon: tmp(tmp2[35]).DiceIcon, label: null, isDark: null };
          const intl2 = tmp(tmp2[14]).intl;
          obj4.label = intl2.string(tmp(tmp2[14]).t["+drfVi"]);
          obj4.isDark = isThemeDarkResult;
          obj3.children = closure_13(tmp(tmp2[34]).IconTextBadge, obj4);
          tmp49 = closure_13(tmp(tmp2[33]).DynamicBadgeTooltip, obj3);
        }
      }
      if (null != stateFromStores) {
        if (tmpResult7.shouldShowLimitedTimeBadge(stateFromStores)) {
          if (!hideBadge) {
            const obj5 = { unpublishedAt: stateFromStores };
            tmp49 = closure_13(tmp6(tmp2[37]), obj5);
          }
        }
        tmpResult7 = tmp(tmp2[36]);
      }
      tmpResult6 = tmp(tmp2[20]);
      const tmpResult8 = tmp(tmp2[20]);
      tmp49 = null;
      if (tmp52) {
        const obj6 = { icon: tmp(tmp2[38]).OrbsIcon, label: null, isDark: null };
        const intl3 = tmp(tmp2[14]).intl;
        obj6.label = intl3.string(tmp(tmp2[14]).t["0TmQRG"]);
        obj6.isDark = isThemeDarkResult;
        tmp49 = closure_13(tmp(tmp2[34]).IconTextBadge, obj6);
      }
      tmp52 = tmp(tmp2[20]).isOrbsExclusiveProduct(selectedProduct) && !hideBadge;
    }
  }
  tmp9Result = tmp9(obj.useState(false), 2);
  [tmp56, c9] = tmp9Result;
  const tmpResult5 = require("initialize");
  [tmp58, c10] = _slicedToArray(obj.useState(null), 2);
  const tmp9Result2 = _slicedToArray(obj.useState(0), 2);
  closure_11 = tmp9Result2[1];
  const obj7 = { value: analyticsLocations, children: null };
  const obj8 = { scrollsToTop: false, style: tmp4.container, ref, children: null };
  const obj9 = { style: tmp4.actionButtons, children: null };
  if (tmp40) {
    const obj10 = { handlePreviewPress: callback, onTrackPress: trackPdpClick };
    tmp40 = closure_13(PreviewProfileTrigger, obj10);
  }
  const items8 = [
    tmp40,
    closure_13(analyticsLocations(ref[40]), { selectedProduct, size: "md", onTrackPress: trackPdpClick }),
  ];
  obj9.children = items8;
  const items9 = [closure_14(c8, obj9), , , , ,];
  let tmp64Result = null != tmp49;
  if (tmp64Result) {
    const obj11 = { style: tmp4.badgeWrapper, children: tmp49 };
    tmp64Result = closure_13(tmp61, obj11);
  }
  items9[1] = tmp64Result;
  items9[2] = closure_13(analyticsLocations(ref[41]), {
    product: selectedProduct,
    handlePreviewPress: callback,
    onTrackPress: trackPdpClick,
    onBundleActiveItemChange: tmp39,
  });
  items9[3] = closure_13(analyticsLocations(ref[42]), { product: selectedProduct, onTrackPress: trackPdpClick });
  items9[4] = closure_13(analyticsLocations(ref[43]), {
    product,
    selectedVariantIndex: tmp14,
    disabled: tmp56,
    onVariantSelect: tmp15,
  });
  const tmp9Result1 = _slicedToArray(obj.useState(null), 2);
  items9[5] = closure_13(require("native").Spacer, { size: analyticsLocations(ref[10]).space.PX_16 });
  obj8.children = items9;
  const items10 = [
    closure_14(require("BottomSheetModal").BottomSheetScrollView, obj8),
    closure_13(analyticsLocations(ref[45]), {
      product: selectedProduct,
      analyticsLocations,
      onTrackPress: trackPdpClick,
      isBuying: tmp56,
      onStartPurchase() {
        _undefined4(selectedProduct);
        closure_11((arg0) => arg0 + 1);
        _undefined3(true);
      },
      stageCollectibleChangeForEditProfile,
    }),
  ];
  tmp64Result = null != tmp58;
  if (tmp64Result) {
    const obj14 = {
      product: tmp58,
      attempt: tmp9Result2[0],
      analyticsLocations,
      onBuy: tmp38Result,
      onBuySettled() {
        return _undefined3(false);
      },
      stageCollectibleChangeForEditProfile,
    };
    tmp64Result = closure_13(tmp6(tmp2[46]), obj14);
  }
  items10[2] = tmp64Result;
  obj7.children = items10;
  return closure_14(require("useAnalyticsLocations").AnalyticsLocationProvider, obj7);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheet.tsx");

export default function ProductDetailsActionSheet(shopAnalyticsContext) {
  shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
  if (shopAnalyticsContext === undefined) {
    shopAnalyticsContext = closure_15;
  }
  const merged = Object.assign(shopAnalyticsContext, Object.assign({ shopAnalyticsContext: 0 }));
  let obj = { newValue: shopAnalyticsContext, children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  obj.children = map1(ProductDetailsActionSheetWithOrderCTX, obj);
  return map1(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
}
