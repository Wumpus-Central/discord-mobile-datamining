// === Module 16237: MuteDeafen ===

// Module 16237 (MuteDeafen)
import closure_2 from "noop" /* 19 */;
import closure_3 from "participantFromServer" /* 1390 */;
import { NO_ACTIVITIES } from "participantFromServer" /* 1390 */;
import closure_5 from "map" /* 8745 */;
import closure_6 from "set" /* 4545 */;
import closure_7 from "isProjectOwner" /* 15912 */;
import { SILENT_JOIN_LEAVE_CHANNEL_TYPES as closure_8 } from "createChannelRecord" /* 1395 */;
import closure_9 from "reset" /* 4658 */;
import closure_10 from "fetchFingerprint" /* 1218 */;
import closure_11 from "ensureGuildLoaded" /* 1391 */;
import closure_12 from "createGuildRecordFromRust" /* 1910 */;
import closure_13 from "_detectH265HardwareDecode" /* 4501 */;
import closure_14 from "DesktopNotificationTypes" /* 10054 */;
import closure_15 from "createRTCConnection" /* 4544 */;
import closure_16 from "handleConnectionOpen" /* 1980 */;
import closure_17 from "anyoneHasFlagInContext" /* 4779 */;
import closure_18 from "updateVoiceState" /* 4547 */;
import closure_19 from "getVoiceStatesForGuild" /* 4550 */;
import ME from "ME" /* 676 */;
import FrameLayoutModes from "FrameLayoutModes" /* 8746 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
function MuteDeafen() {
  const items = [closure_13, closure_16];
  const f100270 = () => ({ inVoiceChannel: null != voiceChannelId.getVoiceChannelId(), selfMute: closure_13.isSelfMute(), selfDeaf: closure_13.isSelfDeaf(), audioPermissionReady: closure_13.isNativeAudioPermissionReady(), shouldSkipMuteUnmuteSound: closure_13.shouldSkipMuteUnmuteSound() });
  const f100271 = (selfDeaf) => {
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
            const result = closure_13.notifyMuteUnmuteSoundWasSkipped();
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
  const effect = f100271.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f100288[20]).BatchedStoreListener(closure_0, () => {
      const tmp = batchedStoreListener();
      const tmp2 = closure_1_2(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = closure_2_14.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        items(f100288[21]).playSound(tmp2, 0.4);
        const obj = items(f100288[21]);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function Camera() {
  const items = [closure_13, closure_16];
  const f100272 = () => ({ videoEnabled: videoEnabled.isVideoEnabled(), inVoiceChannel: null != voiceChannelId.getVoiceChannelId() });
  const f100273 = (videoEnabled, videoEnabled2) => {
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
  const effect = f100273.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f100288[20]).BatchedStoreListener(closure_0, () => {
      const tmp = batchedStoreListener();
      const tmp2 = closure_1_2(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = closure_2_14.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        items(f100288[21]).playSound(tmp2, 0.4);
        const obj = items(f100288[21]);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function RTCConnect() {
  const items = [closure_11, closure_15, closure_16, closure_6];
  const f100274 = () => {
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    let type;
    if (channel != null) {
      type = channel.type;
    }
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const wasEverRtcConnected = store2.getWasEverRtcConnected();
    const state = store2.getState();
    const obj = { channelType: type, guildId, connected: state === constants.RTC_CONNECTED, connectHasStarted: null, awaitingRemote: null, connectedRemote: null };
    let tmp6 = !wasEverRtcConnected;
    if (!wasEverRtcConnected) {
      tmp6 = state !== tmp5.DISCONNECTED;
    }
    if (!tmp6) {
      tmp6 = state === tmp5.RTC_CONNECTED;
    }
    obj[3] = tmp6;
    obj[4] = null != store.getAwaitingRemoteSessionInfo();
    obj[5] = null != store.getRemoteSessionId();
    return obj;
  };
  const f100275 = (channelType) => {
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
  const effect = f100275.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f100288[20]).BatchedStoreListener(closure_0, () => {
      const tmp = batchedStoreListener();
      const tmp2 = closure_1_2(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = closure_2_14.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        items(f100288[21]).playSound(tmp2, 0.4);
        const obj = items(f100288[21]);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function Speaking() {
  const items = [closure_17];
  const f100276 = () => currentUserPTTActive.isCurrentUserPTTActive();
  const f100277 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (closure_13.getMode() === constants.PUSH_TO_TALK) {
        if (!isSelfMuteResult) {
          let str = "ptt_stop";
          if (arg1) {
            str = "ptt_start";
          }
          return str;
        }
      }
      isSelfMuteResult = closure_13.isSelfMute();
    }
  };
  const effect = f100277.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f100288[20]).BatchedStoreListener(closure_0, () => {
      const tmp = batchedStoreListener();
      const tmp2 = closure_1_2(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = closure_2_14.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        items(f100288[21]).playSound(tmp2, 0.4);
        const obj = items(f100288[21]);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function SelfMutedTemporarily() {
  const items = [closure_13];
  const f100278 = () => closure_13.isSelfMutedTemporarily();
  const f100279 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (closure_13.getMode() === constants.VOICE_ACTIVITY) {
        if (!isSelfMuteResult) {
          let str = "ptt_start";
          if (arg1) {
            str = "ptt_stop";
          }
          return str;
        }
      }
      isSelfMuteResult = closure_13.isSelfMute();
    }
  };
  const effect = f100279.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f100288[20]).BatchedStoreListener(closure_0, () => {
      const tmp = batchedStoreListener();
      const tmp2 = closure_1_2(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = closure_2_14.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        items(f100288[21]).playSound(tmp2, 0.4);
        const obj = items(f100288[21]);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function PriorityVAD() {
  const items = [closure_17];
  const f100280 = () => currentUserPrioritySpeaker.isCurrentUserPrioritySpeaker();
  const f100281 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (closure_13.getMode() === constants.VOICE_ACTIVITY) {
        if (!isSelfMuteResult) {
          let str = "ptt_stop";
          if (arg1) {
            str = "ptt_start";
          }
          return str;
        }
      }
      isSelfMuteResult = closure_13.isSelfMute();
    }
  };
  const effect = f100281.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f100288[20]).BatchedStoreListener(closure_0, () => {
      const tmp = batchedStoreListener();
      const tmp2 = closure_1_2(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = closure_2_14.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        items(f100288[21]).playSound(tmp2, 0.4);
        const obj = items(f100288[21]);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function UserHasBeenMoved() {
  const items = [closure_18];
  const f100282 = () => obj.userHasBeenMovedVersion;
  const f100283 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      return "user_moved";
    }
  };
  const effect = f100283.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f100288[20]).BatchedStoreListener(closure_0, () => {
      const tmp = batchedStoreListener();
      const tmp2 = closure_1_2(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = closure_2_14.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        items(f100288[21]).playSound(tmp2, 0.4);
        const obj = items(f100288[21]);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function UserInvitedToSpeak() {
  const items = [closure_16, closure_18];
  const f100284 = () => {
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    if (null == voiceChannelId) {
      return items(f100284[22]).RequestToSpeakStates.NONE;
    } else {
      voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(voiceChannelId);
      return items(f100284[22]).getAudienceRequestToSpeakState(voiceStateForChannel);
    }
  };
  const f100285 = (arg0, arg1) => {
    if (arg0 !== arg1) {
      if (arg1 === items(f100284[22]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
        return "reconnect";
      }
    }
  };
  const effect = f100285.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f100288[20]).BatchedStoreListener(closure_0, () => {
      const tmp = batchedStoreListener();
      const tmp2 = closure_1_2(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = closure_2_14.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        items(f100288[21]).playSound(tmp2, 0.4);
        const obj = items(f100288[21]);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function VoiceChannel() {
  let items = [closure_16, closure_9, closure_10, closure_18, closure_11];
  const f100286 = () => {
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    const currentUserId = id.getId();
    items = [];
    allActiveStreams = allActiveStreams.getAllActiveStreams();
    let streamingUserIds = items;
    let voiceChannelUserCount;
    let channelType;
    if (null != voiceChannelId) {
      const channel = store.getChannel(voiceChannelId);
      streamingUserIds = items;
      if (null != channel) {
        const result = closure_19.countVoiceStatesForChannel(channel.id);
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
      const encodeStreamKeyResult = currentUserId(f100286[23]).encodeStreamKey(first);
      const viewerIds = obj.getViewerIds(encodeStreamKeyResult);
      singleActiveStreamViewerCount = viewerIds.filter((arg0) => arg0 !== currentUserId).length;
      singleActiveStreamKey = encodeStreamKeyResult;
      const obj2 = currentUserId(f100286[23]);
    }
    return { channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds, singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId, allActiveStreams };
  };
  const f100287 = (voiceChannelId) => {
    closure_0 = voiceChannelId;
    ({ channelType, voiceChannelId, voiceChannelUserCount, streamingUserIds } = arg1);
    ({ singleActiveStreamKey, singleActiveStreamViewerCount, currentUserId: f100287 } = arg1);
    closure_3 = undefined;
    if (voiceChannelId.voiceChannelId === voiceChannelId) {
      if (null != voiceChannelId) {
        const channel = store.getChannel(voiceChannelId);
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
          const allActiveStreams = voiceChannelId.allActiveStreams;
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
  const effect = f100287.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f100288[20]).BatchedStoreListener(closure_0, () => {
      const tmp = batchedStoreListener();
      const tmp2 = closure_1_2(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = closure_2_14.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        items(f100288[21]).playSound(tmp2, 0.4);
        const obj = items(f100288[21]);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
function ActivitySounds() {
  const items = [closure_16, closure_3, closure_5, closure_10, closure_11, closure_7];
  const f100288 = () => {
    const voiceChannelId = store.getVoiceChannelId();
    const channelId = store.getChannelId();
    let obj = connectedActivityLocation;
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    const embeddedActivityLocationChannelId = items(f100288[24]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    id = id.getId();
    const obj2 = items(f100288[24]);
    if (obj3.isNotNullish(channelId)) {
      let embeddedActivitiesForChannel = obj.getEmbeddedActivitiesForChannel(channelId);
    } else {
      embeddedActivitiesForChannel = closure_4;
    }
    let tmp4Result = tmp4(tmp5[25]);
    if (tmp4Result.isNotNullish(voiceChannelId)) {
      let embeddedActivitiesForChannel1 = obj.getEmbeddedActivitiesForChannel(voiceChannelId);
    } else {
      embeddedActivitiesForChannel1 = closure_4;
    }
    tmp4Result = tmp4(tmp5[25]);
    if (tmp4Result.isNotNullish(embeddedActivityLocationChannelId)) {
      let embeddedActivitiesForChannel2 = obj.getEmbeddedActivitiesForChannel(embeddedActivityLocationChannelId);
    } else {
      embeddedActivitiesForChannel2 = closure_4;
    }
    obj3 = items(f100288[25]);
    let selfEmbeddedActivityForLocation = null;
    if (tmp4Result1.isNotNullish(connectedActivityLocation)) {
      selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    }
    mainFrame = mainFrame.getMainFrame();
    let surface;
    if (mainFrame != null) {
      surface = mainFrame.surface;
    }
    const tmp13Result = closure_23(surface);
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
      result1 = tmp4(tmp5[26]).isVibegrationsChannelCandidate(channel.getChannel(tmp13Result), "ActivitySounds");
      const tmp4Result2 = tmp4(tmp5[26]);
    }
    if (!result1) {
      result1 = result;
    }
    obj = { connectedActivityLocation, voiceChannelId, currentUserId: id, channelActivities: embeddedActivitiesForChannel, connectedChannelActivities: embeddedActivitiesForChannel2, userConnectedActivity: selfEmbeddedActivityForLocation, voiceChannelActivities: embeddedActivitiesForChannel1, hasFrame: callback(mainFrame), inVibegrationsChannel: result1 };
    return obj;
  };
  const f100289 = (voiceChannelActivities) => {
    ({ connectedActivityLocation, currentUserId: items, userConnectedActivity } = arg1);
    ({ voiceChannelActivities, hasFrame, voiceChannelId, channelActivities, connectedChannelActivities, inVibegrationsChannel } = arg1);
    const someResult = voiceChannelActivities.some((applicationId) => {
      applicationId = undefined;
      if (userConnectedActivity != null) {
        applicationId = tmp.applicationId;
      }
      return applicationId.applicationId === applicationId && applicationId.launchId === userConnectedActivity.launchId;
    });
    let str;
    if (obj.isNotNullish(voiceChannelId)) {
      const prop = voiceChannelActivities.voiceChannelActivities;
      const found = prop.find((userIds) => {
        userIds = userIds.userIds;
        return userIds.has(closure_0);
      });
      const found1 = voiceChannelActivities.find((userIds) => {
        userIds = userIds.userIds;
        return userIds.has(closure_0);
      });
      let isNotNullishResult = voiceChannelActivities.voiceChannelActivities.length < voiceChannelActivities.length;
      if (isNotNullishResult) {
        let tmp2Result = tmp2(tmp3[25]);
        isNotNullishResult = tmp2Result.isNotNullish(voiceChannelActivities.voiceChannelId);
      }
      let str2;
      if (isNotNullishResult) {
        str2 = "activity_launch";
      }
      let isNotNullishResult1 = undefined === found1;
      if (isNotNullishResult1) {
        tmp2Result = tmp2(tmp3[25]);
        isNotNullishResult1 = tmp2Result.isNotNullish(found);
      }
      if (isNotNullishResult1) {
        str2 = "activity_end";
      }
      let isNotNullishResult2 = undefined === found;
      if (isNotNullishResult2) {
        isNotNullishResult2 = tmp2(tmp3[25]).isNotNullish(found1);
        const tmp2Result1 = tmp2(tmp3[25]);
      }
      if (isNotNullishResult2) {
        isNotNullishResult2 = found1.userIds.size > 1;
      }
      if (isNotNullishResult2) {
        str2 = "activity_user_join";
      }
      let isNotNullishResult3 = tmp2(tmp3[25]).isNotNullish(found1);
      if (isNotNullishResult3) {
        isNotNullishResult3 = tmp2(tmp3[25]).isNotNullish(found);
        const tmp2Result3 = tmp2(tmp3[25]);
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
      const tmp2Result2 = tmp2(tmp3[25]);
    }
    let str3 = str;
    if (!someResult) {
      if (tmp10) {
        str = "activity_launch";
      }
      const userConnectedActivity2 = voiceChannelActivities.userConnectedActivity;
      let isNotNullishResult4 = null == userConnectedActivity;
      if (isNotNullishResult4) {
        isNotNullishResult4 = tmp2(tmp3[25]).isNotNullish(userConnectedActivity2);
        const tmp2Result4 = tmp2(tmp3[25]);
      }
      if (isNotNullishResult4) {
        str = "activity_end";
      }
      let isNotNullishResult5 = tmp2(tmp3[25]).isNotNullish(userConnectedActivity);
      if (isNotNullishResult5) {
        isNotNullishResult5 = tmp2(tmp3[25]).isNotNullish(userConnectedActivity2);
        const tmp2Result6 = tmp2(tmp3[25]);
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
      tmp10 = voiceChannelActivities.connectedChannelActivities.length < connectedChannelActivities.length && voiceChannelActivities.channelActivities.length < channelActivities.length;
      const tmp2Result5 = tmp2(tmp3[25]);
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
  const effect = f100289.useEffect(() => {
    closure_0 = batchedStoreListener();
    batchedStoreListener = new items(f100288[20]).BatchedStoreListener(closure_0, () => {
      const tmp = batchedStoreListener();
      const tmp2 = closure_1_2(closure_0, tmp);
      let isSoundDisabledResult = null == tmp2;
      if (!isSoundDisabledResult) {
        isSoundDisabledResult = closure_2_14.isSoundDisabled(tmp2);
      }
      if (!isSoundDisabledResult) {
        items(f100288[21]).playSound(tmp2, 0.4);
        const obj = items(f100288[21]);
      }
      closure_0 = tmp;
    });
    batchedStoreListener.attach("useSound");
    return () => batchedStoreListener.detach();
  });
  return null;
}
({ InputModes: closure_20, ApplicationStreamStates: closure_21, RTCConnectionStates: closure_22 } = ME);
({ getChannelIdForSurface: closure_23, isLaunched: closure_24 } = FrameLayoutModes);
({ jsx: closure_25, Fragment: closure_26, jsxs: closure_27 } = jsxProd);
let result = require("set").fileFinishedImporting("modules/soundplayer/SoundPlayer.tsx");

export default function SoundPlayer() {
  const obj = { children: null };
  const items = [callback(MuteDeafen, {}), callback(Camera, {}), callback(RTCConnect, {}), callback(Speaking, {}), callback(SelfMutedTemporarily, {}), callback(UserHasBeenMoved, {}), callback(VoiceChannel, {}), callback(UserInvitedToSpeak, {}), callback(ActivitySounds, {}), callback(PriorityVAD, {})];
  obj[0] = items;
  return callback2(closure_26, obj);
};