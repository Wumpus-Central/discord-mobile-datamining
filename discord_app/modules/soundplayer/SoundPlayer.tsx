// === Module 17104: SoundPlayer ===

// Module 17104 (SoundPlayer)
import react2 from "react" /* 576 */;
import EmbeddedActivitiesStore2 from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import SoundUtils from "SoundUtils" /* 9562 */;
import react_mod from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8699 */;
import FramesStore from "FramesStore" /* 8703 */;
import GameConsoleStore from "GameConsoleStore" /* 4907 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 12466 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SpeakingStore from "SpeakingStore" /* 5576 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4914 */;
import Constants from "Constants" /* 1085 */;
import FramesConstants from "FramesConstants" /* 8704 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const EmbeddedActivitiesStore = EmbeddedActivitiesStore2;
let _require, allActiveStreams, connectedActivityLocation, dependencyMap, guild, isSoundDisabled, mainFrame, userIds, voiceStateForChannel;

let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let react = react_mod;
const NO_ACTIVITIES = EmbeddedActivitiesStore2.NO_ACTIVITIES;
let closure_9 = ChannelRecord.SILENT_JOIN_LEAVE_CHANNEL_TYPES;
({ InputModes: closure_21, ApplicationStreamStates: closure_22, ChannelTypes: closure_23, RTCConnectionStates: closure_24 } = Constants);
({ getChannelIdForSurface: closure_25, isLaunched: closure_26 } = FramesConstants);
({ jsx: closure_27, Fragment: closure_28, jsxs: closure_29 } = Fragment);
let c30 = 25;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3) => {
  let closure_1;
  let closure_2;
  _require = arg0;
  dependencyMap = arg1;
  react = arg2;
  let closure_3 = arg3;
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
    batchedStoreListener = new closure_0(batchedStoreListener[23]).BatchedStoreListener(closure_0, () => {
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
}) : ((arg0, arg1, arg2, arg3) => {
  let closure_2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  react = arg2;
  let closure_3 = arg3;
  const effect = react.useEffect(() => {
    let batchedStoreListener;
    closure_0 = batchedStoreListener();
    batchedStoreListener = new closure_0(batchedStoreListener[23]).BatchedStoreListener(closure_0, () => {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp2;
  let tmp3;
  let tmp4;
  let voiceChannelId;
  let obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore, SelectedChannelStore];
    const fn = function t() {
      const obj = { inVoiceChannel: null != voiceChannelId.getVoiceChannelId(), selfMute: MediaEngineStore.isSelfMute(), selfDeaf: MediaEngineStore.isSelfDeaf(), audioPermissionReady: MediaEngineStore.isNativeAudioPermissionReady(), shouldSkipMuteUnmuteSound: MediaEngineStore.shouldSkipMuteUnmuteSound() };
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
  closure_31(tmp2, tmp3, tmp4);
  return null;
}) : (() => {
  let voiceChannelId;
  const items = [MediaEngineStore, SelectedChannelStore];
  const tmp = closure_31(items, () => {
    const obj = { inVoiceChannel: null != voiceChannelId.getVoiceChannelId(), selfMute: MediaEngineStore.isSelfMute(), selfDeaf: MediaEngineStore.isSelfDeaf(), audioPermissionReady: MediaEngineStore.isNativeAudioPermissionReady(), shouldSkipMuteUnmuteSound: MediaEngineStore.shouldSkipMuteUnmuteSound() };
    return obj;
  }, (selfDeaf, arg1) => {
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
  });
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp2;
  let tmp3;
  let tmp4;
  let voiceChannelId;
  let obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore, SelectedChannelStore];
    const fn = function t() {
      const obj = { videoEnabled: videoEnabled.isVideoEnabled(), inVoiceChannel: null != voiceChannelId.getVoiceChannelId() };
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
  closure_31(tmp2, tmp3, tmp4);
  return null;
}) : (() => {
  let voiceChannelId;
  const items = [MediaEngineStore, SelectedChannelStore];
  closure_31(items, () => {
    const obj = { videoEnabled: videoEnabled.isVideoEnabled(), inVoiceChannel: null != voiceChannelId.getVoiceChannelId() };
    return obj;
  }, (videoEnabled, videoEnabled2) => {
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
  });
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
      const obj = { channelType: type, guildId, connected: state === constants.RTC_CONNECTED, connectHasStarted: !wasEverRtcConnected && state !== constants.DISCONNECTED || state === constants.RTC_CONNECTED, awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), connectedRemote: null != GameConsoleStore.getRemoteSessionId() };
      return obj;
    };
    const fn2 = function l(channelType, arg1) {
      let connectedRemote;
      ({ channelType, connectedRemote } = arg1);
      const channelType2 = channelType.channelType;
      if (channelType.connectHasStarted) {
        if (tmp4) {
          if (!tmp) {
            if (!tmp3) {
              if (!connectedRemote) {
                return "disconnect";
              }
            }
          }
        }
      }
      return "user_join";
    };
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = fn2;
    tmp4 = fn2;
    tmp3 = fn;
    tmp2 = items;
  } else {
    [tmp2, tmp3, tmp4] = cResult;
  }
  closure_31(tmp2, tmp3, tmp4);
  return null;
}) : (() => {
  let voiceChannelId;
  const items = [ChannelStore, RTCConnectionStore, SelectedChannelStore, GameConsoleStore];
  const tmp = closure_31(items, () => {
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
    const obj = { channelType: type, guildId, connected: state === constants.RTC_CONNECTED, connectHasStarted: !wasEverRtcConnected && state !== constants.DISCONNECTED || state === constants.RTC_CONNECTED, awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), connectedRemote: null != GameConsoleStore.getRemoteSessionId() };
    return obj;
  }, (channelType, arg1) => {
    let connectedRemote;
    ({ channelType, connectedRemote } = arg1);
    const channelType2 = channelType.channelType;
    if (channelType.connectHasStarted) {
      if (tmp4) {
        if (!tmp) {
          if (!tmp3) {
            if (!connectedRemote) {
              return "disconnect";
            }
          }
        }
      }
    }
    return "user_join";
  });
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
  closure_31(tmp2, tmp3, tmp4);
  return null;
}) : (() => {
  let currentUserPTTActive;
  const items = [SpeakingStore];
  closure_31(items, () => currentUserPTTActive.isCurrentUserPTTActive(), (arg0, arg1) => {
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
  });
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
  closure_31(tmp2, tmp3, tmp4);
  return null;
}) : (() => {
  const items = [MediaEngineStore, NotificationSettingsStore];
  closure_31(items, () => MediaEngineStore.isSelfMutedTemporarily(), (arg0, arg1) => {
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
  });
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
  closure_31(tmp2, tmp3, tmp4);
  return null;
}) : (() => {
  let currentUserPrioritySpeaker;
  const items = [SpeakingStore];
  closure_31(items, () => currentUserPrioritySpeaker.isCurrentUserPrioritySpeaker(), (arg0, arg1) => {
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
  });
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_38 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
  closure_31(tmp2, tmp3, tmp4);
  return null;
}) : (() => {
  const items = [VoiceStateStore];
  closure_31(items, () => VoiceStateStore.userHasBeenMovedVersion, (arg0, arg1) => {
    if (arg0 !== arg1) {
      return "user_moved";
    }
  });
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_39 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
        if (arg1 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
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
}) : (() => {
  const items = [SelectedChannelStore, VoiceStateStore];
  closure_31(items, () => {
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    if (null == voiceChannelId) {
      return require("useAudienceRequestToSpeakState").RequestToSpeakStates.NONE;
    } else {
      voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(voiceChannelId);
      const obj = require("useAudienceRequestToSpeakState");
      return obj.getAudienceRequestToSpeakState(voiceStateForChannel);
    }
  }, (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (arg1 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
        return "reconnect";
      }
    }
  });
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_40 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let id;
  let inChannel;
  let tmp2;
  let tmp3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SelectedChannelStore, ApplicationStreamingStore, AuthenticationStore, VoiceStateStore, ChannelStore];
    const fn = function t() {
      let first;
      voiceChannelId = voiceChannelId.getVoiceChannelId();
      const currentUserId = id.getId();
      const items = [];
      allActiveStreams = allActiveStreams.getAllActiveStreams();
      let streamingUserIds = items;
      let voiceChannelUserCount;
      let channelType;
      if (null != voiceChannelId) {
        const channel = ChannelStore.getChannel(voiceChannelId);
        streamingUserIds = items;
        if (null != channel) {
          const type = channel.type;
          const result = SortedVoiceStateStore.countVoiceStatesForChannel(channel.id);
          let num = 0;
          if (inChannel.isInChannel(channel.id)) {
            num = 1;
          }
          voiceChannelUserCount = result - num;
          const allApplicationStreamsForChannel = obj.getAllApplicationStreamsForChannel(channel.id);
          streamingUserIds = allApplicationStreamsForChannel.map((ownerId) => ownerId.ownerId);
          channelType = type;
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
        const obj2 = require("StreamKeyUtils");
        const encodeStreamKeyResult = obj2.encodeStreamKey(first);
        const viewerIds = obj.getViewerIds(encodeStreamKeyResult);
        singleActiveStreamViewerCount = viewerIds.filter((item) => item !== currentUserId).length;
        singleActiveStreamKey = encodeStreamKeyResult;
      }
      return { channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds, singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId, allActiveStreams };
    };
    const fn2 = function l(voiceChannelId, arg1) {
      let channelType;
      let closure_129_2;
      let singleActiveStreamKey;
      let singleActiveStreamViewerCount;
      let streamingUserIds;
      let voiceChannelUserCount;
      let closure_0 = voiceChannelId;
      ({ channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds } = arg1);
      ({ singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId: closure_129_2 } = arg1);
      if (voiceChannelId.voiceChannelId === voiceChannelId) {
        if (null != voiceChannelId) {
          const channel = ChannelStore.getChannel(voiceChannelId);
          let flag = false;
          if (null != channel) {
            const guildId = channel.getGuildId();
            flag = false;
            if (null != guildId) {
              guild = guild.getGuild(guildId);
              flag = null != guild && guild.afkChannelId === channel.id;
            }
          }
          if (!flag) {
            allActiveStreams = voiceChannelId.allActiveStreams;
            const someResult = streamingUserIds.some((item) => {
              streamingUserIds = streamingUserIds.streamingUserIds;
              return !streamingUserIds.includes(item);
            });
            let closure_3 = allActiveStreams.map((ownerId) => ownerId.ownerId);
            const streamingUserIds2 = voiceChannelId.streamingUserIds;
            let str = "stream_started";
            if (!someResult) {
              let str2 = "stream_ended";
              if (!tmp8) {
                let str3;
                let str4;
                if (voiceChannelId.singleActiveStreamViewerCount <= closure_1_30) {
                  if (null != singleActiveStreamKey && voiceChannelId.singleActiveStreamKey === singleActiveStreamKey) {
                    str3 = "stream_user_joined";
                  }
                  str2 = str3;
                }
                if (null != voiceChannelId.voiceChannelUserCount) {
                  if (null != voiceChannelUserCount) {
                    if (voiceChannelId.voiceChannelUserCount <= closure_1_30) {
                      str4 = "user_join";
                    }
                    str3 = str4;
                  }
                }
                if (null != voiceChannelId.voiceChannelUserCount) {
                  if (null != voiceChannelUserCount) {
                    let str5;
                    if (voiceChannelId.voiceChannelUserCount <= closure_1_30) {
                      str5 = "user_leave";
                    }
                    str4 = str5;
                  }
                }
                let str6;
                if (voiceChannelId.singleActiveStreamViewerCount <= closure_1_30) {
                  if (null != singleActiveStreamKey && voiceChannelId.singleActiveStreamKey === singleActiveStreamKey) {
                    if (singleActiveStreamViewerCount < voiceChannelId.singleActiveStreamViewerCount) {
                      str6 = "stream_user_left";
                    }
                  }
                }
                str5 = str6;
              }
              str = str2;
            }
            return str;
          }
        }
      }
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = fn2;
    tmp4 = fn2;
    tmp2 = items;
    tmp3 = fn;
  } else {
    [tmp2, tmp3, tmp4] = cResult;
  }
  closure_31(tmp2, tmp3, tmp4);
  return null;
}) : (() => {
  let id;
  let inChannel;
  let items = [SelectedChannelStore, ApplicationStreamingStore, AuthenticationStore, VoiceStateStore, ChannelStore];
  closure_31(items, () => {
    let first;
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    const currentUserId = id.getId();
    const items = [];
    allActiveStreams = allActiveStreams.getAllActiveStreams();
    let streamingUserIds = items;
    let voiceChannelUserCount;
    let channelType;
    if (null != voiceChannelId) {
      const channel = ChannelStore.getChannel(voiceChannelId);
      streamingUserIds = items;
      if (null != channel) {
        const type = channel.type;
        const result = SortedVoiceStateStore.countVoiceStatesForChannel(channel.id);
        let num = 0;
        if (inChannel.isInChannel(channel.id)) {
          num = 1;
        }
        voiceChannelUserCount = result - num;
        const allApplicationStreamsForChannel = obj.getAllApplicationStreamsForChannel(channel.id);
        streamingUserIds = allApplicationStreamsForChannel.map((ownerId) => ownerId.ownerId);
        channelType = type;
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
      const obj2 = require("StreamKeyUtils");
      const encodeStreamKeyResult = obj2.encodeStreamKey(first);
      const viewerIds = obj.getViewerIds(encodeStreamKeyResult);
      singleActiveStreamViewerCount = viewerIds.filter((item) => item !== currentUserId).length;
      singleActiveStreamKey = encodeStreamKeyResult;
    }
    return { channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds, singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId, allActiveStreams };
  }, (voiceChannelId, arg1) => {
    let channelType;
    let closure_129_2;
    let singleActiveStreamKey;
    let singleActiveStreamViewerCount;
    let streamingUserIds;
    let voiceChannelUserCount;
    let closure_0 = voiceChannelId;
    ({ channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds } = arg1);
    ({ singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId: closure_129_2 } = arg1);
    let closure_3;
    if (voiceChannelId.voiceChannelId === voiceChannelId) {
      if (null != voiceChannelId) {
        const channel = ChannelStore.getChannel(voiceChannelId);
        let flag = false;
        if (null != channel) {
          const guildId = channel.getGuildId();
          flag = false;
          if (null != guildId) {
            guild = guild.getGuild(guildId);
            flag = null != guild && guild.afkChannelId === channel.id;
          }
        }
        if (!flag) {
          allActiveStreams = voiceChannelId.allActiveStreams;
          const someResult = streamingUserIds.some((item) => {
            streamingUserIds = streamingUserIds.streamingUserIds;
            return !streamingUserIds.includes(item);
          });
          closure_3 = allActiveStreams.map((ownerId) => ownerId.ownerId);
          const streamingUserIds2 = voiceChannelId.streamingUserIds;
          let str = "stream_started";
          if (!someResult) {
            let str2 = "stream_ended";
            if (!tmp8) {
              let str3;
              let str4;
              if (voiceChannelId.singleActiveStreamViewerCount <= closure_1_30) {
                if (null != singleActiveStreamKey && voiceChannelId.singleActiveStreamKey === singleActiveStreamKey) {
                  str3 = "stream_user_joined";
                }
                str2 = str3;
              }
              if (null != voiceChannelId.voiceChannelUserCount) {
                if (null != voiceChannelUserCount) {
                  if (voiceChannelId.voiceChannelUserCount <= closure_1_30) {
                    str4 = "user_join";
                  }
                  str3 = str4;
                }
              }
              if (null != voiceChannelId.voiceChannelUserCount) {
                if (null != voiceChannelUserCount) {
                  let str5;
                  if (voiceChannelId.voiceChannelUserCount <= closure_1_30) {
                    str5 = "user_leave";
                  }
                  str4 = str5;
                }
              }
              let str6;
              if (voiceChannelId.singleActiveStreamViewerCount <= closure_1_30) {
                if (null != singleActiveStreamKey && voiceChannelId.singleActiveStreamKey === singleActiveStreamKey) {
                  if (singleActiveStreamViewerCount < voiceChannelId.singleActiveStreamViewerCount) {
                    str6 = "stream_user_left";
                  }
                }
              }
              str5 = str6;
            }
            str = str2;
          }
          return str;
        }
      }
    }
  });
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_41 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp2;
  let tmp3;
  let tmp4;
  let obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedChannelStore, EmbeddedActivitiesStore, FramesStore, AuthenticationStore, ChannelStore, ConjureProjectStore, ApplicationStore, GuildStore];
    const fn = function c() {
      let embeddedActivitiesForChannel;
      let embeddedActivitiesForChannel1;
      let embeddedActivitiesForChannel2;
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      const channelId = SelectedChannelStore.getChannelId();
      connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
      const obj2 = require("embeddedActivityLocationUtils");
      const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
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
      const tmp13Result = closure_1_25(surface);
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
      const obj4 = { connectedActivityLocation, voiceChannelId, currentUserId: id, channelActivities: embeddedActivitiesForChannel, connectedChannelActivities: embeddedActivitiesForChannel2, userConnectedActivity: selfEmbeddedActivityForLocation, voiceChannelActivities: embeddedActivitiesForChannel1, hasFrame: closure_1_26(mainFrame), inConjureChannel: result1, isGuildSpaceActivity: tmp21 };
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
      ({ voiceChannelActivities, hasFrame, isGuildSpaceActivity, voiceChannelId, channelActivities, connectedChannelActivities, inConjureChannel } = arg1);
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
          const tmp10 = isGuildSpaceActivity.connectedChannelActivities.length < connectedChannelActivities.length && isGuildSpaceActivity.channelActivities.length < channelActivities.length;
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
  closure_31(tmp2, tmp3, tmp4);
  return null;
}) : (() => {
  const items = [SelectedChannelStore, EmbeddedActivitiesStore, FramesStore, AuthenticationStore, ChannelStore, ConjureProjectStore, ApplicationStore, GuildStore];
  closure_31(items, () => {
    let embeddedActivitiesForChannel;
    let embeddedActivitiesForChannel1;
    let embeddedActivitiesForChannel2;
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    const channelId = SelectedChannelStore.getChannelId();
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    const obj2 = require("embeddedActivityLocationUtils");
    const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
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
    const tmp13Result = closure_1_25(surface);
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
    const obj4 = { connectedActivityLocation, voiceChannelId, currentUserId: id, channelActivities: embeddedActivitiesForChannel, connectedChannelActivities: embeddedActivitiesForChannel2, userConnectedActivity: selfEmbeddedActivityForLocation, voiceChannelActivities: embeddedActivitiesForChannel1, hasFrame: closure_1_26(mainFrame), inConjureChannel: result1, isGuildSpaceActivity: tmp21 };
    return obj4;
  }, (isGuildSpaceActivity, arg1) => {
    let channelActivities;
    let closure_129_0;
    let connectedChannelActivities;
    let hasFrame;
    let inConjureChannel;
    let userConnectedActivity;
    let voiceChannelActivities;
    let voiceChannelId;
    ({ connectedActivityLocation, currentUserId: closure_129_0, userConnectedActivity } = arg1);
    ({ voiceChannelActivities, hasFrame, isGuildSpaceActivity, voiceChannelId, channelActivities, connectedChannelActivities, inConjureChannel } = arg1);
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
        const tmp10 = isGuildSpaceActivity.connectedChannelActivities.length < connectedChannelActivities.length && isGuildSpaceActivity.channelActivities.length < channelActivities.length;
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
  });
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: items };
    items = [closure_27(closure_32, {}), closure_27(closure_33, {}), closure_27(closure_34, {}), closure_27(closure_35, {}), closure_27(closure_36, {}), closure_27(closure_38, {}), closure_27(closure_40, {}), closure_27(closure_39, {}), closure_27(closure_41, {}), closure_27(closure_37, {})];
    const tmp16 = set(closure_28, obj2);
    cResult[0] = tmp16;
    first = tmp16;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  let items;
  const obj = { children: items };
  items = [closure_27(closure_32, {}), closure_27(closure_33, {}), closure_27(closure_34, {}), closure_27(closure_35, {}), closure_27(closure_36, {}), closure_27(closure_38, {}), closure_27(closure_40, {}), closure_27(closure_39, {}), closure_27(closure_41, {}), closure_27(closure_37, {})];
  return set(closure_28, obj);
});
let result = size.fileFinishedImporting("modules/soundplayer/SoundPlayer.tsx");

export default tmp5;