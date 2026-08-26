// === Module 15518: HappeningNowAvatarStack ===

// Module 15518 (HappeningNowAvatarStack)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "_getSystemLocale" /* 1996 */;
import { CHANNEL_SPRING_CONFIG } from "n" /* 12582 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = { damping: 17, stiffness: 320, mass: 0.5 };
let closure_11 = createCacheKey.createStyles((arg0, marginLeft) => {
  let obj = { avatarStack: { flexDirection: "row" }, stageAvatarStack: null, avatarBubbles: null, avatars: null, shiftedAvatar: null, userCounter: null, ellipsisWrapper: null, ellipsisBorder: null };
  obj = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: 24, paddingLeft: 4, paddingRight: 4, paddingVertical: 4 };
  obj[1] = obj;
  obj[2] = { display: "flex", flexDirection: "row" };
  obj[3] = { display: "flex", flexDirection: "row" };
  obj[4] = { marginLeft: -marginLeft };
  obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: -marginLeft, height: Button.AVATAR_SIZE_MAP[arg0], minWidth: Button.AVATAR_SIZE_MAP[arg0], borderRadius: 10, paddingHorizontal: 4, paddingTop: 1 };
  obj[5] = obj;
  obj[6] = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-end", overflow: "hidden", marginLeft: -4 - marginLeft };
  obj[7] = { borderColor: ThemesDefault.colors.CARD_SECONDARY_BG };
  return obj;
});
let closure_12 = { code: "function HappeningNowAvatarStackTsx1(){const{interpolate,typingValue,ELLIPSIS_WIDTH}=this.__closure;return{opacity:interpolate(typingValue.get(),[0,1],[0,1]),width:interpolate(typingValue.get(),[0,1],[0,ELLIPSIS_WIDTH])};}" };
let closure_13 = { code: "function HappeningNowAvatarStackTsx2(finished){const{runOnJS,setRenderComponents,isTyping}=this.__closure;if(!finished)return;runOnJS(setRenderComponents)(isTyping);}" };
let closure_14 = { code: "function HappeningNowAvatarStackTsx3(){const{isStage,extraUsers,avatars,AVATAR_SIZE_MAP,avatarSize,avatarOverlap,withSpring,SPRING_CONFIG}=this.__closure;const hasExtraBubble=!isStage&&extraUsers>0;const numBubbles=avatars.length+(hasExtraBubble?1:0);const width=numBubbles>0?numBubbles*AVATAR_SIZE_MAP[avatarSize]-(numBubbles-1)*avatarOverlap:0;return{width:withSpring(width,SPRING_CONFIG),marginRight:numBubbles===0?0:4};}" };
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx");

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
    XSMALL_20 = require(isStage[8]).AvatarSizes.XSMALL_20;
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
  closure_6 = undefined;
  c7 = undefined;
  let sharedValue;
  let substr;
  c10 = undefined;
  let mapped;
  const tmp3 = mapped(XSMALL_20, num3);
  closure_6 = tmp3;
  let obj = num2;
  [tmp5, c7] = XSMALL_20(num2.useState(() => isTyping), 2);
  obj1 = require(isStage[9]);
  let num4 = 0;
  if (isTyping) {
    num4 = 1;
  }
  sharedValue = obj1.useSharedValue(num4);
  let tmp6Result = tmp6(tmp7[10]);
  let items = [closure_6];
  const stateFromStores = tmp6Result.useStateFromStores(items, () => closure_6.locale);
  tmp6Result = tmp6(tmp7[9]);
  class V {
    constructor() {
      obj = { opacity: null, width: null };
      obj2 = guildId(isStage[9]);
      obj[0] = obj2.interpolate(closure_8.get(), [0, 1], [0, 1]);
      obj3 = guildId(isStage[9]);
      obj[1] = obj3.interpolate(closure_8.get(), [0, 1], [0, 28]);
      return obj;
    }
  }
  obj = { interpolate: tmp6(tmp7[9]).interpolate, typingValue: sharedValue, ELLIPSIS_WIDTH: 28 };
  V.__closure = obj;
  V.__workletHash = 14140918847743;
  V.__initData = closure_12;
  const items1 = [isTyping, sharedValue];
  const animatedStyle = tmp6Result.useAnimatedStyle(V);
  const effect = obj.useEffect(() => {
    let obj = closure_1_0(isStage[11]);
    let num = 0;
    if (isTyping) {
      num = 1;
    }
    const fn = function t(arg0) {
      if (arg0) {
        closure_1_0(closure_1_2[9]).runOnJS(closure_7)(closure_1);
        const obj = closure_1_0(closure_1_2[9]);
      }
    };
    obj = { runOnJS: closure_1_0(isStage[9]).runOnJS, setRenderComponents: c7, isTyping };
    fn.__closure = obj;
    fn.__workletHash = 2498652829757;
    fn.__initData = closure_1_13;
    const result = sharedValue.set(obj.withSpring(num, c7, "respect-motion-settings", fn));
  }, items1);
  substr = users.slice(0, num);
  if (userCount == null) {
    userCount = users.length;
  }
  let diff = userCount - substr.length;
  c10 = diff;
  mapped = substr.map((id) => {
    const diff = substr.length - 1;
    let obj = { user: id, guildId: closure_0, size: XSMALL_20 };
    const tmp6 = sharedValue(closure_1_0(isStage[8]).Avatar, obj);
    let shiftedAvatar;
    if (0 !== arg1) {
      shiftedAvatar = closure_6.shiftedAvatar;
    }
    obj = { style: shiftedAvatar, children: null };
    if (arg1 !== diff) {
      obj = { cutouts: null, children: null };
      obj1 = { shape: null, x: null, y: null, size: null };
      obj1[0] = tmp3(tmp4[12]).CutoutShape.Circle;
      obj1[1] = tmp3(tmp4[8]).AVATAR_SIZE_MAP[tmp5] - num3 - num2;
      obj1[2] = -num2;
      obj1[3] = tmp3(tmp4[8]).AVATAR_SIZE_MAP[tmp5] + 2 * num2;
      const items = [obj1];
      obj[0] = items;
      obj[1] = tmp6;
      let tmp2Result = tmp2(isTyping(tmp4[12]), obj);
      const tmp14 = isTyping(tmp4[12]);
    } else {
      tmp2Result = tmp6;
      if (!isStage) {
        tmp2Result = tmp6;
      }
    }
    obj[1] = tmp2Result;
    return sharedValue(num3, obj, id.id);
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
        tmp3 = guildId;
        tmp4 = isStage;
        tmp5 = XSMALL_20;
        tmp6 = c5;
        num3 = 1;
        num2 = sum * guildId(isStage[8]).AVATAR_SIZE_MAP[XSMALL_20] - (sum - 1) * c5;
      }
      obj = { width: null, marginRight: null };
      obj2 = guildId(isStage[11]);
      obj[0] = obj2.withSpring(num2, closure_10);
      num4 = 4;
      if (0 === sum) {
        num4 = 0;
      }
      obj[1] = num4;
      return obj;
    }
  }
  obj = { isStage, extraUsers: diff, avatars: mapped, AVATAR_SIZE_MAP: tmp6(tmp7[8]).AVATAR_SIZE_MAP, avatarSize: XSMALL_20, avatarOverlap: num3, withSpring: tmp6(tmp7[11]).withSpring, SPRING_CONFIG: c10 };
  H.__closure = obj;
  H.__workletHash = 5027466437777;
  H.__initData = closure_14;
  const animatedStyle1 = require(isStage[9]).useAnimatedStyle(H);
  obj1 = { style: null, children: null };
  if (isStage) {
    const items2 = [tmp3.stageAvatarStack, style];
    obj1[0] = items2;
    let obj2 = { style: null, children: null };
    const items3 = [tmp3.avatars, animatedStyle1];
    obj2[0] = items3;
    obj2[1] = mapped;
    const items4 = [sharedValue(isTyping(tmp7[9]).View, obj2), ];
    const obj3 = { color: "text-default", variant: "text-xs/semibold", children: null };
    obj3[2] = tmp6(tmp7[14]).humanizeValue(userCount, stateFromStores);
    items4[1] = sharedValue(tmp6(tmp7[13]).Text, obj3);
    obj1[1] = items4;
    let tmp20 = obj1;
    const tmp6Result2 = tmp6(tmp7[14]);
  } else {
    const items5 = [tmp3.avatarStack, style];
    obj1[0] = items5;
    const obj4 = { style: null, children: null };
    const items6 = [tmp3.avatarBubbles, animatedStyle1];
    obj4[0] = items6;
    const obj5 = { style: null, children: null };
    obj5[0] = tmp3.avatars;
    obj5[1] = mapped;
    const items7 = [sharedValue(tmp16, obj5), ];
    let tmp18Result = null;
    if (diff > 0) {
      const obj6 = { style: null, children: null };
      obj6[0] = tmp3.userCounter;
      const obj7 = { color: "text-default", variant: "text-xxs/semibold", allowFontScaling: false, children: null };
      const items8 = ["+", tmp6(tmp7[14]).humanizeValue(diff, stateFromStores)];
      obj7[3] = items8;
      obj6[1] = tmp15(tmp6(tmp7[13]).Text, obj7);
      tmp18Result = tmp18(tmp16, obj6);
      const tmp6Result3 = tmp6(tmp7[14]);
    }
    items7[1] = tmp18Result;
    obj4[1] = items7;
    const items9 = [tmp15(isTyping(tmp7[9]).View, obj4), ];
    if (!tmp18Result) {
      tmp18Result = isTyping;
    }
    if (tmp18Result) {
      const obj8 = { style: null, children: null };
      const items10 = [tmp3.ellipsisWrapper, animatedStyle];
      obj8[0] = items10;
      const obj9 = { style: null };
      obj9[0] = tmp3.ellipsisBorder;
      obj8[1] = tmp18(tmp6(tmp7[15]).TypingIndicator, obj9);
      tmp18Result = tmp18(tmp17(tmp7[9]).View, obj8);
    }
    items9[1] = tmp18Result;
    obj1[1] = items9;
    tmp20 = obj1;
    tmp17 = isTyping;
  }
  return substr(num3, tmp20);
};