// === Module 15199: ? ===

// Module 15199
import closure_3 from "asyncGeneratorStep" /* 5 */;
import importAllResult from "noop" /* 19 */;
import closure_5 from "initializeState" /* 7703 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 5444 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c4 = importAllResult;
({ QuestDockMode: closure_6, QuestsExperimentLocations: error } = QuestsExperimentLocations);
const memoResult = importAllResult.memo(function QuestDockUnenrolledBody() {
  let obj = questDockQuest(isMobileActivityQuest[5]);
  questDockQuest = obj.useQuestDockQuest();
  obj1 = setRestingQuestDockMode;
  const isRendered = setRestingQuestDockMode.useContext(hasWatchVideoOnMobileTasks(isMobileActivityQuest[6])).isRendered;
  let obj2 = questDockQuest(isMobileActivityQuest[7]);
  let isQuestDockExpanded = obj2.useIsQuestDockExpanded();
  let obj3 = questDockQuest(isMobileActivityQuest[8]);
  const items = [isQuestAccessSuspended];
  const stateFromStores = obj3.useStateFromStores(items, () => isQuestAccessSuspended.isEnrolling(questDockQuest.id));
  hasWatchVideoOnMobileTasks = questDockQuest(isMobileActivityQuest[9]).useHasWatchVideoOnMobileTasks(questDockQuest.config);
  let obj5 = questDockQuest(isMobileActivityQuest[9]);
  const tmp4 = hasWatchVideoOnMobileTasks;
  const questTaskDetails = questDockQuest(isMobileActivityQuest[10]).useQuestTaskDetails(questDockQuest);
  let obj6 = questDockQuest(isMobileActivityQuest[10]);
  const mobileActivityQuest = questDockQuest(isMobileActivityQuest[9]).useMobileActivityQuest(questDockQuest);
  isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  let obj7 = questDockQuest(isMobileActivityQuest[9]);
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
  const callback = obj1.useCallback(launchMobileActivity(function*() {
    c0 = 0;
    if (closure_1_5) {
      obj1 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
      obj1[0] = closure_1_0.id;
      obj1[1] = closure_1_0(5447).QuestContent.QUEST_BAR_MOBILE;
      obj1[2] = closure_1_0(7728).QuestContentCTA.QUEST_ACCESS_SUSPENDED;
      obj1[3] = closure_1_0(5447).QuestContent.QUEST_BAR_MOBILE;
      closure_1_6(obj1);
      v0(15118)();
    }
    const obj4 = closure_1_0(11276);
    const obj3 = { questContentCTA: null, questContent: null, sourceQuestContent: null };
    obj3[0] = closure_1_0(7728).QuestContentCTA.ACCEPT_QUEST;
    obj3[1] = closure_1_0(5447).QuestContent.QUEST_BAR_MOBILE;
    obj3[2] = closure_1_0(5447).QuestContent.QUEST_BAR_MOBILE;
    yield obj4.enrollInQuest(closure_1_0.id, obj3);
    if (1 === tmp4) {
      if (arg0 === 1) {
        dependencyMap = 3;
        throw arg1;
      } else if (arg0 === 2) {
        dependencyMap = 3;
        const obj5 = { value: null, done: true };
        obj5[0] = arg1;
        return obj5;
      } else if (dependencyMap) {
        v0 = 2;
        dependencyMap = 1;
        const obj6 = { value: null, done: false };
        obj6[0] = closure_1_3();
        return obj6;
      } else {
        if (v0) {
          const obj7 = { questId: null, sourceQuestContent: null };
          obj7[0] = closure_1_0.id;
          obj7[1] = closure_1_0(5447).QuestContent.QUEST_BAR_MOBILE;
          v0(15124)(obj7);
          closure_1_4(closure_1_6.COLLAPSED);
          const tmp12 = v0(15124);
        }
        dependencyMap = 3;
      }
    } else if (arg0 === 1) {
      dependencyMap = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      callback(closure_1_6.COLLAPSED);
    }
    return arg1;
  }), items1);
  const obj9 = questDockQuest(isMobileActivityQuest[10]);
  const primaryCtaCopy = questDockQuest(isMobileActivityQuest[20]).usePrimaryCtaCopy({ quest: questDockQuest, application: mobileActivityQuest.questApplication, shortText: true });
  const tmpResult1 = questDockQuest(isMobileActivityQuest[20]);
  obj = { quest: questDockQuest, location: constants.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: tmp(tmp2[15]).QuestContent.QUEST_BAR_MOBILE };
  const items2 = [questDockQuest];
  const questsInstructionsToWinReward = questDockQuest(isMobileActivityQuest[20]).useQuestsInstructionsToWinReward(obj);
  const callback1 = obj1.useCallback(() => questDockQuest(isMobileActivityQuest[21]).getPrimaryCtaIcon(questDockQuest, true), items2);
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
  obj[2] = isQuestDockExpanded;
  let tmp19Result;
  if (shouldShowBonusOrbsUX) {
    obj2 = { questId: null, orbMultiplierEligibility: null };
    obj2[0] = questDockQuest.config.id;
    obj2[1] = questOrbMultiplierEligibility;
    tmp19Result = tmp19(tmp(tmp2[23]).QuestOrbMultiplierPerkPill, obj2);
  }
  obj1[1] = tmp19Result;
  const intl = tmp(tmp2[24]).intl;
  obj3 = { questName: questDockQuest.config.messages.questName };
  obj1[2] = intl.format(questDockQuest(isMobileActivityQuest[24]).t.EQa7os, obj3);
  obj1[3] = questsInstructionsToWinReward;
  obj1[4] = primaryCtaCopy;
  obj1[5] = callback;
  obj1[6] = callback1;
  obj1[7] = stateFromStores;
  obj1[8] = tmp12;
  return jsx(tmp4(isMobileActivityQuest[22]), { rewardTile: tmp19(tmp(tmp2[22]).QuestDockBodyQuestRewardTile, obj), premiumRewardPerkPill: null, title: null, description: null, ctaText: null, onCtaPress: null, renderCtaIcon: null, ctaLoading: null, showBonusOrbsGradient: null });
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx");

export default memoResult;