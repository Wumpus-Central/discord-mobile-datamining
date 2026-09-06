// === Module 16791: useHasNewAdContent ===

// Module 16791 (useHasNewAdContent)
import DurationsDefault from "Durations" /* 1090 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import _slicedToArray from "module_32" /* 32 */;
import AdContentSeenStore from "AdContentSeenStore" /* 15080 */;
import QuestStore from "QuestStore" /* 7703 */;

require = fn;
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const DAY = DurationsDefault.Millis.DAY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/hooks/useHasNewAdContent.tsx");

export default function useHasNewAdContent() {
  const MobileQuestHomeRedDotNotificationExperiment = enabled(stateFromStoresArray[5]).MobileQuestHomeRedDotNotificationExperiment;
  let obj = { location: QuestsExperimentLocations.YOU_TAB_PROFILE_HEADER };
  enabled = MobileQuestHomeRedDotNotificationExperiment.useConfig(obj).enabled;
  const items = [QuestStore];
  const items1 = [enabled];
  stateFromStoresArray = enabled(stateFromStoresArray[6]).useStateFromStoresArray(items, () => {
    if (enabled) {
      const _Array = Array;
      const quests = QuestStore.quests;
      const found = Array.from(quests.values()).filter((item) => !enabled(stateFromStoresArray[7]).isQuestExpired(item));
      let mapped = found.map((id) => id.id);
      const arr = Array.from(quests.values());
    } else {
      mapped = [];
    }
    return mapped;
  }, items1);
  const obj2 = enabled(stateFromStoresArray[6]);
  let tmp = enabled;
  let tmp2 = stateFromStoresArray;
  const items2 = [AdContentSeenStore];
  const items3 = [stateFromStoresArray];
  const stateFromStores = enabled(stateFromStoresArray[6]).useStateFromStores(items2, () => {
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
  const obj3 = enabled(stateFromStoresArray[6]);
  let prop = null;
  if (stateFromStores) {
    prop = null;
    if (enabled) {
      prop = tmp(tmp2[10]).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE;
    }
  }
  obj = { cooldownDurationMs: DAY };
  const tmp6 = _slicedToArray(enabled(stateFromStoresArray[9]).useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
  obj = { showBadge: null != tmp6[0], dismissBadge: tmp6[1] };
  return obj;
};