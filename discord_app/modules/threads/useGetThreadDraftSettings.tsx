// === Module 10356: useGetThreadDraftSettings ===

// Module 10356 (useGetThreadDraftSettings)
import closure_3 from "handleChanged" /* 4855 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/threads/useGetThreadDraftSettings.tsx");

export default function useGetThreadDraftSettings(arg0) {
  const _require = arg0;
  const items = [closure_3];
  return _require(586).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      let threadSettings = closure_1_3.getThreadSettings(tmp);
      if (threadSettings == null) {
        threadSettings = obj.getThreadDraftWithParentMessageId(closure_1_1(closure_1_2[2]).castChannelIdAsMessageId(tmp));
        const obj2 = closure_1_1(closure_1_2[2]);
      }
      tmp2 = threadSettings;
      obj = closure_1_3;
    }
    return tmp2;
  });
};
export const useHasThreadDraft = function useHasThreadDraft(arg0) {
  const _require = arg0;
  const items = [closure_3];
  return _require(586).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let threadSettings = closure_1_3.getThreadSettings(tmp);
      if (threadSettings == null) {
        threadSettings = obj.getThreadDraftWithParentMessageId(closure_1_1(closure_1_2[2]).castChannelIdAsMessageId(tmp));
        const obj2 = closure_1_1(closure_1_2[2]);
      }
      tmp2 = null != threadSettings;
      obj = closure_1_3;
    }
    return tmp2;
  });
};