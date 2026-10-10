// discord_app/modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import DisplayNameStylesUtils from "../DisplayNameStylesUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import CheckmarkLargeIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import showCustomColorPickerActionSheetDefault from "../../color_picker/native/showCustomColorPickerActionSheet.tsx";
import ColorPickerConsts from "../consts/ColorPickerConsts.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = get_ActivityIndicator);
let getColorPresetsForEffect = fn(1408).getColorPresetsForEffect;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: { flex: 1 },
  contentContainer: {
    alignSelf: "center",
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_16,
  },
  presetGrid: null,
  presetRow: null,
  presetColor: null,
  presetColorSelected: null,
  checkmarkOverlay: null,
  checkmark: null,
  buttonsContainer: null,
  button: null,
};
let obj3 = {
  alignSelf: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_16,
};
obj2.presetGrid = { gap: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let obj4 = { gap: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj2.presetRow = { gap: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
let size = { width: 42, height: 42, borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: "transparent" };
obj2.presetColor = size;
let obj5 = { gap: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
obj2.presetColorSelected = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
let obj7 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj7.alignItems = "center";
obj7.justifyContent = "center";
obj2.checkmarkOverlay = obj7;
const size1 = { width: fn(15623).CHECKMARK_SIZE, height: fn(15623).CHECKMARK_SIZE };
obj2.checkmark = size1;
let obj6 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.buttonsContainer = { alignSelf: "stretch", flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj2.button = { flex: 1 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj8 = { alignSelf: "stretch", flexDirection: "row", gap: nativeDefault.space.PX_16 };
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DisplayNameStylesColorPickerSheet(selectedColor) {
      const cResult = selectedColor(onSelectColor[11]).c(68);
      selectedColor = selectedColor.selectedColor;
      const selectedEffectId = selectedColor.selectedEffectId;
      onSelectColor = selectedColor.onSelectColor;
      let obj = selectedColor(onSelectColor[11]);
      _slicedToArray = closure_11();
      const tmp2 = closure_11();
      const bottomSheetRef = selectedColor(onSelectColor[12]).useBottomSheetRef().bottomSheetRef;
      const tmp3 = selectedEffectId(onSelectColor[13])()[selectedEffectId];
      noop = tmp3;
      if (cResult[0] !== selectedEffectId) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function y(arg0) {
            return arg0[0];
          };
          cResult[2] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const mapped = getColorPresetsForEffect(selectedEffectId).map(tmp6);
        cResult[0] = selectedEffectId;
        cResult[1] = mapped;
        const arr = getColorPresetsForEffect(selectedEffectId);
      } else {
        if (cResult[3] === selectedColor) {
          if (cResult[4] === selectedEffectId) {
            let tmp10 = cResult[5];
          }
          class I {
            constructor() {
              obj = closure_0(closure_2[14]);
              return obj.resolveSolidPresetSeed(selectedColor, selectedEffectId);
            }
          }
          [color, closure_6] = noop.useState(tmp10);
          getColorPresetsForEffect = tmp14;
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor(arg0) {
                tmp = closure_6(selectedColor);
                return;
              }
            }
            class I {
              constructor() {
                obj = closure_0(closure_2[14]);
                return obj.resolveSolidPresetSeed(selectedColor, selectedEffectId);
              }
            }
          } else {
            class M {
              constructor(arg0) {
                tmp = closure_6(selectedColor);
                return;
              }
            }
          }
          closure_8 = M;
          if (cResult[7] === tmp3[0]) {
            class M {
              constructor(arg0) {
                tmp = closure_6(selectedColor);
                return;
              }
            }
            if (cResult[10] === color) {
              class M {
                constructor(arg0) {
                  tmp = closure_6(selectedColor);
                  return;
                }
              }
              if (cResult[13] === tmp3[0]) {
                class M {
                  constructor(arg0) {
                    tmp = closure_6(selectedColor);
                    return;
                  }
                }
              }
              class L {
                constructor() {
                  tmp = closure_2;
                  obj = closure_0(closure_2[15]);
                  result = obj.triggerHapticFeedback(closure_0(closure_2[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
                  if (closure_7) {
                    tmp3 = onSelectColor;
                    tmp4 = closure_5;
                    tmp5 = onSelectColor(closure_5);
                    tmp6 = closure_1;
                    obj2 = closure_1(tmp[18]);
                    tmp7 = AnalyticEvents;
                    obj1 = { default: null, colors: null };
                    tmp8 = closure_4;
                    obj1.default = closure_5 === closure_4[0];
                    items = [];
                    items[0] = closure_5;
                    obj1.colors = items;
                    trackResult = obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj1);
                  }
                  obj4 = closure_1(tmp[16]);
                  hideActionSheetResult = obj4.hideActionSheet();
                  return;
                }
              }
              cResult[13] = tmp3[0];
              cResult[14] = tmp14;
              cResult[15] = color;
              cResult[16] = onSelectColor;
              cResult[17] = L;
            }
            class I {
              constructor() {
                obj = closure_0(closure_2[14]);
                return obj.resolveSolidPresetSeed(selectedColor, selectedEffectId);
              }
            }
            cResult[10] = color;
            cResult[11] = onSelectColor;
            cResult[12] = tmp19;
          }
          const fn2 = function x() {
            const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
            onSelectColor(32);
            ActionSheetActionCreatorsDefault.hideActionSheet();
          };
          cResult[7] = tmp3[0];
          cResult[8] = onSelectColor;
          cResult[9] = fn2;
        }
        class I {
          constructor() {
            obj = closure_0(closure_2[14]);
            return obj.resolveSolidPresetSeed(selectedColor, selectedEffectId);
          }
        }
        cResult[3] = selectedColor;
        cResult[4] = selectedEffectId;
        cResult[5] = I;
        tmp10 = I;
      }
      let obj2 = selectedColor(onSelectColor[12]);
    }
  : function DisplayNameStylesColorPickerSheet(selectedColor) {
      selectedColor = selectedColor.selectedColor;
      const selectedEffectId = selectedColor.selectedEffectId;
      const onSelectColor = selectedColor.onSelectColor;
      color = undefined;
      closure_6 = undefined;
      let tmp = closure_11();
      _slicedToArray = tmp;
      const tmp2 = selectedEffectId(onSelectColor[13])()[selectedEffectId];
      noop = tmp2;
      let items = [selectedEffectId];
      const memo = noop.useMemo(() => getColorPresetsForEffect(selectedEffectId).map((item) => item[0]), items);
      [color, closure_6] = noop.useState(() =>
        DisplayNameStylesUtils.resolveSolidPresetSeed(selectedColor, selectedEffectId),
      );
      const items1 = [color, selectedColor];
      const memo1 = noop.useMemo(() => first !== selectedColor, items1);
      closure_8 = noop.useCallback((arg0) => {
        closure_6(arg0);
      }, []);
      const items2 = [tmp2, onSelectColor];
      const items3 = [color, onSelectColor];
      const callback = noop.useCallback(() => {
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        onSelectColor(32);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }, items2);
      const items4 = [memo1, color, onSelectColor, tmp2];
      const callback1 = noop.useCallback(() => {
        showCustomColorPickerActionSheetDefault({
          color,
          onSelect(arg0) {
            const result = selectedColor(onSelectColor[15]).triggerHapticFeedback(
              selectedColor(onSelectColor[15]).HapticFeedbackTypes.IMPACT_MEDIUM,
            );
            closure_1_2(arg0);
            const obj = selectedColor(onSelectColor[15]);
            selectedEffectId(onSelectColor[16]).hideActionSheet();
          },
          actionButtonVariant: "primary",
        });
      }, items3);
      const callback2 = noop.useCallback(() => {
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        if (memo1) {
          onSelectColor(first);
          const obj3 = { default: first === 32, colors: null };
          const items = [first];
          obj3.colors = items;
          AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
        }
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }, items4);
      let obj2 = {
        ref: selectedColor(onSelectColor[12]).useBottomSheetRef().bottomSheetRef,
        header: null,
        children: null,
      };
      let obj3 = { title: null, trailing: null };
      let obj = selectedColor(onSelectColor[12]);
      const intl = selectedColor(onSelectColor[19]).intl;
      obj3.title = intl.string(selectedEffectId(onSelectColor[20])["6OxgN7"]);
      let obj4 = { text: null, onPress: null, variant: "primary", size: "sm" };
      const intl2 = selectedColor(onSelectColor[19]).intl;
      obj4.text = intl2.string(selectedColor(onSelectColor[19]).t.XqMe3N);
      obj4.onPress = callback2;
      obj3.trailing = closure_9(selectedColor(onSelectColor[22]).Button, obj4);
      obj2.header = closure_9(selectedEffectId(onSelectColor[21]), obj3);
      let obj5 = { style: tmp.container, children: null };
      const obj6 = { style: tmp.contentContainer, children: null };
      const obj7 = { style: tmp.presetGrid, children: null };
      const tmp10 = selectedEffectId(onSelectColor[21]);
      const obj8 = selectedEffectId(onSelectColor[24]);
      obj7.children = selectedEffectId(onSelectColor[24])
        .chunk(memo, 6)
        .map((arr, index) => {
          closure_0 = index;
          return closure_1_9(
            first,
            {
              style: presetRow.presetRow,
              children: arr.map((item, index) => {
                closure_0 = item;
                let tmp = item === first;
                const obj = {
                  onPress() {
                    return closure_2_8(closure_0);
                  },
                  style: null,
                  accessibilityRole: "button",
                  accessibilityState: null,
                  accessibilityLabel: null,
                  children: null,
                };
                const items = [presetColor.presetColor, ,];
                const obj2 = { backgroundColor: utils_ColorUtils.int2hex(item) };
                items[1] = obj2;
                let presetColorSelected = tmp;
                if (tmp) {
                  presetColorSelected = presetColor.presetColorSelected;
                }
                items[2] = presetColorSelected;
                obj.style = items;
                obj.accessibilityState = { selected: tmp };
                obj.accessibilityLabel = utils_ColorUtils.int2hex(item);
                if (tmp) {
                  const obj4 = { style: presetColor.checkmarkOverlay, pointerEvents: "none", children: null };
                  const obj5 = { size: "custom", style: presetColor.checkmark, color: null };
                  const darkness = utils_ColorUtils.getDarkness(item);
                  let str = "black";
                  if (darkness > ColorPickerConsts.DARK_SWATCH_THRESHOLD) {
                    str = "white";
                  }
                  obj5.color = str;
                  obj4.children = options(CheckmarkLargeIcon.CheckmarkLargeIcon, obj5);
                  tmp = options(hasOwnProperty, obj4);
                  const tmp5Result2 = utils_ColorUtils;
                }
                obj.children = tmp;
                return options(timestampProducer, obj, 6 * closure_0 + index);
              }),
            },
            index,
          );
        });
      const items5 = [closure_9(color, obj7)];
      const obj9 = { style: tmp.buttonsContainer, children: null };
      const obj10 = { style: tmp.button, children: null };
      const obj11 = { text: null, onPress: null, variant: "secondary", size: "md", grow: true };
      const intl3 = selectedColor(onSelectColor[19]).intl;
      obj11.text = intl3.string(selectedEffectId(onSelectColor[20]).gIeJTK);
      obj11.onPress = callback;
      obj10.children = closure_9(selectedColor(onSelectColor[22]).Button, obj11);
      const items6 = [closure_9(color, obj10)];
      const obj12 = { style: tmp.button, children: null };
      const obj13 = { text: null, onPress: null, variant: "secondary", size: "md", icon: null, grow: true };
      const intl4 = selectedColor(onSelectColor[19]).intl;
      obj13.text = intl4.string(selectedColor(onSelectColor[19]).t["FHBa/1"]);
      obj13.onPress = callback1;
      obj13.icon = closure_9(selectedColor(onSelectColor[25]).EyeDropperIcon, { size: "sm" });
      obj12.children = closure_9(selectedColor(onSelectColor[22]).Button, obj13);
      items6[1] = closure_9(color, obj12);
      obj9.children = items6;
      items5[1] = closure_10(color, obj9);
      obj6.children = items5;
      obj5.children = closure_10(color, obj6);
      obj2.children = closure_9(color, obj5);
      return closure_9(selectedColor(onSelectColor[26]).BottomSheet, obj2);
    };
