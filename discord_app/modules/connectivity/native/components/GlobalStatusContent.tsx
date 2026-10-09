// === Module 10989: GlobalStatusContent ===

// Module 10989 (GlobalStatusContent)
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import useThemeDefault from "useTheme" /* 4992 */;
import StatusBarDefault from "StatusBar" /* 10327 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 10815 */;
import useCanSpeakInChannelDefault from "useCanSpeakInChannel" /* 10837 */;
import useIsInvitedToSpeakDefault from "useIsInvitedToSpeak" /* 10982 */;
import useVoiceStateForRemoteSessionDefault from "useVoiceStateForRemoteSession" /* 10985 */;
import GlobalStageChannelStatusDefault from "GlobalStageChannelStatus" /* 10990 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;
import SessionsStore from "SessionsStore" /* 5111 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const RTC_PANEL_HEIGHT = fn(10984).RTC_PANEL_HEIGHT;
const RTCConnectionStates = fn(1085).RTCConnectionStates;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { bgNeutral: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, bg: null, container: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.bg = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj2.container = { paddingHorizontal: 16, alignItems: "center", justifyContent: "center" };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/connectivity/native/components/GlobalStatusContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectivityGlobalStatusContent() {
  const cResult = require("c").c(33);
  const tmp4 = closure_12();
  const tmp6 = useVoiceStateForRemoteSessionDefault();
  _require = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore, GuildStore, ChannelStore, SessionsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp6) {
    const fn = function f() {
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
    };
    const items1 = [tmp6];
    cResult[1] = tmp6;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp13 = items1;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  let obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(first, tmp12, tmp13);
  ({ guild, channel, rtcConnectionState, remotePlatform } = stateFromStoresObject);
  if (cResult[4] !== channel) {
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    cResult[4] = channel;
    cResult[5] = isGuildStageVoiceResult;
    let tmp15 = isGuildStageVoiceResult;
  } else {
    tmp15 = cResult[5];
  }
  let id;
  const tmpResult = require("initialize");
  if (channel != null) {
    id = channel.id;
  }
  let tmp5ResultResult = useCanSpeakInChannelDefault(id);
  let tmp22 = null != channel;
  const tmp5Result = useCanSpeakInChannelDefault;
  const tmp23 = useThemeDefault();
  if (cResult[6] !== tmp23) {
    const isThemeDarkResult = tmp(4930).isThemeDark(tmp23);
    cResult[6] = tmp23;
    cResult[7] = isThemeDarkResult;
    let tmp24 = isThemeDarkResult;
    const tmpResult5 = tmp(4930);
  } else {
    tmp24 = cResult[7];
  }
  if (cResult[8] === channel) {
    if (cResult[9] === guild) {
      if (cResult[10] === tmp22) {
        if (cResult[11] === tmp24) {
          if (cResult[12] === remotePlatform) {
            if (cResult[13] === rtcConnectionState) {
              let tmp26 = cResult[14];
            }
            if (tmp15) {
              if (!tmp5ResultResult) {
                tmp5ResultResult = tmp21;
              }
              tmp22 = tmp5ResultResult;
            }
            const isScreenLandscape = tmp(8310).useIsScreenLandscape();
            if (cResult[15] !== isScreenLandscape) {
              let isModalOpenResult = isScreenLandscape;
              if (isScreenLandscape) {
                isModalOpenResult = tmp(4937).isModalOpen(ChannelCallModalDefault);
                const tmpResult7 = tmp(4937);
              }
              if (isModalOpenResult) {
                isModalOpenResult = tmp(1382).isAndroid();
                const tmpResult8 = tmp(1382);
              }
              cResult[15] = isScreenLandscape;
              cResult[16] = isModalOpenResult;
              let tmp28 = isModalOpenResult;
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
              if (cResult[18] === num11) {
                let tmp33 = cResult[19];
              }
              if (cResult[20] === tmp4.container) {
                if (cResult[21] === tmp33) {
                  if (cResult[22] === tmp30) {
                    let tmp34 = cResult[23];
                  }
                  if (cResult[24] !== tmp28) {
                    let tmp36 = tmp28;
                    if (tmp28) {
                      tmp36 = closure_10(StatusBarDefault, { hidden: true });
                    }
                    cResult[24] = tmp28;
                    cResult[25] = tmp36;
                    let tmp35 = tmp36;
                  } else {
                    tmp35 = cResult[25];
                  }
                  if (cResult[26] === tmp15) {
                    if (cResult[27] === tmp26) {
                      let tmp38 = cResult[28];
                    }
                    if (cResult[29] === tmp34) {
                      if (cResult[30] === tmp35) {
                        if (cResult[31] === tmp38) {
                          let tmp45 = cResult[32];
                        }
                        return tmp45;
                      }
                    }
                    const obj2 = { style: tmp34, children: null };
                    const items2 = [tmp35, tmp38];
                    obj2.children = items2;
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
                    const merged = Object.assign(tmp26);
                    tmp39 = closure_10(GlobalStageChannelStatusDefault, obj3);
                    const tmp5Result2 = GlobalStageChannelStatusDefault;
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
            const tmpResult6 = tmp(8310);
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
  tmp21 = useIsInvitedToSpeakDefault();
}) : (function ConnectivityGlobalStatusContent() {
  const tmp = closure_12();
  const tmp4 = useVoiceStateForRemoteSessionDefault();
  _require = tmp4;
  const items = [RTCConnectionStore, GuildStore, ChannelStore, SessionsStore];
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
    isScreenLandscape = tmp5(4937).isModalOpen(ChannelCallModalDefault);
    const tmp5Result5 = tmp5(4937);
  }
  if (isScreenLandscape) {
    isScreenLandscape = tmp5(1382).isAndroid();
    const tmp5Result6 = tmp5(1382);
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
});