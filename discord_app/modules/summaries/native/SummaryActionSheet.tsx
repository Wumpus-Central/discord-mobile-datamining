// === Module 11460: SummaryActionSheet ===

// Module 11460 (SummaryActionSheet)
import ThemesDefault from "Themes" /* 709 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "ensureGuildLoaded" /* 1386 */;
import closure_6 from "reinjectEphemerals" /* 4735 */;
import closure_7 from "handleQuickSwitcherUpdate" /* 11202 */;
import ME from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
({ AnalyticsSections: closure_8, MessageFlags: c9 } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { summaryContainer: { padding: 16, margin: 16, marginBottom: 24, justifyContent: "center", alignItems: "center" }, summaryContent: { textAlign: "center" }, summaryIconContainer: null, summaryIcon: null, summaryTopic: null, divider: null, actionsContainer: null };
createCacheKey = { marginBottom: 8, borderRadius: ThemesDefault.radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { margin: 8, width: 20, height: 20, tintColor: ThemesDefault.colors.WHITE };
createCacheKey[4] = { marginBottom: 4 };
const obj1 = { margin: 8, width: 20, height: 20, tintColor: ThemesDefault.colors.WHITE };
createCacheKey[5] = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[6] = { flexDirection: "row", justifyContent: "space-evenly", marginBottom: 16 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj2 = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let result = require("set").fileFinishedImporting("modules/summaries/native/SummaryActionSheet.tsx");

export default function SummaryActionSheet(summary) {
  summary = summary.summary;
  let channel;
  let message;
  const tmp = callback3();
  let obj = React;
  channel = channel.getChannel(summary.channelId);
  message = message.getMessage(summary.channelId, summary.startId);
  let hasFlagResult = null != message;
  if (hasFlagResult) {
    hasFlagResult = message.hasFlag(constants.HAS_THREAD);
  }
  let canStartPublicThread = null != channel && null != message;
  if (canStartPublicThread) {
    canStartPublicThread = !message.hasFlag(constants.HAS_THREAD);
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
    let obj = channel(message[7]);
    obj.hideActionSheet();
    let guild_id;
    if (channel != null) {
      guild_id = tmp4.guild_id;
    }
    if (null != guild_id) {
      let guild_id1;
      const tmpResult = channel(tmp2[7]);
      if (tmp4 != null) {
        guild_id1 = tmp4.guild_id;
      }
      obj = { guildId: null };
      obj[0] = guild_id1;
      tmpResult.openLazy(summary(tmp2[9])(tmp2[13], tmp2.paths), "GuildHighlightsNotifications", obj);
      const tmp7 = summary(tmp2[9])(tmp2[13], tmp2.paths);
    }
  }, items);
  const items2 = [summary, channel, message];
  const callback1 = obj.useCallback(() => {
    let obj = channel(message[7]);
    obj.hideActionSheet();
    if (null != channel) {
      const intl2 = summary(tmp[15]).intl;
      obj = { topic: null, url: null };
      obj[0] = summary.topic;
      const obj4 = summary(tmp[16]);
      obj[1] = obj4.getChannelPermalink(tmp3.guild_id, tmp3.id, summary.startId, summary.id);
      const formatToPlainStringResult = intl2.formatToPlainString(summary(tmp[15]).t.I3yTDn, obj);
      obj = { message: null, subject: null };
      obj[0] = formatToPlainStringResult;
      obj[1] = summary.topic;
      summary(tmp[17]).showShareActionSheet(obj, closure_1_8.SUMMARY_ACTION_SHEET);
      const obj5 = summary(tmp[17]);
    } else {
      const intl = summary(tmp[15]).intl;
      summary(tmp[14]).presentFailedToast(intl.string(summary(tmp[15]).t.gvkcQl));
      const obj2 = summary(tmp[14]);
    }
  }, items1);
  const items3 = [channel, message];
  const callback2 = obj.useCallback(() => {
    let obj = channel(message[7]);
    obj.hideActionSheet();
    if (null != channel) {
      if (null != message) {
        let tmpResult = tmp(tmp2[18]);
        const result = tmpResult.openThreadCreationForMobile(tmp4, summary.startId, closure_1_8.SUMMARY_ACTION_SHEET);
        tmpResult = tmp(tmp2[19]);
        obj = { name: null };
        obj[0] = summary.topic;
        tmpResult.changeThreadSettings(tmp4.id, obj);
        const obj6 = summary(tmp2[20]);
        const tmp11 = summary;
        if (!obj6.navigateToCreateThread(tmp4.guild_id, tmpResult1.castMessageIdAsChannelId(tmp5.id))) {
          const tmp11Result = tmp11(tmp2[22]);
          tmp11Result.transitionToGuild(tmp4.guild_id, tmp(tmp2[21]).castMessageIdAsChannelId(tmp5.id));
          const tmpResult2 = tmp(tmp2[21]);
        }
        tmpResult1 = tmp(tmp2[21]);
      }
    }
    const intl = summary(tmp2[15]).intl;
    summary(message[14]).presentError(intl.string(summary(message[15]).t["/+DWeQ"]));
  }, items2);
  callback3 = obj.useCallback(() => {
    channel(message[7]).hideActionSheet();
    let tmp5 = null != channel;
    if (tmp5) {
      tmp5 = null != message;
    }
    if (tmp5) {
      const obj2 = summary(tmp2[22]);
      obj2.transitionToGuild(channel.guild_id, channel(tmp2[21]).castMessageIdAsChannelId(message.id));
      const tmpResult = channel(tmp2[21]);
    }
  }, items3);
  obj = { ref: React.useRef(null), children: null };
  obj = { style: tmp.summaryContainer, children: null };
  const ref = React.useRef(null);
  obj2 = { style: tmp.summaryIcon, size: "custom" };
  const items4 = [callback(View, { style: tmp.summaryIconContainer, children: callback(summary(message[25]).TopicsIcon, obj2) }), , ];
  const items5 = [, ];
  ({ summaryContent: arr6[0], summaryTopic: arr6[1] } = tmp);
  items4[1] = callback(summary(message[26]).Text, { style: items5, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: summary.topic });
  const items6 = [tmp.summaryContent];
  items4[2] = callback(summary(message[26]).Text, { style: items6, variant: "heading-md/medium", color: "text-default", children: summary.summShort });
  obj[1] = items4;
  const items7 = [callback2(View, obj), callback(View, { style: tmp.divider }), ];
  let obj6 = { style: tmp.actionsContainer, children: null };
  const obj7 = { label: null, iconSource: null, onPress: null };
  let intl = summary(message[15]).intl;
  obj7[0] = intl.string(summary(message[15]).t["NY/nlb"]);
  obj7[1] = channel(message[28]);
  obj7[2] = callback1;
  const items8 = [callback(summary(message[27]).SummaryActionSheetButton, obj7), , , ];
  if (canStartPublicThread) {
    const obj8 = { label: null, iconSource: null, onPress: null };
    let intl2 = tmp16(tmp17[15]).intl;
    obj8[0] = intl2.string(tmp16(tmp17[15]).t.rBIGBL);
    obj8[1] = tmp20(tmp17[29]);
    obj8[2] = callback2;
    canStartPublicThread = tmp15(tmp16(tmp17[27]).SummaryActionSheetButton, obj8);
  }
  items8[1] = canStartPublicThread;
  if (hasFlagResult) {
    const obj9 = { label: null, iconSource: null, onPress: null };
    const intl3 = tmp16(tmp17[15]).intl;
    obj9[0] = intl3.string(tmp16(tmp17[15]).t["39d0Wj"]);
    obj9[1] = tmp20(tmp17[29]);
    obj9[2] = callback3;
    hasFlagResult = tmp15(tmp16(tmp17[27]).SummaryActionSheetButton, obj9);
  }
  const obj10 = { bottom: true, children: null };
  items8[2] = hasFlagResult;
  const obj11 = { label: null, iconSource: null, onPress: null };
  const intl4 = tmp16(tmp17[15]).intl;
  obj11[0] = intl4.string(summary(message[15]).t.QLkZ39);
  obj11[1] = channel(message[30]);
  obj11[2] = callback;
  items8[3] = callback(summary(message[27]).SummaryActionSheetButton, obj11);
  obj6[1] = items8;
  items7[2] = callback2(View, obj6);
  obj10[1] = items7;
  obj[1] = callback2(summary(message[24]).SafeAreaPaddingView, obj10);
  return callback(summary(message[23]).BottomSheet, obj);
};
export const openSummaryDividerActionSheet = function openSummaryDividerActionSheet(channelId, summaryId) {
  const findSummaryResult = closure_7.findSummary(channelId, summaryId);
  if (null != findSummaryResult) {
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    const _HermesInternal = HermesInternal;
    obj = { summary: null };
    obj[0] = findSummaryResult;
    obj.openLazy(asyncRequireImpl(11460, dependencyMap.paths), "SummaryDivider" + summaryId, obj);
    const tmp5 = asyncRequireImpl(11460, dependencyMap.paths);
  }
};