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
const createStyles = fn(4836);
let obj2 = {
  container: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 },
  suggestedColor: null,
  suggestedColorsContainer: null,
};
const obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.suggestedColor = { minWidth: 32, height: 32, borderRadius: nativeDefault.radii.xs };
obj2.suggestedColorsContainer = { flexDirection: "row", justifyContent: "center" };
let closure_9 = createStyles.createStyles(obj2);
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
  let tmp = closure_9();
  let obj = onSelect(1092);
  const int2hexResult = onSelect(1092).int2hex(color);
  let obj2 = onSelect(1092);
  ({ h, s, v } = onSelect(1092).int2hsv(color));
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
  let int2hsvResult = onSelect(1092).int2hsv(color);
  sharedValue = onSelect(4566).useSharedValue(h);
  const obj4 = onSelect(4566);
  const sharedValue1 = onSelect(4566).useSharedValue(s);
  const obj6 = onSelect(4566);
  const sharedValue2 = onSelect(4566).useSharedValue(v);
  let combined;
  if (suggestedColors != null) {
    const mapped = suggestedColors.map((item) => onSelect(1092).hex2int(item));
    combined = mapped.concat(color);
  }
  const items1 = [sharedValue, sharedValue1, sharedValue2, onSelect, memo, value];
  onDismiss = obj3.useCallback(() => {
    if (null != first) {
      if (null != obj.hex2rgb2hsv(tmp)) {
        onSelect(memo);
      }
      obj = ColorUtils;
    }
    value = sharedValue.get();
    value2 = sharedValue1.get();
    onSelect(_modDef672.hsv(value, value2, sharedValue2.get()).num());
    const hsvResult = _modDef672.hsv(value, value2, sharedValue2.get());
  }, items1);
  const items2 = [onDismiss];
  const callback1 = obj3.useCallback(() => {
    callback();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items2);
  const obj5 = { onDismiss, startExpanded: true, header: null, children: null };
  const obj7 = { title: null, trailing: null };
  const intl = onSelect(1115).intl;
  obj7.title = intl.string(onSelect(1115).t.WTqQ5e);
  const obj9 = { variant: actionButtonVariant, size: "sm", text: null, onPress: null };
  const intl2 = onSelect(1115).intl;
  obj9.text = intl2.string(onSelect(1115).t.XqMe3N);
  obj9.onPress = callback1;
  obj7.trailing = sharedValue2(onSelect(5281).Button, obj9);
  obj5.header = sharedValue2(onSelect(6570).BottomSheetTitleHeader, obj7);
  const obj10 = { style: tmp.container, children: null };
  const obj11 = { accessibilityLabel: null, value: null, onChange: null, maxLength: 7 };
  const intl3 = onSelect(1115).intl;
  obj11.accessibilityLabel = intl3.string(onSelect(1115).t["ozfa/h"]);
  obj11.value = value;
  obj11.onChange = function onChange(first4) {
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
  const items3 = [sharedValue2(onSelect(6024).TextInput, obj11), ,];
  const obj12 = { suggestedColors: null, onSelect: null, color: null };
  const obj8 = onSelect(4566);
  const tmp13 = updateInputHexValueFromHsv;
  const tmp14 = sharedValue1;
  const tmp16 = value;
  obj12.suggestedColors = value(12).uniq(combined);
  obj12.onSelect = function onSelect(color) {
    dependencyMap(utils_ColorUtils.int2hex(color));
    const int2hsvResult = utils_ColorUtils.int2hsv(color);
    ({ s, v } = int2hsvResult);
    const result = sharedValue.set(int2hsvResult.h);
    const result1 = sharedValue1.set(s);
    const result2 = sharedValue2.set(v);
  };
  if (null == value) {
    value = sharedValue.get();
    value2 = sharedValue1.get();
    memo = onSelect(1092).hsv2int(value, value2, sharedValue2.get());
    const tmp2Result = onSelect(1092);
  }
  obj12.color = memo;
  items3[1] = sharedValue2(SuggestedColors, obj12);
  items3[2] = sharedValue2(tmp16(14157), {
    hue: sharedValue,
    saturation: sharedValue1,
    value: sharedValue2,
    onPanFinalize() {
      const obj2 = { h: null, s: null, v: null };
      obj2.h = sharedValue.get();
      obj2.s = sharedValue1.get();
      obj2.v = sharedValue2.get();
      ReanimatedRexport.runOnJS(updateInputHexValueFromHsv)(obj2);
    },
  });
  obj10.children = items3;
  obj5.children = tmp13(tmp14, obj10);
  return sharedValue2(onSelect(6571).BottomSheet, obj5);
}
