// === Module 11614: ChannelSummariesExperiment ===

// Module 11614 (ChannelSummariesExperiment)
import ChannelConstants from "ChannelConstants" /* 2049 */;
import GuildRecord from "GuildRecord" /* 2060 */;
import FavoritesUtils from "FavoritesUtils" /* 2067 */;
import GuildStore from "GuildStore" /* 2064 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function canSeeChannelSummaries(channel) {
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  let tmp = null != channel;
  if (tmp) {
    let flag4 = false;
    if (null != channel) {
      let str;
      if (channel != null) {
        str = channel.guild_id;
      }
      if (str == null) {
        str = "";
      }
      const guild = GuildStore.getGuild(str);
      const SUMMARIZEABLE = constants.SUMMARIZEABLE;
      const tmp4 = null != guild && guild.rulesChannelId === channel.id;
      const tmp6 = isGuildNSFW(guild);
      flag4 = SUMMARIZEABLE.has(channel.type) && !channel.isNSFW() && !(null != guild && guild.rulesChannelId === channel.id) && !isGuildNSFW(guild);
      const tmp8 = SUMMARIZEABLE.has(channel.type) && !channel.isNSFW() && !(null != guild && guild.rulesChannelId === channel.id) && !isGuildNSFW(guild);
    }
    let tmp9 = flag4;
    if (tmp9) {
      let tmp10 = false !== flag;
      if (!tmp10) {
        tmp10 = !channel.hasFlag(ChannelFlags.SUMMARIES_DISABLED);
      }
      if (tmp10) {
        const guild1 = GuildStore.getGuild(channel.guild_id);
        if (flag2 === undefined) {
          flag2 = true;
        }
        let tmp14 = null != guild1;
        if (tmp14) {
          const id = guild1.id;
          let tmp15 = null != id;
          if (tmp15) {
            let isFavoritesGuildIdResult = id === React4;
            if (!isFavoritesGuildIdResult) {
              isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(id);
            }
            tmp15 = isFavoritesGuildIdResult;
          }
          let tmp20 = !tmp15;
          if (!tmp15) {
            const features = guild1.features;
            let hasItem1 = features.has(constants2.SUMMARIES_ENABLED_GA);
            if (hasItem1) {
              let hasItem = !flag2;
              if (flag2) {
                const features2 = guild1.features;
                hasItem = features2.has(constants2.SUMMARIES_ENABLED_BY_USER);
              }
              hasItem1 = hasItem;
            }
            tmp20 = hasItem1;
          }
          tmp14 = tmp20;
        }
        tmp10 = tmp14;
      }
      tmp9 = tmp10;
    }
    tmp = tmp9;
  }
  return tmp;
}
const isGuildNSFW = GuildRecord.isGuildNSFW;
({ ME: closure_4, ChannelTypesSets: hasOwnProperty, GuildFeatures: metroRequire, EMPTY_STRING_SNOWFLAKE_ID: closure_7 } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
const result = size.fileFinishedImporting("experiments/ChannelSummariesExperiment.tsx");

export const channelEligibleForSummaries = function channelEligibleForSummaries(channel) {
  return canSeeChannelSummaries(channel, true, false);
};
export { canSeeChannelSummaries };
export const canGuildUseConversationSummaries = function canGuildUseConversationSummaries(guild, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let tmp = null != guild;
  if (tmp) {
    const id = guild.id;
    let tmp2 = null != id;
    if (tmp2) {
      let isFavoritesGuildIdResult = id === React4;
      if (!isFavoritesGuildIdResult) {
        isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(id);
      }
      tmp2 = isFavoritesGuildIdResult;
    }
    let tmp7 = !tmp2;
    if (!tmp2) {
      const features = guild.features;
      let hasItem1 = features.has(constants2.SUMMARIES_ENABLED_GA);
      if (hasItem1) {
        let hasItem = !flag;
        if (flag) {
          const features2 = guild.features;
          hasItem = features2.has(constants2.SUMMARIES_ENABLED_BY_USER);
        }
        hasItem1 = hasItem;
      }
      tmp7 = hasItem1;
    }
    tmp = tmp7;
  }
  return tmp;
};
export const useChannelSummariesExperiment = function useChannelSummariesExperiment(channel) {
  if (flag === undefined) {
    flag = false;
  }
  return canSeeChannelSummaries(channel, flag);
};
export const useGuildEligibleForSummaries = function useGuildEligibleForSummaries(arg0) {
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
  return require("useStateFromStores").useStateFromStores(items, () => {
    let id1;
    if (id != null) {
      id1 = id.id;
    }
    if (id1 == null) {
      id1 = React5;
    }
    const guild = GuildStore.getGuild(id1);
    let tmp4 = null != guild;
    if (tmp4) {
      id = guild.id;
      let tmp5 = null != id;
      if (tmp5) {
        let isFavoritesGuildIdResult = id === React4;
        if (!isFavoritesGuildIdResult) {
          isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(id);
        }
        tmp5 = isFavoritesGuildIdResult;
      }
      let tmp10 = !tmp5;
      if (!tmp5) {
        const features = guild.features;
        let hasItem = features.has(constants2.SUMMARIES_ENABLED_GA);
        if (hasItem) {
          // // eliminated: always false
          hasItem = flag2;
        }
        tmp10 = hasItem;
      }
      tmp4 = tmp10;
    }
    return tmp4;
  }, items1);
};