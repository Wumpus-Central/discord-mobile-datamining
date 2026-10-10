// === Module 14849: DisplayNameStylesColorSwatch ===

// Module 14849 (DisplayNameStylesColorSwatch)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1409 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import GummyStripesDefault from "GummyStripes" /* 14850 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayNameStylesColorSwatch(colors) {
  const cResult = c.c(24);
  colors = colors.colors;
  const tmp4 = closure_5();
  if (colors.effectId === DisplayNameEffect.DisplayNameEffect.GUMMY) {
    if (colors.length > 0) {
      if (cResult[0] === tmp4.colorSwatch) {
        if (cResult[1] === tmp4.gummySwatch) {
          let tmp23 = cResult[2];
        }
        if (cResult[3] !== colors) {
          const obj2 = { colors };
          const tmp27 = jsx(GummyStripesDefault, { colors });
          cResult[3] = colors;
          cResult[4] = tmp27;
          let tmp24 = tmp27;
        } else {
          tmp24 = cResult[4];
        }
        if (cResult[5] === tmp23) {
          if (cResult[6] === tmp24) {
            let tmp28 = cResult[7];
          }
          return tmp28;
        }
        const obj3 = { style: tmp23, children: tmp24 };
        const tmp31 = <View style={tmp23}>{tmp24}</View>;
        cResult[5] = tmp23;
        cResult[6] = tmp24;
        cResult[7] = tmp31;
        tmp28 = tmp31;
      }
      const items = [, ];
      ({ colorSwatch: arr3[0], gummySwatch: arr3[1], colorSwatch: tmp3[0] } = tmp4);
      cResult[1] = tmp4.gummySwatch;
      cResult[2] = items;
      tmp23 = items;
    }
  }
  if (colors.length >= 2) {
    if (cResult[8] !== colors) {
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function p(color) {
          return utils_ColorUtils.int2hex(color);
        };
        cResult[10] = fn;
        let tmp13 = fn;
      } else {
        tmp13 = cResult[10];
      }
      const mapped = colors.map(tmp13);
      cResult[8] = colors;
      cResult[9] = mapped;
    } else {
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const point = { x: 0, y: 0 };
        const point1 = { x: 1, y: 0 };
        cResult[11] = point;
        cResult[12] = point1;
        let tmp18 = point1;
        let tmp17 = point;
      } else {
        tmp17 = cResult[11];
        tmp18 = cResult[12];
      }
      if (cResult[13] === tmp4.colorSwatch) {
        if (cResult[14] === tmp11) {
          let tmp19 = cResult[15];
        }
        return tmp19;
      }
      const obj4 = { colors: cResult[9], start: tmp17, end: tmp18, style: tmp4.colorSwatch };
      const tmp22 = jsx(LinearGradientDefault, { colors: cResult[9], start: tmp17, end: tmp18, style: tmp4.colorSwatch });
      cResult[13] = tmp4.colorSwatch;
      cResult[14] = cResult[9];
      cResult[15] = tmp22;
      tmp19 = tmp22;
    }
  } else {
    if (cResult[16] === colors[0]) {
      if (cResult[17] === colors.length) {
        let tmp5 = cResult[18];
      }
      if (cResult[19] !== tmp5) {
        const obj5 = { backgroundColor: tmp5 };
        cResult[19] = tmp5;
        cResult[20] = obj5;
        let tmp6 = obj5;
      } else {
        tmp6 = cResult[20];
      }
      if (cResult[21] === tmp4.colorSwatch) {
        if (cResult[22] === tmp6) {
          let tmp7 = cResult[23];
        }
        return tmp7;
      }
      const obj6 = { style: null };
      const items1 = [tmp4.colorSwatch, tmp6];
      obj6.style = items1;
      const tmp10 = <View style={null} />;
      cResult[21] = tmp4.colorSwatch;
      cResult[22] = tmp6;
      cResult[23] = tmp10;
      tmp7 = tmp10;
    }
    let str = "#000000";
    if (colors.length > 0) {
      str = utils_ColorUtils.int2hex(colors[0]);
      const tmpResult = utils_ColorUtils;
    }
    cResult[16] = colors[0];
    cResult[17] = colors.length;
    cResult[18] = str;
    tmp5 = str;
  }
}) : (function DisplayNameStylesColorSwatch(colors) {
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
});