// === Module 15184: QuestDockContextMenuActionSheet ===

// Module 15184 (QuestDockContextMenuActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import QuestTypes from "QuestTypes" /* 5528 */;
import AdCreativeType from "AdCreativeType" /* 5532 */;
import ClipboardUtils from "ClipboardUtils" /* 7292 */;
import openUserSettings from "openUserSettings" /* 7485 */;
import AnalyticsActions from "AnalyticsActions" /* 7820 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7830 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 11326 */;
import captureAdUserAction from "captureAdUserAction" /* 11327 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 11331 */;
import QuestActionCreators from "QuestActionCreators" /* 11410 */;
import QuestCopyUtils from "QuestCopyUtils" /* 11429 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11630 */;
import QuestUtils from "QuestUtils" /* 11897 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 15194 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function QuestDockPreviewTools(quest) {
  quest = quest.quest;
  c1 = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  const questPreviewActions = quest(11617).useQuestPreviewActions(quest.id);
  ({ handleComplete: c1, handleProgress: c2, handleResetDismissibilityClick: c3, handleResetStatusClick: c4 } = questPreviewActions);
  let obj2 = { title: null, hasIcons: true, children: null };
  const intl = quest(1114).intl;
  obj2.title = intl.string(quest(1114).t["Ape+mm"]);
  let obj3 = { icon: null, label: null, onPress: null };
  let obj = quest(11617);
  obj3.icon = closure_6(quest(7302).ActionSheetRow.Icon, { IconComponent: quest(8842).TrophyIcon });
  const obj5 = { text: null };
  const intl2 = quest(1114).intl;
  obj5.text = intl2.string(quest(1114).t.jQEfRT);
  obj3.label = closure_6(quest(8716).FormLabel, obj5);
  obj3.onPress = function onPress() {
    _undefined();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  let items = [closure_6(quest(7302).ActionSheetRow, obj3), , , , , , ];
  const obj6 = { icon: null, label: null, onPress: null };
  const obj4 = { IconComponent: quest(8842).TrophyIcon };
  obj6.icon = closure_6(quest(7302).ActionSheetRow.Icon, { IconComponent: quest(15188).RedoIcon });
  const obj8 = { text: null };
  const intl3 = quest(1114).intl;
  obj8.text = intl3.string(quest(1114).t.cKSLr4);
  obj6.label = closure_6(quest(8716).FormLabel, obj8);
  obj6.onPress = function onPress() {
    _undefined2(0.9 * Math.random() + 0.03);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[1] = closure_6(quest(7302).ActionSheetRow, obj6);
  const obj9 = { icon: null, label: null, onPress: null };
  const obj7 = { IconComponent: quest(15188).RedoIcon };
  obj9.icon = closure_6(quest(7302).ActionSheetRow.Icon, { IconComponent: quest(15190).UndoIcon });
  const obj11 = { text: null };
  const intl4 = quest(1114).intl;
  obj11.text = intl4.string(quest(1114).t.taqkwK);
  obj9.label = closure_6(quest(8716).FormLabel, obj11);
  obj9.onPress = function onPress() {
    _undefined4();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[2] = closure_6(quest(7302).ActionSheetRow, obj9);
  const obj12 = { icon: null, label: null, onPress: null };
  const obj10 = { IconComponent: quest(15190).UndoIcon };
  obj12.icon = closure_6(quest(7302).ActionSheetRow.Icon, { IconComponent: quest(15192).UnsendIcon });
  const obj14 = { text: null };
  const intl5 = quest(1114).intl;
  obj14.text = intl5.string(quest(1114).t.JF6W66);
  obj12.label = closure_6(quest(8716).FormLabel, obj14);
  obj12.onPress = function onPress() {
    _undefined3();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[3] = closure_6(quest(7302).ActionSheetRow, obj12);
  const obj15 = { icon: null, label: null, onPress: null };
  const obj13 = { IconComponent: quest(15192).UnsendIcon };
  obj15.icon = closure_6(quest(7302).ActionSheetRow.Icon, { IconComponent: quest(7071).EyeIcon });
  const obj17 = { text: null };
  const intl6 = quest(1114).intl;
  obj17.text = intl6.string(quest(1114).t["lL6/zF"]);
  obj15.label = closure_6(quest(8716).FormLabel, obj17);
  obj15.onPress = function onPress() {
    const items = [quest.id];
    QuestActionCreators.markAdContentUnseen(AdCreativeType.AdCreativeType.QUEST, items);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[4] = closure_6(quest(7302).ActionSheetRow, obj15);
  const obj18 = { icon: null, label: null, onPress: null };
  const obj16 = { IconComponent: quest(7071).EyeIcon };
  obj18.icon = closure_6(quest(7302).ActionSheetRow.Icon, { IconComponent: quest(7071).EyeIcon });
  const obj20 = { text: null };
  const intl7 = quest(1114).intl;
  obj20.text = intl7.string(quest(1114).t.tx5Ax5);
  obj18.label = closure_6(quest(8716).FormLabel, obj20);
  obj18.onPress = function onPress() {
    const obj2 = { screen: UserSettingsSections.QUEST_PREVIEW_TOOL_2, params: { questId: quest.id } };
    openUserSettings.openUserSettings(obj2);
    const obj3 = { questId: quest.id };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[5] = closure_6(quest(7302).ActionSheetRow, obj18);
  const obj21 = { icon: null, label: null, onPress: null };
  const obj19 = { IconComponent: quest(7071).EyeIcon };
  obj21.icon = closure_6(quest(7302).ActionSheetRow.Icon, { IconComponent: quest(4583).CopyIcon });
  const obj23 = { text: null };
  const intl8 = quest(1114).intl;
  obj23.text = intl8.string(quest(1114).t.oisrFi);
  obj21.label = closure_6(quest(8716).FormLabel, obj23);
  obj21.onPress = function onPress() {
    ClipboardUtils.copy(quest.id);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[6] = closure_6(quest(7302).ActionSheetRow, obj21);
  obj2.children = items;
  return closure_7(quest(7302).ActionSheetRow.Group, obj2);
}
function QuestDockShareRow(quest) {
  quest = quest.quest;
  let obj = { icon: closure_6(quest(7302).ActionSheetRow.Icon, { IconComponent: quest(4583).CopyIcon }), label: null, onPress: null };
  const obj3 = { text: null };
  const intl = quest(1114).intl;
  obj3.text = intl.string(quest(1114).t.WqhZss);
  obj.label = closure_6(quest(8716).FormLabel, obj3);
  obj.onPress = function onPress() {
    const obj = QuestCopyUtils;
    obj.copyShareLink(quest.id, { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
    const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return closure_6(quest(7302).ActionSheetRow, obj);
}
function QuestDockDisclosureRow(creative) {
  creative = creative.creative;
  let obj = { icon: closure_6(creative(7302).ActionSheetRow.Icon, { IconComponent: creative(11240).CircleQuestionIcon }), label: null, onPress: null };
  let obj3 = { text: null };
  const intl = creative(1114).intl;
  obj3.text = intl.string(creative(1114).t.GcsZKJ);
  obj.label = closure_6(creative(8716).FormLabel, obj3);
  obj.onPress = function onPress() {
    const obj2 = { creative, isTargetedDisclosure: true, trackingCtx: null };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    obj2.trackingCtx = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    obj.showModal(obj2);
    const obj3 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
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
  let obj3;
  function trackInternalClick(CONTEXT_MENU_HIDE_CONTENT) {
    if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_context_menu")) {
      const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
      const merged = Object.assign(adCreativeType);
      obj2.questContentCTA = CONTEXT_MENU_HIDE_CONTENT;
      obj2.surfaceId = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      obj2.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      captureAdUserAction.captureAdUserAction(obj2);
      const tmpResult = captureAdUserAction;
    } else if (adCreativeType.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
      const obj4 = { questId: adCreativeType.adCreativeId, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, questContentCTA: CONTEXT_MENU_HIDE_CONTENT, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
      const result = AnalyticsActions.trackQuestContentClicked(obj4);
      const tmpResult3 = AnalyticsActions;
    } else {
      const obj5 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
      ({ adCreativeId: obj3.adContentId, adCreativeType: obj3.adCreativeType } = adCreativeType);
      obj5.questContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      obj5.questContentCTA = CONTEXT_MENU_HIDE_CONTENT;
      obj5.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      const result1 = AnalyticsActions.trackAdContentClicked(obj5);
      const tmpResult4 = AnalyticsActions;
    }
    obj = AdAnalyticsInterfaceExperiment;
  }
  importDefault = creative(obj3[5]).getCreativeAnalyticsParams(creative);
  const QuestHomeBountiesFeatureGateExperiment = creative(obj3[6]).QuestHomeBountiesFeatureGateExperiment;
  const tmp3 = creative.type === creative(obj3[7]).AdCreativeType.BOUNTY && !QuestHomeBountiesFeatureGateExperiment.useConfig({ location: QuestsExperimentLocations.QUESTS_BAR_MOBILE }).enabled;
  let type = creative.type;
  if (creative(obj3[7]).AdCreativeType.QUEST === type) {
    let buttonLabel = tmp(tmp2[8]).getExternalCtaLabel(creative.quest);
    const intl = tmp(tmp2[9]).intl;
    let stringResult = intl.string(tmp(tmp2[9]).t.LLLLPD);
    let tmpResult = tmp(tmp2[8]);
  } else if (tmp(tmp2[7]).AdCreativeType.BOUNTY === type) {
    buttonLabel = creative.bounty.cta.buttonLabel;
    const intl4 = tmp(tmp2[9]).intl;
    stringResult = intl4.string(tmp(tmp2[9]).t.QUe9zz);
  }
  obj3 = { content: tmp(tmp2[10]).QuestContent.QUEST_BAR_MOBILE, ctaContent: tmp(tmp2[11]).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId: creative.impressionId, sourceQuestContent: tmp(tmp2[10]).QuestContent.QUEST_BAR_MOBILE };
  let obj4 = { icon: null, label: null, onPress: null };
  let obj = creative(obj3[5]);
  let obj2 = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
  obj4.icon = closure_6(creative(obj3[16]).ActionSheetRow.Icon, { IconComponent: creative(obj3[17]).LinkExternalMediumIcon });
  obj4.label = closure_6(creative(obj3[18]).FormLabel, { text: buttonLabel });
  obj4.onPress = function onPress() {
    const type = creative.type;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      QuestPlatformUtils.openGameLinkDirectly(creative.quest, obj3);
      const tmp2Result = QuestPlatformUtils;
    } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      const obj = { adContentId: creative.bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: creative.bounty.cta };
      const result = QuestPlatformUtils.openAdGameLinkDirectly(obj, obj3);
      const tmp2Result2 = QuestPlatformUtils;
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  let obj5 = { IconComponent: creative(obj3[17]).LinkExternalMediumIcon };
  const items = [closure_6(creative(obj3[16]).ActionSheetRow, obj4), ];
  let tmp5Result = null;
  if (creative.type === creative(obj3[7]).AdCreativeType.QUEST) {
    tmp5Result = null;
    if (tmpResult2.isShareableQuest(creative.quest.config)) {
      let obj6 = { quest: creative.quest };
      tmp5Result = closure_6(QuestDockShareRow, obj6);
    }
    tmpResult2 = tmp(tmp2[22]);
  }
  items[1] = tmp5Result;
  const children = [closure_7(creative(obj3[16]).ActionSheetRow.Group, { hasIcons: true, children: items }), , ];
  let tmp5Result3 = null;
  if (!tmp3) {
    let obj7 = { icon: null, label: null, onPress: null };
    const obj8 = { IconComponent: require("WreathIcon") };
    obj7.icon = closure_6(tmp(tmp2[16]).ActionSheetRow.Icon, obj8);
    let obj9 = { text: stringResult };
    obj7.label = closure_6(tmp(tmp2[18]).FormLabel, obj9);
    obj7.onPress = function onPress() {
      trackInternalClick(AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_LEARN_MORE);
      const type = creative.type;
      if (AdCreativeType.AdCreativeType.QUEST === type) {
        const obj = { scrollToQuestId: creative.quest.id, fromContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
        QuestUtils.openQuestHome(obj);
        const tmpResult = QuestUtils;
      } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
        const obj2 = { fromContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
        QuestUtils.openQuestHome(obj2);
        const tmpResult2 = QuestUtils;
      }
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    tmp5Result3 = closure_6(tmp(tmp2[16]).ActionSheetRow, obj7);
  }
  const items2 = [tmp5Result3, closure_6(QuestDockDisclosureRow, { creative }), ];
  let obj10 = { icon: null, label: null, subLabel: null, onPress: null };
  const tmp6 = closure_6(creative(obj3[16]).ActionSheetRow, obj4);
  obj10.icon = closure_6(creative(obj3[16]).ActionSheetRow.Icon, { IconComponent: creative(obj3[25]).XSmallIcon });
  const obj12 = { text: null };
  const intl2 = tmp(tmp2[9]).intl;
  obj12.text = intl2.string(creative(obj3[9]).t.NN79E9);
  obj10.label = closure_6(creative(obj3[18]).FormLabel, obj12);
  let stringResult1;
  if (!tmp3) {
    const intl3 = tmp(tmp2[9]).intl;
    stringResult1 = intl3.string(tmp(tmp2[9]).t.V6htN5);
  }
  const obj13 = { hasIcons: true, children: null };
  obj10.subLabel = stringResult1;
  obj10.onPress = trackInternalClick(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj3 = { value, done: true };
        return obj3;
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
            const obj6 = { value, done: true };
            return obj6;
          } else {
            trackInternalClick(tmp2(7830).QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT);
            const type = creative.type;
            if (tmp2(5532).AdCreativeType.QUEST === type) {
              const obj7 = tmp2(11410);
              const dismissQuestContentResult = tmp2(11410).dismissQuestContent(creative.quest.id, tmp2(5528).QuestContent.QUEST_BAR_MOBILE);
              v2(4603).hideActionSheet();
              v2 = 1;
              dependencyMap = 1;
              const obj9 = { value: dismissQuestContentResult, done: false };
              return obj9;
            } else if (tmp2(5532).AdCreativeType.BOUNTY === type) {
              const obj4 = tmp2(11655);
              const dismissAdContentResult = tmp2(11655).dismissAdContent(closure_1, tmp2(5528).QuestContent.QUEST_BAR_MOBILE);
              v2(4603).hideActionSheet();
              v2 = 2;
              dependencyMap = 1;
              const obj10 = { value: dismissAdContentResult, done: false };
              return obj10;
            } else {
              dependencyMap = 3;
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 !== 2) {
            const result = tmp2(15187).displayQuestDismissalToast();
            const obj2 = tmp2(15187);
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        }
        dependencyMap = 3;
        const obj11 = { value, done: true };
        return obj11;
      } catch (tmp27) {
        dependencyMap = tmp;
        throw tmp27;
      }
    }
  });
  items2[2] = closure_6(creative(obj3[16]).ActionSheetRow, obj10);
  obj13.children = items2;
  children[1] = closure_7(creative(obj3[16]).ActionSheetRow.Group, obj13);
  let tmp5Result4 = null;
  if (creative.type === creative(obj3[7]).AdCreativeType.QUEST) {
    tmp5Result4 = null;
    if (creative.quest.preview) {
      const obj14 = { quest: creative.quest };
      tmp5Result4 = closure_6(QuestDockPreviewTools, obj14);
    }
  }
  children[2] = tmp5Result4;
  return closure_7(creative(obj3[21]).ActionSheet, { children });
};