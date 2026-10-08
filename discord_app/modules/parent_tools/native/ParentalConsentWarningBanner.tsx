// === Module 17723: ParentalConsentWarningBanner ===

// Module 17723 (ParentalConsentWarningBanner)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import Text_Text from "Text/Text" /* 5086 */;
import openUserSettings from "openUserSettings" /* 7084 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7249 */;
import tinycolorDefault from "tinycolor" /* 7262 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
const FamilyCenterSubPages = fn(7248).FamilyCenterSubPages;
const Constants = fn(1085);
({ AnalyticEvents: closure_8, UserSettingsSections: closure_9, VerticalGradient: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let closure_14 = 28 + nativeDefault.space.PX_16;
const locations = [0.5875, 1];
const createStyles = fn(5090);
let obj2 = { strip: null, pressable: null, label: null, link: null };
const rect = { position: "absolute", top: 0, left: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.strip = rect;
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.flexDirection = "row";
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj3.paddingHorizontal = nativeDefault.space.PX_12;
obj3.paddingBottom = nativeDefault.space.PX_16;
obj2.pressable = obj3;
obj2.label = { paddingRight: nativeDefault.space.PX_8 };
obj2.link = { textDecorationLine: "underline" };
let closure_16 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { paddingRight: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ParentalConsentWarningBanner(children) {
  let obj16 = dependencyMap;
  const cResult = require("c").c(28);
  children = children.children;
  const tmp2 = closure_16();
  _require = tmp2;
  let Gfqlpa = daysRemaining;
  const tmp3 = daysRemaining(1630)();
  let obj3 = require("c");
  const parentalConsentWarning = require("useParentalConsentWarning").useParentalConsentWarning();
  const obj4 = require("useParentalConsentWarning");
  const isParentalConsentBannerActive = require("useIsParentalConsentBannerActive").useIsParentalConsentBannerActive();
  const obj5 = require("useIsParentalConsentBannerActive");
  const isOnMainSurface = require("useIsOnMainSurface").useIsOnMainSurface();
  const obj6 = require("useIsOnMainSurface");
  const obj7 = require("useGlobalStatusIndicatorState");
  const token = require("useToken").useToken(daysRemaining(587).colors.BACKGROUND_FEEDBACK_WARNING);
  if (cResult[0] !== token) {
    const obj9 = Gfqlpa(7262)(token);
    const toRgbStringResult = Gfqlpa(7262)(token).setAlpha(0).toRgbString();
    cResult[0] = token;
    cResult[1] = toRgbStringResult;
    let tmp8 = toRgbStringResult;
    const setAlphaResult = Gfqlpa(7262)(token).setAlpha(0);
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp8) {
    if (cResult[3] === token) {
      let tmp10 = cResult[4];
    }
    daysRemaining = undefined;
    if (parentalConsentWarning != null) {
      daysRemaining = parentalConsentWarning.daysRemaining;
    }
    if (daysRemaining == null) {
      daysRemaining = null;
    }
    let tmp13 = isOnMainSurface;
    if (isOnMainSurface) {
      tmp13 = isParentalConsentBannerActive;
    }
    if (tmp13) {
      tmp13 = !obj7.useGlobalStatusIndicatorState().isVisible;
    }
    if (tmp13) {
      tmp13 = null != daysRemaining;
    }
    if (tmp13) {
      tmp13 = daysRemaining >= 0;
    }
    const sum = tmp3.top + closure_14;
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
    if (cResult[7] !== tmp2.link) {
      class W {
        constructor(arg0, arg1) {
          obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
          return jsx(closure_0(closure_2[19]).Text, obj, arg1);
        }
      }
      cResult[7] = tmp2.link;
      cResult[8] = W;
    } else {
      class W {
        constructor(arg0, arg1) {
          obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
          return jsx(closure_0(closure_2[19]).Text, obj, arg1);
        }
      }
    }
    if (tmp13) {
      class W {
        constructor(arg0, arg1) {
          obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
          return jsx(closure_0(closure_2[19]).Text, obj, arg1);
        }
      }
    }
    if (cResult[9] !== 0) {
      class W {
        constructor(arg0, arg1) {
          obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
          return jsx(closure_0(closure_2[19]).Text, obj, arg1);
        }
      }
      const items = [StyleSheet.absoluteFill, ];
      let obj2 = { marginTop: num9 };
      items[1] = obj2;
      cResult[9] = num9;
      cResult[10] = items;
    } else {
      class W {
        constructor(arg0, arg1) {
          obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
          return jsx(closure_0(closure_2[19]).Text, obj, arg1);
        }
      }
    }
    if (cResult[11] === children) {
      class W {
        constructor(arg0, arg1) {
          obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
          return jsx(closure_0(closure_2[19]).Text, obj, arg1);
        }
      }
      if (cResult[14] === W) {
        class W {
          constructor(arg0, arg1) {
            obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
            return jsx(closure_0(closure_2[19]).Text, obj, arg1);
          }
        }
      }
      if (tmp13) {
        class W {
          constructor(arg0, arg1) {
            obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
            return jsx(closure_0(closure_2[19]).Text, obj, arg1);
          }
        }
        if (null != daysRemaining) {
          class W {
            constructor(arg0, arg1) {
              obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
              return jsx(closure_0(closure_2[19]).Text, obj, arg1);
            }
          }
          const items1 = [tmp2.strip, ];
          const obj10 = { height: sum };
          items1[1] = obj10;
          tmp27[0] = items1;
          const obj11 = { pointerEvents: "none", style: StyleSheet.absoluteFill, colors: tmp10, locations, start: null, end: null };
          ({ START: obj14.start, END: obj14.end } = closure_10);
          const items2 = [closure_11(Gfqlpa(5387), obj11), ];
          let obj12 = { accessibilityRole: "button", accessibilityHint: null, onPress: null, style: null, children: null };
          const intl = obj(1126).intl;
          obj12.accessibilityHint = intl.string(Gfqlpa(2565).O2HKdA);
          obj12.onPress = I;
          const items3 = [tmp2.pressable, ];
          const obj13 = { paddingTop: tmp3.top + 8 };
          items3[1] = obj13;
          obj12.style = items3;
          let obj15 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, style: tmp2.label, children: null };
          if (0 === daysRemaining) {
            class W {
              constructor(arg0, arg1) {
                obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
                return jsx(closure_0(closure_2[19]).Text, obj, arg1);
              }
            }
            Gfqlpa = Gfqlpa(2565).Gfqlpa;
            obj16 = { connectHook: W };
            let formatResult = obj.format(Gfqlpa, obj16);
          } else {
            class W {
              constructor(arg0, arg1) {
                obj = { variant: "text-sm/medium", color: "text-strong", style: closure_0.link, children };
                return jsx(closure_0(closure_2[19]).Text, obj, arg1);
              }
            }
            const obj17 = { count: daysRemaining, connectHook: W };
            formatResult = obj18.format(Gfqlpa(2565).ZBK5mM, obj17);
          }
          obj15.children = formatResult;
          obj15 = closure_11(obj(5086).Text, obj15);
          obj12.children = obj15;
          obj12 = closure_11(closure_4, obj12);
          items2[1] = obj12;
          tmp27[2] = items2;
          closure_12(View, tmp27);
        }
      }
      cResult[14] = W;
      cResult[15] = daysRemaining;
      cResult[16] = tmp10;
      cResult[17] = I;
      cResult[18] = tmp3.top;
      cResult[19] = tmp13;
      cResult[20] = sum;
      cResult[21] = tmp2.label;
      cResult[22] = tmp2.pressable;
      cResult[23] = tmp2.strip;
      cResult[24] = null;
    }
    const obj19 = { style: tmp18, children };
    const tmp22 = closure_11(View, obj19);
    cResult[11] = children;
    cResult[12] = tmp18;
    cResult[13] = tmp22;
  }
  const items4 = [token, tmp8];
  cResult[2] = tmp8;
  cResult[3] = token;
  cResult[4] = items4;
  tmp10 = items4;
  const obj8 = require("useToken");
}) : (function ParentalConsentWarningBanner(children) {
  let token;
  let daysRemaining;
  const tmp = closure_16();
  _require = tmp;
  let Gfqlpa = token;
  let obj = daysRemaining;
  const tmp2 = token(daysRemaining[9])();
  let intl = _require;
  const parentalConsentWarning = require("useParentalConsentWarning").useParentalConsentWarning();
  let obj2 = require("useParentalConsentWarning");
  const isParentalConsentBannerActive = require("useIsParentalConsentBannerActive").useIsParentalConsentBannerActive();
  let obj3 = require("useIsParentalConsentBannerActive");
  let isOnMainSurface = require("useIsOnMainSurface").useIsOnMainSurface();
  const obj4 = require("useIsOnMainSurface");
  const obj5 = require("useGlobalStatusIndicatorState");
  token = require("useToken").useToken(token(daysRemaining[5]).colors.BACKGROUND_FEEDBACK_WARNING);
  let items = [token];
  daysRemaining = undefined;
  const memo = noop.useMemo(() => {
    const items = [token, ];
    const obj = tinycolorDefault(token);
    items[1] = tinycolorDefault(token).setAlpha(0).toRgbString();
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
    isOnMainSurface = !obj5.useGlobalStatusIndicatorState().isVisible;
  }
  if (isOnMainSurface) {
    isOnMainSurface = null != daysRemaining;
  }
  if (isOnMainSurface) {
    isOnMainSurface = daysRemaining >= 0;
  }
  const items1 = [daysRemaining];
  const sum = tmp2.top + closure_14;
  const items2 = [tmp.link];
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, { days_remaining: daysRemaining });
    const obj2 = { days_remaining: daysRemaining };
    const tab = FamilyCenterActionCreatorsDefault.selectTab(FamilyCenterSubPages.REQUESTS);
    openUserSettings.openUserSettings({ screen: constants2.FAMILY_CENTER });
  }, items1);
  const callback1 = noop.useCallback((children, arg1) => closure_2_11(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", style: link.link, children }, arg1), items2);
  const items3 = [StyleSheet.absoluteFill, ];
  let num2 = 0;
  if (isOnMainSurface) {
    num2 = closure_14;
  }
  items3[1] = { marginTop: num2 };
  children = [, ];
  children[0] = closure_11(View, { style: items3, children: children.children });
  let tmp18 = null;
  if (isOnMainSurface) {
    tmp18 = null;
    if (null != daysRemaining) {
      const obj8 = { style: null, pointerEvents: "box-none", children: null };
      const items5 = [tmp.strip, ];
      const obj9 = { height: sum };
      items5[1] = obj9;
      obj8.style = items5;
      const obj11 = { pointerEvents: "none", style: StyleSheet.absoluteFill, colors: memo, locations, start: null, end: null };
      ({ START: obj10.start, END: obj10.end } = closure_10);
      const items6 = [closure_11(Gfqlpa(obj[20]), obj11), ];
      let obj12 = { accessibilityRole: "button", accessibilityHint: null, onPress: null, style: null, children: null };
      const intl2 = intl(obj[21]).intl;
      obj12.accessibilityHint = intl2.string(Gfqlpa(obj[22]).O2HKdA);
      obj12.onPress = callback;
      const items7 = [tmp.pressable, ];
      const obj13 = { paddingTop: tmp2.top + 8 };
      items7[1] = obj13;
      obj12.style = items7;
      let obj14 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, style: tmp.label, children: null };
      if (0 === daysRemaining) {
        intl = intl(obj[21]).intl;
        Gfqlpa = Gfqlpa(obj[22]).Gfqlpa;
        obj = { connectHook: callback1 };
        let formatResult = intl.format(Gfqlpa, obj);
      } else {
        const intl3 = intl(obj[21]).intl;
        const obj21 = { count: daysRemaining, connectHook: callback1 };
        formatResult = intl3.format(Gfqlpa(obj[22]).ZBK5mM, obj21);
      }
      obj14.children = formatResult;
      obj14 = closure_11(intl(obj[19]).Text, obj14);
      obj12.children = obj14;
      obj12 = closure_11(closure_4, obj12);
      items6[1] = obj12;
      obj8.children = items6;
      closure_12(View, obj8);
    }
  }
  children[1] = tmp18;
  return closure_12(closure_13, { children });
});