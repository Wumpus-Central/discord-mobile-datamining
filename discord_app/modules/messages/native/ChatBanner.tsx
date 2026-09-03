// discord_app/modules/messages/native/ChatBanner.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ChatOverlaysDefault from "../useAllowedChatOverlays.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../gateway/GatewayConnectionStore.tsx";
import closure_6 from "../../../stores/ReadStateStore.tsx";
import { ChatOverlays } from "../ChatOverlayConstants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
class OptInChannelBanner {
  constructor(arg0) {
    channel = global.channel;
    tmp = closure_14();
    items = [];
    items[0] = channel;
    effect = closure_3.useEffect(() => {
      let obj = closure_1_1(closure_1_2[13]);
      obj = {};
      const merged = Object.assign(channel(closure_1_2[14]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(closure_1_2[14]);
      const merged1 = Object.assign(channel(closure_1_2[14]).collectChannelAnalyticsMetadata(channel));
      obj.banner_type = "channel_opt_in";
      obj.track(closure_1_10.CHANNEL_BANNER_VIEWED, obj);
    }, items);
    items1 = [];
    items1[0] = channel;
    tmp5 = View;
    items2 = [,];
    items2[0] = tmp.optInChannelBannerContainer;
    topBorder = null;
    callback = closure_3.useCallback(() => {
      let obj = closure_1_1(closure_1_2[13]);
      obj = {};
      const merged = Object.assign(channel(closure_1_2[14]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(closure_1_2[14]);
      const merged1 = Object.assign(channel(closure_1_2[14]).collectChannelAnalyticsMetadata(channel));
      obj.banner_type = "channel_opt_in";
      obj.cta_type = "add channel";
      obj.track(closure_1_10.CHANNEL_BANNER_CTA_CLICKED, obj);
      const obj4 = channel(closure_1_2[14]);
      obj = { section: closure_1_11.CHANNEL };
      channel(closure_1_2[15]).setOptInChannel(channel.guild_id, channel.id, true, obj);
    }, items1);
    tmp4 = jsxs;
    if (global.topBorder) {
      topBorder = tmp.topBorder;
    }
    obj = { style: items2, children: null };
    items2[1] = topBorder;
    obj = { lineClamp: 2, style: tmp.optInChannelBannerText, variant: "text-sm/semibold", children: null };
    intl = require("getSystemLocale").intl;
    obj[3] = intl.string(require("getSystemLocale").t.iOWmmB);
    items3 = [,];
    items3[0] = jsx(require("Text").Text, obj);
    obj1 = { style: tmp.optInChannelBannerButtonContainer, children: null };
    obj2 = {};
    merged = Object.assign(global.ctaProps);
    obj2.onPress = callback;
    obj2.size = "sm";
    intl2 = require("getSystemLocale").intl;
    obj2.text = intl2.string(require("getSystemLocale").t["TD/+zP"]);
    obj1[1] = jsx(require("Button").Button, obj2);
    items3[1] = jsx(tmp5, obj1);
    obj[1] = items3;
    return tmp4(tmp5, obj);
  }
}
function ArchivedLockedThreadChatBanner(channel) {
  channel = channel.channel;
  const tmp = callback3();
  const items = [channel];
  const effect = React.useEffect(() => {
    let obj = closure_1_1(closure_1_2[13]);
    obj = {};
    const merged = Object.assign(channel(closure_1_2[14]).collectGuildAnalyticsMetadata(channel.getGuildId()));
    const obj3 = channel(closure_1_2[14]);
    const merged1 = Object.assign(channel(closure_1_2[14]).collectChannelAnalyticsMetadata(channel));
    obj.banner_type = "thread";
    obj.track(closure_1_10.CHANNEL_BANNER_VIEWED, obj);
  }, items);
  let obj = channel(6125);
  let canUnarchiveThread = obj.useCanUnarchiveThread(channel);
  obj = { style: tmp.threadBannerContainer, children: null };
  obj = {
    lineClamp: 4,
    style: tmp.threadBannerTitle,
    variant: "text-sm/medium",
    color: "text-default",
    children: null,
  };
  const intl = channel(1233).intl;
  const string = intl.string;
  const t = channel(1233).t;
  if (isForumPostResult) {
    let stringResult = string(t["833FDn"]);
  } else {
    stringResult = string(t.rEeodK);
  }
  obj[4] = stringResult;
  const items1 = [closure_12(channel(4474).Text, obj)];
  if (canUnarchiveThread) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.threadBannerButton;
    const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl2 = tmp3(1233).intl;
    obj2[2] = intl2.string(tmp3(1233).t["0dvvEi"]);
    obj2[3] = function onPress() {
      let obj = closure_1_1(closure_1_2[13]);
      obj = {};
      const merged = Object.assign(channel(closure_1_2[14]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(closure_1_2[14]);
      const merged1 = Object.assign(channel(closure_1_2[14]).collectChannelAnalyticsMetadata(channel));
      obj.banner_type = "thread";
      obj.cta_type = "unarchive";
      obj.track(closure_1_10.CHANNEL_BANNER_CTA_CLICKED, obj);
      const obj4 = channel(closure_1_2[14]);
      closure_1_1(closure_1_2[20]).unarchiveThread(channel, false);
    };
    obj1[1] = tmp8(tmp3(4929).Button, obj2);
    canUnarchiveThread = tmp8(tmp7, obj1);
  }
  items1[1] = canUnarchiveThread;
  obj[1] = items1;
  return closure_13(closure_4, obj);
}
function LockedThreadChatBanner(channel) {
  channel = channel.channel;
  const tmp = callback3();
  const items = [channel];
  const effect = React.useEffect(() => {
    let obj = closure_1_1(closure_1_2[13]);
    obj = {};
    const merged = Object.assign(channel(closure_1_2[14]).collectGuildAnalyticsMetadata(channel.getGuildId()));
    const obj3 = channel(closure_1_2[14]);
    const merged1 = Object.assign(channel(closure_1_2[14]).collectChannelAnalyticsMetadata(channel));
    obj.banner_type = "thread";
    obj.track(closure_1_10.CHANNEL_BANNER_VIEWED, obj);
  }, items);
  let obj = channel(6125);
  let isThreadModerator = obj.useIsThreadModerator(channel);
  obj = { style: tmp.threadBannerContainer, children: null };
  obj = {
    lineClamp: 4,
    style: tmp.threadBannerTitle,
    variant: "text-sm/medium",
    color: "text-default",
    children: null,
  };
  const intl = channel(1233).intl;
  const string = intl.string;
  const t = channel(1233).t;
  if (isForumPostResult) {
    let stringResult = string(t.E7oO8u);
  } else {
    stringResult = string(t["V/JF2N"]);
  }
  obj[4] = stringResult;
  const items1 = [closure_12(channel(4474).Text, obj)];
  if (isThreadModerator) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.threadBannerButton;
    const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl2 = tmp3(1233).intl;
    obj2[2] = intl2.string(tmp3(1233).t.zA9d1J);
    obj2[3] = function onPress() {
      let obj = closure_1_1(closure_1_2[13]);
      obj = {};
      const merged = Object.assign(channel(closure_1_2[14]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(closure_1_2[14]);
      const merged1 = Object.assign(channel(closure_1_2[14]).collectChannelAnalyticsMetadata(channel));
      obj.banner_type = "thread";
      obj.cta_type = "unlock";
      obj.track(closure_1_10.CHANNEL_BANNER_CTA_CLICKED, obj);
      const obj4 = channel(closure_1_2[14]);
      closure_1_1(closure_1_2[20]).unlockThread(channel);
    };
    obj1[1] = tmp8(tmp3(4929).Button, obj2);
    isThreadModerator = tmp8(tmp7, obj1);
  }
  items1[1] = isThreadModerator;
  obj[1] = items1;
  return closure_13(closure_4, obj);
}
function NewMessagesChatBar(channel) {
  channel = channel.channel;
  ({ unreadCount, handleScrollToNewMessages } = channel);
  let stringResult = callback3();
  let XSmallBoldIcon = channel;
  let WHITE = dependencyMap;
  let obj = channel(586);
  const items = [closure_5];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => connected.isConnected(), [])) {
    if (unreadCount <= 0) {
      tmp2 = null;
    } else {
      let t = XSmallBoldIcon(1233).t;
      const isEstimatedResult = estimated.isEstimated(channel.id);
      t = { style: null, children: null };
      t[0] = stringResult.newMessageBar;
      obj = { accessibilityRole: "button", style: null, onPress: null, children: null };
      obj[1] = stringResult.newMessageBarTextContainer;
      obj[2] = handleScrollToNewMessages;
      obj = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
      const intl = XSmallBoldIcon(1233).intl;
      obj1 = { count: null, timestamp: null };
      obj1[0] = unreadCount;
      obj1[1] = channel.oldestUnreadTimestamp;
      obj[2] = intl.format(estimated.isEstimated(channel.id) ? t.wvtbbG : t["BctFH/"], obj1);
      obj[3] = callback(XSmallBoldIcon(4474).Text, obj);
      const items1 = [callback(XSmallBoldIcon(5077).PressableOpacity, obj)];
      handleScrollToNewMessages = XSmallBoldIcon(5077).PressableOpacity;
      const obj2 = {
        style: null,
        accessibilityRole: "button",
        accessibilityLabel: null,
        onPress: null,
        children: null,
      };
      obj2[0] = stringResult.newMessageBarCloseButton;
      const intl2 = XSmallBoldIcon(1233).intl;
      stringResult = intl2.string(XSmallBoldIcon(1233).t.e6RscS);
      obj2[2] = stringResult;
      obj2[3] = function onPress() {
        let obj = channel(closure_1_2[22]);
        obj = {
          section: closure_1_11.NEW_MESSAGES_BANNER,
          object: closure_1_9.MARK_CHANNEL_AS_READ_BUTTON,
          objectType: closure_1_8.ACK_MANUAL,
        };
        return obj.ack(channel.id, obj);
      };
      XSmallBoldIcon = XSmallBoldIcon(7894).XSmallBoldIcon;
      const obj3 = { size: "sm", color: null };
      WHITE = ThemesDefault.colors.WHITE;
      obj3[1] = WHITE;
      obj2[4] = callback(XSmallBoldIcon, obj3);
      items1[1] = callback(handleScrollToNewMessages, obj2);
      t[1] = items1;
      callback2(closure_4, t);
      const tmp6 = estimated.isEstimated(channel.id) ? t.wvtbbG : t["BctFH/"];
    }
  }
  return tmp2;
}
({ StyleSheet, View: c4 } = get_ActivityIndicator);
({
  AnalyticsObjectTypes: closure_8,
  AnalyticsObjects: c9,
  AnalyticEvents: c10,
  AnalyticsSections: unpackModuleId,
} = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = {
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
createCacheKey = {
  alignSelf: "stretch",
  minHeight: 60,
  flexDirection: "row",
  paddingHorizontal: 16,
  paddingVertical: 12,
  alignItems: "center",
  flexGrow: 0,
  zIndex: 100,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, lineHeight: 18 };
createCacheKey[2] = { flexGrow: 0, paddingVertical: 7, paddingHorizontal: 16, marginLeft: 16 };
createCacheKey[3] = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  zIndex: 100,
  minHeight: 45,
};
createCacheKey[4] = { flex: 1, paddingLeft: 16, paddingVertical: 10 };
createCacheKey[5] = { paddingHorizontal: 12 };
let obj1 = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  zIndex: 100,
  minHeight: 45,
};
createCacheKey[6] = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
  padding: 8,
  paddingLeft: 16,
  paddingRight: 16,
  zIndex: 100,
  backgroundColor: ThemesDefault.colors.CHAT_BANNER_BG,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: ThemesDefault.colors.CHAT_BORDER,
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
  backgroundColor: ThemesDefault.colors.CHAT_BANNER_BG,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: ThemesDefault.colors.CHAT_BORDER,
};
createCacheKey[7] = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: ThemesDefault.colors.CHAT_BORDER };
createCacheKey[8] = { flex: 1 };
createCacheKey[9] = { flexShrink: 0, marginLeft: 8 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj3 = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: ThemesDefault.colors.CHAT_BORDER };
const result = require("set").fileFinishedImporting("modules/messages/native/ChatBanner.tsx");

export default function ChatBanner(channel) {
  channel = channel.channel;
  let obj = ChatOverlaysDefault();
  obj1 = channel(586);
  const items = [closure_6];
  const items1 = [channel.id];
  const stateFromStoresObject = obj1.useStateFromStoresObject(
    items,
    () => {
      let oldestUnreadTimestamp = closure_1_6.getOldestUnreadTimestamp(channel.id);
      const obj = { unreadCount: closure_1_6.getUnreadCount(channel.id), oldestUnreadTimestamp: null };
      if (0 === oldestUnreadTimestamp) {
        oldestUnreadTimestamp = closure_1_1(closure_1_2[12]).extractTimestamp(channel.id);
        const obj2 = closure_1_1(closure_1_2[12]);
      }
      obj[1] = oldestUnreadTimestamp;
      return obj;
    },
    items1,
  );
  ({ unreadCount, oldestUnreadTimestamp } = stateFromStoresObject);
  if (channel.isArchivedLockedThread()) {
    obj = { channel: null };
    obj[0] = channel;
    let tmp4 = callback(ArchivedLockedThreadChatBanner, obj);
  } else if (channel.isLockedThread()) {
    obj = { channel: null };
    obj[0] = channel;
    tmp4 = callback(LockedThreadChatBanner, obj);
  } else {
    if (unreadCount > 0) {
      if (obj.includes(ChatOverlays.NEW_MESSAGES)) {
        obj1 = { unreadCount: null, oldestUnreadTimestamp: null, channel: null, handleScrollToNewMessages: null };
        obj1[0] = unreadCount;
        obj1[1] = oldestUnreadTimestamp;
        obj1[2] = channel;
        obj1[3] = channel.handleScrollToNewMessages;
        tmp4 = callback(NewMessagesChatBar, obj1);
      }
    }
    tmp4 = null;
    if (tmp) {
      tmp4 = null;
      if (obj.includes(ChatOverlays.OPT_IN_CHANNEL)) {
        let obj2 = { channel: null };
        obj2[0] = channel;
        tmp4 = callback(OptInChannelBanner, obj2);
      }
    }
  }
  return tmp4;
}
export { OptInChannelBanner };
