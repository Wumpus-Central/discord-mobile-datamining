// discord_app/modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";

require = fn;
function handlePress() {
  transitionToGuild.transitionToGuild(EMPTY_NUX_SERVER);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const GuildsBarConstants = fn(16285);
({ GUILD_ITEM_HIT_SLOP: closure_8, useGuildWrapperSize: closure_9 } = GuildsBarConstants);
const EMPTY_NUX_SERVER = fn(1074).EMPTY_NUX_SERVER;
const MODE_CHANGE_PHYSICS = fn(11084).MODE_CHANGE_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4560);
let closure_14 = createStyles.createStyles((width, arg1) => {
  const diff = width - 10;
  let obj = { root: null, container: null, guildIndicator: null, icon: null, backdrop: null, expandedChildren: null };
  obj = {
    alignSelf: "stretch",
    paddingLeft: hitSlop.left,
    marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING,
  };
  obj.root = obj;
  obj.container = { position: "relative", flexDirection: "row", alignItems: "center", height: 55, width };
  const rect = { position: "absolute", left: -hitSlop.left, top: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN };
  obj.guildIndicator = rect;
  obj.icon = { width: 59, height: 55, marginLeft: -3 };
  const size = {
    position: "absolute",
    top: 16,
    width,
    height: diff,
    borderRadius: nativeDefault.modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS,
  };
  obj.backdrop = size;
  const rect1 = {
    position: "absolute",
    left: arg1 + 16,
    right: 8,
    top: 16,
    height: diff,
    flexDirection: "row",
    alignItems: "center",
  };
  obj.expandedChildren = rect1;
  return obj;
});
const __initData = {
  code: "function GuildsBarItemEmptyNUXTsx1(){const{withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,'animate-always')};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx");

export default noop.memo(function GuildsBarEmptyNUX() {
  let obj = stateFromStores(token1[10]);
  const token = obj.useToken(sharedValue(token1[8]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = closure_14(token, closure_9());
  let obj1 = stateFromStores(token1[11]);
  const items = [SelectedGuildStore];
  stateFromStores = obj1.useStateFromStores(items, () => guildId.getGuildId() === EMPTY_NUX_SERVER);
  let obj2 = stateFromStores(token1[12]);
  sharedValue = obj2.useSharedValue(false);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback = token2.useCallback(() => {
    const result = sharedValue.set(true);
  }, items1);
  const callback1 = token2.useCallback(() => {
    const result = sharedValue.set(false);
  }, items2);
  let obj3 = stateFromStores(token1[10]);
  token1 = obj3.useToken(sharedValue(token1[8]).colors.BACKGROUND_SURFACE_HIGH);
  let obj4 = stateFromStores(token1[10]);
  token2 = obj4.useToken(sharedValue(token1[8]).colors.BACKGROUND_BRAND);
  let obj5 = stateFromStores(token1[12]);
  const fn = function o() {
    let obj = spring;
    obj = { backgroundColor: obj.withSpring(stateFromStores ? token2 : token1, MODE_CHANGE_PHYSICS, "animate-always") };
    return obj;
  };
  obj = {
    withSpring: stateFromStores(token1[13]).withSpring,
    selected: stateFromStores,
    activeColor: token2,
    inactiveColor: token1,
    MODE_CHANGE_PHYSICS,
  };
  fn.__closure = obj;
  fn.__workletHash = 15012639840543;
  fn.__initData = __initData;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  obj = { onPress: handlePress };
  const tmp13 = sharedValue(token1[15])(obj);
  obj1 = {
    style: tmp5.container,
    onPressIn: callback,
    onPressOut: callback1,
    onPress: handlePress,
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityState: null,
    hitSlop: null,
    children: null,
  };
  const intl = stateFromStores(token1[16]).intl;
  obj1.accessibilityLabel = intl.string(stateFromStores(token1[16]).t["3S2xmm"]);
  obj1.accessibilityState = { selected: stateFromStores };
  obj1.hitSlop = hitSlop;
  obj2 = { style: null };
  const items3 = [tmp5.backdrop, animatedStyle];
  obj2.style = items3;
  const items4 = [closure_12(sharedValue(token1[12]).View, obj2), ,];
  obj3 = { style: tmp5.icon, source: sharedValue(token1[17]), resizeMode: "contain" };
  items4[1] = closure_12(closure_5, obj3);
  obj4 = { style: tmp5.guildIndicator, children: null };
  obj5 = { selected: true === stateFromStores };
  obj4.children = closure_12(stateFromStores(token1[18]).UnreadIndicator, obj5);
  items4[2] = closure_12(closure_6, obj4);
  obj1.children = items4;
  const obj6 = { style: tmp5.root, children: null };
  const items5 = [closure_13(closure_4, obj1)];
  let tmp15Result = null;
  const tmp16 = closure_13(closure_4, obj1);
  const tmp3 = sharedValue;
  if (token2.useContext(stateFromStores(token1[14]).HomeDrawerStateContext).enableHome) {
    const obj7 = {};
    const merged = Object.assign(tmp13);
    obj7.style = tmp5.expandedChildren;
    obj7.collapsable = false;
    const obj8 = { title: null };
    const obj9 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
    const intl2 = tmp(tmp2[16]).intl;
    obj9.children = intl2.string(tmp(tmp2[16]).t["3S2xmm"]);
    obj8.title = closure_12(tmp(tmp2[21]).Text, obj9);
    obj7.children = closure_12(tmp(tmp2[20]).HomeDrawerSharedItem, obj8);
    tmp15Result = closure_12(tmp3(tmp2[19]), obj7);
    const tmp3Result = tmp3(tmp2[19]);
  }
  items5[1] = tmp15Result;
  obj6.children = items5;
  return closure_13(sharedValue(token1[19]), obj6);
});
