// discord_app/modules/quests/native/PlayableAnalytics.tsx
import QuestContent from "../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsActions from "../lib/analytics/AnalyticsActions.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/quests/native/PlayableAnalytics.tsx");

export function trackPlayableEvent(id, impressionId, arg2) {
  ({ event, properties } = arg2);
  const obj2 = {
    adContentId: id,
    adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE,
    sourceQuestContent: QuestContent.QuestContent.QUEST_BAR_MOBILE,
    event,
    properties: null,
  };
  const obj3 = {};
  const merged = Object.assign(properties);
  obj3.impression_id = impressionId;
  obj2.properties = obj3;
  AnalyticsActions.trackAdContentEvent(obj2);
}
