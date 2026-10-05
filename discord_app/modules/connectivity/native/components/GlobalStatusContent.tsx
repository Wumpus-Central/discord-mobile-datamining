// === Module 9613: GlobalStatusContent ===

// Module 9613 (GlobalStatusContent)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import useThemeDefault from "useTheme" /* 4791 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9056 */;
import StatusBarDefault from "StatusBar" /* 9060 */;
import useCanSpeakInChannelDefault from "useCanSpeakInChannel" /* 9082 */;
import useVoiceStateForRemoteSessionDefault from "useVoiceStateForRemoteSession" /* 9445 */;
import useIsInvitedToSpeakDefault from "useIsInvitedToSpeak" /* 9606 */;
import ConnectivityConstants from "ConnectivityConstants" /* 9608 */;
import GlobalStageChannelStatusDefault from "GlobalStageChannelStatus" /* 9614 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import SessionsStore from "SessionsStore" /* 4908 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
const RTC_PANEL_HEIGHT = ConnectivityConstants.RTC_PANEL_HEIGHT;
const RTCConnectionStates = Constants.RTCConnectionStates;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { bgNeutral: obj2, bg: obj3, container: { paddingHorizontal: 16, alignItems: "center", justifyContent: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
let closure_12 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let channel;
  let closure_0;
  let first;
  let guild;
  let items2;
  let remotePlatform;
  let rtcConnectionState;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp24;
  let obj = require("react");
  const cResult = obj.c(33);
  const tmp4 = closure_12();
  const tmp6 = useVoiceStateForRemoteSessionDefault();
  _require = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore, GuildStore, ChannelStore, SessionsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp6) {
    const fn = function f() {
      let RTC_CONNECTED;
      let guildId1;
      let channelId;
      const getChannel = ChannelStore.getChannel;
      if (closure_0 != null) {
        channelId = closure_0.channelId;
      }
      if (channelId == null) {
        channelId = RTCConnectionStore.getChannelId();
      }
      const channel = getChannel(channelId);
      if (null != closure_0) {
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        guildId1 = guildId;
      } else {
        guildId1 = RTCConnectionStore.getGuildId();
      }
      let str;
      const guild = GuildStore.getGuild(guildId1);
      const getSessionById = SessionsStore.getSessionById;
      if (closure_0 != null) {
        str = closure_0.sessionId;
      }
      if (str == null) {
        str = "";
      }
      const sessionById = getSessionById(str);
      let os;
      if (sessionById != null) {
        os = sessionById.clientInfo.os;
      }
      const obj = { guild, channel, rtcConnectionState: RTC_CONNECTED, remotePlatform: os };
      if (null != closure_0) {
        RTC_CONNECTED = RTCConnectionStates.RTC_CONNECTED;
      } else {
        RTC_CONNECTED = RTCConnectionStore.getState();
      }
      return obj;
    };
    const items1 = [tmp6];
    cResult[1] = tmp6;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp13 = items1;
    tmp12 = fn;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmpResult = require("get initialized");
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp12, tmp13);
  ({ guild, channel, rtcConnectionState, remotePlatform } = stateFromStoresObject);
  if (cResult[4] !== channel) {
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    cResult[4] = channel;
    cResult[5] = isGuildStageVoiceResult;
    tmp15 = isGuildStageVoiceResult;
  } else {
    tmp15 = cResult[5];
  }
  let id;
  const tmp5Result = useCanSpeakInChannelDefault;
  if (channel != null) {
    id = channel.id;
  }
  let tmp5ResultResult = tmp5Result(id);
  let tmp22 = null != channel;
  const tmp21 = useIsInvitedToSpeakDefault();
  const tmp23 = useThemeDefault();
  if (cResult[6] !== tmp23) {
    const tmpResult5 = require("shared");
    const isThemeDarkResult = tmpResult5.isThemeDark(tmp23);
    cResult[6] = tmp23;
    cResult[7] = isThemeDarkResult;
    tmp24 = isThemeDarkResult;
  } else {
    tmp24 = cResult[7];
  }
  if (cResult[8] === channel) {
    if (cResult[9] === guild) {
      if (cResult[10] === tmp22) {
        if (cResult[11] === tmp24) {
          if (cResult[12] === remotePlatform) {
            let tmp26;
            let tmp28;
            if (cResult[13] === rtcConnectionState) {
              tmp26 = cResult[14];
            }
            if (tmp15) {
              if (!tmp5ResultResult) {
                tmp5ResultResult = tmp21;
              }
              tmp22 = tmp5ResultResult;
            }
            const tmpResult6 = require("useIsScreenLandscape");
            const isScreenLandscape = tmpResult6.useIsScreenLandscape();
            if (cResult[15] !== isScreenLandscape) {
              let isModalOpenResult = isScreenLandscape;
              if (isModalOpenResult) {
                const tmpResult7 = require("NavigationRouteUtils");
                isModalOpenResult = tmpResult7.isModalOpen(ChannelCallModalDefault);
              }
              if (isModalOpenResult) {
                const tmpResult8 = require("PlatformUtils");
                isModalOpenResult = tmpResult8.isAndroid();
              }
              cResult[15] = isScreenLandscape;
              cResult[16] = isModalOpenResult;
              tmp28 = isModalOpenResult;
            } else {
              tmp28 = cResult[16];
            }
            let num11 = 0;
            if (!tmp28) {
              num11 = useSafeAreaInsetsDefault().top;
            }
            const tmp30 = tmp22 ? tmp4.bg : tmp4.bgNeutral;
            const sum = RTC_PANEL_HEIGHT + num11;
            if (cResult[17] === sum) {
              let tmp33;
              if (cResult[18] === num11) {
                tmp33 = cResult[19];
              }
              if (cResult[20] === tmp4.container) {
                if (cResult[21] === tmp33) {
                  let tmp34;
                  let tmp35;
                  if (cResult[22] === tmp30) {
                    tmp34 = cResult[23];
                  }
                  if (cResult[24] !== tmp28) {
                    const tmp36 = tmp28 && closure_10(StatusBarDefault, { hidden: true });
                    cResult[24] = tmp28;
                    cResult[25] = tmp36;
                    tmp35 = tmp36;
                  } else {
                    tmp35 = cResult[25];
                  }
                  if (cResult[26] === tmp15) {
                    let tmp38;
                    if (cResult[27] === tmp26) {
                      tmp38 = cResult[28];
                    }
                    if (cResult[29] === tmp34) {
                      if (cResult[30] === tmp35) {
                        let tmp45;
                        if (cResult[31] === tmp38) {
                          tmp45 = cResult[32];
                        }
                        return tmp45;
                      }
                    }
                    const obj2 = { style: tmp34, children: items2 };
                    items2 = [tmp35, tmp38];
                    const tmp48 = closure_11(View, obj2);
                    cResult[29] = tmp34;
                    cResult[30] = tmp35;
                    cResult[31] = tmp38;
                    cResult[32] = tmp48;
                    tmp45 = tmp48;
                  }
                  let tmp39 = null;
                  if (tmp15) {
                    const obj3 = {};
                    const tmp5Result2 = GlobalStageChannelStatusDefault;
                    const merged = Object.assign(tmp26);
                    tmp39 = closure_10(tmp5Result2, obj3);
                  }
                  cResult[26] = tmp15;
                  cResult[27] = tmp26;
                  cResult[28] = tmp39;
                  tmp38 = tmp39;
                }
              }
              const items3 = [tmp30, tmp4.container, tmp33];
              cResult[20] = tmp4.container;
              cResult[21] = tmp33;
              cResult[22] = tmp30;
              cResult[23] = items3;
              tmp34 = items3;
            }
            const obj4 = { minHeight: sum, paddingTop: num11 };
            cResult[17] = sum;
            cResult[18] = num11;
            cResult[19] = obj4;
            tmp33 = obj4;
          }
        }
      }
    }
  }
  const obj5 = { channel, guild, hasRTCConnectivity: tmp22, isDarkTheme: tmp24, rtcConnectionState, remotePlatform };
  cResult[8] = channel;
  cResult[9] = guild;
  cResult[10] = tmp22;
  cResult[11] = tmp24;
  cResult[12] = remotePlatform;
  cResult[13] = rtcConnectionState;
  cResult[14] = obj5;
  tmp26 = obj5;
}) : (() => {
  let closure_0;
  let guild;
  let items2;
  let items3;
  let remotePlatform;
  let rtcConnectionState;
  const tmp = closure_12();
  const tmp4 = useVoiceStateForRemoteSessionDefault();
  _require = tmp4;
  let obj = require("get initialized");
  const items = [RTCConnectionStore, GuildStore, ChannelStore, SessionsStore];
  const items1 = [tmp4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let RTC_CONNECTED;
    let guildId1;
    let channelId;
    const getChannel = ChannelStore.getChannel;
    if (closure_0 != null) {
      channelId = closure_0.channelId;
    }
    if (channelId == null) {
      channelId = RTCConnectionStore.getChannelId();
    }
    const channel = getChannel(channelId);
    if (null != closure_0) {
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      guildId1 = guildId;
    } else {
      guildId1 = RTCConnectionStore.getGuildId();
    }
    let str;
    const guild = GuildStore.getGuild(guildId1);
    const getSessionById = SessionsStore.getSessionById;
    if (closure_0 != null) {
      str = closure_0.sessionId;
    }
    if (str == null) {
      str = "";
    }
    const sessionById = getSessionById(str);
    let os;
    if (sessionById != null) {
      os = sessionById.clientInfo.os;
    }
    const obj = { guild, channel, rtcConnectionState: RTC_CONNECTED, remotePlatform: os };
    if (null != closure_0) {
      RTC_CONNECTED = RTCConnectionStates.RTC_CONNECTED;
    } else {
      RTC_CONNECTED = RTCConnectionStore.getState();
    }
    return obj;
  }, items1);
  let channel = stateFromStoresObject.channel;
  let isGuildStageVoiceResult;
  ({ guild, rtcConnectionState, remotePlatform } = stateFromStoresObject);
  if (channel != null) {
    isGuildStageVoiceResult = channel.isGuildStageVoice();
  }
  let id;
  const tmp2Result = useCanSpeakInChannelDefault;
  if (channel != null) {
    id = channel.id;
  }
  let tmp2ResultResult = tmp2Result(id);
  let tmp14 = tmp12;
  const tmp11 = useIsInvitedToSpeakDefault();
  const tmp5Result = require("shared");
  const isThemeDarkResult = tmp5Result.isThemeDark(useThemeDefault());
  if (isGuildStageVoiceResult) {
    if (!tmp2ResultResult) {
      tmp2ResultResult = tmp11;
    }
    tmp14 = tmp2ResultResult;
  }
  const tmp5Result4 = require("useIsScreenLandscape");
  let isScreenLandscape = tmp5Result4.useIsScreenLandscape();
  if (isScreenLandscape) {
    const tmp5Result5 = require("NavigationRouteUtils");
    isScreenLandscape = tmp5Result5.isModalOpen(ChannelCallModalDefault);
  }
  if (isScreenLandscape) {
    const tmp5Result6 = require("PlatformUtils");
    isScreenLandscape = tmp5Result6.isAndroid();
  }
  let num = 0;
  if (!isScreenLandscape) {
    num = useSafeAreaInsetsDefault().top;
  }
  const obj2 = { style: items2, children: items3 };
  items2 = [tmp14 ? tmp.bg : tmp.bgNeutral, tmp.container, ];
  const obj3 = { minHeight: RTC_PANEL_HEIGHT + num, paddingTop: num };
  items2[2] = obj3;
  if (isScreenLandscape) {
    isScreenLandscape = closure_10(StatusBarDefault, { hidden: true });
  }
  items3 = [isScreenLandscape, ];
  let tmp19 = null;
  if (isGuildStageVoiceResult) {
    const obj4 = { channel, guild, hasRTCConnectivity: null != channel, isDarkTheme: isThemeDarkResult, rtcConnectionState, remotePlatform };
    tmp19 = closure_10(GlobalStageChannelStatusDefault, obj4);
  }
  items3[1] = tmp19;
  return closure_11(View, obj2);
});
const result = size.fileFinishedImporting("modules/connectivity/native/components/GlobalStatusContent.tsx");

export default tmp5;