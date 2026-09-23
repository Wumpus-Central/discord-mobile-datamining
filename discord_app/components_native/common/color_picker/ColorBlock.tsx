// discord_app/components_native/common/color_picker/ColorBlock.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import native from "../../../design/void/native.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import _modDef11895 from "../../../../_runtime/metro/11895__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
const obj = {
  colorBlock: {
    minWidth: 44,
    height: 44,
    borderRadius: nativeDefault.radii.xl,
    marginHorizontal: 12,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
};
const styles = createStyles.createStyles(obj);
let obj3 = {
  minWidth: 44,
  height: 44,
  borderRadius: nativeDefault.radii.xl,
  marginHorizontal: 12,
  marginVertical: 8,
  justifyContent: "center",
  alignItems: "center",
};
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
  const v = utils_ColorUtils.int2hsv(color).v;
  if (null != onSelect) {
    const obj2 = {
      accessibilityRole: "button",
      accessibilityLabel: null,
      accessibilityState: null,
      onPress: null,
      style: null,
      children: null,
    };
    const tmp2Result = ColorUtils;
    obj2.accessibilityLabel = tmp2Result.hexToColorName(utils_ColorUtils.int2hex(color), true);
    const obj3 = { selected };
    obj2.accessibilityState = obj3;
    obj2.onPress = function onPress() {
      return onSelect(color);
    };
    const items = [tmp.colorBlock, style];
    const obj4 = { backgroundColor: null };
    const tmp2Result4 = utils_ColorUtils;
    obj4.backgroundColor = utils_ColorUtils.int2hex(color);
    items[2] = obj4;
    obj2.style = items;
    if (!selected) {
      obj2.children = null;
      let tmp10Result1 = jsx(Pressables.PressableOpacity, obj2);
    } else {
      const obj5 = { source: _modDef11895, color: null };
      if (v < 0.5) {
        unsafe_rawColors = nativeDefault.unsafe_rawColors;
        let BLACK2 = unsafe_rawColors.WHITE;
      } else {
        BLACK2 = nativeDefault.unsafe_rawColors.BLACK;
      }
      obj5.color = BLACK2;
      jsx(native.Icon, { source: _modDef11895, color: null });
    }
    const tmp2Result5 = utils_ColorUtils;
  } else {
    const obj6 = { style: null, children: null };
    const items1 = [tmp.colorBlock, style];
    const obj7 = { backgroundColor: utils_ColorUtils.int2hex(color) };
    items1[2] = obj7;
    obj6.style = items1;
    if (!selected) {
      obj6.children = null;
      tmp10Result1 = <View {...obj6} />;
    } else {
      const obj8 = { source: _modDef11895, color: null };
      if (v < 0.5) {
        let BLACK = nativeDefault.unsafe_rawColors.WHITE;
      } else {
        BLACK = nativeDefault.unsafe_rawColors.BLACK;
      }
      obj8.color = BLACK;
      jsx(native.Icon, { source: _modDef11895, color: null });
    }
    const tmp2Result6 = utils_ColorUtils;
  }
  return tmp10Result1;
});
export const useStyles = styles;
