// === Module 12142: AnimatedContainer ===

// Module 12142 (AnimatedContainer)
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import Text from "Text" /* 4734 */;
import result4 from "result" /* 6289 */;
import apexExperiment from "apexExperiment" /* 8307 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import jsxProd from "jsxProd" /* 21 */;
import { createElement } from "noop" /* 19 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function AnimatedContainer(scale) {
  scale = scale.scale;
  const translateX = scale.translateX;
  const translateY = scale.translateY;
  const animateOnMount = scale.animateOnMount;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  ({ shadow, children } = scale);
  const tmp3 = callback2(translateX(translateY[7])("GroupAvatar"));
  let obj = scale(translateY[10]);
  let items = [sharedValue1];
  const stateFromStores = obj.useStateFromStores(items, () => sharedValue1.useReducedMotion);
  let num = 1;
  if (animateOnMount) {
    num = 0;
  }
  sharedValue = scale(translateY[11]).useSharedValue(num);
  let tmp4Result = tmp4(tmp2[11]);
  let num2 = 0;
  if (!animateOnMount) {
    num2 = translateY;
  }
  sharedValue1 = tmp4Result.useSharedValue(num2);
  tmp4Result = tmp4(tmp2[11]);
  let num3 = 0;
  if (!animateOnMount) {
    num3 = translateX;
  }
  sharedValue2 = tmp4Result.useSharedValue(num3);
  const obj2 = scale(translateY[11]);
  const tmp = translateX;
  let result = scale;
  if (animateOnMount) {
    result = scale / 2;
  }
  sharedValue3 = scale(translateY[11]).useSharedValue(result);
  items1 = [sharedValue, sharedValue3, sharedValue1, sharedValue2, scale, translateY, translateX];
  const effect = stateFromStores.useEffect(() => {
    const result = sharedValue.set(1);
    const result1 = sharedValue3.set(scale);
    const result2 = sharedValue1.set(translateY);
    const result3 = sharedValue2.set(translateX);
  }, items1);
  const tmp4Result1 = scale(translateY[11]);
  class T {
    constructor() {
      obj = { opacity: null, transform: null };
      tmp = scale;
      tmp2 = translateY;
      obj2 = scale(translateY[12]);
      obj[0] = obj2.withTiming(closure_4.get());
      tmp3 = closure_3;
      if (closure_3) {
        tmp7 = closure_6;
        value = closure_6.get();
      } else {
        tmpResult = tmp(tmp2[13]);
        tmp4 = closure_6;
        tmp5 = closure_1_11;
        value = tmpResult.withSpring(closure_6.get(), closure_1_11);
      }
      items = [, , ];
      items[0] = { translateX: value };
      if (tmp3) {
        tmp11 = closure_5;
        value1 = closure_5.get();
      } else {
        tmpResult1 = tmp(tmp2[13]);
        tmp8 = closure_5;
        tmp9 = closure_1_11;
        value1 = tmpResult1.withSpring(closure_5.get(), closure_1_11);
      }
      items[1] = { translateY: value1 };
      if (tmp3) {
        tmp15 = closure_7;
        value2 = closure_7.get();
      } else {
        tmpResult2 = tmp(tmp2[13]);
        tmp12 = closure_7;
        tmp13 = closure_1_10;
        value2 = tmpResult2.withSpring(closure_7.get(), closure_1_10);
      }
      items[2] = { scale: value2 };
      obj[1] = items;
      return obj;
    }
  }
  obj = { withTiming: tmp4(tmp2[12]).withTiming, opacityAnimation: sharedValue, useReducedMotion: stateFromStores, translateXAnimation: sharedValue2, withSpring: tmp4(tmp2[13]).withSpring, SPRING_OPTIONS_POSITION: closure_11, translateYAnimation: sharedValue1, scaleAnimation: sharedValue3, SPRING_OPTIONS_SCALE: closure_10 };
  T.__closure = obj;
  T.__workletHash = 8800301056148;
  T.__initData = closure_14;
  const animatedStyle = scale(translateY[11]).useAnimatedStyle(T);
  const style = [tmp3.avatarContainer, animatedStyle, ];
  shadow = undefined;
  if (shadow) {
    shadow = tmp3.shadow;
  }
  style[2] = shadow;
  return sharedValue2(tmp(translateY[11]).View, { style, children });
}
function GroupMemberCount(count) {
  count = count.count;
  let obj = apexExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GroupAvatar");
  const tmp3 = callback2(useIsMobileVisualRefreshExperimentEnabledDefault("GroupAvatar"));
  obj = { style: tmp3.overflowCount, children: null };
  let str = "text-sm/semibold";
  if (manaTypeConsolidationExperiment) {
    str = "text-sm/semibold";
    if (count < 100) {
      str = "experimental/body-md/semibold";
    }
  }
  const items = ["+", count];
  obj[1] = callback2(Text.Text, { variant: str, children: items });
  obj[1] = callback(View, obj);
  return callback(View, obj);
}
function GroupMemberAvatar(guildId) {
  guildId = guildId.guildId;
  const user = guildId.user;
  const tmp3 = callback2(user(1367)("GroupAvatar"));
  const items = [guildId, user];
  const memo = React.useMemo(() => {
    let avatarSource;
    if (user != null) {
      avatarSource = user.getAvatarSource(guildId, false, 32);
    }
    return avatarSource;
  }, items);
  let tmp5 = null;
  if (null != memo) {
    let obj = { style: null, children: null };
    obj[0] = tmp3.avatarWrapper;
    obj = { style: null, source: null };
    obj[0] = tmp3.avatar;
    obj[1] = memo;
    obj[1] = callback(user(5449), obj);
    tmp5 = callback(View, obj);
  }
  return tmp5;
}
({ jsx: closure_6, jsxs: error } = jsxProd);
let c9 = 38;
let closure_10 = { damping: 30, stiffness: 400 };
let closure_11 = { damping: 30, stiffness: 400 };
let closure_12 = createCacheKey.createStyles((arg0) => {
  let obj = { borderRadius: ThemesDefault.radii.sm, shadowColor: null, shadowOffset: null, shadowRadius: null, shadowOpacity: null, elevation: null };
  let BLACK;
  if (!arg0) {
    BLACK = ThemesDefault.colors.BLACK;
  }
  obj[1] = BLACK;
  obj = undefined;
  if (!arg0) {
    obj = { width: 0, height: 0 };
  }
  obj[2] = obj;
  obj[3] = 5;
  obj[4] = 0.2;
  obj[5] = 10;
  obj[1] = obj;
  let prop;
  if (!arg0) {
    prop = ThemesDefault.colors.CARD_BACKGROUND_DEFAULT;
  }
  obj[2] = { backgroundColor: prop };
  let WHITE;
  if (!arg0) {
    WHITE = ThemesDefault.colors.WHITE;
  }
  obj[3] = { backgroundColor: WHITE, opacity: 0.4 };
  let WHITE1;
  if (!arg0) {
    WHITE1 = ThemesDefault.colors.WHITE;
  }
  obj[4] = { backgroundColor: WHITE1, opacity: 0.15 };
  obj1 = { width: ThemesDefault.modules.mobile.GROUP_AVATAR_SIZE, height: ThemesDefault.modules.mobile.GROUP_AVATAR_SIZE, overflow: "hidden", borderRadius: ThemesDefault.radii.sm, backgroundColor: null };
  let prop1;
  if (!arg0) {
    prop1 = ThemesDefault.colors.CARD_BACKGROUND_DEFAULT;
  }
  obj1[4] = prop1;
  obj[5] = obj1;
  let prop2;
  if (!arg0) {
    prop2 = ThemesDefault.colors.BACKGROUND_MOD_SUBTLE;
  }
  obj[6] = { position: "absolute", left: 0, top: 0, right: 0, bottom: 0, backgroundColor: prop2 };
  const obj2 = { width: ThemesDefault.modules.mobile.GROUP_AVATAR_SIZE, height: ThemesDefault.modules.mobile.GROUP_AVATAR_SIZE, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, borderColor: null, position: "absolute" };
  let BORDER_SUBTLE;
  if (!arg0) {
    BORDER_SUBTLE = ThemesDefault.colors.BORDER_SUBTLE;
  }
  obj2[4] = BORDER_SUBTLE;
  obj[7] = obj2;
  obj[8] = { position: "absolute", top: "50%", left: "50%", width: c9, height: c9, marginTop: -19, marginLeft: -19 };
  let BLACK1;
  if (!arg0) {
    BLACK1 = ThemesDefault.colors.BLACK;
  }
  const obj4 = { shadowColor: BLACK1, shadowOpacity: null, shadowOffset: null, shadowRadius: null };
  let DARK_03_LIGHT_02;
  if (!arg0) {
    DARK_03_LIGHT_02 = result4.DARK_03_LIGHT_02;
  }
  obj4[1] = DARK_03_LIGHT_02;
  let obj5;
  if (!arg0) {
    obj5 = { width: 0, height: 3 };
  }
  obj4[2] = obj5;
  obj4[3] = 2;
  obj[9] = obj4;
  obj[10] = { width: 32, height: 32, position: "absolute", borderRadius: 16 };
  const obj6 = { position: "absolute", width: c9, height: c9, justifyContent: "center", alignItems: "center", borderRadius: 19, backgroundColor: null };
  let prop3;
  if (!arg0) {
    prop3 = ThemesDefault.colors.BACKGROUND_BASE_LOWER;
  }
  obj6[6] = prop3;
  obj[11] = obj6;
  const obj7 = { width: c9, height: c9, position: "absolute", borderRadius: 19, backgroundColor: null, display: "flex", alignItems: "center", justifyContent: "center" };
  const colors = ThemesDefault.colors;
  obj7[4] = arg0 ? colors.BACKGROUND_MOD_SUBTLE : colors.BACKGROUND_BASE_LOWER;
  obj[12] = obj7;
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
let closure_14 = { code: "function GroupAvatarTsx1(){const{withTiming,opacityAnimation,useReducedMotion,translateXAnimation,withSpring,SPRING_OPTIONS_POSITION,translateYAnimation,scaleAnimation,SPRING_OPTIONS_SCALE}=this.__closure;return{opacity:withTiming(opacityAnimation.get()),transform:[{translateX:useReducedMotion?translateXAnimation.get():withSpring(translateXAnimation.get(),SPRING_OPTIONS_POSITION)},{translateY:useReducedMotion?translateYAnimation.get():withSpring(translateYAnimation.get(),SPRING_OPTIONS_POSITION)},{scale:useReducedMotion?scaleAnimation.get():withSpring(scaleAnimation.get(),SPRING_OPTIONS_SCALE)}]};}" };
let result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/GroupAvatar.tsx");

export default function GroupAvatar(users) {
  users = users.users;
  const guildId = users.guildId;
  let ref;
  let React;
  const tmp3 = callback2(guildId(ref[7])("GroupAvatar"));
  let obj = users(ref[8]);
  const themeContext = obj.useThemeContext();
  ({ primaryColor, theme } = themeContext);
  obj1 = users(ref[8]);
  let shadowContainerBackground = obj1.isThemeLight(theme) ? tmp3.shadowContainerBackgroundLight : tmp3.shadowContainerBackgroundDark;
  ref = React.useRef(false);
  const effect = React.useEffect(() => {
    ref.current = true;
  }, []);
  React = users.length > 4;
  const diff = users.length - 3;
  c4 = diff;
  closure_6 = guildId(ref[9])(ref);
  obj = { style: tmp3.groupContainer, children: null };
  const items = [tmp3.shadowContainer, ];
  const mapped = items1[Math.max(Math, 0, Math.min(Math, items1.length - 1, users.length - 1))].map((item, index) => {
    if (null == users[index]) {
      return null;
    } else {
      let obj = {};
      const merged = Object.assign(item);
      obj.key = tmp.id;
      obj.animateOnMount = callback;
      obj.shadow = arr.length >= 2;
      if (!closure_3) {
        obj = { guildId: null, user: null };
        obj[0] = guildId;
        obj[1] = tmp;
        let tmp13 = callback(GroupMemberAvatar, obj);
        <AnimatedContainer guildId={null} user={null}>{tmp13}</AnimatedContainer>;
      }
      obj = { count: null };
      obj[0] = c4;
      tmp13 = callback(GroupMemberCount, obj);
    }
  });
  if (null == primaryColor) {
    shadowContainerBackground = tmp3.shadowContainerBackground;
  }
  obj = { style: items, children: null };
  items[1] = shadowContainerBackground;
  obj1 = { style: tmp3.gradientContainer, children: null };
  let tmp11Result = null == primaryColor;
  if (tmp11Result) {
    const obj2 = { style: null };
    obj2[0] = tmp3.gradientDimOverlay;
    tmp11Result = tmp11(tmp10, obj2);
  }
  obj1[1] = tmp11Result;
  items1 = [closure_6(c4, obj1), closure_6(c4, { style: tmp3.gradientImageBorder })];
  obj[1] = items1;
  const items2 = [callback2(c4, obj), mapped];
  obj[1] = items2;
  return callback2(c4, obj);
};