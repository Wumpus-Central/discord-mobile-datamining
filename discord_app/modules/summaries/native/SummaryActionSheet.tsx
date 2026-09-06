// === Module 11652: SummaryActionSheet ===

// Module 11652 (SummaryActionSheet)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1100 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4417 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ChannelUtils from "ChannelUtils" /* 4705 */;
import showShareActionSheet from "showShareActionSheet" /* 8361 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MessageStore from "MessageStore" /* 4781 */;
import SummaryStore from "SummaryStore" /* 11345 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsSections: closure_8, MessageFlags: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { summaryContainer: { padding: 16, margin: 16, marginBottom: 24, justifyContent: "center", alignItems: "center" }, summaryContent: { textAlign: "center" }, summaryIconContainer: null, summaryIcon: null, summaryTopic: null, divider: null, actionsContainer: null };
createStyles = { marginBottom: 8, borderRadius: nativeDefault.radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.summaryIconContainer = createStyles;
let size = { margin: 8, width: 20, height: 20, tintColor: nativeDefault.colors.WHITE };
createStyles.summaryIcon = size;
createStyles.summaryTopic = { marginBottom: 4 };
createStyles.divider = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.actionsContainer = { flexDirection: "row", justifyContent: "space-evenly", marginBottom: 16 };
let closure_12 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/summaries/native/SummaryActionSheet.tsx");

export default function SummaryActionSheet(summary) {
  summary = summary.summary;
  const tmp = closure_12();
  let obj = noop;
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
    let obj2 = summary(message[12]);
    canStartPublicThread = obj2.computeCanStartPublicThread(channel, message);
  }
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const items = [guild_id];
  const items1 = [summary, channel];
  const callback = obj.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    let guild_id;
    if (channel != null) {
      guild_id = tmp4.guild_id;
    }
    if (null != guild_id) {
      let guild_id1;
      const tmpResult = ActionSheetActionCreatorsDefault;
      if (tmp4 != null) {
        guild_id1 = tmp4.guild_id;
      }
      obj = { guildId: guild_id1 };
      tmpResult.openLazy(asyncRequireImpl(11625, dependencyMap.paths), "GuildHighlightsNotifications", obj);
      const tmp7 = asyncRequireImpl(11625, dependencyMap.paths);
    }
  }, items);
  const items2 = [summary, channel, message];
  const callback1 = obj.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (null != channel) {
      const intl2 = util.intl;
      obj = { topic: summary.topic, url: null };
      const obj4 = ChannelUtils;
      obj.url = obj4.getChannelPermalink(tmp3.guild_id, tmp3.id, summary.startId, summary.id);
      const formatToPlainStringResult = intl2.formatToPlainString(util.t.I3yTDn, obj);
      obj = { message: formatToPlainStringResult, subject: summary.topic };
      showShareActionSheet.showShareActionSheet(obj, constants.SUMMARY_ACTION_SHEET);
    } else {
      const intl = util.intl;
      ToastUtils.presentFailedToast(intl.string(util.t.gvkcQl));
    }
  }, items1);
  const items3 = [channel, message];
  const callback2 = obj.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (null != channel) {
      if (null != message) {
        let tmpResult = tmp(7765);
        const result = tmpResult.openThreadCreationForMobile(tmp4, summary.startId, constants.SUMMARY_ACTION_SHEET);
        tmpResult = tmp(7777);
        obj = { name: summary.topic };
        tmpResult.changeThreadSettings(tmp4.id, obj);
        const obj6 = NavigationRouteUtils;
        const tmp11 = require;
        if (!obj6.navigateToCreateThread(tmp4.guild_id, tmpResult1.castMessageIdAsChannelId(tmp5.id))) {
          const tmp11Result = tmp11(1100);
          tmp11Result.transitionToGuild(tmp4.guild_id, tmp(11).castMessageIdAsChannelId(tmp5.id));
          const tmpResult2 = tmp(11);
        }
        tmpResult1 = tmp(11);
      }
    }
    const intl = util.intl;
    ToastUtils.presentError(intl.string(util.t["/+DWeQ"]));
  }, items2);
  const callback3 = obj.useCallback(() => {
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
  obj = { ref: noop.useRef(null), children: null };
  obj = { style: tmp.summaryContainer, children: null };
  const obj1 = { style: tmp.summaryIconContainer, children: null };
  obj2 = { style: tmp.summaryIcon, size: "custom" };
  obj1.children = closure_10(summary(message[25]).TopicsIcon, obj2);
  const items4 = [closure_10(View, obj1), , ];
  const obj3 = { style: null, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: summary.topic };
  const items5 = [, ];
  ({ summaryContent: arr6[0], summaryTopic: arr6[1] } = tmp);
  obj3.style = items5;
  items4[1] = closure_10(summary(message[26]).Text, obj3);
  let obj4 = { style: null, variant: "heading-md/medium", color: "text-default", children: summary.summShort };
  const items6 = [tmp.summaryContent];
  obj4.style = items6;
  items4[2] = closure_10(summary(message[26]).Text, obj4);
  obj.children = items4;
  const items7 = [closure_11(View, obj), closure_10(View, { style: tmp.divider }), ];
  let obj6 = { style: tmp.actionsContainer, children: null };
  const obj7 = { label: null, iconSource: null, onPress: null };
  let intl = summary(message[15]).intl;
  obj7.label = intl.string(summary(message[15]).t["NY/nlb"]);
  obj7.iconSource = channel(message[28]);
  obj7.onPress = callback1;
  const items8 = [closure_10(summary(message[27]).SummaryActionSheetButton, obj7), , , ];
  if (canStartPublicThread) {
    const obj8 = { label: null, iconSource: null, onPress: null };
    let intl2 = tmp16(tmp17[15]).intl;
    obj8.label = intl2.string(tmp16(tmp17[15]).t.rBIGBL);
    obj8.iconSource = tmp20(tmp17[29]);
    obj8.onPress = callback2;
    canStartPublicThread = tmp15(tmp16(tmp17[27]).SummaryActionSheetButton, obj8);
  }
  items8[1] = canStartPublicThread;
  if (hasFlagResult) {
    const obj9 = { label: null, iconSource: null, onPress: null };
    const intl3 = tmp16(tmp17[15]).intl;
    obj9.label = intl3.string(tmp16(tmp17[15]).t["39d0Wj"]);
    obj9.iconSource = tmp20(tmp17[29]);
    obj9.onPress = callback3;
    hasFlagResult = tmp15(tmp16(tmp17[27]).SummaryActionSheetButton, obj9);
  }
  const obj10 = { bottom: true, children: null };
  items8[2] = hasFlagResult;
  const obj11 = { label: null, iconSource: null, onPress: null };
  const intl4 = tmp16(tmp17[15]).intl;
  obj11.label = intl4.string(summary(message[15]).t.QLkZ39);
  obj11.iconSource = channel(message[30]);
  obj11.onPress = callback;
  items8[3] = closure_10(summary(message[27]).SummaryActionSheetButton, obj11);
  obj6.children = items8;
  items7[2] = closure_11(View, obj6);
  obj10.children = items7;
  obj.children = closure_11(summary(message[24]).SafeAreaPaddingView, obj10);
  return closure_10(summary(message[23]).BottomSheet, obj);
};
export const openSummaryDividerActionSheet = function openSummaryDividerActionSheet(channelId, summaryId) {
  const findSummaryResult = SummaryStore.findSummary(channelId, summaryId);
  if (null != findSummaryResult) {
    const _HermesInternal = HermesInternal;
    const obj = { summary: findSummaryResult };
    obj.openLazy(asyncRequireImpl(11652, dependencyMap.paths), "SummaryDivider" + summaryId, obj);
    const tmp5 = asyncRequireImpl(11652, dependencyMap.paths);
  }
};