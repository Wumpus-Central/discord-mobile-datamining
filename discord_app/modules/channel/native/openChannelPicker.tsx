// discord_app/modules/channel/native/openChannelPicker.tsx
import comparator from "comparator";
import createGuildRecordFromRust from "createGuildRecordFromRust";

const require = arg1;
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/channel/native/openChannelPicker.tsx");

export default function openChannelPicker(onClose) {
  let channelType;
  let filterFn;
  let guildId;
  let selectedChannel;
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
  let obj = importDefault(4161);
  obj = { header: null, guild: null, channels: null, selectedChannel: null };
  obj = { title: null, onClose: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.r2ptsz);
  obj[1] = onClose.onClose;
  obj[0] = obj;
  obj[1] = guild;
  const found = items.filter(filterFn);
  obj[2] = found.map((channel) => channel.channel);
  obj[3] = selectedChannel;
  const merged1 = Object.assign(merged);
  obj.openLazy(require(1959) /* asyncRequireImpl */(10416, dependencyMap.paths), "ChannelPicker", obj);
};