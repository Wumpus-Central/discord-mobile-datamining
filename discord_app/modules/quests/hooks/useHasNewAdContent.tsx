// === Module 16982: useHasNewAdContent ===

// Module 16982 (useHasNewAdContent)
import DurationsDefault from "Durations" /* 1102 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import AdCreativeType from "AdCreativeType" /* 5637 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AdContentSeenStore from "AdContentSeenStore" /* 14897 */;
import QuestStore from "QuestStore" /* 7200 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const DAY = DurationsDefault.Millis.DAY;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let enabled;
  let first;
  let stateFromStoresArray;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp6;
  let tmp8;
  let tmp9;
  let obj = enabled(stateFromStoresArray[6]);
  const cResult = obj.c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: QuestsExperimentLocations.YOU_TAB_PROFILE_HEADER };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const MobileQuestHomeRedDotNotificationExperiment = tmp(tmp2[7]).MobileQuestHomeRedDotNotificationExperiment;
  enabled = MobileQuestHomeRedDotNotificationExperiment.useConfig(first).enabled;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[1] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== enabled) {
    const fn = function f() {
      let mapped;
      if (enabled) {
        const _Array = Array;
        const quests = QuestStore.quests;
        const arr = Array.from(quests.values());
        const found = arr.filter((item) => {
          const obj = enabled(stateFromStoresArray[8]);
          return !obj.isQuestExpired(item);
        });
        mapped = found.map((id) => id.id);
      } else {
        mapped = [];
      }
      return mapped;
    };
    const items1 = [enabled];
    cResult[2] = enabled;
    cResult[3] = fn;
    cResult[4] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const tmpResult = enabled(stateFromStoresArray[9]);
  stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp6, tmp8, tmp9);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AdContentSeenStore];
    cResult[5] = items2;
    tmp11 = items2;
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
    tmp14 = items3;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[7];
    tmp14 = cResult[8];
  }
  const tmpResult3 = enabled(stateFromStoresArray[9]);
  const stateFromStores = tmpResult3.useStateFromStores(tmp11, tmp13, tmp14);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { cooldownDurationMs: DAY };
    cResult[9] = obj3;
    tmp16 = obj3;
  } else {
    tmp16 = cResult[9];
  }
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = enabled(tmp2[11]).useSelectedTimeRecurringDismissibleContent;
  enabled(stateFromStoresArray[11]);
  if (stateFromStores) {
    prop = null;
    if (enabled) {
      prop = tmp(tmp2[12]).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE;
    }
  }
  const tmp20 = _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, tmp16, undefined, true), 2);
  if (cResult[10] === tmp20[1]) {
    let tmp23;
    if (cResult[11] === null != tmp20[0]) {
      tmp23 = cResult[12];
    }
    return tmp23;
  }
  const obj4 = { showBadge: null != tmp20[0], dismissBadge: tmp20[1] };
  cResult[10] = tmp20[1];
  cResult[11] = null != tmp20[0];
  cResult[12] = obj4;
  tmp23 = obj4;
}) : (() => {
  let enabled;
  let stateFromStoresArray;
  const MobileQuestHomeRedDotNotificationExperiment = enabled(stateFromStoresArray[7]).MobileQuestHomeRedDotNotificationExperiment;
  let obj = { location: QuestsExperimentLocations.YOU_TAB_PROFILE_HEADER };
  const tmp = enabled;
  enabled = MobileQuestHomeRedDotNotificationExperiment.useConfig(obj).enabled;
  const items = [QuestStore];
  const items1 = [enabled];
  const obj2 = enabled(stateFromStoresArray[9]);
  const tmp2 = stateFromStoresArray;
  stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    let mapped;
    if (enabled) {
      const _Array = Array;
      const quests = QuestStore.quests;
      const arr = Array.from(quests.values());
      const found = arr.filter((item) => {
        const obj = enabled(stateFromStoresArray[8]);
        return !obj.isQuestExpired(item);
      });
      mapped = found.map((id) => id.id);
    } else {
      mapped = [];
    }
    return mapped;
  }, items1);
  const items2 = [AdContentSeenStore];
  const items3 = [stateFromStoresArray];
  const obj3 = enabled(stateFromStoresArray[9]);
  const stateFromStores = obj3.useStateFromStores(items2, () => {
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
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = enabled(stateFromStoresArray[11]).useSelectedTimeRecurringDismissibleContent;
  enabled(stateFromStoresArray[11]);
  if (stateFromStores) {
    prop = null;
    if (enabled) {
      prop = tmp(tmp2[12]).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE;
    }
  }
  const obj4 = { cooldownDurationMs: DAY };
  const tmp7 = _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, obj4, undefined, true), 2);
  return { showBadge: null != tmp7[0], dismissBadge: tmp7[1] };
});
const result = size.fileFinishedImporting("modules/quests/hooks/useHasNewAdContent.tsx");

export default tmp2;