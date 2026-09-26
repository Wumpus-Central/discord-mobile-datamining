// discord_app/modules/guild_sidebar/native/DirectoryChannel.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../routing/router_utils.tsx";
import openChannelLongPressActionSheet from "../../channel/native/openChannelLongPressActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";

require = fn;
const UnreadSetting = fn(5018).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj = {
  container: {
    marginVertical: fn(9577).CHANNEL_MARGIN_VERTICAL,
    marginHorizontal: 8,
    borderRadius: nativeDefault.radii.md,
  },
};
let closure_8 = createStyles.createStyles(obj);
let obj3 = {
  marginVertical: fn(9577).CHANNEL_MARGIN_VERTICAL,
  marginHorizontal: 8,
  borderRadius: nativeDefault.radii.md,
};
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
    const obj2 = {
      onPress: callback,
      onLongPress: tmp6,
      style: tmp.container,
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: null,
      accessibilityState: null,
      channel: null,
      selected: null,
      resolvedUnreadSetting: null,
    };
    const obj3 = { channel: stateFromStores };
    obj2.accessibilityLabel = id(9060)(obj3);
    const obj4 = { selected };
    obj2.accessibilityState = obj4;
    obj2.channel = stateFromStores;
    obj2.selected = selected;
    obj2.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
    tmp7 = jsx(id(15750), {
      onPress: callback,
      onLongPress: tmp6,
      style: tmp.container,
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: null,
      accessibilityState: null,
      channel: null,
      selected: null,
      resolvedUnreadSetting: null,
    });
    const tmp10 = id(15750);
  }
  return tmp7;
});
