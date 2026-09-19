// discord_app/modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import _modDef16674 from "../../../../_runtime/metro/16674__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildAvailabilityStore from "../../../stores/GuildAvailabilityStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, Pressable: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4756);
const obj = {
  unavailableGuilds: {
    marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING,
    justifyContent: "center",
    alignItems: "center",
  },
  unavailableGuildsIcon: null,
};
let size = {
  width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
  height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
};
obj.unavailableGuildsIcon = size;
let closure_7 = createStyles.createStyles(obj);
let obj3 = {
  marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING,
  justifyContent: "center",
  alignItems: "center",
};
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx");

export default noop.memo(function GuildsBarItemUnavailableGuilds() {
  const tmp = closure_7();
  const items = [GuildAvailabilityStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => GuildAvailabilityStore.totalUnavailableGuilds);
  let tmp5 = null;
  if (stateFromStores > 0) {
    let obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    let intl = tmp2(1115).intl;
    const obj3 = { count: stateFromStores };
    obj2.accessibilityLabel = intl.formatToPlainString(tmp2(1115).t["MEpX+2"], obj3);
    obj2.onPress = function onPress() {
      const obj2 = { title: null, body: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.R0RpRX);
      const intl2 = util.intl;
      obj2.body = intl2.format(util.t["TnH05/"], { count: stateFromStores });
      AlertActionCreatorsDefault.show(obj2);
    };
    obj2.style = tmp.unavailableGuilds;
    const obj4 = { style: tmp.unavailableGuildsIcon, source: _modDef16674 };
    obj2.children = <closure_3 style={tmp.unavailableGuildsIcon} source={_modDef16674} />;
    tmp5 = (
      <closure_4 accessibilityRole="button" accessibilityLabel={null} onPress={null} style={null}>
        {null}
      </closure_4>
    );
  }
  return tmp5;
});
