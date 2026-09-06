// === Module 11329: openChannelPicker ===

// Module 11329 (openChannelPicker)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildStore from "GuildStore" /* 1979 */;

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
  const merged = Object.assign(onClose, Object.assign({ selectedChannel: 0, guildId: 0, channelType: 0, filterFn: 0, onClose: 0 }));
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
};