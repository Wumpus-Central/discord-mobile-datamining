// === Module 14270: Slider ===

// Module 14270 (Slider)
import nativeDefault from "native" /* 587 */;
import HapticUtils from "HapticUtils" /* 5057 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5058 */;
import _modDef8404 from "module_8404" /* 8404 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["startIcon", "endIcon", "style", "onValueChange", "step"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { flex: 1, flexDirection: "row", alignItems: "center" }, slider: { flex: 1 }, minimumTrackTintColor: { backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED }, maximumTrackTintColor: null, startIcon: null, endIcon: null };
let obj3 = { backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
obj2.maximumTrackTintColor = { backgroundColor: nativeDefault.colors.SLIDER_TRACK_BACKGROUND };
let obj4 = { backgroundColor: nativeDefault.colors.SLIDER_TRACK_BACKGROUND };
obj2.startIcon = { marginRight: nativeDefault.space.PX_8 };
let obj5 = { marginRight: nativeDefault.space.PX_8 };
obj2.endIcon = { marginLeft: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj6 = { marginLeft: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Slider/native/Slider.native.tsx");

export const Slider = ReactCompilerGating.isReactCompilerEnabled() ? (function Slider(step) {
  const cResult = require("c").c(31);
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
    let tmp8 = style;
    let tmp6 = startIcon;
    let tmp5 = tmp11;
    let tmp3 = endIcon;
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
    if (cResult[8] === tmp7) {
      let tmp13 = cResult[9];
    }
    if (cResult[10] === tmp6) {
      if (cResult[11] === tmp12.startIcon) {
        let tmp14 = cResult[12];
      }
      if (cResult[13] === tmp8) {
        if (cResult[14] === tmp12.slider) {
          let tmp18 = cResult[15];
        }
        if (cResult[16] === tmp13) {
          if (cResult[17] === tmp5) {
            if (cResult[18] === tmp7) {
              if (cResult[19] === tmp12.maximumTrackTintColor.backgroundColor) {
                if (cResult[20] === tmp12.minimumTrackTintColor.backgroundColor) {
                  if (cResult[21] === tmp18) {
                    let tmp19 = cResult[22];
                  }
                  if (cResult[23] === tmp3) {
                    if (cResult[24] === tmp12.endIcon) {
                      let tmp27 = cResult[25];
                    }
                    if (cResult[26] === tmp12.container) {
                      if (cResult[27] === tmp14) {
                        if (cResult[28] === tmp19) {
                          if (cResult[29] === tmp27) {
                            let tmp31 = cResult[30];
                          }
                          return tmp31;
                        }
                      }
                    }
                    const obj2 = { style: tmp12.container, children: null };
                    const items = [tmp14, tmp19, tmp27];
                    obj2.children = items;
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
        const obj4 = {};
        const merged = Object.assign(tmp5);
        obj4.style = tmp18;
        obj4.step = tmp7;
        obj4.onValueChange = tmp13;
        obj4.minimumTrackTintColor = tmp12.minimumTrackTintColor.backgroundColor;
        obj4.maximumTrackTintColor = tmp12.maximumTrackTintColor.backgroundColor;
        obj4.tapToSeek = true;
        const tmp26 = closure_7(_modDef8404, obj4);
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
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    }
    if (closure_0 != null) {
      tmp5(arg0);
    }
  };
  cResult[7] = onValueChange;
  cResult[8] = tmp7;
  cResult[9] = fn;
  tmp13 = fn;
  let obj = require("c");
}) : (function Slider(step) {
  ({ startIcon, endIcon, onValueChange } = step);
  step = step.step;
  const merged = Object.assign(step, Object.assign({ startIcon: 0, endIcon: 0, style: 0, onValueChange: 0, step: 0 }));
  const tmp2 = closure_9();
  const items = [step, onValueChange];
  let obj = { style: tmp2.container, children: null };
  let tmp6 = null;
  const callback = noop.useCallback((arg0) => {
    if (null != step) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    }
    if (onValueChange != null) {
      tmp5(arg0);
    }
  }, items);
  if (null != startIcon) {
    const obj2 = { style: tmp2.startIcon, children: startIcon };
    tmp6 = closure_7(View, obj2);
  }
  const items1 = [tmp6, , ];
  const obj3 = {};
  const merged1 = Object.assign(merged);
  const items2 = [tmp2.slider, step.style];
  obj3.style = items2;
  obj3.step = step;
  obj3.onValueChange = callback;
  obj3.minimumTrackTintColor = tmp2.minimumTrackTintColor.backgroundColor;
  obj3.maximumTrackTintColor = tmp2.maximumTrackTintColor.backgroundColor;
  obj3.tapToSeek = true;
  items1[1] = closure_7(step(8404), obj3);
  let tmp8Result = null;
  if (null != endIcon) {
    const obj4 = { style: tmp2.endIcon, children: endIcon };
    tmp8Result = closure_7(View, obj4);
  }
  items1[2] = tmp8Result;
  obj.children = items1;
  return closure_8(View, obj);
});