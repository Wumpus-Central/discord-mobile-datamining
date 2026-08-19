// discord_app/modules/summaries/native/SummaryActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import reinjectEphemerals from "../../../stores/MessageStore.tsx";
import handleQuickSwitcherUpdate from "../SummaryStore.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
({ AnalyticsSections: closure_8, MessageFlags: c9 } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const createCacheKey = { marginBottom: 8, borderRadius: ThemesDefault.radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { margin: 8, width: 20, height: 20, tintColor: ThemesDefault.colors.WHITE };
createCacheKey[4] = { marginBottom: 4 };
createCacheKey[5] = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[6] = { flexDirection: "row", justifyContent: "space-evenly", marginBottom: 16 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/summaries/native/SummaryActionSheet.tsx");

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
      guild_id = channel.guild_id;
    }
    if (null != guild_id) {
      let guild_id1;
      const tmpResult = channel(message[7]);
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      obj = { guildId: null };
      obj[0] = guild_id1;
      tmpResult.openLazy(summary(message[9])(message[13], message.paths), "GuildHighlightsNotifications", obj);
      const tmp7 = summary(message[9])(message[13], message.paths);
    }
  }, items);
  const items2 = [summary, channel, message];
  const callback1 = obj.useCallback(() => {
    let obj = channel(message[7]);
    obj.hideActionSheet();
    if (null != channel) {
      const intl2 = summary(message[15]).intl;
      obj = { topic: null, url: null };
      obj[0] = summary.topic;
      const obj4 = summary(message[16]);
      obj[1] = obj4.getChannelPermalink(channel.guild_id, channel.id, summary.startId, summary.id);
      const formatToPlainStringResult = intl2.formatToPlainString(summary(message[15]).t.I3yTDn, obj);
      obj = { message: null, subject: null };
      obj[0] = formatToPlainStringResult;
      obj[1] = summary.topic;
      summary(message[17]).showShareActionSheet(obj, closure_1_8.SUMMARY_ACTION_SHEET);
      const obj5 = summary(message[17]);
    } else {
      const intl = summary(message[15]).intl;
      summary(message[14]).presentFailedToast(intl.string(summary(message[15]).t.gvkcQl));
      const obj2 = summary(message[14]);
    }
  }, items1);
  const items3 = [channel, message];
  const callback2 = obj.useCallback(() => {
    let obj = channel(message[7]);
    obj.hideActionSheet();
    if (null != channel) {
      if (null != message) {
        let tmpResult = channel(message[18]);
        const result = tmpResult.openThreadCreationForMobile(channel, summary.startId, closure_1_8.SUMMARY_ACTION_SHEET);
        tmpResult = channel(message[19]);
        obj = { name: null };
        obj[0] = summary.topic;
        tmpResult.changeThreadSettings(channel.id, obj);
        const obj6 = summary(message[20]);
        if (!obj6.navigateToCreateThread(channel.guild_id, tmpResult1.castMessageIdAsChannelId(message.id))) {
          const tmp11Result = summary(message[22]);
          tmp11Result.transitionToGuild(channel.guild_id, channel(message[21]).castMessageIdAsChannelId(message.id));
          const tmpResult2 = channel(message[21]);
        }
        tmpResult1 = channel(message[21]);
      }
    }
    const intl = summary(message[15]).intl;
    summary(message[14]).presentError(intl.string(summary(message[15]).t["/+DWeQ"]));
    const obj2 = summary(message[14]);
  }, items2);
  callback3 = obj.useCallback(() => {
    channel(message[7]).hideActionSheet();
    let tmp5 = null != channel;
    if (tmp5) {
      tmp5 = null != message;
    }
    if (tmp5) {
      const obj2 = summary(message[22]);
      obj2.transitionToGuild(channel.guild_id, channel(message[21]).castMessageIdAsChannelId(message.id));
      const tmpResult = channel(message[21]);
    }
    const obj = channel(message[7]);
  }, items3);
  { ref: React.useRef(null), children: null };
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
    const _HermesInternal = HermesInternal;
    const obj = { summary: null };
    obj[0] = findSummaryResult;
    obj.openLazy(asyncRequireImpl(10839, dependencyMap.paths), "SummaryDivider" + summaryId, obj);
    const tmp5 = asyncRequireImpl(10839, dependencyMap.paths);
  }
};