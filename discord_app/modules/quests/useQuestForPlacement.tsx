// === Module 14935: useQuestForPlacement ===

// Module 14935 (useQuestForPlacement)
import DurationsDefault from "Durations" /* 1102 */;
import AdCreativeType from "AdCreativeType" /* 5637 */;
import QuestActionCreators from "QuestActionCreators" /* 10007 */;
import DiscordAppStateDefault from "DiscordAppState" /* 10028 */;
import QuestsEligibility from "QuestsEligibility" /* 10925 */;
import noop from "module_19" /* 19 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7197 */;
import QuestStore from "QuestStore" /* 7200 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import "ReactCompilerGating";
import size from "module_2" /* 2 */;

const require = globalThis.__r;

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
          const currentQuests = QuestActionCreators.fetchCurrentQuests();
          const tmpResult = QuestActionCreators;
          const questToDeliver = QuestActionCreators.fetchQuestToDeliver(MOBILE_HOME_DOCK_AREA, arg2);
          const tmpResult3 = QuestActionCreators;
        }
      }
    } else if (null != fetchedAt) {
      QuestActionCreators.clearQuestAdDecision(MOBILE_HOME_DOCK_AREA, fetchedAt.ttlMillis);
      const tmpResult4 = QuestActionCreators;
    }
    obj2 = DiscordAppStateDefault;
  }
}
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = noop);
let closure_8 = 30 * DurationsDefault.Millis.SECOND;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AdDeliveryStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      value = deliveryAdDecisionByPlacement.get(closure_0);
      if (value == null) {
        value = null;
      }
      return value;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [AdDeliveryStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
    value = deliveryAdDecisionByPlacement.get(closure_0);
    if (value == null) {
      value = null;
    }
    return value;
  }, items1);
});
let closure_10 = tmp3;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  closure_5(null);
  const tmp2 = closure_10(arg0);
  dependencyMap = tmp2;
  if (cResult[0] === arg0) {
    if (cResult[1] === tmp2) {
      let tmp3 = cResult[2];
      let tmp4 = cResult[3];
    }
    closure_3(tmp3, tmp4);
  }
  const fn = function n() {
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(ref.current);
    }
    maybeRefreshAd(closure_2, current, "questBar-open");
    ref.current = setInterval(() => {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      value = deliveryAdDecisionByPlacement.get(current);
      if (value == null) {
        value = null;
      }
      maybeRefreshAd(value, current, "questBar-interval");
    }, closure_1_8);
    current = ref.current;
    return () => {
      if (null != current) {
        const _clearInterval = clearInterval;
        clearInterval(tmp);
      }
    };
  };
  const items = [tmp2, arg0];
  cResult[0] = arg0;
  cResult[1] = tmp2;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
  const obj = require("c");
}) : ((arg0) => {
  closure_0 = arg0;
  closure_5(null);
  const tmp = closure_10(arg0);
  closure_2 = tmp;
  const items = [tmp, arg0];
  closure_3(() => {
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(ref.current);
    }
    maybeRefreshAd(closure_2, current, "questBar-open");
    ref.current = setInterval(() => {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      value = deliveryAdDecisionByPlacement.get(current);
      if (value == null) {
        value = null;
      }
      maybeRefreshAd(value, current, "questBar-interval");
    }, closure_1_8);
    current = ref.current;
    return () => {
      if (null != current) {
        const _clearInterval = clearInterval;
        clearInterval(tmp);
      }
    };
  }, items);
});
let closure_11 = tmp4;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg1;
  let NO_FILL = dependencyMap;
  const cResult = require("c").c(19);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg1) {
    const fn = function u() {
      return QuestStore.getQuestPreviewOverride(closure_0);
    };
    const items1 = [arg1];
    cResult[1] = arg1;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp6 = items1;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const obj = require("c");
  let stateFromStores = require("initialize").useStateFromStores(first, tmp5, tmp6);
  const tmp8 = closure_10(arg0);
  let creative;
  if (tmp8 != null) {
    creative = tmp8.creative;
  }
  if (cResult[4] !== creative) {
    const deliveredQuestId = tmp(7198).getDeliveredQuestId(creative);
    cResult[4] = creative;
    cResult[5] = deliveredQuestId;
    let tmp10 = deliveredQuestId;
    const tmpResult5 = tmp(7198);
  } else {
    tmp10 = cResult[5];
  }
  closure_1 = tmp10;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [QuestStore];
    cResult[6] = items2;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== tmp10) {
    const fn2 = function b() {
      let tmp2 = null;
      if (null != closure_1) {
        const quests = QuestStore.quests;
        value = quests.get(tmp);
        if (value == null) {
          value = null;
        }
        tmp2 = value;
      }
      return tmp2;
    };
    const items3 = [tmp10];
    cResult[7] = tmp10;
    cResult[8] = fn2;
    cResult[9] = items3;
    let tmp15 = items3;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[8];
    tmp15 = cResult[9];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp12, tmp14, tmp15);
  if (cResult[10] !== stateFromStores1) {
    let tmp18 = null;
    if (null != stateFromStores1) {
      tmp18 = null;
      if (!tmpResult7.isQuestExpired(stateFromStores1)) {
        tmp18 = stateFromStores1;
      }
      tmpResult7 = tmp(7196);
    }
    cResult[10] = stateFromStores1;
    cResult[11] = tmp18;
    let tmp17 = tmp18;
  } else {
    tmp17 = cResult[11];
  }
  if (stateFromStores == null) {
    stateFromStores = tmp17;
  }
  let creative1;
  if (tmp8 != null) {
    creative1 = tmp8.creative;
  }
  if (cResult[12] !== creative1) {
    const deliveredBounty = tmp(7198).getDeliveredBounty(creative1);
    cResult[12] = creative1;
    cResult[13] = deliveredBounty;
    let tmp20 = deliveredBounty;
    const tmpResult8 = tmp(7198);
  } else {
    tmp20 = cResult[13];
  }
  if (null == stateFromStores) {
    if (null == tmp20) {
      const _Symbol = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { type: null };
        NO_FILL = tmp(5637).AdCreativeType.NO_FILL;
        obj2.type = NO_FILL;
        cResult[18] = obj2;
      }
    } else {
      if (cResult[16] !== tmp20) {
        const obj3 = { type: tmp(5637).AdCreativeType.BOUNTY, bounty: tmp20 };
        cResult[16] = tmp20;
        cResult[17] = obj3;
        let tmp23 = obj3;
      } else {
        tmp23 = cResult[17];
      }
      let tmp22 = tmp23;
    }
  } else if (cResult[14] !== stateFromStores) {
    const obj4 = { type: tmp(5637).AdCreativeType.QUEST, quest: stateFromStores };
    cResult[14] = stateFromStores;
    cResult[15] = obj4;
    tmp22 = obj4;
  } else {
    tmp22 = cResult[15];
  }
  return tmp22;
}) : ((arg0, arg1) => {
  _require = arg1;
  const items = [QuestStore];
  const items1 = [arg1];
  stateFromStores = require("initialize").useStateFromStores(items, () => QuestStore.getQuestPreviewOverride(closure_0), items1);
  const tmp5 = closure_10(arg0);
  let obj = require("initialize");
  let creative;
  if (tmp5 != null) {
    creative = tmp5.creative;
  }
  const deliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId(creative);
  let obj2 = require("AdDecisionUtils");
  const items2 = [QuestStore];
  const items3 = [deliveredQuestId];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
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
  }, items3);
  let tmp9 = null;
  if (null != stateFromStores1) {
    tmp9 = null;
    if (!tmpResult3.isQuestExpired(stateFromStores1)) {
      tmp9 = stateFromStores1;
    }
    tmpResult3 = tmp(tmp2[11]);
  }
  if (stateFromStores == null) {
    stateFromStores = tmp9;
  }
  const tmpResult = require("initialize");
  let creative1;
  if (tmp5 != null) {
    creative1 = tmp5.creative;
  }
  const deliveredBounty = require("AdDecisionUtils").getDeliveredBounty(creative1);
  const items4 = [stateFromStores, deliveredBounty];
  return closure_4(() => {
    if (null != stateFromStores) {
      const obj2 = { type: AdCreativeType.AdCreativeType.QUEST, quest: tmp };
      let obj = obj2;
    } else if (null != deliveredBounty) {
      const obj3 = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty: tmp2 };
      obj = obj3;
    } else {
      obj = { type: AdCreativeType.AdCreativeType.NO_FILL };
    }
    return obj;
  }, items4);
});
const result = size.fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(5);
  closure_11(arg0);
  const tmp5 = closure_10(arg0);
  let creative;
  if (tmp5 != null) {
    creative = tmp5.creative;
  }
  if (cResult[0] !== creative) {
    const deliveredQuestId = tmp(7198).getDeliveredQuestId(creative);
    cResult[0] = creative;
    cResult[1] = deliveredQuestId;
    let tmp7 = deliveredQuestId;
    const tmpResult = tmp(7198);
  } else {
    tmp7 = cResult[1];
  }
  _require = tmp7;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[2] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp7) {
    const fn = function f() {
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
    };
    cResult[3] = tmp7;
    cResult[4] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[4];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp9, tmp11);
  let tmp13 = null;
  if (null != stateFromStores) {
    tmp13 = null;
    if (!tmpResult4.isQuestExpired(stateFromStores)) {
      tmp13 = stateFromStores;
    }
    tmpResult4 = tmp(7196);
  }
  return tmp13;
}) : ((arg0) => {
  closure_11(arg0);
  let tmp2 = closure_10(arg0);
  let creative;
  if (tmp2 != null) {
    creative = tmp2.creative;
  }
  _require = require("AdDecisionUtils").getDeliveredQuestId(creative);
  const obj = require("AdDecisionUtils");
  const items = [QuestStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
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
  if (null != stateFromStores) {
    tmp7 = null;
    if (!tmp3Result2.isQuestExpired(stateFromStores)) {
      tmp7 = stateFromStores;
    }
    tmp3Result2 = tmp3(7196);
  }
  return tmp7;
});
export const useAdDecisionForPlacement = tmp3;
export const useAdRefreshLoop = tmp4;
export const useDeliveredCreativeForPlacement = tmp5;