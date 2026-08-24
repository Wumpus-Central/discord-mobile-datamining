// discord_app/modules/routing/getChannelIdForGuildTransition.tsx
import getFavoritesAwareGuildName from "../favorites/FavoritesUtils.tsx";
import useCanSeeOnboardingHome from "../guild_onboarding_home/OnboardingHomeUtils.tsx";
import getPrice from "../slayer_storefront/SlayerStorefrontUtils.tsx";
import closure_2 from "../favorites/FavoriteStore.tsx";
import closure_3 from "../guild_onboarding/GuildOnboardingStore.tsx";
import closure_4 from "../../stores/ChannelStore.tsx";
import closure_5 from "../../stores/GuildChannelStore.tsx";
import closure_6 from "../../stores/GuildStore.tsx";
import closure_7 from "../../stores/SelectedChannelStore.tsx";
import closure_8 from "../../stores/views/PrivateChannelSortStore.tsx";
import { ME } from "../../Constants.tsx";
import { StaticChannelRoute } from "../channel/ChannelConstants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/routing/getChannelIdForGuildTransition.tsx");

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
    if (channelId === tmp8.GAME_SHOP) {
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