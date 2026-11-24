// === Module 16504: PlayableAnalytics ===

// Module 16504 (PlayableAnalytics)
import QuestContent from "QuestContent" /* 6750 */;
import AdCreativeType from "AdCreativeType" /* 6752 */;
import AnalyticsActions from "AnalyticsActions" /* 8241 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/PlayableAnalytics.tsx");

export function trackPlayableEvent(id, impressionId, arg2) {
  ({ event, properties } = arg2);
  const obj2 = { adContentId: id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, sourceQuestContent: QuestContent.QuestContent.QUEST_BAR_MOBILE, event, properties: null };
  const obj3 = {};
  const merged = Object.assign(properties);
  obj3.impression_id = impressionId;
  obj2.properties = obj3;
  AnalyticsActions.trackAdContentEvent(obj2);
}