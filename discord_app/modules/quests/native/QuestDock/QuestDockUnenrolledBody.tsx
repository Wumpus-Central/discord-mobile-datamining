// discord_app/modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx
import QuestTypes from "../../QuestTypes.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestUtils from "../QuestUtils.native.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestStore from "../../QuestStore.tsx";

const require = globalThis.__r;

require = fn;
const QuestConstants = fn(5979);
({ QuestDockMode: metroRequire, QuestsExperimentLocations: closure_7 } = QuestConstants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockUnenrolledBody() {
  const cResult = require("c").c(48);
  let obj = require("c");
  const questDockQuest = require("QuestDockCreativeContext").useQuestDockQuest();
  _require = questDockQuest;
  const isRendered = getQuestImpressionId.useContext(hasWatchVideoOnMobileTasks(isMobileActivityQuest[8])).isRendered;
  const obj2 = require("QuestDockCreativeContext");
  const obj3 = getQuestImpressionId;
  const isQuestDockExpanded = require("QuestDockHooks").useIsQuestDockExpanded();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [setRestingQuestDockMode];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== questDockQuest.id) {
    class Q {
      constructor() {
        return closure_5.isEnrolling(closure_0.id);
      }
    }
    cResult[1] = questDockQuest.id;
    cResult[2] = Q;
  } else {
    class Q {
      constructor() {
        return closure_5.isEnrolling(closure_0.id);
      }
    }
  }
  const obj4 = require("QuestDockHooks");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, Q);
  const tmpResult = require("useStateFromStores");
  hasWatchVideoOnMobileTasks = require("QuestHooks").useHasWatchVideoOnMobileTasks(questDockQuest.config);
  const tmpResult9 = require("QuestHooks");
  const questTaskDetails = require("hooks/QuestHooks").useQuestTaskDetails(questDockQuest);
  const tmpResult10 = require("hooks/QuestHooks");
  const mobileActivityQuest = require("QuestHooks").useMobileActivityQuest(questDockQuest);
  isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  ({ questApplication, launchMobileActivity } = mobileActivityQuest);
  const tmpResult11 = require("QuestHooks");
  getQuestImpressionId = require("ContentImpressionTrackerHooks").useGetQuestImpressionId();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class Q {
      constructor() {
        return closure_5.isEnrolling(closure_0.id);
      }
    }
    tmp15[0] = trackQuestContentClickedWithImpression.QUESTS_BAR_MOBILE;
    cResult[3] = tmp15;
  } else {
    class Q {
      constructor() {
        return closure_5.isEnrolling(closure_0.id);
      }
    }
  }
  const QuestMobileBarSecondaryCtaExperiment = tmp(tmp2[14]).QuestMobileBarSecondaryCtaExperiment;
  const enabled = QuestMobileBarSecondaryCtaExperiment.useConfig(tmp15).enabled;
  const tmpResult12 = require("ContentImpressionTrackerHooks");
  const questOrbMultiplierEligibility = require("QuestOrbMultiplierHooks").useQuestOrbMultiplierEligibility();
  const tmpResult13 = require("QuestOrbMultiplierHooks");
  const shouldShowBonusOrbsUX = require("hooks/QuestHooks").useShouldShowBonusOrbsUX(questDockQuest, questOrbMultiplierEligibility);
  if (shouldShowBonusOrbsUX) {
    class Q {
      constructor() {
        return closure_5.isEnrolling(closure_0.id);
      }
    }
  }
  setRestingQuestDockMode = obj3.useContext(tmp(tmp2[17]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const tmpResult14 = require("hooks/QuestHooks");
  const isQuestAccessSuspended = require("hooks/QuestHooks").useIsQuestAccessSuspended();
  const tmpResult15 = require("hooks/QuestHooks");
  trackQuestContentClickedWithImpression = require("AnalyticsHooks").useTrackQuestContentClickedWithImpression();
  if (cResult[4] === isMobileActivityQuest) {
    class Q {
      constructor() {
        return closure_5.isEnrolling(closure_0.id);
      }
    }
  }
  _require = launchMobileActivity(function*() {
    const v0 = 0;
    if (closure_1_6) {
      trackQuestContentClickedWithImpression({ questId: v0.id, questContent: v0(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE, questContentCTA: v0(isMobileActivityQuest[20]).QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: v0(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE });
      hasWatchVideoOnMobileTasks(isMobileActivityQuest[21])();
    }
    yield v0(isMobileActivityQuest[22]).enrollInQuest(v0.id, { questContentCTA: v0(isMobileActivityQuest[20]).QuestContentCTA.ACCEPT_QUEST, questContent: v0(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: v0(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE });
    if (1 === tmp4) {
      if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        return { value, done: true };
      } else if (c2) {
        c1 = 2;
        c2 = 1;
        return { value: launchMobileActivity(), done: false };
      } else {
        if (c1) {
          hasWatchVideoOnMobileTasks(isMobileActivityQuest[23])({ questId: v0.id, sourceQuestContent: v0(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE });
          setRestingQuestDockMode(isQuestAccessSuspended.COLLAPSED);
          hasWatchVideoOnMobileTasks(isMobileActivityQuest[23]);
          { questId: v0.id, sourceQuestContent: v0(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE };
        }
        c2 = 3;
      }
    } else if (arg0 === 1) {
      c2 = 3;
      throw value;
    } else if (arg0 !== 2) {
      setRestingQuestDockMode(isQuestAccessSuspended.COLLAPSED);
    }
    return value;
  });
  function t3() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[4] = isMobileActivityQuest;
  cResult[5] = isQuestAccessSuspended;
  cResult[6] = launchMobileActivity;
  cResult[7] = questDockQuest.id;
  cResult[8] = setRestingQuestDockMode;
  cResult[9] = hasWatchVideoOnMobileTasks;
  cResult[10] = trackQuestContentClickedWithImpression;
  cResult[11] = t3;
  const tmpResult16 = require("AnalyticsHooks");
}) : (function QuestDockUnenrolledBody() {
  questDockQuest = questDockQuest(isMobileActivityQuest[7]).useQuestDockQuest();
  const isRendered = getQuestImpressionId.useContext(hasWatchVideoOnMobileTasks(isMobileActivityQuest[8])).isRendered;
  let obj = questDockQuest(isMobileActivityQuest[7]);
  let isQuestDockExpanded = questDockQuest(isMobileActivityQuest[9]).useIsQuestDockExpanded();
  const obj3 = questDockQuest(isMobileActivityQuest[9]);
  const items = [setRestingQuestDockMode];
  const stateFromStores = questDockQuest(isMobileActivityQuest[10]).useStateFromStores(items, () => QuestStore.isEnrolling(questDockQuest.id));
  const obj4 = questDockQuest(isMobileActivityQuest[10]);
  hasWatchVideoOnMobileTasks = questDockQuest(isMobileActivityQuest[11]).useHasWatchVideoOnMobileTasks(questDockQuest.config);
  const obj5 = questDockQuest(isMobileActivityQuest[11]);
  const questTaskDetails = questDockQuest(isMobileActivityQuest[12]).useQuestTaskDetails(questDockQuest);
  const obj6 = questDockQuest(isMobileActivityQuest[12]);
  const mobileActivityQuest = questDockQuest(isMobileActivityQuest[11]).useMobileActivityQuest(questDockQuest);
  isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  const obj7 = questDockQuest(isMobileActivityQuest[11]);
  getQuestImpressionId = questDockQuest(isMobileActivityQuest[13]).useGetQuestImpressionId();
  const QuestMobileBarSecondaryCtaExperiment = questDockQuest(isMobileActivityQuest[14]).QuestMobileBarSecondaryCtaExperiment;
  const obj8 = questDockQuest(isMobileActivityQuest[13]);
  const obj9 = { location: trackQuestContentClickedWithImpression.QUESTS_BAR_MOBILE };
  const tmp11 = trackQuestContentClickedWithImpression;
  const questOrbMultiplierEligibility = questDockQuest(isMobileActivityQuest[15]).useQuestOrbMultiplierEligibility();
  const obj10 = questDockQuest(isMobileActivityQuest[15]);
  const shouldShowBonusOrbsUX = questDockQuest(isMobileActivityQuest[12]).useShouldShowBonusOrbsUX(questDockQuest, questOrbMultiplierEligibility);
  let tmp14 = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    tmp14 = questOrbMultiplierEligibility === tmp(tmp2[16]).QuestOrbMultiplierEligibilityType.NITRO;
  }
  setRestingQuestDockMode = obj2.useContext(tmp(tmp2[17]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const obj11 = questDockQuest(isMobileActivityQuest[12]);
  const isQuestAccessSuspended = questDockQuest(isMobileActivityQuest[12]).useIsQuestAccessSuspended();
  const tmpResult = questDockQuest(isMobileActivityQuest[12]);
  trackQuestContentClickedWithImpression = questDockQuest(isMobileActivityQuest[18]).useTrackQuestContentClickedWithImpression();
  const items1 = [questDockQuest.id, hasWatchVideoOnMobileTasks, setRestingQuestDockMode, isMobileActivityQuest, launchMobileActivity, isQuestAccessSuspended, trackQuestContentClickedWithImpression];
  const callback = obj2.useCallback(launchMobileActivity(function*() {
    const v0 = 0;
    if (isQuestAccessSuspended) {
      trackQuestContentClickedWithImpression({ questId: questDockQuest.id, questContent: v0(5982).QuestContent.QUEST_BAR_MOBILE, questContentCTA: v0(7409).QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: v0(5982).QuestContent.QUEST_BAR_MOBILE });
      v2(15311)();
    }
    yield v0(9150).enrollInQuest(questDockQuest.id, { questContentCTA: v0(7409).QuestContentCTA.ACCEPT_QUEST, questContent: v0(5982).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: v0(5982).QuestContent.QUEST_BAR_MOBILE });
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
          v2(15318)({ questId: closure_128_0.id, sourceQuestContent: v0(5982).QuestContent.QUEST_BAR_MOBILE });
          closure_128_5(constants.COLLAPSED);
          v2(15318);
          { questId: closure_128_0.id, sourceQuestContent: v0(5982).QuestContent.QUEST_BAR_MOBILE };
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
  const tmpResult5 = questDockQuest(isMobileActivityQuest[18]);
  const primaryCtaCopy = questDockQuest(isMobileActivityQuest[24]).usePrimaryCtaCopy({ quest: questDockQuest, application: mobileActivityQuest.questApplication, shortText: true });
  const tmpResult6 = questDockQuest(isMobileActivityQuest[24]);
  const tmpResult7 = questDockQuest(isMobileActivityQuest[24]);
  const items2 = [questDockQuest];
  const questsInstructionsToWinReward = tmpResult7.useQuestsInstructionsToWinReward({ quest: questDockQuest, location: tmp11.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: questDockQuest(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE });
  const items3 = [questDockQuest, getQuestImpressionId];
  const callback1 = obj2.useCallback(() => QuestUtils.getPrimaryCtaIcon(questDockQuest, true), items2);
  const callback2 = obj2.useCallback(() => {
    const obj = QuestPlatformUtils;
    obj.openGameLinkDirectly(questDockQuest, { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
  }, items3);
  const obj12 = { quest: questDockQuest, location: tmp11.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: questDockQuest(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE };
  let tmp24 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp24 = !isRendered;
  }
  const obj13 = { paused: tmp24, quest: questDockQuest, withAnimation: null };
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const obj14 = { rewardTile: jsx(questDockQuest(isMobileActivityQuest[27]).QuestDockBodyQuestRewardTile, { paused: tmp24, quest: questDockQuest, withAnimation: null }), premiumRewardPerkPill: null, title: null, description: null, ctaText: null, onCtaPress: null, renderCtaIcon: null, ctaButtonVariant: "shiny", ctaLoading: null, showBonusOrbsGradient: null, secondaryCta: null };
  obj13.withAnimation = isQuestDockExpanded;
  let tmp22Result;
  if (shouldShowBonusOrbsUX) {
    const obj15 = { questId: questDockQuest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
    tmp22Result = jsx(tmp(tmp2[28]).QuestOrbMultiplierPerkPill, { questId: questDockQuest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility });
  }
  obj14.premiumRewardPerkPill = tmp22Result;
  const intl = tmp(tmp2[29]).intl;
  obj14.title = intl.format(questDockQuest(isMobileActivityQuest[29]).t.EQa7os, { questName: questDockQuest.config.messages.questName });
  obj14.description = questsInstructionsToWinReward;
  obj14.ctaText = primaryCtaCopy;
  obj14.onCtaPress = callback;
  obj14.renderCtaIcon = callback1;
  obj14.ctaLoading = stateFromStores;
  obj14.showBonusOrbsGradient = tmp14;
  let tmp22Result2;
  if (QuestMobileBarSecondaryCtaExperiment.useConfig(obj9).enabled) {
    const obj17 = { variant: "secondary", size: "md", icon: tmp4(tmp2[31]), accessibilityLabel: tmp(tmp2[32]).getExternalCtaLabel(questDockQuest), onPress: callback2 };
    tmp22Result2 = jsx(tmp(tmp2[30]).IconButton, { variant: "secondary", size: "md", icon: tmp4(tmp2[31]), accessibilityLabel: tmp(tmp2[32]).getExternalCtaLabel(questDockQuest), onPress: callback2 });
    const tmpResult8 = tmp(tmp2[32]);
  }
  obj14.secondaryCta = tmp22Result2;
  return jsx(hasWatchVideoOnMobileTasks(isMobileActivityQuest[27]), { rewardTile: jsx(questDockQuest(isMobileActivityQuest[27]).QuestDockBodyQuestRewardTile, { paused: tmp24, quest: questDockQuest, withAnimation: null }), premiumRewardPerkPill: null, title: null, description: null, ctaText: null, onCtaPress: null, renderCtaIcon: null, ctaButtonVariant: "shiny", ctaLoading: null, showBonusOrbsGradient: null, secondaryCta: null });
}));