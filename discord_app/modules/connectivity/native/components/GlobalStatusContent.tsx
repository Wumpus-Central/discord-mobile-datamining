// discord_app/modules/connectivity/native/components/GlobalStatusContent.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useCanCurrentUserSpeakInChannelDefault from "../../../stage_channels/useCanSpeakInChannel.tsx";
import useIsInvitedToSpeakDefault from "../../../stage_channels/useIsInvitedToSpeak.tsx";
import useVoiceStateForRemoteSessionDefault from "../../../game_console/hooks/useVoiceStateForRemoteSession.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../stores/ChannelStore.tsx";
import closure_5 from "../../../../stores/GuildStore.tsx";
import closure_6 from "../../../../stores/RTCConnectionStore.tsx";
import closure_7 from "../../../../stores/SessionsStore.tsx";
import { RTC_PANEL_HEIGHT } from "../ConnectivityConstants.tsx";
import { RTCConnectionStates } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
noopAll;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { bgNeutral: null, bg: null, container: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
createCacheKey[2] = { paddingHorizontal: 16, alignItems: "center", justifyContent: "center" };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
const result = require("set").fileFinishedImporting("modules/connectivity/native/components/GlobalStatusContent.tsx");

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
      channelId = tmp2.channelId;
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
      str = tmp2.sessionId;
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
      let RTC_CONNECTED = closure_1_9.RTC_CONNECTED;
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
  tmp5Result = tmp5(5036);
  let isScreenLandscape = tmp5Result.useIsScreenLandscape();
  if (isScreenLandscape) {
    isScreenLandscape = tmp5(4300).isModalOpen(tmp2(9465));
    const tmp5Result1 = tmp5(4300);
  }
  if (isScreenLandscape) {
    isScreenLandscape = tmp5(500).isAndroid();
    const tmp5Result2 = tmp5(500);
  }
  let num = 0;
  if (!isScreenLandscape) {
    num = tmp2(1629)().top;
  }
  obj = { style: items2, children: null };
  items2 = [tmp14 ? tmp.bg : tmp.bgNeutral, tmp.container, ];
  obj = { minHeight: RTC_PANEL_HEIGHT + num, paddingTop: num };
  items2[2] = obj;
  if (isScreenLandscape) {
    isScreenLandscape = callback(tmp2(9469), { hidden: true });
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
    tmp19 = callback(tmp2(9595), obj1);
  }
  items3[1] = tmp19;
  obj[1] = items3;
  return closure_11(View, obj);
};