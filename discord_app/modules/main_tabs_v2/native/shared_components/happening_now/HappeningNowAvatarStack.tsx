// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import ClipView from "../../../../../design/components/Icon/native/ClipView.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../../user_settings/LocaleStore.tsx";

const require = globalThis.__r;
const ClipViewDefault = ClipView;

require = fn;
const View = fn(17).View;
const CHANNEL_SPRING_CONFIG = fn(13322).CHANNEL_SPRING_CONFIG;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let SPRING_CONFIG = { damping: 17, stiffness: 320, mass: 0.5 };
const createStyles = fn(4756);
createStyles.createStyles((arg0, marginLeft) => {
  const obj = {
    avatarStack: { flexDirection: "row" },
    stageAvatarStack: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
      borderRadius: 24,
      paddingLeft: 4,
      paddingRight: 4,
      paddingVertical: 4,
    },
    avatarBubbles: { display: "flex", flexDirection: "row" },
    avatars: { display: "flex", flexDirection: "row" },
    shiftedAvatar: { marginLeft: -marginLeft },
    userCounter: null,
    ellipsisWrapper: null,
    ellipsisBorder: null,
  };
  const obj2 = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    borderRadius: 24,
    paddingLeft: 4,
    paddingRight: 4,
    paddingVertical: 4,
  };
  obj.userCounter = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -marginLeft,
    height: native.AVATAR_SIZE_MAP[arg0],
    minWidth: native.AVATAR_SIZE_MAP[arg0],
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingTop: 1,
  };
  obj.ellipsisWrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
    marginLeft: -4 - marginLeft,
  };
  const obj3 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -marginLeft,
    height: native.AVATAR_SIZE_MAP[arg0],
    minWidth: native.AVATAR_SIZE_MAP[arg0],
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingTop: 1,
  };
  const obj4 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
    marginLeft: -4 - marginLeft,
  };
  obj.ellipsisBorder = { borderColor: nativeDefault.colors.CARD_SECONDARY_BG };
  return obj;
});
const __initData = {
  code: "function HappeningNowAvatarStackTsx1(){const{interpolate,typingValue,ELLIPSIS_WIDTH}=this.__closure;return{opacity:interpolate(typingValue.get(),[0,1],[0,1]),width:interpolate(typingValue.get(),[0,1],[0,ELLIPSIS_WIDTH])};}",
};
let closure_13 = {
  code: "function HappeningNowAvatarStackTsx2(finished){const{runOnJS,setRenderComponents,isTyping}=this.__closure;if(!finished)return;runOnJS(setRenderComponents)(isTyping);}",
};
const __initData2 = {
  code: "function HappeningNowAvatarStackTsx3(){const{isStage,extraUsers,avatars,AVATAR_SIZE_MAP,avatarSize,avatarOverlap,withSpring,SPRING_CONFIG}=this.__closure;const hasExtraBubble=!isStage&&extraUsers>0;const numBubbles=avatars.length+(hasExtraBubble?1:0);const width=numBubbles>0?numBubbles*AVATAR_SIZE_MAP[avatarSize]-(numBubbles-1)*avatarOverlap:0;return{width:withSpring(width,SPRING_CONFIG),marginRight:numBubbles===0?0:4};}",
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx",
);

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
  [tmp5, c7] = XSMALL_20(
    num2.useState(() => isTyping),
    2,
  );
  let obj = num2;
  const tmp4 = XSMALL_20(
    num2.useState(() => isTyping),
    2,
  );
  let num4 = 0;
  if (isTyping) {
    num4 = 1;
  }
  sharedValue = require("ReanimatedRexport").useSharedValue(num4);
  let obj2 = require("ReanimatedRexport");
  let items = [closure_6];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => closure_6.locale);
  const tmp6Result = require("useStateFromStores");
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
  const tmp6Result5 = require("ReanimatedRexport");
  V.__closure = { interpolate: require("ReanimatedRexport").interpolate, typingValue: sharedValue, ELLIPSIS_WIDTH: 28 };
  V.__workletHash = 14140918847743;
  V.__initData = __initData;
  const items1 = [isTyping, sharedValue];
  const animatedStyle = tmp6Result5.useAnimatedStyle(V);
  const effect = obj.useEffect(() => {
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
    let obj = spring;
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setRenderComponents, isTyping };
    fn.__workletHash = 2498652829757;
    fn.__initData = __initData;
    const result = sharedValue.set(obj.withSpring(num, CHANNEL_SPRING_CONFIG, "respect-motion-settings", fn));
    const obj2 = { runOnJS: ReanimatedRexport.runOnJS, setRenderComponents, isTyping };
  }, items1);
  substr = users.slice(0, num);
  if (userCount == null) {
    userCount = users.length;
  }
  let diff = userCount - substr.length;
  SPRING_CONFIG = diff;
  mapped = substr.map((user, index) => {
    const diff = substr.length - 1;
    const tmp6 = React6(native.Avatar, { user, guildId, size: XSMALL_20 });
    let shiftedAvatar;
    if (0 !== index) {
      shiftedAvatar = closure_6.shiftedAvatar;
    }
    const obj2 = { style: shiftedAvatar, children: null };
    if (index !== diff) {
      const obj3 = { cutouts: null, children: null };
      const point = {
        shape: ClipView.CutoutShape.Circle,
        x: native.AVATAR_SIZE_MAP[XSMALL_20] - num3 - num2,
        y: -num2,
        size: native.AVATAR_SIZE_MAP[XSMALL_20] + 2 * num2,
      };
      const items = [point];
      obj3.cutouts = items;
      obj3.children = tmp6;
      let tmp2Result = React6(ClipViewDefault, obj3);
    } else {
      tmp2Result = tmp6;
      if (!isStage) {
        tmp2Result = tmp6;
      }
    }
    obj2.children = tmp2Result;
    return React6(View, obj2, user.id);
  });
  let obj3 = { interpolate: require("ReanimatedRexport").interpolate, typingValue: sharedValue, ELLIPSIS_WIDTH: 28 };
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
  const tmp6Result6 = require("ReanimatedRexport");
  H.__closure = {
    isStage,
    extraUsers: diff,
    avatars: mapped,
    AVATAR_SIZE_MAP: require("native").AVATAR_SIZE_MAP,
    avatarSize: XSMALL_20,
    avatarOverlap: num3,
    withSpring: require("spring").withSpring,
    SPRING_CONFIG,
  };
  H.__workletHash = 5027466437777;
  H.__initData = __initData2;
  const animatedStyle1 = tmp6Result6.useAnimatedStyle(H);
  const obj5 = { style: null, children: null };
  if (isStage) {
    const items2 = [tmp3.stageAvatarStack, style];
    obj5.style = items2;
    const obj6 = { style: null, children: null };
    const items3 = [tmp3.avatars, animatedStyle1];
    obj6.style = items3;
    obj6.children = mapped;
    const items4 = [sharedValue(isTyping(isStage[9]).View, obj6)];
    const obj7 = {
      color: "text-default",
      variant: "text-xs/semibold",
      children: require("NumberUtils").humanizeValue(userCount, stateFromStores),
    };
    items4[1] = sharedValue(require("Text/Text").Text, obj7);
    obj5.children = items4;
    let tmp20 = obj5;
    const tmp6Result7 = require("NumberUtils");
  } else {
    const items5 = [tmp3.avatarStack, style];
    obj5.style = items5;
    const obj8 = { style: null, children: null };
    const items6 = [tmp3.avatarBubbles, animatedStyle1];
    obj8.style = items6;
    const obj9 = { style: tmp3.avatars, children: mapped };
    const items7 = [sharedValue(tmp16, obj9)];
    let tmp18Result = null;
    if (diff > 0) {
      const obj10 = { style: tmp3.userCounter, children: null };
      const obj11 = { color: "text-default", variant: "text-xxs/semibold", allowFontScaling: false, children: null };
      const items8 = ["+", require("NumberUtils").humanizeValue(diff, stateFromStores)];
      obj11.children = items8;
      obj10.children = tmp15(require("Text/Text").Text, obj11);
      tmp18Result = tmp18(tmp16, obj10);
      const tmp6Result8 = require("NumberUtils");
    }
    items7[1] = tmp18Result;
    obj8.children = items7;
    const items9 = [tmp15(isTyping(isStage[9]).View, obj8)];
    if (!tmp18Result2) {
      tmp18Result2 = isTyping;
    }
    if (tmp18Result2) {
      const obj12 = { style: null, children: null };
      const items10 = [tmp3.ellipsisWrapper, animatedStyle];
      obj12.style = items10;
      const obj13 = { style: tmp3.ellipsisBorder };
      obj12.children = tmp18(require("typing_indicators/TypingIndicator").TypingIndicator, obj13);
      tmp18Result2 = tmp18(tmp17(isStage[9]).View, obj12);
    }
    items9[1] = tmp18Result2;
    obj5.children = items9;
    tmp20 = obj5;
    tmp17 = isTyping;
  }
  return substr(num3, tmp20);
};
