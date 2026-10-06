// === Module 14489: UserProfilePremiumTryItOutSection ===

// Module 14489 (UserProfilePremiumTryItOutSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6664 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8896 */;
import openPremiumModalDefault from "openPremiumModal" /* 8943 */;
import UserProfileUpsellCardV2Default from "UserProfileUpsellCardV2" /* 14490 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let rect;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, divider: obj3, dividerLine: rect, lockCircle: size, lockIcon: { marginTop: -2 } };
obj2 = { marginTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { height: 28, marginVertical: nativeDefault.space.PX_24, marginHorizontal: -nativeDefault.space.PX_16, justifyContent: "center", alignItems: "center" };
rect = { position: "absolute", left: 0, right: 0, top: 13.5, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
size = { width: 28, height: 28, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_NORMAL, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_7 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsLocations;
  let items;
  let onLayout;
  let onPreviewPremium;
  let tmp10;
  let tmp12;
  let tmp16;
  let tmp7;
  let tmp8;
  let tmp = analyticsLocations;
  let obj = analyticsLocations(576);
  const cResult = obj.c(22);
  ({ onLayout, onPreviewPremium } = arg0);
  const tmp4 = closure_7();
  const tmp6 = useAnalyticsLocationsDefault;
  analyticsLocations = tmp6(AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM).analyticsLocations;
  if (cResult[0] !== analyticsLocations) {
    const fn = function n() {
      const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      const tmp = openPremiumModalDefault;
      tmp(obj);
    };
    cResult[0] = analyticsLocations;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  const container = tmp4.container;
  if (cResult[2] !== tmp7) {
    const intl = tmp(1126).intl;
    const obj2 = { onClick: tmp7 };
    const formatResult = intl.format(tmp(1126).t.TmfgI2, obj2);
    cResult[2] = tmp7;
    cResult[3] = formatResult;
    tmp8 = formatResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(tmp(1126).t.PxUx8e);
    cResult[4] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== tmp4.dividerLine) {
    const obj3 = { style: tmp4.dividerLine };
    const tmp15 = closure_5(View, obj3);
    cResult[5] = tmp4.dividerLine;
    cResult[6] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== tmp4.lockIcon) {
    const obj4 = { size: "xs", color: nativeDefault.colors.ICON_MUTED, style: tmp4.lockIcon };
    const LockIcon = tmp(5886).LockIcon;
    const tmp18 = closure_5(LockIcon, obj4);
    cResult[7] = tmp4.lockIcon;
    cResult[8] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] === tmp4.lockCircle) {
    let tmp19;
    if (cResult[10] === tmp16) {
      tmp19 = cResult[11];
    }
    if (cResult[12] === tmp4.divider) {
      if (cResult[13] === tmp12) {
        let tmp21;
        if (cResult[14] === tmp19) {
          tmp21 = cResult[15];
        }
        if (cResult[16] === onLayout) {
          if (cResult[17] === onPreviewPremium) {
            if (cResult[18] === tmp4.container) {
              if (cResult[19] === tmp8) {
                let tmp25;
                if (cResult[20] === tmp21) {
                  tmp25 = cResult[21];
                }
                return tmp25;
              }
            }
          }
        }
        const obj5 = { style: container, text: tmp8, textAlign: "center", buttonText: tmp10, onButtonPress: onPreviewPremium, onLayout, children: tmp21 };
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
    const obj6 = { style: tmp4.divider, children: items };
    items = [tmp12, tmp19];
    const tmp24 = closure_6(View, obj6);
    cResult[12] = tmp4.divider;
    cResult[13] = tmp12;
    cResult[14] = tmp19;
    cResult[15] = tmp24;
    tmp21 = tmp24;
  }
  const obj7 = { style: tmp4.lockCircle, children: tmp16 };
  const tmp20 = closure_5(View, obj7);
  cResult[9] = tmp4.lockCircle;
  cResult[10] = tmp16;
  cResult[11] = tmp20;
  tmp19 = tmp20;
}) : ((arg0) => {
  let LockIcon;
  let intl;
  let intl2;
  let items1;
  let obj2;
  let obj5;
  let onLayout;
  let onPreviewPremium;
  ({ onLayout, onPreviewPremium } = arg0);
  let tmp = closure_7();
  const tmp2 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp2(AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM).analyticsLocations;
  const items = [analyticsLocations];
  const callback = react.useCallback(() => {
    const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    const tmp = openPremiumModalDefault;
    tmp(obj);
  }, items);
  let obj = { style: tmp.container, text: intl.format(analyticsLocations(1126).t.TmfgI2, { onClick: callback }), textAlign: "center", buttonText: intl2.string(analyticsLocations(1126).t.PxUx8e), onButtonPress: onPreviewPremium, onLayout, children: closure_6(View, obj2) };
  const tmp4 = UserProfileUpsellCardV2Default;
  intl = analyticsLocations(1126).intl;
  intl2 = analyticsLocations(1126).intl;
  obj2 = { style: tmp.divider, children: items1 };
  items1 = [, ];
  const obj3 = { style: tmp.dividerLine };
  items1[0] = closure_5(View, obj3);
  const obj4 = { style: tmp.lockCircle, children: closure_5(LockIcon, obj5) };
  obj5 = { size: "xs", color: nativeDefault.colors.ICON_MUTED, style: tmp.lockIcon };
  LockIcon = analyticsLocations(5886).LockIcon;
  items1[1] = closure_5(View, obj4);
  return closure_5(tmp4, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumTryItOutSection.tsx");

export default tmp4;