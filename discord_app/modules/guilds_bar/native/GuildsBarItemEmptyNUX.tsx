// === Module 16592: GuildsBarItemEmptyNUX ===

// Module 16592 (GuildsBarItemEmptyNUX)
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5374 */;
import transitionToGuild from "transitionToGuild" /* 7043 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4899 */;

require = fn;
function handlePress() {
  transitionToGuild.transitionToGuild(EMPTY_NUX_SERVER);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const GuildsBarConstants = fn(16522);
({ GUILD_ITEM_HIT_SLOP: closure_8, useGuildWrapperSize: closure_9 } = GuildsBarConstants);
const EMPTY_NUX_SERVER = fn(1085).EMPTY_NUX_SERVER;
const MODE_CHANGE_PHYSICS = fn(11182).MODE_CHANGE_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5090);
let closure_14 = createStyles.createStyles((width, arg1) => {
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
  const obj2 = stateFromStores(token1[12]);
  stateFromStores = stateFromStores(token1[13]).useStateFromStores(tmp7, tmp8);
  const tmpResult = stateFromStores(token1[13]);
  sharedValue = stateFromStores(token1[14]).useSharedValue(false);
  if (cResult[2] !== sharedValue) {
    const fn2 = function w() {
      const result = sharedValue.set(true);
    };
    cResult[2] = sharedValue;
    cResult[3] = fn2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== sharedValue) {
    const fn3 = function f() {
      const result = sharedValue.set(false);
    };
    cResult[4] = sharedValue;
    cResult[5] = fn3;
    let tmp13 = fn3;
  } else {
    tmp13 = cResult[5];
  }
  const tmpResult5 = stateFromStores(token1[14]);
  token1 = stateFromStores(token1[12]).useToken(tmp4(tmp2[8]).colors.BACKGROUND_SURFACE_HIGH);
  const tmpResult6 = stateFromStores(token1[12]);
  const token2 = stateFromStores(token1[12]).useToken(tmp4(tmp2[8]).colors.BACKGROUND_BRAND);
  const tmpResult7 = stateFromStores(token1[12]);
  class A {
    constructor() {
      obj = closure_0(closure_2[15]);
      obj1 = { backgroundColor: obj.withSpring(closure_0 ? closure_3 : closure_2, MODE_CHANGE_PHYSICS, "animate-always") };
      return obj1;
    }
  }
  const tmpResult8 = stateFromStores(token1[14]);
  A.__closure = { withSpring: stateFromStores(token1[15]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS };
  A.__workletHash = 13334573793151;
  A.__initData = __initData;
  const animatedStyle = tmpResult8.useAnimatedStyle(A);
  const enableHome = token2.useContext(tmp(tmp2[16]).HomeDrawerStateContext).enableHome;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { onPress: handlePress };
    cResult[6] = obj4;
    let tmp17 = obj4;
  } else {
    tmp17 = cResult[6];
  }
  const tmp19 = sharedValue(token1[17])(tmp17);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[18]).intl;
    const stringResult = intl.string(tmp(tmp2[18]).t["3S2xmm"]);
    cResult[7] = stringResult;
    let tmp20 = stringResult;
  } else {
    tmp20 = cResult[7];
  }
  if (cResult[8] !== stateFromStores) {
    const obj5 = { selected: stateFromStores };
    cResult[8] = stateFromStores;
    cResult[9] = obj5;
    let tmp22 = obj5;
  } else {
    tmp22 = cResult[9];
  }
  if (cResult[10] === animatedStyle) {
    if (cResult[11] === tmp6.backdrop) {
      let tmp23 = cResult[12];
    }
    if (cResult[13] !== tmp6.icon) {
      const obj6 = { style: tmp6.icon, source: tmp4(tmp2[19]), resizeMode: "contain" };
      const tmp28 = closure_12(closure_5, obj6);
      cResult[13] = tmp6.icon;
      cResult[14] = tmp28;
      let tmp25 = tmp28;
    } else {
      tmp25 = cResult[14];
    }
    if (cResult[15] !== (true === stateFromStores)) {
      const obj7 = { selected: tmp29 };
      const tmp32 = closure_12(tmp(tmp2[20]).UnreadIndicator, obj7);
      cResult[15] = tmp29;
      cResult[16] = tmp32;
      let tmp30 = tmp32;
    } else {
      tmp30 = cResult[16];
    }
    if (cResult[17] === tmp6.guildIndicator) {
      if (cResult[18] === tmp30) {
        let tmp33 = cResult[19];
      }
      if (cResult[20] === tmp12) {
        if (cResult[21] === tmp13) {
          if (cResult[22] === tmp6.container) {
            if (cResult[23] === tmp33) {
              if (cResult[24] === tmp22) {
                if (cResult[25] === tmp23) {
                  if (cResult[28] === enableHome) {
                    if (cResult[29] === tmp19) {
                      if (cResult[30] === tmp6.expandedChildren) {
                        let tmp43 = cResult[31];
                      }
                      if (cResult[32] === tmp37) {
                        if (cResult[33] === tmp6.root) {
                          if (cResult[34] === tmp43) {
                            let tmp50 = cResult[35];
                          }
                          return tmp50;
                        }
                      }
                      const obj8 = { style: tmp6.root, children: null };
                      const items1 = [tmp37, tmp43];
                      obj8.children = items1;
                      const tmp52 = closure_13(tmp4(tmp2[21]), obj8);
                      cResult[32] = tmp37;
                      cResult[33] = tmp6.root;
                      cResult[34] = tmp43;
                      cResult[35] = tmp52;
                      tmp50 = tmp52;
                    }
                  }
                  let tmp44 = null;
                  if (enableHome) {
                    const obj9 = {};
                    const merged = Object.assign(tmp19);
                    obj9.style = tmp6.expandedChildren;
                    obj9.collapsable = false;
                    const obj10 = { title: null };
                    const obj11 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
                    const intl2 = tmp(tmp2[18]).intl;
                    obj11.children = intl2.string(tmp(tmp2[18]).t["3S2xmm"]);
                    obj10.title = closure_12(tmp(tmp2[23]).Text, obj11);
                    obj9.children = closure_12(tmp(tmp2[22]).HomeDrawerSharedItem, obj10);
                    tmp44 = closure_12(tmp4(tmp2[21]), obj9);
                    const tmp4Result = tmp4(tmp2[21]);
                  }
                  cResult[28] = enableHome;
                  cResult[29] = tmp19;
                  cResult[30] = tmp6.expandedChildren;
                  cResult[31] = tmp44;
                  tmp43 = tmp44;
                }
              }
            }
          }
        }
      }
      const obj12 = { style: tmp6.container, onPressIn: tmp12, onPressOut: tmp13, onPress: handlePress, accessible: true, accessibilityRole: "button", accessibilityLabel: tmp20, accessibilityState: tmp22, hitSlop, children: null };
      const items2 = [tmp23, tmp25, tmp33];
      obj12.children = items2;
      cResult[20] = tmp12;
      cResult[21] = tmp13;
      cResult[22] = tmp6.container;
      cResult[23] = tmp33;
      cResult[24] = tmp22;
      cResult[25] = tmp23;
      cResult[26] = tmp25;
      cResult[27] = closure_13(closure_4, obj12);
      class A {
        constructor() {
          obj = closure_0(closure_2[15]);
          obj1 = { backgroundColor: obj.withSpring(closure_0 ? closure_3 : closure_2, MODE_CHANGE_PHYSICS, "animate-always") };
          return obj1;
        }
      }
      const tmp42 = closure_13(closure_4, obj12);
    }
    const obj13 = { style: tmp6.guildIndicator, children: tmp30 };
    const tmp36 = closure_12(closure_6, obj13);
    cResult[17] = tmp6.guildIndicator;
    cResult[18] = tmp30;
    cResult[19] = tmp36;
    tmp33 = tmp36;
  }
  const obj14 = { style: null };
  const items3 = [tmp6.backdrop, animatedStyle];
  obj14.style = items3;
  const tmp24 = closure_12(sharedValue(token1[14]).View, obj14);
  cResult[10] = animatedStyle;
  cResult[11] = tmp6.backdrop;
  cResult[12] = tmp24;
  tmp23 = tmp24;
  const obj3 = { withSpring: stateFromStores(token1[15]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS };
}) : (function GuildsBarEmptyNUX() {
  const token = stateFromStores(token1[12]).useToken(sharedValue(token1[8]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = closure_14(token, closure_9());
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
  const items4 = [closure_12(sharedValue(token1[14]).View, obj10), , ];
  const obj7 = { withSpring: stateFromStores(token1[15]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS };
  const obj8 = { onPress: handlePress };
  items4[1] = closure_12(closure_5, { style: tmp5.icon, source: sharedValue(token1[19]), resizeMode: "contain" });
  const obj12 = { style: tmp5.guildIndicator, children: closure_12(stateFromStores(token1[20]).UnreadIndicator, { selected: true === stateFromStores }) };
  items4[2] = closure_12(closure_6, obj12);
  obj9.children = items4;
  const obj11 = { style: tmp5.icon, source: sharedValue(token1[19]), resizeMode: "contain" };
  const obj13 = { selected: true === stateFromStores };
  const obj14 = { style: tmp5.root, children: null };
  const items5 = [closure_13(closure_4, obj9), ];
  let tmp15Result = null;
  const tmp16 = closure_13(closure_4, obj9);
  if (token2.useContext(stateFromStores(token1[16]).HomeDrawerStateContext).enableHome) {
    const obj15 = {};
    const merged = Object.assign(tmp13);
    obj15.style = tmp5.expandedChildren;
    obj15.collapsable = false;
    const obj16 = { title: null };
    const obj17 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
    const intl2 = tmp(tmp2[18]).intl;
    obj17.children = intl2.string(tmp(tmp2[18]).t["3S2xmm"]);
    obj16.title = closure_12(tmp(tmp2[23]).Text, obj17);
    obj15.children = closure_12(tmp(tmp2[22]).HomeDrawerSharedItem, obj16);
    tmp15Result = closure_12(tmp3(tmp2[21]), obj15);
    const tmp3Result = tmp3(tmp2[21]);
  }
  items5[1] = tmp15Result;
  obj14.children = items5;
  return closure_13(sharedValue(token1[21]), obj14);
}));