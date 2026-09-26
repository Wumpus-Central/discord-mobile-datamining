// === Module 10437: useFavoritesGuildChannelActions ===

// Module 10437 (useFavoritesGuildChannelActions)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default function useFavoritesGuildChannelActions(channelId, FavoritesGuildActionSheet) {
  _require = channelId;
  const favoritesAccess = require("FavoritesHooks").useFavoritesAccess(FavoritesGuildActionSheet);
  ({ hasAccess, isExperimentEnabled } = favoritesAccess);
  const obj = require("FavoritesHooks");
  const tmp = _require;
  let isFavoritableChannelResult = require("FavoritesUtils").isFavoritableChannel(channelId);
  const obj2 = require("FavoritesUtils");
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
  const favoritesBetaTagDismissibleContent = tmp(9703).useFavoritesBetaTagDismissibleContent(tmp7);
  return { isExperimentEnabled, hasFavoritesAccess: hasAccess, canFavoriteChannel: isFavoritableChannelResult, isChannelInFavorites: stateFromStores, isFavoritesGuild: isFavoritesGuildSelected, channelId: channelId.id, shouldShowBetaTag: favoritesBetaTagDismissibleContent.shouldShowBetaTag, dismissBetaTag: favoritesBetaTagDismissibleContent.dismissBetaTag };
};