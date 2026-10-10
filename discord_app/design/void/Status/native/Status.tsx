// === Module 14391: Status ===

// Module 14391 (Status)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5378 */;
import Status_StatusUtils from "Status/StatusUtils" /* 14389 */;
import getStatusContainerStyleDefault from "getStatusContainerStyle" /* 14390 */;
import _modDef14392 from "module_14392" /* 14392 */;
import _modDef14393 from "module_14393" /* 14393 */;
import _modDef14394 from "module_14394" /* 14394 */;
import _modDef14395 from "module_14395" /* 14395 */;
import _modDef14396 from "module_14396" /* 14396 */;
import _modDef14397 from "module_14397" /* 14397 */;
import _modDef14398 from "module_14398" /* 14398 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const STATUS_PADDING = fn(1201).STATUS_PADDING;
const StatusTypes = fn(1085).StatusTypes;
const ChannelAnimationConstants = fn(13149);
({ TYPING_ENTERING: closure_8, TYPING_EXITING: closure_9, CHANNEL_SPRING_CONFIG: c10 } = ChannelAnimationConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let createStyles = fn(5092);
let closure_13 = createStyles.createStyles({ statusIcon: { width: "100%", height: "100%" } });
createStyles = fn(5092);
let closure_14 = createStyles.createStyles((statusSizeOverride, arg1) => {
  const statusTypingDimensions = Status_StatusUtils.getStatusTypingDimensions(statusSizeOverride);
  ({ height, dotSize } = statusTypingDimensions);
  if (StatusTypes.ONLINE === arg1) {
    let PRIMARY_400 = nativeDefault.unsafe_rawColors.GREEN_360;
    let tmp5 = importDefault;
  } else if (StatusTypes.IDLE === arg1) {
    PRIMARY_400 = nativeDefault.unsafe_rawColors.YELLOW_300;
    tmp5 = importDefault;
  } else if (StatusTypes.DND === arg1) {
    PRIMARY_400 = nativeDefault.unsafe_rawColors.RED_400;
    tmp5 = importDefault;
  } else if (StatusTypes.STREAMING === arg1) {
    PRIMARY_400 = nativeDefault.unsafe_rawColors.PLATFORM_TWITCH;
    tmp5 = importDefault;
  } else {
    if (StatusTypes.INVISIBLE !== arg1) {
      if (StatusTypes.UNKNOWN !== arg1) {
        const OFFLINE = StatusTypes.OFFLINE;
      }
    }
    PRIMARY_400 = nativeDefault.unsafe_rawColors.PRIMARY_400;
    tmp5 = importDefault;
  }
  const obj2 = { ellipsis: { backgroundColor: PRIMARY_400, borderRadius: height, height, width: statusTypingDimensions.width, paddingStart: 4, paddingEnd: 2, marginRight: 0 }, ellipsisDot: null };
  const size = { width: dotSize, height: dotSize, backgroundColor: tmp5(587).colors.WHITE };
  obj2.ellipsisDot = size;
  return obj2;
});
fn(558);
const __initData = { code: "function StatusTsx1(){const{enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX}=this.__closure;const shouldAnimate=enableAnimation.get()?\"respect-motion-settings\":\"animate-never\";return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};}" };
const __initData2 = { code: "function StatusTsx2(){const{withSpring,statusOpacity,CHANNEL_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};}" };
const __initData3 = { code: "function StatusTsx3(){const{enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX}=this.__closure;const shouldAnimate=enableAnimation.get()?'respect-motion-settings':'animate-never';return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};}" };
const __initData4 = { code: "function StatusTsx4(){const{withSpring,statusOpacity,CHANNEL_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};}" };
const ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function Status(arg0) {
  let tmp = dependencyMap;
  const cResult = c.c(18);
  ({ isMobileOnline, isVROnline, style, status, size, streaming } = arg0);
  const tmp6 = closure_13();
  if (cResult[0] === (undefined !== isMobileOnline && isMobileOnline)) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === size) {
        let tmp7 = cResult[3];
      }
      if (cResult[4] === style) {
        if (cResult[5] === tmp7) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] === tmp3) {
          if (cResult[8] === tmp4) {
            if (cResult[9] === status) {
              if (cResult[10] === tmp5) {
                if (cResult[12] === tmp6.statusIcon) {
                  if (cResult[13] === tmp11) {
                    let tmp22 = cResult[14];
                  }
                  if (cResult[15] === tmp9) {
                    if (cResult[16] === tmp22) {
                      let tmp26 = cResult[17];
                    }
                    return tmp26;
                  }
                  const obj2 = { style: tmp9, children: tmp22 };
                  const tmp29 = closure_1_11(hasOwnProperty, obj2);
                  cResult[15] = tmp9;
                  cResult[16] = tmp22;
                  cResult[17] = tmp29;
                  tmp26 = tmp29;
                }
                const obj3 = { style: tmp10, source: cResult[11], resizeMode: "stretch" };
                const tmp25 = closure_1_11(React4, obj3);
                cResult[12] = tmp6.statusIcon;
                cResult[13] = cResult[11];
                cResult[14] = tmp25;
                tmp22 = tmp25;
              }
            }
          }
        }
        if (tmp5) {
          tmp = 14392;
          let tmp14 = importDefault(tmp);
        } else if (tmp4) {
          tmp14 = _modDef14393;
        } else if (tmp3) {
          tmp14 = _modDef14394;
        } else if (StatusTypes.IDLE === status) {
          tmp14 = _modDef14395;
        } else {
          if (StatusTypes.DND === status) {
            tmp14 = _modDef14396;
          } else if (StatusTypes.OFFLINE !== status) {
            if (StatusTypes.INVISIBLE !== status) {
              const ONLINE = StatusTypes.ONLINE;
              tmp14 = _modDef14398;
            }
          }
          tmp14 = _modDef14397;
        }
        cResult[7] = tmp3;
        cResult[8] = tmp4;
        cResult[9] = status;
        cResult[10] = tmp5;
        cResult[11] = tmp14;
      }
      const items = [tmp7, style];
      cResult[4] = style;
      cResult[5] = tmp7;
      cResult[6] = items;
      tmp9 = items;
    }
  }
  const tmp8 = getStatusContainerStyleDefault(size, undefined !== isMobileOnline && isMobileOnline, undefined !== isVROnline && isVROnline);
  cResult[0] = undefined !== isMobileOnline && isMobileOnline;
  cResult[1] = undefined !== isVROnline && isVROnline;
  cResult[2] = size;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : (function Status(isMobileOnline) {
  let flag = isMobileOnline.isMobileOnline;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isMobileOnline.isVROnline;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ status, streaming, style, size } = isMobileOnline);
  if (streaming === undefined) {
    streaming = false;
  }
  const obj = { style: null, children: null };
  const items = [getStatusContainerStyleDefault(size, flag, flag2), style];
  obj.style = items;
  const obj2 = { style: closure_13().statusIcon, source: null, resizeMode: "stretch" };
  if (streaming) {
    let tmp4Result = _modDef14392;
  } else if (flag2) {
    tmp4Result = _modDef14393;
  } else if (flag) {
    tmp4Result = _modDef14394;
  } else if (StatusTypes.IDLE === status) {
    tmp4Result = _modDef14395;
  } else if (StatusTypes.DND === status) {
    tmp4Result = _modDef14396;
  } else {
    if (StatusTypes.OFFLINE !== status) {
      if (StatusTypes.INVISIBLE !== status) {
        const ONLINE = StatusTypes.ONLINE;
        tmp4Result = _modDef14398;
      }
    }
    tmp4Result = _modDef14397;
  }
  obj2.source = tmp4Result;
  obj.children = closure_1_11(React4, obj2);
  return closure_1_11(hasOwnProperty, obj);
});
let size = fn(2);
const result = size.fileFinishedImporting("design/void/Status/native/Status.tsx");

export default tmp6;
export const StatusWithTyping = ReactCompilerGating.isReactCompilerEnabled() ? (function StatusWithTyping(arg0) {
  const cResult = enableAnimation(width[18]).c(22);
  ({ isMobileOnline, isVROnline, style, status, size, streaming, typing, userId } = arg0);
  const tmp7 = closure_13();
  const tmp8 = closure_14(size, status);
  const size2 = require("getStatusContainerStyle")(size, tmp4, tmp5);
  let obj = enableAnimation(width[18]);
  if (userId == null) {
    userId = "";
  }
  const tmp10 = height(enableAnimation(width[20]).useFlashListAnimationDisabler(userId), 2);
  enableAnimation = tmp10[0];
  importDefault = tmp12;
  if (typing) {
    width = tmp8.ellipsis.width + 2 * num2;
  } else {
    width = size2.width;
  }
  if (typing) {
    height = tmp8.ellipsis.height + 2 * num2;
  } else {
    height = size2.height;
  }
  const tmp15 = typing ? width / 2 : size2.borderRadius;
  closure_4 = tmp15;
  let num = 0;
  if (typing) {
    num = tmp(tmp2[8]).getAnimatedTypingTranslateX(size2.width);
    const tmpResult4 = tmp(tmp2[8]);
  }
  const tmpResult = enableAnimation(width[20]);
  const fn = function o() {
    let str = "animate-never";
    if (first.get()) {
      str = "respect-motion-settings";
    }
    const size = { width: spring.withSpring(width, CHANNEL_SPRING_CONFIG, str), height: null, borderRadius: null, transform: null };
    size.height = spring.withSpring(height, CHANNEL_SPRING_CONFIG, str, closure_1);
    size.borderRadius = spring.withSpring(closure_4, CHANNEL_SPRING_CONFIG, str);
    const obj = { translateX: null };
    obj.translateX = spring.withSpring(num, CHANNEL_SPRING_CONFIG, str);
    const items = [obj];
    size.transform = items;
    return size;
  };
  const size1 = { enableAnimation, withSpring: tmp(tmp2[22]).withSpring, width, CHANNEL_SPRING_CONFIG, height, onAnimationFinished: tmp12, borderRadius: tmp15, translateX: num };
  fn.__closure = size1;
  fn.__workletHash = 2297404611197;
  fn.__initData = __initData;
  const animatedStyle = enableAnimation(width[21]).useAnimatedStyle(fn);
  num2 = 1;
  if (typing) {
    num2 = 0;
  }
  const tmpResult5 = enableAnimation(width[21]);
  const fn2 = function u() {
    const obj = { opacity: spring.withSpring(num2, CHANNEL_SPRING_CONFIG) };
    return obj;
  };
  const tmpResult6 = enableAnimation(width[21]);
  fn2.__closure = { withSpring: enableAnimation(width[22]).withSpring, statusOpacity: num2, CHANNEL_SPRING_CONFIG };
  fn2.__workletHash = 7224613224414;
  fn2.__initData = __initData2;
  const animatedStyle1 = tmpResult6.useAnimatedStyle(fn2);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === size2) {
      if (cResult[2] === style) {
        let tmp19 = cResult[3];
      }
      if (cResult[4] === typing) {
        if (cResult[5] === tmp8) {
          let tmp20 = cResult[6];
        }
        if (cResult[7] === tmp4) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === status) {
              if (cResult[10] === tmp6) {
                if (cResult[12] === tmp7.statusIcon) {
                  if (cResult[13] === tmp27) {
                    let tmp31 = cResult[14];
                  }
                  if (cResult[15] === animatedStyle1) {
                    if (cResult[16] === tmp31) {
                      let tmp35 = cResult[17];
                    }
                    if (cResult[18] === tmp19) {
                      if (cResult[19] === tmp20) {
                        if (cResult[20] === tmp35) {
                          let tmp38 = cResult[21];
                        }
                        return tmp38;
                      }
                    }
                    let obj3 = { style: tmp19, collapsable: false, children: null };
                    let items = [tmp20, tmp35];
                    obj3.children = items;
                    const tmp40 = closure_12(tmp9(tmp2[21]).View, obj3);
                    cResult[18] = tmp19;
                    cResult[19] = tmp20;
                    cResult[20] = tmp35;
                    cResult[21] = tmp40;
                    tmp38 = tmp40;
                  }
                  let obj4 = { style: animatedStyle1, children: tmp31 };
                  const tmp37 = closure_11(tmp9(tmp2[21]).View, obj4);
                  cResult[15] = animatedStyle1;
                  cResult[16] = tmp31;
                  cResult[17] = tmp37;
                  tmp35 = tmp37;
                }
                const obj5 = { style: tmp26, source: cResult[11], resizeMode: "stretch" };
                const tmp34 = closure_11(closure_4, obj5);
                cResult[12] = tmp7.statusIcon;
                cResult[13] = cResult[11];
                cResult[14] = tmp34;
                tmp31 = tmp34;
              }
            }
          }
        }
        if (tmp6) {
          let tmp9Result = tmp9(tmp2[10]);
        } else if (tmp5) {
          tmp9Result = tmp9(tmp2[11]);
        } else if (tmp4) {
          tmp9Result = tmp9(tmp2[12]);
        } else if (StatusTypes.IDLE === status) {
          tmp9Result = tmp9(tmp2[13]);
        } else {
          if (StatusTypes.DND === status) {
            tmp9Result = tmp9(tmp2[14]);
          } else if (StatusTypes.OFFLINE !== status) {
            if (StatusTypes.INVISIBLE !== status) {
              const ONLINE = StatusTypes.ONLINE;
              tmp9Result = tmp9(tmp2[16]);
            }
          }
          tmp9Result = tmp9(tmp2[15]);
        }
        cResult[7] = tmp4;
        cResult[8] = tmp5;
        cResult[9] = status;
        cResult[10] = tmp6;
        cResult[11] = tmp9Result;
      }
      let tmp21 = typing;
      if (typing) {
        const obj6 = { collapsable: false, entering, exiting, style: null, children: null };
        const rect = { position: "absolute", left: num2, top: num2 };
        obj6.style = rect;
        ({ ellipsis: obj10.style, ellipsisDot: obj10.dotStyle } = tmp8);
        obj6.children = closure_11(tmp9(tmp2[23]), { style: null, dotStyle: null, disableScale: true });
        tmp21 = closure_11(tmp9(tmp2[21]).View, obj6);
        const obj7 = { style: null, dotStyle: null, disableScale: true };
      }
      cResult[4] = typing;
      cResult[5] = tmp8;
      cResult[6] = tmp21;
      tmp20 = tmp21;
    }
  }
  const items1 = [size2, animatedStyle, style];
  cResult[0] = animatedStyle;
  cResult[1] = size2;
  cResult[2] = style;
  cResult[3] = items1;
  tmp19 = items1;
  let obj2 = { withSpring: enableAnimation(width[22]).withSpring, statusOpacity: num2, CHANNEL_SPRING_CONFIG };
}) : (function StatusWithTyping(isMobileOnline) {
  let flag = isMobileOnline.isMobileOnline;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isMobileOnline.isVROnline;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ status, size, streaming, style } = isMobileOnline);
  if (streaming === undefined) {
    streaming = false;
  }
  ({ typing, userId } = isMobileOnline);
  let enableAnimation;
  importDefault = undefined;
  let width;
  let height;
  closure_4 = undefined;
  let num;
  let num2;
  const tmp2 = closure_14(size, status);
  const size2 = require("getStatusContainerStyle")(size, flag, flag2);
  const tmp = closure_13();
  if (userId == null) {
    userId = "";
  }
  const tmp6 = height(enableAnimation(width[20]).useFlashListAnimationDisabler(userId), 2);
  enableAnimation = tmp6[0];
  importDefault = tmp8;
  if (typing) {
    width = tmp2.ellipsis.width + 2 * num2;
  } else {
    width = size2.width;
  }
  if (typing) {
    height = tmp2.ellipsis.height + 2 * num2;
  } else {
    height = size2.height;
  }
  const tmp11 = typing ? width / 2 : size2.borderRadius;
  closure_4 = tmp11;
  num = 0;
  if (typing) {
    num = tmp5(tmp4[8]).getAnimatedTypingTranslateX(size2.width);
    const tmp5Result = tmp5(tmp4[8]);
  }
  let obj = enableAnimation(width[20]);
  class E {
    constructor() {
      str = "animate-never";
      if (closure_0.get()) {
        str = "respect-motion-settings";
      }
      size = { width: null, height: null, borderRadius: null, transform: null };
      obj2 = closure_0(closure_2[22]);
      size.width = obj2.withSpring(width, CHANNEL_SPRING_CONFIG, str);
      obj3 = closure_0(closure_2[22]);
      size.height = obj3.withSpring(height, CHANNEL_SPRING_CONFIG, str, closure_1);
      obj4 = closure_0(closure_2[22]);
      size.borderRadius = obj4.withSpring(borderRadius, CHANNEL_SPRING_CONFIG, str);
      obj1 = { translateX: null };
      obj6 = closure_0(closure_2[22]);
      obj1.translateX = obj6.withSpring(closure_5, CHANNEL_SPRING_CONFIG, str);
      items = [];
      items[0] = obj1;
      size.transform = items;
      return size;
    }
  }
  const size1 = { enableAnimation, withSpring: tmp5(tmp4[22]).withSpring, width, CHANNEL_SPRING_CONFIG, height, onAnimationFinished: tmp8, borderRadius: tmp11, translateX: num };
  E.__closure = size1;
  E.__workletHash = 3069006846527;
  E.__initData = __initData3;
  num2 = 1;
  const animatedStyle = enableAnimation(width[21]).useAnimatedStyle(E);
  if (typing) {
    num2 = 0;
  }
  const tmp5Result3 = enableAnimation(width[21]);
  const fn = function b() {
    const obj = { opacity: spring.withSpring(num2, CHANNEL_SPRING_CONFIG) };
    return obj;
  };
  const tmp5Result4 = enableAnimation(width[21]);
  fn.__closure = { withSpring: enableAnimation(width[22]).withSpring, statusOpacity: num2, CHANNEL_SPRING_CONFIG };
  fn.__workletHash = 9624745330520;
  fn.__initData = __initData4;
  const animatedStyle1 = tmp5Result4.useAnimatedStyle(fn);
  let obj3 = { style: null, collapsable: false, children: null };
  let items = [size2, animatedStyle, style];
  obj3.style = items;
  if (typing) {
    let obj4 = { collapsable: false, entering, exiting, style: null, children: null };
    const rect = { position: "absolute", left: num2, top: num2 };
    obj4.style = rect;
    ({ ellipsis: obj10.style, ellipsisDot: obj10.dotStyle } = tmp2);
    obj4.children = closure_11(tmp3(tmp4[23]), { style: null, dotStyle: null, disableScale: true });
    typing = closure_11(tmp3(tmp4[21]).View, obj4);
    const obj5 = { style: null, dotStyle: null, disableScale: true };
  }
  const items1 = [typing, ];
  const obj6 = { style: animatedStyle1, children: null };
  const obj7 = { style: tmp.statusIcon, source: null, resizeMode: "stretch" };
  if (streaming) {
    let tmp3Result = tmp3(tmp4[10]);
  } else if (flag2) {
    tmp3Result = tmp3(tmp4[11]);
  } else if (flag) {
    tmp3Result = tmp3(tmp4[12]);
  } else if (StatusTypes.IDLE === status) {
    tmp3Result = tmp3(tmp4[13]);
  } else if (StatusTypes.DND === status) {
    tmp3Result = tmp3(tmp4[14]);
  } else {
    if (StatusTypes.OFFLINE !== status) {
      if (StatusTypes.INVISIBLE !== status) {
        const ONLINE = StatusTypes.ONLINE;
        tmp3Result = tmp3(tmp4[16]);
      }
    }
    tmp3Result = tmp3(tmp4[15]);
  }
  obj7.source = tmp3Result;
  obj6.children = closure_11(closure_4, obj7);
  items1[1] = closure_11(require("ReanimatedRexport").View, obj6);
  obj3.children = items1;
  return closure_12(require("ReanimatedRexport").View, obj3);
});