// === Module 1913: getFavoritesAwareGuildName ===

// Module 1913 (getFavoritesAwareGuildName)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import date from "date" /* 1429 */;

const FAVORITES_RAW_GUILD_ID = date.FAVORITES_RAW_GUILD_ID;
const FAVORITES = ME.FAVORITES;
const result = obj132.fileFinishedImporting("modules/favorites/FavoritesUtils.tsx");

export const getFavoritesAwareGuildName = function getFavoritesAwareGuildName(guild) {
  if (null != guild) {
    const id = guild.id;
    let tmp2 = id === FAVORITES_RAW_GUILD_ID;
    if (!tmp2) {
      tmp2 = id === FAVORITES;
    }
    if (tmp2) {
      const intl = getSystemLocale.intl;
      let name = intl.string(getSystemLocale.t.wMWyci);
    } else {
      name = guild.name;
    }
    return name;
  }
};
export function isFavoritesGuildId(guildId) {
  let tmp = guildId === FAVORITES_RAW_GUILD_ID;
  if (!tmp) {
    tmp = guildId === FAVORITES;
  }
  return tmp;
}
export const isFavoritesGuildCategoryNameValid = function isFavoritesGuildCategoryNameValid(closure_0) {
  return "" !== _require.trim();
};
export const isFavoritableChannel = function isFavoritableChannel(record) {
  return !record.isCategory();
};