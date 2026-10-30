// discord_app/modules/quests/useQuestForPlacement.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import AdCreativeType from "../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import DiscordAppStateDefault from "../app_state/DiscordAppState.native.tsx";
import QuestsEligibility from "lib/QuestsEligibility.tsx";
import QuestActionCreators from "QuestActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import AdDeliveryStore from "../ads/AdDeliveryStore.tsx";
import QuestStore from "QuestStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
const result = size.fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default function useFetchQuestForAdPlacement(arg0) {
  _require = arg0;
  closure_5(null);
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
  const items2 = [stateFromStores, arg0];
  closure_3(() => {
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(ref.current);
    }
    maybeRefreshAd(stateFromStores, current, "questBar-open");
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
  }, items2);
  closure_130_0 = arg0;
  const obj = require("initialize");
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
  const obj2 = require("initialize");
  let creative;
  if (stateFromStores1 != null) {
    creative = stateFromStores1.creative;
  }
  const deliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId(creative);
  const obj3 = require("AdDecisionUtils");
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
    tmpResult2 = tmp(tmp2[9]);
  }
  return tmp8;
}
export function useAdDecisionForPlacement(arg0) {
  _require = arg0;
  const items = [AdDeliveryStore];
  const items1 = [arg0];
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
}
export function useAdRefreshLoop(MOBILE_HOME_DOCK_AREA) {
  _require = MOBILE_HOME_DOCK_AREA;
  closure_1 = closure_5(null);
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
  const items2 = [stateFromStores, MOBILE_HOME_DOCK_AREA];
  closure_3(() => {
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(ref.current);
    }
    maybeRefreshAd(stateFromStores, current, "questBar-open");
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
  }, items2);
}
export function useDeliveredCreativeForPlacement(MOBILE_HOME_DOCK_AREA, QUEST_BAR_MOBILE) {
  _require = QUEST_BAR_MOBILE;
  const items = [QuestStore];
  const items1 = [QUEST_BAR_MOBILE];
  stateFromStores = require("initialize").useStateFromStores(
    items,
    () => QuestStore.getQuestPreviewOverride(closure_0),
    items1,
  );
  closure_129_0 = MOBILE_HOME_DOCK_AREA;
  let obj = require("initialize");
  const items2 = [AdDeliveryStore];
  const items3 = [MOBILE_HOME_DOCK_AREA];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      value = deliveryAdDecisionByPlacement.get(closure_0);
      if (value == null) {
        value = null;
      }
      return value;
    },
    items3,
  );
  let obj2 = require("initialize");
  let creative;
  if (stateFromStores1 != null) {
    creative = stateFromStores1.creative;
  }
  const deliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId(creative);
  let obj3 = require("AdDecisionUtils");
  const items4 = [QuestStore];
  const items5 = [deliveredQuestId];
  const stateFromStores2 = require("initialize").useStateFromStores(
    items4,
    () => {
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
    },
    items5,
  );
  let tmp9 = null;
  if (null != stateFromStores2) {
    tmp9 = null;
    if (!tmpResult4.isQuestExpired(stateFromStores2)) {
      tmp9 = stateFromStores2;
    }
    tmpResult4 = tmp(tmp2[9]);
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
