// === Module 15245: PremiumRewardGradient ===

// Module 15245 (PremiumRewardGradient)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4338 */;
import design_shared from "design/shared" /* 4489 */;
import useThemeDefault from "useTheme" /* 4571 */;
import LinearGradientDefault from "LinearGradient" /* 5068 */;
import _modDef5745 from "module_5745" /* 5745 */;
import noop from "module_19" /* 19 */;

require = fn;
function PremiumRewardFillGradient(arg0) {
  ({ children, style } = arg0);
  const tmp = closure_8();
  const token = useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  const token1 = useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
  let items = [token, token1];
  const memo = noop.useMemo(() => {
    const items = [token, token1];
    return items;
  }, items);
  const tmp5 = closure_13();
  const transparentBlack = tmp5.transparentBlack;
  const opaqueBlack = tmp5.opaqueBlack;
  const transparentWhite = tmp5.transparentWhite;
  const opaqueWhite = tmp5.opaqueWhite;
  const tmp6 = useThemeDefault();
  const isThemeDarkResult = design_shared.isThemeDark(tmp6);
  c4 = isThemeDarkResult;
  let items1 = [transparentBlack, opaqueBlack, transparentWhite, opaqueWhite, isThemeDarkResult];
  const obj4 = { style: null, children: null };
  const items2 = [tmp.wrapper, style];
  obj4.style = items2;
  const memo1 = noop.useMemo(() => {
    if (c4) {
      const items = [transparentBlack, opaqueBlack];
      let items1 = items;
    } else {
      items1 = [transparentWhite, opaqueWhite];
    }
    return items1;
  }, items1);
  const items3 = [timestampProducer(LinearGradientDefault, { style: tmp.fill, colors: memo, start, end, pointerEvents: "none" }), timestampProducer(LinearGradientDefault, { style: tmp.fill, colors: memo1, start: start2, end: end2, pointerEvents: "none" }), children];
  obj4.children = items3;
  return React5(hasOwnProperty, obj4);
}
function PremiumRewardGlowGradient(arg0) {
  ({ children, style } = arg0);
  const tmp = closure_8();
  const token = useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  const token1 = useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
  let items = [token, token1];
  const memo = noop.useMemo(() => {
    const items = [token, token1];
    return items;
  }, items);
  const tmp7 = useThemeDefault();
  const isThemeDarkResult = design_shared.isThemeDark(tmp7);
  const obj4 = { style: null, children: null };
  const items1 = [tmp.wrapper, style];
  obj4.style = items1;
  const items2 = [tmp.glow, ];
  let glowLight = !isThemeDarkResult;
  if (!isThemeDarkResult) {
    glowLight = tmp.glowLight;
  }
  const obj5 = { style: items2, maskElement: timestampProducer(LinearGradientDefault, { style: React4.absoluteFill, colors: ["transparent", "black"], start: start2, end: end2 }), children: timestampProducer(LinearGradientDefault, { style: React4.absoluteFill, colors: memo, start, end }) };
  items2[1] = glowLight;
  const items3 = [timestampProducer(_modDef5745, obj5), children];
  obj4.children = items3;
  return React5(hasOwnProperty, obj4);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(4636);
let closure_8 = createStyles.createStyles({ wrapper: { position: "relative", overflow: "hidden" }, fill: { position: "absolute", left: 0, right: 0, bottom: 0, height: "100%" }, glow: { position: "absolute", left: 0, right: 0, bottom: 0, height: "50%" }, glowLight: { opacity: 0.5 } });
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const start2 = { x: 0.5, y: 0 };
const end2 = { x: 0.5, y: 1 };
fn(4486);
const ColorUtils = fn(4486);
const hexOpacityToRgbaResult = ColorUtils.hexOpacityToRgba("#000000", 0);
createStyles = fn(4636);
let closure_13 = createStyles.createStyleProperties({ transparentBlack: hexOpacityToRgbaResult, opaqueBlack: nativeDefault.colors.BLACK, transparentWhite: ColorUtils.hexOpacityToRgba("#FFFFFF", 0), opaqueWhite: nativeDefault.colors.WHITE });
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/PremiumRewardGradient.tsx");

export default function QuestPremiumRewardGradientWrapper(visible) {
  if (!visible.visible) {
    const obj = { style: tmp, children: tmp2 };
    return tmp3(hasOwnProperty, obj);
  }
};