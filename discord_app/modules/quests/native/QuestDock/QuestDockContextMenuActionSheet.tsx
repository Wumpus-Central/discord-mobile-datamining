// === Module 14930: QuestDockPreviewTools ===

// Module 14930 (QuestDockPreviewTools)
import noopAll from "noop" /* 19 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { UserSettingsSections } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
function QuestDockPreviewTools(quest) {
  quest = quest.quest;
  c1 = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  let obj = quest(11303);
  const questPreviewActions = obj.useQuestPreviewActions(quest.id);
  ({ handleComplete: c1, handleProgress: c2, handleResetDismissibilityClick: c3, handleResetStatusClick: c4 } = questPreviewActions);
  obj = { title: null, hasIcons: true, children: null };
  const intl = quest(1233).intl;
  obj[0] = intl.string(quest(1233).t["Ape+mm"]);
  obj = { icon: callback(quest(5999).ActionSheetRow.Icon, { IconComponent: quest(8858).TrophyIcon }), label: null, onPress: null };
  const obj2 = { text: null };
  const intl2 = quest(1233).intl;
  obj2[0] = intl2.string(quest(1233).t.jQEfRT);
  obj[1] = callback(quest(8372).FormLabel, obj2);
  obj[2] = function onPress() {
    _undefined();
    _undefined(_undefined2[18]).hideActionSheet();
  };
  let items = [callback(quest(5999).ActionSheetRow, obj), , , , , , ];
  const obj3 = { icon: null, label: null, onPress: null };
  obj1 = { IconComponent: quest(8858).TrophyIcon };
  obj3[0] = callback(quest(5999).ActionSheetRow.Icon, { IconComponent: quest(14934).RedoIcon });
  const obj5 = { text: null };
  const intl3 = quest(1233).intl;
  obj5[0] = intl3.string(quest(1233).t.cKSLr4);
  obj3[1] = callback(quest(8372).FormLabel, obj5);
  obj3[2] = function onPress() {
    _undefined2(0.9 * Math.random() + 0.03);
    _undefined(_undefined2[18]).hideActionSheet();
  };
  items[1] = callback(quest(5999).ActionSheetRow, obj3);
  const obj6 = { icon: null, label: null, onPress: null };
  const obj4 = { IconComponent: quest(14934).RedoIcon };
  obj6[0] = callback(quest(5999).ActionSheetRow.Icon, { IconComponent: quest(14936).UndoIcon });
  const obj8 = { text: null };
  const intl4 = quest(1233).intl;
  obj8[0] = intl4.string(quest(1233).t.taqkwK);
  obj6[1] = callback(quest(8372).FormLabel, obj8);
  obj6[2] = function onPress() {
    _undefined4();
    _undefined(_undefined2[18]).hideActionSheet();
  };
  items[2] = callback(quest(5999).ActionSheetRow, obj6);
  const obj9 = { icon: null, label: null, onPress: null };
  const obj7 = { IconComponent: quest(14936).UndoIcon };
  obj9[0] = callback(quest(5999).ActionSheetRow.Icon, { IconComponent: quest(14938).UnsendIcon });
  const obj11 = { text: null };
  const intl5 = quest(1233).intl;
  obj11[0] = intl5.string(quest(1233).t.JF6W66);
  obj9[1] = callback(quest(8372).FormLabel, obj11);
  obj9[2] = function onPress() {
    _undefined3();
    _undefined(_undefined2[18]).hideActionSheet();
  };
  items[3] = callback(quest(5999).ActionSheetRow, obj9);
  const obj12 = { icon: null, label: null, onPress: null };
  const obj10 = { IconComponent: quest(14938).UnsendIcon };
  obj12[0] = callback(quest(5999).ActionSheetRow.Icon, { IconComponent: quest(7752).EyeIcon });
  const obj14 = { text: null };
  const intl6 = quest(1233).intl;
  obj14[0] = intl6.string(quest(1233).t["lL6/zF"]);
  obj12[1] = callback(quest(8372).FormLabel, obj14);
  obj12[2] = function onPress() {
    const items = [quest.id];
    quest(_undefined2[24]).markAdContentUnseen(quest(_undefined2[5]).AdCreativeType.QUEST, items);
    const obj = quest(_undefined2[24]);
    _undefined(_undefined2[18]).hideActionSheet();
  };
  items[4] = callback(quest(5999).ActionSheetRow, obj12);
  const obj15 = { icon: null, label: null, onPress: null };
  const obj13 = { IconComponent: quest(7752).EyeIcon };
  obj15[0] = callback(quest(5999).ActionSheetRow.Icon, { IconComponent: quest(7752).EyeIcon });
  const obj17 = { text: null };
  const intl7 = quest(1233).intl;
  obj17[0] = intl7.string(quest(1233).t.tx5Ax5);
  obj15[1] = callback(quest(8372).FormLabel, obj17);
  obj15[2] = function onPress() {
    let obj = quest(_undefined2[33]);
    obj = { screen: _undefined4.QUEST_PREVIEW_TOOL_2, params: obj };
    obj = { questId: quest.id };
    obj.openUserSettings(obj);
    _undefined(_undefined2[18]).hideActionSheet();
  };
  items[5] = callback(quest(5999).ActionSheetRow, obj15);
  const obj18 = { icon: null, label: null, onPress: null };
  const obj16 = { IconComponent: quest(7752).EyeIcon };
  obj18[0] = callback(quest(5999).ActionSheetRow.Icon, { IconComponent: quest(4425).CopyIcon });
  const obj20 = { text: null };
  const intl8 = quest(1233).intl;
  obj20[0] = intl8.string(quest(1233).t.oisrFi);
  obj18[1] = callback(quest(8372).FormLabel, obj20);
  obj18[2] = function onPress() {
    quest(_undefined2[35]).copy(quest.id);
    const obj = quest(_undefined2[35]);
    _undefined(_undefined2[18]).hideActionSheet();
  };
  items[6] = callback(quest(5999).ActionSheetRow, obj18);
  obj[2] = items;
  return callback2(quest(5999).ActionSheetRow.Group, obj);
}
function QuestDockShareRow(quest) {
  quest = quest.quest;
  let obj = { icon: null, label: null, onPress: null };
  obj = { IconComponent: quest(4425).CopyIcon };
  obj[0] = callback(quest(5999).ActionSheetRow.Icon, obj);
  obj = { text: null };
  const intl = quest(1233).intl;
  obj[0] = intl.string(quest(1233).t.WqhZss);
  obj[1] = callback(quest(8372).FormLabel, obj);
  obj[2] = function onPress() {
    let obj = quest(closure_1_2[6]);
    obj = { content: quest(closure_1_2[8]).QuestContent.QUEST_BAR_MOBILE, ctaContent: quest(closure_1_2[9]).QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: quest(closure_1_2[8]).QuestContent.QUEST_BAR_MOBILE };
    obj.copyShareLink(quest.id, obj);
    closure_1_1(closure_1_2[18]).hideActionSheet();
  };
  return callback(quest(5999).ActionSheetRow, obj);
}
function QuestDockDisclosureRow(creative) {
  creative = creative.creative;
  let obj = { icon: null, label: null, onPress: null };
  obj = { IconComponent: creative(11074).CircleQuestionIcon };
  obj[0] = callback(creative(5999).ActionSheetRow.Icon, obj);
  obj = { text: null };
  const intl = creative(1233).intl;
  obj[0] = intl.string(creative(1233).t.GcsZKJ);
  obj[1] = callback(creative(8372).FormLabel, obj);
  obj[2] = function onPress() {
    let obj = closure_1_1(closure_1_2[37]);
    obj = { creative, isTargetedDisclosure: true, trackingCtx: null };
    obj = { content: creative(closure_1_2[8]).QuestContent.QUEST_BAR_MOBILE, ctaContent: creative(closure_1_2[9]).QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: creative(closure_1_2[8]).QuestContent.QUEST_BAR_MOBILE };
    obj[2] = obj;
    obj.showModal(obj);
    closure_1_1(closure_1_2[18]).hideActionSheet();
  };
  return callback(creative(5999).ActionSheetRow, obj);
}
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContextMenuActionSheet.tsx");

export default function QuestDockContextMenuActionSheet(creative) {
  creative = creative.creative;
  importDefault = undefined;
  let obj;
  function trackInternalClick(CONTEXT_MENU_LEARN_MORE) {
    obj = creative(obj[10]);
    if (obj.shouldMigrateToAdAnalyticsInterface(creative(obj[10]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_context_menu")) {
      let tmpResult = tmp(tmp2[11]);
      obj = { type: null };
      obj[0] = tmp(tmp2[12]).AdUserActionType.CLICK_INTERNAL;
      const merged = Object.assign(lib);
      obj.questContentCTA = CONTEXT_MENU_LEARN_MORE;
      obj.surfaceId = tmp(tmp2[8]).QuestContent.QUEST_BAR_MOBILE;
      obj.sourceQuestContent = tmp(tmp2[8]).QuestContent.QUEST_BAR_MOBILE;
      tmpResult.captureAdUserAction(obj);
    } else if (lib.adCreativeType === tmp(tmp2[5]).AdCreativeType.QUEST) {
      tmpResult = tmp(tmp2[13]);
      obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
      obj[0] = tmp3.adCreativeId;
      obj[1] = tmp(tmp2[8]).QuestContent.QUEST_BAR_MOBILE;
      obj[2] = CONTEXT_MENU_LEARN_MORE;
      obj[3] = tmp(tmp2[8]).QuestContent.QUEST_BAR_MOBILE;
      const result = tmpResult.trackQuestContentClicked(obj);
    } else {
      obj1 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
      ({ adCreativeId: obj3[0], adCreativeType: obj3[1] } = tmp3);
      obj1[2] = tmp(tmp2[8]).QuestContent.QUEST_BAR_MOBILE;
      obj1[3] = CONTEXT_MENU_LEARN_MORE;
      obj1[4] = tmp(tmp2[8]).QuestContent.QUEST_BAR_MOBILE;
      const result1 = tmp(tmp2[13]).trackAdContentClicked(obj1);
      const tmpResult1 = tmp(tmp2[13]);
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
  obj = { content: tmp(tmp2[8]).QuestContent.QUEST_BAR_MOBILE, ctaContent: tmp(tmp2[9]).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId: creative.impressionId, sourceQuestContent: tmp(tmp2[8]).QuestContent.QUEST_BAR_MOBILE };
  obj = {
    icon: callback(creative(obj[14]).ActionSheetRow.Icon, { IconComponent: creative(obj[15]).LinkExternalMediumIcon }),
    label: callback(creative(obj[16]).FormLabel, { text: buttonLabel }),
    onPress() {
      const type = creative.type;
      if (creative(obj[5]).AdCreativeType.QUEST === type) {
        let tmp2Result = tmp2(tmp3[17]);
        tmp2Result.openGameLinkDirectly(tmp.quest, obj);
      } else if (tmp2(tmp3[5]).AdCreativeType.BOUNTY === type) {
        tmp2Result = tmp2(tmp3[17]);
        obj = { adContentId: null, adCreativeType: null, cta: null };
        obj[0] = tmp.bounty.id;
        obj[1] = tmp2(tmp3[5]).AdCreativeType.BOUNTY;
        obj[2] = tmp.bounty.cta;
        const result = tmp2Result.openAdGameLinkDirectly(obj, obj);
      }
      lib(obj[18]).hideActionSheet();
    }
  };
  obj1 = { IconComponent: creative(obj[15]).LinkExternalMediumIcon };
  const items = [callback(creative(obj[14]).ActionSheetRow, obj), ];
  let tmp4Result = null;
  if (creative.type === creative(obj[5]).AdCreativeType.QUEST) {
    tmpResult = tmp(tmp2[20]);
    tmp4Result = null;
    if (tmpResult.isShareableQuest(creative.quest.config)) {
      let obj2 = { quest: null };
      obj2[0] = creative.quest;
      tmp4Result = tmp4(QuestDockShareRow, obj2);
    }
  }
  items[1] = tmp4Result;
  const children = [closure_6(creative(obj[14]).ActionSheetRow.Group, { hasIcons: true, children: items }), , ];
  const obj3 = { hasIcons: true, children: null };
  let obj4 = { icon: null, label: null, onPress: null };
  const tmp5 = callback(creative(obj[14]).ActionSheetRow, obj);
  obj4[0] = callback(creative(obj[14]).ActionSheetRow.Icon, { IconComponent: importDefault(obj[21]) });
  obj4[1] = callback(creative(obj[16]).FormLabel, { text: stringResult });
  obj4[2] = function onPress() {
    trackInternalClick(creative(obj[9]).QuestContentCTA.CONTEXT_MENU_LEARN_MORE);
    const type = creative.type;
    if (creative(obj[5]).AdCreativeType.QUEST === type) {
      let tmpResult = tmp(tmp2[22]);
      obj = { scrollToQuestId: null, fromContent: null };
      obj[0] = creative.quest.id;
      obj[1] = tmp(tmp2[8]).QuestContent.QUEST_BAR_MOBILE;
      tmpResult.openQuestHome(obj);
    } else if (tmp(tmp2[5]).AdCreativeType.BOUNTY === type) {
      tmpResult = tmp(tmp2[22]);
      obj = { fromContent: null };
      obj[0] = tmp(tmp2[8]).QuestContent.QUEST_BAR_MOBILE;
      tmpResult.openQuestHome(obj);
    }
    lib(obj[18]).hideActionSheet();
  };
  const items2 = [callback(creative(obj[14]).ActionSheetRow, obj4), callback(QuestDockDisclosureRow, { creative }), ];
  const obj6 = { icon: null, label: null, subLabel: null, onPress: null };
  let obj5 = { IconComponent: importDefault(obj[21]) };
  obj6[0] = callback(creative(obj[14]).ActionSheetRow.Icon, { IconComponent: creative(obj[23]).XSmallIcon });
  const obj8 = { text: null };
  const intl2 = tmp(tmp2[7]).intl;
  obj8[0] = intl2.string(creative(obj[7]).t.NN79E9);
  obj6[1] = callback(creative(obj[16]).FormLabel, obj8);
  const intl3 = tmp(tmp2[7]).intl;
  obj6[2] = intl3.string(creative(obj[7]).t.V6htN5);
  obj6[3] = trackInternalClick(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
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
            closure_0 = tmp2;
            closure_1_3(closure_1_0(7483).QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT);
            const type = closure_1_0.type;
            if (closure_1_0(7456).AdCreativeType.QUEST === type) {
              const obj5 = closure_1_0(11133);
              const dismissQuestContentResult = closure_1_0(11133).dismissQuestContent(tmp37.quest.id, closure_1_0(5398).QuestContent.QUEST_BAR_MOBILE);
              v0(4445).hideActionSheet();
              v0 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = dismissQuestContentResult;
              return obj1;
            } else {
              if (closure_1_0(7456).AdCreativeType.BOUNTY === type) {
                let obj2 = closure_1_0(11343);
                obj2.dismissAdContent(v0, closure_1_0(5398).QuestContent.QUEST_BAR_MOBILE);
                v0(4445).hideActionSheet();
                const obj4 = v0(4445);
              }
              dependencyMap = 3;
            }
            tmp37 = closure_1_0;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          obj = closure_1_0(14933);
          const result = obj.displayQuestDismissalToast();
        }
        dependencyMap = 3;
        obj2 = { value: null, done: true };
        obj2[0] = arg1;
        return obj2;
      } catch (tmp27) {
        dependencyMap = tmp;
        throw tmp27;
      }
    }
  });
  items2[2] = callback(creative(obj[14]).ActionSheetRow, obj6);
  obj3[1] = items2;
  children[1] = closure_6(creative(obj[14]).ActionSheetRow.Group, obj3);
  tmp4Result = null;
  if (creative.type === creative(obj[5]).AdCreativeType.QUEST) {
    tmp4Result = null;
    if (creative.quest.preview) {
      const obj9 = { quest: null };
      obj9[0] = creative.quest;
      tmp4Result = tmp4(QuestDockPreviewTools, obj9);
    }
  }
  children[2] = tmp4Result;
  return closure_6(creative(obj[19]).ActionSheet, { children });
};