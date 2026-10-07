// === Module 11571: SharedCustomThemeActionSheet ===

// Module 11571 (SharedCustomThemeActionSheet)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1239 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4534 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4732 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 6941 */;
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 8091 */;
import CustomThemeMobileActionCreators from "CustomThemeMobileActionCreators" /* 11572 */;
import _slicedToArray from "module_32" /* 32 */;
import "module_19";
import SubscriptionStore from "SubscriptionStore" /* 4540 */;

const require = globalThis.__r;

require = fn;
const noop = fn(19);
({ useEffect: hasOwnProperty, useLayoutEffect: metroRequire, useRef: closure_7 } = noop);
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const PremiumTypes = fn(1379).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { contentWrapper: { paddingHorizontal: 43.5, paddingVertical: 12 }, centeredText: { textAlign: "center" }, ctaContainer: { paddingHorizontal: 15, flexDirection: "column", display: "flex", gap: 6 }, nitroWheelButton: { marginStart: -2, width: 20, height: 20 }, getNitroButton: { borderRadius: nativeDefault.radii.round } };
let closure_14 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { borderRadius: nativeDefault.radii.round };
const ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPressApply) => {
  let ShinyButton = getNitroButton;
  let tmp = dependencyMap;
  const cResult = getNitroButton(576).c(12);
  onPressApply = onPressApply.onPressApply;
  getNitroButton = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SubscriptionStore];
    const fn = function o() {
      return premiumTypeSubscription.getPremiumTypeSubscription();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  let obj = getNitroButton(576);
  const stateFromStores = ShinyButton(504).useStateFromStores(tmp3, tmp4);
  const ShinyButtonResult = ShinyButton(504);
  const premiumTypeFromSubscription = PremiumUtilsDefault.getPremiumTypeFromSubscription(stateFromStores);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h() {
      const obj = { premiumType: TIER_2.TIER_2, analyticsLocations: null, analyticsLocation: null };
      const items = [AnalyticsLocationDefault.SHARE_CUSTOM_CLIENT_THEME_EMBED];
      obj.analyticsLocations = items;
      obj.analyticsLocation = {};
      openPremiumPlanSelectionActionSheetDefault(obj);
    };
    cResult[2] = fn2;
    let getNitroButton2 = fn2;
  } else {
    getNitroButton2 = cResult[2];
  }
  if (premiumTypeFromSubscription !== PremiumTypes.TIER_2) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = ShinyButton(1126).intl;
      const stringResult = intl2.string(ShinyButton(1126).t.pj0XBN);
      cResult[3] = stringResult;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[3];
    }
    if (cResult[4] !== getNitroButton.nitroWheelButton) {
      const fn3 = function f() {
        const obj = { style: null };
        const items = [getNitroButton.nitroWheelButton];
        obj.style = items;
        return __initData(native.NitroWheel, obj);
      };
      cResult[4] = getNitroButton.nitroWheelButton;
      cResult[5] = fn3;
      let tmp15 = fn3;
    } else {
      tmp15 = cResult[5];
    }
    if (cResult[6] === getNitroButton.getNitroButton) {
    }
    ShinyButton = ShinyButton(1188).ShinyButton;
    const obj2 = { text: tmp13, onPress: getNitroButton2, renderIcon: tmp15, style: null };
    getNitroButton2 = getNitroButton.getNitroButton;
    obj2.style = getNitroButton2;
    tmp = closure_12(ShinyButton, obj2);
    getNitroButton = getNitroButton.getNitroButton;
    cResult[6] = getNitroButton;
    cResult[7] = tmp15;
    cResult[8] = tmp;
  } else {
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = ShinyButton(1126).intl;
      const stringResult1 = intl.string(ShinyButton(1126).t["1Qm822"]);
      cResult[9] = stringResult1;
      let tmp8 = stringResult1;
    } else {
      tmp8 = cResult[9];
    }
    if (cResult[10] !== onPressApply) {
      const obj4 = { text: tmp8, onPress: onPressApply, variant: "primary" };
      const tmp12 = closure_12(ShinyButton(5601).Button, obj4);
      cResult[10] = onPressApply;
      cResult[11] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[11];
    }
    return tmp10;
  }
}) : ((onPressApply) => {
  const tmp = closure_14();
  _require = tmp;
  let items = [SubscriptionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj = require("initialize");
  if (obj2.getPremiumTypeFromSubscription(stateFromStores) !== PremiumTypes.TIER_2) {
    const obj3 = { text: null, onPress: null, renderIcon: null, style: null };
    const intl2 = tmp2(1126).intl;
    obj3.text = intl2.string(tmp2(1126).t.pj0XBN);
    obj3.onPress = function onPressSubscribe() {
      const obj = { premiumType: TIER_2.TIER_2, analyticsLocations: null, analyticsLocation: null };
      const items = [AnalyticsLocationDefault.SHARE_CUSTOM_CLIENT_THEME_EMBED];
      obj.analyticsLocations = items;
      obj.analyticsLocation = {};
      openPremiumPlanSelectionActionSheetDefault(obj);
    };
    obj3.renderIcon = function renderIcon() {
      const obj = { style: null };
      const items = [nitroWheelButton.nitroWheelButton];
      obj.style = items;
      return __initData(native.NitroWheel, obj);
    };
    obj3.style = tmp.getNitroButton;
    let tmp6 = closure_12(tmp2(1188).ShinyButton, obj3);
  } else {
    const obj4 = { text: null, onPress: null, variant: "primary" };
    const intl = tmp2(1126).intl;
    obj4.text = intl.string(tmp2(1126).t["1Qm822"]);
    obj4.onPress = onPressApply.onPressApply;
    tmp6 = closure_12(tmp2(5601).Button, obj4);
  }
  return tmp6;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/native/chat/SharedCustomThemeActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  const cResult = sharedClientTheme(first[10]).c(36);
  sharedClientTheme = message.message.sharedClientTheme;
  let tmp4 = closure_14();
  const tmp5 = closure_7(null);
  importDefault = tmp5;
  if (cResult[0] !== sharedClientTheme) {
    let tmp7;
    if (undefined !== sharedClientTheme) {
      let obj4 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
      let colors = sharedClientTheme.colors;
      obj4.colors = colors.map((item) => "#" + item);
      obj4.gradientColorStops = [];
      ({ gradient_angle: obj2.gradientAngle, base_mix: obj2.baseMix } = sharedClientTheme);
      tmp7 = obj4;
    }
    cResult[0] = sharedClientTheme;
    cResult[1] = tmp7;
    let tmp6 = tmp7;
  } else {
    tmp6 = cResult[1];
  }
  [first, _slicedToArray] = first1.useState(tmp6);
  if (cResult[2] !== sharedClientTheme) {
    let baseTheme;
    if (undefined !== sharedClientTheme) {
      baseTheme = tmp(tmp2[26]).getBaseTheme(sharedClientTheme.base_theme);
      const tmpResult = tmp(tmp2[26]);
    }
    cResult[2] = sharedClientTheme;
    cResult[3] = baseTheme;
    let tmp11 = baseTheme;
  } else {
    tmp11 = cResult[3];
  }
  [first1, closure_5] = first1.useState(tmp11);
  [first2, closure_7] = first1.useState(false);
  const ref = first1.useRef(true);
  if (cResult[4] !== sharedClientTheme) {
    class M {
      constructor() {
        tmp2 = sharedClientTheme;
        tmp3 = undefined !== sharedClientTheme;
        tmp4 = undefined;
        tmp = closure_3;
        if (tmp3) {
          obj = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
          colors = tmp2.colors;
          obj.colors = colors.map((item) => "#" + item);
          obj.gradientColorStops = [];
          ({ gradient_angle: obj.gradientAngle, base_mix: obj.baseMix } = tmp2);
          tmp4 = obj;
        }
        tmpResult = tmp(tmp4);
        baseTheme = undefined;
        tmp6 = closure_5;
        if (tmp3) {
          tmp8 = closure_0;
          tmp9 = closure_2;
          obj2 = closure_0(closure_2[26]);
          baseTheme = obj2.getBaseTheme(tmp2.base_theme);
        }
        tmp6Result = tmp6(baseTheme);
        obj3 = closure_1(closure_2[11]);
        trackResult = obj3.track(AnalyticEvents.CUSTOM_THEME_SHARE_PREVIEWED, {});
        return;
      }
    }
    const items = [sharedClientTheme];
    cResult[4] = sharedClientTheme;
    cResult[5] = M;
    cResult[6] = items;
    let tmp19 = items;
  } else {
    class M {
      constructor() {
        tmp2 = sharedClientTheme;
        tmp3 = undefined !== sharedClientTheme;
        tmp4 = undefined;
        tmp = closure_3;
        if (tmp3) {
          obj = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
          colors = tmp2.colors;
          obj.colors = colors.map((item) => "#" + item);
          obj.gradientColorStops = [];
          ({ gradient_angle: obj.gradientAngle, base_mix: obj.baseMix } = tmp2);
          tmp4 = obj;
        }
        tmpResult = tmp(tmp4);
        baseTheme = undefined;
        tmp6 = closure_5;
        if (tmp3) {
          tmp8 = closure_0;
          tmp9 = closure_2;
          obj2 = closure_0(closure_2[26]);
          baseTheme = obj2.getBaseTheme(tmp2.base_theme);
        }
        tmp6Result = tmp6(baseTheme);
        obj3 = closure_1(closure_2[11]);
        trackResult = obj3.track(AnalyticEvents.CUSTOM_THEME_SHARE_PREVIEWED, {});
        return;
      }
    }
    tmp19 = cResult[6];
  }
  closure_5(M, tmp19);
  if (cResult[7] === first1) {
    class M {
      constructor() {
        tmp2 = sharedClientTheme;
        tmp3 = undefined !== sharedClientTheme;
        tmp4 = undefined;
        tmp = closure_3;
        if (tmp3) {
          obj = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
          colors = tmp2.colors;
          obj.colors = colors.map((item) => "#" + item);
          obj.gradientColorStops = [];
          ({ gradient_angle: obj.gradientAngle, base_mix: obj.baseMix } = tmp2);
          tmp4 = obj;
        }
        tmpResult = tmp(tmp4);
        baseTheme = undefined;
        tmp6 = closure_5;
        if (tmp3) {
          tmp8 = closure_0;
          tmp9 = closure_2;
          obj2 = closure_0(closure_2[26]);
          baseTheme = obj2.getBaseTheme(tmp2.base_theme);
        }
        tmp6Result = tmp6(baseTheme);
        obj3 = closure_1(closure_2[11]);
        trackResult = obj3.track(AnalyticEvents.CUSTOM_THEME_SHARE_PREVIEWED, {});
        return;
      }
    }
    tmp20(H, items5);
    if (cResult[11] !== first2) {
      class I {
        constructor() {
          closure_8.current = !closure_6;
          return;
        }
      }
      const items1 = [first2];
      cResult[11] = first2;
      cResult[12] = I;
      cResult[13] = items1;
      let tmp24 = items1;
    } else {
      class I {
        constructor() {
          closure_8.current = !closure_6;
          return;
        }
      }
      tmp24 = cResult[13];
    }
    first2(I, tmp24);
    const _Symbol = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          return () => {
            if (ref.current) {
              sharedClientTheme(first[12]).clearPreviewTheme();
              const obj = sharedClientTheme(first[12]);
              sharedClientTheme(first[13]).refreshTheme();
              const obj2 = sharedClientTheme(first[13]);
            }
          };
        }
      }
      const items2 = [ref];
      cResult[14] = N;
      cResult[15] = items2;
      let tmp29 = items2;
    } else {
      class N {
        constructor() {
          return () => {
            if (ref.current) {
              sharedClientTheme(first[12]).clearPreviewTheme();
              const obj = sharedClientTheme(first[12]);
              sharedClientTheme(first[13]).refreshTheme();
              const obj2 = sharedClientTheme(first[13]);
            }
          };
        }
      }
      tmp29 = cResult[15];
    }
    tmp20(N, tmp29);
    if (cResult[16] === first1) {
      class N {
        constructor() {
          return () => {
            if (ref.current) {
              sharedClientTheme(first[12]).clearPreviewTheme();
              const obj = sharedClientTheme(first[12]);
              sharedClientTheme(first[13]).refreshTheme();
              const obj2 = sharedClientTheme(first[13]);
            }
          };
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        class Q {
          constructor() {
            if (null !== closure_1.current) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[12]);
              clearPreviewThemeResult = obj.clearPreviewTheme();
              obj2 = closure_0(closure_2[13]);
              refreshThemeResult = obj2.refreshTheme();
              current = tmp.current;
              closeActionSheetResult = current.closeActionSheet();
            }
            return;
          }
        }
        cResult[19] = Q;
      } else {
        class Q {
          constructor() {
            if (null !== closure_1.current) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[12]);
              clearPreviewThemeResult = obj.clearPreviewTheme();
              obj2 = closure_0(closure_2[13]);
              refreshThemeResult = obj2.refreshTheme();
              current = tmp.current;
              closeActionSheetResult = current.closeActionSheet();
            }
            return;
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class Q {
          constructor() {
            if (null !== closure_1.current) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[12]);
              clearPreviewThemeResult = obj.clearPreviewTheme();
              obj2 = closure_0(closure_2[13]);
              refreshThemeResult = obj2.refreshTheme();
              current = tmp.current;
              closeActionSheetResult = current.closeActionSheet();
            }
            return;
          }
        }
        let obj5 = { title: null };
        const intl = tmp(tmp2[16]).intl;
        obj5.title = intl.string(require("module_2751")["3ej1LT"]);
        const tmp35 = closure_12(tmp(tmp2[15]).BottomSheetTitleHeader, obj5);
        cResult[20] = tmp35;
        const tmp33 = tmp35;
      } else {
        class Q {
          constructor() {
            if (null !== closure_1.current) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[12]);
              clearPreviewThemeResult = obj.clearPreviewTheme();
              obj2 = closure_0(closure_2[13]);
              refreshThemeResult = obj2.refreshTheme();
              current = tmp.current;
              closeActionSheetResult = current.closeActionSheet();
            }
            return;
          }
        }
      }
      const _Symbol4 = Symbol;
      ({ contentWrapper, centeredText } = tmp4);
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        class Q {
          constructor() {
            if (null !== closure_1.current) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[12]);
              clearPreviewThemeResult = obj.clearPreviewTheme();
              obj2 = closure_0(closure_2[13]);
              refreshThemeResult = obj2.refreshTheme();
              current = tmp.current;
              closeActionSheetResult = current.closeActionSheet();
            }
            return;
          }
        }
        const stringResult = obj6.string(require("module_2751").qZMUoL);
        cResult[21] = stringResult;
      } else {
        class Q {
          constructor() {
            if (null !== closure_1.current) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[12]);
              clearPreviewThemeResult = obj.clearPreviewTheme();
              obj2 = closure_0(closure_2[13]);
              refreshThemeResult = obj2.refreshTheme();
              current = tmp.current;
              closeActionSheetResult = current.closeActionSheet();
            }
            return;
          }
        }
      }
      class F {
        constructor() {
          tmp = closure_2;
          tmp2 = undefined !== closure_2;
          if (tmp2) {
            tmp3 = closure_4;
            tmp2 = undefined !== closure_4;
          }
          if (tmp2) {
            tmp4 = closure_1;
            tmp5 = null;
            tmp2 = null !== closure_1.current;
          }
          if (tmp2) {
            tmp6 = closure_7;
            flag = true;
            tmp7 = closure_7(true);
            tmp8 = closure_0;
            tmp9 = closure_2;
            obj = closure_0(closure_2[12]);
            tmp10 = closure_4;
            updateCustomThemeResult = obj.updateCustomTheme(tmp, closure_4);
            obj2 = closure_0(closure_2[14]);
            obj1 = { customUserThemeSettings: null, theme: null };
            obj1.customUserThemeSettings = tmp;
            obj1.theme = closure_4;
            saveClientThemeResult = obj2.saveClientTheme(obj1);
            obj4 = closure_0(closure_2[12]);
            clearPreviewThemeResult = obj4.clearPreviewTheme();
            tmp14 = closure_1;
            obj5 = closure_1(closure_2[11]);
            tmp15 = AnalyticEvents;
            trackResult = obj5.track(AnalyticEvents.CUSTOM_THEME_SHARE_APPLIED, {});
            tmp17 = closure_1;
            current = closure_1.current;
            closeActionSheetResult = current.closeActionSheet();
          }
          return;
        }
      }
      if (cResult[24] === tmp4.contentWrapper) {
        class Q {
          constructor() {
            if (null !== closure_1.current) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[12]);
              clearPreviewThemeResult = obj.clearPreviewTheme();
              obj2 = closure_0(closure_2[13]);
              refreshThemeResult = obj2.refreshTheme();
              current = tmp.current;
              closeActionSheetResult = current.closeActionSheet();
            }
            return;
          }
        }
        if (cResult[27] !== F) {
          class Q {
            constructor() {
              if (null !== closure_1.current) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[12]);
                clearPreviewThemeResult = obj.clearPreviewTheme();
                obj2 = closure_0(closure_2[13]);
                refreshThemeResult = obj2.refreshTheme();
                current = tmp.current;
                closeActionSheetResult = current.closeActionSheet();
              }
              return;
            }
          }
          const obj7 = { onPressApply: F };
          const tmp46 = closure_12(closure_15, obj7);
          cResult[27] = F;
          cResult[28] = tmp46;
        } else {
          class Q {
            constructor() {
              if (null !== closure_1.current) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[12]);
                clearPreviewThemeResult = obj.clearPreviewTheme();
                obj2 = closure_0(closure_2[13]);
                refreshThemeResult = obj2.refreshTheme();
                current = tmp.current;
                closeActionSheetResult = current.closeActionSheet();
              }
              return;
            }
          }
        }
        const _Symbol5 = Symbol;
        if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
          class Q {
            constructor() {
              if (null !== closure_1.current) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[12]);
                clearPreviewThemeResult = obj.clearPreviewTheme();
                obj2 = closure_0(closure_2[13]);
                refreshThemeResult = obj2.refreshTheme();
                current = tmp.current;
                closeActionSheetResult = current.closeActionSheet();
              }
              return;
            }
          }
          const obj8 = { text: null, onPress: null, variant: "secondary" };
          const intl2 = tmp(tmp2[16]).intl;
          obj8.text = intl2.string(tmp(tmp2[16]).t["13/7kX"]);
          obj8.onPress = Q;
          const tmp48 = closure_12(tmp(tmp2[19]).Button, obj8);
          cResult[29] = tmp48;
        } else {
          class Q {
            constructor() {
              if (null !== closure_1.current) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[12]);
                clearPreviewThemeResult = obj.clearPreviewTheme();
                obj2 = closure_0(closure_2[13]);
                refreshThemeResult = obj2.refreshTheme();
                current = tmp.current;
                closeActionSheetResult = current.closeActionSheet();
              }
              return;
            }
          }
        }
        if (cResult[30] === tmp4.ctaContainer) {
          class Q {
            constructor() {
              if (null !== closure_1.current) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[12]);
                clearPreviewThemeResult = obj.clearPreviewTheme();
                obj2 = closure_0(closure_2[13]);
                refreshThemeResult = obj2.refreshTheme();
                current = tmp.current;
                closeActionSheetResult = current.closeActionSheet();
              }
              return;
            }
          }
          if (cResult[33] === tmp40) {
            class Q {
              constructor() {
                if (null !== closure_1.current) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[12]);
                  clearPreviewThemeResult = obj.clearPreviewTheme();
                  obj2 = closure_0(closure_2[13]);
                  refreshThemeResult = obj2.refreshTheme();
                  current = tmp.current;
                  closeActionSheetResult = current.closeActionSheet();
                }
                return;
              }
            }
            return tmp53;
          }
          const obj9 = { ref: tmp5, backdropOpacity: 0, children: null };
          const items3 = [tmp33, tmp40, tmp49];
          obj9.children = items3;
          const tmp55 = closure_13(tmp(tmp2[20]).BottomSheet, obj9);
          class F {
            constructor() {
              tmp = closure_2;
              tmp2 = undefined !== closure_2;
              if (tmp2) {
                tmp3 = closure_4;
                tmp2 = undefined !== closure_4;
              }
              if (tmp2) {
                tmp4 = closure_1;
                tmp5 = null;
                tmp2 = null !== closure_1.current;
              }
              if (tmp2) {
                tmp6 = closure_7;
                flag = true;
                tmp7 = closure_7(true);
                tmp8 = closure_0;
                tmp9 = closure_2;
                obj = closure_0(closure_2[12]);
                tmp10 = closure_4;
                updateCustomThemeResult = obj.updateCustomTheme(tmp, closure_4);
                obj2 = closure_0(closure_2[14]);
                obj1 = { customUserThemeSettings: null, theme: null };
                obj1.customUserThemeSettings = tmp;
                obj1.theme = closure_4;
                saveClientThemeResult = obj2.saveClientTheme(obj1);
                obj4 = closure_0(closure_2[12]);
                clearPreviewThemeResult = obj4.clearPreviewTheme();
                tmp14 = closure_1;
                obj5 = closure_1(closure_2[11]);
                tmp15 = AnalyticEvents;
                trackResult = obj5.track(AnalyticEvents.CUSTOM_THEME_SHARE_APPLIED, {});
                tmp17 = closure_1;
                current = closure_1.current;
                closeActionSheetResult = current.closeActionSheet();
              }
              return;
            }
          }
          cResult[34] = tmp49;
          cResult[35] = tmp55;
          tmp53 = tmp55;
        }
        const obj10 = { style: tmp4.ctaContainer, children: null };
        const items4 = [tmp44, ];
        class F {
          constructor() {
            tmp = closure_2;
            tmp2 = undefined !== closure_2;
            if (tmp2) {
              tmp3 = closure_4;
              tmp2 = undefined !== closure_4;
            }
            if (tmp2) {
              tmp4 = closure_1;
              tmp5 = null;
              tmp2 = null !== closure_1.current;
            }
            if (tmp2) {
              tmp6 = closure_7;
              flag = true;
              tmp7 = closure_7(true);
              tmp8 = closure_0;
              tmp9 = closure_2;
              obj = closure_0(closure_2[12]);
              tmp10 = closure_4;
              updateCustomThemeResult = obj.updateCustomTheme(tmp, closure_4);
              obj2 = closure_0(closure_2[14]);
              obj1 = { customUserThemeSettings: null, theme: null };
              obj1.customUserThemeSettings = tmp;
              obj1.theme = closure_4;
              saveClientThemeResult = obj2.saveClientTheme(obj1);
              obj4 = closure_0(closure_2[12]);
              clearPreviewThemeResult = obj4.clearPreviewTheme();
              tmp14 = closure_1;
              obj5 = closure_1(closure_2[11]);
              tmp15 = AnalyticEvents;
              trackResult = obj5.track(AnalyticEvents.CUSTOM_THEME_SHARE_APPLIED, {});
              tmp17 = closure_1;
              current = closure_1.current;
              closeActionSheetResult = current.closeActionSheet();
            }
            return;
          }
        }
        obj10.children = items4;
        const tmp52 = closure_13(ref, obj10);
        cResult[30] = tmp4.ctaContainer;
        cResult[31] = tmp44;
        cResult[32] = tmp52;
      }
      const obj11 = { style: contentWrapper, children: tmp39 };
      const tmp43 = closure_12(ref, obj11);
      cResult[24] = tmp4.contentWrapper;
      cResult[25] = tmp39;
      cResult[26] = tmp43;
    }
    class F {
      constructor() {
        tmp = closure_2;
        tmp2 = undefined !== closure_2;
        if (tmp2) {
          tmp3 = closure_4;
          tmp2 = undefined !== closure_4;
        }
        if (tmp2) {
          tmp4 = closure_1;
          tmp5 = null;
          tmp2 = null !== closure_1.current;
        }
        if (tmp2) {
          tmp6 = closure_7;
          flag = true;
          tmp7 = closure_7(true);
          tmp8 = closure_0;
          tmp9 = closure_2;
          obj = closure_0(closure_2[12]);
          tmp10 = closure_4;
          updateCustomThemeResult = obj.updateCustomTheme(tmp, closure_4);
          obj2 = closure_0(closure_2[14]);
          obj1 = { customUserThemeSettings: null, theme: null };
          obj1.customUserThemeSettings = tmp;
          obj1.theme = closure_4;
          saveClientThemeResult = obj2.saveClientTheme(obj1);
          obj4 = closure_0(closure_2[12]);
          clearPreviewThemeResult = obj4.clearPreviewTheme();
          tmp14 = closure_1;
          obj5 = closure_1(closure_2[11]);
          tmp15 = AnalyticEvents;
          trackResult = obj5.track(AnalyticEvents.CUSTOM_THEME_SHARE_APPLIED, {});
          tmp17 = closure_1;
          current = closure_1.current;
          closeActionSheetResult = current.closeActionSheet();
        }
        return;
      }
    }
    cResult[16] = first1;
    cResult[17] = first;
    cResult[18] = F;
  }
  class H {
    constructor() {
      tmp2 = undefined !== closure_2;
      tmp = closure_2;
      if (tmp2) {
        tmp3 = closure_4;
        tmp2 = undefined !== closure_4;
      }
      if (tmp2) {
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[12]);
        obj1 = { baseTheme: null, customTheme: null };
        tmp6 = closure_4;
        obj1.baseTheme = closure_4;
        obj1.customTheme = tmp;
        previewCustomThemeResult = obj.previewCustomTheme(obj1);
        obj3 = closure_0(closure_2[13]);
        refreshThemeResult = obj3.refreshTheme();
      }
      return;
    }
  }
  items5 = [first, first1];
  cResult[7] = first1;
  cResult[8] = first;
  cResult[9] = H;
  cResult[10] = items5;
  let obj = sharedClientTheme(first[10]);
}) : ((message) => {
  const sharedClientTheme = message.message.sharedClientTheme;
  const tmp = closure_14();
  let tmp2 = closure_7(null);
  importDefault = tmp2;
  let tmp4;
  if (undefined !== sharedClientTheme) {
    let obj4 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
    let colors = sharedClientTheme.colors;
    obj4.colors = colors.map((item) => "#" + item);
    obj4.gradientColorStops = [];
    ({ gradient_angle: obj2.gradientAngle, base_mix: obj2.baseMix } = sharedClientTheme);
    tmp4 = obj4;
  }
  [first, _slicedToArray] = first1.useState(tmp4);
  let baseTheme;
  if (undefined !== sharedClientTheme) {
    baseTheme = sharedClientTheme(first[26]).getBaseTheme(sharedClientTheme.base_theme);
    let obj3 = sharedClientTheme(first[26]);
  }
  [first1, closure_5] = first1.useState(baseTheme);
  [first2, closure_7] = first1.useState(false);
  const ref = obj.useRef(true);
  const items = [sharedClientTheme];
  closure_5(() => {
    let tmp4;
    if (undefined !== sharedClientTheme) {
      const obj = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
      const colors = sharedClientTheme.colors;
      obj.colors = colors.map((item) => "#" + item);
      obj.gradientColorStops = [];
      ({ gradient_angle: obj.gradientAngle, base_mix: obj.baseMix } = sharedClientTheme);
      tmp4 = obj;
    }
    closure_3(tmp4);
    let baseTheme;
    if (undefined !== sharedClientTheme) {
      baseTheme = ClientThemesUtils.getBaseTheme(sharedClientTheme.base_theme);
    }
    closure_5(baseTheme);
    AnalyticsUtilsDefault.track(AnalyticEvents.CUSTOM_THEME_SHARE_PREVIEWED, {});
  }, items);
  const items1 = [first, first1];
  closure_5(() => {
    let tmp2 = undefined !== customTheme;
    if (tmp2) {
      tmp2 = undefined !== first1;
    }
    if (tmp2) {
      const obj2 = { baseTheme: first1, customTheme };
      CustomThemeMobileActionCreators.previewCustomTheme(obj2);
      ThemeActionCreators.refreshTheme();
    }
  }, items1);
  const items2 = [first2];
  first2(() => {
    ref.current = !first2;
  }, items2);
  const items3 = [ref];
  closure_5(() => () => {
    if (ref.current) {
      sharedClientTheme(first[12]).clearPreviewTheme();
      const obj = sharedClientTheme(first[12]);
      sharedClientTheme(first[13]).refreshTheme();
      const obj2 = sharedClientTheme(first[13]);
    }
  }, items3);
  let obj5 = { ref: tmp2, backdropOpacity: 0, children: null };
  const obj6 = { title: null };
  const intl = sharedClientTheme(first[16]).intl;
  obj6.title = intl.string(require("module_2751")["3ej1LT"]);
  const items4 = [closure_12(sharedClientTheme(first[15]).BottomSheetTitleHeader, obj6), , ];
  const obj7 = { style: tmp.contentWrapper, children: null };
  const obj8 = { variant: "heading-md/medium", style: tmp.centeredText, children: null };
  const intl2 = sharedClientTheme(first[16]).intl;
  obj8.children = intl2.string(require("module_2751").qZMUoL);
  obj7.children = closure_12(sharedClientTheme(first[18]).Text, obj8);
  items4[1] = closure_12(ref, obj7);
  const obj9 = { style: tmp.ctaContainer, children: null };
  const items5 = [
    closure_12(closure_15, {
      onPressApply() {
        let tmp2 = undefined !== customUserThemeSettings;
        if (tmp2) {
          tmp2 = undefined !== first1;
        }
        if (tmp2) {
          tmp2 = null !== ref.current;
        }
        if (tmp2) {
          closure_7(true);
          CustomThemeMobileActionCreators.updateCustomTheme(customUserThemeSettings, first1);
          const obj3 = { customUserThemeSettings, theme: first1 };
          UserSettingsActionCreators.saveClientTheme(obj3);
          CustomThemeMobileActionCreators.clearPreviewTheme();
          AnalyticsUtilsDefault.track(AnalyticEvents.CUSTOM_THEME_SHARE_APPLIED, {});
          const current = ref.current;
          current.closeActionSheet();
        }
      }
    }),

  ];
  const obj18 = { text: null, onPress: null, variant: "secondary" };
  const intl3 = sharedClientTheme(first[16]).intl;
  obj18.text = intl3.string(sharedClientTheme(first[16]).t["13/7kX"]);
  obj18.onPress = function onPress() {
    if (null !== ref.current) {
      CustomThemeMobileActionCreators.clearPreviewTheme();
      ThemeActionCreators.refreshTheme();
      const current = tmp.current;
      current.closeActionSheet();
    }
  };
  items5[1] = closure_12(sharedClientTheme(first[19]).Button, obj18);
  obj9.children = items5;
  items4[2] = closure_13(ref, obj9);
  obj5.children = items4;
  return closure_13(sharedClientTheme(first[20]).BottomSheet, obj5);
});