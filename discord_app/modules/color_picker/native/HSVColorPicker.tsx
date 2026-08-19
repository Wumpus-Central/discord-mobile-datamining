// === Module 14013: HSVColorPicker ===

// Module 14013 (HSVColorPicker)
import noopAll from "noop" /* 19 */;
import _mod4115 from "module_4115" /* 4115 */;
import ColorBoxDefault from "ColorBox" /* 14014 */;
import HuePickerDefault from "HuePicker" /* 14015 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ hsvColorPicker: { alignItems: "center" } });
const result = require("obj132").fileFinishedImporting("modules/color_picker/native/HSVColorPicker.tsx");

export default function HSVColorPicker(arg0) {
  ({ hue, saturation, value, onPanUpdate, onPanFinalize } = arg0);
  ({ saturationValuePickerStyle, saturationValueColorBoxStyle, saturationValueColorBoxInnerStyle, saturationValueSelectorStyle, huePickerStyle, hueColorBarInnerStyle, hueSliderStyle } = arg0);
  let obj = _mod4115;
  const sharedValue = obj.useSharedValue(0);
  const tmp = callback();
  const sharedValue1 = _mod4115.useSharedValue(1);
  obj = { style: tmp.hsvColorPicker, children: null };
  const sharedValue2 = _mod4115.useSharedValue(1);
  let tmp11 = hue;
  if (hue == null) {
    tmp11 = sharedValue;
  }
  obj = { hue: tmp11, saturation: null, value: null, style: null, colorBoxStyle: null, colorBoxInnerStyle: null, selectorStyle: null, onPanUpdate: null, onPanFinalize: null };
  if (saturation == null) {
    saturation = sharedValue1;
  }
  obj[1] = saturation;
  if (value == null) {
    value = sharedValue2;
  }
  obj[2] = value;
  obj[3] = saturationValuePickerStyle;
  obj[4] = saturationValueColorBoxStyle;
  obj[5] = saturationValueColorBoxInnerStyle;
  obj[6] = saturationValueSelectorStyle;
  obj[7] = onPanUpdate;
  obj[8] = onPanFinalize;
  const items = [callback(ColorBoxDefault, obj), ];
  if (hue == null) {
    hue = sharedValue;
  }
  items[1] = callback(HuePickerDefault, { hue, style: huePickerStyle, colorBarInnerStyle: hueColorBarInnerStyle, sliderStyle: hueSliderStyle, onPanUpdate, onPanFinalize });
  obj[1] = items;
  return callback2(View, obj);
};