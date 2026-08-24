// discord_app/modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../QuestStore.tsx";
import closure_7 from "QuestDockStore.tsx";
import QuestsExperimentLocations from "../../QuestConstants.tsx";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QuestDockConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c4 = importAllResult;
({ QuestDockMode: closure_8, QuestsExperimentLocations: c9 } = QuestsExperimentLocations);
const QUEST_DOCK_EXPANDED_PADDING_BOTTOM = QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { wrapper: { flexGrow: 1, flexShrink: 0, justifyContent: "flex-end", paddingHorizontal: QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM }, rewardContentWrapper: null, rewardContent: null, rewardContentCopy: null, premiumRewardPerkPill: null, titleRow: null, questDockRewardTile: null, questDockCtaWrapper: null, questDockCta: null, questDockCtaRow: null, questDockCtaSaparator: null };
obj = { borderRadius: ThemesDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS, overflow: "hidden", padding: 8, paddingRight: 16 };
obj[1] = obj;
obj[2] = { alignItems: "center", flexDirection: "row", gap: 16 };
obj[3] = { flexGrow: 1, flexShrink: 1, gap: 4 };
obj[4] = { alignSelf: "flex-start" };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, flexWrap: "wrap" };
obj[5] = createCacheKey;
obj[6] = { borderRadius: ThemesDefault.radii.lg };
obj[7] = { marginTop: 12, paddingHorizontal: 4, paddingTop: 16, position: "relative" };
let obj2 = { borderRadius: ThemesDefault.radii.lg };
obj[8] = { borderRadius: ThemesDefault.radii.round };
obj[9] = { alignSelf: "stretch" };
let obj3 = { borderRadius: ThemesDefault.radii.round };
obj[10] = { position: "absolute", left: -12, right: -12, top: 0, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: 1, opacity: 1 };
let closure_13 = createCacheKey.createStyles(obj);
let obj4 = { position: "absolute", left: -12, right: -12, top: 0, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: 1, opacity: 1 };
const memoResult = importAllResult.memo(function QuestDockUnenrolledBody() {
  let obj = questCreative(isMobileActivityQuest[10]);
  questCreative = obj.useQuestCreative();
  obj1 = setRestingQuestDockMode;
  const isRendered = setRestingQuestDockMode.useContext(hasWatchVideoOnMobileTasks(isMobileActivityQuest[11])).isRendered;
  const tmp5 = callback2();
  let obj2 = questCreative(isMobileActivityQuest[12]);
  const items = [closure_7];
  const stateFromStores = obj2.useStateFromStores(items, () => obj.prevRestingQuestDockMode === constants.EXPANDED);
  let obj3 = questCreative(isMobileActivityQuest[12]);
  const items1 = [trackQuestContentClickedWithImpression];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => trackQuestContentClickedWithImpression.isEnrolling(questCreative.id));
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
  let tmpResult = tmp(tmp2[14]);
  const isQuestAccessSuspended = tmpResult.useIsQuestAccessSuspended();
  tmpResult = tmp(tmp2[19]);
  trackQuestContentClickedWithImpression = tmpResult.useTrackQuestContentClickedWithImpression();
  const items2 = [questCreative.id, hasWatchVideoOnMobileTasks, setRestingQuestDockMode, isMobileActivityQuest, launchMobileActivity, isQuestAccessSuspended, trackQuestContentClickedWithImpression];
  const callback = obj1.useCallback(launchMobileActivity(function*() {
    c0 = 0;
    if (closure_1_5) {
      obj1 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
      obj1[0] = closure_1_0.id;
      obj1[1] = closure_1_0(6756).QuestContent.QUEST_BAR_MOBILE;
      obj1[2] = closure_1_0(7518).QuestContentCTA.QUEST_ACCESS_SUSPENDED;
      obj1[3] = closure_1_0(6756).QuestContent.QUEST_BAR_MOBILE;
      closure_1_6(obj1);
      v0(14538)();
    }
    const obj4 = closure_1_0(10516);
    const obj3 = { questContentCTA: null, questContent: null, sourceQuestContent: null };
    obj3[0] = closure_1_0(7518).QuestContentCTA.ACCEPT_QUEST;
    obj3[1] = closure_1_0(6756).QuestContent.QUEST_BAR_MOBILE;
    obj3[2] = closure_1_0(6756).QuestContent.QUEST_BAR_MOBILE;
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
          obj7[1] = closure_1_0(6756).QuestContent.QUEST_BAR_MOBILE;
          v0(14544)(obj7);
          closure_1_4(closure_1_8.COLLAPSED);
          const tmp12 = v0(14544);
        }
        dependencyMap = 3;
      }
    } else if (arg0 === 1) {
      dependencyMap = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      callback(closure_1_8.COLLAPSED);
    }
    return arg1;
  }), items2);
  const primaryCtaCopy = questCreative(isMobileActivityQuest[25]).usePrimaryCtaCopy({ quest: questCreative, application: mobileActivityQuest.questApplication, shortText: true });
  const tmpResult1 = questCreative(isMobileActivityQuest[25]);
  obj = { quest: questCreative, location: constants.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: tmp(tmp2[20]).QuestContent.QUEST_BAR_MOBILE };
  const questsInstructionsToWinReward = questCreative(isMobileActivityQuest[25]).useQuestsInstructionsToWinReward(obj);
  obj = { visible: tmp13, glow: true, style: null, children: null };
  const items3 = [tmp5.wrapper, ];
  obj1 = { paddingBottom: null };
  let tmp4Result = tmp4(tmp2[26]);
  obj1[0] = Math.max(hasWatchVideoOnMobileTasks(isMobileActivityQuest[15])().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM);
  items3[1] = obj1;
  obj[2] = items3;
  obj2 = { style: tmp5.rewardContentWrapper, children: null };
  const items4 = [callback(hasWatchVideoOnMobileTasks(isMobileActivityQuest[27]), {}), ];
  obj3 = { style: tmp5.rewardContent, children: null };
  let tmp24 = !stateFromStores;
  tmp4Result = tmp4(tmp2[28]);
  if (stateFromStores) {
    tmp24 = !isRendered;
  }
  obj4 = { paused: tmp24, height: 80, width: 80, quest: questCreative, style: tmp5.questDockRewardTile, withAnimation: null };
  let tmp25 = stateFromStores;
  if (stateFromStores) {
    tmp25 = isRendered;
  }
  obj4[5] = tmp25;
  const items5 = [callback(tmp4Result, obj4), ];
  obj5 = { style: tmp5.rewardContentCopy, children: null };
  let tmp22Result = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    obj6 = { style: null, children: null };
    obj6[0] = tmp5.premiumRewardPerkPill;
    obj7 = { questId: null, orbMultiplierEligibility: null };
    obj7[0] = questCreative.config.id;
    obj7[1] = questOrbMultiplierEligibility;
    obj6[1] = tmp22(tmp(tmp2[29]).QuestOrbMultiplierPerkPill, obj7);
    tmp22Result = tmp22(tmp21, obj6);
  }
  const items6 = [tmp22Result, , ];
  obj8 = { style: tmp5.titleRow, children: null };
  const obj9 = { variant: "heading-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl = tmp(tmp2[31]).intl;
  obj9[2] = intl.format(questCreative(isMobileActivityQuest[31]).t.EQa7os, { questName: questCreative.config.messages.questName });
  obj8[1] = callback(questCreative(isMobileActivityQuest[30]).Text, obj9);
  items6[1] = callback(isQuestAccessSuspended, obj8);
  items6[2] = callback(questCreative(isMobileActivityQuest[30]).Text, { color: "text-default", variant: "text-sm/normal", children: questsInstructionsToWinReward });
  obj5[1] = items6;
  items5[1] = closure_12(isQuestAccessSuspended, obj5);
  obj3[1] = items5;
  items4[1] = closure_12(isQuestAccessSuspended, obj3);
  obj2[1] = items4;
  const items7 = [closure_12(isQuestAccessSuspended, obj2), ];
  const obj11 = { style: tmp5.questDockCtaWrapper, children: null };
  const items8 = [callback(isQuestAccessSuspended, { style: tmp5.questDockCtaSaparator }), ];
  const obj10 = { questName: questCreative.config.messages.questName };
  const obj12 = { style: tmp5.questDockCtaSaparator };
  const tmpResult2 = questCreative(isMobileActivityQuest[25]);
  items8[1] = callback(isQuestAccessSuspended, { style: tmp5.questDockCtaRow, children: callback(questCreative(isMobileActivityQuest[32]).ShinyButton, obj14) });
  obj11[1] = items8;
  items7[1] = closure_12(isQuestAccessSuspended, obj11);
  obj[3] = items7;
  return closure_12(tmp4Result, obj);
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx");

export default memoResult;