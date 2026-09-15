// === Module 17183: QuestProgressBottomSheet ===

// Module 17183 (QuestProgressBottomSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import QuestTypes from "QuestTypes" /* 5532 */;
import IconButton from "IconButton" /* 8205 */;
import showShareActionSheet from "showShareActionSheet" /* 8482 */;
import _modDef8799 from "module_8799" /* 8799 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9639 */;
import QuestCopyUtils from "QuestCopyUtils" /* 11433 */;
import QuestUtils from "QuestUtils" /* 11901 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9642 */;
import QuestStore from "QuestStore" /* 7808 */;

require = fn;
function contextMenuButton(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.icon = _modDef8799;
  obj.variant = "secondary-overlay";
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["UKOtz+"]);
  obj.size = "sm";
  return closure_1_11(IconButton.IconButton, obj);
}
function QuestProgressBottomSheet(quest) {
  quest = quest.quest;
  claim = undefined;
  const isScreenLandscape = quest(5210).useIsScreenLandscape();
  const tmp4 = closure_13(isScreenLandscape);
  let obj = quest(5210);
  let obj2 = quest(7275);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(quest(7829).getActivityApplicationId(quest));
  let id;
  let obj3 = quest(7829);
  if (getOrFetchApplication != null) {
    id = getOrFetchApplication.id;
  }
  const url = claim(9784)({ applicationId: id, size: 600, names: ["embedded_cover"] }).url;
  const tmp7 = claim(9784);
  const questTaskDetails = quest(11621).useQuestTaskDetails(quest);
  const intl = tmp(1115).intl;
  let obj4 = { questName: quest.config.messages.questName };
  let tmpResult = quest(11621);
  const formatToPlainStringResult = intl.formatToPlainString(quest(1115).t.EAYZAr, { questName: quest.config.messages.questName });
  const tmpResult4 = quest(11909);
  const userStatus = quest.userStatus;
  let completedAt;
  const questsInstructionsToWinReward = tmpResult4.useQuestsInstructionsToWinReward({ quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET, sourceQuestContent: quest(5532).QuestContent.RUNNING_ACTIVITY });
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmp14 = null != completedAt;
  if (tmp14) {
    const userStatus2 = quest.userStatus;
    let claimedAt;
    if (userStatus2 != null) {
      claimedAt = userStatus2.claimedAt;
    }
    tmp14 = null == claimedAt;
  }
  let obj5 = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET, sourceQuestContent: quest(5532).QuestContent.RUNNING_ACTIVITY };
  const isQuestAccessSuspended = quest(11621).useIsQuestAccessSuspended();
  const tmpResult5 = quest(11621);
  const tmpResult6 = quest(15213);
  const questRewardClaimHandler = tmpResult6.useQuestRewardClaimHandler({ quest, questContent: quest(5532).QuestContent.RUNNING_ACTIVITY, sourceQuestContent: quest(5532).QuestContent.RUNNING_ACTIVITY });
  ({ isClaiming, claim } = questRewardClaimHandler);
  const items = [claim];
  const items1 = [quest.id];
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp2;
            let mainFrame2;
            dependencyMap = 1;
            c3 = 1;
            const obj4 = { value: claim(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (value) {
            mainFrame2 = mainFrame.getMainFrame();
            if (null != mainFrame2) {
              tmp5(dependencyMap[23]).updateFramePanelMode(mainFrame2.id, constants.PIP);
              const obj = tmp5(dependencyMap[23]);
            }
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp19) {
        c3 = tmp;
        throw tmp19;
      }
    }
  }), items);
  let callback1 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const mainFrame = FramesStore.getMainFrame();
    if (null != mainFrame) {
      FramesActionCreatorsDefault.updateFramePanelMode(mainFrame.id, ActivityPanelModes.PIP);
      const tmpResult = FramesActionCreatorsDefault;
    }
    const obj3 = QuestUtils;
    obj3.openQuestHome({ scrollToQuestId: quest.id, fromContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET });
    const obj2 = { scrollToQuestId: quest.id, fromContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET };
  }, items1);
  const items2 = [quest.id];
  const callback2 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj3 = { message: null };
    const obj2 = showShareActionSheet;
    obj3.message = QuestCopyUtils.getQuestUrl(quest.id);
    obj2.showShareActionSheet(obj3);
  }, items2);
  const callback3 = noop.useCallback(() => {
    claim(dependencyMap[24]).hideActionSheet();
  }, []);
  const obj7 = { style: tmp4.heroContainer, children: null };
  let tmp24 = null != url;
  if (tmp24) {
    const obj8 = { source: null, style: null };
    const obj9 = { uri: url };
    obj8.source = obj9;
    obj8.style = tmp4.heroImg;
    tmp24 = closure_11(tmp6(5672), obj8);
  }
  const items3 = [tmp24, , , ];
  const obj10 = { style: tmp4.heroGradient, start: null, end: null, colors: null };
  const obj6 = { quest, questContent: quest(5532).QuestContent.RUNNING_ACTIVITY, sourceQuestContent: quest(5532).QuestContent.RUNNING_ACTIVITY };
  obj10.start = quest(1094).VerticalGradient.START;
  obj10.end = quest(1094).VerticalGradient.END;
  const items4 = ["rgba(0, 0, 0, 0)", closure_14().gradientEnd];
  obj10.colors = items4;
  items3[1] = closure_11(claim(5071), obj10);
  const obj11 = { style: tmp4.gameTileContainer, children: null };
  const size = { quest, height: null, width: null };
  let num = 80;
  let num2 = 80;
  const tmp6Result = claim(5071);
  if (isScreenLandscape) {
    num2 = 56;
  }
  size.height = num2;
  if (isScreenLandscape) {
    num = 56;
  }
  size.width = num;
  obj11.children = closure_11(claim(11904), size);
  items3[2] = closure_11(closure_5, obj11);
  const obj12 = { style: tmp4.contextMenuContainer, children: null };
  const obj13 = { icon: claim(9186), onPress: callback2, variant: "secondary-overlay", size: "sm", accessibilityLabel: null };
  const intl2 = tmp(1115).intl;
  obj13.accessibilityLabel = intl2.string(quest(1115).t.RDE0Sc);
  const items5 = [closure_11(quest(8205).IconButton, obj13), ];
  const obj14 = { quest, showShareLink: true, location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET, sourceQuestContent: null, children: null };
  const tmp6Result4 = claim(11904);
  obj14.sourceQuestContent = quest(5532).QuestContent.RUNNING_ACTIVITY;
  obj14.children = contextMenuButton;
  items5[1] = closure_11(claim(15242), obj14);
  obj12.children = items5;
  items3[3] = closure_12(closure_5, obj12);
  obj7.children = items3;
  const items6 = [closure_12(closure_5, obj7), ];
  const obj15 = { style: tmp4.contentContainer, children: null };
  const obj16 = { direction: "vertical", spacing: claim(576).space.PX_8, style: tmp4.textContainer, children: null };
  let str = "heading-lg/bold";
  if (isScreenLandscape) {
    str = "heading-md/bold";
  }
  const items7 = [closure_11(quest(4635).Text, { variant: str, color: "mobile-text-heading-primary", children: formatToPlainStringResult }), ];
  const obj17 = { style: tmp4.questDescription, variant: null, color: "text-muted", children: null };
  let str2 = "text-md/normal";
  if (isScreenLandscape) {
    str2 = "text-sm/normal";
  }
  obj17.variant = str2;
  obj17.children = questsInstructionsToWinReward;
  items7[1] = closure_11(quest(4635).Text, obj17);
  obj16.children = items7;
  const items8 = [closure_12(quest(5057).Stack, obj16), ];
  const obj18 = { direction: "vertical", spacing: claim(576).space.PX_12, style: tmp4.buttonsContainer, children: null };
  const intl3 = tmp(1115).intl;
  const t = tmp(1115).t;
  const obj19 = { size: "lg", text: intl3.string(tmp14 ? t.cfY4PE : t.LLLLPD), onPress: null, loading: null, grow: true, disabled: null, onPressDisabled: null };
  if (tmp14) {
    callback1 = callback;
  }
  obj19.onPress = callback1;
  if (!isClaiming) {
    isClaiming = questRewardClaimHandler.isLoading;
  }
  obj19.loading = isClaiming;
  let tmp30 = isQuestAccessSuspended;
  if (isQuestAccessSuspended) {
    tmp30 = tmp14;
  }
  obj19.disabled = tmp30;
  let tmp6Result6;
  if (isQuestAccessSuspended) {
    if (tmp14) {
      tmp6Result6 = tmp6(15209);
    }
  }
  const obj20 = { handleDisabled: true, startExpanded: true, children: null };
  obj19.onPressDisabled = tmp6Result6;
  const items9 = [closure_11(quest(5059).Button, obj19), ];
  const obj21 = { size: "lg", text: null, onPress: null, variant: "secondary", grow: true };
  const intl4 = tmp(1115).intl;
  obj21.text = intl4.string(quest(1115).t.cpT0Cq);
  obj21.onPress = callback3;
  items9[1] = closure_11(quest(5059).Button, obj21);
  obj18.children = items9;
  items8[1] = closure_12(quest(5057).Stack, obj18);
  obj15.children = items8;
  items6[1] = closure_12(closure_5, obj15);
  obj20.children = items6;
  return closure_12(quest(7257).BottomSheet, obj20);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5529).QuestsExperimentLocations;
const ActivityPanelModes = fn(9637).ActivityPanelModes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let createStyles = fn(4639);
let closure_13 = createStyles.createStyles((arg0) => {
  const obj = { contentContainer: { display: "flex", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, heroContainer: null, heroImg: null, heroGradient: null, gameTileContainer: null, contextMenuContainer: null, textContainer: null, questDescription: null, buttonsContainer: null };
  let num = 140;
  if (arg0) {
    num = 125;
  }
  const obj3 = { height: num, position: "relative", marginBottom: null };
  let num2 = 0;
  if (!arg0) {
    num2 = 52 + nativeDefault.space.PX_8;
  }
  obj3.marginBottom = num2;
  obj.heroContainer = obj3;
  const obj4 = { resizeMode: "cover" };
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj4.borderTopLeftRadius = nativeDefault.radii.lg;
  obj4.borderTopRightRadius = nativeDefault.radii.lg;
  obj.heroImg = obj4;
  const obj5 = {};
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj5.borderTopLeftRadius = nativeDefault.radii.lg;
  obj5.borderTopRightRadius = nativeDefault.radii.lg;
  obj.heroGradient = obj5;
  let num4 = -52;
  if (arg0) {
    num4 = nativeDefault.space.PX_12;
  }
  obj.gameTileContainer = { position: "absolute", bottom: num4, left: 0, right: 0, alignItems: "center" };
  const rect = { position: "absolute", top: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_16, alignItems: "center" };
  obj.contextMenuContainer = rect;
  let PX_16;
  if (!arg0) {
    PX_16 = nativeDefault.space.PX_16;
  }
  const obj2 = { display: "flex", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
  obj.textContainer = { alignItems: "center", paddingTop: PX_16, gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16, textAlign: "center" };
  obj.questDescription = { textAlign: "center" };
  let PX_161;
  if (!arg0) {
    PX_161 = nativeDefault.space.PX_16;
  }
  obj.buttonsContainer = { paddingTop: PX_161 };
  return obj;
});
createStyles = fn(4639);
let closure_14 = createStyles.createStyleProperties(() => ({ gradientEnd: nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT }));
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestProgressBottomSheet.tsx");

export default function QuestProgressBottomSheetConnected(questId) {
  questId = questId.questId;
  const items = [QuestStore];
  const stateFromStores = questId(504).useStateFromStores(items, () => QuestStore.getQuest(questId));
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent: tmp(5532).QuestContent.RUNNING_ACTIVITY,
      sourceQuestContent: tmp(5532).QuestContent.RUNNING_ACTIVITY,
      children() {
          return closure_2_11(QuestProgressBottomSheet, { quest: stateFromStores });
        }
    };
    tmp4 = closure_11(tmp(11912).QuestContentImpressionTrackerNative, obj2);
  }
  return tmp4;
};