// === Module 13715: Status ===

// Module 13715 (Status)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getAnimatedTypingTranslateX from "getAnimatedTypingTranslateX" /* 13713 */;
import STATUS_PADDINGDefault from "STATUS_PADDING" /* 13714 */;
import closure_3 from "_slicedToArray" /* 32 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { STATUS_PADDING } from "STATUS_PADDING" /* 1298 */;
import { StatusTypes } from "ME" /* 676 */;
import n from "n" /* 9390 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
noopAll;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ TYPING_ENTERING: closure_8, TYPING_EXITING: c9, CHANNEL_SPRING_CONFIG: c10 } = n);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles({ statusIcon: { width: "100%", height: "100%" } });
let closure_14 = createCacheKey.createStyles((items) => {
  let obj = getAnimatedTypingTranslateX;
  const statusTypingDimensions = obj.getStatusTypingDimensions(items);
  ({ height, dotSize } = statusTypingDimensions);
  if (StatusTypes.ONLINE === arg1) {
    let PRIMARY_400 = ThemesDefault.unsafe_rawColors.GREEN_360;
    let tmp5 = importDefault;
  } else if (tmp3.IDLE === arg1) {
    PRIMARY_400 = ThemesDefault.unsafe_rawColors.YELLOW_300;
    tmp5 = importDefault;
  } else if (tmp3.DND === arg1) {
    PRIMARY_400 = ThemesDefault.unsafe_rawColors.RED_400;
    tmp5 = importDefault;
  } else if (tmp3.STREAMING === arg1) {
    PRIMARY_400 = ThemesDefault.unsafe_rawColors.PLATFORM_TWITCH;
    tmp5 = importDefault;
  } else {
    if (tmp3.INVISIBLE !== arg1) {
      if (tmp3.UNKNOWN !== arg1) {
        const OFFLINE = tmp3.OFFLINE;
      }
    }
    PRIMARY_400 = ThemesDefault.unsafe_rawColors.PRIMARY_400;
    tmp5 = importDefault;
  }
  obj = { ellipsis: { backgroundColor: PRIMARY_400, borderRadius: height, height, width: statusTypingDimensions.width, paddingStart: 4, paddingEnd: 2, marginRight: 0 }, ellipsisDot: null };
  obj = { width: dotSize, height: dotSize, backgroundColor: tmp5(712).colors.WHITE };
  obj[1] = obj;
  return obj;
});
let closure_15 = { code: "function StatusTsx1(){const{enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX}=this.__closure;const shouldAnimate=enableAnimation.get()?'respect-motion-settings':'animate-never';return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};}" };
let closure_16 = { code: "function StatusTsx2(){const{withSpring,statusOpacity,CHANNEL_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};}" };
const result = require("set").fileFinishedImporting("design/void/Status/native/Status.tsx");

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
  const items = [STATUS_PADDINGDefault(size, flag, flag2), style];
  obj[0] = items;
  obj = { style: callback2().statusIcon, source: null, resizeMode: "stretch" };
  if (streaming) {
    let tmp4Result = tmp4(13716);
  } else if (flag2) {
    tmp4Result = tmp4(13717);
  } else if (flag) {
    tmp4Result = tmp4(13718);
  } else if (StatusTypes.IDLE === status) {
    tmp4Result = tmp4(13719);
  } else if (tmp7.DND === status) {
    tmp4Result = tmp4(13720);
  } else {
    if (tmp7.OFFLINE !== status) {
      if (tmp7.INVISIBLE !== status) {
        const ONLINE = tmp7.ONLINE;
        tmp4Result = tmp4(13722);
      }
    }
    tmp4Result = tmp4(13721);
  }
  obj[1] = tmp4Result;
  obj[1] = closure_11(closure_4, obj);
  return closure_11(closure_5, obj);
};
export const StatusWithTyping = function StatusWithTyping(isMobileOnline) {
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
  let first;
  importDefault = undefined;
  let width;
  let height;
  closure_4 = undefined;
  let num;
  let num2;
  const tmp2 = callback3(size, status);
  const size2 = importDefault(width[17])(size, flag, flag2);
  let obj = first(width[18]);
  if (userId == null) {
    userId = "";
  }
  const tmp6 = height(obj.useFlashListAnimationDisabler(userId), 2);
  first = tmp6[0];
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
      obj = { width: null, height: null, borderRadius: null, transform: null };
      obj2 = closure_0(width[20]);
      obj[0] = obj2.withSpring(width, closure_1_10, str);
      obj3 = closure_0(width[20]);
      obj[1] = obj3.withSpring(height, closure_1_10, str, closure_1);
      obj4 = closure_0(width[20]);
      obj[2] = obj4.withSpring(borderRadius, closure_1_10, str);
      obj = { translateX: null };
      obj6 = closure_0(width[20]);
      obj[0] = obj6.withSpring(closure_5, closure_1_10, str);
      items = [];
      items[0] = obj;
      obj[3] = items;
      return obj;
    }
  }
  obj = { enableAnimation: first, withSpring: tmp5(tmp4[20]).withSpring, width, CHANNEL_SPRING_CONFIG: closure_10, height, onAnimationFinished: tmp8, borderRadius: tmp11, translateX: num };
  O.__closure = obj;
  O.__workletHash = 2188820017597;
  O.__initData = closure_15;
  num2 = 1;
  const animatedStyle = tmp5Result.useAnimatedStyle(O);
  if (typing) {
    num2 = 0;
  }
  const tmp = callback2();
  const tmp12 = closure_10;
  const fn = function f() {
    const obj = { opacity: first(width[20]).withSpring(num2, closure_1_10) };
    return obj;
  };
  obj = { withSpring: tmp5(tmp4[20]).withSpring, statusOpacity: num2, CHANNEL_SPRING_CONFIG: tmp12 };
  fn.__closure = obj;
  fn.__workletHash = 7224613224414;
  fn.__initData = closure_16;
  const animatedStyle1 = first(width[19]).useAnimatedStyle(fn);
  obj1 = { style: items, collapsable: false, children: null };
  items = [size2, animatedStyle, style];
  if (typing) {
    let obj2 = { collapsable: false, entering: null, exiting: null, style: null, children: null };
    obj2[1] = closure_8;
    obj2[2] = closure_9;
    let obj3 = { position: "absolute", left: null, top: null };
    obj3[1] = num2;
    obj3[2] = num2;
    const items1 = [obj3];
    obj2[3] = items1;
    ({ ellipsis: obj10[0], ellipsisDot: obj10[1] } = tmp2);
    obj2[4] = callback(tmp3(tmp4[21]), { style: null, dotStyle: null, disableScale: true });
    typing = callback(tmp3(tmp4[19]).View, obj2);
    let obj4 = { style: null, dotStyle: null, disableScale: true };
  }
  const items2 = [typing, ];
  const obj5 = { style: animatedStyle1, children: null };
  const obj6 = { style: tmp.statusIcon, source: null, resizeMode: "stretch" };
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
  obj6[1] = tmp3Result;
  obj5[1] = callback(closure_4, obj6);
  items2[1] = callback(importDefault(width[19]).View, obj5);
  obj1[2] = items2;
  return closure_12(importDefault(width[19]).View, obj1);
};