// === Module 14613: PremiumRewardFillGradient ===

// Module 14613 (PremiumRewardFillGradient)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;
import hexToRgba from "hexToRgba" /* 4228 */;

const require = arg1;
function PremiumRewardFillGradient(arg0) {
  let transparentBlack;
  let opaqueBlack;
  let transparentWhite;
  let opaqueWhite;
  c4 = undefined;
  ({ children, style } = arg0);
  const tmp = callback3();
  transparentBlack = undefined;
  opaqueBlack = undefined;
  let obj = transparentBlack(transparentWhite[6]);
  const token = obj.useToken(opaqueBlack(transparentWhite[5]).colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  transparentBlack = token;
  obj1 = transparentBlack(transparentWhite[6]);
  const token1 = obj1.useToken(opaqueBlack(transparentWhite[5]).colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
  opaqueBlack = token1;
  let items = [token, token1];
  const memo = opaqueWhite.useMemo(() => {
    const items = [token, token1];
    return items;
  }, items);
  const tmp5 = callback4();
  transparentBlack = tmp5.transparentBlack;
  opaqueBlack = tmp5.opaqueBlack;
  transparentWhite = tmp5.transparentWhite;
  opaqueWhite = tmp5.opaqueWhite;
  const tmp6 = opaqueBlack(transparentWhite[7])();
  const isThemeDarkResult = transparentBlack(transparentWhite[8]).isThemeDark(tmp6);
  c4 = isThemeDarkResult;
  let items1 = [transparentBlack, opaqueBlack, transparentWhite, opaqueWhite, isThemeDarkResult];
  obj = { style: items2, children: null };
  items2 = [tmp.wrapper, style];
  const memo1 = opaqueWhite.useMemo(() => {
    if (c4) {
      const items = [transparentBlack, opaqueBlack];
      let items1 = items;
    } else {
      items1 = [transparentWhite, opaqueWhite];
    }
    return items1;
  }, items1);
  obj = { style: tmp.fill, colors: memo, start: closure_9, end: closure_10, pointerEvents: "none" };
  const items3 = [callback(opaqueBlack(transparentWhite[9]), obj), , ];
  obj1 = { style: tmp.fill, colors: memo1, start: closure_11, end: closure_12, pointerEvents: "none" };
  items3[1] = callback(opaqueBlack(transparentWhite[9]), obj1);
  items3[2] = children;
  obj[1] = items3;
  return callback2(closure_5, obj);
}
function PremiumRewardGlowGradient(arg0) {
  ({ children, style } = arg0);
  const tmp = callback3();
  let token;
  let token1;
  let obj = token(4101);
  token = obj.useToken(token1(712).colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  obj1 = token(4101);
  token1 = obj1.useToken(token1(712).colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
  let items = [token, token1];
  const memo = React.useMemo(() => {
    const items = [token, token1];
    return items;
  }, items);
  let obj2 = token(1350);
  const isThemeDarkResult = obj2.isThemeDark(token1(4315)());
  obj = { style: items1, children: null };
  items1 = [tmp.wrapper, style];
  const items2 = [tmp.glow, ];
  let glowLight = !isThemeDarkResult;
  const tmp10 = closure_5;
  const tmp7 = token1(4315)();
  const tmp9 = closure_7;
  if (!isThemeDarkResult) {
    glowLight = tmp.glowLight;
  }
  obj = { style: items2, maskElement: tmp11(tmp3(4826), obj1), children: tmp11(tmp3(4826), obj2) };
  items2[1] = glowLight;
  obj1 = { style: closure_4.absoluteFill, colors: ["transparent", "black"], start: closure_11, end: closure_12 };
  obj2 = { style: closure_4.absoluteFill, colors: memo, start: closure_9, end: closure_10 };
  const items3 = [closure_6(token1(5416), obj), children];
  obj[1] = items3;
  return tmp9(tmp10, obj);
}
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ wrapper: { position: "relative", overflow: "hidden" }, fill: { position: "absolute", left: 0, right: 0, bottom: 0, height: "100%" }, glow: { position: "absolute", left: 0, right: 0, bottom: 0, height: "50%" }, glowLight: { opacity: 0.5 } });
let closure_9 = { x: 0, y: 0.5 };
let closure_10 = { x: 1, y: 0.5 };
let closure_11 = { x: 0.5, y: 0 };
let closure_12 = { x: 0.5, y: 1 };
const hexOpacityToRgbaResult = hexToRgba.hexOpacityToRgba("#000000", 0);
let closure_13 = createCacheKey.createStyleProperties({ transparentBlack: hexOpacityToRgbaResult, opaqueBlack: ThemesDefault.colors.BLACK, transparentWhite: hexToRgba.hexOpacityToRgba("#FFFFFF", 0), opaqueWhite: ThemesDefault.colors.WHITE });
const hexOpacityToRgbaResult1 = hexToRgba.hexOpacityToRgba("#FFFFFF", 0);
const result = require("set").fileFinishedImporting("modules/quests/native/PremiumRewardGradient.tsx");

export default function QuestPremiumRewardGradientWrapper(visible) {
  if (!visible.visible) {
    const obj = { style: null, children: null };
    obj[0] = tmp;
    obj[1] = tmp2;
    return tmp3(closure_5, obj);
  }
};