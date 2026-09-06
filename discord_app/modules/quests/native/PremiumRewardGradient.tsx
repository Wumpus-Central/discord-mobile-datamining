// discord_app/modules/quests/native/PremiumRewardGradient.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import design_shared from "../../../../discord_common/js/packages/design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import _modDef5664 from "../../../../_runtime/metro/05664__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function PremiumRewardFillGradient(arg0) {
  ({ children, style } = arg0);
  const tmp = closure_8();
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  let obj1 = useToken;
  const token1 = obj1.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
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
  obj = { style: null, children: null };
  const items2 = [tmp.wrapper, style];
  obj.style = items2;
  const memo1 = noop.useMemo(() => {
    if (c4) {
      const items = [transparentBlack, opaqueBlack];
      let items1 = items;
    } else {
      items1 = [transparentWhite, opaqueWhite];
    }
    return items1;
  }, items1);
  obj = { style: tmp.fill, colors: memo, start, end, pointerEvents: "none" };
  const items3 = [timestampProducer(LinearGradientDefault, obj), ,];
  obj1 = { style: tmp.fill, colors: memo1, start: start2, end: end2, pointerEvents: "none" };
  items3[1] = timestampProducer(LinearGradientDefault, obj1);
  items3[2] = children;
  obj.children = items3;
  return React5(hasOwnProperty, obj);
}
function PremiumRewardGlowGradient(arg0) {
  ({ children, style } = arg0);
  const tmp = closure_8();
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  let obj1 = useToken;
  const token1 = obj1.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
  let items = [token, token1];
  const memo = noop.useMemo(() => {
    const items = [token, token1];
    return items;
  }, items);
  let obj2 = design_shared;
  const isThemeDarkResult = obj2.isThemeDark(useThemeDefault());
  obj = { style: null, children: null };
  const items1 = [tmp.wrapper, style];
  obj.style = items1;
  const items2 = [tmp.glow];
  let glowLight = !isThemeDarkResult;
  const tmp10 = hasOwnProperty;
  const tmp7 = useThemeDefault();
  const tmp9 = React5;
  if (!isThemeDarkResult) {
    glowLight = tmp.glowLight;
  }
  obj = { style: items2, maskElement: null, children: null };
  items2[1] = glowLight;
  obj1 = { style: React4.absoluteFill, colors: ["transparent", "black"], start: start2, end: end2 };
  obj.maskElement = timestampProducer(LinearGradientDefault, obj1);
  obj2 = { style: React4.absoluteFill, colors: memo, start, end };
  obj.children = timestampProducer(LinearGradientDefault, obj2);
  const items3 = [timestampProducer(_modDef5664, obj), children];
  obj.children = items3;
  return tmp9(tmp10, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(4560);
let closure_8 = createStyles.createStyles({
  wrapper: { position: "relative", overflow: "hidden" },
  fill: { position: "absolute", left: 0, right: 0, bottom: 0, height: "100%" },
  glow: { position: "absolute", left: 0, right: 0, bottom: 0, height: "50%" },
  glowLight: { opacity: 0.5 },
});
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const start2 = { x: 0.5, y: 0 };
const end2 = { x: 0.5, y: 1 };
fn(4409);
const ColorUtils = fn(4409);
const hexOpacityToRgbaResult = ColorUtils.hexOpacityToRgba("#000000", 0);
createStyles = fn(4560);
let closure_13 = createStyles.createStyleProperties({
  transparentBlack: hexOpacityToRgbaResult,
  opaqueBlack: nativeDefault.colors.BLACK,
  transparentWhite: ColorUtils.hexOpacityToRgba("#FFFFFF", 0),
  opaqueWhite: nativeDefault.colors.WHITE,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/PremiumRewardGradient.tsx");

export default function QuestPremiumRewardGradientWrapper(visible) {
  if (!visible.visible) {
    const obj = { style: tmp, children: tmp2 };
    return tmp3(hasOwnProperty, obj);
  }
}
