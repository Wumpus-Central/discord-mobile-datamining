// === Module 16956: useHasNewAdContent ===

// Module 16956 (useHasNewAdContent)
import DurationsDefault from "Durations" /* 1102 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import _slicedToArray from "module_32" /* 32 */;
import AdContentSeenStore from "AdContentSeenStore" /* 14881 */;
import QuestStore from "QuestStore" /* 7187 */;

require = fn;
const QuestsExperimentLocations = fn(5623).QuestsExperimentLocations;
const DAY = DurationsDefault.Millis.DAY;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/hooks/useHasNewAdContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = enabled(stateFromStoresArray[6]).c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: QuestsExperimentLocations.YOU_TAB_PROFILE_HEADER };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const MobileQuestHomeRedDotNotificationExperiment = tmp(tmp2[7]).MobileQuestHomeRedDotNotificationExperiment;
  enabled = MobileQuestHomeRedDotNotificationExperiment.useConfig(first).enabled;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[1] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== enabled) {
    const fn = function f() {
      if (enabled) {
        const _Array = Array;
        const quests = QuestStore.quests;
        const found = Array.from(quests.values()).filter((item) => !enabled(stateFromStoresArray[8]).isQuestExpired(item));
        let mapped = found.map((id) => id.id);
        const arr = Array.from(quests.values());
      } else {
        mapped = [];
      }
      return mapped;
    };
    const items1 = [enabled];
    cResult[2] = enabled;
    cResult[3] = fn;
    cResult[4] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const obj = enabled(stateFromStoresArray[6]);
  stateFromStoresArray = enabled(stateFromStoresArray[9]).useStateFromStoresArray(tmp6, tmp8, tmp9);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AdContentSeenStore];
    cResult[5] = items2;
    let tmp11 = items2;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== stateFromStoresArray) {
    const fn2 = function b() {
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
    cResult[6] = stateFromStoresArray;
    cResult[7] = fn2;
    cResult[8] = items3;
    let tmp14 = items3;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[7];
    tmp14 = cResult[8];
  }
  const tmpResult = enabled(stateFromStoresArray[9]);
  const stateFromStores = enabled(stateFromStoresArray[9]).useStateFromStores(tmp11, tmp13, tmp14);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { cooldownDurationMs: DAY };
    cResult[9] = obj3;
    let tmp16 = obj3;
  } else {
    tmp16 = cResult[9];
  }
  const tmpResult3 = enabled(stateFromStoresArray[9]);
  let prop = null;
  if (stateFromStores) {
    prop = null;
    if (enabled) {
      prop = tmp(tmp2[12]).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE;
    }
  }
  const tmp19 = _slicedToArray(enabled(stateFromStoresArray[11]).useSelectedTimeRecurringDismissibleContent(prop, tmp16, undefined, true), 2);
  if (cResult[10] === tmp19[1]) {
    if (cResult[11] === tmp21) {
      let tmp22 = cResult[12];
    }
    return tmp22;
  }
  const obj4 = { showBadge: null != tmp19[0], dismissBadge: tmp19[1] };
  cResult[10] = tmp19[1];
  cResult[11] = null != tmp19[0];
  cResult[12] = obj4;
  tmp22 = obj4;
  const tmpResult4 = enabled(stateFromStoresArray[11]);
}) : (() => {
  const MobileQuestHomeRedDotNotificationExperiment = enabled(stateFromStoresArray[7]).MobileQuestHomeRedDotNotificationExperiment;
  enabled = MobileQuestHomeRedDotNotificationExperiment.useConfig({ location: QuestsExperimentLocations.YOU_TAB_PROFILE_HEADER }).enabled;
  const items = [QuestStore];
  const items1 = [enabled];
  stateFromStoresArray = enabled(stateFromStoresArray[9]).useStateFromStoresArray(items, () => {
    if (enabled) {
      const _Array = Array;
      const quests = QuestStore.quests;
      const found = Array.from(quests.values()).filter((item) => !enabled(stateFromStoresArray[8]).isQuestExpired(item));
      let mapped = found.map((id) => id.id);
      const arr = Array.from(quests.values());
    } else {
      mapped = [];
    }
    return mapped;
  }, items1);
  const obj = { location: QuestsExperimentLocations.YOU_TAB_PROFILE_HEADER };
  const obj2 = enabled(stateFromStoresArray[9]);
  const tmp = enabled;
  const tmp2 = stateFromStoresArray;
  const items2 = [AdContentSeenStore];
  const items3 = [stateFromStoresArray];
  const stateFromStores = enabled(stateFromStoresArray[9]).useStateFromStores(items2, () => {
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
  }, items3);
  const obj3 = enabled(stateFromStoresArray[9]);
  let prop = null;
  if (stateFromStores) {
    prop = null;
    if (enabled) {
      prop = tmp(tmp2[12]).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE;
    }
  }
  const tmp6 = _slicedToArray(enabled(stateFromStoresArray[11]).useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: DAY }, undefined, true), 2);
  return { showBadge: null != tmp6[0], dismissBadge: tmp6[1] };
});