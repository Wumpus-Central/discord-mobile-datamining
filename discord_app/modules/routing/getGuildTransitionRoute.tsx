// === Module 7475: getGuildTransitionRoute ===

// Module 7475 (getGuildTransitionRoute)
import FavoritesUtils from "FavoritesUtils" /* 5044 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 7484 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7491 */;
import ConjureUtils from "ConjureUtils" /* 7506 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 7476 */;
import ConjureServerProjectRouteStore from "ConjureServerProjectRouteStore" /* 7478 */;
import FavoriteStore from "FavoriteStore" /* 5022 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 7350 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import GuildChannelStore from "GuildChannelStore" /* 5100 */;
import GuildStore from "GuildStore" /* 5041 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5073 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7482 */;

require = fn;
const ME = fn(1072).ME;
const StaticChannelRoute = fn(5026).StaticChannelRoute;
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/getGuildTransitionRoute.tsx");

export function getGuildTransitionRoute(id) {
  const lastProjectId = ConjureBuilderRouteStore.getLastProjectId(id);
  if (null != lastProjectId) {
    guild = GuildStore.getGuild(id);
    let canAccessConjureResult = null != guild;
    if (canAccessConjureResult) {
      canAccessConjureResult = ConjureUtils.canAccessConjure(guild, "getChannelIdForGuildTransition");
    }
    if (canAccessConjureResult) {
      items = [StaticChannelRoute.CONJURE, lastProjectId];
      return items;
    }
  }
  const channelId = SelectedChannelStore.getChannelId(id);
  const defaultChannel = GuildChannelStore.getDefaultChannel(id);
  id = undefined;
  if (defaultChannel != null) {
    id = defaultChannel.id;
  }
  if (id == null) {
    let tmp11;
    if (id === ME) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      let first;
      if (privateChannelIds.length > 0) {
        first = privateChannelIds[0];
      }
      tmp11 = first;
    }
    id = tmp11;
  }
  if (channelId === StaticChannelRoute.GUILD_ONBOARDING) {
    if (!GuildOnboardingStore.shouldShowOnboarding(id)) {
      const items1 = [id, null];
      return items1;
    }
  }
  if (channelId === StaticChannelRoute.GUILD_HOME) {
    if (!obj2.canSeeOnboardingHome(id)) {
      const items2 = [id, null];
      return items2;
    }
    obj2 = OnboardingHomeUtils;
  }
  if (channelId === StaticChannelRoute.GUILD_SPACE) {
    const items3 = [, ];
    if (obj7.canUseGuildSpace(GuildStore.getGuild(id), "getChannelIdForGuildTransition")) {
      items3[0] = channelId;
      items3[1] = null;
      let tmp34 = items3;
    } else {
      items3[0] = id;
      items3[1] = null;
      tmp34 = items3;
    }
    return tmp34;
  } else {
    if (channelId === StaticChannelRoute.GAME_SHOP) {
      if (obj3.canSeeGameShop(id)) {
        const items4 = [channelId, null];
        return items4;
      }
      obj3 = SlayerStorefrontUtils;
    }
    if (channelId !== StaticChannelRoute.CONJURE) {
      if (channelId !== StaticChannelRoute.CONJURE_PROJECT) {
        const channel = ChannelStore.getChannel(channelId);
        if (null != channel) {
          if (!channel.isGuildVocal()) {
            FavoritesUtils;
            let items5 = [channelId, null];
          }
          return items5;
        }
        const items6 = [id, null];
        items5 = items6;
      }
    }
    const guild1 = GuildStore.getGuild(id);
    let canAccessConjureResult1 = null != guild1;
    if (canAccessConjureResult1) {
      canAccessConjureResult1 = ConjureUtils.canAccessConjure(guild1, "getChannelIdForGuildTransition");
    }
    if (canAccessConjureResult1) {
      let returnProjectId = null;
      if (channelId === StaticChannelRoute.CONJURE_PROJECT) {
        returnProjectId = ConjureServerProjectRouteStore.getReturnProjectId(id);
      }
      if (null != returnProjectId) {
        const items7 = [StaticChannelRoute.CONJURE_PROJECT, returnProjectId];
        let items8 = items7;
      } else {
        items8 = [StaticChannelRoute.CONJURE, null];
      }
      return items8;
    } else {
      const items9 = [id, null];
      return items9;
    }
  }
}