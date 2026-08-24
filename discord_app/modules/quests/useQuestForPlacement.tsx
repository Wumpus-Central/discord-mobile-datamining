// === Module 14535: maybeRefreshAd ===

// Module 14535 (maybeRefreshAd)
import set from "set" /* 2 */;
import setDefault from "set" /* 687 */;
import _modDef10540 from "module_10540" /* 10540 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 10724 */;
import noop from "noop" /* 19 */;
import closure_5 from "initializeState" /* 7491 */;

function maybeRefreshAd(fetchedAt, QUEST_HOME_BANNER_DESKTOP) {
  let isEligibleForQuests = getIsEligibleForQuests.getIsEligibleForQuests();
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
        if (obj4.canRefreshAd(QUEST_HOME_BANNER_DESKTOP)) {
          let tmpResult = tmp(10516);
          const currentQuests = tmpResult.fetchCurrentQuests();
          tmpResult = tmp(10516);
          const questToDeliver = tmpResult.fetchQuestToDeliver(QUEST_HOME_BANNER_DESKTOP, arg2);
        }
      }
      obj4 = fetchingQuestToDeliverByPlacement;
    } else if (null != fetchedAt) {
      tmp(10516).clearQuestAdDecision(QUEST_HOME_BANNER_DESKTOP, fetchedAt.ttlMillis);
      const tmpResult1 = tmp(10516);
    }
    obj2 = _modDef10540;
  }
}
({ useEffect: c3, useRef: c4 } = noop);
let closure_6 = 10 * setDefault.Millis.MINUTE;
let closure_7 = 30 * setDefault.Millis.SECOND;
const result = set.fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default function useFetchQuestForAdPlacement(arg0) {
  let _require = arg0;
  importDefault = callback(null);
  _require = arg0;
  const items = [closure_5];
  const items1 = [arg0];
  stateFromStores = _require(stateFromStores[6]).useStateFromStores(items, () => {
    const questAdDecisionByPlacement = closure_1_5.questAdDecisionByPlacement;
    let value = questAdDecisionByPlacement.get(closure_0);
    if (value == null) {
      value = null;
    }
    return value;
  }, items1);
  const obj = _require(stateFromStores[6]);
  const tmp3 = closure_5;
  const enableFastAdRecheck = importDefault(stateFromStores[7]).useConfig({ location: "useQuestForAdPlacement" }).enableFastAdRecheck;
  const items2 = [stateFromStores, arg0, enableFastAdRecheck];
  enableFastAdRecheck(() => {
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(tmp.current);
    }
    closure_1_8(stateFromStores, current, "questBar-open");
    ref.current = setInterval(() => {
      const questAdDecisionByPlacement = closure_1_5.questAdDecisionByPlacement;
      let value = questAdDecisionByPlacement.get(current);
      if (value == null) {
        value = null;
      }
      closure_1_8(value, current, "questBar-interval");
    }, enableFastAdRecheck ? closure_1_7 : closure_1_6);
    current = tmp.current;
    return () => {
      if (null != current) {
        const _clearInterval = clearInterval;
        clearInterval(tmp);
      }
    };
  }, items2);
  _require = arg0;
  const obj2 = importDefault(stateFromStores[7]);
  const items3 = [closure_5];
  const items4 = [arg0];
  const stateFromStores1 = _require(stateFromStores[6]).useStateFromStores(items3, () => {
    const questAdDecisionByPlacement = closure_1_5.questAdDecisionByPlacement;
    let value = questAdDecisionByPlacement.get(closure_0);
    if (value == null) {
      value = null;
    }
    return value;
  }, items4);
  const obj3 = _require(stateFromStores[6]);
  let creative;
  if (stateFromStores1 != null) {
    creative = stateFromStores1.creative;
  }
  _require = _require(stateFromStores[8]).getDeliveredQuestId(creative);
  let tmpResult = tmp(tmp2[6]);
  const items5 = [tmp3];
  const stateFromStores2 = tmpResult.useStateFromStores(items5, () => {
    let tmp2 = null;
    if (null != closure_0) {
      const quests = closure_1_5.quests;
      let value = quests.get(tmp);
      if (value == null) {
        value = null;
      }
      tmp2 = value;
    }
    return tmp2;
  });
  let tmp9 = null;
  if (null != stateFromStores2) {
    tmpResult = tmp(tmp2[9]);
    tmp9 = null;
    if (!tmpResult.isQuestExpired(stateFromStores2)) {
      tmp9 = stateFromStores2;
    }
  }
  return tmp9;
};
export const useAdDecisionForPlacement = function useAdDecisionForPlacement(MOBILE_HOME_DOCK_AREA) {
  const _require = MOBILE_HOME_DOCK_AREA;
  const items = [closure_5];
  const items1 = [MOBILE_HOME_DOCK_AREA];
  return _require(589).useStateFromStores(items, () => {
    const questAdDecisionByPlacement = closure_1_5.questAdDecisionByPlacement;
    let value = questAdDecisionByPlacement.get(closure_0);
    if (value == null) {
      value = null;
    }
    return value;
  }, items1);
};
export const useAdRefreshLoop = function useAdRefreshLoop(MOBILE_HOME_DOCK_AREA) {
  let _require = MOBILE_HOME_DOCK_AREA;
  importDefault = callback(null);
  _require = MOBILE_HOME_DOCK_AREA;
  const items = [closure_5];
  const items1 = [MOBILE_HOME_DOCK_AREA];
  stateFromStores = _require(stateFromStores[6]).useStateFromStores(items, () => {
    const questAdDecisionByPlacement = closure_1_5.questAdDecisionByPlacement;
    let value = questAdDecisionByPlacement.get(closure_0);
    if (value == null) {
      value = null;
    }
    return value;
  }, items1);
  const obj = _require(stateFromStores[6]);
  const enableFastAdRecheck = importDefault(stateFromStores[7]).useConfig({ location: "useQuestForAdPlacement" }).enableFastAdRecheck;
  const items2 = [stateFromStores, MOBILE_HOME_DOCK_AREA, enableFastAdRecheck];
  enableFastAdRecheck(() => {
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(tmp.current);
    }
    closure_1_8(stateFromStores, current, "questBar-open");
    ref.current = setInterval(() => {
      const questAdDecisionByPlacement = closure_1_5.questAdDecisionByPlacement;
      let value = questAdDecisionByPlacement.get(current);
      if (value == null) {
        value = null;
      }
      closure_1_8(value, current, "questBar-interval");
    }, enableFastAdRecheck ? closure_1_7 : closure_1_6);
    current = tmp.current;
    return () => {
      if (null != current) {
        const _clearInterval = clearInterval;
        clearInterval(tmp);
      }
    };
  }, items2);
};