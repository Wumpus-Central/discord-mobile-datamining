// === Module 8451: CollectiblesShopCardV2 ===

// Module 8451 (CollectiblesShopCardV2)
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7077 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7078 */;
import openProductDetailsActionSheet2 from "openProductDetailsActionSheet" /* 7858 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8346 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8454 */;
import CollectiblesBadges from "CollectiblesBadges" /* 8519 */;
import DiceIcon from "DiceIcon" /* 8521 */;
import LimitedTimeBadgeDefault from "LimitedTimeBadge" /* 8523 */;
import OrbsIcon from "OrbsIcon" /* 8524 */;
import WishlistButton from "WishlistButton" /* 8526 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7066 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let content, hideActionSheetResult, obj1, openResult, product, tmp3;

let PixelRatio;
let c10;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
({ PixelRatio, View: closure_4 } = react_native);
({ EXTERNAL_PRODUCT_SKU_IDS: metroImportDefault, ShopCtaEnum: metroImportAll } = CollectiblesShopConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let num = 170;
if (PixelRatio.getFontScale() >= 1.78) {
  num = 302;
}
let c11 = 150;
let createStyles = createStyles_mod;
let obj = { card: size, topRowOverlay: { position: "absolute", top: 6, left: 6, right: 6, zIndex: 2, display: "flex", flexDirection: "row", gap: 4, justifyContent: "space-between", alignItems: "flex-start" }, badge: { flexShrink: 1 }, badgePill: obj2, badgeOverrideText: { textTransform: "uppercase" }, badgePillDarkMode: obj3, badgePillLightMode: obj4, wishlistButton: { marginLeft: "auto", flexShrink: 0 } };
size = { position: "relative", height: num, width: 150, display: "flex", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: 1.5, borderRadius: nativeDefault.radii.round, flexShrink: 1 };
obj3 = { backgroundColor: nativeDefault.colors.WHITE };
obj4 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  let busy;
  let cardStyle;
  let cardWidth;
  let collectibleProductState;
  let disableBundleStaticBackground;
  let disabled;
  let hidePrice;
  let hideWishlistButton;
  let isDark;
  let isDisabled;
  let isWishlisted;
  let muteBundleStaticBackground;
  let preferVCPrice;
  let require;
  let solidBackground;
  let tmp23;
  let unpublishedAt;
  let obj = require("react");
  const cResult = obj.c(82);
  product = product.product;
  require = product;
  const onPress = product.onPress;
  ({ unpublishedAt, collectibleProductState } = product);
  ({ solidBackground, preferVCPrice, isDisabled, cardWidth, cardStyle, hideWishlistButton, hidePrice, disableBundleStaticBackground, muteBundleStaticBackground } = product);
  let closure_3 = closure_12();
  const tmp4 = closure_12();
  let tmpResult = tmp(collectibleProductState[10]);
  const defaultVariantIndex = tmpResult.useDefaultVariantIndex(product);
  if (cResult[0] === product) {
    let tmp6;
    if (cResult[1] === defaultVariantIndex) {
      tmp6 = cResult[2];
    }
    let closure_4 = tmp6;
    const tmpResult6 = require("useTrackShopCardImpression");
    const trackShopCardImpression = tmpResult6.useTrackShopCardImpression(product, tmp6);
    if (cResult[3] !== cardWidth) {
      let obj3;
      if (null != cardWidth) {
        let obj2 = { width: cardWidth };
        obj3 = obj2;
      } else {
        obj3 = { width };
      }
      cResult[3] = cardWidth;
      cResult[4] = obj3;
    }
    const tmpResult7 = require("useCurrentUser");
    const currentUser = tmpResult7.useCurrentUser();
    if (cResult[5] !== tmp6) {
      const tmpResult8 = require("CollectiblesWishlistUtils");
      const result = tmpResult8.isWishlistableCollectiblesProduct(tmp6);
      cResult[5] = tmp6;
      cResult[6] = result;
    }
    const tmp17 = onPress(collectibleProductState[15])();
    const shouldShowWishlistNUXActionSheet = tmp17.shouldShowWishlistNUXActionSheet;
    const showWishlistNUXActionSheet = tmp17.showWishlistNUXActionSheet;
    const tmp16 = onPress;
    if (cResult[7] === tmp6) {
      if (cResult[8] === shouldShowWishlistNUXActionSheet) {
        let tmp18;
        let tmp20;
        if (cResult[9] === showWishlistNUXActionSheet) {
          tmp18 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          let intl = tmp(collectibleProductState[16]).intl;
          const stringResult = intl.string(require("intl").t.F8FvUy);
          cResult[11] = stringResult;
          tmp20 = stringResult;
        } else {
          tmp20 = cResult[11];
        }
        content = tmp20;
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class Y {
            constructor() {
              obj = closure_1(closure_2[17]);
              obj1 = { key: "WISHLIST_ERROR", content: closure_7 };
              openResult = obj.open(obj1);
              return;
            }
          }
          cResult[12] = Y;
        } else {
          class Y {
            constructor() {
              obj = closure_1(closure_2[17]);
              obj1 = { key: "WISHLIST_ERROR", content: closure_7 };
              openResult = obj.open(obj1);
              return;
            }
          }
        }
        const analyticsLocations = tmp16(collectibleProductState[18])().analyticsLocations;
        if (cResult[13] === analyticsLocations) {
          class Y {
            constructor() {
              obj = closure_1(closure_2[17]);
              obj1 = { key: "WISHLIST_ERROR", content: closure_7 };
              openResult = obj.open(obj1);
              return;
            }
          }
          const tmpResult9 = require("useTrackShopCardClick");
          const trackShopCardClick = tmpResult9.useTrackShopCardClick(tmp23);
          if (cResult[16] === currentUser.id) {
            class Y {
              constructor() {
                obj = closure_1(closure_2[17]);
                obj1 = { key: "WISHLIST_ERROR", content: closure_7 };
                openResult = obj.open(obj1);
                return;
              }
            }
          }
          let obj4 = { userId: currentUser.id, skuId: tmp6.skuId, onAddSuccess: tmp18, onError: Y };
          cResult[16] = currentUser.id;
          cResult[17] = tmp18;
          cResult[18] = tmp6.skuId;
          class H {
            constructor() {
              tmp = closure_5;
              if (tmp) {
                tmp2 = closure_6;
                tmp3 = closure_4;
                tmp4 = closure_6(closure_4);
              }
              return;
            }
          }
          cResult[19] = obj4;
          const tmp25 = obj4;
        }
        let obj5 = { product, analyticsLocations };
        class H {
          constructor() {
            tmp = closure_5;
            if (tmp) {
              tmp2 = closure_6;
              tmp3 = closure_4;
              tmp4 = closure_6(closure_4);
            }
            return;
          }
        }
        cResult[14] = product;
        cResult[15] = obj5;
        tmp23 = obj5;
      }
    }
    class H {
      constructor() {
        tmp = closure_5;
        if (tmp) {
          tmp2 = closure_6;
          tmp3 = closure_4;
          tmp4 = closure_6(closure_4);
        }
        return;
      }
    }
    cResult[7] = tmp6;
    cResult[8] = shouldShowWishlistNUXActionSheet;
    cResult[9] = showWishlistNUXActionSheet;
    cResult[10] = H;
    tmp18 = H;
  }
  const tmpResult10 = require("CollectiblesProductUtils");
  const selectedProduct = tmpResult10.getSelectedProduct(product, defaultVariantIndex);
  cResult[0] = product;
  cResult[1] = defaultVariantIndex;
  cResult[2] = selectedProduct;
  tmp6 = selectedProduct;
}) : ((product) => {
  let Text;
  let cardStyle;
  let cardWidth;
  let collectibleProductState;
  let disableBundleStaticBackground;
  let handleToggle;
  let hideWishlistButton;
  let intl2;
  let intl3;
  let isBusy;
  let isDisabled;
  let items6;
  let items8;
  let items9;
  let muteBundleStaticBackground;
  let obj10;
  let obj5;
  let preferVCPrice;
  let solidBackground;
  let tmp25Result;
  let unpublishedAt;
  product = product.product;
  const require = product;
  ({ onPress: importDefault, unpublishedAt, collectibleProductState, isDisabled } = product);
  ({ solidBackground, preferVCPrice } = product);
  if (isDisabled === undefined) {
    isDisabled = false;
  }
  ({ cardWidth, hideWishlistButton, cardStyle } = product);
  if (hideWishlistButton === undefined) {
    hideWishlistButton = false;
  }
  let flag = product.hidePrice;
  if (flag === undefined) {
    flag = false;
  }
  let selectedProduct;
  let shouldShowWishlistNUXActionSheet;
  let showWishlistNUXActionSheet;
  let c5;
  let trackShopCardClick;
  let isWishlisted;
  handleToggle = undefined;
  let closure_9;
  ({ disableBundleStaticBackground, muteBundleStaticBackground } = product);
  let tmp = closure_12();
  let obj = require("useDefaultVariantIndex");
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  let obj2 = require("CollectiblesProductUtils");
  selectedProduct = obj2.getSelectedProduct(product, defaultVariantIndex);
  const obj3 = require("useTrackShopCardImpression");
  const trackShopCardImpression = obj3.useTrackShopCardImpression(product, selectedProduct);
  if (null != cardWidth) {
    obj5 = { width: cardWidth };
    const obj4 = { width: cardWidth };
  } else {
    obj5 = { width };
  }
  const tmp2Result = require("useCurrentUser");
  const currentUser = tmp2Result.useCurrentUser();
  const tmp2Result9 = require("CollectiblesWishlistUtils");
  const result = tmp2Result9.isWishlistableCollectiblesProduct(selectedProduct);
  const tmp11 = require("useWishlistNUXActionSheet")();
  shouldShowWishlistNUXActionSheet = tmp11.shouldShowWishlistNUXActionSheet;
  showWishlistNUXActionSheet = tmp11.showWishlistNUXActionSheet;
  let items = [shouldShowWishlistNUXActionSheet, showWishlistNUXActionSheet, selectedProduct];
  const callback = shouldShowWishlistNUXActionSheet.useCallback(() => {
    if (shouldShowWishlistNUXActionSheet) {
      showWishlistNUXActionSheet(selectedProduct);
    }
  }, items);
  let intl = tmp2(tmp3[16]).intl;
  let stringResult = intl.string(tmp2(tmp3[16]).t.F8FvUy);
  c5 = stringResult;
  const items1 = [stringResult];
  const callback1 = shouldShowWishlistNUXActionSheet.useCallback(() => {
    const obj = ToastActionCreatorsDefault;
    const obj2 = { key: "WISHLIST_ERROR", content };
    obj.open(obj2);
  }, items1);
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const tmp2Result10 = require("useTrackShopCardClick");
  trackShopCardClick = tmp2Result10.useTrackShopCardClick({ product, analyticsLocations });
  const obj6 = { userId: currentUser.id, skuId: selectedProduct.skuId, onAddSuccess: callback, onError: callback1 };
  const tmp2Result11 = require("useWishlistButtonState");
  const wishlistButtonState = tmp2Result11.useWishlistButtonState(obj6);
  isWishlisted = wishlistButtonState.isWishlisted;
  ({ isBusy, handleToggle } = wishlistButtonState);
  let tmp17 = "purchased" === collectibleProductState;
  let tmp19 = !tmp18;
  let tmp21 = tmp19;
  if (!(tmp17 || hideWishlistButton)) {
    tmp21 = !tmp20;
  }
  if (tmp21) {
    tmp21 = !isBusy;
  }
  closure_9 = tmp21;
  const items2 = [tmp21, isWishlisted];
  const items3 = [handleToggle];
  const memo = obj8.useMemo(() => {
    let tmp;
    if (closure_9) {
      let stringResult;
      const intl = intl4.intl;
      const string = intl.string;
      const t = intl4.t;
      if (isWishlisted) {
        stringResult = string(t.yr9TTf);
      } else {
        stringResult = string(t["8DkMEQ"]);
      }
      const items = [{ name: "toggleWishlist", label: stringResult }];
      tmp = items;
      const obj = { name: "toggleWishlist", label: stringResult };
    }
    return tmp;
  }, items2);
  const callback2 = obj8.useCallback((nativeEvent) => {
    if ("toggleWishlist" === nativeEvent.nativeEvent.actionName) {
      handleToggle();
    }
  }, items3);
  const items4 = [c5];
  const tmp2Result12 = require("get initialized");
  const stateFromStores = tmp2Result12.useStateFromStores(items4, () => {
    const obj = require("shared");
    return obj.isThemeDark(content.theme);
  });
  const items5 = [trackShopCardClick];
  const tmp2Result13 = require("get initialized");
  if (unpublishedAt == null) {
    unpublishedAt = tmp2Result13.useStateFromStores(items5, () => {
      const category = CollectiblesCategoryStore.getCategory(require.categorySkuId);
      let unpublishedAt;
      if (category != null) {
        unpublishedAt = category.unpublishedAt;
      }
      return unpublishedAt;
    });
  }
  const obj7 = {
    ref: trackShopCardImpression,
    style: items6,
    onPress() {
      trackShopCardClick(metroImportAll.OPEN_DETAILS);
      if (importDefault != null) {
        importDefault();
      }
    },
    activeOpacity: 0.8,
    accessibilityRole: "button",
    accessibilityActions: memo,
    onAccessibilityAction: callback2,
    children: items9
  };
  items6 = [tmp.card, obj5, cardStyle];
  const PressableOpacity = tmp2(tmp3[33]).PressableOpacity;
  require("CollectiblesUtils");
  const badgeOverride = product.badgeOverride;
  let tmp28 = null;
  if (!product.hideBadge) {
    let tmp34Result;
    if (null != badgeOverride) {
      const items7 = [tmp.badgePill, ];
      items7[1] = stateFromStores ? tmp.badgePillDarkMode : tmp.badgePillLightMode;
      let str2 = "text-overlay-light";
      const obj9 = { style: items7, children: closure_9(Text, obj10) };
      Text = tmp2(tmp3[24]).Text;
      const tmp35 = showWishlistNUXActionSheet;
      if (stateFromStores) {
        str2 = "text-overlay-dark";
      }
      obj10 = { variant: "text-xs/bold", color: str2, allowFontScaling: false, style: tmp.badgeOverrideText, lineClamp: 1, children: badgeOverride };
      tmp34Result = tmp34(tmp35, obj9);
    } else {
      const tmp2Result15 = require("CollectiblesProductUtils");
      if (tmp2Result15.isDynamicProduct(selectedProduct)) {
        const obj11 = { icon: require("DiceIcon").DiceIcon, accessibilityLabel: intl3.string(require("intl").t["+drfVi"]), isDark: stateFromStores };
        const IconBadgePill2 = tmp2(tmp3[25]).IconBadgePill;
        intl3 = tmp2(tmp3[16]).intl;
        tmp34Result = closure_9(IconBadgePill2, obj11);
      } else if (tmp27) {
        const obj12 = { unpublishedAt, style: tmp.badge };
        tmp34Result = closure_9(require("LimitedTimeBadge"), obj12);
      } else if ("nitroClaim" === collectibleProductState) {
        tmp34Result = closure_9(tmp2(tmp3[28]).NitroWheelIcon, { color: "mobile-text-heading-primary" });
      } else {
        tmp34Result = null;
        const tmp2Result16 = require("CollectiblesProductUtils");
        if (tmp2Result16.isOrbsExclusiveProduct(selectedProduct)) {
          const obj13 = { icon: require("OrbsIcon").OrbsIcon, accessibilityLabel: intl2.string(require("intl").t["0TmQRG"]), isDark: stateFromStores };
          const IconBadgePill = tmp2(tmp3[25]).IconBadgePill;
          intl2 = tmp2(tmp3[16]).intl;
          tmp34Result = closure_9(IconBadgePill, obj13);
        }
      }
    }
    tmp28 = tmp34Result;
  }
  if (null != tmp28) {
    const obj14 = { style: tmp.topRowOverlay, children: items8 };
    items8 = [tmp28, ];
    const tmp37 = showWishlistNUXActionSheet;
    if (!(tmp17 || hideWishlistButton)) {
      const obj15 = { style: tmp.wishlistButton, isWishlisted, onPress: handleToggle, busy: isBusy, disabled: !result, accessibilityHidden: true, onTrackPress: trackShopCardClick };
      tmp19 = closure_9(tmp2(tmp3[30]).WishlistButtonBase, obj15);
    }
    items8[1] = tmp19;
    tmp25Result = closure_10(tmp37, obj14);
  } else {
    tmp25Result = null;
  }
  items9 = [tmp25Result, , ];
  const obj16 = { solidBackground, product, isPurchased: tmp17, isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
  const tmp10Result = require("CollectiblesShopCardAssetTileV2");
  if (!tmp17) {
    tmp17 = "partiallyOwnedBundle" === collectibleProductState;
  }
  items9[1] = closure_9(tmp10Result, obj16);
  items9[2] = closure_9(require("CollectiblesShopCardCardDetailsV2"), { product, collectibleProductState, preferVCPrice, isDisabled, hidePrice: flag });
  return closure_10(PressableOpacity, obj7);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  let analyticsLocations;
  let cardStyle;
  let cardWidth;
  let disableBundleStaticBackground;
  let hidePrice;
  let hideWishlistButton;
  let isPartiallyOwnedBundle;
  let isPurchased;
  let muteBundleStaticBackground;
  let onPress;
  let preferVCPrice;
  let require;
  let solidBackground;
  let unpublishedAt;
  const tmp2 = analyticsLocations;
  let obj = require("react");
  const cResult = obj.c(22);
  product = product.product;
  require = product;
  ({ unpublishedAt, solidBackground, preferVCPrice, cardWidth, cardStyle, hideWishlistButton, hidePrice, onPress, disableBundleStaticBackground, muteBundleStaticBackground } = product);
  let obj2 = require("useDefaultVariantIndex");
  const defaultVariantIndex = obj2.useDefaultVariantIndex(product);
  if (cResult[0] === product) {
    let tmp5;
    if (cResult[1] === defaultVariantIndex) {
      tmp5 = cResult[2];
    }
    analyticsLocations = defaultVariantIndex(tmp2[18])().analyticsLocations;
    const tmpResult = require("CollectiblesAnalyticsContext");
    const collectiblesAnalyticsContext = tmpResult.useCollectiblesAnalyticsContext();
    const tmp7 = defaultVariantIndex;
    if (cResult[3] === collectiblesAnalyticsContext) {
      if (cResult[4] === analyticsLocations) {
        if (cResult[5] === product) {
          let tmp9;
          let tmp21;
          if (cResult[6] === defaultVariantIndex) {
            tmp9 = cResult[7];
          }
          if (onPress == null) {
            onPress = tmp9;
          }
          const tmpResult8 = require("useCurrentUser");
          const currentUser = tmpResult8.useCurrentUser();
          const tmp7Result = tmp7(tmp2[37]);
          const canUseCollectiblesResult = tmp7Result.canUseCollectibles(currentUser);
          require("useProductPurchaseState");
          class D {
            constructor() {
              obj = closure_1(closure_2[35]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = closure_0(closure_2[36]);
              obj1 = { product, initialVariantIndex: closure_1, analyticsLocations, shopAnalyticsContext: null };
              tmp3 = closure_3;
              openProductDetailsActionSheet = tmp2.openProductDetailsActionSheet;
              obj1.shopAnalyticsContext = tmp3;
              result = openProductDetailsActionSheet(obj1);
              return;
            }
          }
          ({ isPurchased, isPartiallyOwnedBundle } = tmp14);
          const tmpResult10 = require("useProductDisableState");
          const isDisabled = tmpResult10.useProductDisableState(tmp5.skuId).isDisabled;
          const tmpResult11 = require("OneDayFractionalNitroExperiment");
          const oneDayFractionalNitroEnabled = tmpResult11.useOneDayFractionalNitroEnabled("product_card");
          const tmpResult12 = require("CollectiblesUtils");
          let result = tmpResult12.isPremiumCollectiblesProduct(tmp5);
          const tmpResult13 = require("CollectiblesUtils");
          let result1 = tmpResult13.isFreeCollectiblesProduct(tmp5);
          let tmp18 = "purchased";
          if (isPurchased !== true) {
            tmp18 = "partiallyOwnedBundle";
            if (isPartiallyOwnedBundle !== true) {
              tmp18 = "nitroUpsell";
              const tmp19 = result && !canUseCollectiblesResult && !result1;
              if (tmp19 !== true) {
                if (!result1) {
                  if (result) {
                    result = canUseCollectiblesResult;
                  }
                  result1 = result;
                }
                tmp18 = "nitroClaim";
                if (result1 !== true) {
                  tmp18 = null;
                }
              }
            }
          }
          if (product.skuId !== content.FRACTIONAL_PREMIUM_1_DAY) {
            if (cResult[8] === cardStyle) {
              if (cResult[9] === cardWidth) {
                if (cResult[10] === tmp18) {
                  if (cResult[11] === disableBundleStaticBackground) {
                    if (cResult[12] === onPress) {
                      if (cResult[13] === hidePrice) {
                        if (cResult[14] === hideWishlistButton) {
                          if (cResult[15] === isDisabled) {
                            if (cResult[16] === muteBundleStaticBackground) {
                              if (cResult[17] === preferVCPrice) {
                                if (cResult[18] === product) {
                                  if (cResult[19] === solidBackground) {
                                    let tmp22;
                                    if (cResult[20] === unpublishedAt) {
                                      tmp22 = cResult[21];
                                    }
                                    tmp21 = tmp22;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj3 = { product, onPress, collectibleProductState: tmp18, unpublishedAt, solidBackground: null, preferVCPrice, isDisabled, cardWidth, cardStyle, hideWishlistButton, hidePrice, disableBundleStaticBackground, muteBundleStaticBackground };
            class D {
              constructor() {
                obj = closure_1(closure_2[35]);
                hideActionSheetResult = obj.hideActionSheet();
                tmp2 = closure_0(closure_2[36]);
                obj1 = { product, initialVariantIndex: closure_1, analyticsLocations, shopAnalyticsContext: null };
                tmp3 = closure_3;
                openProductDetailsActionSheet = tmp2.openProductDetailsActionSheet;
                obj1.shopAnalyticsContext = tmp3;
                result = openProductDetailsActionSheet(obj1);
                return;
              }
            }
            const tmp25 = closure_9(closure_13, obj3);
            cResult[8] = cardStyle;
            cResult[9] = cardWidth;
            cResult[10] = tmp18;
            cResult[11] = disableBundleStaticBackground;
            cResult[12] = onPress;
            cResult[13] = hidePrice;
            cResult[14] = hideWishlistButton;
            cResult[15] = isDisabled;
            cResult[16] = muteBundleStaticBackground;
            cResult[17] = preferVCPrice;
            cResult[18] = product;
            cResult[19] = solidBackground;
            cResult[20] = unpublishedAt;
            cResult[21] = tmp25;
            tmp22 = tmp25;
          } else {
            tmp21 = null;
          }
          return tmp21;
        }
      }
    }
    class D {
      constructor() {
        obj = closure_1(closure_2[35]);
        hideActionSheetResult = obj.hideActionSheet();
        tmp2 = closure_0(closure_2[36]);
        obj1 = { product, initialVariantIndex: closure_1, analyticsLocations, shopAnalyticsContext: null };
        tmp3 = closure_3;
        openProductDetailsActionSheet = tmp2.openProductDetailsActionSheet;
        obj1.shopAnalyticsContext = tmp3;
        result = openProductDetailsActionSheet(obj1);
        return;
      }
    }
    cResult[3] = collectiblesAnalyticsContext;
    cResult[4] = analyticsLocations;
    cResult[5] = product;
    cResult[6] = defaultVariantIndex;
    cResult[7] = D;
    tmp9 = D;
  }
  const tmpResult14 = require("CollectiblesProductUtils");
  const selectedProduct = tmpResult14.getSelectedProduct(product, defaultVariantIndex);
  cResult[0] = product;
  cResult[1] = defaultVariantIndex;
  cResult[2] = selectedProduct;
  tmp5 = selectedProduct;
}) : ((product) => {
  let cardStyle;
  let cardWidth;
  let disableBundleStaticBackground;
  let hidePrice;
  let hideWishlistButton;
  let muteBundleStaticBackground;
  let preferVCPrice;
  let solidBackground;
  let tmp14Result;
  let unpublishedAt;
  product = product.product;
  const require = product;
  let onPress = product.onPress;
  let analyticsLocations;
  ({ unpublishedAt, solidBackground, preferVCPrice, cardWidth, cardStyle, hideWishlistButton, hidePrice, disableBundleStaticBackground, muteBundleStaticBackground } = product);
  let obj = require("useDefaultVariantIndex");
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  let obj2 = require("CollectiblesProductUtils");
  const selectedProduct = obj2.getSelectedProduct(product, defaultVariantIndex);
  analyticsLocations = defaultVariantIndex(analyticsLocations[18])().analyticsLocations;
  const obj3 = require("CollectiblesAnalyticsContext");
  const collectiblesAnalyticsContext = obj3.useCollectiblesAnalyticsContext();
  const items = [analyticsLocations, product, defaultVariantIndex, collectiblesAnalyticsContext];
  const callback = collectiblesAnalyticsContext.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = { product: require, initialVariantIndex: defaultVariantIndex, analyticsLocations, shopAnalyticsContext: collectiblesAnalyticsContext };
    const openProductDetailsActionSheet = openProductDetailsActionSheet2.openProductDetailsActionSheet;
    openProductDetailsActionSheet2;
    const result = openProductDetailsActionSheet(obj2);
  }, items);
  const obj4 = require("useCurrentUser");
  const currentUser = obj4.useCurrentUser();
  const obj5 = defaultVariantIndex(analyticsLocations[37]);
  const canUseCollectiblesResult = obj5.canUseCollectibles(currentUser);
  const obj6 = require("useProductPurchaseState");
  const productPurchaseState = obj6.useProductPurchaseState(selectedProduct);
  const isPurchased = productPurchaseState.isPurchased;
  const isPartiallyOwnedBundle = productPurchaseState.isPartiallyOwnedBundle;
  const obj7 = require("useProductDisableState");
  const isDisabled = obj7.useProductDisableState(selectedProduct.skuId).isDisabled;
  const obj8 = require("OneDayFractionalNitroExperiment");
  const oneDayFractionalNitroEnabled = obj8.useOneDayFractionalNitroEnabled("product_card");
  const obj9 = require("CollectiblesUtils");
  let result = obj9.isPremiumCollectiblesProduct(selectedProduct);
  const obj10 = require("CollectiblesUtils");
  let result1 = obj10.isFreeCollectiblesProduct(selectedProduct);
  let closure_6 = tmp11;
  if (!result1) {
    if (result) {
      result = canUseCollectiblesResult;
    }
    result1 = result;
  }
  const items1 = [result1, isPartiallyOwnedBundle, isPurchased, result && !canUseCollectiblesResult && !result1];
  if (product.skuId !== result1.FRACTIONAL_PREMIUM_1_DAY) {
    const obj11 = { product, onPress, collectibleProductState: tmp12, unpublishedAt, solidBackground, preferVCPrice, isDisabled, cardWidth, cardStyle, hideWishlistButton, hidePrice, disableBundleStaticBackground, muteBundleStaticBackground };
    if (onPress == null) {
      onPress = callback;
    }
    tmp14Result = closure_9(closure_13, obj11);
  } else {
    tmp14Result = null;
  }
  return tmp14Result;
});
const memoResult = react.memo(function CollectiblesShopCardV2(arg0) {
  let obj2;
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const merged = Object.assign(arg0, undefined);
    const items = [merged.product.skuId];
    const memo = react.useMemo(() => {
      let obj2;
      const obj = { cardId: obj2.v4() };
      obj2 = require("v1");
      return obj;
    }, items);
    let obj = { newValue: memo, children: React4(closure_14, obj2) };
    obj2 = {};
    const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
    const merged1 = Object.assign(merged);
    return React4(CollectiblesAnalyticsProvider, obj);
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardV2.tsx");

export default memoResult;
export const COLLECTIBLES_SHOP_CARD_HEIGHT = num;
export const COLLECTIBLES_SHOP_CARD_WIDTH = 150;
export const COLLECTIBLES_SHOP_CARD_MAX_WIDTH = 180;
export const COLLECTIBLES_SHOP_CARD_GAP = 16;