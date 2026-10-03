// === Module 9550: ImageButton ===

// Module 9550 (ImageButton)
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import ButtonConstants from "ButtonConstants" /* 5600 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["size", "label", "grow", "image", "accessibilityLabel", "maxFontSizeMultiplier", "onPressIn", "onPressOut"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
let closure_10 = createStyles.createStyles((arg0, arg1, arg2) => {
  let MEDIUM_BUTTON_PADDING = ButtonConstants.LARGE_BUTTON_PADDING;
  if ("sm" === arg0) {
    MEDIUM_BUTTON_PADDING = ButtonConstants.SMALL_BUTTON_PADDING;
  } else if ("md" === arg0) {
    MEDIUM_BUTTON_PADDING = ButtonConstants.MEDIUM_BUTTON_PADDING;
  }
  const sum = arg1 + 2 * MEDIUM_BUTTON_PADDING;
  const buttonBorderRadius = ButtonConstants.getButtonBorderRadius(arg0);
  const obj = { paddingBottom: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_8, alignItems: "center", alignSelf: "center", flexGrow: null };
  let num = 0;
  if (arg2) {
    num = 1;
  }
  const obj2 = { labelPressable: obj, pill: null, imageWrapper: null, image: null, imageDim: null };
  obj.flexGrow = num;
  const tmpResult = ButtonConstants;
  obj2.pill = { paddingHorizontal: 0, paddingVertical: 0, minHeight: sum, minWidth: sum, borderRadius: buttonBorderRadius, borderWidth: 0, outlineWidth: ButtonConstants.BUTTON_BORDER_WIDTH, outlineColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, outlineStyle: "solid" };
  obj2.imageWrapper = { width: sum, height: sum, position: "relative" };
  obj2.image = { width: sum, height: sum };
  const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: nativeDefault.colors.REDESIGN_IMAGE_BUTTON_PRESSED_BACKGROUND, borderRadius: buttonBorderRadius };
  obj2.imageDim = rect;
  return obj2;
});
const __initData = { code: "function ImageButtonNativeTsx1(){const{withSpring,pressed,ON_PRESS_SPRING}=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,\"animate-always\")};}" };
const __initData2 = { code: "function ImageButtonNativeTsx2(){const{withSpring,pressed,ON_PRESS_SPRING}=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,'animate-always')};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Button/native/ImageButton.native.tsx");

export const ImageButton = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((onPressOut, arg1) => {
  let BaseButton = _require;
  let tmp = sharedValue;
  const cResult = require("c").c(52);
  if (cResult[0] !== onPressOut) {
    ({ size, label, grow, image, accessibilityLabel, maxFontSizeMultiplier, onPressIn } = onPressOut);
    _require = onPressIn;
    onPressOut = onPressOut.onPressOut;
    importDefault = onPressOut;
    const tmp14 = _objectWithoutProperties(onPressOut, closure_3);
    cResult[0] = onPressOut;
    cResult[1] = accessibilityLabel;
    cResult[2] = grow;
    cResult[3] = image;
    cResult[4] = label;
    cResult[5] = maxFontSizeMultiplier;
    cResult[6] = onPressIn;
    cResult[7] = onPressOut;
    cResult[8] = tmp14;
    cResult[9] = size;
    let tmp11 = size;
    let tmp10 = tmp14;
    let tmp7 = maxFontSizeMultiplier;
    let tmp6 = label;
    let tmp5 = image;
    let tmp4 = grow;
    let tmp3 = accessibilityLabel;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
    tmp7 = cResult[5];
    _require = cResult[6];
    importDefault = cResult[7];
    tmp10 = cResult[8];
    tmp11 = cResult[9];
  }
  let str = "lg";
  if (undefined !== tmp11) {
    str = tmp11;
  }
  let obj = require("c");
  let labelPressable = closure_10(str, BaseButton(tmp[9]).useIconSizeStyles(str, true, tmp7).width, tmp4);
  const BaseButtonResult = BaseButton(tmp[9]);
  sharedValue = BaseButton(tmp[10]).useSharedValue(0);
  if (cResult[10] === onPressIn) {
    if (cResult[11] === sharedValue) {
      let tmp16 = cResult[12];
    }
    if (cResult[13] === tmp9) {
      if (cResult[14] === sharedValue) {
        let tmp17 = cResult[15];
      }
      class T {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[11]);
          num = 0;
          if (1 === closure_2.get()) {
            num = 1;
          }
          obj1 = { opacity: obj.withSpring(num, tmp(tmp2[12]).ON_PRESS_SPRING, "animate-always") };
          return obj1;
        }
      }
      const obj2 = { withSpring: BaseButton(tmp[11]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: BaseButton(tmp[12]).ON_PRESS_SPRING };
      T.__closure = obj2;
      T.__workletHash = 12412199607843;
      T.__initData = __initData;
      const animatedStyle = BaseButton(tmp[10]).useAnimatedStyle(T);
      if (cResult[16] === tmp5) {
        if (cResult[17] === labelPressable.image) {
          let tmp20 = cResult[18];
        }
        if (cResult[19] === animatedStyle) {
          if (cResult[20] === labelPressable.imageDim) {
            let tmp24 = cResult[21];
          }
          if (cResult[22] === labelPressable.imageWrapper) {
            if (cResult[23] === tmp20) {
              if (cResult[24] === tmp24) {
                let tmp27 = cResult[25];
              }
              class T {
                constructor() {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[11]);
                  num = 0;
                  if (1 === closure_2.get()) {
                    num = 1;
                  }
                  obj1 = { opacity: obj.withSpring(num, tmp(tmp2[12]).ON_PRESS_SPRING, "animate-always") };
                  return obj1;
                }
              }
              if (null != tmp6) {
                if (cResult[26] === tmp16) {
                  if (cResult[27] === tmp17) {
                    if (cResult[28] === tmp27) {
                      if (cResult[29] === tmp7) {
                        if (cResult[30] === tmp10) {
                          if (cResult[31] === arg1) {
                            if (cResult[32] === labelPressable.pill) {
                              let tmp38 = cResult[33];
                            }
                            if (cResult[34] === tmp6) {
                              if (cResult[35] === tmp7) {
                                let tmp45 = cResult[36];
                              }
                              if (cResult[37] === tmp3) {
                                if (cResult[38] === tmp10) {
                                  if (cResult[39] === labelPressable.labelPressable) {
                                    if (cResult[40] === tmp38) {
                                    }
                                  }
                                }
                              }
                              class T {
                                constructor() {
                                  tmp = closure_0;
                                  tmp2 = closure_2;
                                  obj = closure_0(closure_2[11]);
                                  num = 0;
                                  if (1 === closure_2.get()) {
                                    num = 1;
                                  }
                                  obj1 = { opacity: obj.withSpring(num, tmp(tmp2[12]).ON_PRESS_SPRING, "animate-always") };
                                  return obj1;
                                }
                              }
                              BaseButton = BaseButton(tmp[15]).BaseButton;
                              const obj3 = { style: labelPressable.labelPressable };
                              const merged = Object.assign(tmp10);
                              obj3.variant = "none";
                              obj3.accessibilityLabel = tmp3;
                              const items = [tmp38, tmp45];
                              obj3.children = items;
                              tmp = closure_9(BaseButton, obj3);
                              cResult[37] = tmp3;
                              cResult[38] = tmp10;
                              labelPressable = labelPressable.labelPressable;
                              cResult[39] = labelPressable;
                              cResult[40] = tmp38;
                              cResult[41] = tmp45;
                              cResult[42] = tmp;
                            }
                            class T {
                              constructor() {
                                tmp = closure_0;
                                tmp2 = closure_2;
                                obj = closure_0(closure_2[11]);
                                num = 0;
                                if (1 === closure_2.get()) {
                                  num = 1;
                                }
                                obj1 = { opacity: obj.withSpring(num, tmp(tmp2[12]).ON_PRESS_SPRING, "animate-always") };
                                return obj1;
                              }
                            }
                            const obj4 = { variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier: tmp7, children: tmp6 };
                            const tmp46 = closure_8(BaseButton(tmp[14]).Text, obj4);
                            cResult[34] = tmp6;
                            cResult[35] = tmp7;
                            cResult[36] = tmp46;
                            tmp45 = tmp46;
                          }
                        }
                      }
                    }
                  }
                }
                class T {
                  constructor() {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[11]);
                    num = 0;
                    if (1 === closure_2.get()) {
                      num = 1;
                    }
                    obj1 = { opacity: obj.withSpring(num, tmp(tmp2[12]).ON_PRESS_SPRING, "animate-always") };
                    return obj1;
                  }
                }
                tmp40[0] = arg1;
                const merged1 = Object.assign(tmp10);
                tmp40.icon = tmp27;
                tmp40.accessibilityRole = "none";
                tmp40.accessibilityLabel = "";
                tmp40.size = "lg";
                tmp40.pillStyle = labelPressable.pill;
                tmp40.variant = "secondary";
                tmp40.onPressIn = tmp16;
                tmp40.onPressOut = tmp17;
                tmp40.maxFontSizeMultiplier = tmp7;
                const tmp44 = closure_8(BaseButton(tmp[13]).BaseIconButton, tmp40);
                cResult[26] = tmp16;
                cResult[27] = tmp17;
                cResult[28] = tmp27;
                cResult[29] = tmp7;
                cResult[30] = tmp10;
                cResult[31] = arg1;
                cResult[32] = labelPressable.pill;
                cResult[33] = tmp44;
                tmp38 = tmp44;
              } else {
                if (cResult[43] === tmp3) {
                  if (cResult[44] === tmp16) {
                    if (cResult[45] === tmp17) {
                      if (cResult[46] === tmp27) {
                        if (cResult[47] === tmp10) {
                          if (cResult[48] === arg1) {
                            if (cResult[49] === str) {
                              if (cResult[50] === labelPressable.pill) {
                                let tmp31 = cResult[51];
                              }
                              return tmp31;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                class T {
                  constructor() {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[11]);
                    num = 0;
                    if (1 === closure_2.get()) {
                      num = 1;
                    }
                    obj1 = { opacity: obj.withSpring(num, tmp(tmp2[12]).ON_PRESS_SPRING, "animate-always") };
                    return obj1;
                  }
                }
                tmp33[0] = arg1;
                const merged2 = Object.assign(tmp10);
                tmp33.size = str;
                tmp33.icon = tmp27;
                tmp33.accessibilityLabel = tmp3;
                tmp33.pillStyle = labelPressable.pill;
                tmp33.variant = "secondary";
                tmp33.onPressIn = tmp16;
                tmp33.onPressOut = tmp17;
                const tmp37 = closure_8(BaseButton(tmp[13]).BaseIconButton, tmp33);
                cResult[43] = tmp3;
                cResult[44] = tmp16;
                cResult[45] = tmp17;
                cResult[46] = tmp27;
                cResult[47] = tmp10;
                cResult[48] = arg1;
                cResult[49] = str;
                cResult[50] = labelPressable.pill;
                cResult[51] = tmp37;
                tmp31 = tmp37;
              }
            }
          }
          class T {
            constructor() {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[11]);
              num = 0;
              if (1 === closure_2.get()) {
                num = 1;
              }
              obj1 = { opacity: obj.withSpring(num, tmp(tmp2[12]).ON_PRESS_SPRING, "animate-always") };
              return obj1;
            }
          }
          const obj5 = { style: labelPressable.imageWrapper, children: null };
          const items1 = [tmp20, tmp24];
          obj5.children = items1;
          const tmp29 = closure_9(closure_6, obj5);
          cResult[22] = labelPressable.imageWrapper;
          cResult[23] = tmp20;
          cResult[24] = tmp24;
          cResult[25] = tmp29;
          tmp27 = tmp29;
        }
        class T {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[11]);
            num = 0;
            if (1 === closure_2.get()) {
              num = 1;
            }
            obj1 = { opacity: obj.withSpring(num, tmp(tmp2[12]).ON_PRESS_SPRING, "animate-always") };
            return obj1;
          }
        }
        const obj6 = { style: null };
        const items2 = [labelPressable.imageDim, animatedStyle];
        obj6.style = items2;
        const tmp26 = closure_8(require("ReanimatedRexport").View, obj6);
        cResult[19] = animatedStyle;
        cResult[20] = labelPressable.imageDim;
        cResult[21] = tmp26;
        tmp24 = tmp26;
      }
      const obj7 = { source: tmp5, style: labelPressable.image };
      const tmp23 = closure_8(closure_7, obj7);
      cResult[16] = tmp5;
      cResult[17] = labelPressable.image;
      cResult[18] = tmp23;
      tmp20 = tmp23;
      const BaseButtonResult2 = BaseButton(tmp[10]);
    }
    class G {
      constructor(arg0) {
        result = closure_2.set(0);
        if (closure_1 != null) {
          tmp3 = onPressOut;
          tmp2Result = tmp2(onPressOut);
        }
        return;
      }
    }
    cResult[13] = tmp9;
    cResult[14] = sharedValue;
    cResult[15] = G;
    tmp17 = G;
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
  tmp16 = fn;
  const BaseButtonResult1 = BaseButton(tmp[10]);
}) : ((size, ref) => {
  let str = size.size;
  if (str === undefined) {
    str = "lg";
  }
  ({ label, accessibilityLabel, maxFontSizeMultiplier, onPressIn } = size);
  const onPressOut = size.onPressOut;
  ({ grow, image } = size);
  const merged = Object.assign(size, Object.assign({ size: 0, label: 0, grow: 0, image: 0, accessibilityLabel: 0, maxFontSizeMultiplier: 0, onPressIn: 0, onPressOut: 0 }));
  let sharedValue;
  const tmp4 = closure_10(str, onPressIn(sharedValue[9]).useIconSizeStyles(str, true, maxFontSizeMultiplier).width, grow);
  let obj = onPressIn(sharedValue[9]);
  sharedValue = onPressIn(sharedValue[10]).useSharedValue(0);
  const items = [sharedValue, onPressIn];
  const callback = noop.useCallback((arg0) => {
    const result = sharedValue.set(1);
    if (onPressIn != null) {
      tmp2(arg0);
    }
  }, items);
  const items1 = [sharedValue, onPressOut];
  const callback1 = noop.useCallback((arg0) => {
    const result = sharedValue.set(0);
    if (onPressOut != null) {
      tmp2(arg0);
    }
  }, items1);
  const obj2 = onPressIn(sharedValue[10]);
  const fn = function w() {
    let num = 0;
    if (1 === sharedValue.get()) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, springPresets.ON_PRESS_SPRING, "animate-always") };
  };
  const obj3 = onPressIn(sharedValue[10]);
  fn.__closure = { withSpring: onPressIn(sharedValue[11]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: onPressIn(sharedValue[12]).ON_PRESS_SPRING };
  fn.__workletHash = 2649796969632;
  fn.__initData = __initData2;
  const obj5 = { style: tmp4.imageWrapper, children: null };
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const items2 = [closure_8(closure_7, { source: image, style: tmp4.image }), ];
  const obj7 = { style: null };
  const items3 = [tmp4.imageDim, animatedStyle];
  obj7.style = items3;
  items2[1] = closure_8(onPressOut(sharedValue[10]).View, obj7);
  obj5.children = items2;
  const tmp11 = closure_9(closure_6, obj5);
  if (null != label) {
    const obj8 = { style: tmp4.labelPressable };
    const merged1 = Object.assign(merged);
    obj8.variant = "none";
    obj8.accessibilityLabel = accessibilityLabel;
    const obj9 = { ref };
    const merged2 = Object.assign(merged);
    obj9.icon = tmp11;
    obj9.accessibilityRole = "none";
    obj9.accessibilityLabel = "";
    obj9.size = "lg";
    obj9.pillStyle = tmp4.pill;
    obj9.variant = "secondary";
    obj9.onPressIn = callback;
    obj9.onPressOut = callback1;
    obj9.maxFontSizeMultiplier = maxFontSizeMultiplier;
    const items4 = [closure_8(onPressIn(tmp3[13]).BaseIconButton, obj9), ];
    const obj10 = { variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier, children: label };
    items4[1] = closure_8(onPressIn(tmp3[14]).Text, obj10);
    obj8.children = items4;
    let tmp10Result = closure_9(onPressIn(tmp3[15]).BaseButton, obj8);
  } else {
    const obj11 = { ref };
    const merged3 = Object.assign(merged);
    obj11.size = str;
    obj11.icon = tmp11;
    obj11.accessibilityLabel = accessibilityLabel;
    obj11.pillStyle = tmp4.pill;
    obj11.variant = "secondary";
    obj11.onPressIn = callback;
    obj11.onPressOut = callback1;
    tmp10Result = closure_8(onPressIn(tmp3[13]).BaseIconButton, obj11);
  }
  return tmp10Result;
}));