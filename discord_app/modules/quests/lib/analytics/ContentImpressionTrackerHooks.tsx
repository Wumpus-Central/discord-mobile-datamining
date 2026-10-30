// === Module 9697: ContentImpressionTrackerHooks ===

// Module 9697 (ContentImpressionTrackerHooks)
import AdCreativeType from "AdCreativeType" /* 6782 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7864 */;
import QuestImpressionContext from "QuestImpressionContext" /* 9698 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7839 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/lib/analytics/ContentImpressionTrackerHooks.tsx");

export function useAdContentImpressionTrackerProps(questOrQuests) {
  questOrQuests = undefined;
  if ("questOrQuests" in questOrQuests) {
    questOrQuests = questOrQuests.questOrQuests;
  }
  let adContentId;
  if ("adContentId" in questOrQuests) {
    adContentId = questOrQuests.adContentId;
  }
  let items = [questOrQuests, adContentId];
  const memo = noop.useMemo(() => {
    if (null != memo) {
      const items = [tmp];
      let items1 = items;
    } else if (null != questOrQuests) {
      const _Array = Array;
      if (Array.isArray(questOrQuests)) {
        let mapped = questOrQuests.map((id) => id.id);
      } else {
        mapped = [questOrQuests.id];
      }
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  if ("questOrQuests" in questOrQuests) {
    adCreativeType = questOrQuests(adCreativeType[2]).AdCreativeType.QUEST;
  } else {
    adCreativeType = questOrQuests.adCreativeType;
  }
  let items1 = [memo, questOrQuests.questContent, adCreativeType];
  return noop.useMemo(() => {
    const items = [...memo];
    const sorted = items.sort();
    const combined = "" + sorted.join("_") + "_" + questOrQuests.questContent;
    const QUEST = AdCreativeType.AdCreativeType.QUEST;
    return { adContentIds: memo, adCreativeType, key: combined };
  }, items1);
}
export function useQuestStatusChanged(adContentIds) {
  adContentIds = adContentIds.adContentIds;
  const adCreativeType = adContentIds.adCreativeType;
  const items = [QuestStore];
  const items1 = [adContentIds, adCreativeType];
  stateFromStores = adContentIds(stateFromStores[3]).useStateFromStores(items, () => {
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
  return memo !== adCreativeType(stateFromStores[5])(memo);
}
export function useQuestImpressionRef() {
  return noop.useContext(QuestImpressionContext.QuestImpressionContext);
}
export function useQuestImpression() {
  const context = noop.useContext(QuestImpressionContext.QuestImpressionContext);
  let current;
  if (context != null) {
    current = context.current;
  }
  return current;
}
export function useQuestImpressionId() {
  const context = noop.useContext(QuestImpressionContext.QuestImpressionContext);
  let current;
  if (context != null) {
    current = context.current;
  }
  let id;
  if (current != null) {
    id = current.getId();
  }
  return id;
}
export function useGetQuestImpressionId() {
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
}
export function useGetOptionalQuestImpressionId() {
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
}