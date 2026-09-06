// === Module 15116: maybeRefreshAd ===

// Module 15116 (maybeRefreshAd)
import set from "set" /* 2 */;
import setDefault from "set" /* 1090 */;
import _modDef11300 from "module_11300" /* 11300 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 11484 */;
import noop from "noop" /* 19 */;
import closure_5 from "map" /* 7700 */;
import closure_6 from "initializeState" /* 7703 */;

function maybeRefreshAd(fetchedAt, MOBILE_HOME_DOCK_AREA) {
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
      if (!fetchingAdToDeliverByPlacement.isFetchingAdToDeliverByPlacement(MOBILE_HOME_DOCK_AREA)) {
        if (obj4.canRefreshAd(MOBILE_HOME_DOCK_AREA)) {
          let tmpResult = tmp(11276);
          const currentQuests = tmpResult.fetchCurrentQuests();
          tmpResult = tmp(11276);
          const questToDeliver = tmpResult.fetchQuestToDeliver(MOBILE_HOME_DOCK_AREA, arg2);
        }
      }
      obj4 = fetchingAdToDeliverByPlacement;
    } else if (null != fetchedAt) {
      tmp(11276).clearQuestAdDecision(MOBILE_HOME_DOCK_AREA, fetchedAt.ttlMillis);
      const tmpResult1 = tmp(11276);
    }
    obj2 = _modDef11300;
  }
}
({ useEffect: c3, useRef: c4 } = noop);
let closure_7 = 10 * setDefault.Millis.MINUTE;
let closure_8 = 30 * setDefault.Millis.SECOND;
const result = set.fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default function useFetchQuestForAdPlacement(arg0) {
  let _require = arg0;
  importDefault = callback(null);
  _require = arg0;
  const items = [closure_5];
  const items1 = [arg0];
  stateFromStores = _require(stateFromStores[7]).useStateFromStores(items, () => {
    const deliveryAdDecisionByPlacement = closure_1_5.deliveryAdDecisionByPlacement;
    let value = deliveryAdDecisionByPlacement.get(closure_0);
    if (value == null) {
      value = null;
    }
    return value;
  }, items1);
  const obj = _require(stateFromStores[7]);
  const enableFastAdRecheck = importDefault(stateFromStores[8]).useConfig({ location: "useQuestForAdPlacement" }).enableFastAdRecheck;
  const items2 = [stateFromStores, arg0, enableFastAdRecheck];
  enableFastAdRecheck(() => {
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(tmp.current);
    }
    closure_1_9(stateFromStores, current, "questBar-open");
    ref.current = setInterval(() => {
      const deliveryAdDecisionByPlacement = closure_1_5.deliveryAdDecisionByPlacement;
      let value = deliveryAdDecisionByPlacement.get(current);
      if (value == null) {
        value = null;
      }
      closure_1_9(value, current, "questBar-interval");
    }, enableFastAdRecheck ? closure_1_8 : closure_1_7);
    current = tmp.current;
    return () => {
      if (null != current) {
        const _clearInterval = clearInterval;
        clearInterval(tmp);
      }
    };
  }, items2);
  _require = arg0;
  const obj2 = importDefault(stateFromStores[8]);
  const items3 = [closure_5];
  const items4 = [arg0];
  const stateFromStores1 = _require(stateFromStores[7]).useStateFromStores(items3, () => {
    const deliveryAdDecisionByPlacement = closure_1_5.deliveryAdDecisionByPlacement;
    let value = deliveryAdDecisionByPlacement.get(closure_0);
    if (value == null) {
      value = null;
    }
    return value;
  }, items4);
  const obj3 = _require(stateFromStores[7]);
  let creative;
  if (stateFromStores1 != null) {
    creative = stateFromStores1.creative;
  }
  _require = _require(stateFromStores[9]).getDeliveredQuestId(creative);
  let tmpResult = tmp(tmp2[7]);
  const items5 = [closure_6];
  const stateFromStores2 = tmpResult.useStateFromStores(items5, () => {
    let tmp2 = null;
    if (null != closure_0) {
      const quests = closure_1_6.quests;
      let value = quests.get(tmp);
      if (value == null) {
        value = null;
      }
      tmp2 = value;
    }
    return tmp2;
  });
  let tmp8 = null;
  if (null != stateFromStores2) {
    tmpResult = tmp(tmp2[10]);
    tmp8 = null;
    if (!tmpResult.isQuestExpired(stateFromStores2)) {
      tmp8 = stateFromStores2;
    }
  }
  return tmp8;
};
export const useAdDecisionForPlacement = function useAdDecisionForPlacement(MOBILE_HOME_DOCK_AREA) {
  const _require = MOBILE_HOME_DOCK_AREA;
  const items = [closure_5];
  const items1 = [MOBILE_HOME_DOCK_AREA];
  return _require(504).useStateFromStores(items, () => {
    const deliveryAdDecisionByPlacement = closure_1_5.deliveryAdDecisionByPlacement;
    let value = deliveryAdDecisionByPlacement.get(closure_0);
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
  stateFromStores = _require(stateFromStores[7]).useStateFromStores(items, () => {
    const deliveryAdDecisionByPlacement = closure_1_5.deliveryAdDecisionByPlacement;
    let value = deliveryAdDecisionByPlacement.get(closure_0);
    if (value == null) {
      value = null;
    }
    return value;
  }, items1);
  const obj = _require(stateFromStores[7]);
  const enableFastAdRecheck = importDefault(stateFromStores[8]).useConfig({ location: "useQuestForAdPlacement" }).enableFastAdRecheck;
  const items2 = [stateFromStores, MOBILE_HOME_DOCK_AREA, enableFastAdRecheck];
  enableFastAdRecheck(() => {
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(tmp.current);
    }
    closure_1_9(stateFromStores, current, "questBar-open");
    ref.current = setInterval(() => {
      const deliveryAdDecisionByPlacement = closure_1_5.deliveryAdDecisionByPlacement;
      let value = deliveryAdDecisionByPlacement.get(current);
      if (value == null) {
        value = null;
      }
      closure_1_9(value, current, "questBar-interval");
    }, enableFastAdRecheck ? closure_1_8 : closure_1_7);
    current = tmp.current;
    return () => {
      if (null != current) {
        const _clearInterval = clearInterval;
        clearInterval(tmp);
      }
    };
  }, items2);
};