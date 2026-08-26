// discord_app/modules/game_console/GameConsoleManager.tsx
import timestampDefault from "../debug/Logger.tsx";
import start from "../../../discord_common/js/packages/timers/Timers.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../stores/AuthenticationStore.tsx";
import closure_5 from "../../stores/MediaEngineStore.tsx";
import closure_6 from "../../stores/RTCConnectionStore.tsx";
import closure_7 from "../../stores/SessionsStore.tsx";
import closure_8 from "../../stores/VoiceStateStore.tsx";
import closure_9 from "GameConsoleStore.tsx";
import XBOX_URL_BASE from "GameConsoleConstants.tsx";
import { MediaEngineContextTypes } from "../../../discord_common/js/packages/media-engine/Constants.tsx";

require = arg1;
function syncLocalState() {
  const self = this;
  const apply = _syncLocalState.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _syncLocalState() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp5;
              const callback = tmp2;
              const channelId = closure_1_6.getChannelId();
              closure_1_1(closure_1_2[10])(null == channelId, "Syncing to remote while in voice!");
              if (closure_0.selfMute !== closure_1_5.isSelfMute()) {
                c3 = 1;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_1(closure_1_2[11]).toggleSelfMute({ syncRemote: false });
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          if (closure_0.selfDeaf !== selfDeaf.isSelfDeaf()) {
            obj1 = callback(table[11]);
            obj1.toggleSelfDeaf({ syncRemote: false });
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp16) {
          c4 = tmp;
          throw tmp16;
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
({ GAME_CONSOLE_SESSIONS: c10, USER_ACTION_REQUIRED_ERROR_CODES: unpackModuleId } = XBOX_URL_BASE);
let closure_13 = new timestampDefault("GameConsoleManager");
initializeDefault;
let prototype = function GameConsoleManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  const timeout = new start.Timeout();
  applyArgumentsResult.rollbackCommandTimeout = timeout;
  const timeout1 = new start.Timeout();
  applyArgumentsResult.awaitRemoteTimeout = timeout1;
  applyArgumentsResult.actions = {
    WAIT_FOR_REMOTE_SESSION() {
      return applyArgumentsResult.handleWaitForRemoteSession();
    },
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handleSessionsChanged();
    },
    SESSIONS_REPLACE() {
      return applyArgumentsResult.handleSessionsChanged();
    },
    AUDIO_TOGGLE_SELF_DEAF(syncRemote) {
      return applyArgumentsResult.handleAudioStateToggle(syncRemote);
    },
    AUDIO_TOGGLE_SELF_MUTE(syncRemote) {
      return applyArgumentsResult.handleAudioStateToggle(syncRemote);
    },
    VOICE_STATE_UPDATES(arg0) {
      return applyArgumentsResult.handleVoiceStateUpdates(arg0);
    },
    CONSOLE_COMMAND_UPDATE(arg0) {
      return applyArgumentsResult.handleConsoleCommandUpdate(arg0);
    },
    PASSIVE_UPDATE_V2(arg0) {
      return applyArgumentsResult.handleVoiceStateUpdates(arg0);
    },
    REMOTE_SESSION_DISCONNECT() {
      return applyArgumentsResult.handleRemoteSessionDisconnect();
    }
  };
  applyArgumentsResult.maybeConnect = function maybeConnect(mapped) {
    applyArgumentsResult = closure_1_9.getAwaitingRemoteSessionInfo();
    const found = mapped.find((clientInfo) => {
      let hasItem = closure_1_10.has(clientInfo.clientInfo.os);
      let tmp4 = null == callback;
      if (!tmp4) {
        tmp4 = callback(closure_1_2[12]).coercePlatformTypeToConsoleType(tmp3.type) === clientInfo.clientInfo.os;
        const obj = callback(closure_1_2[12]);
      }
      if (hasItem) {
        hasItem = tmp4;
      }
      if (hasItem) {
        hasItem = tmp2;
      }
      return hasItem;
    });
    if (null == found) {
      return null;
    } else {
      const awaitRemoteTimeout = applyArgumentsResult.awaitRemoteTimeout;
      awaitRemoteTimeout.stop();
      applyArgumentsResult(closure_1_2[15]).connectToRemote(found.sessionId);
      const voiceStateForSession = closure_1_8.getVoiceStateForSession(closure_1_4.getId(), found.sessionId);
      if (null != voiceStateForSession) {
        closure_1_14(voiceStateForSession);
      }
    }
  };
  applyArgumentsResult.handleAudioStateToggle = function handleAudioStateToggle(syncRemote) {
    let voiceStateForSession;
    if (syncRemote.syncRemote) {
      if (tmp === closure_1_12.DEFAULT) {
        const isSelfDeafResult = closure_1_5.isSelfDeaf();
        const isSelfMuteResult = closure_1_5.isSelfMute();
        const id = closure_1_4.getId();
        const remoteSessionId = closure_1_9.getRemoteSessionId();
        if (null != remoteSessionId) {
          voiceStateForSession = closure_1_8.getVoiceStateForSession(id, remoteSessionId);
          if (null != voiceStateForSession) {
            if (!tmp3) {
              let obj = applyArgumentsResult(closure_1_2[15]);
              obj = { selfDeaf: null, selfMute: null };
              obj[0] = isSelfDeafResult;
              obj[1] = isSelfMuteResult;
              const result = obj.remoteVoiceStateUpdate(remoteSessionId, obj);
              const rollbackCommandTimeout = voiceStateForSession.rollbackCommandTimeout;
              rollbackCommandTimeout.start(3000, () => {
                closure_1_14(voiceStateForSession);
              });
            }
            tmp3 = voiceStateForSession.selfDeaf === isSelfDeafResult && voiceStateForSession.selfMute === isSelfMuteResult;
          }
        }
      }
    }
  };
  applyArgumentsResult.handleVoiceStateUpdates = function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    const remoteSessionId = closure_1_9.getRemoteSessionId();
    if (null == remoteSessionId) {
      const mapped = voiceStates.map((sessionId) => {
        sessionId = sessionId.sessionId;
        let sessionById = null;
        if (null != sessionId) {
          sessionById = sessionById.getSessionById(sessionId);
        }
        return sessionById;
      });
      return remoteSessionId.maybeConnect(mapped.filter(applyArgumentsResult(closure_1_2[16]).isNotNullish));
    } else {
      const found = voiceStates.find((sessionId) => sessionId.sessionId === remoteSessionId);
      if (null != found) {
        const rollbackCommandTimeout = remoteSessionId.rollbackCommandTimeout;
        rollbackCommandTimeout.stop();
        closure_1_14(found);
      }
    }
  };
  applyArgumentsResult.handleSessionsChanged = function handleSessionsChanged() {
    const remoteSessionId = closure_1_9.getRemoteSessionId();
    let tmp2 = null != remoteSessionId;
    if (tmp2) {
      tmp2 = null == closure_1_7.getSessionById(remoteSessionId);
    }
    if (tmp2) {
      applyArgumentsResult(closure_1_2[15]).disconnectRemote();
      const obj = applyArgumentsResult(closure_1_2[15]);
    }
    if (null == remoteSessionId) {
      const _Object = Object;
      applyArgumentsResult.maybeConnect(Object.values(closure_1_7.getSessions()));
    }
  };
  applyArgumentsResult.handleWaitForRemoteSession = function handleWaitForRemoteSession() {
    const awaitRemoteTimeout = applyArgumentsResult.awaitRemoteTimeout;
    awaitRemoteTimeout.start(60000, () => {
      let obj = callback(11038);
      obj.disconnectRemote();
      obj = { title: null, body: null };
      const intl = callback(1236).intl;
      obj[0] = intl.string(callback(1236).t.wGMxr3);
      const intl2 = callback(1236).intl;
      obj[1] = intl2.string(callback(1236).t.i5k8b5);
      callback2(4808).show(obj);
    });
  };
  applyArgumentsResult.handleConsoleCommandUpdate = function handleConsoleCommandUpdate(arg0) {
    ({ result, error } = arg0);
    if ("failed" === result) {
      if (null != error) {
        closure_1_13.info("Console command Error result:", result, error);
        const awaitingRemoteSessionInfo = closure_1_9.getAwaitingRemoteSessionInfo();
        let commandId;
        if (awaitingRemoteSessionInfo != null) {
          commandId = awaitingRemoteSessionInfo.commandId;
        }
        if (commandId === tmp) {
          let str2 = awaitingRemoteSessionInfo.deviceId;
          if (str2 == null) {
            str2 = "";
          }
          let device = obj5.getDevice(awaitingRemoteSessionInfo.type, str2);
          if (device == null) {
            let obj = { id: "id", platform: null, name: null };
            const intl = applyArgumentsResult(tmp7[18]).intl;
            obj[1] = intl.string(applyArgumentsResult(tmp7[18]).t["UQMV/E"]);
            const intl2 = applyArgumentsResult(tmp7[18]).intl;
            obj[2] = intl2.string(applyArgumentsResult(tmp7[18]).t["UQMV/E"]);
            device = obj;
          }
          const tmp8Result = closure_1_1(closure_1_2[19])(device, result, error);
          if (null != tmp8Result) {
            obj = { title: null, body: null, errorCodeMessage: null, reconnectPlatformType: null };
            ({ title: obj3[0], body: obj3[1], errorCodeMessage: obj3[2] } = tmp8Result);
            let type;
            if (tmp8Result.isAccountLinkError) {
              type = awaitingRemoteSessionInfo.type;
            }
            obj[3] = type;
            result = tmp6(tmp7[20]).showSelfDismissableAlert(obj);
            const tmp6Result = tmp6(tmp7[20]);
          }
          if (closure_1_11.has(error.code)) {
            const awaitRemoteTimeout = applyArgumentsResult.awaitRemoteTimeout;
            if (awaitRemoteTimeout.isStarted()) {
              const awaitRemoteTimeout2 = tmp14.awaitRemoteTimeout;
              awaitRemoteTimeout2.start(180000, () => callback(table[15]).disconnectRemote(), true);
            }
            tmp14 = applyArgumentsResult;
          }
          if (tmp2) {
            applyArgumentsResult(tmp7[15]).disconnectRemote();
            const obj4 = applyArgumentsResult(tmp7[15]);
          }
          tmp6 = closure_1_1;
          const tmp8 = closure_1_1(closure_1_2[19]);
        }
        obj5 = closure_1_9;
      }
    }
  };
  applyArgumentsResult.handleRemoteSessionDisconnect = function handleRemoteSessionDisconnect() {
    const awaitRemoteTimeout = applyArgumentsResult.awaitRemoteTimeout;
    awaitRemoteTimeout.stop();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp4 {
}
prototype = new prototype();
let tmp3 = new timestampDefault("GameConsoleManager");
let result = require("set").fileFinishedImporting("modules/game_console/GameConsoleManager.tsx");

export default prototype;