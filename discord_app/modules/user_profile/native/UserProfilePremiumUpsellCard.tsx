// discord_app/modules/user_profile/native/UserProfilePremiumUpsellCard.tsx
import UserSettingsModalActionCreatorsDefault from "../../../actions/UserSettingsModalActionCreators.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Constants = fn(1074);
({
  AnalyticsObjects: closure_4,
  AnalyticsPages: hasOwnProperty,
  AnalyticsSections: metroRequire,
  UserSettingsSections: closure_7,
} = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_9 = createStyles.createStyles((bottom) => {
  const obj = { container: { position: "absolute", bottom, start: 0, end: 0 } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumUpsellCard.tsx");

export const UserProfilePremiumUpsellCard = function UserProfilePremiumUpsellCard(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  let navigation;
  let analyticsLocations;
  const tmp = analyticsLocations;
  const tmp3 = closure_9(analyticsLocations(1612)().bottom);
  navigation = navigation(1484).useNavigation();
  let obj = navigation(1484);
  let nitroTrialCtaOverride = navigation(7556).useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  const obj2 = navigation(7556);
  const tmp8 = analyticsLocations(7292);
  const items = [isTryItOut ? tmp8.USER_SETTINGS_TRY_OUT_PREMIUM : tmp8.USER_SETTINGS_USER_PROFILE];
  analyticsLocations = analyticsLocations(7272)(items).analyticsLocations;
  const items1 = [navigation];
  let callback = noop.useCallback(() => {
    UserSettingsModalActionCreatorsDefault.setSection(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items1);
  const items2 = [analyticsLocations];
  const callback1 = noop.useCallback(() => {
    const obj = {
      analyticsLocation: {
        page: constants2.USER_SETTINGS,
        section: constants3.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT,
        object: constants.BUTTON_CTA,
      },
      analyticsLocations,
      premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
    };
    openPremiumModalDefault(obj);
  }, items2);
  const obj3 = { style: tmp3.container, ctaText: null, showLinearGradient: true, onPress: null, children: null };
  const tmp7 = analyticsLocations(7272);
  if (isTryItOut) {
    if (nitroTrialCtaOverride == null) {
      const intl2 = tmp4(1115).intl;
      nitroTrialCtaOverride = intl2.string(tmp4(1115).t.pj0XBN);
    }
    let stringResult = nitroTrialCtaOverride;
  } else {
    const intl = tmp4(1115).intl;
    stringResult = intl.string(tmp4(1115).t.PxUx8e);
  }
  obj3.ctaText = stringResult;
  if (isTryItOut) {
    callback = callback1;
  }
  obj3.onPress = callback;
  const intl3 = tmp4(1115).intl;
  const string = intl3.string;
  const t = tmp4(1115).t;
  if (isTryItOut) {
    let stringResult1 = string(t.ZFR9LF);
  } else {
    stringResult1 = string(t.Tii53U);
  }
  obj3.children = jsx(navigation(4634).Text, {
    variant: "text-sm/normal",
    maxFontSizeMultiplier: 2.5,
    children: stringResult1,
  });
  return jsx(tmp(14736), {
    style: tmp3.container,
    ctaText: null,
    showLinearGradient: true,
    onPress: null,
    children: null,
  });
};
