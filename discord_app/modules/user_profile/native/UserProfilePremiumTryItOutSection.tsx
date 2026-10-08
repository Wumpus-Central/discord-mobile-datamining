// === Module 14719: UserProfilePremiumTryItOutSection ===

// Module 14719 (UserProfilePremiumTryItOutSection)
import nativeDefault from "native" /* 587 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6841 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import openPremiumModalDefault from "openPremiumModal" /* 9328 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9329 */;
import usePremiumTryItOutPresetShuffleDefault from "usePremiumTryItOutPresetShuffle" /* 14720 */;
import UserProfileTryItOutFieldsDefault from "UserProfileTryItOutFields" /* 14742 */;
import UserProfileUpsellCardV2Default from "UserProfileUpsellCardV2" /* 14750 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { marginTop: nativeDefault.space.PX_16 }, cardInner: null, divider: null, dividerLine: null, lockCircle: null, lockIcon: null };
let obj3 = { marginTop: nativeDefault.space.PX_16 };
obj2.cardInner = { paddingTop: nativeDefault.space.PX_24 };
let obj4 = { paddingTop: nativeDefault.space.PX_24 };
obj2.divider = { height: 28, marginVertical: nativeDefault.space.PX_24, marginHorizontal: -nativeDefault.space.PX_16, justifyContent: "center", alignItems: "center" };
const rect = { position: "absolute", left: 0, right: 0, top: 13.5, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
obj2.dividerLine = rect;
let size = { width: 28, height: 28, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_NORMAL, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.lockCircle = size;
obj2.lockIcon = { marginTop: -2 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { height: 28, marginVertical: nativeDefault.space.PX_24, marginHorizontal: -nativeDefault.space.PX_16, justifyContent: "center", alignItems: "center" };
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumTryItOutSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfilePremiumTryItOutSection(arg0) {
  const cResult = analyticsLocations(576).c(26);
  ({ currentUser, onLayout, onPreviewPremium } = arg0);
  const tmp4 = closure_7();
  let obj = analyticsLocations(576);
  analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM).analyticsLocations;
  usePremiumTryItOutPresetShuffleDefault();
  if (cResult[0] !== analyticsLocations) {
    const fn = function o() {
      const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      openPremiumModalDefault(obj);
    };
    cResult[0] = analyticsLocations;
    cResult[1] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  ({ container, cardInner } = tmp4);
  if (cResult[2] !== tmp8) {
    const intl = tmp(1126).intl;
    const obj2 = { onClick: tmp8 };
    const formatResult = intl.format(tmp(1126).t.TmfgI2, obj2);
    cResult[2] = tmp8;
    cResult[3] = formatResult;
    let tmp9 = formatResult;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(tmp(1126).t.PxUx8e);
    cResult[4] = stringResult;
    let tmp11 = stringResult;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== tmp4.dividerLine) {
    const obj3 = { style: tmp4.dividerLine };
    const tmp16 = closure_5(View, obj3);
    cResult[5] = tmp4.dividerLine;
    cResult[6] = tmp16;
    let tmp13 = tmp16;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] !== tmp4.lockIcon) {
    const obj4 = { size: "xs", color: nativeDefault.colors.ICON_MUTED, style: tmp4.lockIcon };
    const tmp19 = closure_5(tmp(8198).LockIcon, obj4);
    cResult[7] = tmp4.lockIcon;
    cResult[8] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] === tmp4.lockCircle) {
    if (cResult[10] === tmp17) {
      let tmp20 = cResult[11];
    }
    if (cResult[12] === tmp4.divider) {
      if (cResult[13] === tmp13) {
        if (cResult[14] === tmp20) {
          let tmp22 = cResult[15];
        }
        if (cResult[16] !== currentUser) {
          const obj5 = { currentUser, mode: "entrypoint" };
          const tmp28 = closure_5(UserProfileTryItOutFieldsDefault, obj5);
          cResult[16] = currentUser;
          cResult[17] = tmp28;
          let tmp26 = tmp28;
        } else {
          tmp26 = cResult[17];
        }
        if (cResult[18] === onLayout) {
          if (cResult[19] === onPreviewPremium) {
            if (cResult[20] === tmp4.cardInner) {
              if (cResult[21] === tmp4.container) {
                if (cResult[22] === tmp26) {
                  if (cResult[23] === tmp9) {
                    if (cResult[24] === tmp22) {
                      let tmp29 = cResult[25];
                    }
                    return tmp29;
                  }
                }
              }
            }
          }
        }
        const obj6 = { style: container, innerStyle: cardInner, text: tmp9, textAlign: "center", buttonText: tmp11, onButtonPress: onPreviewPremium, onLayout, children: null };
        const items = [tmp22, tmp26];
        obj6.children = items;
        const tmp31 = closure_6(UserProfileUpsellCardV2Default, obj6);
        cResult[18] = onLayout;
        cResult[19] = onPreviewPremium;
        cResult[20] = tmp4.cardInner;
        cResult[21] = tmp4.container;
        cResult[22] = tmp26;
        cResult[23] = tmp9;
        cResult[24] = tmp22;
        cResult[25] = tmp31;
        tmp29 = tmp31;
      }
    }
    const obj7 = { style: tmp4.divider, children: null };
    const items1 = [tmp13, tmp20];
    obj7.children = items1;
    const tmp25 = closure_6(View, obj7);
    cResult[12] = tmp4.divider;
    cResult[13] = tmp13;
    cResult[14] = tmp20;
    cResult[15] = tmp25;
    tmp22 = tmp25;
  }
  const tmp21 = closure_5(View, { style: tmp4.lockCircle, children: tmp17 });
  cResult[9] = tmp4.lockCircle;
  cResult[10] = tmp17;
  cResult[11] = tmp21;
  tmp20 = tmp21;
  const obj8 = { style: tmp4.lockCircle, children: tmp17 };
}) : (function UserProfilePremiumTryItOutSection(arg0) {
  ({ currentUser, onLayout, onPreviewPremium } = arg0);
  const tmp = closure_7();
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM).analyticsLocations;
  usePremiumTryItOutPresetShuffleDefault();
  const items = [analyticsLocations];
  const callback = noop.useCallback(() => {
    const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    openPremiumModalDefault(obj);
  }, items);
  let obj = { style: tmp.container, innerStyle: tmp.cardInner, text: null, textAlign: "center", buttonText: null, onButtonPress: null, onLayout: null, children: null };
  const intl = analyticsLocations(1126).intl;
  obj.text = intl.format(analyticsLocations(1126).t.TmfgI2, { onClick: callback });
  const intl2 = analyticsLocations(1126).intl;
  obj.buttonText = intl2.string(analyticsLocations(1126).t.PxUx8e);
  obj.onButtonPress = onPreviewPremium;
  obj.onLayout = onLayout;
  const obj2 = { style: tmp.divider, children: null };
  const items1 = [closure_5(View, { style: tmp.dividerLine }), ];
  const obj4 = { style: tmp.lockCircle, children: null };
  const obj3 = { style: tmp.dividerLine };
  const tmp5 = UserProfileUpsellCardV2Default;
  obj4.children = closure_5(analyticsLocations(8198).LockIcon, { size: "xs", color: nativeDefault.colors.ICON_MUTED, style: tmp.lockIcon });
  items1[1] = closure_5(View, obj4);
  obj2.children = items1;
  const items2 = [closure_6(View, obj2), closure_5(UserProfileTryItOutFieldsDefault, { currentUser, mode: "entrypoint" })];
  obj.children = items2;
  return closure_6(tmp5, obj);
});