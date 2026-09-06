// discord_app/modules/messages/native/ChatBanner.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import ReadStateActionCreators from "../../../actions/ReadStateActionCreators.tsx";
import OptInChannelsActionCreators from "../../opt_in_channels/OptInChannelsActionCreators.tsx";
import ThreadActionCreatorsDefault from "../../threads/ThreadActionCreators.tsx";
import useAllowedChatOverlaysDefault from "../useAllowedChatOverlays.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GatewayConnectionStore from "../../gateway/GatewayConnectionStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";

require = fn;
class OptInChannelBanner {
  constructor(arg0) {
    channel = global.channel;
    tmp = closure_14();
    items = [];
    items[0] = channel;
    effect = closure_3.useEffect(() => {
      const obj = {};
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
      obj.banner_type = "channel_opt_in";
      obj.track(constants3.CHANNEL_BANNER_VIEWED, obj);
    }, items);
    items1 = [];
    items1[0] = channel;
    tmp5 = View;
    items2 = [,];
    items2[0] = tmp.optInChannelBannerContainer;
    topBorder = null;
    callback = closure_3.useCallback(() => {
      let obj = {};
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
      obj.banner_type = "channel_opt_in";
      obj.cta_type = "add channel";
      obj.track(constants3.CHANNEL_BANNER_CTA_CLICKED, obj);
      obj = { section: constants4.CHANNEL };
      OptInChannelsActionCreators.setOptInChannel(channel.guild_id, channel.id, true, obj);
    }, items1);
    tmp4 = jsxs;
    if (global.topBorder) {
      topBorder = tmp.topBorder;
    }
    obj = { style: items2, children: null };
    items2[1] = topBorder;
    obj = { lineClamp: 2, style: tmp.optInChannelBannerText, variant: "text-sm/semibold", children: null };
    intl = channel(closure_2[17]).intl;
    obj.children = intl.string(channel(closure_2[17]).t.iOWmmB);
    items3 = [,];
    items3[0] = jsx(channel(closure_2[16]).Text, obj);
    obj1 = { style: tmp.optInChannelBannerButtonContainer, children: null };
    obj2 = {};
    merged = Object.assign(global.ctaProps);
    obj2.onPress = callback;
    obj2.size = "sm";
    intl2 = channel(closure_2[17]).intl;
    obj2.text = intl2.string(channel(closure_2[17]).t["TD/+zP"]);
    obj1.children = jsx(channel(closure_2[18]).Button, obj2);
    items3[1] = jsx(tmp5, obj1);
    obj.children = items3;
    return tmp4(tmp5, obj);
  }
}
function ArchivedLockedThreadChatBanner(channel) {
  channel = channel.channel;
  const tmp = closure_14();
  const items = [channel];
  const effect = noop.useEffect(() => {
    const obj = {};
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
    const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
    obj.banner_type = "thread";
    obj.track(constants3.CHANNEL_BANNER_VIEWED, obj);
  }, items);
  let obj = channel(7269);
  let canUnarchiveThread = obj.useCanUnarchiveThread(channel);
  obj = { style: tmp.threadBannerContainer, children: null };
  obj = {
    lineClamp: 4,
    style: tmp.threadBannerTitle,
    variant: "text-sm/medium",
    color: "text-default",
    children: null,
  };
  const intl = channel(1114).intl;
  const string = intl.string;
  const t = channel(1114).t;
  if (isForumPostResult) {
    let stringResult = string(t["833FDn"]);
  } else {
    stringResult = string(t.rEeodK);
  }
  obj.children = stringResult;
  const items1 = [closure_12(channel(4556).Text, obj)];
  if (canUnarchiveThread) {
    const obj1 = { style: tmp.threadBannerButton, children: null };
    const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl2 = tmp3(1114).intl;
    obj2.text = intl2.string(tmp3(1114).t["0dvvEi"]);
    obj2.onPress = function onPress() {
      const obj = {};
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
      obj.banner_type = "thread";
      obj.cta_type = "unarchive";
      obj.track(constants3.CHANNEL_BANNER_CTA_CLICKED, obj);
      ThreadActionCreatorsDefault.unarchiveThread(channel, false);
    };
    obj1.children = tmp8(tmp3(4975).Button, obj2);
    canUnarchiveThread = tmp8(tmp7, obj1);
  }
  items1[1] = canUnarchiveThread;
  obj.children = items1;
  return closure_13(closure_4, obj);
}
function LockedThreadChatBanner(channel) {
  channel = channel.channel;
  const tmp = closure_14();
  const items = [channel];
  const effect = noop.useEffect(() => {
    const obj = {};
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
    const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
    obj.banner_type = "thread";
    obj.track(constants3.CHANNEL_BANNER_VIEWED, obj);
  }, items);
  let obj = channel(7269);
  let isThreadModerator = obj.useIsThreadModerator(channel);
  obj = { style: tmp.threadBannerContainer, children: null };
  obj = {
    lineClamp: 4,
    style: tmp.threadBannerTitle,
    variant: "text-sm/medium",
    color: "text-default",
    children: null,
  };
  const intl = channel(1114).intl;
  const string = intl.string;
  const t = channel(1114).t;
  if (isForumPostResult) {
    let stringResult = string(t.E7oO8u);
  } else {
    stringResult = string(t["V/JF2N"]);
  }
  obj.children = stringResult;
  const items1 = [closure_12(channel(4556).Text, obj)];
  if (isThreadModerator) {
    const obj1 = { style: tmp.threadBannerButton, children: null };
    const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl2 = tmp3(1114).intl;
    obj2.text = intl2.string(tmp3(1114).t.zA9d1J);
    obj2.onPress = function onPress() {
      const obj = {};
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
      obj.banner_type = "thread";
      obj.cta_type = "unlock";
      obj.track(constants3.CHANNEL_BANNER_CTA_CLICKED, obj);
      ThreadActionCreatorsDefault.unlockThread(channel);
    };
    obj1.children = tmp8(tmp3(4975).Button, obj2);
    isThreadModerator = tmp8(tmp7, obj1);
  }
  items1[1] = isThreadModerator;
  obj.children = items1;
  return closure_13(closure_4, obj);
}
function NewMessagesChatBar(channel) {
  channel = channel.channel;
  ({ unreadCount, handleScrollToNewMessages } = channel);
  let stringResult = closure_14();
  let XSmallBoldIcon = channel;
  let WHITE = dependencyMap;
  let obj = channel(504);
  const items = [GatewayConnectionStore];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => connected.isConnected(), [])) {
    if (unreadCount <= 0) {
      tmp2 = null;
    } else {
      XSmallBoldIcon(1114).t;
      const isEstimatedResult = ReadStateStore.isEstimated(channel.id);
      const t = { style: stringResult.newMessageBar, children: null };
      obj = {
        accessibilityRole: "button",
        style: stringResult.newMessageBarTextContainer,
        onPress: handleScrollToNewMessages,
        children: null,
      };
      obj = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
      const intl = XSmallBoldIcon(1114).intl;
      const obj1 = { count: unreadCount, timestamp: channel.oldestUnreadTimestamp };
      obj.children = intl.format(ReadStateStore.isEstimated(channel.id) ? t.wvtbbG : t["BctFH/"], obj1);
      obj.children = closure_12(XSmallBoldIcon(4556).Text, obj);
      const items1 = [closure_12(XSmallBoldIcon(5123).PressableOpacity, obj)];
      handleScrollToNewMessages = XSmallBoldIcon(5123).PressableOpacity;
      const obj2 = {
        style: stringResult.newMessageBarCloseButton,
        accessibilityRole: "button",
        accessibilityLabel: null,
        onPress: null,
        children: null,
      };
      const intl2 = XSmallBoldIcon(1114).intl;
      stringResult = intl2.string(XSmallBoldIcon(1114).t.e6RscS);
      obj2.accessibilityLabel = stringResult;
      obj2.onPress = function onPress() {
        const obj = {
          section: constants4.NEW_MESSAGES_BANNER,
          object: constants2.MARK_CHANNEL_AS_READ_BUTTON,
          objectType: constants.ACK_MANUAL,
        };
        return obj.ack(channel.id, obj);
      };
      XSmallBoldIcon = XSmallBoldIcon(7973).XSmallBoldIcon;
      const obj3 = { size: "sm", color: null };
      WHITE = nativeDefault.colors.WHITE;
      obj3.color = WHITE;
      obj2.children = closure_12(XSmallBoldIcon, obj3);
      items1[1] = closure_12(handleScrollToNewMessages, obj2);
      t.children = items1;
      closure_13(closure_4, t);
      const tmp6 = ReadStateStore.isEstimated(channel.id) ? t.wvtbbG : t["BctFH/"];
    }
  }
  return tmp2;
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const ChatOverlays = fn(11421).ChatOverlays;
const Constants = fn(1074);
({
  AnalyticsObjectTypes: closure_8,
  AnalyticsObjects: closure_9,
  AnalyticEvents: c10,
  AnalyticsSections: closure_11,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = {
  threadBannerContainer: null,
  threadBannerTitle: null,
  threadBannerButton: null,
  newMessageBar: null,
  newMessageBarTextContainer: null,
  newMessageBarCloseButton: null,
  optInChannelBannerContainer: null,
  topBorder: null,
  optInChannelBannerText: null,
  optInChannelBannerButtonContainer: null,
};
createStyles = {
  alignSelf: "stretch",
  minHeight: 60,
  flexDirection: "row",
  paddingHorizontal: 16,
  paddingVertical: 12,
  alignItems: "center",
  flexGrow: 0,
  zIndex: 100,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createStyles.threadBannerContainer = createStyles;
createStyles.threadBannerTitle = { flex: 1, lineHeight: 18 };
createStyles.threadBannerButton = { flexGrow: 0, paddingVertical: 7, paddingHorizontal: 16, marginLeft: 16 };
createStyles.newMessageBar = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  zIndex: 100,
  minHeight: 45,
};
createStyles.newMessageBarTextContainer = { flex: 1, paddingLeft: 16, paddingVertical: 10 };
createStyles.newMessageBarCloseButton = { paddingHorizontal: 12 };
let obj1 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  zIndex: 100,
  minHeight: 45,
};
createStyles.optInChannelBannerContainer = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
  padding: 8,
  paddingLeft: 16,
  paddingRight: 16,
  zIndex: 100,
  backgroundColor: nativeDefault.colors.CHAT_BANNER_BG,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: nativeDefault.colors.CHAT_BORDER,
};
let obj2 = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
  padding: 8,
  paddingLeft: 16,
  paddingRight: 16,
  zIndex: 100,
  backgroundColor: nativeDefault.colors.CHAT_BANNER_BG,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: nativeDefault.colors.CHAT_BORDER,
};
createStyles.topBorder = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.CHAT_BORDER };
createStyles.optInChannelBannerText = { flex: 1 };
createStyles.optInChannelBannerButtonContainer = { flexShrink: 0, marginLeft: 8 };
const value = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/ChatBanner.tsx");

export default function ChatBanner(channel) {
  channel = channel.channel;
  let obj = useAllowedChatOverlaysDefault();
  let obj1 = channel(504);
  const items = [ReadStateStore];
  const items1 = [channel.id];
  const stateFromStoresObject = obj1.useStateFromStoresObject(
    items,
    () => {
      let oldestUnreadTimestamp = ReadStateStore.getOldestUnreadTimestamp(channel.id);
      const obj = { unreadCount: ReadStateStore.getUnreadCount(channel.id), oldestUnreadTimestamp: null };
      if (0 === oldestUnreadTimestamp) {
        oldestUnreadTimestamp = SnowflakeUtilsDefault.extractTimestamp(channel.id);
      }
      obj.oldestUnreadTimestamp = oldestUnreadTimestamp;
      return obj;
    },
    items1,
  );
  ({ unreadCount, oldestUnreadTimestamp } = stateFromStoresObject);
  if (channel.isArchivedLockedThread()) {
    obj = { channel };
    let tmp4 = closure_12(ArchivedLockedThreadChatBanner, obj);
  } else if (channel.isLockedThread()) {
    obj = { channel };
    tmp4 = closure_12(LockedThreadChatBanner, obj);
  } else {
    if (unreadCount > 0) {
      if (obj.includes(ChatOverlays.NEW_MESSAGES)) {
        obj1 = {
          unreadCount,
          oldestUnreadTimestamp,
          channel,
          handleScrollToNewMessages: channel.handleScrollToNewMessages,
        };
        tmp4 = closure_12(NewMessagesChatBar, obj1);
      }
    }
    tmp4 = null;
    if (tmp) {
      tmp4 = null;
      if (obj.includes(ChatOverlays.OPT_IN_CHANNEL)) {
        let obj2 = { channel };
        tmp4 = closure_12(OptInChannelBanner, obj2);
      }
    }
  }
  return tmp4;
}
export { OptInChannelBanner };
