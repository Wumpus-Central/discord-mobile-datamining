// === Module 12070: GlobalStatusContent ===

// Module 12070 (GlobalStatusContent)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useThemeDefault from "useTheme" /* 5379 */;
import useCanSpeakInChannelDefault from "useCanSpeakInChannel" /* 11388 */;
import StatusBarDefault from "StatusBar" /* 11408 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11905 */;
import useIsInvitedToSpeakDefault from "useIsInvitedToSpeak" /* 12063 */;
import useVoiceStateForRemoteSessionDefault from "useVoiceStateForRemoteSession" /* 12066 */;
import GlobalStageChannelStatusDefault from "GlobalStageChannelStatus" /* 12071 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import GuildStore from "GuildStore" /* 5014 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5901 */;
import SessionsStore from "SessionsStore" /* 5903 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const RTC_PANEL_HEIGHT = fn(12065).RTC_PANEL_HEIGHT;
const RTCConnectionStates = fn(1072).RTCConnectionStates;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5143);
let obj2 = { bgNeutral: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, bg: null, container: null };
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.bg = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj2.container = { paddingHorizontal: 16, alignItems: "center", justifyContent: "center" };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/connectivity/native/components/GlobalStatusContent.tsx");

export default function ConnectivityGlobalStatusContent() {
  const tmp = closure_12();
  const tmp4 = useVoiceStateForRemoteSessionDefault();
  _require = tmp4;
  items = [RTCConnectionStore, GuildStore, ChannelStore, SessionsStore];
  const items1 = [tmp4];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    let channelId;
    if (closure_0 != null) {
      channelId = closure_0.channelId;
    }
    if (channelId == null) {
      channelId = RTCConnectionStore.getChannelId();
    }
    const channel = ChannelStore.getChannel(channelId);
    if (null != closure_0) {
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      let guildId1 = guildId;
    } else {
      guildId1 = RTCConnectionStore.getGuildId();
    }
    let str;
    guild = GuildStore.getGuild(guildId1);
    if (closure_0 != null) {
      str = closure_0.sessionId;
    }
    if (str == null) {
      str = "";
    }
    const sessionById = SessionsStore.getSessionById(str);
    let os;
    if (sessionById != null) {
      os = sessionById.clientInfo.os;
    }
    const obj = { guild, channel, rtcConnectionState: null, remotePlatform: null };
    if (null != closure_0) {
      let RTC_CONNECTED = RTCConnectionStates.RTC_CONNECTED;
    } else {
      RTC_CONNECTED = RTCConnectionStore.getState();
    }
    obj.rtcConnectionState = RTC_CONNECTED;
    obj.remotePlatform = os;
    return obj;
  }, items1);
  let channel = stateFromStoresObject.channel;
  let isGuildStageVoiceResult;
  ({ guild, rtcConnectionState, remotePlatform } = stateFromStoresObject);
  if (channel != null) {
    isGuildStageVoiceResult = channel.isGuildStageVoice();
  }
  let id;
  let obj = require("initialize");
  if (channel != null) {
    id = channel.id;
  }
  let tmp2ResultResult = useCanSpeakInChannelDefault(id);
  const tmp2Result = useCanSpeakInChannelDefault;
  const tmp11 = useIsInvitedToSpeakDefault();
  let tmp14 = tmp12;
  const tmp5Result = require("shared");
  if (isGuildStageVoiceResult) {
    if (!tmp2ResultResult) {
      tmp2ResultResult = tmp11;
    }
    tmp14 = tmp2ResultResult;
  }
  const isThemeDarkResult = require("shared").isThemeDark(useThemeDefault());
  let isScreenLandscape = require("useIsScreenLandscape").useIsScreenLandscape();
  if (isScreenLandscape) {
    isScreenLandscape = tmp5(5324).isModalOpen(ChannelCallModalDefault);
    const tmp5Result5 = tmp5(5324);
  }
  if (isScreenLandscape) {
    isScreenLandscape = tmp5(1377).isAndroid();
    const tmp5Result6 = tmp5(1377);
  }
  let num = 0;
  if (!isScreenLandscape) {
    num = useSafeAreaInsetsDefault().top;
  }
  const obj2 = { style: null, children: null };
  const items2 = [tmp14 ? tmp.bg : tmp.bgNeutral, tmp.container, { minHeight: RTC_PANEL_HEIGHT + num, paddingTop: num }];
  obj2.style = items2;
  if (isScreenLandscape) {
    isScreenLandscape = closure_10(StatusBarDefault, { hidden: true });
  }
  const items3 = [isScreenLandscape, ];
  let tmp19 = null;
  if (isGuildStageVoiceResult) {
    const obj4 = { channel, guild, hasRTCConnectivity: tmp12, isDarkTheme: isThemeDarkResult, rtcConnectionState, remotePlatform };
    tmp19 = closure_10(GlobalStageChannelStatusDefault, obj4);
  }
  items3[1] = tmp19;
  obj2.children = items3;
  return closure_11(View, obj2);
};