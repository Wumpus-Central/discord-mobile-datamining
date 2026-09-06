// discord_app/modules/connectivity/native/components/GlobalStatusContent.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import useVoiceStateForRemoteSessionDefault from "../../../game_console/hooks/useVoiceStateForRemoteSession.tsx";
import ChannelCallModalDefault from "../../../video_calls/native/components/ChannelCallModal.tsx";
import StatusBarDefault from "../../../status_bar/native/components/StatusBar.android.tsx";
import useCanSpeakInChannelDefault from "../../../stage_channels/useCanSpeakInChannel.tsx";
import useIsInvitedToSpeakDefault from "../../../stage_channels/useIsInvitedToSpeak.tsx";
import GlobalStageChannelStatusDefault from "../../../stage_channels/native/components/GlobalStageChannelStatus.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import SessionsStore from "../../../../stores/SessionsStore.tsx";

const require = fn;
const View = fn(17).View;
const RTC_PANEL_HEIGHT = fn(9680).RTC_PANEL_HEIGHT;
const RTCConnectionStates = fn(1074).RTCConnectionStates;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { bgNeutral: null, bg: null, container: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.bgNeutral = createStyles;
createStyles.bg = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
createStyles.container = { paddingHorizontal: 16, alignItems: "center", justifyContent: "center" };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/connectivity/native/components/GlobalStatusContent.tsx");

export default function ConnectivityGlobalStatusContent() {
  const tmp = closure_12();
  const tmp4 = useVoiceStateForRemoteSessionDefault();
  _require = tmp4;
  let obj = require("initialize");
  const items = [RTCConnectionStore, GuildStore, ChannelStore, SessionsStore];
  const items1 = [tmp4];
  const stateFromStoresObject = obj.useStateFromStoresObject(
    items,
    () => {
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
      const guild = GuildStore.getGuild(guildId1);
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
    },
    items1,
  );
  let channel = stateFromStoresObject.channel;
  let isGuildStageVoiceResult;
  ({ guild, rtcConnectionState, remotePlatform } = stateFromStoresObject);
  if (channel != null) {
    isGuildStageVoiceResult = channel.isGuildStageVoice();
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  let tmp2ResultResult = useCanSpeakInChannelDefault(id);
  const tmp2Result = useCanSpeakInChannelDefault;
  let tmp5Result = tmp5(4411);
  let tmp14 = tmp12;
  const tmp11 = useIsInvitedToSpeakDefault();
  if (isGuildStageVoiceResult) {
    if (!tmp2ResultResult) {
      tmp2ResultResult = tmp11;
    }
    tmp14 = tmp2ResultResult;
  }
  tmp5Result = tmp5(5126);
  let isScreenLandscape = tmp5Result.useIsScreenLandscape();
  if (isScreenLandscape) {
    isScreenLandscape = tmp5(4417).isModalOpen(ChannelCallModalDefault);
    const tmp5Result1 = tmp5(4417);
  }
  if (isScreenLandscape) {
    isScreenLandscape = tmp5(1115).isAndroid();
    const tmp5Result2 = tmp5(1115);
  }
  let num = 0;
  if (!isScreenLandscape) {
    num = useSafeAreaInsetsDefault().top;
  }
  obj = { style: null, children: null };
  const items2 = [tmp14 ? tmp.bg : tmp.bgNeutral, tmp.container];
  obj = { minHeight: RTC_PANEL_HEIGHT + num, paddingTop: num };
  items2[2] = obj;
  obj.style = items2;
  if (isScreenLandscape) {
    isScreenLandscape = closure_10(StatusBarDefault, { hidden: true });
  }
  const items3 = [isScreenLandscape];
  let tmp19 = null;
  if (isGuildStageVoiceResult) {
    const obj1 = {
      channel,
      guild,
      hasRTCConnectivity: tmp12,
      isDarkTheme: isThemeDarkResult,
      rtcConnectionState,
      remotePlatform,
    };
    tmp19 = closure_10(GlobalStageChannelStatusDefault, obj1);
  }
  items3[1] = tmp19;
  obj.children = items3;
  return closure_11(View, obj);
}
