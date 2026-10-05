// discord_app/modules/quests/native/QuestProgressBottomSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import QuestTypes from "../QuestTypes.tsx";
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import _modDef7578 from "../../../../_runtime/metro/07578__.js";
import showShareActionSheet from "../../action_sheet/native/showShareActionSheet.tsx";
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
  obj.icon = _modDef7578;
  obj.variant = "secondary-overlay";
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["UKOtz+"]);
  obj.size = "sm";
  return closure_1_11(IconButton.IconButton, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5623).QuestsExperimentLocations;
const ActivityPanelModes = fn(8705).ActivityPanelModes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let createStyles = fn(4890);
let closure_13 = createStyles.createStyles((arg0) => {
  const obj = {
    contentContainer: {
      display: "flex",
      paddingHorizontal: nativeDefault.space.PX_16,
      paddingBottom: nativeDefault.space.PX_16,
    },
    heroContainer: null,
    heroImg: null,
    heroGradient: null,
    gameTileContainer: null,
    contextMenuContainer: null,
    textContainer: null,
    questDescription: null,
    buttonsContainer: null,
  };
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
  const obj2 = {
    display: "flex",
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_16,
  };
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
createStyles = fn(4890);
let closure_14 = createStyles.createStyleProperties(() => ({
  gradientEnd: nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT,
}));
fn(558);
const ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      const cResult = require("c").c(79);
      quest = quest.quest;
      _require = quest;
      let obj = require("c");
      const isScreenLandscape = require("useIsScreenLandscape").useIsScreenLandscape();
      const tmp5 = closure_13(isScreenLandscape);
      const gradientEnd = closure_14().gradientEnd;
      if (cResult[0] !== quest) {
        const activityApplicationId = tmp(7208).getActivityApplicationId(quest);
        cResult[0] = quest;
        cResult[1] = activityApplicationId;
        let tmp6 = activityApplicationId;
        let tmpResult = tmp(7208);
      } else {
        tmp6 = cResult[1];
      }
      let obj2 = require("useIsScreenLandscape");
      const getOrFetchApplication = require("useGetOrFetchApplications").useGetOrFetchApplication(tmp6);
      let id;
      if (getOrFetchApplication != null) {
        id = getOrFetchApplication.id;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = ["embedded_cover"];
        cResult[2] = items;
        let tmp10 = items;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== id) {
        let obj3 = { applicationId: id, size: 600, names: tmp10 };
        cResult[3] = id;
        cResult[4] = obj3;
        let tmp11 = obj3;
      } else {
        tmp11 = cResult[4];
      }
      const url = claim(9149)(tmp11).url;
      const tmpResult6 = require("useGetOrFetchApplications");
      const questTaskDetails = require("hooks/QuestHooks").useQuestTaskDetails(quest);
      if (cResult[5] !== quest.config.messages.questName) {
        const intl = tmp(1126).intl;
        let obj4 = { questName: quest.config.messages.questName };
        const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.EAYZAr, obj4);
        cResult[5] = quest.config.messages.questName;
        cResult[6] = formatToPlainStringResult;
      }
      if (cResult[7] === quest) {
        if (cResult[8] === questTaskDetails) {
          let tmp16 = cResult[9];
        }
        const questsInstructionsToWinReward = tmp(10955).useQuestsInstructionsToWinReward(tmp16);
        const userStatus = quest.userStatus;
        let completedAt;
        if (userStatus != null) {
          completedAt = userStatus.completedAt;
        }
        let tmp19 = null != completedAt;
        if (tmp19) {
          const userStatus2 = quest.userStatus;
          let claimedAt;
          if (userStatus2 != null) {
            claimedAt = userStatus2.claimedAt;
          }
          tmp19 = null == claimedAt;
        }
        const tmpResult8 = tmp(10955);
        const isQuestAccessSuspended = tmp(10911).useIsQuestAccessSuspended();
        if (cResult[10] !== quest) {
          let obj5 = {
            quest,
            questContent: tmp(5626).QuestContent.RUNNING_ACTIVITY,
            sourceQuestContent: tmp(5626).QuestContent.RUNNING_ACTIVITY,
          };
          cResult[10] = quest;
          cResult[11] = obj5;
          let tmp22 = obj5;
        } else {
          tmp22 = cResult[11];
        }
        const tmpResult9 = tmp(10911);
        const questRewardClaimHandler = tmp(14926).useQuestRewardClaimHandler(tmp22);
        ({ isClaiming, claim } = questRewardClaimHandler);
        const isLoading = questRewardClaimHandler.isLoading;
        if (cResult[12] !== claim) {
          _require = asyncGeneratorStep(async () => {
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
                return { value: "IconComponent", done: null };
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
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_0 = tmp2;
                    let mainFrame2;
                    c2 = 1;
                    c3 = 1;
                    const obj4 = { value: tmp5(), done: false };
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
                      claim(8986).updateFramePanelMode(mainFrame2.id, constants.PIP);
                      const obj = claim(8986);
                    }
                  }
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp19) {
                c3 = tmp;
                throw tmp19;
              }
            }
          });
          const fn = function () {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          cResult[12] = claim;
          cResult[13] = fn;
        }
        if (cResult[14] !== quest.id) {
          class Y {
            constructor() {
              tmp2 = closure_2;
              tmp = closure_1;
              obj = closure_1(closure_2[26]);
              hideActionSheetResult = obj.hideActionSheet();
              mainFrame = closure_7.getMainFrame();
              if (null != mainFrame) {
                tmpResult = tmp(tmp2[25]);
                tmp5 = ActivityPanelModes;
                updateFramePanelModeResult = tmpResult.updateFramePanelMode(mainFrame.id, ActivityPanelModes.PIP);
              }
              obj3 = closure_0(tmp2[27]);
              obj1 = {
                scrollToQuestId: closure_0.id,
                fromContent: closure_0(tmp2[14]).QuestContent.QUEST_BOTTOM_SHEET,
              };
              openQuestHomeResult = obj3.openQuestHome(obj1);
              return;
            }
          }
          cResult[14] = quest.id;
          cResult[15] = Y;
        } else {
          class Y {
            constructor() {
              tmp2 = closure_2;
              tmp = closure_1;
              obj = closure_1(closure_2[26]);
              hideActionSheetResult = obj.hideActionSheet();
              mainFrame = closure_7.getMainFrame();
              if (null != mainFrame) {
                tmpResult = tmp(tmp2[25]);
                tmp5 = ActivityPanelModes;
                updateFramePanelModeResult = tmpResult.updateFramePanelMode(mainFrame.id, ActivityPanelModes.PIP);
              }
              obj3 = closure_0(tmp2[27]);
              obj1 = {
                scrollToQuestId: closure_0.id,
                fromContent: closure_0(tmp2[14]).QuestContent.QUEST_BOTTOM_SHEET,
              };
              openQuestHomeResult = obj3.openQuestHome(obj1);
              return;
            }
          }
        }
        if (cResult[16] !== quest.id) {
          class Y {
            constructor() {
              tmp2 = closure_2;
              tmp = closure_1;
              obj = closure_1(closure_2[26]);
              hideActionSheetResult = obj.hideActionSheet();
              mainFrame = closure_7.getMainFrame();
              if (null != mainFrame) {
                tmpResult = tmp(tmp2[25]);
                tmp5 = ActivityPanelModes;
                updateFramePanelModeResult = tmpResult.updateFramePanelMode(mainFrame.id, ActivityPanelModes.PIP);
              }
              obj3 = closure_0(tmp2[27]);
              obj1 = {
                scrollToQuestId: closure_0.id,
                fromContent: closure_0(tmp2[14]).QuestContent.QUEST_BOTTOM_SHEET,
              };
              openQuestHomeResult = obj3.openQuestHome(obj1);
              return;
            }
          }
          cResult[16] = quest.id;
          cResult[17] = tmp28;
        } else {
          class Y {
            constructor() {
              tmp2 = closure_2;
              tmp = closure_1;
              obj = closure_1(closure_2[26]);
              hideActionSheetResult = obj.hideActionSheet();
              mainFrame = closure_7.getMainFrame();
              if (null != mainFrame) {
                tmpResult = tmp(tmp2[25]);
                tmp5 = ActivityPanelModes;
                updateFramePanelModeResult = tmpResult.updateFramePanelMode(mainFrame.id, ActivityPanelModes.PIP);
              }
              obj3 = closure_0(tmp2[27]);
              obj1 = {
                scrollToQuestId: closure_0.id,
                fromContent: closure_0(tmp2[14]).QuestContent.QUEST_BOTTOM_SHEET,
              };
              openQuestHomeResult = obj3.openQuestHome(obj1);
              return;
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor() {
              obj = claim(closure_1_2[26]);
              hideActionSheetResult = obj.hideActionSheet();
              return;
            }
          }
          cResult[18] = X;
        } else {
          class X {
            constructor() {
              obj = claim(closure_1_2[26]);
              hideActionSheetResult = obj.hideActionSheet();
              return;
            }
          }
        }
        if (cResult[19] === url) {
          class X {
            constructor() {
              obj = claim(closure_1_2[26]);
              hideActionSheetResult = obj.hideActionSheet();
              return;
            }
          }
          if (cResult[22] !== gradientEnd) {
            class X {
              constructor() {
                obj = claim(closure_1_2[26]);
                hideActionSheetResult = obj.hideActionSheet();
                return;
              }
            }
            tmp33[1] = gradientEnd;
            cResult[22] = gradientEnd;
            cResult[23] = tmp33;
          } else {
            class X {
              constructor() {
                obj = claim(closure_1_2[26]);
                hideActionSheetResult = obj.hideActionSheet();
                return;
              }
            }
          }
          if (cResult[24] === tmp5.heroGradient) {
            class X {
              constructor() {
                obj = claim(closure_1_2[26]);
                hideActionSheetResult = obj.hideActionSheet();
                return;
              }
            }
            if (isScreenLandscape) {
              class X {
                constructor() {
                  obj = claim(closure_1_2[26]);
                  hideActionSheetResult = obj.hideActionSheet();
                  return;
                }
              }
            }
            if (isScreenLandscape) {
              class X {
                constructor() {
                  obj = claim(closure_1_2[26]);
                  hideActionSheetResult = obj.hideActionSheet();
                  return;
                }
              }
            }
            if (cResult[27] === quest) {
              class X {
                constructor() {
                  obj = claim(closure_1_2[26]);
                  hideActionSheetResult = obj.hideActionSheet();
                  return;
                }
              }
            }
            const size = { quest, height: 80, width: 80 };
            const tmp40 = closure_11(claim(10950), size);
            cResult[27] = quest;
            cResult[28] = 80;
            cResult[29] = 80;
            cResult[30] = tmp40;
          }
          const obj6 = {
            style: tmp5.heroGradient,
            start: tmp(1105).VerticalGradient.START,
            end: tmp(1105).VerticalGradient.END,
            colors: tmp33,
          };
          const tmp37 = closure_11(claim(5605), obj6);
          cResult[24] = tmp5.heroGradient;
          cResult[25] = tmp33;
          cResult[26] = tmp37;
          const tmp12Result = claim(5605);
        }
        let tmp31 = null != url;
        if (tmp31) {
          class X {
            constructor() {
              obj = claim(closure_1_2[26]);
              hideActionSheetResult = obj.hideActionSheet();
              return;
            }
          }
          const obj7 = { source: null, style: null };
          const obj8 = { uri: url };
          obj7.source = obj8;
          obj7.style = tmp5.heroImg;
          tmp31 = closure_11(claim(5974), obj7);
        }
        cResult[19] = url;
        cResult[20] = tmp5.heroImg;
        cResult[21] = tmp31;
        const tmpResult10 = tmp(14926);
      }
      const obj9 = {
        quest,
        taskDetails: questTaskDetails,
        location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET,
        sourceQuestContent: require("QuestTypes").QuestContent.RUNNING_ACTIVITY,
      };
      cResult[7] = quest;
      cResult[8] = questTaskDetails;
      cResult[9] = obj9;
      tmp16 = obj9;
      const tmpResult7 = require("hooks/QuestHooks");
    }
  : (quest) => {
      quest = quest.quest;
      claim = undefined;
      const isScreenLandscape = quest(5912).useIsScreenLandscape();
      const tmp4 = closure_13(isScreenLandscape);
      let obj = quest(5912);
      let obj2 = quest(6663);
      const getOrFetchApplication = obj2.useGetOrFetchApplication(quest(7208).getActivityApplicationId(quest));
      let id;
      let obj3 = quest(7208);
      if (getOrFetchApplication != null) {
        id = getOrFetchApplication.id;
      }
      const url = claim(9149)({ applicationId: id, size: 600, names: ["embedded_cover"] }).url;
      const tmp7 = claim(9149);
      const questTaskDetails = quest(10911).useQuestTaskDetails(quest);
      const intl = tmp(1126).intl;
      let obj4 = { questName: quest.config.messages.questName };
      let tmpResult = quest(10911);
      const formatToPlainStringResult = intl.formatToPlainString(quest(1126).t.EAYZAr, {
        questName: quest.config.messages.questName,
      });
      const tmpResult4 = quest(10955);
      const userStatus = quest.userStatus;
      let completedAt;
      const questsInstructionsToWinReward = tmpResult4.useQuestsInstructionsToWinReward({
        quest,
        taskDetails: questTaskDetails,
        location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET,
        sourceQuestContent: quest(5626).QuestContent.RUNNING_ACTIVITY,
      });
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
      let obj5 = {
        quest,
        taskDetails: questTaskDetails,
        location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET,
        sourceQuestContent: quest(5626).QuestContent.RUNNING_ACTIVITY,
      };
      const isQuestAccessSuspended = quest(10911).useIsQuestAccessSuspended();
      const tmpResult5 = quest(10911);
      const tmpResult6 = quest(14926);
      const questRewardClaimHandler = tmpResult6.useQuestRewardClaimHandler({
        quest,
        questContent: quest(5626).QuestContent.RUNNING_ACTIVITY,
        sourceQuestContent: quest(5626).QuestContent.RUNNING_ACTIVITY,
      });
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
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
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
                    tmp5(dependencyMap[25]).updateFramePanelMode(mainFrame2.id, constants.PIP);
                    const obj = tmp5(dependencyMap[25]);
                  }
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
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
        claim(dependencyMap[26]).hideActionSheet();
      }, []);
      const obj7 = { style: tmp4.heroContainer, children: null };
      let tmp24 = null != url;
      if (tmp24) {
        const obj8 = { source: null, style: null };
        const obj9 = { uri: url };
        obj8.source = obj9;
        obj8.style = tmp4.heroImg;
        tmp24 = closure_11(tmp6(5974), obj8);
      }
      const items3 = [tmp24, , ,];
      const obj10 = { style: tmp4.heroGradient, start: null, end: null, colors: null };
      const obj6 = {
        quest,
        questContent: quest(5626).QuestContent.RUNNING_ACTIVITY,
        sourceQuestContent: quest(5626).QuestContent.RUNNING_ACTIVITY,
      };
      obj10.start = quest(1105).VerticalGradient.START;
      obj10.end = quest(1105).VerticalGradient.END;
      const items4 = ["rgba(0, 0, 0, 0)", closure_14().gradientEnd];
      obj10.colors = items4;
      items3[1] = closure_11(claim(5605), obj10);
      const obj11 = { style: tmp4.gameTileContainer, children: null };
      const size = { quest, height: null, width: null };
      let num = 80;
      let num2 = 80;
      const tmp6Result = claim(5605);
      if (isScreenLandscape) {
        num2 = 56;
      }
      size.height = num2;
      if (isScreenLandscape) {
        num = 56;
      }
      size.width = num;
      obj11.children = closure_11(claim(10950), size);
      items3[2] = closure_11(closure_5, obj11);
      const obj12 = { style: tmp4.contextMenuContainer, children: null };
      const obj13 = {
        icon: claim(9265),
        onPress: callback2,
        variant: "secondary-overlay",
        size: "sm",
        accessibilityLabel: null,
      };
      const intl2 = tmp(1126).intl;
      obj13.accessibilityLabel = intl2.string(quest(1126).t.RDE0Sc);
      const items5 = [closure_11(quest(7575).IconButton, obj13)];
      const obj14 = {
        quest,
        showShareLink: true,
        location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET,
        sourceQuestContent: null,
        children: null,
      };
      const tmp6Result4 = claim(10950);
      obj14.sourceQuestContent = quest(5626).QuestContent.RUNNING_ACTIVITY;
      obj14.children = contextMenuButton;
      items5[1] = closure_11(claim(14955), obj14);
      obj12.children = items5;
      items3[3] = closure_12(closure_5, obj12);
      obj7.children = items3;
      const items6 = [closure_12(closure_5, obj7)];
      const obj15 = { style: tmp4.contentContainer, children: null };
      const obj16 = {
        direction: "vertical",
        spacing: claim(587).space.PX_8,
        style: tmp4.textContainer,
        children: null,
      };
      let str = "heading-lg/bold";
      if (isScreenLandscape) {
        str = "heading-md/bold";
      }
      const items7 = [
        closure_11(quest(4886).Text, {
          variant: str,
          color: "mobile-text-heading-primary",
          children: formatToPlainStringResult,
        }),
      ];
      const obj17 = { style: tmp4.questDescription, variant: null, color: "text-muted", children: null };
      let str2 = "text-md/normal";
      if (isScreenLandscape) {
        str2 = "text-sm/normal";
      }
      obj17.variant = str2;
      obj17.children = questsInstructionsToWinReward;
      items7[1] = closure_11(quest(4886).Text, obj17);
      obj16.children = items7;
      const items8 = [closure_12(quest(5593).Stack, obj16)];
      const obj18 = {
        direction: "vertical",
        spacing: claim(587).space.PX_12,
        style: tmp4.buttonsContainer,
        children: null,
      };
      const intl3 = tmp(1126).intl;
      const t = tmp(1126).t;
      const obj19 = {
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
          tmp6Result6 = tmp6(14921);
        }
      }
      const obj20 = { handleDisabled: true, startExpanded: true, children: null };
      obj19.onPressDisabled = tmp6Result6;
      const items9 = [closure_11(quest(5594).Button, obj19)];
      const obj21 = { size: "lg", text: null, onPress: null, variant: "secondary", grow: true };
      const intl4 = tmp(1126).intl;
      obj21.text = intl4.string(quest(1126).t.cpT0Cq);
      obj21.onPress = callback3;
      items9[1] = closure_11(quest(5594).Button, obj21);
      obj18.children = items9;
      items8[1] = closure_12(quest(5593).Stack, obj18);
      obj15.children = items8;
      items6[1] = closure_12(closure_5, obj15);
      obj20.children = items6;
      return closure_12(quest(6645).BottomSheet, obj20);
    };
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestProgressBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (questId) => {
      let RUNNING_ACTIVITY = dependencyMap;
      const cResult = questId(576).c(8);
      questId = questId.questId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== questId) {
        const fn = function s() {
          return QuestStore.getQuest(questId);
        };
        cResult[1] = questId;
        cResult[2] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[2];
      }
      const obj = questId(576);
      const stateFromStores = questId(504).useStateFromStores(first, tmp5);
      if (null == stateFromStores) {
        return null;
      } else {
        if (cResult[3] !== stateFromStores) {
          const fn2 = function c() {
            return closure_2_11(closure_16, { quest: stateFromStores });
          };
          cResult[3] = stateFromStores;
          cResult[4] = fn2;
          let tmp7 = fn2;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] === stateFromStores) {
        }
        const obj2 = {
          overrideVisibility: true,
          questOrQuests: stateFromStores,
          questContent: tmp(5626).QuestContent.RUNNING_ACTIVITY,
          sourceQuestContent: null,
          children: null,
        };
        RUNNING_ACTIVITY = tmp(5626).QuestContent.RUNNING_ACTIVITY;
        obj2.sourceQuestContent = RUNNING_ACTIVITY;
        obj2.children = tmp7;
        const tmp10 = closure_11(tmp(10958).QuestContentImpressionTrackerNative, obj2);
        cResult[5] = stateFromStores;
        cResult[6] = tmp7;
        cResult[7] = tmp10;
      }
      const tmpResult = questId(504);
    }
  : (questId) => {
      questId = questId.questId;
      const items = [QuestStore];
      const stateFromStores = questId(504).useStateFromStores(items, () => QuestStore.getQuest(questId));
      let tmp4 = null;
      if (null != stateFromStores) {
        const obj2 = {
          overrideVisibility: true,
          questOrQuests: stateFromStores,
          questContent: tmp(5626).QuestContent.RUNNING_ACTIVITY,
          sourceQuestContent: tmp(5626).QuestContent.RUNNING_ACTIVITY,
          children() {
            return closure_2_11(closure_16, { quest: stateFromStores });
          },
        };
        tmp4 = closure_11(tmp(10958).QuestContentImpressionTrackerNative, obj2);
      }
      return tmp4;
    };
