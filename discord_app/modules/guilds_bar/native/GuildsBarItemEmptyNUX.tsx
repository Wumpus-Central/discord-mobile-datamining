// === Module 15961: GuildsBarItemEmptyNUX ===

// Module 15961 (GuildsBarItemEmptyNUX)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5273 */;
import transitionToGuild from "transitionToGuild" /* 6755 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4652 */;

require = fn;
function handlePress() {
  transitionToGuild.transitionToGuild(EMPTY_NUX_SERVER);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const GuildsBarConstants = fn(15892);
({ GUILD_ITEM_HIT_SLOP: closure_8, useGuildWrapperSize: closure_9 } = GuildsBarConstants);
const EMPTY_NUX_SERVER = fn(1074).EMPTY_NUX_SERVER;
const MODE_CHANGE_PHYSICS = fn(10538).MODE_CHANGE_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4829);
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
const __initData = { code: "function GuildsBarItemEmptyNUXTsx1(){const{withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,'animate-always')};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx");

export default noop.memo(function GuildsBarEmptyNUX() {
  const token = stateFromStores(token1[10]).useToken(sharedValue(token1[8]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = closure_14(token, closure_9());
  let obj = stateFromStores(token1[10]);
  const tmp3 = sharedValue;
  const items = [SelectedGuildStore];
  stateFromStores = stateFromStores(token1[11]).useStateFromStores(items, () => guildId.getGuildId() === EMPTY_NUX_SERVER);
  const obj2 = stateFromStores(token1[11]);
  sharedValue = stateFromStores(token1[12]).useSharedValue(false);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback = token2.useCallback(() => {
    const result = sharedValue.set(true);
  }, items1);
  const callback1 = token2.useCallback(() => {
    const result = sharedValue.set(false);
  }, items2);
  const obj3 = stateFromStores(token1[12]);
  token1 = stateFromStores(token1[10]).useToken(sharedValue(token1[8]).colors.BACKGROUND_SURFACE_HIGH);
  const obj4 = stateFromStores(token1[10]);
  token2 = stateFromStores(token1[10]).useToken(sharedValue(token1[8]).colors.BACKGROUND_BRAND);
  const obj5 = stateFromStores(token1[10]);
  const fn = function o() {
    return { backgroundColor: spring.withSpring(stateFromStores ? token2 : token1, MODE_CHANGE_PHYSICS, "animate-always") };
  };
  const obj6 = stateFromStores(token1[12]);
  fn.__closure = { withSpring: stateFromStores(token1[13]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS };
  fn.__workletHash = 15012639840543;
  fn.__initData = __initData;
  const animatedStyle = obj6.useAnimatedStyle(fn);
  const tmp13 = sharedValue(token1[15])({ onPress: handlePress });
  const obj9 = { style: tmp5.container, onPressIn: callback, onPressOut: callback1, onPress: handlePress, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, hitSlop: null, children: null };
  const intl = stateFromStores(token1[16]).intl;
  obj9.accessibilityLabel = intl.string(stateFromStores(token1[16]).t["3S2xmm"]);
  obj9.accessibilityState = { selected: stateFromStores };
  obj9.hitSlop = hitSlop;
  const obj10 = { style: null };
  const items3 = [tmp5.backdrop, animatedStyle];
  obj10.style = items3;
  const items4 = [closure_12(sharedValue(token1[12]).View, obj10), , ];
  const obj7 = { withSpring: stateFromStores(token1[13]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS };
  const obj8 = { onPress: handlePress };
  items4[1] = closure_12(closure_5, { style: tmp5.icon, source: sharedValue(token1[17]), resizeMode: "contain" });
  const obj12 = { style: tmp5.guildIndicator, children: closure_12(stateFromStores(token1[18]).UnreadIndicator, { selected: true === stateFromStores }) };
  items4[2] = closure_12(closure_6, obj12);
  obj9.children = items4;
  const obj11 = { style: tmp5.icon, source: sharedValue(token1[17]), resizeMode: "contain" };
  const obj13 = { selected: true === stateFromStores };
  const obj14 = { style: tmp5.root, children: null };
  const items5 = [closure_13(closure_4, obj9), ];
  let tmp15Result = null;
  const tmp16 = closure_13(closure_4, obj9);
  if (token2.useContext(stateFromStores(token1[14]).HomeDrawerStateContext).enableHome) {
    const obj15 = {};
    const merged = Object.assign(tmp13);
    obj15.style = tmp5.expandedChildren;
    obj15.collapsable = false;
    const obj16 = { title: null };
    const obj17 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
    const intl2 = tmp(tmp2[16]).intl;
    obj17.children = intl2.string(tmp(tmp2[16]).t["3S2xmm"]);
    obj16.title = closure_12(tmp(tmp2[21]).Text, obj17);
    obj15.children = closure_12(tmp(tmp2[20]).HomeDrawerSharedItem, obj16);
    tmp15Result = closure_12(tmp3(tmp2[19]), obj15);
    const tmp3Result = tmp3(tmp2[19]);
  }
  items5[1] = tmp15Result;
  obj14.children = items5;
  return closure_13(sharedValue(token1[19]), obj14);
});