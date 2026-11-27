// === Module 18143: GuildsBarItemUnavailableGuilds ===

// Module 18143 (GuildsBarItemUnavailableGuilds)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import FastImageDefault from "FastImage" /* 5730 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6046 */;
import _modDef18132 from "module_18132" /* 18132 */;
import noop from "module_19" /* 19 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 6166 */;

require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
const createStyles = fn(5043);
const obj = { unavailableGuilds: { marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING, justifyContent: "center", alignItems: "center" }, unavailableGuildsIcon: null };
let size = { width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj.unavailableGuildsIcon = size;
let closure_6 = createStyles.createStyles(obj);
let obj3 = { marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING, justifyContent: "center", alignItems: "center" };
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx");

export default noop.memo(function GuildsBarItemUnavailableGuilds() {
  const tmp = closure_6();
  items = [GuildAvailabilityStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => GuildAvailabilityStore.totalUnavailableGuilds);
  let tmp5 = null;
  if (stateFromStores > 0) {
    let obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    let intl = tmp2(1112).intl;
    const obj3 = { count: stateFromStores };
    obj2.accessibilityLabel = intl.formatToPlainString(tmp2(1112).t["MEpX+2"], obj3);
    obj2.onPress = function onPress() {
      const obj2 = { title: null, body: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.R0RpRX);
      const intl2 = util.intl;
      obj2.body = intl2.format(util.t["TnH05/"], { count: stateFromStores });
      AlertActionCreatorsDefault.show(obj2);
    };
    obj2.style = tmp.unavailableGuilds;
    const obj4 = { style: tmp.unavailableGuildsIcon, source: _modDef18132 };
    obj2.children = jsx(FastImageDefault, { style: tmp.unavailableGuildsIcon, source: _modDef18132 });
    tmp5 = <Pressable accessibilityRole="button" accessibilityLabel={null} onPress={null} style={null}>{null}</Pressable>;
  }
  return tmp5;
});