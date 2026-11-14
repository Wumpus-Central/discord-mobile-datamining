// === Module 17721: useQuestForPlacement ===

// Module 17721 (useQuestForPlacement)
import DurationsDefault from "Durations" /* 1089 */;
import AdCreativeType from "AdCreativeType" /* 5345 */;
import noop from "module_19" /* 19 */;
import AdDeliveryStore from "AdDeliveryStore" /* 8805 */;
import QuestStore from "QuestStore" /* 8808 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = noop);
let closure_8 = 30 * DurationsDefault.Millis.SECOND;
const result = size.fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default function useFetchQuestForAdPlacement(arg0) {
  _require = arg0;
  closure_5(null);
  closure_129_0 = arg0;
  items = [AdDeliveryStore];
  const items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let first = AdDeliveryStore.getAdDecisionsForPlacement(closure_0)[0];
    if (first == null) {
      first = null;
    }
    return first;
  }, items1);
  const items2 = [stateFromStores, arg0];
  closure_3(() => {
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(ref.current);
    }
    if (obj.getIsEligibleForQuests()) {
      if (!tmp6Result.isAdDecisionValid(stateFromStores)) {
        if ("active" === obj3.getState()) {
          if (!AdDeliveryStore.isFetchingAdToDeliverByPlacement(tmp5)) {
            if (AdDeliveryStore.canRefreshAd(tmp5)) {
              let returnFullQuestStatusInDecision = tmp6(stateFromStores[8]).getReturnFullQuestStatusInDecision("quest-placement-refresh");
              if (!returnFullQuestStatusInDecision) {
                let currentQuests = tmp6(stateFromStores[7]).fetchCurrentQuests();
                const tmp6Result6 = tmp6(stateFromStores[7]);
              }
              const tmp6Result5 = tmp6(stateFromStores[8]);
              let questToDeliver = tmp6(stateFromStores[7]).fetchQuestToDeliver(tmp5, "questBar-open", returnFullQuestStatusInDecision);
              const tmp6Result7 = tmp6(stateFromStores[7]);
            }
          }
        } else if (null != stateFromStores) {
          tmp6(stateFromStores[7]).clearQuestAdDecision(tmp5, stateFromStores.ttlMillis);
          const tmp6Result8 = tmp6(stateFromStores[7]);
        }
        obj3 = ref(stateFromStores[6]);
      }
      tmp6Result = tmp6(stateFromStores[5]);
    }
    ref.current = setInterval(() => {
      let first = AdDeliveryStore.getAdDecisionsForPlacement(current)[0];
      if (first == null) {
        first = null;
      }
      if (obj2.getIsEligibleForQuests()) {
        if (!tmp3Result.isAdDecisionValid(first)) {
          if ("active" === obj4.getState()) {
            if (!AdDeliveryStore.isFetchingAdToDeliverByPlacement(current)) {
              if (AdDeliveryStore.canRefreshAd(current)) {
                const returnFullQuestStatusInDecision = current(stateFromStores[8]).getReturnFullQuestStatusInDecision("quest-placement-refresh");
                if (!returnFullQuestStatusInDecision) {
                  const currentQuests = current(stateFromStores[7]).fetchCurrentQuests();
                  const tmp3Result6 = current(stateFromStores[7]);
                }
                const tmp3Result5 = current(stateFromStores[8]);
                const questToDeliver = current(stateFromStores[7]).fetchQuestToDeliver(current, "questBar-interval", returnFullQuestStatusInDecision);
                const tmp3Result7 = current(stateFromStores[7]);
              }
            }
          } else if (null != first) {
            current(stateFromStores[7]).clearQuestAdDecision(current, first.ttlMillis);
            const tmp3Result8 = current(stateFromStores[7]);
          }
          obj4 = closure_1(stateFromStores[6]);
        }
        tmp3Result = current(stateFromStores[5]);
      }
      obj2 = current(stateFromStores[4]);
    }, closure_1_8);
    const current = ref.current;
    return () => {
      if (null != current) {
        const _clearInterval = clearInterval;
        clearInterval(tmp);
      }
    };
  }, items2);
  closure_130_0 = arg0;
  const obj = require("initialize");
  const items3 = [AdDeliveryStore];
  const items4 = [arg0];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () => {
    let first = AdDeliveryStore.getAdDecisionsForPlacement(closure_0)[0];
    if (first == null) {
      first = null;
    }
    return first;
  }, items4);
  let obj2 = require("initialize");
  let creative;
  if (stateFromStores1 != null) {
    creative = stateFromStores1.creative;
  }
  const deliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId(creative);
  let obj3 = require("AdDecisionUtils");
  const items5 = [QuestStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items5, () => {
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
    tmp8 = null;
    if (!tmpResult2.isQuestExpired(stateFromStores2)) {
      tmp8 = stateFromStores2;
    }
    tmpResult2 = tmp(tmp2[10]);
  }
  return tmp8;
};
export function useAdDecisionForPlacement(arg0) {
  _require = arg0;
  items = [AdDeliveryStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let first = AdDeliveryStore.getAdDecisionsForPlacement(closure_0)[0];
    if (first == null) {
      first = null;
    }
    return first;
  }, items1);
}
export function useAdRefreshLoop(MOBILE_HOME_DOCK_AREA) {
  _require = MOBILE_HOME_DOCK_AREA;
  closure_1 = closure_5(null);
  closure_129_0 = MOBILE_HOME_DOCK_AREA;
  items = [AdDeliveryStore];
  const items1 = [MOBILE_HOME_DOCK_AREA];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let first = AdDeliveryStore.getAdDecisionsForPlacement(closure_0)[0];
    if (first == null) {
      first = null;
    }
    return first;
  }, items1);
  const items2 = [stateFromStores, MOBILE_HOME_DOCK_AREA];
  closure_3(() => {
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(ref.current);
    }
    if (obj.getIsEligibleForQuests()) {
      if (!tmp6Result.isAdDecisionValid(stateFromStores)) {
        if ("active" === obj3.getState()) {
          if (!AdDeliveryStore.isFetchingAdToDeliverByPlacement(tmp5)) {
            if (AdDeliveryStore.canRefreshAd(tmp5)) {
              let returnFullQuestStatusInDecision = tmp6(stateFromStores[8]).getReturnFullQuestStatusInDecision("quest-placement-refresh");
              if (!returnFullQuestStatusInDecision) {
                let currentQuests = tmp6(stateFromStores[7]).fetchCurrentQuests();
                const tmp6Result6 = tmp6(stateFromStores[7]);
              }
              const tmp6Result5 = tmp6(stateFromStores[8]);
              let questToDeliver = tmp6(stateFromStores[7]).fetchQuestToDeliver(tmp5, "questBar-open", returnFullQuestStatusInDecision);
              const tmp6Result7 = tmp6(stateFromStores[7]);
            }
          }
        } else if (null != stateFromStores) {
          tmp6(stateFromStores[7]).clearQuestAdDecision(tmp5, stateFromStores.ttlMillis);
          const tmp6Result8 = tmp6(stateFromStores[7]);
        }
        obj3 = ref(stateFromStores[6]);
      }
      tmp6Result = tmp6(stateFromStores[5]);
    }
    ref.current = setInterval(() => {
      let first = AdDeliveryStore.getAdDecisionsForPlacement(current)[0];
      if (first == null) {
        first = null;
      }
      if (obj2.getIsEligibleForQuests()) {
        if (!tmp3Result.isAdDecisionValid(first)) {
          if ("active" === obj4.getState()) {
            if (!AdDeliveryStore.isFetchingAdToDeliverByPlacement(current)) {
              if (AdDeliveryStore.canRefreshAd(current)) {
                const returnFullQuestStatusInDecision = current(stateFromStores[8]).getReturnFullQuestStatusInDecision("quest-placement-refresh");
                if (!returnFullQuestStatusInDecision) {
                  const currentQuests = current(stateFromStores[7]).fetchCurrentQuests();
                  const tmp3Result6 = current(stateFromStores[7]);
                }
                const tmp3Result5 = current(stateFromStores[8]);
                const questToDeliver = current(stateFromStores[7]).fetchQuestToDeliver(current, "questBar-interval", returnFullQuestStatusInDecision);
                const tmp3Result7 = current(stateFromStores[7]);
              }
            }
          } else if (null != first) {
            current(stateFromStores[7]).clearQuestAdDecision(current, first.ttlMillis);
            const tmp3Result8 = current(stateFromStores[7]);
          }
          obj4 = closure_1(stateFromStores[6]);
        }
        tmp3Result = current(stateFromStores[5]);
      }
      obj2 = current(stateFromStores[4]);
    }, closure_1_8);
    const current = ref.current;
    return () => {
      if (null != current) {
        const _clearInterval = clearInterval;
        clearInterval(tmp);
      }
    };
  }, items2);
}
export function useDeliveredCreativeForPlacement(MOBILE_HOME_DOCK_AREA, QUEST_BAR_MOBILE) {
  _require = QUEST_BAR_MOBILE;
  items = [QuestStore];
  const items1 = [QUEST_BAR_MOBILE];
  stateFromStores = require("initialize").useStateFromStores(items, () => QuestStore.getQuestPreviewOverride(closure_0), items1);
  closure_129_0 = MOBILE_HOME_DOCK_AREA;
  let obj = require("initialize");
  const items2 = [AdDeliveryStore];
  const items3 = [MOBILE_HOME_DOCK_AREA];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    let first = AdDeliveryStore.getAdDecisionsForPlacement(closure_0)[0];
    if (first == null) {
      first = null;
    }
    return first;
  }, items3);
  let obj2 = require("initialize");
  let creative;
  if (stateFromStores1 != null) {
    creative = stateFromStores1.creative;
  }
  const deliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId(creative);
  let obj3 = require("AdDecisionUtils");
  const items4 = [QuestStore];
  const items5 = [deliveredQuestId];
  const stateFromStores2 = require("initialize").useStateFromStores(items4, () => {
    let tmp2 = null;
    if (null != deliveredQuestId) {
      const quests = QuestStore.quests;
      value = quests.get(tmp);
      if (value == null) {
        value = null;
      }
      tmp2 = value;
    }
    return tmp2;
  }, items5);
  let tmp9 = null;
  if (null != stateFromStores2) {
    tmp9 = null;
    if (!tmpResult4.isQuestExpired(stateFromStores2)) {
      tmp9 = stateFromStores2;
    }
    tmpResult4 = tmp(tmp2[10]);
  }
  if (stateFromStores == null) {
    stateFromStores = tmp9;
  }
  const tmpResult = require("initialize");
  let creative1;
  if (stateFromStores1 != null) {
    creative1 = stateFromStores1.creative;
  }
  const deliveredBounty = require("AdDecisionUtils").getDeliveredBounty(creative1);
  const tmpResult5 = require("AdDecisionUtils");
  let creative2;
  if (stateFromStores1 != null) {
    creative2 = stateFromStores1.creative;
  }
  const deliveredPlayable = require("AdDecisionUtils").getDeliveredPlayable(creative2);
  const items6 = [stateFromStores, deliveredBounty, deliveredPlayable];
  return deliveredPlayable(() => {
    if (null != stateFromStores) {
      const obj2 = { type: AdCreativeType.AdCreativeType.QUEST, quest: tmp };
      let obj = obj2;
    } else if (null != deliveredBounty) {
      const obj3 = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty: tmp11 };
      obj = obj3;
    } else if (null != deliveredPlayable) {
      const obj4 = { type: AdCreativeType.AdCreativeType.PLAYABLE, playable: tmp2 };
      obj = obj4;
    } else {
      obj = { type: AdCreativeType.AdCreativeType.NO_FILL };
    }
    return obj;
  }, items6);
}