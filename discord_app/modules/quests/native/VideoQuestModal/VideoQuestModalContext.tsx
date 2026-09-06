// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

let context = noop.createContext({ quest: null, videoSessionId: "" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx");

export default context;
export const useVideoQuestModalContext = function useVideoQuestModalContext() {
  context = noop.useContext(context);
  _modDef38(null != context, "useVideoQuestModalContext must be used within a VideoQuestModalProvider");
  return context;
};
