// === Module 15631: PlanSelectCards ===

// Module 15631 (PlanSelectCards)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5751 */;
import Stack_Stack from "Stack/Stack" /* 6159 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7387 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7683 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10028 */;
import usePremiumPlanPriceDefault from "usePremiumPlanPrice" /* 10030 */;
import usePremiumFeaturesDefault from "usePremiumFeatures" /* 10037 */;
import noop from "module_19" /* 19 */;

require = fn;
function PlanSelectCardPrices(arg0) {
  const tmp3 = usePremiumPlanPriceDefault(dependencyMap[arg0.premiumType].monthly);
  const tmp4 = usePremiumPlanPriceDefault(dependencyMap[arg0.premiumType].yearly);
  let priceString;
  if (tmp3 != null) {
    priceString = tmp3.priceString;
  }
  if (priceString == null) {
    priceString = React4;
  }
  const obj = { variant: "body-sm/medium", color: "text-default", children: null };
  items = [timestampProducer(Text_Text.Text, { variant: "heading-xxl/semibold", color: "text-strong", children: priceString }), ];
  const intl = util.intl;
  items[1] = "/" + intl.string(util.t.FPybU7);
  obj.children = items;
  const items1 = [metroImportDefault(Text_Text.Text, obj), ];
  let priceString1;
  if (tmp4 != null) {
    priceString1 = tmp4.priceString;
  }
  if (priceString1 == null) {
    priceString1 = React4;
  }
  const obj2 = { accessible: true, children: null };
  const obj3 = { variant: "body-xs/medium", color: "text-muted", children: null };
  const items2 = [timestampProducer(Text_Text.Text, { variant: "body-md/semibold", color: "text-default", children: priceString1 }), ];
  const intl2 = util.intl;
  items2[1] = "/" + intl2.string(util.t.tfqrhj);
  obj3.children = items2;
  items1[1] = metroImportDefault(Text_Text.Text, obj3);
  obj2.children = items1;
  return metroImportDefault(View, obj2);
}
function PlanSelectCardPerks(premiumType) {
  _require = closure_11();
  const arr = usePremiumFeaturesDefault(premiumType.premiumType);
  return closure_6(require("Stack/Stack").Stack, {
    spacing: nativeDefault.space.PX_8,
    children: usePremiumFeaturesDefault(premiumType.premiumType).map((label) => {
      label = label.label;
      const obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_12, children: null };
      items = [timestampProducer(label.IconComponent, { size: "sm", color: nativeDefault.colors.ICON_STRONG }), timestampProducer(Text_Text.Text, { variant: "body-md/medium", color: "text-strong", style: perkLabel.perkLabel, children: label })];
      obj.children = items;
      return metroImportDefault(Stack_Stack.Stack, obj, label);
    })
  });
}
function PlanSelectCard(onLayout) {
  const premiumType = onLayout.premiumType;
  ({ applicationId: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: View } = onLayout);
  const tmp = closure_11();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const theme = premiumType(5199).useThemeContext().theme;
  premiumType(5162);
  if (premiumType === PremiumTypes.TIER_2) {
    const obj2 = { variant: "expressive", iconColor: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
    let obj4 = obj2;
  } else if (tmp7) {
    const obj3 = { variant: "primary", iconColor: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
    obj4 = obj3;
  } else {
    obj4 = { variant: "primary-overlay", iconColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  }
  const obj5 = { style: tmp.card, onLayout: onLayout.onLayout, children: null };
  let tmp8Result = null;
  if (premiumType === PremiumTypes.TIER_2) {
    const obj6 = { children: null };
    const obj7 = { color: "nitro-pink", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, style: tmp.gradient };
    items = [closure_6(tmp4(8042).ExpressiveGradient, obj7), ];
    const obj8 = { style: tmp.wumpus, pointerEvents: "none", children: closure_6(tmp4(15632).NitroWumpusFlightLeft3dIllustration, { accessible: false, width: 320 }) };
    items[1] = closure_6(View, obj8);
    obj6.children = items;
    tmp8Result = closure_7(closure_8, obj6);
  }
  const items1 = [tmp8Result, , , , ];
  const obj9 = { spacing: nativeDefault.space.PX_4, children: null };
  const intl = tmp4(1113).intl;
  const t = tmp4(1113).t;
  const obj = premiumType(5199);
  const items2 = [closure_6(premiumType(5751).Heading, { variant: "nitro-md", color: "text-strong", children: intl.string(premiumType === PremiumTypes.TIER_2 ? t.lG6a5x : t["t9uG/o"]) }), closure_6(PlanSelectCardPrices, { premiumType })];
  obj9.children = items2;
  items1[1] = closure_7(premiumType(6159).Stack, obj9);
  items1[2] = closure_6(View, { style: tmp.divider });
  items1[3] = closure_6(PlanSelectCardPerks, { premiumType });
  const obj12 = { style: tmp.cta, children: null };
  const intl2 = tmp4(1113).intl;
  const t2 = tmp4(1113).t;
  const obj13 = {
    text: intl2.string(premiumType === PremiumTypes.TIER_2 ? t2["8x0jKT"] : t2.cM8bbx),
    icon: closure_6(premiumType(9612).NitroWheelIcon, { size: "md", color: obj4.iconColor }),
    variant: obj4.variant,
    size: "lg",
    grow: true,
    onPress() {
      return openPremiumPlanSelectionActionSheetDefault({ analyticsLocation, analyticsLocations, premiumType, applicationId, onPaymentSuccess, onPaymentDismiss });
    }
  };
  obj12.children = closure_6(premiumType(5758).Button, obj13);
  items1[4] = closure_6(View, obj12);
  obj5.children = items1;
  return closure_7(View, obj5);
}
const View = fn(17).View;
const PremiumConstants = fn(1387);
({ PRICE_PLACEHOLDER: closure_4, PremiumTypes } = PremiumConstants);
const SubscriptionPlans = PremiumConstants.SubscriptionPlans;
const Constants = fn(1072);
({ AnalyticsObjectTypes, AnalyticsPages, AnalyticsSections } = Constants);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault, Fragment: closure_8 } = jsxProd);
let closure_9 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
const dependencyMap = { [PremiumTypes.TIER_0]: { monthly: SubscriptionPlans.PREMIUM_MONTH_TIER_0, yearly: SubscriptionPlans.PREMIUM_YEAR_TIER_0 }, [PremiumTypes.TIER_2]: { monthly: SubscriptionPlans.PREMIUM_MONTH_TIER_2, yearly: SubscriptionPlans.PREMIUM_YEAR_TIER_2 } };
const createStyles = fn(5140);
let obj4 = { container: { width: "100%", gap: nativeDefault.space.PX_12 }, card: null, gradient: null, wumpus: null, divider: null, perkLabel: null, cta: null };
let obj = { monthly: SubscriptionPlans.PREMIUM_MONTH_TIER_0, yearly: SubscriptionPlans.PREMIUM_YEAR_TIER_0 };
let obj2 = { monthly: SubscriptionPlans.PREMIUM_MONTH_TIER_2, yearly: SubscriptionPlans.PREMIUM_YEAR_TIER_2 };
let obj5 = { width: "100%", gap: nativeDefault.space.PX_12 };
obj4.card = { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj6 = { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4.gradient = { borderRadius: nativeDefault.radii.md, overflow: "hidden" };
obj4.wumpus = { position: "absolute", top: -20, right: -88 };
let obj7 = { borderRadius: nativeDefault.radii.md, overflow: "hidden" };
obj4.divider = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj4.perkLabel = { flexShrink: 1 };
let obj8 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj4.cta = { marginTop: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/plan_select_cards/native/PlanSelectCards.tsx");

export default function PlanSelectCards(style) {
  ({ applicationId: require, order } = style);
  if (order === undefined) {
    order = PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING;
  }
  ({ onFirstCardLayout: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: View } = style);
  let obj = { style: null, onLayout: null, children: null };
  items = [closure_11().container, style.style];
  obj.style = items;
  obj.onLayout = style.onLayout;
  if (order === PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING) {
    const items1 = [, ];
    ({ TIER_0: arr3[0], TIER_2: arr3[1] } = PremiumTypes);
    let items2 = items1;
  } else {
    items2 = [, ];
    ({ TIER_2: arr2[0], TIER_0: arr2[1] } = PremiumTypes);
  }
  obj.children = items2.map((premiumType, index) => {
    const obj = { premiumType, applicationId, onLayout: null, onPaymentSuccess: null, onPaymentDismiss: null };
    let tmp3;
    if (0 === index) {
      tmp3 = importDefault;
    }
    obj.onLayout = tmp3;
    obj.onPaymentSuccess = onPaymentSuccess;
    obj.onPaymentDismiss = onPaymentDismiss;
    return timestampProducer(PlanSelectCard, obj, premiumType);
  });
  return closure_6(View, obj);
};