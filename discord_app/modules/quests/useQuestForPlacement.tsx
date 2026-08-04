import noop from "noop";
import initializeState from "initializeState";

let c3;
let c4;
function maybeRefreshAd(fetchedAt, QUEST_HOME_BANNER_DESKTOP) {
  let isEligibleForQuests = require(10375) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  if (isEligibleForQuests) {
    let tmp5 = null != fetchedAt;
    if (tmp5) {
      const _Date = Date;
      const sum = fetchedAt.fetchedAt + fetchedAt.ttlMillis;
      tmp5 = sum >= Date.now();
    }
    isEligibleForQuests = !tmp5;
  }
  if (isEligibleForQuests) {
    if ("active" === obj2.getState()) {
      if (!fetchingQuestToDeliverByPlacement.isFetchingQuestToDeliverByPlacement(QUEST_HOME_BANNER_DESKTOP)) {
        let enableNewRequestBehavior = obj3.canRefreshAd(QUEST_HOME_BANNER_DESKTOP);
        if (enableNewRequestBehavior) {
          enableNewRequestBehavior = tmp9(7095).getConfig({ location: "maybeRefreshAd" }).enableNewRequestBehavior;
          const tmp9Result = tmp9(7095);
        }
        if (enableNewRequestBehavior) {
          let tmpResult = tmp(10376);
          const currentQuests = tmpResult.fetchCurrentQuests();
          tmpResult = tmp(10376);
          const questToDeliver = tmpResult.fetchQuestToDeliver(QUEST_HOME_BANNER_DESKTOP, arg2);
        }
      }
      obj3 = fetchingQuestToDeliverByPlacement;
    } else if (null != fetchedAt) {
      tmp(10376).clearQuestAdDecision(QUEST_HOME_BANNER_DESKTOP, fetchedAt.ttlMillis);
      const tmpResult1 = tmp(10376);
    }
    obj2 = importDefault(10384);
    tmp9 = importDefault;
  }
}
({ useEffect: c3, useRef: c4 } = noop);
let closure_6 = 10 * require("set").Millis.MINUTE;
let closure_7 = 30 * require("set").Millis.SECOND;
const result = require("set").fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default function useQuestForAdPlacement(arg0) {
  const _require = arg0;
  const importDefault = callback(null);
  const items = [initializeState];
  stateFromStores = _require(stateFromStores[7]).useStateFromStores(items, () => {
    const questAdDecisionByPlacement = outer1_5.questAdDecisionByPlacement;
    let value = questAdDecisionByPlacement.get(closure_0);
    if (value == null) {
      value = null;
    }
    return value;
  });
  const obj = _require(stateFromStores[7]);
  const tmp = _require;
  const tmp2 = stateFromStores;
  const items1 = [initializeState];
  const stateFromStores1 = _require(stateFromStores[7]).useStateFromStores(items1, () => {
    let questId;
    if (stateFromStores != null) {
      questId = tmp.questId;
    }
    let tmp3 = null;
    if (null != questId) {
      const quests = outer1_5.quests;
      let value = quests.get(tmp.questId);
      if (value == null) {
        value = null;
      }
      tmp3 = value;
    }
    return tmp3;
  });
  const obj2 = _require(stateFromStores[7]);
  const enableFastAdRecheck = importDefault(stateFromStores[8]).useConfig({ location: "useQuestForAdPlacement" }).enableFastAdRecheck;
  const items2 = [stateFromStores, arg0, enableFastAdRecheck];
  enableFastAdRecheck(() => {
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(tmp.current);
    }
    outer1_8(stateFromStores, current, "questBar-open");
    ref.current = setInterval(() => {
      const questAdDecisionByPlacement = outer1_5.questAdDecisionByPlacement;
      let value = questAdDecisionByPlacement.get(current);
      if (value == null) {
        value = null;
      }
      outer1_8(value, current, "questBar-interval");
    }, enableFastAdRecheck ? outer1_7 : outer1_6);
    current = tmp.current;
    return () => {
      if (null != current) {
        const _clearInterval = clearInterval;
        clearInterval(tmp);
      }
    };
  }, items2);
  let tmp6 = null;
  if (null != stateFromStores1) {
    tmp6 = null;
    if (!tmpResult.isQuestExpired(stateFromStores1)) {
      tmp6 = stateFromStores1;
    }
    tmpResult = tmp(tmp2[9]);
  }
  return tmp6;
};