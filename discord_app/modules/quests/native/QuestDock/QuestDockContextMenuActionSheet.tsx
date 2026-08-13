// discord_app/modules/quests/native/QuestDock/QuestDockContextMenuActionSheet.tsx
import useQuests from "useQuests";
import "emitClickEventWithCreative";
import { UserSettingsSections } from "ME";
import jsxProd from "AdCreativeType";
import { WreathIcon } from "WreathIcon.tsx";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let result = require("ME").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContextMenuActionSheet.tsx");

export default function QuestDockContextMenuActionSheet(quest) {
  let c1;
  let c2;
  let c3;
  let c4;
  quest = quest.quest;
  let importDefault;
  let dependencyMap;
  let callback;
  c4 = undefined;
  const tmp = quest;
  let obj = quest(7226);
  const isShareableQuestResult = obj.isShareableQuest(quest.config);
  let obj1 = quest(10420);
  const questPreviewActions = obj1.useQuestPreviewActions(quest.id);
  ({ handleComplete: c1, handleProgress: c2, handleResetDismissibilityClick: c3, handleResetStatusClick: c4 } = questPreviewActions);
  let obj2 = quest(10442);
  const externalCtaLabel = obj2.getExternalCtaLabel(quest);
  obj = { icon: null, label: null, onPress: null };
  obj = { IconComponent: null };
  obj[0] = quest(12723).LinkExternalMediumIcon;
  obj[0] = callback2(quest(5806).ActionSheetRow.Icon, obj);
  obj[1] = callback2(quest(8012).FormLabel, { text: externalCtaLabel });
  obj[2] = function onPress() {
    let obj = quest(_undefined2[11]);
    obj = { content: quest(_undefined2[12]).QuestContent.QUEST_BAR_MOBILE, ctaContent: quest(_undefined2[13]).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, sourceQuestContent: quest(_undefined2[12]).QuestContent.QUEST_BAR_MOBILE };
    obj.openGameLinkDirectly(quest, obj);
    _undefined(_undefined2[14]).hideActionSheet();
  };
  let items = [callback2(quest(5806).ActionSheetRow, obj), ];
  let tmp7Result = isShareableQuestResult;
  if (isShareableQuestResult) {
    obj1 = { icon: null, label: null, onPress: null };
    obj2 = { IconComponent: null };
    obj2[0] = tmp(4290).CopyIcon;
    obj1[0] = tmp7(tmp(5806).ActionSheetRow.Icon, obj2);
    let obj3 = { text: null };
    const intl = tmp(1236).intl;
    obj3[0] = intl.string(tmp(1236).t.WqhZss);
    obj1[1] = tmp7(tmp(8012).FormLabel, obj3);
    obj1[2] = function onPress() {
      let obj = quest(_undefined2[6]);
      obj = { content: quest(_undefined2[12]).QuestContent.QUEST_BAR_MOBILE, ctaContent: quest(_undefined2[13]).QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: quest(_undefined2[12]).QuestContent.QUEST_BAR_MOBILE };
      obj.copyShareLink(quest.id, obj);
      _undefined(_undefined2[14]).hideActionSheet();
    };
    tmp7Result = tmp7(tmp(5806).ActionSheetRow, obj1);
  }
  items[1] = tmp7Result;
  const children = [closure_6(quest(5806).ActionSheetRow.Group, { hasIcons: true, children: items }), , ];
  const obj4 = { hasIcons: true, children: null };
  const obj5 = { icon: null, label: null, onPress: null };
  const obj6 = { IconComponent: null };
  obj6[0] = WreathIcon;
  obj5[0] = callback2(tmp(5806).ActionSheetRow.Icon, obj6);
  const obj7 = { text: null };
  const intl2 = tmp(1236).intl;
  obj7[0] = intl2.string(tmp(1236).t.LLLLPD);
  obj5[1] = callback2(tmp(8012).FormLabel, obj7);
  obj5[2] = function onPress() {
    let obj = quest(_undefined2[18]);
    if (obj.shouldMigrateToAdAnalyticsInterface(quest(_undefined2[18]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_context_menu")) {
      let tmpResult = tmp(tmp2[19]);
      obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null };
      obj[0] = tmp(tmp2[20]).AdUserActionType.CLICK_INTERNAL;
      obj[1] = tmp(tmp2[21]).AdCreativeType.QUEST;
      obj[2] = quest.id;
      obj[3] = tmp(tmp2[13]).QuestContentCTA.CONTEXT_MENU_LEARN_MORE;
      obj[4] = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
      obj[5] = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
      tmpResult.captureAdUserAction(obj);
      let tmp3 = quest;
    } else {
      tmpResult = tmp(tmp2[22]);
      obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
      tmp3 = quest;
      obj[0] = quest.id;
      obj[1] = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
      obj[2] = tmp(tmp2[13]).QuestContentCTA.CONTEXT_MENU_LEARN_MORE;
      obj[3] = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
      const result = tmpResult.trackQuestContentClicked(obj);
    }
    const tmpResult1 = quest(_undefined2[23]);
    tmpResult1.openQuestHome({ scrollToQuestId: tmp3.id, fromContent: quest(_undefined2[12]).QuestContent.QUEST_BAR_MOBILE });
    const obj1 = { scrollToQuestId: tmp3.id, fromContent: quest(_undefined2[12]).QuestContent.QUEST_BAR_MOBILE };
    _undefined(_undefined2[14]).hideActionSheet();
  };
  const items2 = [callback2(tmp(5806).ActionSheetRow, obj5), , ];
  let obj8 = { icon: null, label: null, onPress: null };
  let obj9 = { IconComponent: null };
  obj9[0] = tmp(10201).CircleQuestionIcon;
  obj8[0] = callback2(tmp(5806).ActionSheetRow.Icon, obj9);
  let obj10 = { text: null };
  const intl3 = tmp(1236).intl;
  obj10[0] = intl3.string(tmp(1236).t.GcsZKJ);
  obj8[1] = callback2(tmp(8012).FormLabel, obj10);
  obj8[2] = function onPress() {
    let obj = _undefined(_undefined2[25]);
    obj = { quest, isTargetedDisclosure: true, trackingCtx: null };
    obj = { content: quest(_undefined2[12]).QuestContent.QUEST_BAR_MOBILE, ctaContent: quest(_undefined2[13]).QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: quest(_undefined2[12]).QuestContent.QUEST_BAR_MOBILE };
    obj[2] = obj;
    obj.showModal(obj);
    _undefined(_undefined2[14]).hideActionSheet();
  };
  items2[1] = callback2(tmp(5806).ActionSheetRow, obj8);
  const obj11 = { icon: null, label: null, subLabel: null, onPress: null };
  const obj12 = { IconComponent: null };
  obj12[0] = tmp(5366).XSmallIcon;
  obj11[0] = callback2(tmp(5806).ActionSheetRow.Icon, obj12);
  const obj13 = { text: null };
  const intl4 = tmp(1236).intl;
  obj13[0] = intl4.string(tmp(1236).t.NN79E9);
  obj11[1] = callback2(tmp(8012).FormLabel, obj13);
  const intl5 = tmp(1236).intl;
  obj11[2] = intl5.string(tmp(1236).t.V6htN5);
  obj11[3] = callback(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
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
            let closure_0 = tmp4;
            let tmp25 = outer1_0;
            outer1_0(10422).dismissQuestContent(outer1_0.id, outer1_0(5205).QuestContent.QUEST_BAR_MOBILE);
            const obj8 = outer1_0(10422);
            v0(4310).hideActionSheet();
            const obj9 = v0(4310);
            let captureAdUserAction = outer1_0;
            if (obj10.shouldMigrateToAdAnalyticsInterface(outer1_0(9566).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_context_menu")) {
              captureAdUserAction = captureAdUserAction(9567).captureAdUserAction;
              const obj1 = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null };
              obj1[0] = outer1_0(9571).AdUserActionType.CLICK_INTERNAL;
              obj1[1] = outer1_0(7233).AdCreativeType.QUEST;
              obj1[2] = tmp25.id;
              obj1[3] = outer1_0(7232).QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT;
              obj1[4] = outer1_0(5205).QuestContent.QUEST_BAR_MOBILE;
              tmp25 = outer1_0;
              obj1[5] = outer1_0(5205).QuestContent.QUEST_BAR_MOBILE;
              captureAdUserAction(obj1);
              const captureAdUserActionResult = captureAdUserAction(9567);
            } else {
              const obj2 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
              obj2[0] = tmp25.id;
              obj2[1] = outer1_0(5205).QuestContent.QUEST_BAR_MOBILE;
              obj2[2] = outer1_0(7232).QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT;
              obj2[3] = outer1_0(5205).QuestContent.QUEST_BAR_MOBILE;
              const result = captureAdUserAction(7222).trackQuestContentClicked(obj2);
              const captureAdUserActionResult2 = captureAdUserAction(7222);
            }
            v0 = 1;
            dependencyMap = 1;
            obj10 = outer1_0(9566);
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          obj = outer1_0(14424);
          const result1 = obj.displayQuestDismissalToast();
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp28) {
        dependencyMap = tmp;
        throw tmp28;
      }
    }
  });
  items2[2] = callback2(tmp(5806).ActionSheetRow, obj11);
  obj4[1] = items2;
  children[1] = closure_6(tmp(5806).ActionSheetRow.Group, obj4);
  let preview = quest.preview;
  if (preview) {
    const obj14 = { title: null, hasIcons: true, children: null };
    const intl6 = tmp(1236).intl;
    obj14[0] = intl6.string(tmp(1236).t["Ape+mm"]);
    const obj15 = { icon: null, label: null, onPress: null };
    const obj16 = { IconComponent: null };
    obj16[0] = tmp(7771).TrophyIcon;
    obj15[0] = tmp7(tmp(5806).ActionSheetRow.Icon, obj16);
    const obj17 = { text: null };
    const intl7 = tmp(1236).intl;
    obj17[0] = intl7.string(tmp(1236).t.jQEfRT);
    obj15[1] = tmp7(tmp(8012).FormLabel, obj17);
    obj15[2] = function onPress() {
      _undefined();
      _undefined(_undefined2[14]).hideActionSheet();
    };
    const items3 = [tmp7(tmp(5806).ActionSheetRow, obj15), , , , , , ];
    const obj18 = { icon: null, label: null, onPress: null };
    const obj19 = { IconComponent: null };
    obj19[0] = tmp(14425).RedoIcon;
    obj18[0] = tmp7(tmp(5806).ActionSheetRow.Icon, obj19);
    const obj20 = { text: null };
    const intl8 = tmp(1236).intl;
    obj20[0] = intl8.string(tmp(1236).t.cKSLr4);
    obj18[1] = tmp7(tmp(8012).FormLabel, obj20);
    obj18[2] = function onPress() {
      _undefined2(0.9 * Math.random() + 0.03);
      _undefined(_undefined2[14]).hideActionSheet();
    };
    items3[1] = tmp7(tmp(5806).ActionSheetRow, obj18);
    const obj21 = { icon: null, label: null, onPress: null };
    const obj22 = { IconComponent: null };
    obj22[0] = tmp(14427).UndoIcon;
    obj21[0] = tmp7(tmp(5806).ActionSheetRow.Icon, obj22);
    const obj23 = { text: null };
    const intl9 = tmp(1236).intl;
    obj23[0] = intl9.string(tmp(1236).t.taqkwK);
    obj21[1] = tmp7(tmp(8012).FormLabel, obj23);
    obj21[2] = function onPress() {
      _undefined4();
      _undefined(_undefined2[14]).hideActionSheet();
    };
    items3[2] = tmp7(tmp(5806).ActionSheetRow, obj21);
    const obj24 = { icon: null, label: null, onPress: null };
    const obj25 = { IconComponent: null };
    obj25[0] = tmp(14429).UnsendIcon;
    obj24[0] = tmp7(tmp(5806).ActionSheetRow.Icon, obj25);
    const obj26 = { text: null };
    const intl10 = tmp(1236).intl;
    obj26[0] = intl10.string(tmp(1236).t.JF6W66);
    obj24[1] = tmp7(tmp(8012).FormLabel, obj26);
    obj24[2] = function onPress() {
      _undefined3();
      _undefined(_undefined2[14]).hideActionSheet();
    };
    items3[3] = tmp7(tmp(5806).ActionSheetRow, obj24);
    const obj27 = { icon: null, label: null, onPress: null };
    const obj28 = { IconComponent: null };
    obj28[0] = tmp(8546).EyeIcon;
    obj27[0] = tmp7(tmp(5806).ActionSheetRow.Icon, obj28);
    const obj29 = { text: null };
    const intl11 = tmp(1236).intl;
    obj29[0] = intl11.string(tmp(1236).t["lL6/zF"]);
    obj27[1] = tmp7(tmp(8012).FormLabel, obj29);
    obj27[2] = function onPress() {
      const items = [quest.id];
      quest(_undefined2[27]).markAdContentUnseen(quest(_undefined2[21]).AdCreativeType.QUEST, items);
      const obj = quest(_undefined2[27]);
      _undefined(_undefined2[14]).hideActionSheet();
    };
    items3[4] = tmp7(tmp(5806).ActionSheetRow, obj27);
    const obj30 = { icon: null, label: null, onPress: null };
    const obj31 = { IconComponent: null };
    obj31[0] = tmp(8546).EyeIcon;
    obj30[0] = tmp7(tmp(5806).ActionSheetRow.Icon, obj31);
    const obj32 = { text: null };
    const intl12 = tmp(1236).intl;
    obj32[0] = intl12.string(tmp(1236).t.tx5Ax5);
    obj30[1] = tmp7(tmp(8012).FormLabel, obj32);
    obj30[2] = function onPress() {
      let obj = quest(_undefined2[34]);
      obj = { screen: _undefined4.QUEST_PREVIEW_TOOL_2, params: obj };
      obj = { questId: quest.id };
      obj.openUserSettings(obj);
      _undefined(_undefined2[14]).hideActionSheet();
    };
    items3[5] = tmp7(tmp(5806).ActionSheetRow, obj30);
    const obj33 = { icon: null, label: null, onPress: null };
    const obj34 = { IconComponent: null };
    obj34[0] = tmp(4290).CopyIcon;
    obj33[0] = tmp7(tmp(5806).ActionSheetRow.Icon, obj34);
    const obj35 = { text: null };
    const intl13 = tmp(1236).intl;
    obj35[0] = intl13.string(tmp(1236).t.oisrFi);
    obj33[1] = tmp7(tmp(8012).FormLabel, obj35);
    obj33[2] = function onPress() {
      quest(_undefined2[35]).copy(quest.id);
      const obj = quest(_undefined2[35]);
      _undefined(_undefined2[14]).hideActionSheet();
    };
    items3[6] = tmp7(tmp(5806).ActionSheetRow, obj33);
    obj14[2] = items3;
    preview = tmp6(tmp(5806).ActionSheetRow.Group, obj14);
  }
  children[2] = preview;
  return closure_6(quest(5804).ActionSheet, { children });
};