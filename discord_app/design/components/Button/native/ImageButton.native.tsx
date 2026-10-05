// discord_app/design/components/Button/native/ImageButton.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import ButtonConstants from "ButtonConstants.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let closure_3 = [
  "size",
  "label",
  "grow",
  "image",
  "accessibilityLabel",
  "maxFontSizeMultiplier",
  "onPressIn",
  "onPressOut",
];
({ View: metroRequire, Image: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles((arg0, arg1, arg2) => {
  let num;
  let rect;
  let MEDIUM_BUTTON_PADDING = ButtonConstants.LARGE_BUTTON_PADDING;
  if ("sm" === arg0) {
    MEDIUM_BUTTON_PADDING = ButtonConstants.SMALL_BUTTON_PADDING;
  } else if ("md" === arg0) {
    MEDIUM_BUTTON_PADDING = ButtonConstants.MEDIUM_BUTTON_PADDING;
  }
  const sum = arg1 + 2 * MEDIUM_BUTTON_PADDING;
  const tmpResult = ButtonConstants;
  const buttonBorderRadius = tmpResult.getButtonBorderRadius(arg0);
  const obj = {
    paddingBottom: nativeDefault.space.PX_4,
    gap: nativeDefault.space.PX_8,
    alignItems: "center",
    alignSelf: "center",
    flexGrow: num,
  };
  num = 0;
  if (arg2) {
    num = 1;
  }
  const obj2 = {
    labelPressable: obj,
    pill: {
      paddingHorizontal: 0,
      paddingVertical: 0,
      minHeight: sum,
      minWidth: sum,
      borderRadius: buttonBorderRadius,
      borderWidth: 0,
      outlineWidth: ButtonConstants.BUTTON_BORDER_WIDTH,
      outlineColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT,
      outlineStyle: "solid",
    },
    imageWrapper: { width: sum, height: sum, position: "relative" },
    image: { width: sum, height: sum },
    imageDim: rect,
  };
  ({
    paddingHorizontal: 0,
    paddingVertical: 0,
    minHeight: sum,
    minWidth: sum,
    borderRadius: buttonBorderRadius,
    borderWidth: 0,
    outlineWidth: ButtonConstants.BUTTON_BORDER_WIDTH,
    outlineColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT,
    outlineStyle: "solid",
  });
  rect = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: nativeDefault.colors.REDESIGN_IMAGE_BUTTON_PRESSED_BACKGROUND,
    borderRadius: buttonBorderRadius,
  };
  return obj2;
});
const __initData = {
  code: 'function ImageButtonNativeTsx1(){const{withSpring,pressed,ON_PRESS_SPRING}=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,"animate-always")};}',
};
const __initData2 = {
  code: "function ImageButtonNativeTsx2(){const{withSpring,pressed,ON_PRESS_SPRING}=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,'animate-always')};}",
};
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (onPressOut, arg1) => {
        let accessibilityLabel;
        let closure_0;
        let closure_1;
        let grow;
        let image;
        let items;
        let items1;
        let items2;
        let label;
        let maxFontSizeMultiplier;
        let onPressIn;
        let sharedValue;
        let tmp11;
        let tmp12;
        let tmp4;
        let tmp5;
        let tmp6;
        let tmp7;
        let tmp8;
        const tmp2 = sharedValue;
        let obj = require("react");
        const cResult = obj.c(52);
        if (cResult[0] !== onPressOut) {
          ({ size, label, grow, image, accessibilityLabel, maxFontSizeMultiplier, onPressIn } = onPressOut);
          _require = onPressIn;
          onPressOut = onPressOut.onPressOut;
          importDefault = onPressOut;
          const tmp15 = _objectWithoutProperties(onPressOut, closure_3);
          let num = 0;
          cResult[0] = onPressOut;
          cResult[1] = accessibilityLabel;
          cResult[2] = grow;
          cResult[3] = image;
          cResult[4] = label;
          cResult[5] = maxFontSizeMultiplier;
          cResult[6] = onPressIn;
          cResult[7] = onPressOut;
          cResult[8] = tmp15;
          cResult[9] = size;
          tmp12 = size;
          tmp11 = tmp15;
          tmp8 = maxFontSizeMultiplier;
          tmp7 = label;
          tmp6 = image;
          tmp5 = grow;
          tmp4 = accessibilityLabel;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
          tmp6 = cResult[3];
          tmp7 = cResult[4];
          tmp8 = cResult[5];
          _require = cResult[6];
          importDefault = cResult[7];
          tmp11 = cResult[8];
          tmp12 = cResult[9];
        }
        let str = "lg";
        if (undefined !== tmp12) {
          str = tmp12;
        }
        const tmpResult = require("ButtonHooks");
        const tmp16 = closure_10(str, tmpResult.useIconSizeStyles(str, true, tmp8).width, tmp5);
        const tmpResult3 = require("ReanimatedRexport");
        sharedValue = tmpResult3.useSharedValue(0);
        if (cResult[10] === onPressIn) {
          let tmp18;
          if (cResult[11] === sharedValue) {
            tmp18 = cResult[12];
          }
          if (cResult[13] === tmp10) {
            let tmp19;
            if (cResult[14] === sharedValue) {
              tmp19 = cResult[15];
            }
            const tmpResult4 = require("ReanimatedRexport");
            class T {
              constructor() {
                const withSpring = spring.withSpring;
                let num = 0;
                spring;
                if (1 === sharedValue.get()) {
                  num = 1;
                }
                const obj = { opacity: withSpring(num, springPresets.ON_PRESS_SPRING, "animate-always") };
                return obj;
              }
            }
            const useAnimatedStyle = tmpResult4.useAnimatedStyle;
            T.__closure = {
              withSpring: require("spring").withSpring,
              pressed: sharedValue,
              ON_PRESS_SPRING: require("springPresets").ON_PRESS_SPRING,
            };
            T.__workletHash = 12412199607843;
            T.__initData = __initData;
            const obj2 = {
              withSpring: require("spring").withSpring,
              pressed: sharedValue,
              ON_PRESS_SPRING: require("springPresets").ON_PRESS_SPRING,
            };
            const animatedStyle = useAnimatedStyle(T);
            if (cResult[16] === tmp6) {
              let tmp23;
              if (cResult[17] === tmp16.image) {
                tmp23 = cResult[18];
              }
              if (cResult[19] === animatedStyle) {
                let tmp27;
                if (cResult[20] === tmp16.imageDim) {
                  tmp27 = cResult[21];
                }
                if (cResult[22] === tmp16.imageWrapper) {
                  if (cResult[23] === tmp23) {
                    let tmp30;
                    let tmp34;
                    if (cResult[24] === tmp27) {
                      tmp30 = cResult[25];
                    }
                    class T {
                      constructor() {
                        const withSpring = spring.withSpring;
                        let num = 0;
                        spring;
                        if (1 === sharedValue.get()) {
                          num = 1;
                        }
                        const obj = { opacity: withSpring(num, springPresets.ON_PRESS_SPRING, "animate-always") };
                        return obj;
                      }
                    }
                    if (null != tmp7) {
                      if (cResult[26] === tmp18) {
                        if (cResult[27] === tmp19) {
                          if (cResult[28] === tmp30) {
                            if (cResult[29] === tmp8) {
                              if (cResult[30] === tmp11) {
                                if (cResult[31] === arg1) {
                                  let tmp41;
                                  if (cResult[32] === tmp16.pill) {
                                    tmp41 = cResult[33];
                                  }
                                  if (cResult[34] === tmp7) {
                                    let tmp48;
                                    if (cResult[35] === tmp8) {
                                      tmp48 = cResult[36];
                                    }
                                    if (cResult[37] === tmp4) {
                                      if (cResult[38] === tmp11) {
                                        if (cResult[39] === tmp16.labelPressable) {
                                          if (cResult[40] === tmp41) {
                                            let tmp50;
                                            if (cResult[41] === tmp48) {
                                              tmp50 = cResult[42];
                                            }
                                            tmp34 = tmp50;
                                          }
                                        }
                                      }
                                    }
                                    class T {
                                      constructor() {
                                        const withSpring = spring.withSpring;
                                        let num = 0;
                                        spring;
                                        if (1 === sharedValue.get()) {
                                          num = 1;
                                        }
                                        const obj = {
                                          opacity: withSpring(num, springPresets.ON_PRESS_SPRING, "animate-always"),
                                        };
                                        return obj;
                                      }
                                    }
                                    const obj3 = {
                                      style: tmp16.labelPressable,
                                      variant: "none",
                                      accessibilityLabel: tmp4,
                                      children: items,
                                    };
                                    const BaseButton = tmp(tmp2[15]).BaseButton;
                                    const merged = Object.assign(tmp11);
                                    items = [tmp41, tmp48];
                                    const tmp54 = closure_9(BaseButton, obj3);
                                    cResult[37] = tmp4;
                                    cResult[38] = tmp11;
                                    cResult[39] = tmp16.labelPressable;
                                    cResult[40] = tmp41;
                                    cResult[41] = tmp48;
                                    cResult[42] = tmp54;
                                    tmp50 = tmp54;
                                  }
                                  class T {
                                    constructor() {
                                      const withSpring = spring.withSpring;
                                      let num = 0;
                                      spring;
                                      if (1 === sharedValue.get()) {
                                        num = 1;
                                      }
                                      const obj = {
                                        opacity: withSpring(num, springPresets.ON_PRESS_SPRING, "animate-always"),
                                      };
                                      return obj;
                                    }
                                  }
                                  const obj4 = {
                                    variant: "text-xs/medium",
                                    color: "interactive-text-default",
                                    maxFontSizeMultiplier: tmp8,
                                    children: tmp7,
                                  };
                                  const tmp49 = closure_8(require("Text/Text").Text, obj4);
                                  cResult[34] = tmp7;
                                  cResult[35] = tmp8;
                                  cResult[36] = tmp49;
                                  tmp48 = tmp49;
                                }
                              }
                            }
                          }
                        }
                      }
                      class T {
                        constructor() {
                          const withSpring = spring.withSpring;
                          let num = 0;
                          spring;
                          if (1 === sharedValue.get()) {
                            num = 1;
                          }
                          const obj = { opacity: withSpring(num, springPresets.ON_PRESS_SPRING, "animate-always") };
                          return obj;
                        }
                      }
                      tmp43[0] = arg1;
                      const BaseIconButton2 = tmp(tmp2[13]).BaseIconButton;
                      const merged1 = Object.assign(tmp11);
                      tmp43.icon = tmp30;
                      tmp43.accessibilityRole = "none";
                      tmp43.accessibilityLabel = "";
                      tmp43.size = "lg";
                      tmp43.pillStyle = tmp16.pill;
                      tmp43.variant = "secondary";
                      tmp43.onPressIn = tmp18;
                      tmp43.onPressOut = tmp19;
                      tmp43.maxFontSizeMultiplier = tmp8;
                      const tmp47 = closure_8(BaseIconButton2, tmp43);
                      cResult[26] = tmp18;
                      cResult[27] = tmp19;
                      cResult[28] = tmp30;
                      cResult[29] = tmp8;
                      cResult[30] = tmp11;
                      cResult[31] = arg1;
                      cResult[32] = tmp16.pill;
                      cResult[33] = tmp47;
                      tmp41 = tmp47;
                    } else {
                      if (cResult[43] === tmp4) {
                        if (cResult[44] === tmp18) {
                          if (cResult[45] === tmp19) {
                            if (cResult[46] === tmp30) {
                              if (cResult[47] === tmp11) {
                                if (cResult[48] === arg1) {
                                  if (cResult[49] === str) {
                                    if (cResult[50] === tmp16.pill) {
                                      tmp34 = cResult[51];
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      class T {
                        constructor() {
                          const withSpring = spring.withSpring;
                          let num = 0;
                          spring;
                          if (1 === sharedValue.get()) {
                            num = 1;
                          }
                          const obj = { opacity: withSpring(num, springPresets.ON_PRESS_SPRING, "animate-always") };
                          return obj;
                        }
                      }
                      tmp36[0] = arg1;
                      const BaseIconButton = tmp(tmp2[13]).BaseIconButton;
                      const merged2 = Object.assign(tmp11);
                      tmp36.size = str;
                      tmp36.icon = tmp30;
                      tmp36.accessibilityLabel = tmp4;
                      tmp36.pillStyle = tmp16.pill;
                      tmp36.variant = "secondary";
                      tmp36.onPressIn = tmp18;
                      tmp36.onPressOut = tmp19;
                      const tmp40 = closure_8(BaseIconButton, tmp36);
                      cResult[43] = tmp4;
                      cResult[44] = tmp18;
                      cResult[45] = tmp19;
                      cResult[46] = tmp30;
                      cResult[47] = tmp11;
                      cResult[48] = arg1;
                      cResult[49] = str;
                      cResult[50] = tmp16.pill;
                      cResult[51] = tmp40;
                      tmp34 = tmp40;
                    }
                    return tmp34;
                  }
                }
                class T {
                  constructor() {
                    const withSpring = spring.withSpring;
                    let num = 0;
                    spring;
                    if (1 === sharedValue.get()) {
                      num = 1;
                    }
                    const obj = { opacity: withSpring(num, springPresets.ON_PRESS_SPRING, "animate-always") };
                    return obj;
                  }
                }
                const obj5 = { style: tmp16.imageWrapper, children: items1 };
                items1 = [tmp23, tmp27];
                const tmp32 = closure_9(closure_6, obj5);
                cResult[22] = tmp16.imageWrapper;
                cResult[23] = tmp23;
                cResult[24] = tmp27;
                cResult[25] = tmp32;
                tmp30 = tmp32;
              }
              class T {
                constructor() {
                  const withSpring = spring.withSpring;
                  let num = 0;
                  spring;
                  if (1 === sharedValue.get()) {
                    num = 1;
                  }
                  const obj = { opacity: withSpring(num, springPresets.ON_PRESS_SPRING, "animate-always") };
                  return obj;
                }
              }
              const obj6 = { style: items2 };
              items2 = [tmp16.imageDim, animatedStyle];
              const tmp29 = closure_8(require("ReanimatedRexport").View, obj6);
              cResult[19] = animatedStyle;
              cResult[20] = tmp16.imageDim;
              cResult[21] = tmp29;
              tmp27 = tmp29;
            }
            const obj7 = { source: tmp6, style: tmp16.image };
            const tmp26 = closure_8(closure_7, obj7);
            cResult[16] = tmp6;
            cResult[17] = tmp16.image;
            cResult[18] = tmp26;
            tmp23 = tmp26;
          }
          class G {
            constructor(arg0) {
              const result = sharedValue.set(0);
              if (closure_1 != null) {
                tmp2(arg0);
              }
            }
          }
          cResult[13] = tmp10;
          cResult[14] = sharedValue;
          cResult[15] = G;
          tmp19 = G;
        }
        const fn = function v(arg0) {
          const result = sharedValue.set(1);
          if (closure_0 != null) {
            tmp2(arg0);
          }
        };
        cResult[10] = onPressIn;
        cResult[11] = sharedValue;
        cResult[12] = fn;
        tmp18 = fn;
      }
    : (size, ref) => {
        let accessibilityLabel;
        let grow;
        let image;
        let items2;
        let items3;
        let items4;
        let label;
        let maxFontSizeMultiplier;
        let onPressIn;
        let tmp10Result;
        let str = size.size;
        if (str === undefined) {
          str = "lg";
        }
        ({ label, accessibilityLabel, maxFontSizeMultiplier, onPressIn } = size);
        const onPressOut = size.onPressOut;
        ({ grow, image } = size);
        const merged = Object.assign(
          size,
          Object.assign({
            size: 0,
            label: 0,
            grow: 0,
            image: 0,
            accessibilityLabel: 0,
            maxFontSizeMultiplier: 0,
            onPressIn: 0,
            onPressOut: 0,
          }),
        );
        let sharedValue;
        const tmp3 = sharedValue;
        let obj = onPressIn(sharedValue[9]);
        const tmp4 = closure_10(str, obj.useIconSizeStyles(str, true, maxFontSizeMultiplier).width, grow);
        const obj2 = onPressIn(sharedValue[10]);
        sharedValue = obj2.useSharedValue(0);
        const items = [sharedValue, onPressIn];
        const callback = react.useCallback((arg0) => {
          const result = sharedValue.set(1);
          if (onPressIn != null) {
            tmp2(arg0);
          }
        }, items);
        const items1 = [sharedValue, onPressOut];
        const callback1 = react.useCallback((arg0) => {
          const result = sharedValue.set(0);
          if (onPressOut != null) {
            tmp2(arg0);
          }
        }, items1);
        const fn = function w() {
          const withSpring = spring.withSpring;
          let num = 0;
          spring;
          if (1 === sharedValue.get()) {
            num = 1;
          }
          const obj = { opacity: withSpring(num, springPresets.ON_PRESS_SPRING, "animate-always") };
          return obj;
        };
        const obj3 = onPressIn(sharedValue[10]);
        fn.__closure = {
          withSpring: onPressIn(sharedValue[11]).withSpring,
          pressed: sharedValue,
          ON_PRESS_SPRING: onPressIn(sharedValue[12]).ON_PRESS_SPRING,
        };
        fn.__workletHash = 2649796969632;
        fn.__initData = __initData2;
        const obj5 = { style: tmp4.imageWrapper, children: items2 };
        ({
          withSpring: onPressIn(sharedValue[11]).withSpring,
          pressed: sharedValue,
          ON_PRESS_SPRING: onPressIn(sharedValue[12]).ON_PRESS_SPRING,
        });
        const obj6 = { source: image, style: tmp4.image };
        const animatedStyle = obj3.useAnimatedStyle(fn);
        items2 = [closure_8(closure_7, obj6)];
        const obj7 = { style: items3 };
        items3 = [tmp4.imageDim, animatedStyle];
        items2[1] = closure_8(onPressOut(sharedValue[10]).View, obj7);
        const tmp11 = closure_9(closure_6, obj5);
        if (null != label) {
          const obj8 = { style: tmp4.labelPressable, variant: "none", accessibilityLabel, children: items4 };
          const BaseButton = onPressIn(tmp3[15]).BaseButton;
          const merged1 = Object.assign(merged);
          const obj9 = {
            ref,
            icon: tmp11,
            accessibilityRole: "none",
            accessibilityLabel: "",
            size: "lg",
            pillStyle: tmp4.pill,
            variant: "secondary",
            onPressIn: callback,
            onPressOut: callback1,
            maxFontSizeMultiplier,
          };
          const BaseIconButton2 = onPressIn(tmp3[13]).BaseIconButton;
          const merged2 = Object.assign(merged);
          items4 = [closure_8(BaseIconButton2, obj9)];
          const obj10 = {
            variant: "text-xs/medium",
            color: "interactive-text-default",
            maxFontSizeMultiplier,
            children: label,
          };
          items4[1] = closure_8(onPressIn(tmp3[14]).Text, obj10);
          tmp10Result = closure_9(BaseButton, obj8);
        } else {
          const obj11 = {
            ref,
            size: str,
            icon: tmp11,
            accessibilityLabel,
            pillStyle: tmp4.pill,
            variant: "secondary",
            onPressIn: callback,
            onPressOut: callback1,
          };
          const BaseIconButton = onPressIn(tmp3[13]).BaseIconButton;
          const merged3 = Object.assign(merged);
          tmp10Result = closure_8(BaseIconButton, obj11);
        }
        return tmp10Result;
      },
);
let result = size.fileFinishedImporting("design/components/Button/native/ImageButton.native.tsx");

export const ImageButton = forwardRefResult;
