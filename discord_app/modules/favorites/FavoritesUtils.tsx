// === Module 4917: FavoritesUtils ===

// Module 4917 (FavoritesUtils)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import FavoritesConstants from "FavoritesConstants" /* 4905 */;
import size from "module_2" /* 2 */;

const FAVORITES_RAW_GUILD_ID = FavoritesConstants.FAVORITES_RAW_GUILD_ID;
const FAVORITES = Constants.FAVORITES;
const result = size.fileFinishedImporting("modules/favorites/FavoritesUtils.tsx");

export function getFavoritesAwareGuildName(guild) {
  if (null != guild) {
    const id = guild.id;
    let tmp2 = id === FAVORITES_RAW_GUILD_ID;
    if (!tmp2) {
      tmp2 = id === FAVORITES;
    }
    if (tmp2) {
      const intl = util.intl;
      let name = intl.string(util.t.wMWyci);
    } else {
      name = guild.name;
    }
    return name;
  }
}
export function isFavoritesGuildId(guildId) {
  let tmp = guildId === FAVORITES_RAW_GUILD_ID;
  if (!tmp) {
    tmp = guildId === FAVORITES;
  }
  return tmp;
}
export function isFavoritesGuildCategoryNameValid(name) {
  return "" !== name.trim();
}
export function isFavoritableChannel(record) {
  return !record.isCategory();
}