// discord_app/modules/connectivity/native/components/GlobalStatusContent.tsx
import "ChannelCallCameraPreview";
import { View } from "getIsScreenLandscape";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import createRTCConnection from "createRTCConnection";
import handleUpdate from "handleUpdate";
import { RTC_PANEL_HEIGHT } from "RTC_PANEL_HEIGHT";
import { RTCConnectionStates } from "ME";
import jsxProd from "useSafeAreaInsets";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useVoiceStateForRemoteSession } from "../../../game_console/hooks/useVoiceStateForRemoteSession.tsx";
import { useCanCurrentUserSpeakInChannel } from "../../../stage_channels/useCanSpeakInChannel.tsx";
import { useIsInvitedToSpeak } from "../../../stage_channels/useIsInvitedToSpeak.tsx";

let c10;
let unpackModuleId;
let require = arg1;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { bgNeutral: null, bg: null, container: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").unsafe_rawColors.GREEN_360 };
createCacheKey[2] = { paddingHorizontal: 16, alignItems: "center", justifyContent: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("Themes").unsafe_rawColors.GREEN_360 };
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/connectivity/native/components/GlobalStatusContent.tsx");

export default function ConnectivityGlobalStatusContent() {
  let guild;
  let remotePlatform;
  let rtcConnectionState;
  const tmp = createCacheKey();
  const tmp4 = useVoiceStateForRemoteSession();
  const require = tmp4;
  let obj = initialize;
  const items = [createRTCConnection, createGuildRecordFromRust, ensureGuildLoaded, handleUpdate];
  const items1 = [tmp4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let channelId;
    if (closure_0 != null) {
      channelId = tmp2.channelId;
    }
    if (channelId == null) {
      channelId = outer1_6.getChannelId();
    }
    const channel = outer1_4.getChannel(channelId);
    if (null != closure_0) {
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      let guildId1 = guildId;
    } else {
      guildId1 = outer1_6.getGuildId();
    }
    let str;
    const guild = outer1_5.getGuild(guildId1);
    if (closure_0 != null) {
      str = tmp2.sessionId;
    }
    if (str == null) {
      str = "";
    }
    const sessionById = outer1_7.getSessionById(str);
    let os;
    if (sessionById != null) {
      os = sessionById.clientInfo.os;
    }
    const obj = { guild, channel, rtcConnectionState: null, remotePlatform: null };
    if (null != closure_0) {
      let RTC_CONNECTED = outer1_9.RTC_CONNECTED;
    } else {
      RTC_CONNECTED = outer1_6.getState();
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
  let tmp2ResultResult = useCanCurrentUserSpeakInChannel(id);
  const tmp2Result = useCanCurrentUserSpeakInChannel;
  let tmp5Result = tmp5(4147);
  let tmp14 = tmp12;
  const tmp11 = useIsInvitedToSpeak();
  if (isGuildStageVoiceResult) {
    if (!tmp2ResultResult) {
      tmp2ResultResult = tmp11;
    }
    tmp14 = tmp2ResultResult;
  }
  tmp5Result = tmp5(4847);
  let isScreenLandscape = tmp5Result.useIsScreenLandscape();
  if (isScreenLandscape) {
    isScreenLandscape = tmp5(4152).isModalOpen(tmp2(10585));
    const tmp5Result1 = tmp5(4152);
  }
  if (isScreenLandscape) {
    isScreenLandscape = tmp5(500).isAndroid();
    const tmp5Result2 = tmp5(500);
  }
  let num = 0;
  if (!isScreenLandscape) {
    num = tmp2(1609)().top;
  }
  obj = { style: items2, children: null };
  items2 = [tmp14 ? tmp.bg : tmp.bgNeutral, tmp.container, ];
  obj = { minHeight: RTC_PANEL_HEIGHT + num, paddingTop: num };
  items2[2] = obj;
  if (isScreenLandscape) {
    isScreenLandscape = callback(tmp2(7688), { hidden: true });
  }
  const items3 = [isScreenLandscape, ];
  let tmp19 = null;
  if (isGuildStageVoiceResult) {
    const obj1 = { channel: null, guild: null, hasRTCConnectivity: null, isDarkTheme: null, rtcConnectionState: null, remotePlatform: null };
    obj1[0] = channel;
    obj1[1] = guild;
    obj1[2] = tmp12;
    obj1[3] = isThemeDarkResult;
    obj1[4] = rtcConnectionState;
    obj1[5] = remotePlatform;
    tmp19 = callback(tmp2(10706), obj1);
  }
  items3[1] = tmp19;
  obj[1] = items3;
  return closure_11(View, obj);
};