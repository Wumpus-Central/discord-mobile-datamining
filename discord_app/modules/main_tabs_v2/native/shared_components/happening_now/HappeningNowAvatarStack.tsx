// === Module 16082: HappeningNowAvatarStack ===

// Module 16082 (HappeningNowAvatarStack)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import spring from "spring" /* 4974 */;
import ClipView from "ClipView" /* 8813 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;

const ClipViewDefault = ClipView;

require = fn;
const View = fn(17).View;
const CHANNEL_SPRING_CONFIG = fn(13029).CHANNEL_SPRING_CONFIG;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let SPRING_CONFIG = { damping: 17, stiffness: 320, mass: 0.5 };
const createStyles = fn(4560);
createStyles.createStyles((arg0, marginLeft) => {
  let obj = { avatarStack: { flexDirection: "row" }, stageAvatarStack: null, avatarBubbles: null, avatars: null, shiftedAvatar: null, userCounter: null, ellipsisWrapper: null, ellipsisBorder: null };
  obj = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: 24, paddingLeft: 4, paddingRight: 4, paddingVertical: 4 };
  obj.stageAvatarStack = obj;
  obj.avatarBubbles = { display: "flex", flexDirection: "row" };
  obj.avatars = { display: "flex", flexDirection: "row" };
  obj.shiftedAvatar = { marginLeft: -marginLeft };
  obj = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: -marginLeft, height: native.AVATAR_SIZE_MAP[arg0], minWidth: native.AVATAR_SIZE_MAP[arg0], borderRadius: 10, paddingHorizontal: 4, paddingTop: 1 };
  obj.userCounter = obj;
  obj.ellipsisWrapper = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-end", overflow: "hidden", marginLeft: -4 - marginLeft };
  obj.ellipsisBorder = { borderColor: nativeDefault.colors.CARD_SECONDARY_BG };
  return obj;
});
const __initData = { code: "function HappeningNowAvatarStackTsx1(){const{interpolate,typingValue,ELLIPSIS_WIDTH}=this.__closure;return{opacity:interpolate(typingValue.get(),[0,1],[0,1]),width:interpolate(typingValue.get(),[0,1],[0,ELLIPSIS_WIDTH])};}" };
let closure_13 = { code: "function HappeningNowAvatarStackTsx2(finished){const{runOnJS,setRenderComponents,isTyping}=this.__closure;if(!finished)return;runOnJS(setRenderComponents)(isTyping);}" };
const __initData2 = { code: "function HappeningNowAvatarStackTsx3(){const{isStage,extraUsers,avatars,AVATAR_SIZE_MAP,avatarSize,avatarOverlap,withSpring,SPRING_CONFIG}=this.__closure;const hasExtraBubble=!isStage&&extraUsers>0;const numBubbles=avatars.length+(hasExtraBubble?1:0);const width=numBubbles>0?numBubbles*AVATAR_SIZE_MAP[avatarSize]-(numBubbles-1)*avatarOverlap:0;return{width:withSpring(width,SPRING_CONFIG),marginRight:numBubbles===0?0:4};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx");

export const HappeningNowAvatarStack = function HappeningNowAvatarStack(userLimit) {
  ({ users, guildId: require, isTyping } = userLimit);
  if (isTyping === undefined) {
    isTyping = false;
  }
  let num = userLimit.userLimit;
  if (num === undefined) {
    num = 3;
  }
  ({ userCount, isStage } = userLimit);
  let XSMALL_20 = userLimit.avatarSize;
  if (XSMALL_20 === undefined) {
    XSMALL_20 = require("native").AvatarSizes.XSMALL_20;
  }
  let num2 = userLimit.avatarBorderWidth;
  if (num2 === undefined) {
    num2 = 2;
  }
  let num3 = userLimit.avatarOverlap;
  if (num3 === undefined) {
    num3 = 4;
  }
  const style = userLimit.style;
  c7 = undefined;
  let sharedValue;
  let substr;
  SPRING_CONFIG = undefined;
  let mapped;
  const tmp3 = mapped(XSMALL_20, num3);
  closure_6 = tmp3;
  let obj = num2;
  [tmp5, c7] = XSMALL_20(num2.useState(() => isTyping), 2);
  let obj1 = require("ReanimatedRexport");
  let num4 = 0;
  if (isTyping) {
    num4 = 1;
  }
  sharedValue = obj1.useSharedValue(num4);
  let tmp6Result = require("useStateFromStores");
  let items = [closure_6];
  const stateFromStores = tmp6Result.useStateFromStores(items, () => closure_6.locale);
  tmp6Result = require("ReanimatedRexport");
  class V {
    constructor() {
      obj = { opacity: null, width: null };
      obj2 = closure_0(closure_2[9]);
      obj.opacity = obj2.interpolate(closure_8.get(), [0, 1], [0, 1]);
      obj3 = closure_0(closure_2[9]);
      obj.width = obj3.interpolate(closure_8.get(), [0, 1], [0, 28]);
      return obj;
    }
  }
  obj = { interpolate: require("ReanimatedRexport").interpolate, typingValue: sharedValue, ELLIPSIS_WIDTH: 28 };
  V.__closure = obj;
  V.__workletHash = 14140918847743;
  V.__initData = __initData;
  const items1 = [isTyping, sharedValue];
  const animatedStyle = tmp6Result.useAnimatedStyle(V);
  const effect = obj.useEffect(() => {
    let obj = spring;
    let num = 0;
    if (isTyping) {
      num = 1;
    }
    const fn = function t(arg0) {
      if (arg0) {
        guildId(isStage[9]).runOnJS(setRenderComponents)(isTyping);
        const obj = guildId(isStage[9]);
      }
    };
    obj = { runOnJS: ReanimatedRexport.runOnJS, setRenderComponents, isTyping };
    fn.__closure = obj;
    fn.__workletHash = 2498652829757;
    fn.__initData = __initData;
    const result = sharedValue.set(obj.withSpring(num, CHANNEL_SPRING_CONFIG, "respect-motion-settings", fn));
  }, items1);
  substr = users.slice(0, num);
  if (userCount == null) {
    userCount = users.length;
  }
  let diff = userCount - substr.length;
  SPRING_CONFIG = diff;
  mapped = substr.map((user, index) => {
    const diff = substr.length - 1;
    let obj = { user, guildId, size: XSMALL_20 };
    const tmp6 = React6(native.Avatar, obj);
    let shiftedAvatar;
    if (0 !== index) {
      shiftedAvatar = closure_6.shiftedAvatar;
    }
    obj = { style: shiftedAvatar, children: null };
    if (index !== diff) {
      obj = { cutouts: null, children: null };
      const point = { shape: ClipView.CutoutShape.Circle, x: native.AVATAR_SIZE_MAP[XSMALL_20] - num3 - num2, y: -num2, size: native.AVATAR_SIZE_MAP[XSMALL_20] + 2 * num2 };
      const items = [point];
      obj.cutouts = items;
      obj.children = tmp6;
      let tmp2Result = React6(ClipViewDefault, obj);
    } else {
      tmp2Result = tmp6;
      if (!isStage) {
        tmp2Result = tmp6;
      }
    }
    obj.children = tmp2Result;
    return React6(View, obj, user.id);
  });
  const tmp4 = XSMALL_20(num2.useState(() => isTyping), 2);
  class H {
    constructor() {
      num = 0;
      if (!isStage) {
        tmp = closure_10;
        num = 0;
        if (closure_10 > 0) {
          num = 1;
        }
      }
      sum = closure_11.length + num;
      num2 = 0;
      if (sum > 0) {
        tmp3 = closure_0;
        tmp4 = closure_2;
        tmp5 = XSMALL_20;
        tmp6 = c5;
        num3 = 1;
        num2 = sum * closure_0(closure_2[8]).AVATAR_SIZE_MAP[XSMALL_20] - (sum - 1) * c5;
      }
      obj = { width: null, marginRight: null };
      obj2 = closure_0(closure_2[11]);
      obj.width = obj2.withSpring(num2, closure_10);
      num4 = 4;
      if (0 === sum) {
        num4 = 0;
      }
      obj.marginRight = num4;
      return obj;
    }
  }
  obj = { isStage, extraUsers: diff, avatars: mapped, AVATAR_SIZE_MAP: require("native").AVATAR_SIZE_MAP, avatarSize: XSMALL_20, avatarOverlap: num3, withSpring: require("spring").withSpring, SPRING_CONFIG };
  H.__closure = obj;
  H.__workletHash = 5027466437777;
  H.__initData = __initData2;
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(H);
  obj1 = { style: null, children: null };
  if (isStage) {
    const items2 = [tmp3.stageAvatarStack, style];
    obj1.style = items2;
    let obj2 = { style: null, children: null };
    const items3 = [tmp3.avatars, animatedStyle1];
    obj2.style = items3;
    obj2.children = mapped;
    const items4 = [sharedValue(isTyping(isStage[9]).View, obj2), ];
    const obj3 = { color: "text-default", variant: "text-xs/semibold", children: require("NumberUtils").humanizeValue(userCount, stateFromStores) };
    items4[1] = sharedValue(require("Text/Text").Text, obj3);
    obj1.children = items4;
    let tmp20 = obj1;
    const tmp6Result2 = require("NumberUtils");
  } else {
    const items5 = [tmp3.avatarStack, style];
    obj1.style = items5;
    const obj4 = { style: null, children: null };
    const items6 = [tmp3.avatarBubbles, animatedStyle1];
    obj4.style = items6;
    const obj5 = { style: tmp3.avatars, children: mapped };
    const items7 = [sharedValue(tmp16, obj5), ];
    let tmp18Result = null;
    if (diff > 0) {
      const obj6 = { style: tmp3.userCounter, children: null };
      const obj7 = { color: "text-default", variant: "text-xxs/semibold", allowFontScaling: false, children: null };
      const items8 = ["+", require("NumberUtils").humanizeValue(diff, stateFromStores)];
      obj7.children = items8;
      obj6.children = tmp15(require("Text/Text").Text, obj7);
      tmp18Result = tmp18(tmp16, obj6);
      const tmp6Result3 = require("NumberUtils");
    }
    items7[1] = tmp18Result;
    obj4.children = items7;
    const items9 = [tmp15(isTyping(isStage[9]).View, obj4), ];
    if (!tmp18Result) {
      tmp18Result = isTyping;
    }
    if (tmp18Result) {
      const obj8 = { style: null, children: null };
      const items10 = [tmp3.ellipsisWrapper, animatedStyle];
      obj8.style = items10;
      const obj9 = { style: tmp3.ellipsisBorder };
      obj8.children = tmp18(require("typing_indicators/TypingIndicator").TypingIndicator, obj9);
      tmp18Result = tmp18(tmp17(isStage[9]).View, obj8);
    }
    items9[1] = tmp18Result;
    obj1.children = items9;
    tmp20 = obj1;
    tmp17 = isTyping;
  }
  return substr(num3, tmp20);
};