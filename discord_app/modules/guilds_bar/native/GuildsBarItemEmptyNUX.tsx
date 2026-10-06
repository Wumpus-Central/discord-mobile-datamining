// === Module 16332: GuildsBarItemEmptyNUX ===

// Module 16332 (GuildsBarItemEmptyNUX)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import spring from "spring" /* 5604 */;
import transitionToGuild from "transitionToGuild" /* 6855 */;
import MainTabsConstants from "MainTabsConstants" /* 10833 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import GuildsBarConstants from "GuildsBarConstants" /* 16262 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroRequire;
function handlePress() {
  const obj = transitionToGuild;
  obj.transitionToGuild(EMPTY_NUX_SERVER);
}
({ Pressable: closure_4, Image: hasOwnProperty, View: metroRequire } = react_native);
({ GUILD_ITEM_HIT_SLOP: metroImportAll, useGuildWrapperSize: c9 } = GuildsBarConstants);
const EMPTY_NUX_SERVER = Constants.EMPTY_NUX_SERVER;
const MODE_CHANGE_PHYSICS = MainTabsConstants.MODE_CHANGE_PHYSICS;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let closure_14 = createStyles.createStyles((width, arg1) => {
  let rect;
  let rect1;
  const diff = width - 10;
  const obj = { root: { alignSelf: "stretch", paddingLeft: metroImportAll.left, marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING }, container: { position: "relative", flexDirection: "row", alignItems: "center", height: 55, width }, guildIndicator: rect, icon: { width: 59, height: 55, marginLeft: -3 }, backdrop: size, expandedChildren: rect1 };
  ({ alignSelf: "stretch", paddingLeft: metroImportAll.left, marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING });
  rect = { position: "absolute", left: -metroImportAll.left, top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN };
  size = { position: "absolute", top: 16, width, height: diff, borderRadius: nativeDefault.modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS };
  rect1 = { position: "absolute", left: arg1 + 16, right: 8, top: 16, height: diff, flexDirection: "row", alignItems: "center" };
  return obj;
});
const __initData = { code: "function GuildsBarItemEmptyNUXTsx1(){const{withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,\"animate-always\")};}" };
const __initData2 = { code: "function GuildsBarItemEmptyNUXTsx2(){const{withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,'animate-always')};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let guildId;
  let items1;
  let items2;
  let sharedValue;
  let stateFromStores;
  let tmp22;
  let tmp7;
  let tmp8;
  let token1;
  let obj = stateFromStores(token1[11]);
  const cResult = obj.c(36);
  let obj2 = stateFromStores(token1[12]);
  const token = obj2.useToken(sharedValue(token1[8]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp6 = closure_14(token, closure_9());
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function u() {
      return guildId.getGuildId() === EMPTY_NUX_SERVER;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = stateFromStores(token1[13]);
  stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  const tmpResult5 = stateFromStores(token1[14]);
  sharedValue = tmpResult5.useSharedValue(false);
  if (cResult[2] !== sharedValue) {
    class G {
      constructor() {
        const result = sharedValue.set(true);
      }
    }
    cResult[2] = sharedValue;
    cResult[3] = G;
  } else {
    class G {
      constructor() {
        const result = sharedValue.set(true);
      }
    }
  }
  if (cResult[4] !== sharedValue) {
    class G {
      constructor() {
        const result = sharedValue.set(true);
      }
    }
    cResult[4] = sharedValue;
    cResult[5] = tmp14;
  } else {
    class G {
      constructor() {
        const result = sharedValue.set(true);
      }
    }
  }
  const tmpResult6 = stateFromStores(token1[12]);
  token1 = tmpResult6.useToken(tmp4(tmp2[8]).colors.BACKGROUND_SURFACE_HIGH);
  const tmpResult7 = stateFromStores(token1[12]);
  const token2 = tmpResult7.useToken(tmp4(tmp2[8]).colors.BACKGROUND_BRAND);
  const tmpResult8 = stateFromStores(token1[14]);
  class A {
    constructor() {
      const obj = spring;
      const obj2 = { backgroundColor: obj.withSpring(stateFromStores ? token2 : token1, MODE_CHANGE_PHYSICS, "animate-always") };
      return obj2;
    }
  }
  A.__closure = { withSpring: stateFromStores(token1[15]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS };
  A.__workletHash = 13334573793151;
  A.__initData = __initData;
  ({ withSpring: stateFromStores(token1[15]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS });
  const animatedStyle = tmpResult8.useAnimatedStyle(A);
  const enableHome = token2.useContext(tmp(tmp2[16]).HomeDrawerStateContext).enableHome;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
      constructor() {
        const result = sharedValue.set(true);
      }
    }
    tmp19[0] = handlePress;
    cResult[6] = tmp19;
  } else {
    class G {
      constructor() {
        const result = sharedValue.set(true);
      }
    }
  }
  sharedValue(token1[17])(tmp19);
  const container = tmp6.container;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
      constructor() {
        const result = sharedValue.set(true);
      }
    }
    const stringResult = obj9.string(stateFromStores(token1[18]).t["3S2xmm"]);
    cResult[7] = stringResult;
    tmp22 = stringResult;
  } else {
    class G {
      constructor() {
        const result = sharedValue.set(true);
      }
    }
  }
  if (cResult[8] !== stateFromStores) {
    class G {
      constructor() {
        const result = sharedValue.set(true);
      }
    }
    tmp25[0] = stateFromStores;
    cResult[8] = stateFromStores;
    cResult[9] = tmp25;
  } else {
    class G {
      constructor() {
        const result = sharedValue.set(true);
      }
    }
  }
  if (cResult[10] === animatedStyle) {
    class G {
      constructor() {
        const result = sharedValue.set(true);
      }
    }
    if (cResult[13] !== tmp6.icon) {
      class G {
        constructor() {
          const result = sharedValue.set(true);
        }
      }
      const obj4 = { style: tmp6.icon, source: sharedValue(token1[19]), resizeMode: "contain" };
      cResult[13] = tmp6.icon;
      cResult[14] = closure_12(closure_5, obj4);
      const tmp30 = closure_12(closure_5, obj4);
    } else {
      class G {
        constructor() {
          const result = sharedValue.set(true);
        }
      }
    }
    if (cResult[15] !== (true === stateFromStores)) {
      class G {
        constructor() {
          const result = sharedValue.set(true);
        }
      }
      const obj5 = { selected: true === stateFromStores };
      cResult[15] = true === stateFromStores;
      cResult[16] = closure_12(stateFromStores(token1[20]).UnreadIndicator, obj5);
      const tmp33 = closure_12(stateFromStores(token1[20]).UnreadIndicator, obj5);
    } else {
      class G {
        constructor() {
          const result = sharedValue.set(true);
        }
      }
    }
    if (cResult[17] === tmp6.guildIndicator) {
      class G {
        constructor() {
          const result = sharedValue.set(true);
        }
      }
      if (cResult[20] === G) {
        class G {
          constructor() {
            const result = sharedValue.set(true);
          }
        }
      }
      const obj6 = { style: container, onPressIn: G, onPressOut: tmp14, onPress: handlePress, accessible: true, accessibilityRole: "button", accessibilityLabel: tmp22, accessibilityState: tmp25, hitSlop, children: items1 };
      items1 = [tmp26, tmp28, tmp34];
      cResult[20] = G;
      cResult[21] = tmp14;
      cResult[22] = tmp6.container;
      cResult[23] = tmp34;
      cResult[24] = tmp25;
      cResult[25] = tmp26;
      cResult[26] = tmp28;
      cResult[27] = closure_13(closure_4, obj6);
      closure_13(closure_4, obj6);
      class A {
        constructor() {
          const obj = spring;
          const obj2 = { backgroundColor: obj.withSpring(stateFromStores ? token2 : token1, MODE_CHANGE_PHYSICS, "animate-always") };
          return obj2;
        }
      }
    }
    const obj7 = { style: tmp6.guildIndicator, children: tmp32 };
    cResult[17] = tmp6.guildIndicator;
    cResult[18] = tmp32;
    cResult[19] = closure_12(closure_6, obj7);
    const tmp37 = closure_12(closure_6, obj7);
  }
  const obj8 = { style: items2 };
  items2 = [tmp6.backdrop, animatedStyle];
  cResult[10] = animatedStyle;
  cResult[11] = tmp6.backdrop;
  cResult[12] = closure_12(sharedValue(token1[14]).View, obj8);
  const tmp27 = closure_12(sharedValue(token1[14]).View, obj8);
}) : (() => {
  let HomeDrawerSharedItem;
  let Text;
  let guildId;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  let obj13;
  let obj16;
  let obj17;
  let sharedValue;
  let stateFromStores;
  let token1;
  let token2;
  let obj = stateFromStores(token1[12]);
  const token = obj.useToken(sharedValue(token1[8]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = closure_14(token, closure_9());
  let obj2 = stateFromStores(token1[13]);
  const items = [SelectedGuildStore];
  stateFromStores = obj2.useStateFromStores(items, () => guildId.getGuildId() === EMPTY_NUX_SERVER);
  const obj3 = stateFromStores(token1[14]);
  const tmp3 = sharedValue;
  sharedValue = obj3.useSharedValue(false);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback = token2.useCallback(() => {
    const result = sharedValue.set(true);
  }, items1);
  const callback1 = token2.useCallback(() => {
    const result = sharedValue.set(false);
  }, items2);
  const obj4 = stateFromStores(token1[12]);
  token1 = obj4.useToken(sharedValue(token1[8]).colors.BACKGROUND_SURFACE_HIGH);
  const obj5 = stateFromStores(token1[12]);
  token2 = obj5.useToken(sharedValue(token1[8]).colors.BACKGROUND_BRAND);
  const fn = function o() {
    const obj = spring;
    const obj2 = { backgroundColor: obj.withSpring(stateFromStores ? token2 : token1, MODE_CHANGE_PHYSICS, "animate-always") };
    return obj2;
  };
  const obj6 = stateFromStores(token1[14]);
  fn.__closure = { withSpring: stateFromStores(token1[15]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS };
  fn.__workletHash = 9303159016892;
  fn.__initData = __initData2;
  ({ withSpring: stateFromStores(token1[15]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS });
  const animatedStyle = obj6.useAnimatedStyle(fn);
  const enableHome = token2.useContext(stateFromStores(token1[16]).HomeDrawerStateContext).enableHome;
  const obj8 = { onPress: handlePress };
  const tmp13 = sharedValue(token1[17])(obj8);
  const obj9 = { style: tmp5.container, onPressIn: callback, onPressOut: callback1, onPress: handlePress, accessible: true, accessibilityRole: "button", accessibilityLabel: intl.string(stateFromStores(token1[18]).t["3S2xmm"]), accessibilityState: { selected: stateFromStores }, hitSlop, children: items4 };
  intl = stateFromStores(token1[18]).intl;
  const obj10 = { style: items3 };
  items3 = [tmp5.backdrop, animatedStyle];
  items4 = [closure_12(sharedValue(token1[14]).View, obj10), , ];
  const obj11 = { style: tmp5.icon, source: sharedValue(token1[19]), resizeMode: "contain" };
  items4[1] = closure_12(closure_5, obj11);
  const obj12 = { style: tmp5.guildIndicator, children: closure_12(stateFromStores(token1[20]).UnreadIndicator, obj13) };
  obj13 = { selected: true === stateFromStores };
  items4[2] = closure_12(closure_6, obj12);
  const obj14 = { style: tmp5.root, children: items5 };
  items5 = [closure_13(closure_4, obj9), ];
  let tmp15Result = null;
  closure_13(closure_4, obj9);
  const tmp17 = sharedValue(token1[21]);
  if (enableHome) {
    const obj15 = { style: tmp5.expandedChildren, collapsable: false, children: closure_12(HomeDrawerSharedItem, obj16) };
    const tmp3Result = tmp3(token1[21]);
    const merged = Object.assign(tmp13);
    obj16 = { title: closure_12(Text, obj17) };
    HomeDrawerSharedItem = tmp(tmp2[22]).HomeDrawerSharedItem;
    obj17 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: intl2.string(stateFromStores(token1[18]).t["3S2xmm"]) };
    Text = tmp(tmp2[23]).Text;
    intl2 = tmp(tmp2[18]).intl;
    tmp15Result = closure_12(tmp3Result, obj15);
  }
  items5[1] = tmp15Result;
  return closure_13(tmp17, obj14);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx");

export default memoResult;