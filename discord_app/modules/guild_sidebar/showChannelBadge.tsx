// discord_app/modules/guild_sidebar/showChannelBadge.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_sidebar/showChannelBadge.tsx");

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
}
