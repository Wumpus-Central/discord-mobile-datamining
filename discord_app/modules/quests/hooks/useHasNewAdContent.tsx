// === Module 9562: useHasNewAdContent ===

// Module 9562 (useHasNewAdContent)
import DurationsDefault from "Durations" /* 1104 */;
import AdCreativeType from "AdCreativeType" /* 6715 */;
import _slicedToArray from "module_32" /* 32 */;
import AdContentSeenStore from "AdContentSeenStore" /* 9563 */;
import QuestStore from "QuestStore" /* 7774 */;

require = fn;
const DAY = DurationsDefault.Millis.DAY;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/hooks/useHasNewAdContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useHasNewAdContent() {
  const cResult = stateFromStoresArray(576).c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    const fn = function l() {
      quests = quests.quests;
      const found = Array.from(quests.values()).filter((item) => !stateFromStoresArray(closure_1_1[6]).isQuestExpired(item));
      return found.map((id) => id.id);
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const obj = stateFromStoresArray(576);
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(tmp4, tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AdContentSeenStore];
    cResult[3] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStoresArray) {
    const fn2 = function _() {
      for (const item10005 of stateFromStoresArray) {
        if (AdContentSeenStore.hasSeen(AdCreativeType.AdCreativeType.QUEST, item10005)) {
          continue;
        } else {
          obj.return();
          let flag = true;
          return true;
        }
      }
      return false;
    };
    const items3 = [stateFromStoresArray];
    cResult[4] = stateFromStoresArray;
    cResult[5] = fn2;
    cResult[6] = items3;
    let tmp12 = items3;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  const tmpResult = stateFromStoresArray(504);
  const stateFromStores = stateFromStoresArray(504).useStateFromStores(tmp9, tmp11, tmp12);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { cooldownDurationMs: DAY };
    cResult[7] = obj2;
    let tmp14 = obj2;
  } else {
    tmp14 = cResult[7];
  }
  const tmpResult3 = stateFromStoresArray(504);
  let prop = null;
  if (stateFromStores) {
    prop = tmp(4805).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE;
  }
  const tmp17 = _slicedToArray(stateFromStoresArray(7494).useSelectedTimeRecurringDismissibleContent(prop, tmp14, undefined, true), 2);
  if (cResult[8] === tmp17[1]) {
    if (cResult[9] === tmp19) {
      let tmp20 = cResult[10];
    }
    return tmp20;
  }
  const obj3 = { showBadge: null != tmp17[0], dismissBadge: tmp17[1] };
  cResult[8] = tmp17[1];
  cResult[9] = null != tmp17[0];
  cResult[10] = obj3;
  tmp20 = obj3;
  const tmpResult4 = stateFromStoresArray(7494);
}) : (function useHasNewAdContent() {
  const items = [QuestStore];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () => {
    quests = quests.quests;
    const found = Array.from(quests.values()).filter((item) => !stateFromStoresArray(closure_1_1[6]).isQuestExpired(item));
    return found.map((id) => id.id);
  }, []);
  const obj = stateFromStoresArray(504);
  const tmp = stateFromStoresArray;
  const items1 = [AdContentSeenStore];
  const items2 = [stateFromStoresArray];
  const stateFromStores = stateFromStoresArray(504).useStateFromStores(items1, () => {
    for (const item10005 of stateFromStoresArray) {
      if (AdContentSeenStore.hasSeen(AdCreativeType.AdCreativeType.QUEST, item10005)) {
        continue;
      } else {
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }, items2);
  const obj2 = stateFromStoresArray(504);
  let prop = null;
  if (stateFromStores) {
    prop = tmp(4805).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE;
  }
  const tmp6 = _slicedToArray(stateFromStoresArray(7494).useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: DAY }, undefined, true), 2);
  return { showBadge: null != tmp6[0], dismissBadge: tmp6[1] };
});