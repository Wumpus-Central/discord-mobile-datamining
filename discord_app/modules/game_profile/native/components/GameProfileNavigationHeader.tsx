// discord_app/modules/game_profile/native/components/GameProfileNavigationHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  headerContainer: null,
  headerRow: null,
  icon: null,
  titleContainer: null,
  headerRight: null,
  rankPillContainer: null,
};
createStyles = {
  height: 56,
  paddingHorizontal: nativeDefault.space.PX_16,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
  justifyContent: "center",
};
createStyles.headerContainer = createStyles;
createStyles.headerRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
createStyles.icon = size;
let obj1 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.titleContainer = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  minWidth: 0,
};
createStyles.headerRight = { flexDirection: "row", alignItems: "center" };
createStyles.rankPillContainer = { flex: 1, flexDirection: "row", alignItems: "center" };
let closure_9 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function GameProfileNavigationHeaderTsx1(){const{headerRightProgress}=this.__closure;return{opacity:headerRightProgress.get()};}",
};
const __initData2 = {
  code: "function GameProfileNavigationHeaderTsx2(){const{headerRightProgress}=this.__closure;return{opacity:1-headerRightProgress.get()};}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileNavigationHeader.tsx");

export default function GameProfileNavigationHeader(game) {
  game = game.game;
  const application = game.application;
  const headerRight = game.headerRight;
  let sharedValue;
  const tmp = closure_9();
  dependencyMap = tmp2;
  let obj = game(4296);
  let num = 0;
  if (null != headerRight) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  const items = [null != headerRight, sharedValue];
  const effect = sharedValue.useEffect(() => {
    let num = 0;
    if (closure_2) {
      num = 1;
    }
    const result = sharedValue.set(timing.withTiming(num, { duration: 200 }));
  }, items);
  let tmp3Result = tmp3(4296);
  const fn = function x() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { headerRightProgress: sharedValue };
  fn.__workletHash = 16001524280109;
  fn.__initData = __initData;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  tmp3Result = tmp3(4296);
  const fn2 = function b() {
    return { opacity: 1 - sharedValue.get() };
  };
  fn2.__closure = { headerRightProgress: sharedValue };
  fn2.__workletHash = 5182160908530;
  fn2.__initData = __initData2;
  const items1 = [game, application];
  const animatedStyle1 = tmp3Result.useAnimatedStyle(fn2);
  const memo = sharedValue.useMemo(() => {
    let iconURL;
    if (game != null) {
      let str = "png";
      if (AvatarUtils.SUPPORTS_WEBP) {
        str = "webp";
      }
      iconURL = game.getIconURL(32, str);
    }
    if (iconURL == null) {
      let iconURL1;
      if (application != null) {
        let str2 = "png";
        if (AvatarUtils.SUPPORTS_WEBP) {
          str2 = "webp";
        }
        iconURL1 = application.getIconURL(32, str2);
      }
      iconURL = iconURL1;
    }
    if (iconURL == null) {
      iconURL = null;
    }
    return iconURL;
  }, items1);
  let name;
  if (game != null) {
    name = game.name;
  }
  if (name == null) {
    let name1;
    if (application != null) {
      name1 = application.name;
    }
    name = name1;
  }
  let tmp13Result = null;
  if (null != name) {
    obj = { style: tmp.headerContainer, children: null };
    const items2 = [closure_7(tmp3(8902).BackgroundBlurFill, {})];
    obj = { style: tmp.headerRow, children: null };
    let tmp15Result = null != memo;
    if (tmp15Result) {
      const obj1 = { source: null, style: null };
      const obj2 = { uri: memo };
      obj1.source = obj2;
      obj1.style = tmp.icon;
      tmp15Result = closure_7(closure_4, obj1);
    }
    const items3 = [tmp15Result, ,];
    const obj3 = { style: tmp.titleContainer, children: null };
    const obj4 = {
      variant: "redesign/heading-18/bold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      children: name,
    };
    const items4 = [closure_7(tmp3(4556).Heading, obj4)];
    let l30Rank;
    if (game != null) {
      l30Rank = game.l30Rank;
    }
    tmp13Result = null != l30Rank;
    if (tmp13Result) {
      const obj5 = { style: tmp.rankPillContainer, children: null };
      const obj6 = { rank: game.l30Rank, compact: true };
      const items5 = [closure_7(application(8716), obj6)];
      const obj7 = { style: null, children: null };
      const items6 = [StyleSheet.absoluteFill, animatedStyle1];
      obj7.style = items6;
      const obj8 = { rank: game.l30Rank };
      obj7.children = closure_7(application(8716), obj8);
      items5[1] = closure_7(application(4296).View, obj7);
      obj5.children = items5;
      tmp13Result = closure_8(closure_5, obj5);
    }
    items4[1] = tmp13Result;
    obj3.children = items4;
    items3[1] = closure_8(closure_5, obj3);
    tmp15Result = null != headerRight;
    if (tmp15Result) {
      const obj9 = { style: null, children: null };
      const items7 = [tmp.headerRight, animatedStyle];
      obj9.style = items7;
      obj9.children = headerRight();
      tmp15Result = closure_7(application(4296).View, obj9);
    }
    items3[2] = tmp15Result;
    obj.children = items3;
    items2[1] = closure_8(closure_5, obj);
    obj.children = items2;
    tmp13Result = closure_8(closure_5, obj);
  }
  return tmp13Result;
}
