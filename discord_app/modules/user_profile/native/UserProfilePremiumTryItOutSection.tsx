// discord_app/modules/user_profile/native/UserProfilePremiumTryItOutSection.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import UserProfileUpsellCardV2Default from "UserProfileUpsellCardV2.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: { marginTop: nativeDefault.space.PX_16 },
  divider: null,
  dividerLine: null,
  lockCircle: null,
  lockIcon: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_16 };
obj2.divider = {
  height: 28,
  marginVertical: nativeDefault.space.PX_24,
  marginHorizontal: -nativeDefault.space.PX_16,
  justifyContent: "center",
  alignItems: "center",
};
const rect = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 13.5,
  height: 1,
  backgroundColor: nativeDefault.colors.BORDER_NORMAL,
};
obj2.dividerLine = rect;
let size = {
  width: 28,
  height: 28,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.lockCircle = size;
obj2.lockIcon = { marginTop: -2 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  height: 28,
  marginVertical: nativeDefault.space.PX_24,
  marginHorizontal: -nativeDefault.space.PX_16,
  justifyContent: "center",
  alignItems: "center",
};
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumTryItOutSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = analyticsLocations(576).c(22);
      ({ onLayout, onPreviewPremium } = arg0);
      const tmp4 = closure_7();
      let obj = analyticsLocations(576);
      analyticsLocations = useAnalyticsLocationsDefault(
        AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM,
      ).analyticsLocations;
      if (cResult[0] !== analyticsLocations) {
        const fn = function n() {
          const obj = {
            analyticsLocations,
            premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
          };
          openPremiumModalDefault(obj);
        };
        cResult[0] = analyticsLocations;
        cResult[1] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== tmp7) {
        const intl = tmp(1126).intl;
        const obj2 = { onClick: tmp7 };
        const formatResult = intl.format(tmp(1126).t.TmfgI2, obj2);
        cResult[2] = tmp7;
        cResult[3] = formatResult;
        let tmp8 = formatResult;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult = intl2.string(tmp(1126).t.PxUx8e);
        cResult[4] = stringResult;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== tmp4.dividerLine) {
        const obj3 = { style: tmp4.dividerLine };
        const tmp15 = closure_5(View, obj3);
        cResult[5] = tmp4.dividerLine;
        cResult[6] = tmp15;
        let tmp12 = tmp15;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] !== tmp4.lockIcon) {
        const obj4 = { size: "xs", color: nativeDefault.colors.ICON_MUTED, style: tmp4.lockIcon };
        const tmp18 = closure_5(tmp(5886).LockIcon, obj4);
        cResult[7] = tmp4.lockIcon;
        cResult[8] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] === tmp4.lockCircle) {
        if (cResult[10] === tmp16) {
          let tmp19 = cResult[11];
        }
        if (cResult[12] === tmp4.divider) {
          if (cResult[13] === tmp12) {
            if (cResult[14] === tmp19) {
              let tmp21 = cResult[15];
            }
            if (cResult[16] === onLayout) {
              if (cResult[17] === onPreviewPremium) {
                if (cResult[18] === tmp4.container) {
                  if (cResult[19] === tmp8) {
                    if (cResult[20] === tmp21) {
                      let tmp25 = cResult[21];
                    }
                    return tmp25;
                  }
                }
              }
            }
            const obj5 = {
              style: tmp4.container,
              text: tmp8,
              textAlign: "center",
              buttonText: tmp10,
              onButtonPress: onPreviewPremium,
              onLayout,
              children: tmp21,
            };
            const tmp27 = closure_5(UserProfileUpsellCardV2Default, obj5);
            cResult[16] = onLayout;
            cResult[17] = onPreviewPremium;
            cResult[18] = tmp4.container;
            cResult[19] = tmp8;
            cResult[20] = tmp21;
            cResult[21] = tmp27;
            tmp25 = tmp27;
          }
        }
        const obj6 = { style: tmp4.divider, children: null };
        const items = [tmp12, tmp19];
        obj6.children = items;
        const tmp24 = closure_6(View, obj6);
        cResult[12] = tmp4.divider;
        cResult[13] = tmp12;
        cResult[14] = tmp19;
        cResult[15] = tmp24;
        tmp21 = tmp24;
      }
      const tmp20 = closure_5(View, { style: tmp4.lockCircle, children: tmp16 });
      cResult[9] = tmp4.lockCircle;
      cResult[10] = tmp16;
      cResult[11] = tmp20;
      tmp19 = tmp20;
      const obj7 = { style: tmp4.lockCircle, children: tmp16 };
    }
  : (arg0) => {
      ({ onLayout, onPreviewPremium } = arg0);
      const tmp = closure_7();
      const analyticsLocations = useAnalyticsLocationsDefault(
        AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM,
      ).analyticsLocations;
      const items = [analyticsLocations];
      const callback = noop.useCallback(() => {
        const obj = {
          analyticsLocations,
          premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
        };
        openPremiumModalDefault(obj);
      }, items);
      let obj = {
        style: tmp.container,
        text: null,
        textAlign: "center",
        buttonText: null,
        onButtonPress: null,
        onLayout: null,
        children: null,
      };
      const intl = analyticsLocations(1126).intl;
      obj.text = intl.format(analyticsLocations(1126).t.TmfgI2, { onClick: callback });
      const intl2 = analyticsLocations(1126).intl;
      obj.buttonText = intl2.string(analyticsLocations(1126).t.PxUx8e);
      obj.onButtonPress = onPreviewPremium;
      obj.onLayout = onLayout;
      const obj2 = { style: tmp.divider, children: null };
      const items1 = [closure_5(View, { style: tmp.dividerLine })];
      const obj4 = { style: tmp.lockCircle, children: null };
      const obj3 = { style: tmp.dividerLine };
      const tmp4 = UserProfileUpsellCardV2Default;
      obj4.children = closure_5(analyticsLocations(5886).LockIcon, {
        size: "xs",
        color: nativeDefault.colors.ICON_MUTED,
        style: tmp.lockIcon,
      });
      items1[1] = closure_5(View, obj4);
      obj2.children = items1;
      obj.children = closure_6(View, obj2);
      return closure_5(tmp4, obj);
    };
