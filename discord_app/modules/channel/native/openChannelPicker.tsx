// === Module 10533: openChannelPicker ===

// Module 10533 (openChannelPicker)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import comparator from "comparator" /* 1980 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/channel/native/openChannelPicker.tsx");

export default function openChannelPicker(onClose) {
  ({ guildId, filterFn } = onClose);
  ({ selectedChannel, channelType } = onClose);
  if (filterFn === undefined) {
    filterFn = function h(item, index) {
      return true;
    };
  }
  const merged = Object.assign(onClose, Object.create(null));
  guild = guild.getGuild(guildId);
  let items = channels.getChannels(guildId)[channelType];
  if (items == null) {
    items = [];
  }
  const obj = { title: null, onClose: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.r2ptsz);
  obj[1] = onClose.onClose;
  obj[0] = obj;
  obj[1] = guild;
  const found = items.filter(filterFn);
  obj[2] = found.map((item, index) => item.channel);
  obj[3] = selectedChannel;
  const merged1 = Object.assign(merged);
  obj.openLazy(asyncRequireImpl(10534, dependencyMap.paths), "ChannelPicker", obj);
};