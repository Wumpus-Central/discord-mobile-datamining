// discord_app/modules/color_picker/native/CustomColorPickerActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../_runtime/metro/00672__.js";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ColorPickerUtils from "ColorPickerUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function SuggestedColors(arg0) {
  ({ suggestedColors, onSelect: require, color: importDefault } = arg0);
  const tmp = closure_9();
  const suggestedColor = tmp;
  let tmp2 = null;
  if (null != suggestedColors) {
    tmp2 = null;
    if (0 !== suggestedColors.length) {
      const obj = {
        style: tmp.suggestedColorsContainer,
        children: suggestedColors.map((color, index) => {
          closure_0 = color;
          return closure_1_6(
            require("ColorBlock"),
            {
              color,
              style: suggestedColor.suggestedColor,
              selected: color === closure_1,
              onSelect() {
                if (null != require) {
                  tmp(closure_0);
                }
              },
            },
            "" + color + "-" + index,
          );
        }),
      };
      tmp2 = closure_6(View, obj);
    }
  }
  return tmp2;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = "#000000";
fn(4560);
let createStyles = { container: null, suggestedColor: null, suggestedColorsContainer: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.suggestedColor = { minWidth: 32, height: 32, borderRadius: nativeDefault.radii.xs };
createStyles.suggestedColorsContainer = { flexDirection: "row", justifyContent: "center" };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/color_picker/native/CustomColorPickerActionSheet.tsx");

export default function CustomColorPickerActionSheet(arg0) {
  ({ color, onSelect } = arg0);
  ({ suggestedColors, actionButtonVariant } = arg0);
  if (actionButtonVariant === undefined) {
    actionButtonVariant = "secondary";
  }
  let memo;
  let sharedValue;
  let onDismiss;
  function updateInputHexValueFromHsv(h) {
    const hsvToRgbWorkletResult = ColorPickerUtils.hsvToRgbWorklet(h);
    dependencyMap(ColorUtils.rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]));
  }
  let obj = onSelect(1091);
  let tmp = closure_9();
  let obj1 = onSelect(1091);
  const int2hexResult = obj.int2hex(color);
  let obj2 = sharedValue;
  ({ h, s, v } = obj1.int2hsv(color));
  const tmp6 = memo(sharedValue.useState(int2hexResult), 2);
  value = tmp6[0];
  dependencyMap = tmp6[1];
  const items = [value];
  memo = sharedValue.useMemo(() => {
    if (null == first) {
      return utils_ColorUtils.hex2int(c8);
    } else {
      try {
        return utils_ColorUtils.hex2int(tmp);
      } catch (err) {
        return utils_ColorUtils.hex2int(c8);
      }
    }
  }, items);
  let obj3 = onSelect(4296);
  sharedValue = obj3.useSharedValue(h);
  let obj5 = onSelect(4296);
  const sharedValue1 = obj5.useSharedValue(s);
  let int2hsvResult = obj1.int2hsv(color);
  const sharedValue2 = onSelect(4296).useSharedValue(v);
  let combined;
  if (suggestedColors != null) {
    const mapped = suggestedColors.map((item) => onSelect(1091).hex2int(item));
    combined = mapped.concat(color);
  }
  const items1 = [sharedValue, sharedValue1, sharedValue2, onSelect, memo, value];
  onDismiss = obj2.useCallback(() => {
    if (null != first) {
      if (null != obj.hex2rgb2hsv(tmp)) {
        onSelect(memo);
      }
    }
    sharedValue.get();
    value = sharedValue1.get();
    onSelect(_modDef672.hsv(value, value, sharedValue2.get()).num());
  }, items1);
  const items2 = [onDismiss];
  const callback1 = obj2.useCallback(() => {
    callback();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items2);
  obj = { onDismiss, startExpanded: true, header: null, children: null };
  obj = { title: null, trailing: null };
  const intl = tmp2(1114).intl;
  obj.title = intl.string(onSelect(1114).t.WTqQ5e);
  obj1 = { variant: actionButtonVariant, size: "sm", text: null, onPress: null };
  const intl2 = tmp2(1114).intl;
  obj1.text = intl2.string(onSelect(1114).t.XqMe3N);
  obj1.onPress = callback1;
  obj.trailing = sharedValue2(onSelect(4975).Button, obj1);
  obj.header = sharedValue2(onSelect(7149).BottomSheetTitleHeader, obj);
  obj2 = { style: tmp.container, children: null };
  obj3 = { accessibilityLabel: null, value: null, onChange: null, maxLength: 7 };
  const intl3 = tmp2(1114).intl;
  obj3.accessibilityLabel = intl3.string(onSelect(1114).t["ozfa/h"]);
  obj3.value = value;
  obj3.onChange = function onChange(first4) {
    let tmp = first4.length > 0;
    if (tmp) {
      tmp = "#" !== first4.charAt(0);
    }
    let text = first4;
    if (tmp) {
      text = `#${first4}`;
    }
    const hex2rgb2hsvResult = ColorUtils.hex2rgb2hsv(text);
    dependencyMap(text);
    if (null != hex2rgb2hsvResult) {
      const result = sharedValue.set(hex2rgb2hsvResult.h);
      const result1 = sharedValue1.set(hex2rgb2hsvResult.s / 100);
      const result2 = sharedValue2.set(hex2rgb2hsvResult.v / 100);
    }
  };
  const items3 = [sharedValue2(onSelect(6606).TextInput, obj3), ,];
  const obj4 = { suggestedColors: null, onSelect: null, color: null };
  const obj8 = onSelect(4296);
  const tmp13 = updateInputHexValueFromHsv;
  const tmp14 = sharedValue1;
  const tmp15 = SuggestedColors;
  const tmp16 = value;
  obj4.suggestedColors = value(12).uniq(combined);
  obj4.onSelect = function onSelect(color) {
    dependencyMap(utils_ColorUtils.int2hex(color));
    const int2hsvResult = utils_ColorUtils.int2hsv(color);
    ({ s, v } = int2hsvResult);
    const result = sharedValue.set(int2hsvResult.h);
    const result1 = sharedValue1.set(s);
    const result2 = sharedValue2.set(v);
  };
  if (null == value) {
    sharedValue.get();
    value = sharedValue1.get();
    memo = tmp2(1091).hsv2int(value, value, sharedValue2.get());
    const tmp2Result = tmp2(1091);
  }
  obj4.color = memo;
  items3[1] = sharedValue2(tmp15, obj4);
  obj5 = {
    hue: sharedValue,
    saturation: sharedValue1,
    value: sharedValue2,
    onPanFinalize() {
      const obj = { h: sharedValue.get(), s: sharedValue1.get(), v: sharedValue2.get() };
      obj.runOnJS(updateInputHexValueFromHsv)(obj);
    },
  };
  items3[2] = sharedValue2(tmp16(14599), obj5);
  obj2.children = items3;
  obj.children = tmp13(tmp14, obj2);
  return sharedValue2(onSelect(7150).BottomSheet, obj);
}
