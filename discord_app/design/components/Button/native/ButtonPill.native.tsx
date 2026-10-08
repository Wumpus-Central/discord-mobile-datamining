// === Module 5385: ButtonPill ===

// Module 5385 (ButtonPill)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4778 */;
import native from "native" /* 4787 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import shared from "shared" /* 4929 */;
import spring from "spring" /* 5374 */;
import springPresets from "springPresets" /* 5378 */;
import ButtonConstants2 from "ButtonConstants" /* 5380 */;
import ButtonHooks from "ButtonHooks" /* 5381 */;
import ButtonShine from "ButtonShine" /* 5386 */;
import LinearGradientDefault from "LinearGradient" /* 5387 */;
import ButtonEllipsis from "ButtonEllipsis" /* 5391 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = 300;
let ButtonConstants = fn(5380);
const paddingVertical = ButtonConstants.getButtonPadding(fn(5380).SMALL_BUTTON_HEIGHT, fn(5380).SMALL_BUTTON_ICON_SIZE);
ButtonConstants = fn(5380);
const paddingVertical2 = ButtonConstants.getButtonPadding(fn(5380).MEDIUM_BUTTON_HEIGHT, fn(5380).MEDIUM_BUTTON_ICON_SIZE);
ButtonConstants = fn(5380);
const paddingVertical3 = ButtonConstants.getButtonPadding(fn(5380).LARGE_BUTTON_HEIGHT, fn(5380).LARGE_BUTTON_ICON_SIZE);
const createStyles = fn(5090);
let closure_14 = createStyles.createStyles((arg0, arg1) => {
  if ("sm" === arg1) {
    const obj2 = { minHeight: ButtonConstants2.SMALL_BUTTON_HEIGHT, minWidth: ButtonConstants2.SMALL_BUTTON_HEIGHT, paddingHorizontal: ButtonConstants2.SMALL_BUTTON_HORIZONTAL_PADDING, paddingVertical };
    let obj = obj2;
  } else if ("md" === arg1) {
    const obj3 = { minHeight: ButtonConstants2.MEDIUM_BUTTON_HEIGHT, minWidth: ButtonConstants2.MEDIUM_BUTTON_HEIGHT, paddingHorizontal: ButtonConstants2.MEDIUM_BUTTON_HORIZONTAL_PADDING, paddingVertical: paddingVertical2 };
    obj = obj3;
  } else {
    obj = {};
    if ("lg" === arg1) {
      const obj5 = { minHeight: ButtonConstants2.LARGE_BUTTON_HEIGHT, minWidth: ButtonConstants2.LARGE_BUTTON_HEIGHT, paddingHorizontal: ButtonConstants2.LARGE_BUTTON_HORIZONTAL_PADDING, paddingVertical: paddingVertical3 };
      obj = obj5;
    }
  }
  const buttonBorderRadius = ButtonConstants2.getButtonBorderRadius(arg1);
  const obj6 = { pill: null, expressivePill: null, expressiveRiveFill: null, childContainer: null, ellipsis: null };
  const merged = Object.assign(obj);
  obj6.pill = { flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", borderWidth: ButtonConstants2.BUTTON_BORDER_WIDTH, borderRadius: buttonBorderRadius };
  obj6.expressivePill = { overflow: "hidden", borderRadius: buttonBorderRadius };
  const obj7 = { flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", borderWidth: ButtonConstants2.BUTTON_BORDER_WIDTH, borderRadius: buttonBorderRadius };
  obj6.expressiveRiveFill = { color: nativeDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT };
  obj6.childContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", flexGrow: 1, maxWidth: "100%" };
  obj6.ellipsis = { position: "absolute", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" };
  return obj6;
});
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function PillWrapper(arg0) {
  const cResult = c.c(42);
  ({ children, variant, style, shiny, expressiveRiveRef, expressivePressState } = arg0);
  let tmp4 = undefined !== shiny;
  ({ pressed, size } = arg0);
  if (tmp4) {
    tmp4 = shiny;
  }
  const buttonPillStyles = ButtonHooks.useButtonPillStyles(variant, pressed);
  const tmpResult = ButtonHooks;
  const gradientPillStyles = ButtonHooks.useGradientPillStyles(variant);
  const tmpResult7 = ButtonHooks;
  const theme = native.useThemeContext().theme;
  const tmp7 = closure_14(variant, size);
  const tmpResult8 = native;
  const token = useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT);
  const tmpResult9 = useToken;
  const token1 = useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  const tmpResult10 = useToken;
  const token2 = useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  if (cResult[0] === token) {
    if (cResult[1] === token1) {
      if (cResult[2] === token2) {
        let tmp12 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS, nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2, nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS];
        cResult[4] = items;
        let tmp14 = items;
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] === tmp4) {
        if (cResult[6] === variant) {
          let tmp15 = cResult[7];
        }
        if ("experimental_premium-primary" !== variant) {
          if ("experimental_premium-basic" !== variant) {
            if (cResult[26] === expressivePressState) {
              if (cResult[27] === expressiveRiveRef) {
                if (cResult[28] === tmp7) {
                  if (cResult[29] === theme) {
                    if (cResult[30] === variant) {
                      let tmp18 = cResult[31];
                    }
                    if (cResult[32] === buttonPillStyles) {
                      if (cResult[33] === style) {
                        let tmp26 = cResult[34];
                      }
                      if (cResult[35] === children) {
                        if (cResult[36] === tmp15) {
                          if (cResult[37] === tmp26) {
                            let tmp27 = cResult[38];
                          }
                          if (cResult[39] === tmp27) {
                            if (cResult[40] === tmp18) {
                              let tmp30 = cResult[41];
                            }
                            return tmp30;
                          }
                          const obj2 = { children: null };
                          const items1 = [tmp18, tmp27];
                          obj2.children = items1;
                          const tmp33 = closure_1_8(options, obj2);
                          cResult[39] = tmp27;
                          cResult[40] = tmp18;
                          cResult[41] = tmp33;
                          tmp30 = tmp33;
                        }
                      }
                      const obj3 = { style: tmp26, children: null };
                      const items2 = [children, tmp15];
                      obj3.children = items2;
                      const tmp29 = closure_1_8(ReanimatedRexportDefault.View, obj3);
                      cResult[35] = children;
                      cResult[36] = tmp15;
                      cResult[37] = tmp26;
                      cResult[38] = tmp29;
                      tmp27 = tmp29;
                    }
                    const items3 = [style, buttonPillStyles];
                    cResult[32] = buttonPillStyles;
                    cResult[33] = style;
                    cResult[34] = items3;
                    tmp26 = items3;
                  }
                }
              }
            }
            let tmp20Result = "expressive" === variant;
            if (tmp20Result) {
              const obj4 = { style: null, children: null };
              const items4 = [timestampProducer.absoluteFill, tmp7.expressivePill];
              obj4.style = items4;
              const obj5 = { withReducedMotion: "short-loop", ref: expressiveRiveRef, fit: "layout", artboard: null, dataBinding: null };
              let str4 = "Mobile Expressive Button Dark Mode";
              if (tmpResult12.isThemeLight(theme)) {
                str4 = "Mobile Expressive Button Lightmode";
              }
              obj5.artboard = str4;
              const obj6 = { buttonColor: tmp7.expressiveRiveFill.color, cornerRadius: tmp7.expressivePill.borderRadius };
              const merged = Object.assign(expressivePressState);
              obj5.dataBinding = obj6;
              obj4.children = React5(native.ExpressiveButtonRive, obj5);
              tmp20Result = React5(hasOwnProperty, obj4);
              tmpResult12 = shared;
            }
            cResult[26] = expressivePressState;
            cResult[27] = expressiveRiveRef;
            cResult[28] = tmp7;
            cResult[29] = theme;
            cResult[30] = variant;
            cResult[31] = tmp20Result;
            tmp18 = tmp20Result;
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const point = { x: 0, y: 0 };
          const point1 = { x: 1, y: 0 };
          cResult[8] = point;
          cResult[9] = point1;
          let tmp35 = point1;
          let tmp34 = point;
        } else {
          tmp34 = cResult[8];
          tmp35 = cResult[9];
        }
        if (cResult[10] === gradientPillStyles) {
          if (cResult[11] === style) {
            let tmp36 = cResult[12];
          }
          if ("experimental_premium-basic" === variant) {
            tmp12 = tmp14;
          }
          if (cResult[13] === tmp36) {
            if (cResult[14] === tmp12) {
              let tmp38 = cResult[15];
            }
            if (cResult[16] === buttonPillStyles) {
              if (cResult[17] === style) {
                let tmp41 = cResult[18];
              }
              if (cResult[19] === children) {
                if (cResult[20] === tmp15) {
                  if (cResult[21] === tmp41) {
                    let tmp42 = cResult[22];
                  }
                  if (cResult[23] === tmp38) {
                    if (cResult[24] === tmp42) {
                      let tmp45 = cResult[25];
                    }
                    return tmp45;
                  }
                  const obj7 = { children: null };
                  const items5 = [tmp38, tmp42];
                  obj7.children = items5;
                  const tmp48 = closure_1_8(options, obj7);
                  cResult[23] = tmp38;
                  cResult[24] = tmp42;
                  cResult[25] = tmp48;
                  tmp45 = tmp48;
                }
              }
              const obj8 = { style: tmp41, children: null };
              const items6 = [children, tmp15];
              obj8.children = items6;
              const tmp44 = closure_1_8(ReanimatedRexportDefault.View, obj8);
              cResult[19] = children;
              cResult[20] = tmp15;
              cResult[21] = tmp41;
              cResult[22] = tmp44;
              tmp42 = tmp44;
            }
            const items7 = [style, buttonPillStyles];
            cResult[16] = buttonPillStyles;
            cResult[17] = style;
            cResult[18] = items7;
            tmp41 = items7;
          }
          const obj9 = { start: tmp34, end: tmp35, style: tmp36, colors: tmp12 };
          const tmp40 = React5(LinearGradientDefault, obj9);
          cResult[13] = tmp36;
          cResult[14] = tmp12;
          cResult[15] = tmp40;
          tmp38 = tmp40;
        }
        const items8 = [style, gradientPillStyles, timestampProducer.absoluteFill];
        cResult[10] = gradientPillStyles;
        cResult[11] = style;
        cResult[12] = items8;
        tmp36 = items8;
      }
      let tmp16 = null;
      if (tmp4) {
        const obj10 = { variant };
        tmp16 = React5(ButtonShine.ButtonShine, obj10);
      }
      cResult[5] = tmp4;
      cResult[6] = variant;
      cResult[7] = tmp16;
      tmp15 = tmp16;
    }
  }
  const items9 = [token, token1, token2];
  cResult[0] = token;
  cResult[1] = token1;
  cResult[2] = token2;
  cResult[3] = items9;
  tmp12 = items9;
  const tmpResult11 = useToken;
}) : (function PillWrapper(expressivePressState) {
  ({ children, variant, style, shiny } = expressivePressState);
  if (shiny === undefined) {
    shiny = false;
  }
  expressivePressState = expressivePressState.expressivePressState;
  ({ expressiveRiveRef, size } = expressivePressState);
  const buttonPillStyles = ButtonHooks.useButtonPillStyles(variant, expressivePressState.pressed);
  const gradientPillStyles = ButtonHooks.useGradientPillStyles(variant);
  const tmp5 = closure_14(variant, size);
  const obj3 = native;
  let items = [useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT), , ];
  items[1] = useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  items[2] = useToken.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  const items1 = [nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS, nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2, nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS];
  let tmp7 = null;
  if (shiny) {
    const obj7 = { variant };
    tmp7 = React5(ButtonShine.ButtonShine, obj7);
  }
  if ("experimental_premium-primary" !== variant) {
    if ("experimental_premium-basic" !== variant) {
      let tmp11Result = "expressive" === variant;
      if (tmp11Result) {
        const obj8 = { style: null, children: null };
        const items2 = [timestampProducer.absoluteFill, tmp5.expressivePill];
        obj8.style = items2;
        const obj9 = { withReducedMotion: "short-loop", ref: expressiveRiveRef, fit: "layout", artboard: null, dataBinding: null };
        let str = "Mobile Expressive Button Dark Mode";
        if (tmpResult.isThemeLight(obj3.useThemeContext().theme)) {
          str = "Mobile Expressive Button Lightmode";
        }
        obj9.artboard = str;
        const obj10 = { buttonColor: tmp5.expressiveRiveFill.color, cornerRadius: tmp5.expressivePill.borderRadius };
        const merged = Object.assign(expressivePressState);
        obj9.dataBinding = obj10;
        obj8.children = React5(native.ExpressiveButtonRive, obj9);
        tmp11Result = React5(hasOwnProperty, obj8);
        tmpResult = shared;
      }
      let obj11 = { children: null };
      const items3 = [tmp11Result, ];
      const obj12 = { style: null, children: null };
      const items4 = [style, buttonPillStyles];
      obj12.style = items4;
      const items5 = [children, tmp7];
      obj12.children = items5;
      items3[1] = closure_1_8(ReanimatedRexportDefault.View, obj12);
      obj11.children = items3;
    }
    return closure_1_8(tmp10, obj11);
  }
  const obj13 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: null, colors: null };
  const items6 = [style, gradientPillStyles, timestampProducer.absoluteFill];
  obj13.style = items6;
  if ("experimental_premium-basic" === variant) {
    items = items1;
  }
  const obj14 = { children: null };
  obj13.colors = items;
  const items7 = [React5(LinearGradientDefault, obj13), ];
  const obj15 = { style: null, children: null };
  const items8 = [style, buttonPillStyles];
  obj15.style = items8;
  const items9 = [children, tmp7];
  obj15.children = items9;
  items7[1] = closure_1_8(ReanimatedRexportDefault.View, obj15);
  obj14.children = items7;
  obj11 = obj14;
  const tmp6Result = LinearGradientDefault;
});
fn(558);
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function BasicButtonPill(arg0) {
  const cResult = c.c(15);
  ({ children, style, pressed, variant, size, shiny, expressiveRiveRef, expressivePressState } = arg0);
  let str = "primary";
  if (undefined !== variant) {
    str = variant;
  }
  if (undefined === size) {
    size = ButtonConstants2.DEFAULT_BUTTON_SIZE;
  }
  const tmp5 = closure_14(str, size);
  if (cResult[0] === style) {
    if (cResult[1] === tmp5.pill) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp5.childContainer) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === expressivePressState) {
        if (cResult[7] === expressiveRiveRef) {
          if (cResult[8] === pressed) {
            if (cResult[9] === tmp4) {
              if (cResult[10] === size) {
                if (cResult[11] === tmp6) {
                  if (cResult[12] === tmp7) {
                    if (cResult[13] === str) {
                      let tmp11 = cResult[14];
                    }
                    return tmp11;
                  }
                }
              }
            }
          }
        }
      }
      const obj2 = { variant: str, size, style: tmp6, pressed, shiny: tmp4, expressiveRiveRef, expressivePressState, children: tmp7 };
      const tmp14 = React5(closure_15, obj2);
      cResult[6] = expressivePressState;
      cResult[7] = expressiveRiveRef;
      cResult[8] = pressed;
      cResult[9] = tmp4;
      cResult[10] = size;
      cResult[11] = tmp6;
      cResult[12] = tmp7;
      cResult[13] = str;
      cResult[14] = tmp14;
      tmp11 = tmp14;
    }
    const obj3 = { style: tmp5.childContainer, children };
    const tmp10 = React5(hasOwnProperty, obj3);
    cResult[3] = children;
    cResult[4] = tmp5.childContainer;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
  const items = [tmp5.pill, style];
  cResult[0] = style;
  cResult[1] = tmp5.pill;
  cResult[2] = items;
  tmp6 = items;
}) : (function BasicButtonPill(variant) {
  let str = variant.variant;
  ({ children, style, pressed } = variant);
  if (str === undefined) {
    str = "primary";
  }
  let DEFAULT_BUTTON_SIZE = variant.size;
  if (DEFAULT_BUTTON_SIZE === undefined) {
    DEFAULT_BUTTON_SIZE = ButtonConstants2.DEFAULT_BUTTON_SIZE;
  }
  let flag = variant.shiny;
  if (flag === undefined) {
    flag = false;
  }
  ({ expressiveRiveRef, expressivePressState } = variant);
  const tmp3 = closure_14(str, DEFAULT_BUTTON_SIZE);
  const obj = { variant: str, size: DEFAULT_BUTTON_SIZE, style: null, pressed, shiny: flag, expressiveRiveRef, expressivePressState, children: React5(hasOwnProperty, { style: tmp3.childContainer, children }) };
  const items = [tmp3.pill, style];
  obj.style = items;
  return React5(closure_15, obj);
});
let closure_16 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function LoadingButtonPill(arg0) {
  const cResult = c.c(32);
  ({ children, style, pressed, variant, size, loading, loaderSize, expressiveRiveRef, expressivePressState } = arg0);
  let str = "primary";
  if (undefined !== variant) {
    str = variant;
  }
  if (undefined === size) {
    size = ButtonConstants2.DEFAULT_BUTTON_SIZE;
  }
  closure_0 = tmp4;
  const tmp5 = closure_14(str, size);
  noop.useRef(null);
  [tmp8, dependencyMap] = noop.useState(undefined !== loading && loading);
  if (cResult[0] !== (undefined !== loading && loading)) {
    const fn = function o() {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      if (closure_0) {
        dependencyMap(true);
      } else {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          closure_1_2(false);
        }, 500);
      }
    };
    const items = [tmp4];
    cResult[0] = tmp4;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp10 = items;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const effect = noop.useEffect(tmp9, tmp10);
  const tmp7 = _slicedToArray(noop.useState(undefined !== loading && loading), 2);
  [tmp13, tmp14] = closure_22(undefined !== loading && loading, size);
  if (cResult[3] === style) {
    if (cResult[4] === tmp5.pill) {
      let tmp15 = cResult[5];
    }
    if (cResult[6] === tmp13) {
      if (cResult[7] === tmp5.childContainer) {
        let tmp16 = cResult[8];
      }
      if (cResult[9] === children) {
        if (cResult[10] === tmp16) {
          let tmp17 = cResult[11];
        }
        if (cResult[12] === tmp14) {
          if (cResult[13] === tmp5.ellipsis) {
            let tmp21 = cResult[14];
          }
          if (cResult[15] === loaderSize) {
            if (cResult[16] === tmp8) {
              if (cResult[17] === size) {
                if (cResult[18] === str) {
                  let tmp22 = cResult[19];
                }
                if (cResult[20] === tmp22) {
                  if (cResult[21] === tmp21) {
                    let tmp26 = cResult[22];
                  }
                  if (cResult[23] === expressivePressState) {
                    if (cResult[24] === expressiveRiveRef) {
                      if (cResult[25] === pressed) {
                        if (cResult[26] === size) {
                          if (cResult[27] === tmp26) {
                            if (cResult[28] === tmp15) {
                              if (cResult[29] === tmp17) {
                                if (cResult[30] === str) {
                                  let tmp30 = cResult[31];
                                }
                                return tmp30;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj3 = { variant: str, size, style: tmp15, pressed, expressiveRiveRef, expressivePressState, children: null };
                  const items1 = [tmp17, tmp26];
                  obj3.children = items1;
                  const tmp33 = closure_1_8(closure_15, obj3);
                  cResult[23] = expressivePressState;
                  cResult[24] = expressiveRiveRef;
                  cResult[25] = pressed;
                  cResult[26] = size;
                  cResult[27] = tmp26;
                  cResult[28] = tmp15;
                  cResult[29] = tmp17;
                  cResult[30] = str;
                  cResult[31] = tmp33;
                  tmp30 = tmp33;
                }
                const obj4 = { style: tmp21, children: tmp22 };
                const tmp29 = React5(ReanimatedRexportDefault.View, obj4);
                cResult[20] = tmp22;
                cResult[21] = tmp21;
                cResult[22] = tmp29;
                tmp26 = tmp29;
              }
            }
          }
          let tmp24Result = tmp8;
          if (tmp8) {
            const obj5 = { variant: str, size: null };
            let tmp25 = loaderSize;
            if (loaderSize == null) {
              tmp25 = size;
            }
            obj5.size = tmp25;
            tmp24Result = React5(ButtonEllipsis.Ellipsis, obj5);
          }
          cResult[15] = loaderSize;
          cResult[16] = tmp8;
          cResult[17] = size;
          cResult[18] = str;
          cResult[19] = tmp24Result;
          tmp22 = tmp24Result;
        }
        const items2 = [tmp5.ellipsis, tmp14];
        cResult[12] = tmp14;
        cResult[13] = tmp5.ellipsis;
        cResult[14] = items2;
        tmp21 = items2;
      }
      const obj6 = { style: tmp16, children };
      const tmp20 = React5(ReanimatedRexportDefault.View, obj6);
      cResult[9] = children;
      cResult[10] = tmp16;
      cResult[11] = tmp20;
      tmp17 = tmp20;
    }
    const items3 = [tmp5.childContainer, tmp13];
    cResult[6] = tmp13;
    cResult[7] = tmp5.childContainer;
    cResult[8] = items3;
    tmp16 = items3;
  }
  const items4 = [tmp5.pill, style];
  cResult[3] = style;
  cResult[4] = tmp5.pill;
  cResult[5] = items4;
  tmp15 = items4;
  const tmp6Result = _slicedToArray(closure_22(undefined !== loading && loading, size), 2);
}) : (function LoadingButtonPill(variant) {
  let str = variant.variant;
  ({ children, style, pressed } = variant);
  if (str === undefined) {
    str = "primary";
  }
  let DEFAULT_BUTTON_SIZE = variant.size;
  if (DEFAULT_BUTTON_SIZE === undefined) {
    DEFAULT_BUTTON_SIZE = ButtonConstants2.DEFAULT_BUTTON_SIZE;
  }
  let flag = variant.loading;
  if (flag === undefined) {
    flag = false;
  }
  let loaderSize = variant.loaderSize;
  c2 = undefined;
  ({ expressiveRiveRef, expressivePressState } = variant);
  const tmp3 = closure_14(str, DEFAULT_BUTTON_SIZE);
  noop.useRef(null);
  [tmp5, c2] = noop.useState(flag);
  const items = [flag];
  const effect = noop.useEffect(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    if (flag) {
      _undefined(true);
    } else {
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        _undefined(false);
      }, 500);
    }
  }, items);
  const tmp4 = _slicedToArray(noop.useState(flag), 2);
  const obj = { variant: str, size: DEFAULT_BUTTON_SIZE, style: null, pressed, expressiveRiveRef, expressivePressState, children: null };
  const items1 = [tmp3.pill, style];
  obj.style = items1;
  [tmp8, tmp9] = closure_22(flag, DEFAULT_BUTTON_SIZE);
  const obj2 = { style: null, children };
  const items2 = [tmp3.childContainer, tmp8];
  obj2.style = items2;
  const items3 = [React5(ReanimatedRexportDefault.View, obj2), ];
  const obj3 = { style: null, children: null };
  const items4 = [tmp3.ellipsis, tmp9];
  obj3.style = items4;
  if (tmp12Result) {
    const obj4 = { variant: str, size: null };
    if (loaderSize == null) {
      loaderSize = DEFAULT_BUTTON_SIZE;
    }
    obj4.size = loaderSize;
    tmp12Result = React5(ButtonEllipsis.Ellipsis, obj4);
  }
  obj3.children = tmp12Result;
  items3[1] = React5(ReanimatedRexportDefault.View, obj3);
  obj.children = items3;
  return closure_1_8(closure_15, obj);
});
let closure_17 = tmp6;
const __initData = { code: "function ButtonPillNativeTsx1(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?0:1,SUBTLE_SPRING,\"animate-always\");if(useReducedMotion){return{opacity:loading?opacityTransition:withDelay(FADE_DELAY,opacityTransition),transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?-1*offsetY:0,SUBTLE_SPRING)}]};}" };
const __initData2 = { code: "function ButtonPillNativeTsx2(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition_0=withSpring(loading?1:0,SUBTLE_SPRING,\"animate-always\");if(useReducedMotion){return{opacity:loading?withDelay(FADE_DELAY,opacityTransition_0):opacityTransition_0,transform:[{translateY:0}]};}return{opacity:opacityTransition_0,transform:[{translateY:withSpring(loading?0:offsetY,SUBTLE_SPRING)}]};}" };
const __initData3 = { code: "function ButtonPillNativeTsx3(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?0:1,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?opacityTransition:withDelay(FADE_DELAY,opacityTransition),transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?-1*offsetY:0,SUBTLE_SPRING)}]};}" };
const __initData4 = { code: "function ButtonPillNativeTsx4(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition_0=withSpring(loading?1:0,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?withDelay(FADE_DELAY,opacityTransition_0):opacityTransition_0,transform:[{translateY:0}]};}return{opacity:opacityTransition_0,transform:[{translateY:withSpring(loading?0:offsetY,SUBTLE_SPRING)}]};}" };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useLoadingStyles(loading, arg1) {
  _require = loading;
  const cResult = require("c").c(3);
  const enabled = noop.useContext(require("AccessibilityPreferencesContext").AccessibilityPreferencesContext).reducedMotion.enabled;
  num = 12;
  if ("lg" === arg1) {
    num = 18;
  }
  const obj = require("c");
  const fn = function o() {
    num = 1;
    if (closure_0) {
      num = 0;
    }
    const withSpringResult = spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always");
    const obj2 = { opacity: null, transform: null };
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (!closure_0) {
        withDelayResult = ReanimatedRexport.withDelay(c10, withSpringResult);
        const tmpResult = ReanimatedRexport;
      }
      obj2.opacity = withDelayResult;
      const items = [{ translateY: 0 }];
      obj2.transform = items;
      let tmp6 = obj2;
    } else {
      obj2.opacity = withSpringResult;
      let num2 = 0;
      if (closure_0) {
        num2 = -1 * num;
      }
      const obj3 = { translateY: spring.withSpring(num2, springPresets.SUBTLE_SPRING) };
      const items1 = [obj3];
      obj2.transform = items1;
      tmp6 = obj2;
      const tmpResult2 = spring;
    }
    return tmp6;
  };
  let tmpResult = require("ReanimatedRexport");
  fn.__closure = { withSpring: require("spring").withSpring, loading, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING, useReducedMotion: enabled, withDelay: require("ReanimatedRexport").withDelay, FADE_DELAY, offsetY: num };
  fn.__workletHash = 8139455165925;
  fn.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  let obj2 = { withSpring: require("spring").withSpring, loading, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING, useReducedMotion: enabled, withDelay: require("ReanimatedRexport").withDelay, FADE_DELAY, offsetY: num };
  const fn2 = function l() {
    num = 0;
    if (closure_0) {
      num = 1;
    }
    const withSpringResult = spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always");
    const obj2 = { opacity: null, transform: null };
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (closure_0) {
        withDelayResult = ReanimatedRexport.withDelay(c10, withSpringResult);
        const tmpResult = ReanimatedRexport;
      }
      obj2.opacity = withDelayResult;
      const items = [{ translateY: 0 }];
      obj2.transform = items;
      let tmp5 = obj2;
    } else {
      obj2.opacity = withSpringResult;
      let num2 = 0;
      if (!closure_0) {
        num2 = num;
      }
      const obj3 = { translateY: spring.withSpring(num2, springPresets.SUBTLE_SPRING) };
      const items1 = [obj3];
      obj2.transform = items1;
      tmp5 = obj2;
      const tmpResult2 = spring;
    }
    return tmp5;
  };
  let tmpResult2 = require("ReanimatedRexport");
  fn2.__closure = { withSpring: require("spring").withSpring, loading, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING, useReducedMotion: enabled, withDelay: require("ReanimatedRexport").withDelay, FADE_DELAY, offsetY: num };
  fn2.__workletHash = 7833278703280;
  fn2.__initData = __initData2;
  const animatedStyle1 = tmpResult2.useAnimatedStyle(fn2);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === animatedStyle1) {
      let tmp6 = cResult[2];
    }
    return tmp6;
  }
  let items = [animatedStyle, animatedStyle1];
  cResult[0] = animatedStyle;
  cResult[1] = animatedStyle1;
  cResult[2] = items;
  tmp6 = items;
}) : (function useLoadingStyles(loading, arg1) {
  _require = loading;
  const enabled = noop.useContext(require("AccessibilityPreferencesContext").AccessibilityPreferencesContext).reducedMotion.enabled;
  num = 12;
  if ("lg" === arg1) {
    num = 18;
  }
  const fn = function o() {
    num = 1;
    if (closure_0) {
      num = 0;
    }
    const withSpringResult = spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always");
    const obj2 = { opacity: null, transform: null };
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (!closure_0) {
        withDelayResult = ReanimatedRexport.withDelay(c10, withSpringResult);
        const tmpResult = ReanimatedRexport;
      }
      obj2.opacity = withDelayResult;
      const items = [{ translateY: 0 }];
      obj2.transform = items;
      let tmp6 = obj2;
    } else {
      obj2.opacity = withSpringResult;
      let num2 = 0;
      if (closure_0) {
        num2 = -1 * num;
      }
      const obj3 = { translateY: spring.withSpring(num2, springPresets.SUBTLE_SPRING) };
      const items1 = [obj3];
      obj2.transform = items1;
      tmp6 = obj2;
      const tmpResult2 = spring;
    }
    return tmp6;
  };
  let tmpResult = require("ReanimatedRexport");
  fn.__closure = { withSpring: require("spring").withSpring, loading, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING, useReducedMotion: enabled, withDelay: require("ReanimatedRexport").withDelay, FADE_DELAY, offsetY: num };
  fn.__workletHash = 7437403999943;
  fn.__initData = __initData3;
  let items = [tmpResult.useAnimatedStyle(fn), ];
  const obj = { withSpring: require("spring").withSpring, loading, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING, useReducedMotion: enabled, withDelay: require("ReanimatedRexport").withDelay, FADE_DELAY, offsetY: num };
  const fn2 = function l() {
    num = 0;
    if (closure_0) {
      num = 1;
    }
    const withSpringResult = spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always");
    const obj2 = { opacity: null, transform: null };
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (closure_0) {
        withDelayResult = ReanimatedRexport.withDelay(c10, withSpringResult);
        const tmpResult = ReanimatedRexport;
      }
      obj2.opacity = withDelayResult;
      const items = [{ translateY: 0 }];
      obj2.transform = items;
      let tmp5 = obj2;
    } else {
      obj2.opacity = withSpringResult;
      let num2 = 0;
      if (!closure_0) {
        num2 = num;
      }
      const obj3 = { translateY: spring.withSpring(num2, springPresets.SUBTLE_SPRING) };
      const items1 = [obj3];
      obj2.transform = items1;
      tmp5 = obj2;
      const tmpResult2 = spring;
    }
    return tmp5;
  };
  let tmpResult2 = require("ReanimatedRexport");
  fn2.__closure = { withSpring: require("spring").withSpring, loading, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING, useReducedMotion: enabled, withDelay: require("ReanimatedRexport").withDelay, FADE_DELAY, offsetY: num };
  fn2.__workletHash = 1552363136150;
  fn2.__initData = __initData4;
  items[1] = tmpResult2.useAnimatedStyle(fn2);
  return items;
});
let closure_22 = tmp7;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/ButtonPill.native.tsx");

export const ButtonPill = ReactCompilerGating.isReactCompilerEnabled() ? (function ButtonPill(loading) {
  const cResult = c.c(4);
  if (null == loading.loading) {
    if (cResult[0] !== loading) {
      const obj2 = {};
      const merged = Object.assign(loading);
      const tmp15 = React5(closure_16, obj2);
      cResult[0] = loading;
      cResult[1] = tmp15;
    }
  } else {
    if (cResult[2] !== loading) {
      const obj3 = {};
      const merged1 = Object.assign(loading);
      const tmp8 = React5(closure_17, obj3);
      cResult[2] = loading;
      cResult[3] = tmp8;
      let tmp2 = tmp8;
    } else {
      tmp2 = cResult[3];
    }
    return tmp2;
  }
}) : (function ButtonPill(loading) {
  if (null == loading.loading) {
    const obj2 = {};
    const merged = Object.assign(loading);
    let tmp6 = React5(closure_16, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(loading);
    tmp6 = React5(closure_17, obj);
  }
  return tmp6;
});
export const BasicButtonPill = tmp5;
export const LoadingButtonPill = tmp6;
export const useLoadingStyles = tmp7;