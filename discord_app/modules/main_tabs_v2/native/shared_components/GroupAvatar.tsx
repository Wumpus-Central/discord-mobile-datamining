// === Module 13175: GroupAvatar ===

// Module 13175 (GroupAvatar)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4635 */;
import timing from "timing" /* 4640 */;
import spring from "spring" /* 5058 */;
import FastImageDefault from "FastImage" /* 5672 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 7087 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4631 */;

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
  const tmp = closure_12();
  let items = [sharedValue1];
  const stateFromStores = scale(translateY[8]).useStateFromStores(items, () => sharedValue1.useReducedMotion);
  let obj = scale(translateY[8]);
  let num = 1;
  if (animateOnMount) {
    num = 0;
  }
  sharedValue = scale(translateY[9]).useSharedValue(num);
  const obj2 = scale(translateY[9]);
  let num2 = 0;
  if (!animateOnMount) {
    num2 = translateY;
  }
  sharedValue1 = scale(translateY[9]).useSharedValue(num2);
  const tmp2Result = scale(translateY[9]);
  let num3 = 0;
  if (!animateOnMount) {
    num3 = translateX;
  }
  sharedValue2 = scale(translateY[9]).useSharedValue(num3);
  const tmp2Result4 = scale(translateY[9]);
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
  const tmp2Result5 = scale(translateY[9]);
  const fn = function y() {
    const obj = { opacity: timing.withTiming(sharedValue.get()), transform: null };
    if (stateFromStores) {
      let withSpringResult = sharedValue2.get();
    } else {
      withSpringResult = spring.withSpring(sharedValue2.get(), closure_11);
      const tmpResult = spring;
    }
    const items = [{ translateX: withSpringResult }, , ];
    if (stateFromStores) {
      let value3 = sharedValue1.get();
    } else {
      value3 = spring.withSpring(sharedValue1.get(), closure_11);
      const tmpResult3 = spring;
    }
    items[1] = { translateY: value3 };
    if (stateFromStores) {
      let value4 = sharedValue3.get();
    } else {
      value4 = spring.withSpring(sharedValue3.get(), closure_10);
      const tmpResult4 = spring;
    }
    items[2] = { scale: value4 };
    obj.transform = items;
    return obj;
  };
  const tmp2Result6 = scale(translateY[9]);
  fn.__closure = { withTiming: scale(translateY[10]).withTiming, opacityAnimation: sharedValue, useReducedMotion: stateFromStores, translateXAnimation: sharedValue2, withSpring: scale(translateY[11]).withSpring, SPRING_OPTIONS_POSITION, translateYAnimation: sharedValue1, scaleAnimation: sharedValue3, SPRING_OPTIONS_SCALE };
  fn.__workletHash = 8800301056148;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result6.useAnimatedStyle(fn);
  const obj4 = { style: null, children: children.children };
  const items2 = [tmp.avatarContainer, animatedStyle];
  obj4.style = items2;
  return sharedValue2(translateX(translateY[9]).View, obj4);
}
function GroupMemberCount(count) {
  count = count.count;
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GroupAvatar");
  const tmp2 = closure_12();
  const obj2 = { style: tmp2.avatarWrapper, children: null };
  const obj3 = { style: tmp2.overflowCount, children: null };
  let str = "text-sm/semibold";
  if (manaTypeConsolidationExperiment) {
    str = "text-sm/semibold";
    if (count < 100) {
      str = "experimental/body-md/semibold";
    }
  }
  const obj4 = { variant: str, children: null };
  const items = ["+", count];
  obj4.children = items;
  obj3.children = React5(Text_Text.Text, obj4);
  obj2.children = timestampProducer(View, obj3);
  return timestampProducer(View, obj2);
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
    const obj = { style: tmp.avatarWrapper, children: null };
    const obj2 = { style: tmp.avatar, source: memo };
    obj.children = timestampProducer(FastImageDefault, obj2);
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
const createStyles = fn(4639);
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
  const items = [tmp.shadowContainer, ];
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