// === Module 10167: useGetThreadDraftSettings ===

// Module 10167 (useGetThreadDraftSettings)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import handleChanged from "handleChanged" /* 4825 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/threads/useGetThreadDraftSettings.tsx");

export default function useGetThreadDraftSettings(arg0) {
  const _require = arg0;
  const items = [closure_3];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      let threadSettings = closure_1_3.getThreadSettings(closure_0);
      if (threadSettings == null) {
        threadSettings = closure_1_3.getThreadDraftWithParentMessageId(DISCORD_EPOCHDefault.castChannelIdAsMessageId(closure_0));
      }
      tmp2 = threadSettings;
    }
    return tmp2;
  });
};
export const useHasThreadDraft = function useHasThreadDraft(arg0) {
  const _require = arg0;
  const items = [closure_3];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let threadSettings = closure_1_3.getThreadSettings(closure_0);
      if (threadSettings == null) {
        threadSettings = closure_1_3.getThreadDraftWithParentMessageId(DISCORD_EPOCHDefault.castChannelIdAsMessageId(closure_0));
      }
      tmp2 = null != threadSettings;
    }
    return tmp2;
  });
};