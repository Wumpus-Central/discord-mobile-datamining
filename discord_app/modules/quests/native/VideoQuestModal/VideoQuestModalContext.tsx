// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

let context = importAllResult.createContext({ quest: null, videoSessionId: "" });
const result = require("obj132").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx");

export default context;
export const useVideoQuestModalContext = function useVideoQuestModalContext() {
  context = importAllResult.useContext(context);
  _modDef38(null != context, "useVideoQuestModalContext must be used within a VideoQuestModalProvider");
  return context;
};