// === Module 13474: PremiumPromotionCard ===

// Module 13474 (PremiumPromotionCard)
import nativeDefault from "native" /* 576 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7422 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsObjectTypes: metroRequire, AnalyticsPages: closure_7, AnalyticsSections: closure_8, HelpdeskArticles: closure_9 } = Constants);
const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { container: { width: "100%" }, card: null, image: null, nitroWheelIcon: null };
createStyles = { display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, marginBottom: nativeDefault.space.PX_24, overflow: "hidden" };
createStyles.card = createStyles;
let size = { alignSelf: "center", marginBottom: nativeDefault.space.PX_24, borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.none, borderBottomLeftRadius: nativeDefault.radii.none, width: "110%", height: 95 };
createStyles.image = size;
createStyles.nitroWheelIcon = { bottom: -1, width: 22, height: 16 };
let closure_13 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumPromotionCard.tsx");

export default function PremiumPromotionCard(applicationId) {
  applicationId = applicationId.applicationId;
  const onPaymentSuccess = applicationId.onPaymentSuccess;
  const onPaymentDismiss = applicationId.onPaymentDismiss;
  const tmp = closure_13();
  let obj = applicationId(onPaymentDismiss[8]);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const analyticsLocations = onPaymentSuccess(onPaymentDismiss[9])().analyticsLocations;
  const items1 = [analyticsLocations, applicationId, onPaymentSuccess, onPaymentDismiss];
  obj = { style: null, children: null };
  const items2 = [tmp.container, applicationId.style];
  obj.style = items2;
  obj = { style: null, children: null };
  const items3 = [tmp.card];
  obj.style = items3;
  const callback = analyticsLocations.useCallback(() => {
    let obj = { analyticsLocation: null, analyticsLocations, premiumType: PremiumTypes.TIER_2, applicationId, onPaymentSuccess, onPaymentDismiss };
    obj = { page: constants2.BOGO_PROMOTION_MARKETING_PAGE_BANNER, section: constants3.SETTINGS_PREMIUM, objectType: constants.BUY };
    obj.analyticsLocation = obj;
    openPremiumPlanSelectionActionSheetDefault(obj);
  }, items1);
  const items4 = [closure_11(onPaymentSuccess(onPaymentDismiss[11]), { source: { uri: "https://cdn.discordapp.com/assets/content/da4c50f6fba3cf58b484571ef1a57c355fbd31636683792858fa41d1ab027520.png" }, style: tmp.image }), , , ];
  const obj2 = { color: "mobile-text-heading-primary", variant: "heading-md/extrabold", children: null };
  const intl = applicationId(onPaymentDismiss[13]).intl;
  obj2.children = intl.string(applicationId(onPaymentDismiss[13]).t["6Jjfk8"]);
  items4[1] = closure_11(applicationId(onPaymentDismiss[12]).Text, obj2);
  const obj3 = { color: "mobile-text-heading-primary", variant: "text-sm/normal", children: null };
  const intl2 = applicationId(onPaymentDismiss[13]).intl;
  const obj4 = { helpCenterLink: null };
  let obj7 = onPaymentSuccess(onPaymentDismiss[14]);
  obj4.helpCenterLink = obj7.getArticleURL(SUMMER_BOGO_2025.SUMMER_BOGO_2025);
  obj3.children = intl2.format(applicationId(onPaymentDismiss[13]).t["dE3+TP"], obj4);
  items4[2] = closure_11(applicationId(onPaymentDismiss[12]).Text, obj3);
  const obj5 = { style: { marginTop: onPaymentSuccess(onPaymentDismiss[7]).space.PX_24 }, children: null };
  obj7 = { text: null, size: "lg", onPress: null, icon: null, iconPosition: "start", variant: "experimental_premium-secondary", shiny: null };
  const intl3 = applicationId(onPaymentDismiss[13]).intl;
  obj7.text = intl3.string(applicationId(onPaymentDismiss[13]).t.J61px0);
  obj7.onPress = callback;
  const obj8 = { style: null, color: onPaymentSuccess(onPaymentDismiss[7]).colors.BACKGROUND_BRAND, size: "custom" };
  const items5 = [tmp.nitroWheelIcon];
  obj8.style = items5;
  obj7.icon = closure_11(applicationId(onPaymentDismiss[16]).NitroWheelIcon, obj8);
  obj7.shiny = !stateFromStores;
  obj5.children = closure_11(applicationId(onPaymentDismiss[15]).Button, obj7);
  items4[3] = closure_11(View, obj5);
  obj.children = items4;
  obj.children = closure_12(View, obj);
  return closure_11(View, obj);
};