import { 00038__ } from "../../../../../_runtime/metro/00038__.js";
// discord_app/modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx
import importAllResult from "noop";

let context = importAllResult.createContext({ quest: null, videoSessionId: "" });
const result = require("set").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx");

export default context;
export const useVideoQuestModalContext = function useVideoQuestModalContext() {
  context = importAllResult.useContext(context);
  00038__(null != context, "useVideoQuestModalContext must be used within a VideoQuestModalProvider");
  return context;
};