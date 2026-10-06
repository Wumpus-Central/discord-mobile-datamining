// === Module 14970: QuestContextMenu ===

// Module 14970 (QuestContextMenu)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import CheckmarkLargeIcon2 from "CheckmarkLargeIcon" /* 4583 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4596 */;
import CopyIcon from "CopyIcon" /* 4849 */;
import parseURLDefault from "parseURL" /* 4873 */;
import QuestTypes from "QuestTypes" /* 5633 */;
import AdCreativeType from "AdCreativeType" /* 5637 */;
import ClipboardUtils from "ClipboardUtils" /* 6695 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7221 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7225 */;
import captureAdUserAction2 from "captureAdUserAction" /* 7226 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7236 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7237 */;
import IconButton2 from "IconButton" /* 7586 */;
import AssetRegistryDefault from "AssetRegistry" /* 7589 */;
import LinkExternalSmallIcon from "LinkExternalSmallIcon" /* 8296 */;
import QuestActionCreators from "QuestActionCreators" /* 10007 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10023 */;
import QuestUtils from "QuestUtils" /* 10921 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10931 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 14930 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14971 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import QuestStore from "QuestStore" /* 7200 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let announceResult, copyShareLinkResult, tmp3, tmp6;

function renderDefaultButton(ref) {
  const tmp = _objectWithoutProperties(ref.ref, closure_3);
  const IconButton = IconButton2.IconButton;
  const merged = Object.assign(tmp);
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  return <IconButton ref={ref.ref} icon={AssetRegistryDefault} variant="secondary" accessibilityLabel={intl.string(intl3.t.CAgr1w)} accessibilityHint={intl2.string(intl3.t.hd0b7t)} />;
}
let closure_3 = ["ref"];
const LinkingTypes = Constants.LinkingTypes;
const jsx = Fragment.jsx;
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let additionalItems;
  let children;
  let getQuestImpressionId;
  let handleComplete;
  let handleOverridePreviewClick;
  let handleProgress;
  let handleResetDismissibilityClick;
  let handleResetStatusClick;
  let quest;
  let showShareLink;
  let sourceQuestContent;
  let tmp14;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = quest(handleProgress[9]);
  const cResult = obj.c(89);
  ({ children, quest } = arg0);
  ({ showShareLink, additionalItems, sourceQuestContent } = arg0);
  if (undefined === children) {
    children = renderDefaultButton;
  }
  const tmp4 = undefined !== showShareLink && showShareLink;
  if (cResult[0] !== additionalItems) {
    let items = additionalItems;
    if (undefined === additionalItems) {
      items = [];
    }
    cResult[0] = additionalItems;
    cResult[1] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  let tmpResult = quest(handleProgress[10]);
  const questPreviewActions = tmpResult.useQuestPreviewActions(quest.id);
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
    tmp9 = items2;
    tmp8 = S;
    tmp7 = items1;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const tmpResult5 = quest(handleProgress[12]);
  const stateFromStores = tmpResult5.useStateFromStores(tmp7, tmp8, tmp9);
  const tmpResult6 = quest(handleProgress[13]);
  const trackQuestContentClickedWithImpression = tmpResult6.useTrackQuestContentClickedWithImpression();
  const tmpResult7 = quest(handleProgress[14]);
  getQuestImpressionId = tmpResult7.useGetQuestImpressionId();
  if (cResult[5] !== quest) {
    const tmpResult8 = quest(handleProgress[15]);
    const externalCtaLabel = tmpResult8.getExternalCtaLabel(quest);
    class S {
      constructor() {
        return closure_6.getQuestPreviewOverride(quest(handleProgress[11]).QuestContent.QUEST_BAR_MOBILE);
      }
    }
    cResult[6] = externalCtaLabel;
    tmp14 = externalCtaLabel;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === quest.config) {
    let tmp16;
    if (cResult[8] === tmp4) {
      tmp16 = cResult[9];
    }
    let closure_7 = tmp16;
    if (cResult[10] === getQuestImpressionId) {
      if (cResult[11] === quest) {
        let tmp18;
        if (cResult[12] === sourceQuestContent) {
          tmp18 = cResult[13];
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
                  class D {
                    constructor() {
                      tmp = closure_7;
                      if (tmp) {
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        tmp4 = closure_0(closure_2[15]);
                        tmp5 = quest;
                        obj = { content: null, ctaContent: null, impressionId: null, sourceQuestContent: null };
                        copyShareLink = tmp4.copyShareLink;
                        id = quest.id;
                        obj.content = closure_0(closure_2[11]).QuestContent.QUEST_HOME_MOBILE;
                        obj.ctaContent = closure_0(closure_2[21]).QuestContentCTA.CONTEXT_MENU_COPY_LINK;
                        tmp6 = closure_6;
                        obj.impressionId = closure_6();
                        tmp7 = sourceQuestContent;
                        obj.sourceQuestContent = sourceQuestContent;
                        copyShareLinkResult = copyShareLink(id, obj);
                        AccessibilityAnnouncer = closure_0(closure_2[22]).AccessibilityAnnouncer;
                        announce = AccessibilityAnnouncer.announce;
                        intl = closure_0(closure_2[7]).intl;
                        announceResult = announce(intl.string(closure_0(closure_2[7]).t["+5kSoW"]));
                      }
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
                class D {
                  constructor() {
                    tmp = closure_7;
                    if (tmp) {
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      tmp4 = closure_0(closure_2[15]);
                      tmp5 = quest;
                      obj = { content: null, ctaContent: null, impressionId: null, sourceQuestContent: null };
                      copyShareLink = tmp4.copyShareLink;
                      id = quest.id;
                      obj.content = closure_0(closure_2[11]).QuestContent.QUEST_HOME_MOBILE;
                      obj.ctaContent = closure_0(closure_2[21]).QuestContentCTA.CONTEXT_MENU_COPY_LINK;
                      tmp6 = closure_6;
                      obj.impressionId = closure_6();
                      tmp7 = sourceQuestContent;
                      obj.sourceQuestContent = sourceQuestContent;
                      copyShareLinkResult = copyShareLink(id, obj);
                      AccessibilityAnnouncer = closure_0(closure_2[22]).AccessibilityAnnouncer;
                      announce = AccessibilityAnnouncer.announce;
                      intl = closure_0(closure_2[7]).intl;
                      announceResult = announce(intl.string(closure_0(closure_2[7]).t["+5kSoW"]));
                    }
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
              class D {
                constructor() {
                  tmp = closure_7;
                  if (tmp) {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    tmp4 = closure_0(closure_2[15]);
                    tmp5 = quest;
                    obj = { content: null, ctaContent: null, impressionId: null, sourceQuestContent: null };
                    copyShareLink = tmp4.copyShareLink;
                    id = quest.id;
                    obj.content = closure_0(closure_2[11]).QuestContent.QUEST_HOME_MOBILE;
                    obj.ctaContent = closure_0(closure_2[21]).QuestContentCTA.CONTEXT_MENU_COPY_LINK;
                    tmp6 = closure_6;
                    obj.impressionId = closure_6();
                    tmp7 = sourceQuestContent;
                    obj.sourceQuestContent = sourceQuestContent;
                    copyShareLinkResult = copyShareLink(id, obj);
                    AccessibilityAnnouncer = closure_0(closure_2[22]).AccessibilityAnnouncer;
                    announce = AccessibilityAnnouncer.announce;
                    intl = closure_0(closure_2[7]).intl;
                    announceResult = announce(intl.string(closure_0(closure_2[7]).t["+5kSoW"]));
                  }
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
              cResult[21] = tmp22;
            }
          }
        }
        class D {
          constructor() {
            tmp = closure_7;
            if (tmp) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              tmp4 = closure_0(closure_2[15]);
              tmp5 = quest;
              obj = { content: null, ctaContent: null, impressionId: null, sourceQuestContent: null };
              copyShareLink = tmp4.copyShareLink;
              id = quest.id;
              obj.content = closure_0(closure_2[11]).QuestContent.QUEST_HOME_MOBILE;
              obj.ctaContent = closure_0(closure_2[21]).QuestContentCTA.CONTEXT_MENU_COPY_LINK;
              tmp6 = closure_6;
              obj.impressionId = closure_6();
              tmp7 = sourceQuestContent;
              obj.sourceQuestContent = sourceQuestContent;
              copyShareLinkResult = copyShareLink(id, obj);
              AccessibilityAnnouncer = closure_0(closure_2[22]).AccessibilityAnnouncer;
              announce = AccessibilityAnnouncer.announce;
              intl = closure_0(closure_2[7]).intl;
              announceResult = announce(intl.string(closure_0(closure_2[7]).t["+5kSoW"]));
            }
            return;
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
        cResult[18] = D;
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
  if (isShareableQuestResult) {
    class X {
      constructor() {
        obj = closure_0(closure_2[25]);
        return obj.manuallyStartConsoleQuest(quest.id, true);
      }
    }
    isShareableQuestResult = obj7.isShareableQuest(quest.config);
  }
  cResult[7] = quest.config;
  cResult[8] = tmp4;
  cResult[9] = isShareableQuestResult;
  tmp16 = isShareableQuestResult;
}) : ((children) => {
  let stateFromStores;
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
  let tmp = quest;
  const tmp2 = sourceQuestContent;
  let obj = quest(sourceQuestContent[10]);
  const questPreviewActions = obj.useQuestPreviewActions(quest.id);
  const handleComplete = questPreviewActions.handleComplete;
  const handleProgress = questPreviewActions.handleProgress;
  const handleResetDismissibilityClick = questPreviewActions.handleResetDismissibilityClick;
  const handleResetStatusClick = questPreviewActions.handleResetStatusClick;
  const handleOverridePreviewClick = questPreviewActions.handleOverridePreviewClick;
  const handleResetHasBeenSeenClick = questPreviewActions.handleResetHasBeenSeenClick;
  let obj2 = quest(sourceQuestContent[12]);
  let items = [handleResetStatusClick];
  stateFromStores = obj2.useStateFromStores(items, () => handleResetStatusClick.getQuestPreviewOverride(quest(sourceQuestContent[11]).QuestContent.QUEST_BAR_MOBILE), []);
  let obj3 = quest(sourceQuestContent[13]);
  const trackQuestContentClickedWithImpression = obj3.useTrackQuestContentClickedWithImpression();
  let obj4 = quest(sourceQuestContent[14]);
  const getQuestImpressionId = obj4.useGetQuestImpressionId();
  let obj5 = quest(sourceQuestContent[15]);
  const externalCtaLabel = obj5.getExternalCtaLabel(quest);
  if (flag) {
    let tmpResult = tmp(tmp2[16]);
    flag = tmpResult.isShareableQuest(quest.config);
  }
  let items1 = [quest, getQuestImpressionId, sourceQuestContent];
  action = handleResetDismissibilityClick.useCallback(() => {
    const obj = PlatformUtils;
    let isIOSResult = obj.isIOS();
    if (isIOSResult) {
      const tmp5 = parseURLDefault;
      const tmpResult = QuestCopyUtils;
      isIOSResult = tmp5(tmpResult.getCtaLink(quest.config)).payload.type === LinkingTypes.INVITE;
    }
    if (isIOSResult) {
      const tmpResult3 = QuestUtils;
      const result = tmpResult3.dismissOverlayScreens();
    }
    const tmpResult4 = QuestPlatformUtils;
    const obj2 = { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    tmpResult4.openGameLinkDirectly(quest, obj2);
  }, items1);
  let items2 = [flag, quest.id, getQuestImpressionId, sourceQuestContent];
  callback1 = handleResetDismissibilityClick.useCallback(() => {
    if (flag) {
      const obj = { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
      const copyShareLink = QuestCopyUtils.copyShareLink;
      const id = quest.id;
      QuestCopyUtils;
      copyShareLink(id, obj);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl3.intl;
      announce(intl.string(intl3.t["+5kSoW"]));
    }
  }, items2);
  let items3 = [quest, sourceQuestContent];
  callback2 = handleResetDismissibilityClick.useCallback(() => {
    const obj = { creative: { type: AdCreativeType.AdCreativeType.QUEST, quest }, isTargetedDisclosure: false, trackingCtx: { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent } };
    const showModal = QuestDisclosureModalActionCreatorsDefault.showModal;
    ({ type: AdCreativeType.AdCreativeType.QUEST, quest });
    ({ content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent });
    showModal(obj);
  }, items3);
  const items4 = [quest.id];
  callback3 = handleResetDismissibilityClick.useCallback(() => {
    const obj = QuestActionCreators;
    return obj.manuallyStartConsoleQuest(quest.id, true);
  }, items4);
  const items5 = [quest.id];
  callback4 = handleResetDismissibilityClick.useCallback(() => {
    const obj = QuestActionCreators;
    return obj.manualStopConsoleQuest(quest.id);
  }, items5);
  const items6 = [externalCtaLabel, action, callback2, flag, callback1];
  memo = handleResetDismissibilityClick.useMemo(() => {
    let intl;
    let intl2;
    let items2;
    const items = [{ label: externalCtaLabel, IconComponent: LinkExternalSmallIcon.LinkExternalSmallIcon, action, accessibilityRole: "link" }, ];
    const obj2 = { label: intl.string(intl3.t.GcsZKJ), action: callback2, iconSource: AssetRegistryDefault2 };
    ({ label: externalCtaLabel, IconComponent: LinkExternalSmallIcon.LinkExternalSmallIcon, action, accessibilityRole: "link" });
    intl = intl3.intl;
    items[1] = obj2;
    if (flag) {
      const obj3 = { label: intl2.string(intl3.t.WqhZss), IconComponent: CopyIcon.CopyIcon, action: callback1 };
      intl2 = intl3.intl;
      const items1 = [obj3];
      items2 = items1;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items, items2, 2);
    return items;
  }, items6);
  const items7 = [quest, callback3, callback4];
  memo1 = handleResetDismissibilityClick.useMemo(() => {
    let items1;
    const obj = QuestTaskUtils;
    if (obj.isConsoleQuest(quest)) {
      const items = [{ label: "Start Console Heartbeat", action: callback3 }, ];
      const obj2 = { label: "Start Console Heartbeat", action: callback3 };
      const obj3 = { label: "Stop Console Heartbeat", action: callback4 };
      items[1] = obj3;
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items7);
  const items8 = [memo1, handleComplete, handleResetDismissibilityClick, handleProgress, handleResetStatusClick, handleResetHasBeenSeenClick, quest.id];
  memo2 = handleResetDismissibilityClick.useMemo(() => {
    let id;
    let obj = {
      label: "Set Random Quest Progress",
      action() {
        return handleProgress(0.9 * Math.random() + 0.03);
      }
    };
    const items = [obj, , , , , ];
    const obj2 = { label: "Complete Quest", action: handleComplete };
    items[1] = obj2;
    const obj3 = { label: "Reset Quest", action: handleResetStatusClick };
    items[2] = obj3;
    const obj4 = { label: "Reset Dismissibility", action: handleResetDismissibilityClick };
    items[3] = obj4;
    const obj5 = { label: "Reset Quest Seen", action: handleResetHasBeenSeenClick };
    items[4] = obj5;
    items[HermesBuiltin.arraySpread(items, memo1, 5)] = {
      label: "Copy Quest ID",
      action() {
        const obj = quest(sourceQuestContent[30]);
        return obj.copy(id.id);
      }
    };
    return items;
  }, items8);
  const tmpResult2 = tmp(tmp2[10]);
  shouldShowQuestPreviewOverrides = tmpResult2.useShouldShowQuestPreviewOverrides(quest);
  const items9 = [handleOverridePreviewClick, quest.id, ];
  let id;
  const useMemo = handleResetDismissibilityClick.useMemo;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items9[2] = id;
  memo3 = useMemo(() => {
    let CheckmarkLargeIcon;
    let id;
    const obj = {
      label: "Show in Quest Bar",
      action() {
        return handleOverridePreviewClick(quest(sourceQuestContent[11]).QuestContent.QUEST_BAR_MOBILE);
      },
      IconComponent: CheckmarkLargeIcon
    };
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    CheckmarkLargeIcon = undefined;
    if (id === quest.id) {
      CheckmarkLargeIcon = CheckmarkLargeIcon2.CheckmarkLargeIcon;
    }
    return obj;
  }, items9);
  const items10 = [memo, memo2, quest.preview, shouldShowQuestPreviewOverrides, memo3, additionalItems];
  const items11 = [quest.id, trackQuestContentClickedWithImpression, getQuestImpressionId, sourceQuestContent];
  const items12 = obj7.useMemo(() => {
    let items1;
    if (null != additionalItems) {
      const items = [memo, tmp2];
      items1 = items;
    } else {
      items1 = [memo];
    }
    if (shouldShowQuestPreviewOverrides) {
      const items2 = [memo3];
      items1.push(items2);
    }
    let tmp8 = items1;
    if (quest.preview) {
      const items3 = [];
      items3[HermesBuiltin.arraySpread(items3, items1, 0)] = memo2;
      tmp8 = items3;
    }
    return tmp8;
  }, items10);
  const onOpen = obj7.useCallback(() => {
    const obj = AdAnalyticsInterfaceExperiment;
    if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_context_menu")) {
      const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU, surfaceId: QuestTypes.QuestContent.QUEST_HOME_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
      const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
      captureAdUserAction2;
      captureAdUserAction(obj2);
    } else {
      const obj3 = { questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU, sourceQuestContent };
      trackQuestContentClickedWithImpression(obj3);
    }
  }, items11);
  return handleResetHasBeenSeenClick(tmp(tmp2[35]).ContextMenu, { items: items12, onOpen, triggerOnTap: true, children });
}));
let result = size.fileFinishedImporting("modules/quests/native/QuestContextMenu.tsx");

export default memoResult;