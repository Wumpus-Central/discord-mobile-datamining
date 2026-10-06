// discord_app/modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsRow.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import router_utils from "../../../routing/router_utils.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ChannelConstants from "../../../channel/ChannelConstants.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import RedesignChannelListConstants from "../../../channel_list_v2/native/RedesignChannelListConstants.tsx";
import BaseChannelItemDefault from "../../../guild_sidebar/native/BaseChannelItem.tsx";
import AssetRegistryDefault from "../../../../../_runtime/12476_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let importDefault;

let obj2;
const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsRow.tsx",
);

export default function GuildRoleSubscriptionsRow(selected) {
  let DEFAULT;
  let c1;
  let intl2;
  let tmp6;
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  importDefault = "role-subscriptions-channel-action-sheet";
  const items1 = [id];
  const tmp = closure_7();
  const callback = react.useCallback(() => {
    const obj = router_utils;
    obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
  }, items);
  const callback1 = react.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    const obj2 = {
      guildId: id,
      onClose() {
        const obj = c1(dependencyMap[8]);
        obj.hideActionSheet(closure_1_1);
      },
    };
    obj.openLazy(asyncRequire(16170, dependencyMap.paths), c1, obj2);
  }, items1);
  const ChannelModes = id(12031).ChannelModes;
  if (selected) {
    DEFAULT = ChannelModes.SELECTED;
    tmp6 = tmp4;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp6 = tmp4;
  }
  BaseChannelItemDefault;
  const intl = tmp6(1126).intl;
  let obj2 = { name: intl2.string(tmp6(1126).t["KzCF/6"]), mode: DEFAULT };
  const BaseChannelName = tmp6(12031).BaseChannelName;
  intl2 = tmp6(1126).intl;
  ({ disableColor: true, mode: DEFAULT, source: AssetRegistryDefault });
  const BaseChannelIcon = tmp6(12031).BaseChannelIcon;
  return (
    <tmp8
      onPress={callback}
      onLongPress={callback1}
      style={tmp.container}
      accessible
      accessibilityLabel={intl.string(tmp6(1126).t["KzCF/6"])}
      accessibilityState={{ selected }}
      mode={DEFAULT}
      name={null}
      icon={null}
    />
  );
}
