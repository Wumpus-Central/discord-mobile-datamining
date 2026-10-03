// === Module 14921: QuestDockCreativeContext ===

// Module 14921 (QuestDockCreativeContext)
import c from "c" /* 576 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const redux = noop.createContext(null);
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(3);
  children = children.children;
  const tmp2 = closure_5(children.quest);
  if (cResult[0] === children) {
    if (cResult[1] === tmp2) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = <redux.Provider value={tmp2}>{children}</redux.Provider>;
  cResult[0] = children;
  cResult[1] = tmp2;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((children) => <redux.Provider value={closure_5(children.quest)}>{children.children}</redux.Provider>);
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(3);
  children = children.children;
  const tmp2 = closure_6(children.bounty);
  if (cResult[0] === children) {
    if (cResult[1] === tmp2) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = <redux.Provider value={tmp2}>{children}</redux.Provider>;
  cResult[0] = children;
  cResult[1] = tmp2;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((bounty) => <redux.Provider value={closure_6(bounty.bounty)}>{bounty.children}</redux.Provider>);
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const cResult = c.c(2);
  if (cResult[0] !== quest) {
    const obj2 = { type: AdCreativeType.AdCreativeType.QUEST, quest };
    cResult[0] = quest;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((quest) => {
  const items = [quest];
  return noop.useMemo(() => ({ type: AdCreativeType.AdCreativeType.QUEST, quest }), items);
});
let closure_5 = tmp5;
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
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
});
ReactCompilerGating = fn(558);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((bounty) => {
  const cResult = c.c(2);
  if (cResult[0] !== bounty) {
    const obj2 = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty };
    cResult[0] = bounty;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((bounty) => {
  const items = [bounty];
  return noop.useMemo(() => ({ type: AdCreativeType.AdCreativeType.BOUNTY, bounty }), items);
});
let closure_6 = tmp7;
ReactCompilerGating = fn(558);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockCreativeContext.tsx");

export const QuestDockQuestProvider = tmp2;
export const QuestDockBountyProvider = tmp3;
export const useQuestDockQuest = tmp4;
export const useQuestCreative = tmp5;
export const useQuestDockBounty = tmp6;
export const useBountyCreative = tmp7;
export const useQuestDockCreative = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const context = noop.useContext(closure_4);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useQuestDockCreative requires a QuestDockBountyProvider or QuestDockQuestProvider ancestor");
    throw error;
  } else {
    return context;
  }
}) : (() => {
  const context = noop.useContext(closure_4);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useQuestDockCreative requires a QuestDockBountyProvider or QuestDockQuestProvider ancestor");
    throw error;
  } else {
    return context;
  }
});