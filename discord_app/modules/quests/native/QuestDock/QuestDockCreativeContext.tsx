// discord_app/modules/quests/native/QuestDock/QuestDockCreativeContext.tsx
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const redux = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockCreativeContext.tsx");

export const getCreativeAnalyticsParams = function getCreativeAnalyticsParams(creative) {
  const type = creative.type;
  if (AdCreativeType.AdCreativeType.QUEST === type) {
    let obj = { adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: creative.quest.id };
    return obj;
  } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
    obj = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adCreativeId: creative.bounty.id };
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
  } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
    return type.bounty.id;
  } else if (AdCreativeType.AdCreativeType.NO_FILL === type) {
    return null;
  }
};
export const QuestDockQuestProvider = function QuestDockQuestProvider(children) {
  const quest = children.quest;
  const items = [quest];
  return (
    <redux.Provider value={noop.useMemo(() => ({ type: AdCreativeType.AdCreativeType.QUEST, quest }), items)}>
      {children.children}
    </redux.Provider>
  );
};
export const QuestDockBountyProvider = function QuestDockBountyProvider(bounty) {
  bounty = bounty.bounty;
  const items = [bounty];
  return (
    <redux.Provider value={noop.useMemo(() => ({ type: AdCreativeType.AdCreativeType.BOUNTY, bounty }), items)}>
      {bounty.children}
    </redux.Provider>
  );
};
export const useQuestDockQuest = function useQuestDockQuest() {
  const context = noop.useContext(closure_4);
  let type;
  if (context != null) {
    type = context.type;
  }
  if (type !== AdCreativeType.AdCreativeType.QUEST) {
    const _Error = Error;
    const error = new Error("useQuestDockQuest requires a QuestDockQuestProvider ancestor");
    throw error;
  } else {
    return context.quest;
  }
};
export const useQuestCreative = function useQuestCreative(quest) {
  closure_0 = quest;
  const items = [quest];
  return noop.useMemo(() => ({ type: AdCreativeType.AdCreativeType.QUEST, quest }), items);
};
export const useQuestDockBounty = function useQuestDockBounty() {
  const context = noop.useContext(closure_4);
  let type;
  if (context != null) {
    type = context.type;
  }
  if (type !== AdCreativeType.AdCreativeType.BOUNTY) {
    const _Error = Error;
    const error = new Error("useQuestDockBounty requires a QuestDockBountyProvider ancestor");
    throw error;
  } else {
    return context.bounty;
  }
};
export const useBountyCreative = function useBountyCreative(questDockBounty) {
  closure_0 = questDockBounty;
  const items = [questDockBounty];
  return noop.useMemo(() => ({ type: AdCreativeType.AdCreativeType.BOUNTY, bounty }), items);
};
export const useQuestDockCreative = function useQuestDockCreative() {
  const context = noop.useContext(closure_4);
  if (null == context) {
    const _Error = Error;
    const error = new Error(
      "useQuestDockCreative requires a QuestDockBountyProvider or QuestDockQuestProvider ancestor",
    );
    throw error;
  } else {
    return context;
  }
};
