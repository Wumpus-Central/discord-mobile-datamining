// === Module 6292: InputFieldContainer ===

// Module 6292 (InputFieldContainer)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4778 */;
import Text_Text from "Text/Text" /* 5086 */;
import spring from "spring" /* 5374 */;
import InputTypes from "InputTypes" /* 6293 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Platform, StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const RING_SPRING_CONFIG = { mass: 0.5, damping: 15, stiffness: 200, overshootClamping: true };
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInputStyles(arg0) {
  const cResult = c.c(4);
  ({ size, round, disabled, grow } = arg0);
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  if (cResult[0] !== str) {
    if ("sm" === str) {
      let INPUT_FIELD_RADIUS_MD = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_SM;
      cResult[0] = str;
      cResult[1] = INPUT_FIELD_RADIUS_MD;
    } else if ("md" !== str) {
      if ("lg" === str) {
        INPUT_FIELD_RADIUS_MD = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG;
      }
    }
    INPUT_FIELD_RADIUS_MD = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_MD;
  } else {
    let token = useToken.useToken(cResult[1]);
    const tmpResult = useToken;
    if (tmp4) {
      token = tmpResult4.useToken(nativeDefault.modules.mobile.INPUT_FIELD_ROUND_RADIUS);
    }
    if (cResult[2] !== str) {
      if ("sm" === str) {
        let INPUT_FIELD_TEXT_STYLE_MD = nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_SM;
        cResult[2] = str;
        cResult[3] = INPUT_FIELD_TEXT_STYLE_MD;
      } else if ("md" !== str) {
        if ("lg" === str) {
          INPUT_FIELD_TEXT_STYLE_MD = nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_LG;
        }
      }
      INPUT_FIELD_TEXT_STYLE_MD = nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_MD;
    } else {
      const token1 = useToken.useToken(cResult[3]);
      const tmpResult5 = useToken;
      return closure_9(str, tmp5, tmp6, token, token1, useToken.useToken(nativeDefault.modules.mobile.INPUT_FIELD_PADDING_VERTICAL_SM_IOS));
    }
    tmpResult4 = useToken;
  }
  tmp4 = undefined !== round && round;
}) : (function useInputStyles(size) {
  let str = size.size;
  if (str === undefined) {
    str = "lg";
  }
  let flag = size.round;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = size.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = size.grow;
  if (flag3 === undefined) {
    flag3 = true;
  }
  if ("sm" === str) {
    let INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_SM;
  } else if ("md" === str) {
    INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_MD;
  } else if ("lg" === str) {
    INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG;
  }
  let token = useToken.useToken(INPUT_FIELD_RADIUS_LG);
  if (flag) {
    token = tmpResult.useToken(nativeDefault.modules.mobile.INPUT_FIELD_ROUND_RADIUS);
  }
  tmpResult = useToken;
  if ("sm" === str) {
    let INPUT_FIELD_TEXT_STYLE_LG = nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_SM;
  } else if ("md" === str) {
    INPUT_FIELD_TEXT_STYLE_LG = nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_MD;
  } else if ("lg" === str) {
    INPUT_FIELD_TEXT_STYLE_LG = nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_LG;
  }
  const token1 = useToken.useToken(INPUT_FIELD_TEXT_STYLE_LG);
  const tmpResult3 = useToken;
  return closure_9(str, flag2, flag3, token, token1, useToken.useToken(nativeDefault.modules.mobile.INPUT_FIELD_PADDING_VERTICAL_SM_IOS));
});
let closure_8 = tmp5;
let createStyles = fn(5090);
let closure_9 = createStyles.createStyles(() => {
  let str = arg0;
  if (arg0 === undefined) {
    str = "lg";
  }
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  let num = arg3;
  if (arg3 === undefined) {
    num = 12;
  }
  let str2 = arg4;
  if (arg4 === undefined) {
    str2 = "text-md/medium";
  }
  const obj = { sm: InputTypes.InputHeights.SM, md: InputTypes.InputHeights.MD, lg: InputTypes.InputHeights.LG };
  const tmp4 = { sm: nativeDefault.space.PX_8, md: nativeDefault.space.PX_12, lg: nativeDefault.space.PX_16 }[str];
  const obj2 = { sm: nativeDefault.space.PX_8, md: nativeDefault.space.PX_12, lg: nativeDefault.space.PX_16 };
  const tmp5 = { sm: nativeDefault.space.PX_4, md: nativeDefault.space.PX_8, lg: nativeDefault.space.PX_8 }[str];
  const obj4 = { sm: null, md: null, lg: null };
  const obj3 = { sm: nativeDefault.space.PX_4, md: nativeDefault.space.PX_8, lg: nativeDefault.space.PX_8 };
  obj4.sm = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
  const obj5 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
  obj4.md = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 };
  const obj6 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 };
  obj4.lg = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 + 2 };
  let num2 = 1;
  if (flag) {
    num2 = 0.5;
  }
  const obj8 = { opacity: num2, pointerEvents: null, flexDirection: "row", flexGrow: null, alignItems: "center" };
  let str3 = "auto";
  if (flag) {
    str3 = "none";
  }
  obj8.pointerEvents = str3;
  let num3 = 0;
  if (flag2) {
    num3 = 1;
  }
  const obj9 = { container: obj8, background: null, placeholderText: null, minHeight: null, radius: null, padding: null, text: null, leadingText: null, trailingText: null, leadingIcon: null, trailingIcon: null, splitBorder: null };
  obj8.flexGrow = num3;
  const obj7 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 + 2 };
  obj9.background = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.INPUT_FIELD_BORDER_WIDTH, borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT };
  const obj10 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.INPUT_FIELD_BORDER_WIDTH, borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT };
  obj9.placeholderText = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
  obj9.minHeight = { minHeight: obj[str] };
  obj9.radius = { borderRadius: num };
  obj9.padding = obj4[str];
  const obj12 = {};
  const merged = Object.assign(Text_Text.TextStyleSheet[str2]);
  obj12.lineHeight = undefined;
  const colors = nativeDefault.colors;
  obj12.color = flag ? colors.TEXT_MUTED : colors.TEXT_DEFAULT;
  obj12.flexGrow = 1;
  obj9.text = obj12;
  const obj13 = { position: "absolute", left: 0 };
  const merged1 = Object.assign(tmp6);
  obj13.paddingEnd = tmp5;
  obj13.zIndex = 1;
  obj13.pointerEvents = "none";
  obj9.leadingText = obj13;
  const obj14 = { position: "absolute", right: 0 };
  const merged2 = Object.assign(tmp6);
  obj14.paddingStart = tmp5;
  obj14.zIndex = 1;
  obj14.pointerEvents = "none";
  obj9.trailingText = obj14;
  obj9.leadingIcon = { position: "absolute", left: 0, top: 0, bottom: 0, paddingTop: tmp4, paddingBottom: tmp4, paddingStart: tmp4, paddingEnd: tmp5, justifyContent: "center", zIndex: 1, pointerEvents: "none" };
  obj9.trailingIcon = { position: "absolute", right: 0, top: 0, bottom: 0, paddingTop: tmp4, paddingBottom: tmp4, paddingStart: tmp5, paddingEnd: tmp4, justifyContent: "center", zIndex: 1, pointerEvents: "none" };
  const obj15 = {};
  const merged3 = Object.assign(tmp6);
  obj15.borderRightWidth = 1;
  obj15.borderRightColor = nativeDefault.colors.BORDER_STRONG;
  obj9.splitBorder = obj15;
  return obj9;
});
createStyles = fn(5090);
let closure_10 = createStyles.createStyleProperties({ error: nativeDefault.colors.INPUT_BORDER_ERROR_DEFAULT, default: "transparent", focused: nativeDefault.colors.INPUT_BORDER_ACTIVE });
const __initData = { code: "function InputFieldContainerNativeTsx1(){const{status,ringColors,isFocused,withSpring,RING_SPRING_CONFIG}=this.__closure;let borderWidth=0;let borderColor=\"transparent\";if(status!==\"default\"){borderWidth=2;borderColor=ringColors.error;}else{if(isFocused){borderWidth=1;borderColor=ringColors.focused;}}return{borderWidth:withSpring(borderWidth,RING_SPRING_CONFIG),borderColor:withSpring(borderColor,RING_SPRING_CONFIG),left:-borderWidth,right:-borderWidth,top:-borderWidth,bottom:-borderWidth};}" };
const __initData2 = { code: "function InputFieldContainerNativeTsx2(){const{status,ringColors,isFocused,withSpring,RING_SPRING_CONFIG}=this.__closure;let borderWidth=0;let borderColor='transparent';if(status!=='default'){borderWidth=2;borderColor=ringColors.error;}else if(isFocused){borderWidth=1;borderColor=ringColors.focused;}return{borderWidth:withSpring(borderWidth,RING_SPRING_CONFIG),borderColor:withSpring(borderColor,RING_SPRING_CONFIG),left:-borderWidth,right:-borderWidth,top:-borderWidth,bottom:-borderWidth};}" };
ReactCompilerGating = fn(558);
let obj4 = { error: nativeDefault.colors.INPUT_BORDER_ERROR_DEFAULT, default: "transparent", focused: nativeDefault.colors.INPUT_BORDER_ACTIVE };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/InputFieldContainer.native.tsx");

export const useInputStyles = tmp5;
export const InputFieldContainer = ReactCompilerGating.isReactCompilerEnabled() ? (function InputFieldContainer(leadingIcon) {
  const cResult = require("c").c(18);
  const tmp4 = closure_10();
  _require = tmp4;
  ({ isFocused, status, children, size, grow, round, disabled } = leadingIcon);
  let tmp5 = undefined !== isFocused;
  if (tmp5) {
    tmp5 = isFocused;
  }
  isFocused = tmp5;
  str = "default";
  if (undefined !== status) {
    str = status;
  }
  if (cResult[0] === (undefined !== disabled && disabled)) {
    if (cResult[1] === grow) {
      if (cResult[2] === tmp6) {
        if (cResult[3] === size) {
          if (cResult[4] === tmp8) {
            let tmp9 = cResult[5];
          }
          const tmp11 = closure_8(tmp9);
          class U {
            constructor() {
              if ("default" !== status) {
                tmp3 = closure_0;
                str = closure_0.error;
                num = 2;
              } else {
                tmp = isFocused;
                str = "transparent";
                num = 0;
                if (isFocused) {
                  tmp2 = closure_0;
                  str = closure_0.focused;
                  num = 1;
                }
              }
              rect = { borderWidth: null, borderColor: null, left: null, right: null, top: null, bottom: null };
              obj2 = closure_0(closure_2[11]);
              rect.borderWidth = obj2.withSpring(num, closure_7);
              obj3 = closure_0(closure_2[11]);
              rect.borderColor = obj3.withSpring(str, closure_7);
              tmp4 = -num;
              rect.left = tmp4;
              rect.right = tmp4;
              rect.top = tmp4;
              rect.bottom = tmp4;
              return rect;
            }
          }
          let obj2 = { status: str, ringColors: tmp4, isFocused: tmp5, withSpring: tmp(tmp2[11]).withSpring, RING_SPRING_CONFIG };
          U.__closure = obj2;
          U.__workletHash = 1460330578504;
          U.__initData = __initData;
          const animatedStyle = tmp(tmp2[10]).useAnimatedStyle(U);
          if (cResult[6] === tmp11.background) {
            if (cResult[7] === tmp11.container) {
              if (cResult[8] === tmp11.minHeight) {
                if (cResult[9] === tmp11.radius) {
                  let tmp15 = cResult[10];
                }
                if (cResult[11] === animatedStyle) {
                  if (cResult[12] === tmp11.radius) {
                    let tmp16 = cResult[13];
                  }
                  if (cResult[14] === children) {
                    if (cResult[15] === tmp15) {
                      if (cResult[16] === tmp16) {
                        let tmp22 = cResult[17];
                      }
                      return tmp22;
                    }
                  }
                  class U {
                    constructor() {
                      if ("default" !== status) {
                        tmp3 = closure_0;
                        str = closure_0.error;
                        num = 2;
                      } else {
                        tmp = isFocused;
                        str = "transparent";
                        num = 0;
                        if (isFocused) {
                          tmp2 = closure_0;
                          str = closure_0.focused;
                          num = 1;
                        }
                      }
                      rect = { borderWidth: null, borderColor: null, left: null, right: null, top: null, bottom: null };
                      obj2 = closure_0(closure_2[11]);
                      rect.borderWidth = obj2.withSpring(num, closure_7);
                      obj3 = closure_0(closure_2[11]);
                      rect.borderColor = obj3.withSpring(str, closure_7);
                      tmp4 = -num;
                      rect.left = tmp4;
                      rect.right = tmp4;
                      rect.top = tmp4;
                      rect.bottom = tmp4;
                      return rect;
                    }
                  }
                  tmp25[0] = tmp15;
                  const items = [tmp16, children];
                  tmp25[1] = items;
                  const tmp26 = closure_6(closure_4, tmp25);
                  cResult[14] = children;
                  cResult[15] = tmp15;
                  cResult[16] = tmp16;
                  cResult[17] = tmp26;
                  tmp22 = tmp26;
                }
                class U {
                  constructor() {
                    if ("default" !== status) {
                      tmp3 = closure_0;
                      str = closure_0.error;
                      num = 2;
                    } else {
                      tmp = isFocused;
                      str = "transparent";
                      num = 0;
                      if (isFocused) {
                        tmp2 = closure_0;
                        str = closure_0.focused;
                        num = 1;
                      }
                    }
                    rect = { borderWidth: null, borderColor: null, left: null, right: null, top: null, bottom: null };
                    obj2 = closure_0(closure_2[11]);
                    rect.borderWidth = obj2.withSpring(num, closure_7);
                    obj3 = closure_0(closure_2[11]);
                    rect.borderColor = obj3.withSpring(str, closure_7);
                    tmp4 = -num;
                    rect.left = tmp4;
                    rect.right = tmp4;
                    rect.top = tmp4;
                    rect.bottom = tmp4;
                    return rect;
                  }
                }
                const items1 = [closure_3.absoluteFill, tmp11.radius, animatedStyle];
                tmp19[0] = items1;
                const tmp21 = closure_5(isFocused(tmp2[10]).View, tmp19);
                cResult[11] = animatedStyle;
                cResult[12] = tmp11.radius;
                cResult[13] = tmp21;
                tmp16 = tmp21;
              }
            }
          }
          const items2 = [, , , ];
          ({ container: arr[0], background: arr[1], radius: arr[2], minHeight: arr[3] } = tmp11);
          cResult[6] = tmp11.background;
          cResult[7] = tmp11.container;
          cResult[8] = tmp11.minHeight;
          cResult[9] = tmp11.radius;
          cResult[10] = items2;
          tmp15 = items2;
          const tmpResult = tmp(tmp2[10]);
        }
      }
    }
  }
  const obj3 = { size, round: undefined !== round && round, disabled: undefined !== disabled && disabled, grow, hasLeadingIcon: null != leadingIcon.leadingIcon };
  cResult[0] = undefined !== disabled && disabled;
  cResult[1] = grow;
  cResult[2] = undefined !== round && round;
  cResult[3] = size;
  cResult[4] = null != leadingIcon.leadingIcon;
  cResult[5] = obj3;
  tmp9 = obj3;
  const obj = require("c");
}) : (function InputFieldContainer(isFocused) {
  const tmp = closure_10();
  _require = tmp;
  isFocused = isFocused.isFocused;
  importDefault = tmp2;
  const status = isFocused.status;
  let str = "default";
  if (undefined !== status) {
    str = status;
  }
  const round = isFocused.round;
  let tmp3 = undefined !== round;
  ({ children, size, grow, leadingIcon } = isFocused);
  if (tmp3) {
    tmp3 = round;
  }
  const disabled = isFocused.disabled;
  const obj = { size, round: tmp3, disabled: null, grow: null, hasLeadingIcon: null };
  let tmp5 = undefined !== disabled;
  if (tmp5) {
    tmp5 = disabled;
  }
  obj.disabled = tmp5;
  obj.grow = grow;
  obj.hasLeadingIcon = null != leadingIcon;
  const tmp4Result = closure_8(obj);
  const fn = function s() {
    if ("default" !== str) {
      str = closure_0.error;
      let num = 2;
    } else {
      str = "transparent";
      num = 0;
      if (closure_1) {
        str = closure_0.focused;
        num = 1;
      }
    }
    const rect = { borderWidth: spring.withSpring(num, closure_7), borderColor: null, left: null, right: null, top: null, bottom: null };
    rect.borderColor = spring.withSpring(str, closure_7);
    rect.left = -num;
    rect.right = -num;
    rect.top = -num;
    rect.bottom = -num;
    return rect;
  };
  let obj2 = require("ReanimatedRexport");
  fn.__closure = { status: str, ringColors: tmp, isFocused: undefined !== isFocused && isFocused, withSpring: require("spring").withSpring, RING_SPRING_CONFIG };
  fn.__workletHash = 595281080365;
  fn.__initData = __initData2;
  const obj4 = { style: null, children: null };
  const items = [, , , ];
  ({ container: arr[0], background: arr[1], radius: arr[2], minHeight: arr[3] } = tmp4Result);
  obj4.style = items;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj5 = { style: null };
  const items1 = [closure_3.absoluteFill, tmp4Result.radius, animatedStyle];
  obj5.style = items1;
  const items2 = [closure_5(require("ReanimatedRexport").View, obj5), children];
  obj4.children = items2;
  return closure_6(closure_4, obj4);
});