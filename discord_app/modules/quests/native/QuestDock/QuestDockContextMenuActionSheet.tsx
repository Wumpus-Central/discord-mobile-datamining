// === Module 15183: QuestDockContextMenuActionSheet ===

// Module 15183 (QuestDockContextMenuActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import QuestTypes from "QuestTypes" /* 5528 */;
import AdCreativeType from "AdCreativeType" /* 5532 */;
import ClipboardUtils from "ClipboardUtils" /* 7292 */;
import openUserSettings from "openUserSettings" /* 7485 */;
import AnalyticsActions from "AnalyticsActions" /* 7820 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7830 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 11325 */;
import captureAdUserAction from "captureAdUserAction" /* 11326 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 11330 */;
import QuestActionCreators from "QuestActionCreators" /* 11409 */;
import QuestCopyUtils from "QuestCopyUtils" /* 11428 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11629 */;
import QuestUtils from "QuestUtils" /* 11896 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 15193 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function QuestDockPreviewTools(quest) {
  quest = quest.quest;
  c1 = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  let obj = quest(11616);
  const questPreviewActions = obj.useQuestPreviewActions(quest.id);
  ({ handleComplete: c1, handleProgress: c2, handleResetDismissibilityClick: c3, handleResetStatusClick: c4 } = questPreviewActions);
  obj = { title: null, hasIcons: true, children: null };
  const intl = quest(1114).intl;
  obj.title = intl.string(quest(1114).t["Ape+mm"]);
  obj = { icon: closure_6(quest(7302).ActionSheetRow.Icon, { IconComponent: quest(8842).TrophyIcon }), label: null, onPress: null };
  const obj2 = { text: null };
  const intl2 = quest(1114).intl;
  obj2.text = intl2.string(quest(1114).t.jQEfRT);
  obj.label = closure_6(quest(8716).FormLabel, obj2);
  obj.onPress = function onPress() {
    _undefined();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  let items = [closure_6(quest(7302).ActionSheetRow, obj), , , , , , ];
  const obj3 = { icon: null, label: null, onPress: null };
  const obj1 = { IconComponent: quest(8842).TrophyIcon };
  obj3.icon = closure_6(quest(7302).ActionSheetRow.Icon, { IconComponent: quest(15187).RedoIcon });
  const obj5 = { text: null };
  const intl3 = quest(1114).intl;
  obj5.text = intl3.string(quest(1114).t.cKSLr4);
  obj3.label = closure_6(quest(8716).FormLabel, obj5);
  obj3.onPress = function onPress() {
    _undefined2(0.9 * Math.random() + 0.03);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[1] = closure_6(quest(7302).ActionSheetRow, obj3);
  const obj6 = { icon: null, label: null, onPress: null };
  const obj4 = { IconComponent: quest(15187).RedoIcon };
  obj6.icon = closure_6(quest(7302).ActionSheetRow.Icon, { IconComponent: quest(15189).UndoIcon });
  const obj8 = { text: null };
  const intl4 = quest(1114).intl;
  obj8.text = intl4.string(quest(1114).t.taqkwK);
  obj6.label = closure_6(quest(8716).FormLabel, obj8);
  obj6.onPress = function onPress() {
    _undefined4();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[2] = closure_6(quest(7302).ActionSheetRow, obj6);
  const obj9 = { icon: null, label: null, onPress: null };
  const obj7 = { IconComponent: quest(15189).UndoIcon };
  obj9.icon = closure_6(quest(7302).ActionSheetRow.Icon, { IconComponent: quest(15191).UnsendIcon });
  const obj11 = { text: null };
  const intl5 = quest(1114).intl;
  obj11.text = intl5.string(quest(1114).t.JF6W66);
  obj9.label = closure_6(quest(8716).FormLabel, obj11);
  obj9.onPress = function onPress() {
    _undefined3();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[3] = closure_6(quest(7302).ActionSheetRow, obj9);
  const obj12 = { icon: null, label: null, onPress: null };
  const obj10 = { IconComponent: quest(15191).UnsendIcon };
  obj12.icon = closure_6(quest(7302).ActionSheetRow.Icon, { IconComponent: quest(7071).EyeIcon });
  const obj14 = { text: null };
  const intl6 = quest(1114).intl;
  obj14.text = intl6.string(quest(1114).t["lL6/zF"]);
  obj12.label = closure_6(quest(8716).FormLabel, obj14);
  obj12.onPress = function onPress() {
    const items = [quest.id];
    QuestActionCreators.markAdContentUnseen(AdCreativeType.AdCreativeType.QUEST, items);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[4] = closure_6(quest(7302).ActionSheetRow, obj12);
  const obj15 = { icon: null, label: null, onPress: null };
  const obj13 = { IconComponent: quest(7071).EyeIcon };
  obj15.icon = closure_6(quest(7302).ActionSheetRow.Icon, { IconComponent: quest(7071).EyeIcon });
  const obj17 = { text: null };
  const intl7 = quest(1114).intl;
  obj17.text = intl7.string(quest(1114).t.tx5Ax5);
  obj15.label = closure_6(quest(8716).FormLabel, obj17);
  obj15.onPress = function onPress() {
    let obj = { screen: UserSettingsSections.QUEST_PREVIEW_TOOL_2, params: null };
    obj = { questId: quest.id };
    obj.params = obj;
    obj.openUserSettings(obj);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[5] = closure_6(quest(7302).ActionSheetRow, obj15);
  const obj18 = { icon: null, label: null, onPress: null };
  const obj16 = { IconComponent: quest(7071).EyeIcon };
  obj18.icon = closure_6(quest(7302).ActionSheetRow.Icon, { IconComponent: quest(4583).CopyIcon });
  const obj20 = { text: null };
  const intl8 = quest(1114).intl;
  obj20.text = intl8.string(quest(1114).t.oisrFi);
  obj18.label = closure_6(quest(8716).FormLabel, obj20);
  obj18.onPress = function onPress() {
    ClipboardUtils.copy(quest.id);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[6] = closure_6(quest(7302).ActionSheetRow, obj18);
  obj.children = items;
  return closure_7(quest(7302).ActionSheetRow.Group, obj);
}
function QuestDockShareRow(quest) {
  quest = quest.quest;
  let obj = { icon: null, label: null, onPress: null };
  obj = { IconComponent: quest(4583).CopyIcon };
  obj.icon = closure_6(quest(7302).ActionSheetRow.Icon, obj);
  obj = { text: null };
  const intl = quest(1114).intl;
  obj.text = intl.string(quest(1114).t.WqhZss);
  obj.label = closure_6(quest(8716).FormLabel, obj);
  obj.onPress = function onPress() {
    const obj = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    obj.copyShareLink(quest.id, obj);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return closure_6(quest(7302).ActionSheetRow, obj);
}
function QuestDockDisclosureRow(creative) {
  creative = creative.creative;
  let obj = { icon: null, label: null, onPress: null };
  obj = { IconComponent: creative(11239).CircleQuestionIcon };
  obj.icon = closure_6(creative(7302).ActionSheetRow.Icon, obj);
  obj = { text: null };
  const intl = creative(1114).intl;
  obj.text = intl.string(creative(1114).t.GcsZKJ);
  obj.label = closure_6(creative(8716).FormLabel, obj);
  obj.onPress = function onPress() {
    let obj = { creative, isTargetedDisclosure: true, trackingCtx: null };
    obj = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    obj.trackingCtx = obj;
    obj.showModal(obj);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return closure_6(creative(7302).ActionSheetRow, obj);
}
const QuestsExperimentLocations = fn(5525).QuestsExperimentLocations;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContextMenuActionSheet.tsx");

export default function QuestDockContextMenuActionSheet(creative) {
  creative = creative.creative;
  let obj;
  function trackInternalClick(CONTEXT_MENU_HIDE_CONTENT) {
    obj = AdAnalyticsInterfaceExperiment;
    if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_context_menu")) {
      let tmpResult = captureAdUserAction;
      obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
      const merged = Object.assign(adCreativeType);
      obj.questContentCTA = CONTEXT_MENU_HIDE_CONTENT;
      obj.surfaceId = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      obj.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      tmpResult.captureAdUserAction(obj);
    } else if (adCreativeType.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
      tmpResult = AnalyticsActions;
      obj = { questId: adCreativeType.adCreativeId, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, questContentCTA: CONTEXT_MENU_HIDE_CONTENT, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
      const result = tmpResult.trackQuestContentClicked(obj);
    } else {
      const obj1 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
      ({ adCreativeId: obj3.adContentId, adCreativeType: obj3.adCreativeType } = adCreativeType);
      obj1.questContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      obj1.questContentCTA = CONTEXT_MENU_HIDE_CONTENT;
      obj1.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      const result1 = AnalyticsActions.trackAdContentClicked(obj1);
      const tmpResult1 = AnalyticsActions;
    }
  }
  obj = creative(obj[5]);
  importDefault = obj.getCreativeAnalyticsParams(creative);
  const QuestHomeBountiesFeatureGateExperiment = creative(obj[6]).QuestHomeBountiesFeatureGateExperiment;
  obj = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
  const tmp3 = creative.type === creative(obj[7]).AdCreativeType.BOUNTY && !QuestHomeBountiesFeatureGateExperiment.useConfig(obj).enabled;
  let type = creative.type;
  if (creative(obj[7]).AdCreativeType.QUEST === type) {
    let tmpResult = tmp(tmp2[8]);
    let buttonLabel = tmpResult.getExternalCtaLabel(creative.quest);
    const intl = tmp(tmp2[9]).intl;
    let stringResult = intl.string(tmp(tmp2[9]).t.LLLLPD);
  } else if (tmp(tmp2[7]).AdCreativeType.BOUNTY === type) {
    buttonLabel = creative.bounty.cta.buttonLabel;
    const intl4 = tmp(tmp2[9]).intl;
    stringResult = intl4.string(tmp(tmp2[9]).t.QUe9zz);
  }
  obj = { content: tmp(tmp2[10]).QuestContent.QUEST_BAR_MOBILE, ctaContent: tmp(tmp2[11]).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId: creative.impressionId, sourceQuestContent: tmp(tmp2[10]).QuestContent.QUEST_BAR_MOBILE };
  let obj1 = {
    icon: closure_6(creative(obj[16]).ActionSheetRow.Icon, { IconComponent: creative(obj[17]).LinkExternalMediumIcon }),
    label: closure_6(creative(obj[18]).FormLabel, { text: buttonLabel }),
    onPress() {
      const type = creative.type;
      if (AdCreativeType.AdCreativeType.QUEST === type) {
        let tmp2Result = QuestPlatformUtils;
        tmp2Result.openGameLinkDirectly(creative.quest, obj);
      } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
        tmp2Result = QuestPlatformUtils;
        obj = { adContentId: creative.bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: creative.bounty.cta };
        const result = tmp2Result.openAdGameLinkDirectly(obj, obj);
      }
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  };
  let obj2 = { IconComponent: creative(obj[17]).LinkExternalMediumIcon };
  const items = [closure_6(creative(obj[16]).ActionSheetRow, obj1), ];
  let tmp5Result = null;
  if (creative.type === creative(obj[7]).AdCreativeType.QUEST) {
    tmpResult = tmp(tmp2[22]);
    tmp5Result = null;
    if (tmpResult.isShareableQuest(creative.quest.config)) {
      let obj3 = { quest: creative.quest };
      tmp5Result = closure_6(QuestDockShareRow, obj3);
    }
  }
  items[1] = tmp5Result;
  const children = [closure_7(creative(obj[16]).ActionSheetRow.Group, { hasIcons: true, children: items }), , ];
  tmp5Result = null;
  if (!tmp3) {
    const obj4 = { icon: null, label: null, onPress: null };
    const obj5 = { IconComponent: require("WreathIcon") };
    obj4.icon = closure_6(tmp(tmp2[16]).ActionSheetRow.Icon, obj5);
    const obj6 = { text: stringResult };
    obj4.label = closure_6(tmp(tmp2[18]).FormLabel, obj6);
    obj4.onPress = function onPress() {
      trackInternalClick(AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_LEARN_MORE);
      const type = creative.type;
      if (AdCreativeType.AdCreativeType.QUEST === type) {
        let tmpResult = QuestUtils;
        obj = { scrollToQuestId: creative.quest.id, fromContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
        tmpResult.openQuestHome(obj);
      } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
        tmpResult = QuestUtils;
        obj = { fromContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
        tmpResult.openQuestHome(obj);
      }
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    tmp5Result = closure_6(tmp(tmp2[16]).ActionSheetRow, obj4);
  }
  const items2 = [tmp5Result, closure_6(QuestDockDisclosureRow, { creative }), ];
  let obj7 = { icon: null, label: null, subLabel: null, onPress: null };
  const tmp6 = closure_6(creative(obj[16]).ActionSheetRow, obj1);
  obj7.icon = closure_6(creative(obj[16]).ActionSheetRow.Icon, { IconComponent: creative(obj[25]).XSmallIcon });
  const obj9 = { text: null };
  const intl2 = tmp(tmp2[9]).intl;
  obj9.text = intl2.string(creative(obj[9]).t.NN79E9);
  obj7.label = closure_6(creative(obj[18]).FormLabel, obj9);
  let stringResult1;
  if (!tmp3) {
    const intl3 = tmp(tmp2[9]).intl;
    stringResult1 = intl3.string(tmp(tmp2[9]).t.V6htN5);
  }
  const obj10 = { hasIcons: true, children: null };
  obj7.subLabel = stringResult1;
  obj7.onPress = trackInternalClick(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else {
            trackInternalClick(tmp2(7830).QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT);
            const type = creative.type;
            if (tmp2(5532).AdCreativeType.QUEST === type) {
              const obj7 = tmp2(11409);
              const dismissQuestContentResult = tmp2(11409).dismissQuestContent(creative.quest.id, tmp2(5528).QuestContent.QUEST_BAR_MOBILE);
              v2(4603).hideActionSheet();
              v2 = 1;
              dependencyMap = 1;
              let obj1 = { value: dismissQuestContentResult, done: false };
              return obj1;
            } else if (tmp2(5532).AdCreativeType.BOUNTY === type) {
              let obj3 = tmp2(11654);
              const dismissAdContentResult = obj3.dismissAdContent(closure_1, tmp2(5528).QuestContent.QUEST_BAR_MOBILE);
              v2(4603).hideActionSheet();
              v2 = 2;
              dependencyMap = 1;
              const obj2 = { value: dismissAdContentResult, done: false };
              return obj2;
            } else {
              dependencyMap = 3;
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 !== 2) {
            obj1 = tmp2(15186);
            const result = obj1.displayQuestDismissalToast();
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value, done: true };
          return obj;
        }
        dependencyMap = 3;
        obj3 = { value, done: true };
        return obj3;
      } catch (tmp27) {
        dependencyMap = tmp;
        throw tmp27;
      }
    }
  });
  items2[2] = closure_6(creative(obj[16]).ActionSheetRow, obj7);
  obj10.children = items2;
  children[1] = closure_7(creative(obj[16]).ActionSheetRow.Group, obj10);
  let tmp5Result1 = null;
  if (creative.type === creative(obj[7]).AdCreativeType.QUEST) {
    tmp5Result1 = null;
    if (creative.quest.preview) {
      const obj11 = { quest: creative.quest };
      tmp5Result1 = closure_6(QuestDockPreviewTools, obj11);
    }
  }
  children[2] = tmp5Result1;
  return closure_7(creative(obj[21]).ActionSheet, { children });
};