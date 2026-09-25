// discord_app/modules/collectibles/native/ProductDetailsActionSheet.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
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
  const theme = handlePreviewPress(4537).useThemeContext().theme;
  const obj = handlePreviewPress(4537);
  const isThemeLightResult = handlePreviewPress(4682).isThemeLight(theme);
  closure_3 = theme === ThemeTypes.ONYX;
  noop = isThemeLightResult ? tmp.previewProfileButtonLight : tmp.previewProfileButtonDark;
  closure_5 = isThemeLightResult ? tmp.previewProfileButtonLightPressed : tmp.previewProfileButtonDarkPressed;
  let items = [handlePreviewPress, onTrackPress];
  const obj3 = {
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
  const intl = tmp2(1115).intl;
  obj3.accessibilityLabel = intl.string(handlePreviewPress(1115).t["3Qcx6K"]);
  const obj2 = handlePreviewPress(4682);
  obj3.children = closure_13(handlePreviewPress(6384).EyeIcon, {
    size: "md",
    color: onTrackPress(576).colors.INTERACTIVE_ICON_DEFAULT,
  });
  return closure_13(closure_7, obj3);
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
  const collectiblesShopProduct = skuId(8331).useCollectiblesShopProduct(skuId, {
    needsCategory: false,
    seedCategoryStore: true,
  });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  ({ state, retry } = collectiblesShopProduct);
  const obj = skuId(8331);
  const getOrFetchPurchases = skuId(10186).useGetOrFetchPurchases();
  ({ hasPreviouslyFetched, fetchPurchasesError } = getOrFetchPurchases);
  const obj2 = skuId(10186);
  const ref1 = noop.useRef(null);
  const items = [product, skuId, initialVariantIndex];
  if ("ready" === state) {
    if (hasPreviouslyFetched) {
      if (null != product) {
        const obj3 = {
          ref: ref1,
          product,
          initialVariantIndex: tmp7,
          analyticsLocations,
          stageCollectibleChangeForEditProfile,
        };
        const obj4 = {
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
          children: closure_13(closure_19, obj3),
        };
        return closure_13(tmp(6566).BottomSheet, obj4);
      }
    }
  }
  if ("error" === state) {
    const obj5 = { Illustration: tmp(7670).NoResults, body: null, children: null };
    const intl = tmp(1115).intl;
    obj5.body = intl.string(tmp(1115).t.eAn6z2);
    const obj6 = { text: null, onPress: null };
    const intl2 = tmp(1115).intl;
    obj6.text = intl2.string(tmp(1115).t["+hivLW"]);
    obj6.onPress = retry;
    obj5.children = closure_13(tmp(5274).Button, obj6);
    closure_13(tmp(1177).EmptyState, obj5);
  } else {
    closure_13(initialVariantIndex(12724), {});
  }
  ref = noop.useRef(null);
}
function ProductDetailsActionSheetWithOrderCTX(arg0) {
  stageCollectibleChangeForEditProfile = arg0;
  if (obj.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet")) {
    if ("skuId" in stageCollectibleChangeForEditProfile) {
      let skuId = stageCollectibleChangeForEditProfile.skuId;
    } else {
      skuId = stageCollectibleChangeForEditProfile.product.skuId;
    }
    const obj2 = {
      skuId,
      initialVariantIndex: null,
      analyticsLocations: null,
      stageCollectibleChangeForEditProfile: null,
    };
    ({
      initialVariantIndex: obj3.initialVariantIndex,
      analyticsLocations: obj3.analyticsLocations,
      stageCollectibleChangeForEditProfile,
    } = stageCollectibleChangeForEditProfile);
    obj2.stageCollectibleChangeForEditProfile = stageCollectibleChangeForEditProfile;
    map1(ManagedProductDetailsActionSheetInner, obj2);
  } else {
    if ("product" in stageCollectibleChangeForEditProfile) {
      const obj5 = {};
      const merged = Object.assign(stageCollectibleChangeForEditProfile);
      let tmp3 = map1(ProductDetailsActionSheetInner, obj5);
    } else {
      logger.error("ProductDetailsActionSheet opened with a skuId but no product, and the experiment is disabled");
      tmp3 = null;
    }
    return tmp3;
  }
  obj = ShopStandalonePdpMobileExperiment;
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
const createStyles = fn(4829);
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
  width: fn(5279).MEDIUM_BUTTON_HEIGHT,
  height: fn(5279).MEDIUM_BUTTON_HEIGHT,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
  borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT,
};
obj.previewProfileButton = size;
let obj3 = { backgroundColor: null };
let native = fn(4537);
obj3.backgroundColor = native.setColorOpacity("white", 0.72);
obj.previewProfileButtonLight = obj3;
let obj4 = { backgroundColor: null };
native = fn(4537);
obj4.backgroundColor = native.setColorOpacity("white", 0.62);
obj.previewProfileButtonLightPressed = obj4;
const tmp5 = new LoggerDefault("ProductDetailsActionSheet");
obj.previewProfileButtonDark = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
let obj5 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj.previewProfileButtonDarkPressed = {
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE,
};
let obj6 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
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
  let analyticsLocations1 = product.analyticsLocations;
  if (analyticsLocations1 === undefined) {
    analyticsLocations1 = [];
  }
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  let ref;
  let selectedProduct;
  let trackPdpClick;
  let id;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  closure_10 = undefined;
  const OTPACOMOrderExperiment = require("ACOMExperiments").OTPACOMOrderExperiment;
  const config = OTPACOMOrderExperiment.useConfig({ location: "ProductDetailsActionSheetInner" });
  const tmp4 = closure_17();
  ref = trackPdpClick.useRef(null);
  const items = [];
  const tmp7 = analyticsLocations1(ref[22]);
  items[HermesBuiltin.arraySpread(analyticsLocations1, 0)] = analyticsLocations1(
    ref[23],
  ).COLLECTIBLES_SHOP_PROFILE_PREVIEW;
  const analyticsLocations = tmp7(items).analyticsLocations;
  const items1 = [product];
  const tmp9 = id(() => CollectiblesProductUtils.getProductSkuIds(product), items1);
  const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations1, 0);
  [tmp12, tmp13] = selectedProduct(trackPdpClick.useState(num), 2);
  const tmp11 = selectedProduct(trackPdpClick.useState(num), 2);
  selectedProduct = require("CollectiblesProductUtils").getSelectedProduct(product, tmp12);
  let obj2 = require("CollectiblesProductUtils");
  trackPdpClick = require("useTrackPdpClick").useTrackPdpClick({
    skuId: selectedProduct.skuId,
    productSkuIds: tmp9,
    analyticsLocations,
  });
  const items2 = [trackPdpClick];
  const imperativeHandle = trackPdpClick.useImperativeHandle(
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
  let obj3 = require("useTrackPdpClick");
  let obj4 = { skuId: selectedProduct.skuId, productSkuIds: tmp9, analyticsLocations };
  [tmp18, tmp19] = selectedProduct(trackPdpClick.useState(undefined), 2);
  c5 = tmp19;
  const tmp17 = selectedProduct(trackPdpClick.useState(undefined), 2);
  if (selectedProduct.skuId !== tmp20[0]) {
    tmp21(selectedProduct.skuId);
    tmp19(undefined);
  }
  tmp20 = selectedProduct(trackPdpClick.useState(selectedProduct.skuId), 2);
  const collectibleProfileOverrides = require("useCollectibleProfileOverrides").useCollectibleProfileOverrides(
    selectedProduct,
    tmp18,
  );
  const tmpResult = require("useCollectibleProfileOverrides");
  const collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
  let obj5 = { type: null, name: null, properties: null };
  const tmpResult9 = require("CollectiblesAnalyticsContext");
  obj5.type = require("discord_common/AnalyticsUtils").ImpressionTypes.HALFSHEET;
  obj5.name = require("discord_common/AnalyticsUtils").ImpressionNames.SHOP_PRODUCT_DETAIL;
  const obj6 = {
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
  obj6.card_id = cardId;
  let tilePosition;
  if (collectiblesAnalyticsContext != null) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  obj6.position_in_section = tilePosition;
  let sessionId;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  obj6.shop_session_id = sessionId;
  obj6.product_sku_ids = tmp9;
  obj5.properties = obj6;
  analyticsLocations1(ref[27])(obj5);
  closure_129_0 = product;
  closure_129_1 = tmp12;
  closure_129_2 = analyticsLocations;
  closure_129_3 = tmp31;
  closure_129_4 = collectibleProfileOverrides;
  closure_129_5 = stageCollectibleChangeForEditProfile;
  const tmp6Result = analyticsLocations1(ref[27]);
  const currentUser = require("useCurrentUser").useCurrentUser();
  closure_129_6 = currentUser;
  const items3 = [
    product,
    tmp12,
    collectibleProfileOverrides,
    currentUser.id,
    analyticsLocations,
    collectiblesAnalyticsContext,
    stageCollectibleChangeForEditProfile,
  ];
  const callback = obj.useCallback(() => {
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
          const obj5 = {
            skuId: null,
            initialVariantIndex: null,
            analyticsLocations: null,
            shopAnalyticsContext: null,
            stageCollectibleChangeForEditProfile: null,
          };
          const obj = product(ref[19]);
          obj5.skuId = product(ref[20]).getSelectedProduct(product, initialVariantIndex).skuId;
          obj5.initialVariantIndex = initialVariantIndex;
          obj5.analyticsLocations = analyticsLocations;
          obj5.shopAnalyticsContext = shopAnalyticsContext;
          obj5.stageCollectibleChangeForEditProfile = tmp;
          const result1 = obj.openProductDetailsActionSheetForSku(obj5);
          const obj3 = product(ref[20]);
        }
      },
    });
  }, items3);
  const tmp34 = product.type === require("CollectiblesItemType").CollectiblesItemType.BUNDLE;
  id = tmp34;
  const tmpResult10 = require("useCurrentUser");
  [type, c7] = selectedProduct(
    trackPdpClick.useState(() => {
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
    }),
    2,
  );
  const tmp10Result = selectedProduct(
    trackPdpClick.useState(() => {
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
    }),
    2,
  );
  if (!tmp34) {
    type = selectedProduct.type;
  }
  let tmp37 = null != type;
  if (tmp37) {
    tmp37 =
      type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_EFFECT ||
      type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_FRAME ||
      type === tmp(tmp2[16]).CollectiblesItemType.AVATAR_DECORATION;
    const tmp38 =
      type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_EFFECT ||
      type === tmp(tmp2[16]).CollectiblesItemType.PROFILE_FRAME ||
      type === tmp(tmp2[16]).CollectiblesItemType.AVATAR_DECORATION;
  }
  const items4 = [analyticsLocations1, product.skuId];
  const effect = obj.useEffect(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, {
      type: "Collectibles Shop Details Modal",
      location_stack: analyticsLocations1,
      sku_id: product.skuId,
    });
  }, items4);
  const hideBadge = product.hideBadge;
  const tmp36 = c5((type) => {
    _undefined(type);
    _undefined2(type.type);
  }, []);
  const tmpResult11 = require("native");
  const isThemeDarkResult = require("shared").isThemeDark(tmpResult11.useThemeContext().theme);
  const tmpResult12 = require("shared");
  const items5 = [c9];
  const stateFromStores = require("initialize").useStateFromStores(items5, () => {
    const category = CollectiblesCategoryStore.getCategory(product.categorySkuId);
    let unpublishedAt;
    if (category != null) {
      unpublishedAt = category.unpublishedAt;
    }
    return unpublishedAt;
  });
  let tmp42 = selectedProduct;
  if (tmp34) {
    tmp42 = selectedProduct;
    if (null != tmp18) {
      const obj7 = { skuId: null, type: null, items: null };
      ({ skuId: obj13.skuId, type: obj13.type } = tmp18);
      const items6 = [tmp18];
      obj7.items = items6;
      tmp42 = obj7;
    }
  }
  let tmp43 = null;
  if (null == product.badgeOverride) {
    if (tmpResult14.isDynamicProduct(tmp42)) {
      if (!hideBadge) {
        const obj8 = { accessibilityLabel: null, children: null };
        const intl = tmp(tmp2[14]).intl;
        obj8.accessibilityLabel = intl.string(tmp(tmp2[14]).t["+drfVi"]);
        const obj9 = { icon: tmp(tmp2[33]).DiceIcon, label: null, isDark: null };
        const intl2 = tmp(tmp2[14]).intl;
        obj9.label = intl2.string(tmp(tmp2[14]).t["+drfVi"]);
        obj9.isDark = isThemeDarkResult;
        obj8.children = closure_13(tmp(tmp2[32]).IconTextBadge, obj9);
        tmp43 = closure_13(tmp(tmp2[31]).DynamicBadgeTooltip, obj8);
      }
    }
    if (null != stateFromStores) {
      if (tmpResult15.shouldShowLimitedTimeBadge(stateFromStores)) {
        if (!hideBadge) {
          const obj10 = { unpublishedAt: stateFromStores };
          tmp43 = closure_13(tmp6(tmp2[35]), obj10);
        }
      }
      tmpResult15 = tmp(tmp2[34]);
    }
    tmpResult14 = tmp(tmp2[20]);
    const tmpResult16 = tmp(tmp2[20]);
    tmp43 = null;
    if (tmp46) {
      const obj11 = { icon: tmp(tmp2[36]).OrbsIcon, label: null, isDark: null };
      const intl3 = tmp(tmp2[14]).intl;
      obj11.label = intl3.string(tmp(tmp2[14]).t["0TmQRG"]);
      obj11.isDark = isThemeDarkResult;
      tmp43 = closure_13(tmp(tmp2[32]).IconTextBadge, obj11);
    }
    tmp46 = tmp(tmp2[20]).isOrbsExclusiveProduct(selectedProduct) && !hideBadge;
  }
  const tmpResult13 = require("initialize");
  [tmp49, c8] = selectedProduct(trackPdpClick.useState(false), 2);
  const tmp10Result4 = selectedProduct(trackPdpClick.useState(false), 2);
  [tmp51, c9] = selectedProduct(trackPdpClick.useState(null), 2);
  const tmp10Result6 = selectedProduct(trackPdpClick.useState(0), 2);
  closure_10 = tmp10Result6[1];
  const obj12 = { value: analyticsLocations, children: null };
  const obj14 = { scrollsToTop: false, style: tmp4.container, ref, children: null };
  const obj15 = { style: tmp4.actionButtons, children: null };
  if (tmp37) {
    const obj16 = { handlePreviewPress: callback, onTrackPress: trackPdpClick };
    tmp37 = closure_13(PreviewProfileTrigger, obj16);
  }
  const items7 = [
    tmp37,
    closure_13(analyticsLocations1(ref[38]), { selectedProduct, size: "md", onTrackPress: trackPdpClick }),
  ];
  obj15.children = items7;
  const items8 = [closure_14(c8, obj15), , , , ,];
  let tmp57Result = null != tmp43;
  if (tmp57Result) {
    const obj17 = { style: tmp4.badgeWrapper, children: tmp43 };
    tmp57Result = closure_13(tmp54, obj17);
  }
  items8[1] = tmp57Result;
  items8[2] = closure_13(analyticsLocations1(ref[39]), {
    product: selectedProduct,
    handlePreviewPress: callback,
    onTrackPress: trackPdpClick,
    onBundleActiveItemChange: tmp36,
  });
  items8[3] = closure_13(analyticsLocations1(ref[40]), { product: selectedProduct, onTrackPress: trackPdpClick });
  items8[4] = closure_13(analyticsLocations1(ref[41]), {
    product,
    selectedVariantIndex: tmp12,
    disabled: tmp49,
    onVariantSelect: tmp13,
  });
  const tmp10Result5 = selectedProduct(trackPdpClick.useState(null), 2);
  items8[5] = closure_13(require("native").Spacer, { size: analyticsLocations1(ref[10]).space.PX_16 });
  obj14.children = items8;
  const items9 = [
    closure_14(require("BottomSheetModal").BottomSheetScrollView, obj14),
    closure_13(analyticsLocations1(ref[43]), {
      product: selectedProduct,
      analyticsLocations,
      onTrackPress: trackPdpClick,
      isBuying: tmp49,
      onStartPurchase() {
        _undefined4(selectedProduct);
        closure_10((arg0) => arg0 + 1);
        _undefined3(true);
      },
      stageCollectibleChangeForEditProfile,
    }),
  ];
  let tmp57Result2 = null != tmp51;
  if (tmp57Result2) {
    const obj20 = {
      product: tmp51,
      attempt: tmp10Result6[0],
      analyticsLocations,
      onBuySettled() {
        return _undefined3(false);
      },
      stageCollectibleChangeForEditProfile,
    };
    tmp57Result2 = closure_13(tmp6(tmp2[44]), obj20);
  }
  items9[2] = tmp57Result2;
  obj12.children = items9;
  return closure_14(require("useAnalyticsLocations").AnalyticsLocationProvider, obj12);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheet.tsx");

export default function ProductDetailsActionSheet(shopAnalyticsContext) {
  shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
  if (shopAnalyticsContext === undefined) {
    shopAnalyticsContext = closure_15;
  }
  const merged = Object.assign(shopAnalyticsContext, Object.assign({ shopAnalyticsContext: 0 }));
  const obj = { newValue: shopAnalyticsContext, children: null };
  const merged1 = Object.assign(merged);
  obj.children = map1(ProductDetailsActionSheetWithOrderCTX, {});
  return map1(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
}
