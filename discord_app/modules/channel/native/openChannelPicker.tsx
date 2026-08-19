// discord_app/modules/channel/native/openChannelPicker.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import comparator from "../../../stores/GuildChannelStore.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";

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