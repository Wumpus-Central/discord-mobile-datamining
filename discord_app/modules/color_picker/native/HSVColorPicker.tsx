// === Module 14441: HSVColorPicker ===

// Module 14441 (HSVColorPicker)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import SaturationValueColorPickerDefault from "SaturationValueColorPicker" /* 14442 */;
import HuePickerDefault from "HuePicker" /* 14443 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ hsvColorPicker: { alignItems: "center" } });
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let hue;
  let hueColorBarInnerStyle;
  let huePickerStyle;
  let hueSliderStyle;
  let items;
  let onPanFinalize;
  let onPanUpdate;
  let saturation;
  let saturationValueColorBoxInnerStyle;
  let saturationValueColorBoxStyle;
  let saturationValuePickerStyle;
  let saturationValueSelectorStyle;
  let value;
  const obj = react2;
  const cResult = obj.c(21);
  ({ hue, saturation, value, saturationValuePickerStyle, saturationValueColorBoxStyle, saturationValueColorBoxInnerStyle, saturationValueSelectorStyle, huePickerStyle, hueColorBarInnerStyle, hueSliderStyle, onPanUpdate, onPanFinalize } = arg0);
  const tmp3 = closure_6();
  const obj2 = ReanimatedRexport;
  const sharedValue = obj2.useSharedValue(0);
  const obj3 = ReanimatedRexport;
  const sharedValue1 = obj3.useSharedValue(1);
  let tmp7 = hue;
  const obj4 = ReanimatedRexport;
  const sharedValue2 = obj4.useSharedValue(1);
  if (hue == null) {
    tmp7 = sharedValue;
  }
  if (saturation == null) {
    saturation = sharedValue1;
  }
  if (value == null) {
    value = sharedValue2;
  }
  if (cResult[0] === onPanFinalize) {
    if (cResult[1] === onPanUpdate) {
      if (cResult[2] === saturationValueColorBoxInnerStyle) {
        if (cResult[3] === saturationValueColorBoxStyle) {
          if (cResult[4] === saturationValuePickerStyle) {
            if (cResult[5] === saturationValueSelectorStyle) {
              if (cResult[6] === tmp7) {
                if (cResult[7] === saturation) {
                  let tmp8;
                  if (cResult[8] === value) {
                    tmp8 = cResult[9];
                  }
                  if (hue == null) {
                    hue = sharedValue;
                  }
                  if (cResult[10] === hueColorBarInnerStyle) {
                    if (cResult[11] === huePickerStyle) {
                      if (cResult[12] === hueSliderStyle) {
                        if (cResult[13] === onPanFinalize) {
                          if (cResult[14] === onPanUpdate) {
                            let tmp10;
                            if (cResult[15] === hue) {
                              tmp10 = cResult[16];
                            }
                            if (cResult[17] === tmp3.hsvColorPicker) {
                              if (cResult[18] === tmp8) {
                                let tmp14;
                                if (cResult[19] === tmp10) {
                                  tmp14 = cResult[20];
                                }
                                return tmp14;
                              }
                            }
                            const obj5 = { style: tmp3.hsvColorPicker, children: items };
                            items = [tmp8, tmp10];
                            const tmp17 = hasOwnProperty(View, obj5);
                            cResult[17] = tmp3.hsvColorPicker;
                            cResult[18] = tmp8;
                            cResult[19] = tmp10;
                            cResult[20] = tmp17;
                            tmp14 = tmp17;
                          }
                        }
                      }
                    }
                  }
                  const obj6 = { hue, style: huePickerStyle, colorBarInnerStyle: hueColorBarInnerStyle, sliderStyle: hueSliderStyle, onPanUpdate, onPanFinalize };
                  const tmp13 = React3(HuePickerDefault, obj6);
                  cResult[10] = hueColorBarInnerStyle;
                  cResult[11] = huePickerStyle;
                  cResult[12] = hueSliderStyle;
                  cResult[13] = onPanFinalize;
                  cResult[14] = onPanUpdate;
                  cResult[15] = hue;
                  cResult[16] = tmp13;
                  tmp10 = tmp13;
                }
              }
            }
          }
        }
      }
    }
  }
  const tmp9 = React3(SaturationValueColorPickerDefault, { hue: tmp7, saturation, value, style: saturationValuePickerStyle, colorBoxStyle: saturationValueColorBoxStyle, colorBoxInnerStyle: saturationValueColorBoxInnerStyle, selectorStyle: saturationValueSelectorStyle, onPanUpdate, onPanFinalize });
  cResult[0] = onPanFinalize;
  cResult[1] = onPanUpdate;
  cResult[2] = saturationValueColorBoxInnerStyle;
  cResult[3] = saturationValueColorBoxStyle;
  cResult[4] = saturationValuePickerStyle;
  cResult[5] = saturationValueSelectorStyle;
  cResult[6] = tmp7;
  cResult[7] = saturation;
  cResult[8] = value;
  cResult[9] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let hue;
  let hueColorBarInnerStyle;
  let huePickerStyle;
  let hueSliderStyle;
  let items;
  let onPanFinalize;
  let onPanUpdate;
  let saturation;
  let saturationValueColorBoxInnerStyle;
  let saturationValueColorBoxStyle;
  let saturationValuePickerStyle;
  let saturationValueSelectorStyle;
  let value;
  ({ hue, saturation, value, onPanUpdate, onPanFinalize } = arg0);
  ({ saturationValuePickerStyle, saturationValueColorBoxStyle, saturationValueColorBoxInnerStyle, saturationValueSelectorStyle, huePickerStyle, hueColorBarInnerStyle, hueSliderStyle } = arg0);
  const tmp = closure_6();
  const obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(0);
  const obj2 = ReanimatedRexport;
  const sharedValue1 = obj2.useSharedValue(1);
  const obj4 = { style: tmp.hsvColorPicker, children: items };
  const obj3 = ReanimatedRexport;
  const sharedValue2 = obj3.useSharedValue(1);
  let tmp11 = hue;
  const tmp10 = SaturationValueColorPickerDefault;
  if (hue == null) {
    tmp11 = sharedValue;
  }
  const obj5 = { hue: tmp11, saturation, value, style: saturationValuePickerStyle, colorBoxStyle: saturationValueColorBoxStyle, colorBoxInnerStyle: saturationValueColorBoxInnerStyle, selectorStyle: saturationValueSelectorStyle, onPanUpdate, onPanFinalize };
  if (saturation == null) {
    saturation = sharedValue1;
  }
  if (value == null) {
    value = sharedValue2;
  }
  items = [React3(tmp10, obj5), ];
  const tmp9Result = HuePickerDefault;
  if (hue == null) {
    hue = sharedValue;
  }
  items[1] = React3(tmp9Result, { hue, style: huePickerStyle, colorBarInnerStyle: hueColorBarInnerStyle, sliderStyle: hueSliderStyle, onPanUpdate, onPanFinalize });
  return hasOwnProperty(View, obj4);
});
const result = size.fileFinishedImporting("modules/color_picker/native/HSVColorPicker.tsx");

export default tmp4;