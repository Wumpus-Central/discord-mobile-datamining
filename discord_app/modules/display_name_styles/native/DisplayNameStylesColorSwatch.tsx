// discord_app/modules/display_name_styles/native/DisplayNameStylesColorSwatch.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import int2hslRaw from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import DisplayNameEffect from "../../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import LinearGradientDefault from "../../../../_runtime/04891_LinearGradient.js";
import GummyStripesDefault from "effects/GummyStripes.tsx";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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