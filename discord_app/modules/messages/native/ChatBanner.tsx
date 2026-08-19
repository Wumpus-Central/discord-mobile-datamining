// === Module 10633: OptInChannelBanner ===

// Module 10633 (OptInChannelBanner)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import ThemesDefault from "Themes" /* 712 */;
import patchThreadDefault from "patchThread" /* 7512 */;
import ChatOverlaysDefault from "ChatOverlays" /* 10636 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import _handleConnectionOpen from "_handleConnectionOpen" /* 4495 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;
import { ChatOverlays } from "ChatOverlays" /* 10634 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
class OptInChannelBanner {
  constructor(arg0) {
    channel = global.channel;
    tmp = closure_14();
    tmp2 = closure_2;
    items = [];
    items[0] = channel;
    tmp3 = require("useIsMobileVisualRefreshExperimentEnabled")("OptInChannelBanner");
    effect = closure_3.useEffect(() => {
      const obj = {};
      const merged = Object.assign(channel(dependencyMap[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(dependencyMap[15]);
      const merged1 = Object.assign(channel(dependencyMap[15]).collectChannelAnalyticsMetadata(channel));
      obj.banner_type = "channel_opt_in";
      obj.track(closure_1_10.CHANNEL_BANNER_VIEWED, obj);
    }, items);
    items1 = [];
    items1[0] = channel;
    tmp7 = View;
    items2 = [, , ];
    items2[0] = tmp.optInChannelBannerContainer;
    prop = null;
    callback = closure_3.useCallback(() => {
      let obj = {};
      const merged = Object.assign(channel(dependencyMap[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(dependencyMap[15]);
      const merged1 = Object.assign(channel(dependencyMap[15]).collectChannelAnalyticsMetadata(channel));
      obj.banner_type = "channel_opt_in";
      obj.cta_type = "add channel";
      obj.track(closure_1_10.CHANNEL_BANNER_CTA_CLICKED, obj);
      const obj4 = channel(dependencyMap[15]);
      obj = { section: closure_1_11.CHANNEL };
      channel(dependencyMap[16]).setOptInChannel(channel.guild_id, channel.id, true, obj);
    }, items1);
    tmp6 = jsxs;
    if (!tmp3) {
      prop = tmp.optInChannelBannerLegacyBorder;
    }
    items2[1] = prop;
    topBorder = null;
    if (global.topBorder) {
      topBorder = tmp.topBorder;
    }
    obj = { style: items2, children: null };
    items2[2] = topBorder;
    obj = { lineClamp: 2, style: tmp.optInChannelBannerText, variant: "text-sm/semibold", children: null };
    intl = require("getSystemLocale").intl;
    obj[3] = intl.string(require("getSystemLocale").t.iOWmmB);
    items3 = [, ];
    items3[0] = jsx(require("Text").Text, obj);
    obj1 = { style: tmp.optInChannelBannerButtonContainer, children: null };
    obj2 = {};
    merged = Object.assign(global.ctaProps);
    obj2.onPress = callback;
    obj2.size = "sm";
    intl2 = require("getSystemLocale").intl;
    obj2.text = intl2.string(require("getSystemLocale").t["TD/+zP"]);
    obj1[1] = jsx(require("Button").Button, obj2);
    items3[1] = jsx(tmp7, obj1);
    obj[1] = items3;
    return tmp6(tmp7, obj);
  }
}
function ArchivedLockedThreadChatBanner(channel) {
  channel = channel.channel;
  const tmp = callback3();
  const items = [channel];
  const effect = React.useEffect(() => {
    const obj = {};
    const merged = Object.assign(channel(dependencyMap[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
    const obj3 = channel(dependencyMap[15]);
    const merged1 = Object.assign(channel(dependencyMap[15]).collectChannelAnalyticsMetadata(channel));
    obj.banner_type = "thread";
    obj.track(closure_1_10.CHANNEL_BANNER_VIEWED, obj);
  }, items);
  let obj = channel(7234);
  let canUnarchiveThread = obj.useCanUnarchiveThread(channel);
  obj = { lineClamp: 4, style: tmp.threadBannerTitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = channel(1236).intl;
  const string = intl.string;
  const t = channel(1236).t;
  if (isForumPostResult) {
    let stringResult = string(t["833FDn"]);
  } else {
    stringResult = string(t.rEeodK);
  }
  obj[4] = stringResult;
  const items1 = [callback(channel(4734).Text, obj), ];
  if (canUnarchiveThread) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.threadBannerButton;
    const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl2 = tmp3(1236).intl;
    obj2[2] = intl2.string(tmp3(1236).t["0dvvEi"]);
    obj2[3] = function onPress() {
      const obj = {};
      const merged = Object.assign(channel(dependencyMap[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(dependencyMap[15]);
      const merged1 = Object.assign(channel(dependencyMap[15]).collectChannelAnalyticsMetadata(channel));
      obj.banner_type = "thread";
      obj.cta_type = "unarchive";
      obj.track(closure_1_10.CHANNEL_BANNER_CTA_CLICKED, obj);
      const obj4 = channel(dependencyMap[15]);
      patchThreadDefault.unarchiveThread(channel, false);
    };
    obj1[1] = callback(tmp3(4745).Button, obj2);
    canUnarchiveThread = callback(closure_4, obj1);
  }
  items1[1] = canUnarchiveThread;
  obj[1] = items1;
  return callback2(closure_4, obj);
}
function LockedThreadChatBanner(channel) {
  channel = channel.channel;
  const tmp = callback3();
  const items = [channel];
  const effect = React.useEffect(() => {
    const obj = {};
    const merged = Object.assign(channel(dependencyMap[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
    const obj3 = channel(dependencyMap[15]);
    const merged1 = Object.assign(channel(dependencyMap[15]).collectChannelAnalyticsMetadata(channel));
    obj.banner_type = "thread";
    obj.track(closure_1_10.CHANNEL_BANNER_VIEWED, obj);
  }, items);
  let obj = channel(7234);
  let isThreadModerator = obj.useIsThreadModerator(channel);
  obj = { lineClamp: 4, style: tmp.threadBannerTitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = channel(1236).intl;
  const string = intl.string;
  const t = channel(1236).t;
  if (isForumPostResult) {
    let stringResult = string(t.E7oO8u);
  } else {
    stringResult = string(t["V/JF2N"]);
  }
  obj[4] = stringResult;
  const items1 = [callback(channel(4734).Text, obj), ];
  if (isThreadModerator) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.threadBannerButton;
    const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl2 = tmp3(1236).intl;
    obj2[2] = intl2.string(tmp3(1236).t.zA9d1J);
    obj2[3] = function onPress() {
      const obj = {};
      const merged = Object.assign(channel(dependencyMap[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(dependencyMap[15]);
      const merged1 = Object.assign(channel(dependencyMap[15]).collectChannelAnalyticsMetadata(channel));
      obj.banner_type = "thread";
      obj.cta_type = "unlock";
      obj.track(closure_1_10.CHANNEL_BANNER_CTA_CLICKED, obj);
      const obj4 = channel(dependencyMap[15]);
      patchThreadDefault.unlockThread(channel);
    };
    obj1[1] = callback(tmp3(4745).Button, obj2);
    isThreadModerator = callback(closure_4, obj1);
  }
  items1[1] = isThreadModerator;
  obj[1] = items1;
  return callback2(closure_4, obj);
}
function NewMessagesChatBar(channel) {
  channel = channel.channel;
  ({ unreadCount, handleScrollToNewMessages } = channel);
  let stringResult = callback3();
  let XSmallBoldIcon = channel;
  let WHITE = dependencyMap;
  let obj = channel(589);
  const items = [closure_5];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => connected.isConnected(), [])) {
    if (unreadCount <= 0) {
      tmp2 = null;
    } else {
      XSmallBoldIcon(1236).t;
      const isEstimatedResult = estimated.isEstimated(channel.id);
      const t = { style: null, children: null };
      t[0] = stringResult.newMessageBar;
      obj = { accessibilityRole: "button", style: null, onPress: null, children: null };
      obj[1] = stringResult.newMessageBarTextContainer;
      obj[2] = handleScrollToNewMessages;
      obj = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
      const intl = XSmallBoldIcon(1236).intl;
      obj1 = { count: null, timestamp: null };
      obj1[0] = unreadCount;
      obj1[1] = channel.oldestUnreadTimestamp;
      obj[2] = intl.format(estimated.isEstimated(channel.id) ? t.wvtbbG : t["BctFH/"], obj1);
      obj[3] = callback(XSmallBoldIcon(4734).Text, obj);
      const items1 = [callback(XSmallBoldIcon(5433).PressableOpacity, obj), ];
      handleScrollToNewMessages = XSmallBoldIcon(5433).PressableOpacity;
      const obj2 = { style: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      obj2[0] = stringResult.newMessageBarCloseButton;
      const intl2 = XSmallBoldIcon(1236).intl;
      stringResult = intl2.string(XSmallBoldIcon(1236).t.e6RscS);
      obj2[2] = stringResult;
      obj2[3] = function onPress() {
        channel(dependencyMap[23]);
        const obj = { section: closure_1_11.NEW_MESSAGES_BANNER, object: closure_1_9.MARK_CHANNEL_AS_READ_BUTTON, objectType: closure_1_8.ACK_MANUAL };
        return obj.ack(channel.id, obj);
      };
      XSmallBoldIcon = XSmallBoldIcon(8196).XSmallBoldIcon;
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
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: c9, AnalyticEvents: c10, AnalyticsSections: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createCacheKey = { alignSelf: "stretch", minHeight: 60, flexDirection: "row", paddingHorizontal: 16, paddingVertical: 12, alignItems: "center", flexGrow: 0, zIndex: 100, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, lineHeight: 18 };
createCacheKey[2] = { flexGrow: 0, paddingVertical: 7, paddingHorizontal: 16, marginLeft: 16 };
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, flexDirection: "row", justifyContent: "center", alignItems: "center", overflow: "hidden", zIndex: 100, minHeight: 45 };
createCacheKey[4] = { flex: 1, paddingLeft: 16, paddingVertical: 10 };
createCacheKey[5] = { paddingHorizontal: 12 };
createCacheKey[6] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", overflow: "hidden", padding: 8, paddingLeft: 16, paddingRight: 16, zIndex: 100, backgroundColor: ThemesDefault.colors.CHAT_BANNER_BG, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: ThemesDefault.colors.CHAT_BORDER };
createCacheKey[7] = { borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[8] = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: ThemesDefault.colors.CHAT_BORDER };
createCacheKey[9] = { flex: 1 };
createCacheKey[10] = { flexShrink: 0, marginLeft: 8 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/messages/native/ChatBanner.tsx");

export default function ChatBanner(channel) {
  channel = channel.channel;
  let obj = ChatOverlaysDefault();
  obj1 = channel(589);
  const items = [closure_6];
  const items1 = [channel.id];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => {
    let oldestUnreadTimestamp = closure_1_6.getOldestUnreadTimestamp(channel.id);
    const obj = { unreadCount: closure_1_6.getUnreadCount(channel.id), oldestUnreadTimestamp: null };
    if (0 === oldestUnreadTimestamp) {
      oldestUnreadTimestamp = DISCORD_EPOCHDefault.extractTimestamp(channel.id);
    }
    obj[1] = oldestUnreadTimestamp;
    return obj;
  }, items1);
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
};
export { OptInChannelBanner };