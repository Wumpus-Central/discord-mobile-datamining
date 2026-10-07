// === Module 10929: ContentImpressionTrackerHooks ===

// Module 10929 (ContentImpressionTrackerHooks)
import c from "c" /* 576 */;
import AdCreativeType from "AdCreativeType" /* 5637 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7225 */;
import QuestImpressionContext from "QuestImpressionContext" /* 10930 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7200 */;

require = fn;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  const cResult = c.c(8);
  if (null == arg1) {
    if (null == id) {
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[7] = items;
      }
    } else {
      const _Array = Array;
      if (Array.isArray(id)) {
        if (cResult[2] !== id) {
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function c(id) {
              return id.id;
            };
            cResult[4] = fn;
            let tmp5 = fn;
          } else {
            tmp5 = cResult[4];
          }
          const mapped = id.map(tmp5);
          cResult[2] = id;
          cResult[3] = mapped;
        } else {
          let tmp2 = cResult[3];
        }
      } else {
        if (cResult[5] !== id.id) {
          const items1 = [id.id];
          cResult[5] = id.id;
          cResult[6] = items1;
          let tmp4 = items1;
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
  closure_0 = arg0;
  closure_1 = arg1;
  let items = [arg0, arg1];
  return noop.useMemo(() => {
    if (null != closure_1) {
      const items = [tmp];
      let items1 = items;
    } else if (null != closure_0) {
      const _Array = Array;
      if (Array.isArray(closure_0)) {
        let mapped = closure_0.map((id) => id.id);
      } else {
        mapped = [closure_0.id];
      }
    } else {
      items1 = [];
    }
    return items1;
  }, items);
});
fn(558);
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((questOrQuests) => {
  const cResult = c.c(11);
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
    let adCreativeType = AdCreativeType.AdCreativeType.QUEST;
  } else {
    adCreativeType = questOrQuests.adCreativeType;
  }
  if (cResult[0] === tmp4Result) {
    if (cResult[1] === questOrQuests.questContent) {
      let tmp8 = cResult[2];
    }
    if (adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
      if (cResult[3] === adCreativeType) {
        if (cResult[4] === tmp8) {
        }
      }
      const obj2 = { adContentIds: tmp4Result, adCreativeType, key: tmp8 };
      cResult[3] = adCreativeType;
      cResult[4] = tmp8;
      cResult[5] = tmp4Result;
      cResult[6] = obj2;
    } else {
      if (cResult[7] === adCreativeType) {
        if (cResult[8] === tmp8) {
          if (cResult[9] === tmp4Result) {
            let tmp10 = cResult[10];
          }
          return tmp10;
        }
      }
      const obj3 = { adContentIds: tmp4Result, adCreativeType, key: tmp8 };
      cResult[7] = adCreativeType;
      cResult[8] = tmp8;
      cResult[9] = tmp4Result;
      cResult[10] = obj3;
      tmp10 = obj3;
    }
  }
  const items = [...tmp4Result];
  const sorted = items.sort();
  const combined = "" + sorted.join("_") + "_" + questOrQuests.questContent;
  cResult[0] = tmp4Result;
  cResult[1] = questOrQuests.questContent;
  cResult[2] = combined;
  tmp8 = combined;
}) : ((questOrQuests) => {
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
  return noop.useMemo(() => {
    const items = [...closure_1];
    const sorted = items.sort();
    const combined = "" + sorted.join("_") + "_" + questOrQuests.questContent;
    const QUEST = AdCreativeType.AdCreativeType.QUEST;
    return { adContentIds, adCreativeType, key: combined };
  }, items);
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => noop.useContext(QuestImpressionContext.QuestImpressionContext)) : (() => noop.useContext(QuestImpressionContext.QuestImpressionContext));
let closure_6 = tmp4;
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
const useQuestImpression = () => {
  const tmp = closure_6();
  let current;
  if (tmp != null) {
    current = tmp.current;
  }
  return current;
};
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((adContentIds) => {
  let obj = adContentIds;
  const cResult = adContentIds(576).c(7);
  adContentIds = adContentIds.adContentIds;
  const adCreativeType = adContentIds.adCreativeType;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === adContentIds) {
    if (cResult[2] === adCreativeType) {
      let tmp5 = cResult[3];
      let tmp6 = cResult[4];
    }
    const stateFromStores = obj(504).useStateFromStores(first, tmp5, tmp6);
    if (null == stateFromStores) {
      return null !== adCreativeType(7957)(null);
    } else if (cResult[5] !== stateFromStores) {
      obj = obj(7225);
      const questStatus = obj.getQuestStatus(stateFromStores);
      cResult[5] = stateFromStores;
      cResult[6] = questStatus;
    }
    const objResult = obj(504);
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
  tmp6 = items1;
  tmp5 = fn;
  const obj2 = adContentIds(576);
}) : ((adContentIds) => {
  adContentIds = adContentIds.adContentIds;
  const adCreativeType = adContentIds.adCreativeType;
  const items = [QuestStore];
  const items1 = [adContentIds, adCreativeType];
  stateFromStores = adContentIds(stateFromStores[5]).useStateFromStores(items, () => {
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
  const memo = noop.useMemo(() => {
    let questStatus = null;
    if (null != stateFromStores) {
      questStatus = AnalyticsTypes.getQuestStatus(tmp);
    }
    return questStatus;
  }, items2);
  return memo !== adCreativeType(stateFromStores[7])(memo);
});
ReactCompilerGating = fn(558);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp2 = closure_6();
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
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const tmp = closure_6();
  const items = [tmp];
  return noop.useCallback(() => {
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
const size = fn(2);
const result2 = size.fileFinishedImporting("modules/quests/lib/analytics/ContentImpressionTrackerHooks.tsx");

export const useAdContentImpressionTrackerProps = tmp2;
export const useQuestStatusChanged = tmp3;
export const useQuestImpressionRef = tmp4;
export { useQuestImpression };
export const useQuestImpressionId = fn2;
export const useGetQuestImpressionId = tmp7;
export const useGetOptionalQuestImpressionId = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const context = noop.useContext(QuestImpressionContext.QuestImpressionContext);
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
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const context = noop.useContext(QuestImpressionContext.QuestImpressionContext);
  const items = [context];
  return noop.useCallback(() => {
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