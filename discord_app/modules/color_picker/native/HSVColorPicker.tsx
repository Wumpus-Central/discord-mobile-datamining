// === Module 14132: HSVColorPicker ===

// Module 14132 (HSVColorPicker)
import ReanimatedRexport from "ReanimatedRexport" /* 4563 */;
import SaturationValueColorPickerDefault from "SaturationValueColorPicker" /* 14133 */;
import HuePickerDefault from "HuePicker" /* 14134 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
let closure_6 = createStyles.createStyles({ hsvColorPicker: { alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/color_picker/native/HSVColorPicker.tsx");

export default function HSVColorPicker(arg0) {
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
};