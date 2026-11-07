// === Module 11147: ChannelVisibilityUtils ===

// Module 11147 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6917 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5043 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5171 */;

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