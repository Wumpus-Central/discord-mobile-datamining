// === Module 10231: ExpressiveGradient ===

// Module 10231 (ExpressiveGradient)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import useToken from "useToken" /* 4262 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let blue = { purple: null, blue: null, green: null, pink: null, "nitro-pink": null, "nitro-green": null };
blue = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END };
blue.purple = blue;
blue = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_BLUE_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_BLUE_END };
blue.blue = blue;
blue.green = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_GREEN_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_GREEN_END };
let obj1 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_GREEN_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_GREEN_END };
blue.pink = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_PINK_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_PINK_END };
let obj2 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_PINK_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_PINK_END };
blue["nitro-pink"] = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END };
let obj3 = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END };
blue["nitro-green"] = { start: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START, end: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END };
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const start2 = { x: 0.5, y: 0 };
const end2 = { x: 0.5, y: 0.5 };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/ExpressiveGradient/native/ExpressiveGradient.native.tsx");

export const ExpressiveGradient = function ExpressiveGradient(color) {
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
  let obj1 = useToken;
  const token1 = obj1.useToken(tmp3.end);
  let obj2 = useToken;
  const token2 = obj2.useToken(backgroundColor);
  let obj3 = _modDef672(token2);
  obj = { style: null, children: null };
  const items = [React4.absoluteFill, style];
  obj.style = items;
  const items1 = [React4.absoluteFill, ];
  let tmp13;
  const alphaResult = obj3.alpha(0);
  if (num > 0) {
    obj = { bottom: `${100 * num}%` };
    tmp13 = obj;
  }
  obj1 = { style: items1, children: null };
  items1[1] = tmp13;
  obj2 = { style: React4.absoluteFillObject, colors: null, start, end, pointerEvents: "none" };
  const items2 = [token, token1];
  obj2.colors = items2;
  const items3 = [hasOwnProperty(LinearGradientDefault, obj2), ];
  obj3 = { style: React4.absoluteFillObject, colors: null, start: start2, end: end2, pointerEvents: "none" };
  const items4 = [obj3.alpha(0).css(), token2];
  obj3.colors = items4;
  items3[1] = hasOwnProperty(LinearGradientDefault, obj3);
  obj1.children = items3;
  const items5 = [timestampProducer(React3, obj1), children];
  obj.children = items5;
  return timestampProducer(React3, obj);
};