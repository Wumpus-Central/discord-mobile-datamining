// === Module 11329: openChannelPicker ===

// Module 11329 (openChannelPicker)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;
import closure_3 from "comparator" /* 2012 */;
import closure_4 from "createGuildRecordFromRust" /* 1979 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/channel/native/openChannelPicker.tsx");

export default function openChannelPicker(onClose) {
  ({ guildId, filterFn } = onClose);
  ({ selectedChannel, channelType } = onClose);
  if (filterFn === undefined) {
    filterFn = function h() {
      return true;
    };
  }
  const merged = Object.assign(onClose, Object.create(null));
  guild = guild.getGuild(guildId);
  let items = channels.getChannels(guildId)[channelType];
  if (items == null) {
    items = [];
  }
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { header: null, guild: null, channels: null, selectedChannel: null };
  obj = { title: null, onClose: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.r2ptsz);
  obj[1] = onClose.onClose;
  obj[0] = obj;
  obj[1] = guild;
  const found = items.filter(filterFn);
  obj[2] = found.map((channel) => channel.channel);
  obj[3] = selectedChannel;
  const merged1 = Object.assign(merged);
  obj.openLazy(asyncRequireImpl(11330, dependencyMap.paths), "ChannelPicker", obj);
};