// discord_app/design/void/Status/native/Status.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import Status_StatusUtils from "StatusUtils.tsx";
import getStatusContainerStyleDefault from "getStatusContainerStyle.tsx";
import _modDef14314 from "../../../../../_runtime/metro/14314__.js";
import _modDef14315 from "../../../../../_runtime/metro/14315__.js";
import _modDef14316 from "../../../../../_runtime/metro/14316__.js";
import _modDef14317 from "../../../../../_runtime/metro/14317__.js";
import _modDef14318 from "../../../../../_runtime/metro/14318__.js";
import _modDef14319 from "../../../../../_runtime/metro/14319__.js";
import _modDef14320 from "../../../../../_runtime/metro/14320__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const STATUS_PADDING = fn(1178).STATUS_PADDING;
const StatusTypes = fn(1074).StatusTypes;
const ChannelAnimationConstants = fn(13275);
({ TYPING_ENTERING: closure_8, TYPING_EXITING: closure_9, CHANNEL_SPRING_CONFIG: c10 } = ChannelAnimationConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let createStyles = fn(4722);
let closure_13 = createStyles.createStyles({ statusIcon: { width: "100%", height: "100%" } });
createStyles = fn(4722);
let closure_14 = createStyles.createStyles((items, arg1) => {
  const statusTypingDimensions = Status_StatusUtils.getStatusTypingDimensions(items);
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
  const obj2 = {
    ellipsis: {
      backgroundColor: PRIMARY_400,
      borderRadius: height,
      height,
      width: statusTypingDimensions.width,
      paddingStart: 4,
      paddingEnd: 2,
      marginRight: 0,
    },
    ellipsisDot: null,
  };
  const size = { width: dotSize, height: dotSize, backgroundColor: tmp5(576).colors.WHITE };
  obj2.ellipsisDot = size;
  return obj2;
});
const __initData = {
  code: "function StatusTsx1(){const{enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX}=this.__closure;const shouldAnimate=enableAnimation.get()?'respect-motion-settings':'animate-never';return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};}",
};
const __initData2 = {
  code: "function StatusTsx2(){const{withSpring,statusOpacity,CHANNEL_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};}",
};
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
  const obj = { style: null, children: null };
  const items = [getStatusContainerStyleDefault(size, flag, flag2), style];
  obj.style = items;
  const obj2 = { style: closure_13().statusIcon, source: null, resizeMode: "stretch" };
  if (streaming) {
    let tmp4Result = _modDef14314;
  } else if (flag2) {
    tmp4Result = _modDef14315;
  } else if (flag) {
    tmp4Result = _modDef14316;
  } else if (StatusTypes.IDLE === status) {
    tmp4Result = _modDef14317;
  } else if (StatusTypes.DND === status) {
    tmp4Result = _modDef14318;
  } else {
    if (StatusTypes.OFFLINE !== status) {
      if (StatusTypes.INVISIBLE !== status) {
        const ONLINE = StatusTypes.ONLINE;
        tmp4Result = _modDef14320;
      }
    }
    tmp4Result = _modDef14319;
  }
  obj2.source = tmp4Result;
  obj.children = closure_1_11(React4, obj2);
  return closure_1_11(hasOwnProperty, obj);
}
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
  const tmp = closure_13();
  if (userId == null) {
    userId = "";
  }
  const tmp6 = height(enableAnimation(width[18]).useFlashListAnimationDisabler(userId), 2);
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
  let obj = enableAnimation(width[18]);
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
      obj1 = { translateX: null };
      obj6 = closure_0(closure_2[20]);
      obj1.translateX = obj6.withSpring(closure_5, CHANNEL_SPRING_CONFIG, str);
      items = [];
      items[0] = obj1;
      size.transform = items;
      return size;
    }
  }
  const size1 = {
    enableAnimation,
    withSpring: tmp5(tmp4[20]).withSpring,
    width,
    CHANNEL_SPRING_CONFIG,
    height,
    onAnimationFinished: tmp8,
    borderRadius: tmp11,
    translateX: num,
  };
  O.__closure = size1;
  O.__workletHash = 2188820017597;
  O.__initData = __initData;
  num2 = 1;
  const animatedStyle = enableAnimation(width[19]).useAnimatedStyle(O);
  if (typing) {
    num2 = 0;
  }
  const tmp5Result3 = enableAnimation(width[19]);
  const fn = function f() {
    const obj = { opacity: spring.withSpring(num2, CHANNEL_SPRING_CONFIG) };
    return obj;
  };
  const tmp5Result4 = enableAnimation(width[19]);
  fn.__closure = { withSpring: enableAnimation(width[20]).withSpring, statusOpacity: num2, CHANNEL_SPRING_CONFIG };
  fn.__workletHash = 7224613224414;
  fn.__initData = __initData2;
  const animatedStyle1 = tmp5Result4.useAnimatedStyle(fn);
  let obj3 = { style: null, collapsable: false, children: null };
  let items = [size2, animatedStyle, style];
  obj3.style = items;
  if (typing) {
    let obj4 = { collapsable: false, entering, exiting, style: null, children: null };
    const rect = { position: "absolute", left: num2, top: num2 };
    const items1 = [rect];
    obj4.style = items1;
    ({ ellipsis: obj10.style, ellipsisDot: obj10.dotStyle } = tmp2);
    obj4.children = closure_11(tmp3(tmp4[21]), { style: null, dotStyle: null, disableScale: true });
    typing = closure_11(tmp3(tmp4[19]).View, obj4);
    const obj5 = { style: null, dotStyle: null, disableScale: true };
  }
  const items2 = [typing];
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
  items2[1] = closure_11(require("ReanimatedRexport").View, obj6);
  obj3.children = items2;
  return closure_12(require("ReanimatedRexport").View, obj3);
};
