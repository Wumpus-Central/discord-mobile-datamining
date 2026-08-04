// discord_app/modules/messages/native/ChatBanner.tsx
import Button from "Button";
import get_ActivityIndicator from "Text";
import _handleConnectionOpen from "_handleConnectionOpen";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import { ChatOverlays } from "ChatOverlays";
import ME from "ME";
import jsxProd from "patchThread";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c10;
let c4;
let c9;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
class OptInChannelBanner {
  constructor(arg0) {
    channel = global.channel;
    tmp = jsxs();
    tmp2 = closure_2;
    items = [];
    items[0] = channel;
    tmp3 = require("useIsMobileVisualRefreshExperimentEnabled")("OptInChannelBanner");
    effect = Button.useEffect(() => {
      let obj = outer1_1(outer1_2[14]);
      obj = {};
      const merged = Object.assign(channel(outer1_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(outer1_2[15]);
      const merged1 = Object.assign(channel(outer1_2[15]).collectChannelAnalyticsMetadata(channel));
      obj.banner_type = "channel_opt_in";
      obj.track(outer1_10.CHANNEL_BANNER_VIEWED, obj);
    }, items);
    items1 = [];
    items1[0] = channel;
    tmp7 = View;
    items2 = [, , ];
    items2[0] = tmp.optInChannelBannerContainer;
    prop = null;
    callback = Button.useCallback(() => {
      let obj = outer1_1(outer1_2[14]);
      obj = {};
      const merged = Object.assign(channel(outer1_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(outer1_2[15]);
      const merged1 = Object.assign(channel(outer1_2[15]).collectChannelAnalyticsMetadata(channel));
      obj.banner_type = "channel_opt_in";
      obj.cta_type = "add channel";
      obj.track(outer1_10.CHANNEL_BANNER_CTA_CLICKED, obj);
      const obj4 = channel(outer1_2[15]);
      obj = { section: outer1_11.CHANNEL };
      channel(outer1_2[16]).setOptInChannel(channel.guild_id, channel.id, true, obj);
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
  const tmp = createCacheKey();
  const items = [channel];
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[14]);
    obj = {};
    const merged = Object.assign(channel(outer1_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
    const obj3 = channel(outer1_2[15]);
    const merged1 = Object.assign(channel(outer1_2[15]).collectChannelAnalyticsMetadata(channel));
    obj.banner_type = "thread";
    obj.track(outer1_10.CHANNEL_BANNER_VIEWED, obj);
  }, items);
  let obj = channel(6052);
  let canUnarchiveThread = obj.useCanUnarchiveThread(channel);
  obj = { style: tmp.threadBannerContainer, children: null };
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
  const items1 = [closure_12(channel(4189).Text, obj), ];
  if (canUnarchiveThread) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.threadBannerButton;
    const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl2 = tmp3(1236).intl;
    obj2[2] = intl2.string(tmp3(1236).t["0dvvEi"]);
    obj2[3] = function onPress() {
      let obj = outer1_1(outer1_2[14]);
      obj = {};
      const merged = Object.assign(channel(outer1_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(outer1_2[15]);
      const merged1 = Object.assign(channel(outer1_2[15]).collectChannelAnalyticsMetadata(channel));
      obj.banner_type = "thread";
      obj.cta_type = "unarchive";
      obj.track(outer1_10.CHANNEL_BANNER_CTA_CLICKED, obj);
      const obj4 = channel(outer1_2[15]);
      outer1_1(outer1_2[21]).unarchiveThread(channel, false);
    };
    obj1[1] = tmp8(tmp3(4604).Button, obj2);
    canUnarchiveThread = tmp8(tmp7, obj1);
  }
  items1[1] = canUnarchiveThread;
  obj[1] = items1;
  return closure_13(closure_4, obj);
}
function LockedThreadChatBanner(channel) {
  channel = channel.channel;
  const tmp = createCacheKey();
  const items = [channel];
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[14]);
    obj = {};
    const merged = Object.assign(channel(outer1_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
    const obj3 = channel(outer1_2[15]);
    const merged1 = Object.assign(channel(outer1_2[15]).collectChannelAnalyticsMetadata(channel));
    obj.banner_type = "thread";
    obj.track(outer1_10.CHANNEL_BANNER_VIEWED, obj);
  }, items);
  let obj = channel(6052);
  let isThreadModerator = obj.useIsThreadModerator(channel);
  obj = { style: tmp.threadBannerContainer, children: null };
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
  const items1 = [closure_12(channel(4189).Text, obj), ];
  if (isThreadModerator) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.threadBannerButton;
    const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl2 = tmp3(1236).intl;
    obj2[2] = intl2.string(tmp3(1236).t.zA9d1J);
    obj2[3] = function onPress() {
      let obj = outer1_1(outer1_2[14]);
      obj = {};
      const merged = Object.assign(channel(outer1_2[15]).collectGuildAnalyticsMetadata(channel.getGuildId()));
      const obj3 = channel(outer1_2[15]);
      const merged1 = Object.assign(channel(outer1_2[15]).collectChannelAnalyticsMetadata(channel));
      obj.banner_type = "thread";
      obj.cta_type = "unlock";
      obj.track(outer1_10.CHANNEL_BANNER_CTA_CLICKED, obj);
      const obj4 = channel(outer1_2[15]);
      outer1_1(outer1_2[21]).unlockThread(channel);
    };
    obj1[1] = tmp8(tmp3(4604).Button, obj2);
    isThreadModerator = tmp8(tmp7, obj1);
  }
  items1[1] = isThreadModerator;
  obj[1] = items1;
  return closure_13(closure_4, obj);
}
function NewMessagesChatBar(channel) {
  let handleScrollToNewMessages;
  let unreadCount;
  channel = channel.channel;
  ({ unreadCount, handleScrollToNewMessages } = channel);
  let stringResult = createCacheKey();
  let XSmallBoldIcon = channel;
  let WHITE = dependencyMap;
  let obj = channel(589);
  const items = [_handleConnectionOpen];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => connected.isConnected(), [])) {
    if (unreadCount <= 0) {
      tmp2 = null;
    } else {
      let t = XSmallBoldIcon(1236).t;
      const isEstimatedResult = estimated.isEstimated(channel.id);
      t = { style: null, children: null };
      t[0] = stringResult.newMessageBar;
      obj = { accessibilityRole: "button", style: null, onPress: null, children: null };
      obj[1] = stringResult.newMessageBarTextContainer;
      obj[2] = handleScrollToNewMessages;
      obj = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
      const intl = XSmallBoldIcon(1236).intl;
      const obj1 = { count: null, timestamp: null };
      obj1[0] = unreadCount;
      obj1[1] = channel.oldestUnreadTimestamp;
      obj[2] = intl.format(estimated.isEstimated(channel.id) ? t.wvtbbG : t["BctFH/"], obj1);
      obj[3] = callback(XSmallBoldIcon(4189).Text, obj);
      const items1 = [callback(XSmallBoldIcon(4721).PressableOpacity, obj), ];
      handleScrollToNewMessages = XSmallBoldIcon(4721).PressableOpacity;
      const obj2 = { style: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      obj2[0] = stringResult.newMessageBarCloseButton;
      const intl2 = XSmallBoldIcon(1236).intl;
      stringResult = intl2.string(XSmallBoldIcon(1236).t.e6RscS);
      obj2[2] = stringResult;
      obj2[3] = function onPress() {
        let obj = channel(outer1_2[23]);
        obj = { section: outer1_11.NEW_MESSAGES_BANNER, object: outer1_9.MARK_CHANNEL_AS_READ_BUTTON, objectType: outer1_8.ACK_MANUAL };
        return obj.ack(channel.id, obj);
      };
      XSmallBoldIcon = XSmallBoldIcon(7759).XSmallBoldIcon;
      const obj3 = { size: "sm", color: null };
      WHITE = importDefault(712).colors.WHITE;
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
({ AnalyticsObjectTypes: metroImportAll, AnalyticsObjects: c9, AnalyticEvents: c10, AnalyticsSections: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { threadBannerContainer: null, threadBannerTitle: null, threadBannerButton: null, newMessageBar: null, newMessageBarTextContainer: null, newMessageBarCloseButton: null, optInChannelBannerContainer: null, optInChannelBannerLegacyBorder: null, topBorder: null, optInChannelBannerText: null, optInChannelBannerButtonContainer: null };
createCacheKey = { alignSelf: "stretch", minHeight: 60, flexDirection: "row", paddingHorizontal: 16, paddingVertical: 12, alignItems: "center", flexGrow: 0, zIndex: 100, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, lineHeight: 18 };
createCacheKey[2] = { flexGrow: 0, paddingVertical: 7, paddingHorizontal: 16, marginLeft: 16 };
createCacheKey[3] = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, flexDirection: "row", justifyContent: "center", alignItems: "center", overflow: "hidden", zIndex: 100, minHeight: 45 };
createCacheKey[4] = { flex: 1, paddingLeft: 16, paddingVertical: 10 };
createCacheKey[5] = { paddingHorizontal: 12 };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, flexDirection: "row", justifyContent: "center", alignItems: "center", overflow: "hidden", zIndex: 100, minHeight: 45 };
createCacheKey[6] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", overflow: "hidden", padding: 8, paddingLeft: 16, paddingRight: 16, zIndex: 100, backgroundColor: require("Themes").colors.CHAT_BANNER_BG, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: require("Themes").colors.CHAT_BORDER };
let obj2 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", overflow: "hidden", padding: 8, paddingLeft: 16, paddingRight: 16, zIndex: 100, backgroundColor: require("Themes").colors.CHAT_BANNER_BG, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: require("Themes").colors.CHAT_BORDER };
createCacheKey[7] = { borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE };
let obj3 = { borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[8] = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: require("Themes").colors.CHAT_BORDER };
createCacheKey[9] = { flex: 1 };
createCacheKey[10] = { flexShrink: 0, marginLeft: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: require("Themes").colors.CHAT_BORDER };
const result = require("_handleConnectionOpen").fileFinishedImporting("modules/messages/native/ChatBanner.tsx");

export default function ChatBanner(channel) {
  let oldestUnreadTimestamp;
  let unreadCount;
  channel = channel.channel;
  let obj = importDefault(10478)();
  let obj1 = channel(589);
  const items = [generateOldThreadCutoff];
  const items1 = [channel.id];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => {
    let oldestUnreadTimestamp = outer1_6.getOldestUnreadTimestamp(channel.id);
    const obj = { unreadCount: outer1_6.getUnreadCount(channel.id), oldestUnreadTimestamp: null };
    if (0 === oldestUnreadTimestamp) {
      oldestUnreadTimestamp = outer1_1(outer1_2[12]).extractTimestamp(channel.id);
      const obj2 = outer1_1(outer1_2[12]);
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