// discord_app/modules/quests/hooks/useHasNewAdContent.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import AdContentSeenStore from "../AdContentSeenStore.tsx";
import QuestStore from "../QuestStore.tsx";

require = fn;
const DAY = DurationsDefault.Millis.DAY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/hooks/useHasNewAdContent.tsx");

export default function useHasNewAdContent() {
  const items = [QuestStore];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () => {
    quests = quests.quests;
    const found = Array.from(quests.values()).filter(
      (item) => !stateFromStoresArray(closure_1_1[5]).isQuestExpired(item),
    );
    return found.map((id) => id.id);
  }, []);
  const obj = stateFromStoresArray(504);
  const tmp = stateFromStoresArray;
  const items1 = [AdContentSeenStore];
  const items2 = [stateFromStoresArray];
  const stateFromStores = stateFromStoresArray(504).useStateFromStores(
    items1,
    () => {
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
    },
    items2,
  );
  const obj2 = stateFromStoresArray(504);
  let prop = null;
  if (stateFromStores) {
    prop = tmp(4842).DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE;
  }
  const tmp6 = _slicedToArray(
    stateFromStoresArray(7563).useSelectedTimeRecurringDismissibleContent(
      prop,
      { cooldownDurationMs: DAY },
      undefined,
      true,
    ),
    2,
  );
  return { showBadge: null != tmp6[0], dismissBadge: tmp6[1] };
}
