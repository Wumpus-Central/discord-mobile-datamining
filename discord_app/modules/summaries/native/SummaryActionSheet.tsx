// === Module 11990: SummaryActionSheet ===

// Module 11990 (SummaryActionSheet)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1101 */;
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ToastUtils from "ToastUtils" /* 4522 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4686 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import ChannelUtils from "ChannelUtils" /* 4974 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8094 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 8106 */;
import showShareActionSheet from "showShareActionSheet" /* 8711 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import MessageStore from "MessageStore" /* 5049 */;
import SummaryStore from "SummaryStore" /* 11694 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsSections: closure_8, MessageFlags: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { summaryContainer: { padding: 16, margin: 16, marginBottom: 24, justifyContent: "center", alignItems: "center" }, summaryContent: { textAlign: "center" }, summaryIconContainer: { marginBottom: 8, borderRadius: nativeDefault.radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, summaryIcon: null, summaryTopic: null, divider: null, actionsContainer: null };
let size = { margin: 8, width: 20, height: 20, tintColor: nativeDefault.colors.WHITE };
obj2.summaryIcon = size;
obj2.summaryTopic = { marginBottom: 4 };
let obj3 = { marginBottom: 8, borderRadius: nativeDefault.radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.divider = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.actionsContainer = { flexDirection: "row", justifyContent: "space-evenly", marginBottom: 16 };
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/summaries/native/SummaryActionSheet.tsx");

export default function SummaryActionSheet(summary) {
  summary = summary.summary;
  const tmp = closure_12();
  const channel = ChannelStore.getChannel(summary.channelId);
  const message = MessageStore.getMessage(summary.channelId, summary.startId);
  let hasFlagResult = null != message;
  if (hasFlagResult) {
    hasFlagResult = message.hasFlag(constants2.HAS_THREAD);
  }
  let canStartPublicThread = null != channel && null != message;
  if (canStartPublicThread) {
    canStartPublicThread = !message.hasFlag(constants2.HAS_THREAD);
  }
  if (canStartPublicThread) {
    canStartPublicThread = summary(message[12]).computeCanStartPublicThread(channel, message);
    let obj3 = summary(message[12]);
  }
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const items = [guild_id];
  const items1 = [summary, channel];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (null != guild_id) {
      let guild_id1;
      const tmpResult = ActionSheetActionCreatorsDefault;
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      const obj2 = { guildId: guild_id1 };
      tmpResult.openLazy(asyncRequireImpl(11963, dependencyMap.paths), "GuildHighlightsNotifications", obj2);
      const tmp7 = asyncRequireImpl(11963, dependencyMap.paths);
    }
  }, items);
  const items2 = [summary, channel, message];
  const callback1 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (null != channel) {
      const intl2 = util.intl;
      const obj3 = { topic: summary.topic, url: null };
      const obj4 = ChannelUtils;
      obj3.url = obj4.getChannelPermalink(channel.guild_id, channel.id, summary.startId, summary.id);
      const formatToPlainStringResult = intl2.formatToPlainString(util.t.I3yTDn, obj3);
      const obj6 = { message: formatToPlainStringResult, subject: summary.topic };
      showShareActionSheet.showShareActionSheet(obj6, constants.SUMMARY_ACTION_SHEET);
    } else {
      const intl = util.intl;
      ToastUtils.presentFailedToast(intl.string(util.t.gvkcQl));
    }
  }, items1);
  const items3 = [channel, message];
  const callback2 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (null != channel) {
      if (null != message) {
        const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, summary.startId, constants.SUMMARY_ACTION_SHEET);
        const tmpResult = ThreadActionCreatorsDefault;
        const obj3 = { name: summary.topic };
        DraftActionCreatorsDefault.changeThreadSettings(channel.id, obj3);
        const tmpResult4 = DraftActionCreatorsDefault;
        const obj6 = NavigationRouteUtils;
        if (!obj6.navigateToCreateThread(channel.guild_id, tmpResult5.castMessageIdAsChannelId(message.id))) {
          const tmp11Result = router_utils;
          tmp11Result.transitionToGuild(channel.guild_id, SnowflakeUtilsDefault.castMessageIdAsChannelId(message.id));
          const tmpResult6 = SnowflakeUtilsDefault;
        }
        tmpResult5 = SnowflakeUtilsDefault;
      }
    }
    const intl = util.intl;
    ToastUtils.presentError(intl.string(util.t["/+DWeQ"]));
  }, items2);
  const callback3 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    let tmp5 = null != channel;
    if (tmp5) {
      tmp5 = null != message;
    }
    if (tmp5) {
      const obj2 = router_utils;
      obj2.transitionToGuild(channel.guild_id, SnowflakeUtilsDefault.castMessageIdAsChannelId(message.id));
      const tmpResult = SnowflakeUtilsDefault;
    }
  }, items3);
  let obj2 = { ref: noop.useRef(null), children: null };
  let obj4 = { style: tmp.summaryContainer, children: null };
  let obj5 = { style: tmp.summaryIconContainer, children: closure_10(summary(message[25]).TopicsIcon, { style: tmp.summaryIcon, size: "custom" }) };
  const items4 = [closure_10(View, obj5), , ];
  const obj7 = { style: null, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: summary.topic };
  const items5 = [, ];
  ({ summaryContent: arr6[0], summaryTopic: arr6[1] } = tmp);
  obj7.style = items5;
  items4[1] = closure_10(summary(message[26]).Text, obj7);
  const obj8 = { style: null, variant: "heading-md/medium", color: "text-default", children: summary.summShort };
  const items6 = [tmp.summaryContent];
  obj8.style = items6;
  items4[2] = closure_10(summary(message[26]).Text, obj8);
  obj4.children = items4;
  const items7 = [closure_11(View, obj4), closure_10(View, { style: tmp.divider }), ];
  const obj10 = { style: tmp.actionsContainer, children: null };
  const obj11 = { label: null, iconSource: null, onPress: null };
  let intl = summary(message[15]).intl;
  obj11.label = intl.string(summary(message[15]).t["NY/nlb"]);
  obj11.iconSource = channel(message[28]);
  obj11.onPress = callback1;
  const items8 = [closure_10(summary(message[27]).SummaryActionSheetButton, obj11), , , ];
  if (canStartPublicThread) {
    const obj12 = { label: null, iconSource: null, onPress: null };
    let intl2 = tmp16(tmp17[15]).intl;
    obj12.label = intl2.string(tmp16(tmp17[15]).t.rBIGBL);
    obj12.iconSource = tmp20(tmp17[29]);
    obj12.onPress = callback2;
    canStartPublicThread = closure_10(tmp16(tmp17[27]).SummaryActionSheetButton, obj12);
  }
  items8[1] = canStartPublicThread;
  if (hasFlagResult) {
    const obj13 = { label: null, iconSource: null, onPress: null };
    const intl3 = tmp16(tmp17[15]).intl;
    obj13.label = intl3.string(tmp16(tmp17[15]).t["39d0Wj"]);
    obj13.iconSource = tmp20(tmp17[29]);
    obj13.onPress = callback3;
    hasFlagResult = closure_10(tmp16(tmp17[27]).SummaryActionSheetButton, obj13);
  }
  const obj14 = { bottom: true, children: null };
  items8[2] = hasFlagResult;
  const obj15 = { label: null, iconSource: null, onPress: null };
  const intl4 = tmp16(tmp17[15]).intl;
  obj15.label = intl4.string(summary(message[15]).t.QLkZ39);
  obj15.iconSource = channel(message[30]);
  obj15.onPress = callback;
  items8[3] = closure_10(summary(message[27]).SummaryActionSheetButton, obj15);
  obj10.children = items8;
  items7[2] = closure_11(View, obj10);
  obj14.children = items7;
  obj2.children = closure_11(summary(message[24]).SafeAreaPaddingView, obj14);
  return closure_10(summary(message[23]).BottomSheet, obj2);
};
export const openSummaryDividerActionSheet = function openSummaryDividerActionSheet(channelId, summaryId) {
  const findSummaryResult = SummaryStore.findSummary(channelId, summaryId);
  if (null != findSummaryResult) {
    const _HermesInternal = HermesInternal;
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { summary: findSummaryResult };
    obj.openLazy(asyncRequireImpl(11990, dependencyMap.paths), "SummaryDivider" + summaryId, obj2);
    const tmp5 = asyncRequireImpl(11990, dependencyMap.paths);
  }
};