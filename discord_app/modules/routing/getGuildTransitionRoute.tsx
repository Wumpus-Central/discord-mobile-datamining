// === Module 6836: getGuildTransitionRoute ===

// Module 6836 (getGuildTransitionRoute)
import FavoritesUtils from "FavoritesUtils" /* 4787 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 6683 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6847 */;
import ConjureUtils from "ConjureUtils" /* 6865 */;
import ConjureServerProjectRouteStore from "ConjureServerProjectRouteStore" /* 6837 */;
import FavoriteStore from "FavoriteStore" /* 4765 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 6841 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import GuildChannelStore from "GuildChannelStore" /* 4843 */;
import GuildStore from "GuildStore" /* 4784 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4816 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 6842 */;

require = fn;
const Constants = fn(1071);
({ ME: closure_10, WATERWHEELS: closure_11 } = Constants);
const StaticChannelRoute = fn(4769).StaticChannelRoute;
const CONJURE_PROJECT = StaticChannelRoute.CONJURE_PROJECT;
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/getGuildTransitionRoute.tsx");

export function getGuildTransitionRoute(id) {
  if (id === closure_1_11) {
    return [null, null];
  } else {
    const channelId = SelectedChannelStore.getChannelId(id);
    const defaultChannel = GuildChannelStore.getDefaultChannel(id);
    id = undefined;
    if (defaultChannel != null) {
      id = defaultChannel.id;
    }
    if (id == null) {
      let tmp3;
      if (id === refs) {
        const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
        let first;
        if (privateChannelIds.length > 0) {
          first = privateChannelIds[0];
        }
        tmp3 = first;
      }
      id = tmp3;
    }
    if (channelId === StaticChannelRoute.GUILD_ONBOARDING) {
      if (!GuildOnboardingStore.shouldShowOnboarding(id)) {
        items = [id, null];
        return items;
      }
    }
    if (channelId === StaticChannelRoute.GUILD_HOME) {
      if (!obj.canSeeOnboardingHome(id)) {
        const items1 = [id, null];
        return items1;
      }
      obj = OnboardingHomeUtils;
    }
    if (channelId === StaticChannelRoute.GUILD_SPACE) {
      const items2 = [, ];
      if (obj6.canUseGuildSpace(GuildStore.getGuild(id), "getChannelIdForGuildTransition")) {
        items2[0] = channelId;
        items2[1] = null;
        let tmp27 = items2;
      } else {
        items2[0] = id;
        items2[1] = null;
        tmp27 = items2;
      }
      return tmp27;
    } else {
      if (channelId === StaticChannelRoute.GAME_SHOP) {
        if (obj2.canSeeGameShop(id)) {
          const items3 = [channelId, null];
          return items3;
        }
        obj2 = SlayerStorefrontUtils;
      }
      if (channelId !== StaticChannelRoute.CONJURE) {
        if (channelId !== StaticChannelRoute.CONJURE_PROJECT) {
          const channel = ChannelStore.getChannel(channelId);
          if (null != channel) {
            if (!channel.isGuildVocal()) {
              FavoritesUtils;
              let items4 = [channelId, null];
            }
            return items4;
          }
          const items5 = [id, null];
          items4 = items5;
        }
      }
      guild = GuildStore.getGuild(id);
      let canAccessConjureResult = null != guild;
      if (canAccessConjureResult) {
        canAccessConjureResult = ConjureUtils.canAccessConjure(guild, "getChannelIdForGuildTransition");
      }
      if (canAccessConjureResult) {
        let returnProjectId = null;
        if (channelId === StaticChannelRoute.CONJURE_PROJECT) {
          returnProjectId = ConjureServerProjectRouteStore.getReturnProjectId(id);
        }
        if (null != returnProjectId) {
          const items6 = [StaticChannelRoute.CONJURE_PROJECT, returnProjectId];
          let items7 = items6;
        } else {
          items7 = [CONJURE_PROJECT, null];
        }
        return items7;
      } else {
        const items8 = [id, null];
        return items8;
      }
    }
  }
}