// === Module 16350: handlePress ===

// Module 16350 (handlePress)
import ThemesDefault from "Themes" /* 576 */;
import transitionToGuild from "transitionToGuild" /* 7342 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "handleConnectionOpen" /* 4381 */;
import GUILD_ITEM_SIZE from "GUILD_ITEM_SIZE" /* 16285 */;
import { EMPTY_NUX_SERVER } from "ME" /* 1074 */;
import { MODE_CHANGE_PHYSICS } from "MODE_CHANGE_PHYSICS" /* 11084 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function handlePress() {
  transitionToGuild.transitionToGuild(EMPTY_NUX_SERVER);
}
let c3 = importAllResult;
({ Pressable: c4, Image: c5, View: closure_6 } = get_ActivityIndicator);
({ GUILD_ITEM_HIT_SLOP: closure_8, useGuildWrapperSize: c9 } = GUILD_ITEM_SIZE);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = createCacheKey.createStyles((width) => {
  const diff = width - 10;
  let obj = { root: null, container: null, guildIndicator: null, icon: null, backdrop: null, expandedChildren: null };
  obj = { alignSelf: "stretch", paddingLeft: closure_8.left, marginTop: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_PADDING };
  obj[0] = obj;
  obj[1] = { position: "relative", flexDirection: "row", alignItems: "center", height: 55, width };
  obj = { position: "absolute", left: -closure_8.left, top: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN };
  obj[2] = obj;
  obj[3] = { width: 59, height: 55, marginLeft: -3 };
  obj[4] = { position: "absolute", top: 16, width, height: diff, borderRadius: ThemesDefault.modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS };
  obj[5] = { position: "absolute", left: arg1 + 16, right: 8, top: 16, height: diff, flexDirection: "row", alignItems: "center" };
  return obj;
});
let closure_16 = { code: "function GuildsBarItemEmptyNUXTsx1(){const{withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,'animate-always')};}" };
const memoResult = importAllResult.memo(function GuildsBarEmptyNUX() {
  let obj = stateFromStores(token1[10]);
  const token = obj.useToken(sharedValue(token1[8]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = callback4(token, callback());
  obj1 = stateFromStores(token1[11]);
  const items = [closure_7];
  stateFromStores = obj1.useStateFromStores(items, () => guildId.getGuildId() === closure_10);
  let obj2 = stateFromStores(token1[12]);
  sharedValue = obj2.useSharedValue(false);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  callback = token2.useCallback(() => {
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
    let obj = stateFromStores(token1[13]);
    obj = { backgroundColor: obj.withSpring(stateFromStores ? token2 : token1, closure_1_11, "animate-always") };
    return obj;
  };
  obj = { withSpring: stateFromStores(token1[13]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS };
  fn.__closure = obj;
  fn.__workletHash = 15012639840543;
  fn.__initData = closure_16;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  obj = { onPress: handlePress };
  const tmp13 = sharedValue(token1[15])(obj);
  obj1 = { style: tmp5.container, onPressIn: callback, onPressOut: callback1, onPress: handlePress, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, hitSlop: null, children: null };
  const intl = stateFromStores(token1[16]).intl;
  obj1[6] = intl.string(stateFromStores(token1[16]).t["3S2xmm"]);
  obj1[7] = { selected: stateFromStores };
  obj1[8] = closure_8;
  const items3 = [tmp5.backdrop, animatedStyle];
  const items4 = [callback2(sharedValue(token1[12]).View, { style: items3 }), , ];
  obj2 = { style: tmp5.icon, source: sharedValue(token1[17]), resizeMode: "contain" };
  items4[1] = callback2(closure_5, obj2);
  obj3 = { style: tmp5.guildIndicator, children: callback2(stateFromStores(token1[18]).UnreadIndicator, obj4) };
  obj4 = { selected: true === stateFromStores };
  items4[2] = callback2(closure_6, obj3);
  obj1[9] = items4;
  obj5 = { style: tmp5.root, children: null };
  const items5 = [callback3(closure_4, obj1), ];
  let tmp15Result = null;
  const tmp14 = callback3;
  const tmp16 = callback3(closure_4, obj1);
  const tmp3 = sharedValue;
  if (token2.useContext(stateFromStores(token1[14]).HomeDrawerStateContext).enableHome) {
    const obj6 = {};
    const merged = Object.assign(tmp13);
    obj6.style = tmp5.expandedChildren;
    obj6.collapsable = false;
    const obj7 = { title: null };
    const obj8 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
    const intl2 = tmp(tmp2[16]).intl;
    obj8[3] = intl2.string(tmp(tmp2[16]).t["3S2xmm"]);
    obj7[0] = tmp15(tmp(tmp2[21]).Text, obj8);
    obj6.children = tmp15(tmp(tmp2[20]).HomeDrawerSharedItem, obj7);
    tmp15Result = tmp15(tmp3(tmp2[19]), obj6);
    const tmp3Result = tmp3(tmp2[19]);
  }
  items5[1] = tmp15Result;
  obj5[1] = items5;
  return tmp14(sharedValue(token1[19]), obj5);
});
let result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx");

export default memoResult;