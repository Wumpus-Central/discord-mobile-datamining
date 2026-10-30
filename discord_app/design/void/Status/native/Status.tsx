// discord_app/design/void/Status/native/Status.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import Status_StatusUtils from "StatusUtils.tsx";
import getStatusContainerStyleDefault from "getStatusContainerStyle.tsx";
import _modDef15945 from "../../../../../_runtime/metro/15945__.js";
import _modDef15946 from "../../../../../_runtime/metro/15946__.js";
import _modDef15947 from "../../../../../_runtime/metro/15947__.js";
import _modDef15948 from "../../../../../_runtime/metro/15948__.js";
import _modDef15949 from "../../../../../_runtime/metro/15949__.js";
import _modDef15950 from "../../../../../_runtime/metro/15950__.js";
import _modDef15951 from "../../../../../_runtime/metro/15951__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const STATUS_PADDING = fn(1189).STATUS_PADDING;
const StatusTypes = fn(1072).StatusTypes;
const ChannelAnimationConstants = fn(14843);
({
  TYPING_ENTERING: closure_7,
  TYPING_EXITING: closure_8,
  CHANNEL_SPRING_CONFIG: closure_9,
} = ChannelAnimationConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let createStyles = fn(5009);
let closure_12 = createStyles.createStyles({ statusIcon: { width: "100%", height: "100%" } });
createStyles = fn(5009);
let closure_13 = createStyles.createStyles((items, arg1) => {
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
  const size = { width: dotSize, height: dotSize, backgroundColor: tmp5(575).colors.WHITE };
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
  const obj2 = { style: closure_12().statusIcon, source: null, resizeMode: "stretch" };
  const tmp = closure_12();
  if (streaming) {
    let tmp4Result = _modDef15945;
  } else if (flag2) {
    tmp4Result = _modDef15946;
  } else if (flag) {
    tmp4Result = _modDef15947;
  } else if (StatusTypes.IDLE === status) {
    tmp4Result = _modDef15948;
  } else if (StatusTypes.DND === status) {
    tmp4Result = _modDef15949;
  } else {
    if (StatusTypes.OFFLINE !== status) {
      if (StatusTypes.INVISIBLE !== status) {
        const ONLINE = StatusTypes.ONLINE;
        tmp4Result = _modDef15951;
      }
    }
    tmp4Result = _modDef15950;
  }
  obj2.source = tmp4Result;
  obj.children = closure_1_10(FastImageDefault, obj2);
  return closure_1_10(View, obj);
}
export function StatusWithTyping(status) {
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
  const tmp2 = closure_13(size, status);
  const size2 = require("getStatusContainerStyle")(size, flag, flag2);
  const tmp = closure_12();
  if (userId == null) {
    userId = "";
  }
  const tmp6 = height(enableAnimation(width[19]).useFlashListAnimationDisabler(userId), 2);
  enableAnimation = tmp6[0];
  importDefault = tmp8;
  if (typing) {
    width = tmp2.ellipsis.width + 2 * num;
  } else {
    width = size2.width;
  }
  if (typing) {
    height = tmp2.ellipsis.height + 2 * num;
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
  let obj = enableAnimation(width[19]);
  const fn = function y() {
    let str = "animate-never";
    if (first.get()) {
      str = "respect-motion-settings";
    }
    const size = {
      width: spring.withSpring(width, CHANNEL_SPRING_CONFIG, str),
      height: null,
      borderRadius: null,
      transform: null,
    };
    size.height = spring.withSpring(height, CHANNEL_SPRING_CONFIG, str, closure_1);
    size.borderRadius = spring.withSpring(closure_4, CHANNEL_SPRING_CONFIG, str);
    const obj = { translateX: null };
    obj.translateX = spring.withSpring(num, CHANNEL_SPRING_CONFIG, str);
    const items = [obj];
    size.transform = items;
    return size;
  };
  const size1 = {
    enableAnimation,
    withSpring: tmp5(tmp4[21]).withSpring,
    width,
    CHANNEL_SPRING_CONFIG,
    height,
    onAnimationFinished: tmp8,
    borderRadius: tmp11,
    translateX: num,
  };
  fn.__closure = size1;
  fn.__workletHash = 2188820017597;
  fn.__initData = __initData;
  num2 = 1;
  const animatedStyle = enableAnimation(width[20]).useAnimatedStyle(fn);
  if (typing) {
    num2 = 0;
  }
  const tmp5Result3 = enableAnimation(width[20]);
  class O {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[21]);
      obj.opacity = obj2.withSpring(c6, CHANNEL_SPRING_CONFIG);
      return obj;
    }
  }
  const tmp5Result4 = enableAnimation(width[20]);
  O.__closure = { withSpring: enableAnimation(width[21]).withSpring, statusOpacity: num2, CHANNEL_SPRING_CONFIG };
  O.__workletHash = 7224613224414;
  O.__initData = __initData2;
  const animatedStyle1 = tmp5Result4.useAnimatedStyle(O);
  let obj3 = { style: null, collapsable: false, children: null };
  let items = [size2, animatedStyle, style];
  obj3.style = items;
  if (typing) {
    let obj4 = { collapsable: false, entering, exiting, style: null, children: null };
    const rect = { position: "absolute", left: num, top: num };
    obj4.style = rect;
    ({ ellipsis: obj10.style, ellipsisDot: obj10.dotStyle } = tmp2);
    obj4.children = closure_10(tmp3(tmp4[22]), { style: null, dotStyle: null, disableScale: true });
    typing = closure_10(tmp3(tmp4[20]).View, obj4);
    const obj5 = { style: null, dotStyle: null, disableScale: true };
  }
  const items1 = [typing];
  const obj6 = { style: animatedStyle1, children: null };
  const obj7 = { style: tmp.statusIcon, source: null, resizeMode: "stretch" };
  let obj2 = { withSpring: enableAnimation(width[21]).withSpring, statusOpacity: num2, CHANNEL_SPRING_CONFIG };
  if (streaming) {
    let tmp3Result2 = tmp3(tmp4[10]);
  } else if (flag2) {
    tmp3Result2 = tmp3(tmp4[11]);
  } else if (flag) {
    tmp3Result2 = tmp3(tmp4[12]);
  } else if (num2.IDLE === status) {
    tmp3Result2 = tmp3(tmp4[13]);
  } else if (tmp22.DND === status) {
    tmp3Result2 = tmp3(tmp4[14]);
  } else {
    if (tmp22.OFFLINE !== status) {
      if (tmp22.INVISIBLE !== status) {
        const ONLINE = tmp22.ONLINE;
        tmp3Result2 = tmp3(tmp4[16]);
      }
    }
    tmp3Result2 = tmp3(tmp4[15]);
  }
  obj7.source = tmp3Result2;
  obj6.children = closure_10(require("FastImage"), obj7);
  items1[1] = closure_10(require("ReanimatedRexport").View, obj6);
  obj3.children = items1;
  return closure_11(require("ReanimatedRexport").View, obj3);
}
