// === Module 17144: LaunchPadMembers ===

// Module 17144 (LaunchPadMembers)
import useStateFromStores from "useStateFromStores" /* 563 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4635 */;
import GuildChannelUserListDefault from "GuildChannelUserList" /* 11722 */;
import PrivateChannelUserListDefault from "PrivateChannelUserList" /* 12320 */;
import ThreadChannelUserListDefault from "ThreadChannelUserList" /* 16838 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let closure_7 = createStyles.createStyles({ wrapper: { minHeight: 16 }, listStyle: { flex: 0 }, emptyWrapper: { padding: 20 }, emptyText: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadMembers.tsx");

export default noop.memo(function LaunchPadMembers() {
  const tmp = closure_7();
  const items = [SelectedChannelStore, ChannelStore];
  const stateFromStoresObject = useStateFromStores.useStateFromStoresObject(items, () => {
    currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
    channel = channel.getChannel(currentlySelectedChannelId);
    if (null != currentlySelectedChannelId) {
      if (null != channel) {
        if (channel.isPrivate()) {
          const obj = { channelId: currentlySelectedChannelId, type: "private" };
          return obj;
        } else {
          const guild_id = channel.guild_id;
          if (channel.isThread()) {
            const obj2 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "thread" };
            let obj3 = obj2;
          } else {
            obj3 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "guild" };
          }
          return obj3;
        }
      }
    }
    return { channelId: "call", type: "add" };
  });
  if ("private" === stateFromStoresObject.type) {
    let obj2 = { style: tmp.wrapper, children: null };
    const obj4 = { channelId: stateFromStoresObject.channelId, listStyleOverride: tmp.listStyle, disableBottomSafeZone: true, insetEnd: 20 };
    obj2.children = jsx(PrivateChannelUserListDefault, { channelId: stateFromStoresObject.channelId, listStyleOverride: tmp.listStyle, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    let tmp8 = <View style={tmp.wrapper}>{null}</View>;
  } else if ("thread" === stateFromStoresObject.type) {
    const obj6 = { style: tmp.wrapper, children: null };
    const obj7 = { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 };
    ({ channelId: obj5.channelId, guildId: obj5.guildId } = stateFromStoresObject);
    obj7.listStyleOverride = tmp.listStyle;
    obj6.children = jsx(ThreadChannelUserListDefault, { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    tmp8 = <View style={tmp.wrapper}>{null}</View>;
  } else if ("guild" === stateFromStoresObject.type) {
    const obj8 = { style: tmp.wrapper, children: null };
    const obj9 = { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 };
    ({ channelId: obj3.channelId, guildId: obj3.guildId } = stateFromStoresObject);
    obj9.listStyleOverride = tmp.listStyle;
    obj8.children = jsx(GuildChannelUserListDefault, { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    tmp8 = <View style={tmp.wrapper}>{null}</View>;
  } else {
    const obj17 = { style: tmp.emptyWrapper, children: null };
    const obj18 = { style: tmp.emptyText, variant: "text-md/semibold", children: null };
    const intl = util.intl;
    obj18.children = intl.string(util.t["+7wtJq"]);
    obj17.children = jsx(Text_Text.Text, { style: tmp.emptyText, variant: "text-md/semibold", children: null });
    tmp8 = <View style={tmp.emptyWrapper}>{null}</View>;
  }
  return tmp8;
});