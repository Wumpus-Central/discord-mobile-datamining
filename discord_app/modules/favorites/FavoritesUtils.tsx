// discord_app/modules/favorites/FavoritesUtils.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import date from "FavoritesConstants.tsx";

const FAVORITES_RAW_GUILD_ID = date.FAVORITES_RAW_GUILD_ID;
const FAVORITES = ME.FAVORITES;
const result = set.fileFinishedImporting("modules/favorites/FavoritesUtils.tsx");

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
