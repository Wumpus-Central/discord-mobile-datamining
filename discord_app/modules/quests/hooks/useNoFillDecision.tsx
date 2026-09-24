// === Module 15550: useNoFillDecision ===

// Module 15550 (useNoFillDecision)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AdDeliveryStore from "AdDeliveryStore" /* 8023 */;
import QuestStore from "QuestStore" /* 8026 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/hooks/useNoFillDecision.tsx");

export default function useNoFillDecision(arg0, location) {
  _require = arg0;
  const obj = stateFromStores(15551);
  const obj2 = { location };
  const tmp2 = _require;
  const items = [AdDeliveryStore];
  const items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(items, () => AdDeliveryStore.getNoFillForPlacement(closure_0), items1);
  const obj3 = require("initialize");
  const items2 = [QuestStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => null != QuestStore.questEnrollmentBlockedUntil);
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
        tmp2Result = tmp2(11825);
      }
    }
  }
  return tmp7;
};