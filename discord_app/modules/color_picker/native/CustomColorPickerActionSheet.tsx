// === Module 14213: SuggestedColors ===

// Module 14213 (SuggestedColors)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
function SuggestedColors(arg0) {
  ({ suggestedColors, onSelect: require, color: importDefault } = arg0);
  closure_2 = undefined;
  const tmp = callback2();
  closure_2 = tmp;
  let tmp2 = null;
  if (null != suggestedColors) {
    tmp2 = null;
    if (0 !== suggestedColors.length) {
      const obj = { style: null, children: null };
      obj[0] = tmp.suggestedColorsContainer;
      obj[1] = suggestedColors.map((color) => {
        closure_0 = color;
        return closure_1_6(closure_1_1(suggestedColor[6]), {
          color,
          style: suggestedColor.suggestedColor,
          selected: color === closure_1,
          onSelect() {
            if (null != closure_0) {
              tmp(closure_0);
            }
          }
        }, "" + color + "-" + arg1);
      });
      tmp2 = callback(View, obj);
    }
  }
  return tmp2;
}
({ jsx: closure_6, jsxs: error } = jsxProd);
let c8 = "#000000";
createCacheKey = { container: null, suggestedColor: null, suggestedColorsContainer: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { minWidth: 32, height: 32, borderRadius: ThemesDefault.radii.xs };
createCacheKey[2] = { flexDirection: "row", justifyContent: "center" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { minWidth: 32, height: 32, borderRadius: ThemesDefault.radii.xs };
let result = require("set").fileFinishedImporting("modules/color_picker/native/CustomColorPickerActionSheet.tsx");

export default function CustomColorPickerActionSheet(arg0) {
  ({ color, onSelect } = arg0);
  ({ suggestedColors, actionButtonVariant } = arg0);
  if (actionButtonVariant === undefined) {
    actionButtonVariant = "secondary";
  }
  let first;
  dependencyMap = undefined;
  let memo;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let callback;
  function updateInputHexValueFromHsv(h) {
    const hsvToRgbWorkletResult = onSelect(14215).hsvToRgbWorklet(h);
    const obj = onSelect(14215);
    dependencyMap(onSelect(4293).rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]));
  }
  let obj = onSelect(688);
  let tmp = callback2();
  obj1 = onSelect(688);
  const int2hexResult = obj.int2hex(color);
  let obj2 = sharedValue;
  ({ h, s, v } = obj1.int2hsv(color));
  const tmp6 = memo(sharedValue.useState(int2hexResult), 2);
  first = tmp6[0];
  dependencyMap = tmp6[1];
  const items = [first];
  memo = sharedValue.useMemo(() => {
    if (null == first) {
      return onSelect(688).hex2int(callback);
    } else {
      try {
        return onSelect(688).hex2int(tmp);
      } catch (err) {
        return onSelect(688).hex2int(callback);
      }
    }
  }, items);
  let obj3 = onSelect(4185);
  sharedValue = obj3.useSharedValue(h);
  let obj5 = onSelect(4185);
  sharedValue1 = obj5.useSharedValue(s);
  let int2hsvResult = obj1.int2hsv(color);
  sharedValue2 = onSelect(4185).useSharedValue(v);
  let combined;
  if (suggestedColors != null) {
    const mapped = suggestedColors.map((callback) => onSelect(688).hex2int(callback));
    combined = mapped.concat(color);
  }
  const items1 = [sharedValue, sharedValue1, sharedValue2, onSelect, memo, first];
  callback = obj2.useCallback(() => {
    if (null != first) {
      if (null != obj.hex2rgb2hsv(tmp)) {
        onSelect(memo);
      }
    }
    let value = sharedValue.get();
    value = sharedValue1.get();
    const obj2 = first(689);
    onSelect(first(689).hsv(value, value, sharedValue2.get()).num());
  }, items1);
  const items2 = [callback];
  const callback1 = obj2.useCallback(() => {
    callback();
    first(4412).hideActionSheet();
  }, items2);
  obj = { onDismiss: callback, startExpanded: true, header: null, children: null };
  obj = { title: null, trailing: null };
  const intl = tmp2(1236).intl;
  obj[0] = intl.string(onSelect(1236).t.WTqQ5e);
  obj1 = { variant: actionButtonVariant, size: "sm", text: null, onPress: null };
  const intl2 = tmp2(1236).intl;
  obj1[2] = intl2.string(onSelect(1236).t.XqMe3N);
  obj1[3] = callback1;
  obj[1] = sharedValue2(onSelect(4880).Button, obj1);
  obj[2] = sharedValue2(onSelect(5573).BottomSheetTitleHeader, obj);
  obj2 = { style: tmp.container, children: null };
  obj3 = { accessibilityLabel: null, value: null, onChange: null, maxLength: 7 };
  const intl3 = tmp2(1236).intl;
  obj3[0] = intl3.string(onSelect(1236).t["ozfa/h"]);
  obj3[1] = first;
  obj3[2] = function onChange(first4) {
    let tmp = first4.length > 0;
    if (tmp) {
      tmp = "#" !== first4.charAt(0);
    }
    let text = first4;
    if (tmp) {
      text = `#${first4}`;
    }
    const hex2rgb2hsvResult = onSelect(4293).hex2rgb2hsv(text);
    dependencyMap(text);
    if (null != hex2rgb2hsvResult) {
      const result = sharedValue.set(hex2rgb2hsvResult.h);
      const result1 = sharedValue1.set(hex2rgb2hsvResult.s / 100);
      const result2 = sharedValue2.set(hex2rgb2hsvResult.v / 100);
    }
  };
  const items3 = [sharedValue2(onSelect(7638).TextInput, obj3), , ];
  const obj4 = { suggestedColors: null, onSelect: null, color: null };
  const obj8 = onSelect(4185);
  const tmp13 = updateInputHexValueFromHsv;
  const tmp14 = sharedValue1;
  const tmp15 = SuggestedColors;
  const tmp16 = first;
  obj4[0] = first(12).uniq(combined);
  obj4[1] = function onSelect(color) {
    dependencyMap(onSelect(688).int2hex(color));
    const obj = onSelect(688);
    const int2hsvResult = onSelect(688).int2hsv(color);
    ({ s, v } = int2hsvResult);
    const result = sharedValue.set(int2hsvResult.h);
    const result1 = sharedValue1.set(s);
    const result2 = sharedValue2.set(v);
  };
  if (null == first) {
    let value = sharedValue.get();
    value = sharedValue1.get();
    memo = tmp2(688).hsv2int(value, value, sharedValue2.get());
    const tmp2Result = tmp2(688);
  }
  obj4[2] = memo;
  items3[1] = sharedValue2(tmp15, obj4);
  obj5 = {
    hue: sharedValue,
    saturation: sharedValue1,
    value: sharedValue2,
    onPanFinalize() {
      let obj = onSelect(4185);
      obj = { h: sharedValue.get(), s: sharedValue1.get(), v: sharedValue2.get() };
      obj.runOnJS(updateInputHexValueFromHsv)(obj);
    }
  };
  items3[2] = sharedValue2(tmp16(14216), obj5);
  obj2[1] = items3;
  obj[3] = tmp13(tmp14, obj2);
  return sharedValue2(onSelect(5574).BottomSheet, obj);
};