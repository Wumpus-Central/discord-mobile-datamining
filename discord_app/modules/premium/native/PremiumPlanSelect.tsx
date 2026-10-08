// discord_app/modules/premium/native/PremiumPlanSelect.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import utils_PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import PremiumSubscription from "../PremiumSubscription.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import LinearGradientDefault from "../../../../_runtime/05387_LinearGradient.js";
import actions_BillingActionCreators from "../../billing/actions/BillingActionCreators.tsx";
import TextStylesDefault from "../../rebrand/native/TextStyles.tsx";
import SubscriptionPlanActionCreators from "../../../actions/SubscriptionPlanActionCreators.tsx";
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils.tsx";
import ProductIds from "ProductIds.android.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils.tsx";
import PaymentFlowStartedTriggerPoint from "../../experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx";
import openPremiumPlanWhatYouLoseActionSheetDefault from "openPremiumPlanWhatYouLoseActionSheet.tsx";
import PremiumPlanWhatYouLoseActionSheet from "PremiumPlanWhatYouLoseActionSheet.tsx";
import TreasureChestBannerSpotIllustration from "../../../design/components/mana-assets/native/generated/TreasureChestBannerSpotIllustration.native.tsx";
import _modDef13670 from "../../../../_runtime/metro/13670__.js";
import _modDef13671 from "../../../../_runtime/metro/13671__.js";
import _modDef13672 from "../../../../_runtime/metro/13672__.js";
import _modDef13673 from "../../../../_runtime/metro/13673__.js";
import _modDef13674 from "../../../../_runtime/metro/13674__.js";
import _modDef13675 from "../../../../_runtime/metro/13675__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import SubscriptionPlanStore from "../../../stores/billing/SubscriptionPlanStore.tsx";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";

const require = globalThis.__r;
const PremiumUtilsDefault = PremiumUtils;

require = fn;
function getPlanDescription(premiumTier) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (null == premiumTier.premiumTier) {
    const intl = util.intl;
    const obj2 = { numSubscriptions: premiumTier.numPremiumGuild };
    let formatToPlainStringResult = intl.formatToPlainString(util.t.gDsyB9, obj2);
  } else if (0 === premiumTier.numPremiumGuild) {
    formatToPlainStringResult = PremiumUtils.getPremiumTypeDisplayName(premiumTier.premiumTier);
  } else {
    const intl2 = util.intl;
    const formatToPlainString = intl2.formatToPlainString;
    if (flag) {
      const obj4 = { numSubscriptions: premiumTier.numPremiumGuild };
      formatToPlainStringResult = formatToPlainString(util.t.gDsyB9, obj4);
    } else {
      if (premiumTier.premiumTier === constants2.TIER_1) {
        let u6dBsN = util.t.sexoHq;
      } else {
        u6dBsN = util.t.u6dBsN;
      }
      const obj = { num: premiumTier.numPremiumGuild };
      formatToPlainStringResult = formatToPlainString(u6dBsN, obj);
    }
  }
  return formatToPlainStringResult;
}
function PlanSection(showBoostOnlyLabels) {
  ({ plans, shouldShowModernBoostFlow } = showBoostOnlyLabels);
  if (shouldShowModernBoostFlow === undefined) {
    shouldShowModernBoostFlow = false;
  }
  let flag = showBoostOnlyLabels.showBoostOnlyLabels;
  if (flag === undefined) {
    flag = false;
  }
  ({ recommendedBoostCount: dependencyMap, isBoostPurchaseFlow: asyncGeneratorStep, purchase: _slicedToArray, analyticsLoadId: noop, trackNewPaymentFlow: closure_6, trackPaymentFlowStep: closure_7, subscription: closure_8, currentPaymentGatewayPlanId: useNativeCheckoutStore, shouldRemoveYearlyUpsell: GuildStore } = showBoostOnlyLabels);
  c12 = undefined;
  const tmp = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  closure_11 = tmp;
  let isIOSResult = shouldShowModernBoostFlow(1382).isIOS();
  if (isIOSResult) {
    isIOSResult = null != tmp;
  }
  c12 = isIOSResult;
  const mapped = plans.map((plan) => __initData4(closure_39, {
    plan,
    subscription,
    shouldShowModernBoostFlow,
    showBoostOnlyLabels: flag,
    recommendedBoostCount,
    isBoostPurchaseFlow,
    analyticsLoadId,
    purchase(productId) {
      closure_0 = productId;
      const toggledIntervalProduct = shouldShowModernBoostFlow(recommendedBoostCount[48]).getToggledIntervalProduct(productId);
      let tmp5 = null;
      if (closure_12) {
        tmp5 = null;
        if (null != toggledIntervalProduct) {
          availablePlanForItems = undefined;
          if (availablePlanForItems != null) {
            availablePlanForItems = availablePlanForItems.getAvailablePlanForItems(shouldShowModernBoostFlow(recommendedBoostCount[48]).getSubscriptionItemsForProduct(toggledIntervalProduct));
            const tmpResult = shouldShowModernBoostFlow(recommendedBoostCount[48]);
          }
          if (availablePlanForItems == null) {
            availablePlanForItems = null;
          }
          tmp5 = availablePlanForItems;
        }
      }
      availablePlanForItems = tmp5;
      if (closure_12) {
        let tmp7 = null != tmp5;
      } else {
        tmp7 = null != toggledIntervalProduct;
        if (tmp7) {
          tmp7 = null != product.getProduct(toggledIntervalProduct);
        }
      }
      let obj = shouldShowModernBoostFlow(recommendedBoostCount[48]);
      shouldShowModernBoostFlow(recommendedBoostCount[48]);
      if (null != toggledIntervalProduct) {
        if (tmp7) {
          if (!closure_10) {
            if (tmpResult3.getPremiumBundledItemsFromProductId(productId).interval !== constants.YEAR) {
              if (!tmp10) {
                let obj3 = { fromStep: shouldShowModernBoostFlow(recommendedBoostCount[49]).PaymentFlowStep.PLAN_SELECT, toStep: shouldShowModernBoostFlow(recommendedBoostCount[49]).PaymentFlowStep.YEARLY_UPSELL, productId };
                closure_7(obj3);
                let obj4 = {
                  importer() {
                              return shouldShowModernBoostFlow(recommendedBoostCount[52])(recommendedBoostCount[51], recommendedBoostCount.paths).then((result) => {
                                closure_0 = result.default;
                                return () => { ... };
                              });
                            },
                  hideActionSheet: true,
                  isDismissable: true
                };
                flag(recommendedBoostCount[50]).openLazy(obj4);
                let obj6 = flag(recommendedBoostCount[50]);
              }
            }
          }
        }
      }
      tmpResult3 = shouldShowModernBoostFlow(recommendedBoostCount[48]);
      closure_7({ fromStep: shouldShowModernBoostFlow(recommendedBoostCount[49]).PaymentFlowStep.PLAN_SELECT, toStep: shouldShowModernBoostFlow(recommendedBoostCount[49]).PaymentFlowStep.EXTERNAL_PAYMENT, productId });
      return closure_4(productId, closure_5);
    }
  }, plan.productId));
  if (shouldShowModernBoostFlow) {
    let obj2 = { title: showBoostOnlyLabels.label, hasIcons: true, children: mapped };
    let tmp7Result = closure_31(shouldShowModernBoostFlow(6267).TableRowGroup, obj2);
  } else {
    let obj3 = { children: mapped };
    tmp7Result = closure_31(closure_7, obj3);
  }
  return tmp7Result;
}
function withCurrentPlanAlternative(plans, productIdFromSubscription, productIdFromSubscription2) {
  if (null != productIdFromSubscription) {
    if (obj3.isValidBundleProductId(productIdFromSubscription)) {
      if (null == productIdFromSubscription2) {
        let toggledIntervalProduct = tmp7(7114).getToggledIntervalProduct(productIdFromSubscription);
        let tmp7Result = tmp7(7114);
      } else {
        toggledIntervalProduct = productIdFromSubscription;
      }
      let tmp3 = plans;
      if (null != toggledIntervalProduct) {
        tmp3 = plans;
        if (!plans.some((productId) => {
          let tmp2 = null == toggledIntervalProduct;
          if (!tmp2) {
            tmp2 = !PremiumBundledPlansUtils.isValidBundleProductId(toggledIntervalProduct);
          }
          let tmp5 = !tmp2;
          if (!tmp2) {
            let result = PremiumBundledPlansUtils.productsHaveSamePerks(productId.productId, toggledIntervalProduct);
            if (result) {
              result = productId.interval === PremiumBundledPlansUtils.getPremiumBundledItemsFromProductId(toggledIntervalProduct).interval;
              const tmp7Result = PremiumBundledPlansUtils;
            }
            tmp5 = result;
          }
          return tmp5;
        })) {
          items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(plans, 0);
          items[arraySpreadResult] = tmp7(7114).getPremiumBundledItemsFromProductId(toggledIntervalProduct);
          tmp3 = items;
          const tmp7Result2 = tmp7(7114);
        }
      }
      return tmp3;
    }
    obj3 = toggledIntervalProduct(7114);
  }
  return plans;
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
let useNativeCheckoutStore = fn(7132).useNativeCheckoutStore;
const PremiumPlanSelectStore = fn(13667);
({ setIsPurchasing: closure_14, usePremiumPlanSelectStore: closure_15 } = PremiumPlanSelectStore);
const PremiumConstants = fn(1391);
({ GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_16, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_17, PRICE_PLACEHOLDER: closure_18, PremiumSubscriptionSKUs: closure_19, PremiumTypes: closure_20, SubscriptionIntervalTypes: closure_21, SubscriptionPlans: closure_22 } = PremiumConstants);
const Constants = fn(1085);
({ AnalyticEvents: closure_23, AnalyticsObjects: closure_24, AnalyticsObjectTypes: closure_25, Fonts, HorizontalGradient: closure_26, PaymentGateways: closure_27, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
const ColorConstants = fn(7140);
({ getPremiumGradientColor: closure_28, Gradients: closure_29 } = ColorConstants);
const ItemPurchaseType = fn(5069).ItemPurchaseType;
const jsxProd = fn(21);
({ jsx: items, jsxs: closure_32, Fragment: closure_33 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { header: null, row: null, rowDisabled: null, imgWumpusNitro: null, imgBoost: null, imgWumpusNitroBoost: null, imgWumpusNitroClassic: null, imgWumpusNitroClassicBoost: null, imgWumpusNitroTier0: null, rowText: null, rowPlanDescription: null, rowPlanDescriptionSubtext: null, rowPrice: null, purchasingSpinner: null, container: null, currentPlanGradient: null, currentPlanRow: null, loadingSpinnerContainer: null, offPlatformSubscriptionMessage: null, premiumHeaderLabel: null, boostContainer: null, boostRowIcon: null, nitroBanner: null, nitroBannerText: null, recommendedText: null };
let obj3 = {};
let merged = Object.assign(TextStylesDefault(Fonts.DISPLAY_EXTRABOLD, undefined, 24));
obj3.marginTop = 16;
obj3.color = fn(5974).DARK_WHITE_500_LIGHT_BLACK_500;
obj2.header = obj3;
obj2.row = { marginTop: 7, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignItems: "center", paddingVertical: 12, paddingHorizontal: 12, flexWrap: "wrap", backgroundColor: fn(5974).DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
obj2.rowDisabled = { opacity: 0.5 };
obj2.imgWumpusNitro = { height: 40, width: 40 };
obj2.imgBoost = { height: 40, width: 40 };
obj2.imgWumpusNitroBoost = { width: 32, height: 32 };
obj2.imgWumpusNitroClassic = { width: 40, height: 40 };
obj2.imgWumpusNitroClassicBoost = { width: 32, height: 32 };
obj2.imgWumpusNitroTier0 = { width: 40, height: 40 };
let obj4 = { marginTop: 7, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignItems: "center", paddingVertical: 12, paddingHorizontal: 12, flexWrap: "wrap", backgroundColor: fn(5974).DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
obj2.rowText = { fontSize: 16, color: fn(5974).DARK_WHITE_500_LIGHT_BLACK_500 };
obj2.rowPlanDescription = { marginLeft: 12, fontFamily: Fonts.PRIMARY_SEMIBOLD, lineHeight: 20 };
obj2.rowPlanDescriptionSubtext = { fontSize: 12, marginLeft: 5, fontFamily: Fonts.PRIMARY_MEDIUM, fontWeight: "400" };
obj2.rowPrice = { marginLeft: "auto" };
obj2.purchasingSpinner = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, alignItems: "center", justifyContent: "center" };
obj2.container = { marginHorizontal: 14.5, paddingBottom: 10 };
let obj5 = { fontSize: 16, color: fn(5974).DARK_WHITE_500_LIGHT_BLACK_500 };
obj2.currentPlanGradient = { marginTop: 20, borderRadius: nativeDefault.radii.sm };
obj2.currentPlanRow = { marginTop: 0.5, marginRight: 0.5, marginLeft: 0.5, marginBottom: 0.5 };
obj2.loadingSpinnerContainer = { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" };
obj2.offPlatformSubscriptionMessage = { lineHeight: 20, marginTop: 40, margin: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj2.premiumHeaderLabel = { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, marginTop: 8 };
let obj6 = { marginTop: 20, borderRadius: nativeDefault.radii.sm };
obj2.boostContainer = { rowGap: nativeDefault.space.PX_24 };
obj2.boostRowIcon = { width: 32, height: 32 };
let obj7 = { rowGap: nativeDefault.space.PX_24 };
obj2.nitroBanner = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj2.nitroBannerText = { textAlign: "center" };
let obj8 = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj2.recommendedText = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
let closure_34 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? (function BoostPurchaseNitroBanner() {
  const cResult = c.c(13);
  const tmp4 = closure_34();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = __initData4(TreasureChestBannerSpotIllustration.TreasureChestBannerSpotIllustration, { width: 117, height: 93, accessible: false });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const obj2 = { discount: null };
    const obj3 = { variant: "text-md/semibold", color: "text-feedback-positive", children: null };
    const intl2 = util.intl;
    const obj4 = { percentageOff };
    obj3.children = intl2.format(util.t.RmVM19, obj4);
    obj2.discount = __initData4(Text_Text.Text, obj3, "discount");
    const formatResult = intl.format(util.t.jbrHpT, obj2);
    cResult[1] = formatResult;
    let tmp8 = formatResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp4.nitroBannerText) {
    const obj5 = { variant: "text-md/semibold", color: "text-default", style: tmp4.nitroBannerText, children: tmp8 };
    const tmp14 = __initData4(Text_Text.Text, obj5);
    cResult[2] = tmp4.nitroBannerText;
    cResult[3] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const obj6 = { boostCount };
    const formatResult1 = intl3.format(util.t.HYpETY, obj6);
    cResult[4] = formatResult1;
    let tmp15 = formatResult1;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== tmp4.nitroBannerText) {
    const obj7 = { variant: "text-sm/medium", color: "text-muted", style: tmp4.nitroBannerText, children: tmp15 };
    const tmp20 = __initData4(Text_Text.Text, obj7);
    cResult[5] = tmp4.nitroBannerText;
    cResult[6] = tmp20;
    let tmp18 = tmp20;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] === tmp12) {
    if (cResult[8] === tmp18) {
      let tmp21 = cResult[9];
    }
    if (cResult[10] === tmp4.nitroBanner) {
      if (cResult[11] === tmp21) {
        let tmp23 = cResult[12];
      }
      return tmp23;
    }
    const obj8 = { align: "center", spacing: nativeDefault.space.PX_12, style: tmp4.nitroBanner, children: null };
    items = [first, tmp21];
    obj8.children = items;
    const tmp26 = __initData5(Stack_Stack.Stack, obj8);
    cResult[10] = tmp4.nitroBanner;
    cResult[11] = tmp21;
    cResult[12] = tmp26;
    tmp23 = tmp26;
  }
  const obj9 = { align: "center", spacing: nativeDefault.space.PX_4, children: null };
  const items1 = [tmp12, tmp18];
  obj9.children = items1;
  const tmp22 = __initData5(Stack_Stack.Stack, obj9);
  cResult[7] = tmp12;
  cResult[8] = tmp18;
  cResult[9] = tmp22;
  tmp21 = tmp22;
}) : (function BoostPurchaseNitroBanner() {
  const tmp = closure_34();
  const obj = { align: "center", spacing: nativeDefault.space.PX_12, style: tmp.nitroBanner, children: null };
  items = [__initData4(TreasureChestBannerSpotIllustration.TreasureChestBannerSpotIllustration, { width: 117, height: 93, accessible: false }), ];
  const obj2 = { align: "center", spacing: nativeDefault.space.PX_4, children: null };
  const obj3 = { variant: "text-md/semibold", color: "text-default", style: tmp.nitroBannerText, children: null };
  const intl = util.intl;
  const obj4 = { discount: null };
  const obj5 = { variant: "text-md/semibold", color: "text-feedback-positive", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.format(util.t.RmVM19, { percentageOff });
  obj4.discount = __initData4(Text_Text.Text, obj5, "discount");
  obj3.children = intl.format(util.t.jbrHpT, obj4);
  const items1 = [__initData4(Text_Text.Text, obj3), ];
  const obj7 = { variant: "text-sm/medium", color: "text-muted", style: tmp.nitroBannerText, children: null };
  const intl3 = util.intl;
  obj7.children = intl3.format(util.t.HYpETY, { boostCount });
  items1[1] = __initData4(Text_Text.Text, obj7);
  obj2.children = items1;
  items[1] = __initData5(Stack_Stack.Stack, obj2);
  obj.children = items;
  return __initData5(Stack_Stack.Stack, obj);
});
let closure_37 = { [_modDef13673]: "imgWumpusNitro", [_modDef13675]: "imgWumpusNitroBoost", [_modDef13672]: "imgWumpusNitroClassic", [_modDef13674]: "imgWumpusNitroClassicBoost", [_modDef13671]: "imgWumpusNitroTier0", [_modDef13670]: "imgBoost" };
ReactCompilerGating = fn(558);
let closure_38 = ReactCompilerGating.isReactCompilerEnabled() ? (function BoostDeltaPriceTrailing(arg0) {
  const cResult = c.c(8);
  ({ price, interval } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
    const tmp7 = __initData4(NitroWheelIcon.NitroWheelIcon, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === interval) {
    if (cResult[2] === price) {
      if (cResult[6] !== cResult[3]) {
        const obj3 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_4, children: null };
        items = [first, ];
        const obj4 = { variant: "text-sm/medium", color: "text-muted", children: tmp8 };
        items[1] = __initData4(Text_Text.Text, obj4);
        obj3.children = items;
        const tmp18 = __initData5(Stack_Stack.Stack, obj3);
        cResult[6] = tmp8;
        cResult[7] = tmp18;
        let tmp14 = tmp18;
      } else {
        tmp14 = cResult[7];
      }
      return tmp14;
    }
  }
  if (cResult[4] !== price) {
    const obj5 = { variant: "text-sm/semibold", color: "text-feedback-positive", children: price };
    const tmp11 = __initData4(Text_Text.Text, obj5, "price");
    cResult[4] = price;
    cResult[5] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[5];
  }
  const intl = util.intl;
  if (interval === constants.MONTH) {
    let AbOLNu = util.t.AbOLNu;
  } else {
    AbOLNu = util.t["rS8FA+"];
  }
  cResult[1] = interval;
  cResult[2] = price;
  cResult[3] = intl.format(AbOLNu, { price: tmp9 });
  const formatResult = intl.format(AbOLNu, { price: tmp9 });
}) : (function BoostDeltaPriceTrailing(arg0) {
  ({ price, interval } = arg0);
  const obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_4, children: null };
  items = [__initData4(NitroWheelIcon.NitroWheelIcon, { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE }), ];
  const intl = util.intl;
  if (interval === constants.MONTH) {
    let AbOLNu = util.t.AbOLNu;
  } else {
    AbOLNu = util.t["rS8FA+"];
  }
  const obj3 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const obj2 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
  obj3.children = intl.format(AbOLNu, { price: __initData4(Text_Text.Text, { variant: "text-sm/semibold", color: "text-feedback-positive", children: price }, "price") });
  items[1] = __initData4(Text_Text.Text, obj3);
  obj.children = items;
  return __initData5(Stack_Stack.Stack, obj);
});
ReactCompilerGating = fn(558);
let closure_39 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanRow(plan) {
  const cResult = plan(subscription[20]).c(96);
  plan = plan.plan;
  const purchase = plan.purchase;
  ({ style, subscription } = plan);
  ({ disabled, interactive, hasBackground, shouldShowModernBoostFlow, showBoostOnlyLabels, recommendedBoostCount, isBoostPurchaseFlow, analyticsLoadId } = plan);
  _slicedToArray = undefined !== isBoostPurchaseFlow && isBoostPurchaseFlow;
  const tmp6 = closure_34();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isPurchasing) {
      return isPurchasing.isPurchasing;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  closure_15(first);
  if (cResult[1] !== plan.productId) {
    class U {
      constructor(arg0) {
        return plan.purchasingProductId === plan.productId;
      }
    }
    cResult[1] = plan.productId;
    cResult[2] = U;
  } else {
    class U {
      constructor(arg0) {
        return plan.purchasingProductId === plan.productId;
      }
    }
  }
  closure_15(U);
  let obj = plan(subscription[20]);
  const tmp4 = undefined !== shouldShowModernBoostFlow && shouldShowModernBoostFlow;
  const token = plan(subscription[33]).useToken(purchase(subscription[18]).colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor(arg0) {
        return plan.purchasingProductId === plan.productId;
      }
    }
    items = [IAPStore];
    cResult[3] = items;
    let tmp14 = items;
  } else {
    class U {
      constructor(arg0) {
        return plan.purchasingProductId === plan.productId;
      }
    }
  }
  if (cResult[4] !== plan.productId) {
    class X {
      constructor() {
        items = [, ];
        items[0] = closure_13.getProduct(plan.productId);
        items[1] = closure_13.isBusy();
        return items;
      }
    }
    cResult[4] = plan.productId;
    cResult[5] = X;
  } else {
    class X {
      constructor() {
        items = [, ];
        items[0] = closure_13.getProduct(plan.productId);
        items[1] = closure_13.isBusy();
        return items;
      }
    }
  }
  const tmp12 = purchase;
  const tmpResult = plan(subscription[33]);
  const tmpResult4 = plan(subscription[34]);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class Q {
      constructor(arg0) {
        tmp = plan.isPatchOrderLoading || plan.isCreateOrderLoading;
        return tmp;
      }
    }
    cResult[6] = Q;
  } else {
    class Q {
      constructor(arg0) {
        tmp = plan.isPatchOrderLoading || plan.isCreateOrderLoading;
        return tmp;
      }
    }
  }
  useNativeCheckoutStore(Q);
  const tmp16 = _slicedToArray(plan(subscription[34]).useStateFromStoresArray(tmp14, X), 2);
  const premiumTier2DeltaPriceString = plan(subscription[35]).usePremiumTier2DeltaPriceString(plan, subscription, tmp16[0], tmp4);
  plan(subscription[36]);
  let interval = premiumTier2DeltaPriceString;
  if (premiumTier2DeltaPriceString == null) {
    class Q {
      constructor(arg0) {
        tmp = plan.isPatchOrderLoading || plan.isCreateOrderLoading;
        return tmp;
      }
    }
  }
  if (interval == null) {
    class Q {
      constructor(arg0) {
        tmp = plan.isPatchOrderLoading || plan.isCreateOrderLoading;
        return tmp;
      }
    }
  }
  let tmp22 = plan.premiumTier === closure_20.TIER_2;
  tmp12(subscription[37])();
  if (tmp22) {
    class Q {
      constructor(arg0) {
        tmp = plan.isPatchOrderLoading || plan.isCreateOrderLoading;
        return tmp;
      }
    }
    tmp22 = 0 === plan.numPremiumGuild;
  }
  if (cResult[7] === tmp22) {
    class Q {
      constructor(arg0) {
        tmp = plan.isPatchOrderLoading || plan.isCreateOrderLoading;
        return tmp;
      }
    }
    if (cResult[10] !== plan) {
      class Q {
        constructor(arg0) {
          tmp = plan.isPatchOrderLoading || plan.isCreateOrderLoading;
          return tmp;
        }
      }
      if (!tmp26) {
        class Q {
          constructor(arg0) {
            tmp = plan.isPatchOrderLoading || plan.isCreateOrderLoading;
            return tmp;
          }
        }
      }
      cResult[10] = plan;
      cResult[11] = tmp26;
    } else {
      class Q {
        constructor(arg0) {
          tmp = plan.isPatchOrderLoading || plan.isCreateOrderLoading;
          return tmp;
        }
      }
    }
    if (cResult[12] !== plan) {
      class Q {
        constructor(arg0) {
          tmp = plan.isPatchOrderLoading || plan.isCreateOrderLoading;
          return tmp;
        }
      }
      cResult[12] = plan;
      cResult[13] = tmp27;
    } else {
      class Q {
        constructor(arg0) {
          tmp = plan.isPatchOrderLoading || plan.isCreateOrderLoading;
          return tmp;
        }
      }
      if (cResult[14] === interval) {
        class Q {
          constructor(arg0) {
            tmp = plan.isPatchOrderLoading || plan.isCreateOrderLoading;
            return tmp;
          }
        }
      }
      const intl2 = tmp(subscription[22]).intl;
      if (plan.interval === constants.MONTH) {
        class Q {
          constructor(arg0) {
            tmp = plan.isPatchOrderLoading || plan.isCreateOrderLoading;
            return tmp;
          }
        }
      } else {
        class Q {
          constructor(arg0) {
            tmp = plan.isPatchOrderLoading || plan.isCreateOrderLoading;
            return tmp;
          }
        }
      }
      let obj2 = { price: interval };
      const formatToPlainStringResult = intl2.formatToPlainString(tmp30, obj2);
      cResult[14] = interval;
      interval = plan.interval;
      cResult[15] = interval;
      cResult[16] = formatToPlainStringResult;
    }
  }
  let tmp23 = null;
  if (tmp22) {
    class Q {
      constructor(arg0) {
        tmp = plan.isPatchOrderLoading || plan.isCreateOrderLoading;
        return tmp;
      }
    }
    let obj3 = { style: null, children: null };
    const items1 = [, ];
    ({ rowText: arr2[0], rowPlanDescriptionSubtext: arr2[1] } = tmp6);
    obj3.style = items1;
    const intl = tmp(subscription[22]).intl;
    const obj4 = { num };
    obj3.children = intl.format(tmp(subscription[22]).t.he52LA, obj4);
    tmp23 = closure_31(tmp(subscription[38]).LegacyText, obj3);
  }
  cResult[7] = tmp22;
  cResult[8] = tmp6;
  cResult[9] = tmp23;
  const tmpResult5 = plan(subscription[35]);
}) : (function PlanRow(plan) {
  plan = plan.plan;
  ({ purchase: importDefault, subscription } = plan);
  let flag = plan.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = plan.interactive;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = plan.hasBackground;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = plan.shouldShowModernBoostFlow;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = plan.showBoostOnlyLabels;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let prop = plan.recommendedBoostCount;
  if (prop === undefined) {
    prop = null;
  }
  let flag6 = plan.isBoostPurchaseFlow;
  if (flag6 === undefined) {
    flag6 = false;
  }
  const analyticsLoadId = plan.analyticsLoadId;
  let premiumTypeFromSubscription;
  flag = undefined;
  let is_recommended;
  const tmp2 = closure_34();
  const tmp4 = closure_15((purchasingProductId) => purchasingProductId.purchasingProductId === plan.productId);
  const tmp3 = closure_15((isPurchasing) => isPurchasing.isPurchasing);
  const token = plan(subscription[33]).useToken(require("native").colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND);
  let obj = plan(subscription[33]);
  items = [IAPStore];
  const tmp9 = flag6(plan(subscription[34]).useStateFromStoresArray(items, () => {
    items = [IAPStore.getProduct(plan.productId), IAPStore.isBusy()];
    return items;
  }), 2);
  const first = tmp9[0];
  let obj2 = plan(subscription[34]);
  const tmp11 = useNativeCheckoutStore((isPatchOrderLoading) => isPatchOrderLoading.isPatchOrderLoading || isPatchOrderLoading.isCreateOrderLoading);
  const premiumTier2DeltaPriceString = plan(subscription[35]).usePremiumTier2DeltaPriceString(plan, subscription, first, flag4);
  let obj3 = plan(subscription[35]);
  const checkoutPlanPriceString = plan(subscription[36]).useCheckoutPlanPriceString(plan.productId, first);
  let tmp16 = plan.premiumTier === closure_20.TIER_2;
  const obj4 = plan(subscription[36]);
  if (tmp16) {
    tmp16 = 0 === plan.numPremiumGuild;
  }
  let tmp17 = null;
  if (tmp16) {
    const obj5 = { style: null, children: null };
    const items1 = [, ];
    ({ rowText: arr2[0], rowPlanDescriptionSubtext: arr2[1] } = tmp2);
    obj5.style = items1;
    const intl = tmp5(subscription[22]).intl;
    const obj6 = { num };
    obj5.children = intl.format(tmp5(subscription[22]).t.he52LA, obj6);
    tmp17 = closure_31(tmp5(subscription[38]).LegacyText, obj5);
  }
  let tmp20 = null == plan.premiumTier;
  if (!tmp20) {
    tmp20 = 0 !== plan.numPremiumGuild;
  }
  if (null == plan.premiumTier) {
    let tmp7Result = require("../../../../_runtime/metro/13670__.js");
  } else if (0 !== plan.numPremiumGuild) {
    if (plan.premiumTier === closure_20.TIER_1) {
      tmp7Result = require("../../../../_runtime/metro/13674__.js");
    } else {
      tmp7Result = require("../../../../_runtime/metro/13675__.js");
    }
  } else {
    const premiumTier = plan.premiumTier;
    if (closure_20.TIER_0 === premiumTier) {
      tmp7Result = require("../../../../_runtime/metro/13671__.js");
    } else if (closure_20.TIER_1 === premiumTier) {
      tmp7Result = require("../../../../_runtime/metro/13672__.js");
    } else if (closure_20.TIER_2 === premiumTier) {
      tmp7Result = require("../../../../_runtime/metro/13673__.js");
    }
  }
  const intl2 = tmp5(subscription[22]).intl;
  if (plan.interval === constants.MONTH) {
    let AbOLNu = tmp5(subscription[22]).t.AbOLNu;
  } else {
    AbOLNu = tmp5(subscription[22]).t["rS8FA+"];
  }
  let tmp23 = premiumTier2DeltaPriceString;
  if (premiumTier2DeltaPriceString == null) {
    tmp23 = checkoutPlanPriceString;
  }
  if (tmp23 == null) {
    tmp23 = closure_18;
  }
  const formatToPlainStringResult = intl2.formatToPlainString(AbOLNu, { price: tmp23 });
  if (tmp16) {
    const intl3 = tmp5(subscription[22]).intl;
    const obj7 = { num };
    let formatToPlainStringResult1 = intl3.formatToPlainString(tmp5(subscription[22]).t.RTaZb4, obj7);
  }
  premiumTypeFromSubscription = null;
  if (null != subscription) {
    premiumTypeFromSubscription = tmp5(subscription[25]).getPremiumTypeFromSubscription(subscription);
    const tmp5Result = tmp5(subscription[25]);
  }
  if (!flag) {
    flag = tmp3;
  }
  if (!flag) {
    flag = tmp9[1];
  }
  if (!flag) {
    flag = tmp11;
  }
  function onPress() {
    let tmp = !flag;
    if (!flag) {
      tmp = flag2;
    }
    if (tmp) {
      if (flag6) {
        const obj2 = { boost_count: plan.numPremiumGuild, is_recommended, load_id: analyticsLoadId };
        AnalyticsUtilsDefault.track(constants2.BOOST_PLAN_ROW_SELECTED, obj2);
      }
      if (null != subscription) {
        if (premiumTypeFromSubscription === closure_2_20.TIER_2) {
          if (plan.premiumTier === closure_2_20.TIER_0) {
            const obj3 = {
              subscription: tmp10,
              mode: PremiumPlanWhatYouLoseActionSheet.WhatYouLoseMode.DOWNGRADE,
              onContinue() {
                        return closure_1_1(productId.productId);
                      }
            };
            openPremiumPlanWhatYouLoseActionSheetDefault(obj3);
          }
        }
      }
      closure_1_1(plan.productId);
    }
  }
  is_recommended = tmp28;
  if (flag4) {
    if (tmp20) {
      let tmp38Result = closure_31(require("BoostGemPixel"), { width: 32, height: 32 });
    } else if (tmp16) {
      const obj8 = { size: "lg", color: require("native").colors.ICON_DEFAULT };
      tmp38Result = closure_31(tmp5(subscription[32]).NitroWheelIcon, obj8);
    } else {
      const obj9 = { style: tmp2.boostRowIcon, source: tmp7Result };
      tmp38Result = closure_31(premiumTypeFromSubscription, obj9);
    }
    const obj10 = { icon: tmp38Result, label: getPlanDescription(plan, flag5), subLabel: null, trailing: null, arrow: null, disabled: null, onPress: null };
    if (tmp28) {
      const obj11 = { variant: "text-xs/semibold", color: "none", style: tmp2.recommendedText, children: null };
      const intl4 = tmp5(subscription[22]).intl;
      obj11.children = intl4.string(tmp5(subscription[22]).t.WThgAR);
      formatToPlainStringResult1 = closure_31(tmp5(subscription[23]).Text, obj11);
    }
    obj10.subLabel = formatToPlainStringResult1;
    if (tmp4) {
      const obj12 = { animating: true, size: "small", color: token };
      let tmp38Result2 = closure_31(tmp5(subscription[43]).ActivityIndicator, obj12);
    } else if (null != premiumTier2DeltaPriceString) {
      const obj13 = { price: premiumTier2DeltaPriceString, interval: plan.interval };
      tmp38Result2 = closure_31(closure_38, obj13);
    } else {
      const obj14 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: formatToPlainStringResult };
      tmp38Result2 = closure_31(tmp5(subscription[23]).Text, obj14);
    }
    obj10.trailing = tmp38Result2;
    obj10.arrow = flag2;
    if (flag) {
      flag = !tmp4;
    }
    if (!flag) {
      flag = !flag2;
    }
    obj10.disabled = flag;
    let tmp44;
    if (flag2) {
      tmp44 = onPress;
    }
    obj10.onPress = tmp44;
    return closure_31(tmp5(subscription[44]).TableRow, obj10);
  } else {
    const items2 = [tmp2.row, plan.style, ];
    let rowDisabled = flag;
    if (flag) {
      rowDisabled = !tmp4;
    }
    if (rowDisabled) {
      rowDisabled = tmp2.rowDisabled;
    }
    const obj15 = { style: null, children: null };
    items2[2] = rowDisabled;
    obj15.style = items2;
    const obj16 = { style: tmp2[closure_37[tmp7Result]], source: tmp7Result };
    const items3 = [closure_31(premiumTypeFromSubscription, obj16), , , , ];
    const obj17 = { style: null, children: null };
    const items4 = [, ];
    ({ rowText: arr5[0], rowPlanDescription: arr5[1] } = tmp2);
    obj17.style = items4;
    obj17.children = getPlanDescription(plan, flag5);
    items3[1] = closure_31(tmp5(subscription[38]).LegacyText, obj17);
    items3[2] = tmp17;
    const obj18 = { style: null, children: null };
    const items5 = [, ];
    ({ rowText: arr6[0], rowPrice: arr6[1] } = tmp2);
    obj18.style = items5;
    obj18.children = formatToPlainStringResult;
    items3[3] = closure_31(tmp5(subscription[38]).LegacyText, obj18);
    let tmp31Result = null;
    if (tmp4) {
      const obj19 = { animating: true, size: "small", style: tmp2.purchasingSpinner, color: token };
      tmp31Result = closure_31(tmp5(subscription[43]).ActivityIndicator, obj19);
    }
    items3[4] = tmp31Result;
    obj15.children = items3;
    const tmp29Result = closure_32(flag, obj15);
    let tmp31Result2 = tmp29Result;
    if (flag2) {
      let str2 = "none";
      if (!tmp5Result2.isThemeDark(tmp14)) {
        str2 = "none";
        if (flag3) {
          str2 = require("native").unsafe_rawColors.PRIMARY_230;
        }
      }
      const obj20 = { activeOpacity: 0.6, underlayColor: str2, accessibilityRole: "button", disabled: flag, onPress, children: tmp29Result };
      tmp31Result2 = closure_31(tmp5(subscription[46]).TouchableHighlight, obj20);
      tmp5Result2 = tmp5(subscription[45]);
    }
    return tmp31Result2;
  }
  tmp14 = require("useTheme")();
});
ReactCompilerGating = fn(558);
let closure_41 = ReactCompilerGating.isReactCompilerEnabled() ? (function CurrentPlanRow(showCurrentPlan) {
  const cResult = c.c(13);
  ({ subscription, paymentGatewayPlanId, analyticsLoadId } = showCurrentPlan);
  const tmp4 = closure_34();
  if (showCurrentPlan.showCurrentPlan) {
    if (null != subscription) {
      if (null != paymentGatewayPlanId) {
        if (cResult[0] !== paymentGatewayPlanId) {
          const premiumBundledItemsFromProductId = PremiumBundledPlansUtils.getPremiumBundledItemsFromProductId(paymentGatewayPlanId);
          const premiumTier = premiumBundledItemsFromProductId.premiumTier;
          if (null != premiumTier) {
            let PREMIUM_GUILD = closure_1_28(premiumTier);
          } else {
            PREMIUM_GUILD = constants6.PREMIUM_GUILD;
          }
          cResult[0] = paymentGatewayPlanId;
          cResult[1] = premiumBundledItemsFromProductId;
          cResult[2] = PREMIUM_GUILD;
          const tmpResult = PremiumBundledPlansUtils;
        } else {
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function h() {

            };
            cResult[3] = fn;
            let tmp14 = fn;
          } else {
            tmp14 = cResult[3];
          }
          if (cResult[4] === analyticsLoadId) {
            if (cResult[5] === tmp6) {
              if (cResult[6] === tmp4.currentPlanRow) {
                if (cResult[7] === subscription) {
                  let tmp15 = cResult[8];
                }
                if (cResult[9] === tmp7) {
                  if (cResult[10] === tmp4.currentPlanGradient) {
                    if (cResult[11] === tmp15) {
                      let tmp19 = cResult[12];
                    }
                    return tmp19;
                  }
                }
                const obj2 = { style: tmp4.currentPlanGradient, colors: tmp7, start: null, end: null, children: null };
                ({ START: obj4.start, END: obj4.end } = closure_1_26);
                obj2.children = tmp15;
                const tmp23 = __initData4(LinearGradientDefault, obj2);
                cResult[9] = tmp7;
                cResult[10] = tmp4.currentPlanGradient;
                cResult[11] = tmp15;
                cResult[12] = tmp23;
                tmp19 = tmp23;
              }
            }
          }
          const obj3 = { plan: cResult[1], subscription, analyticsLoadId, interactive: false, hasBackground: true, purchase: tmp14, style: tmp4.currentPlanRow };
          const tmp18 = __initData4(closure_39, obj3);
          cResult[4] = analyticsLoadId;
          cResult[5] = cResult[1];
          cResult[6] = tmp4.currentPlanRow;
          cResult[7] = subscription;
          cResult[8] = tmp18;
          tmp15 = tmp18;
        }
      }
    }
  }
  return null;
}) : (function CurrentPlanRow(arg0) {
  ({ subscription, paymentGatewayPlanId } = arg0);
  ({ analyticsLoadId, showCurrentPlan } = arg0);
  const tmp = closure_34();
  if (showCurrentPlan) {
    if (null != subscription) {
      if (null != paymentGatewayPlanId) {
        const premiumBundledItemsFromProductId = PremiumBundledPlansUtils.getPremiumBundledItemsFromProductId(paymentGatewayPlanId);
        const premiumTier = premiumBundledItemsFromProductId.premiumTier;
        if (null != premiumTier) {
          let PREMIUM_GUILD = closure_1_28(premiumTier);
        } else {
          PREMIUM_GUILD = constants6.PREMIUM_GUILD;
        }
        const obj = { style: tmp.currentPlanGradient, colors: PREMIUM_GUILD, start: null, end: null, children: null };
        ({ START: obj.start, END: obj.end } = closure_1_26);
        const obj2 = {
          plan: premiumBundledItemsFromProductId,
          subscription,
          analyticsLoadId,
          interactive: false,
          hasBackground: true,
          purchase() {

                },
          style: tmp.currentPlanRow
        };
        obj.children = __initData4(closure_39, obj2);
        return __initData4(LinearGradientDefault, obj);
      }
    }
  }
  return null;
});
items = [
  {
    id: "premium",
    getLabel() {
      const intl = util.intl;
      return intl.string(util.t.A4BfLn);
    },
    predicate(premiumTier) {
      let tmp = null != premiumTier.premiumTier;
      if (tmp) {
        tmp = 0 === premiumTier.numPremiumGuild;
      }
      return tmp;
    }
  },
  {
    id: "premium-and-premium-guild",
    getLabel(arg0) {
      const intl = util.intl;
      const t = util.t;
      return intl.string(arg0 ? t.rPoOQW : t.lyXyD0);
    },
    predicate(premiumTier) {
      let tmp = null != premiumTier.premiumTier;
      if (tmp) {
        tmp = 0 !== premiumTier.numPremiumGuild;
      }
      return tmp;
    }
  },
  {
    id: "premium-guild",
    getLabel() {
      const intl = util.intl;
      return intl.string(util.t.rPoOQW);
    },
    predicate(premiumTier) {
      let tmp = null == premiumTier.premiumTier;
      if (tmp) {
        tmp = 0 !== premiumTier.numPremiumGuild;
      }
      return tmp;
    }
  }
];
ReactCompilerGating = fn(558);
let closure_44 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanSectionHeader(string) {
  const cResult = c.c(3);
  string = string.string;
  const tmp4 = closure_34();
  if (cResult[0] === tmp4.header) {
    if (cResult[1] === string) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = __initData4(native.LegacyText, { style: tmp4.header, accessibilityRole: "header", children: string });
  cResult[0] = tmp4.header;
  cResult[1] = string;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj2 = { style: tmp4.header, accessibilityRole: "header", children: string };
}) : (function PlanSectionHeader(children) {
  const tmp = closure_34();
  return __initData4(native.LegacyText, { style: closure_34().header, accessibilityRole: "header", children: children.string });
});
ReactCompilerGating = fn(558);
let closure_45 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanSections(analyticsLoadId) {
  const cResult = subscription(analyticsLoadId[20]).c(35);
  ({ plans, subscription } = analyticsLoadId);
  ({ showCurrentPlan, isBoostPurchaseFlow } = analyticsLoadId);
  analyticsLoadId = analyticsLoadId.analyticsLoadId;
  const trackPaymentFlowStep = analyticsLoadId.trackPaymentFlowStep;
  const trackNewPaymentFlow = analyticsLoadId.trackNewPaymentFlow;
  const purchase = analyticsLoadId.purchase;
  let num = closure_34();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(getCheckoutContextRecord) {
      return getCheckoutContextRecord.getCheckoutContextRecord();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = useNativeCheckoutStore(first);
  const availablePlanForItems = tmp5;
  if (cResult[1] === analyticsLoadId) {
    if (cResult[2] === tmp5) {
      if (cResult[3] === isBoostPurchaseFlow) {
        if (cResult[4] === num.boostContainer) {
          if (cResult[5] === num.container) {
            if (cResult[6] === plans) {
              if (cResult[7] === purchase) {
                if (cResult[8] === showCurrentPlan) {
                  if (cResult[9] === subscription) {
                    if (cResult[10] === trackNewPaymentFlow) {
                      if (cResult[11] === trackPaymentFlowStep) {
                        return cResult[12];
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
  let productIdFromSubscription = null;
  if (null != subscription) {
    productIdFromSubscription = subscription(tmp2[48]).getProductIdFromSubscription(subscription, false);
    let tmpResult = subscription(tmp2[48]);
  }
  let tmp7 = productIdFromSubscription;
  if (!isBoostPurchaseFlow) {
    if (null != subscription) {
      try {
        if (cResult[13] !== subscription) {
          const productIdFromSubscription1 = subscription(tmp2[48]).getProductIdFromSubscription(subscription, true);
          let tmp8 = productIdFromSubscription1;
          cResult[13] = subscription;
          cResult[14] = productIdFromSubscription1;
          const tmpResult4 = subscription(tmp2[48]);
        } else {
          tmp8 = cResult[14];
        }
        tmp7 = tmp8;
      } catch (err) {
      }
    }
  }
  if (cResult[15] === isBoostPurchaseFlow) {
    if (cResult[16] === subscription) {
      let tmp10 = cResult[17];
    }
    let shouldRemoveYearlyUpsell = tmp10;
    if (cResult[18] !== isBoostPurchaseFlow) {
      let mobileBoostingEnabled = isBoostPurchaseFlow;
      if (isBoostPurchaseFlow) {
        mobileBoostingEnabled = subscription(tmp2[55]).getMobileBoostingEnabled("PremiumPlanSelect");
        const tmpResult5 = subscription(tmp2[55]);
      }
      cResult[18] = isBoostPurchaseFlow;
      cResult[19] = mobileBoostingEnabled;
      let tmp14 = mobileBoostingEnabled;
    } else {
      tmp14 = cResult[19];
    }
    useNativeCheckoutStore = tmp14;
    if (cResult[20] !== subscription) {
      let tmp17 = null != subscription;
      if (tmp17) {
        tmp17 = subscription(tmp2[25]).getPremiumTypeFromSubscription(subscription) === closure_20.TIER_2;
        const tmpResult6 = subscription(tmp2[25]);
      }
      cResult[20] = subscription;
      cResult[21] = tmp17;
      let tmp16 = tmp17;
    } else {
      tmp16 = cResult[21];
    }
    let tmp19 = tmp14;
    if (tmp14) {
      tmp19 = tmp16;
    }
    const showBoostOnlyLabels = tmp19;
    if (cResult[22] === tmp16) {
      if (cResult[23] === tmp14) {
        let tmp20 = cResult[24];
      }
      let recommendedBoostCount = tmp20;
      if (cResult[25] !== tmp5) {
        function isAvailableInOrder(productId) {
          const isIOSResult = utils_PlatformUtils.isIOS();
          let tmp4 = !isIOSResult;
          if (isIOSResult) {
            tmp4 = null == availablePlanForItems;
          }
          if (!tmp4) {
            tmp4 = null != availablePlanForItems.getAvailablePlanForItems(PremiumBundledPlansUtils.getSubscriptionItemsForProduct(productId.productId));
            const tmpResult = PremiumBundledPlansUtils;
          }
          return tmp4;
        }
        cResult[25] = tmp5;
        cResult[26] = isAvailableInOrder;
        let tmp22 = isAvailableInOrder;
      } else {
        tmp22 = cResult[26];
      }
      closure_12 = tmp22;
      const _Symbol = Symbol;
      if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
        function checkUpgradableFromBoostOnly(numPremiumGuild, arg1) {
          if (null == arg1) {
            return true;
          } else {
            const tmp3 = subscription(analyticsLoadId[56]).AppStorePremiumProductIdsToPremiumBundledItems[arg1];
            let tmp4 = null != tmp3.premiumTier;
            if (!tmp4) {
              tmp4 = numPremiumGuild.numPremiumGuild >= tmp3.numPremiumGuild;
            }
            return tmp4;
          }
        }
        cResult[27] = checkUpgradableFromBoostOnly;
        let tmp23 = checkUpgradableFromBoostOnly;
      } else {
        tmp23 = cResult[27];
      }
      closure_13 = tmp23;
      let tmp24 = plans;
      if (!isBoostPurchaseFlow) {
        let hasActiveTrial;
        if (subscription != null) {
          hasActiveTrial = subscription.hasActiveTrial;
        }
        tmp24 = plans;
        if (true !== hasActiveTrial) {
          tmp24 = withCurrentPlanAlternative(plans, productIdFromSubscription, tmp7);
        }
      }
      closure_14 = tmp24;
      if (!isBoostPurchaseFlow) {
        productIdFromSubscription = tmp7;
      }
      const _Symbol2 = Symbol;
      if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor(arg0) {
            return analyticsLoadId.plansInSection.length > 0;
          }
        }
        cResult[28] = G;
      } else {
        class G {
          constructor(arg0) {
            return analyticsLoadId.plansInSection.length > 0;
          }
        }
      }
      const mapped = items.map((section) => ({
        section,
        plansInSection: closure_14.filter((productId) => {
          let predicateResult = productId.productId !== productIdFromSubscription;
          if (predicateResult) {
            let tmp4 = null == productIdFromSubscription;
            if (!tmp4) {
              tmp4 = !PremiumBundledPlansUtils.isValidBundleProductId(productIdFromSubscription);
            }
            let tmp7 = !tmp4;
            if (!tmp4) {
              let result = PremiumBundledPlansUtils.productsHaveSamePerks(productId.productId, productIdFromSubscription);
              if (result) {
                result = productId.interval === PremiumBundledPlansUtils.getPremiumBundledItemsFromProductId(productIdFromSubscription).interval;
                const tmp8Result = PremiumBundledPlansUtils;
              }
              tmp7 = result;
            }
            predicateResult = !tmp7;
          }
          if (predicateResult) {
            predicateResult = section.predicate(productId);
          }
          if (predicateResult) {
            predicateResult = productId.premiumTier !== constants2.TIER_1;
          }
          if (predicateResult) {
            predicateResult = closure_12(productId);
          }
          if (predicateResult) {
            predicateResult = closure_13(productId, productIdFromSubscription);
          }
          return predicateResult;
        })
      }));
      const found = mapped.filter(G);
      const _Symbol3 = Symbol;
      if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
        class K {
          constructor(arg0) {
            return "premium-and-premium-guild" === analyticsLoadId.section.id;
          }
        }
        cResult[29] = K;
      } else {
        class K {
          constructor(arg0) {
            return "premium-and-premium-guild" === analyticsLoadId.section.id;
          }
        }
      }
      if (tmp19) {
        class K {
          constructor(arg0) {
            return "premium-and-premium-guild" === analyticsLoadId.section.id;
          }
        }
        if (tmp32) {
          class K {
            constructor(arg0) {
              return "premium-and-premium-guild" === analyticsLoadId.section.id;
            }
          }
        }
      }
      if (tmp14) {
        class K {
          constructor(arg0) {
            return "premium-and-premium-guild" === analyticsLoadId.section.id;
          }
        }
      }
      if (cResult[30] === num.container) {
        class K {
          constructor(arg0) {
            return "premium-and-premium-guild" === analyticsLoadId.section.id;
          }
        }
        if (cResult[33] !== tmp19) {
          class K {
            constructor(arg0) {
              return "premium-and-premium-guild" === analyticsLoadId.section.id;
            }
          }
          if (tmp19) {
            class K {
              constructor(arg0) {
                return "premium-and-premium-guild" === analyticsLoadId.section.id;
              }
            }
            const tmp34 = closure_31(closure_35, {});
          }
          cResult[33] = tmp19;
          cResult[34] = tmp34;
          const tmp33 = tmp34;
        } else {
          class K {
            constructor(arg0) {
              return "premium-and-premium-guild" === analyticsLoadId.section.id;
            }
          }
        }
        tmp19 = closure_32;
        let obj2 = { style: items, children: null };
        items = [tmp33, , ];
        const obj3 = { subscription, paymentGatewayPlanId: tmp7, analyticsLoadId, showCurrentPlan };
        items[1] = closure_31(closure_41, obj3);
        items[2] = arr2.map((plans) => {
          const section = plans.section;
          const label = section.getLabel(showBoostOnlyLabels);
          let tmp6 = !shouldShowModernBoostFlow;
          if (!shouldShowModernBoostFlow) {
            const obj = { string: label };
            tmp6 = __initData4(closure_44, obj);
          }
          const obj2 = { children: null };
          items = [tmp6, __initData4(PlanSection, { trackPaymentFlowStep, trackNewPaymentFlow, analyticsLoadId, plans: plans.plansInSection, label, shouldShowModernBoostFlow, showBoostOnlyLabels, recommendedBoostCount, isBoostPurchaseFlow, purchase, subscription, currentPaymentGatewayPlanId: productIdFromSubscription, shouldRemoveYearlyUpsell })];
          obj2.children = items;
          return __initData5(React5, obj2, section.id);
        });
        obj2.children = items;
        const tmp39 = closure_32(productIdFromSubscription, obj2);
        cResult[1] = analyticsLoadId;
        cResult[2] = tmp5;
        cResult[3] = isBoostPurchaseFlow;
        isBoostPurchaseFlow = num.boostContainer;
        cResult[4] = isBoostPurchaseFlow;
        cResult[5] = num.container;
        cResult[6] = plans;
        cResult[7] = purchase;
        cResult[8] = showCurrentPlan;
        cResult[9] = subscription;
        cResult[10] = trackNewPaymentFlow;
        cResult[11] = trackPaymentFlowStep;
        num = 12;
        cResult[12] = tmp39;
      }
      const items1 = [num.container, tmp14];
      cResult[30] = num.container;
      cResult[31] = tmp14;
      cResult[32] = items1;
      items = items1;
      arr2 = found;
    }
    recommendedBoostCount = null;
    if (tmp14) {
      class K {
        constructor(arg0) {
          return "premium-and-premium-guild" === analyticsLoadId.section.id;
        }
      }
      if (!tmp16) {
        class K {
          constructor(arg0) {
            return "premium-and-premium-guild" === analyticsLoadId.section.id;
          }
        }
        recommendedBoostCount = obj7.getRecommendedBoostCount("PremiumPlanSelect");
      }
    }
    cResult[22] = tmp16;
    cResult[23] = tmp14;
    cResult[24] = recommendedBoostCount;
    tmp20 = recommendedBoostCount;
  }
  shouldRemoveYearlyUpsell = isBoostPurchaseFlow;
  if (isBoostPurchaseFlow) {
    class K {
      constructor(arg0) {
        return "premium-and-premium-guild" === analyticsLoadId.section.id;
      }
    }
    shouldRemoveYearlyUpsell = obj4.getShouldRemoveYearlyUpsell("PremiumPlanSelect");
  }
  if (!shouldRemoveYearlyUpsell) {
    class K {
      constructor(arg0) {
        return "premium-and-premium-guild" === analyticsLoadId.section.id;
      }
    }
    if (subscription != null) {
      class K {
        constructor(arg0) {
          return "premium-and-premium-guild" === analyticsLoadId.section.id;
        }
      }
    }
    let tmp13 = true === tmp12;
    if (tmp13) {
      class K {
        constructor(arg0) {
          return "premium-and-premium-guild" === analyticsLoadId.section.id;
        }
      }
      tmp13 = subscription.paymentGateway === constants5.APPLE_ADVANCED_COMMERCE;
    }
    shouldRemoveYearlyUpsell = tmp13;
  }
  cResult[15] = isBoostPurchaseFlow;
  cResult[16] = subscription;
  cResult[17] = shouldRemoveYearlyUpsell;
  tmp10 = shouldRemoveYearlyUpsell;
  let obj = subscription(analyticsLoadId[20]);
}) : (function PlanSections(showCurrentPlan) {
  ({ plans, subscription } = showCurrentPlan);
  const isBoostPurchaseFlow = showCurrentPlan.isBoostPurchaseFlow;
  const analyticsLoadId = showCurrentPlan.analyticsLoadId;
  ({ trackPaymentFlowStep: asyncGeneratorStep, trackNewPaymentFlow: _slicedToArray, purchase: noop } = showCurrentPlan);
  let shouldRemoveYearlyUpsell;
  let boostContainer;
  let showBoostOnlyLabels;
  let recommendedBoostCount;
  closure_12 = undefined;
  const tmp = closure_34();
  closure_6 = boostContainer((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  let productIdFromSubscription = null;
  if (null != subscription) {
    productIdFromSubscription = subscription(analyticsLoadId[48]).getProductIdFromSubscription(subscription, false);
    let obj = subscription(analyticsLoadId[48]);
  }
  let productIdFromSubscription1 = productIdFromSubscription;
  if (!isBoostPurchaseFlow) {
    if (null != subscription) {
      try {
        productIdFromSubscription1 = subscription(analyticsLoadId[48]).getProductIdFromSubscription(subscription, true);
        let obj2 = subscription(analyticsLoadId[48]);
      } catch (err) {
      }
    }
  }
  shouldRemoveYearlyUpsell = isBoostPurchaseFlow;
  if (isBoostPurchaseFlow) {
    shouldRemoveYearlyUpsell = subscription(analyticsLoadId[55]).getShouldRemoveYearlyUpsell("PremiumPlanSelect");
    const obj3 = subscription(analyticsLoadId[55]);
  }
  if (!shouldRemoveYearlyUpsell) {
    let hasActiveTrial;
    if (subscription != null) {
      hasActiveTrial = subscription.hasActiveTrial;
    }
    let tmp12 = true === hasActiveTrial;
    if (tmp12) {
      tmp12 = subscription.paymentGateway === constants5.APPLE_ADVANCED_COMMERCE;
    }
    shouldRemoveYearlyUpsell = tmp12;
  }
  boostContainer = isBoostPurchaseFlow;
  if (isBoostPurchaseFlow) {
    boostContainer = subscription(analyticsLoadId[55]).getMobileBoostingEnabled("PremiumPlanSelect");
    let obj4 = subscription(analyticsLoadId[55]);
  }
  let tmp16 = null != subscription;
  if (tmp16) {
    tmp16 = subscription(analyticsLoadId[25]).getPremiumTypeFromSubscription(subscription) === closure_20.TIER_2;
    let obj5 = subscription(analyticsLoadId[25]);
  }
  let tmp20 = boostContainer;
  if (boostContainer) {
    tmp20 = tmp16;
  }
  showBoostOnlyLabels = tmp20;
  recommendedBoostCount = null;
  if (boostContainer) {
    recommendedBoostCount = null;
    if (!tmp16) {
      recommendedBoostCount = subscription(analyticsLoadId[55]).getRecommendedBoostCount("PremiumPlanSelect");
      const obj6 = subscription(analyticsLoadId[55]);
    }
  }
  let tmp24 = plans;
  if (!isBoostPurchaseFlow) {
    let hasActiveTrial1;
    if (subscription != null) {
      hasActiveTrial1 = subscription.hasActiveTrial;
    }
    tmp24 = plans;
    if (true !== hasActiveTrial1) {
      tmp24 = withCurrentPlanAlternative(plans, productIdFromSubscription, productIdFromSubscription1);
    }
  }
  closure_12 = tmp24;
  if (!isBoostPurchaseFlow) {
    productIdFromSubscription = productIdFromSubscription1;
  }
  const mapped = items.map((section) => ({
    section,
    plansInSection: closure_12.filter((productId) => {
      let predicateResult = productId.productId !== productIdFromSubscription;
      if (predicateResult) {
        let tmp4 = null == productIdFromSubscription;
        if (!tmp4) {
          tmp4 = !PremiumBundledPlansUtils.isValidBundleProductId(productIdFromSubscription);
        }
        let tmp7 = !tmp4;
        if (!tmp4) {
          let result = PremiumBundledPlansUtils.productsHaveSamePerks(productId.productId, productIdFromSubscription);
          if (result) {
            result = productId.interval === PremiumBundledPlansUtils.getPremiumBundledItemsFromProductId(productIdFromSubscription).interval;
            const tmp8Result = PremiumBundledPlansUtils;
          }
          tmp7 = result;
        }
        predicateResult = !tmp7;
      }
      if (predicateResult) {
        predicateResult = section.predicate(productId);
      }
      if (predicateResult) {
        predicateResult = productId.premiumTier !== constants2.TIER_1;
      }
      if (predicateResult) {
        const isIOSResult = utils_PlatformUtils.isIOS();
        let tmp16 = !isIOSResult;
        if (isIOSResult) {
          tmp16 = null == availablePlanForItems;
        }
        if (!tmp16) {
          tmp16 = null != availablePlanForItems.getAvailablePlanForItems(PremiumBundledPlansUtils.getSubscriptionItemsForProduct(productId.productId));
        }
        predicateResult = tmp16;
      }
      if (predicateResult) {
        let flag = true;
        if (null != productIdFromSubscription) {
          const tmp27 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[tmp23];
          flag = null != tmp27.premiumTier || productId.numPremiumGuild >= tmp27.numPremiumGuild;
          const tmp28 = null != tmp27.premiumTier || productId.numPremiumGuild >= tmp27.numPremiumGuild;
        }
        predicateResult = flag;
      }
      return predicateResult;
    })
  }));
  const found = mapped.filter((plansInSection) => plansInSection.plansInSection.length > 0);
  let found1 = found;
  if (tmp20) {
    found1 = found;
    if (tmp28) {
      found1 = found.filter((section) => "premium-guild" !== section.section.id);
    }
  }
  items = [tmp.container, ];
  if (boostContainer) {
    boostContainer = tmp.boostContainer;
  }
  const obj7 = { style: items, children: null };
  items[1] = boostContainer;
  if (tmp20) {
    tmp20 = closure_31(closure_35, {});
  }
  const items1 = [
    tmp20,
    closure_31(closure_41, { subscription, paymentGatewayPlanId: productIdFromSubscription1, analyticsLoadId, showCurrentPlan: showCurrentPlan.showCurrentPlan }),
    found1.map((plans) => {
      const section = plans.section;
      const label = section.getLabel(showBoostOnlyLabels);
      let tmp6 = !boostContainer;
      if (!boostContainer) {
        const obj = { string: label };
        tmp6 = __initData4(closure_44, obj);
      }
      const obj2 = { children: null };
      items = [tmp6, __initData4(PlanSection, { trackPaymentFlowStep, trackNewPaymentFlow, analyticsLoadId, plans: plans.plansInSection, label, shouldShowModernBoostFlow: boostContainer, showBoostOnlyLabels, recommendedBoostCount, isBoostPurchaseFlow, purchase, subscription, currentPaymentGatewayPlanId: productIdFromSubscription, shouldRemoveYearlyUpsell })];
      obj2.children = items;
      return __initData5(React5, obj2, section.id);
    })
  ];
  obj7.children = items1;
  return closure_32(productIdFromSubscription, obj7);
});
function PremiumPlanSelect(isBoostPurchaseFlow) {
  ({ predicate, showCurrentPlan } = isBoostPurchaseFlow);
  if (showCurrentPlan === undefined) {
    showCurrentPlan = true;
  }
  let flag = isBoostPurchaseFlow.isBoostPurchaseFlow;
  if (flag === undefined) {
    flag = false;
  }
  ({ analyticsLocation, planId, applicationId } = isBoostPurchaseFlow);
  _require = applicationId;
  let ref = isBoostPurchaseFlow.ref;
  importDefault = undefined;
  let basePurchaseFlowAnalyticsFields;
  let obj6;
  let handlePremiumPurchase;
  let navigation;
  let patchOrderLineItems;
  let orderRequired;
  let stateFromStores;
  const tmp = closure_34();
  let tmp2 = importDefault;
  let tmp3 = basePurchaseFlowAnalyticsFields;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  items = [SubscriptionStore, SubscriptionPlanStore];
  const tmp7 = handlePremiumPurchase(require("initialize").useStateFromStoresArray(items, () => {
    items = [SubscriptionStore.hasFetchedSubscriptions(), loadedForPremiumSKUs.isLoadedForPremiumSKUs()];
    return items;
  }), 2);
  importDefault = tmp8;
  const items1 = [tmp7[1]];
  const effect = navigation.useEffect(() => {
    if (!closure_1) {
      const premiumSubscriptionPlans = SubscriptionPlanActionCreators.fetchPremiumSubscriptionPlans();
    }
  }, items1);
  const tmp11 = require("useInitialValue")(() => application_id(basePurchaseFlowAnalyticsFields[49]).getNewAnalyticsLoadId());
  let obj2 = require("initialize");
  const tmp6 = handlePremiumPurchase;
  let obj = { analyticsLoadId: tmp11, analyticsLocation: null, analyticsLocations: null };
  let merged = Object.assign(analyticsLocation);
  obj.analyticsLocation = { object: constants3.BUTTON_CTA, object_type: constants4.BUY };
  obj.analyticsLocations = analyticsLocations;
  basePurchaseFlowAnalyticsFields = require("PremiumAnalyticsUtils").getBasePurchaseFlowAnalyticsFields(obj);
  if (null != planId) {
    let obj5 = { subscription_plan_id: planId };
    obj6 = obj5;
  } else {
    obj6 = {};
  }
  tmp2(tmp3[64])(() => {
    const obj2 = {};
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    const merged1 = Object.assign(obj6);
    obj2.application_id = application_id;
    const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(obj2);
  });
  const activeSubscription = useNativeCheckoutStore((activeSubscription) => ({ activeSubscription: activeSubscription.checkoutInitParameters.activeSubscription, order: activeSubscription.orderRecord })).activeSubscription;
  let obj3 = require("PremiumAnalyticsUtils");
  let obj4 = { object: constants3.BUTTON_CTA, object_type: constants4.BUY };
  handlePremiumPurchase = require("handlePremiumPurchase").useHandlePremiumPurchase();
  const tmp4Result = require("handlePremiumPurchase");
  navigation = require("useNavigation").useNavigation();
  const tmp4Result9 = require("useNavigation");
  const isPaymentsBlocked = require("BlockedPaymentsCountryExperiment").useIsPaymentsBlocked();
  const tmp4Result10 = require("BlockedPaymentsCountryExperiment");
  if (null != activeSubscription) {
    let obj7 = { subscriptionId: activeSubscription.id, renewal: true, analyticsLocations, analyticsLocation: tmp2(tmp3[70]).PREMIUM_PLAN_SELECT };
    let obj8 = obj7;
  } else {
    obj8 = {};
  }
  const first = tmp6(require("PremiumSubscriptionInvoice").useFetchSubscriptionInvoicePreview(obj8), 1)[0];
  const tmp15Result = useNativeCheckoutStore((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired }));
  patchOrderLineItems = tmp15Result.patchOrderLineItems;
  orderRequired = tmp15Result.orderRequired;
  const tmp4Result11 = require("PremiumSubscriptionInvoice");
  const items2 = [SubscriptionStore];
  stateFromStores = require("initialize").useStateFromStores(items2, () => SubscriptionStore.getPremiumTypeSubscription());
  _require = obj6((applicationId, arg1) => {
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, value) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              closure_3 = tmp3;
              _location = tmp7;
              closure_130_0 = applicationId;
              closure_130_1 = closure_1;
              closure_130_2 = undefined;
              closure_2_14(true, applicationId);
              if (null != stateFromStores) {
                let modifySubscriptionItemsForProduct = applicationId(basePurchaseFlowAnalyticsFields[48]).getModifySubscriptionItemsForProduct(applicationId, tmp73);
                const obj9 = applicationId(basePurchaseFlowAnalyticsFields[48]);
              } else {
                modifySubscriptionItemsForProduct = applicationId(basePurchaseFlowAnalyticsFields[48]).getSubscriptionItemsForProduct(applicationId);
                const obj8 = applicationId(basePurchaseFlowAnalyticsFields[48]);
              }
              closure_130_2 = undefined;
              if (c7) {
                v3 = 2;
                c7 = 1;
                const obj7 = {
                  value: v3(modifySubscriptionItemsForProduct.map((planId) => {
                              const obj = { sku_id: null, subscription_plan_id: null, quantity: null, purchase_type: null };
                              const obj2 = applicationId(4726);
                              obj.sku_id = obj2.castPremiumSubscriptionAsSkuId(closure_1_1(4726).getSkuIdForPlan(planId.planId));
                              ({ planId: obj.subscription_plan_id, quantity: obj.quantity } = planId);
                              obj.purchase_type = constants.SUBSCRIPTION;
                              return obj;
                            })),
                  done: false
                };
                return obj7;
              }
            }
          } else {
            if (1 === tmp7) {
              c5 = 0;
              if (tmp58 instanceof closure_1(basePurchaseFlowAnalyticsFields[71])) {
                const subscriptions = applicationId(basePurchaseFlowAnalyticsFields[72]).fetchSubscriptions();
                const obj5 = applicationId(basePurchaseFlowAnalyticsFields[72]);
                const obj10 = { title: null, body: null };
                const intl3 = applicationId(basePurchaseFlowAnalyticsFields[22]).intl;
                obj10.title = intl3.string(applicationId(basePurchaseFlowAnalyticsFields[22]).t["U+H+kd"]);
                const intl4 = applicationId(basePurchaseFlowAnalyticsFields[22]).intl;
                obj10.body = intl4.string(applicationId(basePurchaseFlowAnalyticsFields[22]).t.yyDkbE);
                closure_1(basePurchaseFlowAnalyticsFields[50]).show(obj10);
                obj6 = closure_1(basePurchaseFlowAnalyticsFields[50]);
              } else {
                const obj11 = { title: null, body: null, isDismissable: true };
                const intl = applicationId(basePurchaseFlowAnalyticsFields[22]).intl;
                obj11.title = intl.string(applicationId(basePurchaseFlowAnalyticsFields[22]).t.zrhHH3);
                const intl2 = applicationId(basePurchaseFlowAnalyticsFields[22]).intl;
                obj11.body = intl2.string(applicationId(basePurchaseFlowAnalyticsFields[22]).t.PjfUXe);
                closure_1(basePurchaseFlowAnalyticsFields[50]).show(obj11);
                let obj3 = closure_1(basePurchaseFlowAnalyticsFields[50]);
              }
              closure_2_14(false);
            } else if (2 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else {
                if (arg0 !== 2) {
                  closure_130_2 = value;
                  if (null == value) {
                    closure_2_14(false);
                    c7 = 3;
                  }
                }
                c7 = 3;
                const obj12 = { value, done: true };
                return obj12;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c5 = 0;
            }
            c5 = 0;
            c7 = 3;
            let obj = { value, done: true };
            return obj;
          }
          c5 = 1;
          const obj13 = { productId: closure_130_0, analyticsLocation: _location.location, analyticsLoadId: closure_130_1, applicationId, orderId: null, onPurchaseComplete: null };
          let id;
          if (closure_130_2 != null) {
            id = closure_130_2.id;
          }
          obj13.orderId = id;
          obj13.onPurchaseComplete = function onPurchaseComplete(paymentGateway) {
            closure_1(5298).close();
            if (paymentGateway.paymentGateway === constants.APPLE_ADVANCED_COMMERCE) {
              premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
              if (null == premiumTypeSubscription) {
                const _Error = Error;
                const error = new Error("PremiumActivatedAlert: no premium subscription in store post-activation");
                const obj2 = { tags: { source: "showPremiumActivatedAlert.nullSubscription" } };
                const result = premiumTypeSubscription(4741).captureBillingException(error, obj2);
                const obj4 = premiumTypeSubscription(4741);
                closure_1(5940).popWithKey(premiumTypeSubscription(7118).PREMIUM_KEY);
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
                const tmpResult = closure_1(5940);
              } else {
                const obj3 = {
                  importer() {
                        return premiumTypeSubscription(basePurchaseFlowAnalyticsFields[52])(basePurchaseFlowAnalyticsFields[60], basePurchaseFlowAnalyticsFields.paths).then(() => { ... });
                      },
                  isDismissable: false
                };
                closure_1(5298).openLazy(obj3);
                const tmpResult2 = closure_1(5298);
              }
            }
            let obj = closure_1(5298);
          };
          v3 = 3;
          c7 = 1;
          const obj14 = { value: tmp58(obj13), done: false };
          return obj14;
        } catch (tmp58) {
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp58;
          } else {
            v3 = tmp;
          }
        }
      }
    })();
  });
  const items3 = [basePurchaseFlowAnalyticsFields.location, applicationId, handlePremiumPurchase, navigation, patchOrderLineItems, orderRequired, stateFromStores];
  if (null == predicate) {
    return null;
  } else {
    if (!tmp7[0]) {
      let obj9 = { style: tmp.loadingSpinnerContainer, children: closure_31(tmp4(tmp3[43]).ActivityIndicator, { animating: true, size: "large" }) };
      closure_31(orderRequired, obj9);
    }
    if (isPaymentsBlocked) {
      let obj10 = { ref, contentInset: null, children: null };
      ref = { top: 40 };
      obj10.contentInset = ref;
      tmp2 = tmp2(tmp3[73]);
      tmp3 = closure_31(tmp2, {});
      obj10.children = tmp3;
      let tmp25Result2 = closure_31(stateFromStores, obj10);
    } else {
      if (null != activeSubscription) {
        if (activeSubscription.isOnPlatformMatchingExternalPaymentGateway) {
          tmp4(tmp3[48]);
          tmp4(tmp3[48]);
        }
        let tmp25Result = null != first;
        if (tmp25Result) {
          let obj11 = { children: null };
          let obj12 = { style: tmp.premiumHeaderLabel, variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: null };
          let intl = tmp4(tmp3[22]).intl;
          obj12.children = intl.string(tmp4(tmp3[22]).t.ITurwY);
          const items4 = [closure_31(tmp4(tmp3[23]).Text, obj12), ];
          let obj13 = { subscription: activeSubscription, renewalInvoicePreview: first };
          items4[1] = closure_31(tmp4(tmp3[74]).PremiumSubscriptionHeader, obj13);
          obj11.children = items4;
          tmp25Result = closure_32(closure_33, obj11);
        }
        let obj14 = { children: null };
        const items5 = [tmp25Result, ];
        const obj15 = { style: tmp.offPlatformSubscriptionMessage, variant: "text-md/semibold", children: tmp4(tmp3[75]).getExternalManagementMessage(activeSubscription, { shouldAllowExternalManagement: true }) };
        items5[1] = closure_31(tmp4(tmp3[23]).Text, obj15);
        obj14.children = items5;
        tmp25Result2 = closure_32(stateFromStores, obj14);
        const tmp4Result15 = tmp4(tmp3[75]);
      }
      const obj16 = { ref, children: null };
      const obj17 = {
        subscription: activeSubscription,
        plans: tmp4(tmp3[48]).getPremiumBundlesWithPredicate(predicate),
        showCurrentPlan,
        isBoostPurchaseFlow: flag,
        analyticsLoadId: tmp11,
        trackPaymentFlowStep(arg0) {
              ({ productId, fromStep, toStep } = arg0);
              const obj = AnalyticsUtilsDefault;
              const obj2 = { application_id };
              const merged = Object.assign(PremiumAnalyticsUtils.getPaymentFlowStepAnalyticsFields(basePurchaseFlowAnalyticsFields, { from_step: fromStep, to_step: toStep, subscription_plan_gateway_plan_id: productId }));
              obj.track(constants2.PAYMENT_FLOW_STEP, obj2);
            },
        trackNewPaymentFlow(arg0) {
              ({ newFlowAnalyticsLoadId, productId } = arg0);
              const obj2 = {};
              const merged = Object.assign(basePurchaseFlowAnalyticsFields);
              obj2.subscription_plan_gateway_plan_id = productId;
              obj2.load_id = newFlowAnalyticsLoadId;
              obj2.application_id = application_id;
              const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(obj2);
            },
        purchase: tmp22
      };
      obj16.children = closure_31(closure_45, obj17);
      tmp25Result2 = closure_31(stateFromStores, obj16);
      const tmp4Result16 = tmp4(tmp3[48]);
    }
  }
  const tmp4Result12 = require("initialize");
}
ReactCompilerGating = fn(558);
let obj14 = {
  id: "premium",
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.A4BfLn);
  },
  predicate(premiumTier) {
    let tmp = null != premiumTier.premiumTier;
    if (tmp) {
      tmp = 0 === premiumTier.numPremiumGuild;
    }
    return tmp;
  }
};
let obj9 = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelect.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumPlanSelectWithOrderCTX(guildId) {
  _require = guildId;
  const cResult = require("c").c(39);
  closure_34();
  let obj = require("c");
  const navigation = require("useNavigation").useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [SubscriptionStore];
    const fn = function o() {
      return SubscriptionStore.getPremiumTypeSubscription();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let obj2 = require("useNavigation");
  const stateFromStores = require("initialize").useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { location: "PremiumPlanSelectWithOrderCTX" };
    cResult[2] = obj3;
    let tmp10 = obj3;
  } else {
    tmp10 = cResult[2];
  }
  const NitroACOMSubscriptionExperiment = tmp(tmp2[76]).NitroACOMSubscriptionExperiment;
  const tmpResult = require("initialize");
  if (tmpResult7.isIOS()) {
    if (NitroACOMSubscriptionExperiment.useConfig(tmp10).enabled) {
      let APPLE = constants.APPLE_ADVANCED_COMMERCE;
    } else {
      APPLE = constants.APPLE;
    }
  } else {
    let paymentGateway = constants.GOOGLE;
    if (null != stateFromStores) {
      paymentGateway = stateFromStores.paymentGateway;
    }
    if (cResult[3] !== stateFromStores) {
      let baseSubscriptionItemForSubscriptionItems = null;
      if (null != stateFromStores) {
        baseSubscriptionItemForSubscriptionItems = tmp(tmp2[77]).getBaseSubscriptionItemForSubscriptionItems(stateFromStores.items);
        const tmpResult8 = tmp(tmp2[77]);
      }
      if (null != baseSubscriptionItemForSubscriptionItems) {
        const obj4 = { subscriptionPlanId: baseSubscriptionItemForSubscriptionItems.planId, skuId: null, quantity: null };
        const tmpResult9 = tmp(tmp2[25]);
        obj4.skuId = tmpResult9.castPremiumSubscriptionAsSkuId(navigation(tmp2[25]).getSkuIdForPlan(baseSubscriptionItemForSubscriptionItems.planId));
        obj4.quantity = baseSubscriptionItemForSubscriptionItems.quantity;
        if (cResult[5] !== obj4) {
          const items1 = [obj4];
          cResult[5] = obj4;
          cResult[6] = items1;
          let tmp19 = items1;
        } else {
          tmp19 = cResult[6];
        }
        cResult[3] = stateFromStores;
        cResult[4] = tmp19;
        const obj14 = navigation(tmp2[25]);
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { subscriptionPlanId: closure_22.PREMIUM_YEAR_TIER_2, skuId: tmp(tmp2[25]).castPremiumSubscriptionAsSkuId(closure_19.TIER_2), quantity: 1 };
        const items2 = [obj5];
        cResult[7] = items2;
        const tmpResult10 = tmp(tmp2[25]);
      }
    } else {
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [SubscriptionStore];
        class A {
          constructor() {
            return closure_1_12.hasFetchedSubscriptions();
          }
        }
        cResult[8] = items3;
        cResult[9] = A;
        let tmp26 = A;
        let tmp25 = items3;
      } else {
        tmp25 = cResult[8];
        tmp26 = cResult[9];
      }
      stateFromStores1 = tmp(tmp2[34]).useStateFromStores(tmp25, tmp26);
      if (cResult[10] !== stateFromStores1) {
        class L {
          constructor() {
            if (!closure_2) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[72]);
              subscriptions = obj.fetchSubscriptions();
            }
            return;
          }
        }
        const items4 = [stateFromStores1];
        class A {
          constructor() {
            return closure_1_12.hasFetchedSubscriptions();
          }
        }
        cResult[10] = stateFromStores1;
        cResult[11] = L;
        cResult[12] = items4;
        let tmp30 = items4;
      } else {
        class L {
          constructor() {
            if (!closure_2) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[72]);
              subscriptions = obj.fetchSubscriptions();
            }
            return;
          }
        }
        tmp30 = cResult[12];
      }
      const effect = noop.useEffect(L, tmp30);
      const _Symbol3 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            if (!closure_2) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[72]);
              subscriptions = obj.fetchSubscriptions();
            }
            return;
          }
        }
        const items5 = [GuildStore];
        class A {
          constructor() {
            return closure_1_12.hasFetchedSubscriptions();
          }
        }
        cResult[13] = items5;
        const tmp33 = items5;
      } else {
        class L {
          constructor() {
            if (!closure_2) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[72]);
              subscriptions = obj.fetchSubscriptions();
            }
            return;
          }
        }
      }
      if (cResult[14] !== guildId.guildId) {
        class L {
          constructor() {
            if (!closure_2) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[72]);
              subscriptions = obj.fetchSubscriptions();
            }
            return;
          }
        }
        cResult[14] = guildId.guildId;
        class A {
          constructor() {
            return closure_1_12.hasFetchedSubscriptions();
          }
        }
        cResult[15] = tmp35;
      } else {
        class L {
          constructor() {
            if (!closure_2) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[72]);
              subscriptions = obj.fetchSubscriptions();
            }
            return;
          }
        }
      }
      const tmpResult11 = tmp(tmp2[34]);
      const stateFromStores2 = tmp(tmp2[34]).useStateFromStores(tmp33, tmp35);
      if (cResult[16] !== guildId.isBoostPurchaseFlow) {
        class L {
          constructor() {
            if (!closure_2) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[72]);
              subscriptions = obj.fetchSubscriptions();
            }
            return;
          }
        }
        let mobileBoostingEnabled = true === guildId.isBoostPurchaseFlow;
        if (mobileBoostingEnabled) {
          class L {
            constructor() {
              if (!closure_2) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[72]);
                subscriptions = obj.fetchSubscriptions();
              }
              return;
            }
          }
          mobileBoostingEnabled = obj11.getMobileBoostingEnabled("PremiumPlanSelect");
        }
        class A {
          constructor() {
            return closure_1_12.hasFetchedSubscriptions();
          }
        }
        cResult[16] = guildId.isBoostPurchaseFlow;
        cResult[17] = mobileBoostingEnabled;
      } else {
        class L {
          constructor() {
            if (!closure_2) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[72]);
              subscriptions = obj.fetchSubscriptions();
            }
            return;
          }
        }
      }
      mobileBoostingEnabled = tmp37;
      if (cResult[18] === stateFromStores2) {
        class L {
          constructor() {
            if (!closure_2) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[72]);
              subscriptions = obj.fetchSubscriptions();
            }
            return;
          }
        }
      }
      class M {
        constructor() {
          if (closure_4) {
            tmp4 = null;
            if (null != closure_3) {
              tmp6 = closure_0;
              tmp7 = closure_2;
              intl2 = closure_0(closure_2[22]).intl;
              tmp8 = closure_0;
              tmp9 = closure_2;
              obj = { server: null };
              obj.server = tmp3;
              formatToPlainStringResult = intl2.formatToPlainString(closure_0(closure_2[22]).t.LcefAL, obj);
            }
            obj1 = { title: null };
            obj1.title = formatToPlainStringResult;
            tmp2Result = tmp2(obj1);
            return;
          }
          intl = closure_0(closure_2[22]).intl;
          formatToPlainStringResult = intl.string(closure_0(closure_2[22]).t.u95Dt4);
          return;
        }
      }
      const items6 = [navigation, tmp37, stateFromStores2];
      cResult[18] = stateFromStores2;
      cResult[19] = tmp37;
      cResult[20] = navigation;
      cResult[21] = M;
      cResult[22] = items6;
      const tmpResult12 = tmp(tmp2[34]);
    }
  }
  tmpResult7 = require("utils/PlatformUtils");
}) : (function PremiumPlanSelectWithOrderCTX(isBoostPurchaseFlow) {
  _require = isBoostPurchaseFlow;
  const tmp = closure_34();
  const navigation = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  items = [SubscriptionStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => SubscriptionStore.getPremiumTypeSubscription());
  const NitroACOMSubscriptionExperiment = require("ACOMExperiments").NitroACOMSubscriptionExperiment;
  let obj2 = require("initialize");
  if (obj3.isIOS()) {
    if (NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectWithOrderCTX" }).enabled) {
      let APPLE = constants.APPLE_ADVANCED_COMMERCE;
    } else {
      APPLE = constants.APPLE;
    }
  } else {
    let paymentGateway = constants.GOOGLE;
    if (null != stateFromStores) {
      paymentGateway = stateFromStores.paymentGateway;
    }
    let items1 = [stateFromStores];
    const memo = mobileBoostingEnabled.useMemo(() => {
      let baseSubscriptionItemForSubscriptionItems = null;
      if (null != stateFromStores) {
        baseSubscriptionItemForSubscriptionItems = PremiumSubscription.getBaseSubscriptionItemForSubscriptionItems(tmp.items);
      }
      if (null != baseSubscriptionItemForSubscriptionItems) {
        const obj2 = { subscriptionPlanId: baseSubscriptionItemForSubscriptionItems.planId, skuId: null, quantity: null };
        const obj5 = PremiumUtils;
        obj2.skuId = obj5.castPremiumSubscriptionAsSkuId(PremiumUtilsDefault.getSkuIdForPlan(baseSubscriptionItemForSubscriptionItems.planId));
        obj2.quantity = baseSubscriptionItemForSubscriptionItems.quantity;
        items = [obj2];
        let items1 = items;
      } else {
        const obj4 = { subscriptionPlanId: closure_2_22.PREMIUM_YEAR_TIER_2, skuId: PremiumUtils.castPremiumSubscriptionAsSkuId(closure_2_19.TIER_2), quantity: 1 };
        items1 = [obj4];
      }
      return items1;
    }, items1);
    const items2 = [SubscriptionStore];
    const stateFromStores1 = tmp2(tmp3[34]).useStateFromStores(items2, () => SubscriptionStore.hasFetchedSubscriptions());
    const items3 = [stateFromStores1];
    const effect = mobileBoostingEnabled.useEffect(() => {
      if (!stateFromStores1) {
        const subscriptions = actions_BillingActionCreators.fetchSubscriptions();
      }
    }, items3);
    let obj4 = mobileBoostingEnabled;
    const tmp2Result = tmp2(tmp3[34]);
    const items4 = [GuildStore];
    const stateFromStores2 = tmp2(tmp3[34]).useStateFromStores(items4, () => {
      let tmp2;
      if (null != isBoostPurchaseFlow.guildId) {
        guild = GuildStore.getGuild(tmp.guildId);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        tmp2 = name;
      }
      return tmp2;
    });
    mobileBoostingEnabled = true === isBoostPurchaseFlow.isBoostPurchaseFlow;
    if (mobileBoostingEnabled) {
      mobileBoostingEnabled = tmp2(tmp3[55]).getMobileBoostingEnabled("PremiumPlanSelect");
      const tmp2Result5 = tmp2(tmp3[55]);
    }
    const items5 = [navigation, mobileBoostingEnabled, stateFromStores2];
    const layoutEffect = obj4.useLayoutEffect(() => {
      if (mobileBoostingEnabled) {
        if (null != stateFromStores2) {
          const intl2 = util.intl;
          const obj = { server: tmp3 };
          let formatToPlainStringResult = intl2.formatToPlainString(util.t.LcefAL, obj);
        }
        const obj2 = { title: formatToPlainStringResult };
        tmp2(obj2);
      }
      const intl = util.intl;
      formatToPlainStringResult = intl.string(util.t.u95Dt4);
    }, items5);
    if (stateFromStores1) {
      if (null != paymentGateway) {
        let obj5 = {
          paymentGateway,
          orderRequired: paymentGateway === constants.APPLE_ADVANCED_COMMERCE,
          skuIds: [],
          defaultPlans: memo,
          isGift: false,
          activeSubscription: stateFromStores,
          onOrderRetryCancellation() {
                  if (navigation.canGoBack()) {
                    navigation.goBack();
                  } else {
                    navigation.pop();
                  }
                },
          children: null
        };
        let obj6 = {};
        const merged = Object.assign(isBoostPurchaseFlow);
        obj5.children = closure_31(PremiumPlanSelect, obj6);
        return closure_31(navigation(tmp3[78]), obj5);
      }
      let str2 = "Android";
      if (tmp2Result6.isIOS()) {
        str2 = "iOS";
      }
      const obj7 = { children: null };
      const obj8 = { variant: "display-md", children: null };
      let intl = tmp2(tmp3[22]).intl;
      const obj9 = { mobilePlatform: str2 };
      obj8.children = intl.format(tmp2(tmp3[22]).t.CnoyAN, obj9);
      obj7.children = closure_31(tmp2(tmp3[23]).Text, obj8);
      return closure_31(closure_7, obj7);
    } else {
      const obj10 = { style: tmp.loadingSpinnerContainer, children: closure_31(tmp2(tmp3[43]).ActivityIndicator, { animating: true, size: "large" }) };
      return closure_31(closure_7, obj10);
    }
    const tmp2Result4 = tmp2(tmp3[34]);
  }
  obj3 = require("utils/PlatformUtils");
});