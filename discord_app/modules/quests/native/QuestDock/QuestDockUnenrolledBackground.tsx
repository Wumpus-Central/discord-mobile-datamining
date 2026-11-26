// === Module 16794: QuestDockUnenrolledBackground ===

// Module 16794 (QuestDockUnenrolledBackground)
import nativeDefault from "native" /* 575 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8392 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 16796 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestsExperimentLocations = fn(6871).QuestsExperimentLocations;
const expandedHeight = fn(16680).QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const NEUTRAL_79 = nativeDefault.unsafe_rawColors.NEUTRAL_79;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default noop.memo(function QuestDockUnenrolledBackground() {
  const questDockQuest = handleAcceptQuest(16714).useQuestDockQuest();
  const obj = handleAcceptQuest(16714);
  const questDockHeroAsset = handleAcceptQuest(16674).useQuestDockHeroAsset(questDockQuest);
  ({ videoAsset, staticUrl } = questDockHeroAsset);
  const QuestBarStartQuestOnClickExperiment = handleAcceptQuest(16795).QuestBarStartQuestOnClickExperiment;
  let isEnrolling = QuestBarStartQuestOnClickExperiment.useConfig({ location: QuestsExperimentLocations.QUESTS_BAR_MOBILE }).enabled;
  const obj2 = handleAcceptQuest(16674);
  const obj3 = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
  const questDockAcceptQuest = handleAcceptQuest(16792).useQuestDockAcceptQuest();
  handleAcceptQuest = questDockAcceptQuest.handleAcceptQuest;
  items = [handleAcceptQuest];
  const callback = noop.useCallback(() => {
    handleAcceptQuest(AnalyticsTypes.QuestContentCTA.QUEST_BAR_HERO);
  }, items);
  const obj5 = { expandedHeight, imageUrl: staticUrl, videoUrl: null, videoMimetype: null, gradientBaseColor: null, onPress: null, disabled: null };
  let url;
  const obj4 = handleAcceptQuest(16792);
  if (videoAsset != null) {
    url = videoAsset.url;
  }
  obj5.videoUrl = url;
  let mimetype;
  if (videoAsset != null) {
    mimetype = videoAsset.mimetype;
  }
  if (mimetype == null) {
    mimetype = null;
  }
  obj5.videoMimetype = mimetype;
  obj5.gradientBaseColor = NEUTRAL_79;
  let tmp9;
  if (isEnrolling) {
    tmp9 = callback;
  }
  obj5.onPress = tmp9;
  if (isEnrolling) {
    isEnrolling = questDockAcceptQuest.isEnrolling;
  }
  obj5.disabled = isEnrolling;
  return jsx(QuestDockVideoBackgroundDefault, { expandedHeight, imageUrl: staticUrl, videoUrl: null, videoMimetype: null, gradientBaseColor: null, onPress: null, disabled: null });
});