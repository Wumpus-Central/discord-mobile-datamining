// === Module 16715: useAdRefreshLoop ===

// Module 16715 (useAdRefreshLoop)
import _mod19 from "module_19" /* 19 */;
import QuestConstants from "QuestConstants" /* 6871 */;
import DiscordAppStateDefault from "DiscordAppState" /* 6962 */;
import QuestsEligibility from "QuestsEligibility" /* 9894 */;
import AdDeliveryActionCreators from "AdDeliveryActionCreators" /* 9925 */;
import AdDeliveryStore from "AdDeliveryStore" /* 8363 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function maybeRefreshAd(arr, QUEST_HOME_BANNER_DESKTOP, fn, arg3, refetchOnFocus) {
  const isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
  let tmp4 = !isEligibleForQuests;
  if (isEligibleForQuests) {
    tmp4 = arr.length > 0 && arr.every((item) => require("AdDecisionUtils").isAdDecisionValid(item));
    const tmp5 = arr.length > 0 && arr.every((item) => require("AdDecisionUtils").isAdDecisionValid(item));
  }
  if (!tmp4) {
    if ("active" === obj2.getState()) {
      const result = AdDeliveryStore.isFetchingAdToDeliverByPlacement(QUEST_HOME_BANNER_DESKTOP);
      let canRefreshAdResult = !result;
      if (!result) {
        canRefreshAdResult = AdDeliveryStore.canRefreshAd(QUEST_HOME_BANNER_DESKTOP);
      }
      if (canRefreshAdResult) {
        fn(QUEST_HOME_BANNER_DESKTOP, arg3);
      }
    } else if (arr.length > 0) {
      const _Math = Math;
      items = [];
      HermesBuiltin.arraySpread(arr.map((ttlMillis) => ttlMillis.ttlMillis), 0);
      const _Math2 = Math;
      AdDeliveryActionCreators.clearQuestAdDecision(QUEST_HOME_BANNER_DESKTOP, HermesBuiltin.apply(items, Math), refetchOnFocus);
      const tmpResult = AdDeliveryActionCreators;
    }
    obj2 = DiscordAppStateDefault;
  }
}
const useEffect = _mod19.useEffect;
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
let result = size.fileFinishedImporting("modules/ads/useAdRefreshLoop.tsx");

export function useAdRefreshLoop(MOBILE_HOME_DOCK_AREA, fetch) {
  _require = MOBILE_HOME_DOCK_AREA;
  const _fetch = fetch.fetch;
  const callerSource = fetch.callerSource;
  let enabled;
  let stateFromStores;
  const AdRefreshImmediateOnFocusExperiment = require("AdRefreshImmediateOnFocusExperiment").AdRefreshImmediateOnFocusExperiment;
  if (MOBILE_HOME_DOCK_AREA === require("QuestTypes").AdPlacement.QUEST_HOME_BANNER_DESKTOP) {
    let QUESTS_BAR_MOBILE = QuestsExperimentLocations.QUEST_HOME_HERO;
  } else {
    QUESTS_BAR_MOBILE = QuestsExperimentLocations.QUESTS_BAR_MOBILE;
  }
  if (enabled == null) {
    enabled = AdRefreshImmediateOnFocusExperiment.useConfig({ location: QUESTS_BAR_MOBILE }, { autoTrackExposure: tmp5 }).enabled;
  }
  state = null;
  if (enabled) {
    state = obj.useState();
  }
  obj = _fetch(callerSource[5]);
  tmp5 = null != MOBILE_HOME_DOCK_AREA && null == enabled;
  items = [stateFromStores];
  const items1 = [MOBILE_HOME_DOCK_AREA];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let adDecisionsForPlacement = null;
    if (null != closure_0) {
      adDecisionsForPlacement = AdDeliveryStore.getAdDecisionsForPlacement(tmp);
    }
    return adDecisionsForPlacement;
  }, items1);
  const items2 = [stateFromStores, MOBILE_HOME_DOCK_AREA, _fetch, callerSource, state, enabled];
  enabled(() => {
    if (null != interval) {
      if (null != stateFromStores) {
        const _HermesInternal = HermesInternal;
        maybeRefreshAd(stateFromStores, tmp, _fetch, "" + callerSource + "-open", enabled);
        const _setInterval = setInterval;
        interval = setInterval(() => {
          const adDecisionsForPlacement = stateFromStores.getAdDecisionsForPlacement(closure_0);
          maybeRefreshAd(adDecisionsForPlacement, closure_0, _fetch, "" + callerSource + "-interval", enabled);
        }, 30000);
        return () => clearInterval(closure_0);
      }
    }
  }, items2);
  const tmpResult = require("initialize");
}