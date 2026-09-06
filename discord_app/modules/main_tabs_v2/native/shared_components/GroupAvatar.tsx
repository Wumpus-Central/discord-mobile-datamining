// === Module 13039: GroupAvatar ===

// Module 13039 (GroupAvatar)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import timing from "timing" /* 4561 */;
import spring from "spring" /* 4974 */;
import FastImageDefault from "FastImage" /* 5587 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 8095 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
function AnimatedContainer(children) {
  const scale = children.scale;
  const translateX = children.translateX;
  const translateY = children.translateY;
  const animateOnMount = children.animateOnMount;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let obj = scale(translateY[8]);
  let items = [sharedValue1];
  const stateFromStores = obj.useStateFromStores(items, () => sharedValue1.useReducedMotion);
  const tmp = closure_12();
  let num = 1;
  if (animateOnMount) {
    num = 0;
  }
  sharedValue = scale(translateY[9]).useSharedValue(num);
  let tmp2Result = tmp2(tmp3[9]);
  let num2 = 0;
  if (!animateOnMount) {
    num2 = translateY;
  }
  sharedValue1 = tmp2Result.useSharedValue(num2);
  tmp2Result = tmp2(tmp3[9]);
  let num3 = 0;
  if (!animateOnMount) {
    num3 = translateX;
  }
  sharedValue2 = tmp2Result.useSharedValue(num3);
  const obj2 = scale(translateY[9]);
  let result = scale;
  if (animateOnMount) {
    result = scale / 2;
  }
  sharedValue3 = scale(translateY[9]).useSharedValue(result);
  items1 = [sharedValue, sharedValue3, sharedValue1, sharedValue2, scale, translateY, translateX];
  const effect = stateFromStores.useEffect(() => {
    const result = sharedValue.set(1);
    const result1 = sharedValue3.set(scale);
    const result2 = sharedValue1.set(translateY);
    const result3 = sharedValue2.set(translateX);
  }, items1);
  const tmp2Result1 = scale(translateY[9]);
  const fn = function y() {
    const obj = { opacity: timing.withTiming(sharedValue.get()), transform: null };
    if (stateFromStores) {
      let withSpringResult = sharedValue2.get();
    } else {
      let tmpResult = spring;
      withSpringResult = tmpResult.withSpring(sharedValue2.get(), closure_11);
    }
    const items = [{ translateX: withSpringResult }, , ];
    if (stateFromStores) {
      value = sharedValue1.get();
    } else {
      tmpResult = spring;
      value = tmpResult.withSpring(sharedValue1.get(), closure_11);
    }
    items[1] = { translateY: value };
    if (stateFromStores) {
      let value1 = sharedValue3.get();
    } else {
      value1 = spring.withSpring(sharedValue3.get(), closure_10);
      const tmpResult1 = spring;
    }
    items[2] = { scale: value1 };
    obj.transform = items;
    return obj;
  };
  obj = { withTiming: tmp2(tmp3[10]).withTiming, opacityAnimation: sharedValue, useReducedMotion: stateFromStores, translateXAnimation: sharedValue2, withSpring: tmp2(tmp3[11]).withSpring, SPRING_OPTIONS_POSITION, translateYAnimation: sharedValue1, scaleAnimation: sharedValue3, SPRING_OPTIONS_SCALE };
  fn.__closure = obj;
  fn.__workletHash = 8800301056148;
  fn.__initData = __initData;
  const animatedStyle = scale(translateY[9]).useAnimatedStyle(fn);
  obj = { style: null, children: children.children };
  const items2 = [tmp.avatarContainer, animatedStyle];
  obj.style = items2;
  return sharedValue2(translateX(translateY[9]).View, obj);
}
function GroupMemberCount(count) {
  count = count.count;
  let obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GroupAvatar");
  const tmp2 = closure_12();
  obj = { style: tmp2.avatarWrapper, children: null };
  obj = { style: tmp2.overflowCount, children: null };
  let str = "text-sm/semibold";
  if (manaTypeConsolidationExperiment) {
    str = "text-sm/semibold";
    if (count < 100) {
      str = "experimental/body-md/semibold";
    }
  }
  const obj1 = { variant: str, children: null };
  const items = ["+", count];
  obj1.children = items;
  obj.children = React5(Text_Text.Text, obj1);
  obj.children = timestampProducer(View, obj);
  return timestampProducer(View, obj);
}
function GroupMemberAvatar(guildId) {
  guildId = guildId.guildId;
  const user = guildId.user;
  const tmp = closure_12();
  const items = [guildId, user];
  const memo = noop.useMemo(() => {
    let avatarSource;
    if (user != null) {
      avatarSource = user.getAvatarSource(guildId, false, 32);
    }
    return avatarSource;
  }, items);
  let tmp3 = null;
  if (null != memo) {
    let obj = { style: tmp.avatarWrapper, children: null };
    obj = { style: tmp.avatar, source: memo };
    obj.children = timestampProducer(FastImageDefault, obj);
    tmp3 = timestampProducer(View, obj);
  }
  return tmp3;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createElement = fn(19).createElement;
let c9 = 38;
const SPRING_OPTIONS_SCALE = { damping: 30, stiffness: 400 };
const SPRING_OPTIONS_POSITION = { damping: 30, stiffness: 400 };
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles(() => {
  let obj = { groupContainer: { position: "relative" }, shadowContainer: null, shadowContainerBackground: null, shadowContainerBackgroundLight: null, shadowContainerBackgroundDark: null, gradientContainer: null, gradientDimOverlay: null, gradientImageBorder: null, avatarContainer: null, avatar: null, avatarWrapper: null, overflowCount: null };
  obj = { borderRadius: nativeDefault.radii.sm };
  obj.shadowContainer = obj;
  obj.shadowContainerBackground = {};
  obj.shadowContainerBackgroundLight = { opacity: 0.4 };
  obj.shadowContainerBackgroundDark = { opacity: 0.15 };
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
const items3 = [{ translateY: -4, translateX: 16, scale: 0.75 }, { translateY: 14, translateX: -14, scale: 0.875 }, { translateY: -18, translateX: -12, scale: 0.625 }, { translateY: 0, translateX: 0, scale: 0 }];
items1[2] = items3;
const items4 = [{ translateY: -14, translateX: -14, scale: 0.875 }, { translateY: 14, translateX: 14, scale: 0.875 }, { translateY: -18, translateX: 18, scale: 0.625 }, { translateY: 18, translateX: -18, scale: 0.625 }];
items1[3] = items4;
const __initData = { code: "function GroupAvatarTsx1(){const{withTiming,opacityAnimation,useReducedMotion,translateXAnimation,withSpring,SPRING_OPTIONS_POSITION,translateYAnimation,scaleAnimation,SPRING_OPTIONS_SCALE}=this.__closure;return{opacity:withTiming(opacityAnimation.get()),transform:[{translateX:useReducedMotion?translateXAnimation.get():withSpring(translateXAnimation.get(),SPRING_OPTIONS_POSITION)},{translateY:useReducedMotion?translateYAnimation.get():withSpring(translateYAnimation.get(),SPRING_OPTIONS_POSITION)},{scale:useReducedMotion?scaleAnimation.get():withSpring(scaleAnimation.get(),SPRING_OPTIONS_SCALE)}]};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/GroupAvatar.tsx");

export default function GroupAvatar(users) {
  users = users.users;
  const guildId = users.guildId;
  let ref;
  noop = undefined;
  const tmp = closure_12();
  let obj = users(ref[6]);
  const themeContext = obj.useThemeContext();
  ({ primaryColor, theme } = themeContext);
  let obj1 = users(ref[6]);
  let shadowContainerBackground = obj1.isThemeLight(theme) ? tmp.shadowContainerBackgroundLight : tmp.shadowContainerBackgroundDark;
  ref = noop.useRef(false);
  const effect = noop.useEffect(() => {
    ref.current = true;
  }, []);
  noop = users.length > 4;
  const diff = users.length - 3;
  c4 = diff;
  const animateOnMount = guildId(ref[7])(ref);
  obj = { style: tmp.groupContainer, children: null };
  const items = [tmp.shadowContainer, ];
  const mapped = items1[Math.max(Math, 0, Math.min(Math, items1.length - 1, users.length - 1))].map((item, index) => {
    if (null == users[index]) {
      return null;
    } else {
      let obj = {};
      const merged = Object.assign(item);
      obj.key = tmp.id;
      obj.animateOnMount = animateOnMount;
      if (!closure_3) {
        obj = { guildId, user: tmp };
        let tmp13 = timestampProducer(GroupMemberAvatar, obj);
        <AnimatedContainer guildId={guildId} user={tmp}>{tmp13}</AnimatedContainer>;
      }
      obj = { count };
      tmp13 = timestampProducer(GroupMemberCount, obj);
    }
  });
  if (null == primaryColor) {
    shadowContainerBackground = tmp.shadowContainerBackground;
  }
  obj = { style: items, children: null };
  items[1] = shadowContainerBackground;
  obj1 = { style: tmp.gradientContainer, children: null };
  let tmp10Result = null == primaryColor;
  if (tmp10Result) {
    const obj2 = { style: tmp.gradientDimOverlay };
    tmp10Result = tmp10(tmp9, obj2);
  }
  obj1.children = tmp10Result;
  items1 = [animateOnMount(c4, obj1), animateOnMount(c4, { style: tmp.gradientImageBorder })];
  obj.children = items1;
  const items2 = [closure_7(c4, obj), mapped];
  obj.children = items2;
  return closure_7(c4, obj);
};