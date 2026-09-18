// === Module 16468: HubSidebar ===

// Module 16468 (HubSidebar)
import nativeDefault from "native" /* 576 */;
import transitionToChannel from "transitionToChannel" /* 4733 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 10065 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 12551 */;
import BaseChannelItem from "BaseChannelItem" /* 12622 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 2013 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;

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
  const obj = { style: closure_9().container, accessibilityLabel: label, accessibilityRole: "menuitem", onPress: handleItemClick, disableHighlightOnPress: true, mode: DEFAULT, name: null, icon: null, channelInfo: null };
  const tmp = closure_9();
  obj.name = React5(tmp5(12622).BaseChannelName, { name: label, mode: DEFAULT });
  obj.icon = React5(tmp5(12622).BaseChannelIcon, { mode: DEFAULT, IconComponent });
  let tmp6Result = null;
  if (null != unreadCount) {
    const obj2 = { value: unreadCount };
    tmp6Result = React5(tmp5(1177).Badge, obj2);
  }
  obj.channelInfo = tmp6Result;
  return React5(BaseChannelItemDefault, obj);
}
const View = fn(17).View;
const InstantInviteSources = fn(1074).InstantInviteSources;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { container: { marginVertical: fn(10361).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md }, row: { flex: 1 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/hub/native/components/HubSidebar.tsx");

export default function HubSidebar(guild) {
  guild = guild.guild;
  const items = [GuildChannelStore];
  const items1 = [guild.id];
  const stateFromStores = guild(504).useStateFromStores(items, () => GuildChannelStore.getDefaultChannel(guild.id), items1);
  const obj = guild(504);
  const tmp4 = closure_9();
  const items2 = [GuildChannelStore];
  dependencyMap = guild(504).useStateFromStoresObject(items2, () => GuildChannelStore.getChannels(guild.id));
  const obj2 = guild(504);
  const items3 = [SelectedChannelStore];
  const stateFromStores1 = guild(504).useStateFromStores(items3, () => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = SelectedChannelStore.getChannelId() === tmp.id;
    }
    return tmp2;
  });
  guild(16469);
  let tmp9Result = null;
  if (null != stateFromStores) {
    let row = null;
    if (guild.flashList) {
      row = tmp4.row;
    }
    const obj4 = { style: row, children: null };
    const obj5 = { guild };
    const items4 = [closure_7(stateFromStores(16470), obj5), , , ];
    const obj6 = { active: stateFromStores1, IconComponent: tmp(15812).CompassIcon, label: null, handleItemClick: null, unreadCount: null };
    const intl = tmp(1115).intl;
    obj6.label = intl.string(tmp(1115).t.K50GHd);
    obj6.handleItemClick = function handleItemClick() {
      transitionToChannel.transitionToChannel(stateFromStores.id);
    };
    obj6.unreadCount = tmp7;
    items4[1] = closure_7(HubItem, obj6);
    const obj7 = { IconComponent: tmp(12995).PlusMediumIcon, label: null, handleItemClick: null };
    const intl2 = tmp(1115).intl;
    obj7.label = intl2.string(tmp(1115).t.emRpdS);
    obj7.handleItemClick = function handleItemClick() {
      return GuildDirectoryAddModalActionCreatorsDefault.open({ directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: stateFromStores.id });
    };
    items4[2] = closure_7(HubItem, obj7);
    const obj8 = { IconComponent: tmp(4658).UserPlusIcon, label: null, handleItemClick: null };
    const intl3 = tmp(1115).intl;
    obj8.label = intl3.string(tmp(1115).t.MJQOuJ);
    obj8.handleItemClick = function handleItemClick() {
      const result = instant_invite_InstantInviteUtils.handleOpenInviteActionsheet(guild, stateFromStores.id, closure_2, InstantInviteSources.GUILD_HEADER);
    };
    items4[3] = closure_7(HubItem, obj8);
    obj4.children = items4;
    tmp9Result = closure_8(View, obj4);
  }
  return tmp9Result;
};