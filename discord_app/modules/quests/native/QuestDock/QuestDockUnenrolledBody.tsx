import closure_3 from "QuestsExperimentLocations";
import importAllResult from "_manuallyStartConsoleQuest";
import { View } from "items";
import initializeState from "initializeState";
import QuestDockMode from "QuestDockMode";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import jsxProd from "QuestsVisibleMessagesChangedSource";
import createCacheKey from "createCacheKey";

let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
const require = arg1;
let c4 = importAllResult;
({ QuestDockMode: metroImportAll, QuestsExperimentLocations: c9 } = QuestsExperimentLocations);
const QUEST_DOCK_EXPANDED_PADDING_BOTTOM = QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { wrapper: { flexGrow: 1, flexShrink: 0, justifyContent: "flex-end", paddingHorizontal: QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM }, rewardContentWrapper: null, rewardContent: null, rewardContentCopy: null, premiumRewardPerkPill: null, titleRow: null, questDockRewardTile: null, questDockCtaWrapper: null, questDockCta: null, questDockCtaRow: null, questDockCtaSaparator: null };
obj = { borderRadius: require("Themes").modules.mobile.QUEST_DOCK_BORDER_RADIUS, overflow: "hidden", padding: 8, paddingRight: 16 };
obj[1] = obj;
obj[2] = { alignItems: "center", flexDirection: "row", gap: 16 };
obj[3] = { flexGrow: 1, flexShrink: 1, gap: 4 };
obj[4] = { alignSelf: "flex-start" };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, flexWrap: "wrap" };
obj[5] = createCacheKey;
obj[6] = { borderRadius: require("Themes").radii.lg };
obj[7] = { marginTop: 12, paddingHorizontal: 4, paddingTop: 16, position: "relative" };
let obj2 = { borderRadius: require("Themes").radii.lg };
obj[8] = { borderRadius: require("Themes").radii.round };
obj[9] = { alignSelf: "stretch" };
let obj3 = { borderRadius: require("Themes").radii.round };
obj[10] = { position: "absolute", left: -12, right: -12, top: 0, backgroundColor: require("Themes").colors.BORDER_SUBTLE, height: 1, opacity: 1 };
let closure_13 = createCacheKey.createStyles(obj);
let obj4 = { position: "absolute", left: -12, right: -12, top: 0, backgroundColor: require("Themes").colors.BORDER_SUBTLE, height: 1, opacity: 1 };
const memoResult = importAllResult.memo(function QuestDockUnenrolledBody() {
  let obj = questCreative(isMobileActivityQuest[10]);
  questCreative = obj.useQuestCreative();
  let obj1 = setRestingQuestDockMode;
  const isRendered = setRestingQuestDockMode.useContext(hasWatchVideoOnMobileTasks(isMobileActivityQuest[11])).isRendered;
  const tmp5 = callback2();
  let obj2 = questCreative(isMobileActivityQuest[12]);
  const items = [QuestDockMode];
  const stateFromStores = obj2.useStateFromStores(items, () => obj.prevRestingQuestDockMode === constants.EXPANDED);
  let obj3 = questCreative(isMobileActivityQuest[12]);
  const items1 = [initializeState];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => outer1_6.isEnrolling(questCreative.id));
  let obj4 = questCreative(isMobileActivityQuest[13]);
  hasWatchVideoOnMobileTasks = obj4.useHasWatchVideoOnMobileTasks(questCreative.config);
  let obj5 = questCreative(isMobileActivityQuest[14]);
  const questTaskDetails = obj5.useQuestTaskDetails(questCreative);
  let obj6 = questCreative(isMobileActivityQuest[13]);
  const mobileActivityQuest = obj6.useMobileActivityQuest(questCreative);
  isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  let obj7 = questCreative(isMobileActivityQuest[16]);
  const questOrbMultiplierEligibility = obj7.useQuestOrbMultiplierEligibility();
  let obj8 = questCreative(isMobileActivityQuest[14]);
  const shouldShowBonusOrbsUX = obj8.useShouldShowBonusOrbsUX(questCreative, questOrbMultiplierEligibility);
  let tmp13 = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    tmp13 = questOrbMultiplierEligibility === tmp(tmp2[17]).QuestOrbMultiplierEligibilityType.NITRO;
  }
  setRestingQuestDockMode = obj1.useContext(tmp(tmp2[18]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const items2 = [questCreative.id, hasWatchVideoOnMobileTasks, setRestingQuestDockMode, isMobileActivityQuest, launchMobileActivity];
  const callback = obj1.useCallback(launchMobileActivity(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp4;
            const obj1 = { questContentCTA: null, questContent: null, sourceQuestContent: null };
            obj1[0] = outer1_0(7095).QuestContentCTA.ACCEPT_QUEST;
            obj1[1] = outer1_0(5102).QuestContent.QUEST_BAR_MOBILE;
            obj1[2] = outer1_0(5102).QuestContent.QUEST_BAR_MOBILE;
            v0 = 1;
            dependencyMap = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = outer1_0(9627).enrollInQuest(outer1_0.id, obj1);
            return obj2;
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else if (dependencyMap) {
              v0 = 2;
              dependencyMap = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = outer1_3();
              return obj4;
            } else {
              if (v0) {
                const obj5 = { questId: null, sourceQuestContent: null };
                obj5[0] = outer1_0.id;
                obj5[1] = outer1_0(5102).QuestContent.QUEST_BAR_MOBILE;
                v0(14233)(obj5);
                outer1_4(outer1_8.COLLAPSED);
                const tmp12 = v0(14233);
              }
              dependencyMap = 3;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            callback(outer1_8.COLLAPSED);
          }
          dependencyMap = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp21) {
        dependencyMap = tmp;
        throw tmp21;
      }
    }
  }), items2);
  let tmpResult = tmp(tmp2[23]);
  const primaryCtaCopy = tmpResult.usePrimaryCtaCopy({ quest: questCreative, application: mobileActivityQuest.questApplication, shortText: true });
  tmpResult = tmp(tmp2[23]);
  obj = { quest: questCreative, location: constants.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: tmp(tmp2[21]).QuestContent.QUEST_BAR_MOBILE };
  const questsInstructionsToWinReward = tmpResult.useQuestsInstructionsToWinReward(obj);
  obj = { visible: tmp13, glow: true, style: null, children: null };
  const items3 = [tmp5.wrapper, ];
  obj1 = { paddingBottom: null };
  let tmp4Result = tmp4(tmp2[24]);
  obj1[0] = Math.max(hasWatchVideoOnMobileTasks(isMobileActivityQuest[15])().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM);
  items3[1] = obj1;
  obj[2] = items3;
  obj2 = { style: tmp5.rewardContentWrapper, children: null };
  const items4 = [callback(hasWatchVideoOnMobileTasks(isMobileActivityQuest[25]), {}), ];
  obj3 = { style: tmp5.rewardContent, children: null };
  let tmp22 = !stateFromStores;
  tmp4Result = tmp4(tmp2[26]);
  if (stateFromStores) {
    tmp22 = !isRendered;
  }
  obj4 = { paused: tmp22, height: 80, width: 80, quest: questCreative, style: tmp5.questDockRewardTile, withAnimation: null };
  let tmp23 = stateFromStores;
  if (stateFromStores) {
    tmp23 = isRendered;
  }
  obj4[5] = tmp23;
  const items5 = [callback(tmp4Result, obj4), ];
  obj5 = { style: tmp5.rewardContentCopy, children: null };
  let tmp20Result = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    obj6 = { style: null, children: null };
    obj6[0] = tmp5.premiumRewardPerkPill;
    obj7 = { questId: null, orbMultiplierEligibility: null };
    obj7[0] = questCreative.config.id;
    obj7[1] = questOrbMultiplierEligibility;
    obj6[1] = tmp20(tmp(tmp2[27]).QuestOrbMultiplierPerkPill, obj7);
    tmp20Result = tmp20(tmp19, obj6);
  }
  const items6 = [tmp20Result, , ];
  obj8 = { style: tmp5.titleRow, children: null };
  const obj9 = { variant: "heading-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl = tmp(tmp2[29]).intl;
  obj9[2] = intl.format(questCreative(isMobileActivityQuest[29]).t.EQa7os, { questName: questCreative.config.messages.questName });
  obj8[1] = callback(questCreative(isMobileActivityQuest[28]).Text, obj9);
  items6[1] = callback(View, obj8);
  items6[2] = callback(questCreative(isMobileActivityQuest[28]).Text, { color: "text-default", variant: "text-sm/normal", children: questsInstructionsToWinReward });
  obj5[1] = items6;
  items5[1] = closure_12(View, obj5);
  obj3[1] = items5;
  items4[1] = closure_12(View, obj3);
  obj2[1] = items4;
  const items7 = [closure_12(View, obj2), ];
  const obj11 = { style: tmp5.questDockCtaWrapper, children: null };
  const items8 = [callback(View, { style: tmp5.questDockCtaSaparator }), callback(View, { style: tmp5.questDockCtaRow, children: callback(questCreative(isMobileActivityQuest[30]).ShinyButton, obj14) })];
  obj11[1] = items8;
  items7[1] = closure_12(View, obj11);
  obj[3] = items7;
  return closure_12(tmp4Result, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx");

export default memoResult;