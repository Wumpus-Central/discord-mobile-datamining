// === Module 10515: useFavoritesGuildChannelActions ===

// Module 10515 (useFavoritesGuildChannelActions)
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "trackCommunicationDisabled" /* 1990 */;
import closure_4 from "initializeFromUserSettings" /* 1394 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default function useFavoritesGuildChannelActions(channelId, FavoritesGuildActionSheet) {
  const _require = channelId;
  let obj = _require(9979);
  const favoritesAccess = obj.useFavoritesAccess(FavoritesGuildActionSheet);
  ({ hasAccess, isExperimentEnabled } = favoritesAccess);
  let isFavoritableChannelResult = _require(1913).isFavoritableChannel(channelId);
  const obj2 = _require(1913);
  const tmp = _require;
  const items = [closure_4];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_4.isFavorite(channelId.id));
  const obj3 = _require(589);
  const isFavoritesGuildSelected = _require(9979).useIsFavoritesGuildSelected();
  const obj4 = _require(9979);
  const items1 = [closure_3, closure_2];
  if (isFavoritableChannelResult) {
    isFavoritableChannelResult = obj5.useStateFromStores(items1, () => {
      let isMemberResult = null == channelId.guild_id;
      if (!isMemberResult) {
        isMemberResult = closure_1_3.isMember(tmp.guild_id, closure_1_2.getId());
      }
      return isMemberResult;
    });
  }
  obj5 = _require(589);
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
  const favoritesBetaTagDismissibleContent = tmp(9990).useFavoritesBetaTagDismissibleContent(tmp7);
  obj = { isExperimentEnabled, hasFavoritesAccess: hasAccess, canFavoriteChannel: isFavoritableChannelResult, isChannelInFavorites: stateFromStores, isFavoritesGuild: isFavoritesGuildSelected, channelId: channelId.id, shouldShowBetaTag: favoritesBetaTagDismissibleContent.shouldShowBetaTag, dismissBetaTag: favoritesBetaTagDismissibleContent.dismissBetaTag };
  return obj;
};