// === Module 7197: getChannelIdForGuildTransition ===

// Module 7197 (getChannelIdForGuildTransition)
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1913 */;
import useCanSeeOnboardingHome from "useCanSeeOnboardingHome" /* 5283 */;
import getPrice from "getPrice" /* 7200 */;
import initializeFromUserSettings from "initializeFromUserSettings" /* 1394 */;
import shouldShowOnboarding from "shouldShowOnboarding" /* 6784 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import comparator from "comparator" /* 1980 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import makeSortedChannel from "makeSortedChannel" /* 5388 */;
import { ME } from "ME" /* 676 */;
import { StaticChannelRoute } from "set" /* 1398 */;

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