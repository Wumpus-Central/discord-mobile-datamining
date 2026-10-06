// === Module 11288: SummaryActionSheet ===

// Module 11288 (SummaryActionSheet)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import intl5 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4742 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import ChannelUtils from "ChannelUtils" /* 5041 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7274 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7416 */;
import showShareActionSheet from "showShareActionSheet" /* 8048 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5116 */;
import SummaryStore from "SummaryStore" /* 9778 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let size;
let unpackModuleId;
const View = react_native.View;
({ AnalyticsSections: metroImportAll, MessageFlags: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { summaryContainer: { padding: 16, margin: 16, marginBottom: 24, justifyContent: "center", alignItems: "center" }, summaryContent: { textAlign: "center" }, summaryIconContainer: obj2, summaryIcon: size, summaryTopic: { marginBottom: 4 }, divider: obj3, actionsContainer: { flexDirection: "row", justifyContent: "space-evenly", marginBottom: 16 } };
obj2 = { marginBottom: 8, borderRadius: nativeDefault.radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
size = { margin: 8, width: 20, height: 20, tintColor: nativeDefault.colors.WHITE };
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_12 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/summaries/native/SummaryActionSheet.tsx");

export default function SummaryActionSheet(summary) {
  let SafeAreaPaddingView;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items4;
  let items5;
  let items6;
  let items8;
  let obj14;
  let obj6;
  summary = summary.summary;
  const tmp = closure_12();
  const ref = react.useRef(null);
  const channel = ChannelStore.getChannel(summary.channelId);
  const message = MessageStore.getMessage(summary.channelId, summary.startId);
  let hasFlagResult = null != message && message.hasFlag(constants2.HAS_THREAD);
  let canStartPublicThread = null != channel && null != message && !message.hasFlag(constants2.HAS_THREAD);
  if (canStartPublicThread) {
    let tmp8 = summary;
    let obj3 = summary(message[12]);
    canStartPublicThread = obj3.computeCanStartPublicThread(channel, message);
  }
  let guild_id;
  const useCallback = react.useCallback;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const items = [guild_id];
  const items1 = [summary, channel];
  const callback = useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (null != guild_id) {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      let guild_id1;
      ActionSheetActionCreatorsDefault;
      const tmp8 = asyncRequire(11261, dependencyMap.paths);
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      const obj2 = { guildId: guild_id1 };
      openLazy(tmp8, "GuildHighlightsNotifications", obj2);
    }
  }, items);
  const items2 = [summary, channel, message];
  const callback1 = react.useCallback(() => {
    let obj3;
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (null != channel) {
      const intl2 = intl5.intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj2 = { topic: summary.topic, url: obj3.getChannelPermalink(channel.guild_id, channel.id, summary.startId, summary.id) };
      const I3yTDn = intl5.t.I3yTDn;
      obj3 = ChannelUtils;
      const obj5 = { message: formatToPlainString(I3yTDn, obj2), subject: summary.topic };
      const obj4 = showShareActionSheet;
      obj4.showShareActionSheet(obj5, metroImportAll.SUMMARY_ACTION_SHEET);
    } else {
      const presentFailedToast = ToastUtils.presentFailedToast;
      ToastUtils;
      const intl = intl5.intl;
      presentFailedToast(intl.string(intl5.t.gvkcQl));
    }
  }, items1);
  const items3 = [channel, message];
  const callback2 = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (null != channel) {
      if (null != message) {
        const tmpResult = ThreadActionCreatorsDefault;
        const result = tmpResult.openThreadCreationForMobile(channel, summary.startId, metroImportAll.SUMMARY_ACTION_SHEET);
        const obj2 = { name: summary.topic };
        const tmpResult4 = DraftActionCreatorsDefault;
        tmpResult4.changeThreadSettings(channel.id, obj2);
        const navigateToCreateThread = NavigationRouteUtils.navigateToCreateThread;
        const guild_id = channel.guild_id;
        NavigationRouteUtils;
        const tmpResult5 = SnowflakeUtilsDefault;
        if (!navigateToCreateThread(guild_id, tmpResult5.castMessageIdAsChannelId(message.id))) {
          const transitionToGuild = router_utils.transitionToGuild;
          const guild_id2 = channel.guild_id;
          router_utils;
          const tmpResult6 = SnowflakeUtilsDefault;
          transitionToGuild(guild_id2, tmpResult6.castMessageIdAsChannelId(message.id));
        }
      }
    }
    const presentError = ToastUtils.presentError;
    ToastUtils;
    const intl = intl5.intl;
    presentError(intl.string(intl5.t["/+DWeQ"]));
  }, items2);
  const callback3 = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const tmp5 = null != channel && null != message;
    if (tmp5) {
      const transitionToGuild = router_utils.transitionToGuild;
      const guild_id = channel.guild_id;
      router_utils;
      const tmpResult = SnowflakeUtilsDefault;
      transitionToGuild(guild_id, tmpResult.castMessageIdAsChannelId(message.id));
    }
  }, items3);
  let obj2 = { ref, children: closure_11(SafeAreaPaddingView, obj14) };
  BottomSheet = summary(message[23]).BottomSheet;
  let obj4 = { style: tmp.summaryContainer, children: items4 };
  let obj5 = { style: tmp.summaryIconContainer, children: closure_10(summary(message[25]).TopicsIcon, obj6) };
  SafeAreaPaddingView = summary(message[24]).SafeAreaPaddingView;
  obj6 = { style: tmp.summaryIcon, size: "custom" };
  items4 = [closure_10(View, obj5), , ];
  const obj7 = { style: items5, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: summary.topic };
  items5 = [, ];
  ({ summaryContent: arr6[0], summaryTopic: arr6[1] } = tmp);
  items4[1] = closure_10(summary(message[26]).Text, obj7);
  const obj8 = { style: items6, variant: "heading-md/medium", color: "text-default", children: summary.summShort };
  items6 = [tmp.summaryContent];
  items4[2] = closure_10(summary(message[26]).Text, obj8);
  const items7 = [closure_11(View, obj4), , ];
  const obj9 = { style: tmp.divider };
  items7[1] = closure_10(View, obj9);
  const obj10 = { style: tmp.actionsContainer, children: items8 };
  const obj11 = { label: intl.string(summary(message[15]).t["NY/nlb"]), iconSource: channel(message[28]), onPress: callback1 };
  const SummaryActionSheetButton = summary(message[27]).SummaryActionSheetButton;
  intl = summary(message[15]).intl;
  items8 = [closure_10(SummaryActionSheetButton, obj11), , , ];
  if (canStartPublicThread) {
    const obj12 = { label: intl2.string(summary(message[15]).t.rBIGBL), iconSource: channel(message[29]), onPress: callback2 };
    const SummaryActionSheetButton2 = tmp16(tmp17[27]).SummaryActionSheetButton;
    intl2 = tmp16(tmp17[15]).intl;
    canStartPublicThread = closure_10(SummaryActionSheetButton2, obj12);
  }
  items8[1] = canStartPublicThread;
  if (hasFlagResult) {
    const obj13 = { label: intl3.string(summary(message[15]).t["39d0Wj"]), iconSource: channel(message[29]), onPress: callback3 };
    const SummaryActionSheetButton3 = tmp16(tmp17[27]).SummaryActionSheetButton;
    intl3 = tmp16(tmp17[15]).intl;
    hasFlagResult = closure_10(SummaryActionSheetButton3, obj13);
  }
  obj14 = { bottom: true, children: items7 };
  items8[2] = hasFlagResult;
  const obj15 = { label: intl4.string(summary(message[15]).t.QLkZ39), iconSource: channel(message[30]), onPress: callback };
  const SummaryActionSheetButton4 = tmp16(tmp17[27]).SummaryActionSheetButton;
  intl4 = tmp16(tmp17[15]).intl;
  items8[3] = closure_10(SummaryActionSheetButton4, obj15);
  items7[2] = closure_11(View, obj10);
  return closure_10(BottomSheet, obj2);
};
export const openSummaryDividerActionSheet = function openSummaryDividerActionSheet(channelId, summaryId) {
  const findSummaryResult = SummaryStore.findSummary(channelId, summaryId);
  if (null != findSummaryResult) {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const _HermesInternal = HermesInternal;
    ActionSheetActionCreatorsDefault;
    const obj = { summary: findSummaryResult };
    const tmp6 = asyncRequire(11288, dependencyMap.paths);
    openLazy(tmp6, "SummaryDivider" + summaryId, obj);
  }
};