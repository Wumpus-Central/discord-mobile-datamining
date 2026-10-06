// === Module 10929: ContentImpressionTrackerHooks ===

// Module 10929 (ContentImpressionTrackerHooks)
import react2 from "react" /* 576 */;
import AdCreativeType from "AdCreativeType" /* 5637 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7225 */;
import react3 from "react" /* 10930 */;
import react from "react" /* 19 */;
import QuestStore from "QuestStore" /* 7200 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, questOrQuests;

let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(8);
  if (null == arg1) {
    if (null == id) {
      let tmp9;
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[7] = items;
        tmp9 = items;
      } else {
        tmp9 = cResult[7];
      }
      tmp2 = tmp9;
    } else {
      const _Array = Array;
      if (Array.isArray(id)) {
        let tmp5;
        if (cResult[2] !== id) {
          let tmp6;
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function c(id) {
              return id.id;
            };
            cResult[4] = fn;
            tmp6 = fn;
          } else {
            tmp6 = cResult[4];
          }
          const mapped = id.map(tmp6);
          cResult[2] = id;
          cResult[3] = mapped;
          tmp5 = mapped;
        } else {
          tmp5 = cResult[3];
        }
        tmp2 = tmp5;
      } else {
        let tmp4;
        if (cResult[5] !== id.id) {
          const items1 = [id.id];
          cResult[5] = id.id;
          cResult[6] = items1;
          tmp4 = items1;
        } else {
          tmp4 = cResult[6];
        }
        tmp2 = tmp4;
      }
    }
  } else if (cResult[0] !== arg1) {
    const items2 = [arg1];
    cResult[0] = arg1;
    cResult[1] = items2;
    tmp2 = items2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let items = [arg0, arg1];
  return react.useMemo(() => {
    let items1;
    if (null != closure_1) {
      const items = [tmp];
      items1 = items;
    } else if (null != closure_0) {
      let mapped;
      const _Array = Array;
      if (Array.isArray(closure_0)) {
        mapped = closure_0.map((id) => id.id);
      } else {
        mapped = [closure_0.id];
      }
      items1 = mapped;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((questOrQuests) => {
  let adCreativeType;
  const obj = react2;
  const cResult = obj.c(11);
  questOrQuests = undefined;
  if ("questOrQuests" in questOrQuests) {
    questOrQuests = questOrQuests.questOrQuests;
  }
  let adContentId;
  if ("adContentId" in questOrQuests) {
    adContentId = questOrQuests.adContentId;
  }
  const tmp4Result = closure_5(questOrQuests, adContentId);
  if ("questOrQuests" in questOrQuests) {
    adCreativeType = AdCreativeType.AdCreativeType.QUEST;
  } else {
    adCreativeType = questOrQuests.adCreativeType;
  }
  if (cResult[0] === tmp4Result) {
    let tmp8;
    let tmp10;
    if (cResult[1] === questOrQuests.questContent) {
      tmp8 = cResult[2];
    }
    if (adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
      if (cResult[3] === adCreativeType) {
        if (cResult[4] === tmp8) {
          let tmp11;
          if (cResult[5] === tmp4Result) {
            tmp11 = cResult[6];
          }
          tmp10 = tmp11;
        }
      }
      const obj2 = { adContentIds: tmp4Result, adCreativeType, key: tmp8 };
      cResult[3] = adCreativeType;
      cResult[4] = tmp8;
      cResult[5] = tmp4Result;
      cResult[6] = obj2;
      tmp11 = obj2;
    } else {
      if (cResult[7] === adCreativeType) {
        if (cResult[8] === tmp8) {
          if (cResult[9] === tmp4Result) {
            tmp10 = cResult[10];
          }
        }
      }
      const obj3 = { adContentIds: tmp4Result, adCreativeType, key: tmp8 };
      cResult[7] = adCreativeType;
      cResult[8] = tmp8;
      cResult[9] = tmp4Result;
      cResult[10] = obj3;
      tmp10 = obj3;
    }
    return tmp10;
  }
  const items = [...tmp4Result];
  const questContent = questOrQuests.questContent;
  const sorted = items.sort();
  const combined = "" + sorted.join("_") + "_" + questContent;
  cResult[0] = tmp4Result;
  cResult[1] = questOrQuests.questContent;
  cResult[2] = combined;
  tmp8 = combined;
}) : ((questOrQuests) => {
  let adCreativeType;
  _require = questOrQuests;
  questOrQuests = undefined;
  if ("questOrQuests" in questOrQuests) {
    questOrQuests = questOrQuests.questOrQuests;
  }
  let adContentId;
  if ("adContentId" in questOrQuests) {
    adContentId = questOrQuests.adContentId;
  }
  const tmpResult = closure_5(questOrQuests, adContentId);
  const adContentIds = tmpResult;
  if ("questOrQuests" in questOrQuests) {
    adCreativeType = require("AdCreativeType").AdCreativeType.QUEST;
  } else {
    adCreativeType = questOrQuests.adCreativeType;
  }
  let items = [tmpResult, questOrQuests.questContent, adCreativeType];
  return react.useMemo(() => {
    const items = [...closure_1];
    const questContent = questOrQuests.questContent;
    const sorted = items.sort();
    const combined = "" + sorted.join("_") + "_" + questContent;
    const QUEST = AdCreativeType.AdCreativeType.QUEST;
    return { adContentIds, adCreativeType, key: combined };
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((adContentIds) => {
  let first;
  const obj = adContentIds(576);
  const cResult = obj.c(7);
  adContentIds = adContentIds.adContentIds;
  const adCreativeType = adContentIds.adCreativeType;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === adContentIds) {
    let tmp6;
    let tmp7;
    if (cResult[2] === adCreativeType) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = adContentIds(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    let tmp9 = null;
    if (null != stateFromStores) {
      let tmp10;
      if (cResult[5] !== stateFromStores) {
        const tmpResult2 = adContentIds(7225);
        const questStatus = tmpResult2.getQuestStatus(stateFromStores);
        cResult[5] = stateFromStores;
        cResult[6] = questStatus;
        tmp10 = questStatus;
      } else {
        tmp10 = cResult[6];
      }
      tmp9 = tmp10;
    }
    return tmp9 !== adCreativeType(7957)(tmp9);
  }
  const fn = function u() {
    let quest = null;
    if (adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
      quest = null;
      if (1 === adContentIds.length) {
        quest = QuestStore.getQuest(tmp2[0]);
      }
    }
    return quest;
  };
  const items1 = [adContentIds, adCreativeType];
  cResult[1] = adContentIds;
  cResult[2] = adCreativeType;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : ((adContentIds) => {
  let stateFromStores;
  adContentIds = adContentIds.adContentIds;
  const adCreativeType = adContentIds.adCreativeType;
  let obj = adContentIds(stateFromStores[5]);
  const items = [QuestStore];
  const items1 = [adContentIds, adCreativeType];
  stateFromStores = obj.useStateFromStores(items, () => {
    let quest = null;
    if (adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
      quest = null;
      if (1 === adContentIds.length) {
        quest = QuestStore.getQuest(tmp2[0]);
      }
    }
    return quest;
  }, items1);
  const items2 = [stateFromStores];
  const memo = react.useMemo(() => {
    let questStatus = null;
    if (null != stateFromStores) {
      const obj = AnalyticsTypes;
      questStatus = obj.getQuestStatus(tmp);
    }
    return questStatus;
  }, items2);
  return memo !== adCreativeType(stateFromStores[7])(memo);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => react.useContext(react3.QuestImpressionContext)) : (() => react.useContext(react3.QuestImpressionContext));
let closure_6 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const useQuestImpression = () => {
  const tmp = closure_6();
  let current;
  if (tmp != null) {
    current = tmp.current;
  }
  return current;
};
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_6();
  let closure_0 = tmp2;
  if (cResult[0] !== tmp2) {
    const fn = function t() {
      let id;
      if (ref != null) {
        const current = ref.current;
        if (current != null) {
          id = current.getId();
        }
      }
      return id;
    };
    cResult[0] = tmp2;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const tmp = closure_6();
  let closure_0 = tmp;
  const items = [tmp];
  return react.useCallback(() => {
    let id;
    if (ref != null) {
      const current = ref.current;
      if (current != null) {
        id = current.getId();
      }
    }
    return id;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const context = react.useContext(react3.QuestImpressionContext);
  if (cResult[0] !== context) {
    const fn = function n() {
      let id;
      if (context != null) {
        const current = context.current;
        if (current != null) {
          id = current.getId();
        }
      }
      return id;
    };
    cResult[0] = context;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const context = react.useContext(react3.QuestImpressionContext);
  const items = [context];
  return react.useCallback(() => {
    let id;
    if (context != null) {
      const current = context.current;
      if (current != null) {
        id = current.getId();
      }
    }
    return id;
  }, items);
});
const fn2 = () => {
  if (typeof fn === "function") {
    const tmp2 = closure_6();
    let current;
    if (tmp2 != null) {
      current = tmp2.current;
    }
    let id;
    if (current != null) {
      id = current.getId();
    }
    return id;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result2 = size.fileFinishedImporting("modules/quests/lib/analytics/ContentImpressionTrackerHooks.tsx");

export const useAdContentImpressionTrackerProps = tmp2;
export const useQuestStatusChanged = tmp3;
export const useQuestImpressionRef = tmp4;
export { useQuestImpression };
export const useQuestImpressionId = fn2;
export const useGetQuestImpressionId = tmp7;
export const useGetOptionalQuestImpressionId = tmp8;