// === Module 17759: useQuestForPlacement ===

// Module 17759 (useQuestForPlacement)
import _mod19 from "module_19" /* 19 */;
import AdCreativeType from "AdCreativeType" /* 6969 */;
import QuestActionCreators from "QuestActionCreators" /* 10577 */;
import ReturnFullQuestStatusInDecisionExperiment from "ReturnFullQuestStatusInDecisionExperiment" /* 17760 */;
import useAdRefreshLoop from "useAdRefreshLoop" /* 17761 */;
import AdDeliveryStore from "AdDeliveryStore" /* 8816 */;
import QuestStore from "QuestStore" /* 8819 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function fetchQuestBarAd(MOBILE_HOME_DOCK_AREA, arg1) {
  const returnFullQuestStatusInDecision = ReturnFullQuestStatusInDecisionExperiment.getReturnFullQuestStatusInDecision("quest-placement-refresh");
  if (!returnFullQuestStatusInDecision) {
    const currentQuests = QuestActionCreators.fetchCurrentQuests();
    const tmpResult = QuestActionCreators;
  }
  const questToDeliver = QuestActionCreators.fetchQuestToDeliver(MOBILE_HOME_DOCK_AREA, arg1, returnFullQuestStatusInDecision);
  const tmpResult2 = QuestActionCreators;
}
const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default function useFetchQuestForAdPlacement(MOBILE_HOME_DOCK_AREA) {
  const adRefreshLoop = require("useAdRefreshLoop").useAdRefreshLoop(MOBILE_HOME_DOCK_AREA, { fetch: fetchQuestBarAd, callerSource: "questBar" });
  _require = MOBILE_HOME_DOCK_AREA;
  const obj = require("useAdRefreshLoop");
  const obj2 = { fetch: fetchQuestBarAd, callerSource: "questBar" };
  items = [AdDeliveryStore];
  const items1 = [MOBILE_HOME_DOCK_AREA];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let first = AdDeliveryStore.getAdDecisionsForPlacement(closure_0)[0];
    if (first == null) {
      first = null;
    }
    return first;
  }, items1);
  const obj3 = require("initialize");
  let creative;
  if (stateFromStores != null) {
    creative = stateFromStores.creative;
  }
  const deliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId(creative);
  const obj4 = require("AdDecisionUtils");
  const items2 = [QuestStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
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
  let tmp7 = null;
  if (null != stateFromStores1) {
    tmp7 = null;
    if (!tmpResult2.isQuestExpired(stateFromStores1)) {
      tmp7 = stateFromStores1;
    }
    tmpResult2 = tmp(8826);
  }
  return tmp7;
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
  const adRefreshLoop = useAdRefreshLoop.useAdRefreshLoop(MOBILE_HOME_DOCK_AREA, { fetch: fetchQuestBarAd, callerSource: "questBar" });
}
export function useDeliveredCreativeForPlacement(MOBILE_HOME_DOCK_AREA, QUEST_BAR_MOBILE) {
  _require = QUEST_BAR_MOBILE;
  items = [deliveredPlayable];
  const items1 = [QUEST_BAR_MOBILE];
  let stateFromStores = require("initialize").useStateFromStores(items, () => QuestStore.getQuestPreviewOverride(closure_0), items1);
  closure_129_0 = MOBILE_HOME_DOCK_AREA;
  let obj = require("initialize");
  const tmp3 = deliveredPlayable;
  const items2 = [deliveredBounty];
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
  deliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId(creative);
  let obj3 = require("AdDecisionUtils");
  const items4 = [tmp3];
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
    tmpResult4 = tmp(tmp2[8]);
  }
  if (stateFromStores == null) {
    stateFromStores = tmp9;
  }
  const tmpResult = require("initialize");
  let creative1;
  if (stateFromStores1 != null) {
    creative1 = stateFromStores1.creative;
  }
  deliveredBounty = require("AdDecisionUtils").getDeliveredBounty(creative1);
  const tmpResult5 = require("AdDecisionUtils");
  let creative2;
  if (stateFromStores1 != null) {
    creative2 = stateFromStores1.creative;
  }
  deliveredPlayable = require("AdDecisionUtils").getDeliveredPlayable(creative2);
  const items6 = [stateFromStores, deliveredBounty, deliveredPlayable];
  return stateFromStores(() => {
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