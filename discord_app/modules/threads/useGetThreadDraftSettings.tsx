// discord_app/modules/threads/useGetThreadDraftSettings.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import DraftStore from "../../stores/DraftStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/useGetThreadDraftSettings.tsx");

export default function useGetThreadDraftSettings(arg0) {
  _require = arg0;
  const items = [DraftStore];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      let threadSettings = DraftStore.getThreadSettings(closure_0);
      if (threadSettings == null) {
        threadSettings = DraftStore.getThreadDraftWithParentMessageId(
          SnowflakeUtilsDefault.castChannelIdAsMessageId(closure_0),
        );
      }
      tmp2 = threadSettings;
    }
    return tmp2;
  });
}
export const useHasThreadDraft = function useHasThreadDraft(arg0) {
  _require = arg0;
  const items = [DraftStore];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let threadSettings = DraftStore.getThreadSettings(closure_0);
      if (threadSettings == null) {
        threadSettings = DraftStore.getThreadDraftWithParentMessageId(
          SnowflakeUtilsDefault.castChannelIdAsMessageId(closure_0),
        );
      }
      tmp2 = null != threadSettings;
    }
    return tmp2;
  });
};
