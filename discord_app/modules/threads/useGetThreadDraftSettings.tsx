// === Module 10253: useGetThreadDraftSettings ===

// Module 10253 (useGetThreadDraftSettings)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DraftStore from "DraftStore" /* 4901 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/useGetThreadDraftSettings.tsx");

export default function useGetThreadDraftSettings(arg0) {
  _require = arg0;
  const items = [DraftStore];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      let threadSettings = DraftStore.getThreadSettings(tmp);
      if (threadSettings == null) {
        threadSettings = obj.getThreadDraftWithParentMessageId(SnowflakeUtilsDefault.castChannelIdAsMessageId(tmp));
      }
      tmp2 = threadSettings;
      obj = DraftStore;
    }
    return tmp2;
  });
};
export const useHasThreadDraft = function useHasThreadDraft(arg0) {
  _require = arg0;
  const items = [DraftStore];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let threadSettings = DraftStore.getThreadSettings(tmp);
      if (threadSettings == null) {
        threadSettings = obj.getThreadDraftWithParentMessageId(SnowflakeUtilsDefault.castChannelIdAsMessageId(tmp));
      }
      tmp2 = null != threadSettings;
      obj = DraftStore;
    }
    return tmp2;
  });
};