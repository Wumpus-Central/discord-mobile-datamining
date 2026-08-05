// discord_app/modules/hub/HubUnreadUtils.tsx
import isFetching from "isFetching";
import generateOldThreadCutoff from "generateOldThreadCutoff";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/hub/HubUnreadUtils.tsx");

export const useHubUnreadCount = function useHubUnreadCount(arg0) {
  const _require = arg0;
  const items = [isFetching, generateOldThreadCutoff];
  const items1 = [arg0];
  return _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (null == callback) {
      return 0;
    } else {
      const ackMessageIdResult = outer1_4.ackMessageId(tmp.id);
      callback = ackMessageIdResult;
      if (null == ackMessageIdResult) {
        return 0;
      } else {
        let directoryEntries = outer1_3.getDirectoryEntries(tmp.id);
        if (directoryEntries == null) {
          directoryEntries = {};
        }
        const values = Object.values(directoryEntries);
        const _Math = Math;
        const found = values.filter((createdAt) => {
          const time = new Date(createdAt.createdAt).getTime();
          const date = new Date(createdAt.createdAt);
          return time > outer1_1(outer1_2[3]).extractTimestamp(closure_0);
        });
        return Math.min(callback(outer1_2[4]).MAX_CATEGORY_SERVERS, found.length);
      }
    }
  }, items1);
};