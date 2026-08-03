import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "getQuestContentName";
import initializeState from "initializeState";
import { LinkingTypes } from "ME";
import { jsx } from "module_14150";

const require = arg1;
function renderDefaultButton(ref) {
  const obj = { ref: ref.ref };
  const merged = Object.assign(callback(ref, closure_3));
  obj.icon = importDefault(8973);
  obj.variant = "secondary";
  const intl = require(1236) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1236) /* getSystemLocale */.t.CAgr1w);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj.accessibilityHint = intl2.string(require(1236) /* getSystemLocale */.t.hd0b7t);
  return jsx(require(6685) /* IconButton */.IconButton, { ref: ref.ref });
}
let closure_3 = ["ref"];
let c5 = importAllResult;
const memoResult = importAllResult.memo((children) => {
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
  let handleComplete;
  let handleProgress;
  let handleResetDismissibilityClick;
  let handleResetStatusClick;
  let handleOverridePreviewClick;
  let handleResetHasBeenSeenClick;
  stateFromStores = undefined;
  let trackQuestContentClickedWithImpression;
  let questImpressionId;
  let externalCtaLabel;
  flag = undefined;
  let callback;
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
  handleComplete = questPreviewActions.handleComplete;
  handleProgress = questPreviewActions.handleProgress;
  handleResetDismissibilityClick = questPreviewActions.handleResetDismissibilityClick;
  handleResetStatusClick = questPreviewActions.handleResetStatusClick;
  handleOverridePreviewClick = questPreviewActions.handleOverridePreviewClick;
  handleResetHasBeenSeenClick = questPreviewActions.handleResetHasBeenSeenClick;
  let obj = quest(sourceQuestContent[8]);
  let items = [handleResetStatusClick];
  stateFromStores = quest(sourceQuestContent[9]).useStateFromStores(items, () => handleResetStatusClick.getQuestPreviewOverride(quest(sourceQuestContent[10]).QuestContent.QUEST_BAR_MOBILE), []);
  const obj2 = quest(sourceQuestContent[9]);
  trackQuestContentClickedWithImpression = quest(sourceQuestContent[11]).useTrackQuestContentClickedWithImpression();
  const obj3 = quest(sourceQuestContent[11]);
  questImpressionId = quest(sourceQuestContent[12]).useQuestImpressionId();
  const obj4 = quest(sourceQuestContent[12]);
  externalCtaLabel = quest(sourceQuestContent[13]).getExternalCtaLabel(quest);
  if (flag) {
    let tmpResult = tmp(tmp2[14]);
    flag = tmpResult.isShareableQuest(quest.config);
  }
  let items1 = [quest, questImpressionId, sourceQuestContent];
  callback = handleResetDismissibilityClick.useCallback(() => {
    let obj = quest(sourceQuestContent[15]);
    let isIOSResult = obj.isIOS();
    if (isIOSResult) {
      let tmpResult = tmp(tmp2[13]);
      isIOSResult = additionalItems(tmp2[16])(tmpResult.getCtaLink(quest.config)).payload.type === handleOverridePreviewClick.INVITE;
      const tmp5 = additionalItems(tmp2[16]);
    }
    if (isIOSResult) {
      tmpResult = tmp(tmp2[17]);
      const result = tmpResult.dismissOverlayScreens();
    }
    obj = { content: tmp(tmp2[10]).QuestContent.QUEST_HOME_MOBILE, ctaContent: tmp(tmp2[19]).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId: questImpressionId, sourceQuestContent };
    quest(sourceQuestContent[18]).openGameLinkDirectly(quest, obj);
  }, items1);
  let items2 = [flag, quest.id, questImpressionId, sourceQuestContent];
  callback1 = handleResetDismissibilityClick.useCallback(() => {
    if (flag) {
      let obj = quest(sourceQuestContent[13]);
      obj = { content: null, ctaContent: null, impressionId: null, sourceQuestContent: null };
      obj[0] = quest(sourceQuestContent[10]).QuestContent.QUEST_HOME_MOBILE;
      obj[1] = quest(sourceQuestContent[19]).QuestContentCTA.CONTEXT_MENU_COPY_LINK;
      obj[2] = questImpressionId;
      obj[3] = sourceQuestContent;
      obj.copyShareLink(quest.id, obj);
      const AccessibilityAnnouncer = quest(sourceQuestContent[20]).AccessibilityAnnouncer;
      const intl = quest(sourceQuestContent[7]).intl;
      AccessibilityAnnouncer.announce(intl.string(quest(sourceQuestContent[7]).t["+5kSoW"]));
    }
  }, items2);
  let items3 = [quest, sourceQuestContent];
  callback2 = handleResetDismissibilityClick.useCallback(() => {
    let obj = additionalItems(sourceQuestContent[21]);
    obj = { quest, isTargetedDisclosure: false, trackingCtx: null };
    obj = { content: quest(sourceQuestContent[10]).QuestContent.QUEST_HOME_MOBILE, ctaContent: quest(sourceQuestContent[19]).QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent };
    obj[2] = obj;
    obj.showModal(obj);
  }, items3);
  const items4 = [quest.id];
  callback3 = handleResetDismissibilityClick.useCallback(() => quest(sourceQuestContent[22]).manuallyStartConsoleQuest(quest.id, true), items4);
  const items5 = [quest.id];
  callback4 = handleResetDismissibilityClick.useCallback(() => quest(sourceQuestContent[22]).manualStopConsoleQuest(quest.id), items5);
  const items6 = [externalCtaLabel, callback, callback2, flag, callback1];
  memo = handleResetDismissibilityClick.useMemo(() => {
    let obj = { label: externalCtaLabel, IconComponent: quest(sourceQuestContent[23]).LinkExternalSmallIcon, action: callback, accessibilityRole: "link" };
    const items = [obj, ];
    obj = { label: null, action: null, iconSource: null };
    const intl = quest(sourceQuestContent[7]).intl;
    obj[0] = intl.string(quest(sourceQuestContent[7]).t.GcsZKJ);
    obj[1] = callback2;
    obj[2] = additionalItems(sourceQuestContent[24]);
    items[1] = obj;
    if (flag) {
      obj = { label: null, IconComponent: null, action: null };
      const intl2 = tmp(tmp2[7]).intl;
      obj[0] = intl2.string(tmp(tmp2[7]).t.WqhZss);
      obj[1] = tmp(tmp2[25]).CopyIcon;
      obj[2] = callback1;
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
    let obj = quest(sourceQuestContent[26]);
    if (obj.isConsoleQuest(quest)) {
      obj = { label: "Start Console Heartbeat", action: null };
      obj[1] = callback3;
      const items = [obj, ];
      obj = { label: "Stop Console Heartbeat", action: null };
      obj[1] = callback4;
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
        return callback(0.9 * Math.random() + 0.03);
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
        return outer1_0(outer1_2[27]).copy(id.id);
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
        return callback(outer1_0(outer1_2[10]).QuestContent.QUEST_BAR_MOBILE);
      },
      IconComponent: null
    };
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    let CheckmarkLargeIcon;
    if (id === quest.id) {
      CheckmarkLargeIcon = quest(sourceQuestContent[28]).CheckmarkLargeIcon;
    }
    obj[2] = CheckmarkLargeIcon;
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
    let obj = quest(sourceQuestContent[29]);
    if (obj.shouldMigrateToAdAnalyticsInterface(quest(sourceQuestContent[29]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_context_menu")) {
      obj = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
      obj[0] = tmp(tmp2[31]).AdUserActionType.CLICK_INTERNAL;
      obj[1] = tmp(tmp2[32]).AdCreativeType.QUEST;
      obj[2] = quest.id;
      obj[3] = tmp(tmp2[19]).QuestContentCTA.OPEN_CONTEXT_MENU;
      obj[4] = tmp(tmp2[10]).QuestContent.QUEST_HOME_MOBILE;
      obj[5] = sourceQuestContent;
      obj[6] = questImpressionId;
      tmp(tmp2[30]).captureAdUserAction(obj);
      const tmpResult = tmp(tmp2[30]);
    } else {
      obj = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
      obj[0] = quest.id;
      obj[1] = tmp(tmp2[10]).QuestContent.QUEST_HOME_MOBILE;
      obj[2] = tmp(tmp2[19]).QuestContentCTA.OPEN_CONTEXT_MENU;
      obj[3] = sourceQuestContent;
      trackQuestContentClickedWithImpression(obj);
    }
  }, items11);
  return handleResetHasBeenSeenClick(quest(sourceQuestContent[33]).ContextMenu, { items, onOpen, triggerOnTap: true, children });
});
let result = require("initializeState").fileFinishedImporting("modules/quests/native/QuestContextMenu.tsx");

export default memoResult;