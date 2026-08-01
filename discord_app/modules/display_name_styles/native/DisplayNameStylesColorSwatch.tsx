// === Module 13734: DisplayNameStylesColorSwatch ===

// Module 13734 (DisplayNameStylesColorSwatch)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let obj = { colorSwatch: null, gummySwatch: null };
obj = { width: 24, height: 24, borderRadius: require("Themes").radii.xs };
obj[0] = obj;
obj[1] = { flexDirection: "row", overflow: "hidden" };
let closure_5 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorSwatch.tsx");

export default function DisplayNameStylesColorSwatch(colors) {
  colors = colors.colors;
  const tmp = callback();
  if (colors.effectId === require(1887) /* DisplayNameEffect */.DisplayNameEffect.GUMMY) {
    if (colors.length > 0) {
      let obj = { style: null, children: null };
      const items = [, ];
      ({ colorSwatch: arr3[0], gummySwatch: arr3[1] } = tmp);
      obj[0] = items;
      obj = { colors: null };
      obj[0] = colors;
      obj[1] = jsx(importDefault(13735), { colors: null });
      return <View colors={null} />;
    }
  }
  if (colors.length >= 2) {
    const obj1 = { colors: null, start: null, end: null, style: null };
    obj1[0] = colors.map((color) => callback(table[7]).int2hex(color));
    obj1[1] = { x: 0, y: 0 };
    obj1[2] = { x: 1, y: 0 };
    obj1[3] = tmp.colorSwatch;
    return jsx(importDefault(4615), { colors: null, start: null, end: null, style: null });
  } else {
    let str = "#000000";
    if (colors.length > 0) {
      str = tmp2(688).int2hex(colors[0]);
      const tmp2Result = tmp2(688);
    }
    const obj2 = { style: null };
    const items1 = [tmp.colorSwatch, ];
    const obj3 = { backgroundColor: null };
    obj3[0] = str;
    items1[1] = obj3;
    obj2[0] = items1;
    return <View style={null} />;
  }
  tmp2 = require;
};