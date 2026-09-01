// discord_app/components_native/common/color_picker/ColorBlock.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

const require = arg1;
let obj = { colorBlock: null };
obj = { minWidth: 44, height: 44, borderRadius: ThemesDefault.radii.xl, marginHorizontal: 12, marginVertical: 8, justifyContent: "center", alignItems: "center" };
obj[0] = obj;
const styles = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((color) => {
  color = color.color;
  ({ style, selected } = color);
  if (selected === undefined) {
    selected = false;
  }
  const onSelect = color.onSelect;
  const tmp = styles();
  let unsafe_rawColors = dependencyMap;
  let obj = color(688);
  const v = obj.int2hsv(color).v;
  if (null != onSelect) {
    obj = { accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, style: null, children: null };
    let tmp2Result = tmp2(4326);
    tmp2Result = tmp2(688);
    obj[1] = tmp2Result.hexToColorName(tmp2Result.int2hex(color), true);
    obj = { selected: null };
    obj[0] = selected;
    obj[2] = obj;
    obj[3] = function onPress() {
      return onSelect(color);
    };
    const items = [tmp.colorBlock, style, ];
    obj1 = { backgroundColor: null };
    obj1[0] = tmp2(688).int2hex(color);
    items[2] = obj1;
    obj[4] = items;
    if (!selected) {
      obj[5] = null;
      let tmp10Result = tmp6(tmp2(5068).PressableOpacity, obj);
    } else {
      const obj2 = { source: null, color: null };
      obj2[0] = onSelect(11163);
      if (v < 0.5) {
        unsafe_rawColors = tmp8(712).unsafe_rawColors;
        let BLACK2 = unsafe_rawColors.WHITE;
      } else {
        BLACK2 = tmp8(712).unsafe_rawColors.BLACK;
      }
      obj2[1] = BLACK2;
      tmp6(tmp2(1297).Icon, obj2);
    }
    const tmp2Result1 = tmp2(688);
  } else {
    const obj3 = { style: null, children: null };
    const items1 = [tmp.colorBlock, style, ];
    const obj4 = { backgroundColor: null };
    obj4[0] = tmp2(688).int2hex(color);
    items1[2] = obj4;
    obj3[0] = items1;
    if (!selected) {
      obj3[1] = null;
      tmp10Result = tmp10(tmp11, obj3);
    } else {
      const obj5 = { source: null, color: null };
      obj5[0] = onSelect(11163);
      if (v < 0.5) {
        let BLACK = tmp3(712).unsafe_rawColors.WHITE;
      } else {
        BLACK = tmp3(712).unsafe_rawColors.BLACK;
      }
      obj5[1] = BLACK;
      tmp10Result = tmp10(tmp2(1297).Icon, obj5);
    }
    tmp11 = View;
    const tmp2Result2 = tmp2(688);
  }
  return tmp10Result;
});
const result = require("set").fileFinishedImporting("components_native/common/color_picker/ColorBlock.tsx");

export default memoResult;
export const useStyles = styles;