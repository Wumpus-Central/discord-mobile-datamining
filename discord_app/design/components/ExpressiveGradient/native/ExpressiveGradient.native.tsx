// === Module 9892: ExpressiveGradient ===

// Module 9892 (ExpressiveGradient)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import useToken from "useToken" /* 4580 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
({ View: c3, StyleSheet: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { purple: obj2, blue: obj3, green: obj4, pink: obj5, "nitro-pink": obj6, "nitro-green": obj7 };
obj2 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END };
obj3 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_BLUE_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_BLUE_END };
obj4 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_GREEN_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_GREEN_END };
obj5 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_PINK_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_PINK_END };
obj6 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END };
obj7 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END };
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const start2 = { x: 0.5, y: 0 };
const end2 = { x: 0.5, y: 0.5 };
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((backgroundColor) => {
  let children;
  let color;
  let items2;
  let items3;
  let offsetBottom;
  let style;
  let tmp10;
  let tmp6;
  obj = react2;
  const cResult = obj.c(26);
  ({ color, offsetBottom, children, style } = backgroundColor);
  let num = 0;
  backgroundColor = backgroundColor.backgroundColor;
  if (undefined !== offsetBottom) {
    num = offsetBottom;
  }
  let str = "purple";
  if (undefined !== color) {
    str = color;
  }
  if (typeof str !== "object") {
    let str2 = str;
    const tmp4 = obj;
    if (str == null) {
      str2 = "purple";
    }
    tmp6 = tmp4[str2];
  } else {
    tmp6 = str;
  }
  const tmpResult = useToken;
  const token = tmpResult.useToken(tmp6.start);
  const tmpResult3 = useToken;
  const token1 = tmpResult3.useToken(tmp6.end);
  const tmpResult4 = useToken;
  const token2 = tmpResult4.useToken(backgroundColor);
  if (cResult[0] !== token2) {
    const obj5 = _modDef683(token2);
    const alphaResult = obj5.alpha(0);
    const cssResult = alphaResult.css();
    cResult[0] = token2;
    cResult[1] = cssResult;
    tmp10 = cssResult;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === token1) {
    let tmp13;
    if (cResult[3] === token) {
      tmp13 = cResult[4];
    }
    if (cResult[5] === token2) {
      let tmp14;
      let tmp15;
      let tmp17;
      let tmp19;
      let tmp21;
      let tmp28;
      if (cResult[6] === tmp10) {
        tmp14 = cResult[7];
      }
      if (cResult[8] !== style) {
        const items = [React3.absoluteFill, style];
        cResult[8] = style;
        cResult[9] = items;
        tmp15 = items;
      } else {
        tmp15 = cResult[9];
      }
      if (cResult[10] !== num) {
        let tmp18;
        if (num > 0) {
          tmp18 = { bottom: `${100 * num}%` };
          const obj2 = { bottom: `${100 * num}%` };
        }
        cResult[10] = num;
        cResult[11] = tmp18;
        tmp17 = tmp18;
      } else {
        tmp17 = cResult[11];
      }
      if (cResult[12] !== tmp17) {
        const items1 = [React3.absoluteFill, tmp17];
        cResult[12] = tmp17;
        cResult[13] = items1;
        tmp19 = items1;
      } else {
        tmp19 = cResult[13];
      }
      if (cResult[14] !== tmp13) {
        const obj3 = { style: React3.absoluteFillObject, colors: tmp13, start, end, pointerEvents: "none" };
        const tmp27 = hasOwnProperty(LinearGradientDefault, obj3);
        cResult[14] = tmp13;
        cResult[15] = tmp27;
        tmp21 = tmp27;
      } else {
        tmp21 = cResult[15];
      }
      if (cResult[16] !== tmp14) {
        const obj4 = { style: React3.absoluteFillObject, colors: tmp14, start: start2, end: end2, pointerEvents: "none" };
        const tmp34 = hasOwnProperty(LinearGradientDefault, obj4);
        cResult[16] = tmp14;
        cResult[17] = tmp34;
        tmp28 = tmp34;
      } else {
        tmp28 = cResult[17];
      }
      if (cResult[18] === tmp28) {
        if (cResult[19] === tmp19) {
          let tmp35;
          if (cResult[20] === tmp21) {
            tmp35 = cResult[21];
          }
          if (cResult[22] === children) {
            if (cResult[23] === tmp35) {
              let tmp39;
              if (cResult[24] === tmp15) {
                tmp39 = cResult[25];
              }
              return tmp39;
            }
          }
          const obj6 = { style: tmp15, children: items2 };
          items2 = [tmp35, children];
          const tmp42 = metroRequire(_false, obj6);
          cResult[22] = children;
          cResult[23] = tmp35;
          cResult[24] = tmp15;
          cResult[25] = tmp42;
          tmp39 = tmp42;
        }
      }
      const obj7 = { style: tmp19, children: items3 };
      items3 = [tmp21, tmp28];
      const tmp38 = metroRequire(_false, obj7);
      cResult[18] = tmp28;
      cResult[19] = tmp19;
      cResult[20] = tmp21;
      cResult[21] = tmp38;
      tmp35 = tmp38;
    }
    const items4 = [tmp10, token2];
    cResult[5] = token2;
    cResult[6] = tmp10;
    cResult[7] = items4;
    tmp14 = items4;
  }
  const items5 = [token, token1];
  cResult[2] = token1;
  cResult[3] = token;
  cResult[4] = items5;
  tmp13 = items5;
}) : ((color) => {
  let backgroundColor;
  let children;
  let items;
  let items2;
  let items3;
  let items4;
  let items5;
  let style;
  let tmp3;
  let str = color.color;
  if (str === undefined) {
    str = "purple";
  }
  let num = color.offsetBottom;
  if (num === undefined) {
    num = 0;
  }
  ({ backgroundColor, children, style } = color);
  if (typeof str !== "object") {
    let str2 = str;
    const tmp = obj;
    if (str == null) {
      str2 = "purple";
    }
    tmp3 = tmp[str2];
  } else {
    tmp3 = str;
  }
  obj = useToken;
  const token = obj.useToken(tmp3.start);
  const obj2 = useToken;
  const token1 = obj2.useToken(tmp3.end);
  const obj3 = useToken;
  const token2 = obj3.useToken(backgroundColor);
  const obj5 = { style: items, children: items5 };
  items = [React3.absoluteFill, style];
  const items1 = [React3.absoluteFill, ];
  let tmp13;
  const obj4 = _modDef683(token2);
  const alphaResult = obj4.alpha(0);
  const cssResult = alphaResult.css();
  if (num > 0) {
    tmp13 = { bottom: `${100 * num}%` };
    const obj6 = { bottom: `${100 * num}%` };
  }
  const obj7 = { style: items1, children: items3 };
  items1[1] = tmp13;
  const obj8 = { style: React3.absoluteFillObject, colors: items2, start, end, pointerEvents: "none" };
  items2 = [token, token1];
  items3 = [hasOwnProperty(LinearGradientDefault, obj8), ];
  const obj9 = { style: React3.absoluteFillObject, colors: items4, start: start2, end: end2, pointerEvents: "none" };
  items4 = [cssResult, token2];
  items3[1] = hasOwnProperty(LinearGradientDefault, obj9);
  items5 = [metroRequire(_false, obj7), children];
  return metroRequire(_false, obj5);
});
const result = size.fileFinishedImporting("design/components/ExpressiveGradient/native/ExpressiveGradient.native.tsx");

export const ExpressiveGradient = tmp5;