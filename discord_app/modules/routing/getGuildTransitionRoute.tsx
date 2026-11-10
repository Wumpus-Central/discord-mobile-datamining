// === Module 7455: getGuildTransitionRoute ===

// Module 7455 (getGuildTransitionRoute)
import FavoritesUtils from "FavoritesUtils" /* 5016 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 7464 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7471 */;
import ConjureUtils from "ConjureUtils" /* 7486 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 7456 */;
import ConjureServerProjectRouteStore from "ConjureServerProjectRouteStore" /* 7458 */;
import FavoriteStore from "FavoriteStore" /* 4994 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 7330 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import GuildChannelStore from "GuildChannelStore" /* 5072 */;
import GuildStore from "GuildStore" /* 5013 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5045 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7462 */;

require = fn;
const Constants = fn(1072);
({ ME: closure_11, WATERWHEELS: closure_12 } = Constants);
const StaticChannelRoute = fn(4998).StaticChannelRoute;
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/getGuildTransitionRoute.tsx");

export function getGuildTransitionRoute(id) {
  if (id === application_id) {
    return [null, null];
  } else {
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
      let tmp12;
      if (id === closure_1_11) {
        const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
        let first;
        if (privateChannelIds.length > 0) {
          first = privateChannelIds[0];
        }
        tmp12 = first;
      }
      id = tmp12;
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
        let tmp35 = items3;
      } else {
        items3[0] = id;
        items3[1] = null;
        tmp35 = items3;
      }
      return tmp35;
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
}