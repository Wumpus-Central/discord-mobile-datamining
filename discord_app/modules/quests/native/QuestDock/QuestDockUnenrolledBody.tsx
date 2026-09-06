// discord_app/modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx
import QuestUtils from "../QuestUtils.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestStore from "../../QuestStore.tsx";

require = fn;
const QuestConstants = fn(5444);
({ QuestDockMode: metroRequire, QuestsExperimentLocations: closure_7 } = QuestConstants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx");

export default noop.memo(function QuestDockUnenrolledBody() {
  let obj = questDockQuest(isMobileActivityQuest[5]);
  questDockQuest = obj.useQuestDockQuest();
  let obj1 = setRestingQuestDockMode;
  const isRendered = setRestingQuestDockMode.useContext(hasWatchVideoOnMobileTasks(isMobileActivityQuest[6])).isRendered;
  let obj2 = questDockQuest(isMobileActivityQuest[7]);
  let isQuestDockExpanded = obj2.useIsQuestDockExpanded();
  let obj3 = questDockQuest(isMobileActivityQuest[8]);
  const items = [isQuestAccessSuspended];
  const stateFromStores = obj3.useStateFromStores(items, () => QuestStore.isEnrolling(questDockQuest.id));
  hasWatchVideoOnMobileTasks = questDockQuest(isMobileActivityQuest[9]).useHasWatchVideoOnMobileTasks(questDockQuest.config);
  const obj5 = questDockQuest(isMobileActivityQuest[9]);
  const tmp4 = hasWatchVideoOnMobileTasks;
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
  setRestingQuestDockMode = obj1.useContext(tmp(tmp2[13]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let tmpResult = tmp(tmp2[10]);
  isQuestAccessSuspended = tmpResult.useIsQuestAccessSuspended();
  tmpResult = tmp(tmp2[14]);
  const trackQuestContentClickedWithImpression = tmpResult.useTrackQuestContentClickedWithImpression();
  const items1 = [questDockQuest.id, hasWatchVideoOnMobileTasks, setRestingQuestDockMode, isMobileActivityQuest, launchMobileActivity, isQuestAccessSuspended, trackQuestContentClickedWithImpression];
  const callback = obj1.useCallback(launchMobileActivity(function*(arg0, value) {
    const v0 = 0;
    if (isQuestAccessSuspended) {
      trackQuestContentClickedWithImpression({ questId: questDockQuest.id, questContent: v0(5447).QuestContent.QUEST_BAR_MOBILE, questContentCTA: v0(7728).QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: v0(5447).QuestContent.QUEST_BAR_MOBILE });
      v2(15118)();
    }
    yield v0(11276).enrollInQuest(questDockQuest.id, { questContentCTA: v0(7728).QuestContentCTA.ACCEPT_QUEST, questContent: v0(5447).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: v0(5447).QuestContent.QUEST_BAR_MOBILE });
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
          v2(15124)({ questId: closure_128_0.id, sourceQuestContent: v0(5447).QuestContent.QUEST_BAR_MOBILE });
          closure_128_4(constants.COLLAPSED);
          v2(15124);
          { questId: closure_128_0.id, sourceQuestContent: v0(5447).QuestContent.QUEST_BAR_MOBILE };
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
  const obj9 = questDockQuest(isMobileActivityQuest[10]);
  const primaryCtaCopy = questDockQuest(isMobileActivityQuest[20]).usePrimaryCtaCopy({ quest: questDockQuest, application: mobileActivityQuest.questApplication, shortText: true });
  const tmpResult1 = questDockQuest(isMobileActivityQuest[20]);
  obj = { quest: questDockQuest, location: constants.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: tmp(tmp2[15]).QuestContent.QUEST_BAR_MOBILE };
  const items2 = [questDockQuest];
  const questsInstructionsToWinReward = questDockQuest(isMobileActivityQuest[20]).useQuestsInstructionsToWinReward(obj);
  const callback1 = obj1.useCallback(() => QuestUtils.getPrimaryCtaIcon(questDockQuest, true), items2);
  const tmpResult2 = questDockQuest(isMobileActivityQuest[20]);
  let tmp21 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp21 = !isRendered;
  }
  obj = { paused: tmp21, quest: questDockQuest, withAnimation: null };
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  obj1 = { rewardTile: tmp19(tmp(tmp2[22]).QuestDockBodyQuestRewardTile, obj), premiumRewardPerkPill: null, title: null, description: null, ctaText: null, onCtaPress: null, renderCtaIcon: null, ctaLoading: null, showBonusOrbsGradient: null };
  obj.withAnimation = isQuestDockExpanded;
  let tmp19Result;
  if (shouldShowBonusOrbsUX) {
    obj2 = { questId: questDockQuest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
    tmp19Result = tmp19(tmp(tmp2[23]).QuestOrbMultiplierPerkPill, obj2);
  }
  obj1.premiumRewardPerkPill = tmp19Result;
  const intl = tmp(tmp2[24]).intl;
  obj3 = { questName: questDockQuest.config.messages.questName };
  obj1.title = intl.format(questDockQuest(isMobileActivityQuest[24]).t.EQa7os, obj3);
  obj1.description = questsInstructionsToWinReward;
  obj1.ctaText = primaryCtaCopy;
  obj1.onCtaPress = callback;
  obj1.renderCtaIcon = callback1;
  obj1.ctaLoading = stateFromStores;
  obj1.showBonusOrbsGradient = tmp12;
  return jsx(tmp4(isMobileActivityQuest[22]), { rewardTile: tmp19(tmp(tmp2[22]).QuestDockBodyQuestRewardTile, obj), premiumRewardPerkPill: null, title: null, description: null, ctaText: null, onCtaPress: null, renderCtaIcon: null, ctaLoading: null, showBonusOrbsGradient: null });
});