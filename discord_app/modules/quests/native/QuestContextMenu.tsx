// === Module 15151: QuestContextMenu ===

// Module 15151 (QuestContextMenu)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4272 */;
import CheckmarkLargeIcon2 from "CheckmarkLargeIcon" /* 4511 */;
import parseURLDefault from "parseURL" /* 4540 */;
import QuestTypes from "QuestTypes" /* 5447 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7724 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import IconButton from "IconButton" /* 8097 */;
import LinkExternalSmallIcon from "LinkExternalSmallIcon" /* 8580 */;
import _modDef8673 from "module_8673" /* 8673 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 11192 */;
import QuestActionCreators from "QuestActionCreators" /* 11276 */;
import QuestCopyUtils from "QuestCopyUtils" /* 11295 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11496 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 15113 */;
import _modDef15152 from "module_15152" /* 15152 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7703 */;

require = fn;
function renderDefaultButton(ref) {
  const obj = { ref: ref.ref };
  const merged = Object.assign(_objectWithoutProperties(ref, closure_3));
  obj.icon = _modDef8673;
  obj.variant = "secondary";
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.CAgr1w);
  const intl2 = util.intl;
  obj.accessibilityHint = intl2.string(util.t.hd0b7t);
  return jsx(IconButton.IconButton, { ref: ref.ref });
}
let closure_3 = ["ref"];
const LinkingTypes = fn(1074).LinkingTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestContextMenu.tsx");

export default noop.memo((children) => {
  children = children.children;
  if (children === undefined) {
    children = stateFromStores;
  }
  const quest = children.quest;
  let flag = children.showShareLink;
  if (flag === undefined) {
    flag = false;
  }
  let additionalItems = children.additionalItems;
  if (additionalItems === undefined) {
    additionalItems = [];
  }
  const sourceQuestContent = children.sourceQuestContent;
  flag = undefined;
  let action;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let memo;
  let memo1;
  let memo2;
  let shouldShowQuestPreviewOverrides;
  let memo3;
  const questPreviewActions = quest(sourceQuestContent[8]).useQuestPreviewActions(quest.id);
  const handleComplete = questPreviewActions.handleComplete;
  const handleProgress = questPreviewActions.handleProgress;
  const handleResetDismissibilityClick = questPreviewActions.handleResetDismissibilityClick;
  const handleResetStatusClick = questPreviewActions.handleResetStatusClick;
  const handleOverridePreviewClick = questPreviewActions.handleOverridePreviewClick;
  const handleResetHasBeenSeenClick = questPreviewActions.handleResetHasBeenSeenClick;
  let obj = quest(sourceQuestContent[8]);
  let items = [handleResetStatusClick];
  stateFromStores = quest(sourceQuestContent[9]).useStateFromStores(items, () => handleResetStatusClick.getQuestPreviewOverride(quest(sourceQuestContent[10]).QuestContent.QUEST_BAR_MOBILE), []);
  const obj2 = quest(sourceQuestContent[9]);
  const trackQuestContentClickedWithImpression = quest(sourceQuestContent[11]).useTrackQuestContentClickedWithImpression();
  const obj3 = quest(sourceQuestContent[11]);
  const questImpressionId = quest(sourceQuestContent[12]).useQuestImpressionId();
  const obj4 = quest(sourceQuestContent[12]);
  const externalCtaLabel = quest(sourceQuestContent[13]).getExternalCtaLabel(quest);
  if (flag) {
    let tmpResult = tmp(tmp2[14]);
    flag = tmpResult.isShareableQuest(quest.config);
  }
  let items1 = [quest, questImpressionId, sourceQuestContent];
  action = handleResetDismissibilityClick.useCallback(() => {
    let obj = PlatformUtils;
    let isIOSResult = obj.isIOS();
    if (isIOSResult) {
      let tmpResult = tmp(11295);
      isIOSResult = parseURLDefault(tmpResult.getCtaLink(quest.config)).payload.type === LinkingTypes.INVITE;
    }
    if (isIOSResult) {
      tmpResult = tmp(11767);
      const result = tmpResult.dismissOverlayScreens();
    }
    obj = { content: tmp(5447).QuestContent.QUEST_HOME_MOBILE, ctaContent: tmp(7728).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId: questImpressionId, sourceQuestContent };
    QuestPlatformUtils.openGameLinkDirectly(quest, obj);
  }, items1);
  let items2 = [flag, quest.id, questImpressionId, sourceQuestContent];
  callback1 = handleResetDismissibilityClick.useCallback(() => {
    if (flag) {
      const obj = { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, impressionId: questImpressionId, sourceQuestContent };
      obj.copyShareLink(quest.id, obj);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t["+5kSoW"]));
    }
  }, items2);
  let items3 = [quest, sourceQuestContent];
  callback2 = handleResetDismissibilityClick.useCallback(() => {
    let obj = { creative: null, isTargetedDisclosure: false, trackingCtx: null };
    obj = { type: AdCreativeType.AdCreativeType.QUEST, quest };
    obj.creative = obj;
    obj.trackingCtx = { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent };
    obj.showModal(obj);
  }, items3);
  const items4 = [quest.id];
  callback3 = handleResetDismissibilityClick.useCallback(() => QuestActionCreators.manuallyStartConsoleQuest(quest.id, true), items4);
  const items5 = [quest.id];
  callback4 = handleResetDismissibilityClick.useCallback(() => QuestActionCreators.manualStopConsoleQuest(quest.id), items5);
  const items6 = [externalCtaLabel, action, callback2, flag, callback1];
  memo = handleResetDismissibilityClick.useMemo(() => {
    let obj = { label: externalCtaLabel, IconComponent: LinkExternalSmallIcon.LinkExternalSmallIcon, action, accessibilityRole: "link" };
    const items = [obj, ];
    obj = { label: null, action: null, iconSource: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.GcsZKJ);
    obj.action = callback2;
    obj.iconSource = _modDef15152;
    items[1] = obj;
    if (flag) {
      obj = { label: null, IconComponent: null, action: null };
      const intl2 = tmp(1114).intl;
      obj.label = intl2.string(tmp(1114).t.WqhZss);
      obj.IconComponent = tmp(4507).CopyIcon;
      obj.action = callback1;
      const items1 = [obj];
      let items2 = items1;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items2, 2);
    return items;
  }, items6);
  const items7 = [quest, callback3, callback4];
  memo1 = handleResetDismissibilityClick.useMemo(() => {
    let obj = QuestTaskUtils;
    if (obj.isConsoleQuest(quest)) {
      obj = { label: "Start Console Heartbeat", action: callback3 };
      const items = [obj, ];
      obj = { label: "Stop Console Heartbeat", action: callback4 };
      items[1] = obj;
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items7);
  const items8 = [memo1, handleComplete, handleResetDismissibilityClick, handleProgress, handleResetStatusClick, handleResetHasBeenSeenClick, quest.id];
  memo2 = handleResetDismissibilityClick.useMemo(() => {
    let obj = {
      label: "Set Random Quest Progress",
      action() {
        return handleProgress(0.9 * Math.random() + 0.03);
      }
    };
    const items = [obj, , , , , ];
    obj = { label: "Complete Quest", action: handleComplete };
    items[1] = obj;
    obj = { label: "Reset Quest", action: handleResetStatusClick };
    items[2] = obj;
    items[3] = { label: "Reset Dismissibility", action: handleResetDismissibilityClick };
    items[4] = { label: "Reset Quest Seen", action: handleResetHasBeenSeenClick };
    items[HermesBuiltin.arraySpread(memo1, 5)] = {
      label: "Copy Quest ID",
      action() {
        return quest(sourceQuestContent[28]).copy(id.id);
      }
    };
    return items;
  }, items8);
  tmpResult = tmp(tmp2[8]);
  shouldShowQuestPreviewOverrides = tmpResult.useShouldShowQuestPreviewOverrides(quest);
  const items9 = [handleOverridePreviewClick, quest.id, ];
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items9[2] = id;
  memo3 = handleResetDismissibilityClick.useMemo(() => {
    const obj = {
      label: "Show in Quest Bar",
      action() {
        return handleOverridePreviewClick(quest(sourceQuestContent[10]).QuestContent.QUEST_BAR_MOBILE);
      },
      IconComponent: null
    };
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    let CheckmarkLargeIcon;
    if (id === quest.id) {
      CheckmarkLargeIcon = CheckmarkLargeIcon2.CheckmarkLargeIcon;
    }
    obj.IconComponent = CheckmarkLargeIcon;
    return obj;
  }, items9);
  const items10 = [memo, memo2, quest.preview, shouldShowQuestPreviewOverrides, memo3, additionalItems];
  const items11 = [quest.id, trackQuestContentClickedWithImpression, questImpressionId, sourceQuestContent];
  items = obj7.useMemo(() => {
    if (null != additionalItems) {
      const items = [memo, tmp];
      let items1 = items;
    } else {
      items1 = [memo];
    }
    if (shouldShowQuestPreviewOverrides) {
      const items2 = [memo3];
      items1.push(items2);
    }
    let tmp6 = items1;
    if (quest.preview) {
      const items3 = [];
      items3[HermesBuiltin.arraySpread(items1, 0)] = memo2;
      tmp6 = items3;
    }
    return tmp6;
  }, items10);
  const onOpen = obj7.useCallback(() => {
    let obj = AdAnalyticsInterfaceExperiment;
    if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_context_menu")) {
      obj = { type: tmp(11197).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(5451).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: tmp(7728).QuestContentCTA.OPEN_CONTEXT_MENU, surfaceId: tmp(5447).QuestContent.QUEST_HOME_MOBILE, sourceQuestContent, impressionId: questImpressionId };
      tmp(11193).captureAdUserAction(obj);
      const tmpResult = tmp(11193);
    } else {
      obj = { questId: quest.id, questContent: tmp(5447).QuestContent.QUEST_HOME_MOBILE, questContentCTA: tmp(7728).QuestContentCTA.OPEN_CONTEXT_MENU, sourceQuestContent };
      trackQuestContentClickedWithImpression(obj);
    }
  }, items11);
  return handleResetHasBeenSeenClick(quest(sourceQuestContent[33]).ContextMenu, { items, onOpen, triggerOnTap: true, children });
});