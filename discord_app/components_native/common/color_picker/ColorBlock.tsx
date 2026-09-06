// === Module 14597: ColorBlock ===

// Module 14597 (ColorBlock)
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import native from "native" /* 1178 */;
import ColorUtils from "ColorUtils" /* 4409 */;
import Pressables from "Pressables" /* 5123 */;
import _modDef11564 from "module_11564" /* 11564 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { colorBlock: null };
obj = { minWidth: 44, height: 44, borderRadius: nativeDefault.radii.xl, marginHorizontal: 12, marginVertical: 8, justifyContent: "center", alignItems: "center" };
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
    obj = { accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, style: null, children: null };
    const tmp2Result = utils_ColorUtils;
    obj.accessibilityLabel = tmp2Result.hexToColorName(tmp2Result.int2hex(color), true);
    obj = { selected };
    obj.accessibilityState = obj;
    obj.onPress = function onPress() {
      return onSelect(color);
    };
    const items = [tmp.colorBlock, style, ];
    const obj1 = { backgroundColor: utils_ColorUtils.int2hex(color) };
    items[2] = obj1;
    obj.style = items;
    if (!selected) {
      obj.children = null;
      let tmp10Result = jsx(Pressables.PressableOpacity, obj);
    } else {
      const obj2 = { source: _modDef11564, color: null };
      if (v < 0.5) {
        unsafe_rawColors = nativeDefault.unsafe_rawColors;
        let BLACK2 = unsafe_rawColors.WHITE;
      } else {
        BLACK2 = nativeDefault.unsafe_rawColors.BLACK;
      }
      obj2.color = BLACK2;
      jsx(native.Icon, { source: _modDef11564, color: null });
    }
    const tmp2Result1 = utils_ColorUtils;
  } else {
    const obj3 = { style: null, children: null };
    const items1 = [tmp.colorBlock, style, ];
    const obj4 = { backgroundColor: utils_ColorUtils.int2hex(color) };
    items1[2] = obj4;
    obj3.style = items1;
    if (!selected) {
      obj3.children = null;
      tmp10Result = <View {...obj3} />;
    } else {
      const obj5 = { source: _modDef11564, color: null };
      if (v < 0.5) {
        let BLACK = nativeDefault.unsafe_rawColors.WHITE;
      } else {
        BLACK = nativeDefault.unsafe_rawColors.BLACK;
      }
      obj5.color = BLACK;
      tmp10Result = jsx(native.Icon, { source: _modDef11564, color: null });
    }
    const tmp2Result2 = utils_ColorUtils;
  }
  return tmp10Result;
});
export const useStyles = styles;