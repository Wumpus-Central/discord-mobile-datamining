// === Module 11: SnowflakeUtils ===

// Module 11 (SnowflakeUtils)
import _modDef12 from "module_12" /* 12 */;
import utils_SnowflakeUtils from "utils/SnowflakeUtils" /* 13 */;
import size from "module_2" /* 2 */;

const utils_SnowflakeUtilsAll = utils_SnowflakeUtils;

const result = size.fileFinishedImporting("utils/SnowflakeUtils.tsx");

export default {
  age(arg0) {
    return utils_SnowflakeUtilsAll.age(arg0);
  },
  extractTimestamp(arg0) {
    return utils_SnowflakeUtilsAll.extractTimestamp(arg0);
  },
  compare(arg0, arg1) {
    return utils_SnowflakeUtilsAll.compare(arg0, arg1);
  },
  atPreviousMillisecond(arg0) {
    return utils_SnowflakeUtilsAll.atPreviousMillisecond(arg0);
  },
  atNextMillisecond(arg0) {
    return utils_SnowflakeUtilsAll.atNextMillisecond(arg0);
  },
  fromTimestamp(arg0) {
    return utils_SnowflakeUtilsAll.fromTimestamp(arg0);
  },
  fromTimestampWithSequence(arg0, next) {
    return utils_SnowflakeUtilsAll.fromTimestampWithSequence(arg0, next);
  },
  keys(arg0) {
    return Object.keys(arg0);
  },
  forEach(arg0, arg1) {
    closure_0 = arg1;
    const item = _modDef12.forEach(arg0, (arg0, arg1) => closure_0(arg0, arg1));
  },
  forEachKey(recurrenceCounts, fn) {
    for (const key10004 in arg0) {
      let tmp2 = arg1(key10004);
      continue;
    }
  },
  entries(arg0) {
    return Object.entries(arg0);
  },
  isProbablyAValidSnowflake(arg0) {
    return utils_SnowflakeUtilsAll.isProbablyAValidSnowflake(arg0);
  },
  castChannelIdAsMessageId(id) {
    return id;
  },
  castMessageIdAsChannelId(id) {
    return id;
  },
  castGuildIdAsEveryoneGuildRoleId(guildId) {
    return guildId;
  },
  cast(id) {
    return id;
  }
};
export const DISCORD_EPOCH = utils_SnowflakeUtils.DISCORD_EPOCH;
export const SnowflakeSequence = utils_SnowflakeUtils.SnowflakeSequence;