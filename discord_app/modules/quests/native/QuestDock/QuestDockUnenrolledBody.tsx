// === Module 16740: QuestDockUnenrolledBody ===

// Module 16740 (QuestDockUnenrolledBody)
import QuestTypes from "QuestTypes" /* 6843 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8350 */;
import QuestUtils from "QuestUtils" /* 9847 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9888 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestsExperimentLocations = fn(6840).QuestsExperimentLocations;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx");

export default noop.memo(function QuestDockUnenrolledBody() {
  questDockQuest = questDockQuest(getQuestImpressionId[3]).useQuestDockQuest();
  const isRendered = noop.useContext(handleAcceptQuest(getQuestImpressionId[4])).isRendered;
  let obj = questDockQuest(getQuestImpressionId[3]);
  let isQuestDockExpanded = questDockQuest(getQuestImpressionId[5]).useIsQuestDockExpanded();
  const obj3 = questDockQuest(getQuestImpressionId[5]);
  const questDockAcceptQuest = questDockQuest(getQuestImpressionId[6]).useQuestDockAcceptQuest();
  handleAcceptQuest = questDockAcceptQuest.handleAcceptQuest;
  items = [handleAcceptQuest];
  ({ isEnrolling, primaryCtaCopy } = questDockAcceptQuest);
  const callback = noop.useCallback(() => {
    handleAcceptQuest(AnalyticsTypes.QuestContentCTA.ACCEPT_QUEST);
  }, items);
  const obj4 = questDockQuest(getQuestImpressionId[6]);
  const questTaskDetails = questDockQuest(getQuestImpressionId[8]).useQuestTaskDetails(questDockQuest);
  const obj5 = questDockQuest(getQuestImpressionId[8]);
  getQuestImpressionId = questDockQuest(getQuestImpressionId[9]).useGetQuestImpressionId();
  const QuestMobileBarSecondaryCtaExperiment = questDockQuest(getQuestImpressionId[10]).QuestMobileBarSecondaryCtaExperiment;
  const obj6 = questDockQuest(getQuestImpressionId[9]);
  const obj7 = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
  const questOrbMultiplierEligibility = questDockQuest(getQuestImpressionId[11]).useQuestOrbMultiplierEligibility();
  const obj8 = questDockQuest(getQuestImpressionId[11]);
  const shouldShowBonusOrbsUX = questDockQuest(getQuestImpressionId[8]).useShouldShowBonusOrbsUX(questDockQuest, questOrbMultiplierEligibility);
  let tmp13 = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    tmp13 = questOrbMultiplierEligibility === tmp(tmp2[12]).QuestOrbMultiplierEligibilityType.NITRO;
  }
  const obj9 = questDockQuest(getQuestImpressionId[8]);
  const tmpResult = questDockQuest(getQuestImpressionId[13]);
  const items1 = [questDockQuest];
  const questsInstructionsToWinReward = tmpResult.useQuestsInstructionsToWinReward({ quest: questDockQuest, location: QuestsExperimentLocations.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: questDockQuest(getQuestImpressionId[14]).QuestContent.QUEST_BAR_MOBILE });
  const items2 = [questDockQuest, getQuestImpressionId];
  const callback1 = noop.useCallback(() => QuestUtils.getPrimaryCtaIcon(questDockQuest, true), items1);
  const callback2 = noop.useCallback(() => {
    const obj = QuestPlatformUtils;
    obj.openGameLinkDirectly(questDockQuest, { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
  }, items2);
  const obj10 = { quest: questDockQuest, location: QuestsExperimentLocations.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: questDockQuest(getQuestImpressionId[14]).QuestContent.QUEST_BAR_MOBILE };
  let tmp19 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp19 = !isRendered;
  }
  const obj11 = { paused: tmp19, quest: questDockQuest, withAnimation: null };
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const obj12 = { rewardTile: jsx(questDockQuest(getQuestImpressionId[17]).QuestDockBodyQuestRewardTile, { paused: tmp19, quest: questDockQuest, withAnimation: null }), premiumRewardPerkPill: null, title: null, description: null, ctaText: null, onCtaPress: null, renderCtaIcon: null, ctaButtonVariant: "shiny", ctaLoading: null, showBonusOrbsGradient: null, secondaryCta: null };
  obj11.withAnimation = isQuestDockExpanded;
  let tmp17Result;
  if (shouldShowBonusOrbsUX) {
    const obj13 = { questId: questDockQuest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
    tmp17Result = jsx(tmp(tmp2[18]).QuestOrbMultiplierPerkPill, { questId: questDockQuest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility });
  }
  obj12.premiumRewardPerkPill = tmp17Result;
  const intl = tmp(tmp2[19]).intl;
  obj12.title = intl.format(questDockQuest(getQuestImpressionId[19]).t.EQa7os, { questName: questDockQuest.config.messages.questName });
  obj12.description = questsInstructionsToWinReward;
  obj12.ctaText = primaryCtaCopy;
  obj12.onCtaPress = callback;
  obj12.renderCtaIcon = callback1;
  obj12.ctaLoading = isEnrolling;
  obj12.showBonusOrbsGradient = tmp13;
  let tmp17Result2;
  if (QuestMobileBarSecondaryCtaExperiment.useConfig(obj7).enabled) {
    const obj15 = { variant: "secondary", size: "md", icon: tmp4(tmp2[21]), accessibilityLabel: tmp(tmp2[22]).getExternalCtaLabel(questDockQuest), onPress: callback2 };
    tmp17Result2 = jsx(tmp(tmp2[20]).IconButton, { variant: "secondary", size: "md", icon: tmp4(tmp2[21]), accessibilityLabel: tmp(tmp2[22]).getExternalCtaLabel(questDockQuest), onPress: callback2 });
    const tmpResult2 = tmp(tmp2[22]);
  }
  obj12.secondaryCta = tmp17Result2;
  return jsx(handleAcceptQuest(getQuestImpressionId[17]), { rewardTile: jsx(questDockQuest(getQuestImpressionId[17]).QuestDockBodyQuestRewardTile, { paused: tmp19, quest: questDockQuest, withAnimation: null }), premiumRewardPerkPill: null, title: null, description: null, ctaText: null, onCtaPress: null, renderCtaIcon: null, ctaButtonVariant: "shiny", ctaLoading: null, showBonusOrbsGradient: null, secondaryCta: null });
});