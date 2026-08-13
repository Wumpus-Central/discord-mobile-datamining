// discord_app/modules/user_profile/native/UserProfilePremiumUpsellCard.tsx
import noop from "noop";
import ME from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ AnalyticsObjects: c4, AnalyticsPages: c5, AnalyticsSections: closure_6, UserSettingsSections: error } = ME);
let closure_9 = createCacheKey.createStyles((bottom) => {
  const container = { position: "absolute", bottom, start: 0, end: 0 };
  return { container };
});
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfilePremiumUpsellCard.tsx");

export const UserProfilePremiumUpsellCard = function UserProfilePremiumUpsellCard(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  let navigation;
  let analyticsLocations;
  let obj = navigation(1499);
  navigation = obj.useNavigation();
  const tmp = analyticsLocations;
  const tmp3 = callback(analyticsLocations(1628)().bottom);
  let nitroTrialCtaOverride = navigation(6957).useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  const obj2 = navigation(6957);
  const tmp8 = analyticsLocations(5788);
  const items = [isTryItOut ? tmp8.USER_SETTINGS_TRY_OUT_PREMIUM : tmp8.USER_SETTINGS_USER_PROFILE];
  analyticsLocations = analyticsLocations(5768)(items).analyticsLocations;
  const items1 = [navigation];
  callback = React.useCallback(() => {
    analyticsLocations(outer1_2[9]).setSection(outer1_7.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(outer1_7.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items1);
  const items2 = [analyticsLocations];
  const callback1 = React.useCallback(() => {
    obj = { analyticsLocation: obj, analyticsLocations, premiumFeatureCardOrder: null };
    obj = { page: outer1_5.USER_SETTINGS, section: outer1_6.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: outer1_4.BUTTON_CTA };
    obj[2] = navigation(outer1_2[11]).PremiumFeatureCardOrder.TIER_2_LEADING;
    analyticsLocations(outer1_2[10])(obj);
  }, items2);
  obj = { style: tmp3.container, ctaText: null, showLinearGradient: true, onPress: null, children: null };
  const tmp7 = analyticsLocations(5768);
  if (isTryItOut) {
    if (nitroTrialCtaOverride == null) {
      const intl2 = tmp4(1236).intl;
      nitroTrialCtaOverride = intl2.string(tmp4(1236).t.pj0XBN);
    }
    let stringResult = nitroTrialCtaOverride;
  } else {
    const intl = tmp4(1236).intl;
    stringResult = intl.string(tmp4(1236).t.PxUx8e);
  }
  obj[1] = stringResult;
  if (isTryItOut) {
    callback = callback1;
  }
  obj[3] = callback;
  const intl3 = tmp4(1236).intl;
  const string = intl3.string;
  const t = tmp4(1236).t;
  if (isTryItOut) {
    let stringResult1 = string(t.ZFR9LF);
  } else {
    stringResult1 = string(t.Tii53U);
  }
  obj[4] = jsx(navigation(4338).Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2.5, children: stringResult1 });
  return jsx(tmp(14029), { style: tmp3.container, ctaText: null, showLinearGradient: true, onPress: null, children: null });
};