// discord_app/modules/soundplayer/SoundPlayer.tsx
import SoundUtils from "../sound_playback/SoundUtils.tsx";
import VoiceConnectFeedbackExperimentDefault from "../voice_calls/VoiceConnectFeedbackExperiment.tsx";
import _modDef19012 from "../../../_runtime/metro/19012__.js";
import noop from "../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../activities/EmbeddedActivitiesStore.tsx";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import ConjureBuilderPreviewStore from "../conjure/preview/ConjureBuilderPreviewStore.tsx";
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
function MuteDeafen() {
  const items = [MediaEngineStore, SelectedChannelStore];
  const f116426 = () => ({
    inVoiceChannel: null != voiceChannelId.getVoiceChannelId(),
    selfMute: MediaEngineStore.isSelfMute(),
    selfDeaf: MediaEngineStore.isSelfDeaf(),
    audioPermissionReady: MediaEngineStore.isNativeAudioPermissionReady(),
    shouldSkipMuteUnmuteSound: MediaEngineStore.shouldSkipMuteUnmuteSound(),
  });
  const f116427 = (selfDeaf, arg1) => {
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
  const effect = noop.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116445[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116444();
      const tmp2 = f116445(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        SoundUtils.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function Camera() {
  const items = [MediaEngineStore, SelectedChannelStore];
  const f116428 = () => ({
    videoEnabled: videoEnabled.isVideoEnabled(),
    inVoiceChannel: null != voiceChannelId.getVoiceChannelId(),
  });
  const f116429 = (videoEnabled, videoEnabled2) => {
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
  const effect = noop.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116445[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116444();
      const tmp2 = f116445(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        SoundUtils.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function RTCConnect() {
  const items = [ChannelStore, RTCConnectionStore, SelectedChannelStore, GameConsoleStore];
  const f116430 = () => {
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
  const f116431 = (connectedRemote, arg1) => {
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
      obj = f116430(f116431[24]);
    }
  };
  const effect = noop.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116445[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116444();
      const tmp2 = f116445(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        SoundUtils.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function Speaking() {
  const items = [SpeakingStore];
  const f116432 = () => currentUserPTTActive.isCurrentUserPTTActive();
  const f116433 = (arg0, arg1) => {
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
  const effect = noop.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116445[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116444();
      const tmp2 = f116445(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        SoundUtils.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function SelfMutedTemporarily() {
  const items = [MediaEngineStore, NotificationSettingsStore];
  const f116434 = () => MediaEngineStore.isSelfMutedTemporarily();
  const f116435 = (arg0, arg1) => {
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
  const effect = noop.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116445[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116444();
      const tmp2 = f116445(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        SoundUtils.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function PriorityVAD() {
  const items = [SpeakingStore];
  const f116436 = () => currentUserPrioritySpeaker.isCurrentUserPrioritySpeaker();
  const f116437 = (arg0, arg1) => {
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
  const effect = noop.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116445[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116444();
      const tmp2 = f116445(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        SoundUtils.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function UserHasBeenMoved() {
  const items = [VoiceStateStore];
  const f116438 = () => VoiceStateStore.userHasBeenMovedVersion;
  const f116439 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      return "user_moved";
    }
  };
  const effect = noop.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116445[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116444();
      const tmp2 = f116445(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        SoundUtils.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function UserInvitedToSpeak() {
  const items = [SelectedChannelStore, VoiceStateStore];
  const f116440 = () => {
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    if (null == voiceChannelId) {
      return items(f116441[25]).RequestToSpeakStates.NONE;
    } else {
      voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(voiceChannelId);
      return items(f116441[25]).getAudienceRequestToSpeakState(voiceStateForChannel);
    }
  };
  const f116441 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (arg1 === items(f116441[25]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
        return "reconnect";
      }
    }
  };
  const effect = noop.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116445[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116444();
      const tmp2 = f116445(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        SoundUtils.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function VoiceChannel() {
  closure_0 = noop.useRef([]);
  let items = [
    SelectedChannelStore,
    ApplicationStreamingStore,
    AuthenticationStore,
    VoiceStateStore,
    ChannelStore,
    RTCConnectionStore,
  ];
  closure_129_0 = items;
  closure_129_1 = () => {
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
      const encodeStreamKeyResult = closure_0(dependencyMap[26]).encodeStreamKey(first);
      const viewerIds = obj.getViewerIds(encodeStreamKeyResult);
      singleActiveStreamViewerCount = viewerIds.filter((item) => item !== currentUserId).length;
      singleActiveStreamKey = encodeStreamKeyResult;
      const obj3 = closure_0(dependencyMap[26]);
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
  closure_129_2 = (rtcConnected, arg1) => {
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
    const tmp8 = _modDef19012(rtcUserIds, rtcConnected.rtcUserIds);
    let rtcConnected3 = rtcConnected.rtcConnected;
    if (rtcConnected3) {
      rtcConnected3 = rtcConnected.rtcUserIds.length <= 25;
    }
    if (rtcConnected3) {
      rtcConnected3 = _modDef19012(tmp8, keys).length > 0;
    }
    let tmp9 = rtcConnected.rtcConnected && rtcConnected;
    if (tmp9) {
      tmp9 = rtcConnected.rtcUserIds.length <= 25;
    }
    if (tmp9) {
      tmp9 = _modDef19012(rtcConnected.rtcUserIds, rtcUserIds).length > 0;
    }
    streamingUserIds.current = _modDef19012(keys, tmp8);
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
            const tmp13 = null != guild && guild.afkChannelId === channel.id;
          }
        }
        if (!flag) {
          allActiveStreams = rtcConnected.allActiveStreams;
          closure_3 = allActiveStreams.map((ownerId) => ownerId.ownerId);
          ({ streamingUserIds: streamingUserIds2, voiceChannelUserCount: voiceChannelUserCount2 } = rtcConnected);
          let tmp18 = null != voiceChannelUserCount2;
          const someResult = streamingUserIds.some((item) => {
            streamingUserIds = streamingUserIds.streamingUserIds;
            return !streamingUserIds.includes(item);
          });
          if (tmp18) {
            tmp18 = null != voiceChannelUserCount;
          }
          if (tmp18) {
            tmp18 = voiceChannelUserCount2 <= 25;
          }
          let tmp19 = tmp18;
          if (tmp18) {
            tmp19 = voiceChannelUserCount > voiceChannelUserCount2;
          }
          if (tmp18) {
            tmp18 = voiceChannelUserCount < voiceChannelUserCount2;
          }
          let rtcConnectionJoinSounds = tmp19;
          if (!tmp19) {
            rtcConnectionJoinSounds = tmp18;
          }
          if (!rtcConnectionJoinSounds) {
            rtcConnectionJoinSounds = rtcConnected3;
          }
          if (!rtcConnectionJoinSounds) {
            rtcConnectionJoinSounds = tmp9;
          }
          if (rtcConnectionJoinSounds) {
            rtcConnectionJoinSounds = VoiceConnectFeedbackExperimentDefault.getConfig({
              location: "VoiceChannel",
            }).rtcConnectionJoinSounds;
            const tmp6Result = VoiceConnectFeedbackExperimentDefault;
          }
          if (rtcConnectionJoinSounds) {
            tmp18 = tmp9;
            tmp19 = rtcConnected3;
          }
          let str = "stream_started";
          if (!someResult) {
            let str2 = "stream_ended";
            if (!someResult1) {
              if (rtcConnected.singleActiveStreamViewerCount <= 25) {
                if (tmp15) {
                  let str3 = "stream_user_joined";
                }
                str2 = str3;
              }
              let str4 = "user_join";
              if (!tmp19) {
                let str5 = "user_leave";
                if (!tmp18) {
                  let str6;
                  if (rtcConnected.singleActiveStreamViewerCount <= 25) {
                    if (tmp15) {
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
  const effect = noop.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116445[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116444();
      const tmp2 = f116445(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        SoundUtils.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function ActivitySounds() {
  const items = [
    SelectedChannelStore,
    EmbeddedActivitiesStore,
    FramesStore,
    AuthenticationStore,
    ChannelStore,
    ConjureProjectStore,
    ConjureBuilderPreviewStore,
    ApplicationStore,
    GuildStore,
  ];
  const f116444 = () => {
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    const channelId = SelectedChannelStore.getChannelId();
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    const embeddedActivityLocationChannelId = items(f116445[28]).getEmbeddedActivityLocationChannelId(
      connectedActivityLocation,
    );
    id = id.getId();
    const obj2 = items(f116445[28]);
    if (obj3.isNotNullish(channelId)) {
      let embeddedActivitiesForChannel = obj.getEmbeddedActivitiesForChannel(channelId);
    } else {
      embeddedActivitiesForChannel = NO_ACTIVITIES;
    }
    obj3 = items(f116445[29]);
    if (tmp4Result.isNotNullish(voiceChannelId)) {
      let embeddedActivitiesForChannel1 = obj.getEmbeddedActivitiesForChannel(voiceChannelId);
    } else {
      embeddedActivitiesForChannel1 = NO_ACTIVITIES;
    }
    tmp4Result = items(f116445[29]);
    if (tmp4Result5.isNotNullish(embeddedActivityLocationChannelId)) {
      let embeddedActivitiesForChannel2 = obj.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
    } else {
      embeddedActivitiesForChannel2 = NO_ACTIVITIES;
    }
    tmp4Result5 = items(f116445[29]);
    let selfEmbeddedActivityForLocation = null;
    if (tmp4Result6.isNotNullish(connectedActivityLocation)) {
      selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    }
    mainFrame = mainFrame.getMainFrame();
    let surface;
    tmp4Result6 = items(f116445[29]);
    if (mainFrame != null) {
      surface = mainFrame.surface;
    }
    const tmp13Result = f116444(f116445[30])(surface);
    if (null == mainFrame) {
      let result = null != tmp13Result;
      if (result) {
        result = items(f116445[32]).isConjureChannelCandidate(ChannelStore.getChannel(tmp13Result), "ActivitySounds");
        const tmp4Result7 = items(f116445[32]);
      }
      if (!result) {
        result = tmp16;
      }
      let tmp23 = null != embeddedActivityLocationChannelId;
      if (tmp23) {
        const channel = ChannelStore.getChannel(embeddedActivityLocationChannelId);
        let type;
        if (channel != null) {
          type = channel.type;
        }
        tmp23 = type === constants.GUILD_SPACE;
      }
      const obj4 = {
        connectedActivityLocation,
        voiceChannelId,
        currentUserId: id,
        channelActivities: embeddedActivitiesForChannel,
        connectedChannelActivities: embeddedActivitiesForChannel2,
        userConnectedActivity: selfEmbeddedActivityForLocation,
        voiceChannelActivities: embeddedActivitiesForChannel1,
        hasFrame: isLaunched(mainFrame),
        inConjureChannel: result,
        isGuildSpaceActivity: tmp23,
      };
      return obj4;
    } else {
      if (tmp4Result8.isConjurePreviewSurface(mainFrame.surface)) {
        let result1 = conjureProjectApplication.isConjureProjectApplication(mainFrame.applicationId);
      } else {
        result1 = null == tmp13Result;
        if (result1) {
          result1 = mainFrame.applicationId === builderPreviewApplicationId.getBuilderPreviewApplicationId();
        }
      }
      tmp4Result8 = items(f116445[31]);
    }
    const tmp13 = f116444(f116445[30]);
  };
  const f116445 = (isGuildSpaceActivity, arg1) => {
    ({ connectedActivityLocation, currentUserId: items, userConnectedActivity } = arg1);
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
      return applicationId.applicationId === applicationId && applicationId.launchId === userConnectedActivity.launchId;
    });
    let str;
    if (obj.isNotNullish(voiceChannelId)) {
      const prop = isGuildSpaceActivity.voiceChannelActivities;
      const found = prop.find((userIds) => {
        userIds = userIds.userIds;
        return userIds.has(items);
      });
      const found1 = voiceChannelActivities.find((userIds) => {
        userIds = userIds.userIds;
        return userIds.has(items);
      });
      let isNotNullishResult = isGuildSpaceActivity.voiceChannelActivities.length < voiceChannelActivities.length;
      if (isNotNullishResult) {
        isNotNullishResult = items(f116445[29]).isNotNullish(isGuildSpaceActivity.voiceChannelId);
        const tmp2Result = items(f116445[29]);
      }
      let str2;
      if (isNotNullishResult) {
        str2 = "activity_launch";
      }
      let isNotNullishResult1 = undefined === found1;
      if (isNotNullishResult1) {
        isNotNullishResult1 = items(f116445[29]).isNotNullish(found);
        const tmp2Result8 = items(f116445[29]);
      }
      if (isNotNullishResult1) {
        str2 = "activity_end";
      }
      let isNotNullishResult2 = undefined === found;
      if (isNotNullishResult2) {
        isNotNullishResult2 = items(f116445[29]).isNotNullish(found1);
        const tmp2Result9 = items(f116445[29]);
      }
      if (isNotNullishResult2) {
        isNotNullishResult2 = found1.userIds.size > 1;
      }
      if (isNotNullishResult2) {
        str2 = "activity_user_join";
      }
      let isNotNullishResult3 = items(f116445[29]).isNotNullish(found1);
      if (isNotNullishResult3) {
        isNotNullishResult3 = items(f116445[29]).isNotNullish(found);
        const tmp2Result11 = items(f116445[29]);
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
      const tmp2Result10 = items(f116445[29]);
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
          isNotNullishResult4 = items(f116445[29]).isNotNullish(userConnectedActivity2);
          const tmp2Result12 = items(f116445[29]);
        }
        if (isNotNullishResult4) {
          str = "activity_end";
        }
        let isNotNullishResult5 = items(f116445[29]).isNotNullish(userConnectedActivity);
        if (isNotNullishResult5) {
          isNotNullishResult5 = items(f116445[29]).isNotNullish(userConnectedActivity2);
          const tmp2Result14 = items(f116445[29]);
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
        const tmp2Result13 = items(f116445[29]);
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
  const effect = noop.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f116445[22]).BatchedStoreListener(closure_0, () => {
      const tmp = f116444();
      const tmp2 = f116445(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        SoundUtils.playSound(tmp2, 0.4);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
const NO_ACTIVITIES = fn(4862).NO_ACTIVITIES;
let closure_11 = fn(4867).SILENT_JOIN_LEAVE_CHANNEL_TYPES;
const Constants = fn(1072);
({
  InputModes: closure_23,
  ApplicationStreamStates: closure_24,
  ChannelTypes: closure_25,
  RTCConnectionStates: closure_26,
} = Constants);
const isLaunched = fn(6847).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_28, Fragment: closure_29, jsxs: closure_30 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundplayer/SoundPlayer.tsx");

export default function SoundPlayer() {
  const obj = { children: null };
  const items = [
    __initData6(MuteDeafen, {}),
    __initData6(Camera, {}),
    __initData6(RTCConnect, {}),
    __initData6(Speaking, {}),
    __initData6(SelfMutedTemporarily, {}),
    __initData6(UserHasBeenMoved, {}),
    __initData6(VoiceChannel, {}),
    __initData6(UserInvitedToSpeak, {}),
    __initData6(ActivitySounds, {}),
    __initData6(PriorityVAD, {}),
  ];
  obj.children = items;
  return __initData8(__initData7, obj);
}
