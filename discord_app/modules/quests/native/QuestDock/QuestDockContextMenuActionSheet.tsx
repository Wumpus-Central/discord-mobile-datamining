// discord_app/modules/quests/native/QuestDock/QuestDockContextMenuActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../../experiments/AdAnalyticsInterfaceExperiment.tsx";
import captureAdUserAction from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import QuestActionCreators from "../../QuestActionCreators.tsx";
import QuestCopyUtils from "../../utils/QuestCopyUtils.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import QuestUtils from "../QuestUtils.native.tsx";
import QuestDisclosureModalActionCreatorsDefault from "../QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function QuestDockPreviewTools(quest) {
  quest = quest.quest;
  c1 = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  let obj = quest(11483);
  const questPreviewActions = obj.useQuestPreviewActions(quest.id);
  ({
    handleComplete: c1,
    handleProgress: c2,
    handleResetDismissibilityClick: c3,
    handleResetStatusClick: c4,
  } = questPreviewActions);
  obj = { title: null, hasIcons: true, children: null };
  const intl = quest(1114).intl;
  obj.title = intl.string(quest(1114).t["Ape+mm"]);
  obj = {
    icon: closure_5(quest(7200).ActionSheetRow.Icon, { IconComponent: quest(8717).TrophyIcon }),
    label: null,
    onPress: null,
  };
  const obj2 = { text: null };
  const intl2 = quest(1114).intl;
  obj2.text = intl2.string(quest(1114).t.jQEfRT);
  obj.label = closure_5(quest(8593).FormLabel, obj2);
  obj.onPress = function onPress() {
    _undefined();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  let items = [closure_5(quest(7200).ActionSheetRow, obj), , , , , ,];
  const obj3 = { icon: null, label: null, onPress: null };
  const obj1 = { IconComponent: quest(8717).TrophyIcon };
  obj3.icon = closure_5(quest(7200).ActionSheetRow.Icon, { IconComponent: quest(15107).RedoIcon });
  const obj5 = { text: null };
  const intl3 = quest(1114).intl;
  obj5.text = intl3.string(quest(1114).t.cKSLr4);
  obj3.label = closure_5(quest(8593).FormLabel, obj5);
  obj3.onPress = function onPress() {
    _undefined2(0.9 * Math.random() + 0.03);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[1] = closure_5(quest(7200).ActionSheetRow, obj3);
  const obj6 = { icon: null, label: null, onPress: null };
  const obj4 = { IconComponent: quest(15107).RedoIcon };
  obj6.icon = closure_5(quest(7200).ActionSheetRow.Icon, { IconComponent: quest(15109).UndoIcon });
  const obj8 = { text: null };
  const intl4 = quest(1114).intl;
  obj8.text = intl4.string(quest(1114).t.taqkwK);
  obj6.label = closure_5(quest(8593).FormLabel, obj8);
  obj6.onPress = function onPress() {
    _undefined4();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[2] = closure_5(quest(7200).ActionSheetRow, obj6);
  const obj9 = { icon: null, label: null, onPress: null };
  const obj7 = { IconComponent: quest(15109).UndoIcon };
  obj9.icon = closure_5(quest(7200).ActionSheetRow.Icon, { IconComponent: quest(15111).UnsendIcon });
  const obj11 = { text: null };
  const intl5 = quest(1114).intl;
  obj11.text = intl5.string(quest(1114).t.JF6W66);
  obj9.label = closure_5(quest(8593).FormLabel, obj11);
  obj9.onPress = function onPress() {
    _undefined3();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[3] = closure_5(quest(7200).ActionSheetRow, obj9);
  const obj12 = { icon: null, label: null, onPress: null };
  const obj10 = { IconComponent: quest(15111).UnsendIcon };
  obj12.icon = closure_5(quest(7200).ActionSheetRow.Icon, { IconComponent: quest(6970).EyeIcon });
  const obj14 = { text: null };
  const intl6 = quest(1114).intl;
  obj14.text = intl6.string(quest(1114).t["lL6/zF"]);
  obj12.label = closure_5(quest(8593).FormLabel, obj14);
  obj12.onPress = function onPress() {
    const items = [quest.id];
    QuestActionCreators.markAdContentUnseen(AdCreativeType.AdCreativeType.QUEST, items);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[4] = closure_5(quest(7200).ActionSheetRow, obj12);
  const obj15 = { icon: null, label: null, onPress: null };
  const obj13 = { IconComponent: quest(6970).EyeIcon };
  obj15.icon = closure_5(quest(7200).ActionSheetRow.Icon, { IconComponent: quest(6970).EyeIcon });
  const obj17 = { text: null };
  const intl7 = quest(1114).intl;
  obj17.text = intl7.string(quest(1114).t.tx5Ax5);
  obj15.label = closure_5(quest(8593).FormLabel, obj17);
  obj15.onPress = function onPress() {
    let obj = { screen: UserSettingsSections.QUEST_PREVIEW_TOOL_2, params: null };
    obj = { questId: quest.id };
    obj.params = obj;
    obj.openUserSettings(obj);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[5] = closure_5(quest(7200).ActionSheetRow, obj15);
  const obj18 = { icon: null, label: null, onPress: null };
  const obj16 = { IconComponent: quest(6970).EyeIcon };
  obj18.icon = closure_5(quest(7200).ActionSheetRow.Icon, { IconComponent: quest(4507).CopyIcon });
  const obj20 = { text: null };
  const intl8 = quest(1114).intl;
  obj20.text = intl8.string(quest(1114).t.oisrFi);
  obj18.label = closure_5(quest(8593).FormLabel, obj20);
  obj18.onPress = function onPress() {
    ClipboardUtils.copy(quest.id);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[6] = closure_5(quest(7200).ActionSheetRow, obj18);
  obj.children = items;
  return closure_6(quest(7200).ActionSheetRow.Group, obj);
}
function QuestDockShareRow(quest) {
  quest = quest.quest;
  let obj = { icon: null, label: null, onPress: null };
  obj = { IconComponent: quest(4507).CopyIcon };
  obj.icon = closure_5(quest(7200).ActionSheetRow.Icon, obj);
  obj = { text: null };
  const intl = quest(1114).intl;
  obj.text = intl.string(quest(1114).t.WqhZss);
  obj.label = closure_5(quest(8593).FormLabel, obj);
  obj.onPress = function onPress() {
    const obj = {
      content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
    };
    obj.copyShareLink(quest.id, obj);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return closure_5(quest(7200).ActionSheetRow, obj);
}
function QuestDockDisclosureRow(creative) {
  creative = creative.creative;
  let obj = { icon: null, label: null, onPress: null };
  obj = { IconComponent: creative(11105).CircleQuestionIcon };
  obj.icon = closure_5(creative(7200).ActionSheetRow.Icon, obj);
  obj = { text: null };
  const intl = creative(1114).intl;
  obj.text = intl.string(creative(1114).t.GcsZKJ);
  obj.label = closure_5(creative(8593).FormLabel, obj);
  obj.onPress = function onPress() {
    let obj = { creative, isTargetedDisclosure: true, trackingCtx: null };
    obj = {
      content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
    };
    obj.trackingCtx = obj;
    obj.showModal(obj);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return closure_5(creative(7200).ActionSheetRow, obj);
}
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContextMenuActionSheet.tsx");

export default function QuestDockContextMenuActionSheet(creative) {
  creative = creative.creative;
  let obj;
  function trackInternalClick(CONTEXT_MENU_HIDE_CONTENT) {
    obj = AdAnalyticsInterfaceExperiment;
    if (
      obj.shouldMigrateToAdAnalyticsInterface(
        AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
        "quest_dock_context_menu",
      )
    ) {
      let tmpResult = captureAdUserAction;
      obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
      const merged = Object.assign(adCreativeType);
      obj.questContentCTA = CONTEXT_MENU_HIDE_CONTENT;
      obj.surfaceId = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      obj.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      tmpResult.captureAdUserAction(obj);
    } else if (adCreativeType.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
      tmpResult = AnalyticsActions;
      obj = {
        questId: adCreativeType.adCreativeId,
        questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
        questContentCTA: CONTEXT_MENU_HIDE_CONTENT,
        sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      };
      const result = tmpResult.trackQuestContentClicked(obj);
    } else {
      const obj1 = {
        adContentId: null,
        adCreativeType: null,
        questContent: null,
        questContentCTA: null,
        sourceQuestContent: null,
      };
      ({ adCreativeId: obj3.adContentId, adCreativeType: obj3.adCreativeType } = adCreativeType);
      obj1.questContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      obj1.questContentCTA = CONTEXT_MENU_HIDE_CONTENT;
      obj1.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      const result1 = AnalyticsActions.trackAdContentClicked(obj1);
      const tmpResult1 = AnalyticsActions;
    }
  }
  obj = creative(obj[4]);
  importDefault = obj.getCreativeAnalyticsParams(creative);
  let type = creative.type;
  if (creative(obj[5]).AdCreativeType.QUEST === type) {
    let tmpResult = tmp(tmp2[6]);
    let buttonLabel = tmpResult.getExternalCtaLabel(creative.quest);
    const intl = tmp(tmp2[7]).intl;
    let stringResult = intl.string(tmp(tmp2[7]).t.LLLLPD);
  } else if (tmp(tmp2[5]).AdCreativeType.BOUNTY === type) {
    buttonLabel = creative.bounty.cta.buttonLabel;
    const intl4 = tmp(tmp2[7]).intl;
    stringResult = intl4.string(tmp(tmp2[7]).t.QUe9zz);
  }
  obj = {
    content: tmp(tmp2[8]).QuestContent.QUEST_BAR_MOBILE,
    ctaContent: tmp(tmp2[9]).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK,
    impressionId: creative.impressionId,
    sourceQuestContent: tmp(tmp2[8]).QuestContent.QUEST_BAR_MOBILE,
  };
  obj = {
    icon: closure_5(creative(obj[14]).ActionSheetRow.Icon, { IconComponent: creative(obj[15]).LinkExternalMediumIcon }),
    label: closure_5(creative(obj[16]).FormLabel, { text: buttonLabel }),
    onPress() {
      const type = creative.type;
      if (AdCreativeType.AdCreativeType.QUEST === type) {
        let tmp2Result = QuestPlatformUtils;
        tmp2Result.openGameLinkDirectly(creative.quest, obj);
      } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
        tmp2Result = QuestPlatformUtils;
        obj = {
          adContentId: creative.bounty.id,
          adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
          cta: creative.bounty.cta,
        };
        const result = tmp2Result.openAdGameLinkDirectly(obj, obj);
      }
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
  };
  let obj1 = { IconComponent: creative(obj[15]).LinkExternalMediumIcon };
  const items = [closure_5(creative(obj[14]).ActionSheetRow, obj)];
  let tmp4Result = null;
  if (creative.type === creative(obj[5]).AdCreativeType.QUEST) {
    tmpResult = tmp(tmp2[20]);
    tmp4Result = null;
    if (tmpResult.isShareableQuest(creative.quest.config)) {
      let obj2 = { quest: creative.quest };
      tmp4Result = closure_5(QuestDockShareRow, obj2);
    }
  }
  items[1] = tmp4Result;
  const children = [closure_6(creative(obj[14]).ActionSheetRow.Group, { hasIcons: true, children: items }), ,];
  let obj3 = { hasIcons: true, children: null };
  const obj4 = { icon: null, label: null, onPress: null };
  const tmp5 = closure_5(creative(obj[14]).ActionSheetRow, obj);
  obj4.icon = closure_5(creative(obj[14]).ActionSheetRow.Icon, { IconComponent: require("WreathIcon") });
  obj4.label = closure_5(creative(obj[16]).FormLabel, { text: stringResult });
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
  const items2 = [closure_5(creative(obj[14]).ActionSheetRow, obj4), closure_5(QuestDockDisclosureRow, { creative })];
  const obj6 = { icon: null, label: null, subLabel: null, onPress: null };
  const obj5 = { IconComponent: require("WreathIcon") };
  obj6.icon = closure_5(creative(obj[14]).ActionSheetRow.Icon, { IconComponent: creative(obj[23]).XSmallIcon });
  const obj8 = { text: null };
  const intl2 = tmp(tmp2[7]).intl;
  obj8.text = intl2.string(creative(obj[7]).t.NN79E9);
  obj6.label = closure_5(creative(obj[16]).FormLabel, obj8);
  const intl3 = tmp(tmp2[7]).intl;
  obj6.subLabel = intl3.string(creative(obj[7]).t.V6htN5);
  obj6.onPress = trackInternalClick(function* () {
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
            trackInternalClick(tmp2(7728).QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT);
            const type = creative.type;
            if (tmp2(5451).AdCreativeType.QUEST === type) {
              const obj7 = tmp2(11276);
              const dismissQuestContentResult = tmp2(11276).dismissQuestContent(
                creative.quest.id,
                tmp2(5447).QuestContent.QUEST_BAR_MOBILE,
              );
              v2(4527).hideActionSheet();
              v2 = 1;
              dependencyMap = 1;
              let obj1 = { value: dismissQuestContentResult, done: false };
              return obj1;
            } else if (tmp2(5451).AdCreativeType.BOUNTY === type) {
              let obj3 = tmp2(11524);
              const dismissAdContentResult = obj3.dismissAdContent(closure_1, tmp2(5447).QuestContent.QUEST_BAR_MOBILE);
              v2(4527).hideActionSheet();
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
            obj1 = tmp2(15106);
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
  items2[2] = closure_5(creative(obj[14]).ActionSheetRow, obj6);
  obj3.children = items2;
  children[1] = closure_6(creative(obj[14]).ActionSheetRow.Group, obj3);
  tmp4Result = null;
  if (creative.type === creative(obj[5]).AdCreativeType.QUEST) {
    tmp4Result = null;
    if (creative.quest.preview) {
      const obj9 = { quest: creative.quest };
      tmp4Result = closure_5(QuestDockPreviewTools, obj9);
    }
  }
  children[2] = tmp4Result;
  return closure_6(creative(obj[19]).ActionSheet, { children });
}
