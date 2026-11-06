// discord_app/modules/routing/getGuildTransitionRoute.tsx
import FavoritesUtils from "../favorites/FavoritesUtils.tsx";
import OnboardingHomeUtils from "../guild_onboarding_home/OnboardingHomeUtils.tsx";
import SlayerStorefrontUtils from "../slayer_storefront/SlayerStorefrontUtils.tsx";
import ConjureUtils from "../conjure/shared/ConjureUtils.tsx";
import ConjureBuilderRouteStore from "../conjure/builder/ConjureBuilderRouteStore.tsx";
import ConjureServerProjectRouteStore from "../conjure/server_workspace/ConjureServerProjectRouteStore.tsx";
import FavoriteStore from "../favorites/FavoriteStore.tsx";
import GuildOnboardingStore from "../guild_onboarding/GuildOnboardingStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import PrivateChannelSortStore from "../../stores/views/PrivateChannelSortStore.tsx";

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
    const items3 = [,];
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
