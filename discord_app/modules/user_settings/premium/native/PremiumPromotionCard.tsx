// === Module 12617: PremiumPromotionCard ===

// Module 12617 (PremiumPromotionCard)
import noop from "noop";
import { View } from "set";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import ME from "ME";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let closure_12;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ AnalyticsObjectTypes: closure_6, AnalyticsPages: error, AnalyticsSections: metroImportAll, HelpdeskArticles: c9 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: { width: "100%" }, card: null, image: null, nitroWheelIcon: null };
createCacheKey = { display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", paddingBottom: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16, borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_SECONDARY_ALT, marginBottom: require("Themes").space.PX_24, overflow: "hidden" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { alignSelf: "center", marginBottom: require("Themes").space.PX_24, borderTopLeftRadius: require("Themes").radii.lg, borderTopRightRadius: require("Themes").radii.lg, borderBottomRightRadius: require("Themes").radii.none, borderBottomLeftRadius: require("Themes").radii.none, width: "110%", height: 95 };
createCacheKey[3] = { bottom: -1, width: 22, height: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { alignSelf: "center", marginBottom: require("Themes").space.PX_24, borderTopLeftRadius: require("Themes").radii.lg, borderTopRightRadius: require("Themes").radii.lg, borderBottomRightRadius: require("Themes").radii.none, borderBottomLeftRadius: require("Themes").radii.none, width: "110%", height: 95 };
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/user_settings/premium/native/PremiumPromotionCard.tsx");

export default function PremiumPromotionCard(applicationId) {
  applicationId = applicationId.applicationId;
  const onPaymentSuccess = applicationId.onPaymentSuccess;
  const onPaymentDismiss = applicationId.onPaymentDismiss;
  let analyticsLocations;
  const tmp = createCacheKey();
  let obj = applicationId(onPaymentDismiss[8]);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  analyticsLocations = onPaymentSuccess(onPaymentDismiss[9])().analyticsLocations;
  const items1 = [analyticsLocations, applicationId, onPaymentSuccess, onPaymentDismiss];
  obj = { style: items2, children: null };
  items2 = [tmp.container, applicationId.style];
  obj = { style: items3, children: null };
  items3 = [tmp.card];
  const callback = analyticsLocations.useCallback(() => {
    obj = { analyticsLocation: obj, analyticsLocations, premiumType: outer1_10.TIER_2, applicationId, onPaymentSuccess, onPaymentDismiss };
    obj = { page: outer1_7.BOGO_PROMOTION_MARKETING_PAGE_BANNER, section: outer1_8.SETTINGS_PREMIUM, objectType: outer1_6.BUY };
    onPaymentSuccess(onPaymentDismiss[10])(obj);
  }, items1);
  const items4 = [callback(onPaymentSuccess(onPaymentDismiss[11]), { source: { uri: "https://cdn.discordapp.com/assets/content/da4c50f6fba3cf58b484571ef1a57c355fbd31636683792858fa41d1ab027520.png" }, style: tmp.image }), , , ];
  const obj2 = { color: "mobile-text-heading-primary", variant: "heading-md/extrabold", children: null };
  const intl = applicationId(onPaymentDismiss[13]).intl;
  obj2[2] = intl.string(applicationId(onPaymentDismiss[13]).t["6Jjfk8"]);
  items4[1] = callback(applicationId(onPaymentDismiss[12]).Text, obj2);
  const obj3 = { color: "mobile-text-heading-primary", variant: "text-sm/normal", children: null };
  const intl2 = applicationId(onPaymentDismiss[13]).intl;
  const obj4 = { helpCenterLink: null };
  let obj7 = onPaymentSuccess(onPaymentDismiss[14]);
  obj4[0] = obj7.getArticleURL(SUMMER_BOGO_2025.SUMMER_BOGO_2025);
  obj3[2] = intl2.format(applicationId(onPaymentDismiss[13]).t["dE3+TP"], obj4);
  items4[2] = callback(applicationId(onPaymentDismiss[12]).Text, obj3);
  const obj5 = { style: null, children: null };
  obj5[0] = { marginTop: onPaymentSuccess(onPaymentDismiss[7]).space.PX_24 };
  obj7 = { text: null, size: "lg", onPress: null, icon: null, iconPosition: "start", variant: "experimental_premium-secondary", shiny: null };
  const intl3 = applicationId(onPaymentDismiss[13]).intl;
  obj7[0] = intl3.string(applicationId(onPaymentDismiss[13]).t.J61px0);
  obj7[2] = callback;
  const obj8 = { style: items5, color: null, size: "custom" };
  items5 = [tmp.nitroWheelIcon];
  obj8[1] = onPaymentSuccess(onPaymentDismiss[7]).colors.BACKGROUND_BRAND;
  obj7[3] = callback(applicationId(onPaymentDismiss[16]).NitroWheelIcon, obj8);
  obj7[6] = !stateFromStores;
  obj5[1] = callback(applicationId(onPaymentDismiss[15]).Button, obj7);
  items4[3] = callback(View, obj5);
  obj[1] = items4;
  obj[1] = callback2(View, obj);
  return callback(View, obj);
};