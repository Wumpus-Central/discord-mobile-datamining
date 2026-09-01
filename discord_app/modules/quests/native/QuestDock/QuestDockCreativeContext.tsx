// discord_app/modules/quests/native/QuestDock/QuestDockCreativeContext.tsx
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
let context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockCreativeContext.tsx");

export const getQuestDockMenuAdCreative = function getQuestDockMenuAdCreative(closure_0) {
  const type = closure_0.type;
  if (AdCreativeType.AdCreativeType.QUEST === type) {
    let obj = { adCreativeType: null, adCreativeId: null };
    obj[0] = tmp(7446).AdCreativeType.QUEST;
    obj[1] = closure_0.quest.id;
    return obj;
  } else if (tmp(7446).AdCreativeType.BOUNTY === type) {
    obj = { adCreativeType: null, adCreativeId: null };
    obj[0] = tmp(7446).AdCreativeType.BOUNTY;
    obj[1] = closure_0.bounty.id;
    return obj;
  }
};
export const getDeliveredQuest = function getDeliveredQuest(type) {
  let quest = null;
  if (type.type === AdCreativeType.AdCreativeType.QUEST) {
    quest = type.quest;
  }
  return quest;
};
export const getDeliveredAdCreativeId = function getDeliveredAdCreativeId(type) {
  type = type.type;
  if (AdCreativeType.AdCreativeType.QUEST === type) {
    return type.quest.id;
  } else if (tmp(7446).AdCreativeType.BOUNTY === type) {
    return type.bounty.id;
  } else if (tmp(7446).AdCreativeType.NO_FILL === type) {
    return null;
  }
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
