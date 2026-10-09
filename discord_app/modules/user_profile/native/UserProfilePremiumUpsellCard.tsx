// === Module 14860: UserProfilePremiumUpsellCard ===

// Module 14860 (UserProfilePremiumUpsellCard)
import c from "c" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import Text_Text from "Text/Text" /* 5087 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6678 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6848 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6872 */;
import openPremiumModalDefault from "openPremiumModal" /* 9366 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9367 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9489 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 14800 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1085);
({ AnalyticsObjects: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsx = fn(21).jsx;
let items = [AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM];
const createStyles = fn(5091);
let closure_10 = createStyles.createStyles((bottom) => {
  const obj = { container: { position: "absolute", bottom, start: 0, end: 0 } };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function UpsellCardLayout(arg0) {
  const cResult = c.c(8);
  ({ style, ctaText, description, disabled, onPress } = arg0);
  if (cResult[0] !== description) {
    const obj2 = { variant: "text-sm/normal", maxFontSizeMultiplier: 2.5, children: description };
    const tmp6 = jsx(Text_Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2.5, children: description });
    cResult[0] = description;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === ctaText) {
    if (cResult[3] === disabled) {
      if (cResult[4] === onPress) {
        if (cResult[5] === style) {
          if (cResult[6] === tmp4) {
            let tmp7 = cResult[7];
          }
          return tmp7;
        }
      }
    }
  }
  const tmp8 = jsx(UserProfileUpsellCardDefault, { style, ctaText, showLinearGradient: true, disabled, onPress, children: tmp4 });
  cResult[2] = ctaText;
  cResult[3] = disabled;
  cResult[4] = onPress;
  cResult[5] = style;
  cResult[6] = tmp4;
  cResult[7] = tmp8;
  tmp7 = tmp8;
}) : (function UpsellCardLayout(arg0) {
  ({ style, ctaText, description, disabled, onPress } = arg0);
  const obj = { style, ctaText, showLinearGradient: true, disabled, onPress, children: jsx(Text_Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2.5, children: description }) };
  return jsx(UserProfileUpsellCardDefault, { style, ctaText, showLinearGradient: true, disabled, onPress, children: jsx(Text_Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2.5, children: description }) });
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function PreviewNitroCard(style) {
  const cResult = navigation(576).c(7);
  style = style.style;
  const obj = navigation(576);
  navigation = navigation(1503).useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function n() {
      UserSettingsModalActionCreatorsDefault.setSection(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
      navigation.push(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.PxUx8e);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.Tii53U);
    cResult[2] = stringResult;
    cResult[3] = stringResult1;
    let tmp7 = stringResult1;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    if (cResult[5] === style) {
      let tmp10 = cResult[6];
    }
    return tmp10;
  }
  const tmp11 = <closure_11 style={style} ctaText={tmp6} description={tmp7} onPress={tmp5} />;
  cResult[4] = tmp5;
  cResult[5] = style;
  cResult[6] = tmp11;
  tmp10 = tmp11;
  const obj2 = navigation(1503);
}) : (function PreviewNitroCard(style) {
  let navigation;
  navigation = navigation(1503).useNavigation();
  items = [navigation];
  const obj2 = { style: style.style, ctaText: null, description: null, onPress: null };
  const callback = noop.useCallback(() => {
    UserSettingsModalActionCreatorsDefault.setSection(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(constants4.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items);
  const intl = navigation(1126).intl;
  obj2.ctaText = intl.string(navigation(1126).t.PxUx8e);
  const intl2 = navigation(1126).intl;
  obj2.description = intl2.string(navigation(1126).t.Tii53U);
  obj2.onPress = callback;
  return <closure_11 style={style.style} ctaText={null} description={null} onPress={null} />;
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function GetNitroCard(style) {
  const cResult = analyticsLocations(576).c(10);
  style = style.style;
  let obj = analyticsLocations(576);
  const nitroTrialCtaOverride = analyticsLocations(7162).useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
  if (cResult[0] !== analyticsLocations) {
    const fn = function n() {
      const obj = { analyticsLocation: { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: constants.BUTTON_CTA }, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      openPremiumModalDefault(obj);
    };
    cResult[0] = analyticsLocations;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  const obj2 = analyticsLocations(7162);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, tmp7, constants2.USER_SETTINGS, undefined, items));
  const tmp8 = usePremiumFeatureUpsellGetNitroDefault(false, tmp7, constants2.USER_SETTINGS, undefined, items);
  const mobileNitroPreviewDirectCheckoutEnabled = analyticsLocations(14861).useMobileNitroPreviewDirectCheckoutEnabled();
  if (cResult[2] !== nitroTrialCtaOverride) {
    let stringResult = nitroTrialCtaOverride;
    if (nitroTrialCtaOverride == null) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.pj0XBN);
    }
    cResult[2] = nitroTrialCtaOverride;
    cResult[3] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.ZFR9LF);
    cResult[4] = stringResult1;
    let tmp13 = stringResult1;
  } else {
    tmp13 = cResult[4];
  }
  let tmp15 = mobileNitroPreviewDirectCheckoutEnabled;
  if (mobileNitroPreviewDirectCheckoutEnabled) {
    tmp15 = loading;
  }
  if (mobileNitroPreviewDirectCheckoutEnabled) {
    tmp7 = onPress;
  }
  if (cResult[5] === style) {
    if (cResult[6] === tmp10) {
      if (cResult[7] === tmp15) {
        if (cResult[8] === tmp7) {
          let tmp16 = cResult[9];
        }
        return tmp16;
      }
    }
  }
  const tmp17 = <closure_11 style={style} ctaText={tmp10} description={tmp13} disabled={tmp15} onPress={tmp7} />;
  cResult[5] = style;
  cResult[6] = tmp10;
  cResult[7] = tmp15;
  cResult[8] = tmp7;
  cResult[9] = tmp17;
  tmp16 = tmp17;
  const tmpResult = analyticsLocations(14861);
}) : (function GetNitroCard(style) {
  let analyticsLocations;
  let nitroTrialCtaOverride = analyticsLocations(7162).useNitroTrialCtaOverride("user_profile_premium_upsell_card");
  analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
  items = [analyticsLocations];
  let callback = noop.useCallback(() => {
    const obj = { analyticsLocation: { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT, object: constants.BUTTON_CTA }, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    openPremiumModalDefault(obj);
  }, items);
  let obj = analyticsLocations(7162);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants2.USER_SETTINGS, undefined, items));
  const tmp5 = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants2.USER_SETTINGS, undefined, items);
  const mobileNitroPreviewDirectCheckoutEnabled = analyticsLocations(14861).useMobileNitroPreviewDirectCheckoutEnabled();
  const obj3 = { style: style.style, ctaText: null, description: null, disabled: null, onPress: null };
  if (nitroTrialCtaOverride == null) {
    const intl = tmp(1126).intl;
    nitroTrialCtaOverride = intl.string(tmp(1126).t.pj0XBN);
  }
  obj3.ctaText = nitroTrialCtaOverride;
  const intl2 = tmp(1126).intl;
  obj3.description = intl2.string(analyticsLocations(1126).t.ZFR9LF);
  let tmp9 = mobileNitroPreviewDirectCheckoutEnabled;
  if (mobileNitroPreviewDirectCheckoutEnabled) {
    tmp9 = loading;
  }
  obj3.disabled = tmp9;
  if (mobileNitroPreviewDirectCheckoutEnabled) {
    callback = onPress;
  }
  obj3.onPress = callback;
  return <closure_11 style={style.style} ctaText={null} description={null} disabled={null} onPress={null} />;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumUpsellCard.tsx");

export const UserProfilePremiumUpsellCard = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfilePremiumUpsellCard(isTryItOut) {
  const cResult = c.c(4);
  let container = closure_10(useSafeAreaInsetsDefault().bottom);
  if (isTryItOut.isTryItOut) {
    if (cResult[0] !== container.container) {
      const obj2 = { style: container.container };
      const tmp9 = <closure_13 style={container.container} />;
      container = container.container;
      cResult[0] = container;
      cResult[1] = tmp9;
    }
  } else {
    if (cResult[2] !== container.container) {
      const obj3 = { style: container.container };
      const tmp5 = <closure_12 style={container.container} />;
      cResult[2] = container.container;
      cResult[3] = tmp5;
      let tmp2 = tmp5;
    } else {
      tmp2 = cResult[3];
    }
    return tmp2;
  }
}) : (function UserProfilePremiumUpsellCard(isTryItOut) {
  return jsx(isTryItOut.isTryItOut ? closure_13 : closure_12, { style: closure_10(useSafeAreaInsetsDefault().bottom).container });
});