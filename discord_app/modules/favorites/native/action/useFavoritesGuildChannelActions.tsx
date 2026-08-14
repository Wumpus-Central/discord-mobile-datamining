// discord_app/modules/favorites/native/action/useFavoritesGuildChannelActions.tsx
import fetchFingerprint from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import initializeFromUserSettings from "initializeFromUserSettings";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useFavoritesAccess } from "../../FavoritesHooks.tsx";
import { getFavoritesAwareGuildName } from "../../FavoritesUtils.tsx";

const require = arg1;
const result = require("initializeFromUserSettings").fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default function useFavoritesGuildChannelActions(channelId, FavoritesGuildActionSheet) {
  const _require = channelId;
  let obj = _useFavoritesAccess;
  const hasAccess = obj.useFavoritesAccess(FavoritesGuildActionSheet).hasAccess;
  let isFavoritableChannelResult = _getFavoritesAwareGuildName.isFavoritableChannel(channelId);
  const obj2 = _getFavoritesAwareGuildName;
  const tmp = _require;
  const items = [initializeFromUserSettings];
  const stateFromStores = _initialize.useStateFromStores(items, () => outer1_4.isFavorite(channelId.id));
  const obj3 = _initialize;
  const isFavoritesGuildSelected = _useFavoritesAccess.useIsFavoritesGuildSelected();
  const obj4 = _useFavoritesAccess;
  const items1 = [trackCommunicationDisabled, fetchFingerprint];
  if (isFavoritableChannelResult) {
    isFavoritableChannelResult = obj5.useStateFromStores(items1, () => {
      let isMemberResult = null == channelId.guild_id;
      if (!isMemberResult) {
        isMemberResult = outer1_3.isMember(tmp.guild_id, outer1_2.getId());
      }
      return isMemberResult;
    });
  }
  obj5 = _initialize;
  let tmp6 = hasAccess;
  if (hasAccess) {
    tmp6 = isFavoritableChannelResult;
  }
  if (tmp6) {
    tmp6 = !stateFromStores;
  }
  if (tmp6) {
    tmp6 = !isFavoritesGuildSelected;
  }
  const favoritesBetaTagDismissibleContent = tmp(9781).useFavoritesBetaTagDismissibleContent(tmp6);
  obj = { hasFavoritesAccess: hasAccess, canFavoriteChannel: isFavoritableChannelResult, isChannelInFavorites: stateFromStores, isFavoritesGuild: isFavoritesGuildSelected, channelId: channelId.id, shouldShowBetaTag: favoritesBetaTagDismissibleContent.shouldShowBetaTag, dismissBetaTag: favoritesBetaTagDismissibleContent.dismissBetaTag };
  return obj;
};