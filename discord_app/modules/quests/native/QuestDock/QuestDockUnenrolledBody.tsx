// === Module 15460: QuestDockUnenrolledBody ===

// Module 15460 (QuestDockUnenrolledBody)
import QuestUtils from "QuestUtils" /* 12018 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7937 */;

require = fn;
const QuestConstants = fn(5656);
({ QuestDockMode: metroRequire, QuestsExperimentLocations: closure_7 } = QuestConstants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx");

export default noop.memo(function QuestDockUnenrolledBody() {
  questDockQuest = questDockQuest(isMobileActivityQuest[5]).useQuestDockQuest();
  const isRendered = setRestingQuestDockMode.useContext(hasWatchVideoOnMobileTasks(isMobileActivityQuest[6])).isRendered;
  const obj = questDockQuest(isMobileActivityQuest[5]);
  const tmp4 = hasWatchVideoOnMobileTasks;
  let isQuestDockExpanded = questDockQuest(isMobileActivityQuest[7]).useIsQuestDockExpanded();
  const obj3 = questDockQuest(isMobileActivityQuest[7]);
  const items = [isQuestAccessSuspended];
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
  const questOrbMultiplierEligibility = questDockQuest(isMobileActivityQuest[11]).useQuestOrbMultiplierEligibility();
  const obj8 = questDockQuest(isMobileActivityQuest[11]);
  const shouldShowBonusOrbsUX = questDockQuest(isMobileActivityQuest[10]).useShouldShowBonusOrbsUX(questDockQuest, questOrbMultiplierEligibility);
  let tmp12 = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    tmp12 = questOrbMultiplierEligibility === tmp(tmp2[12]).QuestOrbMultiplierEligibilityType.NITRO;
  }
  setRestingQuestDockMode = obj2.useContext(tmp(tmp2[13]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const obj9 = questDockQuest(isMobileActivityQuest[10]);
  isQuestAccessSuspended = questDockQuest(isMobileActivityQuest[10]).useIsQuestAccessSuspended();
  const tmpResult = questDockQuest(isMobileActivityQuest[10]);
  const trackQuestContentClickedWithImpression = questDockQuest(isMobileActivityQuest[14]).useTrackQuestContentClickedWithImpression();
  const items1 = [questDockQuest.id, hasWatchVideoOnMobileTasks, setRestingQuestDockMode, isMobileActivityQuest, launchMobileActivity, isQuestAccessSuspended, trackQuestContentClickedWithImpression];
  const callback = obj2.useCallback(launchMobileActivity(function*() {
    const v0 = 0;
    if (isQuestAccessSuspended) {
      trackQuestContentClickedWithImpression({ questId: questDockQuest.id, questContent: v0(5659).QuestContent.QUEST_BAR_MOBILE, questContentCTA: v0(7962).QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: v0(5659).QuestContent.QUEST_BAR_MOBILE });
      v2(15379)();
    }
    yield v0(11540).enrollInQuest(questDockQuest.id, { questContentCTA: v0(7962).QuestContentCTA.ACCEPT_QUEST, questContent: v0(5659).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: v0(5659).QuestContent.QUEST_BAR_MOBILE });
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
          v2(15385)({ questId: closure_128_0.id, sourceQuestContent: v0(5659).QuestContent.QUEST_BAR_MOBILE });
          closure_128_4(constants.COLLAPSED);
          v2(15385);
          { questId: closure_128_0.id, sourceQuestContent: v0(5659).QuestContent.QUEST_BAR_MOBILE };
        }
        dependencyMap = 3;
      }
    } else if (arg0 === 1) {
      dependencyMap = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_128_4(constants.COLLAPSED);
    }
    return value;
  }), items1);
  const tmpResult4 = questDockQuest(isMobileActivityQuest[14]);
  const primaryCtaCopy = questDockQuest(isMobileActivityQuest[20]).usePrimaryCtaCopy({ quest: questDockQuest, application: mobileActivityQuest.questApplication, shortText: true });
  const tmpResult5 = questDockQuest(isMobileActivityQuest[20]);
  const tmpResult6 = questDockQuest(isMobileActivityQuest[20]);
  const items2 = [questDockQuest];
  const questsInstructionsToWinReward = tmpResult6.useQuestsInstructionsToWinReward({ quest: questDockQuest, location: constants.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: questDockQuest(isMobileActivityQuest[15]).QuestContent.QUEST_BAR_MOBILE });
  const callback1 = obj2.useCallback(() => QuestUtils.getPrimaryCtaIcon(questDockQuest, true), items2);
  const obj10 = { quest: questDockQuest, location: constants.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: questDockQuest(isMobileActivityQuest[15]).QuestContent.QUEST_BAR_MOBILE };
  let tmp21 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp21 = !isRendered;
  }
  const obj11 = { paused: tmp21, quest: questDockQuest, withAnimation: null };
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const obj12 = { rewardTile: jsx(questDockQuest(isMobileActivityQuest[22]).QuestDockBodyQuestRewardTile, { paused: tmp21, quest: questDockQuest, withAnimation: null }), premiumRewardPerkPill: null, title: null, description: null, ctaText: null, onCtaPress: null, renderCtaIcon: null, ctaButtonVariant: "shiny", ctaLoading: null, showBonusOrbsGradient: null };
  obj11.withAnimation = isQuestDockExpanded;
  let tmp19Result;
  if (shouldShowBonusOrbsUX) {
    const obj13 = { questId: questDockQuest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
    tmp19Result = jsx(tmp(tmp2[23]).QuestOrbMultiplierPerkPill, { questId: questDockQuest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility });
  }
  obj12.premiumRewardPerkPill = tmp19Result;
  const intl = tmp(tmp2[24]).intl;
  obj12.title = intl.format(questDockQuest(isMobileActivityQuest[24]).t.EQa7os, { questName: questDockQuest.config.messages.questName });
  obj12.description = questsInstructionsToWinReward;
  obj12.ctaText = primaryCtaCopy;
  obj12.onCtaPress = callback;
  obj12.renderCtaIcon = callback1;
  obj12.ctaLoading = stateFromStores;
  obj12.showBonusOrbsGradient = tmp12;
  return jsx(tmp4(isMobileActivityQuest[22]), { rewardTile: jsx(questDockQuest(isMobileActivityQuest[22]).QuestDockBodyQuestRewardTile, { paused: tmp21, quest: questDockQuest, withAnimation: null }), premiumRewardPerkPill: null, title: null, description: null, ctaText: null, onCtaPress: null, renderCtaIcon: null, ctaButtonVariant: "shiny", ctaLoading: null, showBonusOrbsGradient: null });
});