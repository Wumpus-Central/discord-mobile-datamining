// discord_app/modules/soundplayer/SoundPlayer.tsx
import SoundUtils from "../sound_playback/SoundUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../frames/FramesStore.tsx";
import GameConsoleStore from "../game_console/GameConsoleStore.tsx";
import VibegrationsProjectStore from "../vibegrations/stores/VibegrationsProjectStore.tsx";
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
  const f103990 = () => ({
    inVoiceChannel: null != voiceChannelId.getVoiceChannelId(),
    selfMute: MediaEngineStore.isSelfMute(),
    selfDeaf: MediaEngineStore.isSelfDeaf(),
    audioPermissionReady: MediaEngineStore.isNativeAudioPermissionReady(),
    shouldSkipMuteUnmuteSound: MediaEngineStore.shouldSkipMuteUnmuteSound(),
  });
  const f103991 = (selfDeaf, arg1) => {
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
  const effect = f103991.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f104008[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f104008();
      const tmp2 = f104009(closure_0, tmp);
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
  const f103992 = () => ({
    videoEnabled: videoEnabled.isVideoEnabled(),
    inVoiceChannel: null != voiceChannelId.getVoiceChannelId(),
  });
  const f103993 = (videoEnabled, videoEnabled2) => {
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
  const effect = f103993.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f104008[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f104008();
      const tmp2 = f104009(closure_0, tmp);
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
  const f103994 = () => {
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
  const f103995 = (channelType, arg1) => {
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
  const effect = f103995.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f104008[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f104008();
      const tmp2 = f104009(closure_0, tmp);
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
  const f103996 = () => currentUserPTTActive.isCurrentUserPTTActive();
  const f103997 = (arg0, arg1) => {
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
  const effect = f103997.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f104008[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f104008();
      const tmp2 = f104009(closure_0, tmp);
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
  const items = [MediaEngineStore];
  const f103998 = () => MediaEngineStore.isSelfMutedTemporarily();
  const f103999 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (MediaEngineStore.getMode() === constants.VOICE_ACTIVITY) {
        if (!isSelfMuteResult) {
          let str = "ptt_start";
          if (arg1) {
            str = "ptt_stop";
          }
          return str;
        }
      }
      isSelfMuteResult = MediaEngineStore.isSelfMute();
    }
  };
  const effect = f103999.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f104008[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f104008();
      const tmp2 = f104009(closure_0, tmp);
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
  const f104000 = () => currentUserPrioritySpeaker.isCurrentUserPrioritySpeaker();
  const f104001 = (arg0, arg1) => {
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
  const effect = f104001.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f104008[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f104008();
      const tmp2 = f104009(closure_0, tmp);
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
  const f104002 = () => VoiceStateStore.userHasBeenMovedVersion;
  const f104003 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      return "user_moved";
    }
  };
  const effect = f104003.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f104008[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f104008();
      const tmp2 = f104009(closure_0, tmp);
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
  const f104004 = () => {
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    if (null == voiceChannelId) {
      return items(f104004[22]).RequestToSpeakStates.NONE;
    } else {
      voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(voiceChannelId);
      return items(f104004[22]).getAudienceRequestToSpeakState(voiceStateForChannel);
    }
  };
  const f104005 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (arg1 === items(f104004[22]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
        return "reconnect";
      }
    }
  };
  const effect = f104005.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f104008[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f104008();
      const tmp2 = f104009(closure_0, tmp);
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
  let items = [SelectedChannelStore, ApplicationStreamingStore, AuthenticationStore, VoiceStateStore, ChannelStore];
  const f104006 = () => {
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    const currentUserId = id.getId();
    items = [];
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
      const encodeStreamKeyResult = items(f104006[23]).encodeStreamKey(first);
      const viewerIds = obj.getViewerIds(encodeStreamKeyResult);
      singleActiveStreamViewerCount = viewerIds.filter((item) => item !== currentUserId).length;
      singleActiveStreamKey = encodeStreamKeyResult;
      const obj2 = items(f104006[23]);
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
    };
  };
  const f104007 = (voiceChannelId, arg1) => {
    ({ channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds } = arg1);
    ({ singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId: f104007 } = arg1);
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
              if (voiceChannelId.singleActiveStreamViewerCount <= 25) {
                if (tmp6) {
                  let str3 = "stream_user_joined";
                }
                str2 = str3;
              }
              if (null != voiceChannelId.voiceChannelUserCount) {
                if (null != voiceChannelUserCount) {
                  if (voiceChannelId.voiceChannelUserCount <= 25) {
                    let str4 = "user_join";
                  }
                  str3 = str4;
                }
              }
              if (null != voiceChannelId.voiceChannelUserCount) {
                if (null != voiceChannelUserCount) {
                  if (voiceChannelId.voiceChannelUserCount <= 25) {
                    let str5 = "user_leave";
                  }
                  str4 = str5;
                }
              }
              let str6;
              if (voiceChannelId.singleActiveStreamViewerCount <= 25) {
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
  const effect = f104007.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f104008[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f104008();
      const tmp2 = f104009(closure_0, tmp);
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
    VibegrationsProjectStore,
  ];
  const f104008 = () => {
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    const channelId = SelectedChannelStore.getChannelId();
    let obj = connectedActivityLocation;
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    const embeddedActivityLocationChannelId = items(f104008[24]).getEmbeddedActivityLocationChannelId(
      connectedActivityLocation,
    );
    id = id.getId();
    const obj2 = items(f104008[24]);
    if (obj3.isNotNullish(channelId)) {
      let embeddedActivitiesForChannel = obj.getEmbeddedActivitiesForChannel(channelId);
    } else {
      embeddedActivitiesForChannel = NO_ACTIVITIES;
    }
    let tmp4Result = items(f104008[25]);
    if (tmp4Result.isNotNullish(voiceChannelId)) {
      let embeddedActivitiesForChannel1 = obj.getEmbeddedActivitiesForChannel(voiceChannelId);
    } else {
      embeddedActivitiesForChannel1 = NO_ACTIVITIES;
    }
    tmp4Result = items(f104008[25]);
    if (tmp4Result.isNotNullish(embeddedActivityLocationChannelId)) {
      let embeddedActivitiesForChannel2 = obj.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
    } else {
      embeddedActivitiesForChannel2 = NO_ACTIVITIES;
    }
    obj3 = items(f104008[25]);
    let selfEmbeddedActivityForLocation = null;
    if (tmp4Result1.isNotNullish(connectedActivityLocation)) {
      selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    }
    mainFrame = mainFrame.getMainFrame();
    let surface;
    if (mainFrame != null) {
      surface = mainFrame.surface;
    }
    const tmp13Result = closure_1_23(surface);
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
      result1 = items(f104008[26]).isVibegrationsChannelCandidate(channel.getChannel(tmp13Result), "ActivitySounds");
      const tmp4Result2 = items(f104008[26]);
    }
    if (!result1) {
      result1 = result;
    }
    obj = {
      connectedActivityLocation,
      voiceChannelId,
      currentUserId: id,
      channelActivities: embeddedActivitiesForChannel,
      connectedChannelActivities: embeddedActivitiesForChannel2,
      userConnectedActivity: selfEmbeddedActivityForLocation,
      voiceChannelActivities: embeddedActivitiesForChannel1,
      hasFrame: closure_1_24(mainFrame),
      inVibegrationsChannel: result1,
    };
    return obj;
  };
  const f104009 = (voiceChannelActivities, arg1) => {
    ({ connectedActivityLocation, currentUserId: items, userConnectedActivity } = arg1);
    ({
      voiceChannelActivities,
      hasFrame,
      voiceChannelId,
      channelActivities,
      connectedChannelActivities,
      inVibegrationsChannel,
    } = arg1);
    const someResult = voiceChannelActivities.some((applicationId) => {
      applicationId = undefined;
      if (userConnectedActivity != null) {
        applicationId = userConnectedActivity.applicationId;
      }
      return applicationId.applicationId === applicationId && applicationId.launchId === userConnectedActivity.launchId;
    });
    let str;
    if (obj.isNotNullish(voiceChannelId)) {
      const prop = voiceChannelActivities.voiceChannelActivities;
      const found = prop.find((userIds) => {
        userIds = userIds.userIds;
        return userIds.has(items);
      });
      const found1 = voiceChannelActivities.find((userIds) => {
        userIds = userIds.userIds;
        return userIds.has(items);
      });
      let isNotNullishResult = voiceChannelActivities.voiceChannelActivities.length < voiceChannelActivities.length;
      if (isNotNullishResult) {
        let tmp2Result = items(f104008[25]);
        isNotNullishResult = tmp2Result.isNotNullish(voiceChannelActivities.voiceChannelId);
      }
      let str2;
      if (isNotNullishResult) {
        str2 = "activity_launch";
      }
      let isNotNullishResult1 = undefined === found1;
      if (isNotNullishResult1) {
        tmp2Result = items(f104008[25]);
        isNotNullishResult1 = tmp2Result.isNotNullish(found);
      }
      if (isNotNullishResult1) {
        str2 = "activity_end";
      }
      let isNotNullishResult2 = undefined === found;
      if (isNotNullishResult2) {
        isNotNullishResult2 = items(f104008[25]).isNotNullish(found1);
        const tmp2Result1 = items(f104008[25]);
      }
      if (isNotNullishResult2) {
        isNotNullishResult2 = found1.userIds.size > 1;
      }
      if (isNotNullishResult2) {
        str2 = "activity_user_join";
      }
      let isNotNullishResult3 = items(f104008[25]).isNotNullish(found1);
      if (isNotNullishResult3) {
        isNotNullishResult3 = items(f104008[25]).isNotNullish(found);
        const tmp2Result3 = items(f104008[25]);
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
      const tmp2Result2 = items(f104008[25]);
    }
    let str3 = str;
    if (!someResult) {
      if (tmp10) {
        str = "activity_launch";
      }
      const userConnectedActivity2 = voiceChannelActivities.userConnectedActivity;
      let isNotNullishResult4 = null == userConnectedActivity;
      if (isNotNullishResult4) {
        isNotNullishResult4 = items(f104008[25]).isNotNullish(userConnectedActivity2);
        const tmp2Result4 = items(f104008[25]);
      }
      if (isNotNullishResult4) {
        str = "activity_end";
      }
      let isNotNullishResult5 = items(f104008[25]).isNotNullish(userConnectedActivity);
      if (isNotNullishResult5) {
        isNotNullishResult5 = items(f104008[25]).isNotNullish(userConnectedActivity2);
        const tmp2Result6 = items(f104008[25]);
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
        voiceChannelActivities.connectedChannelActivities.length < connectedChannelActivities.length &&
        voiceChannelActivities.channelActivities.length < channelActivities.length;
      const tmp2Result5 = items(f104008[25]);
    }
    let tmp14 = null != str3;
    if (!tmp14) {
      tmp14 = null == voiceChannelActivities.connectedActivityLocation && null == connectedActivityLocation;
      const tmp15 = null == voiceChannelActivities.connectedActivityLocation && null == connectedActivityLocation;
    }
    let str4 = str3;
    if (!tmp14) {
      if (null != voiceChannelActivities.connectedActivityLocation) {
        if (null == voiceChannelActivities.connectedActivityLocation) {
          let tmp17 = str3;
          if (tmp16) {
            let str7 = "activity_user_join";
            if (voiceChannelActivities.userConnectedActivity.userIds.size >= userConnectedActivity.userIds.size) {
              if (voiceChannelActivities.userConnectedActivity.userIds.size > userConnectedActivity.userIds.size) {
                str3 = "activity_user_leave";
              }
              str7 = str3;
            }
            tmp17 = str7;
          }
          let str6 = tmp17;
          tmp16 = null != userConnectedActivity && null != voiceChannelActivities.userConnectedActivity;
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
      tmp18 = voiceChannelActivities.hasFrame || hasFrame;
      const tmp19 = voiceChannelActivities.hasFrame || hasFrame;
    }
    let tmp20 = str4;
    if (tmp18) {
      if (!voiceChannelActivities.hasFrame) {
        if (hasFrame) {
          let str8 = "activity_launch";
        }
        tmp20 = str8;
      }
      const hasFrame2 = voiceChannelActivities.hasFrame;
      let inVibegrationsChannel2 = !hasFrame2;
      if (hasFrame2) {
        inVibegrationsChannel2 = hasFrame;
      }
      if (!inVibegrationsChannel2) {
        inVibegrationsChannel2 = voiceChannelActivities.inVibegrationsChannel;
      }
      if (!inVibegrationsChannel2) {
        str4 = "activity_end";
      }
      str8 = str4;
    }
    return tmp20;
  };
  const effect = f104009.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f104008[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f104008();
      const tmp2 = f104009(closure_0, tmp);
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
const NO_ACTIVITIES = fn(1956).NO_ACTIVITIES;
let closure_8 = fn(1961).SILENT_JOIN_LEAVE_CHANNEL_TYPES;
const Constants = fn(1074);
({ InputModes: closure_20, ApplicationStreamStates: closure_21, RTCConnectionStates: closure_22 } = Constants);
const FramesConstants = fn(9511);
({ getChannelIdForSurface: closure_23, isLaunched: closure_24 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_25, Fragment: closure_26, jsxs: closure_27 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundplayer/SoundPlayer.tsx");

export default function SoundPlayer() {
  const obj = { children: null };
  const items = [
    closure_1_25(MuteDeafen, {}),
    closure_1_25(Camera, {}),
    closure_1_25(RTCConnect, {}),
    closure_1_25(Speaking, {}),
    closure_1_25(SelfMutedTemporarily, {}),
    closure_1_25(UserHasBeenMoved, {}),
    closure_1_25(VoiceChannel, {}),
    closure_1_25(UserInvitedToSpeak, {}),
    closure_1_25(ActivitySounds, {}),
    closure_1_25(PriorityVAD, {}),
  ];
  obj.children = items;
  return __initData5(dependencyMap, obj);
}
