// discord_app/components_native/common/color_picker/ColorBlock.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import _modDef11564 from "../../../../_runtime/metro/11564__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { colorBlock: null };
obj = {
  minWidth: 44,
  height: 44,
  borderRadius: nativeDefault.radii.xl,
  marginHorizontal: 12,
  marginVertical: 8,
  justifyContent: "center",
  alignItems: "center",
};
obj.colorBlock = obj;
const styles = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/color_picker/ColorBlock.tsx");

export default noop.memo((color) => {
  color = color.color;
  ({ style, selected } = color);
  if (selected === undefined) {
    selected = false;
  }
  const onSelect = color.onSelect;
  const tmp = styles();
  let unsafe_rawColors = dependencyMap;
  let obj = utils_ColorUtils;
  const v = obj.int2hsv(color).v;
  if (null != onSelect) {
    obj = {
      accessibilityRole: "button",
      accessibilityLabel: null,
      accessibilityState: null,
      onPress: null,
      style: null,
      children: null,
    };
    tmp2(4409);
    const tmp2Result = tmp2(1091);
    obj.accessibilityLabel = tmp2Result.hexToColorName(tmp2Result.int2hex(color), true);
    obj = { selected };
    obj.accessibilityState = obj;
    obj.onPress = function onPress() {
      return onSelect(color);
    };
    const items = [tmp.colorBlock, style];
    const obj1 = { backgroundColor: tmp2(1091).int2hex(color) };
    items[2] = obj1;
    obj.style = items;
    if (!selected) {
      obj.children = null;
      let tmp10Result = tmp6(tmp2(5123).PressableOpacity, obj);
    } else {
      const obj2 = { source: _modDef11564, color: null };
      if (v < 0.5) {
        unsafe_rawColors = tmp8(576).unsafe_rawColors;
        let BLACK2 = unsafe_rawColors.WHITE;
      } else {
        BLACK2 = tmp8(576).unsafe_rawColors.BLACK;
      }
      obj2.color = BLACK2;
      tmp6(tmp2(1178).Icon, obj2);
    }
    const tmp2Result1 = tmp2(1091);
  } else {
    const obj3 = { style: null, children: null };
    const items1 = [tmp.colorBlock, style];
    const obj4 = { backgroundColor: tmp2(1091).int2hex(color) };
    items1[2] = obj4;
    obj3.style = items1;
    if (!selected) {
      obj3.children = null;
      tmp10Result = tmp10(tmp11, obj3);
    } else {
      const obj5 = { source: _modDef11564, color: null };
      if (v < 0.5) {
        let BLACK = tmp3(576).unsafe_rawColors.WHITE;
      } else {
        BLACK = tmp3(576).unsafe_rawColors.BLACK;
      }
      obj5.color = BLACK;
      tmp10Result = tmp10(tmp2(1178).Icon, obj5);
    }
    tmp11 = View;
    const tmp2Result2 = tmp2(1091);
  }
  return tmp10Result;
});
export const useStyles = styles;
