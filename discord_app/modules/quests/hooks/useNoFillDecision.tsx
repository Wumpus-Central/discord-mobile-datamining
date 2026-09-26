// discord_app/modules/quests/hooks/useNoFillDecision.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AdDeliveryStore from "../../ads/AdDeliveryStore.tsx";
import QuestStore from "../QuestStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/hooks/useNoFillDecision.tsx");

export default function useNoFillDecision(arg0, location) {
  _require = arg0;
  const obj = stateFromStores(14749);
  const obj2 = { location };
  const tmp2 = _require;
  const items = [AdDeliveryStore];
  const items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(
    items,
    () => AdDeliveryStore.getNoFillForPlacement(closure_0),
    items1,
  );
  const obj3 = require("initialize");
  const items2 = [QuestStore];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => null != QuestStore.questEnrollmentBlockedUntil,
  );
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  dependencyMap = tmp5[1];
  const items3 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null != stateFromStores) {
      const _Date = Date;
      const sum = stateFromStores.fetchedAt + stateFromStores.ttlMillis;
      const _setTimeout = setTimeout;
      const _Math = Math;
      const timeout = setTimeout(() => closure_1_2(decisionId.decisionId), Math.max(sum - Date.now(), 0));
      return () => clearTimeout(closure_0);
    }
  }, items3);
  let tmp7 = null;
  if (obj.useConfig(obj2).enableNoFill) {
    tmp7 = null;
    if (null != stateFromStores) {
      tmp7 = null;
      if (stateFromStores.decisionId !== tmp5[0]) {
        tmp7 = null;
        if (tmp2Result.getIsEligibleForQuests()) {
          tmp7 = null;
          if (!stateFromStores1) {
            tmp7 = stateFromStores;
          }
        }
        tmp2Result = tmp2(10682);
      }
    }
  }
  return tmp7;
}
