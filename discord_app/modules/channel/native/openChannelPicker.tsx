// discord_app/modules/channel/native/openChannelPicker.tsx
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/native/openChannelPicker.tsx");

export default function openChannelPicker(onClose) {
  ({ guildId, filterFn } = onClose);
  ({ selectedChannel, channelType } = onClose);
  if (filterFn === undefined) {
    filterFn = function h() {
      return true;
    };
  }
  const merged = Object.assign(
    onClose,
    Object.assign({ selectedChannel: 0, guildId: 0, channelType: 0, filterFn: 0, onClose: 0 }),
  );
  const guild = GuildStore.getGuild(guildId);
  let items = GuildChannelStore.getChannels(guildId)[channelType];
  if (items == null) {
    items = [];
  }
  let obj = { header: null, guild: null, channels: null, selectedChannel: null };
  obj = { title: null, onClose: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.r2ptsz);
  obj.onClose = onClose.onClose;
  obj.header = obj;
  obj.guild = guild;
  const found = items.filter(filterFn);
  obj.channels = found.map((channel) => channel.channel);
  obj.selectedChannel = selectedChannel;
  const merged1 = Object.assign(merged);
  obj.openLazy(asyncRequireImpl(11330, dependencyMap.paths), "ChannelPicker", obj);
}
