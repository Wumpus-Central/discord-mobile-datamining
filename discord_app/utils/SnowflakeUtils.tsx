// discord_app/utils/SnowflakeUtils.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import utils_SnowflakeUtils from "../../discord_common/js/shared/utils/SnowflakeUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const utils_SnowflakeUtilsAll = utils_SnowflakeUtils;

let obj = {
  age(arg0) {
    const obj = utils_SnowflakeUtilsAll;
    return obj.age(arg0);
  },
  extractTimestamp(arg0) {
    const obj = utils_SnowflakeUtilsAll;
    return obj.extractTimestamp(arg0);
  },
  getNonTimestampBits(arg0) {
    const obj = utils_SnowflakeUtilsAll;
    return obj.getNonTimestampBits(arg0);
  },
  setNonTimestampBits(arg0, arg1) {
    const obj = utils_SnowflakeUtilsAll;
    return obj.setNonTimestampBits(arg0, arg1);
  },
  compare(arg0, arg1) {
    const obj = utils_SnowflakeUtilsAll;
    return obj.compare(arg0, arg1);
  },
  atPreviousMillisecond(arg0) {
    const obj = utils_SnowflakeUtilsAll;
    return obj.atPreviousMillisecond(arg0);
  },
  atNextMillisecond(arg0) {
    const obj = utils_SnowflakeUtilsAll;
    return obj.atNextMillisecond(arg0);
  },
  fromTimestamp(arg0) {
    const obj = utils_SnowflakeUtilsAll;
    return obj.fromTimestamp(arg0);
  },
  fromTimestampWithSequence(arg0, next) {
    const obj = utils_SnowflakeUtilsAll;
    return obj.fromTimestampWithSequence(arg0, next);
  },
  keys(arg0) {
    return Object.keys(arg0);
  },
  forEach(arg0, arg1) {
    let closure_0 = arg1;
    const arr = _modDef12;
    const item = arr.forEach(arg0, (arg0, arg1) => closure_0(arg0, arg1));
  },
  forEachKey(recurrenceCounts, fn) {
    for (const key10004 in recurrenceCounts) {
      let tmp2 = fn(key10004);
      continue;
    }
  },
  entries(arg0) {
    return Object.entries(arg0);
  },
  isProbablyAValidSnowflake(arg0) {
    const obj = utils_SnowflakeUtilsAll;
    return obj.isProbablyAValidSnowflake(arg0);
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
  },
};
const result = size.fileFinishedImporting("utils/SnowflakeUtils.tsx");

export default obj;
export const DISCORD_EPOCH = utils_SnowflakeUtils.DISCORD_EPOCH;
export const SnowflakeSequence = utils_SnowflakeUtils.SnowflakeSequence;
