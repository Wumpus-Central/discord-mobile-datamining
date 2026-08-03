import fetchFingerprint from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import initializeFromUserSettings from "initializeFromUserSettings";

const require = arg1;
let result = require("initializeFromUserSettings").fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default function useFavoritesGuildChannelActions(channelId, FavoritesGuildChannelList) {
  let hasAccess;
  let hasHigherPrivileges;
  const _require = channelId;
  let obj = _require(10367);
  const favoritesAccess = obj.useFavoritesAccess(FavoritesGuildChannelList);
  ({ hasAccess, hasHigherPrivileges } = favoritesAccess);
  let result = _require(1865).canFavoriteChannelType(channelId, hasHigherPrivileges);
  const obj2 = _require(1865);
  const tmp = _require;
  const items = [initializeFromUserSettings];
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_4.isFavorite(channelId.id));
  const obj3 = _require(589);
  const isFavoritesGuildSelected = _require(10367).useIsFavoritesGuildSelected();
  const obj4 = _require(10367);
  const items1 = [trackCommunicationDisabled, fetchFingerprint];
  if (result) {
    result = obj5.useStateFromStores(items1, () => {
      let isMemberResult = null == channelId.guild_id;
      if (!isMemberResult) {
        isMemberResult = outer1_3.isMember(tmp.guild_id, outer1_2.getId());
      }
      return isMemberResult;
    });
  }
  obj5 = _require(589);
  let tmp7 = hasAccess;
  if (hasAccess) {
    tmp7 = result;
  }
  if (tmp7) {
    tmp7 = !stateFromStores;
  }
  if (tmp7) {
    tmp7 = !isFavoritesGuildSelected;
  }
  const favoritesBetaTagDismissibleContent = tmp(10373).useFavoritesBetaTagDismissibleContent(tmp7);
  obj = { hasFavoritesAccess: hasAccess, canFavoriteChannel: result, isChannelInFavorites: stateFromStores, isFavoritesGuild: isFavoritesGuildSelected, channelId: channelId.id, shouldShowBetaTag: favoritesBetaTagDismissibleContent.shouldShowBetaTag, dismissBetaTag: favoritesBetaTagDismissibleContent.dismissBetaTag };
  return obj;
};