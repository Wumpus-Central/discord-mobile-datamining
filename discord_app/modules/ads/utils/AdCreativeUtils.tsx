// discord_app/modules/ads/utils/AdCreativeUtils.tsx
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/ads/utils/AdCreativeUtils.tsx");

export const getCreativeAnalyticsParams = function getCreativeAnalyticsParams(creative) {
  const type = creative.type;
  if (AdCreativeType.AdCreativeType.QUEST === type) {
    const obj2 = { adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: creative.quest.id };
    return obj2;
  } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
    const obj = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adCreativeId: creative.bounty.id };
    return obj;
  }
};
export const getQuestDockQuest = function getQuestDockQuest(type) {
  let quest = null;
  if (type.type === AdCreativeType.AdCreativeType.QUEST) {
    quest = type.quest;
  }
  return quest;
};
export const getQuestDockAdCreativeId = function getQuestDockAdCreativeId(type) {
  type = type.type;
  if (AdCreativeType.AdCreativeType.QUEST === type) {
    return type.quest.id;
  } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
    return type.bounty.id;
  } else if (AdCreativeType.AdCreativeType.NO_FILL === type) {
    return null;
  }
};
