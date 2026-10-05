// discord_app/modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx
import shallowEqual from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import DisplayNameStylesConstants from "../DisplayNameStylesConstants.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import showGummyCustomColorSheetDefault from "showGummyCustomColorSheet.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import DisplayNameStylesUtils from "../DisplayNameStylesUtils.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let BottomSheet, dependencyMap, initialColor, obj1, selectedColors;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = react_native);
let closure_7 = DisplayNameStylesConstants.DISPLAY_NAME_STYLES_GUMMY_PRESETS;
let AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = DisplayNameStylesUtils.hueToGummyColor(0);
let createStyles = createStyles_mod;
let obj = {
  body: obj2,
  colorRowInset: obj3,
  optionContainer: { flexDirection: "row", flexWrap: "wrap" },
  swatchWrapper: { width: "25%", padding: 2 },
  swatch: obj4,
  swatchSelected: obj5,
  customSwatchEmpty: obj6,
  customIconOverlay: obj7,
  customIconScrim: size,
};
obj2 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
  alignItems: "center",
};
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_4, alignSelf: "stretch" };
obj4 = {
  height: 40,
  flexDirection: "row",
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  borderWidth: 2,
  borderColor: "transparent",
};
obj5 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj6 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
};
obj7 = { alignItems: "center", justifyContent: "center" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
size = {
  width: 28,
  height: 28,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: "transparent",
  alignItems: "center",
  justifyContent: "center",
};
let closure_12 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selectedColors) => {
      let closure_2;
      let closure_3;
      let closure_5;
      let closure_9;
      let findIndexResult;
      let tmp6;
      const tmp = selectedColors;
      let obj = selectedColors(576);
      const cResult = obj.c(72);
      selectedColors = selectedColors.selectedColors;
      const onSelectColors = selectedColors.onSelectColors;
      const tmp4 = closure_12();
      dependencyMap = tmp4;
      let obj2 = selectedColors(10636);
      const displayNameStylesEffectConfig = obj2.useDisplayNameStylesEffectConfig(
        selectedColors(1396).DisplayNameEffect.GUMMY,
      );
      if (cResult[0] !== selectedColors) {
        const tmp7 =
          selectedColors.length > 0 &&
          !closure_7.some((item) => {
            const obj = shallowEqual;
            return obj.areArraysShallowEqual(item, selectedColors);
          });
        cResult[0] = selectedColors;
        cResult[1] = tmp7;
        tmp6 = tmp7;
      } else {
        tmp6 = cResult[1];
      }
      _slicedToArray = tmp6;
      if (cResult[2] === tmp6) {
        let tmp9;
        if (cResult[3] === selectedColors) {
          tmp9 = cResult[4];
        }
        let obj3 = initialColor;
        [initialColor, closure_5] = initialColor.useState(tmp9);
        const tmp10 = _slicedToArray;
        if (cResult[5] !== selectedColors) {
          class M {
            constructor() {
              let gummyColors = selectedColors;
              if (selectedColors.length <= 0) {
                const obj = DisplayNameStylesUtils;
                gummyColors = obj.buildGummyColors(closure_11);
              }
              return gummyColors;
            }
          }
          cResult[5] = selectedColors;
          cResult[6] = M;
        } else {
          class M {
            constructor() {
              let gummyColors = selectedColors;
              if (selectedColors.length <= 0) {
                const obj = DisplayNameStylesUtils;
                gummyColors = obj.buildGummyColors(closure_11);
              }
              return gummyColors;
            }
          }
        }
        const tmp10Result = tmp10(obj3.useState(M), 2);
        const first1 = tmp10Result[0];
        closure_7 = tmp10Result[1];
        const tmp17 = onSelectColors(15166);
        const tmp17Result = tmp17(tmp(1396).DisplayNameEffect.GUMMY);
        if (cResult[7] !== first1) {
          class L {
            constructor(colors) {
              colors = colors.colors;
              const obj = shallowEqual;
              return obj.areArraysShallowEqual(colors, first1);
            }
          }
          cResult[7] = first1;
          cResult[8] = L;
        } else {
          class L {
            constructor(colors) {
              colors = colors.colors;
              const obj = shallowEqual;
              return obj.areArraysShallowEqual(colors, first1);
            }
          }
        }
        AnalyticEvents = tmp17Result.findIndex(L);
        tmp17Result.findIndex(L);
        class I {
          constructor() {
            let result;
            if (closure_3) {
              const obj = DisplayNameStylesUtils;
              result = obj.rebuildGummySourceColor(selectedColors);
            } else {
              result = closure_11;
            }
            return result;
          }
        }
        if (cResult[9] !== initialColor) {
          class O {
            constructor() {
              obj = closure_0(closure_2[15]);
              result = obj.triggerHapticFeedback(closure_0(closure_2[15]).HapticFeedbackTypes.IMPACT_LIGHT);
              obj1 = {
                initialColor: closure_4,
                onSelect(color) {
                  closure_1_5(color);
                  const obj = selectedColors(closure_2[6]);
                  closure_1_7(obj.buildGummyColors(color));
                },
              };
              tmp2 = closure_1(closure_2[16])(obj1);
              return;
            }
          }
          cResult[9] = initialColor;
          cResult[10] = O;
        } else {
          class O {
            constructor() {
              obj = closure_0(closure_2[15]);
              result = obj.triggerHapticFeedback(closure_0(closure_2[15]).HapticFeedbackTypes.IMPACT_LIGHT);
              obj1 = {
                initialColor: closure_4,
                onSelect(color) {
                  closure_1_5(color);
                  const obj = selectedColors(closure_2[6]);
                  closure_1_7(obj.buildGummyColors(color));
                },
              };
              tmp2 = closure_1(closure_2[16])(obj1);
              return;
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor() {
              obj = closure_0(closure_2[15]);
              result = obj.triggerHapticFeedback(closure_0(closure_2[15]).HapticFeedbackTypes.IMPACT_LIGHT);
              obj1 = {
                initialColor: closure_4,
                onSelect(color) {
                  closure_1_5(color);
                  const obj = selectedColors(closure_2[6]);
                  closure_1_7(obj.buildGummyColors(color));
                },
              };
              tmp2 = closure_1(closure_2[16])(obj1);
              return;
            }
          }
          cResult[11] = tmp24;
        } else {
          class O {
            constructor() {
              obj = closure_0(closure_2[15]);
              result = obj.triggerHapticFeedback(closure_0(closure_2[15]).HapticFeedbackTypes.IMPACT_LIGHT);
              obj1 = {
                initialColor: closure_4,
                onSelect(color) {
                  closure_1_5(color);
                  const obj = selectedColors(closure_2[6]);
                  closure_1_7(obj.buildGummyColors(color));
                },
              };
              tmp2 = closure_1(closure_2[16])(obj1);
              return;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class Y {
            constructor() {
              const items = [...closure_7[0]];
              closure_7(items);
              closure_5(closure_11);
            }
          }
          cResult[12] = Y;
        } else {
          class Y {
            constructor() {
              const items = [...closure_7[0]];
              closure_7(items);
              closure_5(closure_11);
            }
          }
        }
        if (cResult[13] === first1) {
          let tmp27;
          class Y {
            constructor() {
              const items = [...closure_7[0]];
              closure_7(items);
              closure_5(closure_11);
            }
          }
          const _Symbol3 = Symbol;
          const name = displayNameStylesEffectConfig.name;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                const items = [...closure_7[0]];
                closure_7(items);
                closure_5(closure_11);
              }
            }
            const stringResult = obj5.string(tmp(1126).t.XqMe3N);
            cResult[16] = stringResult;
            tmp27 = stringResult;
          } else {
            class Y {
              constructor() {
                const items = [...closure_7[0]];
                closure_7(items);
                closure_5(closure_11);
              }
            }
          }
          if (cResult[17] !== X) {
            class Y {
              constructor() {
                const items = [...closure_7[0]];
                closure_7(items);
                closure_5(closure_11);
              }
            }
            let obj4 = { variant: "primary", size: "sm", text: tmp27, onPress: X };
            cResult[17] = X;
            cResult[18] = tmp24(tmp(5594).Button, obj4);
            const tmp30 = tmp24(tmp(5594).Button, obj4);
          } else {
            class Y {
              constructor() {
                const items = [...closure_7[0]];
                closure_7(items);
                closure_5(closure_11);
              }
            }
          }
          if (cResult[19] === displayNameStylesEffectConfig.name) {
            class Y {
              constructor() {
                const items = [...closure_7[0]];
                closure_7(items);
                closure_5(closure_11);
              }
            }
            if (cResult[22] === tmp4.colorRowInset) {
              class Y {
                constructor() {
                  const items = [...closure_7[0]];
                  closure_7(items);
                  closure_5(closure_11);
                }
              }
              if (!tmp20) {
                class Y {
                  constructor() {
                    const items = [...closure_7[0]];
                    closure_7(items);
                    closure_5(closure_11);
                  }
                }
              }
              if (cResult[25] === tmp4.swatch) {
                let tmp43Result;
                class Y {
                  constructor() {
                    const items = [...closure_7[0]];
                    closure_7(items);
                    closure_5(closure_11);
                  }
                }
                if (cResult[28] !== !tmp20) {
                  class Y {
                    constructor() {
                      const items = [...closure_7[0]];
                      closure_7(items);
                      closure_5(closure_11);
                    }
                  }
                  tmp39[0] = !tmp20;
                  cResult[28] = !tmp20;
                  cResult[29] = tmp39;
                } else {
                  class Y {
                    constructor() {
                      const items = [...closure_7[0]];
                      closure_7(items);
                      closure_5(closure_11);
                    }
                  }
                }
                const _Symbol4 = Symbol;
                if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                  class Y {
                    constructor() {
                      const items = [...closure_7[0]];
                      closure_7(items);
                      closure_5(closure_11);
                    }
                  }
                  cResult[30] = obj8.string(tmp(1126).t["FHBa/1"]);
                  const stringResult1 = obj8.string(tmp(1126).t["FHBa/1"]);
                } else {
                  class Y {
                    constructor() {
                      const items = [...closure_7[0]];
                      closure_7(items);
                      closure_5(closure_11);
                    }
                  }
                }
                if (cResult[31] === first1) {
                  class Y {
                    constructor() {
                      const items = [...closure_7[0]];
                      closure_7(items);
                      closure_5(closure_11);
                    }
                  }
                }
                if (tmp20) {
                  class Y {
                    constructor() {
                      const items = [...closure_7[0]];
                      closure_7(items);
                      closure_5(closure_11);
                    }
                  }
                  const obj6 = { style: tmp4.customSwatchEmpty };
                  tmp43Result = tmp43(closure_5, obj6);
                } else {
                  class Y {
                    constructor() {
                      const items = [...closure_7[0]];
                      closure_7(items);
                      closure_5(closure_11);
                    }
                  }
                  tmp44[0] = first1;
                  tmp43Result = tmp43(tmp16(14444), tmp44);
                }
                cResult[31] = first1;
                cResult[32] = tmp20;
                cResult[33] = tmp4.customSwatchEmpty;
                cResult[34] = tmp43Result;
              }
              let items = [tmp4.swatch, !tmp20];
              cResult[25] = tmp4.swatch;
              cResult[26] = !tmp20;
              cResult[27] = items;
            }
            const items1 = [,];
            ({ colorRowInset: arr2[0], optionContainer: arr2[1] } = tmp4);
            cResult[22] = tmp4.colorRowInset;
            cResult[23] = tmp4.optionContainer;
            cResult[24] = items1;
          }
          const obj7 = { title: name, trailing: tmp29 };
          cResult[19] = displayNameStylesEffectConfig.name;
          cResult[20] = tmp29;
          cResult[21] = tmp24(onSelectColors(15163), obj7);
          const tmp33 = tmp24(onSelectColors(15163), obj7);
        }
        class X {
          constructor() {
            const obj = HapticUtils;
            const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
            onSelectColors(first1);
            const obj2 = AnalyticsUtilsDefault;
            const obj3 = { default: false, colors: first1 };
            obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
            const obj4 = ActionSheetActionCreatorsDefault;
            obj4.hideActionSheet();
          }
        }
        cResult[13] = first1;
        cResult[14] = onSelectColors;
        cResult[15] = X;
      }
      class I {
        constructor() {
          let result;
          if (closure_3) {
            const obj = DisplayNameStylesUtils;
            result = obj.rebuildGummySourceColor(selectedColors);
          } else {
            result = closure_11;
          }
          return result;
        }
      }
      cResult[2] = tmp6;
      cResult[3] = selectedColors;
      cResult[4] = I;
      tmp9 = I;
    }
  : (selectedColors) => {
      let Button;
      let closure_2;
      let closure_3;
      let closure_5;
      let first1;
      let intl;
      let intl2;
      let intl3;
      let items2;
      let items4;
      let items5;
      let items6;
      let obj12;
      let obj3;
      let obj4;
      let obj5;
      let obj8;
      let tmp18Result;
      let tmp19;
      let tmp22;
      selectedColors = selectedColors.selectedColors;
      const onSelectColors = selectedColors.onSelectColors;
      _slicedToArray = undefined;
      initialColor = undefined;
      closure_5 = undefined;
      first1 = undefined;
      closure_7 = undefined;
      let c8;
      let closure_9;
      const tmp = closure_12();
      dependencyMap = tmp;
      const tmp2 = selectedColors;
      let obj = selectedColors(10636);
      let tmp5 = selectedColors.length > 0;
      const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(
        selectedColors(1396).DisplayNameEffect.GUMMY,
      );
      if (tmp5) {
        tmp5 = !closure_7.some((item) => {
          const obj = shallowEqual;
          return obj.areArraysShallowEqual(item, selectedColors);
        });
      }
      _slicedToArray = tmp5;
      [initialColor, closure_5] = initialColor.useState(() => {
        let result;
        if (closure_3) {
          const obj = DisplayNameStylesUtils;
          result = obj.rebuildGummySourceColor(selectedColors);
        } else {
          result = closure_11;
        }
        return result;
      });
      [first1, closure_7] = initialColor.useState(() => {
        let gummyColors = selectedColors;
        if (selectedColors.length <= 0) {
          const obj = DisplayNameStylesUtils;
          gummyColors = obj.buildGummyColors(closure_11);
        }
        return gummyColors;
      });
      const tmp12 = onSelectColors(15166);
      const tmp12Result = tmp12(tmp2(1396).DisplayNameEffect.GUMMY);
      const findIndexResult = tmp12Result.findIndex((colors) => {
        colors = colors.colors;
        const obj = shallowEqual;
        return obj.areArraysShallowEqual(colors, first1);
      });
      c8 = findIndexResult;
      let items = [initialColor];
      const callback = initialColor.useCallback(() => {
        let obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        const obj2 = {
          initialColor,
          onSelect(color) {
            closure_1_5(color);
            const obj = selectedColors(closure_2[6]);
            closure_1_7(obj.buildGummyColors(color));
          },
        };
        showGummyCustomColorSheetDefault(obj2);
      }, items);
      closure_9 = initialColor.useCallback((arg0) => {
        const items = [...arg0];
        closure_7(items);
      }, []);
      const items1 = [first1, onSelectColors];
      const callback1 = initialColor.useCallback(() => {
        const items = [...closure_7[0]];
        closure_7(items);
        closure_5(closure_11);
      }, []);
      const callback2 = initialColor.useCallback(() => {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        onSelectColors(first1);
        const obj2 = AnalyticsUtilsDefault;
        const obj3 = { default: false, colors: first1 };
        obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
        const obj4 = ActionSheetActionCreatorsDefault;
        obj4.hideActionSheet();
      }, items1);
      let obj2 = { header: closure_9(tmp19, obj3), children: closure_10(closure_5, obj5) };
      BottomSheet = tmp2(6645).BottomSheet;
      obj3 = { title: displayNameStylesEffectConfig.name, trailing: closure_9(Button, obj4) };
      obj4 = { variant: "primary", size: "sm", text: intl.string(tmp2(1126).t.XqMe3N), onPress: callback2 };
      tmp19 = onSelectColors(15163);
      Button = tmp2(5594).Button;
      intl = tmp2(1126).intl;
      const obj6 = { style: items2, children: items5 };
      items2 = [,];
      obj5 = { style: tmp.body, children: items6 };
      ({ colorRowInset: arr5[0], optionContainer: arr5[1] } = tmp);
      const items3 = [tmp.swatch];
      let swatchSelected = tmp23;
      const obj7 = { style: tmp.swatchWrapper, children: closure_10(tmp22, obj8) };
      const tmp11 = onSelectColors;
      tmp22 = first1;
      if (findIndexResult < 0) {
        swatchSelected = tmp.swatchSelected;
      }
      items3[1] = swatchSelected;
      obj8 = {
        style: items3,
        onPress: callback,
        accessibilityRole: "button",
        accessibilityState: { selected: findIndexResult < 0 },
        accessibilityLabel: intl2.string(tmp2(1126).t["FHBa/1"]),
        children: items4,
      };
      intl2 = tmp2(1126).intl;
      if (findIndexResult >= 0) {
        const obj9 = { style: tmp.customSwatchEmpty };
        tmp18Result = tmp18(tmp21, obj9);
      } else {
        const obj10 = { colors: first1 };
        tmp18Result = tmp18(tmp11(14444), obj10);
      }
      items4 = [tmp18Result];
      const obj11 = { style: tmp.customIconOverlay, pointerEvents: "none", children: closure_9(closure_5, obj12) };
      obj12 = {
        style: tmp.customIconScrim,
        children: closure_9(tmp2(10058).PencilIcon, { color: "white", size: "sm" }),
      };
      items4[1] = closure_9(closure_5, obj11);
      items5 = [
        closure_9(closure_5, obj7),
        tmp12Result.map((colors, index) => {
          let obj2;
          colors = colors.colors;
          const items = [closure_2.swatch];
          let swatchSelected = tmp;
          const a11yLabel = colors.a11yLabel;
          const obj = { style: closure_2.swatchWrapper, children: closure_9(first1, obj2) };
          if (c8 === index) {
            swatchSelected = closure_2.swatchSelected;
          }
          items[1] = swatchSelected;
          obj2 = {
            style: items,
            onPress() {
              return closure_9(colors);
            },
            accessibilityRole: "button",
            accessibilityState: { selected: c8 === index },
            accessibilityLabel: a11yLabel,
            children: closure_9(onSelectColors(closure_2[22]), { colors }),
          };
          return closure_9(closure_5, obj, index);
        }),
      ];
      items6 = [closure_10(closure_5, obj6)];
      const obj13 = { text: intl3.string(tmp2(1126).t.yBZMsQ), onPress: callback1, variant: "secondary" };
      const Button2 = tmp2(5594).Button;
      intl3 = tmp2(1126).intl;
      items6[1] = closure_9(Button2, obj13);
      return closure_9(BottomSheet, obj2);
    };
size = size_mod;
let result = size.fileFinishedImporting(
  "modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx",
);

export default tmp6;
