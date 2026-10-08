// discord_app/design/components/Coachmark/native/Coachmark.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
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
const Image = get_ActivityIndicator.Image;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let closure_15 = ReanimatedRexport.createAnimatedComponent(Pressable);
const createStyles = fn(5090);
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
let closure_16 = createStyles.createStyles(obj);
let closure_17 = { "21/9": 90, "16/9": 90, "6/4": 60, "2/1": 40, "1/1": 40 };
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
      const tmp4 = closure_16();
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
        function te() {
          const result = gradient.set(0);
        }
        cResult[2] = gradient;
        cResult[3] = te;
        let tmp11 = te;
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
              const tmp42 = closure_12(closure_8, obj2);
              cResult[20] = bottomMargin;
              bottomMargin = tmp4.bottomMargin;
              cResult[21] = bottomMargin;
              cResult[22] = tmp42;
            }
          } else {
            if (cResult[17] === imgSource) {
            }
            const obj3 = { source: imgSource, style: tmp4.image };
            const tmp37 = closure_12(Image, obj3);
            cResult[17] = imgSource;
            imgSource = tmp4.image;
            cResult[18] = imgSource;
            cResult[19] = tmp37;
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
        if (cResult[7] !== closure_17[str]) {
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
          const tmp29 = closure_12(closure_8, obj4);
          cResult[12] = tmp4.bottomMargin;
          cResult[13] = tmp20;
          cResult[14] = tmp29;
          tmp26 = tmp29;
        }
        const obj5 = {};
        const merged = Object.assign(graphic);
        obj5.style = tmp19;
        const tmp25 = closure_12(tmp(tmp2[13]).Graphic, obj5);
        cResult[9] = graphic;
        cResult[10] = tmp19;
        cResult[11] = tmp25;
        tmp20 = tmp25;
      }
      if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
        function ge() {
          const result = setAccessibilityFocus.setAccessibilityFocus({ ref, delay: 100 });
        }
        cResult[23] = ge;
        let tmp44 = ge;
      } else {
        tmp44 = cResult[23];
      }
      let textOnlyPadding;
      if (null == graphic) {
        textOnlyPadding = tmp4.textOnlyPadding;
      }
      if (cResult[24] === tmp4.text) {
        if (cResult[25] === textOnlyPadding) {
          let tmp46 = cResult[26];
        }
        if (cResult[27] === tmp46) {
          if (cResult[28] === title) {
            let tmp47 = cResult[29];
          }
          if (cResult[30] === description) {
            if (cResult[31] === tmp4.text) {
              let tmp50 = cResult[32];
            }
            if (cResult[33] === tmp4.textGap) {
              if (cResult[34] === tmp47) {
                if (cResult[35] === tmp50) {
                  let tmp53 = cResult[36];
                }
                if (cResult[37] === tmp26) {
                  if (cResult[38] === tmp4.center) {
                    if (cResult[39] === tmp53) {
                      let tmp57 = cResult[40];
                    }
                    if (cResult[41] === buttonIcon) {
                      if (cResult[42] === buttonLabel) {
                        if (cResult[43] === buttonShiny) {
                          if (cResult[44] === buttonVariant) {
                            if (cResult[45] === experimental_withBlurBackground) {
                              if (cResult[46] === onButtonPress) {
                                if (cResult[47] === tmp4.buttonSpacing) {
                                  let tmp61 = cResult[48];
                                }
                                const _Symbol = Symbol;
                                if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                                  const intl = tmp(tmp2[17]).intl;
                                  const stringResult = intl.string(tmp(tmp2[17]).t.cpT0Cq);
                                  cResult[49] = stringResult;
                                  let tmp69 = stringResult;
                                } else {
                                  tmp69 = cResult[49];
                                }
                                const _Symbol2 = Symbol;
                                if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
                                  const obj6 = { size: "xs", color: require("native").colors.ICON_STRONG };
                                  const tmp73 = closure_12(tmp(tmp2[18]).XSmallIcon, obj6);
                                  cResult[50] = tmp73;
                                  let tmp71 = tmp73;
                                } else {
                                  tmp71 = cResult[50];
                                }
                                if (cResult[51] === tmp10) {
                                  if (cResult[52] === tmp11) {
                                    if (cResult[53] === onDismiss) {
                                      if (cResult[54] === tmp4.closeButton) {
                                        let tmp74 = cResult[55];
                                      }
                                      if (cResult[56] === tmp57) {
                                        if (cResult[57] === tmp61) {
                                          if (cResult[58] === tmp74) {
                                            let tmp78 = cResult[59];
                                          }
                                          if (cResult[60] === tmp78) {
                                            if (cResult[61] === experimental_withBlurBackground) {
                                              if (cResult[62] === gradientColor) {
                                                if (cResult[63] === gradient) {
                                                  if (cResult[64] === tmp4.bodyBgColor) {
                                                    if (cResult[65] === tmp4.bodyContainer) {
                                                      if (cResult[66] === tmp4.gradient) {
                                                        const _Symbol3 = Symbol;
                                                        if (cResult[68] === Symbol.for("react.memo_cache_sentinel")) {
                                                          class Pe {
                                                            constructor(arg0) {
                                                              nativeEvent = arg0.nativeEvent;
                                                              size = {
                                                                width: nativeEvent.layout.width,
                                                                height: nativeEvent.layout.height,
                                                              };
                                                              tmp = closure_1(size);
                                                              return;
                                                            }
                                                          }
                                                          cResult[68] = Pe;
                                                        } else {
                                                          class Pe {
                                                            constructor(arg0) {
                                                              nativeEvent = arg0.nativeEvent;
                                                              size = {
                                                                width: nativeEvent.layout.width,
                                                                height: nativeEvent.layout.height,
                                                              };
                                                              tmp = closure_1(size);
                                                              return;
                                                            }
                                                          }
                                                        }
                                                        if (cResult[69] !== tmp4.shadow) {
                                                          class Pe {
                                                            constructor(arg0) {
                                                              nativeEvent = arg0.nativeEvent;
                                                              size = {
                                                                width: nativeEvent.layout.width,
                                                                height: nativeEvent.layout.height,
                                                              };
                                                              tmp = closure_1(size);
                                                              return;
                                                            }
                                                          }
                                                          if (obj21.isIOS()) {
                                                            class Pe {
                                                              constructor(arg0) {
                                                                nativeEvent = arg0.nativeEvent;
                                                                size = {
                                                                  width: nativeEvent.layout.width,
                                                                  height: nativeEvent.layout.height,
                                                                };
                                                                tmp = closure_1(size);
                                                                return;
                                                              }
                                                            }
                                                          }
                                                          cResult[69] = tmp4.shadow;
                                                          cResult[70] = undefined;
                                                        } else {
                                                          class Pe {
                                                            constructor(arg0) {
                                                              nativeEvent = arg0.nativeEvent;
                                                              size = {
                                                                width: nativeEvent.layout.width,
                                                                height: nativeEvent.layout.height,
                                                              };
                                                              tmp = closure_1(size);
                                                              return;
                                                            }
                                                          }
                                                        }
                                                        if (null != tmp7) {
                                                          class Pe {
                                                            constructor(arg0) {
                                                              nativeEvent = arg0.nativeEvent;
                                                              size = {
                                                                width: nativeEvent.layout.width,
                                                                height: nativeEvent.layout.height,
                                                              };
                                                              tmp = closure_1(size);
                                                              return;
                                                            }
                                                          }
                                                        }
                                                        if (cResult[71] === 0) {
                                                          class Pe {
                                                            constructor(arg0) {
                                                              nativeEvent = arg0.nativeEvent;
                                                              size = {
                                                                width: nativeEvent.layout.width,
                                                                height: nativeEvent.layout.height,
                                                              };
                                                              tmp = closure_1(size);
                                                              return;
                                                            }
                                                          }
                                                        }
                                                        const rect = { opacity: 0, top: tooltipY, left: tooltipX };
                                                        cResult[71] = 0;
                                                        cResult[72] = tooltipX;
                                                        cResult[73] = tooltipY;
                                                        cResult[74] = rect;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          if (experimental_withBlurBackground) {
                                            class Pe {
                                              constructor(arg0) {
                                                nativeEvent = arg0.nativeEvent;
                                                size = {
                                                  width: nativeEvent.layout.width,
                                                  height: nativeEvent.layout.height,
                                                };
                                                tmp = closure_1(size);
                                                return;
                                              }
                                            }
                                            const obj7 = {
                                              style: tmp4.bodyContainer,
                                              blurTheme: "dark",
                                              pressed: gradient,
                                              children: tmp78,
                                            };
                                            let tmp83Result = closure_12(tmp(tmp2[19]).BackgroundBlurView, obj7);
                                          } else {
                                            class Pe {
                                              constructor(arg0) {
                                                nativeEvent = arg0.nativeEvent;
                                                size = {
                                                  width: nativeEvent.layout.width,
                                                  height: nativeEvent.layout.height,
                                                };
                                                tmp = closure_1(size);
                                                return;
                                              }
                                            }
                                            const items = [,];
                                            ({ bodyContainer: arr6[0], bodyBgColor: arr6[1] } = tmp4);
                                            tmp85[0] = items;
                                            let tmp86 = null;
                                            if (null != gradientColor) {
                                              class Pe {
                                                constructor(arg0) {
                                                  nativeEvent = arg0.nativeEvent;
                                                  size = {
                                                    width: nativeEvent.layout.width,
                                                    height: nativeEvent.layout.height,
                                                  };
                                                  tmp = closure_1(size);
                                                  return;
                                                }
                                              }
                                              const obj8 = {
                                                style: tmp4.gradient,
                                                color: gradientColor,
                                                backgroundColor:
                                                  require("native").colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT,
                                              };
                                              tmp86 = closure_12(tmp(tmp2[20]).ExpressiveGradient, obj8);
                                            }
                                            const items1 = [tmp86, tmp78];
                                            tmp85[1] = items1;
                                            tmp83Result = closure_13(closure_8, tmp85);
                                          }
                                          cResult[60] = tmp78;
                                          cResult[61] = experimental_withBlurBackground;
                                          cResult[62] = gradientColor;
                                          cResult[63] = gradient;
                                          cResult[64] = tmp4.bodyBgColor;
                                          ({ bodyContainer: tmp3[65], gradient } = tmp4);
                                          cResult[66] = gradient;
                                          cResult[67] = tmp83Result;
                                        }
                                      }
                                      const obj9 = { children: null };
                                      const items2 = [tmp57, tmp61, tmp74];
                                      obj9.children = items2;
                                      const tmp81 = closure_13(closure_14, obj9);
                                      cResult[56] = tmp57;
                                      cResult[57] = tmp61;
                                      cResult[58] = tmp74;
                                      cResult[59] = tmp81;
                                      tmp78 = tmp81;
                                    }
                                  }
                                }
                                const obj10 = {
                                  accessibilityRole: "button",
                                  accessibilityLabel: tmp69,
                                  style: tmp4.closeButton,
                                  onPress: onDismiss,
                                  onPressIn: tmp10,
                                  onPressOut: tmp11,
                                  children: tmp71,
                                };
                                const tmp77 = closure_12(Pressable, obj10);
                                cResult[51] = tmp10;
                                cResult[52] = tmp11;
                                cResult[53] = onDismiss;
                                cResult[54] = tmp4.closeButton;
                                cResult[55] = tmp77;
                                tmp74 = tmp77;
                              }
                            }
                          }
                        }
                      }
                    }
                    if (null != buttonLabel) {
                      class Pe {
                        constructor(arg0) {
                          nativeEvent = arg0.nativeEvent;
                          size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                          tmp = closure_1(size);
                          return;
                        }
                      }
                      if (null != onButtonPress) {
                        class Pe {
                          constructor(arg0) {
                            nativeEvent = arg0.nativeEvent;
                            size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                            tmp = closure_1(size);
                            return;
                          }
                        }
                        const obj11 = { style: tmp4.buttonSpacing };
                        const items3 = [closure_12(closure_8, obj11)];
                        if (experimental_withBlurBackground) {
                          class Pe {
                            constructor(arg0) {
                              nativeEvent = arg0.nativeEvent;
                              size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                              tmp = closure_1(size);
                              return;
                            }
                          }
                          tmp67[2] = buttonIcon;
                          tmp67[3] = buttonLabel;
                          tmp67[4] = onButtonPress;
                          let obj12 = tmp67;
                        } else {
                          class Pe {
                            constructor(arg0) {
                              nativeEvent = arg0.nativeEvent;
                              size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                              tmp = closure_1(size);
                              return;
                            }
                          }
                          if (buttonVariant == null) {
                            class Pe {
                              constructor(arg0) {
                                nativeEvent = arg0.nativeEvent;
                                size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
                                tmp = closure_1(size);
                                return;
                              }
                            }
                          }
                          obj12 = {
                            variant: tmp66,
                            size: "sm",
                            icon: buttonIcon,
                            text: buttonLabel,
                            onPress: onButtonPress,
                            shiny: buttonShiny,
                            grow: true,
                          };
                        }
                        const obj13 = { children: null };
                        items3[1] = closure_12(tmp(tmp2[16]).Button, obj12);
                        obj13.children = items3;
                        closure_13(closure_14, obj13);
                      }
                    }
                    cResult[41] = buttonIcon;
                    cResult[42] = buttonLabel;
                    cResult[43] = buttonShiny;
                    cResult[44] = buttonVariant;
                    cResult[45] = experimental_withBlurBackground;
                    cResult[46] = onButtonPress;
                    cResult[47] = tmp4.buttonSpacing;
                    cResult[48] = null;
                    tmp61 = tmp62;
                  }
                }
                const obj14 = {
                  ref,
                  accessibilityRole: "alert",
                  style: tmp4.center,
                  accessible: true,
                  onLayout: tmp44,
                  children: null,
                };
                const items4 = [tmp26, tmp53];
                obj14.children = items4;
                const tmp60 = closure_13(closure_8, obj14);
                cResult[37] = tmp26;
                cResult[38] = tmp4.center;
                cResult[39] = tmp53;
                cResult[40] = tmp60;
                tmp57 = tmp60;
              }
            }
            const obj15 = { style: tmp4.textGap, children: null };
            const items5 = [tmp47, tmp50];
            obj15.children = items5;
            const tmp56 = closure_13(closure_8, obj15);
            cResult[33] = tmp4.textGap;
            cResult[34] = tmp47;
            cResult[35] = tmp50;
            cResult[36] = tmp56;
            tmp53 = tmp56;
          }
          const obj16 = { style: tmp4.text, variant: "text-sm/medium", color: "text-subtle", children: description };
          const tmp52 = closure_12(tmp(tmp2[15]).Text, obj16);
          cResult[30] = description;
          cResult[31] = tmp4.text;
          cResult[32] = tmp52;
          tmp50 = tmp52;
        }
        const obj17 = {
          style: tmp46,
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: title,
        };
        const tmp49 = closure_12(tmp(tmp2[15]).Text, obj17);
        cResult[27] = tmp46;
        cResult[28] = title;
        cResult[29] = tmp49;
        tmp47 = tmp49;
      }
      const items6 = [tmp4.text, textOnlyPadding];
      cResult[24] = tmp4.text;
      cResult[25] = textOnlyPadding;
      cResult[26] = items6;
      tmp46 = items6;
      const tmpResult2 = ref(gradient[12]);
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
      const tmp = closure_16();
      closure_3 = tmp;
      const ref = noop.useRef(null);
      [tmp4, _objectWithoutProperties] = sharedValue(noop.useState(null), 2);
      let tmp7 = imgSource(renderImgComponent[11])(tmp4, surfaceMeasurements, targetMeasurements, position, -8 + num);
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
            const size = { height: closure_17[str], width: "auto" };
            obj3.style = size;
            obj2.children = __initData(Graphic.Graphic, obj3);
            return __initData(closure_2_8, obj2);
          } else {
            let tmp2 = null;
            if (null != renderImgComponent) {
              tmp2 = tmp21();
            }
            if (null != imgSource) {
              const obj = { source: tmp3, style: closure_3.image };
              tmp2 = __initData(Image, obj);
            }
            let tmp7 = null;
            if (null != tmp2) {
              const obj4 = { style: closure_3.bottomMargin, children: tmp2 };
              tmp7 = __initData(closure_2_8, obj4);
            }
            return tmp7;
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
        closure_12(graphic(renderImgComponent[15]).Text, {
          style: items4,
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: title,
        }),
        closure_12(graphic(renderImgComponent[15]).Text, {
          style: tmp.text,
          variant: "text-sm/medium",
          color: "text-subtle",
          children: description,
        }),
      ];
      obj4.children = items5;
      items3[1] = closure_13(closure_8, obj4);
      obj3.children = items3;
      const items6 = [closure_13(closure_8, obj3), ,];
      let tmp19 = null;
      if (null != buttonLabel) {
        tmp19 = null;
        if (null != onButtonPress) {
          const obj6 = { style: tmp.buttonSpacing };
          const items7 = [closure_12(closure_8, obj6)];
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
          items7[1] = closure_12(tmp8(renderImgComponent[16]).Button, obj8);
          obj9.children = items7;
          closure_13(closure_14, obj9);
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
      const intl = tmp8(renderImgComponent[17]).intl;
      obj11.accessibilityLabel = intl.string(graphic(renderImgComponent[17]).t.cpT0Cq);
      obj11.style = tmp.closeButton;
      obj11.onPress = onDismiss;
      obj11.onPressIn = callback;
      obj11.onPressOut = callback1;
      const obj5 = { style: tmp.text, variant: "text-sm/medium", color: "text-subtle", children: description };
      const tmp13 = _objectWithoutProperties(buttonPressAnimationProps, ref);
      obj11.children = closure_12(graphic(renderImgComponent[18]).XSmallIcon, {
        size: "xs",
        color: imgSource(renderImgComponent[8]).colors.ICON_STRONG,
      });
      items6[2] = closure_12(Pressable, obj11);
      obj10.children = items6;
      const tmp14Result2 = closure_13(closure_14, obj10);
      if (experimental_withBlurBackground) {
        const obj13 = { style: tmp.bodyContainer, blurTheme: "dark", pressed: sharedValue, children: tmp14Result2 };
        let tmp14Result3 = closure_12(tmp8(renderImgComponent[19]).BackgroundBlurView, obj13);
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
          tmp17Result4 = closure_12(tmp8(renderImgComponent[20]).ExpressiveGradient, obj15);
        }
        const items9 = [tmp17Result4, tmp14Result2];
        obj14.children = items9;
        tmp14Result3 = closure_13(closure_8, obj14);
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
        tmp17Result5 = closure_12(closure_19, obj17);
      }
      const items11 = [tmp17Result5, ,];
      const obj18 = {};
      let merged = Object.assign(tmp13);
      obj18.onAccessibilityEscape = onDismiss;
      obj18.accessible = false;
      obj18.onPress = onDismiss;
      const items12 = [tmp.body];
      tmp8Result = graphic(renderImgComponent[21]);
      if (tmp8Result2.isAndroid()) {
        const items13 = [tmp.shadow, enterExitAnimatedStyles];
        let items14 = items13;
      } else {
        items14 = [];
      }
      items12[HermesBuiltin.arraySpread(items14, 1)] = buttonPressAnimationProps.style;
      obj18.style = items12;
      obj18.children = tmp14Result3;
      items11[1] = closure_12(closure_15, obj18);
      let tmp17Result6 = "top" === position;
      if (tmp17Result6) {
        const obj19 = { position: "top", adjustmentX };
        tmp17Result6 = closure_12(closure_19, obj19);
      }
      items11[2] = tmp17Result6;
      obj16.children = items11;
      return closure_13(closure_8, obj16);
    };
let closure_18 = tmp5;
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Cursor(position) {
      const cResult = c.c(17);
      position = position.position;
      const tmp2 = closure_16();
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
                const tmp13 = __initData(closure_1_8, obj2);
                cResult[9] = tmp2.cursorHead;
                cResult[10] = tmp13;
                let tmp10 = tmp13;
              } else {
                tmp10 = cResult[10];
              }
              if (cResult[11] !== tmp2.cursorSpine) {
                const obj3 = { style: tmp2.cursorSpine };
                const tmp17 = __initData(closure_1_8, obj3);
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
              const tmp21 = __initData2(closure_1_8, obj4);
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
      const tmp = closure_16();
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
        __initData(closure_1_8, { style: tmp.cursorHead }),
        __initData(closure_1_8, { style: tmp.cursorSpine }),
      ];
      obj.children = items1;
      return __initData2(closure_1_8, obj);
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
        const tmp11 = __initData(closure_18, obj3);
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
      const tmp13 = __initData(native.ThemeContextProvider, { theme: DARK, children: tmp5 });
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
      obj2.children = __initData(closure_18, {});
      return __initData(native.ThemeContextProvider, obj2);
    };
