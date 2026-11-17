// === Module 10609: AdDeliveryActionCreators ===

// Module 10609 (AdDeliveryActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/ads/AdDeliveryActionCreators.tsx");

export function clearQuestAdDecision(placement, arg1, refetchOnFocus) {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER", placement, responseTtlSeconds: arg1 / 1000, fetchedAt: Date.now(), refetchOnFocus });
}