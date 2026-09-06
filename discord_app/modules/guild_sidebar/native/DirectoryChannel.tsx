// === Module 16209: DirectoryChannel ===

// Module 16209 (DirectoryChannel)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1100 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10913 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;

require = fn;
const UnreadSetting = fn(4742).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { container: null };
obj = { marginVertical: fn(10118).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
obj.container = obj;
let closure_8 = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/DirectoryChannel.tsx");

export default noop.memo((guildId) => {
  guildId = guildId.guildId;
  let selected = guildId.selected;
  let obj = guildId(563);
  const items = [ChannelStore, GuildChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const directoryChannelIds = GuildChannelStore.getDirectoryChannelIds(guildId);
    let channel = null;
    if (0 !== directoryChannelIds.length) {
      channel = ChannelStore.getChannel(directoryChannelIds[0]);
    }
    return channel;
  });
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (!selected) {
    selected = id === guildId.selectedChannelId;
  }
  const items1 = [guildId, id];
  [][0] = id;
  const callback = noop.useCallback(() => {
    router_utils.transitionToGuild(guildId, id);
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    obj = { onPress: callback, onLongPress: tmp6, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null };
    obj = { channel: stateFromStores };
    obj.accessibilityLabel = id(9770)(obj);
    const obj1 = { selected };
    obj.accessibilityState = obj1;
    obj.channel = stateFromStores;
    obj.selected = selected;
    obj.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
    tmp7 = jsx(id(16116), { channel: stateFromStores });
    const tmp10 = id(16116);
  }
  return tmp7;
});