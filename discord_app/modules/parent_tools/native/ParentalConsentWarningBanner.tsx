// === Module 17441: ParentalConsentWarningBanner ===

// Module 17441 (ParentalConsentWarningBanner)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Text_Text from "Text/Text" /* 4892 */;
import openUserSettings from "openUserSettings" /* 6895 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7062 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7063 */;
import _modDef7076 from "module_7076" /* 7076 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, children, obj1, openUserSettingsResult, trackResult;

let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_4;
let map1;
let metroImportAll;
let obj2;
let obj3;
let rect;
let unpackModuleId;
({ Pressable: closure_4, StyleSheet } = react_native);
const View = react_native.View;
const FamilyCenterSubPages = FamilyCenterConstants.FamilyCenterSubPages;
({ AnalyticEvents: metroImportAll, UserSettingsSections: c9, VerticalGradient: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let closure_14 = 28 + nativeDefault.space.PX_16;
const locations = [0.5875, 1];
let createStyles = createStyles_mod;
let obj = { strip: rect, pressable: obj2, label: obj3, link: { textDecorationLine: "underline" } };
rect = { position: "absolute", top: 0, left: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { paddingRight: nativeDefault.space.PX_8 };
let closure_16 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let Text;
  let daysRemaining;
  let formatResult;
  let intl;
  let items3;
  let link;
  let obj14;
  let tmp11;
  let obj = require("react");
  const cResult = obj.c(28);
  children = children.children;
  const tmp4 = closure_16();
  _require = tmp4;
  const tmp6 = daysRemaining(1618)();
  let obj2 = require("useParentalConsentWarning");
  const parentalConsentWarning = obj2.useParentalConsentWarning();
  let obj3 = require("useIsParentalConsentBannerActive");
  const isParentalConsentBannerActive = obj3.useIsParentalConsentBannerActive();
  let obj4 = require("useIsOnMainSurface");
  const isOnMainSurface = obj4.useIsOnMainSurface();
  let obj5 = require("useGlobalStatusIndicatorState");
  const isVisible = obj5.useGlobalStatusIndicatorState().isVisible;
  const obj6 = require("useToken");
  const token = obj6.useToken(daysRemaining(587).colors.BACKGROUND_FEEDBACK_WARNING);
  if (cResult[0] !== token) {
    const obj7 = daysRemaining(7076)(token);
    const setAlphaResult = obj7.setAlpha(0);
    const toRgbStringResult = setAlphaResult.toRgbString();
    cResult[0] = token;
    cResult[1] = toRgbStringResult;
    tmp11 = toRgbStringResult;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] === tmp11) {
    let tmp13;
    if (cResult[3] === token) {
      tmp13 = cResult[4];
    }
    daysRemaining = undefined;
    if (parentalConsentWarning != null) {
      daysRemaining = parentalConsentWarning.daysRemaining;
    }
    if (daysRemaining == null) {
      daysRemaining = null;
    }
    const sum = tmp6.top + closure_14;
    if (cResult[5] !== daysRemaining) {
      class I {
        constructor() {
          obj = closure_1(closure_2[16]);
          obj1 = { days_remaining: c1 };
          trackResult = obj.track(AnalyticEvents.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, obj1);
          obj3 = closure_1(closure_2[17]);
          tab = obj3.selectTab(FamilyCenterSubPages.REQUESTS);
          obj4 = closure_0(closure_2[18]);
          obj6 = { screen: UserSettingsSections.FAMILY_CENTER };
          openUserSettingsResult = obj4.openUserSettings(obj6);
          return;
        }
      }
      cResult[5] = daysRemaining;
      cResult[6] = I;
    } else {
      class I {
        constructor() {
          obj = closure_1(closure_2[16]);
          obj1 = { days_remaining: c1 };
          trackResult = obj.track(AnalyticEvents.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, obj1);
          obj3 = closure_1(closure_2[17]);
          tab = obj3.selectTab(FamilyCenterSubPages.REQUESTS);
          obj4 = closure_0(closure_2[18]);
          obj6 = { screen: UserSettingsSections.FAMILY_CENTER };
          openUserSettingsResult = obj4.openUserSettings(obj6);
          return;
        }
      }
    }
    if (cResult[7] !== tmp4.link) {
      class H {
        constructor(arg0, arg1) {
          obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
          return jsx(closure_0(closure_2[19]).Text, obj, arg1);
        }
      }
      cResult[7] = tmp4.link;
      cResult[8] = H;
    } else {
      class H {
        constructor(arg0, arg1) {
          obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
          return jsx(closure_0(closure_2[19]).Text, obj, arg1);
        }
      }
    }
    if (isOnMainSurface && isParentalConsentBannerActive && !isVisible && null != daysRemaining && daysRemaining >= 0) {
      class H {
        constructor(arg0, arg1) {
          obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
          return jsx(closure_0(closure_2[19]).Text, obj, arg1);
        }
      }
    }
    if (cResult[9] !== 0) {
      class H {
        constructor(arg0, arg1) {
          obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
          return jsx(closure_0(closure_2[19]).Text, obj, arg1);
        }
      }
      const items = [StyleSheet.absoluteFill, ];
      const obj8 = { marginTop: 0 };
      items[1] = obj8;
      cResult[9] = 0;
      cResult[10] = items;
    } else {
      class H {
        constructor(arg0, arg1) {
          obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
          return jsx(closure_0(closure_2[19]).Text, obj, arg1);
        }
      }
    }
    if (cResult[11] === children) {
      class H {
        constructor(arg0, arg1) {
          obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
          return jsx(closure_0(closure_2[19]).Text, obj, arg1);
        }
      }
      if (cResult[14] === H) {
        class H {
          constructor(arg0, arg1) {
            obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
            return jsx(closure_0(closure_2[19]).Text, obj, arg1);
          }
        }
      }
      let tmp28Result = null;
      if (isOnMainSurface && isParentalConsentBannerActive && !isVisible && null != daysRemaining && daysRemaining >= 0) {
        class H {
          constructor(arg0, arg1) {
            obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
            return jsx(closure_0(closure_2[19]).Text, obj, arg1);
          }
        }
        if (null != daysRemaining) {
          class H {
            constructor(arg0, arg1) {
              obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
              return jsx(closure_0(closure_2[19]).Text, obj, arg1);
            }
          }
          const items1 = [tmp4.strip, ];
          const obj9 = { height: sum };
          items1[1] = obj9;
          tmp30[0] = items1;
          const obj10 = { pointerEvents: "none", style: StyleSheet.absoluteFill, colors: tmp13, locations, start: null, end: null };
          ({ START: obj12.start, END: obj12.end } = closure_10);
          const items2 = [closure_11(daysRemaining(5612), obj10), ];
          const obj11 = { accessibilityRole: "button", accessibilityHint: intl.string(daysRemaining(2521).O2HKdA), onPress: I, style: items3, children: closure_11(Text, obj14) };
          intl = tmp(1126).intl;
          items3 = [tmp4.pressable, ];
          const obj13 = { paddingTop: tmp6.top + 8 };
          items3[1] = obj13;
          obj14 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, style: tmp4.label, children: formatResult };
          Text = tmp(4892).Text;
          if (0 === daysRemaining) {
            class H {
              constructor(arg0, arg1) {
                obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
                return jsx(closure_0(closure_2[19]).Text, obj, arg1);
              }
            }
            const obj15 = { connectHook: H };
            formatResult = obj18.format(tmp5(2521).Gfqlpa, obj15);
          } else {
            class H {
              constructor(arg0, arg1) {
                obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
                return jsx(closure_0(closure_2[19]).Text, obj, arg1);
              }
            }
            const obj17 = { count: daysRemaining, connectHook: H };
            formatResult = obj16.format(tmp5(2521).ZBK5mM, obj17);
          }
          items2[1] = closure_11(closure_4, obj11);
          tmp30[2] = items2;
          tmp28Result = closure_12(View, tmp30);
        }
      }
      cResult[14] = H;
      cResult[15] = daysRemaining;
      cResult[16] = tmp13;
      cResult[17] = I;
      cResult[18] = tmp6.top;
      cResult[19] = isOnMainSurface && isParentalConsentBannerActive && !isVisible && null != daysRemaining && daysRemaining >= 0;
      cResult[20] = sum;
      cResult[21] = tmp4.label;
      cResult[22] = tmp4.pressable;
      cResult[23] = tmp4.strip;
      cResult[24] = tmp28Result;
    }
    const obj19 = { style: tmp21, children };
    cResult[11] = children;
    cResult[12] = tmp21;
    cResult[13] = closure_11(View, obj19);
    const tmp25 = closure_11(View, obj19);
  }
  const items4 = [token, tmp11];
  cResult[2] = tmp11;
  cResult[3] = token;
  cResult[4] = items4;
  tmp13 = items4;
}) : ((children) => {
  let Text;
  let formatResult;
  let intl;
  let items5;
  let items6;
  let items7;
  let link;
  let obj13;
  let token;
  let daysRemaining;
  children = children.children;
  const tmp = closure_16();
  _require = tmp;
  const tmp4 = token(daysRemaining[9])();
  let obj = require("useParentalConsentWarning");
  const parentalConsentWarning = obj.useParentalConsentWarning();
  let obj2 = require("useIsParentalConsentBannerActive");
  const isParentalConsentBannerActive = obj2.useIsParentalConsentBannerActive();
  let obj3 = require("useIsOnMainSurface");
  let isOnMainSurface = obj3.useIsOnMainSurface();
  let obj4 = require("useGlobalStatusIndicatorState");
  const isVisible = obj4.useGlobalStatusIndicatorState().isVisible;
  let obj5 = require("useToken");
  token = obj5.useToken(token(daysRemaining[5]).colors.BACKGROUND_FEEDBACK_WARNING);
  let items = [token];
  daysRemaining = undefined;
  const memo = react.useMemo(() => {
    const items = [token, ];
    const obj = _modDef7076(token);
    const setAlphaResult = obj.setAlpha(0);
    items[1] = setAlphaResult.toRgbString();
    return items;
  }, items);
  if (parentalConsentWarning != null) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  if (daysRemaining == null) {
    daysRemaining = null;
  }
  if (isOnMainSurface) {
    isOnMainSurface = isParentalConsentBannerActive;
  }
  if (isOnMainSurface) {
    isOnMainSurface = !isVisible;
  }
  if (isOnMainSurface) {
    isOnMainSurface = null != daysRemaining;
  }
  if (isOnMainSurface) {
    isOnMainSurface = daysRemaining >= 0;
  }
  const items1 = [daysRemaining];
  const sum = tmp4.top + closure_14;
  const items2 = [tmp.link];
  const callback = react.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { days_remaining: daysRemaining };
    obj.track(metroImportAll.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, obj2);
    const obj3 = FamilyCenterActionCreatorsDefault;
    const tab = obj3.selectTab(FamilyCenterSubPages.REQUESTS);
    const obj4 = openUserSettings;
    const obj5 = { screen: constants.FAMILY_CENTER };
    obj4.openUserSettings(obj5);
  }, items1);
  const callback1 = react.useCallback((children, id) => {
    const obj = { variant: "text-sm/medium", color: "text-strong", style: link.link, children };
    return unpackModuleId(Text_Text.Text, obj, id);
  }, items2);
  const items3 = [StyleSheet.absoluteFill, ];
  let num2 = 0;
  if (isOnMainSurface) {
    num2 = closure_14;
  }
  items3[1] = { marginTop: num2 };
  const children1 = [closure_11(View, { style: items3, children }), ];
  let tmp16Result = null;
  if (isOnMainSurface) {
    tmp16Result = null;
    if (null != daysRemaining) {
      const obj7 = { style: items5, pointerEvents: "box-none", children: items6 };
      items5 = [tmp.strip, ];
      const obj8 = { height: sum };
      items5[1] = obj8;
      const obj10 = { pointerEvents: "none", style: StyleSheet.absoluteFill, colors: memo, locations, start: null, end: null };
      ({ START: obj9.start, END: obj9.end } = closure_10);
      items6 = [closure_11(token(daysRemaining[20]), obj10), ];
      const obj11 = { accessibilityRole: "button", accessibilityHint: intl.string(token(daysRemaining[22]).O2HKdA), onPress: callback, style: items7, children: closure_11(Text, obj13) };
      intl = tmp5(tmp3[21]).intl;
      items7 = [tmp.pressable, ];
      const obj12 = { paddingTop: tmp4.top + 8 };
      items7[1] = obj12;
      obj13 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, style: tmp.label, children: formatResult };
      Text = tmp5(tmp3[19]).Text;
      if (0 === daysRemaining) {
        const intl3 = tmp5(tmp3[21]).intl;
        const obj14 = { connectHook: callback1 };
        formatResult = intl3.format(tmp2(tmp3[22]).Gfqlpa, obj14);
      } else {
        const intl2 = tmp5(tmp3[21]).intl;
        const obj22 = { count: daysRemaining, connectHook: callback1 };
        formatResult = intl2.format(tmp2(tmp3[22]).ZBK5mM, obj22);
      }
      items6[1] = closure_11(closure_4, obj11);
      tmp16Result = closure_12(View, obj7);
    }
  }
  children1[1] = tmp16Result;
  return closure_12(closure_13, { children: children1 });
});
const result = size.fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningBanner.tsx");

export default tmp7;