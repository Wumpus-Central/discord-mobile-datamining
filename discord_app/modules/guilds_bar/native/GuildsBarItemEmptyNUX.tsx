// discord_app/modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../stores/SelectedGuildStore.tsx";
import GUILD_ITEM_SIZE from "GuildsBarConstants.tsx";
import { EMPTY_NUX_SERVER } from "../../../Constants.tsx";
import { MODE_CHANGE_PHYSICS } from "../../main_tabs_v2/native/MainTabsConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function handlePress() {
  transitionToGuild.transitionToGuild(EMPTY_NUX_SERVER);
}
let c3 = importAllResult;
({ Pressable: c4, Image: c5, View: closure_6 } = get_ActivityIndicator);
({ GUILD_ITEM_HIT_SLOP: closure_8, useGuildWrapperSize: c9 } = GUILD_ITEM_SIZE);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let closure_15 = createCacheKey.createStyles((width) => {
  const diff = width - 10;
  let obj = { root: null, container: null, guildIndicator: null, icon: null, backdrop: null, expandedChildren: null };
  obj = { alignSelf: "stretch", paddingLeft: closure_8.left, marginTop: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_PADDING };
  obj[0] = obj;
  obj[1] = { position: "relative", flexDirection: "row", alignItems: "center", height: 55, width };
  obj = { position: "absolute", left: -closure_8.left, top: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN };
  obj[2] = obj;
  obj[3] = { width: 59, height: 55, marginLeft: -3 };
  obj[4] = { position: "absolute", top: 16, width, height: diff, borderRadius: ThemesDefault.modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS };
  obj[5] = { position: "absolute", left: arg1 + 16, right: 8, top: 16, height: diff, transformOrigin: "0% 50%", flexDirection: "row", alignItems: "center" };
  return obj;
});
let closure_17 = { code: "function GuildsBarItemEmptyNUXTsx1(){const{withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,'animate-always')};}" };
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
  const fn = function l() {
    let obj = stateFromStores(token1[13]);
    obj = { backgroundColor: obj.withSpring(stateFromStores ? token2 : token1, closure_1_11, "animate-always") };
    return obj;
  };
  obj = { withSpring: stateFromStores(token1[13]).withSpring, selected: stateFromStores, activeColor: token2, inactiveColor: token1, MODE_CHANGE_PHYSICS };
  fn.__closure = obj;
  fn.__workletHash = 15012639840543;
  fn.__initData = closure_17;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const context = token2.useContext(stateFromStores(token1[14]).HomeDrawerStateContext);
  ({ guildsBarIconDrawerStyle, guildsBarLabelDrawerStyle } = context.homeDrawerState);
  obj = { onPress: handlePress };
  const tmp14 = sharedValue(token1[15])(obj);
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
  const tmp17 = callback3(closure_4, obj1);
  obj5 = { style: tmp5.root, children: null };
  let tmp15Result = tmp17;
  if (context.enableHome) {
    const obj6 = { children: null };
    const obj7 = { style: null, children: null };
    obj7[0] = guildsBarIconDrawerStyle;
    obj7[1] = tmp17;
    const items5 = [tmp16(tmp3(tmp2[20]), obj7), ];
    const obj8 = {};
    const merged = Object.assign(tmp14);
    const items6 = [tmp5.expandedChildren, guildsBarLabelDrawerStyle];
    obj8.style = items6;
    const obj9 = { title: null, subtitle: null };
    const obj10 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
    const intl2 = tmp(tmp2[16]).intl;
    obj10[3] = intl2.string(tmp(tmp2[16]).t["3S2xmm"]);
    obj9[0] = tmp16(tmp(tmp2[22]).Text, obj10);
    obj8.children = tmp16(tmp(tmp2[21]).HomeDrawerSharedItem, obj9);
    items5[1] = tmp16(tmp3(tmp2[20]), obj8);
    obj6[0] = items5;
    tmp15Result = callback3(closure_14, obj6);
    const tmp3Result = tmp3(tmp2[20]);
  }
  obj5[1] = tmp15Result;
  return callback2(sharedValue(token1[19]), obj5);
});
let result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx");

export default memoResult;