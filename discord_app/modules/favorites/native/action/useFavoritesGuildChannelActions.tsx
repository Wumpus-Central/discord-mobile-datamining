// discord_app/modules/favorites/native/action/useFavoritesGuildChannelActions.tsx
import fetchFingerprint from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import initializeFromUserSettings from "initializeFromUserSettings";

const require = arg1;
let result = require("initializeFromUserSettings").fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default function useFavoritesGuildChannelActions(channelId, FavoritesGuildChannelList) {
  let hasAccess;
  let hasHigherPrivileges;
  const _require = channelId;
  let obj = _require("../../FavoritesHooks.tsx");
  const favoritesAccess = obj.useFavoritesAccess(FavoritesGuildChannelList);
  ({ hasAccess, hasHigherPrivileges } = favoritesAccess);
  let result = _require("../../FavoritesUtils.tsx").canFavoriteChannelType(channelId, hasHigherPrivileges);
  const obj2 = _require("../../FavoritesUtils.tsx");
  const tmp = _require;
  const items = [initializeFromUserSettings];
  const stateFromStores = _require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => outer1_4.isFavorite(channelId.id));
  const obj3 = _require("../../../../../discord_common/js/packages/flux/index.tsx");
  const isFavoritesGuildSelected = _require("../../FavoritesHooks.tsx").useIsFavoritesGuildSelected();
  const obj4 = _require("../../FavoritesHooks.tsx");
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
  obj5 = _require("../../../../../discord_common/js/packages/flux/index.tsx");
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
  const favoritesBetaTagDismissibleContent = tmp(9635).useFavoritesBetaTagDismissibleContent(tmp7);
  obj = { hasFavoritesAccess: hasAccess, canFavoriteChannel: result, isChannelInFavorites: stateFromStores, isFavoritesGuild: isFavoritesGuildSelected, channelId: channelId.id, shouldShowBetaTag: favoritesBetaTagDismissibleContent.shouldShowBetaTag, dismissBetaTag: favoritesBetaTagDismissibleContent.dismissBetaTag };
  return obj;
};