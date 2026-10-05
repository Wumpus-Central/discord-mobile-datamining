// === Module 13920: Status ===

// Module 13920 (Status)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import StatusConstants from "StatusConstants" /* 1189 */;
import spring from "spring" /* 5597 */;
import Status_StatusUtils from "Status/StatusUtils" /* 13918 */;
import getStatusContainerStyleDefault from "getStatusContainerStyle" /* 13919 */;
import AssetRegistryDefault from "AssetRegistry" /* 13921 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13922 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13923 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13924 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13925 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13926 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13927 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelAnimationConstants from "ChannelAnimationConstants" /* 12852 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let unpackModuleId;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const STATUS_PADDING = StatusConstants.STATUS_PADDING;
const StatusTypes = Constants.StatusTypes;
({ TYPING_ENTERING: metroImportAll, TYPING_EXITING: c9, CHANNEL_SPRING_CONFIG: c10 } = ChannelAnimationConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let closure_13 = createStyles.createStyles({ statusIcon: { width: "100%", height: "100%" } });
createStyles = createStyles_mod;
let closure_14 = createStyles.createStyles((statusSizeOverride, arg1) => {
  let PRIMARY_400;
  let dotSize;
  let height;
  let tmp5;
  const obj = Status_StatusUtils;
  const statusTypingDimensions = obj.getStatusTypingDimensions(statusSizeOverride);
  ({ height, dotSize } = statusTypingDimensions);
  const width = statusTypingDimensions.width;
  if (StatusTypes.ONLINE === arg1) {
    PRIMARY_400 = nativeDefault.unsafe_rawColors.GREEN_360;
    tmp5 = importDefault;
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
  const obj2 = { ellipsis: { backgroundColor: PRIMARY_400, borderRadius: height, height, width, paddingStart: 4, paddingEnd: 2, marginRight: 0 }, ellipsisDot: size };
  size = { width: dotSize, height: dotSize, backgroundColor: tmp5(587).colors.WHITE };
  return obj2;
});
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function StatusTsx1(){const{enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX}=this.__closure;const shouldAnimate=enableAnimation.get()?\"respect-motion-settings\":\"animate-never\";return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};}" };
const __initData2 = { code: "function StatusTsx2(){const{withSpring,statusOpacity,CHANNEL_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};}" };
const __initData3 = { code: "function StatusTsx3(){const{enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX}=this.__closure;const shouldAnimate=enableAnimation.get()?'respect-motion-settings':'animate-never';return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};}" };
const __initData4 = { code: "function StatusTsx4(){const{withSpring,statusOpacity,CHANNEL_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};}" };
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isMobileOnline;
  let isVROnline;
  let status;
  let streaming;
  let style;
  const obj = react2;
  const cResult = obj.c(18);
  ({ isMobileOnline, isVROnline, style, status, size, streaming } = arg0);
  const tmp6 = closure_13();
  if (cResult[0] === (undefined !== isMobileOnline && isMobileOnline)) {
    if (cResult[1] === (undefined !== isVROnline && isVROnline)) {
      let tmp7;
      if (cResult[2] === size) {
        tmp7 = cResult[3];
      }
      if (cResult[4] === style) {
        let tmp9;
        let tmp14;
        if (cResult[5] === tmp7) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === (undefined !== isMobileOnline && isMobileOnline)) {
          if (cResult[8] === (undefined !== isVROnline && isVROnline)) {
            if (cResult[9] === status) {
              let tmp11;
              if (cResult[10] === (undefined !== streaming && streaming)) {
                tmp11 = cResult[11];
              }
              if (cResult[12] === tmp6.statusIcon) {
                let tmp21;
                if (cResult[13] === tmp11) {
                  tmp21 = cResult[14];
                }
                if (cResult[15] === tmp9) {
                  let tmp25;
                  if (cResult[16] === tmp21) {
                    tmp25 = cResult[17];
                  }
                  return tmp25;
                }
                const obj2 = { style: tmp9, children: tmp21 };
                const tmp28 = unpackModuleId(hasOwnProperty, obj2);
                cResult[15] = tmp9;
                cResult[16] = tmp21;
                cResult[17] = tmp28;
                tmp25 = tmp28;
              }
              const obj3 = { style: tmp10, source: tmp11, resizeMode: "stretch" };
              const tmp24 = unpackModuleId(React3, obj3);
              cResult[12] = tmp6.statusIcon;
              cResult[13] = tmp11;
              cResult[14] = tmp24;
              tmp21 = tmp24;
            }
          }
        }
        if (undefined !== streaming && streaming) {
          tmp14 = AssetRegistryDefault;
        } else if (undefined !== isVROnline && isVROnline) {
          tmp14 = AssetRegistryDefault2;
        } else if (undefined !== isMobileOnline && isMobileOnline) {
          tmp14 = AssetRegistryDefault3;
        } else if (StatusTypes.IDLE === status) {
          tmp14 = AssetRegistryDefault4;
        } else if (StatusTypes.DND === status) {
          tmp14 = AssetRegistryDefault5;
        } else {
          if (StatusTypes.OFFLINE !== status) {
            if (StatusTypes.INVISIBLE !== status) {
              const ONLINE = StatusTypes.ONLINE;
              tmp14 = AssetRegistryDefault7;
            }
          }
          tmp14 = AssetRegistryDefault6;
        }
        cResult[7] = undefined !== isMobileOnline && isMobileOnline;
        cResult[8] = undefined !== isVROnline && isVROnline;
        cResult[9] = status;
        cResult[10] = undefined !== streaming && streaming;
        cResult[11] = tmp14;
        tmp11 = tmp14;
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
}) : ((isMobileOnline) => {
  let items;
  let obj2;
  let status;
  let streaming;
  let style;
  let tmp4Result;
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
  const obj = { style: items, children: unpackModuleId(React3, obj2) };
  items = [, ];
  const tmp = closure_13();
  items[0] = getStatusContainerStyleDefault(size, flag, flag2);
  items[1] = style;
  obj2 = { style: tmp.statusIcon, source: tmp4Result, resizeMode: "stretch" };
  if (streaming) {
    tmp4Result = AssetRegistryDefault;
  } else if (flag2) {
    tmp4Result = AssetRegistryDefault2;
  } else if (flag) {
    tmp4Result = AssetRegistryDefault3;
  } else if (StatusTypes.IDLE === status) {
    tmp4Result = AssetRegistryDefault4;
  } else if (StatusTypes.DND === status) {
    tmp4Result = AssetRegistryDefault5;
  } else {
    if (StatusTypes.OFFLINE !== status) {
      if (StatusTypes.INVISIBLE !== status) {
        const ONLINE = StatusTypes.ONLINE;
        tmp4Result = AssetRegistryDefault7;
      }
    }
    tmp4Result = AssetRegistryDefault6;
  }
  return unpackModuleId(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_1;
  let enableAnimation;
  let height;
  let isMobileOnline;
  let isVROnline;
  let items;
  let items1;
  let num2;
  let obj7;
  let status;
  let streaming;
  let style;
  let typing;
  let userId;
  let width;
  let obj = enableAnimation(width[18]);
  const cResult = obj.c(22);
  ({ isMobileOnline, isVROnline, style, status, size, streaming, typing, userId } = arg0);
  const tmp7 = closure_13();
  const tmp8 = closure_14(size, status);
  const size2 = require("getStatusContainerStyle")(size, tmp4, tmp5);
  const useFlashListAnimationDisabler = enableAnimation(width[20]).useFlashListAnimationDisabler;
  enableAnimation(width[20]);
  if (userId == null) {
    userId = "";
  }
  enableAnimation = height(useFlashListAnimationDisabler(userId), 2)[0];
  importDefault = tmp13;
  const tmp11 = height(useFlashListAnimationDisabler(userId), 2);
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
  const tmp16 = typing ? width / 2 : size2.borderRadius;
  let closure_4 = tmp16;
  let num = 0;
  if (typing) {
    const tmpResult4 = enableAnimation(width[8]);
    num = tmpResult4.getAnimatedTypingTranslateX(size2.width);
  }
  const fn = function o() {
    let items;
    let obj2;
    let obj3;
    let obj4;
    let obj6;
    let str = "animate-never";
    if (first.get()) {
      str = "respect-motion-settings";
    }
    size = { width: obj2.withSpring(width, c10, str), height: obj3.withSpring(height, c10, str, closure_1), borderRadius: obj4.withSpring(closure_4, c10, str), transform: items };
    obj2 = spring;
    obj3 = spring;
    obj4 = spring;
    const obj = { translateX: obj6.withSpring(num, c10, str) };
    items = [obj];
    obj6 = spring;
    return size;
  };
  const tmpResult5 = enableAnimation(width[21]);
  const size1 = { enableAnimation, withSpring: tmp(tmp2[22]).withSpring, width, CHANNEL_SPRING_CONFIG, height, onAnimationFinished: tmp13, borderRadius: tmp16, translateX: num };
  fn.__closure = size1;
  fn.__workletHash = 2297404611197;
  fn.__initData = __initData;
  const animatedStyle = tmpResult5.useAnimatedStyle(fn);
  num2 = 1;
  if (typing) {
    num2 = 0;
  }
  const fn2 = function u() {
    let obj2;
    const obj = { opacity: obj2.withSpring(num2, c10) };
    obj2 = spring;
    return obj;
  };
  const tmpResult6 = enableAnimation(width[21]);
  let obj2 = { withSpring: tmp(tmp2[22]).withSpring, statusOpacity: num2, CHANNEL_SPRING_CONFIG };
  fn2.__closure = obj2;
  fn2.__workletHash = 7224613224414;
  fn2.__initData = __initData2;
  const animatedStyle1 = tmpResult6.useAnimatedStyle(fn2);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === size2) {
      let tmp20;
      if (cResult[2] === style) {
        tmp20 = cResult[3];
      }
      if (cResult[4] === typing) {
        let tmp21;
        let tmp9Result;
        if (cResult[5] === tmp8) {
          tmp21 = cResult[6];
        }
        if (cResult[7] === (undefined !== isMobileOnline && isMobileOnline)) {
          if (cResult[8] === (undefined !== isVROnline && isVROnline)) {
            if (cResult[9] === status) {
              let tmp28;
              if (cResult[10] === (undefined !== streaming && streaming)) {
                tmp28 = cResult[11];
              }
              if (cResult[12] === tmp7.statusIcon) {
                let tmp31;
                if (cResult[13] === tmp28) {
                  tmp31 = cResult[14];
                }
                if (cResult[15] === animatedStyle1) {
                  let tmp35;
                  if (cResult[16] === tmp31) {
                    tmp35 = cResult[17];
                  }
                  if (cResult[18] === tmp20) {
                    if (cResult[19] === tmp21) {
                      let tmp38;
                      if (cResult[20] === tmp35) {
                        tmp38 = cResult[21];
                      }
                      return tmp38;
                    }
                  }
                  let obj3 = { style: tmp20, collapsable: false, children: items };
                  items = [tmp21, tmp35];
                  const tmp40 = closure_12(require("ReanimatedRexport").View, obj3);
                  cResult[18] = tmp20;
                  cResult[19] = tmp21;
                  cResult[20] = tmp35;
                  cResult[21] = tmp40;
                  tmp38 = tmp40;
                }
                let obj4 = { style: animatedStyle1, children: tmp31 };
                const tmp37 = closure_11(require("ReanimatedRexport").View, obj4);
                cResult[15] = animatedStyle1;
                cResult[16] = tmp31;
                cResult[17] = tmp37;
                tmp35 = tmp37;
              }
              const obj5 = { style: tmp27, source: tmp28, resizeMode: "stretch" };
              const tmp34 = closure_11(closure_4, obj5);
              cResult[12] = tmp7.statusIcon;
              cResult[13] = tmp28;
              cResult[14] = tmp34;
              tmp31 = tmp34;
            }
          }
        }
        if (undefined !== streaming && streaming) {
          tmp9Result = tmp9(tmp2[10]);
        } else if (undefined !== isVROnline && isVROnline) {
          tmp9Result = tmp9(tmp2[11]);
        } else if (undefined !== isMobileOnline && isMobileOnline) {
          tmp9Result = tmp9(tmp2[12]);
        } else if (StatusTypes.IDLE === status) {
          tmp9Result = tmp9(tmp2[13]);
        } else if (StatusTypes.DND === status) {
          tmp9Result = tmp9(tmp2[14]);
        } else {
          if (StatusTypes.OFFLINE !== status) {
            if (StatusTypes.INVISIBLE !== status) {
              const ONLINE = StatusTypes.ONLINE;
              tmp9Result = tmp9(tmp2[16]);
            }
          }
          tmp9Result = tmp9(tmp2[15]);
        }
        cResult[7] = undefined !== isMobileOnline && isMobileOnline;
        cResult[8] = undefined !== isVROnline && isVROnline;
        cResult[9] = status;
        cResult[10] = undefined !== streaming && streaming;
        cResult[11] = tmp9Result;
        tmp28 = tmp9Result;
      }
      let tmp22 = typing;
      if (tmp22) {
        let obj6 = { collapsable: false, entering, exiting, style: items1, children: closure_11(require("Ellipsis"), obj7) };
        const rect = { position: "absolute", left: num2, top: num2 };
        items1 = [rect];
        const View = tmp9(tmp2[21]).View;
        obj7 = { style: null, dotStyle: null, disableScale: true };
        ({ ellipsis: obj9.style, ellipsisDot: obj9.dotStyle } = tmp8);
        tmp22 = closure_11(View, obj6);
      }
      cResult[4] = typing;
      cResult[5] = tmp8;
      cResult[6] = tmp22;
      tmp21 = tmp22;
    }
  }
  const items2 = [size2, animatedStyle, style];
  cResult[0] = animatedStyle;
  cResult[1] = size2;
  cResult[2] = style;
  cResult[3] = items2;
  tmp20 = items2;
}) : ((isMobileOnline) => {
  let closure_1;
  let items;
  let items1;
  let items2;
  let obj4;
  let obj6;
  let status;
  let streaming;
  let style;
  let tmp22;
  let tmp3Result;
  let typing;
  let userId;
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
  let closure_4;
  let num;
  let num2;
  const tmp = closure_13();
  const tmp2 = closure_14(size, status);
  const size2 = require("getStatusContainerStyle")(size, flag, flag2);
  const useFlashListAnimationDisabler = enableAnimation(width[20]).useFlashListAnimationDisabler;
  enableAnimation(width[20]);
  if (userId == null) {
    userId = "";
  }
  enableAnimation = height(useFlashListAnimationDisabler(userId), 2)[0];
  importDefault = tmp9;
  const tmp7 = height(useFlashListAnimationDisabler(userId), 2);
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
  const tmp12 = typing ? width / 2 : size2.borderRadius;
  closure_4 = tmp12;
  num = 0;
  if (typing) {
    const tmp5Result = enableAnimation(width[8]);
    num = tmp5Result.getAnimatedTypingTranslateX(size2.width);
  }
  const tmp5Result3 = enableAnimation(width[21]);
  class E {
    constructor() {
      let items;
      let obj2;
      let obj3;
      let obj4;
      let obj6;
      let str = "animate-never";
      if (first.get()) {
        str = "respect-motion-settings";
      }
      size = { width: obj2.withSpring(width, c10, str), height: obj3.withSpring(height, c10, str, closure_1), borderRadius: obj4.withSpring(closure_4, c10, str), transform: items };
      obj2 = spring;
      obj3 = spring;
      obj4 = spring;
      const obj = { translateX: obj6.withSpring(num, c10, str) };
      items = [obj];
      obj6 = spring;
      return size;
    }
  }
  const size1 = { enableAnimation, withSpring: tmp5(tmp4[22]).withSpring, width, CHANNEL_SPRING_CONFIG, height, onAnimationFinished: tmp9, borderRadius: tmp12, translateX: num };
  E.__closure = size1;
  E.__workletHash = 3069006846527;
  E.__initData = __initData3;
  num2 = 1;
  const animatedStyle = tmp5Result3.useAnimatedStyle(E);
  if (typing) {
    num2 = 0;
  }
  const fn = function b() {
    let obj2;
    const obj = { opacity: obj2.withSpring(num2, c10) };
    obj2 = spring;
    return obj;
  };
  const tmp5Result4 = enableAnimation(width[21]);
  let obj = { withSpring: tmp5(tmp4[22]).withSpring, statusOpacity: num2, CHANNEL_SPRING_CONFIG };
  fn.__closure = obj;
  fn.__workletHash = 9624745330520;
  fn.__initData = __initData4;
  const animatedStyle1 = tmp5Result4.useAnimatedStyle(fn);
  let obj2 = { style: items, collapsable: false, children: items2 };
  items = [size2, animatedStyle, style];
  const View = tmp3(tmp4[21]).View;
  if (typing) {
    let obj3 = { collapsable: false, entering, exiting, style: items1, children: closure_11(require("Ellipsis"), obj4) };
    const rect = { position: "absolute", left: num2, top: num2 };
    items1 = [rect];
    const View2 = tmp3(tmp4[21]).View;
    obj4 = { style: null, dotStyle: null, disableScale: true };
    ({ ellipsis: obj9.style, ellipsisDot: obj9.dotStyle } = tmp2);
    typing = closure_11(View2, obj3);
  }
  items2 = [typing, ];
  const obj5 = { style: animatedStyle1, children: closure_11(tmp22, obj6) };
  obj6 = { style: tmp.statusIcon, source: tmp3Result, resizeMode: "stretch" };
  const View3 = tmp3(tmp4[21]).View;
  tmp22 = closure_4;
  if (streaming) {
    tmp3Result = tmp3(tmp4[10]);
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
  items2[1] = closure_11(View3, obj5);
  return closure_12(View, obj2);
});
let size = size_mod;
const result = size.fileFinishedImporting("design/void/Status/native/Status.tsx");

export default tmp6;
export const StatusWithTyping = tmp7;