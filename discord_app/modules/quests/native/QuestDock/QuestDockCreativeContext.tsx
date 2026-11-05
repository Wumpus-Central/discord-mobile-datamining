// === Module 17373: QuestDockCreativeContext ===

// Module 17373 (QuestDockCreativeContext)
import AdCreativeType from "AdCreativeType" /* 6926 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const redux = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockCreativeContext.tsx");

export function QuestDockQuestProvider(children) {
  const quest = children.quest;
  items = [quest];
  return <redux.Provider value={noop.useMemo(() => ({ type: AdCreativeType.AdCreativeType.QUEST, quest }), items)}>{children.children}</redux.Provider>;
}
export function QuestDockBountyProvider(bounty) {
  bounty = bounty.bounty;
  items = [bounty];
  return <redux.Provider value={noop.useMemo(() => ({ type: AdCreativeType.AdCreativeType.BOUNTY, bounty }), items)}>{bounty.children}</redux.Provider>;
}
export function QuestDockPlayableProvider(children) {
  const playable = children.playable;
  items = [playable];
  return <redux.Provider value={noop.useMemo(() => ({ type: AdCreativeType.AdCreativeType.PLAYABLE, playable }), items)}>{children.children}</redux.Provider>;
}
export function useQuestDockQuest() {
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
}
export function useQuestCreative(quest) {
  closure_0 = quest;
  items = [quest];
  return noop.useMemo(() => ({ type: AdCreativeType.AdCreativeType.QUEST, quest }), items);
}
export function useQuestDockBounty() {
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
}
export function useBountyCreative(questDockBounty) {
  closure_0 = questDockBounty;
  items = [questDockBounty];
  return noop.useMemo(() => ({ type: AdCreativeType.AdCreativeType.BOUNTY, bounty }), items);
}
export function useQuestDockPlayable() {
  const context = noop.useContext(closure_4);
  let type;
  if (context != null) {
    type = context.type;
  }
  if (type !== AdCreativeType.AdCreativeType.PLAYABLE) {
    const _Error = Error;
    const error = new Error("useQuestDockPlayable requires a QuestDockPlayableProvider ancestor");
    throw error;
  } else {
    return context.playable;
  }
}
export function usePlayableCreative(questDockPlayable) {
  closure_0 = questDockPlayable;
  items = [questDockPlayable];
  return noop.useMemo(() => ({ type: AdCreativeType.AdCreativeType.PLAYABLE, playable }), items);
}
export function useQuestDockCreative() {
  const context = noop.useContext(closure_4);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useQuestDockCreative requires a QuestDockBountyProvider, QuestDockPlayableProvider or QuestDockQuestProvider ancestor");
    throw error;
  } else {
    return context;
  }
}