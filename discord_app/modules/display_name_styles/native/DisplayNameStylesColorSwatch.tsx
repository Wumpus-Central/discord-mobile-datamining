// === Module 14987: DisplayNameStylesColorSwatch ===

// Module 14987 (DisplayNameStylesColorSwatch)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1391 */;
import LinearGradientDefault from "LinearGradient" /* 5285 */;
import GummyStripesDefault from "GummyStripes" /* 14988 */;
import createStyles from "createStyles" /* 4829 */;
import size_mod from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { colorSwatch: null, gummySwatch: null };
let size = { width: 24, height: 24, borderRadius: nativeDefault.radii.xs };
obj.colorSwatch = size;
obj.gummySwatch = { flexDirection: "row", overflow: "hidden" };
let closure_5 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorSwatch.tsx");

export default function DisplayNameStylesColorSwatch(colors) {
  colors = colors.colors;
  const tmp = closure_5();
  if (colors.effectId === DisplayNameEffect.DisplayNameEffect.GUMMY) {
    if (colors.length > 0) {
      const obj = { style: null, children: null };
      const items = [, ];
      ({ colorSwatch: arr3[0], gummySwatch: arr3[1] } = tmp);
      obj.style = items;
      const obj2 = { colors };
      obj.children = jsx(GummyStripesDefault, { colors });
      return <View style={null}>{null}</View>;
    }
  }
  if (colors.length >= 2) {
    const obj3 = { colors: colors.map((item) => utils_ColorUtils.int2hex(item)), start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: tmp.colorSwatch };
    return jsx(LinearGradientDefault, { colors: colors.map((item) => utils_ColorUtils.int2hex(item)), start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: tmp.colorSwatch });
  } else {
    let str = "#000000";
    if (colors.length > 0) {
      str = utils_ColorUtils.int2hex(colors[0]);
      const tmp2Result = utils_ColorUtils;
    }
    const obj4 = { style: null };
    const items1 = [tmp.colorSwatch, ];
    const obj5 = { backgroundColor: str };
    items1[1] = obj5;
    obj4.style = items1;
    return <View style={null} />;
  }
};