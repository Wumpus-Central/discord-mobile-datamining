// discord_app/modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import _modDef16340 from "../../../../_runtime/metro/16340__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildAvailabilityStore from "../../../stores/GuildAvailabilityStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, Pressable: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { unavailableGuilds: null, unavailableGuildsIcon: null };
obj = {
  marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING,
  justifyContent: "center",
  alignItems: "center",
};
obj.unavailableGuilds = obj;
let size = {
  width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
  height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
};
obj.unavailableGuildsIcon = size;
let closure_7 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx");

export default noop.memo(function GuildsBarItemUnavailableGuilds() {
  const tmp = closure_7();
  let obj = stateFromStores(504);
  const items = [GuildAvailabilityStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildAvailabilityStore.totalUnavailableGuilds);
  let tmp5 = null;
  if (stateFromStores > 0) {
    obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    let intl = tmp2(1114).intl;
    obj = { count: stateFromStores };
    obj.accessibilityLabel = intl.formatToPlainString(tmp2(1114).t["MEpX+2"], obj);
    obj.onPress = function onPress() {
      let obj = { title: null, body: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.R0RpRX);
      const intl2 = util.intl;
      obj = { count: stateFromStores };
      obj.body = intl2.format(util.t["TnH05/"], obj);
      obj.show(obj);
    };
    obj.style = tmp.unavailableGuilds;
    const obj1 = { style: tmp.unavailableGuildsIcon, source: _modDef16340 };
    obj.children = <closure_3 style={tmp.unavailableGuildsIcon} source={_modDef16340} />;
    tmp5 = <closure_4 count={stateFromStores} />;
  }
  return tmp5;
});
