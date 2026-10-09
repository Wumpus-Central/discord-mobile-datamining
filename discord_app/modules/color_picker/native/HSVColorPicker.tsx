// === Module 14771: HSVColorPicker ===

// Module 14771 (HSVColorPicker)
import c from "c" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import SaturationValueColorPickerDefault from "SaturationValueColorPicker" /* 14772 */;
import HuePickerDefault from "HuePicker" /* 14773 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let closure_6 = createStyles.createStyles({ hsvColorPicker: { alignItems: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/color_picker/native/HSVColorPicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HSVColorPicker(arg0) {
  const cResult = c.c(21);
  ({ hue, saturation, value, saturationValuePickerStyle, saturationValueColorBoxStyle, saturationValueColorBoxInnerStyle, saturationValueSelectorStyle, huePickerStyle, hueColorBarInnerStyle, hueSliderStyle, onPanUpdate, onPanFinalize } = arg0);
  const tmp3 = closure_6();
  const sharedValue = ReanimatedRexport.useSharedValue(0);
  const sharedValue1 = ReanimatedRexport.useSharedValue(1);
  let tmp7 = hue;
  const sharedValue2 = ReanimatedRexport.useSharedValue(1);
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
                  if (cResult[8] === value) {
                    let tmp8 = cResult[9];
                  }
                  if (hue == null) {
                    hue = sharedValue;
                  }
                  if (cResult[10] === hueColorBarInnerStyle) {
                    if (cResult[11] === huePickerStyle) {
                      if (cResult[12] === hueSliderStyle) {
                        if (cResult[13] === onPanFinalize) {
                          if (cResult[14] === onPanUpdate) {
                            if (cResult[15] === hue) {
                              let tmp10 = cResult[16];
                            }
                            if (cResult[17] === tmp3.hsvColorPicker) {
                              if (cResult[18] === tmp8) {
                                if (cResult[19] === tmp10) {
                                  let tmp14 = cResult[20];
                                }
                                return tmp14;
                              }
                            }
                            const obj5 = { style: tmp3.hsvColorPicker, children: null };
                            const items = [tmp8, tmp10];
                            obj5.children = items;
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
                  const tmp13 = React4(HuePickerDefault, obj6);
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
  const tmp9 = React4(SaturationValueColorPickerDefault, { hue: tmp7, saturation, value, style: saturationValuePickerStyle, colorBoxStyle: saturationValueColorBoxStyle, colorBoxInnerStyle: saturationValueColorBoxInnerStyle, selectorStyle: saturationValueSelectorStyle, onPanUpdate, onPanFinalize });
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
}) : (function HSVColorPicker(arg0) {
  ({ hue, saturation, value, onPanUpdate, onPanFinalize } = arg0);
  ({ saturationValuePickerStyle, saturationValueColorBoxStyle, saturationValueColorBoxInnerStyle, saturationValueSelectorStyle, huePickerStyle, hueColorBarInnerStyle, hueSliderStyle } = arg0);
  const tmp = closure_6();
  const sharedValue = ReanimatedRexport.useSharedValue(0);
  const sharedValue1 = ReanimatedRexport.useSharedValue(1);
  const obj4 = { style: tmp.hsvColorPicker, children: null };
  const sharedValue2 = ReanimatedRexport.useSharedValue(1);
  let tmp11 = hue;
  if (hue == null) {
    tmp11 = sharedValue;
  }
  const obj5 = { hue: tmp11, saturation: null, value: null, style: null, colorBoxStyle: null, colorBoxInnerStyle: null, selectorStyle: null, onPanUpdate: null, onPanFinalize: null };
  if (saturation == null) {
    saturation = sharedValue1;
  }
  obj5.saturation = saturation;
  if (value == null) {
    value = sharedValue2;
  }
  obj5.value = value;
  obj5.style = saturationValuePickerStyle;
  obj5.colorBoxStyle = saturationValueColorBoxStyle;
  obj5.colorBoxInnerStyle = saturationValueColorBoxInnerStyle;
  obj5.selectorStyle = saturationValueSelectorStyle;
  obj5.onPanUpdate = onPanUpdate;
  obj5.onPanFinalize = onPanFinalize;
  const items = [React4(SaturationValueColorPickerDefault, obj5), ];
  if (hue == null) {
    hue = sharedValue;
  }
  items[1] = React4(HuePickerDefault, { hue, style: huePickerStyle, colorBarInnerStyle: hueColorBarInnerStyle, sliderStyle: hueSliderStyle, onPanUpdate, onPanFinalize });
  obj4.children = items;
  return hasOwnProperty(View, obj4);
});