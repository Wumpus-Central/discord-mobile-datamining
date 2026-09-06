// discord_app/modules/game_console/GameConsoleManager.tsx
import LoggerDefault from "../debug/Logger.tsx";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import util from "../../intl/index.native.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import Timers from "../../../discord_common/js/packages/timers/Timers.tsx";
import AudioActionCreatorsDefault from "../../actions/AudioActionCreators.tsx";
import GameConsoleActionCreators from "GameConsoleActionCreators.tsx";
import _modDef17369 from "getErrorMessageForCommandResult.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import SessionsStore from "../../stores/SessionsStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import GameConsoleStore from "GameConsoleStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function syncLocalState() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _syncLocalState(arg0) {
  let selfMute = arg0;
  c3 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp5;
            closure_1 = tmp2;
            closure_129_0 = selfMute;
            channelId = channelId.getChannelId();
            _modDef38(null == channelId, "Syncing to remote while in voice!");
            if (selfMute.selfMute !== selfMute.isSelfMute()) {
              c3 = 1;
              c4 = 1;
              let obj1 = { value: AudioActionCreatorsDefault.toggleSelfMute({ syncRemote: false }), done: false };
              return obj1;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
        if (closure_129_0.selfDeaf !== closure_130_5.isSelfDeaf()) {
          obj1 = closure_130_1(closure_130_2[11]);
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
};
const GameConsoleConstants = fn(9233);
({ GAME_CONSOLE_SESSIONS: c10, USER_ACTION_REQUIRED_ERROR_CODES: closure_11 } = GameConsoleConstants);
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
let closure_13 = new LoggerDefault("GameConsoleManager");
let prototype = function GameConsoleManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  const timeout = new Timers.Timeout();
  applyArgumentsResult.rollbackCommandTimeout = timeout;
  const timeout1 = new Timers.Timeout();
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
    },
  };
  applyArgumentsResult.maybeConnect = function maybeConnect(arr) {
    const awaitingRemoteSessionInfo = GameConsoleStore.getAwaitingRemoteSessionInfo();
    const found = arr.find((clientInfo) => {
      let hasItem = set.has(clientInfo.clientInfo.os);
      let tmp4 = null == closure_0;
      if (!tmp4) {
        tmp4 =
          applyArgumentsResult(dependencyMap[12]).coercePlatformTypeToConsoleType(tmp3.type) ===
          clientInfo.clientInfo.os;
        const obj = applyArgumentsResult(dependencyMap[12]);
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
      GameConsoleActionCreators.connectToRemote(found.sessionId);
      voiceStateForSession = VoiceStateStore.getVoiceStateForSession(AuthenticationStore.getId(), found.sessionId);
      if (null != voiceStateForSession) {
        syncLocalState(voiceStateForSession);
      }
    }
  };
  applyArgumentsResult.handleAudioStateToggle = function handleAudioStateToggle(syncRemote) {
    voiceStateForSession = undefined;
    if (syncRemote.syncRemote) {
      if (tmp === MediaEngineContextTypes.DEFAULT) {
        const isSelfDeafResult = MediaEngineStore.isSelfDeaf();
        const isSelfMuteResult = MediaEngineStore.isSelfMute();
        id = AuthenticationStore.getId();
        const remoteSessionId = GameConsoleStore.getRemoteSessionId();
        if (null != remoteSessionId) {
          voiceStateForSession = VoiceStateStore.getVoiceStateForSession(id, remoteSessionId);
          if (null != voiceStateForSession) {
            if (!tmp3) {
              const obj = { selfDeaf: isSelfDeafResult, selfMute: isSelfMuteResult };
              const result = obj.remoteVoiceStateUpdate(remoteSessionId, obj);
              const rollbackCommandTimeout = applyArgumentsResult.rollbackCommandTimeout;
              rollbackCommandTimeout.start(3000, () => {
                syncLocalState(voiceStateForSession);
              });
            }
            tmp3 =
              voiceStateForSession.selfDeaf === isSelfDeafResult && voiceStateForSession.selfMute === isSelfMuteResult;
          }
        }
      }
    }
  };
  applyArgumentsResult.handleVoiceStateUpdates = function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    const remoteSessionId = GameConsoleStore.getRemoteSessionId();
    if (null == remoteSessionId) {
      const mapped = voiceStates.map((sessionId) => {
        sessionId = sessionId.sessionId;
        sessionById = null;
        if (null != sessionId) {
          sessionById = sessionById.getSessionById(sessionId);
        }
        return sessionById;
      });
      return applyArgumentsResult.maybeConnect(mapped.filter(GlobalUtils.isNotNullish));
    } else {
      const found = voiceStates.find((sessionId) => sessionId.sessionId === remoteSessionId);
      if (null != found) {
        const rollbackCommandTimeout = applyArgumentsResult.rollbackCommandTimeout;
        rollbackCommandTimeout.stop();
        syncLocalState(found);
      }
    }
  };
  applyArgumentsResult.handleSessionsChanged = function handleSessionsChanged() {
    const remoteSessionId = GameConsoleStore.getRemoteSessionId();
    let tmp2 = null != remoteSessionId;
    if (tmp2) {
      tmp2 = null == SessionsStore.getSessionById(remoteSessionId);
    }
    if (tmp2) {
      GameConsoleActionCreators.disconnectRemote();
    }
    if (null == remoteSessionId) {
      const _Object = Object;
      applyArgumentsResult.maybeConnect(Object.values(SessionsStore.getSessions()));
    }
  };
  applyArgumentsResult.handleWaitForRemoteSession = function handleWaitForRemoteSession() {
    const awaitRemoteTimeout = applyArgumentsResult.awaitRemoteTimeout;
    awaitRemoteTimeout.start(60000, () => {
      let obj = closure_1_0(9448);
      obj.disconnectRemote();
      obj = { title: null, body: null };
      const intl = closure_1_0(1114).intl;
      obj.title = intl.string(closure_1_0(1114).t.wGMxr3);
      const intl2 = closure_1_0(1114).intl;
      obj.body = intl2.string(closure_1_0(1114).t.i5k8b5);
      closure_1_1(4904).show(obj);
    });
  };
  applyArgumentsResult.handleConsoleCommandUpdate = function handleConsoleCommandUpdate(arg0) {
    ({ result, error } = arg0);
    if ("failed" === result) {
      if (null != error) {
        logger.info("Console command Error result:", result, error);
        const awaitingRemoteSessionInfo = GameConsoleStore.getAwaitingRemoteSessionInfo();
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
            const intl = util.intl;
            obj.platform = intl.string(util.t["UQMV/E"]);
            const intl2 = util.intl;
            obj.name = intl2.string(util.t["UQMV/E"]);
            device = obj;
          }
          const tmp8Result = _modDef17369(device, result, error);
          if (null != tmp8Result) {
            obj = { title: null, body: null, errorCodeMessage: null, reconnectPlatformType: null };
            ({ title: obj3.title, body: obj3.body, errorCodeMessage: obj3.errorCodeMessage } = tmp8Result);
            let type;
            if (tmp8Result.isAccountLinkError) {
              type = awaitingRemoteSessionInfo.type;
            }
            obj.reconnectPlatformType = type;
            result = tmp6(9451).showSelfDismissableAlert(obj);
            const tmp6Result = tmp6(9451);
          }
          if (set.has(error.code)) {
            const awaitRemoteTimeout = applyArgumentsResult.awaitRemoteTimeout;
            if (awaitRemoteTimeout.isStarted()) {
              const awaitRemoteTimeout2 = tmp14.awaitRemoteTimeout;
              awaitRemoteTimeout2.start(180000, () => closure_1_0(closure_1_2[15]).disconnectRemote(), true);
            }
            tmp14 = applyArgumentsResult;
          }
          if (tmp2) {
            GameConsoleActionCreators.disconnectRemote();
          }
          tmp6 = importDefault;
        }
        obj5 = GameConsoleStore;
      }
    }
  };
  applyArgumentsResult.handleRemoteSessionDisconnect = function handleRemoteSessionDisconnect() {
    const awaitRemoteTimeout = applyArgumentsResult.awaitRemoteTimeout;
    awaitRemoteTimeout.stop();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp4 {}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_console/GameConsoleManager.tsx");

export default prototype;
