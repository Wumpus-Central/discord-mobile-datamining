// discord_app/modules/display_name_styles/native/DisplayNameStylesColorSwatch.tsx
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import int2hslRaw from "int2hslRaw" /* 688 */;
import ThemesDefault from "Themes" /* 712 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1935 */;
import LinearGradientDefault from "LinearGradient" /* 4756 */;
import GummyStripesDefault from "GummyStripes" /* 14035 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let obj = { colorSwatch: null, gummySwatch: null };
obj = { width: 24, height: 24, borderRadius: ThemesDefault.radii.xs };
obj[0] = obj;
obj[1] = { flexDirection: "row", overflow: "hidden" };
let closure_5 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorSwatch.tsx");

export default function DisplayNameStylesColorSwatch(colors) {
  colors = colors.colors;
  const tmp = callback();
  if (colors.effectId === DisplayNameEffect.DisplayNameEffect.GUMMY) {
    if (colors.length > 0) {
      let obj = { style: null, children: null };
      const items = [, ];
      ({ colorSwatch: arr3[0], gummySwatch: arr3[1] } = tmp);
      obj[0] = items;
      obj = { colors: null };
      obj[0] = colors;
      obj[1] = jsx(GummyStripesDefault, { colors: null });
      return <View colors={null} />;
    }
  }
  if (colors.length >= 2) {
    obj1 = { colors: null, start: null, end: null, style: null };
    obj1[0] = colors.map((color) => callback(table[7]).int2hex(color));
    obj1[1] = { x: 0, y: 0 };
    obj1[2] = { x: 1, y: 0 };
    obj1[3] = tmp.colorSwatch;
    return jsx(LinearGradientDefault, { colors: null, start: null, end: null, style: null });
  } else {
    let str = "#000000";
    if (colors.length > 0) {
      str = int2hslRaw.int2hex(colors[0]);
      const tmp2Result = int2hslRaw;
    }
    const obj2 = { style: null };
    const items1 = [tmp.colorSwatch, ];
    const obj3 = { backgroundColor: null };
    obj3[0] = str;
    items1[1] = obj3;
    obj2[0] = items1;
    return <View style={null} />;
  }
  const tmp2 = require;
};