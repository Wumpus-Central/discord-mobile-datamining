// discord_app/modules/main_tabs_v2/native/shared_components/GroupAvatar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
function AnimatedContainer(children) {
  const scale = children.scale;
  _require = scale;
  const translateX = children.translateX;
  importDefault = translateX;
  const translateY = children.translateY;
  dependencyMap = translateY;
  const animateOnMount = children.animateOnMount;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  const tmp = closure_12();
  items = [c5];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => _undefined5.useReducedMotion);
  let obj = require("useStateFromStores");
  let num = 1;
  if (animateOnMount) {
    num = 0;
  }
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num);
  noop = sharedValue;
  const obj2 = require("../../../../../_runtime/metro/01652__.js");
  let num2 = 0;
  if (!animateOnMount) {
    num2 = translateY;
  }
  const sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num2);
  c4 = sharedValue1;
  const tmp2Result = require("../../../../../_runtime/metro/01652__.js");
  let num3 = 0;
  if (!animateOnMount) {
    num3 = translateX;
  }
  const sharedValue2 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num3);
  c5 = sharedValue2;
  const tmp2Result4 = require("../../../../../_runtime/metro/01652__.js");
  let result = scale;
  if (animateOnMount) {
    result = scale / 2;
  }
  const sharedValue3 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(result);
  items1 = [sharedValue, sharedValue3, sharedValue1, sharedValue2, scale, translateY, translateX];
  const effect = noop.useEffect(() => {
    const result = _undefined3.set(1);
    const result1 = _undefined6.set(c0);
    const result2 = _undefined4.set(c2);
    const result3 = _undefined5.set(c1);
  }, items1);
  const tmp2Result5 = require("../../../../../_runtime/metro/01652__.js");
  const items2 = [closure_14, require("timing/timing").withTiming, sharedValue, stateFromStores, sharedValue2, require("spring/spring").withSpring, closure_11, sharedValue1, sharedValue3, closure_10];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items2;
  class GroupAvatarTsx1 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get()), transform: null };
      tmp = closure_2;
      if (closure_2) {
        tmp6 = closure_3;
        value = closure_3.get();
      } else {
        tmp2 = closure_4;
        tmp3 = closure_3;
        tmp4 = closure_5;
        value = closure_4(closure_3.get(), closure_5);
      }
      items = [, , ];
      items[0] = { translateX: value };
      if (tmp) {
        tmp11 = closure_6;
        value1 = closure_6.get();
      } else {
        tmp7 = closure_4;
        tmp8 = closure_6;
        tmp9 = closure_5;
        value1 = closure_4(closure_6.get(), closure_5);
      }
      items[1] = { translateY: value1 };
      if (tmp) {
        tmp16 = closure_7;
        value2 = closure_7.get();
      } else {
        tmp12 = closure_4;
        tmp13 = closure_7;
        tmp14 = closure_8;
        value2 = closure_4(closure_7.get(), closure_8);
      }
      items[2] = { scale: value2 };
      obj.transform = items;
      return obj;
    }
  }
  const items3 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  GroupAvatarTsx1.__closure = items3;
  GroupAvatarTsx1.__workletHash = 10803845888973;
  GroupAvatarTsx1.__initData = tmp11;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(GroupAvatarTsx1);
  const obj3 = { style: null, children: children.children };
  const items4 = [tmp.avatarContainer, animatedStyle];
  obj3.style = items4;
  return c6(_modDef1652.View, obj3);
}
function GroupMemberCount(count) {
  count = count.count;
  const tmp = closure_12();
  const obj = { style: tmp.avatarWrapper, children: null };
  const obj2 = { style: tmp.overflowCount, children: null };
  let str = "body-sm/semibold";
  if (count < 100) {
    str = "body-md/semibold";
  }
  const obj3 = { variant: str, children: null };
  items = ["+", count];
  obj3.children = items;
  obj2.children = metroImportDefault(Text_Text.Text, obj3);
  obj.children = timestampProducer(View, obj2);
  return timestampProducer(View, obj);
}
function GroupMemberAvatar(guildId) {
  guildId = guildId.guildId;
  const user = guildId.user;
  const tmp = closure_12();
  items = [guildId, user];
  const memo = noop.useMemo(() => {
    let avatarSource;
    if (user != null) {
      avatarSource = user.getAvatarSource(guildId, false, 32);
    }
    return avatarSource;
  }, items);
  let tmp3 = null;
  if (null != memo) {
    const obj = { style: tmp.avatarWrapper, children: null };
    const obj2 = { style: tmp.avatar, source: memo };
    obj.children = timestampProducer(FastImageDefault, obj2);
    tmp3 = timestampProducer(View, obj);
  }
  return tmp3;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createElement = fn(19).createElement;
let c9 = 38;
let closure_10 = { damping: 30, stiffness: 400 };
let closure_11 = { damping: 30, stiffness: 400 };
const createStyles = fn(5143);
let closure_12 = createStyles.createStyles(() => {
  const obj = { groupContainer: { position: "relative" }, shadowContainer: { borderRadius: nativeDefault.radii.sm }, shadowContainerBackground: {}, shadowContainerBackgroundLight: { opacity: 0.4 }, shadowContainerBackgroundDark: { opacity: 0.15 }, gradientContainer: null, gradientDimOverlay: null, gradientImageBorder: null, avatarContainer: null, avatar: null, avatarWrapper: null, overflowCount: null };
  const size = { width: nativeDefault.modules.mobile.GROUP_AVATAR_SIZE, height: nativeDefault.modules.mobile.GROUP_AVATAR_SIZE, overflow: "hidden", borderRadius: nativeDefault.radii.sm };
  obj.gradientContainer = size;
  obj.gradientDimOverlay = { position: "absolute", left: 0, top: 0, right: 0, bottom: 0 };
  const size1 = { width: nativeDefault.modules.mobile.GROUP_AVATAR_SIZE, height: nativeDefault.modules.mobile.GROUP_AVATAR_SIZE, borderRadius: nativeDefault.radii.sm, position: "absolute" };
  obj.gradientImageBorder = size1;
  const size2 = { position: "absolute", top: "50%", left: "50%", width: v38, height: v38, marginTop: -19, marginLeft: -19 };
  obj.avatarContainer = size2;
  obj.avatar = { width: 32, height: 32, position: "absolute", borderRadius: 16 };
  obj.avatarWrapper = { position: "absolute", width: v38, height: v38, justifyContent: "center", alignItems: "center", borderRadius: 19 };
  const size3 = { width: v38, height: v38, position: "absolute", borderRadius: 19, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, display: "flex", alignItems: "center", justifyContent: "center" };
  obj.overflowCount = size3;
  return obj;
});
let items = [{ translateY: 0, translateX: 0, scale: 1 }, { translateY: 0, translateX: 0, scale: 0 }, { translateY: 0, translateX: 0, scale: 0 }, { translateY: 0, translateX: 0, scale: 0 }];
let items1 = [items, , , ];
let items2 = [{ translateY: -14, translateX: -14, scale: 0.75 }, { translateY: 12, translateX: 12, scale: 0.875 }, { translateY: 0, translateX: 0, scale: 0 }, { translateY: 0, translateX: 0, scale: 0 }];
items1[1] = items2;
let items3 = [{ translateY: -4, translateX: 16, scale: 0.75 }, { translateY: 14, translateX: -14, scale: 0.875 }, { translateY: -18, translateX: -12, scale: 0.625 }, { translateY: 0, translateX: 0, scale: 0 }];
items1[2] = items3;
let items4 = [{ translateY: -14, translateX: -14, scale: 0.875 }, { translateY: 14, translateX: 14, scale: 0.875 }, { translateY: -18, translateX: 18, scale: 0.625 }, { translateY: 18, translateX: -18, scale: 0.625 }];
items1[3] = items4;
let closure_14 = { code: "(function GroupAvatarTsx1(){let[withTiming,opacityAnimation,useReducedMotion,translateXAnimation,withSpring,SPRING_OPTIONS_POSITION,translateYAnimation,scaleAnimation,SPRING_OPTIONS_SCALE]=this.__closure;return{opacity:withTiming(opacityAnimation.get()),transform:[{translateX:useReducedMotion?translateXAnimation.get():withSpring(translateXAnimation.get(),SPRING_OPTIONS_POSITION)},{translateY:useReducedMotion?translateYAnimation.get():withSpring(translateYAnimation.get(),SPRING_OPTIONS_POSITION)},{scale:useReducedMotion?scaleAnimation.get():withSpring(scaleAnimation.get(),SPRING_OPTIONS_SCALE)}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/GroupAvatar.tsx");

export default function GroupAvatar(users) {
  users = users.users;
  const guildId = users.guildId;
  let ref;
  noop = undefined;
  const tmp = closure_12();
  const themeContext = users(ref[6]).useThemeContext();
  ({ primaryColor, theme } = themeContext);
  let obj = users(ref[6]);
  const tmp2 = ref;
  let shadowContainerBackground = users(ref[6]).isThemeLight(theme) ? tmp.shadowContainerBackgroundLight : tmp.shadowContainerBackgroundDark;
  ref = noop.useRef(false);
  const effect = noop.useEffect(() => {
    ref.current = true;
  }, []);
  let obj2 = users(ref[6]);
  noop = users.length > 4;
  const diff = users.length - 3;
  c4 = diff;
  const animateOnMount = guildId(tmp2[7])(ref);
  let obj3 = { style: tmp.groupContainer, children: null };
  items = [tmp.shadowContainer, ];
  const mapped = items1[Math.max(Math, 0, Math.min(Math, items1.length - 1, users.length - 1))].map((item, index) => {
    if (null == users[index]) {
      return null;
    } else {
      const obj = {};
      const merged = Object.assign(item);
      obj.key = tmp.id;
      obj.animateOnMount = animateOnMount;
      if (!closure_3) {
        const obj2 = { guildId, user: tmp };
        let tmp13 = timestampProducer(GroupMemberAvatar, obj2);
        <AnimatedContainer {......obj}>{tmp13}</AnimatedContainer>;
      }
      const obj3 = { count };
      tmp13 = timestampProducer(GroupMemberCount, obj3);
    }
  });
  if (null == primaryColor) {
    shadowContainerBackground = tmp.shadowContainerBackground;
  }
  const obj4 = { style: items, children: null };
  items[1] = shadowContainerBackground;
  const obj5 = { style: tmp.gradientContainer, children: null };
  let tmp10Result = null == primaryColor;
  if (tmp10Result) {
    const obj6 = { style: tmp.gradientDimOverlay };
    tmp10Result = tmp10(tmp9, obj6);
  }
  obj5.children = tmp10Result;
  items1 = [animateOnMount(c4, obj5), animateOnMount(c4, { style: tmp.gradientImageBorder })];
  obj4.children = items1;
  const items2 = [closure_7(c4, obj4), mapped];
  obj3.children = items2;
  return closure_7(c4, obj3);
};