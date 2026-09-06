// === Module 16212: useHubUnreadCount ===

// Module 16212 (useHubUnreadCount)
import closure_3 from "isFetching" /* 12312 */;
import closure_4 from "generateOldThreadCutoff" /* 4575 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/hub/HubUnreadUtils.tsx");

export const useHubUnreadCount = function useHubUnreadCount(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_4];
  const items1 = [arg0];
  return _require(504).useStateFromStores(items, () => {
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
        const found = values.filter((createdAt) => {
          const time = new Date(createdAt.createdAt).getTime();
          const date = new Date(createdAt.createdAt);
          return time > closure_1_1(closure_1_2[3]).extractTimestamp(closure_0);
        });
        return Math.min(callback(closure_1_2[4]).MAX_CATEGORY_SERVERS, found.length);
      }
    }
  }, items1);
};