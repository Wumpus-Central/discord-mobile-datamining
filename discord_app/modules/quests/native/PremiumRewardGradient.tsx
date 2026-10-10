// === Module 15418: PremiumRewardGradient ===

// Module 15418 (PremiumRewardGradient)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4818 */;
import design_shared from "design/shared" /* 4970 */;
import useThemeDefault from "useTheme" /* 5031 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import _modDef6242 from "module_6242" /* 6242 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(5092);
let closure_8 = createStyles.createStyles({ wrapper: { position: "relative", overflow: "hidden" }, fill: { position: "absolute", left: 0, right: 0, bottom: 0, height: "100%" }, glow: { position: "absolute", left: 0, right: 0, bottom: 0, height: "50%" }, glowLight: { opacity: 0.5 } });
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const start2 = { x: 0.5, y: 0 };
const end2 = { x: 0.5, y: 1 };
fn(4967);
const ColorUtils = fn(4967);
const hexOpacityToRgbaResult = ColorUtils.hexOpacityToRgba("#000000", 0);
createStyles = fn(5092);
let closure_13 = createStyles.createStyleProperties({ transparentBlack: hexOpacityToRgbaResult, opaqueBlack: nativeDefault.colors.BLACK, transparentWhite: ColorUtils.hexOpacityToRgba("#FFFFFF", 0), opaqueWhite: nativeDefault.colors.WHITE });
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGradientColors() {
  const cResult = c.c(3);
  const token = useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  const token1 = useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
  if (cResult[0] === token1) {
    if (cResult[1] === token) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const items = [token, token1];
  cResult[0] = token1;
  cResult[1] = token;
  cResult[2] = items;
  tmp4 = items;
}) : (function useGradientColors() {
  const token = useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  const token1 = useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
  let items = [token, token1];
  return noop.useMemo(() => {
    const items = [token, token1];
    return items;
  }, items);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumRewardFillGradient(arg0) {
  const cResult = c.c(22);
  ({ children, style } = arg0);
  const tmp4 = closure_8();
  const tmp5 = closure_14();
  ({ transparentBlack, opaqueBlack, transparentWhite, opaqueWhite } = closure_13());
  const tmp8 = useThemeDefault();
  if (cResult[0] !== tmp8) {
    const isThemeDarkResult = design_shared.isThemeDark(tmp8);
    cResult[0] = tmp8;
    cResult[1] = isThemeDarkResult;
    let tmp9 = isThemeDarkResult;
    const tmpResult = design_shared;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === tmp9) {
    if (cResult[3] === opaqueBlack) {
      if (cResult[4] === opaqueWhite) {
        if (cResult[5] === transparentBlack) {
          if (cResult[6] === transparentWhite) {
            if (cResult[8] === style) {
              if (cResult[9] === tmp4.wrapper) {
                let tmp13 = cResult[10];
              }
              if (cResult[11] === tmp5) {
                if (cResult[12] === tmp4.fill) {
                  let tmp14 = cResult[13];
                }
                if (cResult[14] === tmp4.fill) {
                  if (cResult[15] === tmp11) {
                    let tmp19 = cResult[16];
                  }
                  if (cResult[17] === children) {
                    if (cResult[18] === tmp13) {
                      if (cResult[19] === tmp14) {
                        if (cResult[20] === tmp19) {
                          let tmp24 = cResult[21];
                        }
                        return tmp24;
                      }
                    }
                  }
                  const obj2 = { style: tmp13, children: null };
                  const items = [tmp14, tmp19, children];
                  obj2.children = items;
                  const tmp27 = React5(hasOwnProperty, obj2);
                  cResult[17] = children;
                  cResult[18] = tmp13;
                  cResult[19] = tmp14;
                  cResult[20] = tmp19;
                  cResult[21] = tmp27;
                  tmp24 = tmp27;
                }
                const obj3 = { style: tmp4.fill, colors: tmp11, start: start2, end: end2, pointerEvents: "none" };
                const tmp23 = timestampProducer(LinearGradientDefault, obj3);
                cResult[14] = tmp4.fill;
                cResult[15] = tmp11;
                cResult[16] = tmp23;
                tmp19 = tmp23;
              }
              const obj4 = { style: tmp4.fill, colors: tmp5, start, end, pointerEvents: "none" };
              const tmp18 = timestampProducer(LinearGradientDefault, obj4);
              cResult[11] = tmp5;
              cResult[12] = tmp4.fill;
              cResult[13] = tmp18;
              tmp14 = tmp18;
            }
            const items1 = [tmp4.wrapper, style];
            cResult[8] = style;
            cResult[9] = tmp4.wrapper;
            cResult[10] = items1;
            tmp13 = items1;
          }
        }
      }
    }
  }
  const items2 = [, ];
  if (tmp9) {
    items2[0] = transparentBlack;
    items2[1] = opaqueBlack;
    let tmp12 = items2;
  } else {
    items2[0] = transparentWhite;
    items2[1] = opaqueWhite;
    tmp12 = items2;
  }
  cResult[2] = tmp9;
  cResult[3] = opaqueBlack;
  cResult[4] = opaqueWhite;
  cResult[5] = transparentBlack;
  cResult[6] = transparentWhite;
  cResult[7] = tmp12;
  const tmp6 = closure_13();
}) : (function PremiumRewardFillGradient(arg0) {
  ({ children, style } = arg0);
  const tmp = closure_8();
  const tmp3 = closure_13();
  const transparentBlack = tmp3.transparentBlack;
  const opaqueBlack = tmp3.opaqueBlack;
  const transparentWhite = tmp3.transparentWhite;
  const opaqueWhite = tmp3.opaqueWhite;
  const tmp2 = closure_14();
  const tmp4 = useThemeDefault();
  const isThemeDarkResult = design_shared.isThemeDark(tmp4);
  c4 = isThemeDarkResult;
  let items = [transparentBlack, opaqueBlack, transparentWhite, opaqueWhite, isThemeDarkResult];
  const obj2 = { style: null, children: null };
  let items1 = [tmp.wrapper, style];
  obj2.style = items1;
  const memo = noop.useMemo(() => {
    if (c4) {
      const items = [transparentBlack, opaqueBlack];
      let items1 = items;
    } else {
      items1 = [transparentWhite, opaqueWhite];
    }
    return items1;
  }, items);
  const items2 = [timestampProducer(LinearGradientDefault, { style: tmp.fill, colors: tmp2, start, end, pointerEvents: "none" }), timestampProducer(LinearGradientDefault, { style: tmp.fill, colors: memo, start: start2, end: end2, pointerEvents: "none" }), children];
  obj2.children = items2;
  return React5(hasOwnProperty, obj2);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumRewardGlowGradient(arg0) {
  const cResult = c.c(18);
  ({ children, style } = arg0);
  const tmp4 = closure_8();
  const tmp5 = closure_14();
  const tmp7 = useThemeDefault();
  if (cResult[0] !== tmp7) {
    const isThemeDarkResult = design_shared.isThemeDark(tmp7);
    cResult[0] = tmp7;
    cResult[1] = isThemeDarkResult;
    let tmp8 = isThemeDarkResult;
    const tmpResult = design_shared;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === style) {
    if (cResult[3] === tmp4.wrapper) {
      let tmp10 = cResult[4];
    }
    let glowLight = !tmp8;
    if (!tmp8) {
      glowLight = tmp4.glowLight;
    }
    if (cResult[5] === tmp4.glow) {
      if (cResult[6] === glowLight) {
        let tmp11 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { style: React4.absoluteFill, colors: ["transparent", "black"], start: start2, end: end2 };
        const tmp18 = timestampProducer(LinearGradientDefault, obj2);
        cResult[8] = tmp18;
        let tmp13 = tmp18;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] !== tmp5) {
        const obj3 = { style: React4.absoluteFill, colors: tmp5, start, end };
        const tmp24 = timestampProducer(LinearGradientDefault, obj3);
        cResult[9] = tmp5;
        cResult[10] = tmp24;
        let tmp19 = tmp24;
      } else {
        tmp19 = cResult[10];
      }
      if (cResult[11] === tmp11) {
        if (cResult[12] === tmp19) {
          let tmp25 = cResult[13];
        }
        if (cResult[14] === children) {
          if (cResult[15] === tmp10) {
            if (cResult[16] === tmp25) {
              let tmp28 = cResult[17];
            }
            return tmp28;
          }
        }
        const obj4 = { style: tmp10, children: null };
        const items = [tmp25, children];
        obj4.children = items;
        const tmp31 = React5(hasOwnProperty, obj4);
        cResult[14] = children;
        cResult[15] = tmp10;
        cResult[16] = tmp25;
        cResult[17] = tmp31;
        tmp28 = tmp31;
      }
      const obj5 = { style: tmp11, maskElement: tmp13, children: tmp19 };
      const tmp27 = timestampProducer(_modDef6242, obj5);
      cResult[11] = tmp11;
      cResult[12] = tmp19;
      cResult[13] = tmp27;
      tmp25 = tmp27;
    }
    const items1 = [tmp4.glow, glowLight];
    cResult[5] = tmp4.glow;
    cResult[6] = glowLight;
    cResult[7] = items1;
    tmp11 = items1;
  }
  const items2 = [tmp4.wrapper, style];
  cResult[2] = style;
  cResult[3] = tmp4.wrapper;
  cResult[4] = items2;
  tmp10 = items2;
}) : (function PremiumRewardGlowGradient(arg0) {
  ({ children, style } = arg0);
  const tmp = closure_8();
  const tmp2 = closure_14();
  const tmp5 = useThemeDefault();
  const isThemeDarkResult = design_shared.isThemeDark(tmp5);
  const obj2 = { style: null, children: null };
  const items = [tmp.wrapper, style];
  obj2.style = items;
  const items1 = [tmp.glow, ];
  let glowLight = !isThemeDarkResult;
  if (!isThemeDarkResult) {
    glowLight = tmp.glowLight;
  }
  const obj3 = { style: items1, maskElement: timestampProducer(LinearGradientDefault, { style: React4.absoluteFill, colors: ["transparent", "black"], start: start2, end: end2 }), children: timestampProducer(LinearGradientDefault, { style: React4.absoluteFill, colors: tmp2, start, end }) };
  items1[1] = glowLight;
  const items2 = [timestampProducer(_modDef6242, obj3), children];
  obj2.children = items2;
  return React5(hasOwnProperty, obj2);
});
ReactCompilerGating = fn(558);
const hexOpacityToRgbaResult1 = ColorUtils.hexOpacityToRgba("#FFFFFF", 0);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/PremiumRewardGradient.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function QuestPremiumRewardGradientWrapper(visible) {
  const cResult = c.c(9);
  ({ style, children } = visible);
  if (visible.visible) {
    if (!visible.glow) {
      if (cResult[6] === children) {
      }
      const obj2 = { style, children };
      const tmp9 = timestampProducer(closure_15, obj2);
      cResult[6] = children;
      cResult[7] = style;
      cResult[8] = tmp9;
    }
    if (cResult[3] === children) {
    }
    const obj3 = { style, children };
    const tmp13 = timestampProducer(closure_16, obj3);
    cResult[3] = children;
    cResult[4] = style;
    cResult[5] = tmp13;
  } else {
    if (cResult[0] === children) {
      if (cResult[1] === style) {
        let tmp2 = cResult[2];
      }
      return tmp2;
    }
    const obj4 = { style, children };
    const tmp5 = timestampProducer(hasOwnProperty, obj4);
    cResult[0] = children;
    cResult[1] = style;
    cResult[2] = tmp5;
    tmp2 = tmp5;
  }
}) : (function QuestPremiumRewardGradientWrapper(visible) {
  if (!visible.visible) {
    const obj = { style: tmp, children: tmp2 };
    return tmp3(hasOwnProperty, obj);
  }
});