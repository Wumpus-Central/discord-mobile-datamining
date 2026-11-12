// discord_app/modules/pass_the_controller/PassTheControllerStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import BaseConnectionEvent from "../../../discord_common/js/packages/media-engine/index.tsx";
import StreamKeyUtils from "../go_live/utils/StreamKeyUtils.tsx";
import InputHostDefault from "InputHost.tsx";
import InputGuestDefault from "InputGuest.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import StreamRTCConnectionStore from "../../stores/StreamRTCConnectionStore.tsx";

require = fn;
function handleControllerHolderChange(arg0) {
  if (arg0 !== c13) {
    c13 = arg0;
    passTheControllerStore.emitChange();
  }
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
      tmp10 = null == c11;
    }
    if (tmp10) {
      tmp10 = null == _null3;
    }
    flag = true;
    if (tmp10) {
      _null.close();
      _null = null;
      flag = true;
    }
  }
  return flag;
}
const Constants = fn(1072);
({
  ApplicationStreamDeleteReasons: closure_6,
  RTCConnectionStates: metroImportDefault,
  VoiceFlags: closure_8,
} = Constants);
const StreamTypes = fn(6740).StreamTypes;
let c10 = null;
let c11 = null;
let c12 = null;
let c13 = null;
const set = new Set();
const Store = initializeDefault.Store;
class PassTheControllerStore extends Store {}
const prototype = PassTheControllerStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, RTCConnectionStore, StreamRTCConnectionStore);
};
prototype["isSelfPassingController"] = function isSelfPassingController(tmp2Result) {
  let streamKey;
  if (_null2 != null) {
    streamKey = _null2.streamKey;
  }
  return streamKey === tmp2Result;
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
prototype["getControllerHolderId"] = function getControllerHolderId(arg0) {
  let streamKey;
  if (_null2 != null) {
    streamKey = _null2.streamKey;
  }
  let tmp2 = null;
  if (streamKey === arg0) {
    tmp2 = c13;
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
prototype["getGuestHostId"] = function getGuestHostId(arg0) {
  let streamKey;
  if (_null3 != null) {
    streamKey = _null3.streamKey;
  }
  let host = null;
  if (streamKey === arg0) {
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
    c13 = null;
  },
  PASS_THE_CONTROLLER_UPDATE: function handlePassTheController(isHost) {
    ({ streamKey, host, active } = isHost);
    if (isHost.isHost) {
      let connectResult = _null2;
      let flag5 = _null2 == null;
      if (active) {
        let streamKey1;
        if (!flag5) {
          streamKey1 = connectResult.streamKey;
        }
        flag5 = false;
        if (streamKey1 !== streamKey) {
          connectResult = StreamRTCConnectionStore;
          const streamPid = StreamRTCConnectionStore.getStreamPid(streamKey);
          flag5 = false;
          if (null != streamPid) {
            if (null != inputConnection1) {
              let tmp54 = inputConnection1;
            } else {
              connectResult = RTCConnectionStore;
              const rTCConnection = RTCConnectionStore.getRTCConnection();
              tmp54 = null;
              if (null != rTCConnection) {
                const inputConnection = new inputConnection1(15989).InputConnection(
                  rTCConnection,
                  AuthenticationStore.getId(),
                );
                closure_129_0 = inputConnection;
                inputConnection.on(inputConnection1(15990).InputEvent.Disconnect, () => {
                  if (c10 === inputConnection1) {
                    if (null != _null) {
                      obj2 = {
                        type: "PASS_THE_CONTROLLER_UPDATE",
                        streamKey: _null.streamKey,
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
                });
                connectResult = inputConnection.connect();
                inputConnection1 = inputConnection;
                tmp54 = inputConnection;
              }
            }
            let flag7 = null != tmp54;
            if (flag7) {
              if (_null2 != null) {
                const inputHost2 = _null2.inputHost;
                inputHost2.shutdown();
              }
              c13 = null;
              let obj = { streamKey, inputHost: null };
              const tmp58 = InputHostDefault;
              streamKey = inputConnection1(6745).decodeStreamKey(streamKey).guildId;
              if (streamKey == null) {
                streamKey = null;
              }
              const tmp582 = new tmp58(tmp54, streamPid, streamKey, handleControllerHolderChange);
              connectResult = tmp582;
              obj.inputHost = tmp582;
              _null2 = obj;
              flag7 = true;
              const obj7 = inputConnection1(6745);
            }
            flag5 = flag7;
          }
        }
        let flag6 = flag5;
      } else {
        let streamKey2;
        if (!flag5) {
          streamKey2 = connectResult.streamKey;
        }
        flag6 = streamKey2 === streamKey;
        if (flag6) {
          const inputHost = _null2.inputHost;
          inputHost.shutdown();
          _null2 = null;
          c13 = null;
          let tmp39 = null != inputConnection1;
          if (tmp39) {
            tmp39 = null == _null2;
          }
          if (tmp39) {
            tmp39 = null == obj2;
          }
          flag6 = true;
          if (tmp39) {
            inputConnection1.close();
            inputConnection1 = null;
            flag6 = true;
          }
        }
      }
    } else {
      if (active) {
        let streamKey3;
        if (obj2 != null) {
          streamKey3 = obj2.streamKey;
        }
        let flag2 = false;
        if (streamKey3 !== streamKey) {
          if (null != inputConnection1) {
            let tmp14 = inputConnection1;
          } else {
            const rTCConnection1 = RTCConnectionStore.getRTCConnection();
            tmp14 = null;
            if (null != rTCConnection1) {
              inputConnection1 = new inputConnection1(15989).InputConnection(
                rTCConnection1,
                AuthenticationStore.getId(),
              );
              inputConnection1.on(inputConnection1(15990).InputEvent.Disconnect, () => {
                if (c10 === inputConnection1) {
                  if (null != _null) {
                    obj2 = {
                      type: "PASS_THE_CONTROLLER_UPDATE",
                      streamKey: _null.streamKey,
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
              });
              inputConnection1.connect();
              tmp14 = inputConnection1;
            }
          }
          let flag3 = null != tmp14;
          if (flag3) {
            if (null != obj2) {
              const rTCConnection2 = StreamRTCConnectionStore.getRTCConnection(obj2.streamKey);
              if (rTCConnection2 != null) {
                rTCConnection2.setAvSyncEnabled(obj2.inputGuest.host, true);
              }
              const inputGuest = obj2.inputGuest;
              inputGuest.shutdown();
              obj2 = null;
            }
            const rTCConnection3 = StreamRTCConnectionStore.getRTCConnection(streamKey);
            if (rTCConnection3 != null) {
              rTCConnection3.setAvSyncEnabled(host, false);
            }
            obj2 = { streamKey, inputGuest: null };
            const tmp31 = new InputGuestDefault(tmp14, host, streamKey);
            obj2.inputGuest = tmp31;
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
      if (null != c13) {
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
        let flag = deleteResult;
      }
      return flag;
    }
    streamKey = streamKey.streamKey;
    let streamKey3;
    if (_null2 != null) {
      streamKey3 = _null2.streamKey;
    }
    flag = streamKey3 === streamKey;
    if (flag) {
      const inputHost = _null2.inputHost;
      inputHost.shutdown();
      _null2 = null;
      c13 = null;
      let tmp7 = null != _null;
      if (tmp7) {
        tmp7 = null == _null2;
      }
      if (tmp7) {
        tmp7 = null == _null3;
      }
      flag = true;
      if (tmp7) {
        _null.close();
        _null = null;
        flag = true;
      }
    }
    if (!flag) {
      flag = stopGuest(streamKey);
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
      let streamKey1;
      if (_null2 != null) {
        streamKey1 = _null2.streamKey;
      }
      let flag = streamKey1 === encodeStreamKeyResult;
      if (flag) {
        const inputHost = _null2.inputHost;
        inputHost.shutdown();
        _null2 = null;
        c13 = null;
        let tmp10 = null != _null;
        if (tmp10) {
          tmp10 = null == _null2;
        }
        if (tmp10) {
          tmp10 = null == c12;
        }
        flag = true;
        if (tmp10) {
          _null.close();
          _null = null;
          flag = true;
        }
      }
      tmp3 = flag;
    }
    return tmp3;
  },
  STREAM_STOP: function handleStreamStop(streamKey) {
    streamKey = streamKey.streamKey;
    let streamKey1;
    if (_null2 != null) {
      streamKey1 = _null2.streamKey;
    }
    let flag = streamKey1 === streamKey;
    if (flag) {
      const inputHost = _null2.inputHost;
      inputHost.shutdown();
      _null2 = null;
      c13 = null;
      let tmp5 = null != _null;
      if (tmp5) {
        tmp5 = null == _null2;
      }
      if (tmp5) {
        tmp5 = null == c12;
      }
      flag = true;
      if (tmp5) {
        _null.close();
        _null = null;
        flag = true;
      }
    }
    if (!flag) {
      flag = stopGuest(streamKey);
    }
    return flag;
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
        tmp6 = userId === c13;
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
const result = size.fileFinishedImporting("modules/pass_the_controller/PassTheControllerStore.tsx");

export default passTheControllerStore;
