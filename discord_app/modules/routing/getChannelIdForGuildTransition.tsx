// discord_app/modules/routing/getChannelIdForGuildTransition.tsx
import getFavoritesAwareGuildName from "../favorites/FavoritesUtils.tsx";
import useCanSeeOnboardingHome from "../guild_onboarding_home/OnboardingHomeUtils.tsx";
import getPrice from "../slayer_storefront/SlayerStorefrontUtils.tsx";
import initializeFromUserSettings from "../favorites/FavoriteStore.tsx";
import shouldShowOnboarding from "../guild_onboarding/GuildOnboardingStore.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import comparator from "../../stores/GuildChannelStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import handleConnectionOpen from "../../stores/SelectedChannelStore.tsx";
import makeSortedChannel from "../../stores/views/PrivateChannelSortStore.tsx";
import { ME } from "../../Constants.tsx";
import { StaticChannelRoute } from "../channel/ChannelConstants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/routing/getChannelIdForGuildTransition.tsx");

export const getChannelIdForGuildTransition = function getChannelIdForGuildTransition(guildId) {
  channelId = channelId.getChannelId(guildId);
  defaultChannel = defaultChannel.getDefaultChannel(guildId);
  let id;
  if (defaultChannel != null) {
    id = defaultChannel.id;
  }
  if (id == null) {
    let tmp5;
    if (guildId === ME) {
      privateChannelIds = privateChannelIds.getPrivateChannelIds();
      let first;
      if (privateChannelIds.length > 0) {
        first = privateChannelIds[0];
      }
      tmp5 = first;
    }
    id = tmp5;
  }
  if (channelId === StaticChannelRoute.GUILD_ONBOARDING) {
    if (!closure_3.shouldShowOnboarding(guildId)) {
      return id;
    }
  }
  if (channelId === StaticChannelRoute.GUILD_HOME) {
    if (!obj.canSeeOnboardingHome(guildId)) {
      return id;
    }
    obj = useCanSeeOnboardingHome;
  }
  if (channelId === StaticChannelRoute.GUILD_SPACE) {
    if (obj5.canUseGuildSpace(guild.getGuild(guildId), "getChannelIdForGuildTransition")) {
      id = channelId;
    }
    return id;
  } else {
    if (channelId === StaticChannelRoute.GAME_SHOP) {
      if (obj2.canSeeGameShop(guildId)) {
        return channelId;
      }
      obj2 = getPrice;
    }
    channel = channel.getChannel(channelId);
    if (null != channel) {
      if (!channel.isGuildVocal()) {
        let tmp17 = channelId;
        if (obj4.isFavoritesGuildId(guildId)) {
          tmp17 = channelId;
        }
        obj4 = getFavoritesAwareGuildName;
      }
      return tmp17;
    }
    tmp17 = id;
  }
};