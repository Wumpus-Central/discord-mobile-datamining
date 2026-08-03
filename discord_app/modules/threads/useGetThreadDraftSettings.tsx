import handleChanged from "handleChanged";

const require = arg1;
const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/threads/useGetThreadDraftSettings.tsx");

export default function useGetThreadDraftSettings(arg0) {
  const _require = arg0;
  const items = [handleChanged];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      let threadSettings = outer1_3.getThreadSettings(tmp);
      if (threadSettings == null) {
        threadSettings = obj.getThreadDraftWithParentMessageId(outer1_1(outer1_2[2]).castChannelIdAsMessageId(tmp));
        const obj2 = outer1_1(outer1_2[2]);
      }
      tmp2 = threadSettings;
      obj = outer1_3;
    }
    return tmp2;
  });
};
export const useHasThreadDraft = function useHasThreadDraft(arg0) {
  const _require = arg0;
  const items = [handleChanged];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let threadSettings = outer1_3.getThreadSettings(tmp);
      if (threadSettings == null) {
        threadSettings = obj.getThreadDraftWithParentMessageId(outer1_1(outer1_2[2]).castChannelIdAsMessageId(tmp));
        const obj2 = outer1_1(outer1_2[2]);
      }
      tmp2 = null != threadSettings;
      obj = outer1_3;
    }
    return tmp2;
  });
};