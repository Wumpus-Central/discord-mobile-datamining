// discord_app/modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx
import discord_common_shallowEqual from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import DisplayNameStylesUtils2 from "../DisplayNameStylesUtils.tsx";
import DisplayNameEffect from "../../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import showGummyCustomColorSheetDefault from "showGummyCustomColorSheet.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = get_ActivityIndicator);
let colors = fn(1407).DISPLAY_NAME_STYLES_GUMMY_PRESETS;
const AnalyticEvents = fn(1084).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const DisplayNameStylesUtils = fn(1406);
let closure_11 = DisplayNameStylesUtils.hueToGummyColor(0);
const createStyles = fn(5005);
let obj3 = {
  body: {
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_16,
    alignItems: "center",
  },
  colorRowInset: null,
  optionContainer: null,
  swatchWrapper: null,
  swatch: null,
  swatchSelected: null,
  customSwatchEmpty: null,
  customIconOverlay: null,
  customIconScrim: null,
};
let obj4 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
  alignItems: "center",
};
obj3.colorRowInset = { paddingHorizontal: nativeDefault.space.PX_4, alignSelf: "stretch" };
obj3.optionContainer = { flexDirection: "row", flexWrap: "wrap" };
obj3.swatchWrapper = { width: "25%", padding: 2 };
let obj5 = { paddingHorizontal: nativeDefault.space.PX_4, alignSelf: "stretch" };
obj3.swatch = {
  height: 40,
  flexDirection: "row",
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  borderWidth: 2,
  borderColor: "transparent",
};
let obj6 = {
  height: 40,
  flexDirection: "row",
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  borderWidth: 2,
  borderColor: "transparent",
};
obj3.swatchSelected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj7 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj3.customSwatchEmpty = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
};
let obj9 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj9.alignItems = "center";
obj9.justifyContent = "center";
obj3.customIconOverlay = obj9;
let size = {
  width: 28,
  height: 28,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: "transparent",
  alignItems: "center",
  justifyContent: "center",
};
obj3.customIconScrim = size;
let closure_12 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
let obj8 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
};
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DisplayNameStylesGummyColorPickerSheet(selectedColors) {
      const cResult = selectedColors(576).c(69);
      selectedColors = selectedColors.selectedColors;
      const onSelectColors = selectedColors.onSelectColors;
      const tmp4 = closure_12();
      dependencyMap = tmp4;
      let obj = selectedColors(576);
      const displayNameStylesEffectConfig = selectedColors(10732).useDisplayNameStylesEffectConfig(
        selectedColors(1408).DisplayNameEffect.GUMMY,
      );
      if (cResult[0] !== selectedColors) {
        let tmp7 = selectedColors.length > 0;
        if (tmp7) {
          tmp7 = !customSwatchEmpty.some((item) =>
            discord_common_shallowEqual.areArraysShallowEqual(item, selectedColors),
          );
        }
        cResult[0] = selectedColors;
        cResult[1] = tmp7;
        let tmp6 = tmp7;
      } else {
        tmp6 = cResult[1];
      }
      noop = tmp6;
      if (cResult[2] === tmp6) {
        if (cResult[3] === selectedColors) {
          const tmp9 = cResult[4];
        }
        const tmp11 = displayNameStylesEffectConfig(noop.useState(tmp9), 2);
        const initialColor = tmp11[0];
        closure_6 = tmp11[1];
        if (cResult[5] === displayNameStylesEffectConfig.defaultColors) {
          if (cResult[6] === selectedColors) {
            let tmp13 = cResult[7];
          }
          const tmp10Result = tmp10(obj3.useState(tmp13), 2);
          customSwatchEmpty = tmp10Result[0];
          closure_8 = tmp10Result[1];
          if (cResult[8] !== selectedColors) {
            class L {
              constructor() {
                obj = closure_0(closure_2[6]);
                tmp = null;
                if (selectedColors.length > 0) {
                  tmp = selectedColors;
                }
                return obj.createColorPaletteList(closure_0(closure_2[12]).DisplayNameEffect.GUMMY, tmp);
              }
            }
            cResult[8] = selectedColors;
            cResult[9] = L;
          } else {
            class L {
              constructor() {
                obj = closure_0(closure_2[6]);
                tmp = null;
                if (selectedColors.length > 0) {
                  tmp = selectedColors;
                }
                return obj.createColorPaletteList(closure_0(closure_2[12]).DisplayNameEffect.GUMMY, tmp);
              }
            }
          }
          closure_9 = tmp10(obj3.useState(L), 2)[1];
          class I {
            constructor() {
              defaultColors = selectedColors;
              if (selectedColors.length <= 0) {
                tmp = closure_3;
                defaultColors = closure_3.defaultColors;
              }
              return defaultColors;
            }
          }
          const tmp10Result2 = tmp10(obj3.useState(L), 2);
          const tmp19 = onSelectColors(17213);
          if (cResult[10] !== customSwatchEmpty) {
            class Y {
              constructor(arg0) {
                obj = closure_0(closure_2[13]);
                return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
              }
            }
            cResult[10] = customSwatchEmpty;
            cResult[11] = Y;
          } else {
            class Y {
              constructor(arg0) {
                obj = closure_0(closure_2[13]);
                return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
              }
            }
          }
          const findIndexResult = onSelectColors(17213)(tmp(1408).DisplayNameEffect.GUMMY, tmp17).findIndex(Y);
          closure_10 = findIndexResult;
          if (cResult[12] !== initialColor) {
            class Y {
              constructor(arg0) {
                obj = closure_0(closure_2[13]);
                return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
              }
            }
            cResult[12] = initialColor;
            cResult[13] = tmp24;
          } else {
            class Y {
              constructor(arg0) {
                obj = closure_0(closure_2[13]);
                return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
              }
            }
          }
          const _Symbol = Symbol;
          class M {
            constructor() {
              if (closure_4) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[6]);
                tmp4 = selectedColors;
                result = obj.rebuildGummySourceColor(selectedColors);
              } else {
                result = closure_11;
              }
              return result;
            }
          }
          if (tmp25 === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor(arg0) {
                obj = closure_0(closure_2[13]);
                return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
              }
            }
            cResult[14] = tmp28;
          } else {
            class Y {
              constructor(arg0) {
                obj = closure_0(closure_2[13]);
                return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
              }
            }
          }
          closure_11 = tmp28;
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor(arg0) {
                obj = closure_0(closure_2[13]);
                return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
              }
            }
            cResult[15] = tmp30;
          } else {
            class Y {
              constructor(arg0) {
                obj = closure_0(closure_2[13]);
                return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
              }
            }
          }
          if (cResult[16] === customSwatchEmpty) {
            class Y {
              constructor(arg0) {
                obj = closure_0(closure_2[13]);
                return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
              }
            }
            const _Symbol3 = Symbol;
            const name = displayNameStylesEffectConfig.name;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              class Y {
                constructor(arg0) {
                  obj = closure_0(closure_2[13]);
                  return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
                }
              }
              const stringResult = obj5.string(tmp(1125).t.XqMe3N);
              cResult[19] = stringResult;
              const tmp32 = stringResult;
            } else {
              class Y {
                constructor(arg0) {
                  obj = closure_0(closure_2[13]);
                  return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
                }
              }
            }
            if (cResult[20] !== Q) {
              class Y {
                constructor(arg0) {
                  obj = closure_0(closure_2[13]);
                  return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
                }
              }
              const obj4 = { variant: "primary", size: "sm", text: tmp32, onPress: Q };
              cResult[20] = Q;
              cResult[21] = closure_9(tmp(5281).Button, obj4);
              class I {
                constructor() {
                  defaultColors = selectedColors;
                  if (selectedColors.length <= 0) {
                    tmp = closure_3;
                    defaultColors = closure_3.defaultColors;
                  }
                  return defaultColors;
                }
              }
              const tmp35 = closure_9(tmp(5281).Button, obj4);
            } else {
              class Y {
                constructor(arg0) {
                  obj = closure_0(closure_2[13]);
                  return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
                }
              }
            }
            if (cResult[22] === displayNameStylesEffectConfig.name) {
              class Y {
                constructor(arg0) {
                  obj = closure_0(closure_2[13]);
                  return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
                }
              }
              if (cResult[25] === tmp4.colorRowInset) {
                class Y {
                  constructor(arg0) {
                    obj = closure_0(closure_2[13]);
                    return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
                  }
                }
                const _Symbol4 = Symbol;
                ({ swatchWrapper, swatch } = tmp4);
                if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                  class Y {
                    constructor(arg0) {
                      obj = closure_0(closure_2[13]);
                      return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
                    }
                  }
                  const stringResult1 = obj8.string(tmp(1125).t["FHBa/1"]);
                  cResult[28] = stringResult1;
                } else {
                  class Y {
                    constructor(arg0) {
                      obj = closure_0(closure_2[13]);
                      return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
                    }
                  }
                }
                if (cResult[29] === customSwatchEmpty) {
                  class Y {
                    constructor(arg0) {
                      obj = closure_0(closure_2[13]);
                      return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
                    }
                  }
                }
                if (tmp22) {
                  class Y {
                    constructor(arg0) {
                      obj = closure_0(closure_2[13]);
                      return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
                    }
                  }
                  const obj6 = { style: tmp4.customSwatchEmpty };
                  let tmp42Result = tmp42(initialColor, obj6);
                } else {
                  class Y {
                    constructor(arg0) {
                      obj = closure_0(closure_2[13]);
                      return obj.areArraysShallowEqual(selectedColors.colors, closure_7);
                    }
                  }
                  tmp43[0] = customSwatchEmpty;
                  tmp42Result = tmp42(tmp18(16372), tmp43);
                }
                class I {
                  constructor() {
                    defaultColors = selectedColors;
                    if (selectedColors.length <= 0) {
                      tmp = closure_3;
                      defaultColors = closure_3.defaultColors;
                    }
                    return defaultColors;
                  }
                }
                cResult[29] = customSwatchEmpty;
                cResult[30] = tmp22;
                customSwatchEmpty = tmp4.customSwatchEmpty;
                cResult[31] = customSwatchEmpty;
                cResult[32] = tmp42Result;
              }
              let items = [,];
              ({ colorRowInset: arr2[0], optionContainer: arr2[1] } = tmp4);
              cResult[25] = tmp4.colorRowInset;
              cResult[26] = tmp4.optionContainer;
              class I {
                constructor() {
                  defaultColors = selectedColors;
                  if (selectedColors.length <= 0) {
                    tmp = closure_3;
                    defaultColors = closure_3.defaultColors;
                  }
                  return defaultColors;
                }
              }
              cResult[27] = items;
            }
            const obj7 = { title: null, trailing: null };
            class I {
              constructor() {
                defaultColors = selectedColors;
                if (selectedColors.length <= 0) {
                  tmp = closure_3;
                  defaultColors = closure_3.defaultColors;
                }
                return defaultColors;
              }
            }
            obj7.trailing = tmp34;
            const tmp38 = closure_9(tmp18(17209), obj7);
            cResult[22] = displayNameStylesEffectConfig.name;
            cResult[23] = tmp34;
            cResult[24] = tmp38;
          }
          class Q {
            constructor() {
              obj = closure_0(closure_2[15]);
              result = obj.triggerHapticFeedback(closure_0(closure_2[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
              tmp2 = onSelectColors(closure_7);
              obj2 = closure_1(closure_2[17]);
              obj1 = { default: false, colors: closure_7 };
              trackResult = obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj1);
              obj4 = closure_1(closure_2[18]);
              hideActionSheetResult = obj4.hideActionSheet();
              return;
            }
          }
          cResult[16] = customSwatchEmpty;
          cResult[17] = onSelectColors;
          cResult[18] = Q;
          const tmp19Result = onSelectColors(17213)(tmp(1408).DisplayNameEffect.GUMMY, tmp17);
        }
        class I {
          constructor() {
            defaultColors = selectedColors;
            if (selectedColors.length <= 0) {
              tmp = closure_3;
              defaultColors = closure_3.defaultColors;
            }
            return defaultColors;
          }
        }
        cResult[5] = displayNameStylesEffectConfig.defaultColors;
        cResult[6] = selectedColors;
        cResult[7] = I;
        tmp13 = I;
      }
      class M {
        constructor() {
          if (closure_4) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[6]);
            tmp4 = selectedColors;
            result = obj.rebuildGummySourceColor(selectedColors);
          } else {
            result = closure_11;
          }
          return result;
        }
      }
      cResult[2] = tmp6;
      cResult[3] = selectedColors;
      cResult[4] = M;
      let obj2 = selectedColors(10732);
    }
  : function DisplayNameStylesGummyColorPickerSheet(selectedColors) {
      selectedColors = selectedColors.selectedColors;
      const onSelectColors = selectedColors.onSelectColors;
      noop = undefined;
      let initialColor;
      closure_6 = undefined;
      let first1;
      closure_8 = undefined;
      c9 = undefined;
      c10 = undefined;
      closure_11 = undefined;
      let tmp = closure_12();
      dependencyMap = tmp;
      const displayNameStylesEffectConfig = selectedColors(10732).useDisplayNameStylesEffectConfig(
        selectedColors(1408).DisplayNameEffect.GUMMY,
      );
      let tmp5 = selectedColors.length > 0;
      if (tmp5) {
        tmp5 = !first1.some((item) => discord_common_shallowEqual.areArraysShallowEqual(item, selectedColors));
      }
      noop = tmp5;
      const tmp7 = displayNameStylesEffectConfig(
        noop.useState(() => {
          if (closure_4) {
            let result = DisplayNameStylesUtils2.rebuildGummySourceColor(selectedColors);
          } else {
            result = closure_11;
          }
          return result;
        }),
        2,
      );
      initialColor = tmp7[0];
      closure_6 = tmp7[1];
      const tmp9 = displayNameStylesEffectConfig(
        noop.useState(() => {
          let defaultColors = selectedColors;
          if (selectedColors.length <= 0) {
            defaultColors = displayNameStylesEffectConfig.defaultColors;
          }
          return defaultColors;
        }),
        2,
      );
      first1 = tmp9[0];
      closure_8 = tmp9[1];
      let obj = selectedColors(10732);
      [tmp12, c9] = displayNameStylesEffectConfig(
        noop.useState(() => {
          let tmp = null;
          if (selectedColors.length > 0) {
            tmp = selectedColors;
          }
          return DisplayNameStylesUtils2.createColorPaletteList(DisplayNameEffect.DisplayNameEffect.GUMMY, tmp);
        }),
        2,
      );
      const tmp11 = displayNameStylesEffectConfig(
        noop.useState(() => {
          let tmp = null;
          if (selectedColors.length > 0) {
            tmp = selectedColors;
          }
          return DisplayNameStylesUtils2.createColorPaletteList(DisplayNameEffect.DisplayNameEffect.GUMMY, tmp);
        }),
        2,
      );
      const tmp13 = onSelectColors;
      const tmp14Result = onSelectColors(17213)(selectedColors(1408).DisplayNameEffect.GUMMY, tmp12);
      const findIndexResult = tmp14Result.findIndex((colors) =>
        discord_common_shallowEqual.areArraysShallowEqual(colors.colors, first1),
      );
      c10 = findIndexResult;
      let items = [initialColor];
      const callback = noop.useCallback(() => {
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        showGummyCustomColorSheetDefault({
          initialColor,
          onSelect(color) {
            const gummyColors = selectedColors(1406).buildGummyColors(color);
            closure_1_6(color);
            closure_1_8(gummyColors);
            _undefined((arr) =>
              selectedColors(1406).updateCustomSwatch(arr, selectedColors(1408).DisplayNameEffect.GUMMY, gummyColors),
            );
          },
        });
      }, items);
      closure_11 = noop.useCallback((arg0) => {
        const items = [...arg0];
        closure_8(items);
      }, []);
      const items1 = [first1, onSelectColors];
      const callback1 = noop.useCallback(() => {
        const items = [...closure_7[0]];
        closure_8(items);
        closure_6(closure_11);
        _undefined((arr) =>
          selectedColors(1406).updateCustomSwatch(arr, selectedColors(1408).DisplayNameEffect.GUMMY, items),
        );
      }, []);
      const callback2 = noop.useCallback(() => {
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        onSelectColors(first1);
        AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
          default: false,
          colors: first1,
        });
        const obj3 = { default: false, colors: first1 };
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }, items1);
      let obj2 = { header: null, children: null };
      let obj3 = { title: displayNameStylesEffectConfig.name, trailing: null };
      const tmp14 = onSelectColors(17213);
      const obj4 = { variant: "primary", size: "sm", text: null, onPress: null };
      const intl = tmp2(1125).intl;
      obj4.text = intl.string(selectedColors(1125).t.XqMe3N);
      obj4.onPress = callback2;
      obj3.trailing = c9(selectedColors(5281).Button, obj4);
      obj2.header = c9(onSelectColors(17209), obj3);
      const obj5 = { style: tmp.body, children: null };
      const obj6 = { style: null, children: null };
      const items2 = [,];
      ({ colorRowInset: arr5[0], optionContainer: arr5[1] } = tmp);
      obj6.style = items2;
      const obj7 = { style: tmp.swatchWrapper, children: null };
      const obj8 = {
        style: tmp.swatch,
        onPress: callback,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      const intl2 = tmp2(1125).intl;
      obj8.accessibilityLabel = intl2.string(selectedColors(1125).t["FHBa/1"]);
      if (findIndexResult >= 0) {
        const obj9 = { style: tmp.customSwatchEmpty };
        let tmp19Result = tmp19(tmp22, obj9);
      } else {
        const obj10 = { colors: first1 };
        tmp19Result = tmp19(tmp13(16372), obj10);
      }
      const items3 = [tmp19Result];
      const obj11 = { style: tmp.customIconOverlay, pointerEvents: "none", children: null };
      const tmp20 = onSelectColors(17209);
      const tmp23 = closure_6;
      obj11.children = c9(initialColor, {
        style: tmp.customIconScrim,
        children: c9(selectedColors(10187).PencilIcon, { color: "white", size: "sm" }),
      });
      items3[1] = c9(initialColor, obj11);
      obj8.children = items3;
      obj7.children = c10(tmp23, obj8);
      const items4 = [
        c9(initialColor, obj7),
        tmp14Result.map((accessibilityLabel, index) => {
          colors = accessibilityLabel.colors;
          const obj = { style: closure_2.swatchWrapper, children: null };
          const items = [closure_2.swatch];
          let swatchSelected = tmp;
          if (c10 === index) {
            swatchSelected = closure_2.swatchSelected;
          }
          items[1] = swatchSelected;
          obj.children = _undefined(closure_6, {
            style: items,
            onPress() {
              return closure_11(colors);
            },
            accessibilityRole: "button",
            accessibilityState: { selected: c10 === index },
            accessibilityLabel: accessibilityLabel.a11yLabel,
            children: _undefined(onSelectColors(closure_2[22]), { colors }),
          });
          return _undefined(first, obj, index);
        }),
      ];
      obj6.children = items4;
      const items5 = [c10(initialColor, obj6)];
      const obj13 = { text: null, onPress: null, variant: "secondary" };
      const intl3 = tmp2(1125).intl;
      obj13.text = intl3.string(selectedColors(1125).t.yBZMsQ);
      obj13.onPress = callback1;
      items5[1] = c9(selectedColors(5281).Button, obj13);
      obj5.children = items5;
      obj2.children = c10(initialColor, obj5);
      return c9(selectedColors(5302).BottomSheet, obj2);
    };
