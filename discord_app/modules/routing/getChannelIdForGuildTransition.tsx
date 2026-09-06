// discord_app/modules/routing/getChannelIdForGuildTransition.tsx
import FavoritesUtils from "../favorites/FavoritesUtils.tsx";
import OnboardingHomeUtils from "../guild_onboarding_home/OnboardingHomeUtils.tsx";
import SlayerStorefrontUtils from "../slayer_storefront/SlayerStorefrontUtils.tsx";
import FavoriteStore from "../favorites/FavoriteStore.tsx";
import GuildOnboardingStore from "../guild_onboarding/GuildOnboardingStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import PrivateChannelSortStore from "../../stores/views/PrivateChannelSortStore.tsx";

require = fn;
const ME = fn(1074).ME;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/getChannelIdForGuildTransition.tsx");

export const getChannelIdForGuildTransition = function getChannelIdForGuildTransition(guildId) {
  const channelId = SelectedChannelStore.getChannelId(guildId);
  const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
  let id;
  if (defaultChannel != null) {
    id = defaultChannel.id;
  }
  if (id == null) {
    let tmp5;
    if (guildId === ME) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      let first;
      if (privateChannelIds.length > 0) {
        first = privateChannelIds[0];
      }
      tmp5 = first;
    }
    id = tmp5;
  }
  if (channelId === StaticChannelRoute.GUILD_ONBOARDING) {
    if (!GuildOnboardingStore.shouldShowOnboarding(guildId)) {
      return id;
    }
  }
  if (channelId === StaticChannelRoute.GUILD_HOME) {
    if (!obj.canSeeOnboardingHome(guildId)) {
      return id;
    }
    obj = OnboardingHomeUtils;
  }
  if (channelId === StaticChannelRoute.GUILD_SPACE) {
    if (obj5.canUseGuildSpace(GuildStore.getGuild(guildId), "getChannelIdForGuildTransition")) {
      id = channelId;
    }
    return id;
  } else {
    if (channelId === tmp8.GAME_SHOP) {
      if (obj2.canSeeGameShop(guildId)) {
        return channelId;
      }
      obj2 = SlayerStorefrontUtils;
    }
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      if (!channel.isGuildVocal()) {
        let tmp17 = channelId;
        if (obj4.isFavoritesGuildId(guildId)) {
          tmp17 = channelId;
        }
        obj4 = FavoritesUtils;
      }
      return tmp17;
    }
    tmp17 = id;
  }
};
