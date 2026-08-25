// === Module 9916: isChannelCurrentlyVisible ===

// Module 9916 (isChannelCurrentlyVisible)
import closure_0 from "handlePermissionsChange" /* 6005 */;
import closure_1 from "handleConnectionOpen" /* 1981 */;
import closure_2 from "handleConnectionOpen" /* 4202 */;

const result = require("set").fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  channelId = channelId.getChannelId(guildId.getGuildId());
  let tmp2 = channelId === id;
  if (!tmp2) {
    tmp2 = currentSidebarChannelId.getCurrentSidebarChannelId(channelId) === id;
  }
  return tmp2;
};