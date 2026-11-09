// === Module 18479: HappeningNowAvatarStack ===

// Module 18479 (HappeningNowAvatarStack)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import _modDef1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import spring_spring from "spring/spring" /* 5761 */;
import ClipView from "ClipView" /* 9593 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2186 */;

const require = globalThis.__r;
const ClipViewDefault = ClipView;

require = fn;
const View = fn(17).View;
const CHANNEL_SPRING_CONFIG = fn(15120).CHANNEL_SPRING_CONFIG;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = { damping: 17, stiffness: 320, mass: 0.5 };
const createStyles = fn(5140);
let closure_11 = createStyles.createStyles((arg0, marginLeft) => {
  const obj = { avatarStack: { flexDirection: "row" }, stageAvatarStack: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: 24, paddingLeft: 4, paddingRight: 4, paddingVertical: 4 }, avatarBubbles: { display: "flex", flexDirection: "row" }, avatars: { display: "flex", flexDirection: "row" }, shiftedAvatar: { marginLeft: -marginLeft }, userCounter: null, ellipsisWrapper: null, ellipsisBorder: null };
  const obj2 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: 24, paddingLeft: 4, paddingRight: 4, paddingVertical: 4 };
  obj.userCounter = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: -marginLeft, height: native.AVATAR_SIZE_MAP[arg0], minWidth: native.AVATAR_SIZE_MAP[arg0], borderRadius: 10, paddingHorizontal: 4, paddingTop: 1 };
  obj.ellipsisWrapper = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-end", overflow: "hidden", marginLeft: -4 - marginLeft };
  const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: -marginLeft, height: native.AVATAR_SIZE_MAP[arg0], minWidth: native.AVATAR_SIZE_MAP[arg0], borderRadius: 10, paddingHorizontal: 4, paddingTop: 1 };
  const obj4 = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-end", overflow: "hidden", marginLeft: -4 - marginLeft };
  obj.ellipsisBorder = { borderColor: nativeDefault.colors.CARD_SECONDARY_BG };
  return obj;
});
let closure_12 = { code: "(function HappeningNowAvatarStackTsx1(){let[interpolate,typingValue,ELLIPSIS_WIDTH]=this.__closure;return{opacity:interpolate(typingValue.get(),[0,1],[0,1]),width:interpolate(typingValue.get(),[0,1],[0,ELLIPSIS_WIDTH])};})" };
let closure_13 = { code: "(function HappeningNowAvatarStackTsx2(finished){let[scheduleOnRN,setRenderComponents,isTyping]=this.__closure;if(!finished)return;scheduleOnRN(setRenderComponents,isTyping);})" };
let closure_14 = { code: "(function HappeningNowAvatarStackTsx3(){let[isStage,extraUsers,avatars,AVATAR_SIZE_MAP,avatarSize,avatarOverlap,withSpring,SPRING_CONFIG]=this.__closure;const hasExtraBubble=!isStage&&extraUsers>0;const numBubbles=avatars.length+(hasExtraBubble?1:0);const width=numBubbles>0?numBubbles*AVATAR_SIZE_MAP[avatarSize]-(numBubbles-1)*avatarOverlap:0;return{width:withSpring(width,SPRING_CONFIG),marginRight:numBubbles===0?0:4};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx");

export function HappeningNowAvatarStack(userLimit) {
  ({ users, guildId: c0, isTyping } = userLimit);
  if (isTyping === undefined) {
    isTyping = false;
  }
  importDefault = isTyping;
  let num = userLimit.userLimit;
  if (num === undefined) {
    num = 3;
  }
  ({ userCount, isStage } = userLimit);
  dependencyMap = isStage;
  let XSMALL_20 = userLimit.avatarSize;
  if (XSMALL_20 === undefined) {
    XSMALL_20 = require("native").AvatarSizes.XSMALL_20;
  }
  dependencyMap2 = XSMALL_20;
  let num2 = userLimit.avatarBorderWidth;
  if (num2 === undefined) {
    num2 = 2;
  }
  noop = num2;
  let num3 = userLimit.avatarOverlap;
  if (num3 === undefined) {
    num3 = 4;
  }
  c5 = num3;
  const style = userLimit.style;
  c7 = undefined;
  let sharedValue;
  let substr;
  c10 = undefined;
  const tmp3 = closure_11(XSMALL_20, num3);
  c6 = tmp3;
  [tmp5, c7] = dependencyMap2(noop.useState(() => c1), 2);
  let obj = noop;
  let tmp4 = dependencyMap2(noop.useState(() => c1), 2);
  let num4 = 0;
  if (isTyping) {
    num4 = 1;
  }
  sharedValue = require("module_1652").useSharedValue(num4);
  let obj2 = require("module_1652");
  items = [c6];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => _undefined3.locale);
  const tmp6Result = require("useStateFromStores");
  let items1 = [closure_12, require("module_1652").interpolate, sharedValue, 28];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp10, tmp11, tmp12, tmp13] = items1;
  class HappeningNowAvatarStackTsx1 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), [0, 1], [0, 1]), width: null };
      items = [0];
      items[1] = closure_2;
      obj.width = closure_0(closure_1.get(), [0, 1], items);
      return obj;
    }
  }
  const items2 = [tmp11, tmp12, tmp13];
  HappeningNowAvatarStackTsx1.__closure = items2;
  HappeningNowAvatarStackTsx1.__workletHash = 15788813600806;
  HappeningNowAvatarStackTsx1.__initData = tmp10;
  const items3 = [isTyping, sharedValue];
  const animatedStyle = require("module_1652").useAnimatedStyle(HappeningNowAvatarStackTsx1);
  const effect = obj.useEffect(() => {
    let num = 0;
    if (c1) {
      num = 1;
    }
    items = [closure_13, _mod1705.scheduleOnRN, c7, c1];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp6, tmp7, tmp8, tmp9] = items;
    class HappeningNowAvatarStackTsx2 {
      constructor(arg0) {
        if (arg0) {
          tmp = closure_0;
          tmp2 = closure_1;
          tmp3 = closure_2;
          tmp4 = closure_0(closure_1, closure_2);
        }
        return;
      }
    }
    const items1 = [tmp7, tmp8, tmp9];
    HappeningNowAvatarStackTsx2.__closure = items1;
    HappeningNowAvatarStackTsx2.__workletHash = 10871831369161;
    HappeningNowAvatarStackTsx2.__initData = tmp6;
    const result = sharedValue.set(spring_spring.withSpring(num, CHANNEL_SPRING_CONFIG, "respect-motion-settings", HappeningNowAvatarStackTsx2));
  }, items3);
  substr = users.slice(0, num);
  if (userCount == null) {
    userCount = users.length;
  }
  let diff = userCount - substr.length;
  c10 = diff;
  const mapped = substr.map((user, index) => {
    const diff = substr.length - 1;
    const tmp6 = React5(native.Avatar, { user, guildId, size });
    let shiftedAvatar;
    if (0 !== index) {
      shiftedAvatar = _undefined3.shiftedAvatar;
    }
    const obj2 = { style: shiftedAvatar, children: null };
    if (index !== diff) {
      const obj3 = { cutouts: null, children: null };
      const point = { shape: ClipView.CutoutShape.Circle, x: native.AVATAR_SIZE_MAP[size] - c5 - c4, y: -c4, size: native.AVATAR_SIZE_MAP[size] + 2 * c4 };
      items = [point];
      obj3.cutouts = items;
      obj3.children = tmp6;
      let tmp2Result = React5(ClipViewDefault, obj3);
    } else {
      tmp2Result = tmp6;
      if (!c2) {
        tmp2Result = tmp6;
      }
    }
    obj2.children = tmp2Result;
    return React5(View, obj2, user.id);
  });
  const tmp6Result5 = require("module_1652");
  const items4 = [closure_14, isStage, diff, mapped, require("native").AVATAR_SIZE_MAP, XSMALL_20, num3, require("spring/spring").withSpring, c10];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  dependencyMap2 = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items4;
  class HappeningNowAvatarStackTsx3 {
    constructor() {
      num = 0;
      if (!closure_0) {
        tmp = closure_1;
        num = 0;
        if (closure_1 > 0) {
          num = 1;
        }
      }
      sum = closure_2.length + num;
      num2 = 0;
      if (sum > 0) {
        tmp3 = closure_3;
        tmp4 = closure_4;
        tmp5 = closure_5;
        num3 = 1;
        num2 = sum * closure_3[closure_4] - (sum - 1) * closure_5;
      }
      obj = { width: closure_6(num2, closure_7), marginRight: null };
      num4 = 4;
      if (0 === sum) {
        num4 = 0;
      }
      obj.marginRight = num4;
      return obj;
    }
  }
  const items5 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
  HappeningNowAvatarStackTsx3.__closure = items5;
  HappeningNowAvatarStackTsx3.__workletHash = 14791568232776;
  HappeningNowAvatarStackTsx3.__initData = tmp18;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(HappeningNowAvatarStackTsx3);
  let obj3 = { style: null, children: null };
  if (isStage) {
    const items6 = [tmp3.stageAvatarStack, style];
    obj3.style = items6;
    const obj4 = { style: null, children: null };
    const items7 = [tmp3.avatars, animatedStyle1];
    obj4.style = items7;
    obj4.children = mapped;
    const items8 = [sharedValue(_modDef1652.View, obj4), ];
    const obj5 = { color: "text-default", variant: "body-xs/semibold", children: tmp6(2024).humanizeValue(userCount, stateFromStores) };
    items8[1] = sharedValue(tmp6(5751).Text, obj5);
    obj3.children = items8;
    let tmp33 = obj3;
    const tmp6Result7 = tmp6(2024);
  } else {
    const items9 = [tmp3.avatarStack, style];
    obj3.style = items9;
    const obj6 = { style: null, children: null };
    const items10 = [tmp3.avatarBubbles, animatedStyle1];
    obj6.style = items10;
    const obj7 = { style: tmp3.avatars, children: mapped };
    const items11 = [sharedValue(tmp29, obj7), ];
    let tmp31Result = null;
    if (diff > 0) {
      const obj8 = { style: tmp3.userCounter, children: null };
      const obj9 = { color: "text-default", variant: "footnote/semibold", allowFontScaling: false, children: null };
      const items12 = ["+", tmp6(2024).humanizeValue(diff, stateFromStores)];
      obj9.children = items12;
      obj8.children = tmp28(tmp6(5751).Text, obj9);
      tmp31Result = tmp31(tmp29, obj8);
      const tmp6Result8 = tmp6(2024);
    }
    items11[1] = tmp31Result;
    obj6.children = items11;
    const items13 = [tmp28(_modDef1652.View, obj6), ];
    if (!tmp31Result2) {
      tmp31Result2 = isTyping;
    }
    if (tmp31Result2) {
      const obj10 = { style: null, children: null };
      const items14 = [tmp3.ellipsisWrapper, animatedStyle];
      obj10.style = items14;
      const obj11 = { style: tmp3.ellipsisBorder };
      obj10.children = tmp31(tmp6(18480).TypingIndicator, obj11);
      tmp31Result2 = tmp31(tmp30(1652).View, obj10);
    }
    items13[1] = tmp31Result2;
    obj3.children = items13;
    tmp33 = obj3;
    tmp30 = importDefault;
  }
  return substr(c5, tmp33);
}