// === Module 14220: HSVColorPicker ===

// Module 14220 (HSVColorPicker)
import noopAll from "noop" /* 19 */;
import _mod4187 from "module_4187" /* 4187 */;
import ColorBoxDefault from "ColorBox" /* 14221 */;
import HuePickerDefault from "HuePicker" /* 14222 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ hsvColorPicker: { alignItems: "center" } });
const result = require("set").fileFinishedImporting("modules/color_picker/native/HSVColorPicker.tsx");

export default function HSVColorPicker(arg0) {
  ({ hue, saturation, value, onPanUpdate, onPanFinalize } = arg0);
  ({ saturationValuePickerStyle, saturationValueColorBoxStyle, saturationValueColorBoxInnerStyle, saturationValueSelectorStyle, huePickerStyle, hueColorBarInnerStyle, hueSliderStyle } = arg0);
  let obj = _mod4187;
  const sharedValue = obj.useSharedValue(0);
  const tmp = callback();
  const sharedValue1 = _mod4187.useSharedValue(1);
  const obj2 = _mod4187;
  obj = { style: tmp.hsvColorPicker, children: null };
  const sharedValue2 = _mod4187.useSharedValue(1);
  let tmp11 = hue;
  const obj3 = _mod4187;
  const tmp6 = closure_5;
  const tmp7 = View;
  const tmp9 = importDefault;
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
  const items = [closure_4(ColorBoxDefault, obj), ];
  const tmp10 = ColorBoxDefault;
  if (hue == null) {
    hue = sharedValue;
  }
  items[1] = closure_4(HuePickerDefault, { hue, style: huePickerStyle, colorBarInnerStyle: hueColorBarInnerStyle, sliderStyle: hueSliderStyle, onPanUpdate, onPanFinalize });
  obj[1] = items;
  return tmp6(tmp7, obj);
};