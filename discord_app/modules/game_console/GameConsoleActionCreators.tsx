// discord_app/modules/game_console/GameConsoleActionCreators.tsx
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import snapVolumeToDefault from "../user_settings/voice/AudioSettingsUtils.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../stores/RTCConnectionStore.tsx";
import closure_5 from "../../stores/SessionsStore.tsx";
import closure_6 from "GameConsoleStore.tsx";
import ME from "../../Constants.tsx";

require = arg1;
function disconnectRemote() {
  const self = this;
  const apply = _disconnectRemote.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _disconnectRemote() {
  const self = this;
  const tmp = callback(function* () {
    const callback = tmp3;
    const awaitingRemoteSessionInfo = closure_1_6.getAwaitingRemoteSessionInfo();
    if (awaitingRemoteSessionInfo != null) {
      const nonce = awaitingRemoteSessionInfo.nonce;
    }
    v0(closure_1_2[6]).dispatch({ type: "REMOTE_SESSION_DISCONNECT" });
    if (awaitingRemoteSessionInfo != null) {
      const type = awaitingRemoteSessionInfo.type;
    }
    let tmp24 = type !== closure_1_9.PLAYSTATION;
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
        closure_1_17(
          awaitingRemoteSessionInfo.type,
          awaitingRemoteSessionInfo.deviceId,
          awaitingRemoteSessionInfo.commandId,
        ),
      );
    }
    if (null != nonce) {
      items.push(closure_1_14(nonce));
    }
    c3 = 1;
    yield Promise.all(items);
    if (1 === tmp7) {
      c3 = 0;
      obj1 = v0(4857);
      const obj2 = { title: null, body: null };
      const intl = callback(1233).intl;
      obj2[0] = intl.string(callback(1233).t.LNhXcL);
      const intl2 = callback(1233).intl;
      obj2[1] = intl2.string(callback(1233).t.QnKxtP);
      obj1.show(obj2);
      c4 = 3;
    } else if (arg0 === 1) {
      c4 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      c3 = 0;
    }
    c3 = 0;
    return arg1;
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getConnectNonce() {
  const self = this;
  const apply = _getConnectNonce.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getConnectNonce() {
  const self = this;
  const tmp = callback(function* () {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === rTCConnectionId) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let callback = tmp3;
            let nonce = tmp7;
            nonce = undefined;
            c3 = 1;
            if (null != rTCConnectionId.getRTCConnectionId()) {
              let CREATE_NEW_CALL = closure_1_0(closure_1_2[10]).ConsoleHandoffType.TRANSFER_EXISTING_CALL;
              let tmp21 = closure_1_0;
            } else {
              CREATE_NEW_CALL = closure_1_0(closure_1_2[10]).ConsoleHandoffType.CREATE_NEW_CALL;
              tmp21 = closure_1_0;
            }
            const HTTP = tmp21(closure_1_2[11]).HTTP;
            obj1 = { url: null, body: null, rejectWithError: false };
            obj1[0] = closure_1_8.CONNECT_REQUEST_CREATE;
            const obj2 = { analytics_properties: null };
            const obj3 = { handoff_type: null };
            obj3[0] = CREATE_NEW_CALL;
            obj2[0] = obj3;
            obj1[1] = obj2;
            HTTP.post(obj1);
            rTCConnectionId = 2;
            c5 = 1;
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            callback = table;
            obj1 = callback(table[12]);
            obj1.captureException(callback);
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            nonce = arg1.body.nonce;
            c3 = 0;
          }
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp27) {
        table = tmp27;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp27;
        } else {
          rTCConnectionId = tmp;
        }
      }
    }
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function cancelConnectRequest(arg0) {
  const HTTP = sendRequest.HTTP;
  return HTTP.del({ url: closure_8.CONNECT_REQUEST(arg0), rejectWithError: false });
}
function _fetchDevices() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function* (arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let devices = tmp3;
              let lib = tmp7;
              lib = undefined;
              devices = undefined;
              obj1 = { type: "GAME_CONSOLE_FETCH_DEVICES_START", platform: null };
              obj1[1] = callback;
              closure_1_1(closure_1_2[6]).dispatch(obj1);
              c4 = 1;
              const HTTP = callback(closure_1_2[11]).HTTP;
              const obj2 = { url: null, rejectWithError: false };
              obj2[0] = closure_1_8.CONSOLES_DEVICES(callback);
              c5 = 2;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj2);
              return obj3;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            let obj4 = lib(devices[6]);
            obj4 = { type: "GAME_CONSOLE_FETCH_DEVICES_FAIL", platform: null, error: null };
            obj4[1] = callback;
            obj4[2] = closure_3;
            obj4.dispatch(obj4);
            throw closure_3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            lib = arg1;
            c4 = 0;
            devices = lib.body.devices;
            obj = lib(devices[6]);
            const obj6 = { type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS", platform: null, devices: null };
            obj6[1] = callback;
            obj6[2] = devices;
            obj.dispatch(obj6);
            c6 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = devices;
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
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _sendConnectVoiceCommand() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    return (function* (arg0, arg1, arg2, arg3) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let id = tmp3;
              let body = tmp7;
              body = undefined;
              id = undefined;
              obj1 = { type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START", platform: null };
              obj1[1] = callback;
              callback2(id[6]).dispatch(obj1);
              c7 = 1;
              const HTTP = callback(id[11]).HTTP;
              let obj2 = { url: null, body: null, rejectWithError: false };
              obj2[0] = c8.CONSOLES_DEVICES_COMMANDS(callback, callback2);
              const obj3 = { command: null, channel_id: null, guild_id: null, nonce: null };
              obj3[0] = callback(id[13]).ConsoleCommands.CONNECT_VOICE;
              ({ id: obj13[1], guild_id: obj13[2] } = id);
              obj3[3] = closure_3;
              obj2[1] = obj3;
              c8 = 2;
              c9 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj2);
              return obj4;
            }
          } else if (1 === tmp7) {
            c7 = 0;
            obj2 = callback2(id[6]);
            const obj5 = { type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL", platform: null, error: null };
            obj5[1] = callback;
            obj5[2] = closure_6;
            obj2.dispatch(obj5);
            throw closure_6;
          } else if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            body = arg1;
            c7 = 0;
            id = body.body.id;
            let obj7 = callback2(id[6]);
            obj7 = {
              type: "WAIT_FOR_REMOTE_SESSION",
              sessionType: null,
              nonce: null,
              channelId: null,
              deviceId: null,
              commandId: null,
            };
            obj7[1] = callback;
            obj7[2] = closure_3;
            obj7[3] = id.id;
            obj7[4] = callback2;
            obj7[5] = id;
            obj7.dispatch(obj7);
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = id;
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
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function cancelCommand() {
  const self = this;
  const apply = _cancelCommand.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _cancelCommand() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function* (arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp7;
              obj1 = {
                type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
                platform: null,
                deviceId: null,
                commandId: null,
              };
              obj1[1] = callback;
              obj1[2] = callback2;
              obj1[3] = dependencyMap;
              callback2(706).dispatch(obj1);
              c6 = 1;
              const HTTP = callback(527).HTTP;
              const obj2 = { url: null, rejectWithError: false };
              obj2[0] = c8.CONSOLES_DEVICES_COMMAND(callback, callback2, dependencyMap);
              c7 = 2;
              c8 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.del(obj2);
              return obj3;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            closure_3 = closure_5;
            obj3 = callback2(706);
            const obj4 = {
              type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
              platform: null,
              deviceId: null,
              commandId: null,
              error: null,
            };
            obj4[1] = callback;
            obj4[2] = callback2;
            obj4[3] = dependencyMap;
            obj4[4] = closure_3;
            obj3.dispatch(obj4);
            throw closure_3;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            c6 = 0;
            obj = callback2(706);
            const obj6 = {
              type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
              platform: null,
              deviceId: null,
              commandId: null,
            };
            obj6[1] = callback;
            obj6[2] = callback2;
            obj6[3] = dependencyMap;
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
  });
  closure_18 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _transferToPlayStation() {
  let self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function* (arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp5;
              closure_3 = tmp2;
              closure_3 = undefined;
              let obj7 = callback(id[14]);
              c5 = 1;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj7.maybeShowPTTAlert(closure_0);
              return obj1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              c5 = 2;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = closure_1_10();
              return obj3;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              c5 = 3;
              c6 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = closure_1_12();
              return obj5;
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              closure_3 = arg1;
              c5 = 4;
              c6 = 1;
              obj7 = { value: null, done: false };
              obj7[0] = (function sendConnectVoiceCommand(closure_0, closure_1, closure_2, closure_3) {
                const self = this;
                const apply = closure_16.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(closure_0, callback, id, closure_3);
              return obj7;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            callback(id[15])(id.id, closure_0);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp27) {
          c6 = tmp;
          throw tmp27;
        }
      }
    })();
  });
  closure_19 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: error, Endpoints: closure_8, PlatformTypes: c9 } = ME);
let result = require("set").fileFinishedImporting("modules/game_console/GameConsoleActionCreators.tsx");

export const waitForSession = function waitForSession(XBOX, id, closure_1) {
  let obj = dispatcherDefault;
  obj = { type: "WAIT_FOR_REMOTE_SESSION", sessionType: XBOX, nonce: closure_1, channelId: id };
  obj.dispatch(obj);
};
export { disconnectRemote };
export const connectToRemote = function connectToRemote(sessionId) {
  let obj = dispatcherDefault;
  obj = { type: "REMOTE_SESSION_CONNECT", sessionId };
  obj.dispatch(obj);
};
export const remoteVoiceStateUpdate = function remoteVoiceStateUpdate(remoteSessionId, arg1) {
  ({ selfMute, selfDeaf } = arg1);
  let obj = dispatcherDefault;
  obj = {
    type: "REMOTE_COMMAND",
    sessionId: remoteSessionId,
    payload: { type: "VOICE_STATE_UPDATE", self_mute: selfMute, self_deaf: selfDeaf },
  };
  obj.dispatch(obj);
  const sessionById = store.getSessionById(remoteSessionId);
  let os;
  if (sessionById != null) {
    const clientInfo = sessionById.clientInfo;
    if (clientInfo != null) {
      os = clientInfo.os;
    }
  }
  expandEventPropertiesDefault.track(constants.REMOTE_COMMAND_SENT, {
    command_type: "VOICE_STATE_UPDATE",
    remote_platform: os,
  });
};
export const remoteDisconnect = function remoteDisconnect(remoteSessionId) {
  let obj = dispatcherDefault;
  obj = { type: "REMOTE_COMMAND", sessionId: remoteSessionId, payload: { type: "DISCONNECT" } };
  obj.dispatch(obj);
  const sessionById = store.getSessionById(remoteSessionId);
  let os;
  if (sessionById != null) {
    const clientInfo = sessionById.clientInfo;
    if (clientInfo != null) {
      os = clientInfo.os;
    }
  }
  expandEventPropertiesDefault.track(constants.REMOTE_COMMAND_SENT, {
    command_type: "DISCONNECT",
    remote_platform: os,
  });
  disconnectRemote();
};
export const remoteAudioSettingsUpdate = function remoteAudioSettingsUpdate(sessionId, arg1, first) {
  let obj = snapVolumeToDefault;
  const result = obj.coerceAudioContextForProto(first);
  if (null != result) {
    obj = { type: "REMOTE_COMMAND", sessionId: null, payload: null };
    obj[1] = sessionId;
    obj = { type: "AUDIO_SETTINGS_UPDATE", context: null, id: null };
    obj[1] = result;
    obj[2] = arg1;
    const merged = Object.assign(arg3);
    obj[2] = obj;
    dispatcherDefault.dispatch(obj);
    const obj3 = dispatcherDefault;
    const sessionById = store.getSessionById(sessionId);
    let os;
    if (sessionById != null) {
      const clientInfo = sessionById.clientInfo;
      if (clientInfo != null) {
        os = clientInfo.os;
      }
    }
    obj1 = { command_type: "AUDIO_SETTINGS_UPDATE", remote_platform: null };
    obj1[1] = os;
    expandEventPropertiesDefault.track(constants.REMOTE_COMMAND_SENT, obj1);
    const obj6 = expandEventPropertiesDefault;
  }
};
export { getConnectNonce };
export { cancelConnectRequest };
export const fetchDevices = function fetchDevices(closure_0) {
  const self = this;
  const apply = _fetchDevices.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const persistSelectedDeviceId = function persistSelectedDeviceId(closure_0, value) {
  let obj = dispatcherDefault;
  obj = { type: "GAME_CONSOLE_SELECT_DEVICE", platform: closure_0, deviceId: value };
  obj.dispatch(obj);
};
export { cancelCommand };
export const transferToPlayStation = function transferToPlayStation(closure_0, id, closure_2) {
  const self = this;
  const apply = _transferToPlayStation.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
