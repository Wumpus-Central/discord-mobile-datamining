// === Module 10988: ChannelVisibilityUtils ===

// Module 10988 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 6521 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4697 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4827 */;

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