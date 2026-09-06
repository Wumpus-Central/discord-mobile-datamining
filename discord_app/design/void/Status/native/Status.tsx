// === Module 14105: Status ===

// Module 14105 (Status)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 4974 */;
import Status_StatusUtils from "Status/StatusUtils" /* 14103 */;
import getStatusContainerStyleDefault from "getStatusContainerStyle" /* 14104 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const STATUS_PADDING = fn(1179).STATUS_PADDING;
const StatusTypes = fn(1074).StatusTypes;
const ChannelAnimationConstants = fn(13029);
({ TYPING_ENTERING: closure_8, TYPING_EXITING: closure_9, CHANNEL_SPRING_CONFIG: c10 } = ChannelAnimationConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let createStyles = fn(4560);
let closure_13 = createStyles.createStyles({ statusIcon: { width: "100%", height: "100%" } });
createStyles = fn(4560);
let closure_14 = createStyles.createStyles((items, arg1) => {
  let obj = Status_StatusUtils;
  const statusTypingDimensions = obj.getStatusTypingDimensions(items);
  ({ height, dotSize } = statusTypingDimensions);
  if (StatusTypes.ONLINE === arg1) {
    let PRIMARY_400 = nativeDefault.unsafe_rawColors.GREEN_360;
    let tmp5 = importDefault;
  } else if (tmp3.IDLE === arg1) {
    PRIMARY_400 = nativeDefault.unsafe_rawColors.YELLOW_300;
    tmp5 = importDefault;
  } else if (tmp3.DND === arg1) {
    PRIMARY_400 = nativeDefault.unsafe_rawColors.RED_400;
    tmp5 = importDefault;
  } else if (tmp3.STREAMING === arg1) {
    PRIMARY_400 = nativeDefault.unsafe_rawColors.PLATFORM_TWITCH;
    tmp5 = importDefault;
  } else {
    if (tmp3.INVISIBLE !== arg1) {
      if (tmp3.UNKNOWN !== arg1) {
        const OFFLINE = tmp3.OFFLINE;
      }
    }
    PRIMARY_400 = nativeDefault.unsafe_rawColors.PRIMARY_400;
    tmp5 = importDefault;
  }
  obj = { ellipsis: { backgroundColor: PRIMARY_400, borderRadius: height, height, width: statusTypingDimensions.width, paddingStart: 4, paddingEnd: 2, marginRight: 0 }, ellipsisDot: null };
  const size = { width: dotSize, height: dotSize, backgroundColor: tmp5(576).colors.WHITE };
  obj.ellipsisDot = size;
  return obj;
});
const __initData = { code: "function StatusTsx1(){const{enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX}=this.__closure;const shouldAnimate=enableAnimation.get()?'respect-motion-settings':'animate-never';return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};}" };
const __initData2 = { code: "function StatusTsx2(){const{withSpring,statusOpacity,CHANNEL_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};}" };
let size = fn(2);
const result = size.fileFinishedImporting("design/void/Status/native/Status.tsx");

export default function Status(isMobileOnline) {
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
  let obj = { style: null, children: null };
  const items = [getStatusContainerStyleDefault(size, flag, flag2), style];
  obj.style = items;
  obj = { style: closure_13().statusIcon, source: null, resizeMode: "stretch" };
  if (streaming) {
    let tmp4Result = tmp4(14106);
  } else if (flag2) {
    tmp4Result = tmp4(14107);
  } else if (flag) {
    tmp4Result = tmp4(14108);
  } else if (StatusTypes.IDLE === status) {
    tmp4Result = tmp4(14109);
  } else if (tmp7.DND === status) {
    tmp4Result = tmp4(14110);
  } else {
    if (tmp7.OFFLINE !== status) {
      if (tmp7.INVISIBLE !== status) {
        const ONLINE = tmp7.ONLINE;
        tmp4Result = tmp4(14112);
      }
    }
    tmp4Result = tmp4(14111);
  }
  obj.source = tmp4Result;
  obj.children = closure_1_11(React4, obj);
  return closure_1_11(hasOwnProperty, obj);
};
export const StatusWithTyping = function StatusWithTyping(status) {
  let flag = status.isMobileOnline;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = status.isVROnline;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ status, size, streaming, style } = status);
  if (streaming === undefined) {
    streaming = false;
  }
  ({ typing, userId } = status);
  let enableAnimation;
  importDefault = undefined;
  let width;
  let height;
  closure_4 = undefined;
  let num;
  let num2;
  const tmp2 = closure_14(size, status);
  const size2 = require("getStatusContainerStyle")(size, flag, flag2);
  let obj = enableAnimation(width[18]);
  if (userId == null) {
    userId = "";
  }
  const tmp6 = height(obj.useFlashListAnimationDisabler(userId), 2);
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
    let tmp5Result = tmp5(tmp4[8]);
    num = tmp5Result.getAnimatedTypingTranslateX(size2.width);
  }
  tmp5Result = tmp5(tmp4[19]);
  class O {
    constructor() {
      str = "animate-never";
      if (closure_0.get()) {
        str = "respect-motion-settings";
      }
      size = { width: null, height: null, borderRadius: null, transform: null };
      obj2 = closure_0(closure_2[20]);
      size.width = obj2.withSpring(width, CHANNEL_SPRING_CONFIG, str);
      obj3 = closure_0(closure_2[20]);
      size.height = obj3.withSpring(height, CHANNEL_SPRING_CONFIG, str, closure_1);
      obj4 = closure_0(closure_2[20]);
      size.borderRadius = obj4.withSpring(borderRadius, CHANNEL_SPRING_CONFIG, str);
      obj = { translateX: null };
      obj6 = closure_0(closure_2[20]);
      obj.translateX = obj6.withSpring(closure_5, CHANNEL_SPRING_CONFIG, str);
      items = [];
      items[0] = obj;
      size.transform = items;
      return size;
    }
  }
  size = { enableAnimation, withSpring: tmp5(tmp4[20]).withSpring, width, CHANNEL_SPRING_CONFIG, height, onAnimationFinished: tmp8, borderRadius: tmp11, translateX: num };
  O.__closure = size;
  O.__workletHash = 2188820017597;
  O.__initData = __initData;
  num2 = 1;
  const animatedStyle = tmp5Result.useAnimatedStyle(O);
  if (typing) {
    num2 = 0;
  }
  const tmp = closure_13();
  const tmp12 = CHANNEL_SPRING_CONFIG;
  const fn = function f() {
    const obj = { opacity: spring.withSpring(num2, CHANNEL_SPRING_CONFIG) };
    return obj;
  };
  obj = { withSpring: tmp5(tmp4[20]).withSpring, statusOpacity: num2, CHANNEL_SPRING_CONFIG: tmp12 };
  fn.__closure = obj;
  fn.__workletHash = 7224613224414;
  fn.__initData = __initData2;
  const animatedStyle1 = enableAnimation(width[19]).useAnimatedStyle(fn);
  obj = { style: null, collapsable: false, children: null };
  let items = [size2, animatedStyle, style];
  obj.style = items;
  if (typing) {
    const obj1 = { collapsable: false, entering, exiting, style: null, children: null };
    const rect = { position: "absolute", left: num2, top: num2 };
    const items1 = [rect];
    obj1.style = items1;
    ({ ellipsis: obj10.style, ellipsisDot: obj10.dotStyle } = tmp2);
    obj1.children = closure_11(tmp3(tmp4[21]), { style: null, dotStyle: null, disableScale: true });
    typing = closure_11(tmp3(tmp4[19]).View, obj1);
    let obj2 = { style: null, dotStyle: null, disableScale: true };
  }
  const items2 = [typing, ];
  let obj3 = { style: animatedStyle1, children: null };
  let obj4 = { style: tmp.statusIcon, source: null, resizeMode: "stretch" };
  if (streaming) {
    let tmp3Result = tmp3(tmp4[10]);
  } else if (flag2) {
    tmp3Result = tmp3(tmp4[11]);
  } else if (flag) {
    tmp3Result = tmp3(tmp4[12]);
  } else if (StatusTypes.IDLE === status) {
    tmp3Result = tmp3(tmp4[13]);
  } else if (tmp22.DND === status) {
    tmp3Result = tmp3(tmp4[14]);
  } else {
    if (tmp22.OFFLINE !== status) {
      if (tmp22.INVISIBLE !== status) {
        const ONLINE = tmp22.ONLINE;
        tmp3Result = tmp3(tmp4[16]);
      }
    }
    tmp3Result = tmp3(tmp4[15]);
  }
  obj4.source = tmp3Result;
  obj3.children = closure_11(closure_4, obj4);
  items2[1] = closure_11(require("ReanimatedRexport").View, obj3);
  obj.children = items2;
  return closure_12(require("ReanimatedRexport").View, obj);
};