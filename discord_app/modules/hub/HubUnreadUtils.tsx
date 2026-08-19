// === Module 15474: useHubUnreadCount ===

// Module 15474 (useHubUnreadCount)
import isFetching from "isFetching" /* 11479 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/hub/HubUnreadUtils.tsx");

export const useHubUnreadCount = function useHubUnreadCount(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_4];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    if (null == callback) {
      return 0;
    } else {
      const ackMessageIdResult = closure_1_4.ackMessageId(tmp.id);
      callback = ackMessageIdResult;
      if (null == ackMessageIdResult) {
        return 0;
      } else {
        let directoryEntries = closure_1_3.getDirectoryEntries(tmp.id);
        if (directoryEntries == null) {
          directoryEntries = {};
        }
        const values = Object.values(directoryEntries);
        const _Math = Math;
        const found = values.filter((item, index) => {
          const time = new Date(item.createdAt).getTime();
          const date = new Date(item.createdAt);
          return time > closure_1_1(closure_1_2[3]).extractTimestamp(closure_0);
        });
        return Math.min(callback(dependencyMap[4]).MAX_CATEGORY_SERVERS, found.length);
      }
    }
  }, items1);
};