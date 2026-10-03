// === Module 17080: SoundPlayer ===

// Module 17080 (SoundPlayer)
import c from "c" /* 576 */;
import SoundUtils from "SoundUtils" /* 9562 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import FramesStore from "FramesStore" /* 8703 */;
import GameConsoleStore from "GameConsoleStore" /* 4907 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8699 */;
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

require = fn;
const NO_ACTIVITIES = fn(2050).NO_ACTIVITIES;
let closure_9 = fn(2055).SILENT_JOIN_LEAVE_CHANNEL_TYPES;
const Constants = fn(1085);
({ InputModes: closure_21, ApplicationStreamStates: closure_22, ChannelTypes: closure_23, RTCConnectionStates: closure_24 } = Constants);
const FramesConstants = fn(8704);
({ getChannelIdForSurface: closure_25, isLaunched: closure_26 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_27, Fragment: closure_28, jsxs: closure_29 } = jsxProd);
let c30 = 25;
let ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3) => {
  _require = arg0;
  dependencyMap = arg1;
  noop = arg2;
  closure_3 = arg3;
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
  const fn = function c() {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new closure_0(batchedStoreListener[23]).BatchedStoreListener(closure_0, () => {
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
}) : ((arg0, arg1, arg2, arg3) => {
  closure_0 = arg0;
  closure_1 = arg1;
  noop = arg2;
  closure_3 = arg3;
  const effect = noop.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new closure_0(batchedStoreListener[23]).BatchedStoreListener(closure_0, () => {
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
});
ReactCompilerGating = fn(558);
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore, SelectedChannelStore];
    const fn = function t() {
      return { inVoiceChannel: null != voiceChannelId.getVoiceChannelId(), selfMute: MediaEngineStore.isSelfMute(), selfDeaf: MediaEngineStore.isSelfDeaf(), audioPermissionReady: MediaEngineStore.isNativeAudioPermissionReady(), shouldSkipMuteUnmuteSound: MediaEngineStore.shouldSkipMuteUnmuteSound() };
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
}) : (() => {
  const items = [MediaEngineStore, SelectedChannelStore];
  closure_31(items, () => ({ inVoiceChannel: null != voiceChannelId.getVoiceChannelId(), selfMute: MediaEngineStore.isSelfMute(), selfDeaf: MediaEngineStore.isSelfDeaf(), audioPermissionReady: MediaEngineStore.isNativeAudioPermissionReady(), shouldSkipMuteUnmuteSound: MediaEngineStore.shouldSkipMuteUnmuteSound() }), (selfDeaf, arg1) => {
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
  });
  return null;
});
ReactCompilerGating = fn(558);
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore, SelectedChannelStore];
    const fn = function t() {
      return { videoEnabled: videoEnabled.isVideoEnabled(), inVoiceChannel: null != voiceChannelId.getVoiceChannelId() };
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
  const items = [MediaEngineStore, SelectedChannelStore];
  closure_31(items, () => ({ videoEnabled: videoEnabled.isVideoEnabled(), inVoiceChannel: null != voiceChannelId.getVoiceChannelId() }), (videoEnabled, videoEnabled2) => {
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
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
      state = RTCConnectionStore.getState();
      const obj = { channelType: type, guildId, connected: state === constants.RTC_CONNECTED, connectHasStarted: null, awaitingRemote: null, connectedRemote: null };
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
    const fn2 = function l(channelType, arg1) {
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
    tmp2 = items;
    tmp3 = fn;
    tmp4 = fn2;
  } else {
    [tmp2, tmp3, tmp4] = cResult;
  }
  closure_31(tmp2, tmp3, tmp4);
  return null;
}) : (() => {
  const items = [ChannelStore, RTCConnectionStore, SelectedChannelStore, GameConsoleStore];
  closure_31(items, () => {
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
    state = RTCConnectionStore.getState();
    const obj = { channelType: type, guildId, connected: state === constants.RTC_CONNECTED, connectHasStarted: null, awaitingRemote: null, connectedRemote: null };
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
  }, (channelType, arg1) => {
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
ReactCompilerGating = fn(558);
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  const items = [SpeakingStore];
  closure_31(items, () => currentUserPTTActive.isCurrentUserPTTActive(), (arg0, arg1) => {
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
  });
  return null;
});
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  const items = [MediaEngineStore, NotificationSettingsStore];
  closure_31(items, () => MediaEngineStore.isSelfMutedTemporarily(), (arg0, arg1) => {
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
  });
  return null;
});
ReactCompilerGating = fn(558);
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  const items = [SpeakingStore];
  closure_31(items, () => currentUserPrioritySpeaker.isCurrentUserPrioritySpeaker(), (arg0, arg1) => {
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
  });
  return null;
});
ReactCompilerGating = fn(558);
let closure_38 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  const items = [VoiceStateStore];
  closure_31(items, () => VoiceStateStore.userHasBeenMovedVersion, (arg0, arg1) => {
    if (arg0 !== arg1) {
      return "user_moved";
    }
  });
  return null;
});
ReactCompilerGating = fn(558);
let closure_39 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
      return require("useAudienceRequestToSpeakState").getAudienceRequestToSpeakState(voiceStateForChannel);
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
ReactCompilerGating = fn(558);
let closure_40 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SelectedChannelStore, ApplicationStreamingStore, AuthenticationStore, VoiceStateStore, ChannelStore];
    const fn = function t() {
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
          const result = SortedVoiceStateStore.countVoiceStatesForChannel(channel.id);
          let num = 0;
          if (inChannel.isInChannel(channel.id)) {
            num = 1;
          }
          voiceChannelUserCount = result - num;
          const allApplicationStreamsForChannel = obj.getAllApplicationStreamsForChannel(channel.id);
          streamingUserIds = allApplicationStreamsForChannel.map((ownerId) => ownerId.ownerId);
          channelType = channel.type;
        }
      }
      if (1 === allActiveStreams.length) {
        let first = allActiveStreams[0];
      } else {
        first = obj.getCurrentUserActiveStream();
      }
      state = undefined;
      if (first != null) {
        state = first.state;
      }
      if (state === constants.CONNECTING) {
        first = null;
      }
      let singleActiveStreamViewerCount = 0;
      let singleActiveStreamKey = null;
      if (null != first) {
        const encodeStreamKeyResult = require("StreamKeyUtils").encodeStreamKey(first);
        const viewerIds = obj.getViewerIds(encodeStreamKeyResult);
        singleActiveStreamViewerCount = viewerIds.filter((item) => item !== currentUserId).length;
        singleActiveStreamKey = encodeStreamKeyResult;
        const obj2 = require("StreamKeyUtils");
      }
      return { channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds, singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId, allActiveStreams };
    };
    const fn2 = function l(voiceChannelId, arg1) {
      ({ channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds } = arg1);
      ({ singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId: closure_2 } = arg1);
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
              const tmp4 = null != guild && guild.afkChannelId === channel.id;
            }
          }
          if (!flag) {
            allActiveStreams = voiceChannelId.allActiveStreams;
            closure_3 = allActiveStreams.map((ownerId) => ownerId.ownerId);
            const streamingUserIds2 = voiceChannelId.streamingUserIds;
            let str = "stream_started";
            if (!someResult) {
              let str2 = "stream_ended";
              if (!tmp8) {
                if (voiceChannelId.singleActiveStreamViewerCount <= closure_1_30) {
                  if (tmp6) {
                    let str3 = "stream_user_joined";
                  }
                  str2 = str3;
                }
                if (null != voiceChannelId.voiceChannelUserCount) {
                  if (null != voiceChannelUserCount) {
                    if (voiceChannelId.voiceChannelUserCount <= closure_1_30) {
                      let str4 = "user_join";
                    }
                    str3 = str4;
                  }
                }
                if (null != voiceChannelId.voiceChannelUserCount) {
                  if (null != voiceChannelUserCount) {
                    if (voiceChannelId.voiceChannelUserCount <= closure_1_30) {
                      let str5 = "user_leave";
                    }
                    str4 = str5;
                  }
                }
                let str6;
                if (voiceChannelId.singleActiveStreamViewerCount <= closure_1_30) {
                  if (tmp6) {
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
  let items = [SelectedChannelStore, ApplicationStreamingStore, AuthenticationStore, VoiceStateStore, ChannelStore];
  closure_31(items, () => {
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
        const result = SortedVoiceStateStore.countVoiceStatesForChannel(channel.id);
        let num = 0;
        if (inChannel.isInChannel(channel.id)) {
          num = 1;
        }
        voiceChannelUserCount = result - num;
        const allApplicationStreamsForChannel = obj.getAllApplicationStreamsForChannel(channel.id);
        streamingUserIds = allApplicationStreamsForChannel.map((ownerId) => ownerId.ownerId);
        channelType = channel.type;
      }
    }
    if (1 === allActiveStreams.length) {
      let first = allActiveStreams[0];
    } else {
      first = obj.getCurrentUserActiveStream();
    }
    state = undefined;
    if (first != null) {
      state = first.state;
    }
    if (state === constants.CONNECTING) {
      first = null;
    }
    let singleActiveStreamViewerCount = 0;
    let singleActiveStreamKey = null;
    if (null != first) {
      const encodeStreamKeyResult = require("StreamKeyUtils").encodeStreamKey(first);
      const viewerIds = obj.getViewerIds(encodeStreamKeyResult);
      singleActiveStreamViewerCount = viewerIds.filter((item) => item !== currentUserId).length;
      singleActiveStreamKey = encodeStreamKeyResult;
      const obj2 = require("StreamKeyUtils");
    }
    return { channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds, singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId, allActiveStreams };
  }, (voiceChannelId, arg1) => {
    ({ channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds } = arg1);
    ({ singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId: closure_2 } = arg1);
    closure_3 = undefined;
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
            const tmp4 = null != guild && guild.afkChannelId === channel.id;
          }
        }
        if (!flag) {
          allActiveStreams = voiceChannelId.allActiveStreams;
          closure_3 = allActiveStreams.map((ownerId) => ownerId.ownerId);
          const streamingUserIds2 = voiceChannelId.streamingUserIds;
          let str = "stream_started";
          if (!someResult) {
            let str2 = "stream_ended";
            if (!tmp8) {
              if (voiceChannelId.singleActiveStreamViewerCount <= closure_1_30) {
                if (tmp6) {
                  let str3 = "stream_user_joined";
                }
                str2 = str3;
              }
              if (null != voiceChannelId.voiceChannelUserCount) {
                if (null != voiceChannelUserCount) {
                  if (voiceChannelId.voiceChannelUserCount <= closure_1_30) {
                    let str4 = "user_join";
                  }
                  str3 = str4;
                }
              }
              if (null != voiceChannelId.voiceChannelUserCount) {
                if (null != voiceChannelUserCount) {
                  if (voiceChannelId.voiceChannelUserCount <= closure_1_30) {
                    let str5 = "user_leave";
                  }
                  str4 = str5;
                }
              }
              let str6;
              if (voiceChannelId.singleActiveStreamViewerCount <= closure_1_30) {
                if (tmp6) {
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
ReactCompilerGating = fn(558);
let closure_41 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedChannelStore, EmbeddedActivitiesStore, FramesStore, AuthenticationStore, ChannelStore, VibegrationsProjectStore, ApplicationStore, GuildStore];
    const fn = function c() {
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      const channelId = SelectedChannelStore.getChannelId();
      connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
      const embeddedActivityLocationChannelId = require("embeddedActivityLocationUtils").getEmbeddedActivityLocationChannelId(connectedActivityLocation);
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
      if (tmp4Result4.isNotNullish(embeddedActivityLocationChannelId)) {
        let embeddedActivitiesForChannel2 = obj.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
      } else {
        embeddedActivitiesForChannel2 = NO_ACTIVITIES;
      }
      tmp4Result4 = require("GlobalUtils");
      let selfEmbeddedActivityForLocation = null;
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
        if (mainFrame != null) {
          applicationId = mainFrame.applicationId;
        }
        result = vibegrationsProjectApplication.isVibegrationsProjectApplication(applicationId);
      }
      let result1 = null != tmp13Result;
      if (result1) {
        result1 = require("VibegrationsUtils").isVibegrationsChannelCandidate(ChannelStore.getChannel(tmp13Result), "ActivitySounds");
        const tmp4Result6 = require("VibegrationsUtils");
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
      tmp4Result5 = require("GlobalUtils");
      return { connectedActivityLocation, voiceChannelId, currentUserId: id, channelActivities: embeddedActivitiesForChannel, connectedChannelActivities: embeddedActivitiesForChannel2, userConnectedActivity: selfEmbeddedActivityForLocation, voiceChannelActivities: embeddedActivitiesForChannel1, hasFrame: closure_1_26(mainFrame), inVibegrationsChannel: result1, isGuildSpaceActivity: tmp21 };
    };
    const fn2 = function v(isGuildSpaceActivity, arg1) {
      ({ connectedActivityLocation, currentUserId: closure_0, userConnectedActivity } = arg1);
      ({ voiceChannelActivities, hasFrame, isGuildSpaceActivity, voiceChannelId, channelActivities, connectedChannelActivities, inVibegrationsChannel } = arg1);
      if (!isGuildSpaceActivity) {
        isGuildSpaceActivity = isGuildSpaceActivity.isGuildSpaceActivity;
      }
      const someResult = voiceChannelActivities.some((applicationId) => {
        applicationId = undefined;
        if (userConnectedActivity != null) {
          applicationId = userConnectedActivity.applicationId;
        }
        return applicationId.applicationId === applicationId && applicationId.launchId === userConnectedActivity.launchId;
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
          tmp10 = isGuildSpaceActivity.connectedChannelActivities.length < connectedChannelActivities.length && isGuildSpaceActivity.channelActivities.length < channelActivities.length;
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
        let inVibegrationsChannel2 = !hasFrame2;
        if (hasFrame2) {
          inVibegrationsChannel2 = hasFrame;
        }
        if (!inVibegrationsChannel2) {
          inVibegrationsChannel2 = isGuildSpaceActivity.inVibegrationsChannel;
        }
        if (!inVibegrationsChannel2) {
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
  const items = [SelectedChannelStore, EmbeddedActivitiesStore, FramesStore, AuthenticationStore, ChannelStore, VibegrationsProjectStore, ApplicationStore, GuildStore];
  closure_31(items, () => {
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    const channelId = SelectedChannelStore.getChannelId();
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    const embeddedActivityLocationChannelId = require("embeddedActivityLocationUtils").getEmbeddedActivityLocationChannelId(connectedActivityLocation);
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
    if (tmp4Result4.isNotNullish(embeddedActivityLocationChannelId)) {
      let embeddedActivitiesForChannel2 = obj.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
    } else {
      embeddedActivitiesForChannel2 = NO_ACTIVITIES;
    }
    tmp4Result4 = require("GlobalUtils");
    let selfEmbeddedActivityForLocation = null;
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
      if (mainFrame != null) {
        applicationId = mainFrame.applicationId;
      }
      result = vibegrationsProjectApplication.isVibegrationsProjectApplication(applicationId);
    }
    let result1 = null != tmp13Result;
    if (result1) {
      result1 = require("VibegrationsUtils").isVibegrationsChannelCandidate(ChannelStore.getChannel(tmp13Result), "ActivitySounds");
      const tmp4Result6 = require("VibegrationsUtils");
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
    tmp4Result5 = require("GlobalUtils");
    return { connectedActivityLocation, voiceChannelId, currentUserId: id, channelActivities: embeddedActivitiesForChannel, connectedChannelActivities: embeddedActivitiesForChannel2, userConnectedActivity: selfEmbeddedActivityForLocation, voiceChannelActivities: embeddedActivitiesForChannel1, hasFrame: closure_1_26(mainFrame), inVibegrationsChannel: result1, isGuildSpaceActivity: tmp21 };
  }, (isGuildSpaceActivity, arg1) => {
    ({ connectedActivityLocation, currentUserId: closure_0, userConnectedActivity } = arg1);
    ({ voiceChannelActivities, hasFrame, isGuildSpaceActivity, voiceChannelId, channelActivities, connectedChannelActivities, inVibegrationsChannel } = arg1);
    if (!isGuildSpaceActivity) {
      isGuildSpaceActivity = isGuildSpaceActivity.isGuildSpaceActivity;
    }
    const someResult = voiceChannelActivities.some((applicationId) => {
      applicationId = undefined;
      if (userConnectedActivity != null) {
        applicationId = userConnectedActivity.applicationId;
      }
      return applicationId.applicationId === applicationId && applicationId.launchId === userConnectedActivity.launchId;
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
        tmp10 = isGuildSpaceActivity.connectedChannelActivities.length < connectedChannelActivities.length && isGuildSpaceActivity.channelActivities.length < channelActivities.length;
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
      let inVibegrationsChannel2 = !hasFrame2;
      if (hasFrame2) {
        inVibegrationsChannel2 = hasFrame;
      }
      if (!inVibegrationsChannel2) {
        inVibegrationsChannel2 = isGuildSpaceActivity.inVibegrationsChannel;
      }
      if (!inVibegrationsChannel2) {
        str4 = "activity_end";
      }
      str8 = str4;
    }
    return tmp20;
  });
  return null;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundplayer/SoundPlayer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: null };
    const items = [closure_1_27(closure_32, {}), closure_1_27(closure_33, {}), closure_1_27(closure_34, {}), closure_1_27(closure_35, {}), closure_1_27(closure_36, {}), closure_1_27(closure_38, {}), closure_1_27(closure_40, {}), closure_1_27(closure_39, {}), closure_1_27(closure_41, {}), closure_1_27(closure_37, {})];
    obj2.children = items;
    const tmp16 = closure_1_29(closure_1_28, obj2);
    cResult[0] = tmp16;
    let first = tmp16;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const obj = { children: null };
  const items = [closure_1_27(closure_32, {}), closure_1_27(closure_33, {}), closure_1_27(closure_34, {}), closure_1_27(closure_35, {}), closure_1_27(closure_36, {}), closure_1_27(closure_38, {}), closure_1_27(closure_40, {}), closure_1_27(closure_39, {}), closure_1_27(closure_41, {}), closure_1_27(closure_37, {})];
  obj.children = items;
  return closure_1_29(closure_1_28, obj);
});