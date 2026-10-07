// discord_app/modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../../routing/router_utils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01987_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import BaseChannelItemDefault from "../../../guild_sidebar/native/BaseChannelItem.tsx";
import _modDef12476 from "../../../../../_runtime/metro/12476__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Routes = fn(1085).Routes;
const StaticChannelRoute = fn(2058).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = {
  container: {
    marginVertical: fn(11711).CHANNEL_MARGIN_VERTICAL,
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
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16170, dependencyMap.paths), c1, {
      guildId: id,
      onClose() {
        c1(dependencyMap[8]).hideActionSheet(closure_1_1);
      },
    });
  }, items1);
  const ChannelModes = id(12031).ChannelModes;
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
  const intl = tmp6(1126).intl;
  obj.accessibilityLabel = intl.string(tmp6(1126).t["KzCF/6"]);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  const obj2 = { name: null, mode: null };
  const intl2 = tmp6(1126).intl;
  obj2.name = intl2.string(tmp6(1126).t["KzCF/6"]);
  obj2.mode = DEFAULT;
  obj.name = jsx(tmp6(12031).BaseChannelName, { name: null, mode: null });
  obj.icon = jsx(tmp6(12031).BaseChannelIcon, { disableColor: true, mode: DEFAULT, source: _modDef12476 });
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
