// discord_app/modules/threads/getThreadAutoArchiveTimeOnce.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
      const tmp8Result = SnowflakeUtilsDefault;
      const extractTimestampResult = tmp8Result.extractTimestamp(id);
      if (null != threadMetadata.lastNonMessageActivityTimestamp) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const date = new Date(threadMetadata.lastNonMessageActivityTimestamp);
        num = date.getTime();
      }
      let num2 = 0;
      if (null != threadMetadata.threadMetadata.archiveTimestamp) {
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const date1 = new Date(threadMetadata.threadMetadata.archiveTimestamp);
        num2 = date1.getTime();
      }
      const _Math = Math;
      num3 = Math.max(extractTimestampResult, num, num2);
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
    const obj = SnowflakeUtilsDefault;
    const extractTimestampResult = obj.extractTimestamp(id);
    if (null != threadMetadata.lastNonMessageActivityTimestamp) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(threadMetadata.lastNonMessageActivityTimestamp);
      num = date.getTime();
    }
    let num2 = 0;
    if (null != threadMetadata.threadMetadata.archiveTimestamp) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date1 = new Date(threadMetadata.threadMetadata.archiveTimestamp);
      num2 = date1.getTime();
    }
    const _Math = Math;
    return Math.max(extractTimestampResult, num, num2);
  }
};
