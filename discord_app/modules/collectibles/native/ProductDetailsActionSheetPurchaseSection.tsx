// === Module 13151: ProductDetailsActionSheetPurchaseSection ===

// Module 13151 (ProductDetailsActionSheetPurchaseSection)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import OrbsIcon from "OrbsIcon" /* 8837 */;
import openGiftModal from "openGiftModal" /* 11007 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7558 */;

require = fn;
function GiftButton(onTrackPress) {
  ({ product: require, analyticsLocations: importDefault, variant } = onTrackPress);
  if (variant === undefined) {
    variant = "primary";
  }
  onTrackPress = onTrackPress.onTrackPress;
  let obj = { size: "lg", variant, icon: null, onPress: null, accessibilityLabel: null };
  if ("primary" === variant) {
    let TEXT_STRONG = require("native").colors.WHITE;
  } else {
    TEXT_STRONG = require("native").colors.TEXT_STRONG;
  }
  obj.icon = closure_15(require("GiftIcon").GiftIcon, { size: "md", color: TEXT_STRONG });
  obj.onPress = function onPress() {
    if (onTrackPress != null) {
      tmp(constants.SEND_AS_GIFT);
    }
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    obj = { skuId: skuId.skuId, analyticsLocations };
    openGiftModal.openShopGiftModal(obj);
  };
  const intl = require("util").intl;
  obj.accessibilityLabel = intl.string(require("util").t.PEjaCx);
  return closure_15(require("IconButton").IconButton, obj);
}
function VCButton(balance) {
  balance = balance.balance;
  const product = balance.product;
  importDefault = product;
  let flag = balance.hasShopDiscount;
  if (flag === undefined) {
    flag = false;
  }
  ({ onTrackPress: dependencyMap, stageCollectibleChangeForEditProfile } = balance);
  let navigation;
  let analyticsLocations;
  closure_7 = undefined;
  let color;
  const tmp = closure_20();
  noop = tmp;
  let obj = balance(13149);
  const virtualCurrencyData = obj.useVirtualCurrencyData(product, flag);
  ({ price, canAfford } = virtualCurrencyData);
  let obj1 = balance(8869);
  let isPartiallyOwnedBundle = obj1.useProductDisableState(product.skuId).isDisabled;
  let obj2 = balance(8842);
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = !canAfford;
  }
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = obj2.useProductPurchaseState(product).isPartiallyOwnedBundle;
  }
  navigation = balance(1483).useNavigation();
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const items = [navigation, product, balance, analyticsLocations, stageCollectibleChangeForEditProfile];
  closure_7 = noop.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    obj = {
      skuId: product.skuId,
      analyticsLocations,
      onCheckoutSuccess(arg0) {
        let obj = balance(7541);
        const collectiblesPurchases = obj.fetchCollectiblesPurchases();
        let obj1 = product(4763);
        obj1.popWithKey(ORB_CHECKOUT_MODAL);
        if (product.skuId === constants.ORB_PROFILE_BADGE) {
          let tmp4Result = product(4763);
          obj = {
            modalKey,
            onPressViewBadge() {
                return navigation.navigate(constants3.YOU, { showOrbsBadgeCoachmark: true });
              },
            orbBalancePriorToPurchase
          };
          tmp4Result.pushLazy(balance(1896)(13156, dependencyMap.paths), obj, modalKey);
        } else {
          const ALL = balance(1077).FractionalPremiumSKUsSets.ALL;
          if (ALL.has(product.skuId)) {
            tmp4Result = product(4527);
            obj = { skuId: product.skuId, consumed: null, onPressExplorePerks: null, onPressViewCredits: null };
            const first = arg0.entitlements[0];
            let flag;
            if (first != null) {
              flag = first.consumed;
            }
            if (flag == null) {
              flag = false;
            }
            obj.consumed = flag;
            obj.onPressExplorePerks = function onPressExplorePerks() {
              navigation.navigate(constants2.PREMIUM);
              product(4527).hideActionSheet();
            };
            obj.onPressViewCredits = function onPressViewCredits() {
              navigation.navigate(constants2.PREMIUM_MANAGE_PLAN);
              product(4527).hideActionSheet();
            };
            tmp4Result.openLazy(balance(1896)(13157, dependencyMap.paths), "FractionalNitroCollectedActionSheet", obj);
            const tmp10 = balance(1896)(13157, dependencyMap.paths);
          } else {
            obj1 = { product, useCategoryImage: true, showOrbBalancePill: true, orbBalancePriorToPurchase, stageCollectibleChangeForEditProfile };
            product(11077).open(obj1);
            const tmp4Result1 = product(11077);
          }
        }
      }
    };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13152, dependencyMap.paths), obj, ORB_CHECKOUT_MODAL);
  }, items);
  if (null == price) {
    return null;
  } else {
    const colors = nativeDefault.colors;
    color = isPartiallyOwnedBundle ? colors.INTERACTIVE_TEXT_ACTIVE : colors.WHITE;
    const intl = tmp2(1114).intl;
    obj = {
      orbPrice: price.amount,
      orbIconHook() {
          return __initData(OrbsIcon.OrbsIcon, { size: "sm", color }, "orbs-icon");
        }
    };
    const formatResult = intl.format(tmp2(1114).t.JC15qj, obj);
    const _Array = Array;
    let arr2 = formatResult;
    if (!Array.isArray(formatResult)) {
      const items1 = [formatResult];
      arr2 = items1;
    }
    obj = { style: tmp.orbsButtonLabel, accessibilityLabel: null, children: null };
    const intl2 = tmp2(1114).intl;
    obj1 = { orbPrice: price.amount };
    obj.accessibilityLabel = intl2.formatToPlainString(tmp2(1114).t.yi41qQ, obj1);
    obj.children = arr2.map((children, index) => {
      if (typeof children === "string") {
        const obj = { style: orbsButtonText.orbsButtonText, variant: "text-md/semibold", color: str, children };
        let tmp7 = __initData(Text_Text.Text, obj, index);
      } else {
        tmp7 = children;
      }
      return tmp7;
    });
    obj2 = { style: tmp.buttonContainer, children: null };
    const obj3 = {
      loading: false,
      textElement: closure_15(navigation, obj),
      onPress() {
          if (dependencyMap != null) {
            tmp(constants.BUY_WITH_ORBS);
          }
          closure_7();
        },
      disabled: isPartiallyOwnedBundle,
      size: "lg",
      variant: null,
      grow: true
    };
    let str2 = "primary";
    if (isPartiallyOwnedBundle) {
      str2 = "secondary";
    }
    obj3.variant = str2;
    obj2.children = closure_15(tmp2(4976).BaseTextButton, obj3);
    return closure_15(navigation, obj2);
  }
  const tmp2Result = balance(1483);
}
function PurchaseDisclaimer(arg0) {
  ({ product, buyButtonLabel } = arg0);
  let obj = { style: closure_20().disclaimer, variant: "text-xxs/normal", color: "interactive-text-active", children: null };
  let formatResult = product.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
  if (formatResult) {
    const intl = util.intl;
    obj = { buyButtonLabel, paidServiceTermURL: constants3.PAID_TERMS };
    formatResult = intl.format(util.t.iIglwJ, obj);
  }
  obj.children = formatResult;
  return __initData(Text_Text.Text, obj);
}
const View = fn(17).View;
const CollectiblesShopConstants = fn(1076);
({ EXTERNAL_PRODUCT_SKU_IDS: closure_7, ShopCtaEnum: closure_8 } = CollectiblesShopConstants);
const Constants = fn(1074);
({ HelpdeskArticles: closure_9, MarketingURLs: c10, UserSettingsSections: closure_11 } = Constants);
const RootNavigatorScreen = fn(11084).RootNavigatorScreen;
const PremiumConstants = fn(1373);
({ PremiumTypes: map1, SubscriptionIntervalTypes: closure_14 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const ORB_BADGE_COLLECTED_MODAL = "ORB_BADGE_COLLECTED_MODAL";
const ORB_CHECKOUT_MODAL = "ORB_CHECKOUT_MODAL";
fn(4560);
let createStyles = { container: null, containerFramesEA: null, gradientOverlay: null, purchaseSection: null, disclaimer: null, buttonContainer: null, framesEAContainer: null, orbsButtonLabel: null, orbsButtonText: null };
createStyles = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.containerFramesEA = { borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_MUTED };
createStyles.gradientOverlay = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
let obj1 = { borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_MUTED };
createStyles.purchaseSection = { gap: nativeDefault.space.PX_12 };
createStyles.disclaimer = { opacity: 0.75 };
let obj2 = { gap: nativeDefault.space.PX_12 };
createStyles.buttonContainer = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
createStyles.framesEAContainer = { flexDirection: "column", gap: nativeDefault.space.PX_8 };
createStyles.orbsButtonLabel = { flexDirection: "row", alignItems: "center" };
createStyles.orbsButtonText = { flexShrink: 1 };
let closure_20 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx");

export default function ProductDetailsActionSheetPurchaseSection(product) {
  product = product.product;
  require = product;
  ({ analyticsLocations, isBuying, onStartPurchase: importDefault, onTrackPress } = product);
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  _slicedToArray = undefined;
  c4 = undefined;
  const tmp = closure_20();
  let obj = require("shared");
  const isThemeDarkResult = obj.isThemeDark(require("useTheme")());
  let obj1 = require("useToken");
  const token = obj1.useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj2 = require("useCurrentUser");
  const currentUser = obj2.useCurrentUser();
  let obj3 = require("useProductPurchaseState");
  const productPurchaseState = obj3.useProductPurchaseState(product);
  ({ isPurchased, isPartiallyOwnedBundle } = productPurchaseState);
  let obj4 = require("initialize");
  let items = [CollectiblesPurchaseStore];
  const items1 = [product];
  let obj5 = require("useIsPremiumSubscriber");
  const isPremiumSubscriber = obj5.useIsPremiumSubscriber(TIER_2.TIER_2);
  let obj6 = require("PremiumUtils");
  const canUseShopDiscountsResult = obj6.canUseShopDiscounts(currentUser);
  let obj7 = require("CollectiblesUtils");
  const result = obj7.isPremiumCollectiblesProduct(product);
  let obj8 = require("CollectiblesUtils");
  const result1 = obj8.isFreeCollectiblesProduct(product);
  let obj9 = require("CollectiblesProductUtils");
  const result2 = obj9.isOrbsExclusiveProduct(product);
  let obj10 = require("module_8850");
  const balance = obj10.useFetchVirtualCurrencyBalance().balance;
  let obj11 = require("useVirtualCurrencyData");
  const canAfford = obj11.useVirtualCurrencyData(product, canUseShopDiscountsResult).canAfford;
  let obj12 = require("useHandleUseNow");
  const handleUseNow = obj12.useHandleUseNow({ product, analyticsLocations, stageCollectibleChangeForEditProfile });
  ({ handleUseNow: c3, handleEditProfile: c4, isApplying, canUseNow } = handleUseNow);
  let obj13 = require("useHandleClaim");
  const handleClaim = obj13.useHandleClaim({ product, stageCollectibleChangeForEditProfile }).handleClaim;
  const tmp16 = require("useShouldShowPremiumProfileFrameCTA")({ location: "ProductDetailsActionSheetPurchaseSection", product });
  let tmp21Result = tmp16;
  if (tmp16) {
    tmp21Result = !isPurchased;
  }
  tmp5(onTrackPress[46]);
  const tmp4 = require("useTheme")();
  const tmp5Result = tmp5(onTrackPress[47]);
  let canGiftProduct = tmp5Result.useCanGiftProduct(product);
  let PX_16 = require("useSafeAreaInsets")().bottom;
  const items2 = [tmp.container, , ];
  let containerFramesEA = tmp21Result;
  if (tmp21Result) {
    containerFramesEA = tmp.containerFramesEA;
  }
  items2[1] = containerFramesEA;
  if (PX_16 == null) {
    PX_16 = require("native").space.PX_16;
  }
  obj = { style: items2, children: null };
  items2[2] = { paddingBottom: PX_16 };
  if (tmp21Result) {
    obj = { colors: ["rgba(160, 86, 242, 0.45)", "rgba(22, 26, 138, 0.45)"], locations: [0.0854, 0.7847], start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: null, pointerEvents: "none" };
    const items3 = [tmp.gradientOverlay, ];
    obj1 = !isThemeDarkResult;
    let tmp2Result = require("LinearGradient");
    if (!isThemeDarkResult) {
      obj1 = { opacity: 0.4 };
    }
    obj2 = { children: null };
    items3[1] = obj1;
    obj.style = items3;
    const items4 = [closure_15(tmp2Result, obj), ];
    obj3 = { style: tmp.gradientOverlay, preserveAspectRatio: "none", viewBox: "0 0 100 100", pointerEvents: "none", children: null };
    tmp2Result = require("inlineStyles");
    obj4 = { children: null };
    obj5 = { id: "frameEAVignette", cx: "50%", cy: "100%", rx: "100%", ry: "100%", fx: "50%", fy: "100%", children: null };
    obj6 = { offset: "60%", stopColor: token, stopOpacity: 1 };
    const items5 = [closure_15(tmp5(onTrackPress[50]).Stop, obj6), ];
    obj7 = { offset: "100%", stopColor: token, stopOpacity: 0 };
    items5[1] = closure_15(tmp5(onTrackPress[50]).Stop, obj7);
    obj5.children = items5;
    obj4.children = closure_16(tmp5(onTrackPress[50]).RadialGradient, obj5);
    const items6 = [closure_15(tmp5(onTrackPress[50]).Defs, obj4), closure_15(tmp5(onTrackPress[50]).Rect, { x: "0", y: "0", width: "100", height: "100", fill: "url(#frameEAVignette)" })];
    obj3.children = items6;
    items4[1] = closure_16(tmp2Result, obj3);
    obj2.children = items4;
    tmp21Result = closure_16(closure_17, obj2);
  }
  const items7 = [tmp21Result, ];
  if (isPurchased) {
    tmp21Result = product.type !== tmp5(onTrackPress[32]).CollectiblesItemType.EXTERNAL_SKU;
    if (tmp21Result) {
      obj8 = { style: tmp.buttonContainer, children: null };
      if (canUseNow) {
        obj9 = { loading: isApplying, text: null, onPress: null, size: "lg", grow: true };
        const intl13 = tmp5(onTrackPress[15]).intl;
        obj9.text = intl13.string(tmp5(onTrackPress[15]).t.MAS7uK);
        obj9.onPress = function onPress() {
          if (onTrackPress != null) {
            tmp(constants.USE_NOW);
          }
          _undefined();
        };
        obj10 = obj9;
      } else {
        obj10 = { text: null, onPress: null, size: "lg", grow: true };
        const intl12 = tmp5(onTrackPress[15]).intl;
        obj10.text = intl12.string(tmp5(onTrackPress[15]).t["2p2aYz"]);
        obj10.onPress = function onPress() {
          if (onTrackPress != null) {
            tmp(constants.EDIT_PROFILE);
          }
          _undefined2();
        };
      }
      const items8 = [closure_15(tmp5(onTrackPress[51]).Button, obj10), ];
      if (canGiftProduct) {
        obj11 = { product, analyticsLocations, onTrackPress };
        canGiftProduct = closure_15(GiftButton, obj11);
      }
      items8[1] = canGiftProduct;
      obj8.children = items8;
      tmp21Result = closure_16(tmp22, obj8);
    }
    let tmp21Result2 = tmp21Result;
  } else if (tmp16) {
    const tmp5Result1 = tmp5(onTrackPress[52]);
    const t = tmp5(onTrackPress[15]).t;
    const isAndroidResult = tmp5(onTrackPress[52]).isAndroid();
    obj12 = { value: null, children: null };
    const items9 = [];
    const tmp45 = tmp5(onTrackPress[52]).isAndroid() ? t.COObWR : t["7wpqfj"];
    items9[HermesBuiltin.arraySpread(analyticsLocations, 0)] = require("AnalyticsLocation").PROFILE_FRAMES_EA_MARKETING;
    obj12.value = items9;
    obj13 = { style: tmp.framesEAContainer, children: null };
    const obj14 = { variant: "text-xs/semibold", color: "text-strong", children: null };
    const intl8 = tmp5(onTrackPress[15]).intl;
    const obj15 = { articleURL: null };
    const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
    obj15.articleURL = require("HelpdeskUtils").getArticleURL(constants2.SHOP_FRAMES_EARLY_ACCESS);
    obj14.children = intl8.format(tmp5(onTrackPress[15]).t["3cglst"], obj15);
    const items10 = [closure_15(tmp5(onTrackPress[30]).Text, obj14), , ];
    const obj16 = { onTrackPress, text: null };
    const intl9 = tmp5(onTrackPress[15]).intl;
    obj16.text = intl9.string(tmp5(onTrackPress[15]).t["9wfL34"]);
    items10[1] = closure_15(tmp5(onTrackPress[55]).UnlockWithNitroButton, obj16);
    const obj17 = { variant: "text-xxs/normal", children: null };
    const intl10 = tmp5(onTrackPress[15]).intl;
    const obj18 = { paidURL: constants3.PAID_TERMS, interval: null, ctaText: null };
    const tmp2Result1 = require("HelpdeskUtils");
    obj18.interval = require("PremiumUtils").getIntervalStringAsNoun(tmp19);
    const intl11 = tmp5(onTrackPress[15]).intl;
    obj18.ctaText = intl11.string(tmp5(onTrackPress[15]).t["9wfL34"]);
    obj17.children = intl10.format(tmp45, obj18);
    items10[2] = closure_15(tmp5(onTrackPress[30]).Text, obj17);
    obj13.children = items10;
    obj12.children = closure_16(tmp22, obj13);
    tmp21Result2 = closure_15(tmp5(onTrackPress[20]).AnalyticsLocationProvider, obj12);
    const tmp2Result2 = require("PremiumUtils");
  } else {
    if (result) {
      if (!isPremiumSubscriber) {
        if (!result1) {
          const obj19 = { onTrackPress };
          tmp21Result2 = closure_15(tmp5(onTrackPress[55]).UnlockWithNitroButton, obj19);
        }
      }
    }
    if (!result1) {
      if (product.type === tmp5(onTrackPress[32]).CollectiblesItemType.BUNDLE) {
        const intl6 = tmp5(onTrackPress[15]).intl;
        let stringResult = intl6.string(tmp5(onTrackPress[15]).t.V1AWw0);
      } else if (product.type === tmp5(onTrackPress[32]).CollectiblesItemType.PROFILE_EFFECT) {
        const intl5 = tmp5(onTrackPress[15]).intl;
        stringResult = intl5.string(tmp5(onTrackPress[15]).t.kAeDcK);
      } else if (product.type === tmp5(onTrackPress[32]).CollectiblesItemType.NAMEPLATE) {
        const intl4 = tmp5(onTrackPress[15]).intl;
        stringResult = intl4.string(tmp5(onTrackPress[15]).t.H3vhqU);
      } else if (product.type === tmp5(onTrackPress[32]).CollectiblesItemType.AVATAR_DECORATION) {
        const intl3 = tmp5(onTrackPress[15]).intl;
        stringResult = intl3.string(tmp5(onTrackPress[15]).t.AQ0Veg);
      } else if (product.type === tmp5(onTrackPress[32]).CollectiblesItemType.PROFILE_FRAME) {
        const intl2 = tmp5(onTrackPress[15]).intl;
        stringResult = intl2.string(tmp5(onTrackPress[15]).t.BlSW1e);
      } else {
        const intl = tmp5(onTrackPress[15]).intl;
        stringResult = intl.string(tmp5(onTrackPress[15]).t.AQ0Veg);
      }
      const obj20 = { style: tmp.purchaseSection, children: null };
      let tmp30 = canAfford;
      if (canAfford) {
        const obj21 = { product, hasShopDiscount: canUseShopDiscountsResult, balance, onTrackPress, stageCollectibleChangeForEditProfile };
        tmp30 = closure_15(VCButton, obj21);
      }
      const items11 = [tmp30, , , ];
      let tmp21Result1 = !result2;
      if (!result2) {
        const obj22 = { style: tmp.buttonContainer, children: null };
        const obj23 = {
          loading: isBuying,
          text: stringResult,
          onPress() {
                  if (onTrackPress != null) {
                    tmp(constants.BUY_WITH_FIAT);
                  }
                  importDefault();
                },
          disabled: null,
          variant: null,
          size: "lg",
          grow: true
        };
        if (!isPartiallyOwnedBundle) {
          isPartiallyOwnedBundle = isBuying;
        }
        obj23.disabled = isPartiallyOwnedBundle;
        let str = "primary";
        let str2 = "primary";
        if (canAfford) {
          str2 = "secondary";
        }
        obj23.variant = str2;
        const items12 = [closure_15(tmp5(onTrackPress[51]).Button, obj23), ];
        let tmp34Result = canGiftProduct;
        if (canGiftProduct) {
          const obj24 = { product, analyticsLocations, variant: null, onTrackPress: null };
          if (canAfford) {
            str = "secondary";
          }
          obj24.variant = str;
          obj24.onTrackPress = onTrackPress;
          tmp34Result = closure_15(GiftButton, obj24);
        }
        items12[1] = tmp34Result;
        obj22.children = items12;
        tmp21Result1 = closure_16(tmp22, obj22);
      }
      items11[1] = tmp21Result1;
      let tmp37 = !canAfford;
      if (!canAfford) {
        const obj25 = { product, hasShopDiscount: canUseShopDiscountsResult, balance, onTrackPress, stageCollectibleChangeForEditProfile };
        tmp37 = closure_15(VCButton, obj25);
      }
      items11[2] = tmp37;
      let tmp40 = !result2;
      if (!result2) {
        const obj26 = { product, buyButtonLabel: stringResult };
        tmp40 = closure_15(PurchaseDisclaimer, obj26);
      }
      items11[3] = tmp40;
      obj20.children = items11;
      tmp21Result2 = closure_16(tmp22, obj20);
    }
    const obj27 = { text: null, loading: null, onPress: null, size: "lg", grow: true };
    const intl7 = tmp5(onTrackPress[15]).intl;
    obj27.text = intl7.string(tmp5(onTrackPress[15]).t.zp6caO);
    obj27.loading = _slicedToArray(obj4.useStateFromStoresArray(items, () => {
      const items = [CollectiblesPurchaseStore.isClaiming === product.skuId];
      return items;
    }, items1), 1)[0];
    obj27.onPress = function onPress() {
      if (onTrackPress != null) {
        tmp(constants.ADD_TO_COLLECTION);
      }
      handleClaim();
    };
    tmp21Result2 = closure_15(tmp5(onTrackPress[51]).Button, obj27);
  }
  items7[1] = tmp21Result2;
  obj.children = items7;
  return closure_16(handleClaim, obj);
};