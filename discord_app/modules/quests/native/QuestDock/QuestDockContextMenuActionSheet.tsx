// discord_app/modules/quests/native/QuestDock/QuestDockContextMenuActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestUtils from "../QuestUtils.native.tsx";
import QuestActionCreators from "../../QuestActionCreators.tsx";
import captureAdUserAction from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import QuestCopyUtils from "../../utils/QuestCopyUtils.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import WreathIconDefault from "WreathIcon.tsx";
import QuestDisclosureModalActionCreatorsDefault from "../QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const QuestsExperimentLocations = fn(6745).QuestsExperimentLocations;
const UserSettingsSections = fn(1084).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(558);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockPreviewTools(quest) {
  const cResult = quest(handleProgress[6]).c(37);
  quest = quest.quest;
  let obj = quest(handleProgress[6]);
  const questPreviewActions = quest(handleProgress[29]).useQuestPreviewActions(quest.id);
  const handleComplete = questPreviewActions.handleComplete;
  handleProgress = questPreviewActions.handleProgress;
  const handleResetDismissibilityClick = questPreviewActions.handleResetDismissibilityClick;
  const handleResetStatusClick = questPreviewActions.handleResetStatusClick;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[11]).intl;
    const stringResult = intl.string(tmp(tmp2[11]).t["Ape+mm"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { IconComponent: tmp(tmp2[30]).TrophyIcon };
    const tmp9 = closure_6(tmp(tmp2[16]).ActionSheetRow.Icon, obj3);
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { text: null };
    const intl2 = tmp(tmp2[11]).intl;
    obj4.text = intl2.string(tmp(tmp2[11]).t.jQEfRT);
    const tmp12 = closure_6(tmp(tmp2[18]).FormLabel, obj4);
    cResult[2] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== handleComplete) {
    const obj5 = {
      icon: tmp7,
      label: tmp10,
      onPress() {
          handleComplete();
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp15 = closure_6(tmp(tmp2[16]).ActionSheetRow, obj5);
    cResult[3] = handleComplete;
    cResult[4] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { IconComponent: tmp(tmp2[31]).RedoIcon };
    const tmp18 = closure_6(tmp(tmp2[16]).ActionSheetRow.Icon, obj6);
    cResult[5] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { text: null };
    const intl3 = tmp(tmp2[11]).intl;
    obj7.text = intl3.string(tmp(tmp2[11]).t.cKSLr4);
    const tmp21 = closure_6(tmp(tmp2[18]).FormLabel, obj7);
    cResult[6] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[6];
  }
  if (cResult[7] !== handleProgress) {
    const obj8 = {
      icon: tmp16,
      label: tmp19,
      onPress() {
          handleProgress(0.9 * Math.random() + 0.03);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp24 = closure_6(tmp(tmp2[16]).ActionSheetRow, obj8);
    cResult[7] = handleProgress;
    cResult[8] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { IconComponent: tmp(tmp2[32]).UndoIcon };
    const tmp27 = closure_6(tmp(tmp2[16]).ActionSheetRow.Icon, obj9);
    cResult[9] = tmp27;
    let tmp25 = tmp27;
  } else {
    tmp25 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = { text: null };
    const intl4 = tmp(tmp2[11]).intl;
    obj10.text = intl4.string(tmp(tmp2[11]).t.taqkwK);
    const tmp30 = closure_6(tmp(tmp2[18]).FormLabel, obj10);
    cResult[10] = tmp30;
    let tmp28 = tmp30;
  } else {
    tmp28 = cResult[10];
  }
  if (cResult[11] !== handleResetStatusClick) {
    const obj11 = {
      icon: tmp25,
      label: tmp28,
      onPress() {
          handleResetStatusClick();
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp33 = closure_6(tmp(tmp2[16]).ActionSheetRow, obj11);
    cResult[11] = handleResetStatusClick;
    cResult[12] = tmp33;
    let tmp31 = tmp33;
  } else {
    tmp31 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const obj12 = { IconComponent: tmp(tmp2[33]).UnsendIcon };
    const tmp36 = closure_6(tmp(tmp2[16]).ActionSheetRow.Icon, obj12);
    cResult[13] = tmp36;
    let tmp34 = tmp36;
  } else {
    tmp34 = cResult[13];
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const obj13 = { text: null };
    const intl5 = tmp(tmp2[11]).intl;
    obj13.text = intl5.string(tmp(tmp2[11]).t.JF6W66);
    const tmp39 = closure_6(tmp(tmp2[18]).FormLabel, obj13);
    cResult[14] = tmp39;
    let tmp37 = tmp39;
  } else {
    tmp37 = cResult[14];
  }
  if (cResult[15] !== handleResetDismissibilityClick) {
    const obj14 = {
      icon: tmp34,
      label: tmp37,
      onPress() {
          handleResetDismissibilityClick();
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp42 = closure_6(tmp(tmp2[16]).ActionSheetRow, obj14);
    cResult[15] = handleResetDismissibilityClick;
    cResult[16] = tmp42;
    let tmp40 = tmp42;
  } else {
    tmp40 = cResult[16];
  }
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const obj15 = { IconComponent: tmp(tmp2[34]).EyeIcon };
    const tmp45 = closure_6(tmp(tmp2[16]).ActionSheetRow.Icon, obj15);
    cResult[17] = tmp45;
    let tmp43 = tmp45;
  } else {
    tmp43 = cResult[17];
  }
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const obj16 = { text: null };
    const intl6 = tmp(tmp2[11]).intl;
    obj16.text = intl6.string(tmp(tmp2[11]).t["lL6/zF"]);
    const tmp48 = closure_6(tmp(tmp2[18]).FormLabel, obj16);
    cResult[18] = tmp48;
    let tmp46 = tmp48;
  } else {
    tmp46 = cResult[18];
  }
  if (cResult[19] !== quest.id) {
    const obj17 = {
      icon: tmp43,
      label: tmp46,
      onPress() {
          const items = [quest.id];
          QuestActionCreators.markAdContentUnseen(AdCreativeType.AdCreativeType.QUEST, items);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp51 = closure_6(tmp(tmp2[16]).ActionSheetRow, obj17);
    cResult[19] = quest.id;
    cResult[20] = tmp51;
    let tmp49 = tmp51;
  } else {
    tmp49 = cResult[20];
  }
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    const obj18 = { IconComponent: tmp(tmp2[34]).EyeIcon };
    const tmp54 = closure_6(tmp(tmp2[16]).ActionSheetRow.Icon, obj18);
    cResult[21] = tmp54;
    let tmp52 = tmp54;
  } else {
    tmp52 = cResult[21];
  }
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    const obj19 = { text: null };
    const intl7 = tmp(tmp2[11]).intl;
    obj19.text = intl7.string(tmp(tmp2[11]).t.tx5Ax5);
    const tmp57 = closure_6(tmp(tmp2[18]).FormLabel, obj19);
    cResult[22] = tmp57;
    let tmp55 = tmp57;
  } else {
    tmp55 = cResult[22];
  }
  if (cResult[23] !== quest.id) {
    const obj20 = {
      icon: tmp52,
      label: tmp55,
      onPress() {
          const obj2 = { screen: UserSettingsSections.QUEST_PREVIEW_TOOL_2, params: { questId: quest.id } };
          openUserSettings.openUserSettings(obj2);
          const obj3 = { questId: quest.id };
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp60 = closure_6(tmp(tmp2[16]).ActionSheetRow, obj20);
    cResult[23] = quest.id;
    cResult[24] = tmp60;
    let tmp58 = tmp60;
  } else {
    tmp58 = cResult[24];
  }
  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
    const obj21 = { IconComponent: tmp(tmp2[36]).CopyIcon };
    const tmp63 = closure_6(tmp(tmp2[16]).ActionSheetRow.Icon, obj21);
    cResult[25] = tmp63;
    let tmp61 = tmp63;
  } else {
    tmp61 = cResult[25];
  }
  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
    const obj22 = { text: null };
    const intl8 = tmp(tmp2[11]).intl;
    obj22.text = intl8.string(tmp(tmp2[11]).t.oisrFi);
    const tmp66 = closure_6(tmp(tmp2[18]).FormLabel, obj22);
    cResult[26] = tmp66;
    let tmp64 = tmp66;
  } else {
    tmp64 = cResult[26];
  }
  if (cResult[27] !== quest.id) {
    const obj23 = {
      icon: tmp61,
      label: tmp64,
      onPress() {
          ClipboardUtils.copy(quest.id);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp69 = closure_6(tmp(tmp2[16]).ActionSheetRow, obj23);
    cResult[27] = quest.id;
    cResult[28] = tmp69;
    let tmp67 = tmp69;
  } else {
    tmp67 = cResult[28];
  }
  if (cResult[29] === tmp31) {
    if (cResult[30] === tmp40) {
      if (cResult[31] === tmp49) {
        if (cResult[32] === tmp58) {
          if (cResult[33] === tmp67) {
            if (cResult[34] === tmp13) {
              if (cResult[35] === tmp22) {
                let tmp70 = cResult[36];
              }
              return tmp70;
            }
          }
        }
      }
    }
  }
  const obj24 = { title: first, hasIcons: true, children: null };
  let items = [tmp13, tmp22, tmp31, tmp40, tmp49, tmp58, tmp67];
  obj24.children = items;
  const tmp71 = closure_7(quest(handleProgress[16]).ActionSheetRow.Group, obj24);
  cResult[29] = tmp31;
  cResult[30] = tmp40;
  cResult[31] = tmp49;
  cResult[32] = tmp58;
  cResult[33] = tmp67;
  cResult[34] = tmp13;
  cResult[35] = tmp22;
  cResult[36] = tmp71;
  tmp70 = tmp71;
  let obj2 = quest(handleProgress[29]);
}) : (function QuestDockPreviewTools(quest) {
  quest = quest.quest;
  c1 = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  const questPreviewActions = quest(9604).useQuestPreviewActions(quest.id);
  ({ handleComplete: c1, handleProgress: c2, handleResetDismissibilityClick: c3, handleResetStatusClick: c4 } = questPreviewActions);
  let obj2 = { title: null, hasIcons: true, children: null };
  const intl = quest(1125).intl;
  obj2.title = intl.string(quest(1125).t["Ape+mm"]);
  let obj3 = { icon: null, label: null, onPress: null };
  let obj = quest(9604);
  obj3.icon = closure_6(quest(7330).ActionSheetRow.Icon, { IconComponent: quest(9340).TrophyIcon });
  const obj5 = { text: null };
  const intl2 = quest(1125).intl;
  obj5.text = intl2.string(quest(1125).t.jQEfRT);
  obj3.label = closure_6(quest(8985).FormLabel, obj5);
  obj3.onPress = function onPress() {
    _undefined();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  let items = [closure_6(quest(7330).ActionSheetRow, obj3), , , , , , ];
  const obj6 = { icon: null, label: null, onPress: null };
  const obj4 = { IconComponent: quest(9340).TrophyIcon };
  obj6.icon = closure_6(quest(7330).ActionSheetRow.Icon, { IconComponent: quest(16721).RedoIcon });
  const obj8 = { text: null };
  const intl3 = quest(1125).intl;
  obj8.text = intl3.string(quest(1125).t.cKSLr4);
  obj6.label = closure_6(quest(8985).FormLabel, obj8);
  obj6.onPress = function onPress() {
    _undefined2(0.9 * Math.random() + 0.03);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[1] = closure_6(quest(7330).ActionSheetRow, obj6);
  const obj9 = { icon: null, label: null, onPress: null };
  const obj7 = { IconComponent: quest(16721).RedoIcon };
  obj9.icon = closure_6(quest(7330).ActionSheetRow.Icon, { IconComponent: quest(12267).UndoIcon });
  const obj11 = { text: null };
  const intl4 = quest(1125).intl;
  obj11.text = intl4.string(quest(1125).t.taqkwK);
  obj9.label = closure_6(quest(8985).FormLabel, obj11);
  obj9.onPress = function onPress() {
    _undefined4();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[2] = closure_6(quest(7330).ActionSheetRow, obj9);
  const obj12 = { icon: null, label: null, onPress: null };
  const obj10 = { IconComponent: quest(12267).UndoIcon };
  obj12.icon = closure_6(quest(7330).ActionSheetRow.Icon, { IconComponent: quest(16723).UnsendIcon });
  const obj14 = { text: null };
  const intl5 = quest(1125).intl;
  obj14.text = intl5.string(quest(1125).t.JF6W66);
  obj12.label = closure_6(quest(8985).FormLabel, obj14);
  obj12.onPress = function onPress() {
    _undefined3();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[3] = closure_6(quest(7330).ActionSheetRow, obj12);
  const obj15 = { icon: null, label: null, onPress: null };
  const obj13 = { IconComponent: quest(16723).UnsendIcon };
  obj15.icon = closure_6(quest(7330).ActionSheetRow.Icon, { IconComponent: quest(7099).EyeIcon });
  const obj17 = { text: null };
  const intl6 = quest(1125).intl;
  obj17.text = intl6.string(quest(1125).t["lL6/zF"]);
  obj15.label = closure_6(quest(8985).FormLabel, obj17);
  obj15.onPress = function onPress() {
    const items = [quest.id];
    QuestActionCreators.markAdContentUnseen(AdCreativeType.AdCreativeType.QUEST, items);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[4] = closure_6(quest(7330).ActionSheetRow, obj15);
  const obj18 = { icon: null, label: null, onPress: null };
  const obj16 = { IconComponent: quest(7099).EyeIcon };
  obj18.icon = closure_6(quest(7330).ActionSheetRow.Icon, { IconComponent: quest(7099).EyeIcon });
  const obj20 = { text: null };
  const intl7 = quest(1125).intl;
  obj20.text = intl7.string(quest(1125).t.tx5Ax5);
  obj18.label = closure_6(quest(8985).FormLabel, obj20);
  obj18.onPress = function onPress() {
    const obj2 = { screen: UserSettingsSections.QUEST_PREVIEW_TOOL_2, params: { questId: quest.id } };
    openUserSettings.openUserSettings(obj2);
    const obj3 = { questId: quest.id };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[5] = closure_6(quest(7330).ActionSheetRow, obj18);
  const obj21 = { icon: null, label: null, onPress: null };
  const obj19 = { IconComponent: quest(7099).EyeIcon };
  obj21.icon = closure_6(quest(7330).ActionSheetRow.Icon, { IconComponent: quest(5718).CopyIcon });
  const obj23 = { text: null };
  const intl8 = quest(1125).intl;
  obj23.text = intl8.string(quest(1125).t.oisrFi);
  obj21.label = closure_6(quest(8985).FormLabel, obj23);
  obj21.onPress = function onPress() {
    ClipboardUtils.copy(quest.id);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[6] = closure_6(quest(7330).ActionSheetRow, obj21);
  obj2.children = items;
  return closure_7(quest(7330).ActionSheetRow.Group, obj2);
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockShareRow(quest) {
  const cResult = quest(576).c(4);
  quest = quest.quest;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { IconComponent: tmp(5718).CopyIcon };
    const tmp6 = closure_6(tmp(7330).ActionSheetRow.Icon, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { text: null };
    const intl = tmp(1125).intl;
    obj3.text = intl.string(tmp(1125).t.WqhZss);
    const tmp9 = closure_6(tmp(8985).FormLabel, obj3);
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== quest.id) {
    const obj4 = {
      icon: first,
      label: tmp7,
      onPress() {
          const obj = QuestCopyUtils;
          obj.copyShareLink(quest.id, { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
          const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp12 = closure_6(tmp(7330).ActionSheetRow, obj4);
    cResult[2] = quest.id;
    cResult[3] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  return tmp10;
}) : (function QuestDockShareRow(quest) {
  quest = quest.quest;
  let obj = { icon: closure_6(quest(7330).ActionSheetRow.Icon, { IconComponent: quest(5718).CopyIcon }), label: null, onPress: null };
  const obj3 = { text: null };
  const intl = quest(1125).intl;
  obj3.text = intl.string(quest(1125).t.WqhZss);
  obj.label = closure_6(quest(8985).FormLabel, obj3);
  obj.onPress = function onPress() {
    const obj = QuestCopyUtils;
    obj.copyShareLink(quest.id, { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
    const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return closure_6(quest(7330).ActionSheetRow, obj);
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockDisclosureRow(creative) {
  const cResult = creative(576).c(4);
  creative = creative.creative;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { IconComponent: tmp(14198).CircleQuestionIcon };
    const tmp6 = closure_6(tmp(7330).ActionSheetRow.Icon, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { text: null };
    const intl = tmp(1125).intl;
    obj3.text = intl.string(tmp(1125).t.GcsZKJ);
    const tmp9 = closure_6(tmp(8985).FormLabel, obj3);
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== creative) {
    const obj4 = {
      icon: first,
      label: tmp7,
      onPress() {
          const obj2 = { creative, isTargetedDisclosure: true, trackingCtx: null };
          const obj = QuestDisclosureModalActionCreatorsDefault;
          obj2.trackingCtx = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
          obj.showModal(obj2);
          const obj3 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
    };
    const tmp12 = closure_6(tmp(7330).ActionSheetRow, obj4);
    cResult[2] = creative;
    cResult[3] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  return tmp10;
}) : (function QuestDockDisclosureRow(creative) {
  creative = creative.creative;
  let obj = { icon: closure_6(creative(7330).ActionSheetRow.Icon, { IconComponent: creative(14198).CircleQuestionIcon }), label: null, onPress: null };
  let obj3 = { text: null };
  const intl = creative(1125).intl;
  obj3.text = intl.string(creative(1125).t.GcsZKJ);
  obj.label = closure_6(creative(8985).FormLabel, obj3);
  obj.onPress = function onPress() {
    const obj2 = { creative, isTargetedDisclosure: true, trackingCtx: null };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    obj2.trackingCtx = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    obj.showModal(obj2);
    const obj3 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return closure_6(creative(7330).ActionSheetRow, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContextMenuActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockContextMenuActionSheet(creative) {
  const cResult = require("c").c(61);
  creative = creative.creative;
  _require = creative;
  const impressionId = creative.impressionId;
  if (cResult[0] !== creative) {
    const creativeAnalyticsParams = tmp(16716).getCreativeAnalyticsParams(creative);
    cResult[0] = creative;
    cResult[1] = creativeAnalyticsParams;
    let tmp4 = creativeAnalyticsParams;
    let tmpResult = tmp(16716);
  } else {
    tmp4 = cResult[1];
  }
  importDefault = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
    cResult[2] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[2];
  }
  const QuestHomeBountiesFeatureGateExperiment = tmp(14371).QuestHomeBountiesFeatureGateExperiment;
  const tmp8 = creative.type !== require("AdCreativeType").AdCreativeType.QUEST && !QuestHomeBountiesFeatureGateExperiment.useConfig(tmp6).enabled;
  let type = creative.type;
  if (require("AdCreativeType").AdCreativeType.QUEST === type) {
    if (cResult[3] !== creative.quest) {
      const externalCtaLabel = tmp(9628).getExternalCtaLabel(creative.quest);
      cResult[3] = creative.quest;
      cResult[4] = externalCtaLabel;
      const tmpResult3 = tmp(9628);
    }
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1125).intl;
      const stringResult = intl3.string(tmp(1125).t.LLLLPD);
      cResult[5] = stringResult;
    }
  } else {
    if (tmp(6752).AdCreativeType.BOUNTY === type) {
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1125).intl;
        const stringResult1 = intl2.string(tmp(1125).t.QUe9zz);
        cResult[6] = stringResult1;
        let tmp12 = stringResult1;
      } else {
        tmp12 = cResult[6];
      }
      let tmp11 = tmp12;
      let buttonLabel = creative.bounty.cta.buttonLabel;
    } else if (tmp(6752).AdCreativeType.PLAYABLE === type) {
      const _Symbol6 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1125).intl;
        const stringResult2 = intl.string(tmp(1125).t.QUe9zz);
        cResult[7] = stringResult2;
        let tmp9 = stringResult2;
      } else {
        tmp9 = cResult[7];
      }
      tmp11 = tmp9;
      buttonLabel = creative.playable.cta.buttonLabel;
    }
    if (cResult[8] !== impressionId) {
      let obj3 = { content: tmp(6748).QuestContent.QUEST_BAR_MOBILE, ctaContent: tmp(7836).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId, sourceQuestContent: tmp(6748).QuestContent.QUEST_BAR_MOBILE };
      cResult[8] = impressionId;
      cResult[9] = obj3;
      let tmp20 = obj3;
    } else {
      tmp20 = cResult[9];
    }
    dependencyMap = tmp20;
    if (cResult[10] !== tmp4) {
      function trackInternalClick(questContentCTA) {
        const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
        const merged = Object.assign(closure_1);
        obj2.questContentCTA = questContentCTA;
        obj2.surfaceId = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
        obj2.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
        captureAdUserAction.captureAdUserAction(obj2);
      }
      cResult[10] = tmp4;
      cResult[11] = trackInternalClick;
      let tmp21 = trackInternalClick;
    } else {
      tmp21 = cResult[11];
    }
    asyncGeneratorStep = tmp21;
    const _Symbol3 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      let obj4 = { IconComponent: tmp(14854).LinkExternalMediumIcon };
      const tmp24 = closure_6(tmp(7330).ActionSheetRow.Icon, obj4);
      cResult[12] = tmp24;
      let tmp22 = tmp24;
    } else {
      tmp22 = cResult[12];
    }
    if (cResult[13] !== buttonLabel) {
      let obj5 = { text: buttonLabel };
      const tmp27 = closure_6(tmp(8985).FormLabel, obj5);
      cResult[13] = buttonLabel;
      cResult[14] = tmp27;
      let tmp25 = tmp27;
    } else {
      tmp25 = cResult[14];
    }
    if (cResult[15] === creative.bounty) {
      if (cResult[16] === creative.playable) {
        if (cResult[17] === creative.quest) {
          if (cResult[18] === creative.type) {
            if (cResult[19] === tmp20) {
              let tmp28 = cResult[20];
            }
            if (cResult[21] === tmp25) {
              if (cResult[22] === tmp28) {
                let tmp29 = cResult[23];
              }
              if (cResult[24] === creative.quest) {
                if (cResult[25] === creative.type) {
                  let tmp32 = cResult[26];
                }
                if (cResult[27] === tmp29) {
                  if (cResult[28] === tmp32) {
                    let tmp36 = cResult[29];
                  }
                  if (cResult[30] === creative.quest) {
                    if (cResult[31] === creative.type) {
                      if (cResult[32] === tmp8) {
                        if (cResult[33] === tmp11) {
                          if (cResult[34] === tmp21) {
                            let tmp39 = cResult[35];
                          }
                          if (cResult[36] !== creative) {
                            let obj6 = { creative };
                            const tmp46 = closure_6(closure_10, obj6);
                            cResult[36] = creative;
                            cResult[37] = tmp46;
                            let tmp43 = tmp46;
                          } else {
                            tmp43 = cResult[37];
                          }
                          const _Symbol4 = Symbol;
                          if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                            let obj7 = { IconComponent: tmp(6967).XSmallIcon };
                            const tmp49 = closure_6(tmp(7330).ActionSheetRow.Icon, obj7);
                            cResult[38] = tmp49;
                            let tmp47 = tmp49;
                          } else {
                            tmp47 = cResult[38];
                          }
                          const _Symbol5 = Symbol;
                          if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                            const obj8 = { text: null };
                            const intl4 = tmp(1125).intl;
                            obj8.text = intl4.string(tmp(1125).t.NN79E9);
                            const tmp52 = closure_6(tmp(8985).FormLabel, obj8);
                            cResult[39] = tmp52;
                            let tmp50 = tmp52;
                          } else {
                            tmp50 = cResult[39];
                          }
                          if (cResult[40] !== tmp8) {
                            let stringResult3;
                            if (!tmp8) {
                              const intl5 = tmp(1125).intl;
                              stringResult3 = intl5.string(tmp(1125).t.V6htN5);
                            }
                            cResult[40] = tmp8;
                            cResult[41] = stringResult3;
                            let tmp53 = stringResult3;
                          } else {
                            tmp53 = cResult[41];
                          }
                          if (cResult[42] === tmp4) {
                            if (cResult[43] === creative.quest) {
                              if (cResult[44] === creative.type) {
                                if (cResult[45] === tmp21) {
                                  let tmp55 = cResult[46];
                                }
                                if (cResult[47] === tmp53) {
                                  if (cResult[48] === tmp55) {
                                    let tmp56 = cResult[49];
                                  }
                                  if (cResult[50] === tmp39) {
                                    if (cResult[51] === tmp43) {
                                      if (cResult[52] === tmp56) {
                                        let tmp59 = cResult[53];
                                      }
                                      if (cResult[54] === creative.quest) {
                                        if (cResult[55] === creative.type) {
                                          let tmp62 = cResult[56];
                                        }
                                        if (cResult[57] === tmp36) {
                                          if (cResult[58] === tmp59) {
                                            if (cResult[59] === tmp62) {
                                              let tmp66 = cResult[60];
                                            }
                                            return tmp66;
                                          }
                                        }
                                        let obj9 = { children: null };
                                        const items = [tmp36, tmp59, tmp62];
                                        obj9.children = items;
                                        const tmp68 = closure_7(tmp(7334).ActionSheet, obj9);
                                        class N {
                                          constructor() {
                                            tmp = closure_0;
                                            type = closure_0.type;
                                            tmp2 = closure_0;
                                            tmp3 = closure_2;
                                            if (closure_0(closure_2[9]).AdCreativeType.QUEST === type) {
                                              tmp2Result = tmp2(tmp3[19]);
                                              tmp6 = closure_2;
                                              openGameLinkDirectlyResult = tmp2Result.openGameLinkDirectly(tmp.quest, closure_2);
                                            } else if (tmp2(tmp3[9]).AdCreativeType.BOUNTY === type) {
                                              tmp2Result1 = tmp2(tmp3[19]);
                                              obj1 = { adContentId: null, adCreativeType: null, cta: null };
                                              obj1.adContentId = tmp.bounty.id;
                                              obj1.adCreativeType = tmp2(tmp3[9]).AdCreativeType.BOUNTY;
                                              obj1.cta = tmp.bounty.cta;
                                              tmp4 = closure_2;
                                              result = tmp2Result1.openAdGameLinkDirectly(obj1, closure_2);
                                            } else if (tmp2(tmp3[9]).AdCreativeType.PLAYABLE === type) {
                                              tmp2Result2 = tmp2(tmp3[19]);
                                              obj7 = { adContentId: null, adCreativeType: null, cta: null };
                                              obj7.adContentId = tmp.playable.id;
                                              obj7.adCreativeType = tmp2(tmp3[9]).AdCreativeType.PLAYABLE;
                                              obj7.cta = tmp.playable.cta;
                                              tmp9 = closure_2;
                                              result1 = tmp2Result2.openAdGameLinkDirectly(obj7, closure_2);
                                            }
                                            obj4 = closure_1(tmp3[20]);
                                            hideActionSheetResult = obj4.hideActionSheet();
                                            return;
                                          }
                                        }
                                        cResult[57] = tmp36;
                                        cResult[58] = tmp59;
                                        cResult[59] = tmp62;
                                        cResult[60] = tmp68;
                                        tmp66 = tmp68;
                                      }
                                      let tmp63 = null;
                                      if (creative.type === tmp(6752).AdCreativeType.QUEST) {
                                        tmp63 = null;
                                        if (creative.quest.preview) {
                                          let obj10 = { quest: creative.quest };
                                          tmp63 = closure_6(closure_8, obj10);
                                        }
                                      }
                                      cResult[54] = creative.quest;
                                      cResult[55] = creative.type;
                                      class N {
                                        constructor() {
                                          tmp = closure_0;
                                          type = closure_0.type;
                                          tmp2 = closure_0;
                                          tmp3 = closure_2;
                                          if (closure_0(closure_2[9]).AdCreativeType.QUEST === type) {
                                            tmp2Result = tmp2(tmp3[19]);
                                            tmp6 = closure_2;
                                            openGameLinkDirectlyResult = tmp2Result.openGameLinkDirectly(tmp.quest, closure_2);
                                          } else if (tmp2(tmp3[9]).AdCreativeType.BOUNTY === type) {
                                            tmp2Result1 = tmp2(tmp3[19]);
                                            obj1 = { adContentId: null, adCreativeType: null, cta: null };
                                            obj1.adContentId = tmp.bounty.id;
                                            obj1.adCreativeType = tmp2(tmp3[9]).AdCreativeType.BOUNTY;
                                            obj1.cta = tmp.bounty.cta;
                                            tmp4 = closure_2;
                                            result = tmp2Result1.openAdGameLinkDirectly(obj1, closure_2);
                                          } else if (tmp2(tmp3[9]).AdCreativeType.PLAYABLE === type) {
                                            tmp2Result2 = tmp2(tmp3[19]);
                                            obj7 = { adContentId: null, adCreativeType: null, cta: null };
                                            obj7.adContentId = tmp.playable.id;
                                            obj7.adCreativeType = tmp2(tmp3[9]).AdCreativeType.PLAYABLE;
                                            obj7.cta = tmp.playable.cta;
                                            tmp9 = closure_2;
                                            result1 = tmp2Result2.openAdGameLinkDirectly(obj7, closure_2);
                                          }
                                          obj4 = closure_1(tmp3[20]);
                                          hideActionSheetResult = obj4.hideActionSheet();
                                          return;
                                        }
                                      }
                                      tmp62 = tmp63;
                                    }
                                  }
                                  let obj11 = { hasIcons: true, children: null };
                                  const items1 = [tmp39, tmp43, tmp56];
                                  obj11.children = items1;
                                  const tmp61 = closure_7(tmp(7330).ActionSheetRow.Group, obj11);
                                  class N {
                                    constructor() {
                                      tmp = closure_0;
                                      type = closure_0.type;
                                      tmp2 = closure_0;
                                      tmp3 = closure_2;
                                      if (closure_0(closure_2[9]).AdCreativeType.QUEST === type) {
                                        tmp2Result = tmp2(tmp3[19]);
                                        tmp6 = closure_2;
                                        openGameLinkDirectlyResult = tmp2Result.openGameLinkDirectly(tmp.quest, closure_2);
                                      } else if (tmp2(tmp3[9]).AdCreativeType.BOUNTY === type) {
                                        tmp2Result1 = tmp2(tmp3[19]);
                                        obj1 = { adContentId: null, adCreativeType: null, cta: null };
                                        obj1.adContentId = tmp.bounty.id;
                                        obj1.adCreativeType = tmp2(tmp3[9]).AdCreativeType.BOUNTY;
                                        obj1.cta = tmp.bounty.cta;
                                        tmp4 = closure_2;
                                        result = tmp2Result1.openAdGameLinkDirectly(obj1, closure_2);
                                      } else if (tmp2(tmp3[9]).AdCreativeType.PLAYABLE === type) {
                                        tmp2Result2 = tmp2(tmp3[19]);
                                        obj7 = { adContentId: null, adCreativeType: null, cta: null };
                                        obj7.adContentId = tmp.playable.id;
                                        obj7.adCreativeType = tmp2(tmp3[9]).AdCreativeType.PLAYABLE;
                                        obj7.cta = tmp.playable.cta;
                                        tmp9 = closure_2;
                                        result1 = tmp2Result2.openAdGameLinkDirectly(obj7, closure_2);
                                      }
                                      obj4 = closure_1(tmp3[20]);
                                      hideActionSheetResult = obj4.hideActionSheet();
                                      return;
                                    }
                                  }
                                  cResult[50] = tmp39;
                                  cResult[51] = tmp43;
                                  cResult[52] = tmp56;
                                  cResult[53] = tmp61;
                                  tmp59 = tmp61;
                                }
                                const obj12 = { icon: tmp47, label: tmp50, subLabel: tmp53, onPress: tmp55 };
                                const tmp58 = closure_6(tmp(7330).ActionSheetRow, obj12);
                                class N {
                                  constructor() {
                                    tmp = closure_0;
                                    type = closure_0.type;
                                    tmp2 = closure_0;
                                    tmp3 = closure_2;
                                    if (closure_0(closure_2[9]).AdCreativeType.QUEST === type) {
                                      tmp2Result = tmp2(tmp3[19]);
                                      tmp6 = closure_2;
                                      openGameLinkDirectlyResult = tmp2Result.openGameLinkDirectly(tmp.quest, closure_2);
                                    } else if (tmp2(tmp3[9]).AdCreativeType.BOUNTY === type) {
                                      tmp2Result1 = tmp2(tmp3[19]);
                                      obj1 = { adContentId: null, adCreativeType: null, cta: null };
                                      obj1.adContentId = tmp.bounty.id;
                                      obj1.adCreativeType = tmp2(tmp3[9]).AdCreativeType.BOUNTY;
                                      obj1.cta = tmp.bounty.cta;
                                      tmp4 = closure_2;
                                      result = tmp2Result1.openAdGameLinkDirectly(obj1, closure_2);
                                    } else if (tmp2(tmp3[9]).AdCreativeType.PLAYABLE === type) {
                                      tmp2Result2 = tmp2(tmp3[19]);
                                      obj7 = { adContentId: null, adCreativeType: null, cta: null };
                                      obj7.adContentId = tmp.playable.id;
                                      obj7.adCreativeType = tmp2(tmp3[9]).AdCreativeType.PLAYABLE;
                                      obj7.cta = tmp.playable.cta;
                                      tmp9 = closure_2;
                                      result1 = tmp2Result2.openAdGameLinkDirectly(obj7, closure_2);
                                    }
                                    obj4 = closure_1(tmp3[20]);
                                    hideActionSheetResult = obj4.hideActionSheet();
                                    return;
                                  }
                                }
                                cResult[48] = tmp55;
                                cResult[49] = tmp58;
                                tmp56 = tmp58;
                              }
                            }
                          }
                          class N {
                            constructor() {
                              tmp = closure_0;
                              type = closure_0.type;
                              tmp2 = closure_0;
                              tmp3 = closure_2;
                              if (closure_0(closure_2[9]).AdCreativeType.QUEST === type) {
                                tmp2Result = tmp2(tmp3[19]);
                                tmp6 = closure_2;
                                openGameLinkDirectlyResult = tmp2Result.openGameLinkDirectly(tmp.quest, closure_2);
                              } else if (tmp2(tmp3[9]).AdCreativeType.BOUNTY === type) {
                                tmp2Result1 = tmp2(tmp3[19]);
                                obj1 = { adContentId: null, adCreativeType: null, cta: null };
                                obj1.adContentId = tmp.bounty.id;
                                obj1.adCreativeType = tmp2(tmp3[9]).AdCreativeType.BOUNTY;
                                obj1.cta = tmp.bounty.cta;
                                tmp4 = closure_2;
                                result = tmp2Result1.openAdGameLinkDirectly(obj1, closure_2);
                              } else if (tmp2(tmp3[9]).AdCreativeType.PLAYABLE === type) {
                                tmp2Result2 = tmp2(tmp3[19]);
                                obj7 = { adContentId: null, adCreativeType: null, cta: null };
                                obj7.adContentId = tmp.playable.id;
                                obj7.adCreativeType = tmp2(tmp3[9]).AdCreativeType.PLAYABLE;
                                obj7.cta = tmp.playable.cta;
                                tmp9 = closure_2;
                                result1 = tmp2Result2.openAdGameLinkDirectly(obj7, closure_2);
                              }
                              obj4 = closure_1(tmp3[20]);
                              hideActionSheetResult = obj4.hideActionSheet();
                              return;
                            }
                          }
                          _require = asyncGeneratorStep(async () => {
                            if (c2 === 2) {
                              c2 = 3;
                              throw new TypeError("Generator functions may not be called on executing generators");
                            } else if (tmp3 === 3) {
                              if (arg0 === 1) {
                                throw value;
                              } else if (arg0 === 2) {
                                const obj3 = { value, done: true };
                                return obj3;
                              } else {
                                return { value: "IconComponent", done: null };
                              }
                            } else {
                              try {
                                c2 = 2;
                                if (0 === c1) {
                                  if (arg0 === 1) {
                                    c2 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    c2 = 3;
                                    const obj6 = { value, done: true };
                                    return obj6;
                                  } else {
                                    closure_0 = tmp4;
                                    closure_1_3(closure_0(7836).QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT);
                                    const type = closure_0.type;
                                    if (closure_0(6752).AdCreativeType.QUEST === type) {
                                      const obj7 = closure_0(9605);
                                      const dismissQuestContentResult = closure_0(9605).dismissQuestContent(tmp37.quest.id, closure_0(6748).QuestContent.QUEST_BAR_MOBILE);
                                      v2(5246).hideActionSheet();
                                      c1 = 1;
                                      c2 = 1;
                                      const obj9 = { value: dismissQuestContentResult, done: false };
                                      return obj9;
                                    } else {
                                      if (closure_0(6752).AdCreativeType.BOUNTY !== type) {
                                        if (closure_0(6752).AdCreativeType.PLAYABLE !== type) {
                                          c2 = 3;
                                        }
                                      }
                                      const obj4 = closure_0(14372);
                                      const dismissAdContentResult = closure_0(14372).dismissAdContent(c1, closure_0(6748).QuestContent.QUEST_BAR_MOBILE);
                                      v2(5246).hideActionSheet();
                                      c1 = 2;
                                      c2 = 1;
                                      const obj10 = { value: dismissAdContentResult, done: false };
                                      return obj10;
                                    }
                                    tmp37 = closure_0;
                                  }
                                } else if (1 === tmp4) {
                                  if (arg0 === 1) {
                                    c2 = 3;
                                    throw value;
                                  } else if (arg0 !== 2) {
                                    const result = closure_0(16720).displayQuestDismissalToast();
                                    const obj2 = closure_0(16720);
                                  }
                                } else if (arg0 === 1) {
                                  c2 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c2 = 3;
                                  const obj = { value, done: true };
                                  return obj;
                                }
                                c2 = 3;
                                const obj11 = { value, done: true };
                                return obj11;
                              } catch (tmp28) {
                                c2 = tmp;
                                throw tmp28;
                              }
                            }
                          });
                          function t16() {
                            const self = this;
                            const apply = closure_0.apply;
                            if (typeof apply === "unknown") {
                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                            } else {
                              applyArgumentsResult = apply(self, arguments);
                            }
                            return applyArgumentsResult;
                          }
                          cResult[42] = tmp4;
                          cResult[43] = creative.quest;
                          cResult[44] = creative.type;
                          cResult[45] = tmp21;
                          cResult[46] = t16;
                          tmp55 = t16;
                        }
                      }
                    }
                  }
                  let tmp40 = null;
                  if (!tmp8) {
                    const obj13 = { icon: null, label: null, onPress: null };
                    const obj14 = { IconComponent: WreathIconDefault };
                    obj13.icon = closure_6(tmp(7330).ActionSheetRow.Icon, obj14);
                    { text: null }.text = tmp11;
                    class N {
                      constructor() {
                        tmp = closure_0;
                        type = closure_0.type;
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        if (closure_0(closure_2[9]).AdCreativeType.QUEST === type) {
                          tmp2Result = tmp2(tmp3[19]);
                          tmp6 = closure_2;
                          openGameLinkDirectlyResult = tmp2Result.openGameLinkDirectly(tmp.quest, closure_2);
                        } else if (tmp2(tmp3[9]).AdCreativeType.BOUNTY === type) {
                          tmp2Result1 = tmp2(tmp3[19]);
                          obj1 = { adContentId: null, adCreativeType: null, cta: null };
                          obj1.adContentId = tmp.bounty.id;
                          obj1.adCreativeType = tmp2(tmp3[9]).AdCreativeType.BOUNTY;
                          obj1.cta = tmp.bounty.cta;
                          tmp4 = closure_2;
                          result = tmp2Result1.openAdGameLinkDirectly(obj1, closure_2);
                        } else if (tmp2(tmp3[9]).AdCreativeType.PLAYABLE === type) {
                          tmp2Result2 = tmp2(tmp3[19]);
                          obj7 = { adContentId: null, adCreativeType: null, cta: null };
                          obj7.adContentId = tmp.playable.id;
                          obj7.adCreativeType = tmp2(tmp3[9]).AdCreativeType.PLAYABLE;
                          obj7.cta = tmp.playable.cta;
                          tmp9 = closure_2;
                          result1 = tmp2Result2.openAdGameLinkDirectly(obj7, closure_2);
                        }
                        obj4 = closure_1(tmp3[20]);
                        hideActionSheetResult = obj4.hideActionSheet();
                        return;
                      }
                    }
                    obj13.onPress = function onPress() {
                      closure_3(AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_LEARN_MORE);
                      const type = closure_0.type;
                      if (AdCreativeType.AdCreativeType.QUEST === type) {
                        const obj = { scrollToQuestId: closure_0.quest.id, fromContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
                        QuestUtils.openQuestHome(obj);
                        const tmpResult = QuestUtils;
                      } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
                        const obj2 = { fromContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
                        QuestUtils.openQuestHome(obj2);
                        const tmpResult2 = QuestUtils;
                      }
                      ActionSheetActionCreatorsDefault.hideActionSheet();
                    };
                    tmp40 = closure_6(tmp(7330).ActionSheetRow, obj13);
                    const obj15 = { text: null };
                  }
                  cResult[30] = creative.quest;
                  cResult[31] = creative.type;
                  cResult[32] = tmp8;
                  class N {
                    constructor() {
                      tmp = closure_0;
                      type = closure_0.type;
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      if (closure_0(closure_2[9]).AdCreativeType.QUEST === type) {
                        tmp2Result = tmp2(tmp3[19]);
                        tmp6 = closure_2;
                        openGameLinkDirectlyResult = tmp2Result.openGameLinkDirectly(tmp.quest, closure_2);
                      } else if (tmp2(tmp3[9]).AdCreativeType.BOUNTY === type) {
                        tmp2Result1 = tmp2(tmp3[19]);
                        obj1 = { adContentId: null, adCreativeType: null, cta: null };
                        obj1.adContentId = tmp.bounty.id;
                        obj1.adCreativeType = tmp2(tmp3[9]).AdCreativeType.BOUNTY;
                        obj1.cta = tmp.bounty.cta;
                        tmp4 = closure_2;
                        result = tmp2Result1.openAdGameLinkDirectly(obj1, closure_2);
                      } else if (tmp2(tmp3[9]).AdCreativeType.PLAYABLE === type) {
                        tmp2Result2 = tmp2(tmp3[19]);
                        obj7 = { adContentId: null, adCreativeType: null, cta: null };
                        obj7.adContentId = tmp.playable.id;
                        obj7.adCreativeType = tmp2(tmp3[9]).AdCreativeType.PLAYABLE;
                        obj7.cta = tmp.playable.cta;
                        tmp9 = closure_2;
                        result1 = tmp2Result2.openAdGameLinkDirectly(obj7, closure_2);
                      }
                      obj4 = closure_1(tmp3[20]);
                      hideActionSheetResult = obj4.hideActionSheet();
                      return;
                    }
                  }
                  cResult[33] = tmp11;
                  cResult[34] = tmp21;
                  cResult[35] = tmp40;
                  tmp39 = tmp40;
                }
                const obj16 = { hasIcons: true, children: null };
                const items2 = [tmp29, tmp32];
                obj16.children = items2;
                const tmp38 = closure_7(tmp(7330).ActionSheetRow.Group, obj16);
                class N {
                  constructor() {
                    tmp = closure_0;
                    type = closure_0.type;
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    if (closure_0(closure_2[9]).AdCreativeType.QUEST === type) {
                      tmp2Result = tmp2(tmp3[19]);
                      tmp6 = closure_2;
                      openGameLinkDirectlyResult = tmp2Result.openGameLinkDirectly(tmp.quest, closure_2);
                    } else if (tmp2(tmp3[9]).AdCreativeType.BOUNTY === type) {
                      tmp2Result1 = tmp2(tmp3[19]);
                      obj1 = { adContentId: null, adCreativeType: null, cta: null };
                      obj1.adContentId = tmp.bounty.id;
                      obj1.adCreativeType = tmp2(tmp3[9]).AdCreativeType.BOUNTY;
                      obj1.cta = tmp.bounty.cta;
                      tmp4 = closure_2;
                      result = tmp2Result1.openAdGameLinkDirectly(obj1, closure_2);
                    } else if (tmp2(tmp3[9]).AdCreativeType.PLAYABLE === type) {
                      tmp2Result2 = tmp2(tmp3[19]);
                      obj7 = { adContentId: null, adCreativeType: null, cta: null };
                      obj7.adContentId = tmp.playable.id;
                      obj7.adCreativeType = tmp2(tmp3[9]).AdCreativeType.PLAYABLE;
                      obj7.cta = tmp.playable.cta;
                      tmp9 = closure_2;
                      result1 = tmp2Result2.openAdGameLinkDirectly(obj7, closure_2);
                    }
                    obj4 = closure_1(tmp3[20]);
                    hideActionSheetResult = obj4.hideActionSheet();
                    return;
                  }
                }
                cResult[28] = tmp32;
                cResult[29] = tmp38;
                tmp36 = tmp38;
              }
              let tmp33 = null;
              if (creative.type === tmp(6752).AdCreativeType.QUEST) {
                tmp33 = null;
                if (tmpResult4.isShareableQuest(creative.quest.config)) {
                  const obj17 = { quest: creative.quest };
                  tmp33 = closure_6(closure_9, obj17);
                }
                tmpResult4 = tmp(7831);
              }
              cResult[24] = creative.quest;
              cResult[25] = creative.type;
              class N {
                constructor() {
                  tmp = closure_0;
                  type = closure_0.type;
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  if (closure_0(closure_2[9]).AdCreativeType.QUEST === type) {
                    tmp2Result = tmp2(tmp3[19]);
                    tmp6 = closure_2;
                    openGameLinkDirectlyResult = tmp2Result.openGameLinkDirectly(tmp.quest, closure_2);
                  } else if (tmp2(tmp3[9]).AdCreativeType.BOUNTY === type) {
                    tmp2Result1 = tmp2(tmp3[19]);
                    obj1 = { adContentId: null, adCreativeType: null, cta: null };
                    obj1.adContentId = tmp.bounty.id;
                    obj1.adCreativeType = tmp2(tmp3[9]).AdCreativeType.BOUNTY;
                    obj1.cta = tmp.bounty.cta;
                    tmp4 = closure_2;
                    result = tmp2Result1.openAdGameLinkDirectly(obj1, closure_2);
                  } else if (tmp2(tmp3[9]).AdCreativeType.PLAYABLE === type) {
                    tmp2Result2 = tmp2(tmp3[19]);
                    obj7 = { adContentId: null, adCreativeType: null, cta: null };
                    obj7.adContentId = tmp.playable.id;
                    obj7.adCreativeType = tmp2(tmp3[9]).AdCreativeType.PLAYABLE;
                    obj7.cta = tmp.playable.cta;
                    tmp9 = closure_2;
                    result1 = tmp2Result2.openAdGameLinkDirectly(obj7, closure_2);
                  }
                  obj4 = closure_1(tmp3[20]);
                  hideActionSheetResult = obj4.hideActionSheet();
                  return;
                }
              }
              tmp32 = tmp33;
            }
            const obj18 = { icon: tmp22, label: tmp25, onPress: tmp28 };
            const tmp31 = closure_6(tmp(7330).ActionSheetRow, obj18);
            cResult[21] = tmp25;
            class N {
              constructor() {
                tmp = closure_0;
                type = closure_0.type;
                tmp2 = closure_0;
                tmp3 = closure_2;
                if (closure_0(closure_2[9]).AdCreativeType.QUEST === type) {
                  tmp2Result = tmp2(tmp3[19]);
                  tmp6 = closure_2;
                  openGameLinkDirectlyResult = tmp2Result.openGameLinkDirectly(tmp.quest, closure_2);
                } else if (tmp2(tmp3[9]).AdCreativeType.BOUNTY === type) {
                  tmp2Result1 = tmp2(tmp3[19]);
                  obj1 = { adContentId: null, adCreativeType: null, cta: null };
                  obj1.adContentId = tmp.bounty.id;
                  obj1.adCreativeType = tmp2(tmp3[9]).AdCreativeType.BOUNTY;
                  obj1.cta = tmp.bounty.cta;
                  tmp4 = closure_2;
                  result = tmp2Result1.openAdGameLinkDirectly(obj1, closure_2);
                } else if (tmp2(tmp3[9]).AdCreativeType.PLAYABLE === type) {
                  tmp2Result2 = tmp2(tmp3[19]);
                  obj7 = { adContentId: null, adCreativeType: null, cta: null };
                  obj7.adContentId = tmp.playable.id;
                  obj7.adCreativeType = tmp2(tmp3[9]).AdCreativeType.PLAYABLE;
                  obj7.cta = tmp.playable.cta;
                  tmp9 = closure_2;
                  result1 = tmp2Result2.openAdGameLinkDirectly(obj7, closure_2);
                }
                obj4 = closure_1(tmp3[20]);
                hideActionSheetResult = obj4.hideActionSheet();
                return;
              }
            }
            cResult[22] = tmp28;
            cResult[23] = tmp31;
            tmp29 = tmp31;
          }
        }
      }
    }
    class N {
      constructor() {
        tmp = closure_0;
        type = closure_0.type;
        tmp2 = closure_0;
        tmp3 = closure_2;
        if (closure_0(closure_2[9]).AdCreativeType.QUEST === type) {
          tmp2Result = tmp2(tmp3[19]);
          tmp6 = closure_2;
          openGameLinkDirectlyResult = tmp2Result.openGameLinkDirectly(tmp.quest, closure_2);
        } else if (tmp2(tmp3[9]).AdCreativeType.BOUNTY === type) {
          tmp2Result1 = tmp2(tmp3[19]);
          obj1 = { adContentId: null, adCreativeType: null, cta: null };
          obj1.adContentId = tmp.bounty.id;
          obj1.adCreativeType = tmp2(tmp3[9]).AdCreativeType.BOUNTY;
          obj1.cta = tmp.bounty.cta;
          tmp4 = closure_2;
          result = tmp2Result1.openAdGameLinkDirectly(obj1, closure_2);
        } else if (tmp2(tmp3[9]).AdCreativeType.PLAYABLE === type) {
          tmp2Result2 = tmp2(tmp3[19]);
          obj7 = { adContentId: null, adCreativeType: null, cta: null };
          obj7.adContentId = tmp.playable.id;
          obj7.adCreativeType = tmp2(tmp3[9]).AdCreativeType.PLAYABLE;
          obj7.cta = tmp.playable.cta;
          tmp9 = closure_2;
          result1 = tmp2Result2.openAdGameLinkDirectly(obj7, closure_2);
        }
        obj4 = closure_1(tmp3[20]);
        hideActionSheetResult = obj4.hideActionSheet();
        return;
      }
    }
    cResult[15] = creative.bounty;
    cResult[16] = creative.playable;
    cResult[17] = creative.quest;
    cResult[18] = creative.type;
    cResult[19] = tmp20;
    cResult[20] = N;
    tmp28 = N;
  }
  let obj = require("c");
}) : (function QuestDockContextMenuActionSheet(creative) {
  creative = creative.creative;
  let obj3;
  function trackInternalClick(questContentCTA) {
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
    const merged = Object.assign(closure_1);
    obj2.questContentCTA = questContentCTA;
    obj2.surfaceId = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
    obj2.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
    captureAdUserAction.captureAdUserAction(obj2);
  }
  importDefault = creative(obj3[7]).getCreativeAnalyticsParams(creative);
  const QuestHomeBountiesFeatureGateExperiment = creative(obj3[8]).QuestHomeBountiesFeatureGateExperiment;
  const tmp3 = creative.type !== creative(obj3[9]).AdCreativeType.QUEST && !QuestHomeBountiesFeatureGateExperiment.useConfig({ location: QuestsExperimentLocations.QUESTS_BAR_MOBILE }).enabled;
  let type = creative.type;
  if (creative(obj3[9]).AdCreativeType.QUEST === type) {
    let buttonLabel = tmp(tmp2[10]).getExternalCtaLabel(creative.quest);
    const intl2 = tmp(tmp2[11]).intl;
    let stringResult = intl2.string(tmp(tmp2[11]).t.LLLLPD);
    let tmpResult = tmp(tmp2[10]);
  } else if (tmp(tmp2[9]).AdCreativeType.BOUNTY === type) {
    buttonLabel = creative.bounty.cta.buttonLabel;
    const intl = tmp(tmp2[11]).intl;
    stringResult = intl.string(tmp(tmp2[11]).t.QUe9zz);
  } else if (tmp(tmp2[9]).AdCreativeType.PLAYABLE === type) {
    buttonLabel = creative.playable.cta.buttonLabel;
    const intl5 = tmp(tmp2[11]).intl;
    stringResult = intl5.string(tmp(tmp2[11]).t.QUe9zz);
  }
  obj3 = { content: tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE, ctaContent: tmp(tmp2[13]).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId: creative.impressionId, sourceQuestContent: tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE };
  let obj4 = { icon: null, label: null, onPress: null };
  let obj = creative(obj3[7]);
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
      const tmp2Result3 = QuestPlatformUtils;
    } else if (AdCreativeType.AdCreativeType.PLAYABLE === type) {
      const obj2 = { adContentId: creative.playable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, cta: creative.playable.cta };
      const result1 = QuestPlatformUtils.openAdGameLinkDirectly(obj2, obj3);
      const tmp2Result4 = QuestPlatformUtils;
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  const obj5 = { IconComponent: creative(obj3[17]).LinkExternalMediumIcon };
  const items = [closure_6(creative(obj3[16]).ActionSheetRow, obj4), ];
  let tmp5Result = null;
  if (creative.type === creative(obj3[9]).AdCreativeType.QUEST) {
    tmp5Result = null;
    if (tmpResult2.isShareableQuest(creative.quest.config)) {
      let obj6 = { quest: creative.quest };
      tmp5Result = closure_6(closure_9, obj6);
    }
    tmpResult2 = tmp(tmp2[21]);
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
      const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL };
      const merged = Object.assign(closure_1);
      obj2.questContentCTA = AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_LEARN_MORE;
      obj2.surfaceId = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      obj2.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
      captureAdUserAction.captureAdUserAction(obj2);
      const type = creative.type;
      if (AdCreativeType.AdCreativeType.QUEST === type) {
        obj3 = { scrollToQuestId: creative.quest.id, fromContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
        QuestUtils.openQuestHome(obj3);
        const tmpResult = QuestUtils;
      } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
        const obj4 = { fromContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
        QuestUtils.openQuestHome(obj4);
        const tmpResult2 = QuestUtils;
      }
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    tmp5Result3 = closure_6(tmp(tmp2[16]).ActionSheetRow, obj7);
  }
  const items2 = [tmp5Result3, closure_6(closure_10, { creative }), ];
  let obj10 = { icon: null, label: null, subLabel: null, onPress: null };
  const tmp6 = closure_6(creative(obj3[16]).ActionSheetRow, obj4);
  obj10.icon = closure_6(creative(obj3[16]).ActionSheetRow.Icon, { IconComponent: creative(obj3[24]).XSmallIcon });
  const obj12 = { text: null };
  const intl3 = tmp(tmp2[11]).intl;
  obj12.text = intl3.string(creative(obj3[11]).t.NN79E9);
  obj10.label = closure_6(creative(obj3[18]).FormLabel, obj12);
  let stringResult1;
  if (!tmp3) {
    const intl4 = tmp(tmp2[11]).intl;
    stringResult1 = intl4.string(tmp(tmp2[11]).t.V6htN5);
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
        return { value: "IconComponent", done: null };
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
            trackInternalClick(tmp2(7836).QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT);
            const type = creative.type;
            if (tmp2(6752).AdCreativeType.QUEST === type) {
              const obj7 = tmp2(9605);
              const dismissQuestContentResult = tmp2(9605).dismissQuestContent(creative.quest.id, tmp2(6748).QuestContent.QUEST_BAR_MOBILE);
              v2(5246).hideActionSheet();
              v2 = 1;
              dependencyMap = 1;
              const obj9 = { value: dismissQuestContentResult, done: false };
              return obj9;
            } else {
              if (tmp2(6752).AdCreativeType.BOUNTY !== type) {
                if (tmp2(6752).AdCreativeType.PLAYABLE !== type) {
                  dependencyMap = 3;
                }
              }
              const obj4 = tmp2(14372);
              const dismissAdContentResult = tmp2(14372).dismissAdContent(closure_1, tmp2(6748).QuestContent.QUEST_BAR_MOBILE);
              v2(5246).hideActionSheet();
              v2 = 2;
              dependencyMap = 1;
              const obj10 = { value: dismissAdContentResult, done: false };
              return obj10;
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 !== 2) {
            const result = tmp2(16720).displayQuestDismissalToast();
            const obj2 = tmp2(16720);
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
      } catch (tmp29) {
        dependencyMap = tmp;
        throw tmp29;
      }
    }
  });
  items2[2] = closure_6(creative(obj3[16]).ActionSheetRow, obj10);
  obj13.children = items2;
  children[1] = closure_7(creative(obj3[16]).ActionSheetRow.Group, obj13);
  let tmp5Result4 = null;
  if (creative.type === creative(obj3[9]).AdCreativeType.QUEST) {
    tmp5Result4 = null;
    if (creative.quest.preview) {
      const obj14 = { quest: creative.quest };
      tmp5Result4 = closure_6(closure_8, obj14);
    }
  }
  children[2] = tmp5Result4;
  return closure_7(creative(obj3[28]).ActionSheet, { children });
});