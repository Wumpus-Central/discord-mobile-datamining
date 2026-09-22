// === Module 10350: ChannelVisibilityUtils ===

// Module 10350 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 7524 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2096 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4578 */;

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