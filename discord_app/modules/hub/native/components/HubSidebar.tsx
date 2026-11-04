// === Module 18509: HubSidebar ===

// Module 18509 (HubSidebar)
import nativeDefault from "native" /* 575 */;
import transitionToChannel from "transitionToChannel" /* 5890 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9263 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 14073 */;
import BaseChannelItem from "BaseChannelItem" /* 14154 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 5071 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5044 */;

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
  obj.name = metroImportDefault(tmp5(14154).BaseChannelName, { name: label, mode: DEFAULT });
  obj.icon = metroImportDefault(tmp5(14154).BaseChannelIcon, { mode: DEFAULT, IconComponent });
  let tmp6Result = null;
  if (null != unreadCount) {
    const obj2 = { value: unreadCount };
    tmp6Result = metroImportDefault(tmp5(1187).Badge, obj2);
  }
  obj.channelInfo = tmp6Result;
  return metroImportDefault(BaseChannelItemDefault, obj);
}
const View = fn(17).View;
const InstantInviteSources = fn(1072).InstantInviteSources;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5141);
let obj2 = { container: { marginVertical: fn(11236).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md }, row: { flex: 1 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/hub/native/components/HubSidebar.tsx");

export default function HubSidebar(guild) {
  guild = guild.guild;
  items = [GuildChannelStore];
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
  guild(18510);
  let tmp9Result = null;
  if (null != stateFromStores) {
    let row = null;
    if (guild.flashList) {
      row = tmp4.row;
    }
    const obj4 = { style: row, children: null };
    const obj5 = { guild };
    const items4 = [closure_7(stateFromStores(18511), obj5), , , ];
    const obj6 = { active: stateFromStores1, IconComponent: tmp(17833).CompassIcon, label: null, handleItemClick: null, unreadCount: null };
    const intl = tmp(1113).intl;
    obj6.label = intl.string(tmp(1113).t.K50GHd);
    obj6.handleItemClick = function handleItemClick() {
      transitionToChannel.transitionToChannel(stateFromStores.id);
    };
    obj6.unreadCount = tmp7;
    items4[1] = closure_7(HubItem, obj6);
    const obj7 = { IconComponent: tmp(11672).PlusMediumIcon, label: null, handleItemClick: null };
    const intl2 = tmp(1113).intl;
    obj7.label = intl2.string(tmp(1113).t.emRpdS);
    obj7.handleItemClick = function handleItemClick() {
      return GuildDirectoryAddModalActionCreatorsDefault.open({ directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: stateFromStores.id });
    };
    items4[2] = closure_7(HubItem, obj7);
    const obj8 = { IconComponent: tmp(5855).UserPlusIcon, label: null, handleItemClick: null };
    const intl3 = tmp(1113).intl;
    obj8.label = intl3.string(tmp(1113).t.MJQOuJ);
    obj8.handleItemClick = function handleItemClick() {
      const result = instant_invite_InstantInviteUtils.handleOpenInviteActionsheet(guild, stateFromStores.id, closure_2, InstantInviteSources.GUILD_HEADER);
    };
    items4[3] = closure_7(HubItem, obj8);
    obj4.children = items4;
    tmp9Result = closure_8(View, obj4);
  }
  return tmp9Result;
};