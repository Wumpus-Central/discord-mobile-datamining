// === Module 15709: useHasNewAdContent ===

// Module 15709 (useHasNewAdContent)
import _slicedToArray from "_slicedToArray";
import getOrCreateSet from "getOrCreateSet";
import initializeState from "initializeState";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";

const require = arg1;
const DAY = require("set").Millis.DAY;
const result = require("initializeState").fileFinishedImporting("modules/quests/hooks/useHasNewAdContent.tsx");

export default function useHasNewAdContent() {
  const MobileQuestHomeRedDotNotificationExperiment = enabled(stateFromStoresArray[5]).MobileQuestHomeRedDotNotificationExperiment;
  let obj = { location: QuestsExperimentLocations.YOU_TAB_PROFILE_HEADER };
  enabled = MobileQuestHomeRedDotNotificationExperiment.useConfig(obj).enabled;
  const items = [initializeState];
  const items1 = [enabled];
  stateFromStoresArray = enabled(stateFromStoresArray[6]).useStateFromStoresArray(items, () => {
    if (enabled) {
      const _Array = Array;
      const quests = outer1_4.quests;
      const found = Array.from(quests.values()).filter((arg0) => !callback(table[7]).isQuestExpired(arg0));
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
  const items2 = [getOrCreateSet];
  const items3 = [stateFromStoresArray];
  const stateFromStores = enabled(stateFromStoresArray[6]).useStateFromStores(items2, () => {
    for (const item10005 of stateFromStoresArray) {
      let tmp = outer1_3;
      let tmp2 = enabled;
      let tmp3 = stateFromStoresArray;
      if (outer1_3.hasSeen(enabled(stateFromStoresArray[8]).AdCreativeType.QUEST, item10005)) {
        continue;
      } else {
        let tmp4 = obj;
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