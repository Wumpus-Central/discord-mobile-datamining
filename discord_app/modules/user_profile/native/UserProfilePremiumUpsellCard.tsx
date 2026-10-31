// discord_app/modules/user_profile/native/UserProfilePremiumUpsellCard.tsx
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../actions/UserSettingsModalActionCreators.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import UserProfileUpsellCardDefault from "UserProfileUpsellCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function UpsellCardLayout(arg0) {
  ({ style, ctaText, description, onPress } = arg0);
  const obj = {
    style,
    ctaText,
    showLinearGradient: true,
    onPress,
    children: jsx(Text_Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2.5, children: description }),
  };
  return jsx(UserProfileUpsellCardDefault, {
    style,
    ctaText,
    showLinearGradient: true,
    onPress,
    children: jsx(Text_Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2.5, children: description }),
  });
}
function PreviewNitroCard(style) {
  let navigation;
  navigation = navigation(1497).useNavigation();
  items = [navigation];
  const obj2 = { style: style.style, ctaText: null, description: null, onPress: null };
  const callback = noop.useCallback(() => {
    UserSettingsModalActionCreatorsDefault.setSection(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items);
  const intl = navigation(1113).intl;
  obj2.ctaText = intl.string(navigation(1113).t.PxUx8e);
  const intl2 = navigation(1113).intl;
  obj2.description = intl2.string(navigation(1113).t.Tii53U);
  obj2.onPress = callback;
  return <UpsellCardLayout style={style.style} ctaText={null} description={null} onPress={null} />;
}
function GetNitroCard(style) {
  let analyticsLocations;
  let nitroTrialCtaOverride = analyticsLocations(7626).useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
  items = [analyticsLocations];
  const obj2 = { style: style.style, ctaText: null, description: null, onPress: null };
  const callback = noop.useCallback(() => {
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
  }, items);
  if (nitroTrialCtaOverride == null) {
    const intl = tmp(1113).intl;
    nitroTrialCtaOverride = intl.string(tmp(1113).t.pj0XBN);
  }
  obj2.ctaText = nitroTrialCtaOverride;
  const intl2 = tmp(1113).intl;
  obj2.description = intl2.string(analyticsLocations(1113).t.ZFR9LF);
  obj2.onPress = callback;
  return <UpsellCardLayout style={style.style} ctaText={null} description={null} onPress={null} />;
}
const Constants = fn(1072);
({
  AnalyticsObjects: closure_4,
  AnalyticsPages: hasOwnProperty,
  AnalyticsSections: metroRequire,
  UserSettingsSections: closure_7,
} = Constants);
const jsx = fn(21).jsx;
let items = [AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM];
const createStyles = fn(5014);
let closure_10 = createStyles.createStyles((bottom) => {
  const obj = { container: { position: "absolute", bottom, start: 0, end: 0 } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumUpsellCard.tsx");

export function UserProfilePremiumUpsellCard(isTryItOut) {
  return jsx(isTryItOut.isTryItOut ? GetNitroCard : PreviewNitroCard, {
    style: closure_10(useSafeAreaInsetsDefault().bottom).container,
  });
}
