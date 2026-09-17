// === Module 16369: DirectoryChannel ===

// Module 16369 (DirectoryChannel)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1101 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11070 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildChannelStore from "GuildChannelStore" /* 2013 */;

require = fn;
const UnreadSetting = fn(4822).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let obj = { container: { marginVertical: fn(10267).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_8 = createStyles.createStyles(obj);
let obj3 = { marginVertical: fn(10267).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/DirectoryChannel.tsx");

export default noop.memo((guildId) => {
  guildId = guildId.guildId;
  let selected = guildId.selected;
  const tmp = closure_8();
  const items = [ChannelStore, GuildChannelStore];
  const stateFromStores = guildId(563).useStateFromStores(items, () => {
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
    const obj2 = { onPress: callback, onLongPress: tmp6, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null };
    const obj3 = { channel: stateFromStores };
    obj2.accessibilityLabel = id(9921)(obj3);
    const obj4 = { selected };
    obj2.accessibilityState = obj4;
    obj2.channel = stateFromStores;
    obj2.selected = selected;
    obj2.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
    tmp7 = jsx(id(16276), { onPress: callback, onLongPress: tmp6, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null });
    const tmp10 = id(16276);
  }
  return tmp7;
});