// === Module 6638: getChannelIdForGuildTransition ===

// Module 6638 (getChannelIdForGuildTransition)
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import VibegrationsUtils from "VibegrationsUtils" /* 5370 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 6643 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6647 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 6517 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 6639 */;

require = fn;
const ME = fn(1074).ME;
const StaticChannelRoute = fn(2052).StaticChannelRoute;
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
    if (obj6.canUseGuildSpace(GuildStore.getGuild(guildId), "getChannelIdForGuildTransition")) {
      id = channelId;
    }
    return id;
  } else {
    if (channelId === StaticChannelRoute.GAME_SHOP) {
      if (obj2.canSeeGameShop(guildId)) {
        return channelId;
      }
      obj2 = SlayerStorefrontUtils;
    }
    if (channelId === StaticChannelRoute.VIBEGRATIONS) {
      const guild = GuildStore.getGuild(guildId);
      let tmp21 = id;
      if (null != guild) {
        tmp21 = id;
        if (obj5.canAccessVibegrations(guild, "getChannelIdForGuildTransition")) {
          tmp21 = channelId;
        }
        obj5 = VibegrationsUtils;
      }
      return tmp21;
    } else {
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
  }
};