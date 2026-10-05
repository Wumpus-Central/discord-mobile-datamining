// === Module 14966: PremiumRewardGradient ===

// Module 14966 (PremiumRewardGradient)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4580 */;
import design_shared from "design/shared" /* 4730 */;
import useThemeDefault from "useTheme" /* 4791 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import _modDef6052 from "module_6052" /* 6052 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ColorUtils_mod from "ColorUtils" /* 4727 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles({ wrapper: { position: "relative", overflow: "hidden" }, fill: { position: "absolute", left: 0, right: 0, bottom: 0, height: "100%" }, glow: { position: "absolute", left: 0, right: 0, bottom: 0, height: "50%" }, glowLight: { opacity: 0.5 } });
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const start2 = { x: 0.5, y: 0 };
const end2 = { x: 0.5, y: 1 };
let ColorUtils = ColorUtils_mod;
const hexOpacityToRgbaResult = ColorUtils.hexOpacityToRgba("#000000", 0);
const BLACK = nativeDefault.colors.BLACK;
ColorUtils = ColorUtils_mod;
const hexOpacityToRgbaResult1 = ColorUtils.hexOpacityToRgba("#FFFFFF", 0);
const WHITE = nativeDefault.colors.WHITE;
createStyles = createStyles_mod;
let closure_13 = createStyles.createStyleProperties({ transparentBlack: hexOpacityToRgbaResult, opaqueBlack: BLACK, transparentWhite: hexOpacityToRgbaResult1, opaqueWhite: WHITE });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react2;
  const cResult = obj.c(3);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
  if (cResult[0] === token1) {
    let tmp4;
    if (cResult[1] === token) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const items = [token, token1];
  cResult[0] = token1;
  cResult[1] = token;
  cResult[2] = items;
  tmp4 = items;
}) : (() => {
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  const obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
  let items = [token, token1];
  return react.useMemo(() => {
    const items = [token, token1];
    return items;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let items;
  let opaqueBlack;
  let opaqueWhite;
  let style;
  let tmp12;
  let tmp9;
  let transparentBlack;
  let transparentWhite;
  const obj = react2;
  const cResult = obj.c(22);
  ({ children, style } = arg0);
  const tmp4 = closure_8();
  const tmp5 = closure_14();
  ({ transparentBlack, opaqueBlack, transparentWhite, opaqueWhite } = closure_13());
  closure_13();
  const tmp8 = useThemeDefault();
  if (cResult[0] !== tmp8) {
    const tmpResult = design_shared;
    const isThemeDarkResult = tmpResult.isThemeDark(tmp8);
    cResult[0] = tmp8;
    cResult[1] = isThemeDarkResult;
    tmp9 = isThemeDarkResult;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === tmp9) {
    if (cResult[3] === opaqueBlack) {
      if (cResult[4] === opaqueWhite) {
        if (cResult[5] === transparentBlack) {
          let tmp11;
          if (cResult[6] === transparentWhite) {
            tmp11 = cResult[7];
          }
          if (cResult[8] === style) {
            let tmp13;
            if (cResult[9] === tmp4.wrapper) {
              tmp13 = cResult[10];
            }
            if (cResult[11] === tmp5) {
              let tmp14;
              if (cResult[12] === tmp4.fill) {
                tmp14 = cResult[13];
              }
              if (cResult[14] === tmp4.fill) {
                let tmp19;
                if (cResult[15] === tmp11) {
                  tmp19 = cResult[16];
                }
                if (cResult[17] === children) {
                  if (cResult[18] === tmp13) {
                    if (cResult[19] === tmp14) {
                      let tmp24;
                      if (cResult[20] === tmp19) {
                        tmp24 = cResult[21];
                      }
                      return tmp24;
                    }
                  }
                }
                const obj2 = { style: tmp13, children: items };
                items = [tmp14, tmp19, children];
                const tmp27 = metroImportDefault(hasOwnProperty, obj2);
                cResult[17] = children;
                cResult[18] = tmp13;
                cResult[19] = tmp14;
                cResult[20] = tmp19;
                cResult[21] = tmp27;
                tmp24 = tmp27;
              }
              const obj3 = { style: tmp4.fill, colors: tmp11, start: start2, end: end2, pointerEvents: "none" };
              const tmp23 = metroRequire(LinearGradientDefault, obj3);
              cResult[14] = tmp4.fill;
              cResult[15] = tmp11;
              cResult[16] = tmp23;
              tmp19 = tmp23;
            }
            const obj4 = { style: tmp4.fill, colors: tmp5, start, end, pointerEvents: "none" };
            const tmp18 = metroRequire(LinearGradientDefault, obj4);
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
  const items2 = [, ];
  if (tmp9) {
    items2[0] = transparentBlack;
    items2[1] = opaqueBlack;
    tmp12 = items2;
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
  tmp11 = tmp12;
}) : ((arg0) => {
  let children;
  let items1;
  let items2;
  let style;
  ({ children, style } = arg0);
  const tmp = closure_8();
  const tmp2 = closure_14();
  const tmp3 = closure_13();
  const transparentBlack = tmp3.transparentBlack;
  const opaqueBlack = tmp3.opaqueBlack;
  const transparentWhite = tmp3.transparentWhite;
  const opaqueWhite = tmp3.opaqueWhite;
  const tmp4 = useThemeDefault();
  const obj = design_shared;
  const isThemeDarkResult = obj.isThemeDark(tmp4);
  let c4 = isThemeDarkResult;
  let items = [transparentBlack, opaqueBlack, transparentWhite, opaqueWhite, isThemeDarkResult];
  const obj2 = { style: items1, children: items2 };
  items1 = [tmp.wrapper, style];
  const memo = react.useMemo(() => {
    let items1;
    if (c4) {
      const items = [transparentBlack, opaqueBlack];
      items1 = items;
    } else {
      items1 = [transparentWhite, opaqueWhite];
    }
    return items1;
  }, items);
  items2 = [, , ];
  const obj3 = { style: tmp.fill, colors: tmp2, start, end, pointerEvents: "none" };
  items2[0] = metroRequire(LinearGradientDefault, obj3);
  const obj4 = { style: tmp.fill, colors: memo, start: start2, end: end2, pointerEvents: "none" };
  items2[1] = metroRequire(LinearGradientDefault, obj4);
  items2[2] = children;
  return metroImportDefault(hasOwnProperty, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let items;
  let style;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(18);
  ({ children, style } = arg0);
  const tmp4 = closure_8();
  const tmp5 = closure_14();
  const tmp7 = useThemeDefault();
  if (cResult[0] !== tmp7) {
    const tmpResult = design_shared;
    const isThemeDarkResult = tmpResult.isThemeDark(tmp7);
    cResult[0] = tmp7;
    cResult[1] = isThemeDarkResult;
    tmp8 = isThemeDarkResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === style) {
    let tmp10;
    if (cResult[3] === tmp4.wrapper) {
      tmp10 = cResult[4];
    }
    if (cResult[5] === tmp4.glow) {
      let tmp12;
      let tmp14;
      let tmp20;
      if (cResult[6] === (!tmp8 && tmp4.glowLight)) {
        tmp12 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { style: React3.absoluteFill, colors: ["transparent", "black"], start: start2, end: end2 };
        const tmp19 = metroRequire(LinearGradientDefault, obj2);
        cResult[8] = tmp19;
        tmp14 = tmp19;
      } else {
        tmp14 = cResult[8];
      }
      if (cResult[9] !== tmp5) {
        const obj3 = { style: React3.absoluteFill, colors: tmp5, start, end };
        const tmp25 = metroRequire(LinearGradientDefault, obj3);
        cResult[9] = tmp5;
        cResult[10] = tmp25;
        tmp20 = tmp25;
      } else {
        tmp20 = cResult[10];
      }
      if (cResult[11] === tmp12) {
        let tmp26;
        if (cResult[12] === tmp20) {
          tmp26 = cResult[13];
        }
        if (cResult[14] === children) {
          if (cResult[15] === tmp10) {
            let tmp29;
            if (cResult[16] === tmp26) {
              tmp29 = cResult[17];
            }
            return tmp29;
          }
        }
        const obj4 = { style: tmp10, children: items };
        items = [tmp26, children];
        const tmp32 = metroImportDefault(hasOwnProperty, obj4);
        cResult[14] = children;
        cResult[15] = tmp10;
        cResult[16] = tmp26;
        cResult[17] = tmp32;
        tmp29 = tmp32;
      }
      const obj5 = { style: tmp12, maskElement: tmp14, children: tmp20 };
      const tmp28 = metroRequire(_modDef6052, obj5);
      cResult[11] = tmp12;
      cResult[12] = tmp20;
      cResult[13] = tmp28;
      tmp26 = tmp28;
    }
    const items1 = [tmp4.glow, !tmp8 && tmp4.glowLight];
    cResult[5] = tmp4.glow;
    cResult[6] = !tmp8 && tmp4.glowLight;
    cResult[7] = items1;
    tmp12 = items1;
  }
  const items2 = [tmp4.wrapper, style];
  cResult[2] = style;
  cResult[3] = tmp4.wrapper;
  cResult[4] = items2;
  tmp10 = items2;
}) : ((arg0) => {
  let children;
  let items;
  let items2;
  let obj4;
  let obj5;
  let style;
  ({ children, style } = arg0);
  const tmp = closure_8();
  const tmp2 = closure_14();
  const tmp5 = useThemeDefault();
  const obj = design_shared;
  const isThemeDarkResult = obj.isThemeDark(tmp5);
  const obj2 = { style: items, children: items2 };
  items = [tmp.wrapper, style];
  const items1 = [tmp.glow, ];
  let glowLight = !isThemeDarkResult;
  const tmp10 = _modDef6052;
  if (!isThemeDarkResult) {
    glowLight = tmp.glowLight;
  }
  items1[1] = glowLight;
  const obj3 = { style: items1, maskElement: metroRequire(LinearGradientDefault, obj4), children: metroRequire(LinearGradientDefault, obj5) };
  obj4 = { style: React3.absoluteFill, colors: ["transparent", "black"], start: start2, end: end2 };
  obj5 = { style: React3.absoluteFill, colors: tmp2, start, end };
  items2 = [metroRequire(tmp10, obj3), children];
  return metroImportDefault(hasOwnProperty, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  let children;
  let style;
  let tmp2;
  const obj = react2;
  const cResult = obj.c(9);
  ({ style, children } = visible);
  if (visible.visible) {
    let tmp6;
    if (visible.glow) {
      if (cResult[3] === children) {
        let tmp10;
        if (cResult[4] === style) {
          tmp10 = cResult[5];
        }
        tmp6 = tmp10;
      }
      const obj2 = { style, children };
      const tmp13 = metroRequire(closure_16, obj2);
      cResult[3] = children;
      cResult[4] = style;
      cResult[5] = tmp13;
      tmp10 = tmp13;
    } else {
      if (cResult[6] === children) {
        if (cResult[7] === style) {
          tmp6 = cResult[8];
        }
      }
      const obj3 = { style, children };
      const tmp9 = metroRequire(closure_15, obj3);
      cResult[6] = children;
      cResult[7] = style;
      cResult[8] = tmp9;
      tmp6 = tmp9;
    }
    tmp2 = tmp6;
  } else {
    if (cResult[0] === children) {
      if (cResult[1] === style) {
        tmp2 = cResult[2];
      }
    }
    const obj4 = { style, children };
    const tmp5 = metroRequire(hasOwnProperty, obj4);
    cResult[0] = children;
    cResult[1] = style;
    cResult[2] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
}) : ((visible) => {
  let children;
  let style;
  let tmp2;
  ({ style, children } = visible);
  if (visible.visible) {
    tmp2 = visible.glow ? closure_16 : closure_15;
  } else {
    tmp2 = hasOwnProperty;
  }
  return metroRequire(tmp2, { style, children });
});
const result = size.fileFinishedImporting("modules/quests/native/PremiumRewardGradient.tsx");

export default tmp6;