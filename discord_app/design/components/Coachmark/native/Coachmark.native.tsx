// discord_app/design/components/Coachmark/native/Coachmark.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import setAccessibilityFocus from "../../../../modules/a11y/native/setAccessibilityFocus.android.tsx";
import Graphic from "../../Graphic/native/Graphic.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";

require = fn;
let closure_3 = ["style"];
let closure_4 = ["style"];
get_ActivityIndicator = fn(17);
({ View: closure_8, Pressable } = get_ActivityIndicator);
const ThemeTypes = fn(1087).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let closure_14 = ReanimatedRexport.createAnimatedComponent(Pressable);
const createStyles = fn(5153);
let obj = {
  container: { position: "absolute", alignItems: "center" },
  shadow: null,
  body: null,
  textGap: null,
  textOnlyPadding: null,
  bodyBgColor: null,
  gradient: null,
  bodyContainer: null,
  center: null,
  buttonSpacing: null,
  text: null,
  cursorContainer: null,
  cursorHead: null,
  cursorSpine: null,
  image: null,
  bottomMargin: null,
  closeButton: null,
};
let merged = Object.assign(nativeDefault.shadows.SHADOW_BUTTON_OVERLAY);
obj.shadow = {};
obj.body = {
  width: nativeDefault.modules.mobile.COACHMARK_BODY_WIDTH,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  zIndex: 1,
};
obj.textGap = { gap: 4 };
let obj3 = {};
let obj4 = {
  width: nativeDefault.modules.mobile.COACHMARK_BODY_WIDTH,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  zIndex: 1,
};
obj.textOnlyPadding = { paddingHorizontal: nativeDefault.space.PX_24 };
let obj5 = { paddingHorizontal: nativeDefault.space.PX_24 };
obj.bodyBgColor = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.MOBILE_COACHMARK_BORDER_DEFAULT,
  backgroundColor: nativeDefault.colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
};
let obj6 = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.MOBILE_COACHMARK_BORDER_DEFAULT,
  backgroundColor: nativeDefault.colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
};
obj.gradient = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
let obj7 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj.bodyContainer = { padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj.center = { alignItems: "center", justifyContent: "center" };
let obj8 = { padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj.buttonSpacing = { height: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
obj.text = { maxWidth: 200, textAlign: "center" };
obj.cursorContainer = { alignItems: "center", zIndex: 0 };
let size = {
  height: 8,
  width: 8,
  borderRadius: nativeDefault.radii.xs,
  borderWidth: 2,
  backgroundColor: "transparent",
  borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
obj.cursorHead = size;
const size1 = { width: 2, height: 16, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.cursorSpine = size1;
obj.image = { height: 40, width: 40 };
let obj9 = { height: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
obj.bottomMargin = { marginBottom: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
let rect = {
  position: "absolute",
  top: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING,
  right: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING,
};
obj.closeButton = rect;
let closure_15 = createStyles.createStyles(obj);
let closure_16 = { "21/9": 90, "16/9": 90, "6/4": 60, "2/1": 40, "1/1": 40 };
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Coachmark(arg0) {
      const cResult = ref(gradient[10]).c(102);
      ({
        targetMeasurements,
        surfaceMeasurements,
        title,
        description,
        offsetY,
        graphic,
        imgSource,
        position,
        onDismiss,
        buttonLabel,
        buttonVariant,
        buttonIcon,
        buttonShiny,
        onButtonPress,
        gradientColor,
        experimental_withBlurBackground,
        renderImgComponent,
        enterExitAnimatedStyles,
      } = arg0);
      let num = 0;
      if (undefined !== offsetY) {
        num = offsetY;
      }
      const tmp4 = closure_15();
      ref = noop.useRef(null);
      const obj = ref(gradient[10]);
      [tmp7, importDefault] = noop.useState(null);
      const tmp6 = _slicedToArray(noop.useState(null), 2);
      ({ adjustmentX, tooltipX, tooltipY } = require("useTooltipPosition")(
        tmp7,
        surfaceMeasurements,
        targetMeasurements,
        position,
        -8 + num,
      ));
      const tmp9 = require("useTooltipPosition")(tmp7, surfaceMeasurements, targetMeasurements, position, -8 + num);
      gradient = ref(gradient[6]).useSharedValue(0);
      if (cResult[0] !== gradient) {
        const fn = function c() {
          const result = gradient.set(1);
        };
        cResult[0] = gradient;
        cResult[1] = fn;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] !== gradient) {
        function ee() {
          const result = gradient.set(0);
        }
        cResult[2] = gradient;
        cResult[3] = ee;
        let tmp11 = ee;
      } else {
        tmp11 = cResult[3];
      }
      const tmpResult = ref(gradient[6]);
      const buttonPressAnimationProps = ref(gradient[12]).useButtonPressAnimationProps(gradient);
      if (cResult[4] !== buttonPressAnimationProps) {
        const style = buttonPressAnimationProps.style;
        const tmp17 = _objectWithoutProperties(buttonPressAnimationProps, closure_3);
        cResult[4] = buttonPressAnimationProps;
        cResult[5] = tmp17;
        cResult[6] = style;
        let tmp14 = style;
        let tmp13 = tmp17;
      } else {
        tmp13 = cResult[5];
        tmp14 = cResult[6];
      }
      if (null == graphic) {
        let bottomMargin = null;
        if (null == renderImgComponent) {
          if (null == imgSource) {
            let tmp26 = null;
            if (null != bottomMargin) {
              if (cResult[20] === bottomMargin) {
              }
              const obj2 = { style: tmp4.bottomMargin, children: bottomMargin };
              const tmp41 = closure_11(closure_8, obj2);
              cResult[20] = bottomMargin;
              bottomMargin = tmp4.bottomMargin;
              cResult[21] = bottomMargin;
              cResult[22] = tmp41;
            }
          } else {
            if (cResult[17] === imgSource) {
            }
            const obj3 = { source: imgSource, style: tmp4.image };
            const tmp36 = closure_11(require("FastImage"), obj3);
            cResult[17] = imgSource;
            imgSource = tmp4.image;
            cResult[18] = imgSource;
            cResult[19] = tmp36;
          }
        } else if (cResult[15] !== renderImgComponent) {
          const renderImgComponentResult = renderImgComponent();
          cResult[15] = renderImgComponent;
          cResult[16] = renderImgComponentResult;
        }
      } else {
        let str = graphic.aspectRatio;
        if (str == null) {
          str = "1/1";
        }
        if (cResult[7] !== closure_16[str]) {
          let size = { height: tmp18, width: "auto" };
          cResult[7] = tmp18;
          cResult[8] = size;
          let tmp19 = size;
        } else {
          tmp19 = cResult[8];
        }
        if (cResult[9] === graphic) {
          if (cResult[10] === tmp19) {
            let tmp20 = cResult[11];
          }
          if (cResult[12] === tmp4.bottomMargin) {
            if (cResult[13] === tmp20) {
              tmp26 = cResult[14];
            }
          }
          const obj4 = { style: tmp4.bottomMargin, children: tmp20 };
          const tmp29 = closure_11(closure_8, obj4);
          cResult[12] = tmp4.bottomMargin;
          cResult[13] = tmp20;
          cResult[14] = tmp29;
          tmp26 = tmp29;
        }
        const obj5 = {};
        const merged = Object.assign(graphic);
        obj5.style = tmp19;
        const tmp25 = closure_11(tmp(tmp2[13]).Graphic, obj5);
        cResult[9] = graphic;
        cResult[10] = tmp19;
        cResult[11] = tmp25;
        tmp20 = tmp25;
      }
      if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
        function be() {
          const result = setAccessibilityFocus.setAccessibilityFocus({ ref, delay: 100 });
        }
        cResult[23] = be;
        let tmp43 = be;
      } else {
        tmp43 = cResult[23];
      }
      let textOnlyPadding;
      if (null == graphic) {
        textOnlyPadding = tmp4.textOnlyPadding;
      }
      if (cResult[24] === tmp4.text) {
        if (cResult[25] === textOnlyPadding) {
          let tmp45 = cResult[26];
        }
        if (cResult[27] === tmp45) {
          if (cResult[28] === title) {
            let tmp46 = cResult[29];
          }
          if (cResult[30] === description) {
            if (cResult[31] === tmp4.text) {
              let tmp49 = cResult[32];
            }
            if (cResult[33] === tmp4.textGap) {
              if (cResult[34] === tmp46) {
                if (cResult[35] === tmp49) {
                  let tmp52 = cResult[36];
                }
                if (cResult[37] === tmp26) {
                  if (cResult[38] === tmp4.center) {
                    if (cResult[39] === tmp52) {
                      let tmp56 = cResult[40];
                    }
                    if (cResult[41] === buttonIcon) {
                      if (cResult[42] === buttonLabel) {
                        if (cResult[43] === buttonShiny) {
                          if (cResult[44] === buttonVariant) {
                            if (cResult[45] === experimental_withBlurBackground) {
                              if (cResult[46] === onButtonPress) {
                                if (cResult[47] === tmp4.buttonSpacing) {
                                  let tmp60 = cResult[48];
                                }
                                const _Symbol = Symbol;
                                if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                                  const intl = tmp(tmp2[18]).intl;
                                  const stringResult = intl.string(tmp(tmp2[18]).t.cpT0Cq);
                                  cResult[49] = stringResult;
                                  let tmp67 = stringResult;
                                } else {
                                  tmp67 = cResult[49];
                                }
                                const _Symbol2 = Symbol;
                                if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
                                  const obj6 = { size: "xs", color: require("native").colors.ICON_STRONG };
                                  const tmp71 = closure_11(tmp(tmp2[19]).XSmallIcon, obj6);
                                  cResult[50] = tmp71;
                                  let tmp69 = tmp71;
                                } else {
                                  tmp69 = cResult[50];
                                }
                                if (cResult[51] === tmp10) {
                                  if (cResult[52] === tmp11) {
                                    if (cResult[53] === onDismiss) {
                                      if (cResult[54] === tmp4.closeButton) {
                                        let tmp72 = cResult[55];
                                      }
                                      if (cResult[56] === tmp56) {
                                        if (cResult[57] === tmp60) {
                                          if (cResult[58] === tmp72) {
                                            let tmp76 = cResult[59];
                                          }
                                          if (cResult[60] === tmp76) {
                                            if (cResult[61] === experimental_withBlurBackground) {
                                              if (cResult[62] === gradientColor) {
                                                if (cResult[63] === gradient) {
                                                  if (cResult[64] === tmp4.bodyBgColor) {
                                                    if (cResult[65] === tmp4.bodyContainer) {
                                                      if (cResult[66] === tmp4.gradient) {
                                                        const _Symbol3 = Symbol;
                                                        if (cResult[68] === Symbol.for("react.memo_cache_sentinel")) {
                                                          function we(nativeEvent) {
                                                            nativeEvent = nativeEvent.nativeEvent;
                                                            const size = {
                                                              width: nativeEvent.layout.width,
                                                              height: nativeEvent.layout.height,
                                                            };
                                                            importDefault(size);
                                                          }
                                                          cResult[68] = we;
                                                          let tmp88 = we;
                                                        } else {
                                                          tmp88 = cResult[68];
                                                        }
                                                        if (cResult[69] !== tmp4.shadow) {
                                                          let shadow;
                                                          if (tmpResult5.isIOS()) {
                                                            shadow = tmp4.shadow;
                                                          }
                                                          cResult[69] = tmp4.shadow;
                                                          cResult[70] = shadow;
                                                          let tmp89 = shadow;
                                                          tmpResult5 = tmp(tmp2[22]);
                                                        } else {
                                                          tmp89 = cResult[70];
                                                        }
                                                        let num68 = 0;
                                                        if (null != tmp7) {
                                                          num68 = 1;
                                                        }
                                                        if (cResult[71] === num68) {
                                                          if (cResult[72] === tooltipX) {
                                                            if (cResult[73] === tooltipY) {
                                                              let tmp91 = cResult[74];
                                                            }
                                                            if (cResult[75] === tmp4.container) {
                                                              if (cResult[76] === tmp89) {
                                                                if (cResult[77] === tmp91) {
                                                                  let tmp92 = cResult[78];
                                                                }
                                                                if (cResult[79] === adjustmentX) {
                                                                  if (cResult[80] === position) {
                                                                    let tmp93 = cResult[81];
                                                                  }
                                                                  if (cResult[82] === enterExitAnimatedStyles) {
                                                                    if (cResult[83] === tmp4.shadow) {
                                                                      if (cResult[85] === tmp14) {
                                                                        if (cResult[86] === tmp4.body) {
                                                                          if (cResult[87] === tmp97) {
                                                                            let tmp99 = cResult[88];
                                                                          }
                                                                          if (cResult[89] === tmp13) {
                                                                            if (cResult[90] === tmp80) {
                                                                              if (cResult[91] === onDismiss) {
                                                                                if (cResult[92] === tmp99) {
                                                                                  let tmp102 = cResult[93];
                                                                                }
                                                                                if (cResult[94] === adjustmentX) {
                                                                                  if (cResult[95] === position) {
                                                                                    let tmp109 = cResult[96];
                                                                                  }
                                                                                  if (cResult[97] === tmp92) {
                                                                                    if (cResult[98] === tmp93) {
                                                                                      if (cResult[99] === tmp102) {
                                                                                        if (cResult[100] === tmp109) {
                                                                                          let tmp113 = cResult[101];
                                                                                        }
                                                                                        return tmp113;
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                  const obj7 = {
                                                                                    onLayout: tmp88,
                                                                                    style: tmp92,
                                                                                    children: null,
                                                                                  };
                                                                                  const items = [tmp93, tmp102, tmp109];
                                                                                  obj7.children = items;
                                                                                  const tmp116 = closure_12(
                                                                                    closure_8,
                                                                                    obj7,
                                                                                  );
                                                                                  cResult[97] = tmp92;
                                                                                  cResult[98] = tmp93;
                                                                                  cResult[99] = tmp102;
                                                                                  cResult[100] = tmp109;
                                                                                  cResult[101] = tmp116;
                                                                                  tmp113 = tmp116;
                                                                                }
                                                                                let tmp110 = "top" === position;
                                                                                if (tmp110) {
                                                                                  const obj8 = {
                                                                                    position: "top",
                                                                                    adjustmentX,
                                                                                  };
                                                                                  tmp110 = closure_11(closure_18, obj8);
                                                                                }
                                                                                cResult[94] = adjustmentX;
                                                                                cResult[95] = position;
                                                                                cResult[96] = tmp110;
                                                                                tmp109 = tmp110;
                                                                              }
                                                                            }
                                                                          }
                                                                          const obj9 = {};
                                                                          const merged1 = Object.assign(tmp13);
                                                                          obj9.onAccessibilityEscape = onDismiss;
                                                                          obj9.accessible = false;
                                                                          obj9.onPress = onDismiss;
                                                                          obj9.style = tmp99;
                                                                          obj9.children = tmp80;
                                                                          const tmp108 = closure_11(closure_14, obj9);
                                                                          cResult[89] = tmp13;
                                                                          cResult[90] = tmp80;
                                                                          cResult[91] = onDismiss;
                                                                          cResult[92] = tmp99;
                                                                          cResult[93] = tmp108;
                                                                          tmp102 = tmp108;
                                                                        }
                                                                      }
                                                                      const items1 = [tmp4.body];
                                                                      items1[
                                                                        HermesBuiltin.arraySpread(cResult[84], 1)
                                                                      ] = tmp14;
                                                                      cResult[85] = tmp14;
                                                                      cResult[86] = tmp4.body;
                                                                      cResult[87] = cResult[84];
                                                                      cResult[88] = items1;
                                                                      tmp99 = items1;
                                                                    }
                                                                  }
                                                                  if (tmpResult6.isAndroid()) {
                                                                    const items2 = [
                                                                      tmp4.shadow,
                                                                      enterExitAnimatedStyles,
                                                                    ];
                                                                    let items3 = items2;
                                                                  } else {
                                                                    items3 = [];
                                                                  }
                                                                  cResult[82] = enterExitAnimatedStyles;
                                                                  enterExitAnimatedStyles = tmp4.shadow;
                                                                  cResult[83] = enterExitAnimatedStyles;
                                                                  cResult[84] = items3;
                                                                  tmpResult6 = tmp(tmp2[22]);
                                                                }
                                                                let tmp94 = "bottom" === position;
                                                                if (tmp94) {
                                                                  const obj10 = { position: "bottom", adjustmentX };
                                                                  tmp94 = closure_11(closure_18, obj10);
                                                                }
                                                                cResult[79] = adjustmentX;
                                                                cResult[80] = position;
                                                                cResult[81] = tmp94;
                                                                tmp93 = tmp94;
                                                              }
                                                            }
                                                            const items4 = [tmp4.container, tmp89, tmp91];
                                                            cResult[75] = tmp4.container;
                                                            cResult[76] = tmp89;
                                                            cResult[77] = tmp91;
                                                            cResult[78] = items4;
                                                            tmp92 = items4;
                                                          }
                                                        }
                                                        const rect = { opacity: num68, top: tooltipY, left: tooltipX };
                                                        cResult[71] = num68;
                                                        cResult[72] = tooltipX;
                                                        cResult[73] = tooltipY;
                                                        cResult[74] = rect;
                                                        tmp91 = rect;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          if (experimental_withBlurBackground) {
                                            const obj11 = {
                                              style: tmp4.bodyContainer,
                                              blurTheme: "dark",
                                              pressed: gradient,
                                              children: tmp76,
                                            };
                                            let tmp81Result = closure_11(tmp(tmp2[20]).BackgroundBlurView, obj11);
                                          } else {
                                            const obj12 = { style: null, children: null };
                                            const items5 = [,];
                                            ({ bodyContainer: arr6[0], bodyBgColor: arr6[1] } = tmp4);
                                            obj12.style = items5;
                                            let tmp83 = null;
                                            if (null != gradientColor) {
                                              const obj13 = {
                                                style: tmp4.gradient,
                                                color: gradientColor,
                                                backgroundColor:
                                                  require("native").colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT,
                                              };
                                              tmp83 = closure_11(tmp(tmp2[21]).ExpressiveGradient, obj13);
                                            }
                                            const items6 = [tmp83, tmp76];
                                            obj12.children = items6;
                                            tmp81Result = closure_12(closure_8, obj12);
                                          }
                                          cResult[60] = tmp76;
                                          cResult[61] = experimental_withBlurBackground;
                                          cResult[62] = gradientColor;
                                          cResult[63] = gradient;
                                          cResult[64] = tmp4.bodyBgColor;
                                          ({ bodyContainer: tmp3[65], gradient } = tmp4);
                                          cResult[66] = gradient;
                                          cResult[67] = tmp81Result;
                                        }
                                      }
                                      const obj14 = { children: null };
                                      const items7 = [tmp56, tmp60, tmp72];
                                      obj14.children = items7;
                                      const tmp79 = closure_12(closure_13, obj14);
                                      cResult[56] = tmp56;
                                      cResult[57] = tmp60;
                                      cResult[58] = tmp72;
                                      cResult[59] = tmp79;
                                      tmp76 = tmp79;
                                    }
                                  }
                                }
                                const obj15 = {
                                  accessibilityRole: "button",
                                  accessibilityLabel: tmp67,
                                  style: tmp4.closeButton,
                                  onPress: onDismiss,
                                  onPressIn: tmp10,
                                  onPressOut: tmp11,
                                  children: tmp69,
                                };
                                const tmp75 = closure_11(Pressable, obj15);
                                cResult[51] = tmp10;
                                cResult[52] = tmp11;
                                cResult[53] = onDismiss;
                                cResult[54] = tmp4.closeButton;
                                cResult[55] = tmp75;
                                tmp72 = tmp75;
                              }
                            }
                          }
                        }
                      }
                    }
                    let tmp61 = null;
                    if (null != buttonLabel) {
                      tmp61 = null;
                      if (null != onButtonPress) {
                        const obj16 = { style: tmp4.buttonSpacing };
                        const items8 = [closure_11(closure_8, obj16)];
                        if (experimental_withBlurBackground) {
                          const obj17 = {
                            variant: "secondary-overlay",
                            size: "lg",
                            icon: buttonIcon,
                            text: buttonLabel,
                            onPress: onButtonPress,
                            grow: true,
                          };
                          let obj18 = obj17;
                        } else {
                          let str2 = buttonVariant;
                          if (buttonVariant == null) {
                            str2 = "secondary";
                          }
                          obj18 = {
                            variant: str2,
                            size: "sm",
                            icon: buttonIcon,
                            text: buttonLabel,
                            onPress: onButtonPress,
                            shiny: buttonShiny,
                            grow: true,
                          };
                        }
                        const obj19 = { children: null };
                        items8[1] = closure_11(tmp(tmp2[17]).Button, obj18);
                        obj19.children = items8;
                        closure_12(closure_13, obj19);
                      }
                    }
                    cResult[41] = buttonIcon;
                    cResult[42] = buttonLabel;
                    cResult[43] = buttonShiny;
                    cResult[44] = buttonVariant;
                    cResult[45] = experimental_withBlurBackground;
                    cResult[46] = onButtonPress;
                    cResult[47] = tmp4.buttonSpacing;
                    cResult[48] = tmp61;
                    tmp60 = tmp61;
                  }
                }
                const obj20 = {
                  ref,
                  accessibilityRole: "alert",
                  style: tmp4.center,
                  accessible: true,
                  onLayout: tmp43,
                  children: null,
                };
                const items9 = [tmp26, tmp52];
                obj20.children = items9;
                const tmp59 = closure_12(closure_8, obj20);
                cResult[37] = tmp26;
                cResult[38] = tmp4.center;
                cResult[39] = tmp52;
                cResult[40] = tmp59;
                tmp56 = tmp59;
              }
            }
            const obj21 = { style: tmp4.textGap, children: null };
            const items10 = [tmp46, tmp49];
            obj21.children = items10;
            const tmp55 = closure_12(closure_8, obj21);
            cResult[33] = tmp4.textGap;
            cResult[34] = tmp46;
            cResult[35] = tmp49;
            cResult[36] = tmp55;
            tmp52 = tmp55;
          }
          const obj22 = { style: tmp4.text, variant: "text-sm/medium", color: "text-subtle", children: description };
          const tmp51 = closure_11(tmp(tmp2[16]).Text, obj22);
          cResult[30] = description;
          cResult[31] = tmp4.text;
          cResult[32] = tmp51;
          tmp49 = tmp51;
        }
        const obj23 = {
          style: tmp45,
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: title,
        };
        const tmp48 = closure_11(tmp(tmp2[16]).Text, obj23);
        cResult[27] = tmp45;
        cResult[28] = title;
        cResult[29] = tmp48;
        tmp46 = tmp48;
      }
      const items11 = [tmp4.text, textOnlyPadding];
      cResult[24] = tmp4.text;
      cResult[25] = textOnlyPadding;
      cResult[26] = items11;
      tmp45 = items11;
      const tmpResult4 = ref(gradient[12]);
    }
  : function Coachmark(graphic) {
      ({ targetMeasurements, surfaceMeasurements, offsetY } = graphic);
      let num = 0;
      ({ title, description } = graphic);
      if (undefined !== offsetY) {
        num = offsetY;
      }
      graphic = graphic.graphic;
      const imgSource = graphic.imgSource;
      ({
        position,
        onDismiss,
        buttonLabel,
        buttonVariant,
        buttonIcon,
        onButtonPress,
        gradientColor,
        experimental_withBlurBackground,
        renderImgComponent,
      } = graphic);
      ({ buttonShiny, enterExitAnimatedStyles } = graphic);
      const tmp = closure_15();
      closure_3 = tmp;
      const ref = noop.useRef(null);
      [tmp4, _objectWithoutProperties] = sharedValue(noop.useState(null), 2);
      const tmp7 = imgSource(renderImgComponent[11])(tmp4, surfaceMeasurements, targetMeasurements, position, -8 + num);
      const adjustmentX = tmp7.adjustmentX;
      ({ tooltipX, tooltipY } = tmp7);
      const tmp3 = sharedValue(noop.useState(null), 2);
      sharedValue = graphic(renderImgComponent[6]).useSharedValue(0);
      const items = [sharedValue];
      const items1 = [sharedValue];
      const callback = noop.useCallback(() => {
        const result = sharedValue.set(1);
      }, items);
      const callback1 = noop.useCallback(() => {
        const result = sharedValue.set(0);
      }, items1);
      let obj = graphic(renderImgComponent[6]);
      const buttonPressAnimationProps = graphic(renderImgComponent[12]).useButtonPressAnimationProps(sharedValue);
      let obj2 = graphic(renderImgComponent[12]);
      const items2 = [graphic, imgSource, renderImgComponent, tmp];
      let obj3 = {
        ref,
        accessibilityRole: "alert",
        style: tmp.center,
        accessible: true,
        onLayout() {
          const result = setAccessibilityFocus.setAccessibilityFocus({ ref, delay: 100 });
        },
        children: null,
      };
      const items3 = [
        noop.useMemo(() => {
          if (null != graphic) {
            const obj2 = { style: closure_3.bottomMargin, children: null };
            const obj3 = {};
            const merged = Object.assign(graphic);
            let str = graphic.aspectRatio;
            if (str == null) {
              str = "1/1";
            }
            const size = { height: closure_16[str], width: "auto" };
            obj3.style = size;
            obj2.children = closure_2_11(Graphic.Graphic, obj3);
            return closure_2_11(closure_2_8, obj2);
          } else {
            let tmp2 = null;
            if (null != renderImgComponent) {
              tmp2 = tmp22();
            }
            if (null != imgSource) {
              const obj = { source: tmp3, style: closure_3.image };
              tmp2 = closure_2_11(FastImageDefault, obj);
            }
            let tmp8 = null;
            if (null != tmp2) {
              const obj4 = { style: closure_3.bottomMargin, children: tmp2 };
              tmp8 = closure_2_11(closure_2_8, obj4);
            }
            return tmp8;
          }
        }, items2),
      ];
      let obj4 = { style: tmp.textGap, children: null };
      const items4 = [tmp.text];
      let textOnlyPadding;
      if (null == graphic) {
        textOnlyPadding = tmp.textOnlyPadding;
      }
      items4[1] = textOnlyPadding;
      const items5 = [
        closure_11(graphic(renderImgComponent[16]).Text, {
          style: items4,
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: title,
        }),
        closure_11(graphic(renderImgComponent[16]).Text, {
          style: tmp.text,
          variant: "text-sm/medium",
          color: "text-subtle",
          children: description,
        }),
      ];
      obj4.children = items5;
      items3[1] = closure_12(closure_8, obj4);
      obj3.children = items3;
      const items6 = [closure_12(closure_8, obj3), ,];
      let tmp19 = null;
      if (null != buttonLabel) {
        tmp19 = null;
        if (null != onButtonPress) {
          const obj6 = { style: tmp.buttonSpacing };
          const items7 = [closure_11(closure_8, obj6)];
          if (experimental_withBlurBackground) {
            const obj7 = {
              variant: "secondary-overlay",
              size: "lg",
              icon: buttonIcon,
              text: buttonLabel,
              onPress: onButtonPress,
              grow: true,
            };
            let obj8 = obj7;
          } else {
            if (buttonVariant == null) {
              buttonVariant = "secondary";
            }
            obj8 = {
              variant: buttonVariant,
              size: "sm",
              icon: buttonIcon,
              text: buttonLabel,
              onPress: onButtonPress,
              shiny: buttonShiny,
              grow: true,
            };
          }
          const obj9 = { children: null };
          items7[1] = closure_11(tmp8(renderImgComponent[17]).Button, obj8);
          obj9.children = items7;
          closure_12(closure_13, obj9);
        }
      }
      const obj10 = { children: null };
      items6[1] = tmp19;
      const obj11 = {
        accessibilityRole: "button",
        accessibilityLabel: null,
        style: null,
        onPress: null,
        onPressIn: null,
        onPressOut: null,
        children: null,
      };
      const intl = tmp8(renderImgComponent[18]).intl;
      obj11.accessibilityLabel = intl.string(graphic(renderImgComponent[18]).t.cpT0Cq);
      obj11.style = tmp.closeButton;
      obj11.onPress = onDismiss;
      obj11.onPressIn = callback;
      obj11.onPressOut = callback1;
      const obj5 = { style: tmp.text, variant: "text-sm/medium", color: "text-subtle", children: description };
      const tmp13 = _objectWithoutProperties(buttonPressAnimationProps, ref);
      obj11.children = closure_11(graphic(renderImgComponent[19]).XSmallIcon, {
        size: "xs",
        color: imgSource(renderImgComponent[8]).colors.ICON_STRONG,
      });
      items6[2] = closure_11(Pressable, obj11);
      obj10.children = items6;
      const tmp14Result2 = closure_12(closure_13, obj10);
      if (experimental_withBlurBackground) {
        const obj13 = { style: tmp.bodyContainer, blurTheme: "dark", pressed: sharedValue, children: tmp14Result2 };
        let tmp14Result3 = closure_11(tmp8(renderImgComponent[20]).BackgroundBlurView, obj13);
      } else {
        const obj14 = { style: null, children: null };
        const items8 = [,];
        ({ bodyContainer: arr9[0], bodyBgColor: arr9[1] } = tmp);
        obj14.style = items8;
        let tmp17Result4 = null;
        if (null != gradientColor) {
          const obj15 = {
            style: tmp.gradient,
            color: gradientColor,
            backgroundColor: tmp5(renderImgComponent[8]).colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT,
          };
          tmp17Result4 = closure_11(tmp8(renderImgComponent[21]).ExpressiveGradient, obj15);
        }
        const items9 = [tmp17Result4, tmp14Result2];
        obj14.children = items9;
        tmp14Result3 = closure_12(closure_8, obj14);
      }
      const obj16 = {
        onLayout(nativeEvent) {
          nativeEvent = nativeEvent.nativeEvent;
          const size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
          _objectWithoutProperties(size);
        },
        style: null,
        children: null,
      };
      const items10 = [tmp.container, ,];
      const obj12 = { size: "xs", color: imgSource(renderImgComponent[8]).colors.ICON_STRONG };
      let shadow;
      if (tmp8Result.isIOS()) {
        shadow = tmp.shadow;
      }
      items10[1] = shadow;
      let num2 = 0;
      if (null != tmp4) {
        num2 = 1;
      }
      items10[2] = { opacity: num2, top: tooltipY, left: tooltipX };
      obj16.style = items10;
      let tmp17Result5 = "bottom" === position;
      if (tmp17Result5) {
        const obj17 = { position: "bottom", adjustmentX };
        tmp17Result5 = closure_11(closure_18, obj17);
      }
      const items11 = [tmp17Result5, ,];
      const obj18 = {};
      let merged = Object.assign(tmp13);
      obj18.onAccessibilityEscape = onDismiss;
      obj18.accessible = false;
      obj18.onPress = onDismiss;
      const items12 = [tmp.body];
      tmp8Result = graphic(renderImgComponent[22]);
      if (tmp8Result2.isAndroid()) {
        const items13 = [tmp.shadow, enterExitAnimatedStyles];
        let items14 = items13;
      } else {
        items14 = [];
      }
      items12[HermesBuiltin.arraySpread(items14, 1)] = buttonPressAnimationProps.style;
      obj18.style = items12;
      obj18.children = tmp14Result3;
      items11[1] = closure_11(closure_14, obj18);
      let tmp17Result6 = "top" === position;
      if (tmp17Result6) {
        const obj19 = { position: "top", adjustmentX };
        tmp17Result6 = closure_11(closure_18, obj19);
      }
      items11[2] = tmp17Result6;
      obj16.children = items11;
      return closure_12(closure_8, obj16);
    };
let closure_17 = tmp5;
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Cursor(position) {
      const cResult = c.c(17);
      position = position.position;
      const tmp2 = closure_15();
      let str = "column";
      if ("top" === position) {
        str = "column-reverse";
      }
      if (cResult[0] !== position) {
        const tmp5 = tmp3 ? { marginTop: -6 } : { marginBottom: -6 };
        cResult[0] = position;
        cResult[1] = tmp5;
      } else {
        if (cResult[2] === str) {
          if (cResult[3] === tmp7) {
            let tmp8 = cResult[4];
          }
          if (cResult[5] === tmp4) {
            if (cResult[6] === tmp2.cursorContainer) {
              if (cResult[7] === tmp8) {
                let tmp9 = cResult[8];
              }
              if (cResult[9] !== tmp2.cursorHead) {
                const obj2 = { style: tmp2.cursorHead };
                const tmp13 = closure_1_11(closure_1_8, obj2);
                cResult[9] = tmp2.cursorHead;
                cResult[10] = tmp13;
                let tmp10 = tmp13;
              } else {
                tmp10 = cResult[10];
              }
              if (cResult[11] !== tmp2.cursorSpine) {
                const obj3 = { style: tmp2.cursorSpine };
                const tmp17 = closure_1_11(closure_1_8, obj3);
                cResult[11] = tmp2.cursorSpine;
                cResult[12] = tmp17;
                let tmp14 = tmp17;
              } else {
                tmp14 = cResult[12];
              }
              if (cResult[13] === tmp9) {
                if (cResult[14] === tmp10) {
                  if (cResult[15] === tmp14) {
                    let tmp18 = cResult[16];
                  }
                  return tmp18;
                }
              }
              const obj4 = { style: tmp9, children: null };
              const items = [tmp10, tmp14];
              obj4.children = items;
              const tmp21 = __initData(closure_1_8, obj4);
              cResult[13] = tmp9;
              cResult[14] = tmp10;
              cResult[15] = tmp14;
              cResult[16] = tmp21;
              tmp18 = tmp21;
            }
          }
          const items1 = [tmp2.cursorContainer, tmp4, tmp8];
          cResult[5] = tmp4;
          cResult[6] = tmp2.cursorContainer;
          cResult[7] = tmp8;
          cResult[8] = items1;
          tmp9 = items1;
        }
        const obj5 = { flexDirection: str, left: -position.adjustmentX };
        cResult[2] = str;
        cResult[3] = -position.adjustmentX;
        cResult[4] = obj5;
        tmp8 = obj5;
      }
    }
  : function Cursor(arg0) {
      ({ position, adjustmentX } = arg0);
      const tmp = closure_15();
      let str = "column";
      if ("top" === position) {
        str = "column-reverse";
      }
      const obj = { style: null, children: null };
      const items = [
        tmp.cursorContainer,
        "top" === position ? { marginTop: -6 } : { marginBottom: -6 },
        { flexDirection: str, left: -adjustmentX },
      ];
      obj.style = items;
      const items1 = [
        closure_1_11(closure_1_8, { style: tmp.cursorHead }),
        closure_1_11(closure_1_8, { style: tmp.cursorSpine }),
      ];
      obj.children = items1;
      return __initData(closure_1_8, obj);
    };
ReactCompilerGating = fn(558);
let obj10 = { marginBottom: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
size = fn(2);
let result = size.fileFinishedImporting("design/components/Coachmark/native/Coachmark.native.tsx");

export const Coachmark = tmp5;
export const CoachmarkContainer = ReactCompilerGating.isReactCompilerEnabled()
  ? function CoachmarkContainer(experimental_withBlurBackground) {
      const cResult = c.c(5);
      let DARK = native.useThemeContext().theme;
      if (experimental_withBlurBackground.experimental_withBlurBackground) {
        DARK = ThemeTypes.DARK;
      }
      if (cResult[0] !== experimental_withBlurBackground) {
        const obj3 = {};
        const merged = Object.assign(experimental_withBlurBackground);
        const tmp11 = closure_1_11(closure_17, obj3);
        cResult[0] = experimental_withBlurBackground;
        cResult[1] = tmp11;
        let tmp5 = tmp11;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        if (cResult[3] === DARK) {
          let tmp12 = cResult[4];
        }
        return tmp12;
      }
      const tmp13 = closure_1_11(native.ThemeContextProvider, { theme: DARK, children: tmp5 });
      cResult[2] = tmp5;
      cResult[3] = DARK;
      cResult[4] = tmp13;
      tmp12 = tmp13;
    }
  : function CoachmarkContainer(experimental_withBlurBackground) {
      let DARK = native.useThemeContext().theme;
      if (experimental_withBlurBackground.experimental_withBlurBackground) {
        DARK = ThemeTypes.DARK;
      }
      const obj2 = { theme: DARK, children: null };
      const merged = Object.assign(experimental_withBlurBackground);
      obj2.children = closure_1_11(closure_17, {});
      return closure_1_11(native.ThemeContextProvider, obj2);
    };
