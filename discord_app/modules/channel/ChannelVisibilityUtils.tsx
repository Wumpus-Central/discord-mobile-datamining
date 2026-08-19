// discord_app/modules/channel/ChannelVisibilityUtils.tsx
import handlePermissionsChange from "../../stores/ChannelSectionStore.tsx";
import handleConnectionOpen from "../../stores/SelectedChannelStore.tsx";
import handleConnectionOpen2 from "../../stores/SelectedGuildStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  channelId = channelId.getChannelId(guildId.getGuildId());
  let tmp2 = channelId === id;
  if (!tmp2) {
    tmp2 = currentSidebarChannelId.getCurrentSidebarChannelId(channelId) === id;
  }
  return tmp2;
};