// === Module 16133: HubUnreadUtils ===

// Module 16133 (HubUnreadUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import GuildDirectoryUtils from "GuildDirectoryUtils" /* 11932 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 11940 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/HubUnreadUtils.tsx");

export const useHubUnreadCount = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildDirectoryStore, ReadStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      if (null == closure_0) {
        return 0;
      } else {
        const ackMessageIdResult = ReadStateStore.ackMessageId(tmp.id);
        closure_0 = ackMessageIdResult;
        if (null == ackMessageIdResult) {
          return 0;
        } else {
          let directoryEntries = GuildDirectoryStore.getDirectoryEntries(tmp.id);
          if (directoryEntries == null) {
            directoryEntries = {};
          }
          const values = Object.values(directoryEntries);
          const _Math = Math;
          const found = values.filter((createdAt) => {
            const time = new Date(createdAt.createdAt).getTime();
            const date = new Date(createdAt.createdAt);
            return time > SnowflakeUtilsDefault.extractTimestamp(ackMessageIdResult);
          });
          return Math.min(GuildDirectoryUtils.MAX_CATEGORY_SERVERS, found.length);
        }
      }
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildDirectoryStore, ReadStateStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    if (null == closure_0) {
      return 0;
    } else {
      const ackMessageIdResult = ReadStateStore.ackMessageId(tmp.id);
      closure_0 = ackMessageIdResult;
      if (null == ackMessageIdResult) {
        return 0;
      } else {
        let directoryEntries = GuildDirectoryStore.getDirectoryEntries(tmp.id);
        if (directoryEntries == null) {
          directoryEntries = {};
        }
        const values = Object.values(directoryEntries);
        const _Math = Math;
        const found = values.filter((createdAt) => {
          const time = new Date(createdAt.createdAt).getTime();
          const date = new Date(createdAt.createdAt);
          return time > SnowflakeUtilsDefault.extractTimestamp(ackMessageIdResult);
        });
        return Math.min(GuildDirectoryUtils.MAX_CATEGORY_SERVERS, found.length);
      }
    }
  }, items1);
});