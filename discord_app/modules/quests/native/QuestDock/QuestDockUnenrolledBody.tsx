// discord_app/modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx
import QuestTypes from "../../QuestTypes.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestUtils from "../QuestUtils.native.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestStore from "../../QuestStore.tsx";

require = fn;
const QuestConstants = fn(5751);
({ QuestDockMode: metroRequire, QuestsExperimentLocations: closure_7 } = QuestConstants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx");

export default noop.memo(function QuestDockUnenrolledBody() {
  questDockQuest = questDockQuest(isMobileActivityQuest[5]).useQuestDockQuest();
  const isRendered = getQuestImpressionId.useContext(hasWatchVideoOnMobileTasks(isMobileActivityQuest[6])).isRendered;
  let obj = questDockQuest(isMobileActivityQuest[5]);
  let isQuestDockExpanded = questDockQuest(isMobileActivityQuest[7]).useIsQuestDockExpanded();
  const obj3 = questDockQuest(isMobileActivityQuest[7]);
  const items = [setRestingQuestDockMode];
  const stateFromStores = questDockQuest(isMobileActivityQuest[8]).useStateFromStores(items, () => QuestStore.isEnrolling(questDockQuest.id));
  const obj4 = questDockQuest(isMobileActivityQuest[8]);
  hasWatchVideoOnMobileTasks = questDockQuest(isMobileActivityQuest[9]).useHasWatchVideoOnMobileTasks(questDockQuest.config);
  const obj5 = questDockQuest(isMobileActivityQuest[9]);
  const questTaskDetails = questDockQuest(isMobileActivityQuest[10]).useQuestTaskDetails(questDockQuest);
  const obj6 = questDockQuest(isMobileActivityQuest[10]);
  const mobileActivityQuest = questDockQuest(isMobileActivityQuest[9]).useMobileActivityQuest(questDockQuest);
  isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  const obj7 = questDockQuest(isMobileActivityQuest[9]);
  getQuestImpressionId = questDockQuest(isMobileActivityQuest[11]).useGetQuestImpressionId();
  const QuestMobileBarSecondaryCtaExperiment = questDockQuest(isMobileActivityQuest[12]).QuestMobileBarSecondaryCtaExperiment;
  const obj8 = questDockQuest(isMobileActivityQuest[11]);
  const obj9 = { location: trackQuestContentClickedWithImpression.QUESTS_BAR_MOBILE };
  const tmp11 = trackQuestContentClickedWithImpression;
  const questOrbMultiplierEligibility = questDockQuest(isMobileActivityQuest[13]).useQuestOrbMultiplierEligibility();
  const obj10 = questDockQuest(isMobileActivityQuest[13]);
  const shouldShowBonusOrbsUX = questDockQuest(isMobileActivityQuest[10]).useShouldShowBonusOrbsUX(questDockQuest, questOrbMultiplierEligibility);
  let tmp14 = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    tmp14 = questOrbMultiplierEligibility === tmp(tmp2[14]).QuestOrbMultiplierEligibilityType.NITRO;
  }
  setRestingQuestDockMode = obj2.useContext(tmp(tmp2[15]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const obj11 = questDockQuest(isMobileActivityQuest[10]);
  const isQuestAccessSuspended = questDockQuest(isMobileActivityQuest[10]).useIsQuestAccessSuspended();
  const tmpResult = questDockQuest(isMobileActivityQuest[10]);
  trackQuestContentClickedWithImpression = questDockQuest(isMobileActivityQuest[16]).useTrackQuestContentClickedWithImpression();
  const items1 = [questDockQuest.id, hasWatchVideoOnMobileTasks, setRestingQuestDockMode, isMobileActivityQuest, launchMobileActivity, isQuestAccessSuspended, trackQuestContentClickedWithImpression];
  const callback = obj2.useCallback(launchMobileActivity(function*() {
    const v0 = 0;
    if (isQuestAccessSuspended) {
      trackQuestContentClickedWithImpression({ questId: questDockQuest.id, questContent: v0(5754).QuestContent.QUEST_BAR_MOBILE, questContentCTA: v0(7136).QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: v0(5754).QuestContent.QUEST_BAR_MOBILE });
      v2(14624)();
    }
    yield v0(10670).enrollInQuest(questDockQuest.id, { questContentCTA: v0(7136).QuestContentCTA.ACCEPT_QUEST, questContent: v0(5754).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: v0(5754).QuestContent.QUEST_BAR_MOBILE });
    if (1 === tmp4) {
      if (arg0 === 1) {
        dependencyMap = 3;
        throw value;
      } else if (arg0 === 2) {
        dependencyMap = 3;
        return { value, done: true };
      } else if (closure_128_2) {
        v2 = 2;
        dependencyMap = 1;
        return { value: closure_128_3(), done: false };
      } else {
        if (closure_128_1) {
          v2(14630)({ questId: closure_128_0.id, sourceQuestContent: v0(5754).QuestContent.QUEST_BAR_MOBILE });
          closure_128_5(constants.COLLAPSED);
          v2(14630);
          { questId: closure_128_0.id, sourceQuestContent: v0(5754).QuestContent.QUEST_BAR_MOBILE };
        }
        dependencyMap = 3;
      }
    } else if (arg0 === 1) {
      dependencyMap = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_128_5(constants.COLLAPSED);
    }
    return value;
  }), items1);
  const tmpResult5 = questDockQuest(isMobileActivityQuest[16]);
  const primaryCtaCopy = questDockQuest(isMobileActivityQuest[22]).usePrimaryCtaCopy({ quest: questDockQuest, application: mobileActivityQuest.questApplication, shortText: true });
  const tmpResult6 = questDockQuest(isMobileActivityQuest[22]);
  const tmpResult7 = questDockQuest(isMobileActivityQuest[22]);
  const items2 = [questDockQuest];
  const questsInstructionsToWinReward = tmpResult7.useQuestsInstructionsToWinReward({ quest: questDockQuest, location: tmp11.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: questDockQuest(isMobileActivityQuest[17]).QuestContent.QUEST_BAR_MOBILE });
  const items3 = [questDockQuest, getQuestImpressionId];
  const callback1 = obj2.useCallback(() => QuestUtils.getPrimaryCtaIcon(questDockQuest, true), items2);
  const callback2 = obj2.useCallback(() => {
    const obj = QuestPlatformUtils;
    obj.openGameLinkDirectly(questDockQuest, { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
  }, items3);
  const obj12 = { quest: questDockQuest, location: tmp11.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: questDockQuest(isMobileActivityQuest[17]).QuestContent.QUEST_BAR_MOBILE };
  let tmp24 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp24 = !isRendered;
  }
  const obj13 = { paused: tmp24, quest: questDockQuest, withAnimation: null };
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const obj14 = { rewardTile: jsx(questDockQuest(isMobileActivityQuest[25]).QuestDockBodyQuestRewardTile, { paused: tmp24, quest: questDockQuest, withAnimation: null }), premiumRewardPerkPill: null, title: null, description: null, ctaText: null, onCtaPress: null, renderCtaIcon: null, ctaButtonVariant: "shiny", ctaLoading: null, showBonusOrbsGradient: null, secondaryCta: null };
  obj13.withAnimation = isQuestDockExpanded;
  let tmp22Result;
  if (shouldShowBonusOrbsUX) {
    const obj15 = { questId: questDockQuest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
    tmp22Result = jsx(tmp(tmp2[26]).QuestOrbMultiplierPerkPill, { questId: questDockQuest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility });
  }
  obj14.premiumRewardPerkPill = tmp22Result;
  const intl = tmp(tmp2[27]).intl;
  obj14.title = intl.format(questDockQuest(isMobileActivityQuest[27]).t.EQa7os, { questName: questDockQuest.config.messages.questName });
  obj14.description = questsInstructionsToWinReward;
  obj14.ctaText = primaryCtaCopy;
  obj14.onCtaPress = callback;
  obj14.renderCtaIcon = callback1;
  obj14.ctaLoading = stateFromStores;
  obj14.showBonusOrbsGradient = tmp14;
  let tmp22Result2;
  if (QuestMobileBarSecondaryCtaExperiment.useConfig(obj9).enabled) {
    const obj17 = { variant: "secondary", size: "md", icon: tmp4(tmp2[29]), accessibilityLabel: tmp(tmp2[30]).getExternalCtaLabel(questDockQuest), onPress: callback2 };
    tmp22Result2 = jsx(tmp(tmp2[28]).IconButton, { variant: "secondary", size: "md", icon: tmp4(tmp2[29]), accessibilityLabel: tmp(tmp2[30]).getExternalCtaLabel(questDockQuest), onPress: callback2 });
    const tmpResult8 = tmp(tmp2[30]);
  }
  obj14.secondaryCta = tmp22Result2;
  return jsx(hasWatchVideoOnMobileTasks(isMobileActivityQuest[25]), { rewardTile: jsx(questDockQuest(isMobileActivityQuest[25]).QuestDockBodyQuestRewardTile, { paused: tmp24, quest: questDockQuest, withAnimation: null }), premiumRewardPerkPill: null, title: null, description: null, ctaText: null, onCtaPress: null, renderCtaIcon: null, ctaButtonVariant: "shiny", ctaLoading: null, showBonusOrbsGradient: null, secondaryCta: null });
});