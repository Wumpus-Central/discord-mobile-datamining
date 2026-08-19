// === Module 10021: isChannelCurrentlyVisible ===

// Module 10021 (isChannelCurrentlyVisible)
import handlePermissionsChange from "handlePermissionsChange" /* 4970 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import handleConnectionOpen2 from "handleConnectionOpen" /* 4197 */;

const result = require("obj132").fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  channelId = channelId.getChannelId(guildId.getGuildId());
  let tmp2 = channelId === id;
  if (!tmp2) {
    tmp2 = currentSidebarChannelId.getCurrentSidebarChannelId(channelId) === id;
  }
  return tmp2;
};