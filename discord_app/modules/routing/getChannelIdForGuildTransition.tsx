import shouldShowOnboarding from "shouldShowOnboarding";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import makeSortedChannel from "makeSortedChannel";
import { ME } from "ME";
import { StaticChannelRoute } from "set";

const require = arg1;
const result = require("comparator").fileFinishedImporting("modules/routing/getChannelIdForGuildTransition.tsx");

export const getChannelIdForGuildTransition = function getChannelIdForGuildTransition(id) {
  channelId = channelId.getChannelId(id);
  defaultChannel = defaultChannel.getDefaultChannel(id);
  id = undefined;
  if (defaultChannel != null) {
    id = defaultChannel.id;
  }
  if (id == null) {
    let tmp5;
    if (id === ME) {
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
    if (!shouldShowOnboarding.shouldShowOnboarding(id)) {
      return id;
    }
  }
  if (channelId === StaticChannelRoute.GUILD_HOME) {
    if (!obj.canSeeOnboardingHome(id)) {
      return id;
    }
    obj = require(5753) /* useCanSeeOnboardingHome */;
  }
  if (channelId === StaticChannelRoute.GUILD_SPACE) {
    if (obj4.canUseGuildSpace(guild.getGuild(id), "getChannelIdForGuildTransition")) {
      id = channelId;
    }
    return id;
  } else {
    if (channelId === tmp8.GAME_SHOP) {
      if (obj2.canSeeGameShop(id)) {
        return channelId;
      }
      obj2 = require(5757) /* getPrice */;
    }
    channel = channel.getChannel(channelId);
    if (null == channel) {
      let tmp15 = id;
    } else {
      tmp15 = channelId;
    }
    return tmp15;
  }
};