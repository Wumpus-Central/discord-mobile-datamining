// === Module 9576: ConnectivityGlobalStatusContent ===

// Module 9576 (ConnectivityGlobalStatusContent)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useCanCurrentUserSpeakInChannelDefault from "useCanCurrentUserSpeakInChannel" /* 9472 */;
import useIsInvitedToSpeakDefault from "useIsInvitedToSpeak" /* 9568 */;
import useVoiceStateForRemoteSessionDefault from "useVoiceStateForRemoteSession" /* 9571 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "createRTCConnection" /* 4519 */;
import closure_7 from "handleUpdate" /* 4463 */;
import { RTC_PANEL_HEIGHT } from "RTC_PANEL_HEIGHT" /* 9570 */;
import { RTCConnectionStates } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

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
  let obj = _require(589);
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
  tmp5Result = tmp5(5023);
  let isScreenLandscape = tmp5Result.useIsScreenLandscape();
  if (isScreenLandscape) {
    isScreenLandscape = tmp5(4299).isModalOpen(tmp2(9447));
    const tmp5Result1 = tmp5(4299);
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
    isScreenLandscape = callback(tmp2(9451), { hidden: true });
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
    tmp19 = callback(tmp2(9577), obj1);
  }
  items3[1] = tmp19;
  obj[1] = items3;
  return closure_11(View, obj);
};