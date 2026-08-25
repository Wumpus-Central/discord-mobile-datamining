// === Module 15585: showChannelBadge ===

// Module 15585 (showChannelBadge)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/guild_sidebar/showChannelBadge.tsx");

export default function showChannelBadge(isNewChannel) {
  ({ mentionsCount, postsWithUnreadsCount, muted } = isNewChannel);
  isNewChannel = null != mentionsCount;
  if (isNewChannel) {
    isNewChannel = mentionsCount > 0;
  }
  if (!isNewChannel) {
    isNewChannel = isNewChannel.isNewChannel;
  }
  if (!isNewChannel) {
    let tmp = null != muted && !muted && null != postsWithUnreadsCount;
    if (tmp) {
      tmp = postsWithUnreadsCount > 0;
    }
    isNewChannel = tmp;
  }
  return isNewChannel;
};