// discord_app/modules/main_tabs_v2/native/shared_components/GroupAvatar.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import apexExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../a11y/AccessibilityStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import { createElement } from "../../../../../_runtime/00019_noop.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function AnimatedContainer(children) {
  const scale = children.scale;
  const translateX = children.translateX;
  const translateY = children.translateY;
  const animateOnMount = children.animateOnMount;
  let stateFromStores;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let obj = scale(translateY[8]);
  let items = [sharedValue1];
  stateFromStores = obj.useStateFromStores(items, () => sharedValue1.useReducedMotion);
  const tmp = callback2();
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
    const obj = { opacity: scale(translateY[10]).withTiming(sharedValue.get()), transform: null };
    if (stateFromStores) {
      let withSpringResult = sharedValue2.get();
    } else {
      let tmpResult = tmp(tmp2[11]);
      withSpringResult = tmpResult.withSpring(sharedValue2.get(), closure_1_11);
    }
    const items = [{ translateX: withSpringResult }, ,];
    if (stateFromStores) {
      let value = sharedValue1.get();
    } else {
      tmpResult = tmp(tmp2[11]);
      value = tmpResult.withSpring(sharedValue1.get(), closure_1_11);
    }
    items[1] = { translateY: value };
    if (stateFromStores) {
      let value1 = sharedValue3.get();
    } else {
      value1 = tmp(tmp2[11]).withSpring(sharedValue3.get(), closure_1_10);
      const tmpResult1 = tmp(tmp2[11]);
    }
    items[2] = { scale: value1 };
    obj[1] = items;
    return obj;
  };
  obj = {
    withTiming: tmp2(tmp3[10]).withTiming,
    opacityAnimation: sharedValue,
    useReducedMotion: stateFromStores,
    translateXAnimation: sharedValue2,
    withSpring: tmp2(tmp3[11]).withSpring,
    SPRING_OPTIONS_POSITION: closure_11,
    translateYAnimation: sharedValue1,
    scaleAnimation: sharedValue3,
    SPRING_OPTIONS_SCALE: closure_10,
  };
  fn.__closure = obj;
  fn.__workletHash = 8800301056148;
  fn.__initData = closure_14;
  const animatedStyle = scale(translateY[9]).useAnimatedStyle(fn);
  const style = [tmp.avatarContainer, animatedStyle];
  return sharedValue2(translateX(translateY[9]).View, { style, children: children.children });
}
function GroupMemberCount(count) {
  count = count.count;
  let obj = apexExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GroupAvatar");
  const tmp2 = callback2();
  obj = { style: tmp2.avatarWrapper, children: null };
  obj = { style: tmp2.overflowCount, children: null };
  let str = "text-sm/semibold";
  if (manaTypeConsolidationExperiment) {
    str = "text-sm/semibold";
    if (count < 100) {
      str = "experimental/body-md/semibold";
    }
  }
  const items = ["+", count];
  obj[1] = closure_7(Text.Text, { variant: str, children: items });
  obj[1] = closure_6(View, obj);
  return closure_6(View, obj);
}
function GroupMemberAvatar(guildId) {
  guildId = guildId.guildId;
  const user = guildId.user;
  const tmp = callback2();
  const items = [guildId, user];
  const memo = React.useMemo(() => {
    let avatarSource;
    if (user != null) {
      avatarSource = user.getAvatarSource(guildId, false, 32);
    }
    return avatarSource;
  }, items);
  let tmp3 = null;
  if (null != memo) {
    let obj = { style: null, children: null };
    obj[0] = tmp.avatarWrapper;
    obj = { style: null, source: null };
    obj[0] = tmp.avatar;
    obj[1] = memo;
    obj[1] = callback(user(5587), obj);
    tmp3 = callback(View, obj);
  }
  return tmp3;
}
({ jsx: closure_6, jsxs: error } = jsxProd);
let c9 = 38;
let closure_10 = { damping: 30, stiffness: 400 };
let closure_11 = { damping: 30, stiffness: 400 };
let closure_12 = createCacheKey.createStyles(() => {
  let obj = {
    groupContainer: { position: "relative" },
    shadowContainer: null,
    shadowContainerBackground: null,
    shadowContainerBackgroundLight: null,
    shadowContainerBackgroundDark: null,
    gradientContainer: null,
    gradientDimOverlay: null,
    gradientImageBorder: null,
    avatarContainer: null,
    avatar: null,
    avatarWrapper: null,
    overflowCount: null,
  };
  obj = { borderRadius: ThemesDefault.radii.sm };
  obj[1] = obj;
  obj[2] = {};
  obj[3] = { opacity: 0.4 };
  obj[4] = { opacity: 0.15 };
  obj = {
    width: ThemesDefault.modules.mobile.GROUP_AVATAR_SIZE,
    height: ThemesDefault.modules.mobile.GROUP_AVATAR_SIZE,
    overflow: "hidden",
    borderRadius: ThemesDefault.radii.sm,
  };
  obj[5] = obj;
  obj[6] = { position: "absolute", left: 0, top: 0, right: 0, bottom: 0 };
  obj[7] = {
    width: ThemesDefault.modules.mobile.GROUP_AVATAR_SIZE,
    height: ThemesDefault.modules.mobile.GROUP_AVATAR_SIZE,
    borderRadius: ThemesDefault.radii.sm,
    position: "absolute",
  };
  obj[8] = { position: "absolute", top: "50%", left: "50%", width: c9, height: c9, marginTop: -19, marginLeft: -19 };
  obj[9] = { width: 32, height: 32, position: "absolute", borderRadius: 16 };
  obj[10] = {
    position: "absolute",
    width: c9,
    height: c9,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 19,
  };
  obj1 = {
    width: ThemesDefault.modules.mobile.GROUP_AVATAR_SIZE,
    height: ThemesDefault.modules.mobile.GROUP_AVATAR_SIZE,
    borderRadius: ThemesDefault.radii.sm,
    position: "absolute",
  };
  const obj2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: c9,
    height: c9,
    marginTop: -19,
    marginLeft: -19,
  };
  obj[11] = {
    width: c9,
    height: c9,
    position: "absolute",
    borderRadius: 19,
    backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return obj;
});
let items = [
  { translateY: 0, translateX: 0, scale: 1 },
  { translateY: 0, translateX: 0, scale: 0 },
  { translateY: 0, translateX: 0, scale: 0 },
  { translateY: 0, translateX: 0, scale: 0 },
];
let items1 = [items, , ,];
let items2 = [
  { translateY: -14, translateX: -14, scale: 0.75 },
  { translateY: 12, translateX: 12, scale: 0.875 },
  { translateY: 0, translateX: 0, scale: 0 },
  { translateY: 0, translateX: 0, scale: 0 },
];
items1[1] = items2;
const items3 = [
  { translateY: -4, translateX: 16, scale: 0.75 },
  { translateY: 14, translateX: -14, scale: 0.875 },
  { translateY: -18, translateX: -12, scale: 0.625 },
  { translateY: 0, translateX: 0, scale: 0 },
];
items1[2] = items3;
const items4 = [
  { translateY: -14, translateX: -14, scale: 0.875 },
  { translateY: 14, translateX: 14, scale: 0.875 },
  { translateY: -18, translateX: 18, scale: 0.625 },
  { translateY: 18, translateX: -18, scale: 0.625 },
];
items1[3] = items4;
let closure_14 = {
  code: "function GroupAvatarTsx1(){const{withTiming,opacityAnimation,useReducedMotion,translateXAnimation,withSpring,SPRING_OPTIONS_POSITION,translateYAnimation,scaleAnimation,SPRING_OPTIONS_SCALE}=this.__closure;return{opacity:withTiming(opacityAnimation.get()),transform:[{translateX:useReducedMotion?translateXAnimation.get():withSpring(translateXAnimation.get(),SPRING_OPTIONS_POSITION)},{translateY:useReducedMotion?translateYAnimation.get():withSpring(translateYAnimation.get(),SPRING_OPTIONS_POSITION)},{scale:useReducedMotion?scaleAnimation.get():withSpring(scaleAnimation.get(),SPRING_OPTIONS_SCALE)}]};}",
};
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/GroupAvatar.tsx");

export default function GroupAvatar(users) {
  users = users.users;
  const guildId = users.guildId;
  let ref;
  let React;
  c4 = undefined;
  let num;
  closure_6 = undefined;
  const tmp = callback2();
  let obj = users(ref[6]);
  const themeContext = obj.useThemeContext();
  ({ primaryColor, theme } = themeContext);
  obj1 = users(ref[6]);
  let shadowContainerBackground = obj1.isThemeLight(theme)
    ? tmp.shadowContainerBackgroundLight
    : tmp.shadowContainerBackgroundDark;
  ref = React.useRef(false);
  const effect = React.useEffect(() => {
    ref.current = true;
  }, []);
  React = users.length > 4;
  const diff = users.length - 3;
  c4 = diff;
  num = 2;
  if (10 <= diff) {
    num = 1;
  }
  closure_6 = guildId(ref[7])(ref);
  obj = { style: tmp.groupContainer, children: null };
  const items = [tmp.shadowContainer];
  const mapped = items1[Math.max(Math, 0, Math.min(Math, items1.length - 1, users.length - 1))].map((arg0, arg1) => {
    if (null == users[arg1]) {
      return null;
    } else {
      let obj = {};
      const merged = Object.assign(arg0);
      obj.key = tmp.id;
      obj.animateOnMount = callback;
      if (!closure_3) {
        obj = { guildId: null, user: null };
        obj[0] = guildId;
        obj[1] = tmp;
        let tmp13 = callback(closure_1_17, obj);
        tmp3(tmp4, obj, tmp13);
      }
      obj = { count: null };
      obj[0] = c4;
      tmp13 = callback(closure_1_16, obj);
      tmp3 = closure_1_8;
      tmp4 = closure_1_15;
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
    const obj2 = { style: null };
    obj2[0] = tmp.gradientDimOverlay;
    tmp10Result = tmp10(tmp9, obj2);
  }
  obj1[1] = tmp10Result;
  items1 = [closure_6(c4, obj1), closure_6(c4, { style: tmp.gradientImageBorder })];
  obj[1] = items1;
  const items2 = [closure_7(c4, obj), mapped];
  obj[1] = items2;
  return closure_7(c4, obj);
}
