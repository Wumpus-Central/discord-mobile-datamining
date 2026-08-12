// discord_app/modules/favorites/FavoritesUtils.tsx
import { FAVORITES_RAW_GUILD_ID } from "date";
import { FAVORITES } from "ME";
import { getSystemLocale } from "../../intl/index.native.tsx";

const result = require("getSystemLocale").fileFinishedImporting("modules/favorites/FavoritesUtils.tsx");

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
  return "" !== closure_0.trim();
};
export const isFavoritableChannel = function isFavoritableChannel(record) {
  return !record.isCategory();
};