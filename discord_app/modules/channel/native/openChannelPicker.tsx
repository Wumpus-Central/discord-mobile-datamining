// === Module 12117: openChannelPicker ===

// Module 12117 (openChannelPicker)
import intl2 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import GuildStore from "GuildStore" /* 2074 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/openChannelPicker.tsx");

export default function openChannelPicker(onClose) {
  let channelType;
  let filterFn;
  let found;
  let guildId;
  let intl;
  let obj2;
  let selectedChannel;
  ({ guildId, filterFn } = onClose);
  ({ selectedChannel, channelType } = onClose);
  if (filterFn === undefined) {
    filterFn = function h() {
      return true;
    };
  }
  onClose = onClose.onClose;
  const merged = Object.assign(onClose, Object.assign({ selectedChannel: 0, guildId: 0, channelType: 0, filterFn: 0, onClose: 0 }));
  const guild = GuildStore.getGuild(guildId);
  let items = GuildChannelStore.getChannels(guildId)[channelType];
  if (items == null) {
    items = [];
  }
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  const obj = { header: obj2, guild, channels: found.map((channel) => channel.channel), selectedChannel };
  obj2 = { title: intl.string(intl2.t.r2ptsz), onClose };
  ActionSheetActionCreatorsDefault;
  const tmp4 = asyncRequire(12118, dependencyMap.paths);
  intl = intl2.intl;
  found = items.filter(filterFn);
  const merged1 = Object.assign(merged);
  openLazy(tmp4, "ChannelPicker", obj);
};