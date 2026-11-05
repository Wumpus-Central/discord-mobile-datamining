// discord_app/design/void/Status/native/Status.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import spring_spring from "../../../animation/reanimated/spring/spring.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import EllipsisDefault from "../../Ellipsis/native/Ellipsis.tsx";
import Status_StatusUtils from "StatusUtils.tsx";
import getStatusContainerStyleDefault from "getStatusContainerStyle.tsx";
import _modDef16248 from "../../../../../_runtime/metro/16248__.js";
import _modDef16249 from "../../../../../_runtime/metro/16249__.js";
import _modDef16250 from "../../../../../_runtime/metro/16250__.js";
import _modDef16251 from "../../../../../_runtime/metro/16251__.js";
import _modDef16252 from "../../../../../_runtime/metro/16252__.js";
import _modDef16253 from "../../../../../_runtime/metro/16253__.js";
import _modDef16254 from "../../../../../_runtime/metro/16254__.js";
import useFlashListAnimationDisabler from "../../../../modules/main_tabs_v2/native/shared_components/guild_channels/useFlashListAnimationDisabler.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const STATUS_PADDING = fn(1188).STATUS_PADDING;
const StatusTypes = fn(1072).StatusTypes;
const ChannelAnimationConstants = fn(15110);
({
  TYPING_ENTERING: metroImportDefault,
  TYPING_EXITING: closure_8,
  CHANNEL_SPRING_CONFIG: closure_9,
} = ChannelAnimationConstants);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let createStyles = fn(5143);
let closure_12 = createStyles.createStyles({ statusIcon: { width: "100%", height: "100%" } });
createStyles = fn(5143);
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
let closure_14 = {
  code: "(function StatusTsx1(){let[enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX]=this.__closure;const shouldAnimate=enableAnimation.get()?'respect-motion-settings':'animate-never';return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};})",
};
let closure_15 = {
  code: "(function StatusTsx2(){let[withSpring,statusOpacity,CHANNEL_SPRING_CONFIG]=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};})",
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
  items = [getStatusContainerStyleDefault(size, flag, flag2), style];
  obj.style = items;
  const obj2 = { style: closure_12().statusIcon, source: null, resizeMode: "stretch" };
  const tmp = closure_12();
  if (streaming) {
    let tmp4Result = _modDef16248;
  } else if (flag2) {
    tmp4Result = _modDef16249;
  } else if (flag) {
    tmp4Result = _modDef16250;
  } else if (StatusTypes.IDLE === status) {
    tmp4Result = _modDef16251;
  } else if (StatusTypes.DND === status) {
    tmp4Result = _modDef16252;
  } else {
    if (StatusTypes.OFFLINE !== status) {
      if (StatusTypes.INVISIBLE !== status) {
        const ONLINE = StatusTypes.ONLINE;
        tmp4Result = _modDef16254;
      }
    }
    tmp4Result = _modDef16253;
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
  const tmp2 = closure_13(size, status);
  const size2 = getStatusContainerStyleDefault(size, flag, flag2);
  const tmp = closure_12();
  if (userId == null) {
    userId = "";
  }
  [tmp7, tmp8] = useFlashListAnimationDisabler.useFlashListAnimationDisabler(userId);
  if (typing) {
    let width = tmp2.ellipsis.width + 2 * STATUS_PADDING;
  } else {
    width = size2.width;
  }
  if (typing) {
    let height = tmp2.ellipsis.height + 2 * STATUS_PADDING;
  } else {
    height = size2.height;
  }
  let num = 0;
  if (typing) {
    num = Status_StatusUtils.getAnimatedTypingTranslateX(size2.width);
    const tmp5Result = Status_StatusUtils;
  }
  const tmp11 = typing ? width / 2 : size2.borderRadius;
  const tmp6 = _slicedToArray(useFlashListAnimationDisabler.useFlashListAnimationDisabler(userId), 2);
  items = [closure_14, tmp7, spring_spring.withSpring, width, React6, height, tmp8, tmp11, num];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items;
  class StatusTsx1 {
    constructor() {
      str = "animate-never";
      if (closure_0.get()) {
        str = "respect-motion-settings";
      }
      size = {
        width: closure_1(closure_2, closure_3, str),
        height: closure_1(closure_4, closure_3, str, closure_5),
        borderRadius: closure_1(closure_6, closure_3, str),
        transform: null,
      };
      obj1 = { translateX: closure_1(closure_7, closure_3, str) };
      items = [];
      items[0] = obj1;
      size.transform = items;
      return size;
    }
  }
  const items1 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
  StatusTsx1.__closure = items1;
  StatusTsx1.__workletHash = 2666349708804;
  StatusTsx1.__initData = tmp13;
  let num2 = 1;
  const animatedStyle = _mod1652.useAnimatedStyle(StatusTsx1);
  if (typing) {
    num2 = 0;
  }
  const tmp5Result3 = _mod1652;
  const items2 = [closure_15, spring_spring.withSpring, num2, React6];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp23, tmp24, tmp25, tmp26] = items2;
  class StatusTsx2 {
    constructor() {
      obj = { opacity: closure_0(closure_1, closure_2) };
      return obj;
    }
  }
  const items3 = [tmp24, tmp25, tmp26];
  StatusTsx2.__closure = items3;
  StatusTsx2.__workletHash = 15237621584231;
  StatusTsx2.__initData = tmp23;
  const animatedStyle1 = _mod1652.useAnimatedStyle(StatusTsx2);
  const obj2 = { style: null, collapsable: false, children: null };
  const items4 = [size2, animatedStyle, style];
  obj2.style = items4;
  if (typing) {
    const obj3 = { collapsable: false, entering, exiting, style: null, children: null };
    const rect = { position: "absolute", left: STATUS_PADDING, top: STATUS_PADDING };
    obj3.style = rect;
    ({ ellipsis: obj8.style, ellipsisDot: obj8.dotStyle } = tmp2);
    obj3.children = closure_1_10(EllipsisDefault, { style: null, dotStyle: null, disableScale: true });
    typing = closure_1_10(_modDef1652.View, obj3);
    const obj4 = { style: null, dotStyle: null, disableScale: true };
  }
  const items5 = [typing];
  const obj5 = { style: animatedStyle1, children: null };
  const obj6 = { style: tmp.statusIcon, source: null, resizeMode: "stretch" };
  const tmp5Result4 = _mod1652;
  if (streaming) {
    let tmp3Result2 = _modDef16248;
  } else if (flag2) {
    tmp3Result2 = _modDef16249;
  } else if (flag) {
    tmp3Result2 = _modDef16250;
  } else if (StatusTypes.IDLE === status) {
    tmp3Result2 = _modDef16251;
  } else if (StatusTypes.DND === status) {
    tmp3Result2 = _modDef16252;
  } else {
    if (StatusTypes.OFFLINE !== status) {
      if (StatusTypes.INVISIBLE !== status) {
        const ONLINE = StatusTypes.ONLINE;
        tmp3Result2 = _modDef16254;
      }
    }
    tmp3Result2 = _modDef16253;
  }
  obj6.source = tmp3Result2;
  obj5.children = closure_1_10(FastImageDefault, obj6);
  items5[1] = closure_1_10(_modDef1652.View, obj5);
  obj2.children = items5;
  return closure_1_11(_modDef1652.View, obj2);
}
