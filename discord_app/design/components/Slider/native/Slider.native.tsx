// === Module 14294: Slider ===

// Module 14294 (Slider)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import HapticUtils from "HapticUtils" /* 4861 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4862 */;
import _modDef7963 from "module_7963" /* 7963 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, step;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let closure_3 = ["startIcon", "endIcon", "style", "onValueChange", "step"];
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, flexDirection: "row", alignItems: "center" }, slider: { flex: 1 }, minimumTrackTintColor: obj2, maximumTrackTintColor: obj3, startIcon: obj4, endIcon: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.SLIDER_TRACK_BACKGROUND };
obj4 = { marginRight: nativeDefault.space.PX_8 };
obj5 = { marginLeft: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((step) => {
  let closure_0;
  let closure_1;
  let endIcon;
  let items;
  let onValueChange;
  let startIcon;
  let style;
  let tmp3;
  let tmp5;
  let tmp6;
  let tmp8;
  let obj = require("react");
  const cResult = obj.c(31);
  if (cResult[0] !== step) {
    ({ startIcon, endIcon, style, onValueChange } = step);
    _require = onValueChange;
    step = step.step;
    importDefault = step;
    const tmp11 = _objectWithoutProperties(step, closure_3);
    cResult[0] = step;
    cResult[1] = endIcon;
    cResult[2] = onValueChange;
    cResult[3] = tmp11;
    cResult[4] = startIcon;
    cResult[5] = step;
    cResult[6] = style;
    tmp8 = style;
    tmp6 = startIcon;
    tmp5 = tmp11;
    tmp3 = endIcon;
  } else {
    tmp3 = cResult[1];
    _require = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
    importDefault = cResult[5];
    tmp8 = cResult[6];
  }
  const tmp12 = closure_9();
  if (cResult[7] === onValueChange) {
    let tmp13;
    if (cResult[8] === tmp7) {
      tmp13 = cResult[9];
    }
    if (cResult[10] === tmp6) {
      let tmp14;
      if (cResult[11] === tmp12.startIcon) {
        tmp14 = cResult[12];
      }
      if (cResult[13] === tmp8) {
        let tmp18;
        if (cResult[14] === tmp12.slider) {
          tmp18 = cResult[15];
        }
        if (cResult[16] === tmp13) {
          if (cResult[17] === tmp5) {
            if (cResult[18] === tmp7) {
              if (cResult[19] === tmp12.maximumTrackTintColor.backgroundColor) {
                if (cResult[20] === tmp12.minimumTrackTintColor.backgroundColor) {
                  let tmp19;
                  if (cResult[21] === tmp18) {
                    tmp19 = cResult[22];
                  }
                  if (cResult[23] === tmp3) {
                    let tmp27;
                    if (cResult[24] === tmp12.endIcon) {
                      tmp27 = cResult[25];
                    }
                    if (cResult[26] === tmp12.container) {
                      if (cResult[27] === tmp14) {
                        if (cResult[28] === tmp19) {
                          let tmp31;
                          if (cResult[29] === tmp27) {
                            tmp31 = cResult[30];
                          }
                          return tmp31;
                        }
                      }
                    }
                    const obj2 = { style: tmp12.container, children: items };
                    items = [tmp14, tmp19, tmp27];
                    const tmp34 = closure_8(View, obj2);
                    cResult[26] = tmp12.container;
                    cResult[27] = tmp14;
                    cResult[28] = tmp19;
                    cResult[29] = tmp27;
                    cResult[30] = tmp34;
                    tmp31 = tmp34;
                  }
                  let tmp28 = null;
                  if (null != tmp3) {
                    const obj3 = { style: tmp12.endIcon, children: tmp3 };
                    tmp28 = closure_7(View, obj3);
                  }
                  cResult[23] = tmp3;
                  cResult[24] = tmp12.endIcon;
                  cResult[25] = tmp28;
                  tmp27 = tmp28;
                }
              }
            }
          }
        }
        const obj4 = { style: tmp18, step: tmp7, onValueChange: tmp13, minimumTrackTintColor: tmp12.minimumTrackTintColor.backgroundColor, maximumTrackTintColor: tmp12.maximumTrackTintColor.backgroundColor, tapToSeek: true };
        const tmp22 = _modDef7963;
        const merged = Object.assign(tmp5);
        const tmp26 = closure_7(tmp22, obj4);
        cResult[16] = tmp13;
        cResult[17] = tmp5;
        cResult[18] = tmp7;
        cResult[19] = tmp12.maximumTrackTintColor.backgroundColor;
        cResult[20] = tmp12.minimumTrackTintColor.backgroundColor;
        cResult[21] = tmp18;
        cResult[22] = tmp26;
        tmp19 = tmp26;
      }
      const items1 = [tmp12.slider, tmp8];
      cResult[13] = tmp8;
      cResult[14] = tmp12.slider;
      cResult[15] = items1;
      tmp18 = items1;
    }
    let tmp15 = null;
    if (null != tmp6) {
      const obj5 = { style: tmp12.startIcon, children: tmp6 };
      tmp15 = closure_7(View, obj5);
    }
    cResult[10] = tmp6;
    cResult[11] = tmp12.startIcon;
    cResult[12] = tmp15;
    tmp14 = tmp15;
  }
  const fn = function x(arg0) {
    if (null != closure_1) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    }
    if (closure_0 != null) {
      tmp5(arg0);
    }
  };
  cResult[7] = onValueChange;
  cResult[8] = tmp7;
  cResult[9] = fn;
  tmp13 = fn;
}) : ((step) => {
  let endIcon;
  let items1;
  let items2;
  let onValueChange;
  let startIcon;
  ({ startIcon, endIcon, onValueChange } = step);
  step = step.step;
  const style = step.style;
  const merged = Object.assign(step, Object.assign({ startIcon: 0, endIcon: 0, style: 0, onValueChange: 0, step: 0 }));
  const tmp2 = closure_9();
  const items = [step, onValueChange];
  let obj = { style: tmp2.container, children: items1 };
  let tmp6 = null;
  const callback = react.useCallback((arg0) => {
    if (null != step) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    }
    if (onValueChange != null) {
      tmp5(arg0);
    }
  }, items);
  if (null != startIcon) {
    const obj2 = { style: tmp2.startIcon, children: startIcon };
    tmp6 = closure_7(View, obj2);
  }
  items1 = [tmp6, , ];
  const obj3 = { style: items2, step, onValueChange: callback, minimumTrackTintColor: tmp2.minimumTrackTintColor.backgroundColor, maximumTrackTintColor: tmp2.maximumTrackTintColor.backgroundColor, tapToSeek: true };
  const tmp9 = step(7963);
  const merged1 = Object.assign(merged);
  items2 = [tmp2.slider, style];
  items1[1] = closure_7(tmp9, obj3);
  let tmp8Result = null;
  if (null != endIcon) {
    const obj4 = { style: tmp2.endIcon, children: endIcon };
    tmp8Result = closure_7(View, obj4);
  }
  items1[2] = tmp8Result;
  return closure_8(View, obj);
});
let result = size.fileFinishedImporting("design/components/Slider/native/Slider.native.tsx");

export const Slider = tmp4;