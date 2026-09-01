// discord_app/design/components/ExpressiveGradient/native/ExpressiveGradient.native.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import nDefault from "../../../../../_runtime/00689_n.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../tokens/native/useToken.tsx";
import LinearGradientDefault from "../../../../../_runtime/04940_LinearGradient.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { purple: null, blue: null, green: null, pink: null, "nitro-pink": null, "nitro-green": null };
obj = {
  start: ThemesDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
  end: ThemesDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END,
};
obj[0] = obj;
obj = {
  start: ThemesDefault.colors.EXPRESSIVE_GRADIENT_BLUE_START,
  end: ThemesDefault.colors.EXPRESSIVE_GRADIENT_BLUE_END,
};
obj[1] = obj;
obj[2] = {
  start: ThemesDefault.colors.EXPRESSIVE_GRADIENT_GREEN_START,
  end: ThemesDefault.colors.EXPRESSIVE_GRADIENT_GREEN_END,
};
let obj1 = {
  start: ThemesDefault.colors.EXPRESSIVE_GRADIENT_GREEN_START,
  end: ThemesDefault.colors.EXPRESSIVE_GRADIENT_GREEN_END,
};
obj[3] = {
  start: ThemesDefault.colors.EXPRESSIVE_GRADIENT_PINK_START,
  end: ThemesDefault.colors.EXPRESSIVE_GRADIENT_PINK_END,
};
let obj2 = {
  start: ThemesDefault.colors.EXPRESSIVE_GRADIENT_PINK_START,
  end: ThemesDefault.colors.EXPRESSIVE_GRADIENT_PINK_END,
};
obj[4] = {
  start: ThemesDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START,
  end: ThemesDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END,
};
let obj3 = {
  start: ThemesDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START,
  end: ThemesDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END,
};
obj[5] = {
  start: ThemesDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START,
  end: ThemesDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END,
};
let closure_8 = { x: 0, y: 0.5 };
let closure_9 = { x: 1, y: 0.5 };
let closure_10 = { x: 0.5, y: 0 };
let closure_11 = { x: 0.5, y: 0.5 };
const obj4 = {
  start: ThemesDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START,
  end: ThemesDefault.colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END,
};
const result = require("set").fileFinishedImporting(
  "design/components/ExpressiveGradient/native/ExpressiveGradient.native.tsx",
);

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
    const tmp = obj;
  } else {
    tmp3 = str;
  }
  obj = map;
  const token = obj.useToken(tmp3.start);
  obj1 = map;
  const token1 = obj1.useToken(tmp3.end);
  let obj2 = map;
  const token2 = obj2.useToken(backgroundColor);
  let obj3 = nDefault(token2);
  obj = { style: items, children: null };
  items = [closure_4.absoluteFill, style];
  const items1 = [closure_4.absoluteFill];
  let tmp13;
  const alphaResult = obj3.alpha(0);
  if (num > 0) {
    obj = { bottom: null };
    obj[0] = `${100 * num}%`;
    tmp13 = obj;
  }
  obj1 = { style: items1, children: null };
  items1[1] = tmp13;
  obj2 = { style: tmp12.absoluteFillObject, colors: items2, start: closure_8, end: closure_9, pointerEvents: "none" };
  items2 = [token, token1];
  const items3 = [callback(LinearGradientDefault, obj2)];
  obj3 = { style: tmp12.absoluteFillObject, colors: items4, start: closure_10, end: closure_11, pointerEvents: "none" };
  items4 = [obj3.alpha(0).css(), token2];
  items3[1] = callback(LinearGradientDefault, obj3);
  obj1[1] = items3;
  const items5 = [closure_6(closure_3, obj1), children];
  obj[1] = items5;
  return closure_6(closure_3, obj);
};
