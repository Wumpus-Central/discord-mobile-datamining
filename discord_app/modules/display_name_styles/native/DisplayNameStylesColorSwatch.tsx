// discord_app/modules/display_name_styles/native/DisplayNameStylesColorSwatch.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import DisplayNameEffect from "../../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import GummyStripesDefault from "effects/GummyStripes.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { colorSwatch: null, gummySwatch: null };
let size = { width: 24, height: 24, borderRadius: nativeDefault.radii.xs };
obj.colorSwatch = size;
obj.gummySwatch = { flexDirection: "row", overflow: "hidden" };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorSwatch.tsx");

export default function DisplayNameStylesColorSwatch(colors) {
  colors = colors.colors;
  const tmp = closure_5();
  if (colors.effectId === DisplayNameEffect.DisplayNameEffect.GUMMY) {
    if (colors.length > 0) {
      let obj = { style: null, children: null };
      const items = [,];
      ({ colorSwatch: arr3[0], gummySwatch: arr3[1] } = tmp);
      obj.style = items;
      obj = { colors };
      obj.children = jsx(GummyStripesDefault, { colors });
      return <View colors={colors} />;
    }
  }
  if (colors.length >= 2) {
    const obj1 = {
      colors: colors.map((item) => utils_ColorUtils.int2hex(item)),
      start: { x: 0, y: 0 },
      end: { x: 1, y: 0 },
      style: tmp.colorSwatch,
    };
    return jsx(LinearGradientDefault, {
      colors: colors.map((item) => utils_ColorUtils.int2hex(item)),
      start: { x: 0, y: 0 },
      end: { x: 1, y: 0 },
      style: tmp.colorSwatch,
    });
  } else {
    let str = "#000000";
    if (colors.length > 0) {
      str = utils_ColorUtils.int2hex(colors[0]);
      const tmp2Result = utils_ColorUtils;
    }
    const obj2 = { style: null };
    const items1 = [tmp.colorSwatch];
    const obj3 = { backgroundColor: str };
    items1[1] = obj3;
    obj2.style = items1;
    return <View style={null} />;
  }
}
