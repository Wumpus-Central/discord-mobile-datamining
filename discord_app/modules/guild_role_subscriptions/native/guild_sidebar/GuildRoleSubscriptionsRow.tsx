// discord_app/modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../../routing/router_utils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import BaseChannelItemDefault from "../../../guild_sidebar/native/BaseChannelItem.tsx";
import _modDef12922 from "../../../../../_runtime/metro/12922__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Routes = fn(1074).Routes;
const StaticChannelRoute = fn(1965).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let obj2 = {
  container: {
    marginVertical: fn(10256).CHANNEL_MARGIN_VERTICAL,
    marginHorizontal: 8,
    borderRadius: nativeDefault.radii.md,
  },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsRow.tsx",
);

export default function GuildRoleSubscriptionsRow(selected) {
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  importDefault = "role-subscriptions-channel-action-sheet";
  const items1 = [id];
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
  }, items);
  const callback1 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16336, dependencyMap.paths), c1, {
      guildId: id,
      onClose() {
        c1(dependencyMap[8]).hideActionSheet(closure_1_1);
      },
    });
  }, items1);
  const ChannelModes = id(12522).ChannelModes;
  if (selected) {
    let DEFAULT = ChannelModes.SELECTED;
    let tmp6 = tmp4;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp6 = tmp4;
  }
  const obj = {
    onPress: callback,
    onLongPress: callback1,
    style: closure_7().container,
    accessible: true,
    accessibilityLabel: null,
    accessibilityState: null,
    mode: null,
    name: null,
    icon: null,
  };
  const tmp = closure_7();
  const intl = tmp6(1115).intl;
  obj.accessibilityLabel = intl.string(tmp6(1115).t["KzCF/6"]);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  const obj2 = { name: null, mode: null };
  const intl2 = tmp6(1115).intl;
  obj2.name = intl2.string(tmp6(1115).t["KzCF/6"]);
  obj2.mode = DEFAULT;
  obj.name = jsx(tmp6(12522).BaseChannelName, { name: null, mode: null });
  obj.icon = jsx(tmp6(12522).BaseChannelIcon, { disableColor: true, mode: DEFAULT, source: _modDef12922 });
  return (
    <tmp8
      onPress={callback}
      onLongPress={callback1}
      style={closure_7().container}
      accessible
      accessibilityLabel={null}
      accessibilityState={null}
      mode={null}
      name={null}
      icon={null}
    />
  );
}
