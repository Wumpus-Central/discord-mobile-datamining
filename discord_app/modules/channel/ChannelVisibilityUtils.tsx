// === Module 10177: ChannelVisibilityUtils ===

// Module 10177 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 7353 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4428 */;

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