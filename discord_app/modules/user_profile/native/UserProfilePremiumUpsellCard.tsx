// === Module 16120: UserProfilePremiumUpsellCard ===

// Module 16120 (UserProfilePremiumUpsellCard)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import Text_Text from "Text/Text" /* 5603 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6348 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6349 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7316 */;
import openPremiumModalDefault from "openPremiumModal" /* 9059 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9653 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 16046 */;
import noop from "module_19" /* 19 */;

require = fn;
function UpsellCardLayout(arg0) {
  ({ style, ctaText, description, onPress } = arg0);
  const obj = { style, ctaText, showLinearGradient: true, onPress, children: jsx(Text_Text.Text, { variant: "body-sm/normal", maxFontSizeMultiplier: 2.5, children: description }) };
  return jsx(UserProfileUpsellCardDefault, { style, ctaText, showLinearGradient: true, onPress, children: jsx(Text_Text.Text, { variant: "body-sm/normal", maxFontSizeMultiplier: 2.5, children: description }) });
}
function PreviewNitroCard(style) {
  let navigation;
  navigation = navigation(1500).useNavigation();
  items = [navigation];
  const obj2 = { style: style.style, ctaText: null, description: null, onPress: null };
  const callback = noop.useCallback(() => {
    UserSettingsModalActionCreatorsDefault.setSection(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items);
  const intl = navigation(1112).intl;
  obj2.ctaText = intl.string(navigation(1112).t.PxUx8e);
  const intl2 = navigation(1112).intl;
  obj2.description = intl2.string(navigation(1112).t.Tii53U);
  obj2.onPress = callback;
  return <UpsellCardLayout style={style.style} ctaText={null} description={null} onPress={null} />;
}
function GetNitroCard(style) {
  let analyticsLocations;
  let nitroTrialCtaOverride = analyticsLocations(9093).useNitroTrialCtaOverride();
  analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
  items = [analyticsLocations];
  const obj2 = { style: style.style, ctaText: null, description: null, onPress: null };
  const callback = noop.useCallback(() => {
    const obj = { analyticsLocation: { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: constants.BUTTON_CTA }, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    openPremiumModalDefault(obj);
  }, items);
  if (nitroTrialCtaOverride == null) {
    const intl = tmp(1112).intl;
    nitroTrialCtaOverride = intl.string(tmp(1112).t.pj0XBN);
  }
  obj2.ctaText = nitroTrialCtaOverride;
  const intl2 = tmp(1112).intl;
  obj2.description = intl2.string(analyticsLocations(1112).t.ZFR9LF);
  obj2.onPress = callback;
  return <UpsellCardLayout style={style.style} ctaText={null} description={null} onPress={null} />;
}
const Constants = fn(1071);
({ AnalyticsObjects: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: closure_6, UserSettingsSections: metroImportDefault } = Constants);
const jsx = fn(21).jsx;
let items = [AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM];
const createStyles = fn(5012);
let closure_10 = createStyles.createStyles((bottom) => {
  const obj = { container: { position: "absolute", bottom, start: 0, end: 0 } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumUpsellCard.tsx");

export function UserProfilePremiumUpsellCard(isTryItOut) {
  return jsx(isTryItOut.isTryItOut ? GetNitroCard : PreviewNitroCard, { style: closure_10(useSafeAreaInsetsDefault().bottom).container });
}