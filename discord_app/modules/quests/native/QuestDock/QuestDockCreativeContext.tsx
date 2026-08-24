// === Module 14469: getDeliveredQuest ===

// Module 14469 (getDeliveredQuest)
import AdCreativeType from "AdCreativeType" /* 7469 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockCreativeContext.tsx");

export const getDeliveredQuest = function getDeliveredQuest(type) {
  let quest = null;
  if (type.type === AdCreativeType.AdCreativeType.QUEST) {
    quest = type.quest;
  }
  return quest;
};
export const QuestDockQuestProvider = function QuestDockQuestProvider(quest) {
  return <redux.Provider value={arg0.quest}>{arg0.children}</redux.Provider>;
};
export const useQuestCreative = function useQuestCreative() {
  const context = importAllResult.useContext(closure_4);
  if (null == context) {
    const _Error = Error;
    error = new Error("useQuestCreative requires a QuestDockQuestProvider ancestor");
    throw error;
  } else {
    return context;
  }
};