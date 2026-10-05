// discord_app/modules/user_profile/native/UserProfilePremiumUpsellCard.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../actions/UserSettingsModalActionCreators.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import usePremiumFeatureUpsellGetNitroDefault from "../../premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx";
import UserProfileUpsellCardDefault from "UserProfileUpsellCard.tsx";
import react from "../../../../_runtime/00019_react.js";
import Constants from "../../../Constants.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let isTryItOut, navigation;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({
  AnalyticsObjects: closure_4,
  AnalyticsPages: hasOwnProperty,
  AnalyticsSections: metroRequire,
  UserSettingsSections: metroImportDefault,
} = Constants);
const jsx = Fragment.jsx;
let items = [AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM];
let closure_10 = createStyles.createStyles((bottom) => {
  const obj = { container: obj2 };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let ctaText;
      let description;
      let disabled;
      let onPress;
      let style;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(8);
      ({ style, ctaText, description, disabled, onPress } = arg0);
      if (cResult[0] !== description) {
        const tmp6 = jsx(Text_Text.Text, {
          variant: "text-sm/normal",
          maxFontSizeMultiplier: 2.5,
          children: description,
        });
        cResult[0] = description;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === ctaText) {
        if (cResult[3] === disabled) {
          if (cResult[4] === onPress) {
            if (cResult[5] === style) {
              let tmp7;
              if (cResult[6] === tmp4) {
                tmp7 = cResult[7];
              }
              return tmp7;
            }
          }
        }
      }
      const tmp8 = jsx(UserProfileUpsellCardDefault, {
        style,
        ctaText,
        showLinearGradient: true,
        disabled,
        onPress,
        children: tmp4,
      });
      cResult[2] = ctaText;
      cResult[3] = disabled;
      cResult[4] = onPress;
      cResult[5] = style;
      cResult[6] = tmp4;
      cResult[7] = tmp8;
      tmp7 = tmp8;
    }
  : (arg0) => {
      let ctaText;
      let description;
      let disabled;
      let onPress;
      let style;
      ({ style, ctaText, description, disabled, onPress } = arg0);
      UserProfileUpsellCardDefault;
      return (
        <tmp style={style} ctaText={ctaText} showLinearGradient disabled={disabled} onPress={onPress}>
          {null}
        </tmp>
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      let tmp5;
      let tmp6;
      let tmp7;
      let obj = navigation(576);
      const cResult = obj.c(7);
      style = style.style;
      const obj2 = navigation(1490);
      navigation = obj2.useNavigation();
      if (cResult[0] !== navigation) {
        const fn = function n() {
          const obj = UserSettingsModalActionCreatorsDefault;
          obj.setSection(metroImportDefault.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
          navigation.push(metroImportDefault.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(navigation(1126).t.PxUx8e);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(navigation(1126).t.Tii53U);
        cResult[2] = stringResult;
        cResult[3] = stringResult1;
        tmp7 = stringResult1;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      if (cResult[4] === tmp5) {
        let tmp10;
        if (cResult[5] === style) {
          tmp10 = cResult[6];
        }
        return tmp10;
      }
      const tmp11 = <closure_11 style={style} ctaText={tmp6} description={tmp7} onPress={tmp5} />;
      cResult[4] = tmp5;
      cResult[5] = style;
      cResult[6] = tmp11;
      tmp10 = tmp11;
    }
  : (style) => {
      navigation = undefined;
      style = style.style;
      let obj = navigation(1490);
      navigation = obj.useNavigation();
      items = [navigation];
      const callback = react.useCallback(() => {
        const obj = UserSettingsModalActionCreatorsDefault;
        obj.setSection(metroImportDefault.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
        navigation.push(metroImportDefault.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
      }, items);
      const intl = navigation(1126).intl;
      const intl2 = navigation(1126).intl;
      return (
        <closure_11
          style={style}
          ctaText={intl.string(navigation(1126).t.PxUx8e)}
          description={intl2.string(navigation(1126).t.Tii53U)}
          onPress={callback}
        />
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      let analyticsLocations;
      let loading;
      let onPress;
      let tmp10;
      let tmp13;
      let tmp7;
      let tmp = analyticsLocations;
      let obj = analyticsLocations(576);
      const cResult = obj.c(10);
      style = style.style;
      let obj2 = analyticsLocations(6955);
      const nitroTrialCtaOverride = obj2.useNitroTrialCtaOverride("user_profile_premium_upsell_card");
      analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
      if (cResult[0] !== analyticsLocations) {
        const fn = function n() {
          let obj2;
          const obj = {
            analyticsLocation: obj2,
            analyticsLocations,
            premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
          };
          obj2 = {
            page: hasOwnProperty.USER_SETTINGS,
            section: metroRequire.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT,
            object: constants.BUTTON_CTA,
          };
          const tmp = openPremiumModalDefault;
          tmp(obj);
        };
        cResult[0] = analyticsLocations;
        cResult[1] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(
        false,
        tmp7,
        constants2.USER_SETTINGS,
        undefined,
        items,
      ));
      usePremiumFeatureUpsellGetNitroDefault(false, tmp7, constants2.USER_SETTINGS, undefined, items);
      const tmpResult = tmp(14477);
      const mobileNitroPreviewDirectCheckoutEnabled = tmpResult.useMobileNitroPreviewDirectCheckoutEnabled();
      if (cResult[2] !== nitroTrialCtaOverride) {
        let stringResult = nitroTrialCtaOverride;
        if (nitroTrialCtaOverride == null) {
          const intl = tmp(1126).intl;
          stringResult = intl.string(tmp(1126).t.pj0XBN);
        }
        cResult[2] = nitroTrialCtaOverride;
        cResult[3] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.ZFR9LF);
        cResult[4] = stringResult1;
        tmp13 = stringResult1;
      } else {
        tmp13 = cResult[4];
      }
      if (mobileNitroPreviewDirectCheckoutEnabled) {
        tmp7 = onPress;
      }
      if (cResult[5] === style) {
        if (cResult[6] === tmp10) {
          if (cResult[7] === (mobileNitroPreviewDirectCheckoutEnabled && loading)) {
            let tmp16;
            if (cResult[8] === tmp7) {
              tmp16 = cResult[9];
            }
            return tmp16;
          }
        }
      }
      const tmp17 = (
        <closure_11
          style={style}
          ctaText={tmp10}
          description={tmp13}
          disabled={mobileNitroPreviewDirectCheckoutEnabled && loading}
          onPress={tmp7}
        />
      );
      cResult[5] = style;
      cResult[6] = tmp10;
      cResult[7] = mobileNitroPreviewDirectCheckoutEnabled && loading;
      cResult[8] = tmp7;
      cResult[9] = tmp17;
      tmp16 = tmp17;
    }
  : (style) => {
      let loading;
      let onPress;
      let analyticsLocations;
      let tmp = analyticsLocations;
      style = style.style;
      let obj = analyticsLocations(6955);
      let nitroTrialCtaOverride = obj.useNitroTrialCtaOverride("user_profile_premium_upsell_card");
      analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
      items = [analyticsLocations];
      let callback = react.useCallback(() => {
        let obj2;
        const obj = {
          analyticsLocation: obj2,
          analyticsLocations,
          premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
        };
        obj2 = {
          page: hasOwnProperty.USER_SETTINGS,
          section: metroRequire.SETTINGS_CUSTOMIZE_PROFILE_TRY_IT_OUT,
          object: constants.BUTTON_CTA,
        };
        const tmp = openPremiumModalDefault;
        tmp(obj);
      }, items);
      ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(
        false,
        callback,
        constants2.USER_SETTINGS,
        undefined,
        items,
      ));
      usePremiumFeatureUpsellGetNitroDefault(false, callback, constants2.USER_SETTINGS, undefined, items);
      let obj2 = analyticsLocations(14477);
      const mobileNitroPreviewDirectCheckoutEnabled = obj2.useMobileNitroPreviewDirectCheckoutEnabled();
      if (nitroTrialCtaOverride == null) {
        const intl = tmp(1126).intl;
        nitroTrialCtaOverride = intl.string(tmp(1126).t.pj0XBN);
      }
      const intl2 = tmp(1126).intl;
      if (mobileNitroPreviewDirectCheckoutEnabled) {
        callback = onPress;
      }
      return (
        <closure_11
          style={style}
          ctaText={nitroTrialCtaOverride}
          description={intl2.string(tmp(1126).t.ZFR9LF)}
          disabled={mobileNitroPreviewDirectCheckoutEnabled && loading}
          onPress={callback}
        />
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isTryItOut) => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(4);
      isTryItOut = isTryItOut.isTryItOut;
      const tmp2 = closure_10(useSafeAreaInsetsDefault().bottom);
      if (isTryItOut) {
        let tmp7;
        if (cResult[0] !== tmp2.container) {
          const tmp10 = <closure_13 style={tmp2.container} />;
          cResult[0] = tmp2.container;
          cResult[1] = tmp10;
          tmp7 = tmp10;
        } else {
          tmp7 = cResult[1];
        }
        tmp3 = tmp7;
      } else if (cResult[2] !== tmp2.container) {
        const tmp6 = <closure_12 style={tmp2.container} />;
        cResult[2] = tmp2.container;
        cResult[3] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[3];
      }
      return tmp3;
    }
  : (isTryItOut) => {
      isTryItOut = isTryItOut.isTryItOut;
      return jsx(isTryItOut ? closure_13 : closure_12, {
        style: closure_10(useSafeAreaInsetsDefault().bottom).container,
      });
    };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumUpsellCard.tsx");

export const UserProfilePremiumUpsellCard = tmp3;
