// discord_app/modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import ColorPickerConsts from "../consts/ColorPickerConsts.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet, importDefault, selectedColors, tmpResult;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
let size1;
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  body: obj2,
  gradientContainer: obj3,
  dropperContainer: rect,
  dropper: obj4,
  gradient: size,
  optionContainer: obj5,
  swatchWrapper: obj6,
  pressable: obj7,
  selectedRing: obj8,
  option: { flex: 1 },
  checkmarkOverlay: obj9,
  checkmark: size1,
  resetButtonContainer: obj10,
};
obj2 = {
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: nativeDefault.space.PX_16,
};
createStyles = createStyles.createStyles;
obj3 = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
};
rect = {
  left: nativeDefault.space.PX_24,
  right: nativeDefault.space.PX_24,
  position: "absolute",
  flexDirection: "row",
  justifyContent: "space-between",
};
obj4 = {
  borderColor: "white",
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
};
size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
obj5 = {
  flexDirection: "row",
  flexWrap: "wrap",
  paddingHorizontal: nativeDefault.space.PX_4,
  rowGap: nativeDefault.space.PX_16,
};
obj6 = { width: "33.333%", paddingHorizontal: nativeDefault.space.PX_4 };
obj7 = { height: 40, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj8 = { borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj9 = { alignItems: "center", justifyContent: "center" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
size1 = { width: ColorPickerConsts.CHECKMARK_SIZE, height: ColorPickerConsts.CHECKMARK_SIZE };
obj10 = { alignSelf: "stretch", flexDirection: "row", marginHorizontal: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selectedColors) => {
      let body;
      let closure_1;
      let colors;
      let displayNameStylesEffectConfig;
      let gradient;
      let gradientContainer;
      let obj4;
      let onSelectColors;
      let selectedEffectId;
      let obj = onSelectColors(displayNameStylesEffectConfig[9]);
      const cResult = obj.c(74);
      ({ selectedEffectId, onSelectColors } = selectedColors);
      selectedColors = selectedColors.selectedColors;
      const tmp4 = closure_11();
      importDefault = tmp4;
      let obj2 = onSelectColors(displayNameStylesEffectConfig[10]);
      displayNameStylesEffectConfig = obj2.useDisplayNameStylesEffectConfig(selectedEffectId);
      let obj3 = onSelectColors(displayNameStylesEffectConfig[11]);
      const effectColorCount = obj3.getEffectColorCount(selectedEffectId);
      let tmp8 = require("useColorPresetsWithA11yLabels")(selectedEffectId);
      let closure_3 = tmp8;
      const tmp9 = closure_3(colors.useState(selectedColors), 2);
      colors = tmp9[0];
      let closure_5 = tmp9[1];
      if (cResult[0] === colors) {
        let tmp10;
        if (cResult[1] === onSelectColors) {
          tmp10 = cResult[2];
        }
        if (cResult[3] === displayNameStylesEffectConfig.defaultColors) {
          let tmp19;
          let tmp20;
          const first1 = tmp8[0];
          colors = undefined;
          if (first1 != null) {
            colors = first1.colors;
          }
          if (cResult[6] !== colors) {
            class D {
              constructor(arg0) {
                closure_0 = selectedColors;
                num = closure_4[selectedColors];
                tmp = closure_1(closure_2[16]);
                if (num == null) {
                  num = 0;
                }
                obj = {
                  color: num,
                  onSelect(arg0) {
                    closure_0 = arg0;
                    const obj = onSelectColors(displayNameStylesEffectConfig[13]);
                    const result = obj.triggerHapticFeedback(
                      onSelectColors(displayNameStylesEffectConfig[13]).HapticFeedbackTypes.IMPACT_MEDIUM,
                    );
                    closure_1_5((arr) =>
                      arr.map(function () {
                        /* body not rendered: F155234 */
                      }),
                    );
                  },
                  actionButtonVariant: "primary",
                };
                tmpResult = tmp(obj, "stack");
                return;
              }
            }
            cResult[6] = colors;
            cResult[7] = D;
          } else {
            class D {
              constructor(arg0) {
                closure_0 = selectedColors;
                num = closure_4[selectedColors];
                tmp = closure_1(closure_2[16]);
                if (num == null) {
                  num = 0;
                }
                obj = {
                  color: num,
                  onSelect(arg0) {
                    closure_0 = arg0;
                    const obj = onSelectColors(displayNameStylesEffectConfig[13]);
                    const result = obj.triggerHapticFeedback(
                      onSelectColors(displayNameStylesEffectConfig[13]).HapticFeedbackTypes.IMPACT_MEDIUM,
                    );
                    closure_1_5((arr) =>
                      arr.map(function () {
                        /* body not rendered: F155234 */
                      }),
                    );
                  },
                  actionButtonVariant: "primary",
                };
                tmpResult = tmp(obj, "stack");
                return;
              }
            }
          }
          D = tmp18;
          class R {
            constructor() {
              const first = closure_3[0];
              colors = undefined;
              if (first != null) {
                colors = first.colors;
              }
              if (colors == null) {
                colors = displayNameStylesEffectConfig.defaultColors;
              }
              const items = [...colors];
              closure_5(items);
            }
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor(arg0) {
                const items = [...arg0];
                closure_5(items);
              }
            }
            cResult[8] = A;
            tmp19 = A;
          } else {
            class A {
              constructor(arg0) {
                const items = [...arg0];
                closure_5(items);
              }
            }
          }
          A = tmp19;
          BottomSheet = onSelectColors(tmp2[17]).BottomSheet;
          const _Symbol2 = Symbol;
          const name = displayNameStylesEffectConfig.name;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor(arg0) {
                const items = [...arg0];
                closure_5(items);
              }
            }
            const stringResult = obj4.string(onSelectColors(displayNameStylesEffectConfig[18]).t.XqMe3N);
            cResult[9] = stringResult;
            tmp20 = stringResult;
          } else {
            class A {
              constructor(arg0) {
                const items = [...arg0];
                closure_5(items);
              }
            }
          }
          if (cResult[10] !== tmp10) {
            class A {
              constructor(arg0) {
                const items = [...arg0];
                closure_5(items);
              }
            }
            let obj5 = { variant: "primary", size: "sm", text: tmp20, onPress: tmp10 };
            cResult[10] = tmp10;
            closure_8(onSelectColors(displayNameStylesEffectConfig[19]).Button, obj5);
            class R {
              constructor() {
                const first = closure_3[0];
                colors = undefined;
                if (first != null) {
                  colors = first.colors;
                }
                if (colors == null) {
                  colors = displayNameStylesEffectConfig.defaultColors;
                }
                const items = [...colors];
                closure_5(items);
              }
            }
          } else {
            class A {
              constructor(arg0) {
                const items = [...arg0];
                closure_5(items);
              }
            }
          }
          if (cResult[12] === displayNameStylesEffectConfig.name) {
            class A {
              constructor(arg0) {
                const items = [...arg0];
                closure_5(items);
              }
            }
            ({ body, gradientContainer, gradient } = tmp4);
            if (cResult[15] !== colors) {
              class A {
                constructor(arg0) {
                  const items = [...arg0];
                  closure_5(items);
                }
              }
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                class A {
                  constructor(arg0) {
                    const items = [...arg0];
                    closure_5(items);
                  }
                }
                cResult[17] = tmp30;
              } else {
                class A {
                  constructor(arg0) {
                    const items = [...arg0];
                    closure_5(items);
                  }
                }
              }
              const mapped = colors.map(tmp30);
              cResult[15] = colors;
              cResult[16] = mapped;
              class R {
                constructor() {
                  const first = closure_3[0];
                  colors = undefined;
                  if (first != null) {
                    colors = first.colors;
                  }
                  if (colors == null) {
                    colors = displayNameStylesEffectConfig.defaultColors;
                  }
                  const items = [...colors];
                  closure_5(items);
                }
              }
            } else {
              class A {
                constructor(arg0) {
                  const items = [...arg0];
                  closure_5(items);
                }
              }
            }
            const _Symbol3 = Symbol;
            class R {
              constructor() {
                const first = closure_3[0];
                colors = undefined;
                if (first != null) {
                  colors = first.colors;
                }
                if (colors == null) {
                  colors = displayNameStylesEffectConfig.defaultColors;
                }
                const items = [...colors];
                closure_5(items);
              }
            }
            if (cResult[20] === tmp4.gradient) {
              class A {
                constructor(arg0) {
                  const items = [...arg0];
                  closure_5(items);
                }
              }
              const _Array = Array;
              let obj6 = { length: effectColorCount };
              const dropperContainer = tmp4.dropperContainer;
              const arr = Array.from(obj6);
              if (cResult[23] === tmp18) {
                class A {
                  constructor(arg0) {
                    const items = [...arg0];
                    closure_5(items);
                  }
                }
              }
              const mapped1 = arr.map((item, index) => {
                let intl;
                let obj2;
                let closure_0 = index;
                const obj = {
                  style: closure_1.dropper,
                  onPress() {
                    return D(index);
                  },
                  accessibilityLabel: intl.formatToPlainString(
                    onSelectColors(displayNameStylesEffectConfig[18]).t.n5Ve0L,
                    obj2,
                  ),
                  accessibilityRole: "button",
                  children: closure_1_8(onSelectColors(displayNameStylesEffectConfig[23]).EyeDropperIcon, {
                    color: "white",
                    size: "sm",
                  }),
                };
                intl = onSelectColors(displayNameStylesEffectConfig[18]).intl;
                obj2 = { number: index + 1 };
                return closure_1_8(D, obj, index);
              });
              class R {
                constructor() {
                  const first = closure_3[0];
                  colors = undefined;
                  if (first != null) {
                    colors = first.colors;
                  }
                  if (colors == null) {
                    colors = displayNameStylesEffectConfig.defaultColors;
                  }
                  const items = [...colors];
                  closure_5(items);
                }
              }
              cResult[23] = tmp18;
              cResult[24] = tmp4.dropper;
              cResult[25] = arr;
              cResult[26] = mapped1;
            }
            let obj7 = { style: gradient, colors: tmp28, start: tmp33, end: tmp34 };
            cResult[20] = tmp4.gradient;
            cResult[21] = tmp28;
            cResult[22] = closure_8(require("LinearGradient"), obj7);
            const tmp37 = closure_8(require("LinearGradient"), obj7);
          }
          let obj8 = { title: name, trailing: tmp22 };
          cResult[12] = displayNameStylesEffectConfig.name;
          cResult[13] = tmp22;
          cResult[14] = closure_8(require("DisplayNameStylesSheetHeader"), obj8);
          const tmp26 = closure_8(require("DisplayNameStylesSheetHeader"), obj8);
        }
        let num = 3;
        cResult[3] = displayNameStylesEffectConfig.defaultColors;
        if (tmp8[0] != null) {
          class A {
            constructor(arg0) {
              const items = [...arg0];
              closure_5(items);
            }
          }
        }
        class R {
          constructor() {
            const first = closure_3[0];
            colors = undefined;
            if (first != null) {
              colors = first.colors;
            }
            if (colors == null) {
              colors = displayNameStylesEffectConfig.defaultColors;
            }
            const items = [...colors];
            closure_5(items);
          }
        }
        cResult[4] = undefined;
        cResult[5] = R;
      }
      const fn = function l() {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        onSelectColors(colors);
        const obj2 = AnalyticsUtilsDefault;
        const obj3 = { default: false, colors };
        obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
        const obj4 = ActionSheetActionCreatorsDefault;
        obj4.hideActionSheet();
      };
      cResult[0] = colors;
      cResult[1] = onSelectColors;
      cResult[2] = fn;
      tmp10 = fn;
    }
  : (selectedColors) => {
      let Button;
      let Button2;
      let arr2;
      let closure_1;
      let intl;
      let intl2;
      let items3;
      let items4;
      let obj12;
      let obj4;
      let obj5;
      let obj6;
      let onSelectColors;
      let selectedEffectId;
      let tmp7;
      ({ selectedEffectId, onSelectColors } = selectedColors);
      let displayNameStylesEffectConfig;
      let colors;
      selectedColors = selectedColors.selectedColors;
      let tmp = closure_11();
      importDefault = tmp;
      let obj = onSelectColors(displayNameStylesEffectConfig[10]);
      displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(selectedEffectId);
      let obj2 = onSelectColors(displayNameStylesEffectConfig[11]);
      const effectColorCount = obj2.getEffectColorCount(selectedEffectId);
      const arr = require("useColorPresetsWithA11yLabels")(selectedEffectId);
      const tmp4 = arr(colors.useState(selectedColors), 2);
      colors = tmp4[0];
      let closure_5 = tmp4[1];
      let items = [colors, onSelectColors];
      let items1 = [arr, displayNameStylesEffectConfig.defaultColors];
      const callback = colors.useCallback(() => {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        onSelectColors(colors);
        const obj2 = AnalyticsUtilsDefault;
        const obj3 = { default: false, colors };
        obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
        const obj4 = ActionSheetActionCreatorsDefault;
        obj4.hideActionSheet();
      }, items);
      const items2 = [colors];
      const callback1 = colors.useCallback(() => {
        const first = arr[0];
        colors = undefined;
        if (first != null) {
          colors = first.colors;
        }
        if (colors == null) {
          colors = displayNameStylesEffectConfig.defaultColors;
        }
        const items = [...colors];
        closure_5(items);
      }, items1);
      let closure_6 = colors.useCallback((arg0) => {
        let closure_0 = arg0;
        let num = first[arg0];
        let tmp = closure_1(displayNameStylesEffectConfig[16]);
        if (num == null) {
          num = 0;
        }
        let obj = {
          color: num,
          onSelect(arg0) {
            closure_0 = arg0;
            const obj = onSelectColors(displayNameStylesEffectConfig[13]);
            const result = obj.triggerHapticFeedback(
              onSelectColors(displayNameStylesEffectConfig[13]).HapticFeedbackTypes.IMPACT_MEDIUM,
            );
            closure_1_5((arr) =>
              arr.map((item, index) => {
                let tmp = item;
                if (index === closure_0) {
                  tmp = closure_1_0;
                }
                return tmp;
              }),
            );
          },
          actionButtonVariant: "primary",
        };
        tmp(obj, "stack");
      }, items2);
      let closure_7 = colors.useCallback((arg0) => {
        const items = [...arg0];
        closure_5(items);
      }, []);
      let obj3 = { header: closure_8(tmp7, obj4), children: closure_9(closure_5, obj6) };
      BottomSheet = onSelectColors(displayNameStylesEffectConfig[17]).BottomSheet;
      obj4 = { title: displayNameStylesEffectConfig.name, trailing: closure_8(Button, obj5) };
      obj5 = {
        variant: "primary",
        size: "sm",
        text: intl.string(onSelectColors(displayNameStylesEffectConfig[18]).t.XqMe3N),
        onPress: callback,
      };
      tmp7 = require("DisplayNameStylesSheetHeader");
      Button = onSelectColors(displayNameStylesEffectConfig[19]).Button;
      intl = onSelectColors(displayNameStylesEffectConfig[18]).intl;
      obj6 = { style: tmp.body, children: items4 };
      let obj7 = { style: tmp.gradientContainer, children: items3 };
      let obj8 = {
        style: tmp.gradient,
        colors: colors.map((item) => {
          const obj = onSelectColors(displayNameStylesEffectConfig[21]);
          return obj.int2hex(item);
        }),
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
      };
      let tmp8 = require("LinearGradient");
      items3 = [closure_8(tmp8, obj8)];
      const obj9 = {
        style: tmp.dropperContainer,
        children: arr2.map((item, index) => {
          let intl;
          let obj2;
          let closure_0 = index;
          const obj = {
            style: closure_1.dropper,
            onPress() {
              return closure_6(index);
            },
            accessibilityLabel: intl.formatToPlainString(
              onSelectColors(displayNameStylesEffectConfig[18]).t.n5Ve0L,
              obj2,
            ),
            accessibilityRole: "button",
            children: closure_1_8(onSelectColors(displayNameStylesEffectConfig[23]).EyeDropperIcon, {
              color: "white",
              size: "sm",
            }),
          };
          intl = onSelectColors(displayNameStylesEffectConfig[18]).intl;
          obj2 = { number: index + 1 };
          return closure_1_8(closure_6, obj, index);
        }),
      };
      arr2 = Array.from({ length: effectColorCount });
      items3[1] = closure_8(closure_5, obj9);
      items4 = [closure_9(closure_5, obj7), ,];
      const obj10 = {
        style: tmp.optionContainer,
        children: arr.map((colors, index) => {
          let PressableOpacity;
          let items;
          let items1;
          let obj3;
          let obj8;
          colors = colors.colors;
          const a11yLabel = colors.a11yLabel;
          let obj = closure_1(displayNameStylesEffectConfig[24]);
          let isEqualResult = obj.isEqual(colors, first);
          const obj2 = { style: closure_1.swatchWrapper, children: closure_1_9(PressableOpacity, obj3) };
          obj3 = {
            style: closure_1.pressable,
            onPress() {
              return closure_7(colors);
            },
            accessibilityRole: "button",
            accessibilityState: { selected: isEqualResult },
            accessibilityLabel: a11yLabel,
            children: items,
          };
          PressableOpacity = onSelectColors(displayNameStylesEffectConfig[25]).PressableOpacity;
          const obj4 = {
            style: closure_1.option,
            colors: colors.map((item) => {
              const obj = colors(displayNameStylesEffectConfig[21]);
              return obj.int2hex(item);
            }),
            start: { x: 0, y: 0 },
            end: { x: 1, y: 0 },
          };
          const tmp8 = closure_1(displayNameStylesEffectConfig[22]);
          items = [closure_1_8(tmp8, obj4)];
          if (isEqualResult) {
            const obj5 = { children: items1 };
            const obj6 = { style: closure_1.selectedRing, pointerEvents: "none" };
            items1 = [closure_1_8(closure_5, obj6)];
            const obj7 = {
              style: closure_1.checkmarkOverlay,
              pointerEvents: "none",
              children: closure_1_8(onSelectColors(displayNameStylesEffectConfig[26]).CheckmarkLargeIcon, obj8),
            };
            obj8 = { size: "custom", style: closure_1.checkmark, color: "white" };
            items1[1] = closure_1_8(closure_5, obj7);
            isEqualResult = closure_1_9(closure_1_10, obj5);
          }
          items[1] = isEqualResult;
          return closure_1_8(closure_5, obj2, index);
        }),
      };
      items4[1] = closure_8(closure_5, obj10);
      const obj11 = { style: tmp.resetButtonContainer, children: closure_8(Button2, obj12) };
      obj12 = {
        text: intl2.string(onSelectColors(displayNameStylesEffectConfig[18]).t.yBZMsQ),
        onPress: callback1,
        variant: "secondary",
        size: "md",
        grow: true,
      };
      Button2 = onSelectColors(displayNameStylesEffectConfig[19]).Button;
      intl2 = onSelectColors(displayNameStylesEffectConfig[18]).intl;
      items4[2] = closure_8(closure_5, obj11);
      return closure_8(BottomSheet, obj3);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx");

export default tmp7;
