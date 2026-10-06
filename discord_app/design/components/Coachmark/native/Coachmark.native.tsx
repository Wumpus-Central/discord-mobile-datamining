// === Module 9903: Coachmark ===

// Module 9903 (Coachmark)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 4595 */;
import react_native from "react-native" /* 5786 */;
import Graphic2 from "Graphic" /* 9904 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let Pressable;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
let size1;
let closure_3 = ["style"];
let closure_4 = ["style"];
({ View: metroImportAll, Pressable } = react_native2);
const Image = react_native2.Image;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let closure_15 = ReanimatedRexport.createAnimatedComponent(Pressable);
let createStyles = createStyles_mod;
let obj = { container: { position: "absolute", alignItems: "center" }, shadow: obj2, body: obj3, textGap: { gap: 4 }, textOnlyPadding: obj4, bodyBgColor: obj5, gradient: obj6, bodyContainer: obj7, center: { alignItems: "center", justifyContent: "center" }, buttonSpacing: obj8, text: { maxWidth: 200, textAlign: "center" }, cursorContainer: { alignItems: "center", zIndex: 0 }, cursorHead: size, cursorSpine: size1, image: { height: 40, width: 40 }, bottomMargin: obj9, closeButton: rect };
obj2 = {};
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_BUTTON_OVERLAY);
obj3 = { width: nativeDefault.modules.mobile.COACHMARK_BODY_WIDTH, borderRadius: nativeDefault.radii.lg, overflow: "hidden", zIndex: 1 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_24 };
obj5 = { borderWidth: 1, borderColor: nativeDefault.colors.MOBILE_COACHMARK_BORDER_DEFAULT, backgroundColor: nativeDefault.colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg };
obj6 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj7 = { padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj8 = { height: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
size = { height: 8, width: 8, borderRadius: nativeDefault.radii.xs, borderWidth: 2, backgroundColor: "transparent", borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
size1 = { width: 2, height: 16, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj9 = { marginBottom: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
rect = { position: "absolute", top: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING, right: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
let closure_16 = createStyles(obj);
let closure_17 = { "21/9": 90, "16/9": 90, "6/4": 60, "2/1": 40, "1/1": 40 };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let adjustmentX;
  let buttonIcon;
  let buttonLabel;
  let buttonShiny;
  let buttonVariant;
  let description;
  let enterExitAnimatedStyles;
  let experimental_withBlurBackground;
  let gradientColor;
  let graphic;
  let imgSource;
  let items3;
  let items5;
  let items6;
  let offsetY;
  let onButtonPress;
  let onDismiss;
  let position;
  let ref;
  let renderImgComponent;
  let sharedValue;
  let surfaceMeasurements;
  let targetMeasurements;
  let title;
  let tmp11;
  let tmp12;
  let tmp29;
  let tmp44;
  let tmp7;
  let tooltipX;
  let tooltipY;
  let obj = ref(sharedValue[10]);
  const cResult = obj.c(104);
  ({ targetMeasurements, surfaceMeasurements, title, description, offsetY, graphic, imgSource, position, onDismiss, buttonLabel, buttonVariant, buttonIcon, buttonShiny, onButtonPress, gradientColor, experimental_withBlurBackground, renderImgComponent, enterExitAnimatedStyles } = arg0);
  let num = 0;
  if (undefined !== offsetY) {
    num = offsetY;
  }
  const tmp4 = closure_16();
  ref = react.useRef(null);
  [tmp7, importDefault] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  ({ adjustmentX, tooltipX, tooltipY } = require("useTooltipPosition")(tmp7, surfaceMeasurements, targetMeasurements, position, -8 + num));
  require("useTooltipPosition")(tmp7, surfaceMeasurements, targetMeasurements, position, -8 + num);
  const tmpResult = ref(sharedValue[6]);
  sharedValue = tmpResult.useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function c() {
      const result = sharedValue.set(1);
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== sharedValue) {
    function te() {
      const result = sharedValue.set(0);
    }
    cResult[2] = sharedValue;
    cResult[3] = te;
    tmp12 = te;
  } else {
    tmp12 = cResult[3];
  }
  const tmpResult2 = ref(sharedValue[12]);
  const buttonPressAnimationProps = tmpResult2.useButtonPressAnimationProps(sharedValue);
  if (cResult[4] !== buttonPressAnimationProps) {
    const style = buttonPressAnimationProps.style;
    cResult[4] = buttonPressAnimationProps;
    cResult[5] = _objectWithoutProperties(buttonPressAnimationProps, closure_3);
    cResult[6] = style;
    const tmp18 = _objectWithoutProperties(buttonPressAnimationProps, closure_3);
  }
  if (null == graphic) {
    let tmp33 = null;
    if (null != renderImgComponent) {
      let tmp34;
      if (cResult[17] !== renderImgComponent) {
        const renderImgComponentResult = renderImgComponent();
        cResult[17] = renderImgComponent;
        cResult[18] = renderImgComponentResult;
        tmp34 = renderImgComponentResult;
      } else {
        tmp34 = cResult[18];
      }
      tmp33 = tmp34;
    }
    if (null != imgSource) {
      if (cResult[19] === imgSource) {
        let tmp36;
        if (cResult[20] === tmp4.image) {
          tmp36 = cResult[21];
        }
        tmp33 = tmp36;
      }
      let obj2 = { source: imgSource, style: tmp4.image };
      const tmp39 = closure_12(Image, obj2);
      cResult[19] = imgSource;
      cResult[20] = tmp4.image;
      cResult[21] = tmp39;
      tmp36 = tmp39;
    }
    tmp29 = null;
    if (null != tmp33) {
      if (cResult[22] === tmp33) {
        let tmp40;
        if (cResult[23] === tmp4.bottomMargin) {
          tmp40 = cResult[24];
        }
        tmp29 = tmp40;
      }
      const obj3 = { style: tmp4.bottomMargin, children: tmp33 };
      const tmp43 = closure_12(closure_8, obj3);
      cResult[22] = tmp33;
      cResult[23] = tmp4.bottomMargin;
      cResult[24] = tmp43;
      tmp40 = tmp43;
    }
  } else {
    let tmp19;
    let tmp22;
    if (cResult[7] !== tmp4.bottomMargin) {
      const items = [tmp4.bottomMargin];
      cResult[7] = tmp4.bottomMargin;
      cResult[8] = items;
      tmp19 = items;
    } else {
      tmp19 = cResult[8];
    }
    let str = graphic.aspectRatio;
    if (str == null) {
      str = "1/1";
    }
    if (cResult[9] !== closure_17[str]) {
      size = { height: closure_17[str], width: "auto" };
      cResult[9] = closure_17[str];
      cResult[10] = size;
      tmp22 = size;
    } else {
      tmp22 = cResult[10];
    }
    if (cResult[11] === graphic) {
      let tmp23;
      if (cResult[12] === tmp22) {
        tmp23 = cResult[13];
      }
      if (cResult[14] === tmp19) {
        if (cResult[15] === tmp23) {
          tmp29 = cResult[16];
        }
      }
      const obj4 = { style: tmp19, children: tmp23 };
      const tmp32 = closure_12(closure_8, obj4);
      cResult[14] = tmp19;
      cResult[15] = tmp23;
      cResult[16] = tmp32;
      tmp29 = tmp32;
    }
    const obj5 = { style: tmp22 };
    const Graphic = tmp(tmp2[13]).Graphic;
    const merged = Object.assign(graphic);
    const tmp28 = closure_12(Graphic, obj5);
    cResult[11] = graphic;
    cResult[12] = tmp22;
    cResult[13] = tmp28;
    tmp23 = tmp28;
  }
  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
    function pe() {
      const obj = react_native;
      const obj2 = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj2);
    }
    cResult[25] = pe;
    tmp44 = pe;
  } else {
    tmp44 = cResult[25];
  }
  let textOnlyPadding;
  if (null == graphic) {
    textOnlyPadding = tmp4.textOnlyPadding;
  }
  if (cResult[26] === tmp4.text) {
    let tmp46;
    if (cResult[27] === textOnlyPadding) {
      tmp46 = cResult[28];
    }
    if (cResult[29] === tmp46) {
      let tmp47;
      if (cResult[30] === title) {
        tmp47 = cResult[31];
      }
      if (cResult[32] === description) {
        let tmp50;
        if (cResult[33] === tmp4.text) {
          tmp50 = cResult[34];
        }
        if (cResult[35] === tmp4.textGap) {
          if (cResult[36] === tmp47) {
            let tmp53;
            if (cResult[37] === tmp50) {
              tmp53 = cResult[38];
            }
            if (cResult[39] === tmp29) {
              if (cResult[40] === tmp4.center) {
                let tmp57;
                if (cResult[41] === tmp53) {
                  tmp57 = cResult[42];
                }
                if (cResult[43] === buttonIcon) {
                  if (cResult[44] === buttonLabel) {
                    if (cResult[45] === buttonShiny) {
                      if (cResult[46] === buttonVariant) {
                        if (cResult[47] === experimental_withBlurBackground) {
                          if (cResult[48] === onButtonPress) {
                            let tmp61;
                            let tmp68;
                            let tmp70;
                            if (cResult[49] === tmp4.buttonSpacing) {
                              tmp61 = cResult[50];
                            }
                            const _Symbol = Symbol;
                            if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl = tmp(tmp2[17]).intl;
                              const stringResult = intl.string(ref(sharedValue[17]).t.cpT0Cq);
                              cResult[51] = stringResult;
                              tmp68 = stringResult;
                            } else {
                              tmp68 = cResult[51];
                            }
                            const _Symbol2 = Symbol;
                            if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                              const obj6 = { size: "xs", color: require("native").colors.ICON_STRONG };
                              const XSmallIcon = tmp(tmp2[18]).XSmallIcon;
                              const tmp72 = closure_12(XSmallIcon, obj6);
                              cResult[52] = tmp72;
                              tmp70 = tmp72;
                            } else {
                              tmp70 = cResult[52];
                            }
                            if (cResult[53] === tmp11) {
                              if (cResult[54] === tmp12) {
                                if (cResult[55] === onDismiss) {
                                  let tmp73;
                                  if (cResult[56] === tmp4.closeButton) {
                                    tmp73 = cResult[57];
                                  }
                                  if (cResult[58] === tmp57) {
                                    if (cResult[59] === tmp61) {
                                      let tmp77;
                                      let tmp82Result;
                                      if (cResult[60] === tmp73) {
                                        tmp77 = cResult[61];
                                      }
                                      if (cResult[62] === tmp77) {
                                        if (cResult[63] === experimental_withBlurBackground) {
                                          if (cResult[64] === gradientColor) {
                                            if (cResult[65] === sharedValue) {
                                              if (cResult[66] === tmp4.bodyBgColor) {
                                                if (cResult[67] === tmp4.bodyContainer) {
                                                  const _Symbol3 = Symbol;
                                                  if (cResult[70] === Symbol.for("react.memo_cache_sentinel")) {
                                                    class Ee {
                                                      constructor(nativeEvent) {
                                                        nativeEvent = nativeEvent.nativeEvent;
                                                        size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                                                        importDefault(size);
                                                      }
                                                    }
                                                    cResult[70] = Ee;
                                                  } else {
                                                    class Ee {
                                                      constructor(nativeEvent) {
                                                        nativeEvent = nativeEvent.nativeEvent;
                                                        size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                                                        importDefault(size);
                                                      }
                                                    }
                                                  }
                                                  if (cResult[71] !== tmp4.shadow) {
                                                    class Ee {
                                                      constructor(nativeEvent) {
                                                        nativeEvent = nativeEvent.nativeEvent;
                                                        size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                                                        importDefault(size);
                                                      }
                                                    }
                                                    if (obj21.isIOS()) {
                                                      class Ee {
                                                        constructor(nativeEvent) {
                                                          nativeEvent = nativeEvent.nativeEvent;
                                                          size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                                                          importDefault(size);
                                                        }
                                                      }
                                                    }
                                                    cResult[71] = tmp4.shadow;
                                                    cResult[72] = undefined;
                                                  } else {
                                                    class Ee {
                                                      constructor(nativeEvent) {
                                                        nativeEvent = nativeEvent.nativeEvent;
                                                        size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                                                        importDefault(size);
                                                      }
                                                    }
                                                  }
                                                  if (null != tmp7) {
                                                    class Ee {
                                                      constructor(nativeEvent) {
                                                        nativeEvent = nativeEvent.nativeEvent;
                                                        size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                                                        importDefault(size);
                                                      }
                                                    }
                                                  }
                                                  if (cResult[73] === 0) {
                                                    class Ee {
                                                      constructor(nativeEvent) {
                                                        nativeEvent = nativeEvent.nativeEvent;
                                                        size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                                                        importDefault(size);
                                                      }
                                                    }
                                                  }
                                                  const rect = { opacity: 0, top: tooltipY, left: tooltipX };
                                                  cResult[73] = 0;
                                                  cResult[74] = tooltipX;
                                                  cResult[75] = tooltipY;
                                                  cResult[76] = rect;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      if (experimental_withBlurBackground) {
                                        class Ee {
                                          constructor(nativeEvent) {
                                            nativeEvent = nativeEvent.nativeEvent;
                                            size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                                            importDefault(size);
                                          }
                                        }
                                        const obj7 = { style: tmp4.bodyContainer, blurTheme: "dark", pressed: sharedValue, children: tmp77 };
                                        tmp82Result = closure_12(tmp(tmp2[19]).BackgroundBlurView, obj7);
                                      } else {
                                        class Ee {
                                          constructor(nativeEvent) {
                                            nativeEvent = nativeEvent.nativeEvent;
                                            size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                                            importDefault(size);
                                          }
                                        }
                                        const items1 = [, ];
                                        ({ bodyContainer: arr7[0], bodyBgColor: arr7[1] } = tmp4);
                                        tmp84[0] = items1;
                                        let tmp85 = null;
                                        if (null != gradientColor) {
                                          class Ee {
                                            constructor(nativeEvent) {
                                              nativeEvent = nativeEvent.nativeEvent;
                                              size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                                              importDefault(size);
                                            }
                                          }
                                          const obj8 = { style: tmp4.gradient, color: gradientColor, backgroundColor: require("native").colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT };
                                          const ExpressiveGradient = tmp(tmp2[20]).ExpressiveGradient;
                                          tmp85 = closure_12(ExpressiveGradient, obj8);
                                        }
                                        const items2 = [tmp85, tmp77];
                                        tmp84[1] = items2;
                                        tmp82Result = closure_13(closure_8, tmp84);
                                      }
                                      cResult[62] = tmp77;
                                      cResult[63] = experimental_withBlurBackground;
                                      cResult[64] = gradientColor;
                                      cResult[65] = sharedValue;
                                      cResult[66] = tmp4.bodyBgColor;
                                      cResult[67] = tmp4.bodyContainer;
                                      cResult[68] = tmp4.gradient;
                                      cResult[69] = tmp82Result;
                                    }
                                  }
                                  const obj9 = { children: items3 };
                                  items3 = [tmp57, tmp61, tmp73];
                                  const tmp80 = closure_13(closure_14, obj9);
                                  cResult[58] = tmp57;
                                  cResult[59] = tmp61;
                                  cResult[60] = tmp73;
                                  cResult[61] = tmp80;
                                  tmp77 = tmp80;
                                }
                              }
                            }
                            const obj10 = { accessibilityRole: "button", accessibilityLabel: tmp68, style: tmp4.closeButton, onPress: onDismiss, onPressIn: tmp11, onPressOut: tmp12, children: tmp70 };
                            const tmp76 = closure_12(Pressable, obj10);
                            cResult[53] = tmp11;
                            cResult[54] = tmp12;
                            cResult[55] = onDismiss;
                            cResult[56] = tmp4.closeButton;
                            cResult[57] = tmp76;
                            tmp73 = tmp76;
                          }
                        }
                      }
                    }
                  }
                }
                let tmp63Result = null;
                if (null != buttonLabel) {
                  class Ee {
                    constructor(nativeEvent) {
                      nativeEvent = nativeEvent.nativeEvent;
                      size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                      importDefault(size);
                    }
                  }
                  if (null != onButtonPress) {
                    let obj12;
                    class Ee {
                      constructor(nativeEvent) {
                        nativeEvent = nativeEvent.nativeEvent;
                        size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                        importDefault(size);
                      }
                    }
                    const obj11 = { style: tmp4.buttonSpacing };
                    const items4 = [closure_12(closure_8, obj11), ];
                    const Button = tmp(tmp2[16]).Button;
                    if (experimental_withBlurBackground) {
                      class Ee {
                        constructor(nativeEvent) {
                          nativeEvent = nativeEvent.nativeEvent;
                          size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                          importDefault(size);
                        }
                      }
                      tmp67[2] = buttonIcon;
                      tmp67[3] = buttonLabel;
                      tmp67[4] = onButtonPress;
                      obj12 = tmp67;
                    } else {
                      class Ee {
                        constructor(nativeEvent) {
                          nativeEvent = nativeEvent.nativeEvent;
                          size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                          importDefault(size);
                        }
                      }
                      if (buttonVariant == null) {
                        class Ee {
                          constructor(nativeEvent) {
                            nativeEvent = nativeEvent.nativeEvent;
                            size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                            importDefault(size);
                          }
                        }
                      }
                      obj12 = { variant: tmp66, size: "sm", icon: buttonIcon, text: buttonLabel, onPress: onButtonPress, shiny: buttonShiny, grow: true };
                    }
                    const obj13 = { children: items4 };
                    items4[1] = closure_12(Button, obj12);
                    tmp63Result = closure_13(closure_14, obj13);
                  }
                }
                cResult[43] = buttonIcon;
                cResult[44] = buttonLabel;
                cResult[45] = buttonShiny;
                cResult[46] = buttonVariant;
                cResult[47] = experimental_withBlurBackground;
                cResult[48] = onButtonPress;
                cResult[49] = tmp4.buttonSpacing;
                cResult[50] = tmp63Result;
                tmp61 = tmp63Result;
              }
            }
            const obj14 = { ref, accessibilityRole: "alert", style: tmp4.center, accessible: true, onLayout: tmp44, children: items5 };
            items5 = [tmp29, tmp53];
            const tmp60 = closure_13(closure_8, obj14);
            cResult[39] = tmp29;
            cResult[40] = tmp4.center;
            cResult[41] = tmp53;
            cResult[42] = tmp60;
            tmp57 = tmp60;
          }
        }
        const obj15 = { style: tmp4.textGap, children: items6 };
        items6 = [tmp47, tmp50];
        const tmp56 = closure_13(closure_8, obj15);
        cResult[35] = tmp4.textGap;
        cResult[36] = tmp47;
        cResult[37] = tmp50;
        cResult[38] = tmp56;
        tmp53 = tmp56;
      }
      const obj16 = { style: tmp4.text, variant: "text-sm/medium", color: "text-subtle", children: description };
      const tmp52 = closure_12(ref(sharedValue[15]).Text, obj16);
      cResult[32] = description;
      cResult[33] = tmp4.text;
      cResult[34] = tmp52;
      tmp50 = tmp52;
    }
    const obj17 = { style: tmp46, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: title };
    const tmp49 = closure_12(ref(sharedValue[15]).Text, obj17);
    cResult[29] = tmp46;
    cResult[30] = title;
    cResult[31] = tmp49;
    tmp47 = tmp49;
  }
  const items7 = [tmp4.text, textOnlyPadding];
  cResult[26] = tmp4.text;
  cResult[27] = textOnlyPadding;
  cResult[28] = items7;
  tmp46 = items7;
}) : ((graphic) => {
  let XSmallIcon;
  let buttonIcon;
  let buttonLabel;
  let buttonShiny;
  let buttonVariant;
  let description;
  let enterExitAnimatedStyles;
  let experimental_withBlurBackground;
  let gradientColor;
  let intl;
  let items10;
  let items11;
  let items12;
  let items14;
  let items3;
  let items5;
  let items8;
  let items9;
  let obj12;
  let offsetY;
  let onButtonPress;
  let onDismiss;
  let position;
  let renderImgComponent;
  let sharedValue;
  let surfaceMeasurements;
  let targetMeasurements;
  let title;
  let tmp14Result3;
  let tmp4;
  let tooltipX;
  let tooltipY;
  ({ targetMeasurements, surfaceMeasurements, offsetY } = graphic);
  let num = 0;
  ({ title, description } = graphic);
  if (undefined !== offsetY) {
    num = offsetY;
  }
  graphic = graphic.graphic;
  const imgSource = graphic.imgSource;
  ({ position, onDismiss, buttonLabel, buttonVariant, buttonIcon, onButtonPress, gradientColor, experimental_withBlurBackground, renderImgComponent } = graphic);
  ({ buttonShiny, enterExitAnimatedStyles } = graphic);
  const tmp = closure_16();
  closure_3 = tmp;
  const ref = react.useRef(null);
  const tmp3 = sharedValue(react.useState(null), 2);
  [tmp4, _objectWithoutProperties] = tmp3;
  let tmp7 = imgSource(renderImgComponent[11])(tmp4, surfaceMeasurements, targetMeasurements, position, -8 + num);
  const adjustmentX = tmp7.adjustmentX;
  ({ tooltipX, tooltipY } = tmp7);
  let obj = graphic(renderImgComponent[6]);
  sharedValue = obj.useSharedValue(0);
  let items = [sharedValue];
  const items1 = [sharedValue];
  const callback = react.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = react.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  let obj2 = graphic(renderImgComponent[12]);
  const buttonPressAnimationProps = obj2.useButtonPressAnimationProps(sharedValue);
  const style = buttonPressAnimationProps.style;
  const items2 = [graphic, imgSource, renderImgComponent, tmp];
  let obj3 = {
    ref,
    accessibilityRole: "alert",
    style: tmp.center,
    accessible: true,
    onLayout() {
      const obj = react_native;
      const obj2 = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj2);
    },
    children: items3
  };
  items3 = [, ];
  const tmp13 = _objectWithoutProperties(buttonPressAnimationProps, ref);
  items3[0] = react.useMemo(() => {
    let Graphic;
    let items;
    let obj3;
    if (null != graphic) {
      const obj2 = { style: items, children: closure_12(Graphic, obj3) };
      items = [closure_3.bottomMargin];
      obj3 = { style: size };
      Graphic = Graphic2.Graphic;
      const merged = Object.assign(graphic);
      let str = graphic.aspectRatio;
      if (str == null) {
        str = "1/1";
      }
      size = { height: closure_17[str], width: "auto" };
      return closure_12(metroImportAll, obj2);
    } else {
      let tmp2 = null;
      if (null != renderImgComponent) {
        tmp2 = tmp21();
      }
      if (null != imgSource) {
        const obj = { source: tmp3, style: closure_3.image };
        tmp2 = closure_12(Image, obj);
      }
      let tmp7 = null;
      if (null != tmp2) {
        const obj4 = { style: closure_3.bottomMargin, children: tmp2 };
        tmp7 = closure_12(metroImportAll, obj4);
      }
      return tmp7;
    }
  }, items2);
  let obj4 = { style: tmp.textGap, children: items5 };
  const items4 = [tmp.text, ];
  let textOnlyPadding;
  const Text = graphic(renderImgComponent[15]).Text;
  if (null == graphic) {
    textOnlyPadding = tmp.textOnlyPadding;
  }
  items4[1] = textOnlyPadding;
  items5 = [closure_12(Text, { style: items4, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: title }), ];
  const obj5 = { style: tmp.text, variant: "text-sm/medium", color: "text-subtle", children: description };
  items5[1] = closure_12(graphic(renderImgComponent[15]).Text, obj5);
  items3[1] = closure_13(closure_8, obj4);
  const items6 = [closure_13(closure_8, obj3), , ];
  let tmp14Result = null;
  if (null != buttonLabel) {
    tmp14Result = null;
    if (null != onButtonPress) {
      let obj8;
      const obj6 = { style: tmp.buttonSpacing };
      const items7 = [closure_12(closure_8, obj6), ];
      const Button = tmp8(renderImgComponent[16]).Button;
      if (experimental_withBlurBackground) {
        obj8 = { variant: "secondary-overlay", size: "lg", icon: buttonIcon, text: buttonLabel, onPress: onButtonPress, grow: true };
        const obj7 = { variant: "secondary-overlay", size: "lg", icon: buttonIcon, text: buttonLabel, onPress: onButtonPress, grow: true };
      } else {
        if (buttonVariant == null) {
          buttonVariant = "secondary";
        }
        obj8 = { variant: buttonVariant, size: "sm", icon: buttonIcon, text: buttonLabel, onPress: onButtonPress, shiny: buttonShiny, grow: true };
      }
      const obj9 = { children: items7 };
      items7[1] = closure_12(Button, obj8);
      tmp14Result = closure_13(closure_14, obj9);
    }
  }
  const obj10 = { children: items6 };
  items6[1] = tmp14Result;
  const obj11 = { accessibilityRole: "button", accessibilityLabel: intl.string(graphic(renderImgComponent[17]).t.cpT0Cq), style: tmp.closeButton, onPress: onDismiss, onPressIn: callback, onPressOut: callback1, children: closure_12(XSmallIcon, obj12) };
  intl = tmp8(renderImgComponent[17]).intl;
  obj12 = { size: "xs", color: imgSource(renderImgComponent[8]).colors.ICON_STRONG };
  XSmallIcon = tmp8(renderImgComponent[18]).XSmallIcon;
  items6[2] = closure_12(Pressable, obj11);
  const tmp14Result2 = closure_13(closure_14, obj10);
  if (experimental_withBlurBackground) {
    const obj13 = { style: tmp.bodyContainer, blurTheme: "dark", pressed: sharedValue, children: tmp14Result2 };
    tmp14Result3 = closure_12(tmp8(renderImgComponent[19]).BackgroundBlurView, obj13);
  } else {
    const obj14 = { style: items8, children: items9 };
    items8 = [, ];
    ({ bodyContainer: arr9[0], bodyBgColor: arr9[1] } = tmp);
    let tmp17Result4 = null;
    if (null != gradientColor) {
      const obj15 = { style: tmp.gradient, color: gradientColor, backgroundColor: imgSource(renderImgComponent[8]).colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT };
      const ExpressiveGradient = tmp8(renderImgComponent[20]).ExpressiveGradient;
      tmp17Result4 = closure_12(ExpressiveGradient, obj15);
    }
    items9 = [tmp17Result4, tmp14Result2];
    tmp14Result3 = closure_13(closure_8, obj14);
  }
  const obj16 = {
    onLayout(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
      _objectWithoutProperties(size);
    },
    style: items10,
    children: items11
  };
  items10 = [tmp.container, , ];
  let shadow;
  const tmp8Result = graphic(renderImgComponent[21]);
  if (tmp8Result.isIOS()) {
    shadow = tmp.shadow;
  }
  items10[1] = shadow;
  let num2 = 0;
  if (null != tmp4) {
    num2 = 1;
  }
  items10[2] = { opacity: num2, top: tooltipY, left: tooltipX };
  let tmp17Result5 = "bottom" === position;
  if (tmp17Result5) {
    const obj17 = { position: "bottom", adjustmentX };
    tmp17Result5 = closure_12(closure_19, obj17);
  }
  items11 = [tmp17Result5, , ];
  const obj18 = { onAccessibilityEscape: onDismiss, accessible: false, onPress: onDismiss, style: items12, children: tmp14Result3 };
  let merged = Object.assign(tmp13);
  items12 = [tmp.body, ];
  const tmp8Result2 = graphic(renderImgComponent[21]);
  if (tmp8Result2.isAndroid()) {
    const items13 = [tmp.shadow, enterExitAnimatedStyles];
    items14 = items13;
  } else {
    items14 = [];
  }
  items12[HermesBuiltin.arraySpread(items12, items14, 1)] = style;
  items11[1] = closure_12(closure_15, obj18);
  let tmp17Result6 = "top" === position;
  if (tmp17Result6) {
    const obj19 = { position: "top", adjustmentX };
    tmp17Result6 = closure_12(closure_19, obj19);
  }
  items11[2] = tmp17Result6;
  return closure_13(closure_8, obj16);
});
let closure_18 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((position) => {
  let items;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(17);
  position = position.position;
  const adjustmentX = position.adjustmentX;
  const tmp2 = closure_16();
  let str = "column";
  if ("top" === position) {
    str = "column-reverse";
  }
  if (cResult[0] !== position) {
    const tmp5 = "top" === position ? { marginTop: -6 } : { marginBottom: -6 };
    cResult[0] = position;
    cResult[1] = tmp5;
    tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === str) {
    let tmp7;
    if (cResult[3] === -adjustmentX) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp4) {
      if (cResult[6] === tmp2.cursorContainer) {
        let tmp8;
        let tmp9;
        let tmp13;
        if (cResult[7] === tmp7) {
          tmp8 = cResult[8];
        }
        if (cResult[9] !== tmp2.cursorHead) {
          const obj2 = { style: tmp2.cursorHead };
          const tmp12 = closure_12(metroImportAll, obj2);
          cResult[9] = tmp2.cursorHead;
          cResult[10] = tmp12;
          tmp9 = tmp12;
        } else {
          tmp9 = cResult[10];
        }
        if (cResult[11] !== tmp2.cursorSpine) {
          const obj3 = { style: tmp2.cursorSpine };
          const tmp16 = closure_12(metroImportAll, obj3);
          cResult[11] = tmp2.cursorSpine;
          cResult[12] = tmp16;
          tmp13 = tmp16;
        } else {
          tmp13 = cResult[12];
        }
        if (cResult[13] === tmp8) {
          if (cResult[14] === tmp9) {
            let tmp17;
            if (cResult[15] === tmp13) {
              tmp17 = cResult[16];
            }
            return tmp17;
          }
        }
        const obj4 = { style: tmp8, children: items };
        items = [tmp9, tmp13];
        const tmp20 = map1(metroImportAll, obj4);
        cResult[13] = tmp8;
        cResult[14] = tmp9;
        cResult[15] = tmp13;
        cResult[16] = tmp20;
        tmp17 = tmp20;
      }
    }
    const items1 = [tmp2.cursorContainer, tmp4, tmp7];
    cResult[5] = tmp4;
    cResult[6] = tmp2.cursorContainer;
    cResult[7] = tmp7;
    cResult[8] = items1;
    tmp8 = items1;
  }
  const obj5 = { flexDirection: str, left: -adjustmentX };
  cResult[2] = str;
  cResult[3] = -adjustmentX;
  cResult[4] = obj5;
  tmp7 = obj5;
}) : ((arg0) => {
  let adjustmentX;
  let items;
  let items1;
  let position;
  ({ position, adjustmentX } = arg0);
  const tmp = closure_16();
  let str = "column";
  if ("top" === position) {
    str = "column-reverse";
  }
  const obj = { style: items, children: items1 };
  items = [tmp.cursorContainer, "top" === position ? { marginTop: -6 } : { marginBottom: -6 }, { flexDirection: str, left: -adjustmentX }];
  items1 = [, ];
  const obj2 = { style: tmp.cursorHead };
  items1[0] = closure_12(metroImportAll, obj2);
  const obj3 = { style: tmp.cursorSpine };
  items1[1] = closure_12(metroImportAll, obj3);
  return map1(metroImportAll, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((experimental_withBlurBackground) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = native;
  let DARK = obj2.useThemeContext().theme;
  if (experimental_withBlurBackground.experimental_withBlurBackground) {
    DARK = ThemeTypes.DARK;
  }
  if (cResult[0] !== experimental_withBlurBackground) {
    const obj3 = {};
    const merged = Object.assign(experimental_withBlurBackground);
    const tmp11 = closure_12(closure_18, obj3);
    cResult[0] = experimental_withBlurBackground;
    cResult[1] = tmp11;
    tmp5 = tmp11;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    let tmp12;
    if (cResult[3] === DARK) {
      tmp12 = cResult[4];
    }
    return tmp12;
  }
  const tmp13 = closure_12(native.ThemeContextProvider, { theme: DARK, children: tmp5 });
  cResult[2] = tmp5;
  cResult[3] = DARK;
  cResult[4] = tmp13;
  tmp12 = tmp13;
}) : ((experimental_withBlurBackground) => {
  let obj3;
  const obj = native;
  let DARK = obj.useThemeContext().theme;
  if (experimental_withBlurBackground.experimental_withBlurBackground) {
    DARK = ThemeTypes.DARK;
  }
  const obj2 = { theme: DARK, children: closure_12(closure_18, obj3) };
  obj3 = {};
  const ThemeContextProvider = native.ThemeContextProvider;
  const merged = Object.assign(experimental_withBlurBackground);
  return closure_12(ThemeContextProvider, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("design/components/Coachmark/native/Coachmark.native.tsx");

export const Coachmark = tmp6;
export const CoachmarkContainer = tmp7;