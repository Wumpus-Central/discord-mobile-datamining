// discord_app/modules/quests/useQuestForPlacement.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import AdCreativeType from "../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestActionCreators from "QuestActionCreators.tsx";
import DiscordAppStateDefault from "../app_state/DiscordAppState.native.tsx";
import QuestsEligibility from "lib/QuestsEligibility.tsx";
import react from "../../../_runtime/00019_react.js";
import AdDeliveryStore from "../ads/AdDeliveryStore.tsx";
import QuestStore from "QuestStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let c3;
let closure_4;
let hasOwnProperty;
function maybeRefreshAd(fetchedAt, MOBILE_HOME_DOCK_AREA, arg2) {
  const obj = QuestsEligibility;
  let isEligibleForQuests = obj.getIsEligibleForQuests();
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
    const obj2 = DiscordAppStateDefault;
    if ("active" === obj2.getState()) {
      if (!AdDeliveryStore.isFetchingAdToDeliverByPlacement(MOBILE_HOME_DOCK_AREA)) {
        if (AdDeliveryStore.canRefreshAd(MOBILE_HOME_DOCK_AREA)) {
          const tmpResult = QuestActionCreators;
          const currentQuests = tmpResult.fetchCurrentQuests();
          const tmpResult3 = QuestActionCreators;
          const questToDeliver = tmpResult3.fetchQuestToDeliver(MOBILE_HOME_DOCK_AREA, arg2);
        }
      }
    } else if (null != fetchedAt) {
      const tmpResult4 = QuestActionCreators;
      tmpResult4.clearQuestAdDecision(MOBILE_HOME_DOCK_AREA, fetchedAt.ttlMillis);
    }
  }
}
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = react);
let closure_8 = 30 * DurationsDefault.Millis.SECOND;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AdDeliveryStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
          let value = deliveryAdDecisionByPlacement.get(closure_0);
          if (value == null) {
            value = null;
          }
          return value;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6, tmp7);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [AdDeliveryStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
          let value = deliveryAdDecisionByPlacement.get(closure_0);
          if (value == null) {
            value = null;
          }
          return value;
        },
        items1,
      );
    };
let closure_10 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let closure_2;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const ref = closure_5(null);
      const tmp2 = closure_10(arg0);
      dependencyMap = tmp2;
      if (cResult[0] === arg0) {
        let tmp3;
        let tmp4;
        if (cResult[1] === tmp2) {
          tmp3 = cResult[2];
          tmp4 = cResult[3];
        }
        closure_3(tmp3, tmp4);
      }
      const fn = function n() {
        let current;
        if (null != ref.current) {
          let _clearInterval = clearInterval;
          clearInterval(ref.current);
        }
        maybeRefreshAd(closure_2, current, "questBar-open");
        ref.current = setInterval(() => {
          const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
          let value = deliveryAdDecisionByPlacement.get(current);
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
    }
  : (arg0) => {
      let closure_0 = arg0;
      const ref = closure_5(null);
      const tmp = closure_10(arg0);
      let closure_2 = tmp;
      const items = [tmp, arg0];
      const tmp2 = closure_3(() => {
        let current;
        if (null != ref.current) {
          let _clearInterval = clearInterval;
          clearInterval(ref.current);
        }
        maybeRefreshAd(closure_2, current, "questBar-open");
        ref.current = setInterval(() => {
          const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
          let value = deliveryAdDecisionByPlacement.get(current);
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
    };
let closure_11 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let first;
      let tmp11;
      let tmp13;
      let tmp15;
      let tmp16;
      let tmp18;
      let tmp21;
      let tmp23;
      let tmp6;
      let tmp7;
      _require = arg1;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(19);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        cResult[0] = items;
        first = items;
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
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      let stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      const tmp9 = closure_10(arg0);
      let creative;
      if (tmp9 != null) {
        creative = tmp9.creative;
      }
      if (cResult[4] !== creative) {
        const tmpResult5 = tmp(7198);
        const deliveredQuestId = tmpResult5.getDeliveredQuestId(creative);
        cResult[4] = creative;
        cResult[5] = deliveredQuestId;
        tmp11 = deliveredQuestId;
      } else {
        tmp11 = cResult[5];
      }
      let closure_1 = tmp11;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [QuestStore];
        cResult[6] = items2;
        tmp13 = items2;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] !== tmp11) {
        const fn2 = function b() {
          let tmp2 = null;
          if (null != closure_1) {
            const quests = QuestStore.quests;
            let value = quests.get(tmp);
            if (value == null) {
              value = null;
            }
            tmp2 = value;
          }
          return tmp2;
        };
        const items3 = [tmp11];
        cResult[7] = tmp11;
        cResult[8] = fn2;
        cResult[9] = items3;
        tmp16 = items3;
        tmp15 = fn2;
      } else {
        tmp15 = cResult[8];
        tmp16 = cResult[9];
      }
      const tmpResult6 = tmp(504);
      const stateFromStores1 = tmpResult6.useStateFromStores(tmp13, tmp15, tmp16);
      if (cResult[10] !== stateFromStores1) {
        let tmp19 = null;
        if (null != stateFromStores1) {
          tmp19 = null;
          const tmpResult7 = tmp(7196);
          if (!tmpResult7.isQuestExpired(stateFromStores1)) {
            tmp19 = stateFromStores1;
          }
        }
        cResult[10] = stateFromStores1;
        cResult[11] = tmp19;
        tmp18 = tmp19;
      } else {
        tmp18 = cResult[11];
      }
      if (stateFromStores == null) {
        stateFromStores = tmp18;
      }
      let creative1;
      if (tmp9 != null) {
        creative1 = tmp9.creative;
      }
      if (cResult[12] !== creative1) {
        const tmpResult8 = tmp(7198);
        const deliveredBounty = tmpResult8.getDeliveredBounty(creative1);
        cResult[12] = creative1;
        cResult[13] = deliveredBounty;
        tmp21 = deliveredBounty;
      } else {
        tmp21 = cResult[13];
      }
      if (null == stateFromStores) {
        if (null == tmp21) {
          let tmp25;
          const _Symbol = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { type: tmp(5637).AdCreativeType.NO_FILL };
            cResult[18] = obj2;
            tmp25 = obj2;
          } else {
            tmp25 = cResult[18];
          }
          tmp23 = tmp25;
        } else {
          let tmp24;
          if (cResult[16] !== tmp21) {
            const obj3 = { type: tmp(5637).AdCreativeType.BOUNTY, bounty: tmp21 };
            cResult[16] = tmp21;
            cResult[17] = obj3;
            tmp24 = obj3;
          } else {
            tmp24 = cResult[17];
          }
          tmp23 = tmp24;
        }
      } else if (cResult[14] !== stateFromStores) {
        const obj4 = { type: tmp(5637).AdCreativeType.QUEST, quest: stateFromStores };
        cResult[14] = stateFromStores;
        cResult[15] = obj4;
        tmp23 = obj4;
      } else {
        tmp23 = cResult[15];
      }
      return tmp23;
    }
  : (arg0, arg1) => {
      let closure_0;
      let stateFromStores;
      _require = arg1;
      const tmp = _require;
      let tmp2 = stateFromStores;
      let obj = require("get initialized");
      const items = [QuestStore];
      const items1 = [arg1];
      stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuestPreviewOverride(closure_0), items1);
      const tmp5 = closure_10(arg0);
      let creative;
      const getDeliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId;
      require("AdDecisionUtils");
      if (tmp5 != null) {
        creative = tmp5.creative;
      }
      const deliveredQuestId = getDeliveredQuestId(creative);
      const items2 = [QuestStore];
      const items3 = [deliveredQuestId];
      const tmpResult = tmp(tmp2[9]);
      const stateFromStores1 = tmpResult.useStateFromStores(
        items2,
        () => {
          let tmp2 = null;
          if (null != deliveredQuestId) {
            const quests = QuestStore.quests;
            let value = quests.get(tmp);
            if (value == null) {
              value = null;
            }
            tmp2 = value;
          }
          return tmp2;
        },
        items3,
      );
      let tmp10 = null;
      if (null != stateFromStores1) {
        tmp10 = null;
        const tmpResult3 = tmp(tmp2[11]);
        if (!tmpResult3.isQuestExpired(stateFromStores1)) {
          tmp10 = stateFromStores1;
        }
      }
      if (stateFromStores == null) {
        stateFromStores = tmp10;
      }
      let creative1;
      const getDeliveredBounty = tmp(tmp2[10]).getDeliveredBounty;
      tmp(tmp2[10]);
      if (tmp5 != null) {
        creative1 = tmp5.creative;
      }
      const deliveredBounty = getDeliveredBounty(creative1);
      const items4 = [stateFromStores, deliveredBounty];
      return closure_4(() => {
        let obj;
        if (null != stateFromStores) {
          obj = { type: AdCreativeType.AdCreativeType.QUEST, quest: tmp };
          const obj2 = { type: AdCreativeType.AdCreativeType.QUEST, quest: tmp };
        } else if (null != deliveredBounty) {
          obj = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty: tmp2 };
          const obj3 = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty: tmp2 };
        } else {
          obj = { type: AdCreativeType.AdCreativeType.NO_FILL };
        }
        return obj;
      }, items4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp11;
      let tmp7;
      let tmp9;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(5);
      closure_11(arg0);
      const tmp5 = closure_10(arg0);
      let creative;
      if (tmp5 != null) {
        creative = tmp5.creative;
      }
      if (cResult[0] !== creative) {
        const tmpResult = tmp(7198);
        const deliveredQuestId = tmpResult.getDeliveredQuestId(creative);
        cResult[0] = creative;
        cResult[1] = deliveredQuestId;
        tmp7 = deliveredQuestId;
      } else {
        tmp7 = cResult[1];
      }
      _require = tmp7;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        cResult[2] = items;
        tmp9 = items;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== tmp7) {
        const fn = function f() {
          let tmp2 = null;
          if (null != closure_0) {
            const quests = QuestStore.quests;
            let value = quests.get(tmp);
            if (value == null) {
              value = null;
            }
            tmp2 = value;
          }
          return tmp2;
        };
        cResult[3] = tmp7;
        cResult[4] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[4];
      }
      const tmpResult3 = tmp(504);
      const stateFromStores = tmpResult3.useStateFromStores(tmp9, tmp11);
      let tmp13 = null;
      if (null != stateFromStores) {
        tmp13 = null;
        const tmpResult4 = tmp(7196);
        if (!tmpResult4.isQuestExpired(stateFromStores)) {
          tmp13 = stateFromStores;
        }
      }
      return tmp13;
    }
  : (arg0) => {
      let closure_0;
      const tmp = closure_11(arg0);
      let tmp2 = closure_10(arg0);
      let creative;
      const getDeliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId;
      require("AdDecisionUtils");
      if (tmp2 != null) {
        creative = tmp2.creative;
      }
      _require = getDeliveredQuestId(creative);
      const items = [QuestStore];
      const tmp3Result = require("get initialized");
      const stateFromStores = tmp3Result.useStateFromStores(items, () => {
        let tmp2 = null;
        if (null != closure_0) {
          const quests = QuestStore.quests;
          let value = quests.get(tmp);
          if (value == null) {
            value = null;
          }
          tmp2 = value;
        }
        return tmp2;
      });
      let tmp8 = null;
      if (null != stateFromStores) {
        tmp8 = null;
        const tmp3Result2 = require("QuestDataUtils");
        if (!tmp3Result2.isQuestExpired(stateFromStores)) {
          tmp8 = stateFromStores;
        }
      }
      return tmp8;
    };
const result = size.fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default tmp6;
export const useAdDecisionForPlacement = tmp3;
export const useAdRefreshLoop = tmp4;
export const useDeliveredCreativeForPlacement = tmp5;
