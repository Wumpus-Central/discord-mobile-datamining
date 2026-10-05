// discord_app/experiments/ChannelSummariesExperiment.tsx
import ChannelConstants from "../modules/channel/ChannelConstants.tsx";
import GuildRecord from "../records/GuildRecord.tsx";
import FavoritesUtils from "../modules/favorites/FavoritesUtils.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import Constants from "../Constants.tsx";
import ReactCompilerGating from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function canSeeChannelSummaries(channel) {
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  let tmp = null != channel;
  if (tmp) {
    let flag4 = false;
    if (null != channel) {
      let str;
      const getGuild = GuildStore.getGuild;
      if (channel != null) {
        str = channel.guild_id;
      }
      if (str == null) {
        str = "";
      }
      const guild = getGuild(str);
      const SUMMARIZEABLE = hasOwnProperty.SUMMARIZEABLE;
      const tmp6 = isGuildNSFW(guild);
      flag4 = SUMMARIZEABLE.has(channel.type) && !channel.isNSFW() && !tmp4 && !tmp6;
      SUMMARIZEABLE.has(channel.type) &&
        !channel.isNSFW() &&
        !(null != guild && guild.rulesChannelId === channel.id) &&
        !tmp6;
    }
    let tmp9 = flag4;
    if (tmp9) {
      let tmp10 = false !== flag || !channel.hasFlag(ChannelFlags.SUMMARIES_DISABLED);
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
            let isFavoritesGuildIdResult = id === React3;
            if (!isFavoritesGuildIdResult) {
              const obj = FavoritesUtils;
              isFavoritesGuildIdResult = obj.isFavoritesGuildId(id);
            }
            tmp15 = isFavoritesGuildIdResult;
          }
          let tmp20 = !tmp15;
          if (tmp20) {
            const features = guild1.features;
            let hasItem1 = features.has(metroRequire.SUMMARIES_ENABLED_GA);
            if (hasItem1) {
              let hasItem = !flag2;
              if (flag2) {
                const features2 = guild1.features;
                hasItem = features2.has(metroRequire.SUMMARIES_ENABLED_BY_USER);
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
({
  ME: closure_4,
  ChannelTypesSets: hasOwnProperty,
  GuildFeatures: metroRequire,
  EMPTY_STRING_SNOWFLAKE_ID: metroImportDefault,
} = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
function canGuildUseConversationSummaries(guild, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let tmp = null != guild;
  if (tmp) {
    const id = guild.id;
    let tmp2 = null != id;
    if (tmp2) {
      let isFavoritesGuildIdResult = id === React3;
      if (!isFavoritesGuildIdResult) {
        const obj = FavoritesUtils;
        isFavoritesGuildIdResult = obj.isFavoritesGuildId(id);
      }
      tmp2 = isFavoritesGuildIdResult;
    }
    let tmp7 = !tmp2;
    if (tmp7) {
      const features = guild.features;
      let hasItem1 = features.has(metroRequire.SUMMARIES_ENABLED_GA);
      if (hasItem1) {
        let hasItem = !flag;
        if (flag) {
          const features2 = guild.features;
          hasItem = features2.has(metroRequire.SUMMARIES_ENABLED_BY_USER);
        }
        hasItem1 = hasItem;
      }
      tmp7 = hasItem1;
    }
    tmp = tmp7;
  }
  return tmp;
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id, arg1) => {
      let first;
      let tmp10;
      let tmp8;
      _require = id;
      let obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      id = undefined;
      const tmp6 = cResult[1];
      if (id != null) {
        id = id.id;
      }
      if (tmp6 !== id) {
        let id1;
        if (id != null) {
          id1 = id.id;
        }
        const fn = function t() {
          let id1;
          const getGuild = GuildStore.getGuild;
          if (id != null) {
            id1 = id.id;
          }
          if (id1 == null) {
            id1 = metroImportDefault;
          }
          const guild = getGuild(id1);
          let tmp4 = null != guild;
          if (tmp4) {
            id = guild.id;
            let tmp5 = null != id;
            if (tmp5) {
              let isFavoritesGuildIdResult = id === React3;
              if (!isFavoritesGuildIdResult) {
                const obj = FavoritesUtils;
                isFavoritesGuildIdResult = obj.isFavoritesGuildId(id);
              }
              tmp5 = isFavoritesGuildIdResult;
            }
            let tmp10 = !tmp5;
            if (tmp10) {
              const features = guild.features;
              let hasItem = features.has(metroRequire.SUMMARIES_ENABLED_GA);
              if (hasItem) {
                // // eliminated: always false
                hasItem = flag2;
              }
              tmp10 = hasItem;
            }
            tmp4 = tmp10;
          }
          return tmp4;
        };
        cResult[1] = id1;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== id) {
        const items1 = [id];
        cResult[3] = id;
        cResult[4] = items1;
        tmp10 = items1;
      } else {
        tmp10 = cResult[4];
      }
      const tmpResult = tmp(573);
      return tmpResult.useStateFromStores(first, tmp8, tmp10);
    }
  : (arg0) => {
      _require = arg0;
      let obj = require("useStateFromStores");
      const items = [GuildStore];
      const items1 = [arg0];
      return obj.useStateFromStores(
        items,
        () => {
          let id1;
          const getGuild = GuildStore.getGuild;
          if (id != null) {
            id1 = id.id;
          }
          if (id1 == null) {
            id1 = metroImportDefault;
          }
          const guild = getGuild(id1);
          let tmp4 = null != guild;
          if (tmp4) {
            id = guild.id;
            let tmp5 = null != id;
            if (tmp5) {
              let isFavoritesGuildIdResult = id === React3;
              if (!isFavoritesGuildIdResult) {
                const obj = FavoritesUtils;
                isFavoritesGuildIdResult = obj.isFavoritesGuildId(id);
              }
              tmp5 = isFavoritesGuildIdResult;
            }
            let tmp10 = !tmp5;
            if (tmp10) {
              const features = guild.features;
              let hasItem = features.has(metroRequire.SUMMARIES_ENABLED_GA);
              if (hasItem) {
                // // eliminated: always false
                hasItem = flag2;
              }
              tmp10 = hasItem;
            }
            tmp4 = tmp10;
          }
          return tmp4;
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("experiments/ChannelSummariesExperiment.tsx");

export const channelEligibleForSummaries = function channelEligibleForSummaries(channel) {
  return canSeeChannelSummaries(channel, true, false);
};
export { canSeeChannelSummaries };
export { canGuildUseConversationSummaries };
export const useChannelSummariesExperiment = function useChannelSummariesExperiment(channel) {
  let flag;
  if (flag === undefined) {
    flag = false;
  }
  return canSeeChannelSummaries(channel, flag);
};
export const useGuildEligibleForSummaries = tmp3;
