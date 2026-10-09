// discord_app/modules/routing/getGuildTransitionRoute.tsx
import FavoritesUtils from "../favorites/FavoritesUtils.tsx";
import OnboardingHomeUtils from "../guild_onboarding_home/OnboardingHomeUtils.tsx";
import SlayerStorefrontUtils from "../slayer_storefront/SlayerStorefrontUtils.tsx";
import ConjureUtils from "../conjure/shared/ConjureUtils.tsx";
import ConjureBuilderRouteStore from "../conjure/builder/ConjureBuilderRouteStore.tsx";
import FavoriteStore from "../favorites/FavoriteStore.tsx";
import GuildOnboardingStore from "../guild_onboarding/GuildOnboardingStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import PrivateChannelSortStore from "../../stores/views/PrivateChannelSortStore.tsx";

require = fn;
const ME = fn(1085).ME;
const StaticChannelRoute = fn(2071).StaticChannelRoute;
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/getGuildTransitionRoute.tsx");

export const getGuildTransitionRoute = function getGuildTransitionRoute(guildId) {
  const lastProjectId = ConjureBuilderRouteStore.getLastProjectId(guildId);
  if (null != lastProjectId) {
    guild = GuildStore.getGuild(guildId);
    let canAccessConjureResult = null != guild;
    if (canAccessConjureResult) {
      canAccessConjureResult = ConjureUtils.canAccessConjure(guild, "getChannelIdForGuildTransition");
    }
    if (canAccessConjureResult) {
      const items = [StaticChannelRoute.CONJURE, lastProjectId];
      return items;
    }
  }
  const channelId = SelectedChannelStore.getChannelId(guildId);
  const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
  let id;
  if (defaultChannel != null) {
    id = defaultChannel.id;
  }
  if (id == null) {
    let tmp11;
    if (guildId === ME) {
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
    if (!GuildOnboardingStore.shouldShowOnboarding(guildId)) {
      const items1 = [id, null];
      return items1;
    }
  }
  if (channelId === StaticChannelRoute.GUILD_HOME) {
    if (!obj2.canSeeOnboardingHome(guildId)) {
      const items2 = [id, null];
      return items2;
    }
    obj2 = OnboardingHomeUtils;
  }
  if (channelId === StaticChannelRoute.GUILD_SPACE) {
    const items3 = [,];
    if (obj7.canUseGuildSpace(GuildStore.getGuild(guildId), "getChannelIdForGuildTransition")) {
      items3[0] = channelId;
      items3[1] = null;
      let tmp33 = items3;
    } else {
      items3[0] = id;
      items3[1] = null;
      tmp33 = items3;
    }
    return tmp33;
  } else {
    if (channelId === StaticChannelRoute.GAME_SHOP) {
      if (obj3.canSeeGameShop(guildId)) {
        const items4 = [channelId, null];
        return items4;
      }
      obj3 = SlayerStorefrontUtils;
    }
    if (channelId === StaticChannelRoute.CONJURE) {
      const guild1 = GuildStore.getGuild(guildId);
      let canAccessConjureResult1 = null != guild1;
      if (canAccessConjureResult1) {
        canAccessConjureResult1 = ConjureUtils.canAccessConjure(guild1, "getChannelIdForGuildTransition");
      }
      const items5 = [,];
      if (canAccessConjureResult1) {
        items5[0] = channelId;
        items5[1] = null;
        let tmp29 = items5;
      } else {
        items5[0] = id;
        items5[1] = null;
        tmp29 = items5;
      }
      return tmp29;
    } else {
      const channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        if (!channel.isGuildVocal()) {
          FavoritesUtils;
          let items6 = [channelId, null];
        }
        return items6;
      }
      const items7 = [id, null];
      items6 = items7;
    }
  }
};
