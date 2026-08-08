// discord_app/modules/game_profile/native/components/GameProfileNavigationHeader.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
({ Image: c4, View: c5, StyleSheet } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { headerContainer: null, headerRow: null, icon: null, titleContainer: null, headerRight: null, rankPillContainer: null };
createCacheKey = { height: 56, paddingHorizontal: require("Themes").space.PX_16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: require("Themes").colors.BORDER_SUBTLE, overflow: "hidden", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
let obj1 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
createCacheKey[2] = { width: 32, height: 32, borderRadius: require("Themes").radii.sm };
let obj2 = { width: 32, height: 32, borderRadius: require("Themes").radii.sm };
createCacheKey[3] = { flex: 1, flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, minWidth: 0 };
createCacheKey[4] = { flexDirection: "row", alignItems: "center" };
createCacheKey[5] = { flex: 1, flexDirection: "row", alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function GameProfileNavigationHeaderTsx1(){const{headerRightProgress}=this.__closure;return{opacity:headerRightProgress.get()};}" };
let closure_11 = { code: "function GameProfileNavigationHeaderTsx2(){const{headerRightProgress}=this.__closure;return{opacity:1-headerRightProgress.get()};}" };
let obj3 = { flex: 1, flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, minWidth: 0 };
let result = require("jsxProd").fileFinishedImporting("modules/game_profile/native/components/GameProfileNavigationHeader.tsx");

export default function GameProfileNavigationHeader(game) {
  game = game.game;
  const application = game.application;
  const headerRight = game.headerRight;
  let dependencyMap;
  let sharedValue;
  const tmp = createCacheKey();
  dependencyMap = tmp2;
  let obj = game(4036);
  let num = 0;
  if (null != headerRight) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  const items = [null != headerRight, sharedValue];
  const effect = sharedValue.useEffect(() => {
    let num = 0;
    if (_undefined) {
      num = 1;
    }
    const result = sharedValue.set(game(_undefined[6]).withTiming(num, { duration: 200 }));
  }, items);
  let tmp3Result = tmp3(4036);
  const fn = function x() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { headerRightProgress: sharedValue };
  fn.__workletHash = 16001524280109;
  fn.__initData = closure_10;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  tmp3Result = tmp3(4036);
  const fn2 = function b() {
    return { opacity: 1 - sharedValue.get() };
  };
  fn2.__closure = { headerRightProgress: sharedValue };
  fn2.__workletHash = 5182160908530;
  fn2.__initData = closure_11;
  const items1 = [game, application];
  const animatedStyle1 = tmp3Result.useAnimatedStyle(fn2);
  const memo = sharedValue.useMemo(() => {
    let iconURL;
    if (game != null) {
      let str = "png";
      if (game(_undefined[7]).SUPPORTS_WEBP) {
        str = "webp";
      }
      iconURL = game.getIconURL(32, str);
    }
    if (iconURL == null) {
      let iconURL1;
      if (application != null) {
        let str2 = "png";
        if (game(_undefined[7]).SUPPORTS_WEBP) {
          str2 = "webp";
        }
        iconURL1 = obj2.getIconURL(32, str2);
      }
      iconURL = iconURL1;
      obj2 = application;
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
    obj = { style: null, children: null };
    obj[0] = tmp.headerContainer;
    const items2 = [callback(tmp3(8663).BackgroundBlurFill, {}), ];
    obj = { style: null, children: null };
    obj[0] = tmp.headerRow;
    let tmp15Result = null != memo;
    if (tmp15Result) {
      const obj1 = { source: null, style: null };
      let obj2 = { uri: null };
      obj2[0] = memo;
      obj1[0] = obj2;
      obj1[1] = tmp.icon;
      tmp15Result = tmp15(closure_4, obj1);
    }
    const items3 = [tmp15Result, , ];
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.titleContainer;
    const obj4 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
    obj4[3] = name;
    const items4 = [callback(tmp3(4299).Heading, obj4), ];
    let l30Rank;
    if (game != null) {
      l30Rank = game.l30Rank;
    }
    tmp13Result = null != l30Rank;
    if (tmp13Result) {
      const obj5 = { style: null, children: null };
      obj5[0] = tmp.rankPillContainer;
      const obj6 = { rank: null, compact: true };
      obj6[0] = game.l30Rank;
      const items5 = [tmp15(application(9314), obj6), ];
      const obj7 = { style: null, children: null };
      const items6 = [StyleSheet.absoluteFill, animatedStyle1];
      obj7[0] = items6;
      const obj8 = { rank: null };
      obj8[0] = game.l30Rank;
      obj7[1] = tmp15(application(9314), obj8);
      items5[1] = tmp15(application(4036).View, obj7);
      obj5[1] = items5;
      tmp13Result = tmp13(tmp14, obj5);
    }
    items4[1] = tmp13Result;
    obj3[1] = items4;
    items3[1] = closure_8(closure_5, obj3);
    tmp15Result = null != headerRight;
    if (tmp15Result) {
      const obj9 = { style: null, children: null };
      const items7 = [tmp.headerRight, animatedStyle];
      obj9[0] = items7;
      obj9[1] = headerRight();
      tmp15Result = tmp15(application(4036).View, obj9);
    }
    items3[2] = tmp15Result;
    obj[1] = items3;
    items2[1] = closure_8(closure_5, obj);
    obj[1] = items2;
    tmp13Result = tmp13(tmp14, obj);
  }
  return tmp13Result;
};