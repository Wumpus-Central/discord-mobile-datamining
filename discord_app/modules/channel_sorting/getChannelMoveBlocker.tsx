// === Module 14356: getChannelMoveBlocker ===

// Module 14356 (getChannelMoveBlocker)
import FavoritesUtils from "FavoritesUtils" /* 4883 */;
import isOptInEnabled from "isOptInEnabled" /* 6879 */;
import canManageChannelList from "canManageChannelList" /* 14357 */;
import GuildStore from "GuildStore" /* 4880 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;

const canManageChannelListDefault = canManageChannelList;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_sorting/getChannelMoveBlocker.tsx");

export default function getChannelMoveBlocker(getGuildId, guildId) {
  if (obj.isFavoritesGuildId(guildId)) {
    return null;
  } else {
    const guild = GuildStore.getGuild(getGuildId.getGuildId());
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