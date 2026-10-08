// === Module 15232: QuestContextMenu ===

// Module 15232 (QuestContextMenu)
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import CheckmarkLargeIcon2 from "CheckmarkLargeIcon" /* 4775 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4788 */;
import CopyIcon from "CopyIcon" /* 5043 */;
import parseURLDefault from "parseURL" /* 5067 */;
import QuestTypes from "QuestTypes" /* 5980 */;
import AdCreativeType from "AdCreativeType" /* 5984 */;
import ClipboardUtils from "ClipboardUtils" /* 6872 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7404 */;
import captureAdUserAction from "captureAdUserAction" /* 7405 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7415 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7416 */;
import LinkExternalSmallIcon from "LinkExternalSmallIcon" /* 7679 */;
import IconButton from "IconButton" /* 8106 */;
import _modDef8746 from "module_8746" /* 8746 */;
import QuestActionCreators from "QuestActionCreators" /* 9537 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9554 */;
import QuestUtils from "QuestUtils" /* 10572 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10582 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 15192 */;
import _modDef15233 from "module_15233" /* 15233 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7379 */;

require = fn;
function renderDefaultButton(ref) {
  const obj = { ref: ref.ref };
  const merged = Object.assign(_objectWithoutProperties(ref, closure_3));
  obj.icon = _modDef8746;
  obj.variant = "secondary";
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.CAgr1w);
  const intl2 = util.intl;
  obj.accessibilityHint = intl2.string(util.t.hd0b7t);
  return jsx(IconButton.IconButton, { ref: ref.ref });
}
let closure_3 = ["ref"];
const LinkingTypes = fn(1085).LinkingTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestContextMenu.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestContextMenu(arg0) {
  const cResult = quest(handleProgress[9]).c(89);
  ({ children, quest } = arg0);
  ({ showShareLink, additionalItems, sourceQuestContent } = arg0);
  if (undefined === children) {
    children = renderDefaultButton;
  }
  if (cResult[0] !== additionalItems) {
    let items = additionalItems;
    if (undefined === additionalItems) {
      items = [];
    }
    cResult[0] = additionalItems;
    cResult[1] = items;
  }
  let obj = quest(handleProgress[9]);
  const questPreviewActions = quest(handleProgress[10]).useQuestPreviewActions(quest.id);
  ({ handleComplete, handleProgress } = questPreviewActions);
  ({ handleResetDismissibilityClick, handleResetStatusClick, handleOverridePreviewClick } = questPreviewActions);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [getQuestImpressionId];
    class S {
      constructor() {
        return closure_6.getQuestPreviewOverride(quest(handleProgress[11]).QuestContent.QUEST_BAR_MOBILE);
      }
    }
    const items2 = [];
    cResult[2] = items1;
    cResult[3] = S;
    cResult[4] = items2;
    let tmp9 = items2;
    let tmp8 = S;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  let tmpResult = quest(handleProgress[10]);
  const stateFromStores = quest(handleProgress[12]).useStateFromStores(tmp7, tmp8, tmp9);
  const tmpResult5 = quest(handleProgress[12]);
  const trackQuestContentClickedWithImpression = quest(handleProgress[13]).useTrackQuestContentClickedWithImpression();
  const tmpResult6 = quest(handleProgress[13]);
  getQuestImpressionId = quest(handleProgress[14]).useGetQuestImpressionId();
  if (cResult[5] !== quest) {
    const externalCtaLabel = quest(handleProgress[15]).getExternalCtaLabel(quest);
    class S {
      constructor() {
        return closure_6.getQuestPreviewOverride(quest(handleProgress[11]).QuestContent.QUEST_BAR_MOBILE);
      }
    }
    cResult[6] = externalCtaLabel;
    let tmp14 = externalCtaLabel;
    const tmpResult8 = quest(handleProgress[15]);
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === quest.config) {
    if (cResult[8] === tmp4) {
      let tmp16 = cResult[9];
    }
    closure_7 = tmp16;
    if (cResult[10] === getQuestImpressionId) {
      if (cResult[11] === quest) {
        if (cResult[12] === sourceQuestContent) {
          let tmp18 = cResult[13];
        }
        if (cResult[14] === getQuestImpressionId) {
          if (cResult[15] === tmp16) {
            if (cResult[16] === quest.id) {
              if (cResult[19] === quest) {
                if (cResult[22] !== quest.id) {
                  class X {
                    constructor() {
                      obj = closure_0(closure_2[25]);
                      return obj.manuallyStartConsoleQuest(quest.id, true);
                    }
                  }
                  class H {
                    constructor() {
                      obj = closure_1(closure_2[23]);
                      obj1 = { creative: null, isTargetedDisclosure: false, trackingCtx: null };
                      obj5 = { type: closure_0(closure_2[24]).AdCreativeType.QUEST, quest };
                      obj1.creative = obj5;
                      obj6 = { content: closure_0(closure_2[11]).QuestContent.QUEST_HOME_MOBILE, ctaContent: closure_0(closure_2[21]).QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent };
                      obj1.trackingCtx = obj6;
                      showModalResult = obj.showModal(obj1);
                      return;
                    }
                  }
                  class S {
                    constructor() {
                      return closure_6.getQuestPreviewOverride(quest(handleProgress[11]).QuestContent.QUEST_BAR_MOBILE);
                    }
                  }
                  cResult[23] = X;
                } else {
                  class X {
                    constructor() {
                      obj = closure_0(closure_2[25]);
                      return obj.manuallyStartConsoleQuest(quest.id, true);
                    }
                  }
                }
                class H {
                  constructor() {
                    obj = closure_1(closure_2[23]);
                    obj1 = { creative: null, isTargetedDisclosure: false, trackingCtx: null };
                    obj5 = { type: closure_0(closure_2[24]).AdCreativeType.QUEST, quest };
                    obj1.creative = obj5;
                    obj6 = { content: closure_0(closure_2[11]).QuestContent.QUEST_HOME_MOBILE, ctaContent: closure_0(closure_2[21]).QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent };
                    obj1.trackingCtx = obj6;
                    showModalResult = obj.showModal(obj1);
                    return;
                  }
                }
                class S {
                  constructor() {
                    return closure_6.getQuestPreviewOverride(quest(handleProgress[11]).QuestContent.QUEST_BAR_MOBILE);
                  }
                }
                let obj2 = { label: tmp14, IconComponent: quest(handleProgress[26]).LinkExternalSmallIcon, action: tmp18, accessibilityRole: "link" };
                cResult[26] = tmp14;
                cResult[27] = tmp18;
                cResult[28] = obj2;
              }
              class H {
                constructor() {
                  obj = closure_1(closure_2[23]);
                  obj1 = { creative: null, isTargetedDisclosure: false, trackingCtx: null };
                  obj5 = { type: closure_0(closure_2[24]).AdCreativeType.QUEST, quest };
                  obj1.creative = obj5;
                  obj6 = { content: closure_0(closure_2[11]).QuestContent.QUEST_HOME_MOBILE, ctaContent: closure_0(closure_2[21]).QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent };
                  obj1.trackingCtx = obj6;
                  showModalResult = obj.showModal(obj1);
                  return;
                }
              }
              class S {
                constructor() {
                  return closure_6.getQuestPreviewOverride(quest(handleProgress[11]).QuestContent.QUEST_BAR_MOBILE);
                }
              }
              cResult[19] = quest;
              cResult[20] = sourceQuestContent;
              cResult[21] = H;
            }
          }
        }
        class S {
          constructor() {
            return closure_6.getQuestPreviewOverride(quest(handleProgress[11]).QuestContent.QUEST_BAR_MOBILE);
          }
        }
        cResult[14] = getQuestImpressionId;
        cResult[15] = tmp16;
        cResult[16] = quest.id;
        cResult[17] = sourceQuestContent;
        cResult[18] = tmp21;
      }
    }
    class S {
      constructor() {
        return closure_6.getQuestPreviewOverride(quest(handleProgress[11]).QuestContent.QUEST_BAR_MOBILE);
      }
    }
    cResult[10] = getQuestImpressionId;
    cResult[11] = quest;
    cResult[12] = sourceQuestContent;
    cResult[13] = tmp19;
    tmp18 = tmp19;
  }
  let isShareableQuestResult = tmp4;
  if (undefined !== showShareLink && showShareLink) {
    class X {
      constructor() {
        obj = closure_0(closure_2[25]);
        return obj.manuallyStartConsoleQuest(quest.id, true);
      }
    }
    isShareableQuestResult = obj7.isShareableQuest(quest.config);
  }
  cResult[7] = quest.config;
  cResult[8] = undefined !== showShareLink && showShareLink;
  cResult[9] = isShareableQuestResult;
  tmp16 = isShareableQuestResult;
  const tmpResult7 = quest(handleProgress[14]);
}) : (function QuestContextMenu(children) {
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
  const questPreviewActions = quest(sourceQuestContent[10]).useQuestPreviewActions(quest.id);
  const handleComplete = questPreviewActions.handleComplete;
  const handleProgress = questPreviewActions.handleProgress;
  const handleResetDismissibilityClick = questPreviewActions.handleResetDismissibilityClick;
  const handleResetStatusClick = questPreviewActions.handleResetStatusClick;
  const handleOverridePreviewClick = questPreviewActions.handleOverridePreviewClick;
  const handleResetHasBeenSeenClick = questPreviewActions.handleResetHasBeenSeenClick;
  let obj = quest(sourceQuestContent[10]);
  let items = [handleResetStatusClick];
  stateFromStores = quest(sourceQuestContent[12]).useStateFromStores(items, () => handleResetStatusClick.getQuestPreviewOverride(quest(sourceQuestContent[11]).QuestContent.QUEST_BAR_MOBILE), []);
  let obj2 = quest(sourceQuestContent[12]);
  const trackQuestContentClickedWithImpression = quest(sourceQuestContent[13]).useTrackQuestContentClickedWithImpression();
  let obj3 = quest(sourceQuestContent[13]);
  const getQuestImpressionId = quest(sourceQuestContent[14]).useGetQuestImpressionId();
  const obj4 = quest(sourceQuestContent[14]);
  const externalCtaLabel = quest(sourceQuestContent[15]).getExternalCtaLabel(quest);
  if (flag) {
    flag = tmp(tmp2[16]).isShareableQuest(quest.config);
    let tmpResult = tmp(tmp2[16]);
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
    obj2.iconSource = _modDef15233;
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
        return quest(sourceQuestContent[30]).copy(id.id);
      }
    };
    return items;
  }, items8);
  const obj5 = quest(sourceQuestContent[15]);
  shouldShowQuestPreviewOverrides = quest(sourceQuestContent[10]).useShouldShowQuestPreviewOverrides(quest);
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
        return handleOverridePreviewClick(quest(sourceQuestContent[11]).QuestContent.QUEST_BAR_MOBILE);
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
  const items11 = [quest.id, trackQuestContentClickedWithImpression, getQuestImpressionId, sourceQuestContent];
  const items12 = obj7.useMemo(() => {
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
    if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_context_menu")) {
      const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU, surfaceId: QuestTypes.QuestContent.QUEST_HOME_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
      captureAdUserAction.captureAdUserAction(obj2);
      const tmpResult = captureAdUserAction;
    } else {
      const obj3 = { questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU, sourceQuestContent };
      trackQuestContentClickedWithImpression(obj3);
    }
    obj = AdAnalyticsInterfaceExperiment;
  }, items11);
  return handleResetHasBeenSeenClick(quest(sourceQuestContent[35]).ContextMenu, { items: items12, onOpen, triggerOnTap: true, children });
}));