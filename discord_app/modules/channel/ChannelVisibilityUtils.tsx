// discord_app/modules/channel/ChannelVisibilityUtils.tsx
import closure_0 from "../../stores/ChannelSectionStore.tsx";
import closure_1 from "../../stores/SelectedChannelStore.tsx";
import closure_2 from "../../stores/SelectedGuildStore.tsx";

const result = require("set").fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  channelId = channelId.getChannelId(guildId.getGuildId());
  let tmp2 = channelId === id;
  if (!tmp2) {
    tmp2 = currentSidebarChannelId.getCurrentSidebarChannelId(channelId) === id;
  }
  return tmp2;
};