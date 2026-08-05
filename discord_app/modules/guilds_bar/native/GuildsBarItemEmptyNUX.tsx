// discord_app/modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import handleConnectionOpen from "handleConnectionOpen";
import ME from "ME";
import { MODE_CHANGE_PHYSICS } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";

let c4;
let c5;
let c9;
let closure_12;
let closure_6;
let metroImportAll;
let unpackModuleId;
const require = arg1;
let c3 = importAllResult;
({ Pressable: c4, Image: c5, View: closure_6 } = get_ActivityIndicator);
({ DM_WIDTH: metroImportAll, EMPTY_NUX_SERVER: c9 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = { top: 4, left: 12, bottom: 4, right: 12 };
let closure_14 = createCacheKey.createStyles((width) => {
  let obj = { container: null, guildIndicator: null, icon: null, backdrop: null };
  obj = { position: "relative", flexDirection: "row", alignItems: "center", marginTop: Themes.modules.mobile.GUILD_BAR_ITEM_PADDING, height: 55, width };
  obj[0] = obj;
  obj = { position: "absolute", left: -closure_8 - width / 2, top: 4 };
  obj[1] = obj;
  obj[2] = { width: 59, height: 55, marginLeft: -3, marginRight: -6 };
  obj[3] = { position: "absolute", top: 16, width, height: width - 10, borderRadius: width / 3 };
  return obj;
});
let closure_15 = { code: "function GuildsBarItemEmptyNUXTsx1(){const{withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,'animate-always')};}" };
const memoResult = importAllResult.memo(function GuildsBarEmptyNUX() {
  let obj = stateFromStores(token[8]);
  const tmp = callback3(obj.useToken(sharedValue(token[7]).modules.mobile.GUILD_BAR_ITEM_SIZE));
  let obj1 = stateFromStores(token[9]);
  const items = [handleConnectionOpen];
  stateFromStores = obj1.useStateFromStores(items, () => guildId.getGuildId() === closure_9);
  const callback = token1.useCallback(() => {
    stateFromStores(token[10]).transitionToGuild(closure_9);
  }, []);
  let obj2 = stateFromStores(token[11]);
  sharedValue = obj2.useSharedValue(false);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback1 = token1.useCallback(() => {
    const result = sharedValue.set(true);
  }, items1);
  const callback2 = token1.useCallback(() => {
    const result = sharedValue.set(false);
  }, items2);
  let obj3 = stateFromStores(token[8]);
  token = obj3.useToken(sharedValue(token[7]).colors.BACKGROUND_SURFACE_HIGH);
  token1 = stateFromStores(token[8]).useToken(sharedValue(token[7]).colors.BACKGROUND_BRAND);
  const obj5 = stateFromStores(token[8]);
  const fn = function o() {
    let obj = stateFromStores(token[12]);
    obj = { backgroundColor: obj.withSpring(stateFromStores ? token1 : token, outer1_10, "animate-always") };
    return obj;
  };
  obj = { withSpring: stateFromStores(token[12]).withSpring, selected: stateFromStores, activeColor: token1, inactiveColor: token, MODE_CHANGE_PHYSICS };
  fn.__closure = obj;
  fn.__workletHash = 15012639840543;
  fn.__initData = closure_15;
  obj = { style: tmp.container, onPressIn: callback1, onPressOut: callback2, onPress: callback, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, hitSlop: null, children: null };
  const animatedStyle = stateFromStores(token[11]).useAnimatedStyle(fn);
  const intl = stateFromStores(token[13]).intl;
  obj[6] = intl.string(stateFromStores(token[13]).t["3S2xmm"]);
  obj[7] = { selected: stateFromStores };
  obj[8] = closure_13;
  const items3 = [tmp.backdrop, animatedStyle];
  const items4 = [callback(sharedValue(token[11]).View, { style: items3 }), , ];
  obj1 = { style: tmp.icon, source: sharedValue(token[14]), resizeMode: "contain" };
  items4[1] = callback(closure_5, obj1);
  obj2 = { style: tmp.guildIndicator, children: callback(stateFromStores(token[15]).UnreadIndicator, obj3) };
  obj3 = { selected: true === stateFromStores };
  items4[2] = callback(closure_6, obj2);
  obj[9] = items4;
  return callback2(closure_4, obj);
});
let result = require("handleConnectionOpen").fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx");

export default memoResult;