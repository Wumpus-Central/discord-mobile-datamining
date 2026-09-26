// === Module 10964: ChatBanner ===

// Module 10964 (ChatBanner)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6531 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 6534 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7184 */;
import useShowChannelOptInNoticeDefault from "useShowChannelOptInNotice" /* 10966 */;
import useAllowedChatOverlaysDefault from "useAllowedChatOverlays" /* 10967 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5589 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;

require = fn;
class OptInChannelBanner {
  constructor(arg0) {
    channel = global.channel;
    tmp = closure_14();
    items = [];
    items[0] = channel;
    effect = closure_3.useEffect(() => {
      const obj2 = {};
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
      obj2.banner_type = "channel_opt_in";
      obj.track(constants3.CHANNEL_BANNER_VIEWED, obj2);
    }, items);
    items1 = [];
    items1[0] = channel;
    tmp5 = View;
    items2 = [, ];
    items2[0] = tmp.optInChannelBannerContainer;
    topBorder = null;
    callback = closure_3.useCallback(() => {
      const obj2 = {};
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
      obj2.banner_type = "channel_opt_in";
      obj2.cta_type = "add channel";
      obj.track(constants3.CHANNEL_BANNER_CTA_CLICKED, obj2);
      OptInChannelsActionCreators.setOptInChannel(channel.guild_id, channel.id, true, { section: constants4.CHANNEL });
    }, items1);
    tmp4 = jsxs;
    if (global.topBorder) {
      topBorder = tmp.topBorder;
    }
    obj = { style: items2, children: null };
    items2[1] = topBorder;
    obj1 = { lineClamp: 2, style: tmp.optInChannelBannerText, variant: "text-sm/semibold", children: null };
    intl = channel(closure_2[17]).intl;
    obj1.children = intl.string(channel(closure_2[17]).t.iOWmmB);
    items3 = [, ];
    items3[0] = jsx(channel(closure_2[16]).Text, obj1);
    obj5 = { style: tmp.optInChannelBannerButtonContainer, children: null };
    obj6 = {};
    merged = Object.assign(global.ctaProps);
    obj6.onPress = callback;
    obj6.size = "sm";
    intl2 = channel(closure_2[17]).intl;
    obj6.text = intl2.string(channel(closure_2[17]).t["TD/+zP"]);
    obj5.children = jsx(channel(closure_2[18]).Button, obj6);
    items3[1] = jsx(tmp5, obj5);
    obj.children = items3;
    return tmp4(tmp5, obj);
  }
}
function ArchivedLockedThreadChatBanner(channel) {
  channel = channel.channel;
  const tmp = closure_14();
  const items = [channel];
  const effect = noop.useEffect(() => {
    const obj2 = {};
    const obj = AnalyticsUtilsDefault;
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
    const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
    obj2.banner_type = "thread";
    obj.track(constants3.CHANNEL_BANNER_VIEWED, obj2);
  }, items);
  let canUnarchiveThread = channel(6687).useCanUnarchiveThread(channel);
  let obj2 = { style: tmp.threadBannerContainer, children: null };
  let obj3 = { lineClamp: 4, style: tmp.threadBannerTitle, variant: "text-sm/medium", color: "text-default", children: null };
  let obj = channel(6687);
  const intl = channel(1115).intl;
  const string = intl.string;
  const t = channel(1115).t;
  if (isForumPostResult) {
    let stringResult = string(t["833FDn"]);
  } else {
    stringResult = string(t.rEeodK);
  }
  obj3.children = stringResult;
  const items1 = [closure_12(channel(4832).Text, obj3), ];
  if (canUnarchiveThread) {
    let obj4 = { style: tmp.threadBannerButton, children: null };
    const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl2 = tmp3(1115).intl;
    obj5.text = intl2.string(tmp3(1115).t["0dvvEi"]);
    obj5.onPress = function onPress() {
      const obj2 = {};
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
      obj2.banner_type = "thread";
      obj2.cta_type = "unarchive";
      obj.track(constants3.CHANNEL_BANNER_CTA_CLICKED, obj2);
      ThreadActionCreatorsDefault.unarchiveThread(channel, false);
    };
    obj4.children = closure_12(tmp3(5281).Button, obj5);
    canUnarchiveThread = closure_12(closure_4, obj4);
  }
  items1[1] = canUnarchiveThread;
  obj2.children = items1;
  return closure_13(closure_4, obj2);
}
function LockedThreadChatBanner(channel) {
  channel = channel.channel;
  const tmp = closure_14();
  const items = [channel];
  const effect = noop.useEffect(() => {
    const obj2 = {};
    const obj = AnalyticsUtilsDefault;
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
    const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
    obj2.banner_type = "thread";
    obj.track(constants3.CHANNEL_BANNER_VIEWED, obj2);
  }, items);
  let isThreadModerator = channel(6687).useIsThreadModerator(channel);
  let obj2 = { style: tmp.threadBannerContainer, children: null };
  let obj3 = { lineClamp: 4, style: tmp.threadBannerTitle, variant: "text-sm/medium", color: "text-default", children: null };
  let obj = channel(6687);
  const intl = channel(1115).intl;
  const string = intl.string;
  const t = channel(1115).t;
  if (isForumPostResult) {
    let stringResult = string(t.E7oO8u);
  } else {
    stringResult = string(t["V/JF2N"]);
  }
  obj3.children = stringResult;
  const items1 = [closure_12(channel(4832).Text, obj3), ];
  if (isThreadModerator) {
    let obj4 = { style: tmp.threadBannerButton, children: null };
    const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl2 = tmp3(1115).intl;
    obj5.text = intl2.string(tmp3(1115).t.zA9d1J);
    obj5.onPress = function onPress() {
      const obj2 = {};
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channel.getGuildId()));
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
      obj2.banner_type = "thread";
      obj2.cta_type = "unlock";
      obj.track(constants3.CHANNEL_BANNER_CTA_CLICKED, obj2);
      ThreadActionCreatorsDefault.unlockThread(channel);
    };
    obj4.children = closure_12(tmp3(5281).Button, obj5);
    isThreadModerator = closure_12(closure_4, obj4);
  }
  items1[1] = isThreadModerator;
  obj2.children = items1;
  return closure_13(closure_4, obj2);
}
function NewMessagesChatBar(channel) {
  channel = channel.channel;
  ({ unreadCount, handleScrollToNewMessages } = channel);
  let stringResult = closure_14();
  let XSmallBoldIcon = channel;
  let WHITE = dependencyMap;
  const items = [GatewayConnectionStore];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => connected.isConnected(), [])) {
    if (unreadCount <= 0) {
      tmp2 = null;
    } else {
      XSmallBoldIcon(1115).t;
      const isEstimatedResult = ReadStateStore.isEstimated(channel.id);
      const t = { style: stringResult.newMessageBar, children: null };
      const obj2 = { accessibilityRole: "button", style: stringResult.newMessageBarTextContainer, onPress: handleScrollToNewMessages, children: null };
      const obj3 = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
      const intl = XSmallBoldIcon(1115).intl;
      const obj4 = { count: unreadCount, timestamp: channel.oldestUnreadTimestamp };
      obj3.children = intl.format(ReadStateStore.isEstimated(channel.id) ? t.wvtbbG : t["BctFH/"], obj4);
      obj2.children = closure_12(XSmallBoldIcon(4832).Text, obj3);
      const items1 = [closure_12(XSmallBoldIcon(5435).PressableOpacity, obj2), ];
      handleScrollToNewMessages = XSmallBoldIcon(5435).PressableOpacity;
      const obj5 = { style: stringResult.newMessageBarCloseButton, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl2 = XSmallBoldIcon(1115).intl;
      stringResult = intl2.string(XSmallBoldIcon(1115).t.e6RscS);
      obj5.accessibilityLabel = stringResult;
      obj5.onPress = function onPress() {
        return ReadStateActionCreators.ack(channel.id, { section: constants4.NEW_MESSAGES_BANNER, object: constants2.MARK_CHANNEL_AS_READ_BUTTON, objectType: constants.ACK_MANUAL });
      };
      XSmallBoldIcon = XSmallBoldIcon(7415).XSmallBoldIcon;
      const obj6 = { size: "sm", color: null };
      WHITE = nativeDefault.colors.WHITE;
      obj6.color = WHITE;
      obj5.children = closure_12(XSmallBoldIcon, obj6);
      items1[1] = closure_12(handleScrollToNewMessages, obj5);
      t.children = items1;
      closure_13(closure_4, t);
      const tmp6 = ReadStateStore.isEstimated(channel.id) ? t.wvtbbG : t["BctFH/"];
    }
  }
  return tmp2;
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const ChatOverlays = fn(10965).ChatOverlays;
const Constants = fn(1074);
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: closure_9, AnalyticEvents: c10, AnalyticsSections: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { threadBannerContainer: { alignSelf: "stretch", minHeight: 60, flexDirection: "row", paddingHorizontal: 16, paddingVertical: 12, alignItems: "center", flexGrow: 0, zIndex: 100, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, threadBannerTitle: { flex: 1, lineHeight: 18 }, threadBannerButton: { flexGrow: 0, paddingVertical: 7, paddingHorizontal: 16, marginLeft: 16 }, newMessageBar: null, newMessageBarTextContainer: null, newMessageBarCloseButton: null, optInChannelBannerContainer: null, topBorder: null, optInChannelBannerText: null, optInChannelBannerButtonContainer: null };
let obj3 = { alignSelf: "stretch", minHeight: 60, flexDirection: "row", paddingHorizontal: 16, paddingVertical: 12, alignItems: "center", flexGrow: 0, zIndex: 100, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.newMessageBar = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, flexDirection: "row", justifyContent: "center", alignItems: "center", overflow: "hidden", zIndex: 100, minHeight: 45 };
obj2.newMessageBarTextContainer = { flex: 1, paddingLeft: 16, paddingVertical: 10 };
obj2.newMessageBarCloseButton = { paddingHorizontal: 12 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, flexDirection: "row", justifyContent: "center", alignItems: "center", overflow: "hidden", zIndex: 100, minHeight: 45 };
obj2.optInChannelBannerContainer = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", overflow: "hidden", padding: 8, paddingLeft: 16, paddingRight: 16, zIndex: 100, backgroundColor: nativeDefault.colors.CHAT_BANNER_BG, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.CHAT_BORDER };
let obj5 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", overflow: "hidden", padding: 8, paddingLeft: 16, paddingRight: 16, zIndex: 100, backgroundColor: nativeDefault.colors.CHAT_BANNER_BG, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: nativeDefault.colors.CHAT_BORDER };
obj2.topBorder = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.CHAT_BORDER };
obj2.optInChannelBannerText = { flex: 1 };
obj2.optInChannelBannerButtonContainer = { flexShrink: 0, marginLeft: 8 };
const value = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/ChatBanner.tsx");

export default function ChatBanner(channel) {
  channel = channel.channel;
  let obj = useAllowedChatOverlaysDefault();
  const tmp = useShowChannelOptInNoticeDefault(channel);
  const items = [ReadStateStore];
  const items1 = [channel.id];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => {
    let oldestUnreadTimestamp = ReadStateStore.getOldestUnreadTimestamp(channel.id);
    const obj = { unreadCount: ReadStateStore.getUnreadCount(channel.id), oldestUnreadTimestamp: null };
    if (0 === oldestUnreadTimestamp) {
      oldestUnreadTimestamp = SnowflakeUtilsDefault.extractTimestamp(channel.id);
    }
    obj.oldestUnreadTimestamp = oldestUnreadTimestamp;
    return obj;
  }, items1);
  ({ unreadCount, oldestUnreadTimestamp } = stateFromStoresObject);
  if (channel.isArchivedLockedThread()) {
    const obj3 = { channel };
    let tmp4 = closure_12(ArchivedLockedThreadChatBanner, obj3);
  } else if (channel.isLockedThread()) {
    const obj4 = { channel };
    tmp4 = closure_12(LockedThreadChatBanner, obj4);
  } else {
    if (unreadCount > 0) {
      if (obj.includes(ChatOverlays.NEW_MESSAGES)) {
        const obj5 = { unreadCount, oldestUnreadTimestamp, channel, handleScrollToNewMessages: channel.handleScrollToNewMessages };
        tmp4 = closure_12(NewMessagesChatBar, obj5);
      }
    }
    tmp4 = null;
    if (tmp) {
      tmp4 = null;
      if (obj.includes(ChatOverlays.OPT_IN_CHANNEL)) {
        const obj6 = { channel };
        tmp4 = closure_12(OptInChannelBanner, obj6);
      }
    }
  }
  return tmp4;
};
export { OptInChannelBanner };