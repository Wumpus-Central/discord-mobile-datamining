// discord_app/modules/threads/getThreadAutoArchiveTimeOnce.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";

const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/getThreadAutoArchiveTimeOnce.tsx");

export default function getThreadAutoArchiveTimeOnce(threadMetadata) {
  if (null == threadMetadata.threadMetadata) {
    return 0;
  } else {
    let num3 = 0;
    const result = threadMetadata.threadMetadata.autoArchiveDuration * DurationsDefault.Millis.MINUTE;
    if (null != threadMetadata.threadMetadata) {
      let id = ReadStateStore.lastMessageId(threadMetadata.id);
      if (id == null) {
        id = threadMetadata.id;
      }
      let num = 0;
      const tmp12Result = SnowflakeUtilsDefault;
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
      num3 = Math.max(SnowflakeUtilsDefault.extractTimestamp(id), num, num2);
      const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id);
    }
    return num3 + result;
  }
}
export const getThreadLastActivityTime = function getThreadLastActivityTime(threadMetadata) {
  if (null == threadMetadata.threadMetadata) {
    return 0;
  } else {
    let id = ReadStateStore.lastMessageId(threadMetadata.id);
    if (id == null) {
      id = threadMetadata.id;
    }
    let num = 0;
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
    return Math.max(SnowflakeUtilsDefault.extractTimestamp(id), num, num2);
  }
};
