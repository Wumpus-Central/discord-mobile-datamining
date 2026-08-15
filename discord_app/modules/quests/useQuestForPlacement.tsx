// discord_app/modules/quests/useQuestForPlacement.tsx
import noop from "noop";
import initializeState from "initializeState";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { DiscordAppState.native } from "../app_state/DiscordAppState.native.tsx";
import { getIsEligibleForQuests } from "lib/QuestsEligibility.tsx";

let c3;
let c4;
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
          let tmpResult = tmp(10477);
          const currentQuests = tmpResult.fetchCurrentQuests();
          tmpResult = tmp(10477);
          const questToDeliver = tmpResult.fetchQuestToDeliver(QUEST_HOME_BANNER_DESKTOP, arg2);
        }
      }
      obj4 = fetchingQuestToDeliverByPlacement;
    } else if (null != fetchedAt) {
      tmp(10477).clearQuestAdDecision(QUEST_HOME_BANNER_DESKTOP, fetchedAt.ttlMillis);
      const tmpResult1 = tmp(10477);
    }
    obj2 = DiscordAppState.native;
  }
}
({ useEffect: c3, useRef: c4 } = noop);
let closure_6 = 10 * require("set").Millis.MINUTE;
let closure_7 = 30 * require("set").Millis.SECOND;
const result = require("set").fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default function useFetchQuestForAdPlacement(arg0) {
  let _require = arg0;
  const importDefault = callback(null);
  _require = arg0;
  const items = [initializeState];
  const items1 = [arg0];
  stateFromStores = _require(stateFromStores[6]).useStateFromStores(items, () => {
    const questAdDecisionByPlacement = outer1_5.questAdDecisionByPlacement;
    let value = questAdDecisionByPlacement.get(closure_0);
    if (value == null) {
      value = null;
    }
    return value;
  }, items1);
  const obj = _require(stateFromStores[6]);
  const tmp3 = initializeState;
  const enableFastAdRecheck = importDefault(stateFromStores[7]).useConfig({ location: "useQuestForAdPlacement" }).enableFastAdRecheck;
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
  _require = arg0;
  const obj2 = importDefault(stateFromStores[7]);
  const items3 = [initializeState];
  const items4 = [arg0];
  const stateFromStores1 = _require(stateFromStores[6]).useStateFromStores(items3, () => {
    const questAdDecisionByPlacement = outer1_5.questAdDecisionByPlacement;
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
      const quests = outer1_5.quests;
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
  const items = [initializeState];
  const items1 = [MOBILE_HOME_DOCK_AREA];
  return _initialize.useStateFromStores(items, () => {
    const questAdDecisionByPlacement = outer1_5.questAdDecisionByPlacement;
    let value = questAdDecisionByPlacement.get(closure_0);
    if (value == null) {
      value = null;
    }
    return value;
  }, items1);
};
export const useAdRefreshLoop = function useAdRefreshLoop(MOBILE_HOME_DOCK_AREA) {
  let _require = MOBILE_HOME_DOCK_AREA;
  const importDefault = callback(null);
  _require = MOBILE_HOME_DOCK_AREA;
  const items = [initializeState];
  const items1 = [MOBILE_HOME_DOCK_AREA];
  stateFromStores = _require(stateFromStores[6]).useStateFromStores(items, () => {
    const questAdDecisionByPlacement = outer1_5.questAdDecisionByPlacement;
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
};