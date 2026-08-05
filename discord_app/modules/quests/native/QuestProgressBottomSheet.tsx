// discord_app/modules/quests/native/QuestProgressBottomSheet.tsx
import ActivityPanelModes from "ActivityPanelModes";
import useQuests from "useQuests";
import get_ActivityIndicator from "getApplicationIdsByTaskTypes";
import initializeState from "initializeState";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import { ActivityPanelModes } from "ActivityPanelModes";
import jsxProd from "useQuestRewardClaimHandler";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let closure_6;
let unpackModuleId;
const require = arg1;
function contextMenuButton(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.icon = require("../../../../_runtime/08415_registerAsset.js");
  obj.variant = "secondary-overlay";
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["UKOtz+"]);
  obj.size = "sm";
  return callback2(require("../../../design/components/Button/native/IconButton.native.tsx") /* IconButton */.IconButton, obj);
}
function QuestProgressBottomSheet(quest) {
  let claim;
  let isClaiming;
  quest = quest.quest;
  claim = undefined;
  let obj = quest(4815);
  const isScreenLandscape = obj.useIsScreenLandscape();
  const tmp4 = callback3(isScreenLandscape);
  let obj1 = quest(5616);
  let obj2 = quest(7103);
  const getOrFetchApplication = obj1.useGetOrFetchApplication(obj2.getActivityApplicationId(quest));
  let id;
  if (getOrFetchApplication != null) {
    id = getOrFetchApplication.id;
  }
  const url = claim(10643)({ applicationId: id, size: 600, names: ["embedded_cover"] }).url;
  let tmpResult = tmp(10374);
  const questTaskDetails = tmpResult.useQuestTaskDetails(quest);
  const intl = tmp(1236).intl;
  obj = { questName: quest.config.messages.questName };
  const tmp7 = claim(10643);
  tmpResult = tmp(11087);
  obj = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET, sourceQuestContent: tmp(5131).QuestContent.RUNNING_ACTIVITY };
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
  const formatToPlainStringResult = intl.formatToPlainString(quest(1236).t.EAYZAr, obj);
  const tmp11 = QuestsExperimentLocations;
  obj1 = { quest, questContent: tmp(5131).QuestContent.RUNNING_ACTIVITY, sourceQuestContent: tmp(5131).QuestContent.RUNNING_ACTIVITY };
  const questRewardClaimHandler = quest(14264).useQuestRewardClaimHandler(obj1);
  ({ isClaiming, claim } = questRewardClaimHandler);
  const items = [claim];
  const items1 = [quest.id];
  callback = React.useCallback(callback(function*() {
    if (table === 2) {
      table = 3;
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
        table = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp4;
            v0 = 1;
            table = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = v0();
            return obj1;
          }
        } else if (arg0 === 1) {
          table = 3;
          throw arg1;
        } else if (arg0 === 2) {
          table = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          if (arg1) {
            obj = v0(table[22]);
            obj.updateFramePanelMode(outer1_9.PIP);
          }
          table = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        table = tmp;
        throw tmp11;
      }
    }
  }), items);
  let callback1 = React.useCallback(() => {
    let obj = claim(outer1_2[23]);
    obj.hideActionSheet();
    claim(outer1_2[22]).updateFramePanelMode(outer1_9.PIP);
    const obj2 = claim(outer1_2[22]);
    obj = { scrollToQuestId: quest.id, fromContent: quest(outer1_2[11]).QuestContent.QUEST_BOTTOM_SHEET };
    quest(outer1_2[24]).openQuestHome(obj);
  }, items1);
  const items2 = [quest.id];
  const callback2 = React.useCallback(() => {
    let obj = claim(outer1_2[23]);
    obj.hideActionSheet();
    obj = { message: null };
    const obj2 = quest(outer1_2[25]);
    obj[0] = quest(outer1_2[26]).getQuestUrl(quest.id);
    obj2.showShareActionSheet(obj);
  }, items2);
  callback3 = React.useCallback(() => {
    claim(table[23]).hideActionSheet();
  }, []);
  obj2 = { style: tmp4.heroContainer, children: null };
  let tmp23 = null != url;
  if (tmp23) {
    const obj3 = { source: null, style: null };
    const obj4 = { uri: null };
    obj4[0] = url;
    obj3[0] = obj4;
    obj3[1] = tmp4.heroImg;
    tmp23 = callback2(tmp6(5236), obj3);
  }
  const items3 = [tmp23, , , ];
  const obj5 = { style: tmp4.heroGradient, start: null, end: null, colors: null };
  let tmp6Result = tmp6(4706);
  obj5[1] = quest(691).VerticalGradient.START;
  obj5[2] = quest(691).VerticalGradient.END;
  const items4 = ["rgba(0, 0, 0, 0)", callback4().gradientEnd];
  obj5[3] = items4;
  items3[1] = callback2(tmp6Result, obj5);
  const obj6 = { style: tmp4.gameTileContainer, children: null };
  const obj7 = { quest, height: null, width: null };
  let num = 80;
  let num2 = 80;
  tmp6Result = tmp6(11083);
  if (isScreenLandscape) {
    num2 = 56;
  }
  obj7[1] = num2;
  if (isScreenLandscape) {
    num = 56;
  }
  obj7[2] = num;
  obj6[1] = callback2(tmp6Result, obj7);
  items3[2] = callback2(closure_5, obj6);
  const obj8 = { style: tmp4.contextMenuContainer, children: null };
  const obj9 = { icon: null, onPress: null, variant: "secondary-overlay", size: "sm", accessibilityLabel: null };
  obj9[0] = claim(9015);
  obj9[1] = callback2;
  const intl2 = tmp(1236).intl;
  obj9[4] = intl2.string(quest(1236).t.RDE0Sc);
  const items5 = [callback2(quest(7672).IconButton, obj9), ];
  const obj10 = { quest, showShareLink: true, location: tmp11.QUEST_ACTIVITY_BOTTOM_SHEET, sourceQuestContent: null, children: null };
  const tmpResult1 = quest(14264);
  obj10[3] = quest(5131).QuestContent.RUNNING_ACTIVITY;
  obj10[4] = contextMenuButton;
  items5[1] = callback2(claim(14294), obj10);
  obj8[1] = items5;
  items3[3] = closure_11(closure_5, obj8);
  obj2[1] = items3;
  const items6 = [closure_11(closure_5, obj2), ];
  const obj11 = { style: tmp4.contentContainer, children: null };
  const obj12 = { direction: "vertical", spacing: null, style: null, children: null };
  obj12[1] = claim(712).space.PX_8;
  obj12[2] = tmp4.textContainer;
  let str = "heading-lg/bold";
  if (isScreenLandscape) {
    str = "heading-md/bold";
  }
  const items7 = [callback2(quest(4281).Text, { variant: str, color: "mobile-text-heading-primary", children: formatToPlainStringResult }), ];
  const obj13 = { style: tmp4.questDescription, variant: null, color: "text-muted", children: null };
  let str2 = "text-md/normal";
  if (isScreenLandscape) {
    str2 = "text-sm/normal";
  }
  obj13[1] = str2;
  obj13[3] = questsInstructionsToWinReward;
  items7[1] = callback2(quest(4281).Text, obj13);
  obj12[3] = items7;
  const items8 = [closure_11(quest(4693).Stack, obj12), ];
  const obj14 = { direction: "vertical", spacing: null, style: null, children: null };
  obj14[1] = claim(712).space.PX_12;
  obj14[2] = tmp4.buttonsContainer;
  const intl3 = tmp(1236).intl;
  const t = tmp(1236).t;
  const obj15 = { size: "lg", text: intl3.string(tmp14 ? t.cfY4PE : t.LLLLPD), onPress: null, loading: null, grow: true };
  if (tmp14) {
    callback1 = callback;
  }
  obj15[2] = callback1;
  if (!isClaiming) {
    isClaiming = questRewardClaimHandler.isLoading;
  }
  const obj16 = { handleDisabled: true, startExpanded: true, children: null };
  obj15[3] = isClaiming;
  const items9 = [callback2(quest(4695).Button, obj15), ];
  const obj17 = { size: "lg", text: null, onPress: null, variant: "secondary", grow: true };
  const intl4 = tmp(1236).intl;
  obj17[1] = intl4.string(quest(1236).t.cpT0Cq);
  obj17[2] = callback3;
  items9[1] = callback2(quest(4695).Button, obj17);
  obj14[3] = items9;
  items8[1] = closure_11(quest(4693).Stack, obj14);
  obj11[1] = items8;
  items6[1] = closure_11(closure_5, obj11);
  obj16[2] = items6;
  return closure_11(quest(5338).BottomSheet, obj16);
}
({ View: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles((arg0) => {
  let obj = { contentContainer: null, heroContainer: null, heroImg: null, heroGradient: null, gameTileContainer: null, contextMenuContainer: null, textContainer: null, questDescription: null, buttonsContainer: null };
  obj = { display: "flex", paddingHorizontal: require("../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16, paddingBottom: require("../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16 };
  obj[0] = obj;
  let num = 140;
  if (arg0) {
    num = 125;
  }
  obj = { height: num, position: "relative", marginBottom: null };
  let num2 = 0;
  if (!arg0) {
    num2 = 52 + tmp(712).space.PX_8;
  }
  obj[2] = num2;
  obj[1] = obj;
  const obj1 = { resizeMode: "cover" };
  const merged = Object.assign(closure_6.absoluteFillObject);
  obj1.borderTopLeftRadius = require("../../../../discord_common/js/packages/tokens/native.tsx").radii.lg;
  obj1.borderTopRightRadius = require("../../../../discord_common/js/packages/tokens/native.tsx").radii.lg;
  obj[2] = obj1;
  const obj2 = {};
  const merged1 = Object.assign(closure_6.absoluteFillObject);
  obj2.borderTopLeftRadius = require("../../../../discord_common/js/packages/tokens/native.tsx").radii.lg;
  obj2.borderTopRightRadius = require("../../../../discord_common/js/packages/tokens/native.tsx").radii.lg;
  obj[3] = obj2;
  let num4 = -52;
  if (arg0) {
    num4 = tmp(712).space.PX_12;
  }
  obj[4] = { position: "absolute", bottom: num4, left: 0, right: 0, alignItems: "center" };
  obj[5] = { position: "absolute", top: require("../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16, right: require("../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16, display: "flex", flexDirection: "row", gap: require("../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16, alignItems: "center" };
  let PX_16;
  if (!arg0) {
    PX_16 = tmp(712).space.PX_16;
  }
  const obj3 = { position: "absolute", top: require("../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16, right: require("../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16, display: "flex", flexDirection: "row", gap: require("../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16, alignItems: "center" };
  obj[6] = { alignItems: "center", paddingTop: PX_16, gap: require("../../../../discord_common/js/packages/tokens/native.tsx").space.PX_8, marginBottom: require("../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16, textAlign: "center" };
  obj[7] = { textAlign: "center" };
  let PX_161;
  if (!arg0) {
    PX_161 = tmp(712).space.PX_16;
  }
  obj[8] = { paddingTop: PX_161 };
  return obj;
});
let closure_13 = createCacheKey.createStyleProperties(() => ({ gradientEnd: require("../../../../discord_common/js/packages/tokens/native.tsx").colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT }));
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestProgressBottomSheet.tsx");

export default function QuestProgressBottomSheetConnected(questId) {
  questId = questId.questId;
  let stateFromStores;
  let obj = questId(589);
  const items = [initializeState];
  stateFromStores = obj.useStateFromStores(items, () => outer1_7.getQuest(questId));
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { overrideVisibility: true, questOrQuests: null, questContent: null, sourceQuestContent: null, children: null };
    obj[1] = stateFromStores;
    obj[2] = tmp(5131).QuestContent.RUNNING_ACTIVITY;
    obj[3] = tmp(5131).QuestContent.RUNNING_ACTIVITY;
    obj[4] = function children() {
      return outer1_10(outer1_15, { quest: stateFromStores });
    };
    tmp4 = callback2(tmp(11090).QuestContentImpressionTrackerNative, obj);
  }
  return tmp4;
};