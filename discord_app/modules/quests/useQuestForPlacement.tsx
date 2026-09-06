// discord_app/modules/quests/useQuestForPlacement.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import QuestActionCreators from "QuestActionCreators.tsx";
import DiscordAppStateDefault from "../app_state/DiscordAppState.native.tsx";
import QuestsEligibility from "lib/QuestsEligibility.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import AdDeliveryStore from "../ads/AdDeliveryStore.tsx";
import QuestStore from "QuestStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

function maybeRefreshAd(fetchedAt, MOBILE_HOME_DOCK_AREA, arg2) {
  let isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
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
      if (!AdDeliveryStore.isFetchingAdToDeliverByPlacement(MOBILE_HOME_DOCK_AREA)) {
        if (AdDeliveryStore.canRefreshAd(MOBILE_HOME_DOCK_AREA)) {
          let tmpResult = QuestActionCreators;
          const currentQuests = tmpResult.fetchCurrentQuests();
          tmpResult = QuestActionCreators;
          const questToDeliver = tmpResult.fetchQuestToDeliver(MOBILE_HOME_DOCK_AREA, arg2);
        }
      }
    } else if (null != fetchedAt) {
      QuestActionCreators.clearQuestAdDecision(MOBILE_HOME_DOCK_AREA, fetchedAt.ttlMillis);
      const tmpResult1 = QuestActionCreators;
    }
    obj2 = DiscordAppStateDefault;
  }
}
({ useEffect: c3, useRef: closure_4 } = noop);
let closure_7 = 10 * DurationsDefault.Millis.MINUTE;
let closure_8 = 30 * DurationsDefault.Millis.SECOND;
const result = size.fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default function useFetchQuestForAdPlacement(arg0) {
  _require = arg0;
  importDefault = closure_4(null);
  closure_129_0 = arg0;
  const items = [AdDeliveryStore];
  const items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      value = deliveryAdDecisionByPlacement.get(closure_0);
      if (value == null) {
        value = null;
      }
      return value;
    },
    items1,
  );
  const obj = require("initialize");
  const enableFastAdRecheck = require("AdRecheckIntervalExperiment").useConfig({
    location: "useQuestForAdPlacement",
  }).enableFastAdRecheck;
  const items2 = [stateFromStores, arg0, enableFastAdRecheck];
  enableFastAdRecheck(() => {
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(ref.current);
    }
    maybeRefreshAd(stateFromStores, current, "questBar-open");
    ref.current = setInterval(
      () => {
        const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
        value = deliveryAdDecisionByPlacement.get(current);
        if (value == null) {
          value = null;
        }
        maybeRefreshAd(value, current, "questBar-interval");
      },
      enableFastAdRecheck ? closure_1_8 : closure_1_7,
    );
    current = ref.current;
    return () => {
      if (null != current) {
        const _clearInterval = clearInterval;
        clearInterval(tmp);
      }
    };
  }, items2);
  closure_130_0 = arg0;
  const obj2 = require("AdRecheckIntervalExperiment");
  const items3 = [AdDeliveryStore];
  const items4 = [arg0];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items3,
    () => {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      value = deliveryAdDecisionByPlacement.get(closure_0);
      if (value == null) {
        value = null;
      }
      return value;
    },
    items4,
  );
  const obj3 = require("initialize");
  let creative;
  if (stateFromStores1 != null) {
    creative = stateFromStores1.creative;
  }
  const deliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId(creative);
  let tmpResult = tmp(tmp2[7]);
  const items5 = [QuestStore];
  const stateFromStores2 = tmpResult.useStateFromStores(items5, () => {
    let tmp2 = null;
    if (null != closure_0) {
      const quests = QuestStore.quests;
      value = quests.get(tmp);
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
}
export const useAdDecisionForPlacement = function useAdDecisionForPlacement(MOBILE_HOME_DOCK_AREA) {
  _require = MOBILE_HOME_DOCK_AREA;
  const items = [AdDeliveryStore];
  const items1 = [MOBILE_HOME_DOCK_AREA];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      value = deliveryAdDecisionByPlacement.get(closure_0);
      if (value == null) {
        value = null;
      }
      return value;
    },
    items1,
  );
};
export const useAdRefreshLoop = function useAdRefreshLoop(MOBILE_HOME_DOCK_AREA) {
  _require = MOBILE_HOME_DOCK_AREA;
  importDefault = closure_4(null);
  closure_129_0 = MOBILE_HOME_DOCK_AREA;
  const items = [AdDeliveryStore];
  const items1 = [MOBILE_HOME_DOCK_AREA];
  stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      value = deliveryAdDecisionByPlacement.get(closure_0);
      if (value == null) {
        value = null;
      }
      return value;
    },
    items1,
  );
  const obj = require("initialize");
  const enableFastAdRecheck = require("AdRecheckIntervalExperiment").useConfig({
    location: "useQuestForAdPlacement",
  }).enableFastAdRecheck;
  const items2 = [stateFromStores, MOBILE_HOME_DOCK_AREA, enableFastAdRecheck];
  enableFastAdRecheck(() => {
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(ref.current);
    }
    maybeRefreshAd(stateFromStores, current, "questBar-open");
    ref.current = setInterval(
      () => {
        const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
        value = deliveryAdDecisionByPlacement.get(current);
        if (value == null) {
          value = null;
        }
        maybeRefreshAd(value, current, "questBar-interval");
      },
      enableFastAdRecheck ? closure_1_8 : closure_1_7,
    );
    current = ref.current;
    return () => {
      if (null != current) {
        const _clearInterval = clearInterval;
        clearInterval(tmp);
      }
    };
  }, items2);
};
