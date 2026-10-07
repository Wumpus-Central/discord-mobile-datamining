// === Module 9905: ExpressiveGradient ===

// Module 9905 (ExpressiveGradient)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import useToken from "useToken" /* 4586 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { purple: { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END }, blue: null, green: null, pink: null, "nitro-pink": null, "nitro-green": null };
let obj2 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END };
obj.blue = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_BLUE_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_BLUE_END };
let obj3 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_BLUE_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_BLUE_END };
obj.green = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_GREEN_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_GREEN_END };
let obj4 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_GREEN_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_GREEN_END };
obj.pink = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_PINK_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_PINK_END };
let obj5 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_PINK_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_PINK_END };
obj["nitro-pink"] = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END };
let obj6 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END };
obj["nitro-green"] = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END };
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const start2 = { x: 0.5, y: 0 };
const end2 = { x: 0.5, y: 0.5 };
const ReactCompilerGating = fn(558);
let obj7 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/ExpressiveGradient/native/ExpressiveGradient.native.tsx");

export const ExpressiveGradient = ReactCompilerGating.isReactCompilerEnabled() ? ((backgroundColor) => {
  obj = c;
  const cResult = obj.c(26);
  ({ color, offsetBottom, children, style } = backgroundColor);
  let num = 0;
  if (undefined !== offsetBottom) {
    num = offsetBottom;
  }
  let str = "purple";
  if (undefined !== color) {
    str = color;
  }
  if (typeof str !== "object") {
    let str2 = str;
    if (str == null) {
      str2 = "purple";
    }
    let tmp6 = obj[str2];
  } else {
    tmp6 = str;
  }
  const token = useToken.useToken(tmp6.start);
  const tmpResult = useToken;
  const token1 = useToken.useToken(tmp6.end);
  const tmpResult3 = useToken;
  const token2 = useToken.useToken(backgroundColor.backgroundColor);
  if (cResult[0] !== token2) {
    const obj5 = _modDef683(token2);
    const cssResult = _modDef683(token2).alpha(0).css();
    cResult[0] = token2;
    cResult[1] = cssResult;
    let tmp10 = cssResult;
    const alphaResult = _modDef683(token2).alpha(0);
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === token1) {
    if (cResult[3] === token) {
      let tmp13 = cResult[4];
    }
    if (cResult[5] === token2) {
      if (cResult[6] === tmp10) {
        let tmp14 = cResult[7];
      }
      if (cResult[8] !== style) {
        const items = [React4.absoluteFill, style];
        cResult[8] = style;
        cResult[9] = items;
        let tmp15 = items;
      } else {
        tmp15 = cResult[9];
      }
      if (cResult[10] !== num) {
        let tmp18;
        if (num > 0) {
          const obj2 = { bottom: `${100 * num}%` };
          tmp18 = obj2;
        }
        cResult[10] = num;
        cResult[11] = tmp18;
        let tmp17 = tmp18;
      } else {
        tmp17 = cResult[11];
      }
      if (cResult[12] !== tmp17) {
        const items1 = [React4.absoluteFill, tmp17];
        cResult[12] = tmp17;
        cResult[13] = items1;
        let tmp19 = items1;
      } else {
        tmp19 = cResult[13];
      }
      if (cResult[14] !== tmp13) {
        const obj3 = { style: React4.absoluteFillObject, colors: tmp13, start, end, pointerEvents: "none" };
        const tmp27 = hasOwnProperty(LinearGradientDefault, obj3);
        cResult[14] = tmp13;
        cResult[15] = tmp27;
        let tmp21 = tmp27;
      } else {
        tmp21 = cResult[15];
      }
      if (cResult[16] !== tmp14) {
        const obj4 = { style: React4.absoluteFillObject, colors: tmp14, start: start2, end: end2, pointerEvents: "none" };
        const tmp34 = hasOwnProperty(LinearGradientDefault, obj4);
        cResult[16] = tmp14;
        cResult[17] = tmp34;
        let tmp28 = tmp34;
      } else {
        tmp28 = cResult[17];
      }
      if (cResult[18] === tmp28) {
        if (cResult[19] === tmp19) {
          if (cResult[20] === tmp21) {
            let tmp35 = cResult[21];
          }
          if (cResult[22] === children) {
            if (cResult[23] === tmp35) {
              if (cResult[24] === tmp15) {
                let tmp39 = cResult[25];
              }
              return tmp39;
            }
          }
          const obj6 = { style: tmp15, children: null };
          const items2 = [tmp35, children];
          obj6.children = items2;
          const tmp42 = timestampProducer(React3, obj6);
          cResult[22] = children;
          cResult[23] = tmp35;
          cResult[24] = tmp15;
          cResult[25] = tmp42;
          tmp39 = tmp42;
        }
      }
      const obj7 = { style: tmp19, children: null };
      const items3 = [tmp21, tmp28];
      obj7.children = items3;
      const tmp38 = timestampProducer(React3, obj7);
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
  const tmpResult4 = useToken;
}) : ((color) => {
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
    if (str == null) {
      str2 = "purple";
    }
    let tmp3 = obj[str2];
  } else {
    tmp3 = str;
  }
  obj = useToken;
  const token = obj.useToken(tmp3.start);
  const token1 = useToken.useToken(tmp3.end);
  const token2 = useToken.useToken(backgroundColor);
  const obj4 = _modDef683(token2);
  const obj5 = { style: null, children: null };
  const items = [React4.absoluteFill, style];
  obj5.style = items;
  const items1 = [React4.absoluteFill, ];
  let tmp13;
  const alphaResult = _modDef683(token2).alpha(0);
  if (num > 0) {
    const obj6 = { bottom: `${100 * num}%` };
    tmp13 = obj6;
  }
  const obj7 = { style: items1, children: null };
  items1[1] = tmp13;
  const obj8 = { style: React4.absoluteFillObject, colors: null, start, end, pointerEvents: "none" };
  const items2 = [token, token1];
  obj8.colors = items2;
  const items3 = [hasOwnProperty(LinearGradientDefault, obj8), ];
  const obj9 = { style: React4.absoluteFillObject, colors: null, start: start2, end: end2, pointerEvents: "none" };
  const items4 = [_modDef683(token2).alpha(0).css(), token2];
  obj9.colors = items4;
  items3[1] = hasOwnProperty(LinearGradientDefault, obj9);
  obj7.children = items3;
  const items5 = [timestampProducer(React3, obj7), children];
  obj5.children = items5;
  return timestampProducer(React3, obj5);
});