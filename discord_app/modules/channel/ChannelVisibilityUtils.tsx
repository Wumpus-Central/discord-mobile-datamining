// === Module 11786: ChannelVisibilityUtils ===

// Module 11786 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 7044 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5213 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5343 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  let tmp2 = channelId === id;
  if (!tmp2) {
    tmp2 = ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  }
  return tmp2;
}