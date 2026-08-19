// discord_app/modules/quests/hooks/useHasNewAdContent.tsx
import obj132Default from "../../../utils/Durations.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import getOrCreateSet from "../AdContentSeenStore.tsx";
import initializeState from "../QuestStore.tsx";
import { QuestsExperimentLocations } from "../QuestConstants.tsx";

const require = fn;
const DAY = obj132Default.Millis.DAY;
const result = require("obj132").fileFinishedImporting("modules/quests/hooks/useHasNewAdContent.tsx");

export default function useHasNewAdContent() {
  const MobileQuestHomeRedDotNotificationExperiment = enabled(stateFromStoresArray[5]).MobileQuestHomeRedDotNotificationExperiment;
  let obj = { location: QuestsExperimentLocations.YOU_TAB_PROFILE_HEADER };
  enabled = MobileQuestHomeRedDotNotificationExperiment.useConfig(obj).enabled;
  const items = [closure_4];
  const items1 = [enabled];
  stateFromStoresArray = enabled(stateFromStoresArray[6]).useStateFromStoresArray(items, () => {
    if (enabled) {
      const _Array = Array;
      const quests = closure_1_4.quests;
      const found = Array.from(quests.values()).filter((item, index) => !callback(table[7]).isQuestExpired(item));
      let mapped = found.map((item, index) => item.id);
      const arr = Array.from(quests.values());
    } else {
      mapped = [];
    }
    return mapped;
  }, items1);
  const obj2 = enabled(stateFromStoresArray[6]);
  const tmp = enabled;
  const tmp2 = stateFromStoresArray;
  const items2 = [closure_3];
  const items3 = [stateFromStoresArray];
  const stateFromStores = enabled(stateFromStoresArray[6]).useStateFromStores(items2, () => {
    for (const item10005 of stateFromStoresArray) {
      if (closure_1_3.hasSeen(enabled(stateFromStoresArray[8]).AdCreativeType.QUEST, item10005)) {
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
  const tmp6 = callback(enabled(stateFromStoresArray[9]).useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
  obj = { showBadge: null != tmp6[0], dismissBadge: tmp6[1] };
  return obj;
};