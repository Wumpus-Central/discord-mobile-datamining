// === Module 16584: useQuestDockAcceptQuest ===

// Module 16584 (useQuestDockAcceptQuest)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 8404 */;

const require = globalThis.__r;

const require = fn;
const QuestDockMode = fn(6558).QuestDockMode;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/useQuestDockAcceptQuest.tsx");

export function useQuestDockAcceptQuest() {
  const questDockQuest = require("QuestDockCreativeContext").useQuestDockQuest();
  _require = questDockQuest;
  const obj = require("QuestDockCreativeContext");
  items = [isQuestAccessSuspended];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => QuestStore.isEnrolling(id.id));
  const obj2 = require("useStateFromStores");
  const hasWatchVideoOnMobileTasks = require("QuestHooks").useHasWatchVideoOnMobileTasks(questDockQuest.config);
  const obj3 = require("QuestHooks");
  const mobileActivityQuest = require("QuestHooks").useMobileActivityQuest(questDockQuest);
  isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  setRestingQuestDockMode = setRestingQuestDockMode.useContext(require("QuestDockExternalCoordinationContext").QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const obj4 = require("QuestHooks");
  isQuestAccessSuspended = require("hooks/QuestHooks").useIsQuestAccessSuspended();
  const obj5 = require("hooks/QuestHooks");
  const trackQuestContentClickedWithImpression = require("AnalyticsHooks").useTrackQuestContentClickedWithImpression();
  const obj6 = require("AnalyticsHooks");
  _require = undefined;
  const primaryCtaCopy = require("QuestCopyHooks").usePrimaryCtaCopy({ quest: questDockQuest, application: mobileActivityQuest.questApplication, shortText: true });
  _require = launchMobileActivity(function*(arg0) {
    c1 = 0;
    if (isQuestAccessSuspended) {
      trackQuestContentClickedWithImpression({ questId: id.id, questContent: id(isMobileActivityQuest[11]).QuestContent.QUEST_BAR_MOBILE, questContentCTA: id(isMobileActivityQuest[12]).QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: id(isMobileActivityQuest[11]).QuestContent.QUEST_BAR_MOBILE });
      hasWatchVideoOnMobileTasks(isMobileActivityQuest[13])();
    }
    yield closure_0(isMobileActivityQuest[14]).enrollInQuest(closure_0.id, { questContentCTA: tmp50, questContent: closure_0(isMobileActivityQuest[11]).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: closure_0(isMobileActivityQuest[11]).QuestContent.QUEST_BAR_MOBILE });
    if (1 === tmp4) {
      if (arg0 === 1) {
        let v3 = 3;
        throw value;
      } else if (arg0 === 2) {
        v3 = 3;
        return { value, done: true };
      } else {
        if (value.type === id(isMobileActivityQuest[14]).QuestEnrollmentResultType.SUCCESS) {
          if (c2) {
            c2 = 2;
            v3 = 1;
            return { value: v3(), done: false };
          } else if (c1) {
            hasWatchVideoOnMobileTasks(isMobileActivityQuest[15])({ questId: id.id, sourceQuestContent: id(isMobileActivityQuest[11]).QuestContent.QUEST_BAR_MOBILE });
            setRestingQuestDockMode(trackQuestContentClickedWithImpression.COLLAPSED);
            hasWatchVideoOnMobileTasks(isMobileActivityQuest[15]);
            { questId: id.id, sourceQuestContent: id(isMobileActivityQuest[11]).QuestContent.QUEST_BAR_MOBILE };
          }
        }
        v3 = 3;
      }
    } else if (arg0 === 1) {
      v3 = 3;
      throw value;
    } else if (arg0 !== 2) {
      setRestingQuestDockMode(trackQuestContentClickedWithImpression.COLLAPSED);
    }
    return value;
  });
  const items1 = [questDockQuest.id, hasWatchVideoOnMobileTasks, setRestingQuestDockMode, isMobileActivityQuest, launchMobileActivity, isQuestAccessSuspended, trackQuestContentClickedWithImpression];
  const obj7 = require("QuestCopyHooks");
  return {
    handleAcceptQuest: setRestingQuestDockMode.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items1),
    isEnrolling: stateFromStores,
    primaryCtaCopy
  };
}