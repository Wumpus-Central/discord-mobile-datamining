// discord_app/modules/color_picker/native/HSVColorPicker.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { ReanimatedRexport } from "../../reanimated/ReanimatedRexport.tsx";
import { ColorBox } from "SaturationValueColorPicker.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ hsvColorPicker: { alignItems: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/color_picker/native/HSVColorPicker.tsx");

export default function HSVColorPicker(arg0) {
  let hue;
  let hueColorBarInnerStyle;
  let huePickerStyle;
  let hueSliderStyle;
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
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(0);
  const tmp = callback();
  const sharedValue1 = ReanimatedRexport.useSharedValue(1);
  const obj2 = ReanimatedRexport;
  obj = { style: tmp.hsvColorPicker, children: null };
  const sharedValue2 = ReanimatedRexport.useSharedValue(1);
  let tmp11 = hue;
  const obj3 = ReanimatedRexport;
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
  const items = [closure_4(ColorBox, obj), ];
  const tmp10 = ColorBox;
  if (hue == null) {
    hue = sharedValue;
  }
  items[1] = closure_4(tmp9(13971), { hue, style: huePickerStyle, colorBarInnerStyle: hueColorBarInnerStyle, sliderStyle: hueSliderStyle, onPanUpdate, onPanFinalize });
  obj[1] = items;
  return tmp6(tmp7, obj);
};