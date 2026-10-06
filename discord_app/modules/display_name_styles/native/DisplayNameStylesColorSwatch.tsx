// === Module 14459: DisplayNameStylesColorSwatch ===

// Module 14459 (DisplayNameStylesColorSwatch)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1396 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import GummyStripesDefault from "GummyStripes" /* 14460 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let colors;

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { colorSwatch: size, gummySwatch: { flexDirection: "row", overflow: "hidden" } };
size = { width: 24, height: 24, borderRadius: nativeDefault.radii.xs };
let closure_5 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((colors) => {
  let obj = react;
  const cResult = obj.c(24);
  colors = colors.colors;
  const effectId = colors.effectId;
  const tmp4 = closure_5();
  if (effectId === DisplayNameEffect.DisplayNameEffect.GUMMY) {
    if (colors.length > 0) {
      if (cResult[0] === tmp4.colorSwatch) {
        let tmp22;
        let tmp23;
        if (cResult[1] === tmp4.gummySwatch) {
          tmp22 = cResult[2];
        }
        if (cResult[3] !== colors) {
          const tmp26 = jsx(GummyStripesDefault, { colors });
          cResult[3] = colors;
          cResult[4] = tmp26;
          tmp23 = tmp26;
        } else {
          tmp23 = cResult[4];
        }
        if (cResult[5] === tmp22) {
          let tmp27;
          if (cResult[6] === tmp23) {
            tmp27 = cResult[7];
          }
          return tmp27;
        }
        const tmp30 = <View style={tmp22}>{tmp23}</View>;
        cResult[5] = tmp22;
        cResult[6] = tmp23;
        cResult[7] = tmp30;
        tmp27 = tmp30;
      }
      const items = [, ];
      ({ colorSwatch: arr3[0], gummySwatch: arr3[1], colorSwatch: tmp3[0] } = tmp4);
      cResult[1] = tmp4.gummySwatch;
      cResult[2] = items;
      tmp22 = items;
    }
  }
  if (colors.length >= 2) {
    let tmp11;
    let tmp17;
    let tmp16;
    if (cResult[8] !== colors) {
      let tmp13;
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function _(color) {
          const obj = utils_ColorUtils;
          return obj.int2hex(color);
        };
        cResult[10] = fn;
        tmp13 = fn;
      } else {
        tmp13 = cResult[10];
      }
      const mapped = colors.map(tmp13);
      cResult[8] = colors;
      cResult[9] = mapped;
      tmp11 = mapped;
    } else {
      tmp11 = cResult[9];
    }
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const point = { x: 0, y: 0 };
      const point1 = { x: 1, y: 0 };
      cResult[11] = point;
      cResult[12] = point1;
      tmp17 = point1;
      tmp16 = point;
    } else {
      tmp16 = cResult[11];
      tmp17 = cResult[12];
    }
    if (cResult[13] === tmp4.colorSwatch) {
      let tmp18;
      if (cResult[14] === tmp11) {
        tmp18 = cResult[15];
      }
      return tmp18;
    }
    const tmp21 = jsx(LinearGradientDefault, { colors: tmp11, start: tmp16, end: tmp17, style: tmp4.colorSwatch });
    cResult[13] = tmp4.colorSwatch;
    cResult[14] = tmp11;
    cResult[15] = tmp21;
    tmp18 = tmp21;
  } else {
    if (cResult[16] === colors[0]) {
      let tmp5;
      let tmp6;
      if (cResult[17] === colors.length) {
        tmp5 = cResult[18];
      }
      if (cResult[19] !== tmp5) {
        const obj5 = { backgroundColor: tmp5 };
        cResult[19] = tmp5;
        cResult[20] = obj5;
        tmp6 = obj5;
      } else {
        tmp6 = cResult[20];
      }
      if (cResult[21] === tmp4.colorSwatch) {
        let tmp7;
        if (cResult[22] === tmp6) {
          tmp7 = cResult[23];
        }
        return tmp7;
      }
      const items1 = [tmp4.colorSwatch, tmp6];
      const tmp10 = <View style={items1} />;
      cResult[21] = tmp4.colorSwatch;
      cResult[22] = tmp6;
      cResult[23] = tmp10;
      tmp7 = tmp10;
    }
    let str = "#000000";
    if (colors.length > 0) {
      const tmpResult = utils_ColorUtils;
      str = tmpResult.int2hex(colors[0]);
    }
    cResult[16] = colors[0];
    cResult[17] = colors.length;
    cResult[18] = str;
    tmp5 = str;
  }
}) : ((colors) => {
  colors = colors.colors;
  const effectId = colors.effectId;
  const tmp = closure_5();
  if (effectId === DisplayNameEffect.DisplayNameEffect.GUMMY) {
    if (colors.length > 0) {
      const items = [, ];
      ({ colorSwatch: arr3[0], gummySwatch: arr3[1] } = tmp);
      return <View style={items}>{null}</View>;
    }
  }
  if (colors.length >= 2) {
    LinearGradientDefault;
    return <tmp8 colors={colors.map((item) => {
      const obj = utils_ColorUtils;
      return obj.int2hex(item);
    })} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={tmp.colorSwatch} />;
  } else {
    let str = "#000000";
    if (colors.length > 0) {
      const tmp2Result = utils_ColorUtils;
      str = tmp2Result.int2hex(colors[0]);
    }
    const items1 = [tmp.colorSwatch, ];
    const obj5 = { backgroundColor: str };
    items1[1] = obj5;
    return <View style={items1} />;
  }
});
size = size_mod;
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorSwatch.tsx");

export default tmp2;