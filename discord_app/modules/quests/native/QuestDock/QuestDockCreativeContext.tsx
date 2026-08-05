// discord_app/modules/quests/native/QuestDock/QuestDockCreativeContext.tsx
import importAllResult from "noop";
import { jsx } from "jsxProd";
import { AdCreativeType } from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";

const require = arg1;
let context = importAllResult.createContext(null);
const result = require("AdCreativeType").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockCreativeContext.tsx");

export const getDeliveredQuest = function getDeliveredQuest(mobileQuestDock) {
  let quest = null;
  if (mobileQuestDock.type === AdCreativeType.AdCreativeType.QUEST) {
    quest = mobileQuestDock.quest;
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
    const error = new Error("useQuestCreative requires a QuestDockQuestProvider ancestor");
    throw error;
  } else {
    return context;
  }
};