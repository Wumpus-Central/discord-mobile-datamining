// discord_app/design/components/ExpressiveGradient/native/ExpressiveGradient.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../../_runtime/metro/00672__.js";
import useToken from "../../../tokens/native/useToken.tsx";
import LinearGradientDefault from "../../../../../_runtime/05072_LinearGradient.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {
  purple: {
    start: nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
    end: nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END,
  },
  blue: null,
  green: null,
  pink: null,
  "nitro-pink": null,
  "nitro-green": null,
};
let obj2 = {
  start: nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
  end: nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END,
};
obj.blue = {
  start: nativeDefault.colors.EXPRESSIVE_GRADIENT_BLUE_START,
  end: nativeDefault.colors.EXPRESSIVE_GRADIENT_BLUE_END,
};
let obj3 = {
  start: nativeDefault.colors.EXPRESSIVE_GRADIENT_BLUE_START,
  end: nativeDefault.colors.EXPRESSIVE_GRADIENT_BLUE_END,
};
obj.green = {
  start: nativeDefault.colors.EXPRESSIVE_GRADIENT_GREEN_START,
  end: nativeDefault.colors.EXPRESSIVE_GRADIENT_GREEN_END,
};
let obj4 = {
  start: nativeDefault.colors.EXPRESSIVE_GRADIENT_GREEN_START,
  end: nativeDefault.colors.EXPRESSIVE_GRADIENT_GREEN_END,
};
obj.pink = {
  start: nativeDefault.colors.EXPRESSIVE_GRADIENT_PINK_START,
  end: nativeDefault.colors.EXPRESSIVE_GRADIENT_PINK_END,
};
let obj5 = {
  start: nativeDefault.colors.EXPRESSIVE_GRADIENT_PINK_START,
  end: nativeDefault.colors.EXPRESSIVE_GRADIENT_PINK_END,
};
obj["nitro-pink"] = {
  start: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START,
  end: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END,
};
let obj6 = {
  start: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START,
  end: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END,
};
obj["nitro-green"] = {
  start: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START,
  end: nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END,
};
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
  const token1 = useToken.useToken(tmp3.end);
  const token2 = useToken.useToken(backgroundColor);
  const obj4 = _modDef672(token2);
  const obj5 = { style: null, children: null };
  const items = [React4.absoluteFill, style];
  obj5.style = items;
  const items1 = [React4.absoluteFill];
  let tmp13;
  const alphaResult = _modDef672(token2).alpha(0);
  if (num > 0) {
    const obj6 = { bottom: `${100 * num}%` };
    tmp13 = obj6;
  }
  const obj7 = { style: items1, children: null };
  items1[1] = tmp13;
  const obj8 = { style: React4.absoluteFillObject, colors: null, start, end, pointerEvents: "none" };
  const items2 = [token, token1];
  obj8.colors = items2;
  const items3 = [hasOwnProperty(LinearGradientDefault, obj8)];
  const obj9 = { style: React4.absoluteFillObject, colors: null, start: start2, end: end2, pointerEvents: "none" };
  const items4 = [_modDef672(token2).alpha(0).css(), token2];
  obj9.colors = items4;
  items3[1] = hasOwnProperty(LinearGradientDefault, obj9);
  obj7.children = items3;
  const items5 = [timestampProducer(React3, obj7), children];
  obj5.children = items5;
  return timestampProducer(React3, obj5);
};
