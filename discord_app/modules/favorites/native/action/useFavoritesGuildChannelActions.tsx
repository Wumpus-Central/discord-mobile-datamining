// discord_app/modules/favorites/native/action/useFavoritesGuildChannelActions.tsx
import closure_2 from "../../../../stores/AuthenticationStore.tsx";
import closure_3 from "../../../../stores/GuildMemberStore.tsx";
import closure_4 from "../../FavoriteStore.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useFavoritesAccess } from "../../FavoritesHooks.tsx";
import { getFavoritesAwareGuildName } from "../../FavoritesUtils.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default function useFavoritesGuildChannelActions(channelId, FavoritesGuildActionSheet) {
  const _require = channelId;
  let obj = useFavoritesAccess;
  const favoritesAccess = obj.useFavoritesAccess(FavoritesGuildActionSheet);
  ({ hasAccess, isExperimentEnabled } = favoritesAccess);
  let isFavoritableChannelResult = require("../../FavoritesUtils.tsx").isFavoritableChannel(channelId);
  const obj2 = getFavoritesAwareGuildName;
  const tmp = _require;
  const items = [closure_4];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_4.isFavorite(channelId.id));
  const obj3 = initialize;
  const isFavoritesGuildSelected = require("../../FavoritesHooks.tsx").useIsFavoritesGuildSelected();
  const obj4 = useFavoritesAccess;
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
  obj5 = initialize;
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
  const favoritesBetaTagDismissibleContent = tmp(10029).useFavoritesBetaTagDismissibleContent(tmp7);
  obj = { isExperimentEnabled, hasFavoritesAccess: hasAccess, canFavoriteChannel: isFavoritableChannelResult, isChannelInFavorites: stateFromStores, isFavoritesGuild: isFavoritesGuildSelected, channelId: channelId.id, shouldShowBetaTag: favoritesBetaTagDismissibleContent.shouldShowBetaTag, dismissBetaTag: favoritesBetaTagDismissibleContent.dismissBetaTag };
  return obj;
};