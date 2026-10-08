// === Module 12583: ChannelVisibilityUtils ===

// Module 12583 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6066 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4899 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  let tmp2 = channelId === id;
  if (!tmp2) {
    tmp2 = ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  }
  return tmp2;
};