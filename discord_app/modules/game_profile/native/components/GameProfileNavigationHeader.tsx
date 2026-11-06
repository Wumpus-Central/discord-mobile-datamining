// === Module 9728: GameProfileNavigationHeader ===

// Module 9728 (GameProfileNavigationHeader)
import nativeDefault from "native" /* 575 */;
import AvatarUtils from "AvatarUtils" /* 1411 */;
import timing_timing from "timing/timing" /* 5400 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5170);
let obj2 = { headerContainer: { height: 56, paddingHorizontal: nativeDefault.space.PX_16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", justifyContent: "center" }, headerRow: null, icon: null, titleContainer: null, headerRight: null, rankPillContainer: null };
let obj3 = { height: 56, paddingHorizontal: nativeDefault.space.PX_16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", justifyContent: "center" };
obj2.headerRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj2.icon = size;
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.titleContainer = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minWidth: 0 };
obj2.headerRight = { flexDirection: "row", alignItems: "center" };
obj2.rankPillContainer = { flex: 1, flexDirection: "row", alignItems: "center" };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = { code: "(function GameProfileNavigationHeaderTsx1(){let[headerRightProgress]=this.__closure;return{opacity:headerRightProgress.get()};})" };
let closure_10 = { code: "(function GameProfileNavigationHeaderTsx2(){let[headerRightProgress]=this.__closure;return{opacity:1-headerRightProgress.get()};})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileNavigationHeader.tsx");

export default function GameProfileNavigationHeader(game) {
  game = game.game;
  _require = game;
  const application = game.application;
  const headerRight = game.headerRight;
  let sharedValue;
  const tmp = closure_8();
  dependencyMap = tmp6;
  const token = require("useToken").useToken(application(575).colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN);
  let obj = require("useToken");
  let num = 0;
  if (null != headerRight) {
    num = 1;
  }
  sharedValue = require("module_1652").useSharedValue(num);
  items = [null != headerRight, sharedValue];
  const effect = sharedValue.useEffect(() => {
    let num = 0;
    if (closure_2) {
      num = 1;
    }
    const result = sharedValue.set(timing_timing.withTiming(num, { duration: 200 }));
  }, items);
  const obj2 = require("module_1652");
  const obj3 = sharedValue;
  const items1 = [closure_9, sharedValue];
  _require = undefined;
  [tmp9, tmp10] = items1;
  class GameProfileNavigationHeaderTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp10];
  GameProfileNavigationHeaderTsx1.__closure = items2;
  GameProfileNavigationHeaderTsx1.__workletHash = 12841236094068;
  GameProfileNavigationHeaderTsx1.__initData = tmp9;
  const animatedStyle = require("module_1652").useAnimatedStyle(GameProfileNavigationHeaderTsx1);
  const tmp2Result = require("module_1652");
  const items3 = [closure_10, sharedValue];
  _require = undefined;
  [tmp12, tmp13] = items3;
  class GameProfileNavigationHeaderTsx2 {
    constructor() {
      obj = { opacity: 1 - closure_0.get() };
      return obj;
    }
  }
  const items4 = [tmp13];
  GameProfileNavigationHeaderTsx2.__closure = items4;
  GameProfileNavigationHeaderTsx2.__workletHash = 15239718995275;
  GameProfileNavigationHeaderTsx2.__initData = tmp12;
  const items5 = [game, application];
  const animatedStyle1 = require("module_1652").useAnimatedStyle(GameProfileNavigationHeaderTsx2);
  const memo = obj3.useMemo(() => {
    iconURL = undefined;
    if (iconURL != null) {
      let str = "png";
      if (AvatarUtils.SUPPORTS_WEBP) {
        str = "webp";
      }
      iconURL = iconURL.getIconURL(32, str);
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
  }, items5);
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
  let tmp19Result2 = null;
  if (null != name) {
    const obj4 = { style: tmp.headerContainer, children: null };
    const obj5 = { android_fallbackColor: token };
    const items6 = [closure_6(tmp2(9090).BackgroundBlurFill, obj5), ];
    const obj6 = { style: tmp.headerRow, children: null };
    let tmp21Result = null != memo;
    if (tmp21Result) {
      const obj7 = { source: null, style: null };
      const obj8 = { uri: memo };
      obj7.source = obj8;
      obj7.style = tmp.icon;
      tmp21Result = closure_6(tmp4(5872), obj7);
    }
    const items7 = [tmp21Result, , ];
    const obj9 = { style: tmp.titleContainer, children: null };
    const obj10 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: name };
    const items8 = [closure_6(tmp2(5781).Heading, obj10), ];
    let l30Rank;
    if (game != null) {
      l30Rank = game.l30Rank;
    }
    let tmp19Result = null != l30Rank;
    if (tmp19Result) {
      const obj11 = { style: tmp.rankPillContainer, children: null };
      const obj12 = { rank: game.l30Rank, compact: true };
      const items9 = [closure_6(tmp4(9476), obj12), ];
      const obj13 = { style: null, children: null };
      const items10 = [StyleSheet.absoluteFill, animatedStyle1];
      obj13.style = items10;
      const obj14 = { rank: game.l30Rank };
      obj13.children = closure_6(tmp4(9476), obj14);
      items9[1] = closure_6(tmp4(1652).View, obj13);
      obj11.children = items9;
      tmp19Result = closure_7(closure_4, obj11);
    }
    items8[1] = tmp19Result;
    obj9.children = items8;
    items7[1] = closure_7(closure_4, obj9);
    let tmp21Result2 = null != headerRight;
    if (tmp21Result2) {
      const obj15 = { style: null, children: null };
      const items11 = [tmp.headerRight, animatedStyle];
      obj15.style = items11;
      obj15.children = headerRight();
      tmp21Result2 = closure_6(tmp4(1652).View, obj15);
    }
    items7[2] = tmp21Result2;
    obj6.children = items7;
    items6[1] = closure_7(closure_4, obj6);
    obj4.children = items6;
    tmp19Result2 = closure_7(closure_4, obj4);
  }
  return tmp19Result2;
};