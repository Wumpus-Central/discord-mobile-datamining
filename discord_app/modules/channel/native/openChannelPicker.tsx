// === Module 11590: openChannelPicker ===

// Module 11590 (openChannelPicker)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import GuildChannelStore from "GuildChannelStore" /* 2096 */;
import GuildStore from "GuildStore" /* 2063 */;

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
  const obj2 = { header: null, guild: null, channels: null, selectedChannel: null };
  const obj3 = { title: null, onClose: null };
  const obj = ActionSheetActionCreatorsDefault;
  const intl = util.intl;
  obj3.title = intl.string(util.t.r2ptsz);
  obj3.onClose = onClose.onClose;
  obj2.header = obj3;
  obj2.guild = guild;
  const found = items.filter(filterFn);
  obj2.channels = found.map((channel) => channel.channel);
  obj2.selectedChannel = selectedChannel;
  const merged1 = Object.assign(merged);
  obj.openLazy(asyncRequireImpl(11591, dependencyMap.paths), "ChannelPicker", obj2);
};