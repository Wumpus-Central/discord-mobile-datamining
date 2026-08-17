// discord_app/modules/channel/ChannelVisibilityUtils.tsx
import closure_0 from "handlePermissionsChange" /* 4970 */;
import closure_1 from "handleConnectionOpen" /* 1979 */;
import closure_2 from "handleConnectionOpen" /* 4197 */;

const result = require("set").fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  channelId = channelId.getChannelId(guildId.getGuildId());
  let tmp2 = channelId === id;
  if (!tmp2) {
    tmp2 = currentSidebarChannelId.getCurrentSidebarChannelId(channelId) === id;
  }
  return tmp2;
};