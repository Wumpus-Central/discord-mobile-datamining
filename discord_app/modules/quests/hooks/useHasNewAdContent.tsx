// === Module 9778: useHasNewAdContent ===

// Module 9778 (useHasNewAdContent)
import DurationsDefault from "Durations" /* 1089 */;
import AdCreativeType from "AdCreativeType" /* 6868 */;
import _slicedToArray from "module_32" /* 32 */;
import AdContentSeenStore from "AdContentSeenStore" /* 9779 */;
import QuestStore from "QuestStore" /* 7945 */;

require = fn;
const DAY = DurationsDefault.Millis.DAY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/hooks/useHasNewAdContent.tsx");

export default function useHasNewAdContent() {
  items = [QuestStore];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () => {
    quests = quests.quests;
    const found = Array.from(quests.values()).filter((item) => !stateFromStoresArray(closure_1_1[5]).isQuestExpired(item));
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
    prop = tmp(5003).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE;
  }
  const tmp6 = _slicedToArray(stateFromStoresArray(7664).useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: DAY }, undefined, true), 2);
  return { showBadge: null != tmp6[0], dismissBadge: tmp6[1] };
};