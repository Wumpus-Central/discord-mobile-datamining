// discord_app/modules/threads/getThreadAutoArchiveTimeOnce.tsx
import generateOldThreadCutoff from "generateOldThreadCutoff";

let result = require("DISCORD_EPOCH").fileFinishedImporting("modules/threads/getThreadAutoArchiveTimeOnce.tsx");

export default function getThreadAutoArchiveTimeOnce(threadMetadata) {
  if (null == threadMetadata.threadMetadata) {
    return 0;
  } else {
    let num3 = 0;
    const result = threadMetadata.threadMetadata.autoArchiveDuration * importDefault(687).Millis.MINUTE;
    if (null != threadMetadata.threadMetadata) {
      let id = generateOldThreadCutoff.lastMessageId(threadMetadata.id);
      if (id == null) {
        id = threadMetadata.id;
      }
      let num = 0;
      const tmp12Result = importDefault(11);
      if (null != threadMetadata.lastNonMessageActivityTimestamp) {
        const _Date = Date;
        const date = new Date(threadMetadata.lastNonMessageActivityTimestamp);
        num = date.getTime();
      }
      let num2 = 0;
      if (null != threadMetadata.threadMetadata.archiveTimestamp) {
        const _Date2 = Date;
        const date1 = new Date(threadMetadata.threadMetadata.archiveTimestamp);
        num2 = date1.getTime();
      }
      const _Math = Math;
      num3 = Math.max(importDefault(11).extractTimestamp(id), num, num2);
      const extractTimestampResult = importDefault(11).extractTimestamp(id);
    }
    return num3 + result;
  }
};
export const getThreadLastActivityTime = function getThreadLastActivityTime(threadMetadata) {
  if (null == threadMetadata.threadMetadata) {
    return 0;
  } else {
    let id = generateOldThreadCutoff.lastMessageId(threadMetadata.id);
    if (id == null) {
      id = threadMetadata.id;
    }
    let num = 0;
    const obj = importDefault(11);
    if (null != threadMetadata.lastNonMessageActivityTimestamp) {
      const _Date = Date;
      const date = new Date(threadMetadata.lastNonMessageActivityTimestamp);
      num = date.getTime();
    }
    let num2 = 0;
    if (null != threadMetadata.threadMetadata.archiveTimestamp) {
      const _Date2 = Date;
      const date1 = new Date(threadMetadata.threadMetadata.archiveTimestamp);
      num2 = date1.getTime();
    }
    const _Math = Math;
    return Math.max(importDefault(11).extractTimestamp(id), num, num2);
  }
};