// === Module 10131: isChannelCurrentlyVisible ===

// Module 10131 (isChannelCurrentlyVisible)
import closure_0 from "handlePermissionsChange" /* 6095 */;
import closure_1 from "handleConnectionOpen" /* 1981 */;
import closure_2 from "handleConnectionOpen" /* 4269 */;

const result = require("set").fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  channelId = channelId.getChannelId(guildId.getGuildId());
  let tmp2 = channelId === id;
  if (!tmp2) {
    tmp2 = currentSidebarChannelId.getCurrentSidebarChannelId(channelId) === id;
  }
  return tmp2;
};