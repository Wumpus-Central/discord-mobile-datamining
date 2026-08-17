// discord_app/modules/quests/lib/analytics/ContentImpressionTrackerHooks.tsx
import set from "set" /* 10688 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "initializeState" /* 7453 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/quests/lib/analytics/ContentImpressionTrackerHooks.tsx");

export const useAdContentImpressionTrackerProps = function useAdContentImpressionTrackerProps(questOrQuests) {
  questOrQuests = undefined;
  if ("questOrQuests" in questOrQuests) {
    questOrQuests = questOrQuests.questOrQuests;
  }
  let adContentId;
  if ("adContentId" in questOrQuests) {
    adContentId = questOrQuests.adContentId;
  }
  let memo = adContentId;
  let items = [questOrQuests, adContentId];
  memo = React.useMemo(() => {
    if (null != memo) {
      const items = [tmp];
      let items1 = items;
    } else if (null != questOrQuests) {
      const _Array = Array;
      if (Array.isArray(arr)) {
        let mapped = arr.map((id) => id.id);
      } else {
        mapped = [arr.id];
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
  return React.useMemo(() => {
    const items = [...memo];
    const sorted = items.sort();
    const combined = "" + sorted.join("_") + "_" + questOrQuests.questContent;
    const QUEST = questOrQuests(adCreativeType[2]).AdCreativeType.QUEST;
    return { adContentIds: memo, adCreativeType, key: combined };
  }, items1);
};
export const useQuestStatusChanged = function useQuestStatusChanged(adContentIds) {
  adContentIds = adContentIds.adContentIds;
  const adCreativeType = adContentIds.adCreativeType;
  const items = [closure_4];
  const items1 = [adContentIds, adCreativeType];
  stateFromStores = adContentIds(stateFromStores[3]).useStateFromStores(items, () => {
    let quest = null;
    if (adCreativeType === adContentIds(stateFromStores[2]).AdCreativeType.QUEST) {
      quest = null;
      if (1 === adContentIds.length) {
        quest = closure_1_4.getQuest(tmp2[0]);
      }
    }
    return quest;
  }, items1);
  const items2 = [stateFromStores];
  const memo = React.useMemo(() => {
    let questStatus = null;
    if (null != stateFromStores) {
      questStatus = adContentIds(stateFromStores[4]).getQuestStatus(tmp);
      const obj = adContentIds(stateFromStores[4]);
    }
    return questStatus;
  }, items2);
  return memo !== adCreativeType(stateFromStores[5])(memo);
};
export const useQuestImpressionRef = function useQuestImpressionRef() {
  return React.useContext(set.QuestImpressionContext);
};
export const useQuestImpression = function useQuestImpression() {
  const context = React.useContext(set.QuestImpressionContext);
  let current;
  if (context != null) {
    current = context.current;
  }
  return current;
};
export const useQuestImpressionId = function useQuestImpressionId() {
  const context = React.useContext(set.QuestImpressionContext);
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
  context = React.useContext(context(10688).QuestImpressionContext);
  const items = [context];
  return React.useCallback(() => {
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