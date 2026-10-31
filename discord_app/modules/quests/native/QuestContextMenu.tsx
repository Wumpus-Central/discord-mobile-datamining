// === Module 17116: QuestContextMenu ===

// Module 17116 (QuestContextMenu)
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5023 */;
import CopyIcon from "CopyIcon" /* 5731 */;
import parseURLDefault from "parseURL" /* 5745 */;
import QuestTypes from "QuestTypes" /* 6784 */;
import AdCreativeType from "AdCreativeType" /* 6788 */;
import CheckmarkLargeIcon2 from "CheckmarkLargeIcon" /* 6993 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7871 */;
import IconButton from "IconButton" /* 8028 */;
import LinkExternalSmallIcon from "LinkExternalSmallIcon" /* 8161 */;
import _modDef9207 from "module_9207" /* 9207 */;
import QuestUtils from "QuestUtils" /* 9678 */;
import QuestActionCreators from "QuestActionCreators" /* 9682 */;
import captureAdUserAction from "captureAdUserAction" /* 9684 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9687 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9705 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9719 */;
import _modDef17050 from "module_17050" /* 17050 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 17075 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7846 */;

require = fn;
function renderDefaultButton(ref) {
  const obj = { ref: ref.ref };
  const merged = Object.assign(_objectWithoutProperties(ref, closure_3));
  obj.icon = _modDef9207;
  obj.variant = "secondary";
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.CAgr1w);
  const intl2 = util.intl;
  obj.accessibilityHint = intl2.string(util.t.hd0b7t);
  return jsx(IconButton.IconButton, { ref: ref.ref });
}
let closure_3 = ["ref"];
const LinkingTypes = fn(1072).LinkingTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestContextMenu.tsx");

export default noop.memo(function QuestContextMenu(children) {
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
  let obj2 = quest(sourceQuestContent[9]);
  const getQuestImpressionId = quest(sourceQuestContent[11]).useGetQuestImpressionId();
  let obj3 = quest(sourceQuestContent[11]);
  const externalCtaLabel = quest(sourceQuestContent[12]).getExternalCtaLabel(quest);
  if (flag) {
    flag = tmp(tmp2[13]).isShareableQuest(quest.config);
    let tmpResult = tmp(tmp2[13]);
  }
  let items1 = [quest, getQuestImpressionId, sourceQuestContent];
  action = handleResetDismissibilityClick.useCallback(() => {
    let isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      const tmp5 = parseURLDefault;
      isIOSResult = tmp5(QuestCopyUtils.getCtaLink(quest.config)).payload.type === LinkingTypes.INVITE;
      const tmpResult = QuestCopyUtils;
    }
    if (isIOSResult) {
      const result = QuestUtils.dismissOverlayScreens();
      const tmpResult3 = QuestUtils;
    }
    const tmpResult4 = QuestPlatformUtils;
    tmpResult4.openGameLinkDirectly(quest, { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent });
    const obj2 = { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
  }, items1);
  let items2 = [flag, quest.id, getQuestImpressionId, sourceQuestContent];
  callback1 = handleResetDismissibilityClick.useCallback(() => {
    if (flag) {
      const obj2 = { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
      QuestCopyUtils.copyShareLink(quest.id, obj2);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t["+5kSoW"]));
    }
  }, items2);
  let items3 = [quest, sourceQuestContent];
  callback2 = handleResetDismissibilityClick.useCallback(() => {
    const obj2 = { creative: null, isTargetedDisclosure: false, trackingCtx: null };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    obj2.creative = { type: AdCreativeType.AdCreativeType.QUEST, quest };
    const obj3 = { type: AdCreativeType.AdCreativeType.QUEST, quest };
    obj2.trackingCtx = { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent };
    obj.showModal(obj2);
  }, items3);
  const items4 = [quest.id];
  callback3 = handleResetDismissibilityClick.useCallback(() => QuestActionCreators.manuallyStartConsoleQuest(quest.id, true), items4);
  const items5 = [quest.id];
  callback4 = handleResetDismissibilityClick.useCallback(() => QuestActionCreators.manualStopConsoleQuest(quest.id), items5);
  const items6 = [externalCtaLabel, action, callback2, flag, callback1];
  memo = handleResetDismissibilityClick.useMemo(() => {
    const items = [{ label: externalCtaLabel, IconComponent: LinkExternalSmallIcon.LinkExternalSmallIcon, action, accessibilityRole: "link" }, ];
    const obj2 = { label: null, action: null, iconSource: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t.GcsZKJ);
    obj2.action = callback2;
    obj2.iconSource = _modDef17050;
    items[1] = obj2;
    if (flag) {
      const obj3 = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(util.t.WqhZss);
      obj3.IconComponent = CopyIcon.CopyIcon;
      obj3.action = callback1;
      const items1 = [obj3];
      let items2 = items1;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items2, 2);
    return items;
  }, items6);
  const items7 = [quest, callback3, callback4];
  memo1 = handleResetDismissibilityClick.useMemo(() => {
    if (obj.isConsoleQuest(quest)) {
      const obj2 = { label: "Start Console Heartbeat", action: callback3 };
      const items = [obj2, ];
      const obj3 = { label: "Stop Console Heartbeat", action: callback4 };
      items[1] = obj3;
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items7);
  const items8 = [memo1, handleComplete, handleResetDismissibilityClick, handleProgress, handleResetStatusClick, handleResetHasBeenSeenClick, quest.id];
  memo2 = handleResetDismissibilityClick.useMemo(() => {
    const items = [
      {
        label: "Set Random Quest Progress",
        action() {
          return handleProgress(0.9 * Math.random() + 0.03);
        }
      },
      { label: "Complete Quest", action: handleComplete },
      { label: "Reset Quest", action: handleResetStatusClick },
      { label: "Reset Dismissibility", action: handleResetDismissibilityClick },
      { label: "Reset Quest Seen", action: handleResetHasBeenSeenClick },

    ];
    items[HermesBuiltin.arraySpread(memo1, 5)] = {
      label: "Copy Quest ID",
      action() {
        return quest(sourceQuestContent[27]).copy(id.id);
      }
    };
    return items;
  }, items8);
  const obj4 = quest(sourceQuestContent[12]);
  shouldShowQuestPreviewOverrides = quest(sourceQuestContent[8]).useShouldShowQuestPreviewOverrides(quest);
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
  const items11 = [quest.id, getQuestImpressionId, sourceQuestContent];
  const items12 = obj6.useMemo(() => {
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
  const onOpen = obj6.useCallback(() => {
    const obj = captureAdUserAction;
    obj.captureAdUserAction({ type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU, surfaceId: QuestTypes.QuestContent.QUEST_HOME_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() });
  }, items11);
  return handleResetHasBeenSeenClick(quest(sourceQuestContent[31]).ContextMenu, { items: items12, onOpen, triggerOnTap: true, children });
});