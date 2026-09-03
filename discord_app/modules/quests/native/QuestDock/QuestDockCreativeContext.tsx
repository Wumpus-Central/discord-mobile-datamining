// discord_app/modules/quests/native/QuestDock/QuestDockCreativeContext.tsx
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
let context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockCreativeContext.tsx");

export const getCreativeAnalyticsParams = function getCreativeAnalyticsParams(closure_0) {
  const type = closure_0.type;
  if (AdCreativeType.AdCreativeType.QUEST === type) {
    let obj = { adCreativeType: null, adCreativeId: null };
    obj[0] = tmp(7457).AdCreativeType.QUEST;
    obj[1] = closure_0.quest.id;
    return obj;
  } else if (tmp(7457).AdCreativeType.BOUNTY === type) {
    obj = { adCreativeType: null, adCreativeId: null };
    obj[0] = tmp(7457).AdCreativeType.BOUNTY;
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
  } else if (tmp(7457).AdCreativeType.BOUNTY === type) {
    return type.bounty.id;
  } else if (tmp(7457).AdCreativeType.NO_FILL === type) {
    return null;
  }
};
export const QuestDockQuestProvider = function QuestDockQuestProvider(children) {
  const quest = children.quest;
  const items = [quest];
  return (
    <redux.Provider
      value={importAllResult.useMemo(() => ({ type: quest(closure_1_1[2]).AdCreativeType.QUEST, quest }), items)}
    >
      {arg0.children}
    </redux.Provider>
  );
};
export const QuestDockBountyProvider = function QuestDockBountyProvider(bounty) {
  bounty = bounty.bounty;
  const items = [bounty];
  return (
    <redux.Provider
      value={importAllResult.useMemo(() => ({ type: bounty(closure_1_1[2]).AdCreativeType.BOUNTY, bounty }), items)}
    >
      {arg0.children}
    </redux.Provider>
  );
};
export const useQuestDockQuest = function useQuestDockQuest() {
  const context = importAllResult.useContext(closure_4);
  let type;
  if (context != null) {
    type = context.type;
  }
  if (type !== AdCreativeType.AdCreativeType.QUEST) {
    const _Error = Error;
    error = new Error("useQuestDockQuest requires a QuestDockQuestProvider ancestor");
    throw error;
  } else {
    return context.quest;
  }
};
export const useQuestCreative = function useQuestCreative(quest) {
  closure_0 = quest;
  const items = [quest];
  return importAllResult.useMemo(() => ({ type: quest(closure_1_1[2]).AdCreativeType.QUEST, quest }), items);
};
export const useQuestDockBounty = function useQuestDockBounty() {
  const context = importAllResult.useContext(closure_4);
  let type;
  if (context != null) {
    type = context.type;
  }
  if (type !== AdCreativeType.AdCreativeType.BOUNTY) {
    const _Error = Error;
    error = new Error("useQuestDockBounty requires a QuestDockBountyProvider ancestor");
    throw error;
  } else {
    return context.bounty;
  }
};
export const useBountyCreative = function useBountyCreative(questDockBounty) {
  closure_0 = questDockBounty;
  const items = [questDockBounty];
  return importAllResult.useMemo(() => ({ type: bounty(closure_1_1[2]).AdCreativeType.BOUNTY, bounty }), items);
};
export const useQuestDockCreative = function useQuestDockCreative() {
  const context = importAllResult.useContext(closure_4);
  if (null == context) {
    const _Error = Error;
    error = new Error("useQuestDockCreative requires a QuestDockBountyProvider or QuestDockQuestProvider ancestor");
    throw error;
  } else {
    return context;
  }
};
