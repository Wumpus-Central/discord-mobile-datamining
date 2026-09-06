// === Module 10974: useFavoritesGuildChannelActions ===

// Module 10974 (useFavoritesGuildChannelActions)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import FavoriteStore from "FavoriteStore" /* 1960 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default function useFavoritesGuildChannelActions(channelId, FavoritesGuildActionSheet) {
  _require = channelId;
  let obj = require("FavoritesHooks");
  const favoritesAccess = obj.useFavoritesAccess(FavoritesGuildActionSheet);
  ({ hasAccess, isExperimentEnabled } = favoritesAccess);
  let isFavoritableChannelResult = require("FavoritesUtils").isFavoritableChannel(channelId);
  const obj2 = require("FavoritesUtils");
  const tmp = _require;
  const items = [FavoriteStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => FavoriteStore.isFavorite(channelId.id));
  const obj3 = require("initialize");
  const isFavoritesGuildSelected = require("FavoritesHooks").useIsFavoritesGuildSelected();
  const obj4 = require("FavoritesHooks");
  const items1 = [GuildMemberStore, AuthenticationStore];
  if (isFavoritableChannelResult) {
    isFavoritableChannelResult = obj5.useStateFromStores(items1, () => {
      let isMemberResult = null == channelId.guild_id;
      if (!isMemberResult) {
        isMemberResult = GuildMemberStore.isMember(tmp.guild_id, AuthenticationStore.getId());
      }
      return isMemberResult;
    });
  }
  obj5 = require("initialize");
  let tmp7 = hasAccess;
  if (hasAccess) {
    tmp7 = isFavoritableChannelResult;
  }
  if (tmp7) {
    tmp7 = !stateFromStores;
  }
  if (tmp7) {
    tmp7 = !isFavoritesGuildSelected;
  }
  const favoritesBetaTagDismissibleContent = tmp(10240).useFavoritesBetaTagDismissibleContent(tmp7);
  obj = { isExperimentEnabled, hasFavoritesAccess: hasAccess, canFavoriteChannel: isFavoritableChannelResult, isChannelInFavorites: stateFromStores, isFavoritesGuild: isFavoritesGuildSelected, channelId: channelId.id, shouldShowBetaTag: favoritesBetaTagDismissibleContent.shouldShowBetaTag, dismissBetaTag: favoritesBetaTagDismissibleContent.dismissBetaTag };
  return obj;
};