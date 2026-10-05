// discord_app/modules/channel/native/openChannelPicker.tsx
import intl2 from "../../../intl/index.native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  const merged = Object.assign(
    onClose,
    Object.assign({ selectedChannel: 0, guildId: 0, channelType: 0, filterFn: 0, onClose: 0 }),
  );
  const guild = GuildStore.getGuild(guildId);
  let items = GuildChannelStore.getChannels(guildId)[channelType];
  if (items == null) {
    items = [];
  }
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  const obj = { header: obj2, guild, channels: found.map((channel) => channel.channel), selectedChannel };
  obj2 = { title: intl.string(intl2.t.r2ptsz), onClose };
  ActionSheetActionCreatorsDefault;
  const tmp4 = asyncRequire(12103, dependencyMap.paths);
  intl = intl2.intl;
  found = items.filter(filterFn);
  const merged1 = Object.assign(merged);
  openLazy(tmp4, "ChannelPicker", obj);
}
