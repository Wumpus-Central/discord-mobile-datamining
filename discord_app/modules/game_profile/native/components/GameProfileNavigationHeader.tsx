// === Module 9183: GameProfileNavigationHeader ===

// Module 9183 (GameProfileNavigationHeader)
import nativeDefault from "native" /* 576 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import timing from "timing" /* 4757 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { headerContainer: { height: 56, paddingHorizontal: nativeDefault.space.PX_16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", justifyContent: "center" }, headerRow: null, icon: null, titleContainer: null, headerRight: null, rankPillContainer: null };
let obj3 = { height: 56, paddingHorizontal: nativeDefault.space.PX_16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", justifyContent: "center" };
obj2.headerRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj2.icon = size;
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.titleContainer = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minWidth: 0 };
obj2.headerRight = { flexDirection: "row", alignItems: "center" };
obj2.rankPillContainer = { flex: 1, flexDirection: "row", alignItems: "center" };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function GameProfileNavigationHeaderTsx1(){const{headerRightProgress}=this.__closure;return{opacity:headerRightProgress.get()};}" };
const __initData2 = { code: "function GameProfileNavigationHeaderTsx2(){const{headerRightProgress}=this.__closure;return{opacity:1-headerRightProgress.get()};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileNavigationHeader.tsx");

export default function GameProfileNavigationHeader(game) {
  game = game.game;
  const application = game.application;
  const headerRight = game.headerRight;
  let sharedValue;
  const tmp = closure_9();
  dependencyMap = tmp2;
  let num = 0;
  if (null != headerRight) {
    num = 1;
  }
  sharedValue = game(4492).useSharedValue(num);
  const items = [null != headerRight, sharedValue];
  const effect = sharedValue.useEffect(() => {
    let num = 0;
    if (closure_2) {
      num = 1;
    }
    const result = sharedValue.set(timing.withTiming(num, { duration: 200 }));
  }, items);
  let obj = game(4492);
  const fn = function x() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { headerRightProgress: sharedValue };
  fn.__workletHash = 16001524280109;
  fn.__initData = __initData;
  const animatedStyle = game(4492).useAnimatedStyle(fn);
  const tmp3Result = game(4492);
  const fn2 = function b() {
    return { opacity: 1 - sharedValue.get() };
  };
  fn2.__closure = { headerRightProgress: sharedValue };
  fn2.__workletHash = 5182160908530;
  fn2.__initData = __initData2;
  const items1 = [game, application];
  const animatedStyle1 = game(4492).useAnimatedStyle(fn2);
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
  let tmp13Result2 = null;
  if (null != name) {
    const obj2 = { style: tmp.headerContainer, children: null };
    const items2 = [closure_7(tmp3(9184).BackgroundBlurFill, {}), ];
    const obj3 = { style: tmp.headerRow, children: null };
    let tmp15Result = null != memo;
    if (tmp15Result) {
      const obj4 = { source: null, style: null };
      const obj5 = { uri: memo };
      obj4.source = obj5;
      obj4.style = tmp.icon;
      tmp15Result = closure_7(closure_4, obj4);
    }
    const items3 = [tmp15Result, , ];
    const obj6 = { style: tmp.titleContainer, children: null };
    const obj7 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, children: name };
    const items4 = [closure_7(tmp3(4752).Heading, obj7), ];
    let l30Rank;
    if (game != null) {
      l30Rank = game.l30Rank;
    }
    let tmp13Result = null != l30Rank;
    if (tmp13Result) {
      const obj8 = { style: tmp.rankPillContainer, children: null };
      const obj9 = { rank: game.l30Rank, compact: true };
      const items5 = [closure_7(application(8990), obj9), ];
      const obj10 = { style: null, children: null };
      const items6 = [StyleSheet.absoluteFill, animatedStyle1];
      obj10.style = items6;
      const obj11 = { rank: game.l30Rank };
      obj10.children = closure_7(application(8990), obj11);
      items5[1] = closure_7(application(4492).View, obj10);
      obj8.children = items5;
      tmp13Result = closure_8(closure_5, obj8);
    }
    items4[1] = tmp13Result;
    obj6.children = items4;
    items3[1] = closure_8(closure_5, obj6);
    let tmp15Result2 = null != headerRight;
    if (tmp15Result2) {
      const obj12 = { style: null, children: null };
      const items7 = [tmp.headerRight, animatedStyle];
      obj12.style = items7;
      obj12.children = headerRight();
      tmp15Result2 = closure_7(application(4492).View, obj12);
    }
    items3[2] = tmp15Result2;
    obj3.children = items3;
    items2[1] = closure_8(closure_5, obj3);
    obj2.children = items2;
    tmp13Result2 = closure_8(closure_5, obj2);
  }
  return tmp13Result2;
};