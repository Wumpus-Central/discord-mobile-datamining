// discord_app/modules/quests/native/QuestProgressBottomSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import QuestTypes from "../QuestTypes.tsx";
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import showShareActionSheet from "../../action_sheet/native/showShareActionSheet.tsx";
import _modDef8673 from "../../../../_runtime/metro/08673__.js";
import FramesActionCreatorsDefault from "../../frames/FramesActionCreators.native.tsx";
import QuestCopyUtils from "../utils/QuestCopyUtils.tsx";
import QuestUtils from "QuestUtils.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import FramesStore from "../../frames/FramesStore.tsx";
import QuestStore from "../QuestStore.tsx";

require = fn;
function contextMenuButton(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.icon = _modDef8673;
  obj.variant = "secondary-overlay";
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["UKOtz+"]);
  obj.size = "sm";
  return closure_1_11(IconButton.IconButton, obj);
}
function QuestProgressBottomSheet(quest) {
  quest = quest.quest;
  claim = undefined;
  let obj = quest(5126);
  const isScreenLandscape = obj.useIsScreenLandscape();
  const tmp4 = closure_13(isScreenLandscape);
  let obj1 = quest(7168);
  let obj2 = quest(7724);
  const getOrFetchApplication = obj1.useGetOrFetchApplication(obj2.getActivityApplicationId(quest));
  let id;
  if (getOrFetchApplication != null) {
    id = getOrFetchApplication.id;
  }
  const url = claim(9652)({ applicationId: id, size: 600, names: ["embedded_cover"] }).url;
  let tmpResult = tmp(11483);
  const questTaskDetails = tmpResult.useQuestTaskDetails(quest);
  const intl = tmp(1114).intl;
  obj = { questName: quest.config.messages.questName };
  const tmp7 = claim(9652);
  tmpResult = tmp(11775);
  obj = {
    quest,
    taskDetails: questTaskDetails,
    location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET,
    sourceQuestContent: tmp(5447).QuestContent.RUNNING_ACTIVITY,
  };
  const userStatus = quest.userStatus;
  let completedAt;
  const questsInstructionsToWinReward = tmpResult.useQuestsInstructionsToWinReward(obj);
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
  const formatToPlainStringResult = intl.formatToPlainString(quest(1114).t.EAYZAr, obj);
  const isQuestAccessSuspended = quest(11483).useIsQuestAccessSuspended();
  const tmpResult1 = quest(11483);
  obj1 = {
    quest,
    questContent: tmp(5447).QuestContent.RUNNING_ACTIVITY,
    sourceQuestContent: tmp(5447).QuestContent.RUNNING_ACTIVITY,
  };
  const questRewardClaimHandler = quest(15122).useQuestRewardClaimHandler(obj1);
  ({ isClaiming, claim } = questRewardClaimHandler);
  const items = [claim];
  const items1 = [quest.id];
  const callback = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp2;
              let mainFrame2;
              c2 = 1;
              c3 = 1;
              const obj1 = { value: claim(), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            if (value) {
              mainFrame2 = mainFrame.getMainFrame();
              if (null != mainFrame2) {
                obj = tmp5(c2[23]);
                obj.updateFramePanelMode(mainFrame2.id, constants.PIP);
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
    }),
    items,
  );
  let callback1 = noop.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const mainFrame = FramesStore.getMainFrame();
    if (null != mainFrame) {
      FramesActionCreatorsDefault.updateFramePanelMode(mainFrame.id, ActivityPanelModes.PIP);
      const tmpResult = FramesActionCreatorsDefault;
    }
    obj = { scrollToQuestId: quest.id, fromContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET };
    QuestUtils.openQuestHome(obj);
  }, items1);
  const items2 = [quest.id];
  const callback2 = noop.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    obj = { message: null };
    const obj2 = showShareActionSheet;
    obj.message = QuestCopyUtils.getQuestUrl(quest.id);
    obj2.showShareActionSheet(obj);
  }, items2);
  const callback3 = noop.useCallback(() => {
    claim(dependencyMap[24]).hideActionSheet();
  }, []);
  obj2 = { style: tmp4.heroContainer, children: null };
  let tmp24 = null != url;
  if (tmp24) {
    let obj3 = { source: null, style: null };
    const obj4 = { uri: url };
    obj3.source = obj4;
    obj3.style = tmp4.heroImg;
    tmp24 = closure_11(tmp6(5587), obj3);
  }
  const items3 = [tmp24, , ,];
  const obj5 = { style: tmp4.heroGradient, start: null, end: null, colors: null };
  let tmp6Result = tmp6(4987);
  obj5.start = quest(1093).VerticalGradient.START;
  obj5.end = quest(1093).VerticalGradient.END;
  const items4 = ["rgba(0, 0, 0, 0)", closure_14().gradientEnd];
  obj5.colors = items4;
  items3[1] = closure_11(tmp6Result, obj5);
  const obj6 = { style: tmp4.gameTileContainer, children: null };
  const size = { quest, height: null, width: null };
  let num = 80;
  let num2 = 80;
  tmp6Result = tmp6(11770);
  if (isScreenLandscape) {
    num2 = 56;
  }
  size.height = num2;
  if (isScreenLandscape) {
    num = 56;
  }
  size.width = num;
  obj6.children = closure_11(tmp6Result, size);
  items3[2] = closure_11(closure_5, obj6);
  const obj7 = { style: tmp4.contextMenuContainer, children: null };
  const obj8 = {
    icon: claim(9054),
    onPress: callback2,
    variant: "secondary-overlay",
    size: "sm",
    accessibilityLabel: null,
  };
  const intl2 = tmp(1114).intl;
  obj8.accessibilityLabel = intl2.string(quest(1114).t.RDE0Sc);
  const items5 = [closure_11(quest(8097).IconButton, obj8)];
  const obj9 = {
    quest,
    showShareLink: true,
    location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET,
    sourceQuestContent: null,
    children: null,
  };
  const tmpResult2 = quest(15122);
  obj9.sourceQuestContent = quest(5447).QuestContent.RUNNING_ACTIVITY;
  obj9.children = contextMenuButton;
  items5[1] = closure_11(claim(15151), obj9);
  obj7.children = items5;
  items3[3] = closure_12(closure_5, obj7);
  obj2.children = items3;
  const items6 = [closure_12(closure_5, obj2)];
  const obj10 = { style: tmp4.contentContainer, children: null };
  const obj11 = { direction: "vertical", spacing: claim(576).space.PX_8, style: tmp4.textContainer, children: null };
  let str = "heading-lg/bold";
  if (isScreenLandscape) {
    str = "heading-md/bold";
  }
  const items7 = [
    closure_11(quest(4556).Text, {
      variant: str,
      color: "mobile-text-heading-primary",
      children: formatToPlainStringResult,
    }),
  ];
  const obj12 = { style: tmp4.questDescription, variant: null, color: "text-muted", children: null };
  let str2 = "text-md/normal";
  if (isScreenLandscape) {
    str2 = "text-sm/normal";
  }
  obj12.variant = str2;
  obj12.children = questsInstructionsToWinReward;
  items7[1] = closure_11(quest(4556).Text, obj12);
  obj11.children = items7;
  const items8 = [closure_12(quest(4973).Stack, obj11)];
  const obj13 = {
    direction: "vertical",
    spacing: claim(576).space.PX_12,
    style: tmp4.buttonsContainer,
    children: null,
  };
  const intl3 = tmp(1114).intl;
  const t = tmp(1114).t;
  const obj14 = {
    size: "lg",
    text: intl3.string(tmp14 ? t.cfY4PE : t.LLLLPD),
    onPress: null,
    loading: null,
    grow: true,
    disabled: null,
    onPressDisabled: null,
  };
  if (tmp14) {
    callback1 = callback;
  }
  obj14.onPress = callback1;
  if (!isClaiming) {
    isClaiming = questRewardClaimHandler.isLoading;
  }
  obj14.loading = isClaiming;
  let tmp30 = isQuestAccessSuspended;
  if (isQuestAccessSuspended) {
    tmp30 = tmp14;
  }
  obj14.disabled = tmp30;
  let tmp6Result2;
  if (isQuestAccessSuspended) {
    if (tmp14) {
      tmp6Result2 = tmp6(15118);
    }
  }
  const obj15 = { handleDisabled: true, startExpanded: true, children: null };
  obj14.onPressDisabled = tmp6Result2;
  const items9 = [closure_11(quest(4975).Button, obj14)];
  const obj16 = { size: "lg", text: null, onPress: null, variant: "secondary", grow: true };
  const intl4 = tmp(1114).intl;
  obj16.text = intl4.string(quest(1114).t.cpT0Cq);
  obj16.onPress = callback3;
  items9[1] = closure_11(quest(4975).Button, obj16);
  obj13.children = items9;
  items8[1] = closure_12(quest(4973).Stack, obj13);
  obj10.children = items8;
  items6[1] = closure_12(closure_5, obj10);
  obj15.children = items6;
  return closure_12(quest(7150).BottomSheet, obj15);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const ActivityPanelModes = fn(9505).ActivityPanelModes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let createStyles = fn(4560);
let closure_13 = createStyles.createStyles((arg0) => {
  let obj = {
    contentContainer: null,
    heroContainer: null,
    heroImg: null,
    heroGradient: null,
    gameTileContainer: null,
    contextMenuContainer: null,
    textContainer: null,
    questDescription: null,
    buttonsContainer: null,
  };
  obj = { display: "flex", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
  obj.contentContainer = obj;
  let num = 140;
  if (arg0) {
    num = 125;
  }
  obj = { height: num, position: "relative", marginBottom: null };
  let num2 = 0;
  if (!arg0) {
    num2 = 52 + nativeDefault.space.PX_8;
  }
  obj.marginBottom = num2;
  obj.heroContainer = obj;
  const obj1 = { resizeMode: "cover" };
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj1.borderTopLeftRadius = nativeDefault.radii.lg;
  obj1.borderTopRightRadius = nativeDefault.radii.lg;
  obj.heroImg = obj1;
  const obj2 = {};
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj2.borderTopLeftRadius = nativeDefault.radii.lg;
  obj2.borderTopRightRadius = nativeDefault.radii.lg;
  obj.heroGradient = obj2;
  let num4 = -52;
  if (arg0) {
    num4 = nativeDefault.space.PX_12;
  }
  obj.gameTileContainer = { position: "absolute", bottom: num4, left: 0, right: 0, alignItems: "center" };
  const rect = {
    position: "absolute",
    top: nativeDefault.space.PX_16,
    right: nativeDefault.space.PX_16,
    display: "flex",
    flexDirection: "row",
    gap: nativeDefault.space.PX_16,
    alignItems: "center",
  };
  obj.contextMenuContainer = rect;
  let PX_16;
  if (!arg0) {
    PX_16 = nativeDefault.space.PX_16;
  }
  obj.textContainer = {
    alignItems: "center",
    paddingTop: PX_16,
    gap: nativeDefault.space.PX_8,
    marginBottom: nativeDefault.space.PX_16,
    textAlign: "center",
  };
  obj.questDescription = { textAlign: "center" };
  let PX_161;
  if (!arg0) {
    PX_161 = nativeDefault.space.PX_16;
  }
  obj.buttonsContainer = { paddingTop: PX_161 };
  return obj;
});
createStyles = fn(4560);
let closure_14 = createStyles.createStyleProperties(() => ({
  gradientEnd: nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT,
}));
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestProgressBottomSheet.tsx");

export default function QuestProgressBottomSheetConnected(questId) {
  questId = questId.questId;
  let obj = questId(504);
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(questId));
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent: tmp(5447).QuestContent.RUNNING_ACTIVITY,
      sourceQuestContent: tmp(5447).QuestContent.RUNNING_ACTIVITY,
      children() {
        return closure_2_11(QuestProgressBottomSheet, { quest: stateFromStores });
      },
    };
    tmp4 = closure_11(tmp(11778).QuestContentImpressionTrackerNative, obj);
  }
  return tmp4;
}
