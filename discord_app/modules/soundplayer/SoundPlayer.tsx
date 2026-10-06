// discord_app/modules/soundplayer/SoundPlayer.tsx
import react2 from "../../../_runtime/00576_react.js";
import EmbeddedActivitiesStore2 from "../activities/EmbeddedActivitiesStore.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import SoundUtils from "../sound_playback/SoundUtils.tsx";
import VoiceConnectFeedbackExperimentDefault from "../voice_calls/VoiceConnectFeedbackExperiment.tsx";
import _modDef17131 from "../../../_runtime/metro/17131__.js";
import react_mod from "../../../_runtime/00019_react.js";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import ConjureProjectStore from "../conjure/projects/ConjureProjectStore.tsx";
import FramesStore from "../frames/FramesStore.tsx";
import GameConsoleStore from "../game_console/GameConsoleStore.tsx";
import ApplicationStreamingStore from "../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import NotificationSettingsStore from "../../stores/NotificationSettingsStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SpeakingStore from "../../stores/SpeakingStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import SortedVoiceStateStore from "../../stores/views/SortedVoiceStateStore.tsx";
import Constants from "../../Constants.tsx";
import FramesConstants from "../frames/FramesConstants.tsx";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const EmbeddedActivitiesStore = EmbeddedActivitiesStore2;
let _require,
  allActiveStreams,
  connectedActivityLocation,
  dependencyMap,
  isSoundDisabled,
  mainFrame,
  voiceStateForChannel;

let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let react = react_mod;
const NO_ACTIVITIES = EmbeddedActivitiesStore2.NO_ACTIVITIES;
let closure_10 = ChannelRecord.SILENT_JOIN_LEAVE_CHANNEL_TYPES;
({
  InputModes: closure_22,
  ApplicationStreamStates: closure_23,
  ChannelTypes: closure_24,
  RTCConnectionStates: closure_25,
} = Constants);
({ getChannelIdForSurface: closure_26, isLaunched: closure_27 } = FramesConstants);
({ jsx: closure_28, Fragment: closure_29, jsxs: closure_30 } = Fragment);
let c31 = 25;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_32 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3) => {
      let closure_2;
      let closure_3;
      _require = arg0;
      let closure_1 = arg1;
      dependencyMap = arg2;
      react = arg3;
      const obj = require("react");
      const cResult = obj.c(5);
      if (cResult[0] === arg2) {
        if (cResult[1] === arg1) {
          if (cResult[2] === arg0) {
            let tmp2;
            if (cResult[3] === arg3) {
              tmp2 = cResult[4];
            }
            const effect = react.useEffect(tmp2);
          }
        }
      }
      const fn = function o() {
        let batchedStoreListener;
        closure_0 = batchedStoreListener();
        batchedStoreListener = new closure_0(closure_2[23]).BatchedStoreListener(closure_0, () => {
          const tmp = batchedStoreListener();
          const tmp2 = closure_2(closure_0, tmp);
          const isSoundDisabledResult = null == tmp2 || NotificationSettingsStore.isSoundDisabled(tmp2);
          if (!isSoundDisabledResult) {
            let num = closure_3;
            const playSound = SoundUtils.playSound;
            SoundUtils;
            if (closure_3 == null) {
              num = 0.4;
            }
            playSound(tmp2, num);
          }
          closure_0 = tmp;
        });
        batchedStoreListener.attach("useSound");
        return () => batchedStoreListener.detach();
      };
      cResult[0] = arg2;
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = arg3;
      cResult[4] = fn;
      tmp2 = fn;
    }
  : (arg0, arg1, arg2, arg3) => {
      let closure_3;
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      react = arg3;
      const effect = react.useEffect(() => {
        let batchedStoreListener;
        closure_0 = batchedStoreListener();
        batchedStoreListener = new closure_0(closure_2[23]).BatchedStoreListener(closure_0, () => {
          const tmp = batchedStoreListener();
          const tmp2 = closure_2(closure_0, tmp);
          const isSoundDisabledResult = null == tmp2 || NotificationSettingsStore.isSoundDisabled(tmp2);
          if (!isSoundDisabledResult) {
            let num = closure_3;
            const playSound = SoundUtils.playSound;
            SoundUtils;
            if (closure_3 == null) {
              num = 0.4;
            }
            playSound(tmp2, num);
          }
          closure_0 = tmp;
        });
        batchedStoreListener.attach("useSound");
        return () => batchedStoreListener.detach();
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp2;
      let tmp3;
      let tmp4;
      let voiceChannelId;
      let obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore, SelectedChannelStore];
        const fn = function t() {
          const obj = {
            inVoiceChannel: null != voiceChannelId.getVoiceChannelId(),
            selfMute: MediaEngineStore.isSelfMute(),
            selfDeaf: MediaEngineStore.isSelfDeaf(),
            audioPermissionReady: MediaEngineStore.isNativeAudioPermissionReady(),
            shouldSkipMuteUnmuteSound: MediaEngineStore.shouldSkipMuteUnmuteSound(),
          };
          return obj;
        };
        const fn2 = function l(selfDeaf, arg1) {
          let inVoiceChannel;
          let selfMute;
          ({ inVoiceChannel, selfMute, selfDeaf } = arg1);
          if (inVoiceChannel) {
            if (selfDeaf.selfDeaf !== selfDeaf) {
              let str2 = "undeafen";
              if (selfDeaf) {
                str2 = "deafen";
              }
              return str2;
            } else if (tmp) {
              let tmp4;
              if (selfDeaf.selfMute !== selfMute) {
                let str;
                if (tmp2) {
                  const result = MediaEngineStore.notifyMuteUnmuteSoundWasSkipped();
                } else {
                  str = "unmute";
                  if (selfMute) {
                    str = "mute";
                  }
                }
                tmp4 = str;
              }
              return tmp4;
            }
          }
        };
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = fn2;
        tmp4 = fn2;
        tmp2 = items;
        tmp3 = fn;
      } else {
        [tmp2, tmp3, tmp4] = cResult;
      }
      closure_32(tmp2, tmp3, tmp4);
      return null;
    }
  : () => {
      let voiceChannelId;
      const items = [MediaEngineStore, SelectedChannelStore];
      const tmp = closure_32(
        items,
        () => {
          const obj = {
            inVoiceChannel: null != voiceChannelId.getVoiceChannelId(),
            selfMute: MediaEngineStore.isSelfMute(),
            selfDeaf: MediaEngineStore.isSelfDeaf(),
            audioPermissionReady: MediaEngineStore.isNativeAudioPermissionReady(),
            shouldSkipMuteUnmuteSound: MediaEngineStore.shouldSkipMuteUnmuteSound(),
          };
          return obj;
        },
        (selfDeaf, arg1) => {
          let inVoiceChannel;
          let selfMute;
          ({ inVoiceChannel, selfMute, selfDeaf } = arg1);
          if (inVoiceChannel) {
            if (selfDeaf.selfDeaf !== selfDeaf) {
              let str2 = "undeafen";
              if (selfDeaf) {
                str2 = "deafen";
              }
              return str2;
            } else if (tmp) {
              let tmp4;
              if (selfDeaf.selfMute !== selfMute) {
                let str;
                if (tmp2) {
                  const result = MediaEngineStore.notifyMuteUnmuteSoundWasSkipped();
                } else {
                  str = "unmute";
                  if (selfMute) {
                    str = "mute";
                  }
                }
                tmp4 = str;
              }
              return tmp4;
            }
          }
        },
      );
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp2;
      let tmp3;
      let tmp4;
      let voiceChannelId;
      let obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore, SelectedChannelStore];
        const fn = function t() {
          const obj = {
            videoEnabled: videoEnabled.isVideoEnabled(),
            inVoiceChannel: null != voiceChannelId.getVoiceChannelId(),
          };
          return obj;
        };
        const fn2 = function l(videoEnabled, videoEnabled2) {
          videoEnabled = videoEnabled2.videoEnabled;
          if (videoEnabled.videoEnabled !== videoEnabled) {
            if (videoEnabled.inVoiceChannel) {
              if (videoEnabled2.inVoiceChannel) {
                let str = "camera_off";
                if (videoEnabled) {
                  str = "camera_on";
                }
                return str;
              }
            }
          }
        };
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = fn2;
        tmp2 = items;
        tmp3 = fn;
        tmp4 = fn2;
      } else {
        [tmp2, tmp3, tmp4] = cResult;
      }
      closure_32(tmp2, tmp3, tmp4);
      return null;
    }
  : () => {
      let voiceChannelId;
      const items = [MediaEngineStore, SelectedChannelStore];
      closure_32(
        items,
        () => {
          const obj = {
            videoEnabled: videoEnabled.isVideoEnabled(),
            inVoiceChannel: null != voiceChannelId.getVoiceChannelId(),
          };
          return obj;
        },
        (videoEnabled, videoEnabled2) => {
          videoEnabled = videoEnabled2.videoEnabled;
          if (videoEnabled.videoEnabled !== videoEnabled) {
            if (videoEnabled.inVoiceChannel) {
              if (videoEnabled2.inVoiceChannel) {
                let str = "camera_off";
                if (videoEnabled) {
                  str = "camera_on";
                }
                return str;
              }
            }
          }
        },
      );
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp2;
      let tmp3;
      let tmp4;
      let voiceChannelId;
      let obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore, RTCConnectionStore, SelectedChannelStore, GameConsoleStore];
        const fn = function t() {
          channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
          let type;
          if (channel != null) {
            type = channel.type;
          }
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          const wasEverRtcConnected = RTCConnectionStore.getWasEverRtcConnected();
          const state = RTCConnectionStore.getState();
          const obj = {
            channelType: type,
            guildId,
            connected: state === constants.RTC_CONNECTED,
            connectHasStarted:
              (!wasEverRtcConnected && state !== constants.DISCONNECTED) || state === constants.RTC_CONNECTED,
            awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(),
            connectedRemote: null != GameConsoleStore.getRemoteSessionId(),
          };
          return obj;
        };
        const fn2 = function l(connectedRemote, arg1) {
          let awaitingRemote;
          let channelType;
          let channelType2;
          let connectHasStarted;
          let connected;
          let connected2;
          ({ channelType, connected, connectedRemote } = arg1);
          ({ channelType: channelType2, connected: connected2 } = connectedRemote);
          let tmp = connectedRemote;
          ({ connectHasStarted, awaitingRemote } = arg1);
          if (connectedRemote) {
            tmp = !connectedRemote.connectedRemote;
          }
          let tmp2 = !connectedRemote.connectHasStarted && connectHasStarted;
          if (!tmp2) {
            if (!(!connected2 && connected)) {
              if (!tmp) {
                if (connected2) {
                  if (!connected) {
                    if (!awaitingRemote) {
                      if (!connectedRemote) {
                        return "disconnect";
                      }
                    }
                  }
                }
              }
            }
          }
          if (tmp) {
            return "user_join";
          } else {
            const obj = VoiceConnectFeedbackExperimentDefault;
            if (obj.getConfig({ location: "RTCConnect" }).rtcConnectionJoinSounds) {
              tmp2 = tmp3;
            }
            if (tmp2) {
              return "user_join";
            }
          }
        };
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = fn2;
        tmp3 = fn;
        tmp2 = items;
        tmp4 = fn2;
      } else {
        [tmp2, tmp3, tmp4] = cResult;
      }
      closure_32(tmp2, tmp3, tmp4);
      return null;
    }
  : () => {
      let voiceChannelId;
      const items = [ChannelStore, RTCConnectionStore, SelectedChannelStore, GameConsoleStore];
      let tmp = closure_32(
        items,
        () => {
          channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
          let type;
          if (channel != null) {
            type = channel.type;
          }
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          const wasEverRtcConnected = RTCConnectionStore.getWasEverRtcConnected();
          const state = RTCConnectionStore.getState();
          const obj = {
            channelType: type,
            guildId,
            connected: state === constants.RTC_CONNECTED,
            connectHasStarted:
              (!wasEverRtcConnected && state !== constants.DISCONNECTED) || state === constants.RTC_CONNECTED,
            awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(),
            connectedRemote: null != GameConsoleStore.getRemoteSessionId(),
          };
          return obj;
        },
        (connectedRemote, arg1) => {
          let awaitingRemote;
          let channelType;
          let channelType2;
          let connectHasStarted;
          let connected;
          let connected2;
          ({ channelType, connected, connectedRemote } = arg1);
          ({ channelType: channelType2, connected: connected2 } = connectedRemote);
          let tmp = connectedRemote;
          ({ connectHasStarted, awaitingRemote } = arg1);
          if (connectedRemote) {
            tmp = !connectedRemote.connectedRemote;
          }
          let tmp2 = !connectedRemote.connectHasStarted && connectHasStarted;
          if (!tmp2) {
            if (!(!connected2 && connected)) {
              if (!tmp) {
                if (connected2) {
                  if (!connected) {
                    if (!awaitingRemote) {
                      if (!connectedRemote) {
                        return "disconnect";
                      }
                    }
                  }
                }
              }
            }
          }
          if (tmp) {
            return "user_join";
          } else {
            const obj = VoiceConnectFeedbackExperimentDefault;
            if (obj.getConfig({ location: "RTCConnect" }).rtcConnectionJoinSounds) {
              tmp2 = tmp3;
            }
            if (tmp2) {
              return "user_join";
            }
          }
        },
      );
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUserPTTActive;
      let tmp2;
      let tmp3;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SpeakingStore];
        const fn = function t() {
          return currentUserPTTActive.isCurrentUserPTTActive();
        };
        const fn2 = function l(arg0, arg1) {
          if (arg0 !== arg1) {
            const isSelfMuteResult = MediaEngineStore.isSelfMute();
            if (MediaEngineStore.getMode() === constants.PUSH_TO_TALK) {
              if (!isSelfMuteResult) {
                let str = "ptt_stop";
                if (arg1) {
                  str = "ptt_start";
                }
                return str;
              }
            }
          }
        };
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = fn2;
        tmp2 = items;
        tmp3 = fn;
        tmp4 = fn2;
      } else {
        [tmp2, tmp3, tmp4] = cResult;
      }
      closure_32(tmp2, tmp3, tmp4);
      return null;
    }
  : () => {
      let currentUserPTTActive;
      const items = [SpeakingStore];
      closure_32(
        items,
        () => currentUserPTTActive.isCurrentUserPTTActive(),
        (arg0, arg1) => {
          if (arg0 !== arg1) {
            const isSelfMuteResult = MediaEngineStore.isSelfMute();
            if (MediaEngineStore.getMode() === constants.PUSH_TO_TALK) {
              if (!isSelfMuteResult) {
                let str = "ptt_stop";
                if (arg1) {
                  str = "ptt_start";
                }
                return str;
              }
            }
          }
        },
      );
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp2;
      let tmp3;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore, NotificationSettingsStore];
        const fn = function t() {
          return MediaEngineStore.isSelfMutedTemporarily();
        };
        const fn2 = function l(arg0, arg1) {
          if (arg0 !== arg1) {
            const isSelfMuteResult = MediaEngineStore.isSelfMute();
            if (MediaEngineStore.getMode() === constants.VOICE_ACTIVITY) {
              if (!isSelfMuteResult) {
                let str = "unmute";
                isSoundDisabled = isSoundDisabled.isSoundDisabled;
                if (arg1) {
                  str = "mute";
                }
                if (!isSoundDisabled(str)) {
                  let str2 = "ptt_start";
                  if (arg1) {
                    str2 = "ptt_stop";
                  }
                  return str2;
                }
              }
            }
          }
        };
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = fn2;
        tmp2 = items;
        tmp3 = fn;
        tmp4 = fn2;
      } else {
        [tmp2, tmp3, tmp4] = cResult;
      }
      closure_32(tmp2, tmp3, tmp4);
      return null;
    }
  : () => {
      const items = [MediaEngineStore, NotificationSettingsStore];
      closure_32(
        items,
        () => MediaEngineStore.isSelfMutedTemporarily(),
        (arg0, arg1) => {
          if (arg0 !== arg1) {
            const isSelfMuteResult = MediaEngineStore.isSelfMute();
            if (MediaEngineStore.getMode() === constants.VOICE_ACTIVITY) {
              if (!isSelfMuteResult) {
                let str = "unmute";
                isSoundDisabled = isSoundDisabled.isSoundDisabled;
                if (arg1) {
                  str = "mute";
                }
                if (!isSoundDisabled(str)) {
                  let str2 = "ptt_start";
                  if (arg1) {
                    str2 = "ptt_stop";
                  }
                  return str2;
                }
              }
            }
          }
        },
      );
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_38 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUserPrioritySpeaker;
      let tmp2;
      let tmp3;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SpeakingStore];
        const fn = function t() {
          return currentUserPrioritySpeaker.isCurrentUserPrioritySpeaker();
        };
        const fn2 = function l(arg0, arg1) {
          if (arg0 !== arg1) {
            const isSelfMuteResult = MediaEngineStore.isSelfMute();
            if (MediaEngineStore.getMode() === constants.VOICE_ACTIVITY) {
              if (!isSelfMuteResult) {
                let str = "ptt_stop";
                if (arg1) {
                  str = "ptt_start";
                }
                return str;
              }
            }
          }
        };
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = fn2;
        tmp2 = items;
        tmp3 = fn;
        tmp4 = fn2;
      } else {
        [tmp2, tmp3, tmp4] = cResult;
      }
      closure_32(tmp2, tmp3, tmp4);
      return null;
    }
  : () => {
      let currentUserPrioritySpeaker;
      const items = [SpeakingStore];
      closure_32(
        items,
        () => currentUserPrioritySpeaker.isCurrentUserPrioritySpeaker(),
        (arg0, arg1) => {
          if (arg0 !== arg1) {
            const isSelfMuteResult = MediaEngineStore.isSelfMute();
            if (MediaEngineStore.getMode() === constants.VOICE_ACTIVITY) {
              if (!isSelfMuteResult) {
                let str = "ptt_stop";
                if (arg1) {
                  str = "ptt_start";
                }
                return str;
              }
            }
          }
        },
      );
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_39 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp2;
      let tmp3;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [VoiceStateStore];
        const fn = function t() {
          return VoiceStateStore.userHasBeenMovedVersion;
        };
        const fn2 = function l(arg0, arg1) {
          if (arg0 !== arg1) {
            return "user_moved";
          }
        };
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = fn2;
        tmp2 = items;
        tmp3 = fn;
        tmp4 = fn2;
      } else {
        [tmp2, tmp3, tmp4] = cResult;
      }
      closure_32(tmp2, tmp3, tmp4);
      return null;
    }
  : () => {
      const items = [VoiceStateStore];
      closure_32(
        items,
        () => VoiceStateStore.userHasBeenMovedVersion,
        (arg0, arg1) => {
          if (arg0 !== arg1) {
            return "user_moved";
          }
        },
      );
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_40 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp2;
      let tmp3;
      let tmp4;
      let obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedChannelStore, VoiceStateStore];
        const fn = function t() {
          voiceChannelId = voiceChannelId.getVoiceChannelId();
          if (null == voiceChannelId) {
            return require("useAudienceRequestToSpeakState").RequestToSpeakStates.NONE;
          } else {
            voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(voiceChannelId);
            const obj = require("useAudienceRequestToSpeakState");
            return obj.getAudienceRequestToSpeakState(voiceStateForChannel);
          }
        };
        const fn2 = function l(arg0, arg1) {
          if (arg0 !== arg1) {
            if (
              arg1 ===
              require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            ) {
              return "reconnect";
            }
          }
        };
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = fn2;
        tmp2 = items;
        tmp3 = fn;
        tmp4 = fn2;
      } else {
        [tmp2, tmp3, tmp4] = cResult;
      }
      closure_32(tmp2, tmp3, tmp4);
      return null;
    }
  : () => {
      const items = [SelectedChannelStore, VoiceStateStore];
      closure_32(
        items,
        () => {
          voiceChannelId = voiceChannelId.getVoiceChannelId();
          if (null == voiceChannelId) {
            return require("useAudienceRequestToSpeakState").RequestToSpeakStates.NONE;
          } else {
            voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(voiceChannelId);
            const obj = require("useAudienceRequestToSpeakState");
            return obj.getAudienceRequestToSpeakState(voiceStateForChannel);
          }
        },
        (arg0, arg1) => {
          if (arg0 !== arg1) {
            if (
              arg1 ===
              require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            ) {
              return "reconnect";
            }
          }
        },
      );
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_41 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let channelId;
      let constants2;
      let first;
      let id;
      let inChannel;
      let tmp3;
      let tmp4;
      let tmp5;
      const obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [];
        let num = 0;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      _require = react.useRef(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let items1 = [
          SelectedChannelStore,
          ApplicationStreamingStore,
          AuthenticationStore,
          VoiceStateStore,
          ChannelStore,
          RTCConnectionStore,
        ];
        const fn = function c() {
          let first;
          voiceChannelId = voiceChannelId.getVoiceChannelId();
          const currentUserId = id.getId();
          let items = [];
          const items1 = [];
          allActiveStreams = allActiveStreams.getAllActiveStreams();
          let rtcUserIds = items1;
          let rtcConnected = false;
          let streamingUserIds = items;
          let voiceChannelUserCount;
          let channelType;
          if (null != voiceChannelId) {
            channel = channel.getChannel(voiceChannelId);
            let diff;
            let tmp10;
            if (null != channel) {
              const type = channel.type;
              const result = SortedVoiceStateStore.countVoiceStatesForChannel(channel.id);
              let num = 0;
              if (inChannel.isInChannel(channel.id)) {
                num = 1;
              }
              diff = result - num;
              const allApplicationStreamsForChannel = obj.getAllApplicationStreamsForChannel(channel.id);
              items = allApplicationStreamsForChannel.map((ownerId) => ownerId.ownerId);
              tmp10 = type;
            }
            rtcUserIds = items1;
            rtcConnected = false;
            streamingUserIds = items;
            voiceChannelUserCount = diff;
            channelType = tmp10;
            const tmp14 =
              channelId.getChannelId() === voiceChannelId && channelId.getState() === constants2.RTC_CONNECTED;
            if (tmp14) {
              const _Array = Array;
              let userIds = channelId.getUserIds();
              if (userIds == null) {
                userIds = [];
              }
              const fromResult = from(userIds);
              rtcUserIds = fromResult.filter((item) => item !== currentUserId);
              rtcConnected = true;
              streamingUserIds = items;
              voiceChannelUserCount = diff;
              channelType = tmp10;
            }
          }
          if (1 === allActiveStreams.length) {
            first = allActiveStreams[0];
          } else {
            first = obj.getCurrentUserActiveStream();
          }
          let state;
          if (first != null) {
            state = first.state;
          }
          if (state === constants.CONNECTING) {
            first = null;
          }
          let singleActiveStreamViewerCount = 0;
          let singleActiveStreamKey = null;
          if (null != first) {
            const obj3 = closure_0(dependencyMap[27]);
            const encodeStreamKeyResult = obj3.encodeStreamKey(first);
            const viewerIds = obj.getViewerIds(encodeStreamKeyResult);
            singleActiveStreamViewerCount = viewerIds.filter((item) => item !== currentUserId).length;
            singleActiveStreamKey = encodeStreamKeyResult;
          }
          return {
            channelType,
            voiceChannelId,
            voiceChannelUserCount,
            streamingUserIds,
            singleActiveStreamKey,
            singleActiveStreamViewerCount,
            currentUserId,
            allActiveStreams,
            rtcConnected,
            rtcUserIds,
          };
        };
        const fn2 = function o(rtcConnected, arg1) {
          let channelType;
          let closure_129_2;
          let keys;
          let rtcUserIds;
          let singleActiveStreamKey;
          let singleActiveStreamViewerCount;
          let streamingUserIds;
          let streamingUserIds2;
          let tmp2;
          let voiceChannelUserCount;
          let voiceChannelUserCount2;
          closure_0 = rtcConnected;
          ({ channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds } = arg1);
          ({
            singleActiveStreamKey,
            singleActiveStreamViewerCount,
            currentUserId: closure_129_2,
            rtcConnected,
            rtcUserIds,
          } = arg1);
          const tmp = closure_0;
          if (rtcConnected) {
            const rtcConnected2 = rtcConnected.rtcConnected || null == voiceChannelId;
            keys = tmp2;
            if (!rtcConnected2) {
              const _Object = Object;
              keys = Object.keys(VoiceStateStore.getVoiceStatesForChannel(voiceChannelId));
            }
          } else {
            keys = [];
          }
          const tmp8 = _modDef17131(rtcUserIds, rtcConnected.rtcUserIds);
          const rtcConnected3 =
            rtcConnected.rtcConnected && rtcConnected.rtcUserIds.length <= c31 && _modDef17131(tmp8, keys).length > 0;
          const tmp10 =
            rtcConnected.rtcConnected &&
            rtcConnected &&
            rtcConnected.rtcUserIds.length <= c31 &&
            _modDef17131(rtcConnected.rtcUserIds, rtcUserIds).length > 0;
          tmp.current = _modDef17131(keys, tmp8);
          if (rtcConnected.voiceChannelId === voiceChannelId) {
            if (null != voiceChannelId) {
              channel = ChannelStore.getChannel(voiceChannelId);
              let flag = false;
              if (null != channel) {
                const guildId = channel.getGuildId();
                flag = false;
                if (null != guildId) {
                  const guild = GuildStore.getGuild(guildId);
                  flag = null != guild && guild.afkChannelId === channel.id;
                }
              }
              if (!flag) {
                allActiveStreams = rtcConnected.allActiveStreams;
                const someResult = streamingUserIds.some((item) => {
                  streamingUserIds = streamingUserIds.streamingUserIds;
                  return !streamingUserIds.includes(item);
                });
                let closure_3 = allActiveStreams.map((ownerId) => ownerId.ownerId);
                ({ streamingUserIds: streamingUserIds2, voiceChannelUserCount: voiceChannelUserCount2 } = rtcConnected);
                let tmp20 = null != voiceChannelUserCount2;
                const someResult1 = streamingUserIds2.some((item) => {
                  const hasItem = streamingUserIds.includes(item);
                  let tmp2 = !hasItem;
                  if (tmp2) {
                    const hasItem1 = item === closure_1_2 || closure_3.includes(item);
                    tmp2 = hasItem1;
                  }
                  return tmp2;
                });
                if (tmp20) {
                  tmp20 = null != voiceChannelUserCount;
                }
                if (tmp20) {
                  tmp20 = voiceChannelUserCount2 <= c31;
                }
                let tmp22 = tmp20 && voiceChannelUserCount > voiceChannelUserCount2;
                if (tmp20) {
                  tmp20 = voiceChannelUserCount < voiceChannelUserCount2;
                }
                let rtcConnectionJoinSounds = tmp22 || tmp20 || rtcConnected3 || tmp10;
                if (rtcConnectionJoinSounds) {
                  const tmp6Result = VoiceConnectFeedbackExperimentDefault;
                  rtcConnectionJoinSounds = tmp6Result.getConfig({ location: "VoiceChannel" }).rtcConnectionJoinSounds;
                }
                if (rtcConnectionJoinSounds) {
                  tmp20 = tmp10;
                  tmp22 = rtcConnected3;
                }
                let str = "stream_started";
                if (!someResult) {
                  let str2 = "stream_ended";
                  if (!someResult1) {
                    if (rtcConnected.singleActiveStreamViewerCount <= c31) {
                      let str3;
                      if (
                        null != singleActiveStreamKey &&
                        rtcConnected.singleActiveStreamKey === singleActiveStreamKey
                      ) {
                        str3 = "stream_user_joined";
                      }
                      str2 = str3;
                    }
                    let str4 = "user_join";
                    if (!tmp22) {
                      let str5 = "user_leave";
                      if (!tmp20) {
                        let str6;
                        if (rtcConnected.singleActiveStreamViewerCount <= c31) {
                          if (
                            null != singleActiveStreamKey &&
                            rtcConnected.singleActiveStreamKey === singleActiveStreamKey
                          ) {
                            if (singleActiveStreamViewerCount < rtcConnected.singleActiveStreamViewerCount) {
                              str6 = "stream_user_left";
                            }
                          }
                        }
                        str5 = str6;
                      }
                      str4 = str5;
                    }
                    str3 = str4;
                  }
                  str = str2;
                }
                return str;
              }
            }
          }
        };
        cResult[1] = items1;
        cResult[2] = fn;
        cResult[3] = fn2;
        tmp5 = fn2;
        tmp4 = fn;
        tmp3 = items1;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
        tmp5 = cResult[3];
      }
      closure_32(tmp3, tmp4, tmp5);
      return null;
    }
  : () => {
      let channelId;
      let constants2;
      let id;
      let inChannel;
      let closure_0 = react.useRef([]);
      let items = [
        SelectedChannelStore,
        ApplicationStreamingStore,
        AuthenticationStore,
        VoiceStateStore,
        ChannelStore,
        RTCConnectionStore,
      ];
      let tmp = closure_32(
        items,
        () => {
          let first;
          voiceChannelId = voiceChannelId.getVoiceChannelId();
          const currentUserId = id.getId();
          let items = [];
          const items1 = [];
          allActiveStreams = allActiveStreams.getAllActiveStreams();
          let rtcUserIds = items1;
          let rtcConnected = false;
          let streamingUserIds = items;
          let voiceChannelUserCount;
          let channelType;
          if (null != voiceChannelId) {
            channel = channel.getChannel(voiceChannelId);
            let diff;
            let tmp10;
            if (null != channel) {
              const type = channel.type;
              const result = SortedVoiceStateStore.countVoiceStatesForChannel(channel.id);
              let num = 0;
              if (inChannel.isInChannel(channel.id)) {
                num = 1;
              }
              diff = result - num;
              const allApplicationStreamsForChannel = obj.getAllApplicationStreamsForChannel(channel.id);
              items = allApplicationStreamsForChannel.map((ownerId) => ownerId.ownerId);
              tmp10 = type;
            }
            rtcUserIds = items1;
            rtcConnected = false;
            streamingUserIds = items;
            voiceChannelUserCount = diff;
            channelType = tmp10;
            const tmp14 =
              channelId.getChannelId() === voiceChannelId && channelId.getState() === constants2.RTC_CONNECTED;
            if (tmp14) {
              const _Array = Array;
              let userIds = channelId.getUserIds();
              if (userIds == null) {
                userIds = [];
              }
              const fromResult = from(userIds);
              rtcUserIds = fromResult.filter((item) => item !== currentUserId);
              rtcConnected = true;
              streamingUserIds = items;
              voiceChannelUserCount = diff;
              channelType = tmp10;
            }
          }
          if (1 === allActiveStreams.length) {
            first = allActiveStreams[0];
          } else {
            first = obj.getCurrentUserActiveStream();
          }
          let state;
          if (first != null) {
            state = first.state;
          }
          if (state === constants.CONNECTING) {
            first = null;
          }
          let singleActiveStreamViewerCount = 0;
          let singleActiveStreamKey = null;
          if (null != first) {
            const obj3 = closure_0(dependencyMap[27]);
            const encodeStreamKeyResult = obj3.encodeStreamKey(first);
            const viewerIds = obj.getViewerIds(encodeStreamKeyResult);
            singleActiveStreamViewerCount = viewerIds.filter((item) => item !== currentUserId).length;
            singleActiveStreamKey = encodeStreamKeyResult;
          }
          return {
            channelType,
            voiceChannelId,
            voiceChannelUserCount,
            streamingUserIds,
            singleActiveStreamKey,
            singleActiveStreamViewerCount,
            currentUserId,
            allActiveStreams,
            rtcConnected,
            rtcUserIds,
          };
        },
        (rtcConnected, arg1) => {
          let channelType;
          let closure_129_2;
          let keys;
          let rtcUserIds;
          let singleActiveStreamKey;
          let singleActiveStreamViewerCount;
          let streamingUserIds;
          let streamingUserIds2;
          let tmp2;
          let voiceChannelUserCount;
          let voiceChannelUserCount2;
          closure_0 = rtcConnected;
          ({ channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds } = arg1);
          ({
            singleActiveStreamKey,
            singleActiveStreamViewerCount,
            currentUserId: closure_129_2,
            rtcConnected,
            rtcUserIds,
          } = arg1);
          let closure_3;
          const tmp = closure_0;
          if (rtcConnected) {
            const rtcConnected2 = rtcConnected.rtcConnected || null == voiceChannelId;
            keys = tmp2;
            if (!rtcConnected2) {
              const _Object = Object;
              keys = Object.keys(VoiceStateStore.getVoiceStatesForChannel(voiceChannelId));
            }
          } else {
            keys = [];
          }
          const tmp8 = _modDef17131(rtcUserIds, rtcConnected.rtcUserIds);
          const rtcConnected3 =
            rtcConnected.rtcConnected && rtcConnected.rtcUserIds.length <= c31 && _modDef17131(tmp8, keys).length > 0;
          const tmp10 =
            rtcConnected.rtcConnected &&
            rtcConnected &&
            rtcConnected.rtcUserIds.length <= c31 &&
            _modDef17131(rtcConnected.rtcUserIds, rtcUserIds).length > 0;
          tmp.current = _modDef17131(keys, tmp8);
          if (rtcConnected.voiceChannelId === voiceChannelId) {
            if (null != voiceChannelId) {
              channel = ChannelStore.getChannel(voiceChannelId);
              let flag = false;
              if (null != channel) {
                const guildId = channel.getGuildId();
                flag = false;
                if (null != guildId) {
                  const guild = GuildStore.getGuild(guildId);
                  flag = null != guild && guild.afkChannelId === channel.id;
                }
              }
              if (!flag) {
                allActiveStreams = rtcConnected.allActiveStreams;
                const someResult = streamingUserIds.some((item) => {
                  streamingUserIds = streamingUserIds.streamingUserIds;
                  return !streamingUserIds.includes(item);
                });
                closure_3 = allActiveStreams.map((ownerId) => ownerId.ownerId);
                ({ streamingUserIds: streamingUserIds2, voiceChannelUserCount: voiceChannelUserCount2 } = rtcConnected);
                let tmp20 = null != voiceChannelUserCount2;
                const someResult1 = streamingUserIds2.some((item) => {
                  const hasItem = streamingUserIds.includes(item);
                  let tmp2 = !hasItem;
                  if (tmp2) {
                    const hasItem1 = item === closure_1_2 || closure_3.includes(item);
                    tmp2 = hasItem1;
                  }
                  return tmp2;
                });
                if (tmp20) {
                  tmp20 = null != voiceChannelUserCount;
                }
                if (tmp20) {
                  tmp20 = voiceChannelUserCount2 <= c31;
                }
                let tmp22 = tmp20 && voiceChannelUserCount > voiceChannelUserCount2;
                if (tmp20) {
                  tmp20 = voiceChannelUserCount < voiceChannelUserCount2;
                }
                let rtcConnectionJoinSounds = tmp22 || tmp20 || rtcConnected3 || tmp10;
                if (rtcConnectionJoinSounds) {
                  const tmp6Result = VoiceConnectFeedbackExperimentDefault;
                  rtcConnectionJoinSounds = tmp6Result.getConfig({ location: "VoiceChannel" }).rtcConnectionJoinSounds;
                }
                if (rtcConnectionJoinSounds) {
                  tmp20 = tmp10;
                  tmp22 = rtcConnected3;
                }
                let str = "stream_started";
                if (!someResult) {
                  let str2 = "stream_ended";
                  if (!someResult1) {
                    if (rtcConnected.singleActiveStreamViewerCount <= c31) {
                      let str3;
                      if (
                        null != singleActiveStreamKey &&
                        rtcConnected.singleActiveStreamKey === singleActiveStreamKey
                      ) {
                        str3 = "stream_user_joined";
                      }
                      str2 = str3;
                    }
                    let str4 = "user_join";
                    if (!tmp22) {
                      let str5 = "user_leave";
                      if (!tmp20) {
                        let str6;
                        if (rtcConnected.singleActiveStreamViewerCount <= c31) {
                          if (
                            null != singleActiveStreamKey &&
                            rtcConnected.singleActiveStreamKey === singleActiveStreamKey
                          ) {
                            if (singleActiveStreamViewerCount < rtcConnected.singleActiveStreamViewerCount) {
                              str6 = "stream_user_left";
                            }
                          }
                        }
                        str5 = str6;
                      }
                      str4 = str5;
                    }
                    str3 = str4;
                  }
                  str = str2;
                }
                return str;
              }
            }
          }
        },
      );
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_42 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp2;
      let tmp3;
      let tmp4;
      let obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [
          SelectedChannelStore,
          EmbeddedActivitiesStore,
          FramesStore,
          AuthenticationStore,
          ChannelStore,
          ConjureProjectStore,
          ApplicationStore,
          GuildStore,
        ];
        const fn = function u() {
          let embeddedActivitiesForChannel;
          let embeddedActivitiesForChannel1;
          let embeddedActivitiesForChannel2;
          const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
          const channelId = SelectedChannelStore.getChannelId();
          connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
          const obj2 = require("embeddedActivityLocationUtils");
          const embeddedActivityLocationChannelId =
            obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
          id = id.getId();
          const obj3 = require("GlobalUtils");
          if (obj3.isNotNullish(channelId)) {
            embeddedActivitiesForChannel = obj.getEmbeddedActivitiesForChannel(channelId);
          } else {
            embeddedActivitiesForChannel = NO_ACTIVITIES;
          }
          const tmp4Result = require("GlobalUtils");
          if (tmp4Result.isNotNullish(voiceChannelId)) {
            embeddedActivitiesForChannel1 = obj.getEmbeddedActivitiesForChannel(voiceChannelId);
          } else {
            embeddedActivitiesForChannel1 = NO_ACTIVITIES;
          }
          const tmp4Result4 = require("GlobalUtils");
          if (tmp4Result4.isNotNullish(embeddedActivityLocationChannelId)) {
            embeddedActivitiesForChannel2 = obj.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
          } else {
            embeddedActivitiesForChannel2 = NO_ACTIVITIES;
          }
          let selfEmbeddedActivityForLocation = null;
          const tmp4Result5 = require("GlobalUtils");
          if (tmp4Result5.isNotNullish(connectedActivityLocation)) {
            selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
          }
          mainFrame = mainFrame.getMainFrame();
          let surface;
          if (mainFrame != null) {
            surface = mainFrame.surface;
          }
          const tmp13Result = closure_1_26(surface);
          let result = null == tmp13Result;
          if (result) {
            let applicationId;
            const isConjureProjectApplication = ConjureProjectStore.isConjureProjectApplication;
            if (mainFrame != null) {
              applicationId = mainFrame.applicationId;
            }
            result = isConjureProjectApplication(applicationId);
          }
          let result1 = null != tmp13Result;
          if (result1) {
            const tmp4Result6 = require("ConjureUtils");
            result1 = tmp4Result6.isConjureChannelCandidate(ChannelStore.getChannel(tmp13Result), "ActivitySounds");
          }
          if (!result1) {
            result1 = result;
          }
          let tmp21 = null != embeddedActivityLocationChannelId;
          if (tmp21) {
            const channel = ChannelStore.getChannel(embeddedActivityLocationChannelId);
            let type;
            if (channel != null) {
              type = channel.type;
            }
            tmp21 = type === constants.GUILD_SPACE;
          }
          const obj4 = {
            connectedActivityLocation,
            voiceChannelId,
            currentUserId: id,
            channelActivities: embeddedActivitiesForChannel,
            connectedChannelActivities: embeddedActivitiesForChannel2,
            userConnectedActivity: selfEmbeddedActivityForLocation,
            voiceChannelActivities: embeddedActivitiesForChannel1,
            hasFrame: closure_1_27(mainFrame),
            inConjureChannel: result1,
            isGuildSpaceActivity: tmp21,
          };
          return obj4;
        };
        const fn2 = function v(isGuildSpaceActivity, arg1) {
          let channelActivities;
          let closure_129_0;
          let connectedChannelActivities;
          let hasFrame;
          let inConjureChannel;
          let userConnectedActivity;
          let voiceChannelActivities;
          let voiceChannelId;
          ({ connectedActivityLocation, currentUserId: closure_129_0, userConnectedActivity } = arg1);
          ({
            voiceChannelActivities,
            hasFrame,
            isGuildSpaceActivity,
            voiceChannelId,
            channelActivities,
            connectedChannelActivities,
            inConjureChannel,
          } = arg1);
          const someResult = voiceChannelActivities.some((applicationId) => {
            let applicationId1;
            applicationId = applicationId.applicationId;
            if (userConnectedActivity != null) {
              applicationId1 = userConnectedActivity.applicationId;
            }
            return applicationId === applicationId1 && applicationId.launchId === userConnectedActivity.launchId;
          });
          if (!isGuildSpaceActivity) {
            isGuildSpaceActivity = isGuildSpaceActivity.isGuildSpaceActivity;
          }
          let str;
          const obj = require("GlobalUtils");
          if (obj.isNotNullish(voiceChannelId)) {
            const prop = isGuildSpaceActivity.voiceChannelActivities;
            const found = prop.find((userIds) => {
              userIds = userIds.userIds;
              return userIds.has(closure_1_0);
            });
            const found1 = voiceChannelActivities.find((userIds) => {
              userIds = userIds.userIds;
              return userIds.has(closure_1_0);
            });
            let isNotNullishResult = isGuildSpaceActivity.voiceChannelActivities.length < voiceChannelActivities.length;
            if (isNotNullishResult) {
              const tmp2Result = require("GlobalUtils");
              isNotNullishResult = tmp2Result.isNotNullish(isGuildSpaceActivity.voiceChannelId);
            }
            let str2;
            if (isNotNullishResult) {
              str2 = "activity_launch";
            }
            let isNotNullishResult1 = undefined === found1;
            if (isNotNullishResult1) {
              const tmp2Result8 = require("GlobalUtils");
              isNotNullishResult1 = tmp2Result8.isNotNullish(found);
            }
            if (isNotNullishResult1) {
              str2 = "activity_end";
            }
            let isNotNullishResult2 = undefined === found;
            if (isNotNullishResult2) {
              const tmp2Result9 = require("GlobalUtils");
              isNotNullishResult2 = tmp2Result9.isNotNullish(found1);
            }
            if (isNotNullishResult2) {
              isNotNullishResult2 = found1.userIds.size > 1;
            }
            if (isNotNullishResult2) {
              str2 = "activity_user_join";
            }
            const tmp2Result10 = require("GlobalUtils");
            let isNotNullishResult3 = tmp2Result10.isNotNullish(found1);
            if (isNotNullishResult3) {
              const tmp2Result11 = require("GlobalUtils");
              isNotNullishResult3 = tmp2Result11.isNotNullish(found);
            }
            str = str2;
            if (isNotNullishResult3) {
              if (found1.userIds.size > found.userIds.size) {
                str2 = "activity_user_join";
              }
              if (found1.userIds.size < found.userIds.size) {
                str2 = "activity_user_left";
              }
              str = str2;
            }
          }
          let str3 = str;
          if (!someResult) {
            str3 = str;
            if (!isGuildSpaceActivity) {
              const tmp10 =
                isGuildSpaceActivity.connectedChannelActivities.length < connectedChannelActivities.length &&
                isGuildSpaceActivity.channelActivities.length < channelActivities.length;
              if (tmp10) {
                str = "activity_launch";
              }
              const userConnectedActivity2 = isGuildSpaceActivity.userConnectedActivity;
              let isNotNullishResult4 = null == userConnectedActivity;
              if (isNotNullishResult4) {
                const tmp2Result12 = require("GlobalUtils");
                isNotNullishResult4 = tmp2Result12.isNotNullish(userConnectedActivity2);
              }
              if (isNotNullishResult4) {
                str = "activity_end";
              }
              const tmp2Result13 = require("GlobalUtils");
              let isNotNullishResult5 = tmp2Result13.isNotNullish(userConnectedActivity);
              if (isNotNullishResult5) {
                const tmp2Result14 = require("GlobalUtils");
                isNotNullishResult5 = tmp2Result14.isNotNullish(userConnectedActivity2);
              }
              str3 = str;
              if (isNotNullishResult5) {
                if (userConnectedActivity.userIds.size > userConnectedActivity2.userIds.size) {
                  str = "activity_user_join";
                }
                if (userConnectedActivity.userIds.size < userConnectedActivity2.userIds.size) {
                  str = "activity_user_left";
                }
                str3 = str;
              }
            }
          }
          let tmp14 = null != str3 || isGuildSpaceActivity;
          if (!tmp14) {
            tmp14 = null == isGuildSpaceActivity.connectedActivityLocation && null == connectedActivityLocation;
          }
          let str4 = str3;
          if (!tmp14) {
            let str5;
            if (null != isGuildSpaceActivity.connectedActivityLocation) {
              let str6;
              if (null == isGuildSpaceActivity.connectedActivityLocation) {
                let tmp17 = str3;
                const tmp16 = null != userConnectedActivity && null != isGuildSpaceActivity.userConnectedActivity;
                if (tmp16) {
                  let str7 = "activity_user_join";
                  if (isGuildSpaceActivity.userConnectedActivity.userIds.size >= userConnectedActivity.userIds.size) {
                    if (isGuildSpaceActivity.userConnectedActivity.userIds.size > userConnectedActivity.userIds.size) {
                      str3 = "activity_user_leave";
                    }
                    str7 = str3;
                  }
                  tmp17 = str7;
                }
                str6 = tmp17;
              } else {
                str6 = "activity_end";
              }
              str5 = str6;
            } else {
              str5 = "activity_launch";
            }
            str4 = str5;
          }
          let tmp18 = null == str4;
          if (tmp18) {
            tmp18 = isGuildSpaceActivity.hasFrame || hasFrame;
          }
          let tmp20 = str4;
          if (tmp18) {
            if (!isGuildSpaceActivity.hasFrame) {
              let str8;
              if (hasFrame) {
                str8 = "activity_launch";
              }
              tmp20 = str8;
            }
            const hasFrame2 = isGuildSpaceActivity.hasFrame;
            let inConjureChannel2 = !hasFrame2;
            if (hasFrame2) {
              inConjureChannel2 = hasFrame;
            }
            if (!inConjureChannel2) {
              inConjureChannel2 = isGuildSpaceActivity.inConjureChannel;
            }
            if (!inConjureChannel2) {
              str4 = "activity_end";
            }
            str8 = str4;
          }
          return tmp20;
        };
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = fn2;
        tmp2 = items;
        tmp3 = fn;
        tmp4 = fn2;
      } else {
        [tmp2, tmp3, tmp4] = cResult;
      }
      closure_32(tmp2, tmp3, tmp4);
      return null;
    }
  : () => {
      const items = [
        SelectedChannelStore,
        EmbeddedActivitiesStore,
        FramesStore,
        AuthenticationStore,
        ChannelStore,
        ConjureProjectStore,
        ApplicationStore,
        GuildStore,
      ];
      closure_32(
        items,
        () => {
          let embeddedActivitiesForChannel;
          let embeddedActivitiesForChannel1;
          let embeddedActivitiesForChannel2;
          const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
          const channelId = SelectedChannelStore.getChannelId();
          connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
          const obj2 = require("embeddedActivityLocationUtils");
          const embeddedActivityLocationChannelId =
            obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
          id = id.getId();
          const obj3 = require("GlobalUtils");
          if (obj3.isNotNullish(channelId)) {
            embeddedActivitiesForChannel = obj.getEmbeddedActivitiesForChannel(channelId);
          } else {
            embeddedActivitiesForChannel = NO_ACTIVITIES;
          }
          const tmp4Result = require("GlobalUtils");
          if (tmp4Result.isNotNullish(voiceChannelId)) {
            embeddedActivitiesForChannel1 = obj.getEmbeddedActivitiesForChannel(voiceChannelId);
          } else {
            embeddedActivitiesForChannel1 = NO_ACTIVITIES;
          }
          const tmp4Result4 = require("GlobalUtils");
          if (tmp4Result4.isNotNullish(embeddedActivityLocationChannelId)) {
            embeddedActivitiesForChannel2 = obj.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
          } else {
            embeddedActivitiesForChannel2 = NO_ACTIVITIES;
          }
          let selfEmbeddedActivityForLocation = null;
          const tmp4Result5 = require("GlobalUtils");
          if (tmp4Result5.isNotNullish(connectedActivityLocation)) {
            selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
          }
          mainFrame = mainFrame.getMainFrame();
          let surface;
          if (mainFrame != null) {
            surface = mainFrame.surface;
          }
          const tmp13Result = closure_1_26(surface);
          let result = null == tmp13Result;
          if (result) {
            let applicationId;
            const isConjureProjectApplication = ConjureProjectStore.isConjureProjectApplication;
            if (mainFrame != null) {
              applicationId = mainFrame.applicationId;
            }
            result = isConjureProjectApplication(applicationId);
          }
          let result1 = null != tmp13Result;
          if (result1) {
            const tmp4Result6 = require("ConjureUtils");
            result1 = tmp4Result6.isConjureChannelCandidate(ChannelStore.getChannel(tmp13Result), "ActivitySounds");
          }
          if (!result1) {
            result1 = result;
          }
          let tmp21 = null != embeddedActivityLocationChannelId;
          if (tmp21) {
            const channel = ChannelStore.getChannel(embeddedActivityLocationChannelId);
            let type;
            if (channel != null) {
              type = channel.type;
            }
            tmp21 = type === constants.GUILD_SPACE;
          }
          const obj4 = {
            connectedActivityLocation,
            voiceChannelId,
            currentUserId: id,
            channelActivities: embeddedActivitiesForChannel,
            connectedChannelActivities: embeddedActivitiesForChannel2,
            userConnectedActivity: selfEmbeddedActivityForLocation,
            voiceChannelActivities: embeddedActivitiesForChannel1,
            hasFrame: closure_1_27(mainFrame),
            inConjureChannel: result1,
            isGuildSpaceActivity: tmp21,
          };
          return obj4;
        },
        (isGuildSpaceActivity, arg1) => {
          let channelActivities;
          let closure_129_0;
          let connectedChannelActivities;
          let hasFrame;
          let inConjureChannel;
          let userConnectedActivity;
          let voiceChannelActivities;
          let voiceChannelId;
          ({ connectedActivityLocation, currentUserId: closure_129_0, userConnectedActivity } = arg1);
          ({
            voiceChannelActivities,
            hasFrame,
            isGuildSpaceActivity,
            voiceChannelId,
            channelActivities,
            connectedChannelActivities,
            inConjureChannel,
          } = arg1);
          const someResult = voiceChannelActivities.some((applicationId) => {
            let applicationId1;
            applicationId = applicationId.applicationId;
            if (userConnectedActivity != null) {
              applicationId1 = userConnectedActivity.applicationId;
            }
            return applicationId === applicationId1 && applicationId.launchId === userConnectedActivity.launchId;
          });
          if (!isGuildSpaceActivity) {
            isGuildSpaceActivity = isGuildSpaceActivity.isGuildSpaceActivity;
          }
          let str;
          const obj = require("GlobalUtils");
          if (obj.isNotNullish(voiceChannelId)) {
            const prop = isGuildSpaceActivity.voiceChannelActivities;
            const found = prop.find((userIds) => {
              userIds = userIds.userIds;
              return userIds.has(closure_1_0);
            });
            const found1 = voiceChannelActivities.find((userIds) => {
              userIds = userIds.userIds;
              return userIds.has(closure_1_0);
            });
            let isNotNullishResult = isGuildSpaceActivity.voiceChannelActivities.length < voiceChannelActivities.length;
            if (isNotNullishResult) {
              const tmp2Result = require("GlobalUtils");
              isNotNullishResult = tmp2Result.isNotNullish(isGuildSpaceActivity.voiceChannelId);
            }
            let str2;
            if (isNotNullishResult) {
              str2 = "activity_launch";
            }
            let isNotNullishResult1 = undefined === found1;
            if (isNotNullishResult1) {
              const tmp2Result8 = require("GlobalUtils");
              isNotNullishResult1 = tmp2Result8.isNotNullish(found);
            }
            if (isNotNullishResult1) {
              str2 = "activity_end";
            }
            let isNotNullishResult2 = undefined === found;
            if (isNotNullishResult2) {
              const tmp2Result9 = require("GlobalUtils");
              isNotNullishResult2 = tmp2Result9.isNotNullish(found1);
            }
            if (isNotNullishResult2) {
              isNotNullishResult2 = found1.userIds.size > 1;
            }
            if (isNotNullishResult2) {
              str2 = "activity_user_join";
            }
            const tmp2Result10 = require("GlobalUtils");
            let isNotNullishResult3 = tmp2Result10.isNotNullish(found1);
            if (isNotNullishResult3) {
              const tmp2Result11 = require("GlobalUtils");
              isNotNullishResult3 = tmp2Result11.isNotNullish(found);
            }
            str = str2;
            if (isNotNullishResult3) {
              if (found1.userIds.size > found.userIds.size) {
                str2 = "activity_user_join";
              }
              if (found1.userIds.size < found.userIds.size) {
                str2 = "activity_user_left";
              }
              str = str2;
            }
          }
          let str3 = str;
          if (!someResult) {
            str3 = str;
            if (!isGuildSpaceActivity) {
              const tmp10 =
                isGuildSpaceActivity.connectedChannelActivities.length < connectedChannelActivities.length &&
                isGuildSpaceActivity.channelActivities.length < channelActivities.length;
              if (tmp10) {
                str = "activity_launch";
              }
              const userConnectedActivity2 = isGuildSpaceActivity.userConnectedActivity;
              let isNotNullishResult4 = null == userConnectedActivity;
              if (isNotNullishResult4) {
                const tmp2Result12 = require("GlobalUtils");
                isNotNullishResult4 = tmp2Result12.isNotNullish(userConnectedActivity2);
              }
              if (isNotNullishResult4) {
                str = "activity_end";
              }
              const tmp2Result13 = require("GlobalUtils");
              let isNotNullishResult5 = tmp2Result13.isNotNullish(userConnectedActivity);
              if (isNotNullishResult5) {
                const tmp2Result14 = require("GlobalUtils");
                isNotNullishResult5 = tmp2Result14.isNotNullish(userConnectedActivity2);
              }
              str3 = str;
              if (isNotNullishResult5) {
                if (userConnectedActivity.userIds.size > userConnectedActivity2.userIds.size) {
                  str = "activity_user_join";
                }
                if (userConnectedActivity.userIds.size < userConnectedActivity2.userIds.size) {
                  str = "activity_user_left";
                }
                str3 = str;
              }
            }
          }
          let tmp14 = null != str3 || isGuildSpaceActivity;
          if (!tmp14) {
            tmp14 = null == isGuildSpaceActivity.connectedActivityLocation && null == connectedActivityLocation;
          }
          let str4 = str3;
          if (!tmp14) {
            let str5;
            if (null != isGuildSpaceActivity.connectedActivityLocation) {
              let str6;
              if (null == isGuildSpaceActivity.connectedActivityLocation) {
                let tmp17 = str3;
                const tmp16 = null != userConnectedActivity && null != isGuildSpaceActivity.userConnectedActivity;
                if (tmp16) {
                  let str7 = "activity_user_join";
                  if (isGuildSpaceActivity.userConnectedActivity.userIds.size >= userConnectedActivity.userIds.size) {
                    if (isGuildSpaceActivity.userConnectedActivity.userIds.size > userConnectedActivity.userIds.size) {
                      str3 = "activity_user_leave";
                    }
                    str7 = str3;
                  }
                  tmp17 = str7;
                }
                str6 = tmp17;
              } else {
                str6 = "activity_end";
              }
              str5 = str6;
            } else {
              str5 = "activity_launch";
            }
            str4 = str5;
          }
          let tmp18 = null == str4;
          if (tmp18) {
            tmp18 = isGuildSpaceActivity.hasFrame || hasFrame;
          }
          let tmp20 = str4;
          if (tmp18) {
            if (!isGuildSpaceActivity.hasFrame) {
              let str8;
              if (hasFrame) {
                str8 = "activity_launch";
              }
              tmp20 = str8;
            }
            const hasFrame2 = isGuildSpaceActivity.hasFrame;
            let inConjureChannel2 = !hasFrame2;
            if (hasFrame2) {
              inConjureChannel2 = hasFrame;
            }
            if (!inConjureChannel2) {
              inConjureChannel2 = isGuildSpaceActivity.inConjureChannel;
            }
            if (!inConjureChannel2) {
              str4 = "activity_end";
            }
            str8 = str4;
          }
          return tmp20;
        },
      );
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let items;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: items };
        items = [
          closure_28(closure_33, {}),
          closure_28(closure_34, {}),
          closure_28(closure_35, {}),
          closure_28(closure_36, {}),
          closure_28(closure_37, {}),
          closure_28(closure_39, {}),
          closure_28(closure_41, {}),
          closure_28(closure_40, {}),
          closure_28(closure_42, {}),
          closure_28(closure_38, {}),
        ];
        const tmp16 = __initData(set, obj2);
        cResult[0] = tmp16;
        first = tmp16;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      let items;
      const obj = { children: items };
      items = [
        closure_28(closure_33, {}),
        closure_28(closure_34, {}),
        closure_28(closure_35, {}),
        closure_28(closure_36, {}),
        closure_28(closure_37, {}),
        closure_28(closure_39, {}),
        closure_28(closure_41, {}),
        closure_28(closure_40, {}),
        closure_28(closure_42, {}),
        closure_28(closure_38, {}),
      ];
      return __initData(set, obj);
    };
let result = size.fileFinishedImporting("modules/soundplayer/SoundPlayer.tsx");

export default tmp5;
