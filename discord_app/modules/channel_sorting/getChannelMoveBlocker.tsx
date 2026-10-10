// === Module 12697: getChannelMoveBlocker ===

// Module 12697 (getChannelMoveBlocker)
import FavoritesUtils from "FavoritesUtils" /* 2090 */;
import isOptInEnabled from "isOptInEnabled" /* 6076 */;
import canManageChannelList from "canManageChannelList" /* 12698 */;
import GuildStore from "GuildStore" /* 2087 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;

const canManageChannelListDefault = canManageChannelList;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_sorting/getChannelMoveBlocker.tsx");

export default function getChannelMoveBlocker(getGuildId, guildId) {
  if (obj.isFavoritesGuildId(guildId)) {
    return null;
  } else {
    guild = GuildStore.getGuild(getGuildId.getGuildId());
    if (null != guild) {
      const tmp8 = canManageChannelListDefault;
      if (tmp8(tmpResult.getContainingCategory(getGuildId), guild)) {
        if (tmpResult2.isOptInEnabledForGuild(guild.id)) {
          const obj2 = { reason: "opt-in-channels", guild };
        } else if (UserGuildSettingsStore.isFavorite(guild.id, getGuildId.id)) {
          const obj3 = { reason: "pinned-channel", guild };
        }
        tmpResult2 = isOptInEnabled;
      }
      tmpResult = canManageChannelList;
    }
    return { reason: "no-permission" };
  }
  obj = FavoritesUtils;
};