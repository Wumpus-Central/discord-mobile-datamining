// === Module 16463: contextMenuButton ===

// Module 16463 (contextMenuButton)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import IconButton from "IconButton" /* 7963 */;
import registerAssetDefault from "registerAsset" /* 8820 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "map" /* 10749 */;
import closure_8 from "initializeState" /* 7371 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 5334 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 9982 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
function contextMenuButton(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.icon = registerAssetDefault;
  obj.variant = "secondary-overlay";
  const intl = getSystemLocale.intl;
  obj.accessibilityLabel = intl.string(getSystemLocale.t["UKOtz+"]);
  obj.size = "sm";
  return callback2(IconButton.IconButton, obj);
}
function QuestProgressBottomSheet(quest) {
  quest = quest.quest;
  claim = undefined;
  let obj = quest(5018);
  const isScreenLandscape = obj.useIsScreenLandscape();
  const tmp4 = callback3(isScreenLandscape);
  obj1 = quest(5906);
  let obj2 = quest(7394);
  const getOrFetchApplication = obj1.useGetOrFetchApplication(obj2.getActivityApplicationId(quest));
  let id;
  if (getOrFetchApplication != null) {
    id = getOrFetchApplication.id;
  }
  const url = claim(10909)({ applicationId: id, size: 600, names: ["embedded_cover"] }).url;
  let tmpResult = tmp(10599);
  const questTaskDetails = tmpResult.useQuestTaskDetails(quest);
  const intl = tmp(1236).intl;
  obj = { questName: quest.config.messages.questName };
  const tmp7 = claim(10909);
  tmpResult = tmp(11405);
  obj = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET, sourceQuestContent: tmp(5337).QuestContent.RUNNING_ACTIVITY };
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
  const isQuestAccessSuspended = quest(10599).useIsQuestAccessSuspended();
  const tmpResult1 = quest(10599);
  obj1 = { quest, questContent: tmp(5337).QuestContent.RUNNING_ACTIVITY, sourceQuestContent: tmp(5337).QuestContent.RUNNING_ACTIVITY };
  const questRewardClaimHandler = quest(14645).useQuestRewardClaimHandler(obj1);
  ({ isClaiming, claim } = questRewardClaimHandler);
  const items = [claim];
  const items1 = [quest.id];
  callback = React.useCallback(callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp5;
            let mainFrame = tmp2;
            mainFrame = undefined;
            table = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_1();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          if (arg1) {
            mainFrame = closure_1_7.getMainFrame();
            if (null != mainFrame) {
              obj = closure_1_1(table[23]);
              obj.updateFramePanelMode(closure_1_0.id, closure_1_10.PIP);
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
  let callback1 = React.useCallback(() => {
    let obj = claim(closure_1_2[24]);
    obj.hideActionSheet();
    const mainFrame = closure_1_7.getMainFrame();
    if (null != mainFrame) {
      claim(tmp2[23]).updateFramePanelMode(mainFrame.id, closure_1_10.PIP);
      const tmpResult = claim(tmp2[23]);
    }
    obj = { scrollToQuestId: quest.id, fromContent: quest(tmp2[12]).QuestContent.QUEST_BOTTOM_SHEET };
    quest(closure_1_2[25]).openQuestHome(obj);
  }, items1);
  const items2 = [quest.id];
  const callback2 = React.useCallback(() => {
    let obj = claim(closure_1_2[24]);
    obj.hideActionSheet();
    obj = { message: null };
    const obj2 = quest(closure_1_2[26]);
    obj[0] = quest(closure_1_2[27]).getQuestUrl(quest.id);
    obj2.showShareActionSheet(obj);
  }, items2);
  callback3 = React.useCallback(() => {
    claim(table[24]).hideActionSheet();
  }, []);
  obj2 = { style: tmp4.heroContainer, children: null };
  let tmp24 = null != url;
  if (tmp24) {
    const obj3 = { source: null, style: null };
    const obj4 = { uri: null };
    obj4[0] = url;
    obj3[0] = obj4;
    obj3[1] = tmp4.heroImg;
    tmp24 = callback2(tmp6(5440), obj3);
  }
  const items3 = [tmp24, , , ];
  const obj5 = { style: tmp4.heroGradient, start: null, end: null, colors: null };
  let tmp6Result = tmp6(4891);
  obj5[1] = quest(691).VerticalGradient.START;
  obj5[2] = quest(691).VerticalGradient.END;
  const items4 = ["rgba(0, 0, 0, 0)", callback4().gradientEnd];
  obj5[3] = items4;
  items3[1] = callback2(tmp6Result, obj5);
  const obj6 = { style: tmp4.gameTileContainer, children: null };
  const obj7 = { quest, height: null, width: null };
  let num = 80;
  let num2 = 80;
  tmp6Result = tmp6(11401);
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
  const obj9 = { icon: claim(9309), onPress: callback2, variant: "secondary-overlay", size: "sm", accessibilityLabel: null };
  const intl2 = tmp(1236).intl;
  obj9[4] = intl2.string(quest(1236).t.RDE0Sc);
  const items5 = [callback2(quest(7963).IconButton, obj9), ];
  const obj10 = { quest, showShareLink: true, location: tmp11.QUEST_ACTIVITY_BOTTOM_SHEET, sourceQuestContent: null, children: null };
  const tmpResult2 = quest(14645);
  obj10[3] = quest(5337).QuestContent.RUNNING_ACTIVITY;
  obj10[4] = contextMenuButton;
  items5[1] = callback2(claim(14675), obj10);
  obj8[1] = items5;
  items3[3] = closure_12(closure_5, obj8);
  obj2[1] = items3;
  const items6 = [closure_12(closure_5, obj2), ];
  const obj11 = { style: tmp4.contentContainer, children: null };
  const obj12 = { direction: "vertical", spacing: claim(712).space.PX_8, style: tmp4.textContainer, children: null };
  let str = "heading-lg/bold";
  if (isScreenLandscape) {
    str = "heading-md/bold";
  }
  const items7 = [callback2(quest(4440).Text, { variant: str, color: "mobile-text-heading-primary", children: formatToPlainStringResult }), ];
  const obj13 = { style: tmp4.questDescription, variant: null, color: "text-muted", children: null };
  let str2 = "text-md/normal";
  if (isScreenLandscape) {
    str2 = "text-sm/normal";
  }
  obj13[1] = str2;
  obj13[3] = questsInstructionsToWinReward;
  items7[1] = callback2(quest(4440).Text, obj13);
  obj12[3] = items7;
  const items8 = [closure_12(quest(4877).Stack, obj12), ];
  const obj14 = { direction: "vertical", spacing: claim(712).space.PX_12, style: tmp4.buttonsContainer, children: null };
  const intl3 = tmp(1236).intl;
  const t = tmp(1236).t;
  const obj15 = { size: "lg", text: intl3.string(tmp14 ? t.cfY4PE : t.LLLLPD), onPress: null, loading: null, grow: true, disabled: null, onPressDisabled: null };
  if (tmp14) {
    callback1 = callback;
  }
  obj15[2] = callback1;
  if (!isClaiming) {
    isClaiming = questRewardClaimHandler.isLoading;
  }
  obj15[3] = isClaiming;
  let tmp30 = isQuestAccessSuspended;
  if (isQuestAccessSuspended) {
    tmp30 = tmp14;
  }
  obj15[5] = tmp30;
  let tmp6Result2;
  if (isQuestAccessSuspended) {
    if (tmp14) {
      tmp6Result2 = tmp6(14641);
    }
  }
  const obj16 = { handleDisabled: true, startExpanded: true, children: null };
  obj15[6] = tmp6Result2;
  const items9 = [callback2(quest(4879).Button, obj15), ];
  const obj17 = { size: "lg", text: null, onPress: null, variant: "secondary", grow: true };
  const intl4 = tmp(1236).intl;
  obj17[1] = intl4.string(quest(1236).t.cpT0Cq);
  obj17[2] = callback3;
  items9[1] = callback2(quest(4879).Button, obj17);
  obj14[3] = items9;
  items8[1] = closure_12(quest(4877).Stack, obj14);
  obj11[1] = items8;
  items6[1] = closure_12(closure_5, obj11);
  obj16[2] = items6;
  return closure_12(quest(5569).BottomSheet, obj16);
}
({ View: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles((arg0) => {
  let obj = { contentContainer: null, heroContainer: null, heroImg: null, heroGradient: null, gameTileContainer: null, contextMenuContainer: null, textContainer: null, questDescription: null, buttonsContainer: null };
  obj = { display: "flex", paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
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
  obj1 = { resizeMode: "cover" };
  const merged = Object.assign(closure_6.absoluteFillObject);
  obj1.borderTopLeftRadius = ThemesDefault.radii.lg;
  obj1.borderTopRightRadius = ThemesDefault.radii.lg;
  obj[2] = obj1;
  const obj2 = {};
  const merged1 = Object.assign(closure_6.absoluteFillObject);
  obj2.borderTopLeftRadius = ThemesDefault.radii.lg;
  obj2.borderTopRightRadius = ThemesDefault.radii.lg;
  obj[3] = obj2;
  let num4 = -52;
  if (arg0) {
    num4 = tmp(712).space.PX_12;
  }
  obj[4] = { position: "absolute", bottom: num4, left: 0, right: 0, alignItems: "center" };
  obj[5] = { position: "absolute", top: ThemesDefault.space.PX_16, right: ThemesDefault.space.PX_16, display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_16, alignItems: "center" };
  let PX_16;
  if (!arg0) {
    PX_16 = tmp(712).space.PX_16;
  }
  const obj3 = { position: "absolute", top: ThemesDefault.space.PX_16, right: ThemesDefault.space.PX_16, display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_16, alignItems: "center" };
  obj[6] = { alignItems: "center", paddingTop: PX_16, gap: ThemesDefault.space.PX_8, marginBottom: ThemesDefault.space.PX_16, textAlign: "center" };
  obj[7] = { textAlign: "center" };
  let PX_161;
  if (!arg0) {
    PX_161 = tmp(712).space.PX_16;
  }
  obj[8] = { paddingTop: PX_161 };
  return obj;
});
let closure_14 = createCacheKey.createStyleProperties(() => ({ gradientEnd: ThemesDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT }));
const result = require("set").fileFinishedImporting("modules/quests/native/QuestProgressBottomSheet.tsx");

export default function QuestProgressBottomSheetConnected(questId) {
  questId = questId.questId;
  let stateFromStores;
  let obj = questId(589);
  const items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getQuest(questId));
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { overrideVisibility: true, questOrQuests: null, questContent: null, sourceQuestContent: null, children: null };
    obj[1] = stateFromStores;
    obj[2] = tmp(5337).QuestContent.RUNNING_ACTIVITY;
    obj[3] = tmp(5337).QuestContent.RUNNING_ACTIVITY;
    obj[4] = function children() {
      return closure_1_11(closure_1_16, { quest: stateFromStores });
    };
    tmp4 = callback2(tmp(11408).QuestContentImpressionTrackerNative, obj);
  }
  return tmp4;
};