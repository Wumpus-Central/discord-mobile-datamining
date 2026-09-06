// discord_app/modules/hub/native/components/HubSidebar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import GuildDirectoryAddModalActionCreatorsDefault from "../../../directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx";
import BaseChannelItem from "../../../guild_sidebar/native/BaseChannelItem.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";

const BaseChannelItemDefault = BaseChannelItem;

require = fn;
function HubItem(arg0) {
  ({ label, unreadCount } = arg0);
  ({ IconComponent, handleItemClick, active } = arg0);
  const ChannelModes = BaseChannelItem.ChannelModes;
  if (active) {
    let DEFAULT = ChannelModes.SELECTED;
    let tmp5 = require;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp5 = require;
  }
  let obj = {
    style: closure_9().container,
    accessibilityLabel: label,
    accessibilityRole: "menuitem",
    onPress: handleItemClick,
    disableHighlightOnPress: true,
    mode: DEFAULT,
    name: null,
    icon: null,
    channelInfo: null,
  };
  const tmp = closure_9();
  obj.name = React5(tmp5(12379).BaseChannelName, { name: label, mode: DEFAULT });
  obj.icon = React5(tmp5(12379).BaseChannelIcon, { mode: DEFAULT, IconComponent });
  let tmp6Result = null;
  if (null != unreadCount) {
    obj = { value: unreadCount };
    tmp6Result = React5(tmp5(1178).Badge, obj);
  }
  obj.channelInfo = tmp6Result;
  return React5(BaseChannelItemDefault, obj);
}
const View = fn(17).View;
const InstantInviteSources = fn(1074).InstantInviteSources;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, row: null };
createStyles = {
  marginVertical: fn(10118).CHANNEL_MARGIN_VERTICAL,
  marginHorizontal: 8,
  borderRadius: nativeDefault.radii.md,
};
createStyles.container = createStyles;
createStyles.row = { flex: 1 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/hub/native/components/HubSidebar.tsx");

export default function HubSidebar(guild) {
  guild = guild.guild;
  let obj = guild(504);
  const items = [GuildChannelStore];
  const items1 = [guild.id];
  const stateFromStores = obj.useStateFromStores(items, () => GuildChannelStore.getDefaultChannel(guild.id), items1);
  let obj1 = guild(504);
  const items2 = [GuildChannelStore];
  dependencyMap = obj1.useStateFromStoresObject(items2, () => GuildChannelStore.getChannels(guild.id));
  let obj2 = guild(504);
  const items3 = [SelectedChannelStore];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = SelectedChannelStore.getChannelId() === tmp.id;
    }
    return tmp2;
  });
  guild(16212);
  let tmp9Result = null;
  if (null != stateFromStores) {
    let row = null;
    if (guild.flashList) {
      row = tmp4.row;
    }
    obj = { style: row, children: null };
    obj = { guild };
    const items4 = [closure_7(stateFromStores(16213), obj), , ,];
    obj1 = {
      active: stateFromStores1,
      IconComponent: tmp(15593).CompassIcon,
      label: null,
      handleItemClick: null,
      unreadCount: null,
    };
    const intl = tmp(1114).intl;
    obj1.label = intl.string(tmp(1114).t.K50GHd);
    obj1.handleItemClick = function handleItemClick() {
      transitionToChannel.transitionToChannel(stateFromStores.id);
    };
    obj1.unreadCount = tmp7;
    items4[1] = closure_7(HubItem, obj1);
    obj2 = { IconComponent: tmp(12753).PlusMediumIcon, label: null, handleItemClick: null };
    const intl2 = tmp(1114).intl;
    obj2.label = intl2.string(tmp(1114).t.emRpdS);
    obj2.handleItemClick = function handleItemClick() {
      const obj = {
        directoryGuildName: guild.name,
        directoryGuildId: guild.id,
        directoryChannelId: stateFromStores.id,
      };
      return obj.open(obj);
    };
    items4[2] = closure_7(HubItem, obj2);
    const obj3 = { IconComponent: tmp(4497).UserPlusIcon, label: null, handleItemClick: null };
    const intl3 = tmp(1114).intl;
    obj3.label = intl3.string(tmp(1114).t.MJQOuJ);
    obj3.handleItemClick = function handleItemClick() {
      const result = instant_invite_InstantInviteUtils.handleOpenInviteActionsheet(
        guild,
        stateFromStores.id,
        closure_2,
        InstantInviteSources.GUILD_HEADER,
      );
    };
    items4[3] = closure_7(HubItem, obj3);
    obj.children = items4;
    tmp9Result = closure_8(View, obj);
  }
  return tmp9Result;
}
