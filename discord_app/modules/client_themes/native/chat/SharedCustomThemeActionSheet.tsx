// discord_app/modules/client_themes/native/chat/SharedCustomThemeActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import native from "../../../../design/void/native.tsx";
import ClientThemesUtils from "../../ClientThemesUtils.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PremiumConstants from "../../../premium/PremiumConstants.tsx";
import PremiumUtilsDefault from "../../../../utils/PremiumUtils.tsx";
import ThemeActionCreators from "../../../user_settings/ThemeActionCreators.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import openPremiumPlanSelectionActionSheetDefault from "../../../premium/native/openPremiumPlanSelectionActionSheet.tsx";
import UserSettingsActionCreators from "../../../../actions/UserSettingsActionCreators.tsx";
import CustomThemeMobileActionCreators from "../CustomThemeMobileActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import "react";
import react from "../../../../../_runtime/00019_react.js";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet,
  _require,
  clearPreviewThemeResult,
  closeActionSheetResult,
  flag,
  importDefault,
  obj1,
  onPressApply,
  previewCustomThemeResult,
  refreshThemeResult,
  saveClientThemeResult,
  tmp14,
  tmp17,
  tmp3,
  tmp6Result,
  tmp8,
  tmp9,
  trackResult,
  updateCustomThemeResult;

let closure_12;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
const f108347 = (item) => "#" + item;
({ useEffect: hasOwnProperty, useLayoutEffect: metroRequire, useRef: metroImportDefault } = react);
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let obj = {
  contentWrapper: { paddingHorizontal: 43.5, paddingVertical: 12 },
  centeredText: { textAlign: "center" },
  ctaContainer: { paddingHorizontal: 15, flexDirection: "column", display: "flex", gap: 6 },
  nitroWheelButton: { marginStart: -2, width: 20, height: 20 },
  getNitroButton: obj2,
};
obj2 = { borderRadius: nativeDefault.radii.round };
let closure_14 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      let centeredText;
      let closure_3;
      let closure_5;
      let closure_7;
      let colors;
      let contentWrapper;
      let first;
      let first1;
      let first2;
      let intl;
      let intl2;
      let items3;
      let items4;
      let items5;
      let sharedClientTheme;
      let tmp11;
      let tmp19;
      let tmp53;
      let tmp6;
      const tmp = sharedClientTheme;
      let tmp2 = first;
      let obj = sharedClientTheme(first[10]);
      const cResult = obj.c(36);
      sharedClientTheme = message.message.sharedClientTheme;
      let tmp4 = closure_14();
      const tmp5 = closure_7(null);
      importDefault = tmp5;
      if (cResult[0] !== sharedClientTheme) {
        let tmp7;
        if (undefined !== sharedClientTheme) {
          let obj4 = { colors: colors.map(f108347), gradientColorStops: [], gradientAngle: null, baseMix: null };
          colors = sharedClientTheme.colors;
          ({ gradient_angle: obj2.gradientAngle, base_mix: obj2.baseMix } = sharedClientTheme);
          tmp7 = obj4;
        }
        cResult[0] = sharedClientTheme;
        cResult[1] = tmp7;
        tmp6 = tmp7;
      } else {
        tmp6 = cResult[1];
      }
      let obj3 = first1;
      [first, _slicedToArray] = first1.useState(tmp6);
      if (cResult[2] !== sharedClientTheme) {
        let baseTheme;
        if (undefined !== sharedClientTheme) {
          const tmpResult = tmp(tmp2[26]);
          baseTheme = tmpResult.getBaseTheme(sharedClientTheme.base_theme);
        }
        cResult[2] = sharedClientTheme;
        cResult[3] = baseTheme;
        tmp11 = baseTheme;
      } else {
        tmp11 = cResult[3];
      }
      [first1, closure_5] = obj3.useState(tmp11);
      [first2, closure_7] = obj3.useState(false);
      const ref = obj3.useRef(true);
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
              obj.colors = colors.map(() => {
                /* body not rendered: F108347 */
              });
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
        tmp19 = items;
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
              obj.colors = colors.map(() => {
                /* body not rendered: F108347 */
              });
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
        let tmp24;
        let tmp29;
        class M {
          constructor() {
            tmp2 = sharedClientTheme;
            tmp3 = undefined !== sharedClientTheme;
            tmp4 = undefined;
            tmp = closure_3;
            if (tmp3) {
              obj = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
              colors = tmp2.colors;
              obj.colors = colors.map(() => {
                /* body not rendered: F108347 */
              });
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
        closure_5(H, items5);
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
          tmp24 = items1;
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
                /* body not rendered: F141684 */
              };
            }
          }
          const items2 = [ref];
          cResult[14] = N;
          cResult[15] = items2;
          tmp29 = items2;
        } else {
          class N {
            constructor() {
              return () => {
                /* body not rendered: F141684 */
              };
            }
          }
          tmp29 = cResult[15];
        }
        closure_5(N, tmp29);
        if (cResult[16] === first1) {
          let tmp33;
          class N {
            constructor() {
              return () => {
                /* body not rendered: F141684 */
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
            let obj5 = { title: intl.string(require("../../intl/ClientThemes.messages.js")["3ej1LT"]) };
            const BottomSheetTitleHeader = tmp(tmp2[15]).BottomSheetTitleHeader;
            intl = tmp(tmp2[16]).intl;
            const tmp35 = closure_12(BottomSheetTitleHeader, obj5);
            cResult[20] = tmp35;
            tmp33 = tmp35;
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
            cResult[21] = obj6.string(require("../../intl/ClientThemes.messages.js").qZMUoL);
            const stringResult = obj6.string(require("../../intl/ClientThemes.messages.js").qZMUoL);
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
              cResult[27] = F;
              cResult[28] = closure_12(closure_15, obj7);
              const tmp46 = closure_12(closure_15, obj7);
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
              const obj8 = { text: intl2.string(tmp(tmp2[16]).t["13/7kX"]), onPress: Q, variant: "secondary" };
              const Button = tmp(tmp2[19]).Button;
              intl2 = tmp(tmp2[16]).intl;
              cResult[29] = closure_12(Button, obj8);
              const tmp48 = closure_12(Button, obj8);
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
              const obj9 = { ref: tmp5, backdropOpacity: 0, children: items3 };
              items3 = [tmp33, tmp40, tmp49];
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
            const obj10 = { style: tmp4.ctaContainer, children: items4 };
            items4 = [tmp44];
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
            cResult[30] = tmp4.ctaContainer;
            cResult[31] = tmp44;
            cResult[32] = closure_13(ref, obj10);
            const tmp52 = closure_13(ref, obj10);
          }
          const obj11 = { style: contentWrapper, children: tmp39 };
          cResult[24] = tmp4.contentWrapper;
          cResult[25] = tmp39;
          cResult[26] = closure_12(ref, obj11);
          const tmp43 = closure_12(ref, obj11);
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
    }
  : (message) => {
      let Text;
      let closure_3;
      let colors;
      let first;
      let first1;
      let intl;
      let intl2;
      let intl3;
      let items4;
      let items5;
      let obj8;
      const sharedClientTheme = message.message.sharedClientTheme;
      const tmp = closure_14();
      let tmp2 = closure_7(null);
      importDefault = tmp2;
      let obj = first1;
      let tmp4;
      const useState = first1.useState;
      if (undefined !== sharedClientTheme) {
        let obj4 = { colors: colors.map(f108347), gradientColorStops: [], gradientAngle: null, baseMix: null };
        colors = sharedClientTheme.colors;
        ({ gradient_angle: obj2.gradientAngle, base_mix: obj2.baseMix } = sharedClientTheme);
        tmp4 = obj4;
      }
      [first, _slicedToArray] = useState(tmp4);
      let baseTheme;
      const useState2 = obj.useState;
      if (undefined !== sharedClientTheme) {
        let obj3 = sharedClientTheme(first[26]);
        baseTheme = obj3.getBaseTheme(sharedClientTheme.base_theme);
      }
      const tmp5Result = _slicedToArray(useState2(baseTheme), 2);
      first1 = tmp5Result[0];
      let closure_5 = tmp5Result[1];
      const tmp5Result2 = _slicedToArray(obj.useState(false), 2);
      const first2 = tmp5Result2[0];
      closure_7 = tmp5Result2[1];
      const ref = obj.useRef(true);
      const items = [sharedClientTheme];
      closure_5(() => {
        let colors;
        let tmp4;
        if (undefined !== sharedClientTheme) {
          const obj = { colors: colors.map(f108347), gradientColorStops: [], gradientAngle: null, baseMix: null };
          colors = sharedClientTheme.colors;
          ({ gradient_angle: obj.gradientAngle, base_mix: obj.baseMix } = sharedClientTheme);
          tmp4 = obj;
        }
        closure_3(tmp4);
        let baseTheme;
        if (undefined !== sharedClientTheme) {
          const obj2 = ClientThemesUtils;
          baseTheme = obj2.getBaseTheme(sharedClientTheme.base_theme);
        }
        closure_5(baseTheme);
        const obj3 = AnalyticsUtilsDefault;
        obj3.track(AnalyticEvents.CUSTOM_THEME_SHARE_PREVIEWED, {});
      }, items);
      const items1 = [first, first1];
      closure_5(() => {
        const tmp2 = undefined !== customTheme && undefined !== first1;
        if (tmp2) {
          const obj2 = { baseTheme: first1, customTheme };
          const obj = CustomThemeMobileActionCreators;
          obj.previewCustomTheme(obj2);
          const obj3 = ThemeActionCreators;
          obj3.refreshTheme();
        }
      }, items1);
      const items2 = [first2];
      first2(() => {
        ref.current = !first2;
      }, items2);
      const items3 = [ref];
      closure_5(
        () => () => {
          if (ref.current) {
            const obj = sharedClientTheme(first[12]);
            obj.clearPreviewTheme();
            const obj2 = sharedClientTheme(first[13]);
            obj2.refreshTheme();
          }
        },
        items3,
      );
      let obj5 = { ref: tmp2, backdropOpacity: 0, children: items4 };
      BottomSheet = sharedClientTheme(first[20]).BottomSheet;
      const obj6 = { title: intl.string(require("../../intl/ClientThemes.messages.js")["3ej1LT"]) };
      const BottomSheetTitleHeader = sharedClientTheme(first[15]).BottomSheetTitleHeader;
      intl = sharedClientTheme(first[16]).intl;
      items4 = [closure_12(BottomSheetTitleHeader, obj6), ,];
      const obj7 = { style: tmp.contentWrapper, children: closure_12(Text, obj8) };
      obj8 = {
        variant: "heading-md/medium",
        style: tmp.centeredText,
        children: intl2.string(require("../../intl/ClientThemes.messages.js").qZMUoL),
      };
      Text = sharedClientTheme(first[18]).Text;
      intl2 = sharedClientTheme(first[16]).intl;
      items4[1] = closure_12(ref, obj7);
      const obj9 = { style: tmp.ctaContainer, children: items5 };
      items5 = [,];
      const obj10 = {
        onPressApply() {
          const tmp2 = undefined !== customUserThemeSettings && undefined !== first1 && null !== ref.current;
          if (tmp2) {
            closure_7(true);
            const obj = CustomThemeMobileActionCreators;
            obj.updateCustomTheme(customUserThemeSettings, first1);
            const obj3 = { customUserThemeSettings, theme: first1 };
            const obj2 = UserSettingsActionCreators;
            obj2.saveClientTheme(obj3);
            const obj4 = CustomThemeMobileActionCreators;
            obj4.clearPreviewTheme();
            const obj5 = AnalyticsUtilsDefault;
            obj5.track(AnalyticEvents.CUSTOM_THEME_SHARE_APPLIED, {});
            const current = ref.current;
            current.closeActionSheet();
          }
        },
      };
      items5[0] = closure_12(closure_15, obj10);
      const obj18 = {
        text: intl3.string(sharedClientTheme(first[16]).t["13/7kX"]),
        onPress() {
          if (null !== ref.current) {
            const obj = CustomThemeMobileActionCreators;
            obj.clearPreviewTheme();
            const obj2 = ThemeActionCreators;
            obj2.refreshTheme();
            const current = tmp.current;
            current.closeActionSheet();
          }
        },
        variant: "secondary",
      };
      const Button = sharedClientTheme(first[19]).Button;
      intl3 = sharedClientTheme(first[16]).intl;
      items5[1] = closure_12(Button, obj18);
      items4[2] = closure_13(ref, obj9);
      return closure_13(BottomSheet, obj5);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPressApply) => {
      let TIER_2;
      let nitroWheelButton;
      let premiumTypeSubscription;
      let tmp10;
      let tmp13;
      let tmp5;
      let tmp6;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(12);
      onPressApply = onPressApply.onPressApply;
      const tmp4 = closure_14();
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [SubscriptionStore];
        const fn = function o() {
          return premiumTypeSubscription.getPremiumTypeSubscription();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const obj3 = PremiumUtilsDefault;
      const premiumTypeFromSubscription = obj3.getPremiumTypeFromSubscription(stateFromStores);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function h() {
          let items;
          const obj = { premiumType: TIER_2.TIER_2, analyticsLocations: items, analyticsLocation: {} };
          items = [];
          const tmp = openPremiumPlanSelectionActionSheetDefault;
          items[0] = AnalyticsLocationDefault.SHARE_CUSTOM_CLIENT_THEME_EMBED;
          tmp(obj);
        };
        cResult[2] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[2];
      }
      if (premiumTypeFromSubscription !== PremiumTypes.TIER_2) {
        let tmp16;
        let tmp18;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult = intl2.string(tmp(1126).t.pj0XBN);
          cResult[3] = stringResult;
          tmp16 = stringResult;
        } else {
          tmp16 = cResult[3];
        }
        if (cResult[4] !== tmp4.nitroWheelButton) {
          const fn3 = function f() {
            let items;
            const obj = { style: items };
            items = [nitroWheelButton.nitroWheelButton];
            return closure_12(native.NitroWheel, obj);
          };
          cResult[4] = tmp4.nitroWheelButton;
          cResult[5] = fn3;
          tmp18 = fn3;
        } else {
          tmp18 = cResult[5];
        }
        if (cResult[6] === tmp4.getNitroButton) {
          let tmp19;
          if (cResult[7] === tmp18) {
            tmp19 = cResult[8];
          }
          tmp13 = tmp19;
        }
        const obj2 = { text: tmp16, onPress: tmp10, renderIcon: tmp18, style: tmp4.getNitroButton };
        const tmp21 = closure_12(tmp(1188).ShinyButton, obj2);
        cResult[6] = tmp4.getNitroButton;
        cResult[7] = tmp18;
        cResult[8] = tmp21;
        tmp19 = tmp21;
      } else {
        let tmp11;
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult1 = intl.string(tmp(1126).t["1Qm822"]);
          cResult[9] = stringResult1;
          tmp11 = stringResult1;
        } else {
          tmp11 = cResult[9];
        }
        if (cResult[10] !== onPressApply) {
          const obj4 = { text: tmp11, onPress: onPressApply, variant: "primary" };
          const tmp15 = closure_12(tmp(5601).Button, obj4);
          cResult[10] = onPressApply;
          cResult[11] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp13 = cResult[11];
        }
      }
      return tmp13;
    }
  : (onPressApply) => {
      let TIER_2;
      let intl;
      let intl2;
      let nitroWheelButton;
      let premiumTypeSubscription;
      let tmp6;
      onPressApply = onPressApply.onPressApply;
      let tmp = closure_14();
      _require = tmp;
      let obj = require("get initialized");
      let items = [SubscriptionStore];
      const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
      const obj2 = PremiumUtilsDefault;
      if (obj2.getPremiumTypeFromSubscription(stateFromStores) !== PremiumTypes.TIER_2) {
        const obj3 = {
          text: intl2.string(require("intl").t.pj0XBN),
          onPress: function onPressSubscribe() {
            let items;
            const obj = { premiumType: TIER_2.TIER_2, analyticsLocations: items, analyticsLocation: {} };
            items = [];
            const tmp = openPremiumPlanSelectionActionSheetDefault;
            items[0] = AnalyticsLocationDefault.SHARE_CUSTOM_CLIENT_THEME_EMBED;
            tmp(obj);
          },
          renderIcon() {
            let items;
            const obj = { style: items };
            items = [nitroWheelButton.nitroWheelButton];
            return closure_12(native.NitroWheel, obj);
          },
          style: tmp.getNitroButton,
        };
        const ShinyButton = tmp2(1188).ShinyButton;
        intl2 = tmp2(1126).intl;
        tmp6 = closure_12(ShinyButton, obj3);
      } else {
        const obj4 = { text: intl.string(require("intl").t["1Qm822"]), onPress: onPressApply, variant: "primary" };
        const Button = tmp2(5601).Button;
        intl = tmp2(1126).intl;
        tmp6 = closure_12(Button, obj4);
      }
      return tmp6;
    };
const result = size.fileFinishedImporting("modules/client_themes/native/chat/SharedCustomThemeActionSheet.tsx");

export default tmp4;
