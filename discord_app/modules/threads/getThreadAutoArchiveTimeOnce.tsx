// === Module 5450: getThreadAutoArchiveTimeOnce ===

// Module 5450 (getThreadAutoArchiveTimeOnce)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import setDefault from "set" /* 687 */;
import closure_2 from "generateOldThreadCutoff" /* 4493 */;

let result = require("set").fileFinishedImporting("modules/threads/getThreadAutoArchiveTimeOnce.tsx");

export default function getThreadAutoArchiveTimeOnce(threadMetadata) {
  if (null == threadMetadata.threadMetadata) {
    return 0;
  } else {
    let num3 = 0;
    const result = threadMetadata.threadMetadata.autoArchiveDuration * setDefault.Millis.MINUTE;
    if (null != threadMetadata.threadMetadata) {
      let id = closure_2.lastMessageId(threadMetadata.id);
      if (id == null) {
        id = threadMetadata.id;
      }
      let num = 0;
      const tmp12Result = DISCORD_EPOCHDefault;
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
      num3 = Math.max(DISCORD_EPOCHDefault.extractTimestamp(id), num, num2);
      const extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(id);
    }
    return num3 + result;
  }
};
export const getThreadLastActivityTime = function getThreadLastActivityTime(threadMetadata) {
  if (null == threadMetadata.threadMetadata) {
    return 0;
  } else {
    let id = closure_2.lastMessageId(threadMetadata.id);
    if (id == null) {
      id = threadMetadata.id;
    }
    let num = 0;
    const obj = DISCORD_EPOCHDefault;
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
    return Math.max(DISCORD_EPOCHDefault.extractTimestamp(id), num, num2);
  }
};