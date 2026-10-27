// === Module 17675: GuildRoleSubscriptionsRow ===

// Module 17675 (GuildRoleSubscriptionsRow)
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1111 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 13290 */;
import _modDef13756 from "module_13756" /* 13756 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1084).Routes;
const StaticChannelRoute = fn(4831).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(4972);
let obj2 = { container: { marginVertical: fn(11954).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsRow.tsx");

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
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17676, dependencyMap.paths), c1, {
      guildId: id,
      onClose() {
        c1(dependencyMap[8]).hideActionSheet(closure_1_1);
      }
    });
  }, items1);
  const ChannelModes = id(13290).ChannelModes;
  if (selected) {
    let DEFAULT = ChannelModes.SELECTED;
    let tmp6 = tmp4;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp6 = tmp4;
  }
  const obj = { onPress: callback, onLongPress: callback1, style: closure_7().container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null };
  const tmp = closure_7();
  const intl = tmp6(1125).intl;
  obj.accessibilityLabel = intl.string(tmp6(1125).t["KzCF/6"]);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  const obj2 = { name: null, mode: null };
  const intl2 = tmp6(1125).intl;
  obj2.name = intl2.string(tmp6(1125).t["KzCF/6"]);
  obj2.mode = DEFAULT;
  obj.name = jsx(tmp6(13290).BaseChannelName, { name: null, mode: null });
  obj.icon = jsx(tmp6(13290).BaseChannelIcon, { disableColor: true, mode: DEFAULT, source: _modDef13756 });
  return <tmp8 onPress={callback} onLongPress={callback1} style={closure_7().container} accessible accessibilityLabel={null} accessibilityState={null} mode={null} name={null} icon={null} />;
};