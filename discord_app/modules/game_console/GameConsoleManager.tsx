// === Module 17499: GameConsoleManager ===

// Module 17499 (GameConsoleManager)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import intl3 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import Timers from "Timers" /* 2046 */;
import Constants from "Constants" /* 4915 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9306 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 9448 */;
import GameConsoleAlertUtilsDefault from "GameConsoleAlertUtils" /* 9451 */;
import _modDef17500 from "module_17500" /* 17500 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import SessionsStore from "SessionsStore" /* 4908 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import GameConsoleStore from "GameConsoleStore" /* 4907 */;
import GameConsoleConstants from "GameConsoleConstants" /* 8749 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

let c3, c4, channelId, sessionById, sessionId;

let c10;
let unpackModuleId;
function syncLocalState() {
  return obj(...arguments);
}
let obj = function _syncLocalState() {
  let selfMute;
  obj = _asyncToGenerator(async (arg0) => {
    let obj3;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            channelId = channelId.getChannelId();
            _modDef38(null == channelId, "Syncing to remote while in voice!");
            if (closure_0.selfMute !== selfMute.isSelfMute()) {
              c3 = 1;
              c4 = 1;
              const obj6 = { value: obj3.toggleSelfMute({ syncRemote: false }), done: false };
              obj3 = AudioActionCreatorsDefault;
              return obj6;
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
        if (closure_0.selfDeaf !== closure_130_5.isSelfDeaf()) {
          const obj2 = closure_130_1(closure_130_2[11]);
          obj2.toggleSelfDeaf({ syncRemote: false });
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp15) {
        c4 = 3;
        throw tmp15;
      }
    }
  });
  return obj(...arguments);
};
({ GAME_CONSOLE_SESSIONS: c10, USER_ACTION_REQUIRED_ERROR_CODES: unpackModuleId } = GameConsoleConstants);
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
let tmp3 = new LoggerDefault("GameConsoleManager");
let closure_13 = tmp3;
class GameConsoleManager extends AutomaticLifecycleManager {
  constructor() {
    let logger;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    const timeout = new Timers.Timeout();
    applyArgumentsResult.rollbackCommandTimeout = timeout;
    const timeout1 = new Timers.Timeout();
    applyArgumentsResult.awaitRemoteTimeout = timeout1;
    applyArgumentsResult.actions = {
      WAIT_FOR_REMOTE_SESSION() {
        return require.handleWaitForRemoteSession();
      },
      POST_CONNECTION_OPEN() {
        return require.handleSessionsChanged();
      },
      SESSIONS_REPLACE() {
        return require.handleSessionsChanged();
      },
      AUDIO_TOGGLE_SELF_DEAF(syncRemote) {
        return require.handleAudioStateToggle(syncRemote);
      },
      AUDIO_TOGGLE_SELF_MUTE(syncRemote) {
        return require.handleAudioStateToggle(syncRemote);
      },
      VOICE_STATE_UPDATES(arg0) {
        return require.handleVoiceStateUpdates(arg0);
      },
      CONSOLE_COMMAND_UPDATE(arg0) {
        return require.handleConsoleCommandUpdate(arg0);
      },
      PASSIVE_UPDATE_V2(arg0) {
        return require.handleVoiceStateUpdates(arg0);
      },
      REMOTE_SESSION_DISCONNECT() {
        return require.handleRemoteSessionDisconnect();
      }
    };
    applyArgumentsResult.maybeConnect = function maybeConnect(arr) {
      let id;
      const awaitingRemoteSessionInfo = GameConsoleStore.getAwaitingRemoteSessionInfo();
      const found = arr.find((clientInfo) => {
        let hasItem = set.has(clientInfo.clientInfo.os);
        let tmp4 = null == closure_0;
        const tmp2 = null != voiceStateForSession.getVoiceStateForSession(id.getId(), clientInfo.sessionId);
        if (!tmp4) {
          obj = closure_2_0(closure_2_2[12]);
          tmp4 = obj.coercePlatformTypeToConsoleType(tmp3.type) === clientInfo.clientInfo.os;
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
        const awaitRemoteTimeout = require.awaitRemoteTimeout;
        awaitRemoteTimeout.stop();
        obj = GameConsoleActionCreators;
        obj.connectToRemote(found.sessionId);
        const voiceStateForSession = VoiceStateStore.getVoiceStateForSession(AuthenticationStore.getId(), found.sessionId);
        if (null != voiceStateForSession) {
          syncLocalState(voiceStateForSession);
        }
      }
    };
    applyArgumentsResult.handleAudioStateToggle = function handleAudioStateToggle(syncRemote) {
      let voiceStateForSession;
      if (syncRemote.syncRemote) {
        if (tmp === MediaEngineContextTypes.DEFAULT) {
          const isSelfDeafResult = MediaEngineStore.isSelfDeaf();
          const isSelfMuteResult = MediaEngineStore.isSelfMute();
          const id = AuthenticationStore.getId();
          const remoteSessionId = GameConsoleStore.getRemoteSessionId();
          if (null != remoteSessionId) {
            voiceStateForSession = VoiceStateStore.getVoiceStateForSession(id, remoteSessionId);
            if (null != voiceStateForSession) {
              const tmp3 = voiceStateForSession.selfDeaf === isSelfDeafResult && voiceStateForSession.selfMute === isSelfMuteResult;
              if (!tmp3) {
                const obj2 = { selfDeaf: isSelfDeafResult, selfMute: isSelfMuteResult };
                obj = GameConsoleActionCreators;
                const result = obj.remoteVoiceStateUpdate(remoteSessionId, obj2);
                const rollbackCommandTimeout = require.rollbackCommandTimeout;
                rollbackCommandTimeout.start(3000, () => {
                  closure_2_14(voiceStateForSession);
                });
              }
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
        return require.maybeConnect(mapped.filter(GlobalUtils.isNotNullish));
      } else {
        const found = voiceStates.find((sessionId) => sessionId.sessionId === remoteSessionId);
        if (null != found) {
          const rollbackCommandTimeout = require.rollbackCommandTimeout;
          rollbackCommandTimeout.stop();
          syncLocalState(found);
        }
      }
    };
    applyArgumentsResult.handleSessionsChanged = function handleSessionsChanged() {
      const remoteSessionId = GameConsoleStore.getRemoteSessionId();
      const tmp2 = null != remoteSessionId && null == SessionsStore.getSessionById(remoteSessionId);
      if (tmp2) {
        obj = GameConsoleActionCreators;
        obj.disconnectRemote();
      }
      if (null == remoteSessionId) {
        const _Object = Object;
        require.maybeConnect(Object.values(SessionsStore.getSessions()));
      }
    };
    applyArgumentsResult.handleWaitForRemoteSession = function handleWaitForRemoteSession() {
      const awaitRemoteTimeout = require.awaitRemoteTimeout;
      awaitRemoteTimeout.start(60000, () => {
        let intl;
        let intl2;
        obj = closure_1_0(closure_1_2[15]);
        obj.disconnectRemote();
        const obj2 = { title: intl.string(closure_1_0(closure_1_2[18]).t.wGMxr3), body: intl2.string(closure_1_0(closure_1_2[18]).t.i5k8b5) };
        const show = closure_1_1(closure_1_2[17]).show;
        closure_1_1(closure_1_2[17]);
        intl = closure_1_0(closure_1_2[18]).intl;
        intl2 = closure_1_0(closure_1_2[18]).intl;
        show(obj2);
      });
    };
    applyArgumentsResult.handleConsoleCommandUpdate = function handleConsoleCommandUpdate(arg0) {
      let error;
      let intl;
      let intl2;
      let result;
      let type1;
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
            const getDevice = GameConsoleStore.getDevice;
            const type = awaitingRemoteSessionInfo.type;
            if (str2 == null) {
              str2 = "";
            }
            let device = getDevice(type, str2);
            const tmp8 = _modDef17500;
            if (device == null) {
              obj = { id: "id", platform: intl.string(intl3.t["UQMV/E"]), name: intl2.string(intl3.t["UQMV/E"]) };
              intl = intl3.intl;
              intl2 = intl3.intl;
              device = obj;
            }
            const tmp8Result = tmp8(device, result, error);
            if (null != tmp8Result) {
              const obj4 = { title: null, body: null, errorCodeMessage: null, reconnectPlatformType: type1 };
              ({ title: obj2.title, body: obj2.body, errorCodeMessage: obj2.errorCodeMessage } = tmp8Result);
              type1 = undefined;
              const showSelfDismissableAlert = GameConsoleAlertUtilsDefault.showSelfDismissableAlert;
              GameConsoleAlertUtilsDefault;
              if (tmp8Result.isAccountLinkError) {
                type1 = awaitingRemoteSessionInfo.type;
              }
              const result1 = showSelfDismissableAlert(obj4);
            }
            if (unpackModuleId.has(error.code)) {
              const awaitRemoteTimeout = require.awaitRemoteTimeout;
              if (awaitRemoteTimeout.isStarted()) {
                const awaitRemoteTimeout2 = require.awaitRemoteTimeout;
                awaitRemoteTimeout2.start(180000, () => {
                  obj = closure_1_0(closure_1_2[15]);
                  return obj.disconnectRemote();
                }, true);
              }
            }
            if ("failed" === result) {
              const obj3 = GameConsoleActionCreators;
              obj3.disconnectRemote();
            }
          }
        }
      }
    };
    applyArgumentsResult.handleRemoteSessionDisconnect = function handleRemoteSessionDisconnect() {
      const awaitRemoteTimeout = require.awaitRemoteTimeout;
      awaitRemoteTimeout.stop();
    };
    return applyArgumentsResult;
  }
}
const gameConsoleManager = new GameConsoleManager();
let result = size.fileFinishedImporting("modules/game_console/GameConsoleManager.tsx");

export default gameConsoleManager;