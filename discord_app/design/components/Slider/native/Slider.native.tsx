// === Module 15539: Slider ===

// Module 15539 (Slider)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import HapticUtils from "HapticUtils" /* 5248 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5249 */;
import _modDef8806 from "module_8806" /* 8806 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5004);
let obj2 = { container: { flexGrow: 1, flexDirection: "row", alignItems: "center" }, slider: { flex: 1 }, minimumTrackTintColor: { backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED }, maximumTrackTintColor: null, startIcon: null, endIcon: null };
let obj3 = { backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
obj2.maximumTrackTintColor = { backgroundColor: nativeDefault.colors.SLIDER_TRACK_BACKGROUND };
let obj4 = { backgroundColor: nativeDefault.colors.SLIDER_TRACK_BACKGROUND };
obj2.startIcon = { marginRight: nativeDefault.space.PX_8 };
let obj5 = { marginRight: nativeDefault.space.PX_8 };
obj2.endIcon = { marginLeft: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useLatestSliderValue(arg0, arg1, arg2) {
  const cResult = c.c(2);
  let tmp2 = arg0;
  if (arg0 == null) {
    tmp2 = arg1;
  }
  if (tmp2 == null) {
    tmp2 = arg2;
  }
  [tmp4, tmp5] = noop.useState(tmp2);
  const tmp6 = _slicedToArray(noop.useState(arg0), 2);
  if (arg0 !== tmp6[0]) {
    tmp6[1](arg0);
    if (null != arg0) {
      tmp5(arg0);
    }
  }
  if (cResult[0] !== tmp4) {
    const items = [tmp4, tmp5];
    cResult[0] = tmp4;
    cResult[1] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[1];
  }
  return tmp9;
}) : (function useLatestSliderValue(arg0, arg1, arg2) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = arg1;
  }
  if (tmp == null) {
    tmp = arg2;
  }
  [tmp3, tmp4] = noop.useState(tmp);
  const tmp5 = _slicedToArray(noop.useState(arg0), 2);
  if (arg0 !== tmp5[0]) {
    tmp5[1](arg0);
    if (null != arg0) {
      tmp4(arg0);
    }
  }
  const items = [tmp3, tmp4];
  return items;
});
let closure_9 = tmp3;
ReactCompilerGating = fn(558);
let obj6 = { marginLeft: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Slider/native/Slider.native.tsx");

export const useLatestSliderValue = tmp3;
export const Slider = ReactCompilerGating.isReactCompilerEnabled() ? (function Slider(onChange) {
  const cResult = step(576).c(34);
  ({ value, defaultValue, minValue, maxValue, step } = onChange);
  onChange = onChange.onChange;
  ({ onChangeEnd, formatValue, disabled, startIcon, endIcon, accessibilityLabel, accessibilityHint, testID } = onChange);
  let num = 0;
  if (undefined !== minValue) {
    num = minValue;
  }
  let num2 = 100;
  if (undefined !== maxValue) {
    num2 = maxValue;
  }
  const tmp4 = closure_8();
  let tmp6 = defaultValue;
  if (defaultValue == null) {
    tmp6 = num;
  }
  let obj = step(576);
  [tmp8, tmp9] = closure_9(value, defaultValue, num);
  dependencyMap = tmp9;
  if (cResult[0] === onChange) {
    if (cResult[1] === tmp9) {
      if (cResult[2] === step) {
        let tmp10 = cResult[3];
      }
      if (cResult[4] === startIcon) {
        if (cResult[5] === tmp4.startIcon) {
          let tmp11 = cResult[6];
        }
        let first = value;
        if (value == null) {
          first = _slicedToArray(noop.useState(tmp6), 1)[0];
        }
        if (cResult[7] === formatValue) {
          if (cResult[8] === tmp8) {
            let tmp16 = cResult[9];
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            let fn;
            if (tmpResult.isAndroid()) {
              fn = () => true;
            }
            cResult[10] = fn;
            let tmp19 = fn;
            tmpResult = step(1381);
          } else {
            tmp19 = cResult[10];
          }
          if (cResult[11] === accessibilityHint) {
            if (cResult[12] === accessibilityLabel) {
              if (cResult[13] === disabled) {
                if (cResult[14] === tmp10) {
                  if (cResult[15] === num2) {
                    if (cResult[16] === num) {
                      if (cResult[17] === onChangeEnd) {
                        if (cResult[18] === step) {
                          if (cResult[19] === tmp4.maximumTrackTintColor.backgroundColor) {
                            if (cResult[20] === tmp4.minimumTrackTintColor.backgroundColor) {
                              if (cResult[21] === tmp4.slider) {
                                if (cResult[22] === first) {
                                  if (cResult[23] === tmp16) {
                                    if (cResult[24] === testID) {
                                      let tmp20 = cResult[25];
                                    }
                                    if (cResult[26] === endIcon) {
                                      if (cResult[27] === tmp4.endIcon) {
                                        let tmp24 = cResult[28];
                                      }
                                      if (cResult[29] === tmp4.container) {
                                        if (cResult[30] === tmp11) {
                                          if (cResult[31] === tmp20) {
                                            if (cResult[32] === tmp24) {
                                              let tmp28 = cResult[33];
                                            }
                                            return tmp28;
                                          }
                                        }
                                      }
                                      const obj2 = { style: tmp4.container, children: null };
                                      const items = [tmp11, tmp20, tmp24];
                                      obj2.children = items;
                                      const tmp31 = closure_7(View, obj2);
                                      cResult[29] = tmp4.container;
                                      cResult[30] = tmp11;
                                      cResult[31] = tmp20;
                                      cResult[32] = tmp24;
                                      cResult[33] = tmp31;
                                      tmp28 = tmp31;
                                    }
                                    let tmp25 = null;
                                    if (null != endIcon) {
                                      const obj3 = { style: tmp4.endIcon, children: endIcon };
                                      tmp25 = closure_6(View, obj3);
                                    }
                                    cResult[26] = endIcon;
                                    cResult[27] = tmp4.endIcon;
                                    cResult[28] = tmp25;
                                    tmp24 = tmp25;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj4 = { style: tmp4.slider, value: first, minimumValue: num, maximumValue: num2, step, disabled, onValueChange: tmp10, onSlidingComplete: onChangeEnd, minimumTrackTintColor: tmp4.minimumTrackTintColor.backgroundColor, maximumTrackTintColor: tmp4.maximumTrackTintColor.backgroundColor, tapToSeek: true, accessibilityLabel, accessibilityHint, accessibilityValue: tmp16, testID, onResponderGrant: tmp19 };
          const tmp23 = closure_6(onChange(8806), obj4);
          cResult[11] = accessibilityHint;
          cResult[12] = accessibilityLabel;
          cResult[13] = disabled;
          cResult[14] = tmp10;
          cResult[15] = num2;
          cResult[16] = num;
          cResult[17] = onChangeEnd;
          cResult[18] = step;
          cResult[19] = tmp4.maximumTrackTintColor.backgroundColor;
          cResult[20] = tmp4.minimumTrackTintColor.backgroundColor;
          cResult[21] = tmp4.slider;
          cResult[22] = first;
          cResult[23] = tmp16;
          cResult[24] = testID;
          cResult[25] = tmp23;
          tmp20 = tmp23;
        }
        let tmp17;
        if (null != formatValue) {
          const obj5 = { text: formatValue(tmp8) };
          tmp17 = obj5;
        }
        cResult[7] = formatValue;
        cResult[8] = tmp8;
        cResult[9] = tmp17;
        tmp16 = tmp17;
      }
      let tmp12 = null;
      if (null != startIcon) {
        const obj6 = { style: tmp4.startIcon, children: startIcon };
        tmp12 = closure_6(View, obj6);
      }
      cResult[4] = startIcon;
      cResult[5] = tmp4.startIcon;
      cResult[6] = tmp12;
      tmp11 = tmp12;
    }
  }
  function handleValueChange(arg0) {
    if (null != step) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    }
    tmp9(arg0);
    if (onChange != null) {
      onChange(arg0);
    }
  }
  cResult[0] = onChange;
  cResult[1] = tmp9;
  cResult[2] = step;
  cResult[3] = handleValueChange;
  tmp10 = handleValueChange;
  const tmp7 = _slicedToArray(closure_9(value, defaultValue, num), 2);
}) : (function Slider(maxValue) {
  ({ value, defaultValue, minValue } = maxValue);
  if (minValue === undefined) {
    minValue = 0;
  }
  let num = maxValue.maxValue;
  if (num === undefined) {
    num = 100;
  }
  const step = maxValue.step;
  ({ onChange: importDefault, formatValue, startIcon, endIcon } = maxValue);
  dependencyMap = undefined;
  ({ onChangeEnd, disabled, accessibilityLabel, accessibilityHint, testID } = maxValue);
  const tmp = closure_8();
  let tmp3 = defaultValue;
  if (defaultValue == null) {
    tmp3 = minValue;
  }
  const tmp4 = _slicedToArray(closure_9(first, defaultValue, minValue), 2);
  dependencyMap = tmp4[1];
  let obj = { style: tmp.container, children: null };
  let tmp7 = null;
  if (null != startIcon) {
    const obj2 = { style: tmp.startIcon, children: startIcon };
    tmp7 = closure_6(View, obj2);
  }
  const items = [tmp7, , ];
  const obj3 = { style: tmp.slider, value: null, minimumValue: null, maximumValue: null, step: null, disabled: null, onValueChange: null, onSlidingComplete: null, minimumTrackTintColor: null, maximumTrackTintColor: null, tapToSeek: true, accessibilityLabel: null, accessibilityHint: null, accessibilityValue: null, testID: null, onResponderGrant: null };
  if (first == null) {
    first = _slicedToArray(noop.useState(tmp3), 1)[0];
  }
  obj3.value = first;
  obj3.minimumValue = minValue;
  obj3.maximumValue = num;
  obj3.step = step;
  obj3.disabled = disabled;
  obj3.onValueChange = function handleValueChange(arg0) {
    if (null != step) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    }
    closure_2(arg0);
    if (closure_1_1 != null) {
      closure_1_1(arg0);
    }
  };
  obj3.onSlidingComplete = onChangeEnd;
  obj3.minimumTrackTintColor = tmp.minimumTrackTintColor.backgroundColor;
  obj3.maximumTrackTintColor = tmp.maximumTrackTintColor.backgroundColor;
  obj3.accessibilityLabel = accessibilityLabel;
  obj3.accessibilityHint = accessibilityHint;
  let tmp12;
  if (null != formatValue) {
    const obj4 = { text: formatValue(tmp4[0]) };
    tmp12 = obj4;
  }
  obj3.accessibilityValue = tmp12;
  obj3.testID = testID;
  const tmp11 = _modDef8806;
  let fn;
  if (obj5.isAndroid()) {
    fn = () => true;
  }
  obj3.onResponderGrant = fn;
  items[1] = closure_6(tmp11, obj3);
  let tmp9Result = null;
  if (null != endIcon) {
    const obj6 = { style: tmp.endIcon, children: endIcon };
    tmp9Result = closure_6(View, obj6);
  }
  items[2] = tmp9Result;
  obj.children = items;
  return closure_7(View, obj);
});