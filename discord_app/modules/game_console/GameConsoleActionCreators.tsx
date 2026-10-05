// discord_app/modules/game_console/GameConsoleActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import AudioSettingsUtils from "../user_settings/voice/AudioSettingsUtils.tsx";
import ConsoleHandoffType from "../../../discord_common/js/shared/shared-constants/ConsoleHandoffType.tsx";
import ConsoleCommands from "../../../discord_common/js/shared/shared-constants/ConsoleCommands.tsx";
import GameConsoleAlertUtilsDefault from "GameConsoleAlertUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import SessionsStore from "../../stores/SessionsStore.tsx";
import GameConsoleStore from "GameConsoleStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let awaitingRemoteSessionInfo, body, c1, closure_3, closure_4, closure_5, error;

let c9;
let metroImportAll;
let metroImportDefault;
function disconnectRemote() {
  return obj(...arguments);
}
let obj = function _disconnectRemote() {
  obj = _asyncToGenerator(async () => {
    let intl;
    let intl2;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_0 = tmp;
            awaitingRemoteSessionInfo = awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo();
            let nonce;
            if (awaitingRemoteSessionInfo != null) {
              nonce = awaitingRemoteSessionInfo.nonce;
            }
            const obj3 = DispatcherDefault;
            obj3.dispatch({ type: "REMOTE_SESSION_DISCONNECT" });
            let type;
            if (awaitingRemoteSessionInfo != null) {
              type = awaitingRemoteSessionInfo.type;
            }
            let tmp22 = type !== constants.PLAYSTATION;
            if (tmp22) {
              let type1;
              if (awaitingRemoteSessionInfo != null) {
                type1 = awaitingRemoteSessionInfo.type;
              }
              tmp22 = type1 !== tmp21.PLAYSTATION_STAGING;
            }
            if (!tmp22) {
              let commandId;
              if (awaitingRemoteSessionInfo != null) {
                commandId = awaitingRemoteSessionInfo.commandId;
              }
              tmp22 = null == commandId;
            }
            if (!tmp22) {
              let deviceId;
              if (awaitingRemoteSessionInfo != null) {
                deviceId = awaitingRemoteSessionInfo.deviceId;
              }
              tmp22 = null == deviceId;
            }
            const items = [];
            if (!tmp22) {
              items.push(
                cancelCommand(
                  awaitingRemoteSessionInfo.type,
                  awaitingRemoteSessionInfo.deviceId,
                  awaitingRemoteSessionInfo.commandId,
                ),
              );
            }
            if (null != nonce) {
              items.push(cancelConnectRequest(nonce));
            }
            c3 = 1;
            c1 = 2;
            c4 = 1;
            const obj5 = { value: Promise.all(items), done: false };
            return obj5;
          }
        } else {
          if (1 === tmp4) {
            c3 = 0;
            const obj6 = {
              title: intl.string(closure_128_0(closure_128_2[8]).t.LNhXcL),
              body: intl2.string(closure_128_0(closure_128_2[8]).t.QnKxtP),
            };
            const show = closure_128_1(closure_128_2[7]).show;
            const tmp9 = closure_128_1(closure_128_2[7]);
            intl = closure_128_0(closure_128_2[8]).intl;
            intl2 = closure_128_0(closure_128_2[8]).intl;
            show(obj6);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp30) {
        let closure_2 = tmp30;
        if (0 === c3) {
          c4 = 3;
          throw tmp30;
        } else {
          c1 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function getConnectNonce() {
  return obj(...arguments);
}
obj = function _getConnectNonce() {
  let rTCConnectionId;
  obj = _asyncToGenerator(async () => {
    let CREATE_NEW_CALL;
    let closure_0;
    let nonce;
    let obj5;
    let obj6;
    let tmp17;
    let closure_1 = tmp;
    if (null != rTCConnectionId.getRTCConnectionId()) {
      CREATE_NEW_CALL = ConsoleHandoffType.ConsoleHandoffType.TRANSFER_EXISTING_CALL;
      tmp17 = require;
    } else {
      CREATE_NEW_CALL = ConsoleHandoffType.ConsoleHandoffType.CREATE_NEW_CALL;
      tmp17 = require;
    }
    const HTTP = tmp17(dependencyMap[11]).HTTP;
    const request = { url: constants.CONNECT_REQUEST_CREATE, body: obj5, rejectWithError: false };
    obj5 = { analytics_properties: obj6 };
    obj6 = { handoff_type: CREATE_NEW_CALL };
    await HTTP.post(request);
    if (1 === c4) {
      let c3 = 0;
      closure_1 = closure_2;
      const obj2 = closure_129_1(closure_129_2[12]);
      obj2.captureException(closure_1);
    } else if (arg0 === 1) {
      let c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c3 = 0;
      c5 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      nonce = value.body.nonce;
      c3 = 0;
    }
    return nonce;
  });
  return obj(...arguments);
};
function cancelConnectRequest(nonce) {
  const HTTP = HTTPUtils.HTTP;
  obj = { url: metroImportAll.CONNECT_REQUEST(nonce), rejectWithError: false };
  return HTTP.del(obj);
}
obj = function _fetchDevices() {
  obj = _asyncToGenerator(async (platform) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let devices;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              body = undefined;
              devices = undefined;
              const obj4 = { type: "GAME_CONSOLE_FETCH_DEVICES_START", platform };
              const obj10 = DispatcherDefault;
              obj10.dispatch(obj4);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              c5 = 2;
              c6 = 1;
              const obj6 = { url: closure_2_8.CONSOLES_DEVICES(platform), rejectWithError: false };
              const obj7 = { value: get(obj6), done: false };
              return obj7;
            }
          } else if (1 === c5) {
            c4 = 0;
            const obj8 = { type: "GAME_CONSOLE_FETCH_DEVICES_FAIL", platform, error };
            const obj5 = closure_130_1(closure_130_2[6]);
            obj5.dispatch(obj8);
            throw error;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value;
            c4 = 0;
            devices = body.body.devices;
            const obj11 = { type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS", platform, devices };
            obj = closure_130_1(closure_130_2[6]);
            obj.dispatch(obj11);
            c6 = 3;
            return { value: devices, done: true };
          }
        } catch (tmp23) {
          error = tmp23;
          if (0 === c4) {
            c6 = 3;
            throw tmp23;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _sendConnectVoiceCommand() {
  obj = _asyncToGenerator(async (arg0, deviceId, arg2, nonce) => {
    let closure_0 = arg0;
    let id = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj6;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              body = undefined;
              id = undefined;
              const obj5 = { type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START", platform: sessionType };
              const obj10 = DispatcherDefault;
              obj10.dispatch(obj5);
              c7 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = {
                url: closure_2_8.CONSOLES_DEVICES_COMMANDS(sessionType, deviceId),
                body: obj6,
                rejectWithError: false,
              };
              const post = HTTP.post;
              ({ id: obj13.channel_id, guild_id: obj13.guild_id } = id);
              c8 = 2;
              c9 = 1;
              obj6 = {
                command: ConsoleCommands.ConsoleCommands.CONNECT_VOICE,
                channel_id: null,
                guild_id: null,
                nonce,
              };
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (1 === c8) {
            c7 = 0;
            const obj9 = { type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL", platform: sessionType, error };
            const obj3 = closure_133_1(closure_133_2[6]);
            obj3.dispatch(obj9);
            throw error;
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            return { value, done: true };
          } else {
            body = value;
            c7 = 0;
            id = body.body.id;
            const obj12 = {
              type: "WAIT_FOR_REMOTE_SESSION",
              sessionType,
              nonce,
              channelId: id.id,
              deviceId,
              commandId: id,
            };
            const obj8 = closure_133_1(closure_133_2[6]);
            obj8.dispatch(obj12);
            c9 = 3;
            return { value: id, done: true };
          }
        } catch (tmp15) {
          error = tmp15;
          if (0 === c7) {
            c9 = 3;
            throw tmp15;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function cancelCommand() {
  return obj(...arguments);
}
obj = function _cancelCommand() {
  obj = _asyncToGenerator(async (platform, deviceId, commandId) => {
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              error = tmp4;
              const obj5 = { type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START", platform, deviceId, commandId };
              const obj9 = DispatcherDefault;
              obj9.dispatch(obj5);
              c6 = 1;
              const HTTP = HTTPUtils.HTTP;
              const del = HTTP.del;
              c7 = 2;
              c8 = 1;
              const obj6 = {
                url: closure_2_8.CONSOLES_DEVICES_COMMAND(platform, deviceId, commandId),
                rejectWithError: false,
              };
              const obj7 = { value: del(obj6), done: false };
              return obj7;
            }
          } else if (1 === c7) {
            c6 = 0;
            error = closure_5;
            const obj8 = { type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL", platform, deviceId, commandId, error };
            const obj4 = closure_132_1(closure_132_2[6]);
            obj4.dispatch(obj8);
            throw error;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            c6 = 0;
            const obj11 = { type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS", platform, deviceId, commandId };
            obj = closure_132_1(closure_132_2[6]);
            obj.dispatch(obj11);
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp25) {
          closure_5 = tmp25;
          if (0 === c6) {
            c8 = 3;
            throw tmp25;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _transferToPlayStation() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const id = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj8;
      function sendConnectVoiceCommand() {
        return closure_1_16(...arguments);
      }
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              closure_3 = undefined;
              c5 = 1;
              c6 = 1;
              const obj4 = { value: obj8.maybeShowPTTAlert(closure_0), done: false };
              obj8 = GameConsoleAlertUtilsDefault;
              return obj4;
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              c5 = 2;
              c6 = 1;
              const obj6 = { value: closure_132_10(), done: false };
              return obj6;
            }
          } else if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              c5 = 3;
              c6 = 1;
              const obj9 = { value: closure_132_12(), done: false };
              return obj9;
            }
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              c5 = 4;
              c6 = 1;
              const obj11 = { value: sendConnectVoiceCommand(closure_0, closure_1, id, closure_3), done: false };
              return obj11;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            closure_132_1(closure_132_2[15])(id.id, closure_0);
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp26) {
          c6 = 3;
          throw tmp26;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ AnalyticEvents: metroImportDefault, Endpoints: metroImportAll, PlatformTypes: c9 } = Constants);
let result = size.fileFinishedImporting("modules/game_console/GameConsoleActionCreators.tsx");

export const waitForSession = function waitForSession(XBOX, id, nonce) {
  obj = DispatcherDefault;
  const obj2 = { type: "WAIT_FOR_REMOTE_SESSION", sessionType: XBOX, nonce, channelId: id };
  obj.dispatch(obj2);
};
export { disconnectRemote };
export const connectToRemote = function connectToRemote(sessionId) {
  obj = DispatcherDefault;
  const obj2 = { type: "REMOTE_SESSION_CONNECT", sessionId };
  obj.dispatch(obj2);
};
export const remoteVoiceStateUpdate = function remoteVoiceStateUpdate(remoteSessionId, arg1) {
  let selfDeaf;
  let selfMute;
  ({ selfMute, selfDeaf } = arg1);
  const action = {
    type: "REMOTE_COMMAND",
    sessionId: remoteSessionId,
    payload: { type: "VOICE_STATE_UPDATE", self_mute: selfMute, self_deaf: selfDeaf },
  };
  obj = DispatcherDefault;
  obj.dispatch(action);
  const track = AnalyticsUtilsDefault.track;
  const REMOTE_COMMAND_SENT = metroImportDefault.REMOTE_COMMAND_SENT;
  AnalyticsUtilsDefault;
  const sessionById = SessionsStore.getSessionById(remoteSessionId);
  let os;
  if (sessionById != null) {
    const clientInfo = sessionById.clientInfo;
    if (clientInfo != null) {
      os = clientInfo.os;
    }
  }
  track(REMOTE_COMMAND_SENT, { command_type: "VOICE_STATE_UPDATE", remote_platform: os });
};
export const remoteDisconnect = function remoteDisconnect(remoteSessionId) {
  const action = { type: "REMOTE_COMMAND", sessionId: remoteSessionId, payload: { type: "DISCONNECT" } };
  obj = DispatcherDefault;
  obj.dispatch(action);
  const track = AnalyticsUtilsDefault.track;
  const REMOTE_COMMAND_SENT = metroImportDefault.REMOTE_COMMAND_SENT;
  AnalyticsUtilsDefault;
  const sessionById = SessionsStore.getSessionById(remoteSessionId);
  let os;
  if (sessionById != null) {
    const clientInfo = sessionById.clientInfo;
    if (clientInfo != null) {
      os = clientInfo.os;
    }
  }
  track(REMOTE_COMMAND_SENT, { command_type: "DISCONNECT", remote_platform: os });
  disconnectRemote();
};
export const remoteAudioSettingsUpdate = function remoteAudioSettingsUpdate(sessionId, id, arg2, arg3) {
  let obj2;
  obj = AudioSettingsUtils;
  const result = obj.coerceAudioContextForProto(arg2);
  if (null != result) {
    const action = { type: "REMOTE_COMMAND", sessionId, payload: obj2 };
    obj2 = { type: "AUDIO_SETTINGS_UPDATE", context: result, id };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    const merged = Object.assign(arg3);
    dispatch(action);
    const track = AnalyticsUtilsDefault.track;
    const REMOTE_COMMAND_SENT = metroImportDefault.REMOTE_COMMAND_SENT;
    AnalyticsUtilsDefault;
    const sessionById = SessionsStore.getSessionById(sessionId);
    let os;
    if (sessionById != null) {
      const clientInfo = sessionById.clientInfo;
      if (clientInfo != null) {
        os = clientInfo.os;
      }
    }
    const obj3 = { command_type: "AUDIO_SETTINGS_UPDATE", remote_platform: os };
    track(REMOTE_COMMAND_SENT, obj3);
  }
};
export { getConnectNonce };
export { cancelConnectRequest };
export const fetchDevices = function fetchDevices() {
  return obj(...arguments);
};
export const persistSelectedDeviceId = function persistSelectedDeviceId(platform, value) {
  obj = DispatcherDefault;
  const obj2 = { type: "GAME_CONSOLE_SELECT_DEVICE", platform, deviceId: value };
  obj.dispatch(obj2);
};
export { cancelCommand };
export const transferToPlayStation = function transferToPlayStation() {
  return obj(...arguments);
};
