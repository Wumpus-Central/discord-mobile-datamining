// discord_app/modules/connectivity/native/components/GlobalStatusContent.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import componentDidMountDefault from "../../../status_bar/native/components/StatusBar.android.tsx";
import ChannelCallCameraPreviewDefault from "../../../video_calls/native/components/ChannelCallModal.tsx";
import useVoiceStateForRemoteSessionDefault from "../../../game_console/hooks/useVoiceStateForRemoteSession.tsx";
import useCanCurrentUserSpeakInChannelDefault from "../../../stage_channels/useCanSpeakInChannel.tsx";
import useIsInvitedToSpeakDefault from "../../../stage_channels/useIsInvitedToSpeak.tsx";
import StageChannelRaiseHandAckDefault from "../../../stage_channels/native/components/GlobalStageChannelStatus.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import createRTCConnection from "../../../../stores/RTCConnectionStore.tsx";
import handleUpdate from "../../../../stores/SessionsStore.tsx";
import { RTC_PANEL_HEIGHT } from "../ConnectivityConstants.tsx";
import { RTCConnectionStates } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
noopAll;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
createCacheKey[2] = { paddingHorizontal: 16, alignItems: "center", justifyContent: "center" };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/connectivity/native/components/GlobalStatusContent.tsx");

export default function ConnectivityGlobalStatusContent() {
  const tmp = callback2();
  const tmp4 = useVoiceStateForRemoteSessionDefault();
  const _require = tmp4;
  let obj = initialize;
  const items = [closure_6, closure_5, closure_4, closure_7];
  const items1 = [tmp4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let channelId;
    if (closure_0 != null) {
      channelId = closure_0.channelId;
    }
    if (channelId == null) {
      channelId = closure_1_6.getChannelId();
    }
    const channel = closure_1_4.getChannel(channelId);
    if (null != closure_0) {
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      let guildId1 = guildId;
    } else {
      guildId1 = closure_1_6.getGuildId();
    }
    let str;
    const guild = closure_1_5.getGuild(guildId1);
    if (closure_0 != null) {
      str = closure_0.sessionId;
    }
    if (str == null) {
      str = "";
    }
    const sessionById = closure_1_7.getSessionById(str);
    let os;
    if (sessionById != null) {
      os = sessionById.clientInfo.os;
    }
    const obj = { guild, channel, rtcConnectionState: null, remotePlatform: null };
    if (null != closure_0) {
      let RTC_CONNECTED = RTCConnectionStates.RTC_CONNECTED;
    } else {
      RTC_CONNECTED = closure_1_6.getState();
    }
    obj[2] = RTC_CONNECTED;
    obj[3] = os;
    return obj;
  }, items1);
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
  let tmp2ResultResult = useCanCurrentUserSpeakInChannelDefault(id);
  const tmp2Result = useCanCurrentUserSpeakInChannelDefault;
  let tmp5Result = tmp5(1363);
  let tmp14 = tmp12;
  const tmp11 = useIsInvitedToSpeakDefault();
  if (isGuildStageVoiceResult) {
    if (!tmp2ResultResult) {
      tmp2ResultResult = tmp11;
    }
    tmp14 = tmp2ResultResult;
  }
  tmp5Result = tmp5(8944);
  let isScreenLandscape = tmp5Result.useIsScreenLandscape();
  if (isScreenLandscape) {
    isScreenLandscape = tmp5(4229).isModalOpen(ChannelCallCameraPreviewDefault);
    const tmp5Result1 = tmp5(4229);
  }
  if (isScreenLandscape) {
    isScreenLandscape = tmp5(500).isAndroid();
    const tmp5Result2 = tmp5(500);
  }
  let num = 0;
  if (!isScreenLandscape) {
    num = useSafeAreaInsetsDefault().top;
  }
  const items2 = [tmp14 ? tmp.bg : tmp.bgNeutral, tmp.container, ];
  obj = { minHeight: RTC_PANEL_HEIGHT + num, paddingTop: num };
  items2[2] = obj;
  if (isScreenLandscape) {
    isScreenLandscape = callback(componentDidMountDefault, { hidden: true });
  }
  const items3 = [isScreenLandscape, ];
  let tmp19 = null;
  if (isGuildStageVoiceResult) {
    obj1 = { channel: null, guild: null, hasRTCConnectivity: null, isDarkTheme: null, rtcConnectionState: null, remotePlatform: null };
    obj1[0] = channel;
    obj1[1] = guild;
    obj1[2] = tmp12;
    obj1[3] = isThemeDarkResult;
    obj1[4] = rtcConnectionState;
    obj1[5] = remotePlatform;
    tmp19 = callback(StageChannelRaiseHandAckDefault, obj1);
  }
  items3[1] = tmp19;
  obj[1] = items3;
  return callback(View, obj);
};