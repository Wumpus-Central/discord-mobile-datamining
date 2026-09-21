// === Module 17392: SoundPlayer ===

// Module 17392 (SoundPlayer)
import SoundUtils from "SoundUtils" /* 10158 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;
import FramesStore from "FramesStore" /* 9313 */;
import GameConsoleStore from "GameConsoleStore" /* 4773 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 9309 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4778 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildStore from "GuildStore" /* 2063 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 10338 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4779 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;
import SpeakingStore from "SpeakingStore" /* 5636 */;
import VoiceStateStore from "VoiceStateStore" /* 4775 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4780 */;

require = fn;
function MuteDeafen() {
  const items = [MediaEngineStore, SelectedChannelStore];
  const f106343 = () => ({ inVoiceChannel: null != voiceChannelId.getVoiceChannelId(), selfMute: MediaEngineStore.isSelfMute(), selfDeaf: MediaEngineStore.isSelfDeaf(), audioPermissionReady: MediaEngineStore.isNativeAudioPermissionReady(), shouldSkipMuteUnmuteSound: MediaEngineStore.shouldSkipMuteUnmuteSound() });
  const f106344 = (selfDeaf, arg1) => {
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
  const effect = f106344.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106361[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106361();
      const tmp2 = f106362(closure_0, tmp);
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
  const f106345 = () => ({ videoEnabled: videoEnabled.isVideoEnabled(), inVoiceChannel: null != voiceChannelId.getVoiceChannelId() });
  const f106346 = (videoEnabled, videoEnabled2) => {
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
  const effect = f106346.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106361[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106361();
      const tmp2 = f106362(closure_0, tmp);
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
  const f106347 = () => {
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
  const f106348 = (channelType, arg1) => {
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
  const effect = f106348.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106361[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106361();
      const tmp2 = f106362(closure_0, tmp);
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
  const f106349 = () => currentUserPTTActive.isCurrentUserPTTActive();
  const f106350 = (arg0, arg1) => {
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
  const effect = f106350.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106361[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106361();
      const tmp2 = f106362(closure_0, tmp);
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
  const f106351 = () => MediaEngineStore.isSelfMutedTemporarily();
  const f106352 = (arg0, arg1) => {
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
  const effect = f106352.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106361[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106361();
      const tmp2 = f106362(closure_0, tmp);
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
  const f106353 = () => currentUserPrioritySpeaker.isCurrentUserPrioritySpeaker();
  const f106354 = (arg0, arg1) => {
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
  const effect = f106354.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106361[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106361();
      const tmp2 = f106362(closure_0, tmp);
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
  const f106355 = () => VoiceStateStore.userHasBeenMovedVersion;
  const f106356 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      return "user_moved";
    }
  };
  const effect = f106356.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106361[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106361();
      const tmp2 = f106362(closure_0, tmp);
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
  const f106357 = () => {
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    if (null == voiceChannelId) {
      return items(f106357[22]).RequestToSpeakStates.NONE;
    } else {
      voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(voiceChannelId);
      return items(f106357[22]).getAudienceRequestToSpeakState(voiceStateForChannel);
    }
  };
  const f106358 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (arg1 === items(f106357[22]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
        return "reconnect";
      }
    }
  };
  const effect = f106358.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106361[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106361();
      const tmp2 = f106362(closure_0, tmp);
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
  const f106359 = () => {
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
      const encodeStreamKeyResult = items(f106359[23]).encodeStreamKey(first);
      const viewerIds = obj.getViewerIds(encodeStreamKeyResult);
      singleActiveStreamViewerCount = viewerIds.filter((item) => item !== currentUserId).length;
      singleActiveStreamKey = encodeStreamKeyResult;
      const obj2 = items(f106359[23]);
    }
    return { channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds, singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId, allActiveStreams };
  };
  const f106360 = (voiceChannelId, arg1) => {
    ({ channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds } = arg1);
    ({ singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId: f106360 } = arg1);
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
  const effect = f106360.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106361[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106361();
      const tmp2 = f106362(closure_0, tmp);
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
  const items = [SelectedChannelStore, EmbeddedActivitiesStore, FramesStore, AuthenticationStore, ChannelStore, VibegrationsProjectStore];
  const f106361 = () => {
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    const channelId = SelectedChannelStore.getChannelId();
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    const embeddedActivityLocationChannelId = items(f106361[24]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    id = id.getId();
    const obj2 = items(f106361[24]);
    if (obj3.isNotNullish(channelId)) {
      let embeddedActivitiesForChannel = obj.getEmbeddedActivitiesForChannel(channelId);
    } else {
      embeddedActivitiesForChannel = NO_ACTIVITIES;
    }
    obj3 = items(f106361[25]);
    if (tmp4Result.isNotNullish(voiceChannelId)) {
      let embeddedActivitiesForChannel1 = obj.getEmbeddedActivitiesForChannel(voiceChannelId);
    } else {
      embeddedActivitiesForChannel1 = NO_ACTIVITIES;
    }
    tmp4Result = items(f106361[25]);
    if (tmp4Result4.isNotNullish(embeddedActivityLocationChannelId)) {
      let embeddedActivitiesForChannel2 = obj.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
    } else {
      embeddedActivitiesForChannel2 = NO_ACTIVITIES;
    }
    tmp4Result4 = items(f106361[25]);
    let selfEmbeddedActivityForLocation = null;
    if (tmp4Result5.isNotNullish(connectedActivityLocation)) {
      selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    }
    mainFrame = mainFrame.getMainFrame();
    let surface;
    if (mainFrame != null) {
      surface = mainFrame.surface;
    }
    const tmp13Result = closure_1_24(surface);
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
      result1 = items(f106361[26]).isVibegrationsChannelCandidate(ChannelStore.getChannel(tmp13Result), "ActivitySounds");
      const tmp4Result6 = items(f106361[26]);
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
    tmp4Result5 = items(f106361[25]);
    return { connectedActivityLocation, voiceChannelId, currentUserId: id, channelActivities: embeddedActivitiesForChannel, connectedChannelActivities: embeddedActivitiesForChannel2, userConnectedActivity: selfEmbeddedActivityForLocation, voiceChannelActivities: embeddedActivitiesForChannel1, hasFrame: closure_1_25(mainFrame), inVibegrationsChannel: result1, isGuildSpaceActivity: tmp21 };
  };
  const f106362 = (isGuildSpaceActivity, arg1) => {
    ({ connectedActivityLocation, currentUserId: items, userConnectedActivity } = arg1);
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
        return userIds.has(items);
      });
      const found1 = voiceChannelActivities.find((userIds) => {
        userIds = userIds.userIds;
        return userIds.has(items);
      });
      let isNotNullishResult = isGuildSpaceActivity.voiceChannelActivities.length < voiceChannelActivities.length;
      if (isNotNullishResult) {
        isNotNullishResult = items(f106361[25]).isNotNullish(isGuildSpaceActivity.voiceChannelId);
        const tmp2Result = items(f106361[25]);
      }
      let str2;
      if (isNotNullishResult) {
        str2 = "activity_launch";
      }
      let isNotNullishResult1 = undefined === found1;
      if (isNotNullishResult1) {
        isNotNullishResult1 = items(f106361[25]).isNotNullish(found);
        const tmp2Result8 = items(f106361[25]);
      }
      if (isNotNullishResult1) {
        str2 = "activity_end";
      }
      let isNotNullishResult2 = undefined === found;
      if (isNotNullishResult2) {
        isNotNullishResult2 = items(f106361[25]).isNotNullish(found1);
        const tmp2Result9 = items(f106361[25]);
      }
      if (isNotNullishResult2) {
        isNotNullishResult2 = found1.userIds.size > 1;
      }
      if (isNotNullishResult2) {
        str2 = "activity_user_join";
      }
      let isNotNullishResult3 = items(f106361[25]).isNotNullish(found1);
      if (isNotNullishResult3) {
        isNotNullishResult3 = items(f106361[25]).isNotNullish(found);
        const tmp2Result11 = items(f106361[25]);
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
      const tmp2Result10 = items(f106361[25]);
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
          isNotNullishResult4 = items(f106361[25]).isNotNullish(userConnectedActivity2);
          const tmp2Result12 = items(f106361[25]);
        }
        if (isNotNullishResult4) {
          str = "activity_end";
        }
        let isNotNullishResult5 = items(f106361[25]).isNotNullish(userConnectedActivity);
        if (isNotNullishResult5) {
          isNotNullishResult5 = items(f106361[25]).isNotNullish(userConnectedActivity2);
          const tmp2Result14 = items(f106361[25]);
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
        const tmp2Result13 = items(f106361[25]);
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
  const effect = f106362.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f106361[20]).BatchedStoreListener(closure_0, () => {
      const tmp = f106361();
      const tmp2 = f106362(closure_0, tmp);
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
const NO_ACTIVITIES = fn(2040).NO_ACTIVITIES;
let closure_8 = fn(2045).SILENT_JOIN_LEAVE_CHANNEL_TYPES;
const Constants = fn(1074);
({ InputModes: closure_20, ApplicationStreamStates: closure_21, ChannelTypes: closure_22, RTCConnectionStates: closure_23 } = Constants);
const FramesConstants = fn(9314);
({ getChannelIdForSurface: closure_24, isLaunched: closure_25 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_26, Fragment: closure_27, jsxs: closure_28 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundplayer/SoundPlayer.tsx");

export default function SoundPlayer() {
  const obj = { children: null };
  const items = [dependencyMap(MuteDeafen, {}), dependencyMap(Camera, {}), dependencyMap(RTCConnect, {}), dependencyMap(Speaking, {}), dependencyMap(SelfMutedTemporarily, {}), dependencyMap(UserHasBeenMoved, {}), dependencyMap(VoiceChannel, {}), dependencyMap(UserInvitedToSpeak, {}), dependencyMap(ActivitySounds, {}), dependencyMap(PriorityVAD, {})];
  obj.children = items;
  return __initData6(__initData5, obj);
};