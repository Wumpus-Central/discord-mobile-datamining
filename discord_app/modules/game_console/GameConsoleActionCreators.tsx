// discord_app/modules/game_console/GameConsoleActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import AudioSettingsUtils from "../user_settings/voice/AudioSettingsUtils.tsx";
import ConsoleHandoffType from "../../../discord_common/js/shared/shared-constants/ConsoleHandoffType.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import SessionsStore from "../../stores/SessionsStore.tsx";
import GameConsoleStore from "GameConsoleStore.tsx";

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
  await Promise.all(items);
  if (1 === tmp7) {
    c3 = 0;
    const obj7 = { title: null, body: null };
    const intl = closure_128_0(closure_128_2[8]).intl;
    obj7.title = intl.string(closure_128_0(closure_128_2[8]).t.LNhXcL);
    const intl2 = closure_128_0(closure_128_2[8]).intl;
    obj7.body = intl2.string(closure_128_0(closure_128_2[8]).t.QnKxtP);
    closure_128_1(closure_128_2[7]).show(obj7);
    c4 = 3;
    closure_128_1(closure_128_2[7]);
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c3 = 0;
  }
  return value;
};
let closure_12 = async function _getConnectNonce() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
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
          const obj4 = { value, done: true };
          return obj4;
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
          const HTTP = tmp21(1295).HTTP;
          const request = { url: constants.CONNECT_REQUEST_CREATE, body: null, rejectWithError: false };
          const obj5 = { analytics_properties: null };
          const obj6 = { handoff_type: CREATE_NEW_CALL };
          obj5.analytics_properties = obj6;
          request.body = obj5;
          HTTP.post(request);
          c4 = 2;
          c5 = 1;
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          closure_128_1 = closure_2;
          closure_129_1(closure_129_2[12]).captureException(closure_128_1);
          c5 = 3;
          const obj2 = closure_129_1(closure_129_2[12]);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          nonce = value.body.nonce;
          c3 = 0;
        }
        c3 = 0;
        c5 = 3;
        const obj = { value, done: true };
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
function cancelConnectRequest(nonce) {
  const HTTP = HTTPUtils.HTTP;
  return HTTP.del({ url: closure_1_8.CONNECT_REQUEST(nonce), rejectWithError: false });
}
let closure_14 = async function _fetchDevices() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = platform;
            closure_129_1 = undefined;
            let devices;
            const obj4 = { type: "GAME_CONSOLE_FETCH_DEVICES_START", platform };
            DispatcherDefault.dispatch(obj4);
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj6 = { url: closure_2_8.CONSOLES_DEVICES(platform), rejectWithError: false };
            c5 = 2;
            c6 = 1;
            const obj7 = { value: HTTP.get(obj6), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_3 = closure_3;
          const obj8 = { type: "GAME_CONSOLE_FETCH_DEVICES_FAIL", platform: closure_129_0, error: closure_129_3 };
          closure_130_1(closure_130_2[6]).dispatch(obj8);
          throw closure_129_3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_129_1 = value;
          c4 = 0;
          devices = closure_129_1.body.devices;
          const obj11 = { type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS", platform: closure_129_0, devices };
          closure_130_1(closure_130_2[6]).dispatch(obj11);
          c6 = 3;
          const obj12 = { value: devices, done: true };
          return obj12;
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
function cancelCommand() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_16 = async function _cancelCommand() {
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = platform;
            closure_131_1 = deviceId;
            closure_131_2 = commandId;
            const obj5 = { type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START", platform, deviceId, commandId };
            DispatcherDefault.dispatch(obj5);
            c6 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj6 = {
              url: closure_2_8.CONSOLES_DEVICES_COMMAND(platform, deviceId, commandId),
              rejectWithError: false,
            };
            c7 = 2;
            c8 = 1;
            const obj7 = { value: HTTP.del(obj6), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_131_3 = closure_5;
          const obj8 = {
            type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
            platform: closure_131_0,
            deviceId: closure_131_1,
            commandId: closure_131_2,
            error: closure_131_3,
          };
          closure_132_1(closure_132_2[6]).dispatch(obj8);
          throw closure_131_3;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          c6 = 0;
          const obj11 = {
            type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
            platform: closure_131_0,
            deviceId: closure_131_1,
            commandId: closure_131_2,
          };
          closure_132_1(closure_132_2[6]).dispatch(obj11);
          c8 = 3;
          return { value: "IconComponent", done: null };
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
const Constants = fn(1085);
({ AnalyticEvents: closure_7, Endpoints: closure_8, PlatformTypes: closure_9 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_console/GameConsoleActionCreators.tsx");

export const waitForSession = function waitForSession(XBOX, id, nonce) {
  DispatcherDefault.dispatch({ type: "WAIT_FOR_REMOTE_SESSION", sessionType: XBOX, nonce, channelId: id });
};
export { disconnectRemote };
export const connectToRemote = function connectToRemote(sessionId) {
  DispatcherDefault.dispatch({ type: "REMOTE_SESSION_CONNECT", sessionId });
};
export const remoteVoiceStateUpdate = function remoteVoiceStateUpdate(remoteSessionId, arg1) {
  ({ selfMute, selfDeaf } = arg1);
  const action = {
    type: "REMOTE_COMMAND",
    sessionId: remoteSessionId,
    payload: { type: "VOICE_STATE_UPDATE", self_mute: selfMute, self_deaf: selfDeaf },
  };
  DispatcherDefault.dispatch(action);
  const sessionById = SessionsStore.getSessionById(remoteSessionId);
  let os;
  if (sessionById != null) {
    const clientInfo = sessionById.clientInfo;
    if (clientInfo != null) {
      os = clientInfo.os;
    }
  }
  AnalyticsUtilsDefault.track(constants.REMOTE_COMMAND_SENT, {
    command_type: "VOICE_STATE_UPDATE",
    remote_platform: os,
  });
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
  const result = AudioSettingsUtils.coerceAudioContextForProto(arg2);
  if (null != result) {
    const action = { type: "REMOTE_COMMAND", sessionId, payload: null };
    const obj2 = { type: "AUDIO_SETTINGS_UPDATE", context: result, id };
    const merged = Object.assign(arg3);
    action.payload = obj2;
    DispatcherDefault.dispatch(action);
    const sessionById = SessionsStore.getSessionById(sessionId);
    let os;
    if (sessionById != null) {
      const clientInfo = sessionById.clientInfo;
      if (clientInfo != null) {
        os = clientInfo.os;
      }
    }
    const obj4 = { command_type: "AUDIO_SETTINGS_UPDATE", remote_platform: os };
    AnalyticsUtilsDefault.track(constants.REMOTE_COMMAND_SENT, obj4);
  }
};
export const getConnectNonce = function getConnectNonce() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { cancelConnectRequest };
export const fetchDevices = function fetchDevices() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const persistSelectedDeviceId = function persistSelectedDeviceId(platform, value) {
  DispatcherDefault.dispatch({ type: "GAME_CONSOLE_SELECT_DEVICE", platform, deviceId: value });
};
export { cancelCommand };
