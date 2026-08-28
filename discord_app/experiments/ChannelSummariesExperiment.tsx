// === Module 10922: canSeeChannelSummaries ===

// Module 10922 (canSeeChannelSummaries)
import set from "set" /* 2 */;
import set2 from "set" /* 1398 */;
import GuildNSFWContentLevel from "GuildNSFWContentLevel" /* 1434 */;
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1913 */;
import closure_3 from "createGuildRecordFromRust" /* 1910 */;
import ME from "ME" /* 676 */;

function canSeeChannelSummaries(channel, flag, arg2) {
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
      const guild = store.getGuild(str);
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
        const guild1 = store.getGuild(channel.guild_id);
        if (flag2 === undefined) {
          flag2 = true;
        }
        let tmp14 = null != guild1;
        if (tmp14) {
          const id = guild1.id;
          let tmp15 = null != id;
          if (tmp15) {
            let isFavoritesGuildIdResult = id === closure_4;
            if (!isFavoritesGuildIdResult) {
              isFavoritesGuildIdResult = getFavoritesAwareGuildName.isFavoritesGuildId(id);
              const obj = getFavoritesAwareGuildName;
            }
            tmp15 = isFavoritesGuildIdResult;
          }
          let tmp20 = !tmp15;
          if (!tmp15) {
            const features = guild1.features;
            let hasItem = features.has(constants2.SUMMARIES_ENABLED_GA);
            if (hasItem) {
              hasItem = !flag2;
              if (flag2) {
                const features2 = guild1.features;
                hasItem = features2.has(tmp21.SUMMARIES_ENABLED_BY_USER);
              }
            }
            tmp20 = hasItem;
            tmp21 = constants2;
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
const isGuildNSFW = GuildNSFWContentLevel.isGuildNSFW;
({ ME: c4, ChannelTypesSets: c5, GuildFeatures: closure_6, EMPTY_STRING_SNOWFLAKE_ID: error } = ME);
const ChannelFlags = set2.ChannelFlags;
const result = set.fileFinishedImporting("experiments/ChannelSummariesExperiment.tsx");

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
      let isFavoritesGuildIdResult = id === closure_4;
      if (!isFavoritesGuildIdResult) {
        isFavoritesGuildIdResult = getFavoritesAwareGuildName.isFavoritesGuildId(id);
        const obj = getFavoritesAwareGuildName;
      }
      tmp2 = isFavoritesGuildIdResult;
    }
    let tmp7 = !tmp2;
    if (!tmp2) {
      const features = guild.features;
      let hasItem = features.has(constants2.SUMMARIES_ENABLED_GA);
      if (hasItem) {
        hasItem = !flag;
        if (flag) {
          const features2 = guild.features;
          hasItem = features2.has(tmp8.SUMMARIES_ENABLED_BY_USER);
        }
      }
      tmp7 = hasItem;
      tmp8 = constants2;
    }
    tmp = tmp7;
  }
  return tmp;
};
export const useChannelSummariesExperiment = function useChannelSummariesExperiment(channel, arg1, flag) {
  if (flag === undefined) {
    flag = false;
  }
  return canSeeChannelSummaries(channel, flag);
};
export const useGuildEligibleForSummaries = function useGuildEligibleForSummaries(arg0) {
  const _require = arg0;
  const items = [closure_3];
  const items1 = [arg0];
  return _require(647).useStateFromStores(items, () => {
    let id;
    if (lib != null) {
      id = lib.id;
    }
    if (id == null) {
      id = closure_1_7;
    }
    const guild = closure_1_3.getGuild(id);
    let tmp4 = null != guild;
    if (tmp4) {
      id = guild.id;
      let tmp5 = null != id;
      if (tmp5) {
        let isFavoritesGuildIdResult = id === closure_1_4;
        if (!isFavoritesGuildIdResult) {
          isFavoritesGuildIdResult = lib(closure_1_1[4]).isFavoritesGuildId(id);
          const obj = lib(closure_1_1[4]);
        }
        tmp5 = isFavoritesGuildIdResult;
      }
      let tmp10 = !tmp5;
      if (!tmp5) {
        const features = guild.features;
        let hasItem = features.has(closure_1_6.SUMMARIES_ENABLED_GA);
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