// discord_app/modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx
import Text from "Text";
import useProductDisableState from "useProductDisableState";
import { View } from "getSystemLocale";
import { useNativeCheckoutStore } from "context";
import map from "map";
import items from "items";
import ME from "ME";
import { RootNavigatorScreen } from "MODE_CHANGE_PHYSICS";
import GuildFeatures from "GuildFeatures";
import jsxProd from "useNavigation";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { CollectiblesItemType } from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { AccessibilityAnnouncer } from "../../../design/shared.tsx";
import { map } from "../../../design/tokens/native/useToken.tsx";
import { useIsPremiumSubscriber } from "../../premium/useIsPremiumSubscriber.tsx";
import { index } from "../../virtual_currency/hooks/index.tsx";
import { getItemRecordsFromPurchases } from "../CollectiblesUtils.tsx";
import { useCurrentUser } from "../hooks/useCurrentUser.tsx";
import { getProductPurchaseState } from "../hooks/useProductPurchaseState.tsx";
import { getProductOrbPrice } from "../utils/CollectiblesProductUtils.tsx";
import { useVirtualCurrencyData } from "hooks/useVirtualCurrencyData.tsx";
import { useHandleUseNow } from "useHandleUseNow.tsx";

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let metroImportAll;
let unpackModuleId;
let require = arg1;
function GiftButton(onTrackPress) {
  let importDefault;
  let require;
  let variant;
  ({ product: require, analyticsLocations: importDefault, variant } = onTrackPress);
  if (variant === undefined) {
    variant = "primary";
  }
  onTrackPress = onTrackPress.onTrackPress;
  let obj = { size: "lg", variant, icon: null, onPress: null, accessibilityLabel: null };
  if ("primary" === variant) {
    let TEXT_STRONG = importDefault(tmp3[11]).colors.WHITE;
  } else {
    TEXT_STRONG = importDefault(tmp3[11]).colors.TEXT_STRONG;
  }
  obj[2] = closure_16(require(onTrackPress[13]).GiftIcon, { size: "md", color: TEXT_STRONG });
  obj[3] = function onPress() {
    if (onTrackPress != null) {
      tmp(outer1_9.SEND_AS_GIFT);
    }
    let obj = outer1_1(onTrackPress[14]);
    obj.hideActionSheet(outer1_0(onTrackPress[15]).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    obj = { skuId: skuId.skuId, analyticsLocations: closure_1 };
    outer1_0(onTrackPress[16]).openShopGiftModal(obj);
  };
  const intl = tmp2(tmp3[17]).intl;
  obj[4] = intl.string(require(onTrackPress[17]).t.PEjaCx);
  return closure_16(require(onTrackPress[12]).IconButton, obj);
}
function VCButton(balance) {
  let canAfford;
  let price;
  balance = balance.balance;
  const product = balance.product;
  const importDefault = product;
  let flag = balance.hasShopDiscount;
  if (flag === undefined) {
    flag = false;
  }
  const onTrackPress = balance.onTrackPress;
  let c3;
  let navigation;
  let analyticsLocations;
  let closure_6;
  let map;
  let str;
  const tmp = createCacheKey();
  c3 = tmp;
  let obj = balance(onTrackPress[18]);
  const virtualCurrencyData = obj.useVirtualCurrencyData(product, flag);
  ({ price, canAfford } = virtualCurrencyData);
  let obj1 = balance(onTrackPress[19]);
  let isPartiallyOwnedBundle = obj1.useProductDisableState(product.skuId).isDisabled;
  let obj2 = balance(onTrackPress[20]);
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = !canAfford;
  }
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = obj2.useProductPurchaseState(product).isPartiallyOwnedBundle;
  }
  navigation = balance(onTrackPress[21]).useNavigation();
  analyticsLocations = importDefault(tmp3[22])().analyticsLocations;
  const items = [navigation, product, balance, analyticsLocations];
  closure_6 = navigation.useCallback(() => {
    let obj = product(onTrackPress[14]);
    obj.hideActionSheet();
    obj = {
      skuId: product.skuId,
      analyticsLocations,
      onCheckoutSuccess(arg0) {
        let obj = outer1_0(outer1_2[26]);
        const collectiblesPurchases = obj.fetchCollectiblesPurchases();
        let obj1 = outer1_1(outer1_2[23]);
        obj1.popWithKey(outer1_20);
        if (skuId.skuId === outer1_8.ORB_PROFILE_BADGE) {
          let tmp4Result = tmp4(tmp2[23]);
          obj = { modalKey: null, onPressViewBadge: null, orbBalancePriorToPurchase: null };
          obj[0] = outer1_19;
          obj[1] = function onPressViewBadge(arg0) {
            return navigation.navigate(outer1_13.YOU, { showOrbsBadgeCoachmark: true });
          };
          obj[2] = closure_0;
          tmp4Result.pushLazy(tmp(tmp2[25])(tmp2[27], tmp2.paths), obj, outer1_19);
        } else {
          const ALL = tmp(tmp2[28]).FractionalPremiumSKUsSets.ALL;
          if (ALL.has(tmp6.skuId)) {
            tmp4Result = tmp4(tmp2[14]);
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
              navigation.navigate(outer1_12.PREMIUM);
              outer1_1(outer1_2[14]).hideActionSheet();
            };
            obj[3] = function onPressViewCredits() {
              navigation.navigate(outer1_12.PREMIUM_MANAGE_PLAN);
              outer1_1(outer1_2[14]).hideActionSheet();
            };
            tmp4Result.openLazy(tmp(tmp2[25])(tmp2[29], tmp2.paths), "FractionalNitroCollectedActionSheet", obj);
            const tmp9 = tmp(tmp2[25])(tmp2[29], tmp2.paths);
          } else {
            obj1 = { product: null, useCategoryImage: true, showOrbBalancePill: true, orbBalancePriorToPurchase: null };
            obj1[0] = tmp6;
            obj1[3] = closure_0;
            tmp4(tmp2[30]).open(obj1);
            const tmp4Result1 = tmp4(tmp2[30]);
          }
        }
      }
    };
    product(onTrackPress[23]).pushLazy(balance(onTrackPress[25])(onTrackPress[24], onTrackPress.paths), obj, outer1_20);
  }, items);
  if (null == price) {
    return null;
  } else {
    const colors = tmp6(tmp3[11]).colors;
    map = isPartiallyOwnedBundle ? colors.INTERACTIVE_TEXT_ACTIVE : colors.WHITE;
    str = "text-overlay-light";
    if (isPartiallyOwnedBundle) {
      str = "interactive-text-active";
    }
    const intl = tmp2(tmp3[17]).intl;
    obj = { orbPrice: null, orbIconHook: null };
    obj[0] = price.amount;
    obj[1] = function orbIconHook() {
      return outer1_16(balance(onTrackPress[31]).OrbsIcon, { size: "sm", color: map }, "orbs-icon");
    };
    const formatResult = intl.format(tmp2(tmp3[17]).t.JC15qj, obj);
    const _Array = Array;
    let arr2 = formatResult;
    if (!Array.isArray(formatResult)) {
      const items1 = [formatResult];
      arr2 = items1;
    }
    obj = { style: null, accessibilityLabel: null, children: null };
    obj[0] = tmp.orbsButtonLabel;
    const intl2 = tmp2(tmp3[17]).intl;
    obj1 = { orbPrice: null };
    obj1[0] = price.amount;
    obj[1] = intl2.formatToPlainString(tmp2(tmp3[17]).t.yi41qQ, obj1);
    obj[2] = arr2.map((str) => {
      if (typeof str === "string") {
        const obj = { style: null, variant: "text-md/semibold", color: null, children: null };
        obj[0] = _undefined.orbsButtonText;
        obj[2] = str;
        obj[3] = str;
        let tmp7 = outer1_16(balance(onTrackPress[32]).Text, obj, arg1);
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
        tmp(outer1_9.BUY_WITH_ORBS);
      }
      callback();
    };
    obj3[3] = isPartiallyOwnedBundle;
    let str2 = "primary";
    if (isPartiallyOwnedBundle) {
      str2 = "secondary";
    }
    obj3[5] = str2;
    obj2[1] = callback2(tmp2(tmp3[33]).BaseTextButton, obj3);
    return callback2(analyticsLocations, obj2);
  }
  const tmp2Result = balance(onTrackPress[21]);
  tmp6 = importDefault;
}
function PurchaseDisclaimer(arg0) {
  let buyButtonLabel;
  let product;
  ({ product, buyButtonLabel } = arg0);
  let obj = { style: createCacheKey().disclaimer, variant: "text-xxs/normal", color: "interactive-text-active", children: null };
  let formatResult = product.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
  if (formatResult) {
    const intl = tmp3(1236).intl;
    obj = { buyButtonLabel: null, paidServiceTermURL: null };
    obj[0] = buyButtonLabel;
    obj[1] = constants2.PAID_TERMS;
    formatResult = intl.format(tmp3(1236).t.iIglwJ, obj);
  }
  obj[3] = formatResult;
  return closure_16(Text.Text, obj);
}
({ EXTERNAL_PRODUCT_SKU_IDS: metroImportAll, ShopCtaEnum: c9 } = items);
({ HelpdeskArticles: c10, MarketingURLs: unpackModuleId, UserSettingsSections: closure_12 } = ME);
({ PremiumTypes: closure_14, SubscriptionIntervalTypes: closure_15 } = GuildFeatures);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
const ORB_BADGE_COLLECTED_MODAL = "ORB_BADGE_COLLECTED_MODAL";
const ORB_CHECKOUT_MODAL = "ORB_CHECKOUT_MODAL";
createCacheKey = { container: null, containerFramesEA: null, gradientOverlay: null, purchaseSection: null, disclaimer: null, buttonContainer: null, framesEAContainer: null, orbsButtonLabel: null, orbsButtonText: null };
createCacheKey = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderWidth: 1, borderStyle: "solid", borderColor: require("Themes").colors.BORDER_MUTED };
createCacheKey[2] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
let obj1 = { borderWidth: 1, borderStyle: "solid", borderColor: require("Themes").colors.BORDER_MUTED };
createCacheKey[3] = { gap: require("Themes").space.PX_12 };
createCacheKey[4] = { opacity: 0.75 };
let obj2 = { gap: require("Themes").space.PX_12 };
createCacheKey[5] = { flexDirection: "row", gap: require("Themes").space.PX_12 };
let obj3 = { flexDirection: "row", gap: require("Themes").space.PX_12 };
createCacheKey[6] = { flexDirection: "column", gap: require("Themes").space.PX_8 };
createCacheKey[7] = { flexDirection: "row", alignItems: "center" };
createCacheKey[8] = { flexShrink: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { flexDirection: "column", gap: require("Themes").space.PX_8 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx");

export default function ProductDetailsActionSheetPurchaseSection(onBuy) {
  let analyticsLocations;
  let c2;
  let c3;
  let c4;
  let canUseNow;
  let isApplying;
  let isBuying;
  let isPartiallyOwnedBundle;
  let isPurchased;
  let onTrackPress;
  const product = onBuy.product;
  const require = product;
  ({ analyticsLocations, onTrackPress } = onBuy);
  let dependencyMap;
  let callback;
  c4 = undefined;
  let handleClaim;
  const tmp = createCacheKey();
  const tmp5 = require;
  let obj = AccessibilityAnnouncer;
  const isThemeDarkResult = obj.isThemeDark(onTrackPress(4239)());
  let obj1 = map;
  const token = obj1.useToken(onTrackPress(712).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj2 = useCurrentUser;
  const currentUser = obj2.useCurrentUser();
  let obj3 = getProductPurchaseState;
  const productPurchaseState = obj3.useProductPurchaseState(product);
  ({ isPurchased, isPartiallyOwnedBundle } = productPurchaseState);
  let obj4 = initialize;
  let items = [map];
  const items1 = [product];
  let obj5 = useIsPremiumSubscriber;
  const isPremiumSubscriber = obj5.useIsPremiumSubscriber(TIER_2.TIER_2);
  let obj6 = onTrackPress(3966);
  const canUseShopDiscountsResult = obj6.canUseShopDiscounts(currentUser);
  let obj7 = getItemRecordsFromPurchases;
  const result = obj7.isPremiumCollectiblesProduct(product);
  let obj8 = getItemRecordsFromPurchases;
  const result1 = obj8.isFreeCollectiblesProduct(product);
  let obj9 = getProductOrbPrice;
  const result2 = obj9.isOrbsExclusiveProduct(product);
  let obj10 = index;
  const balance = obj10.useFetchVirtualCurrencyBalance().balance;
  let obj11 = useVirtualCurrencyData;
  const canAfford = obj11.useVirtualCurrencyData(product, canUseShopDiscountsResult).canAfford;
  let obj12 = useHandleUseNow;
  const handleUseNow = obj12.useHandleUseNow({ product, analyticsLocations });
  ({ handleUseNow: c2, handleEditProfile: c3 } = handleUseNow);
  ({ isApplying, canUseNow } = handleUseNow);
  const tmp16 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  obj = { product, analyticsLocations, onBuy: onBuy.onBuy, orderId: null };
  let id;
  const tmp4 = onTrackPress(4239)();
  if (tmp16 != null) {
    id = tmp16.id;
  }
  obj[3] = id;
  const tmp17 = onTrackPress(12168);
  ({ handleBuyNow: c4, isBuying } = onTrackPress(12168)(obj));
  let tmp5Result = tmp5(12169);
  handleClaim = tmp5Result.useHandleClaim({ product }).handleClaim;
  const tmp20 = onTrackPress(12170)({ location: "ProductDetailsActionSheetPurchaseSection", product });
  let tmp25Result = tmp20;
  if (tmp20) {
    tmp25Result = !isPurchased;
  }
  tmp5Result = tmp5(7344);
  const tmp17Result = onTrackPress(12168)(obj);
  const tmp23 = tmp5Result.useIsEligibleForBogoOffer() ? closure_15.MONTH : closure_15.YEAR;
  let canGiftProduct = tmp5(12172).useCanGiftProduct(product);
  let PX_16 = tmp2(1628)().bottom;
  const items2 = [tmp.container, , ];
  let containerFramesEA = tmp25Result;
  if (tmp25Result) {
    containerFramesEA = tmp.containerFramesEA;
  }
  items2[1] = containerFramesEA;
  if (PX_16 == null) {
    PX_16 = tmp2(712).space.PX_16;
  }
  obj = { style: items2, children: null };
  items2[2] = { paddingBottom: PX_16 };
  if (tmp25Result) {
    tmp25Result = !tmp5(501).isAndroid();
    const tmp5Result2 = tmp5(501);
  }
  if (tmp25Result) {
    obj1 = { colors: null, locations: null, start: null, end: null, style: null, pointerEvents: "none" };
    obj1[0] = ["rgba(160, 86, 242, 0.45)", "rgba(22, 26, 138, 0.45)"];
    obj1[1] = [0.0854, 0.7847];
    obj1[2] = { x: 0, y: 0 };
    obj1[3] = { x: 1, y: 1 };
    const items3 = [tmp.gradientOverlay, ];
    obj2 = !isThemeDarkResult;
    let tmp2Result = tmp2(4725);
    if (!isThemeDarkResult) {
      obj2 = { opacity: 0.4 };
    }
    obj3 = { children: null };
    items3[1] = obj2;
    obj1[4] = items3;
    const items4 = [callback2(tmp2Result, obj1), ];
    obj4 = { style: null, preserveAspectRatio: "none", viewBox: "0 0 100 100", pointerEvents: "none", children: null };
    obj4[0] = tmp.gradientOverlay;
    tmp2Result = tmp2(7837);
    obj5 = { children: null };
    obj6 = { id: "frameEAVignette", cx: "50%", cy: "100%", rx: "100%", ry: "100%", fx: "50%", fy: "100%", children: null };
    obj7 = { offset: "60%", stopColor: null, stopOpacity: 1 };
    obj7[1] = token;
    const items5 = [callback2(tmp5(7837).Stop, obj7), ];
    obj8 = { offset: "100%", stopColor: null, stopOpacity: 0 };
    obj8[1] = token;
    items5[1] = callback2(tmp5(7837).Stop, obj8);
    obj6[7] = items5;
    obj5[0] = tmp25(tmp5(7837).RadialGradient, obj6);
    const items6 = [callback2(tmp5(7837).Defs, obj5), callback2(tmp5(7837).Rect, { x: "0", y: "0", width: "100", height: "100", fill: "url(#frameEAVignette)" })];
    obj4[4] = items6;
    items4[1] = tmp25(tmp2Result, obj4);
    obj3[0] = items4;
    tmp25Result = tmp25(closure_18, obj3);
    const tmp27 = closure_18;
  }
  const items7 = [tmp25Result, ];
  if (isPurchased) {
    tmp25Result = product.type !== tmp5(1949).CollectiblesItemType.EXTERNAL_SKU;
    if (tmp25Result) {
      obj9 = { style: null, children: null };
      obj9[0] = tmp.buttonContainer;
      if (canUseNow) {
        obj10 = { loading: null, text: null, onPress: null, size: "lg", grow: true };
        obj10[0] = isApplying;
        const intl13 = tmp5(1236).intl;
        obj10[1] = intl13.string(tmp5(1236).t.MAS7uK);
        obj10[2] = function onPress() {
          if (onTrackPress != null) {
            tmp(outer1_9.USE_NOW);
          }
          _undefined();
        };
        obj11 = obj10;
      } else {
        obj11 = { text: null, onPress: null, size: "lg", grow: true };
        const intl12 = tmp5(1236).intl;
        obj11[0] = intl12.string(tmp5(1236).t["2p2aYz"]);
        obj11[1] = function onPress() {
          if (onTrackPress != null) {
            tmp(outer1_9.EDIT_PROFILE);
          }
          _undefined2();
        };
      }
      const items8 = [callback2(tmp5(4714).Button, obj11), ];
      if (canGiftProduct) {
        obj12 = { product: null, analyticsLocations: null, onTrackPress: null };
        obj12[0] = product;
        obj12[1] = analyticsLocations;
        obj12[2] = onTrackPress;
        canGiftProduct = tmp57(GiftButton, obj12);
      }
      items8[1] = canGiftProduct;
      obj9[1] = items8;
      tmp25Result = tmp25(tmp26, obj9);
    }
    let tmp25Result2 = tmp25Result;
  } else if (tmp20) {
    const tmp5Result3 = tmp5(501);
    const t = tmp5(1236).t;
    const isAndroidResult = tmp5(501).isAndroid();
    const obj13 = { value: null, children: null };
    const items9 = [];
    const tmp49 = tmp5(501).isAndroid() ? t.COObWR : t["7wpqfj"];
    items9[HermesBuiltin.arraySpread(analyticsLocations, 0)] = tmp2(5748).PROFILE_FRAMES_EA_MARKETING;
    obj13[0] = items9;
    const obj14 = { style: null, children: null };
    obj14[0] = tmp.framesEAContainer;
    const obj15 = { variant: "text-xs/semibold", color: "text-strong", children: null };
    const intl8 = tmp5(1236).intl;
    const obj16 = { articleURL: null };
    const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
    obj16[0] = tmp2(1993).getArticleURL(constants.SHOP_FRAMES_EARLY_ACCESS);
    obj15[2] = intl8.format(tmp5(1236).t["3cglst"], obj16);
    const items10 = [callback2(tmp5(4299).Text, obj15), , ];
    const obj17 = { onTrackPress: null, text: null };
    obj17[0] = onTrackPress;
    const intl9 = tmp5(1236).intl;
    obj17[1] = intl9.string(tmp5(1236).t["9wfL34"]);
    items10[1] = callback2(tmp5(12173).UnlockWithNitroButton, obj17);
    const obj18 = { variant: "text-xxs/normal", children: null };
    const intl10 = tmp5(1236).intl;
    const obj19 = { paidURL: null, interval: null, ctaText: null };
    obj19[0] = constants2.PAID_TERMS;
    const tmp2Result1 = tmp2(1993);
    obj19[1] = tmp2(3966).getIntervalStringAsNoun(tmp23);
    const intl11 = tmp5(1236).intl;
    obj19[2] = intl11.string(tmp5(1236).t["9wfL34"]);
    obj18[1] = intl10.format(tmp49, obj19);
    items10[2] = callback2(tmp5(4299).Text, obj18);
    obj14[1] = items10;
    obj13[1] = tmp25(tmp26, obj14);
    tmp25Result2 = callback2(tmp5(5728).AnalyticsLocationProvider, obj13);
    const tmp2Result2 = tmp2(3966);
  } else {
    if (result) {
      if (!isPremiumSubscriber) {
        if (!result1) {
          const obj20 = { onTrackPress: null };
          obj20[0] = onTrackPress;
          tmp25Result2 = callback2(tmp5(12173).UnlockWithNitroButton, obj20);
        }
      }
    }
    if (!result1) {
      if (product.type === tmp5(1949).CollectiblesItemType.BUNDLE) {
        const intl6 = tmp5(1236).intl;
        let stringResult = intl6.string(tmp5(1236).t.V1AWw0);
      } else if (product.type === tmp5(1949).CollectiblesItemType.PROFILE_EFFECT) {
        const intl5 = tmp5(1236).intl;
        stringResult = intl5.string(tmp5(1236).t.kAeDcK);
      } else if (product.type === tmp5(1949).CollectiblesItemType.NAMEPLATE) {
        const intl4 = tmp5(1236).intl;
        stringResult = intl4.string(tmp5(1236).t.H3vhqU);
      } else if (product.type === tmp5(1949).CollectiblesItemType.AVATAR_DECORATION) {
        const intl3 = tmp5(1236).intl;
        stringResult = intl3.string(tmp5(1236).t.AQ0Veg);
      } else if (product.type === tmp5(1949).CollectiblesItemType.PROFILE_FRAME) {
        const intl2 = tmp5(1236).intl;
        stringResult = intl2.string(tmp5(1236).t.BlSW1e);
      } else {
        const intl = tmp5(1236).intl;
        stringResult = intl.string(tmp5(1236).t.AQ0Veg);
      }
      const obj21 = { style: null, children: null };
      obj21[0] = tmp.purchaseSection;
      let tmp34 = canAfford;
      if (canAfford) {
        const obj22 = { product: null, hasShopDiscount: null, balance: null, onTrackPress: null };
        obj22[0] = product;
        obj22[1] = canUseShopDiscountsResult;
        obj22[2] = balance;
        obj22[3] = onTrackPress;
        tmp34 = callback2(VCButton, obj22);
      }
      const items11 = [tmp34, , , ];
      let tmp25Result1 = !result2;
      if (!result2) {
        const obj23 = { style: null, children: null };
        obj23[0] = tmp.buttonContainer;
        const obj24 = { loading: null, text: null, onPress: null, disabled: null, variant: null, size: "lg", grow: true };
        obj24[0] = isBuying;
        obj24[1] = stringResult;
        obj24[2] = function onPress() {
          if (onTrackPress != null) {
            tmp(outer1_9.BUY_WITH_FIAT);
          }
          _undefined3();
        };
        obj24[3] = isPartiallyOwnedBundle;
        let str = "primary";
        let str2 = "primary";
        if (canAfford) {
          str2 = "secondary";
        }
        obj24[4] = str2;
        const items12 = [callback2(tmp5(4714).Button, obj24), ];
        let tmp38Result = canGiftProduct;
        if (canGiftProduct) {
          const obj25 = { product: null, analyticsLocations: null, variant: null, onTrackPress: null };
          obj25[0] = product;
          obj25[1] = analyticsLocations;
          if (canAfford) {
            str = "secondary";
          }
          obj25[2] = str;
          obj25[3] = onTrackPress;
          tmp38Result = tmp38(GiftButton, obj25);
          const tmp40 = GiftButton;
        }
        items12[1] = tmp38Result;
        obj23[1] = items12;
        tmp25Result1 = tmp25(tmp26, obj23);
      }
      items11[1] = tmp25Result1;
      let tmp41 = !canAfford;
      if (!canAfford) {
        const obj26 = { product: null, hasShopDiscount: null, balance: null, onTrackPress: null };
        obj26[0] = product;
        obj26[1] = canUseShopDiscountsResult;
        obj26[2] = balance;
        obj26[3] = onTrackPress;
        tmp41 = callback2(VCButton, obj26);
      }
      items11[2] = tmp41;
      let tmp44 = !result2;
      if (!result2) {
        const obj27 = { product: null, buyButtonLabel: null };
        obj27[0] = product;
        obj27[1] = stringResult;
        tmp44 = callback2(PurchaseDisclaimer, obj27);
      }
      items11[3] = tmp44;
      obj21[1] = items11;
      tmp25Result2 = tmp25(tmp26, obj21);
    }
    const obj28 = { text: null, loading: null, onPress: null, size: "lg", grow: true };
    const intl7 = tmp5(1236).intl;
    obj28[0] = intl7.string(tmp5(1236).t.zp6caO);
    obj28[1] = callback(obj4.useStateFromStoresArray(items, () => {
      const items = [outer1_7.isClaiming === product.skuId];
      return items;
    }, items1), 1)[0];
    obj28[2] = function onPress() {
      if (onTrackPress != null) {
        tmp(outer1_9.ADD_TO_COLLECTION);
      }
      handleClaim();
    };
    tmp25Result2 = callback2(tmp5(4714).Button, obj28);
  }
  items7[1] = tmp25Result2;
  obj[1] = items7;
  return closure_17(handleClaim, obj);
};