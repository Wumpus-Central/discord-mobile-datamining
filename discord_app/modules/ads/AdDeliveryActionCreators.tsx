// discord_app/modules/ads/AdDeliveryActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/ads/AdDeliveryActionCreators.tsx");

export function clearQuestAdDecision(placement, arg1, refetchOnFocus) {
  const obj = DispatcherDefault;
  obj.dispatch({
    type: "QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER",
    placement,
    responseTtlSeconds: arg1 / 1000,
    fetchedAt: Date.now(),
    refetchOnFocus,
  });
}
