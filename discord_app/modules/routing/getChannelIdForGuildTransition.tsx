// === Module 6073: getChannelIdForGuildTransition ===

// Module 6073 (getChannelIdForGuildTransition)
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1911 */;
import useCanSeeOnboardingHome from "useCanSeeOnboardingHome" /* 6078 */;
import getPrice from "getPrice" /* 6082 */;
import closure_2 from "initializeFromUserSettings" /* 1389 */;
import closure_3 from "shouldShowOnboarding" /* 5472 */;
import closure_4 from "ensureGuildLoaded" /* 1386 */;
import closure_5 from "comparator" /* 1981 */;
import closure_6 from "createGuildRecordFromRust" /* 1908 */;
import closure_7 from "handleConnectionOpen" /* 1980 */;
import closure_8 from "makeSortedChannel" /* 6074 */;
import { ME } from "ME" /* 673 */;
import { StaticChannelRoute } from "set" /* 1393 */;

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