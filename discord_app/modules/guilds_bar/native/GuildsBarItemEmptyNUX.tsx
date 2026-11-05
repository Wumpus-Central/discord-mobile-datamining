// === Module 18707: GuildsBarItemEmptyNUX ===

// Module 18707 (GuildsBarItemEmptyNUX)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import FastImageDefault from "FastImage" /* 5854 */;
import NativeViewDefault from "NativeView" /* 7104 */;
import transitionToGuild from "transitionToGuild" /* 7664 */;
import _modDef9532 from "module_9532" /* 9532 */;
import usePressabilityDefault from "usePressability" /* 18655 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5174 */;

const require = globalThis.__r;

require = fn;
function handlePress() {
  transitionToGuild.transitionToGuild(EMPTY_NUX_SERVER);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const GuildsBarConstants = fn(18642);
({ GUILD_ITEM_HIT_SLOP: metroImportDefault, useGuildWrapperSize: closure_8 } = GuildsBarConstants);
const EMPTY_NUX_SERVER = fn(1072).EMPTY_NUX_SERVER;
const MODE_CHANGE_PHYSICS = fn(11711).MODE_CHANGE_PHYSICS;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5143);
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
let closure_15 = { code: "(function GuildsBarItemEmptyNUXTsx1(){let[withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS]=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,'animate-always')};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx");

export default noop.memo(function GuildsBarEmptyNUX() {
  const token = require("useToken").useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = closure_13(token, closure_8());
  const obj = require("useToken");
  items = [SelectedGuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => guildId.getGuildId() === EMPTY_NUX_SERVER);
  const obj2 = require("initialize");
  const sharedValue = require("module_1652").useSharedValue(false);
  _require = sharedValue;
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback = noop.useCallback(() => {
    const result = _undefined.set(true);
  }, items1);
  const callback1 = noop.useCallback(() => {
    const result = _undefined.set(false);
  }, items2);
  const obj3 = require("module_1652");
  const obj4 = noop;
  const token1 = require("useToken").useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  const obj5 = require("useToken");
  const token2 = require("useToken").useToken(nativeDefault.colors.BACKGROUND_BRAND);
  const obj6 = require("useToken");
  const items3 = [closure_15, require("spring/spring").withSpring, stateFromStores, token2, token1, MODE_CHANGE_PHYSICS];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items3;
  class GuildsBarItemEmptyNUXTsx1 {
    constructor() {
      obj = { backgroundColor: closure_0(closure_1 ? closure_2 : closure_3, closure_4, "animate-always") };
      return obj;
    }
  }
  const items4 = [tmp13, tmp14, tmp15, tmp16, tmp17];
  GuildsBarItemEmptyNUXTsx1.__closure = items4;
  GuildsBarItemEmptyNUXTsx1.__workletHash = 11514219811718;
  GuildsBarItemEmptyNUXTsx1.__initData = tmp12;
  const animatedStyle = require("module_1652").useAnimatedStyle(GuildsBarItemEmptyNUXTsx1);
  const tmp19 = usePressabilityDefault({ onPress: handlePress });
  const obj9 = { style: tmp5.container, onPressIn: callback, onPressOut: callback1, onPress: handlePress, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, hitSlop: null, children: null };
  const intl = tmp(1113).intl;
  obj9.accessibilityLabel = intl.string(require("util").t["3S2xmm"]);
  obj9.accessibilityState = { selected: stateFromStores };
  obj9.hitSlop = hitSlop;
  const obj10 = { style: null };
  const items5 = [tmp5.backdrop, animatedStyle];
  obj10.style = items5;
  const items6 = [closure_11(_modDef1652.View, obj10), , ];
  const obj11 = { style: tmp5.icon, source: null, resizeMode: "contain" };
  const obj7 = require("module_1652");
  const obj8 = { onPress: handlePress };
  obj11.source = _modDef9532;
  items6[1] = closure_11(FastImageDefault, obj11);
  const obj12 = { style: tmp5.guildIndicator, children: closure_11(require("GuildsBarAnimatedItemWrapper").UnreadIndicator, { selected: true === stateFromStores }) };
  items6[2] = closure_11(closure_5, obj12);
  obj9.children = items6;
  const obj13 = { selected: true === stateFromStores };
  const tmp3Result = FastImageDefault;
  const obj14 = { style: tmp5.root, children: null };
  const items7 = [closure_12(c4, obj9), ];
  let tmp21Result = null;
  const tmp23 = closure_12(c4, obj9);
  if (obj4.useContext(require("useHomeDrawerGesture").HomeDrawerStateContext).enableHome) {
    const obj15 = {};
    const merged = Object.assign(tmp19);
    obj15.style = tmp5.expandedChildren;
    obj15.collapsable = false;
    const obj16 = { title: null };
    const obj17 = { variant: "body-md/medium", color: "text-default", lineClamp: 1, children: null };
    const intl2 = tmp(1113).intl;
    obj17.children = intl2.string(tmp(1113).t["3S2xmm"]);
    obj16.title = closure_11(tmp(5763).Text, obj17);
    obj15.children = closure_11(tmp(18666).HomeDrawerSharedItem, obj16);
    tmp21Result = closure_11(tmp3(7104), obj15);
    const tmp3Result4 = tmp3(7104);
  }
  items7[1] = tmp21Result;
  obj14.children = items7;
  return closure_12(NativeViewDefault, obj14);
});