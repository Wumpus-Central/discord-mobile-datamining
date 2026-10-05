// discord_app/modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx
import discord_common_shallowEqual from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import DisplayNameStylesUtils2 from "../DisplayNameStylesUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import showGummyCustomColorSheetDefault from "showGummyCustomColorSheet.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = get_ActivityIndicator);
const dependencyMap2 = fn(1395).DISPLAY_NAME_STYLES_GUMMY_PRESETS;
let AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const DisplayNameStylesUtils = fn(1394);
let closure_11 = DisplayNameStylesUtils.hueToGummyColor(0);
const createStyles = fn(4890);
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
  ? (selectedColors) => {
      const cResult = selectedColors(576).c(72);
      selectedColors = selectedColors.selectedColors;
      const onSelectColors = selectedColors.onSelectColors;
      const tmp4 = closure_12();
      dependencyMap = tmp4;
      let obj = selectedColors(576);
      const displayNameStylesEffectConfig = selectedColors(10636).useDisplayNameStylesEffectConfig(
        selectedColors(1396).DisplayNameEffect.GUMMY,
      );
      if (cResult[0] !== selectedColors) {
        let tmp7 = selectedColors.length > 0;
        if (tmp7) {
          tmp7 = !dependencyMap.some((item) => discord_common_shallowEqual.areArraysShallowEqual(item, selectedColors));
        }
        cResult[0] = selectedColors;
        cResult[1] = tmp7;
        let tmp6 = tmp7;
      } else {
        tmp6 = cResult[1];
      }
      _slicedToArray = tmp6;
      if (cResult[2] === tmp6) {
        if (cResult[3] === selectedColors) {
          let tmp9 = cResult[4];
        }
        [initialColor, closure_5] = initialColor.useState(tmp9);
        if (cResult[5] !== selectedColors) {
          class M {
            constructor() {
              gummyColors = selectedColors;
              if (selectedColors.length <= 0) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[6]);
                tmp4 = closure_11;
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
              gummyColors = selectedColors;
              if (selectedColors.length <= 0) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[6]);
                tmp4 = closure_11;
                gummyColors = obj.buildGummyColors(closure_11);
              }
              return gummyColors;
            }
          }
        }
        [customSwatchEmpty, dependencyMap] = initialColor.useState(M);
        const tmp16 = onSelectColors(15166);
        if (cResult[7] !== customSwatchEmpty) {
          class L {
            constructor(arg0) {
              obj = closure_0(closure_2[13]);
              return obj.areArraysShallowEqual(selectedColors.colors, closure_6);
            }
          }
          cResult[7] = customSwatchEmpty;
          cResult[8] = L;
        } else {
          class L {
            constructor(arg0) {
              obj = closure_0(closure_2[13]);
              return obj.areArraysShallowEqual(selectedColors.colors, closure_6);
            }
          }
        }
        const tmp16Result = onSelectColors(15166)(tmp(1396).DisplayNameEffect.GUMMY);
        AnalyticEvents = onSelectColors(15166)(tmp(1396).DisplayNameEffect.GUMMY).findIndex(L);
        class I {
          constructor() {
            if (closure_3) {
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
        if (cResult[9] !== initialColor) {
          class O {
            constructor() {
              obj = closure_0(closure_2[15]);
              result = obj.triggerHapticFeedback(closure_0(closure_2[15]).HapticFeedbackTypes.IMPACT_LIGHT);
              obj1 = {
                initialColor: closure_4,
                onSelect(color) {
                  closure_1_5(color);
                  dependencyMap(selectedColors(closure_2[6]).buildGummyColors(color));
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
                  dependencyMap(selectedColors(closure_2[6]).buildGummyColors(color));
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
                  dependencyMap(selectedColors(closure_2[6]).buildGummyColors(color));
                },
              };
              tmp2 = closure_1(closure_2[16])(obj1);
              return;
            }
          }
          cResult[11] = tmp23;
        } else {
          class O {
            constructor() {
              obj = closure_0(closure_2[15]);
              result = obj.triggerHapticFeedback(closure_0(closure_2[15]).HapticFeedbackTypes.IMPACT_LIGHT);
              obj1 = {
                initialColor: closure_4,
                onSelect(color) {
                  closure_1_5(color);
                  dependencyMap(selectedColors(closure_2[6]).buildGummyColors(color));
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
              items = [...closure_7[0]];
              tmp = closure_7(items);
              tmp2 = closure_5(closure_11);
              return;
            }
          }
          cResult[12] = Y;
        } else {
          class Y {
            constructor() {
              items = [...closure_7[0]];
              tmp = closure_7(items);
              tmp2 = closure_5(closure_11);
              return;
            }
          }
        }
        if (cResult[13] === customSwatchEmpty) {
          class Y {
            constructor() {
              items = [...closure_7[0]];
              tmp = closure_7(items);
              tmp2 = closure_5(closure_11);
              return;
            }
          }
          const _Symbol3 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                items = [...closure_7[0]];
                tmp = closure_7(items);
                tmp2 = closure_5(closure_11);
                return;
              }
            }
            const stringResult = obj5.string(tmp(1126).t.XqMe3N);
            cResult[16] = stringResult;
            const tmp26 = stringResult;
          } else {
            class Y {
              constructor() {
                items = [...closure_7[0]];
                tmp = closure_7(items);
                tmp2 = closure_5(closure_11);
                return;
              }
            }
          }
          if (cResult[17] !== X) {
            class Y {
              constructor() {
                items = [...closure_7[0]];
                tmp = closure_7(items);
                tmp2 = closure_5(closure_11);
                return;
              }
            }
            const obj4 = { variant: "primary", size: "sm", text: tmp26, onPress: X };
            const tmp29 = tmp23(tmp(5594).Button, obj4);
            cResult[17] = X;
            cResult[18] = tmp29;
          } else {
            class Y {
              constructor() {
                items = [...closure_7[0]];
                tmp = closure_7(items);
                tmp2 = closure_5(closure_11);
                return;
              }
            }
          }
          if (cResult[19] === displayNameStylesEffectConfig.name) {
            class Y {
              constructor() {
                items = [...closure_7[0]];
                tmp = closure_7(items);
                tmp2 = closure_5(closure_11);
                return;
              }
            }
            if (cResult[22] === tmp4.colorRowInset) {
              class Y {
                constructor() {
                  items = [...closure_7[0]];
                  tmp = closure_7(items);
                  tmp2 = closure_5(closure_11);
                  return;
                }
              }
              if (!tmp19) {
                class Y {
                  constructor() {
                    items = [...closure_7[0]];
                    tmp = closure_7(items);
                    tmp2 = closure_5(closure_11);
                    return;
                  }
                }
              }
              if (cResult[25] === tmp4.swatch) {
                class Y {
                  constructor() {
                    items = [...closure_7[0]];
                    tmp = closure_7(items);
                    tmp2 = closure_5(closure_11);
                    return;
                  }
                }
                if (cResult[28] !== tmp34) {
                  class Y {
                    constructor() {
                      items = [...closure_7[0]];
                      tmp = closure_7(items);
                      tmp2 = closure_5(closure_11);
                      return;
                    }
                  }
                  tmp38[0] = tmp34;
                  cResult[28] = tmp34;
                  cResult[29] = tmp38;
                } else {
                  class Y {
                    constructor() {
                      items = [...closure_7[0]];
                      tmp = closure_7(items);
                      tmp2 = closure_5(closure_11);
                      return;
                    }
                  }
                }
                const _Symbol4 = Symbol;
                if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                  class Y {
                    constructor() {
                      items = [...closure_7[0]];
                      tmp = closure_7(items);
                      tmp2 = closure_5(closure_11);
                      return;
                    }
                  }
                  const stringResult1 = obj8.string(tmp(1126).t["FHBa/1"]);
                  cResult[30] = stringResult1;
                } else {
                  class Y {
                    constructor() {
                      items = [...closure_7[0]];
                      tmp = closure_7(items);
                      tmp2 = closure_5(closure_11);
                      return;
                    }
                  }
                }
                if (cResult[31] === customSwatchEmpty) {
                  class Y {
                    constructor() {
                      items = [...closure_7[0]];
                      tmp = closure_7(items);
                      tmp2 = closure_5(closure_11);
                      return;
                    }
                  }
                }
                if (tmp19) {
                  class Y {
                    constructor() {
                      items = [...closure_7[0]];
                      tmp = closure_7(items);
                      tmp2 = closure_5(closure_11);
                      return;
                    }
                  }
                  const obj6 = { style: tmp4.customSwatchEmpty };
                  let tmp41Result = tmp41(closure_5, obj6);
                } else {
                  class Y {
                    constructor() {
                      items = [...closure_7[0]];
                      tmp = closure_7(items);
                      tmp2 = closure_5(closure_11);
                      return;
                    }
                  }
                  tmp42[0] = customSwatchEmpty;
                  tmp41Result = tmp41(tmp15(14444), tmp42);
                }
                cResult[31] = customSwatchEmpty;
                cResult[32] = tmp19;
                customSwatchEmpty = tmp4.customSwatchEmpty;
                cResult[33] = customSwatchEmpty;
                cResult[34] = tmp41Result;
              }
              let items = [tmp4.swatch, !tmp19];
              cResult[25] = tmp4.swatch;
              cResult[26] = !tmp19;
              cResult[27] = items;
            }
            const items1 = [,];
            ({ colorRowInset: arr2[0], optionContainer: arr2[1] } = tmp4);
            cResult[22] = tmp4.colorRowInset;
            cResult[23] = tmp4.optionContainer;
            cResult[24] = items1;
          }
          const obj7 = { title: displayNameStylesEffectConfig.name, trailing: tmp28 };
          const tmp32 = tmp23(tmp15(15163), obj7);
          cResult[19] = displayNameStylesEffectConfig.name;
          cResult[20] = tmp28;
          cResult[21] = tmp32;
        }
        class X {
          constructor() {
            obj = closure_0(closure_2[15]);
            result = obj.triggerHapticFeedback(closure_0(closure_2[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
            tmp2 = onSelectColors(closure_6);
            obj2 = closure_1(closure_2[17]);
            obj1 = { default: false, colors: closure_6 };
            trackResult = obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj1);
            obj4 = closure_1(closure_2[18]);
            hideActionSheetResult = obj4.hideActionSheet();
            return;
          }
        }
        cResult[13] = customSwatchEmpty;
        cResult[14] = onSelectColors;
        cResult[15] = X;
        const findIndexResult = onSelectColors(15166)(tmp(1396).DisplayNameEffect.GUMMY).findIndex(L);
      }
      class I {
        constructor() {
          if (closure_3) {
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
      cResult[4] = I;
      tmp9 = I;
      let obj2 = selectedColors(10636);
    }
  : (selectedColors) => {
      selectedColors = selectedColors.selectedColors;
      const onSelectColors = selectedColors.onSelectColors;
      _slicedToArray = undefined;
      initialColor = undefined;
      closure_5 = undefined;
      first1 = undefined;
      c8 = undefined;
      closure_9 = undefined;
      const tmp = closure_12();
      dependencyMap = tmp;
      let tmp5 = selectedColors.length > 0;
      const displayNameStylesEffectConfig = selectedColors(10636).useDisplayNameStylesEffectConfig(
        selectedColors(1396).DisplayNameEffect.GUMMY,
      );
      if (tmp5) {
        tmp5 = !dependencyMap.some((item) => discord_common_shallowEqual.areArraysShallowEqual(item, selectedColors));
      }
      _slicedToArray = tmp5;
      [initialColor, closure_5] = initialColor.useState(() => {
        if (closure_3) {
          let result = DisplayNameStylesUtils2.rebuildGummySourceColor(selectedColors);
        } else {
          result = closure_11;
        }
        return result;
      });
      [first1, dependencyMap] = initialColor.useState(() => {
        let gummyColors = selectedColors;
        if (selectedColors.length <= 0) {
          gummyColors = DisplayNameStylesUtils2.buildGummyColors(closure_11);
        }
        return gummyColors;
      });
      let obj = selectedColors(10636);
      const tmp11 = onSelectColors;
      const tmp12Result = onSelectColors(15166)(selectedColors(1396).DisplayNameEffect.GUMMY);
      const findIndexResult = tmp12Result.findIndex((colors) =>
        discord_common_shallowEqual.areArraysShallowEqual(colors.colors, first1),
      );
      c8 = findIndexResult;
      let items = [initialColor];
      const callback = initialColor.useCallback(() => {
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        showGummyCustomColorSheetDefault({
          initialColor,
          onSelect(color) {
            closure_1_5(color);
            dependencyMap(selectedColors(closure_2[6]).buildGummyColors(color));
          },
        });
      }, items);
      closure_9 = initialColor.useCallback((arg0) => {
        const items = [...arg0];
        dependencyMap(items);
      }, []);
      const items1 = [first1, onSelectColors];
      const callback1 = initialColor.useCallback(() => {
        const items = [...closure_7[0]];
        dependencyMap(items);
        closure_5(closure_11);
      }, []);
      const callback2 = initialColor.useCallback(() => {
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
      const tmp12 = onSelectColors(15166);
      const obj4 = { variant: "primary", size: "sm", text: null, onPress: null };
      const intl = tmp2(1126).intl;
      obj4.text = intl.string(selectedColors(1126).t.XqMe3N);
      obj4.onPress = callback2;
      obj3.trailing = closure_9(selectedColors(5594).Button, obj4);
      obj2.header = closure_9(onSelectColors(15163), obj3);
      const obj5 = { style: tmp.body, children: null };
      const obj6 = { style: null, children: null };
      const items2 = [,];
      ({ colorRowInset: arr5[0], optionContainer: arr5[1] } = tmp);
      obj6.style = items2;
      const obj7 = { style: tmp.swatchWrapper, children: null };
      const items3 = [tmp.swatch];
      let swatchSelected = tmp23;
      if (findIndexResult < 0) {
        swatchSelected = tmp.swatchSelected;
      }
      const obj8 = {
        style: items3,
        onPress: callback,
        accessibilityRole: "button",
        accessibilityState: { selected: findIndexResult < 0 },
        accessibilityLabel: null,
        children: null,
      };
      items3[1] = swatchSelected;
      const intl2 = tmp2(1126).intl;
      obj8.accessibilityLabel = intl2.string(selectedColors(1126).t["FHBa/1"]);
      if (findIndexResult >= 0) {
        const obj9 = { style: tmp.customSwatchEmpty };
        let tmp18Result = tmp18(tmp21, obj9);
      } else {
        const obj10 = { colors: first1 };
        tmp18Result = tmp18(tmp11(14444), obj10);
      }
      const items4 = [tmp18Result];
      const obj11 = { style: tmp.customIconOverlay, pointerEvents: "none", children: null };
      const tmp19 = onSelectColors(15163);
      const tmp22 = first1;
      obj11.children = closure_9(closure_5, {
        style: tmp.customIconScrim,
        children: closure_9(selectedColors(10058).PencilIcon, { color: "white", size: "sm" }),
      });
      items4[1] = closure_9(closure_5, obj11);
      obj8.children = items4;
      obj7.children = closure_10(tmp22, obj8);
      const items5 = [
        closure_9(closure_5, obj7),
        tmp12Result.map((accessibilityLabel, index) => {
          colors = accessibilityLabel.colors;
          const obj = { style: closure_2.swatchWrapper, children: null };
          const items = [closure_2.swatch];
          let swatchSelected = tmp;
          if (c8 === index) {
            swatchSelected = closure_2.swatchSelected;
          }
          items[1] = swatchSelected;
          obj.children = closure_9(first1, {
            style: items,
            onPress() {
              return closure_9(colors);
            },
            accessibilityRole: "button",
            accessibilityState: { selected: c8 === index },
            accessibilityLabel: accessibilityLabel.a11yLabel,
            children: closure_9(onSelectColors(closure_2[22]), { colors }),
          });
          return closure_9(closure_5, obj, index);
        }),
      ];
      obj6.children = items5;
      const items6 = [closure_10(closure_5, obj6)];
      const obj13 = { text: null, onPress: null, variant: "secondary" };
      const intl3 = tmp2(1126).intl;
      obj13.text = intl3.string(selectedColors(1126).t.yBZMsQ);
      obj13.onPress = callback1;
      items6[1] = closure_9(selectedColors(5594).Button, obj13);
      obj5.children = items6;
      obj2.children = closure_10(closure_5, obj5);
      return closure_9(selectedColors(6645).BottomSheet, obj2);
    };
