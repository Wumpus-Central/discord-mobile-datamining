// === Module 12784: GiftButton ===

// Module 12784 (GiftButton)
import ThemesDefault from "Themes" /* 709 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1949 */;
import Text from "Text" /* 4474 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "map" /* 7312 */;
import items from "items" /* 675 */;
import ME from "ME" /* 673 */;
import { RootNavigatorScreen } from "MODE_CHANGE_PHYSICS" /* 11051 */;
import GuildFeatures from "GuildFeatures" /* 1923 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function GiftButton(onTrackPress) {
  ({ product: require, analyticsLocations: importDefault, variant } = onTrackPress);
  if (variant === undefined) {
    variant = "primary";
  }
  onTrackPress = onTrackPress.onTrackPress;
  let obj = { size: "lg", variant, icon: null, onPress: null, accessibilityLabel: null };
  if ("primary" === variant) {
    let TEXT_STRONG = importDefault(tmp3[10]).colors.WHITE;
  } else {
    TEXT_STRONG = importDefault(tmp3[10]).colors.TEXT_STRONG;
  }
  obj[2] = closure_15(require(onTrackPress[12]).GiftIcon, { size: "md", color: TEXT_STRONG });
  obj[3] = function onPress() {
    if (onTrackPress != null) {
      tmp(closure_1_8.SEND_AS_GIFT);
    }
    let obj = closure_1_1(onTrackPress[13]);
    obj.hideActionSheet(closure_1_0(onTrackPress[14]).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    obj = { skuId: skuId.skuId, analyticsLocations: closure_1 };
    closure_1_0(onTrackPress[15]).openShopGiftModal(obj);
  };
  const intl = tmp2(tmp3[16]).intl;
  obj[4] = intl.string(require(onTrackPress[16]).t.PEjaCx);
  return closure_15(require(onTrackPress[11]).IconButton, obj);
}
function VCButton(balance) {
  balance = balance.balance;
  const product = balance.product;
  importDefault = product;
  let flag = balance.hasShopDiscount;
  if (flag === undefined) {
    flag = false;
  }
  const onTrackPress = balance.onTrackPress;
  closure_3 = undefined;
  let navigation;
  let analyticsLocations;
  closure_6 = undefined;
  closure_7 = undefined;
  let str;
  const tmp = callback3();
  closure_3 = tmp;
  let obj = balance(onTrackPress[17]);
  const virtualCurrencyData = obj.useVirtualCurrencyData(product, flag);
  ({ price, canAfford } = virtualCurrencyData);
  obj1 = balance(onTrackPress[18]);
  let isPartiallyOwnedBundle = obj1.useProductDisableState(product.skuId).isDisabled;
  let obj2 = balance(onTrackPress[19]);
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = !canAfford;
  }
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = obj2.useProductPurchaseState(product).isPartiallyOwnedBundle;
  }
  navigation = balance(onTrackPress[20]).useNavigation();
  analyticsLocations = importDefault(tmp3[21])().analyticsLocations;
  const items = [navigation, product, balance, analyticsLocations];
  closure_6 = navigation.useCallback(() => {
    let obj = product(onTrackPress[13]);
    obj.hideActionSheet();
    obj = {
      skuId: product.skuId,
      analyticsLocations,
      onCheckoutSuccess(arg0) {
        let obj = closure_1_0(closure_1_2[25]);
        const collectiblesPurchases = obj.fetchCollectiblesPurchases();
        obj1 = closure_1_1(closure_1_2[22]);
        obj1.popWithKey(closure_1_19);
        if (skuId.skuId === closure_1_7.ORB_PROFILE_BADGE) {
          let tmp4Result = tmp4(tmp2[22]);
          obj = { modalKey: null, onPressViewBadge: null, orbBalancePriorToPurchase: null };
          obj[0] = closure_1_18;
          obj[1] = function onPressViewBadge(arg0) {
            return navigation.navigate(closure_1_12.YOU, { showOrbsBadgeCoachmark: true });
          };
          obj[2] = closure_0;
          tmp4Result.pushLazy(tmp(tmp2[24])(tmp2[26], tmp2.paths), obj, closure_1_18);
        } else {
          const ALL = tmp(tmp2[27]).FractionalPremiumSKUsSets.ALL;
          if (ALL.has(tmp6.skuId)) {
            tmp4Result = tmp4(tmp2[13]);
            obj = { skuId: null, consumed: null, onPressExplorePerks: null, onPressViewCredits: null };
            obj[0] = tmp6.skuId;
            const first = arg0.entitlements[0];
            let flag;
            if (first != null) {
              flag = first.consumed;
            }
            if (flag == null) {
              flag = false;
            }
            obj[1] = flag;
            obj[2] = function onPressExplorePerks() {
              navigation.navigate(closure_1_11.PREMIUM);
              closure_1_1(closure_1_2[13]).hideActionSheet();
            };
            obj[3] = function onPressViewCredits() {
              navigation.navigate(closure_1_11.PREMIUM_MANAGE_PLAN);
              closure_1_1(closure_1_2[13]).hideActionSheet();
            };
            tmp4Result.openLazy(tmp(tmp2[24])(tmp2[28], tmp2.paths), "FractionalNitroCollectedActionSheet", obj);
            const tmp9 = tmp(tmp2[24])(tmp2[28], tmp2.paths);
          } else {
            obj1 = { product: null, useCategoryImage: true, showOrbBalancePill: true, orbBalancePriorToPurchase: null };
            obj1[0] = tmp6;
            obj1[3] = closure_0;
            tmp4(tmp2[29]).open(obj1);
            const tmp4Result1 = tmp4(tmp2[29]);
          }
        }
      }
    };
    product(onTrackPress[22]).pushLazy(balance(onTrackPress[24])(onTrackPress[23], onTrackPress.paths), obj, closure_1_19);
  }, items);
  if (null == price) {
    return null;
  } else {
    const colors = tmp6(tmp3[10]).colors;
    closure_7 = isPartiallyOwnedBundle ? colors.INTERACTIVE_TEXT_ACTIVE : colors.WHITE;
    str = "text-overlay-light";
    if (isPartiallyOwnedBundle) {
      str = "interactive-text-active";
    }
    const intl = tmp2(tmp3[16]).intl;
    obj = { orbPrice: null, orbIconHook: null };
    obj[0] = price.amount;
    obj[1] = function orbIconHook() {
      return closure_1_15(balance(onTrackPress[30]).OrbsIcon, { size: "sm", color: closure_7 }, "orbs-icon");
    };
    const formatResult = intl.format(tmp2(tmp3[16]).t.JC15qj, obj);
    const _Array = Array;
    let arr2 = formatResult;
    if (!Array.isArray(formatResult)) {
      const items1 = [formatResult];
      arr2 = items1;
    }
    obj = { style: null, accessibilityLabel: null, children: null };
    obj[0] = tmp.orbsButtonLabel;
    const intl2 = tmp2(tmp3[16]).intl;
    obj1 = { orbPrice: null };
    obj1[0] = price.amount;
    obj[1] = intl2.formatToPlainString(tmp2(tmp3[16]).t.yi41qQ, obj1);
    obj[2] = arr2.map((str) => {
      if (typeof str === "string") {
        const obj = { style: null, variant: "text-md/semibold", color: null, children: null };
        obj[0] = orbsButtonText.orbsButtonText;
        obj[2] = str;
        obj[3] = str;
        let tmp7 = closure_1_15(balance(onTrackPress[31]).Text, obj, arg1);
      } else {
        tmp7 = str;
      }
      return tmp7;
    });
    obj2 = { style: null, children: null };
    obj2[0] = tmp.buttonContainer;
    const obj3 = { loading: false, textElement: null, onPress: null, disabled: null, size: "lg", variant: null, grow: true };
    obj3[1] = callback2(analyticsLocations, obj);
    obj3[2] = function onPress() {
      if (onTrackPress != null) {
        tmp(str.BUY_WITH_ORBS);
      }
      callback();
    };
    obj3[3] = isPartiallyOwnedBundle;
    let str2 = "primary";
    if (isPartiallyOwnedBundle) {
      str2 = "secondary";
    }
    obj3[5] = str2;
    obj2[1] = callback2(tmp2(tmp3[32]).BaseTextButton, obj3);
    return callback2(analyticsLocations, obj2);
  }
  const tmp2Result = balance(onTrackPress[20]);
  tmp6 = importDefault;
}
function PurchaseDisclaimer(arg0) {
  ({ product, buyButtonLabel } = arg0);
  let obj = { style: callback3().disclaimer, variant: "text-xxs/normal", color: "interactive-text-active", children: null };
  let formatResult = product.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
  if (formatResult) {
    const intl = tmp3(1233).intl;
    obj = { buyButtonLabel: null, paidServiceTermURL: null };
    obj[0] = buyButtonLabel;
    obj[1] = constants2.PAID_TERMS;
    formatResult = intl.format(tmp3(1233).t.iIglwJ, obj);
  }
  obj[3] = formatResult;
  return closure_15(Text.Text, obj);
}
({ EXTERNAL_PRODUCT_SKU_IDS: error, ShopCtaEnum: closure_8 } = items);
({ HelpdeskArticles: c9, MarketingURLs: c10, UserSettingsSections: unpackModuleId } = ME);
({ PremiumTypes: map1, SubscriptionIntervalTypes: closure_14 } = GuildFeatures);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const ORB_BADGE_COLLECTED_MODAL = "ORB_BADGE_COLLECTED_MODAL";
const ORB_CHECKOUT_MODAL = "ORB_CHECKOUT_MODAL";
createCacheKey = { container: null, containerFramesEA: null, gradientOverlay: null, purchaseSection: null, disclaimer: null, buttonContainer: null, framesEAContainer: null, orbsButtonLabel: null, orbsButtonText: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderWidth: 1, borderStyle: "solid", borderColor: ThemesDefault.colors.BORDER_MUTED };
createCacheKey[2] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
let obj1 = { borderWidth: 1, borderStyle: "solid", borderColor: ThemesDefault.colors.BORDER_MUTED };
createCacheKey[3] = { gap: ThemesDefault.space.PX_12 };
createCacheKey[4] = { opacity: 0.75 };
let obj2 = { gap: ThemesDefault.space.PX_12 };
createCacheKey[5] = { flexDirection: "row", gap: ThemesDefault.space.PX_12 };
let obj3 = { flexDirection: "row", gap: ThemesDefault.space.PX_12 };
createCacheKey[6] = { flexDirection: "column", gap: ThemesDefault.space.PX_8 };
createCacheKey[7] = { flexDirection: "row", alignItems: "center" };
createCacheKey[8] = { flexShrink: 1 };
let closure_20 = createCacheKey.createStyles(createCacheKey);
let obj4 = { flexDirection: "column", gap: ThemesDefault.space.PX_8 };
let result = require("set").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx");

export default function ProductDetailsActionSheetPurchaseSection(product) {
  product = product.product;
  require = product;
  ({ analyticsLocations, isBuying, onStartPurchase: importDefault, onTrackPress } = product);
  let callback;
  c4 = undefined;
  let handleClaim;
  const tmp = callback3();
  const tmp3 = onTrackPress;
  let obj = require(onTrackPress[35]);
  const isThemeDarkResult = obj.isThemeDark(importDefault(onTrackPress[34])());
  obj1 = require(onTrackPress[36]);
  const token = obj1.useToken(importDefault(onTrackPress[10]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj2 = require(onTrackPress[37]);
  const currentUser = obj2.useCurrentUser();
  let obj3 = require(onTrackPress[19]);
  const productPurchaseState = obj3.useProductPurchaseState(product);
  ({ isPurchased, isPartiallyOwnedBundle } = productPurchaseState);
  let obj4 = require(onTrackPress[38]);
  let items = [closure_6];
  const items1 = [product];
  let obj5 = require(onTrackPress[39]);
  const isPremiumSubscriber = obj5.useIsPremiumSubscriber(TIER_2.TIER_2);
  let obj6 = importDefault(onTrackPress[40]);
  const canUseShopDiscountsResult = obj6.canUseShopDiscounts(currentUser);
  let obj7 = require(onTrackPress[41]);
  const result = obj7.isPremiumCollectiblesProduct(product);
  let obj8 = require(onTrackPress[41]);
  const result1 = obj8.isFreeCollectiblesProduct(product);
  let obj9 = require(onTrackPress[42]);
  const result2 = obj9.isOrbsExclusiveProduct(product);
  let obj10 = require(onTrackPress[43]);
  const balance = obj10.useFetchVirtualCurrencyBalance().balance;
  let obj11 = require(onTrackPress[17]);
  const canAfford = obj11.useVirtualCurrencyData(product, canUseShopDiscountsResult).canAfford;
  let obj12 = require(onTrackPress[44]);
  const handleUseNow = obj12.useHandleUseNow({ product, analyticsLocations });
  ({ handleUseNow: c3, handleEditProfile: c4, isApplying, canUseNow } = handleUseNow);
  let obj13 = require(onTrackPress[45]);
  handleClaim = obj13.useHandleClaim({ product }).handleClaim;
  const tmp16 = importDefault(onTrackPress[46])({ location: "ProductDetailsActionSheetPurchaseSection", product });
  let tmp21Result = tmp16;
  if (tmp16) {
    tmp21Result = !isPurchased;
  }
  let tmp5Result = tmp5(tmp3[47]);
  const tmp4 = importDefault(onTrackPress[34])();
  tmp5Result = tmp5(tmp3[48]);
  let canGiftProduct = tmp5Result.useCanGiftProduct(product);
  let PX_16 = tmp2(tmp3[49])().bottom;
  const items2 = [tmp.container, , ];
  let containerFramesEA = tmp21Result;
  if (tmp21Result) {
    containerFramesEA = tmp.containerFramesEA;
  }
  items2[1] = containerFramesEA;
  if (PX_16 == null) {
    PX_16 = tmp2(tmp3[10]).space.PX_16;
  }
  obj = { style: items2, children: null };
  items2[2] = { paddingBottom: PX_16 };
  if (tmp21Result) {
    obj = { colors: null, locations: null, start: null, end: null, style: null, pointerEvents: "none" };
    obj[0] = ["rgba(160, 86, 242, 0.45)", "rgba(22, 26, 138, 0.45)"];
    obj[1] = [0.0854, 0.7847];
    obj[2] = { x: 0, y: 0 };
    obj[3] = { x: 1, y: 1 };
    const items3 = [tmp.gradientOverlay, ];
    obj1 = !isThemeDarkResult;
    let tmp2Result = tmp2(tmp3[50]);
    if (!isThemeDarkResult) {
      obj1 = { opacity: 0.4 };
    }
    obj2 = { children: null };
    items3[1] = obj1;
    obj[4] = items3;
    const items4 = [callback2(tmp2Result, obj), ];
    obj3 = { style: null, preserveAspectRatio: "none", viewBox: "0 0 100 100", pointerEvents: "none", children: null };
    obj3[0] = tmp.gradientOverlay;
    tmp2Result = tmp2(tmp3[51]);
    obj4 = { children: null };
    obj5 = { id: "frameEAVignette", cx: "50%", cy: "100%", rx: "100%", ry: "100%", fx: "50%", fy: "100%", children: null };
    obj6 = { offset: "60%", stopColor: null, stopOpacity: 1 };
    obj6[1] = token;
    const items5 = [callback2(tmp5(tmp3[51]).Stop, obj6), ];
    obj7 = { offset: "100%", stopColor: null, stopOpacity: 0 };
    obj7[1] = token;
    items5[1] = callback2(tmp5(tmp3[51]).Stop, obj7);
    obj5[7] = items5;
    obj4[0] = tmp21(tmp5(tmp3[51]).RadialGradient, obj5);
    const items6 = [callback2(tmp5(tmp3[51]).Defs, obj4), callback2(tmp5(tmp3[51]).Rect, { x: "0", y: "0", width: "100", height: "100", fill: "url(#frameEAVignette)" })];
    obj3[4] = items6;
    items4[1] = tmp21(tmp2Result, obj3);
    obj2[0] = items4;
    tmp21Result = tmp21(closure_17, obj2);
    const tmp23 = closure_17;
  }
  const items7 = [tmp21Result, ];
  if (isPurchased) {
    tmp21Result = product.type !== tmp5(tmp3[33]).CollectiblesItemType.EXTERNAL_SKU;
    if (tmp21Result) {
      obj8 = { style: null, children: null };
      obj8[0] = tmp.buttonContainer;
      if (canUseNow) {
        obj9 = { loading: null, text: null, onPress: null, size: "lg", grow: true };
        obj9[0] = isApplying;
        const intl13 = tmp5(tmp3[16]).intl;
        obj9[1] = intl13.string(tmp5(tmp3[16]).t.MAS7uK);
        obj9[2] = function onPress() {
          if (onTrackPress != null) {
            tmp(closure_1_8.USE_NOW);
          }
          _undefined();
        };
        obj10 = obj9;
      } else {
        obj10 = { text: null, onPress: null, size: "lg", grow: true };
        const intl12 = tmp5(tmp3[16]).intl;
        obj10[0] = intl12.string(tmp5(tmp3[16]).t["2p2aYz"]);
        obj10[1] = function onPress() {
          if (onTrackPress != null) {
            tmp(closure_1_8.EDIT_PROFILE);
          }
          _undefined2();
        };
      }
      const items8 = [callback2(tmp5(tmp3[52]).Button, obj10), ];
      if (canGiftProduct) {
        obj11 = { product: null, analyticsLocations: null, onTrackPress: null };
        obj11[0] = product;
        obj11[1] = analyticsLocations;
        obj11[2] = onTrackPress;
        canGiftProduct = tmp53(GiftButton, obj11);
      }
      items8[1] = canGiftProduct;
      obj8[1] = items8;
      tmp21Result = tmp21(tmp22, obj8);
    }
    let tmp21Result2 = tmp21Result;
  } else if (tmp16) {
    const tmp5Result1 = tmp5(tmp3[53]);
    const t = tmp5(tmp3[16]).t;
    const isAndroidResult = tmp5(tmp3[53]).isAndroid();
    obj12 = { value: null, children: null };
    const items9 = [];
    const tmp45 = tmp5(tmp3[53]).isAndroid() ? t.COObWR : t["7wpqfj"];
    items9[HermesBuiltin.arraySpread(analyticsLocations, 0)] = tmp2(tmp3[54]).PROFILE_FRAMES_EA_MARKETING;
    obj12[0] = items9;
    obj13 = { style: null, children: null };
    obj13[0] = tmp.framesEAContainer;
    const obj14 = { variant: "text-xs/semibold", color: "text-strong", children: null };
    const intl8 = tmp5(tmp3[16]).intl;
    const obj15 = { articleURL: null };
    const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
    obj15[0] = tmp2(tmp3[55]).getArticleURL(constants.SHOP_FRAMES_EARLY_ACCESS);
    obj14[2] = intl8.format(tmp5(tmp3[16]).t["3cglst"], obj15);
    const items10 = [callback2(tmp5(tmp3[31]).Text, obj14), , ];
    const obj16 = { onTrackPress: null, text: null };
    obj16[0] = onTrackPress;
    const intl9 = tmp5(tmp3[16]).intl;
    obj16[1] = intl9.string(tmp5(tmp3[16]).t["9wfL34"]);
    items10[1] = callback2(tmp5(tmp3[56]).UnlockWithNitroButton, obj16);
    const obj17 = { variant: "text-xxs/normal", children: null };
    const intl10 = tmp5(tmp3[16]).intl;
    const obj18 = { paidURL: null, interval: null, ctaText: null };
    obj18[0] = constants2.PAID_TERMS;
    const tmp2Result1 = tmp2(tmp3[55]);
    obj18[1] = tmp2(tmp3[40]).getIntervalStringAsNoun(tmp19);
    const intl11 = tmp5(tmp3[16]).intl;
    obj18[2] = intl11.string(tmp5(tmp3[16]).t["9wfL34"]);
    obj17[1] = intl10.format(tmp45, obj18);
    items10[2] = callback2(tmp5(tmp3[31]).Text, obj17);
    obj13[1] = items10;
    obj12[1] = tmp21(tmp22, obj13);
    tmp21Result2 = callback2(tmp5(tmp3[21]).AnalyticsLocationProvider, obj12);
    const tmp2Result2 = tmp2(tmp3[40]);
  } else {
    if (result) {
      if (!isPremiumSubscriber) {
        if (!result1) {
          const obj19 = { onTrackPress: null };
          obj19[0] = onTrackPress;
          tmp21Result2 = callback2(tmp5(tmp3[56]).UnlockWithNitroButton, obj19);
        }
      }
    }
    if (!result1) {
      if (product.type === tmp5(tmp3[33]).CollectiblesItemType.BUNDLE) {
        const intl6 = tmp5(tmp3[16]).intl;
        let stringResult = intl6.string(tmp5(tmp3[16]).t.V1AWw0);
      } else if (product.type === tmp5(tmp3[33]).CollectiblesItemType.PROFILE_EFFECT) {
        const intl5 = tmp5(tmp3[16]).intl;
        stringResult = intl5.string(tmp5(tmp3[16]).t.kAeDcK);
      } else if (product.type === tmp5(tmp3[33]).CollectiblesItemType.NAMEPLATE) {
        const intl4 = tmp5(tmp3[16]).intl;
        stringResult = intl4.string(tmp5(tmp3[16]).t.H3vhqU);
      } else if (product.type === tmp5(tmp3[33]).CollectiblesItemType.AVATAR_DECORATION) {
        const intl3 = tmp5(tmp3[16]).intl;
        stringResult = intl3.string(tmp5(tmp3[16]).t.AQ0Veg);
      } else if (product.type === tmp5(tmp3[33]).CollectiblesItemType.PROFILE_FRAME) {
        const intl2 = tmp5(tmp3[16]).intl;
        stringResult = intl2.string(tmp5(tmp3[16]).t.BlSW1e);
      } else {
        const intl = tmp5(tmp3[16]).intl;
        stringResult = intl.string(tmp5(tmp3[16]).t.AQ0Veg);
      }
      const obj20 = { style: null, children: null };
      obj20[0] = tmp.purchaseSection;
      let tmp30 = canAfford;
      if (canAfford) {
        const obj21 = { product: null, hasShopDiscount: null, balance: null, onTrackPress: null };
        obj21[0] = product;
        obj21[1] = canUseShopDiscountsResult;
        obj21[2] = balance;
        obj21[3] = onTrackPress;
        tmp30 = callback2(VCButton, obj21);
      }
      const items11 = [tmp30, , , ];
      let tmp21Result1 = !result2;
      if (!result2) {
        const obj22 = { style: null, children: null };
        obj22[0] = tmp.buttonContainer;
        const obj23 = { loading: null, text: null, onPress: null, disabled: null, variant: null, size: "lg", grow: true };
        obj23[0] = isBuying;
        obj23[1] = stringResult;
        obj23[2] = function onPress() {
          if (onTrackPress != null) {
            tmp(closure_1_8.BUY_WITH_FIAT);
          }
          callback();
        };
        if (!isPartiallyOwnedBundle) {
          isPartiallyOwnedBundle = isBuying;
        }
        obj23[3] = isPartiallyOwnedBundle;
        let str = "primary";
        let str2 = "primary";
        if (canAfford) {
          str2 = "secondary";
        }
        obj23[4] = str2;
        const items12 = [callback2(tmp5(tmp3[52]).Button, obj23), ];
        let tmp34Result = canGiftProduct;
        if (canGiftProduct) {
          const obj24 = { product: null, analyticsLocations: null, variant: null, onTrackPress: null };
          obj24[0] = product;
          obj24[1] = analyticsLocations;
          if (canAfford) {
            str = "secondary";
          }
          obj24[2] = str;
          obj24[3] = onTrackPress;
          tmp34Result = tmp34(GiftButton, obj24);
          const tmp36 = GiftButton;
        }
        items12[1] = tmp34Result;
        obj22[1] = items12;
        tmp21Result1 = tmp21(tmp22, obj22);
      }
      items11[1] = tmp21Result1;
      let tmp37 = !canAfford;
      if (!canAfford) {
        const obj25 = { product: null, hasShopDiscount: null, balance: null, onTrackPress: null };
        obj25[0] = product;
        obj25[1] = canUseShopDiscountsResult;
        obj25[2] = balance;
        obj25[3] = onTrackPress;
        tmp37 = callback2(VCButton, obj25);
      }
      items11[2] = tmp37;
      let tmp40 = !result2;
      if (!result2) {
        const obj26 = { product: null, buyButtonLabel: null };
        obj26[0] = product;
        obj26[1] = stringResult;
        tmp40 = callback2(PurchaseDisclaimer, obj26);
      }
      items11[3] = tmp40;
      obj20[1] = items11;
      tmp21Result2 = tmp21(tmp22, obj20);
    }
    const obj27 = { text: null, loading: null, onPress: null, size: "lg", grow: true };
    const intl7 = tmp5(tmp3[16]).intl;
    obj27[0] = intl7.string(tmp5(tmp3[16]).t.zp6caO);
    obj27[1] = callback(obj4.useStateFromStoresArray(items, () => {
      const items = [closure_1_6.isClaiming === product.skuId];
      return items;
    }, items1), 1)[0];
    obj27[2] = function onPress() {
      if (onTrackPress != null) {
        tmp(closure_1_8.ADD_TO_COLLECTION);
      }
      handleClaim();
    };
    tmp21Result2 = callback2(tmp5(tmp3[52]).Button, obj27);
  }
  items7[1] = tmp21Result2;
  obj[1] = items7;
  return closure_16(handleClaim, obj);
};