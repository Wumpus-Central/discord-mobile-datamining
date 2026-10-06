// discord_app/modules/display_name_styles/native/DisplayNameStylesGummyCustomColorSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import DisplayNameStylesUtils from "../DisplayNameStylesUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import DisplayNameStylesConstants from "../DisplayNameStylesConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet, onSelect;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ DISPLAY_NAME_STYLES_GUMMY_HUE_LIGHTNESS: hasOwnProperty, DISPLAY_NAME_STYLES_GUMMY_HUE_SATURATION: metroRequire } =
  DisplayNameStylesConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { body: obj2, huePickerInset: obj3, previewWrapper: { width: "25%", padding: 2 }, preview: obj4 };
obj2 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
  alignItems: "center",
};
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_4 + 2, alignSelf: "stretch" };
obj4 = { height: 40, flexDirection: "row", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_9 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onSelect) => {
      let first;
      let items;
      let obj4;
      let obj = onSelect(576);
      const cResult = obj.c(28);
      onSelect = onSelect.onSelect;
      const initialColor = onSelect.initialColor;
      const tmp4 = closure_9();
      const useSharedValue = onSelect(4618).useSharedValue;
      onSelect(4618);
      const wrapHue = onSelect(1394).wrapHue;
      onSelect(1394);
      let obj2 = onSelect(1103);
      const sharedValue = useSharedValue(wrapHue(obj2.int2hslRaw(initialColor).h));
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          const obj = onSelect(dependencyMap[11]);
          const result = obj.triggerHapticFeedback(onSelect(dependencyMap[11]).HapticFeedbackTypes.IMPACT_LIGHT);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === sharedValue) {
        let tmp9;
        let tmp10;
        let tmp12;
        let tmp14;
        let tmp19;
        if (cResult[2] === onSelect) {
          tmp9 = cResult[3];
        }
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(onSelect(1126).t.WTqQ5e);
          cResult[4] = stringResult;
          tmp10 = stringResult;
        } else {
          tmp10 = cResult[4];
        }
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(onSelect(1126).t.XqMe3N);
          cResult[5] = stringResult1;
          tmp12 = stringResult1;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] !== tmp9) {
          let obj3 = { title: tmp10, trailing: closure_7(onSelect(5601).Button, obj4) };
          obj4 = { variant: "primary", size: "sm", text: tmp12, onPress: tmp9 };
          const tmp17 = sharedValue(15178);
          const tmp18 = closure_7(tmp17, obj3);
          cResult[6] = tmp9;
          cResult[7] = tmp18;
          tmp14 = tmp18;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] !== sharedValue) {
          const obj5 = { hue: sharedValue };
          const tmp22 = closure_7(sharedValue(15184), obj5);
          cResult[8] = sharedValue;
          cResult[9] = tmp22;
          tmp19 = tmp22;
        } else {
          tmp19 = cResult[9];
        }
        if (cResult[10] === tmp4.preview) {
          let tmp23;
          if (cResult[11] === tmp19) {
            tmp23 = cResult[12];
          }
          if (cResult[13] === tmp4.previewWrapper) {
            let tmp27;
            let tmp31;
            if (cResult[14] === tmp23) {
              tmp27 = cResult[15];
            }
            if (cResult[16] !== sharedValue) {
              const obj6 = { hue: sharedValue, onPanFinalize: first, saturation, lightness, fullWidth: true };
              const tmp36 = closure_7(sharedValue(14443), obj6);
              cResult[16] = sharedValue;
              cResult[17] = tmp36;
              tmp31 = tmp36;
            } else {
              tmp31 = cResult[17];
            }
            if (cResult[18] === tmp4.huePickerInset) {
              let tmp37;
              if (cResult[19] === tmp31) {
                tmp37 = cResult[20];
              }
              if (cResult[21] === tmp4.body) {
                if (cResult[22] === tmp37) {
                  let tmp41;
                  if (cResult[23] === tmp27) {
                    tmp41 = cResult[24];
                  }
                  if (cResult[25] === tmp41) {
                    let tmp45;
                    if (cResult[26] === tmp14) {
                      tmp45 = cResult[27];
                    }
                    return tmp45;
                  }
                  const obj7 = { header: tmp14, children: tmp41 };
                  const tmp47 = closure_7(onSelect(6652).BottomSheet, obj7);
                  cResult[25] = tmp41;
                  cResult[26] = tmp14;
                  cResult[27] = tmp47;
                  tmp45 = tmp47;
                }
              }
              const obj8 = { style: tmp4.body, children: items };
              items = [tmp27, tmp37];
              const tmp44 = closure_8(View, obj8);
              cResult[21] = tmp4.body;
              cResult[22] = tmp37;
              cResult[23] = tmp27;
              cResult[24] = tmp44;
              tmp41 = tmp44;
            }
            const obj9 = { style: tmp4.huePickerInset, children: tmp31 };
            const tmp40 = closure_7(View, obj9);
            cResult[18] = tmp4.huePickerInset;
            cResult[19] = tmp31;
            cResult[20] = tmp40;
            tmp37 = tmp40;
          }
          const obj10 = { style: tmp4.previewWrapper, children: tmp23 };
          const tmp30 = closure_7(View, obj10);
          cResult[13] = tmp4.previewWrapper;
          cResult[14] = tmp23;
          cResult[15] = tmp30;
          tmp27 = tmp30;
        }
        const obj11 = { style: tmp4.preview, children: tmp19 };
        const tmp26 = closure_7(View, obj11);
        cResult[10] = tmp4.preview;
        cResult[11] = tmp19;
        cResult[12] = tmp26;
        tmp23 = tmp26;
      }
      class P {
        constructor() {
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
          const obj2 = DisplayNameStylesUtils;
          onSelect(obj2.hueToGummyColor(sharedValue.get()));
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
        }
      }
      cResult[1] = sharedValue;
      cResult[2] = onSelect;
      cResult[3] = P;
      tmp9 = P;
    }
  : (onSelect) => {
      let Button;
      let intl;
      let intl2;
      let items1;
      let obj3;
      let obj4;
      let obj5;
      let obj7;
      let obj9;
      let tmp7;
      onSelect = onSelect.onSelect;
      const initialColor = onSelect.initialColor;
      const tmp = closure_9();
      const useSharedValue = onSelect(4618).useSharedValue;
      const tmp2 = onSelect(4618);
      const wrapHue = onSelect(1394).wrapHue;
      onSelect(1394);
      let obj = onSelect(1103);
      const sharedValue = useSharedValue(wrapHue(obj.int2hslRaw(initialColor).h));
      const items = [sharedValue, onSelect];
      const callback = react.useCallback(() => {
        const obj = onSelect(dependencyMap[11]);
        const result = obj.triggerHapticFeedback(onSelect(dependencyMap[11]).HapticFeedbackTypes.IMPACT_LIGHT);
      }, []);
      const callback1 = react.useCallback(() => {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
        const obj2 = DisplayNameStylesUtils;
        onSelect(obj2.hueToGummyColor(sharedValue.get()));
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet();
      }, items);
      let obj2 = { header: closure_7(tmp7, obj3), children: closure_8(View, obj5) };
      BottomSheet = onSelect(6652).BottomSheet;
      obj3 = { title: intl.string(onSelect(1126).t.WTqQ5e), trailing: closure_7(Button, obj4) };
      tmp7 = sharedValue(15178);
      intl = onSelect(1126).intl;
      obj4 = { variant: "primary", size: "sm", text: intl2.string(onSelect(1126).t.XqMe3N), onPress: callback1 };
      Button = onSelect(5601).Button;
      intl2 = onSelect(1126).intl;
      obj5 = { style: tmp.body, children: items1 };
      const obj6 = { style: tmp.previewWrapper, children: closure_7(View, obj7) };
      obj7 = { style: tmp.preview, children: closure_7(sharedValue(15184), { hue: sharedValue }) };
      items1 = [closure_7(View, obj6)];
      const obj8 = { style: tmp.huePickerInset, children: closure_7(sharedValue(14443), obj9) };
      obj9 = { hue: sharedValue, onPanFinalize: callback, saturation, lightness, fullWidth: true };
      items1[1] = closure_7(View, obj8);
      return closure_7(BottomSheet, obj2);
    };
let result = size.fileFinishedImporting(
  "modules/display_name_styles/native/DisplayNameStylesGummyCustomColorSheet.tsx",
);

export default tmp5;
