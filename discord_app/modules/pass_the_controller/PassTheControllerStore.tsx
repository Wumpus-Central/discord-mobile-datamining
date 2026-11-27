// discord_app/modules/pass_the_controller/PassTheControllerStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import BaseConnectionEvent from "../../../discord_common/js/packages/media-engine/index.tsx";
import StreamKeyUtils from "../go_live/utils/StreamKeyUtils.tsx";
import InputEvent from "InputEvent.tsx";
import InputHostDefault from "InputHost.tsx";
import InputGuestDefault from "InputGuest.tsx";
import RunningGameStore from "../game_detection/RunningGameStore.native.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import StreamRTCConnectionStore from "../../stores/StreamRTCConnectionStore.tsx";

require = fn;
function handleControllerGrab(arg0) {
  if (arg0 !== c17) {
    c17 = arg0;
    passTheControllerStore.emitChange();
  }
}
function handleControllerDrop() {
  if (null != c17) {
    c17 = null;
    passTheControllerStore.emitChange();
  }
}
function stopHost(streamKey) {
  streamKey = undefined;
  if (_null2 != null) {
    streamKey = _null2.streamKey;
  }
  let flag = streamKey === streamKey;
  if (flag) {
    const inputHost = _null2.inputHost;
    inputHost.shutdown();
    _null2 = null;
    c17 = null;
    let tmp5 = null != _null;
    if (tmp5) {
      tmp5 = null == _null2;
    }
    if (tmp5) {
      tmp5 = null == c16;
    }
    if (tmp5) {
      if (null != c14) {
        _null.off(InputEvent.InputEvent.Disconnect, c14);
      }
      _null.close();
      c14 = null;
      _null = null;
    }
    const rTCConnection = StreamRTCConnectionStore.getRTCConnection(streamKey);
    flag = true;
    if (rTCConnection != null) {
      const result = rTCConnection.setVideoEncoderLatencyProfile(constants4.DEFAULT);
      flag = true;
    }
  }
  return flag;
}
function stopGuest(streamKey) {
  streamKey = undefined;
  if (_null3 != null) {
    streamKey = _null3.streamKey;
  }
  let flag = streamKey === streamKey;
  if (flag) {
    if (null != _null3) {
      const rTCConnection = StreamRTCConnectionStore.getRTCConnection(_null3.streamKey);
      if (rTCConnection != null) {
        rTCConnection.setAvSyncEnabled(_null3.inputGuest.host, true);
      }
      const inputGuest = _null3.inputGuest;
      inputGuest.shutdown();
      _null3 = null;
    }
    let tmp10 = null != _null;
    if (tmp10) {
      tmp10 = null == c15;
    }
    if (tmp10) {
      tmp10 = null == _null3;
    }
    flag = true;
    if (tmp10) {
      if (null != c14) {
        _null.off(InputEvent.InputEvent.Disconnect, c14);
      }
      _null.close();
      c14 = null;
      _null = null;
      flag = true;
    }
  }
  return flag;
}
let closure_7 = fn(15097).isPassTheControllerBlocked;
const Constants = fn(1071);
({ ApplicationStreamDeleteReasons: closure_8, RTCConnectionStates: closure_9, VoiceFlags: closure_10 } = Constants);
const StreamTypes = fn(6814).StreamTypes;
const constants4 = fn(5855).VideoEncoderLatencyProfile;
let c13 = null;
let c14 = null;
let c15 = null;
let c16 = null;
let c17 = null;
const set = new Set();
const Store = initializeDefault.Store;
class PassTheControllerStore extends Store {}
const prototype = PassTheControllerStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, RTCConnectionStore, RunningGameStore, StreamRTCConnectionStore);
};
prototype["isSelfPassingController"] = function isSelfPassingController(encodeStreamKeyResult) {
  let streamKey;
  if (_null2 != null) {
    streamKey = _null2.streamKey;
  }
  return streamKey === encodeStreamKeyResult;
};
prototype["isStreamPassingController"] = function isStreamPassingController(arg0) {
  return set.has(arg0);
};
prototype["isSelfHoldingController"] = function isSelfHoldingController(arg0) {
  let streamKey;
  if (_null3 != null) {
    streamKey = _null3.streamKey;
  }
  return streamKey === arg0;
};
prototype["getInputGuest"] = function getInputGuest(arg0) {
  let streamKey;
  if (_null3 != null) {
    streamKey = _null3.streamKey;
  }
  let inputGuest = null;
  if (streamKey === arg0) {
    inputGuest = _null3.inputGuest;
  }
  return inputGuest;
};
prototype["getControllerHolderId"] = function getControllerHolderId(encodeStreamKeyResult) {
  let streamKey;
  if (_null2 != null) {
    streamKey = _null2.streamKey;
  }
  let tmp2 = null;
  if (streamKey === encodeStreamKeyResult) {
    tmp2 = c17;
  }
  return tmp2;
};
prototype["getGuestStreamKey"] = function getGuestStreamKey() {
  let streamKey;
  if (_null3 != null) {
    streamKey = _null3.streamKey;
  }
  if (streamKey == null) {
    streamKey = null;
  }
  return streamKey;
};
prototype["getGuestHostId"] = function getGuestHostId(guestStreamKey) {
  let streamKey;
  if (_null3 != null) {
    streamKey = _null3.streamKey;
  }
  let host = null;
  if (streamKey === guestStreamKey) {
    host = _null3.inputGuest.host;
  }
  return host;
};
prototype["getHostStreamKeys"] = function getHostStreamKeys() {
  return set;
};
PassTheControllerStore.displayName = "PassTheControllerStore";
const passTheControllerStore = new PassTheControllerStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    set.clear();
    c17 = null;
  },
  PASS_THE_CONTROLLER_UPDATE: function handlePassTheController(isHost) {
    ({ streamKey, host, active } = isHost);
    if (isHost.isHost) {
      if (active) {
        let streamKey1;
        if (obj != null) {
          streamKey1 = obj.streamKey;
        }
        let flag5 = false;
        if (streamKey1 !== streamKey) {
          const streamPid = StreamRTCConnectionStore.getStreamPid(streamKey);
          flag5 = false;
          if (null != streamPid) {
            flag5 = false;
            if (!closure_7(streamKey)) {
              if (null != inputConnection1) {
                let tmp50 = inputConnection1;
              } else {
                const rTCConnection = RTCConnectionStore.getRTCConnection();
                tmp50 = null;
                if (null != rTCConnection) {
                  const inputConnection = new inputConnection1(15098).InputConnection(
                    rTCConnection,
                    AuthenticationStore.getId(),
                  );
                  closure_129_0 = inputConnection;
                  function h() {
                    if (c13 === inputConnection1) {
                      if (null != c15) {
                        obj2 = {
                          type: "PASS_THE_CONTROLLER_UPDATE",
                          streamKey: c15.streamKey,
                          isHost: true,
                          host: AuthenticationStore.getId(),
                          active: false,
                        };
                        DispatcherDefault.dispatch(obj2);
                      }
                      if (null != obj2) {
                        const obj4 = {
                          type: "PASS_THE_CONTROLLER_UPDATE",
                          streamKey: obj2.streamKey,
                          isHost: false,
                          host: obj2.inputGuest.host,
                          active: false,
                        };
                        DispatcherDefault.dispatch(obj4);
                      }
                    }
                  }
                  inputConnection.on(inputConnection1(15105).InputEvent.Disconnect, h);
                  inputConnection.connect();
                  inputConnection1 = inputConnection;
                  tmp50 = inputConnection;
                }
              }
              let flag6 = null != tmp50;
              if (flag6) {
                if (obj != null) {
                  const inputHost = obj.inputHost;
                  inputHost.shutdown();
                }
                c17 = null;
                const rTCConnection1 = StreamRTCConnectionStore.getRTCConnection(streamKey);
                if (rTCConnection1 != null) {
                  const result = rTCConnection1.setVideoEncoderLatencyProfile(constants4.ULTRA_LOW);
                }
                obj = { streamKey, inputHost: null };
                const tmp56 = InputHostDefault;
                let guildId = inputConnection1(6816).decodeStreamKey(streamKey).guildId;
                if (guildId == null) {
                  guildId = null;
                }
                const tmp562 = new tmp56(tmp50, streamPid, guildId, handleControllerGrab, handleControllerDrop);
                obj.inputHost = tmp562;
                flag6 = true;
                const obj8 = inputConnection1(6816);
              }
              flag5 = flag6;
            }
          }
        }
      } else {
        const tmp35 = stopHost(streamKey);
      }
    } else {
      if (active) {
        let streamKey2;
        if (obj2 != null) {
          streamKey2 = obj2.streamKey;
        }
        let flag2 = false;
        if (streamKey2 !== streamKey) {
          if (null != inputConnection1) {
            let tmp15 = inputConnection1;
          } else {
            const rTCConnection2 = RTCConnectionStore.getRTCConnection();
            tmp15 = null;
            if (null != rTCConnection2) {
              inputConnection1 = new inputConnection1(15098).InputConnection(
                rTCConnection2,
                AuthenticationStore.getId(),
              );
              h = function h() {
                if (c13 === inputConnection1) {
                  if (null != c15) {
                    obj2 = {
                      type: "PASS_THE_CONTROLLER_UPDATE",
                      streamKey: c15.streamKey,
                      isHost: true,
                      host: AuthenticationStore.getId(),
                      active: false,
                    };
                    DispatcherDefault.dispatch(obj2);
                  }
                  if (null != obj2) {
                    const obj4 = {
                      type: "PASS_THE_CONTROLLER_UPDATE",
                      streamKey: obj2.streamKey,
                      isHost: false,
                      host: obj2.inputGuest.host,
                      active: false,
                    };
                    DispatcherDefault.dispatch(obj4);
                  }
                }
              };
              inputConnection1.on(inputConnection1(15105).InputEvent.Disconnect, h);
              inputConnection1.connect();
              tmp15 = inputConnection1;
            }
          }
          let flag3 = null != tmp15;
          if (flag3) {
            if (null != obj2) {
              const rTCConnection3 = StreamRTCConnectionStore.getRTCConnection(obj2.streamKey);
              if (rTCConnection3 != null) {
                rTCConnection3.setAvSyncEnabled(obj2.inputGuest.host, true);
              }
              const inputGuest = obj2.inputGuest;
              inputGuest.shutdown();
              obj2 = null;
            }
            const rTCConnection4 = StreamRTCConnectionStore.getRTCConnection(streamKey);
            if (rTCConnection4 != null) {
              rTCConnection4.setAvSyncEnabled(host, false);
            }
            obj2 = { streamKey, inputGuest: null };
            const tmp32 = new InputGuestDefault(tmp15, host, streamKey);
            obj2.inputGuest = tmp32;
            flag3 = true;
          }
          flag2 = flag3;
        }
        let tmp2 = flag2;
      } else {
        tmp2 = stopGuest(streamKey);
      }
      return tmp2;
    }
  },
  PASS_THE_CONTROLLER_TAKE_BACK: function handleTakeBack(streamKey) {
    streamKey = undefined;
    if (_null2 != null) {
      streamKey = _null2.streamKey;
    }
    if (streamKey === streamKey.streamKey) {
      if (null != c17) {
        const inputHost = _null2.inputHost;
        inputHost.takeBackController();
      }
    }
    return false;
  },
  STREAM_DELETE: function handleStreamDelete(streamKey) {
    let streamKey1;
    if (_null3 != null) {
      streamKey1 = _null3.streamKey;
    }
    if (streamKey1 === streamKey.streamKey) {
      if (streamKey.reason === constants.USER_REQUESTED) {
        const streamKey2 = streamKey.streamKey;
        let deleteResult = set.delete(streamKey2);
        if (!deleteResult) {
          deleteResult = stopGuest(streamKey2);
        }
        let tmp4 = deleteResult;
      }
      return tmp4;
    }
    streamKey = streamKey.streamKey;
    const tmp3 = stopHost(streamKey);
    tmp4 = tmp3;
    if (!tmp3) {
      tmp4 = stopGuest(streamKey);
    }
  },
  STREAM_START: function handleStreamStart(arg0) {
    ({ streamType, guildId, channelId } = arg0);
    const obj = StreamKeyUtils;
    const encodeStreamKeyResult = obj.encodeStreamKey({
      streamType,
      guildId,
      channelId,
      ownerId: AuthenticationStore.getId(),
    });
    let streamKey;
    if (_null2 != null) {
      streamKey = _null2.streamKey;
    }
    let tmp3 = streamKey === encodeStreamKeyResult;
    if (tmp3) {
      tmp3 = StreamRTCConnectionStore.getStreamPid(encodeStreamKeyResult) !== _null2.inputHost.pid;
    }
    if (tmp3) {
      tmp3 = stopHost(encodeStreamKeyResult);
    }
    return tmp3;
  },
  STREAM_STOP: function handleStreamStop(streamKey) {
    streamKey = streamKey.streamKey;
    let tmp = stopHost(streamKey);
    if (!tmp) {
      tmp = stopGuest(streamKey);
    }
    return tmp;
  },
  RTC_CONNECTION_FLAGS: function handleRTCConnectionFlags(guildId) {
    guildId = guildId.guildId;
    ({ flags, userId, channelId } = guildId);
    if (null != guildId) {
      let CALL = StreamTypes.GUILD;
    } else {
      CALL = StreamTypes.CALL;
    }
    const encodeStreamKeyResult = StreamKeyUtils.encodeStreamKey({
      streamType: CALL,
      guildId,
      channelId,
      ownerId: userId,
    });
    if (tmpResult.hasFlag(flags, constants3.PASS_THE_CONTROLLER_HOST)) {
      set.add(encodeStreamKeyResult);
    } else {
      set.delete(encodeStreamKeyResult);
      stopGuest(encodeStreamKeyResult);
    }
    tmpResult = FlagUtils;
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function handleRTCConnectionClientDisconnect(arg0) {
    ({ userId, guildId } = arg0);
    ({ channelId, context } = arg0);
    let tmp3 = context === BaseConnectionEvent.MediaEngineContextTypes.DEFAULT;
    if (tmp3) {
      let tmp6 = null != _null2;
      if (tmp6) {
        tmp6 = userId === c17;
      }
      if (tmp6) {
        const inputHost = _null2.inputHost;
        inputHost.takeBackController();
      }
      if (null != guildId) {
        let CALL = StreamTypes.GUILD;
      } else {
        CALL = StreamTypes.CALL;
      }
      const obj = { streamType: CALL, guildId, channelId, ownerId: userId };
      const encodeStreamKeyResult = StreamKeyUtils.encodeStreamKey(obj);
      let deleteResult = set.delete(encodeStreamKeyResult);
      if (!deleteResult) {
        deleteResult = stopGuest(encodeStreamKeyResult);
      }
      tmp3 = deleteResult;
      const tmpResult = StreamKeyUtils;
    }
    return tmp3;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(context) {
    if (context.context === BaseConnectionEvent.MediaEngineContextTypes.DEFAULT) {
      if (context.state === constants2.DISCONNECTED) {
        if (0 !== set.size) {
          set.clear();
        }
      }
    }
    return false;
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/pass_the_controller/PassTheControllerStore.tsx");

export default passTheControllerStore;
