// discord_app/modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const QuestsExperimentLocations = fn(6558).QuestsExperimentLocations;
const expandedHeight = fn(16473).QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default noop.memo(function QuestDockUnenrolledBackground() {
  const questDockQuest = handleAcceptQuest(16506).useQuestDockQuest();
  const obj = handleAcceptQuest(16506);
  const questDockHeroAsset = handleAcceptQuest(16467).useQuestDockHeroAsset(questDockQuest);
  ({ videoAsset, staticUrl } = questDockHeroAsset);
  const obj2 = handleAcceptQuest(16467);
  const token = handleAcceptQuest(5477).useToken(nativeDefault.colors.CARD_BACKGROUND_DEFAULT);
  const QuestBarStartQuestOnClickExperiment = handleAcceptQuest(16587).QuestBarStartQuestOnClickExperiment;
  let isEnrolling = QuestBarStartQuestOnClickExperiment.useConfig({
    location: QuestsExperimentLocations.QUESTS_BAR_MOBILE,
  }).enabled;
  const obj3 = handleAcceptQuest(5477);
  const obj4 = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
  const questDockAcceptQuest = handleAcceptQuest(16584).useQuestDockAcceptQuest();
  handleAcceptQuest = questDockAcceptQuest.handleAcceptQuest;
  items = [handleAcceptQuest];
  const callback = noop.useCallback(() => {
    handleAcceptQuest(AnalyticsTypes.QuestContentCTA.QUEST_BAR_HERO);
  }, items);
  const obj6 = {
    expandedHeight,
    imageUrl: staticUrl,
    videoUrl: null,
    videoMimetype: null,
    gradientBaseColor: null,
    onPress: null,
    disabled: null,
  };
  let url;
  const obj5 = handleAcceptQuest(16584);
  if (videoAsset != null) {
    url = videoAsset.url;
  }
  obj6.videoUrl = url;
  let mimetype;
  if (videoAsset != null) {
    mimetype = videoAsset.mimetype;
  }
  if (mimetype == null) {
    mimetype = null;
  }
  obj6.videoMimetype = mimetype;
  obj6.gradientBaseColor = token;
  let tmp10;
  if (isEnrolling) {
    tmp10 = callback;
  }
  obj6.onPress = tmp10;
  if (isEnrolling) {
    isEnrolling = questDockAcceptQuest.isEnrolling;
  }
  obj6.disabled = isEnrolling;
  return jsx(QuestDockVideoBackgroundDefault, {
    expandedHeight,
    imageUrl: staticUrl,
    videoUrl: null,
    videoMimetype: null,
    gradientBaseColor: null,
    onPress: null,
    disabled: null,
  });
});
