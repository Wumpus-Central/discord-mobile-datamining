// discord_app/design/components/Input/native/InputFieldContainer.native.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken4 from "../../../tokens/native/useToken.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import InputTypes from "InputTypes.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import createStyles_mod from "../../Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault, tmp2;

let Platform;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ Platform, StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const RING_SPRING_CONFIG = { mass: 0.5, damping: 15, stiffness: 200, overshootClamping: true };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let disabled;
      let grow;
      let round;
      let tmp14;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(4);
      ({ size, round, disabled, grow } = arg0);
      let str = "lg";
      if (undefined !== size) {
        str = size;
      }
      const tmp4 = undefined !== round && round;
      const tmp5 = undefined !== disabled && disabled;
      const tmp6 = undefined === grow || grow;
      if (cResult[0] !== str) {
        let INPUT_FIELD_RADIUS_LG;
        if ("sm" === str) {
          INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_SM;
        } else if ("md" === str) {
          INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_MD;
        } else if ("lg" === str) {
          INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG;
        }
        cResult[0] = str;
        cResult[1] = INPUT_FIELD_RADIUS_LG;
        tmp7 = INPUT_FIELD_RADIUS_LG;
      } else {
        tmp7 = cResult[1];
      }
      const tmpResult = useToken4;
      let token = tmpResult.useToken(tmp7);
      const useToken = useToken4.useToken;
      useToken4;
      if (tmp4) {
        token = useToken(nativeDefault.modules.mobile.INPUT_FIELD_ROUND_RADIUS);
      }
      if (cResult[2] !== str) {
        let INPUT_FIELD_TEXT_STYLE_LG;
        if ("sm" === str) {
          INPUT_FIELD_TEXT_STYLE_LG = nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_SM;
        } else if ("md" === str) {
          INPUT_FIELD_TEXT_STYLE_LG = nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_MD;
        } else if ("lg" === str) {
          INPUT_FIELD_TEXT_STYLE_LG = nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_LG;
        }
        cResult[2] = str;
        cResult[3] = INPUT_FIELD_TEXT_STYLE_LG;
        tmp14 = INPUT_FIELD_TEXT_STYLE_LG;
      } else {
        tmp14 = cResult[3];
      }
      const tmpResult5 = useToken4;
      const token1 = tmpResult5.useToken(tmp14);
      const tmpResult6 = useToken4;
      return closure_9(
        str,
        tmp5,
        tmp6,
        token,
        token1,
        tmpResult6.useToken(nativeDefault.modules.mobile.INPUT_FIELD_PADDING_VERTICAL_SM_IOS),
      );
    }
  : (size) => {
      let INPUT_FIELD_RADIUS_LG;
      let INPUT_FIELD_TEXT_STYLE_LG;
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
      const useToken = useToken4.useToken;
      useToken4;
      if ("sm" === str) {
        INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_SM;
      } else if ("md" === str) {
        INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_MD;
      } else if ("lg" === str) {
        INPUT_FIELD_RADIUS_LG = nativeDefault.modules.mobile.INPUT_FIELD_RADIUS_LG;
      }
      let token = useToken(INPUT_FIELD_RADIUS_LG);
      const useToken2 = useToken4.useToken;
      useToken4;
      if (flag) {
        token = useToken2(nativeDefault.modules.mobile.INPUT_FIELD_ROUND_RADIUS);
      }
      const useToken3 = useToken4.useToken;
      useToken4;
      if ("sm" === str) {
        INPUT_FIELD_TEXT_STYLE_LG = nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_SM;
      } else if ("md" === str) {
        INPUT_FIELD_TEXT_STYLE_LG = nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_MD;
      } else if ("lg" === str) {
        INPUT_FIELD_TEXT_STYLE_LG = nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_LG;
      }
      const token3 = useToken3(INPUT_FIELD_TEXT_STYLE_LG);
      const tmpResult4 = useToken4;
      return closure_9(
        str,
        flag2,
        flag3,
        token,
        token3,
        tmpResult4.useToken(nativeDefault.modules.mobile.INPUT_FIELD_PADDING_VERTICAL_SM_IOS),
      );
    };
let closure_8 = tmp5;
let createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles(() => {
  let colors;
  let num3;
  let obj12;
  let obj13;
  let obj14;
  let obj15;
  let str3;
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
  const tmp5 = { sm: nativeDefault.space.PX_8, md: nativeDefault.space.PX_12, lg: nativeDefault.space.PX_16 }[str];
  const tmp3 = obj[str];
  const tmp6 = { sm: nativeDefault.space.PX_4, md: nativeDefault.space.PX_8, lg: nativeDefault.space.PX_8 }[str];
  const obj4 = {
    sm: { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 },
    md: { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 },
    lg: { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 + 2 },
  };
  ({ paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 });
  ({ paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 });
  let num2 = 1;
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 + 2 });
  if (flag) {
    num2 = 0.5;
  }
  const obj8 = { opacity: num2, pointerEvents: str3, flexDirection: "row", flexGrow: num3, alignItems: "center" };
  str3 = "auto";
  if (flag) {
    str3 = "none";
  }
  num3 = 0;
  if (flag2) {
    num3 = 1;
  }
  const obj9 = {
    container: obj8,
    background: {
      backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
      borderWidth: nativeDefault.modules.mobile.INPUT_FIELD_BORDER_WIDTH,
      borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT,
    },
    placeholderText: { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT },
    minHeight: { minHeight: tmp3 },
    radius: { borderRadius: num },
    padding: obj4[str],
    text: obj12,
    leadingText: obj13,
    trailingText: obj14,
    leadingIcon: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      paddingTop: tmp5,
      paddingBottom: tmp5,
      paddingStart: tmp5,
      paddingEnd: tmp6,
      justifyContent: "center",
      zIndex: 1,
      pointerEvents: "none",
    },
    trailingIcon: {
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      paddingTop: tmp5,
      paddingBottom: tmp5,
      paddingStart: tmp6,
      paddingEnd: tmp5,
      justifyContent: "center",
      zIndex: 1,
      pointerEvents: "none",
    },
    splitBorder: obj15,
  };
  ({
    backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
    borderWidth: nativeDefault.modules.mobile.INPUT_FIELD_BORDER_WIDTH,
    borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT,
  });
  obj12 = { lineHeight: undefined, color: flag ? colors.TEXT_MUTED : colors.TEXT_DEFAULT, flexGrow: 1 };
  ({ color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT });
  const merged = Object.assign(Text_Text.TextStyleSheet[str2]);
  colors = nativeDefault.colors;
  obj13 = { position: "absolute", left: 0, paddingEnd: tmp6, zIndex: 1, pointerEvents: "none" };
  const merged1 = Object.assign(tmp7);
  obj14 = { position: "absolute", right: 0, paddingStart: tmp6, zIndex: 1, pointerEvents: "none" };
  const merged2 = Object.assign(tmp7);
  obj15 = { borderRightWidth: 1, borderRightColor: nativeDefault.colors.BORDER_STRONG };
  const merged3 = Object.assign(tmp7);
  return obj9;
});
createStyles = createStyles_mod;
let obj = {
  error: nativeDefault.colors.INPUT_BORDER_ERROR_DEFAULT,
  default: "transparent",
  focused: nativeDefault.colors.INPUT_BORDER_ACTIVE,
};
let closure_10 = createStyles.createStyleProperties(obj);
const __initData = {
  code: 'function InputFieldContainerNativeTsx1(){const{status,ringColors,isFocused,withSpring,RING_SPRING_CONFIG}=this.__closure;let borderWidth=0;let borderColor="transparent";if(status!=="default"){borderWidth=2;borderColor=ringColors.error;}else{if(isFocused){borderWidth=1;borderColor=ringColors.focused;}}return{borderWidth:withSpring(borderWidth,RING_SPRING_CONFIG),borderColor:withSpring(borderColor,RING_SPRING_CONFIG),left:-borderWidth,right:-borderWidth,top:-borderWidth,bottom:-borderWidth};}',
};
const __initData2 = {
  code: "function InputFieldContainerNativeTsx2(){const{status,ringColors,isFocused,withSpring,RING_SPRING_CONFIG}=this.__closure;let borderWidth=0;let borderColor='transparent';if(status!=='default'){borderWidth=2;borderColor=ringColors.error;}else if(isFocused){borderWidth=1;borderColor=ringColors.focused;}return{borderWidth:withSpring(borderWidth,RING_SPRING_CONFIG),borderColor:withSpring(borderColor,RING_SPRING_CONFIG),left:-borderWidth,right:-borderWidth,top:-borderWidth,bottom:-borderWidth};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (leadingIcon) => {
      let children;
      let closure_0;
      let disabled;
      let grow;
      let isFocused;
      let round;
      let status;
      let str;
      const obj = require("react");
      const cResult = obj.c(18);
      const tmp4 = closure_10();
      _require = tmp4;
      ({ isFocused, status, children, size, grow, round, disabled } = leadingIcon);
      let tmp5 = undefined !== isFocused;
      leadingIcon = leadingIcon.leadingIcon;
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
          if (cResult[2] === (undefined !== round && round)) {
            if (cResult[3] === size) {
              let tmp9;
              if ((cResult[4] === null) != leadingIcon) {
                tmp9 = cResult[5];
              }
              const tmp11 = closure_8(tmp9);
              const tmpResult = require("ReanimatedRexport");
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
              let obj2 = {
                status: str,
                ringColors: tmp4,
                isFocused: tmp5,
                withSpring: require("spring").withSpring,
                RING_SPRING_CONFIG,
              };
              const useAnimatedStyle = tmpResult.useAnimatedStyle;
              U.__closure = obj2;
              let num = 1460330578504;
              U.__workletHash = 1460330578504;
              U.__initData = __initData;
              const animatedStyle = useAnimatedStyle(U);
              if (cResult[6] === tmp11.background) {
                if (cResult[7] === tmp11.container) {
                  if (cResult[8] === tmp11.minHeight) {
                    let tmp16;
                    if (cResult[9] === tmp11.radius) {
                      tmp16 = cResult[10];
                    }
                    if (cResult[11] === animatedStyle) {
                      let tmp17;
                      if (cResult[12] === tmp11.radius) {
                        tmp17 = cResult[13];
                      }
                      if (cResult[14] === children) {
                        if (cResult[15] === tmp16) {
                          let tmp23;
                          if (cResult[16] === tmp17) {
                            tmp23 = cResult[17];
                          }
                          return tmp23;
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
                          rect = {
                            borderWidth: null,
                            borderColor: null,
                            left: null,
                            right: null,
                            top: null,
                            bottom: null,
                          };
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
                      tmp26[0] = tmp16;
                      const items = [tmp17, children];
                      tmp26[1] = items;
                      const tmp27 = closure_6(closure_4, tmp26);
                      cResult[14] = children;
                      cResult[15] = tmp16;
                      cResult[16] = tmp17;
                      cResult[17] = tmp27;
                      tmp23 = tmp27;
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
                        rect = {
                          borderWidth: null,
                          borderColor: null,
                          left: null,
                          right: null,
                          top: null,
                          bottom: null,
                        };
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
                    tmp20[0] = items1;
                    const tmp22 = closure_5(isFocused(str[10]).View, tmp20);
                    cResult[11] = animatedStyle;
                    cResult[12] = tmp11.radius;
                    cResult[13] = tmp22;
                    tmp17 = tmp22;
                  }
                }
              }
              const items2 = [, , ,];
              ({ container: arr[0], background: arr[1], radius: arr[2], minHeight: arr[3] } = tmp11);
              cResult[6] = tmp11.background;
              cResult[7] = tmp11.container;
              cResult[8] = tmp11.minHeight;
              cResult[9] = tmp11.radius;
              cResult[10] = items2;
              tmp16 = items2;
            }
          }
        }
      }
      let obj3 = { size, round: tmp6, disabled: tmp7, grow, hasLeadingIcon: tmp8 };
      cResult[0] = undefined !== disabled && disabled;
      cResult[1] = grow;
      cResult[2] = undefined !== round && round;
      cResult[3] = size;
      cResult[4] = null != leadingIcon;
      cResult[5] = obj3;
      tmp9 = obj3;
    }
  : (isFocused) => {
      let children;
      let closure_0;
      let closure_1;
      let grow;
      let items;
      let items1;
      let items2;
      let leadingIcon;
      let tmp5;
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
      const obj = { size, round: tmp3, disabled: tmp5, grow, hasLeadingIcon: null != leadingIcon };
      tmp5 = undefined !== disabled && disabled;
      const tmp4Result = closure_8(obj);
      let obj2 = require("ReanimatedRexport");
      const fn = function s() {
        let num;
        let obj2;
        let obj3;
        if ("default" !== str) {
          str = closure_0.error;
          num = 2;
        } else {
          str = "transparent";
          num = 0;
          if (closure_1) {
            str = closure_0.focused;
            num = 1;
          }
        }
        const rect = {
          borderWidth: obj2.withSpring(num, RING_SPRING_CONFIG),
          borderColor: obj3.withSpring(str, RING_SPRING_CONFIG),
          left: -num,
          right: -num,
          top: -num,
          bottom: -num,
        };
        obj2 = spring;
        obj3 = spring;
        return rect;
      };
      let obj3 = {
        status: str,
        ringColors: tmp,
        isFocused: tmp2,
        withSpring: require("spring").withSpring,
        RING_SPRING_CONFIG,
      };
      fn.__closure = obj3;
      fn.__workletHash = 595281080365;
      fn.__initData = __initData2;
      const obj4 = { style: items, children: items2 };
      items = [, , ,];
      ({ container: arr[0], background: arr[1], radius: arr[2], minHeight: arr[3] } = tmp4Result);
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const obj5 = { style: items1 };
      items1 = [closure_3.absoluteFill, tmp4Result.radius, animatedStyle];
      items2 = [closure_5(require("ReanimatedRexport").View, obj5), children];
      return closure_6(closure_4, obj4);
    };
const result = size.fileFinishedImporting("design/components/Input/native/InputFieldContainer.native.tsx");

export const useInputStyles = tmp5;
export const InputFieldContainer = tmp6;
