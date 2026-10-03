// === Module 12472: ChannelVisibilityUtils ===

// Module 12472 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6783 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;

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