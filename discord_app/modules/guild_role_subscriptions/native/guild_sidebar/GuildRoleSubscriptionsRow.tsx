// === Module 16205: GuildRoleSubscriptionsRow ===

// Module 16205 (GuildRoleSubscriptionsRow)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1100 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 12379 */;
import _modDef12779 from "module_12779" /* 12779 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1074).Routes;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { marginVertical: fn(10118).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
createStyles.container = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
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
    const obj = {
      guildId: id,
      onClose() {
        c1(dependencyMap[8]).hideActionSheet(closure_1_1);
      }
    };
    obj.openLazy(asyncRequireImpl(16206, dependencyMap.paths), c1, obj);
  }, items1);
  const ChannelModes = id(12379).ChannelModes;
  if (selected) {
    let DEFAULT = ChannelModes.SELECTED;
    let tmp6 = tmp4;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp6 = tmp4;
  }
  let obj = { onPress: callback, onLongPress: callback1, style: closure_7().container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null };
  const tmp = closure_7();
  const intl = tmp6(1114).intl;
  obj.accessibilityLabel = intl.string(tmp6(1114).t["KzCF/6"]);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  obj = { name: null, mode: null };
  const intl2 = tmp6(1114).intl;
  obj.name = intl2.string(tmp6(1114).t["KzCF/6"]);
  obj.mode = DEFAULT;
  obj.name = jsx(tmp6(12379).BaseChannelName, { name: null, mode: null });
  obj = { disableColor: true, mode: DEFAULT, source: _modDef12779 };
  obj.icon = jsx(tmp6(12379).BaseChannelIcon, { disableColor: true, mode: DEFAULT, source: _modDef12779 });
  return jsx(BaseChannelItemDefault, { disableColor: true, mode: DEFAULT, source: _modDef12779 });
};