// discord_app/modules/quests/native/QuestContextMenu.tsx
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import CopyIcon from "../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import CheckmarkLargeIcon2 from "../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import parseURLDefault from "../../../utils/native/parseURL.tsx";
import QuestTypes from "../QuestTypes.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestTaskUtils from "../utils/QuestTaskUtils.tsx";
import AnalyticsTypes from "../lib/analytics/AnalyticsTypes.tsx";
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import LinkExternalSmallIcon from "../../../design/components/Icon/native/redesign/generated/LinkExternalSmallIcon.tsx";
import _modDef8673 from "../../../../_runtime/metro/08673__.js";
import AdAnalyticsInterfaceExperiment from "../experiments/AdAnalyticsInterfaceExperiment.tsx";
import captureAdUserAction from "../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../ads/analytics/captureAdUserActionTypes.tsx";
import QuestActionCreators from "../QuestActionCreators.tsx";
import QuestCopyUtils from "../utils/QuestCopyUtils.tsx";
import QuestPlatformUtils from "../utils/QuestPlatformUtils.tsx";
import QuestUtils from "QuestUtils.native.tsx";
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx";
import _modDef15152 from "../../../../_runtime/metro/15152__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import QuestStore from "../QuestStore.tsx";

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
  stateFromStores = quest(sourceQuestContent[9]).useStateFromStores(
    items,
    () => handleResetStatusClick.getQuestPreviewOverride(quest(sourceQuestContent[10]).QuestContent.QUEST_BAR_MOBILE),
    [],
  );
  const obj2 = quest(sourceQuestContent[9]);
  const trackQuestContentClickedWithImpression = quest(
    sourceQuestContent[11],
  ).useTrackQuestContentClickedWithImpression();
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
      let tmpResult = QuestCopyUtils;
      isIOSResult = parseURLDefault(tmpResult.getCtaLink(quest.config)).payload.type === LinkingTypes.INVITE;
    }
    if (isIOSResult) {
      tmpResult = QuestUtils;
      const result = tmpResult.dismissOverlayScreens();
    }
    obj = {
      content: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
      ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK,
      impressionId: questImpressionId,
      sourceQuestContent,
    };
    QuestPlatformUtils.openGameLinkDirectly(quest, obj);
    const tmpResult1 = QuestPlatformUtils;
  }, items1);
  let items2 = [flag, quest.id, questImpressionId, sourceQuestContent];
  callback1 = handleResetDismissibilityClick.useCallback(() => {
    if (flag) {
      const obj = {
        content: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
        ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK,
        impressionId: questImpressionId,
        sourceQuestContent,
      };
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
    obj.trackingCtx = {
      content: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
      ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE,
      sourceQuestContent,
    };
    obj.showModal(obj);
  }, items3);
  const items4 = [quest.id];
  callback3 = handleResetDismissibilityClick.useCallback(
    () => QuestActionCreators.manuallyStartConsoleQuest(quest.id, true),
    items4,
  );
  const items5 = [quest.id];
  callback4 = handleResetDismissibilityClick.useCallback(
    () => QuestActionCreators.manualStopConsoleQuest(quest.id),
    items5,
  );
  const items6 = [externalCtaLabel, action, callback2, flag, callback1];
  memo = handleResetDismissibilityClick.useMemo(() => {
    let obj = {
      label: externalCtaLabel,
      IconComponent: LinkExternalSmallIcon.LinkExternalSmallIcon,
      action,
      accessibilityRole: "link",
    };
    const items = [obj];
    obj = { label: null, action: null, iconSource: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.GcsZKJ);
    obj.action = callback2;
    obj.iconSource = _modDef15152;
    items[1] = obj;
    if (flag) {
      obj = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj.label = intl2.string(util.t.WqhZss);
      obj.IconComponent = CopyIcon.CopyIcon;
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
      const items = [obj];
      obj = { label: "Stop Console Heartbeat", action: callback4 };
      items[1] = obj;
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items7);
  const items8 = [
    memo1,
    handleComplete,
    handleResetDismissibilityClick,
    handleProgress,
    handleResetStatusClick,
    handleResetHasBeenSeenClick,
    quest.id,
  ];
  memo2 = handleResetDismissibilityClick.useMemo(() => {
    let obj = {
      label: "Set Random Quest Progress",
      action() {
        return handleProgress(0.9 * Math.random() + 0.03);
      },
    };
    const items = [obj, , , , ,];
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
      },
    };
    return items;
  }, items8);
  tmpResult = tmp(tmp2[8]);
  shouldShowQuestPreviewOverrides = tmpResult.useShouldShowQuestPreviewOverrides(quest);
  const items9 = [handleOverridePreviewClick, quest.id];
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
      IconComponent: null,
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
    if (
      obj.shouldMigrateToAdAnalyticsInterface(
        AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
        "quest_context_menu",
      )
    ) {
      obj = {
        type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
        adCreativeType: AdCreativeType.AdCreativeType.QUEST,
        adCreativeId: quest.id,
        questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU,
        surfaceId: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
        sourceQuestContent,
        impressionId: questImpressionId,
      };
      captureAdUserAction.captureAdUserAction(obj);
      const tmpResult = captureAdUserAction;
    } else {
      obj = {
        questId: quest.id,
        questContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
        questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CONTEXT_MENU,
        sourceQuestContent,
      };
      trackQuestContentClickedWithImpression(obj);
    }
  }, items11);
  return handleResetHasBeenSeenClick(quest(sourceQuestContent[33]).ContextMenu, {
    items,
    onOpen,
    triggerOnTap: true,
    children,
  });
});
