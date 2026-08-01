// === Module 1865: getFavoritesAwareGuildName ===

// Module 1865 (getFavoritesAwareGuildName)
import { FAVORITES_RAW_GUILD_ID } from "date";
import { FAVORITES } from "ME";

const result = require("getSystemLocale").fileFinishedImporting("modules/favorites/FavoritesUtils.tsx");

export const getFavoritesAwareGuildName = function getFavoritesAwareGuildName(guild) {
  if (null != guild) {
    const id = guild.id;
    let tmp2 = id === FAVORITES_RAW_GUILD_ID;
    if (!tmp2) {
      tmp2 = id === FAVORITES;
    }
    if (tmp2) {
      const intl = require(1236) /* getSystemLocale */.intl;
      let name = intl.string(require(1236) /* getSystemLocale */.t.wMWyci);
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
export const isFavoritesGuildCategoryNameValid = function isFavoritesGuildCategoryNameValid(first) {
  return "" !== first.trim();
};
export const canFavoriteChannelType = function canFavoriteChannelType(record, hasHigherPrivileges) {
  const isCategoryResult = record.isCategory();
  let tmp2 = !isCategoryResult;
  if (!isCategoryResult) {
    const isThreadResult = record.isThread();
    let tmp4 = !isThreadResult;
    if (isThreadResult) {
      tmp4 = hasHigherPrivileges;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};