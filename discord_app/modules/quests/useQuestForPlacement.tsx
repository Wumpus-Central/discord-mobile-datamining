// === Module 15310: useQuestForPlacement ===

// Module 15310 (useQuestForPlacement)
import DurationsDefault from "Durations" /* 1102 */;
import AdCreativeType from "AdCreativeType" /* 5986 */;
import DiscordAppStateDefault from "DiscordAppState" /* 6078 */;
import QuestsEligibility from "QuestsEligibility" /* 9144 */;
import QuestActionCreators from "QuestActionCreators" /* 9150 */;
import noop from "module_19" /* 19 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7381 */;
import QuestStore from "QuestStore" /* 7384 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import "ReactCompilerGating";
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function maybeRefreshAd(fetchedAt, QUEST_HOME_BANNER_DESKTOP, arg2) {
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
      if (!AdDeliveryStore.isFetchingAdToDeliverByPlacement(QUEST_HOME_BANNER_DESKTOP)) {
        if (AdDeliveryStore.canRefreshAd(QUEST_HOME_BANNER_DESKTOP)) {
          const currentQuests = QuestActionCreators.fetchCurrentQuests();
          const tmpResult = QuestActionCreators;
          const questToDeliver = QuestActionCreators.fetchQuestToDeliver(QUEST_HOME_BANNER_DESKTOP, arg2);
          const tmpResult3 = QuestActionCreators;
        }
      }
    } else if (null != fetchedAt) {
      QuestActionCreators.clearQuestAdDecision(QUEST_HOME_BANNER_DESKTOP, fetchedAt.ttlMillis);
      const tmpResult4 = QuestActionCreators;
    }
    obj2 = DiscordAppStateDefault;
  }
}
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = noop);
let closure_8 = 30 * DurationsDefault.Millis.SECOND;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAdDecisionForPlacement(arg0) {
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
}) : (function useAdDecisionForPlacement(arg0) {
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAdRefreshLoop(arg0) {
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
}) : (function useAdRefreshLoop(arg0) {
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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDeliveredCreativeForPlacement(arg0, arg1) {
  _require = arg1;
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
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  const tmp9 = closure_10(arg0);
  let creative;
  if (tmp9 != null) {
    creative = tmp9.creative;
  }
  if (cResult[4] !== creative) {
    const deliveredQuestId = tmp(7382).getDeliveredQuestId(creative);
    cResult[4] = creative;
    cResult[5] = deliveredQuestId;
    let tmp11 = deliveredQuestId;
    const tmpResult3 = tmp(7382);
  } else {
    tmp11 = cResult[5];
  }
  closure_1 = tmp11;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [QuestStore];
    cResult[6] = items2;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] !== tmp11) {
    class F {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_7;
          quests = closure_7.quests;
          value = quests.get(tmp);
          if (value == null) {
            value = null;
          }
          tmp2 = value;
        }
        return tmp2;
      }
    }
    const items3 = [tmp11];
    cResult[7] = tmp11;
    cResult[8] = F;
    cResult[9] = items3;
    let tmp16 = items3;
  } else {
    class F {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_7;
          quests = closure_7.quests;
          value = quests.get(tmp);
          if (value == null) {
            value = null;
          }
          tmp2 = value;
        }
        return tmp2;
      }
    }
    tmp16 = cResult[9];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp13, F, tmp16);
  if (cResult[10] !== stateFromStores1) {
    class F {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_7;
          quests = closure_7.quests;
          value = quests.get(tmp);
          if (value == null) {
            value = null;
          }
          tmp2 = value;
        }
        return tmp2;
      }
    }
    if (null != stateFromStores1) {
      class F {
        constructor() {
          tmp2 = null;
          if (null != closure_1) {
            tmp3 = closure_7;
            quests = closure_7.quests;
            value = quests.get(tmp);
            if (value == null) {
              value = null;
            }
            tmp2 = value;
          }
          return tmp2;
        }
      }
      if (!obj5.isQuestExpired(stateFromStores1)) {
        class F {
          constructor() {
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = closure_7;
              quests = closure_7.quests;
              value = quests.get(tmp);
              if (value == null) {
                value = null;
              }
              tmp2 = value;
            }
            return tmp2;
          }
        }
      }
    }
    cResult[10] = stateFromStores1;
    cResult[11] = tmp19;
  } else {
    class F {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_7;
          quests = closure_7.quests;
          value = quests.get(tmp);
          if (value == null) {
            value = null;
          }
          tmp2 = value;
        }
        return tmp2;
      }
    }
  }
  if (stateFromStores == null) {
    class F {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_7;
          quests = closure_7.quests;
          value = quests.get(tmp);
          if (value == null) {
            value = null;
          }
          tmp2 = value;
        }
        return tmp2;
      }
    }
  }
  if (tmp9 != null) {
    class F {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_7;
          quests = closure_7.quests;
          value = quests.get(tmp);
          if (value == null) {
            value = null;
          }
          tmp2 = value;
        }
        return tmp2;
      }
    }
  }
  if (cResult[12] !== undefined) {
    class F {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_7;
          quests = closure_7.quests;
          value = quests.get(tmp);
          if (value == null) {
            value = null;
          }
          tmp2 = value;
        }
        return tmp2;
      }
    }
    const deliveredBounty = obj6.getDeliveredBounty(tmp20);
    cResult[12] = tmp20;
    cResult[13] = deliveredBounty;
  } else {
    class F {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_7;
          quests = closure_7.quests;
          value = quests.get(tmp);
          if (value == null) {
            value = null;
          }
          tmp2 = value;
        }
        return tmp2;
      }
    }
  }
  if (null == stateFromStores) {
    class F {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_7;
          quests = closure_7.quests;
          value = quests.get(tmp);
          if (value == null) {
            value = null;
          }
          tmp2 = value;
        }
        return tmp2;
      }
    }
  } else {
    class F {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_7;
          quests = closure_7.quests;
          value = quests.get(tmp);
          if (value == null) {
            value = null;
          }
          tmp2 = value;
        }
        return tmp2;
      }
    }
  }
  return tmp23;
}) : (function useDeliveredCreativeForPlacement(arg0, arg1) {
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

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFetchQuestForAdPlacement(arg0) {
  const cResult = require("c").c(5);
  closure_11(arg0);
  const tmp5 = closure_10(arg0);
  let creative;
  if (tmp5 != null) {
    creative = tmp5.creative;
  }
  if (cResult[0] !== creative) {
    const deliveredQuestId = tmp(7382).getDeliveredQuestId(creative);
    cResult[0] = creative;
    cResult[1] = deliveredQuestId;
    let tmp7 = deliveredQuestId;
    const tmpResult = tmp(7382);
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
    tmpResult4 = tmp(7390);
  }
  return tmp13;
}) : (function useFetchQuestForAdPlacement(arg0) {
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
    tmp3Result2 = tmp3(7390);
  }
  return tmp7;
});
export const useAdDecisionForPlacement = tmp3;
export const useAdRefreshLoop = tmp4;
export const useDeliveredCreativeForPlacement = tmp5;