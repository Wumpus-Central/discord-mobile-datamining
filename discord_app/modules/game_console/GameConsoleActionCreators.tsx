// === Module 9448: GameConsoleActionCreators ===

// Module 9448 (GameConsoleActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import AudioSettingsUtils from "AudioSettingsUtils" /* 9092 */;
import ConsoleHandoffType from "ConsoleHandoffType" /* 9449 */;
import ConsoleCommands from "ConsoleCommands" /* 9450 */;
import GameConsoleAlertUtilsDefault from "GameConsoleAlertUtils" /* 9451 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import SessionsStore from "SessionsStore" /* 4578 */;
import GameConsoleStore from "GameConsoleStore" /* 4577 */;

require = fn;
function disconnectRemote() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _disconnectRemote() {
  closure_0 = tmp3;
  awaitingRemoteSessionInfo = awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo();
  if (awaitingRemoteSessionInfo != null) {
    const nonce = awaitingRemoteSessionInfo.nonce;
  }
  DispatcherDefault.dispatch({ type: "REMOTE_SESSION_DISCONNECT" });
  if (awaitingRemoteSessionInfo != null) {
    const type = awaitingRemoteSessionInfo.type;
  }
  let tmp24 = type !== constants.PLAYSTATION;
  if (tmp24) {
    let type1;
    if (awaitingRemoteSessionInfo != null) {
      type1 = awaitingRemoteSessionInfo.type;
    }
    tmp24 = type1 !== tmp23.PLAYSTATION_STAGING;
  }
  if (!tmp24) {
    let commandId;
    if (awaitingRemoteSessionInfo != null) {
      commandId = awaitingRemoteSessionInfo.commandId;
    }
    tmp24 = null == commandId;
  }
  if (!tmp24) {
    let deviceId;
    if (awaitingRemoteSessionInfo != null) {
      deviceId = awaitingRemoteSessionInfo.deviceId;
    }
    tmp24 = null == deviceId;
  }
  const items = [];
  if (!tmp24) {
    items.push(cancelCommand(awaitingRemoteSessionInfo.type, awaitingRemoteSessionInfo.deviceId, awaitingRemoteSessionInfo.commandId));
  }
  if (null != nonce) {
    items.push(cancelConnectRequest(nonce));
  }
  await Promise.all(items);
  if (1 === tmp7) {
    c3 = 0;
    const obj2 = { title: null, body: null };
    const intl = closure_128_0(closure_128_2[8]).intl;
    obj2.title = intl.string(closure_128_0(closure_128_2[8]).t.LNhXcL);
    const intl2 = closure_128_0(closure_128_2[8]).intl;
    obj2.body = intl2.string(closure_128_0(closure_128_2[8]).t.QnKxtP);
    closure_128_1(closure_128_2[7]).show(obj2);
    c4 = 3;
    closure_128_1(closure_128_2[7]);
  } else if (arg0 === 1) {
    c4 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    c3 = 0;
  }
  return arg1;
};
function getConnectNonce() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _getConnectNonce(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          let nonce;
          c3 = 1;
          if (null != rTCConnectionId.getRTCConnectionId()) {
            let CREATE_NEW_CALL = ConsoleHandoffType.ConsoleHandoffType.TRANSFER_EXISTING_CALL;
            let tmp21 = require;
          } else {
            CREATE_NEW_CALL = ConsoleHandoffType.ConsoleHandoffType.CREATE_NEW_CALL;
            tmp21 = require;
          }
          const HTTP = tmp21(1272).HTTP;
          const request = { url: constants.CONNECT_REQUEST_CREATE, body: null, rejectWithError: false };
          let obj1 = { analytics_properties: null };
          const obj2 = { handoff_type: CREATE_NEW_CALL };
          obj1.analytics_properties = obj2;
          request.body = obj1;
          HTTP.post(request);
          c4 = 2;
          c5 = 1;
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          closure_128_1 = closure_2;
          obj1 = closure_129_1(closure_129_2[12]);
          obj1.captureException(closure_128_1);
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          nonce = value.body.nonce;
          c3 = 0;
        }
        c3 = 0;
        c5 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp27) {
      closure_2 = tmp27;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp27;
      } else {
        c4 = tmp;
      }
    }
  }
};
function cancelConnectRequest(arg0) {
  const HTTP = HTTPUtils.HTTP;
  return HTTP.del({ url: React6.CONNECT_REQUEST(arg0), rejectWithError: false });
}
let closure_15 = async function _fetchDevices(platform) {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = platform;
            closure_129_1 = undefined;
            let devices;
            const obj1 = { type: "GAME_CONSOLE_FETCH_DEVICES_START", platform };
            DispatcherDefault.dispatch(obj1);
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj2 = { url: closure_2_8.CONSOLES_DEVICES(platform), rejectWithError: false };
            c5 = 2;
            c6 = 1;
            const obj3 = { value: HTTP.get(obj2), done: false };
            return obj3;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_3 = closure_3;
          let obj4 = closure_130_1(closure_130_2[6]);
          obj4 = { type: "GAME_CONSOLE_FETCH_DEVICES_FAIL", platform: closure_129_0, error: closure_129_3 };
          obj4.dispatch(obj4);
          throw closure_129_3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_129_1 = value;
          c4 = 0;
          devices = closure_129_1.body.devices;
          obj = closure_130_1(closure_130_2[6]);
          const obj6 = { type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS", platform: closure_129_0, devices };
          obj.dispatch(obj6);
          c6 = 3;
          const obj7 = { value: devices, done: true };
          return obj7;
        }
      } catch (tmp26) {
        closure_3 = tmp26;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp26;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
let closure_16 = async function _sendConnectVoiceCommand(platform, arg1, arg2, nonce) {
  closure_1 = arg1;
  closure_2 = arg2;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = tmp3;
            closure_4 = tmp7;
            closure_132_0 = platform;
            closure_132_1 = closure_1;
            closure_132_2 = closure_2;
            closure_132_3 = nonce;
            closure_132_4 = undefined;
            let id;
            const obj1 = { type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START", platform };
            DispatcherDefault.dispatch(obj1);
            c7 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: closure_2_8.CONSOLES_DEVICES_COMMANDS(platform, closure_1), body: null, rejectWithError: false };
            let obj2 = { command: ConsoleCommands.ConsoleCommands.CONNECT_VOICE, channel_id: null, guild_id: null, nonce: null };
            ({ id: obj13.channel_id, guild_id: obj13.guild_id } = closure_2);
            obj2.nonce = nonce;
            request.body = obj2;
            c8 = 2;
            c9 = 1;
            const obj3 = { value: HTTP.post(request), done: false };
            return obj3;
          }
        } else if (1 === tmp7) {
          c7 = 0;
          closure_132_6 = closure_6;
          obj2 = closure_133_1(closure_133_2[6]);
          const obj4 = { type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL", platform: closure_132_0, error: closure_132_6 };
          obj2.dispatch(obj4);
          throw closure_132_6;
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_132_4 = value;
          c7 = 0;
          id = closure_132_4.body.id;
          const obj6 = { type: "WAIT_FOR_REMOTE_SESSION", sessionType: closure_132_0, nonce: closure_132_3, channelId: closure_132_2.id, deviceId: closure_132_1, commandId: id };
          closure_133_1(closure_133_2[6]).dispatch(obj6);
          c9 = 3;
          obj = { value: id, done: true };
          return obj;
        }
      } catch (tmp18) {
        closure_6 = tmp18;
        if (tmp4 === c7) {
          c9 = tmp2;
          throw tmp18;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
};
function cancelCommand() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _cancelCommand(platform, deviceId, commandId) {
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = platform;
            closure_131_1 = deviceId;
            closure_131_2 = commandId;
            const obj1 = { type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START", platform, deviceId, commandId };
            DispatcherDefault.dispatch(obj1);
            c6 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj2 = { url: closure_2_8.CONSOLES_DEVICES_COMMAND(platform, deviceId, commandId), rejectWithError: false };
            c7 = 2;
            c8 = 1;
            let obj3 = { value: HTTP.del(obj2), done: false };
            return obj3;
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_131_3 = closure_5;
          obj3 = closure_132_1(closure_132_2[6]);
          const obj4 = { type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL", platform: closure_131_0, deviceId: closure_131_1, commandId: closure_131_2, error: closure_131_3 };
          obj3.dispatch(obj4);
          throw closure_131_3;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c6 = 0;
          obj = closure_132_1(closure_132_2[6]);
          const obj6 = { type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS", platform: closure_131_0, deviceId: closure_131_1, commandId: closure_131_2 };
          obj.dispatch(obj6);
          c8 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp28) {
        closure_5 = tmp28;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp28;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
let closure_19 = async function _transferToPlayStation(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = closure_2;
          closure_131_3 = undefined;
          let obj7 = GameConsoleAlertUtilsDefault;
          c5 = 1;
          c6 = 1;
          const obj1 = { value: obj7.maybeShowPTTAlert(closure_0), done: false };
          return obj1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          c5 = 2;
          c6 = 1;
          const obj3 = { value: closure_132_10(), done: false };
          return obj3;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c5 = 3;
          c6 = 1;
          const obj5 = { value: closure_132_12(), done: false };
          return obj5;
        }
      } else if (3 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_131_3 = value;
          c5 = 4;
          c6 = 1;
          obj7 = {
            value: (function sendConnectVoiceCommand() {
                      const self = this;
                      const apply = closure_1_16.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(closure_131_0, closure_131_1, closure_131_2, closure_131_3),
            done: false
          };
          return obj7;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_132_1(closure_132_2[15])(closure_131_2.id, closure_131_0);
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp27) {
      c6 = tmp;
      throw tmp27;
    }
  }
};
const Constants = fn(1074);
({ AnalyticEvents: closure_7, Endpoints: closure_8, PlatformTypes: closure_9 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_console/GameConsoleActionCreators.tsx");

export const waitForSession = function waitForSession(XBOX, id, nonce) {
  const obj = { type: "WAIT_FOR_REMOTE_SESSION", sessionType: XBOX, nonce, channelId: id };
  obj.dispatch(obj);
};
export { disconnectRemote };
export const connectToRemote = function connectToRemote(sessionId) {
  const obj = { type: "REMOTE_SESSION_CONNECT", sessionId };
  obj.dispatch(obj);
};
export const remoteVoiceStateUpdate = function remoteVoiceStateUpdate(remoteSessionId, arg1) {
  ({ selfMute, selfDeaf } = arg1);
  const action = { type: "REMOTE_COMMAND", sessionId: remoteSessionId, payload: { type: "VOICE_STATE_UPDATE", self_mute: selfMute, self_deaf: selfDeaf } };
  DispatcherDefault.dispatch(action);
  const sessionById = SessionsStore.getSessionById(remoteSessionId);
  let os;
  if (sessionById != null) {
    const clientInfo = sessionById.clientInfo;
    if (clientInfo != null) {
      os = clientInfo.os;
    }
  }
  AnalyticsUtilsDefault.track(constants.REMOTE_COMMAND_SENT, { command_type: "VOICE_STATE_UPDATE", remote_platform: os });
};
export const remoteDisconnect = function remoteDisconnect(remoteSessionId) {
  const action = { type: "REMOTE_COMMAND", sessionId: remoteSessionId, payload: { type: "DISCONNECT" } };
  DispatcherDefault.dispatch(action);
  const sessionById = SessionsStore.getSessionById(remoteSessionId);
  let os;
  if (sessionById != null) {
    const clientInfo = sessionById.clientInfo;
    if (clientInfo != null) {
      os = clientInfo.os;
    }
  }
  AnalyticsUtilsDefault.track(constants.REMOTE_COMMAND_SENT, { command_type: "DISCONNECT", remote_platform: os });
  disconnectRemote();
};
export const remoteAudioSettingsUpdate = function remoteAudioSettingsUpdate(sessionId, id, arg2, arg3) {
  let obj = AudioSettingsUtils;
  const result = obj.coerceAudioContextForProto(arg2);
  if (null != result) {
    const action = { type: "REMOTE_COMMAND", sessionId, payload: null };
    obj = { type: "AUDIO_SETTINGS_UPDATE", context: result, id };
    const merged = Object.assign(arg3);
    action.payload = obj;
    DispatcherDefault.dispatch(action);
    const sessionById = SessionsStore.getSessionById(sessionId);
    let os;
    if (sessionById != null) {
      const clientInfo = sessionById.clientInfo;
      if (clientInfo != null) {
        os = clientInfo.os;
      }
    }
    obj = { command_type: "AUDIO_SETTINGS_UPDATE", remote_platform: os };
    AnalyticsUtilsDefault.track(constants.REMOTE_COMMAND_SENT, obj);
  }
};
export { getConnectNonce };
export { cancelConnectRequest };
export const fetchDevices = function fetchDevices() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const persistSelectedDeviceId = function persistSelectedDeviceId(platform, value) {
  const obj = { type: "GAME_CONSOLE_SELECT_DEVICE", platform, deviceId: value };
  obj.dispatch(obj);
};
export { cancelCommand };
export const transferToPlayStation = function transferToPlayStation() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};