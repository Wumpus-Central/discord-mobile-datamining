// discord_app/modules/quests/lib/analytics/ContentImpressionTrackerHooks.tsx
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "AnalyticsTypes.tsx";
import ContentImpressionTracker from "ContentImpressionTracker.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestStore from "../../QuestStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/lib/analytics/ContentImpressionTrackerHooks.tsx");

export const useAdContentImpressionTrackerProps = function useAdContentImpressionTrackerProps(questOrQuests) {
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
};
export const useQuestStatusChanged = function useQuestStatusChanged(adContentIds) {
  adContentIds = adContentIds.adContentIds;
  const adCreativeType = adContentIds.adCreativeType;
  const items = [QuestStore];
  const items1 = [adContentIds, adCreativeType];
  stateFromStores = adContentIds(stateFromStores[3]).useStateFromStores(
    items,
    () => {
      let quest = null;
      if (adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
        quest = null;
        if (1 === adContentIds.length) {
          quest = QuestStore.getQuest(tmp2[0]);
        }
      }
      return quest;
    },
    items1,
  );
  const items2 = [stateFromStores];
  const memo = noop.useMemo(() => {
    let questStatus = null;
    if (null != stateFromStores) {
      questStatus = AnalyticsTypes.getQuestStatus(tmp);
    }
    return questStatus;
  }, items2);
  return memo !== adCreativeType(stateFromStores[5])(memo);
};
export const useQuestImpressionRef = function useQuestImpressionRef() {
  return noop.useContext(ContentImpressionTracker.QuestImpressionContext);
};
export const useQuestImpression = function useQuestImpression() {
  const context = noop.useContext(ContentImpressionTracker.QuestImpressionContext);
  let current;
  if (context != null) {
    current = context.current;
  }
  return current;
};
export const useQuestImpressionId = function useQuestImpressionId() {
  const context = noop.useContext(ContentImpressionTracker.QuestImpressionContext);
  let current;
  if (context != null) {
    current = context.current;
  }
  let id;
  if (current != null) {
    id = current.getId();
  }
  return id;
};
export const useGetQuestImpressionId = function useGetQuestImpressionId() {
  const context = noop.useContext(ContentImpressionTracker.QuestImpressionContext);
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
};
