// discord_app/utils/SnowflakeUtils.tsx
const result = require("set").fileFinishedImporting("utils/SnowflakeUtils.tsx");

export default {
  age(arg0) {
    return importAll(13).age(arg0);
  },
  extractTimestamp(arg0) {
    return importAll(13).extractTimestamp(arg0);
  },
  compare(arg0, arg1) {
    return importAll(13).compare(arg0, arg1);
  },
  atPreviousMillisecond(arg0) {
    return importAll(13).atPreviousMillisecond(arg0);
  },
  atNextMillisecond(arg0) {
    return importAll(13).atNextMillisecond(arg0);
  },
  fromTimestamp(arg0) {
    return importAll(13).fromTimestamp(arg0);
  },
  fromTimestampWithSequence(arg0, arg1) {
    return importAll(13).fromTimestampWithSequence(arg0, arg1);
  },
  keys(arg0) {
    return Object.keys(arg0);
  },
  forEach(arg0, arg1) {
    const importDefault = arg1;
    const item = importDefault(12).forEach(arg0, (arg0, arg1) => callback(arg0, arg1));
  },
  forEachKey(recurrenceCounts, arg1) {
    for (const key10004 in arg0) {
      let tmp = key10004;
      let tmp2 = arg1(key10004);
      continue;
    }
  },
  entries(arg0) {
    return Object.entries(arg0);
  },
  isProbablyAValidSnowflake(arg0) {
    return importAll(13).isProbablyAValidSnowflake(arg0);
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
export const DISCORD_EPOCH = require("extractTimestamp").DISCORD_EPOCH;
export const SnowflakeSequence = require("extractTimestamp").SnowflakeSequence;