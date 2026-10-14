// === Module 7038: isAccessibleNonStaticChannelPath ===

// Module 7038 (isAccessibleNonStaticChannelPath)
import LinkUtils from "LinkUtils" /* 5427 */;
import GatedChannelStore from "GatedChannelStore" /* 2117 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/links/isAccessibleNonStaticChannelPath.tsx");

export default function isAccessibleNonStaticChannelPath(guild_id) {
  let canViewChannelResult = LinkUtils.canViewChannel(guild_id);
  if (!canViewChannelResult) {
    canViewChannelResult = GatedChannelStore.isChannelGatedAndVisible(guild_id.guild_id, guild_id.id);
  }
  return canViewChannelResult;
};