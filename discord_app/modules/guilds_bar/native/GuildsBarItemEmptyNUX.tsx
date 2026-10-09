// === Module 16715: GuildsBarItemEmptyNUX ===

// Module 16715 (GuildsBarItemEmptyNUX)
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5375 */;
import transitionToGuild from "transitionToGuild" /* 7046 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4900 */;

require = fn;
function handlePress() {
  transitionToGuild.transitionToGuild(EMPTY_NUX_SERVER);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const GuildsBarConstants = fn(16645);
({ GUILD_ITEM_HIT_SLOP: closure_7, useGuildWrapperSize: closure_8 } = GuildsBarConstants);
const EMPTY_NUX_SERVER = fn(1085).EMPTY_NUX_SERVER;
const MODE_CHANGE_PHYSICS = fn(10602).MODE_CHANGE_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5091);
let closure_13 = createStyles.createStyles((width, arg1) => {
  const diff = width - 10;
  const obj = { root: { alignSelf: "stretch", paddingLeft: hitSlop.left, marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING }, container: { position: "relative", flexDirection: "row", alignItems: "center", height: 55, width }, guildIndicator: null, icon: null, backdrop: null, expandedChildren: null };
  const rect = { position: "absolute", left: -hitSlop.left, top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN };
  obj.guildIndicator = rect;
  obj.icon = { width: 59, height: 55, marginLeft: -3 };
  const size = { position: "absolute", top: 16, width, height: diff, borderRadius: nativeDefault.modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS };
  obj.backdrop = size;
  const rect1 = { position: "absolute", left: arg1 + 16, right: 8, top: 16, height: diff, flexDirection: "row", alignItems: "center" };
  obj.expandedChildren = rect1;
  return obj;
});
const __initData = { code: "function GuildsBarItemEmptyNUXTsx1(){const{withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,\"animate-always\")};}" };
const __initData2 = { code: "function GuildsBarItemEmptyNUXTsx2(){const{withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,'animate-always')};}" };
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildsBarEmptyNUX() {
  const cResult = stateFromStores(token1[11]).c(36);
  let obj = stateFromStores(token1[11]);
  const token = stateFromStores(token1[12]).useToken(sharedValue(token1[8]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp6 = closure_13(token, closure_8());
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function c() {
      return guildId.getGuildId() === EMPTY_NUX_SERVER;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const obj2 = stateFromStores(token1[12]);
  stateFromStores = stateFromStores(token1[13]).useStateFromStores(tmp7, tmp8);
  const tmpResult = stateFromStores(token1[13]);
  sharedValue = stateFromStores(token1[14]).useSharedValue(false);
  if (cResult[2] !== sharedValue) {
    const fn2 = function v() {
      const result = sharedValue.set(true);
    };
    cResult[2] = sharedValue;
    cResult[3] = fn2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== sharedValue) {
    class H {
      constructor() {
        result = closure_1.set(false);
        return;
      }
    }
    cResult[4] = sharedValue;
    cResult[5] = H;
  } else {
    class H {
      constructor() {
        result = closure_1.set(false);
        return;
      }
    }
  }
  const tmpResult5 = stateFromStores(token1[14]);
  token1 = stateFromStores(token1[12]).useToken(tmp4(tmp2[8]).colors.BACKGROUND_SURFACE_HIGH);
  const tmpResult6 = stateFromStores(token1[12]);
  const token2 = stateFromStores(token1[12]).useToken(tmp4(tmp2[8]).colors.BACKGROUND_BRAND);
  const tmpResult7 = stateFromStores(token1[12]);
  class P {
    constructor() {
      obj = closure_0(closure_2[15]);
      obj1 = { backgroundColor: obj.withSpring(closure_0 ? closure_3 : closure_2, MODE_CHANGE_PHYSICS, "animate-always") };
      return obj1;
    }
  }
  const tmpResult8 = stateFromStores(token1[14]);
  P.__closure = { withSpring: stateFromStores(token1[15]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS };
  P.__workletHash = 13334573793151;
  P.__initData = __initData;
  const animatedStyle = tmpResult8.useAnimatedStyle(P);
  const enableHome = token2.useContext(tmp(tmp2[16]).HomeDrawerStateContext).enableHome;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor() {
        result = closure_1.set(false);
        return;
      }
    }
    tmp18[0] = handlePress;
    cResult[6] = tmp18;
  } else {
    class H {
      constructor() {
        result = closure_1.set(false);
        return;
      }
    }
  }
  sharedValue(token1[17])(tmp18);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor() {
        result = closure_1.set(false);
        return;
      }
    }
    const stringResult = obj9.string(tmp(tmp2[18]).t["3S2xmm"]);
    cResult[7] = stringResult;
    const tmp21 = stringResult;
  } else {
    class H {
      constructor() {
        result = closure_1.set(false);
        return;
      }
    }
  }
  if (cResult[8] !== stateFromStores) {
    class H {
      constructor() {
        result = closure_1.set(false);
        return;
      }
    }
    tmp24[0] = stateFromStores;
    cResult[8] = stateFromStores;
    cResult[9] = tmp24;
  } else {
    class H {
      constructor() {
        result = closure_1.set(false);
        return;
      }
    }
  }
  if (cResult[10] === animatedStyle) {
    class H {
      constructor() {
        result = closure_1.set(false);
        return;
      }
    }
    if (cResult[13] !== tmp6.icon) {
      class H {
        constructor() {
          result = closure_1.set(false);
          return;
        }
      }
      const obj4 = { style: tmp6.icon, source: tmp4(tmp2[20]), resizeMode: "contain" };
      const tmp29 = closure_11(tmp4(tmp2[19]), obj4);
      cResult[13] = tmp6.icon;
      cResult[14] = tmp29;
      const tmp4Result = tmp4(tmp2[19]);
    } else {
      class H {
        constructor() {
          result = closure_1.set(false);
          return;
        }
      }
    }
    if (cResult[15] !== (true === stateFromStores)) {
      class H {
        constructor() {
          result = closure_1.set(false);
          return;
        }
      }
      const obj5 = { selected: tmp30 };
      const tmp32 = closure_11(tmp(tmp2[21]).UnreadIndicator, obj5);
      cResult[15] = tmp30;
      cResult[16] = tmp32;
    } else {
      class H {
        constructor() {
          result = closure_1.set(false);
          return;
        }
      }
    }
    if (cResult[17] === tmp6.guildIndicator) {
      class H {
        constructor() {
          result = closure_1.set(false);
          return;
        }
      }
      if (cResult[20] === tmp12) {
        class H {
          constructor() {
            result = closure_1.set(false);
            return;
          }
        }
      }
      const obj6 = { style: tmp6.container, onPressIn: tmp12, onPressOut: H, onPress: handlePress, accessible: true, accessibilityRole: "button", accessibilityLabel: tmp21, accessibilityState: tmp24, hitSlop, children: null };
      const items1 = [tmp25, tmp27, tmp33];
      obj6.children = items1;
      cResult[20] = tmp12;
      cResult[21] = H;
      cResult[22] = tmp6.container;
      cResult[23] = tmp33;
      cResult[24] = tmp24;
      cResult[25] = tmp25;
      cResult[26] = tmp27;
      cResult[27] = closure_12(closure_4, obj6);
      class P {
        constructor() {
          obj = closure_0(closure_2[15]);
          obj1 = { backgroundColor: obj.withSpring(closure_0 ? closure_3 : closure_2, MODE_CHANGE_PHYSICS, "animate-always") };
          return obj1;
        }
      }
      const tmp41 = closure_12(closure_4, obj6);
    }
    const obj7 = { style: tmp6.guildIndicator, children: tmp31 };
    const tmp36 = closure_11(closure_5, obj7);
    cResult[17] = tmp6.guildIndicator;
    cResult[18] = tmp31;
    cResult[19] = tmp36;
  }
  const obj8 = { style: null };
  const items2 = [tmp6.backdrop, animatedStyle];
  obj8.style = items2;
  const tmp26 = closure_11(sharedValue(token1[14]).View, obj8);
  cResult[10] = animatedStyle;
  cResult[11] = tmp6.backdrop;
  cResult[12] = tmp26;
  const obj3 = { withSpring: stateFromStores(token1[15]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS };
}) : (function GuildsBarEmptyNUX() {
  const token = stateFromStores(token1[12]).useToken(sharedValue(token1[8]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = closure_13(token, closure_8());
  let obj = stateFromStores(token1[12]);
  const tmp3 = sharedValue;
  const items = [SelectedGuildStore];
  stateFromStores = stateFromStores(token1[13]).useStateFromStores(items, () => guildId.getGuildId() === EMPTY_NUX_SERVER);
  const obj2 = stateFromStores(token1[13]);
  sharedValue = stateFromStores(token1[14]).useSharedValue(false);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback = token2.useCallback(() => {
    const result = sharedValue.set(true);
  }, items1);
  const callback1 = token2.useCallback(() => {
    const result = sharedValue.set(false);
  }, items2);
  const obj3 = stateFromStores(token1[14]);
  token1 = stateFromStores(token1[12]).useToken(sharedValue(token1[8]).colors.BACKGROUND_SURFACE_HIGH);
  const obj4 = stateFromStores(token1[12]);
  token2 = stateFromStores(token1[12]).useToken(sharedValue(token1[8]).colors.BACKGROUND_BRAND);
  const obj5 = stateFromStores(token1[12]);
  const fn = function o() {
    return { backgroundColor: spring.withSpring(stateFromStores ? token2 : token1, MODE_CHANGE_PHYSICS, "animate-always") };
  };
  const obj6 = stateFromStores(token1[14]);
  fn.__closure = { withSpring: stateFromStores(token1[15]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS };
  fn.__workletHash = 9303159016892;
  fn.__initData = __initData2;
  const animatedStyle = obj6.useAnimatedStyle(fn);
  const tmp13 = sharedValue(token1[17])({ onPress: handlePress });
  const obj9 = { style: tmp5.container, onPressIn: callback, onPressOut: callback1, onPress: handlePress, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, hitSlop: null, children: null };
  const intl = stateFromStores(token1[18]).intl;
  obj9.accessibilityLabel = intl.string(stateFromStores(token1[18]).t["3S2xmm"]);
  obj9.accessibilityState = { selected: stateFromStores };
  obj9.hitSlop = hitSlop;
  const obj10 = { style: null };
  const items3 = [tmp5.backdrop, animatedStyle];
  obj10.style = items3;
  const items4 = [closure_11(sharedValue(token1[14]).View, obj10), , ];
  const obj11 = { style: tmp5.icon, source: null, resizeMode: "contain" };
  const obj7 = { withSpring: stateFromStores(token1[15]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS };
  const obj8 = { onPress: handlePress };
  obj11.source = sharedValue(token1[20]);
  items4[1] = closure_11(sharedValue(token1[19]), obj11);
  const obj12 = { style: tmp5.guildIndicator, children: closure_11(stateFromStores(token1[21]).UnreadIndicator, { selected: true === stateFromStores }) };
  items4[2] = closure_11(closure_5, obj12);
  obj9.children = items4;
  const obj13 = { selected: true === stateFromStores };
  const tmp16 = sharedValue(token1[19]);
  const obj14 = { style: tmp5.root, children: null };
  const items5 = [closure_12(closure_4, obj9), ];
  let tmp15Result = null;
  const tmp17 = closure_12(closure_4, obj9);
  if (token2.useContext(stateFromStores(token1[16]).HomeDrawerStateContext).enableHome) {
    const obj15 = {};
    const merged = Object.assign(tmp13);
    obj15.style = tmp5.expandedChildren;
    obj15.collapsable = false;
    const obj16 = { title: null };
    const obj17 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
    const intl2 = tmp(tmp2[18]).intl;
    obj17.children = intl2.string(tmp(tmp2[18]).t["3S2xmm"]);
    obj16.title = closure_11(tmp(tmp2[24]).Text, obj17);
    obj15.children = closure_11(tmp(tmp2[23]).HomeDrawerSharedItem, obj16);
    tmp15Result = closure_11(tmp3(tmp2[22]), obj15);
    const tmp3Result = tmp3(tmp2[22]);
  }
  items5[1] = tmp15Result;
  obj14.children = items5;
  return closure_12(sharedValue(token1[22]), obj14);
}));