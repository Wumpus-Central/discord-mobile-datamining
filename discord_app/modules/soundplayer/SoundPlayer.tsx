// discord_app/modules/soundplayer/SoundPlayer.tsx
import c from "../../../_runtime/00576_c.js";
import getChannelIdForEmbeddedSurfaceDefault from "../embedded_apps/utils/getChannelIdForEmbeddedSurface.tsx";
import SoundUtils from "../sound_playback/SoundUtils.tsx";
import VoiceConnectFeedbackExperimentDefault from "../voice_calls/VoiceConnectFeedbackExperiment.tsx";
import _modDef17632 from "../../../_runtime/metro/17632__.js";
import noop from "../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../activities/EmbeddedActivitiesStore.tsx";
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

require = fn;
const NO_ACTIVITIES = fn(2064).NO_ACTIVITIES;
let closure_10 = fn(2069).SILENT_JOIN_LEAVE_CHANNEL_TYPES;
const Constants = fn(1085);
({
  InputModes: closure_22,
  ApplicationStreamStates: closure_23,
  ChannelTypes: closure_24,
  RTCConnectionStates: closure_25,
} = Constants);
const isLaunched = fn(10802).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_27, Fragment: closure_28, jsxs: closure_29 } = jsxProd);
let c30 = 25;
let ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSound(arg0, arg1, arg2, arg3) {
      _require = arg0;
      closure_1 = arg1;
      dependencyMap = arg2;
      noop = arg3;
      const cResult = require("c").c(5);
      if (cResult[0] === arg2) {
        if (cResult[1] === arg1) {
          if (cResult[2] === arg0) {
            if (cResult[3] === arg3) {
              let tmp2 = cResult[4];
            }
            const effect = noop.useEffect(tmp2);
          }
        }
      }
      const fn = function o() {
        closure_0 = batchedStoreListener();
        batchedStoreListener = new closure_0(closure_2[23]).BatchedStoreListener(closure_0, () => {
          const tmp = batchedStoreListener();
          const tmp2 = closure_2(closure_0, tmp);
          let isSoundDisabledResult = null == tmp2;
          if (!isSoundDisabledResult) {
            isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled(tmp2);
          }
          if (!isSoundDisabledResult) {
            let num = closure_3;
            if (closure_3 == null) {
              num = 0.4;
            }
            SoundUtils.playSound(tmp2, num);
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
  : function useSound(arg0, arg1, arg2, arg3) {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      noop = arg3;
      const effect = noop.useEffect(() => {
        closure_0 = batchedStoreListener();
        batchedStoreListener = new closure_0(closure_2[23]).BatchedStoreListener(closure_0, () => {
          const tmp = batchedStoreListener();
          const tmp2 = closure_2(closure_0, tmp);
          let isSoundDisabledResult = null == tmp2;
          if (!isSoundDisabledResult) {
            isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled(tmp2);
          }
          if (!isSoundDisabledResult) {
            let num = closure_3;
            if (closure_3 == null) {
              num = 0.4;
            }
            SoundUtils.playSound(tmp2, num);
          }
          closure_0 = tmp;
        });
        batchedStoreListener.attach("useSound");
        return () => batchedStoreListener.detach();
      });
    };
ReactCompilerGating = fn(558);
let closure_32 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MuteDeafen() {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore, SelectedChannelStore];
        const fn = function t() {
          return {
            inVoiceChannel: null != voiceChannelId.getVoiceChannelId(),
            selfMute: MediaEngineStore.isSelfMute(),
            selfDeaf: MediaEngineStore.isSelfDeaf(),
            audioPermissionReady: MediaEngineStore.isNativeAudioPermissionReady(),
            shouldSkipMuteUnmuteSound: MediaEngineStore.shouldSkipMuteUnmuteSound(),
          };
        };
        const fn2 = function l(selfDeaf, arg1) {
          ({ inVoiceChannel, selfMute, selfDeaf } = arg1);
          if (inVoiceChannel) {
            if (selfDeaf.selfDeaf !== selfDeaf) {
              let str2 = "undeafen";
              if (selfDeaf) {
                str2 = "deafen";
              }
              return str2;
            } else if (tmp) {
              if (selfDeaf.selfMute !== selfMute) {
                if (tmp2) {
                  const result = MediaEngineStore.notifyMuteUnmuteSoundWasSkipped();
                } else {
                  let str = "unmute";
                  if (selfMute) {
                    str = "mute";
                  }
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
      closure_31(tmp2, tmp3, tmp4);
      return null;
    }
  : function MuteDeafen() {
      const items = [MediaEngineStore, SelectedChannelStore];
      closure_31(
        items,
        () => ({
          inVoiceChannel: null != voiceChannelId.getVoiceChannelId(),
          selfMute: MediaEngineStore.isSelfMute(),
          selfDeaf: MediaEngineStore.isSelfDeaf(),
          audioPermissionReady: MediaEngineStore.isNativeAudioPermissionReady(),
          shouldSkipMuteUnmuteSound: MediaEngineStore.shouldSkipMuteUnmuteSound(),
        }),
        (selfDeaf, arg1) => {
          ({ inVoiceChannel, selfMute, selfDeaf } = arg1);
          if (inVoiceChannel) {
            if (selfDeaf.selfDeaf !== selfDeaf) {
              let str2 = "undeafen";
              if (selfDeaf) {
                str2 = "deafen";
              }
              return str2;
            } else if (tmp) {
              if (selfDeaf.selfMute !== selfMute) {
                if (tmp2) {
                  const result = MediaEngineStore.notifyMuteUnmuteSoundWasSkipped();
                } else {
                  let str = "unmute";
                  if (selfMute) {
                    str = "mute";
                  }
                }
              }
            }
          }
        },
      );
      return null;
    };
ReactCompilerGating = fn(558);
let closure_33 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Camera() {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore, SelectedChannelStore];
        const fn = function t() {
          return {
            videoEnabled: videoEnabled.isVideoEnabled(),
            inVoiceChannel: null != voiceChannelId.getVoiceChannelId(),
          };
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
      closure_31(tmp2, tmp3, tmp4);
      return null;
    }
  : function Camera() {
      const items = [MediaEngineStore, SelectedChannelStore];
      closure_31(
        items,
        () => ({
          videoEnabled: videoEnabled.isVideoEnabled(),
          inVoiceChannel: null != voiceChannelId.getVoiceChannelId(),
        }),
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
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RTCConnect() {
      const cResult = c.c(3);
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
            connectHasStarted: null,
            awaitingRemote: null,
            connectedRemote: null,
          };
          let tmp6 = !wasEverRtcConnected;
          if (!wasEverRtcConnected) {
            tmp6 = state !== constants.DISCONNECTED;
          }
          if (!tmp6) {
            tmp6 = state === constants.RTC_CONNECTED;
          }
          obj.connectHasStarted = tmp6;
          obj.awaitingRemote = null != GameConsoleStore.getAwaitingRemoteSessionInfo();
          obj.connectedRemote = null != GameConsoleStore.getRemoteSessionId();
          return obj;
        };
        const fn2 = function l(connectedRemote, arg1) {
          ({ channelType, connected, connectedRemote } = arg1);
          ({ channelType: channelType2, connected: connected2 } = connectedRemote);
          let tmp = connectedRemote;
          ({ connectHasStarted, awaitingRemote } = arg1);
          if (connectedRemote) {
            tmp = !connectedRemote.connectedRemote;
          }
          const connectHasStarted2 = connectedRemote.connectHasStarted;
          let tmp2 = !connectHasStarted2;
          if (!connectHasStarted2) {
            tmp2 = connectHasStarted;
          }
          let tmp3 = !connected2;
          if (!connected2) {
            tmp3 = connected;
          }
          if (!tmp2) {
            if (!tmp3) {
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
            if (obj.getConfig({ location: "RTCConnect" }).rtcConnectionJoinSounds) {
              tmp2 = tmp3;
            }
            if (tmp2) {
              return "user_join";
            }
            obj = VoiceConnectFeedbackExperimentDefault;
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
      closure_31(tmp2, tmp3, tmp4);
      return null;
    }
  : function RTCConnect() {
      const items = [ChannelStore, RTCConnectionStore, SelectedChannelStore, GameConsoleStore];
      closure_31(
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
            connectHasStarted: null,
            awaitingRemote: null,
            connectedRemote: null,
          };
          let tmp6 = !wasEverRtcConnected;
          if (!wasEverRtcConnected) {
            tmp6 = state !== constants.DISCONNECTED;
          }
          if (!tmp6) {
            tmp6 = state === constants.RTC_CONNECTED;
          }
          obj.connectHasStarted = tmp6;
          obj.awaitingRemote = null != GameConsoleStore.getAwaitingRemoteSessionInfo();
          obj.connectedRemote = null != GameConsoleStore.getRemoteSessionId();
          return obj;
        },
        (connectedRemote, arg1) => {
          ({ channelType, connected, connectedRemote } = arg1);
          ({ channelType: channelType2, connected: connected2 } = connectedRemote);
          let tmp = connectedRemote;
          ({ connectHasStarted, awaitingRemote } = arg1);
          if (connectedRemote) {
            tmp = !connectedRemote.connectedRemote;
          }
          const connectHasStarted2 = connectedRemote.connectHasStarted;
          let tmp2 = !connectHasStarted2;
          if (!connectHasStarted2) {
            tmp2 = connectHasStarted;
          }
          let tmp3 = !connected2;
          if (!connected2) {
            tmp3 = connected;
          }
          if (!tmp2) {
            if (!tmp3) {
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
            if (obj.getConfig({ location: "RTCConnect" }).rtcConnectionJoinSounds) {
              tmp2 = tmp3;
            }
            if (tmp2) {
              return "user_join";
            }
            obj = VoiceConnectFeedbackExperimentDefault;
          }
        },
      );
      return null;
    };
ReactCompilerGating = fn(558);
let closure_35 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Speaking() {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SpeakingStore];
        const fn = function t() {
          return currentUserPTTActive.isCurrentUserPTTActive();
        };
        const fn2 = function l(arg0, arg1) {
          if (arg0 !== arg1) {
            if (MediaEngineStore.getMode() === constants.PUSH_TO_TALK) {
              if (!isSelfMuteResult) {
                let str = "ptt_stop";
                if (arg1) {
                  str = "ptt_start";
                }
                return str;
              }
            }
            isSelfMuteResult = MediaEngineStore.isSelfMute();
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
      closure_31(tmp2, tmp3, tmp4);
      return null;
    }
  : function Speaking() {
      const items = [SpeakingStore];
      closure_31(
        items,
        () => currentUserPTTActive.isCurrentUserPTTActive(),
        (arg0, arg1) => {
          if (arg0 !== arg1) {
            if (MediaEngineStore.getMode() === constants.PUSH_TO_TALK) {
              if (!isSelfMuteResult) {
                let str = "ptt_stop";
                if (arg1) {
                  str = "ptt_start";
                }
                return str;
              }
            }
            isSelfMuteResult = MediaEngineStore.isSelfMute();
          }
        },
      );
      return null;
    };
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SelfMutedTemporarily() {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore, NotificationSettingsStore];
        const fn = function t() {
          return MediaEngineStore.isSelfMutedTemporarily();
        };
        const fn2 = function l(arg0, arg1) {
          if (arg0 !== arg1) {
            if (MediaEngineStore.getMode() === constants.VOICE_ACTIVITY) {
              if (!isSelfMuteResult) {
                let str = "unmute";
                if (arg1) {
                  str = "mute";
                }
                if (!soundDisabled.isSoundDisabled(str)) {
                  let str2 = "ptt_start";
                  if (arg1) {
                    str2 = "ptt_stop";
                  }
                  return str2;
                }
              }
            }
            isSelfMuteResult = MediaEngineStore.isSelfMute();
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
      closure_31(tmp2, tmp3, tmp4);
      return null;
    }
  : function SelfMutedTemporarily() {
      const items = [MediaEngineStore, NotificationSettingsStore];
      closure_31(
        items,
        () => MediaEngineStore.isSelfMutedTemporarily(),
        (arg0, arg1) => {
          if (arg0 !== arg1) {
            if (MediaEngineStore.getMode() === constants.VOICE_ACTIVITY) {
              if (!isSelfMuteResult) {
                let str = "unmute";
                if (arg1) {
                  str = "mute";
                }
                if (!soundDisabled.isSoundDisabled(str)) {
                  let str2 = "ptt_start";
                  if (arg1) {
                    str2 = "ptt_stop";
                  }
                  return str2;
                }
              }
            }
            isSelfMuteResult = MediaEngineStore.isSelfMute();
          }
        },
      );
      return null;
    };
ReactCompilerGating = fn(558);
let closure_37 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PriorityVAD() {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SpeakingStore];
        const fn = function t() {
          return currentUserPrioritySpeaker.isCurrentUserPrioritySpeaker();
        };
        const fn2 = function l(arg0, arg1) {
          if (arg0 !== arg1) {
            if (MediaEngineStore.getMode() === constants.VOICE_ACTIVITY) {
              if (!isSelfMuteResult) {
                let str = "ptt_stop";
                if (arg1) {
                  str = "ptt_start";
                }
                return str;
              }
            }
            isSelfMuteResult = MediaEngineStore.isSelfMute();
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
      closure_31(tmp2, tmp3, tmp4);
      return null;
    }
  : function PriorityVAD() {
      const items = [SpeakingStore];
      closure_31(
        items,
        () => currentUserPrioritySpeaker.isCurrentUserPrioritySpeaker(),
        (arg0, arg1) => {
          if (arg0 !== arg1) {
            if (MediaEngineStore.getMode() === constants.VOICE_ACTIVITY) {
              if (!isSelfMuteResult) {
                let str = "ptt_stop";
                if (arg1) {
                  str = "ptt_start";
                }
                return str;
              }
            }
            isSelfMuteResult = MediaEngineStore.isSelfMute();
          }
        },
      );
      return null;
    };
ReactCompilerGating = fn(558);
let closure_38 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserHasBeenMoved() {
      const cResult = c.c(3);
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
      closure_31(tmp2, tmp3, tmp4);
      return null;
    }
  : function UserHasBeenMoved() {
      const items = [VoiceStateStore];
      closure_31(
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
ReactCompilerGating = fn(558);
let closure_39 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserInvitedToSpeak() {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedChannelStore, VoiceStateStore];
        const fn = function t() {
          voiceChannelId = voiceChannelId.getVoiceChannelId();
          if (null == voiceChannelId) {
            return require("useAudienceRequestToSpeakState").RequestToSpeakStates.NONE;
          } else {
            voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(voiceChannelId);
            return require("useAudienceRequestToSpeakState").getAudienceRequestToSpeakState(voiceStateForChannel);
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
      closure_31(tmp2, tmp3, tmp4);
      return null;
    }
  : function UserInvitedToSpeak() {
      const items = [SelectedChannelStore, VoiceStateStore];
      closure_31(
        items,
        () => {
          voiceChannelId = voiceChannelId.getVoiceChannelId();
          if (null == voiceChannelId) {
            return require("useAudienceRequestToSpeakState").RequestToSpeakStates.NONE;
          } else {
            voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(voiceChannelId);
            return require("useAudienceRequestToSpeakState").getAudienceRequestToSpeakState(voiceStateForChannel);
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
ReactCompilerGating = fn(558);
let closure_40 = ReactCompilerGating.isReactCompilerEnabled()
  ? function VoiceChannel() {
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      _require = noop.useRef(first);
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
            let type;
            if (null != channel) {
              const result = SortedVoiceStateStore.countVoiceStatesForChannel(channel.id);
              let num = 0;
              if (inChannel.isInChannel(channel.id)) {
                num = 1;
              }
              diff = result - num;
              const allApplicationStreamsForChannel = obj.getAllApplicationStreamsForChannel(channel.id);
              items = allApplicationStreamsForChannel.map((ownerId) => ownerId.ownerId);
              type = channel.type;
            }
            let tmp14 = channelId.getChannelId() === voiceChannelId;
            if (tmp14) {
              tmp14 = channelId.getState() === constants2.RTC_CONNECTED;
            }
            rtcUserIds = items1;
            rtcConnected = false;
            streamingUserIds = items;
            voiceChannelUserCount = diff;
            channelType = type;
            if (tmp14) {
              let userIds = channelId.getUserIds();
              if (userIds == null) {
                userIds = [];
              }
              rtcUserIds = Array.from(userIds).filter((item) => item !== currentUserId);
              rtcConnected = true;
              streamingUserIds = items;
              voiceChannelUserCount = diff;
              channelType = type;
              const arr = Array.from(userIds);
            }
          }
          if (1 === allActiveStreams.length) {
            let first = allActiveStreams[0];
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
            const encodeStreamKeyResult = closure_0(dependencyMap[27]).encodeStreamKey(first);
            const viewerIds = obj.getViewerIds(encodeStreamKeyResult);
            singleActiveStreamViewerCount = viewerIds.filter((item) => item !== currentUserId).length;
            singleActiveStreamKey = encodeStreamKeyResult;
            const obj3 = closure_0(dependencyMap[27]);
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
          streamingUserIds = rtcConnected;
          ({ channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds } = arg1);
          ({
            singleActiveStreamKey,
            singleActiveStreamViewerCount,
            currentUserId: closure_2,
            rtcConnected,
            rtcUserIds,
          } = arg1);
          if (rtcConnected) {
            let rtcConnected2 = rtcConnected.rtcConnected;
            if (!rtcConnected2) {
              rtcConnected2 = null == voiceChannelId;
            }
            let keys = tmp2;
            if (!rtcConnected2) {
              const _Object = Object;
              keys = Object.keys(VoiceStateStore.getVoiceStatesForChannel(voiceChannelId));
            }
          } else {
            keys = [];
          }
          const tmp8 = _modDef17632(rtcUserIds, rtcConnected.rtcUserIds);
          let rtcConnected3 = rtcConnected.rtcConnected;
          if (rtcConnected3) {
            rtcConnected3 = rtcConnected.rtcUserIds.length <= c30;
          }
          if (rtcConnected3) {
            rtcConnected3 = _modDef17632(tmp8, keys).length > 0;
          }
          let tmp10 = rtcConnected.rtcConnected && rtcConnected;
          if (tmp10) {
            tmp10 = rtcConnected.rtcUserIds.length <= c30;
          }
          if (tmp10) {
            tmp10 = _modDef17632(rtcConnected.rtcUserIds, rtcUserIds).length > 0;
          }
          streamingUserIds.current = _modDef17632(keys, tmp8);
          if (rtcConnected.voiceChannelId === voiceChannelId) {
            if (null != voiceChannelId) {
              channel = ChannelStore.getChannel(voiceChannelId);
              let flag = false;
              if (null != channel) {
                const guildId = channel.getGuildId();
                flag = false;
                if (null != guildId) {
                  guild = GuildStore.getGuild(guildId);
                  flag = null != guild && guild.afkChannelId === channel.id;
                  const tmp15 = null != guild && guild.afkChannelId === channel.id;
                }
              }
              if (!flag) {
                allActiveStreams = rtcConnected.allActiveStreams;
                closure_3 = allActiveStreams.map((ownerId) => ownerId.ownerId);
                ({ streamingUserIds: streamingUserIds2, voiceChannelUserCount: voiceChannelUserCount2 } = rtcConnected);
                let tmp20 = null != voiceChannelUserCount2;
                const someResult = streamingUserIds.some((item) => {
                  streamingUserIds = streamingUserIds.streamingUserIds;
                  return !streamingUserIds.includes(item);
                });
                if (tmp20) {
                  tmp20 = null != voiceChannelUserCount;
                }
                if (tmp20) {
                  tmp20 = voiceChannelUserCount2 <= c30;
                }
                let tmp22 = tmp20;
                if (tmp20) {
                  tmp22 = voiceChannelUserCount > voiceChannelUserCount2;
                }
                if (tmp20) {
                  tmp20 = voiceChannelUserCount < voiceChannelUserCount2;
                }
                let rtcConnectionJoinSounds = tmp22;
                if (!tmp22) {
                  rtcConnectionJoinSounds = tmp20;
                }
                if (!rtcConnectionJoinSounds) {
                  rtcConnectionJoinSounds = rtcConnected3;
                }
                if (!rtcConnectionJoinSounds) {
                  rtcConnectionJoinSounds = tmp10;
                }
                if (rtcConnectionJoinSounds) {
                  rtcConnectionJoinSounds = VoiceConnectFeedbackExperimentDefault.getConfig({
                    location: "VoiceChannel",
                  }).rtcConnectionJoinSounds;
                  const tmp6Result = VoiceConnectFeedbackExperimentDefault;
                }
                if (rtcConnectionJoinSounds) {
                  tmp20 = tmp10;
                  tmp22 = rtcConnected3;
                }
                let str = "stream_started";
                if (!someResult) {
                  let str2 = "stream_ended";
                  if (!someResult1) {
                    if (rtcConnected.singleActiveStreamViewerCount <= c30) {
                      if (tmp17) {
                        let str3 = "stream_user_joined";
                      }
                      str2 = str3;
                    }
                    let str4 = "user_join";
                    if (!tmp22) {
                      let str5 = "user_leave";
                      if (!tmp20) {
                        let str6;
                        if (rtcConnected.singleActiveStreamViewerCount <= c30) {
                          if (tmp17) {
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
        let tmp5 = fn2;
        let tmp4 = fn;
        let tmp3 = items1;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
        tmp5 = cResult[3];
      }
      closure_31(tmp3, tmp4, tmp5);
      return null;
    }
  : function VoiceChannel() {
      closure_0 = noop.useRef([]);
      let items = [
        SelectedChannelStore,
        ApplicationStreamingStore,
        AuthenticationStore,
        VoiceStateStore,
        ChannelStore,
        RTCConnectionStore,
      ];
      closure_31(
        items,
        () => {
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
            let type;
            if (null != channel) {
              const result = SortedVoiceStateStore.countVoiceStatesForChannel(channel.id);
              let num = 0;
              if (inChannel.isInChannel(channel.id)) {
                num = 1;
              }
              diff = result - num;
              const allApplicationStreamsForChannel = obj.getAllApplicationStreamsForChannel(channel.id);
              items = allApplicationStreamsForChannel.map((ownerId) => ownerId.ownerId);
              type = channel.type;
            }
            let tmp14 = channelId.getChannelId() === voiceChannelId;
            if (tmp14) {
              tmp14 = channelId.getState() === constants2.RTC_CONNECTED;
            }
            rtcUserIds = items1;
            rtcConnected = false;
            streamingUserIds = items;
            voiceChannelUserCount = diff;
            channelType = type;
            if (tmp14) {
              let userIds = channelId.getUserIds();
              if (userIds == null) {
                userIds = [];
              }
              rtcUserIds = Array.from(userIds).filter((item) => item !== currentUserId);
              rtcConnected = true;
              streamingUserIds = items;
              voiceChannelUserCount = diff;
              channelType = type;
              const arr = Array.from(userIds);
            }
          }
          if (1 === allActiveStreams.length) {
            let first = allActiveStreams[0];
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
            const encodeStreamKeyResult = closure_0(dependencyMap[27]).encodeStreamKey(first);
            const viewerIds = obj.getViewerIds(encodeStreamKeyResult);
            singleActiveStreamViewerCount = viewerIds.filter((item) => item !== currentUserId).length;
            singleActiveStreamKey = encodeStreamKeyResult;
            const obj3 = closure_0(dependencyMap[27]);
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
          streamingUserIds = rtcConnected;
          ({ channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds } = arg1);
          ({
            singleActiveStreamKey,
            singleActiveStreamViewerCount,
            currentUserId: closure_2,
            rtcConnected,
            rtcUserIds,
          } = arg1);
          closure_3 = undefined;
          if (rtcConnected) {
            let rtcConnected2 = rtcConnected.rtcConnected;
            if (!rtcConnected2) {
              rtcConnected2 = null == voiceChannelId;
            }
            let keys = tmp2;
            if (!rtcConnected2) {
              const _Object = Object;
              keys = Object.keys(VoiceStateStore.getVoiceStatesForChannel(voiceChannelId));
            }
          } else {
            keys = [];
          }
          const tmp8 = _modDef17632(rtcUserIds, rtcConnected.rtcUserIds);
          let rtcConnected3 = rtcConnected.rtcConnected;
          if (rtcConnected3) {
            rtcConnected3 = rtcConnected.rtcUserIds.length <= c30;
          }
          if (rtcConnected3) {
            rtcConnected3 = _modDef17632(tmp8, keys).length > 0;
          }
          let tmp10 = rtcConnected.rtcConnected && rtcConnected;
          if (tmp10) {
            tmp10 = rtcConnected.rtcUserIds.length <= c30;
          }
          if (tmp10) {
            tmp10 = _modDef17632(rtcConnected.rtcUserIds, rtcUserIds).length > 0;
          }
          streamingUserIds.current = _modDef17632(keys, tmp8);
          if (rtcConnected.voiceChannelId === voiceChannelId) {
            if (null != voiceChannelId) {
              channel = ChannelStore.getChannel(voiceChannelId);
              let flag = false;
              if (null != channel) {
                const guildId = channel.getGuildId();
                flag = false;
                if (null != guildId) {
                  guild = GuildStore.getGuild(guildId);
                  flag = null != guild && guild.afkChannelId === channel.id;
                  const tmp15 = null != guild && guild.afkChannelId === channel.id;
                }
              }
              if (!flag) {
                allActiveStreams = rtcConnected.allActiveStreams;
                closure_3 = allActiveStreams.map((ownerId) => ownerId.ownerId);
                ({ streamingUserIds: streamingUserIds2, voiceChannelUserCount: voiceChannelUserCount2 } = rtcConnected);
                let tmp20 = null != voiceChannelUserCount2;
                const someResult = streamingUserIds.some((item) => {
                  streamingUserIds = streamingUserIds.streamingUserIds;
                  return !streamingUserIds.includes(item);
                });
                if (tmp20) {
                  tmp20 = null != voiceChannelUserCount;
                }
                if (tmp20) {
                  tmp20 = voiceChannelUserCount2 <= c30;
                }
                let tmp22 = tmp20;
                if (tmp20) {
                  tmp22 = voiceChannelUserCount > voiceChannelUserCount2;
                }
                if (tmp20) {
                  tmp20 = voiceChannelUserCount < voiceChannelUserCount2;
                }
                let rtcConnectionJoinSounds = tmp22;
                if (!tmp22) {
                  rtcConnectionJoinSounds = tmp20;
                }
                if (!rtcConnectionJoinSounds) {
                  rtcConnectionJoinSounds = rtcConnected3;
                }
                if (!rtcConnectionJoinSounds) {
                  rtcConnectionJoinSounds = tmp10;
                }
                if (rtcConnectionJoinSounds) {
                  rtcConnectionJoinSounds = VoiceConnectFeedbackExperimentDefault.getConfig({
                    location: "VoiceChannel",
                  }).rtcConnectionJoinSounds;
                  const tmp6Result = VoiceConnectFeedbackExperimentDefault;
                }
                if (rtcConnectionJoinSounds) {
                  tmp20 = tmp10;
                  tmp22 = rtcConnected3;
                }
                let str = "stream_started";
                if (!someResult) {
                  let str2 = "stream_ended";
                  if (!someResult1) {
                    if (rtcConnected.singleActiveStreamViewerCount <= c30) {
                      if (tmp17) {
                        let str3 = "stream_user_joined";
                      }
                      str2 = str3;
                    }
                    let str4 = "user_join";
                    if (!tmp22) {
                      let str5 = "user_leave";
                      if (!tmp20) {
                        let str6;
                        if (rtcConnected.singleActiveStreamViewerCount <= c30) {
                          if (tmp17) {
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
ReactCompilerGating = fn(558);
let closure_41 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ActivitySounds() {
      const cResult = c.c(3);
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
          const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
          const channelId = SelectedChannelStore.getChannelId();
          connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
          const embeddedActivityLocationChannelId =
            require("embeddedActivityLocationUtils").getEmbeddedActivityLocationChannelId(connectedActivityLocation);
          id = id.getId();
          const obj2 = require("embeddedActivityLocationUtils");
          if (obj3.isNotNullish(channelId)) {
            let embeddedActivitiesForChannel = obj.getEmbeddedActivitiesForChannel(channelId);
          } else {
            embeddedActivitiesForChannel = NO_ACTIVITIES;
          }
          obj3 = require("GlobalUtils");
          if (tmp4Result.isNotNullish(voiceChannelId)) {
            let embeddedActivitiesForChannel1 = obj.getEmbeddedActivitiesForChannel(voiceChannelId);
          } else {
            embeddedActivitiesForChannel1 = NO_ACTIVITIES;
          }
          tmp4Result = require("GlobalUtils");
          if (tmp4Result5.isNotNullish(embeddedActivityLocationChannelId)) {
            let embeddedActivitiesForChannel2 = obj.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
          } else {
            embeddedActivitiesForChannel2 = NO_ACTIVITIES;
          }
          tmp4Result5 = require("GlobalUtils");
          let selfEmbeddedActivityForLocation = null;
          if (tmp4Result6.isNotNullish(connectedActivityLocation)) {
            selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
          }
          mainFrame = mainFrame.getMainFrame();
          let surface;
          tmp4Result6 = require("GlobalUtils");
          if (mainFrame != null) {
            surface = mainFrame.surface;
          }
          const tmp13Result = getChannelIdForEmbeddedSurfaceDefault(surface);
          let result1 = null == tmp13Result;
          if (!result1) {
            let result = null != mainFrame;
            if (result) {
              result = require("conjurePreviewSurface").isConjurePreviewSurface(mainFrame.surface);
              const tmp4Result7 = require("conjurePreviewSurface");
            }
            result1 = result;
          }
          if (result1) {
            let applicationId;
            if (mainFrame != null) {
              applicationId = mainFrame.applicationId;
            }
            result1 = conjureProjectApplication.isConjureProjectApplication(applicationId);
          }
          let result2 = null != tmp13Result;
          if (result2) {
            result2 = require("ConjureUtils").isConjureChannelCandidate(
              ChannelStore.getChannel(tmp13Result),
              "ActivitySounds",
            );
            const tmp4Result8 = require("ConjureUtils");
          }
          if (!result2) {
            result2 = result1;
          }
          let tmp22 = null != embeddedActivityLocationChannelId;
          if (tmp22) {
            const channel = ChannelStore.getChannel(embeddedActivityLocationChannelId);
            let type;
            if (channel != null) {
              type = channel.type;
            }
            tmp22 = type === constants.GUILD_SPACE;
          }
          return {
            connectedActivityLocation,
            voiceChannelId,
            currentUserId: id,
            channelActivities: embeddedActivitiesForChannel,
            connectedChannelActivities: embeddedActivitiesForChannel2,
            userConnectedActivity: selfEmbeddedActivityForLocation,
            voiceChannelActivities: embeddedActivitiesForChannel1,
            hasFrame: isLaunched(mainFrame),
            inConjureChannel: result2,
            isGuildSpaceActivity: tmp22,
          };
        };
        const fn2 = function v(isGuildSpaceActivity, arg1) {
          ({ connectedActivityLocation, currentUserId: closure_0, userConnectedActivity } = arg1);
          ({
            voiceChannelActivities,
            hasFrame,
            isGuildSpaceActivity,
            voiceChannelId,
            channelActivities,
            connectedChannelActivities,
            inConjureChannel,
          } = arg1);
          if (!isGuildSpaceActivity) {
            isGuildSpaceActivity = isGuildSpaceActivity.isGuildSpaceActivity;
          }
          const someResult = voiceChannelActivities.some((applicationId) => {
            applicationId = undefined;
            if (userConnectedActivity != null) {
              applicationId = userConnectedActivity.applicationId;
            }
            return (
              applicationId.applicationId === applicationId && applicationId.launchId === userConnectedActivity.launchId
            );
          });
          let str;
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
              isNotNullishResult = require("GlobalUtils").isNotNullish(isGuildSpaceActivity.voiceChannelId);
              const tmp2Result = require("GlobalUtils");
            }
            let str2;
            if (isNotNullishResult) {
              str2 = "activity_launch";
            }
            let isNotNullishResult1 = undefined === found1;
            if (isNotNullishResult1) {
              isNotNullishResult1 = require("GlobalUtils").isNotNullish(found);
              const tmp2Result8 = require("GlobalUtils");
            }
            if (isNotNullishResult1) {
              str2 = "activity_end";
            }
            let isNotNullishResult2 = undefined === found;
            if (isNotNullishResult2) {
              isNotNullishResult2 = require("GlobalUtils").isNotNullish(found1);
              const tmp2Result9 = require("GlobalUtils");
            }
            if (isNotNullishResult2) {
              isNotNullishResult2 = found1.userIds.size > 1;
            }
            if (isNotNullishResult2) {
              str2 = "activity_user_join";
            }
            let isNotNullishResult3 = require("GlobalUtils").isNotNullish(found1);
            if (isNotNullishResult3) {
              isNotNullishResult3 = require("GlobalUtils").isNotNullish(found);
              const tmp2Result11 = require("GlobalUtils");
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
            const tmp2Result10 = require("GlobalUtils");
          }
          let str3 = str;
          if (!someResult) {
            str3 = str;
            if (!isGuildSpaceActivity) {
              if (tmp10) {
                str = "activity_launch";
              }
              const userConnectedActivity2 = isGuildSpaceActivity.userConnectedActivity;
              let isNotNullishResult4 = null == userConnectedActivity;
              if (isNotNullishResult4) {
                isNotNullishResult4 = require("GlobalUtils").isNotNullish(userConnectedActivity2);
                const tmp2Result12 = require("GlobalUtils");
              }
              if (isNotNullishResult4) {
                str = "activity_end";
              }
              let isNotNullishResult5 = require("GlobalUtils").isNotNullish(userConnectedActivity);
              if (isNotNullishResult5) {
                isNotNullishResult5 = require("GlobalUtils").isNotNullish(userConnectedActivity2);
                const tmp2Result14 = require("GlobalUtils");
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
              tmp10 =
                isGuildSpaceActivity.connectedChannelActivities.length < connectedChannelActivities.length &&
                isGuildSpaceActivity.channelActivities.length < channelActivities.length;
              const tmp2Result13 = require("GlobalUtils");
            }
          }
          let tmp14 = null != str3 || isGuildSpaceActivity;
          if (!tmp14) {
            tmp14 = null == isGuildSpaceActivity.connectedActivityLocation && null == connectedActivityLocation;
            const tmp15 = null == isGuildSpaceActivity.connectedActivityLocation && null == connectedActivityLocation;
          }
          let str4 = str3;
          if (!tmp14) {
            if (null != isGuildSpaceActivity.connectedActivityLocation) {
              if (null == isGuildSpaceActivity.connectedActivityLocation) {
                let tmp17 = str3;
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
                let str6 = tmp17;
                tmp16 = null != userConnectedActivity && null != isGuildSpaceActivity.userConnectedActivity;
              } else {
                str6 = "activity_end";
              }
              let str5 = str6;
            } else {
              str5 = "activity_launch";
            }
            str4 = str5;
          }
          let tmp18 = null == str4;
          if (tmp18) {
            tmp18 = isGuildSpaceActivity.hasFrame || hasFrame;
            const tmp19 = isGuildSpaceActivity.hasFrame || hasFrame;
          }
          let tmp20 = str4;
          if (tmp18) {
            if (!isGuildSpaceActivity.hasFrame) {
              if (hasFrame) {
                let str8 = "activity_launch";
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
      closure_31(tmp2, tmp3, tmp4);
      return null;
    }
  : function ActivitySounds() {
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
      closure_31(
        items,
        () => {
          const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
          const channelId = SelectedChannelStore.getChannelId();
          connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
          const embeddedActivityLocationChannelId =
            require("embeddedActivityLocationUtils").getEmbeddedActivityLocationChannelId(connectedActivityLocation);
          id = id.getId();
          const obj2 = require("embeddedActivityLocationUtils");
          if (obj3.isNotNullish(channelId)) {
            let embeddedActivitiesForChannel = obj.getEmbeddedActivitiesForChannel(channelId);
          } else {
            embeddedActivitiesForChannel = NO_ACTIVITIES;
          }
          obj3 = require("GlobalUtils");
          if (tmp4Result.isNotNullish(voiceChannelId)) {
            let embeddedActivitiesForChannel1 = obj.getEmbeddedActivitiesForChannel(voiceChannelId);
          } else {
            embeddedActivitiesForChannel1 = NO_ACTIVITIES;
          }
          tmp4Result = require("GlobalUtils");
          if (tmp4Result5.isNotNullish(embeddedActivityLocationChannelId)) {
            let embeddedActivitiesForChannel2 = obj.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
          } else {
            embeddedActivitiesForChannel2 = NO_ACTIVITIES;
          }
          tmp4Result5 = require("GlobalUtils");
          let selfEmbeddedActivityForLocation = null;
          if (tmp4Result6.isNotNullish(connectedActivityLocation)) {
            selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
          }
          mainFrame = mainFrame.getMainFrame();
          let surface;
          tmp4Result6 = require("GlobalUtils");
          if (mainFrame != null) {
            surface = mainFrame.surface;
          }
          const tmp13Result = getChannelIdForEmbeddedSurfaceDefault(surface);
          let result1 = null == tmp13Result;
          if (!result1) {
            let result = null != mainFrame;
            if (result) {
              result = require("conjurePreviewSurface").isConjurePreviewSurface(mainFrame.surface);
              const tmp4Result7 = require("conjurePreviewSurface");
            }
            result1 = result;
          }
          if (result1) {
            let applicationId;
            if (mainFrame != null) {
              applicationId = mainFrame.applicationId;
            }
            result1 = conjureProjectApplication.isConjureProjectApplication(applicationId);
          }
          let result2 = null != tmp13Result;
          if (result2) {
            result2 = require("ConjureUtils").isConjureChannelCandidate(
              ChannelStore.getChannel(tmp13Result),
              "ActivitySounds",
            );
            const tmp4Result8 = require("ConjureUtils");
          }
          if (!result2) {
            result2 = result1;
          }
          let tmp22 = null != embeddedActivityLocationChannelId;
          if (tmp22) {
            const channel = ChannelStore.getChannel(embeddedActivityLocationChannelId);
            let type;
            if (channel != null) {
              type = channel.type;
            }
            tmp22 = type === constants.GUILD_SPACE;
          }
          return {
            connectedActivityLocation,
            voiceChannelId,
            currentUserId: id,
            channelActivities: embeddedActivitiesForChannel,
            connectedChannelActivities: embeddedActivitiesForChannel2,
            userConnectedActivity: selfEmbeddedActivityForLocation,
            voiceChannelActivities: embeddedActivitiesForChannel1,
            hasFrame: isLaunched(mainFrame),
            inConjureChannel: result2,
            isGuildSpaceActivity: tmp22,
          };
        },
        (isGuildSpaceActivity, arg1) => {
          ({ connectedActivityLocation, currentUserId: closure_0, userConnectedActivity } = arg1);
          ({
            voiceChannelActivities,
            hasFrame,
            isGuildSpaceActivity,
            voiceChannelId,
            channelActivities,
            connectedChannelActivities,
            inConjureChannel,
          } = arg1);
          if (!isGuildSpaceActivity) {
            isGuildSpaceActivity = isGuildSpaceActivity.isGuildSpaceActivity;
          }
          const someResult = voiceChannelActivities.some((applicationId) => {
            applicationId = undefined;
            if (userConnectedActivity != null) {
              applicationId = userConnectedActivity.applicationId;
            }
            return (
              applicationId.applicationId === applicationId && applicationId.launchId === userConnectedActivity.launchId
            );
          });
          let str;
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
              isNotNullishResult = require("GlobalUtils").isNotNullish(isGuildSpaceActivity.voiceChannelId);
              const tmp2Result = require("GlobalUtils");
            }
            let str2;
            if (isNotNullishResult) {
              str2 = "activity_launch";
            }
            let isNotNullishResult1 = undefined === found1;
            if (isNotNullishResult1) {
              isNotNullishResult1 = require("GlobalUtils").isNotNullish(found);
              const tmp2Result8 = require("GlobalUtils");
            }
            if (isNotNullishResult1) {
              str2 = "activity_end";
            }
            let isNotNullishResult2 = undefined === found;
            if (isNotNullishResult2) {
              isNotNullishResult2 = require("GlobalUtils").isNotNullish(found1);
              const tmp2Result9 = require("GlobalUtils");
            }
            if (isNotNullishResult2) {
              isNotNullishResult2 = found1.userIds.size > 1;
            }
            if (isNotNullishResult2) {
              str2 = "activity_user_join";
            }
            let isNotNullishResult3 = require("GlobalUtils").isNotNullish(found1);
            if (isNotNullishResult3) {
              isNotNullishResult3 = require("GlobalUtils").isNotNullish(found);
              const tmp2Result11 = require("GlobalUtils");
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
            const tmp2Result10 = require("GlobalUtils");
          }
          let str3 = str;
          if (!someResult) {
            str3 = str;
            if (!isGuildSpaceActivity) {
              if (tmp10) {
                str = "activity_launch";
              }
              const userConnectedActivity2 = isGuildSpaceActivity.userConnectedActivity;
              let isNotNullishResult4 = null == userConnectedActivity;
              if (isNotNullishResult4) {
                isNotNullishResult4 = require("GlobalUtils").isNotNullish(userConnectedActivity2);
                const tmp2Result12 = require("GlobalUtils");
              }
              if (isNotNullishResult4) {
                str = "activity_end";
              }
              let isNotNullishResult5 = require("GlobalUtils").isNotNullish(userConnectedActivity);
              if (isNotNullishResult5) {
                isNotNullishResult5 = require("GlobalUtils").isNotNullish(userConnectedActivity2);
                const tmp2Result14 = require("GlobalUtils");
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
              tmp10 =
                isGuildSpaceActivity.connectedChannelActivities.length < connectedChannelActivities.length &&
                isGuildSpaceActivity.channelActivities.length < channelActivities.length;
              const tmp2Result13 = require("GlobalUtils");
            }
          }
          let tmp14 = null != str3 || isGuildSpaceActivity;
          if (!tmp14) {
            tmp14 = null == isGuildSpaceActivity.connectedActivityLocation && null == connectedActivityLocation;
            const tmp15 = null == isGuildSpaceActivity.connectedActivityLocation && null == connectedActivityLocation;
          }
          let str4 = str3;
          if (!tmp14) {
            if (null != isGuildSpaceActivity.connectedActivityLocation) {
              if (null == isGuildSpaceActivity.connectedActivityLocation) {
                let tmp17 = str3;
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
                let str6 = tmp17;
                tmp16 = null != userConnectedActivity && null != isGuildSpaceActivity.userConnectedActivity;
              } else {
                str6 = "activity_end";
              }
              let str5 = str6;
            } else {
              str5 = "activity_launch";
            }
            str4 = str5;
          }
          let tmp18 = null == str4;
          if (tmp18) {
            tmp18 = isGuildSpaceActivity.hasFrame || hasFrame;
            const tmp19 = isGuildSpaceActivity.hasFrame || hasFrame;
          }
          let tmp20 = str4;
          if (tmp18) {
            if (!isGuildSpaceActivity.hasFrame) {
              if (hasFrame) {
                let str8 = "activity_launch";
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
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundplayer/SoundPlayer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SoundPlayer() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: null };
        const items = [
          closure_1_27(closure_32, {}),
          closure_1_27(closure_33, {}),
          closure_1_27(closure_34, {}),
          closure_1_27(closure_35, {}),
          closure_1_27(closure_36, {}),
          closure_1_27(closure_38, {}),
          closure_1_27(closure_40, {}),
          closure_1_27(closure_39, {}),
          closure_1_27(closure_41, {}),
          closure_1_27(closure_37, {}),
        ];
        obj2.children = items;
        const tmp16 = closure_1_29(closure_1_28, obj2);
        cResult[0] = tmp16;
        let first = tmp16;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function SoundPlayer() {
      const obj = { children: null };
      const items = [
        closure_1_27(closure_32, {}),
        closure_1_27(closure_33, {}),
        closure_1_27(closure_34, {}),
        closure_1_27(closure_35, {}),
        closure_1_27(closure_36, {}),
        closure_1_27(closure_38, {}),
        closure_1_27(closure_40, {}),
        closure_1_27(closure_39, {}),
        closure_1_27(closure_41, {}),
        closure_1_27(closure_37, {}),
      ];
      obj.children = items;
      return closure_1_29(closure_1_28, obj);
    };
