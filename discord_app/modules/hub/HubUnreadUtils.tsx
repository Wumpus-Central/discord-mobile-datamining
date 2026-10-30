// === Module 18216: HubUnreadUtils ===

// Module 18216 (HubUnreadUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import GuildDirectoryUtils from "GuildDirectoryUtils" /* 13802 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 13810 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/HubUnreadUtils.tsx");

export function useHubUnreadCount(arg0) {
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
}