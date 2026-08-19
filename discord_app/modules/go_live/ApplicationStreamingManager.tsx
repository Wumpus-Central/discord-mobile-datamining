// === Module 17075: updateRegion ===

// Module 17075 (updateRegion)
import setDefault from "set" /* 687 */;
import mergeGuildAvatarDefault from "mergeGuildAvatar" /* 1922 */;
import initializeDefault from "initialize" /* 5038 */;
import watchStream from "watchStream" /* 9860 */;
import closure_3 from "reset" /* 4652 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "handleInviteData" /* 4295 */;
import closure_7 from "initialize" /* 4565 */;
import closure_8 from "handleConnectionOpen" /* 1979 */;
import closure_9 from "initialize" /* 4558 */;
import StreamIssueReportReasons from "StreamIssueReportReasons" /* 4532 */;
import ME from "ME" /* 676 */;
import apply from "apply" /* 12 */;
import set from "set" /* 2 */;

require = arg1;
function updateRegion(encodeStreamKeyResult, preferredRegion) {
  if (preferredRegion == null) {
    preferredRegion = store.getPreferredRegion();
  }
  let tmp3 = null != preferredRegion;
  if (tmp3) {
    tmp3 = preferredRegion !== store.getRegion(hostname.getHostname(encodeStreamKeyResult));
  }
  if (tmp3) {
    watchStream.changeStreamRegion(encodeStreamKeyResult, preferredRegion);
    const obj = watchStream;
  }
}
mergeGuildAvatarDefault;
({ GO_LIVE_NOTIFY_FRIENDS_MIN_MEMBER_COUNT, STREAM_NOTIFY_GUILD_MAX_SIZE } = StreamIssueReportReasons);
({ ApplicationStreamDeleteReasons: c10, ApplicationStreamStates: unpackModuleId } = ME);
apply.debounce(require("watchStream").notifyStreamStart, 1000);
let closure_12 = {};
let closure_13 = {};
let closure_14 = 3 * setDefault.Millis.MINUTE;
let closure_15 = 5 * setDefault.Millis.SECOND;
let closure_16 = 12 * setDefault.Millis.SECOND;
let c17 = null;
let set = new Set();
initializeDefault;
const prototype = function BaseApplicationStreamingManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.handleStreamWatch = function handleStreamWatch(streamKey) {
    streamKey = streamKey.streamKey;
    const channel = store.getChannel(streamKey(4531).decodeStreamKey(streamKey).channelId);
    if (channel != null) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    const allActiveStreamKeys = store3.getAllActiveStreamKeys();
    if (allActiveStreamKeys.includes(streamKey)) {
      if (dependencyMap2[streamKey] != null) {
        obj5.stop();
      }
      delete tmp[tmp2];
      if (!streamKey.allowMultiple) {
        const allActiveStreams = authStore.getAllActiveStreams();
        const item = allActiveStreams.forEach((ownerId) => {
          const encodeStreamKeyResult = streamKey(closure_1_2[13]).encodeStreamKey(ownerId);
          let tmp4 = ownerId.ownerId !== closure_1_4.getId();
          if (tmp4) {
            tmp4 = encodeStreamKeyResult !== streamKey;
          }
          if (tmp4) {
            streamKey(closure_1_2[11]).stopStream(encodeStreamKeyResult, false);
            const tmpResult = streamKey(closure_1_2[11]);
          }
        });
      }
    } else {
      let timeout = dependencyMap3[streamKey];
      if (timeout == null) {
        timeout = new streamKey(4259).Timeout();
      }
      dependencyMap3[streamKey] = timeout;
      timeout.start(isGuildStageVoiceResult ? closure_16 : closure_15, () => {
        let obj = closure_1_1(closure_1_2[15]);
        obj = { type: "STREAM_TIMED_OUT", streamKey: closure_0 };
        obj.dispatch(obj);
      });
      const tmp6 = dependencyMap3;
    }
  };
  applyArgumentsResult.handleStreamStart = function handleStreamStart(channelId) {
    channelId = channelId.channelId;
    ({ streamType, guildId } = channelId);
    const channel = closure_1_5.getChannel(channelId);
    const obj2 = applyArgumentsResult(closure_1_2[13]);
    const tmp = applyArgumentsResult;
    const tmp2 = closure_1_2;
    const encodeStreamKeyResult = obj2.encodeStreamKey({ streamType, guildId, channelId, ownerId: closure_1_4.getId() });
    if (channel != null) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    const allActiveStreamKeys = closure_1_9.getAllActiveStreamKeys();
    if (allActiveStreamKeys.includes(encodeStreamKeyResult)) {
      const result = applyArgumentsResult.platformHandleStreamStart(channelId);
    } else {
      let timeout = closure_1_13[encodeStreamKeyResult];
      if (timeout == null) {
        timeout = new tmp(tmp2[14]).Timeout();
      }
      closure_1_13[encodeStreamKeyResult] = timeout;
      timeout.start(isGuildStageVoiceResult ? closure_1_16 : closure_1_15, () => {
        let obj = closure_1_1(closure_1_2[15]);
        obj = { type: "STREAM_TIMED_OUT", streamKey: closure_0 };
        obj.dispatch(obj);
      });
      const tmp5 = closure_1_13;
    }
  };
  applyArgumentsResult.handleStreamCreate = function handleStreamCreate(streamKey) {
    streamKey = streamKey.streamKey;
    if (dependencyMap3[streamKey] != null) {
      obj.stop();
    }
    delete tmp[tmp2];
    const item = closure_18.forEach((encodeStreamKeyResult) => {
      if (!streamMarkedFull.isStreamMarkedFull(encodeStreamKeyResult)) {
        set.delete(encodeStreamKeyResult);
      }
    });
    const obj2 = applyArgumentsResult(4531);
    memberCount = memberCount.getMemberCount(applyArgumentsResult(4531).decodeStreamKey(streamKey).guildId);
  };
  applyArgumentsResult.handleStreamUpdate = function handleStreamUpdate(arg0) {
    if (dependencyMap3[arg0.streamKey] != null) {
      obj.stop();
    }
    delete tmp[tmp2];
    const item = closure_18.forEach((encodeStreamKeyResult) => {
      if (!streamMarkedFull.isStreamMarkedFull(encodeStreamKeyResult)) {
        set.delete(encodeStreamKeyResult);
      }
    });
  };
  applyArgumentsResult.handleStreamDelete = function handleStreamDelete(streamKey) {
    streamKey = streamKey.streamKey;
    let obj = closure_1_13[streamKey];
    if (obj != null) {
      obj.stop();
    }
    delete tmp[tmp2];
    if (streamKey.reason === closure_1_10.STREAM_FULL) {
      obj = { type: null };
      obj[0] = applyArgumentsResult(closure_1_2[17]).AVError.STREAM_FULL;
      const obj2 = applyArgumentsResult(closure_1_2[17]);
      const merged = Object.assign(applyArgumentsResult(closure_1_2[18]).getStreamErrorContext(streamKey));
      obj2.reportAVError(obj);
      if (!closure_1_18.has(streamKey)) {
        obj5.add(streamKey);
        const result = applyArgumentsResult.platformShowStreamFull();
      }
      const obj4 = applyArgumentsResult(closure_1_2[18]);
      obj5 = closure_1_18;
    }
  };
  applyArgumentsResult.handleStreamClose = function handleStreamClose(streamKey) {
    streamKey = streamKey.streamKey;
    if (dependencyMap2[streamKey] != null) {
      obj.stop();
    }
    delete tmp3[tmp2];
    if (dependencyMap3[streamKey] != null) {
      obj2.stop();
    }
    delete tmp[tmp2];
  };
  applyArgumentsResult.handleVoiceChannelSelect = function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      c17 = null;
      const item = closure_18.forEach((encodeStreamKeyResult) => {
        if (!streamMarkedFull.isStreamMarkedFull(encodeStreamKeyResult)) {
          set.delete(encodeStreamKeyResult);
        }
      });
      const allApplicationStreamsForChannel = authStore.getAllApplicationStreamsForChannel(channelId);
      const found = allApplicationStreamsForChannel.find((ownerId) => {
        let tmp = ownerId.ownerId !== id.getId();
        if (tmp) {
          tmp = !streamMarkedFull.isStreamMarkedFull(callback(table[13]).encodeStreamKey(ownerId));
          const obj = callback(table[13]);
        }
        return tmp;
      });
      if (null != found) {
        const ownerId = found.ownerId;
        if (voiceChannelId.getVoiceChannelId() === channelId) {
          const channel = store.getChannel(channelId);
          if (null != channel) {
            if (channel.isDM()) {
              if (null == obj3.getActiveStreamForUser(ownerId, channel.getGuildId())) {
                const streamForUser = obj3.getStreamForUser(ownerId, channel.getGuildId());
                if (null != streamForUser) {
                  const encodeStreamKeyResult = applyArgumentsResult(4531).encodeStreamKey(streamForUser);
                  if (encodeStreamKeyResult !== c17) {
                    const isStreamMarkedFullResult = obj3.isStreamMarkedFull(encodeStreamKeyResult);
                    if (!isStreamMarkedFullResult) {
                      c17 = encodeStreamKeyResult;
                      tmp2(9860).watchStream(streamForUser, { noFocus: true });
                      const tmp2Result = tmp2(9860);
                    }
                  }
                  let obj = applyArgumentsResult(4531);
                  tmp2 = applyArgumentsResult;
                }
              }
            }
          }
        }
      }
    }
  };
  applyArgumentsResult.handleVoiceStateUpdates = function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    let item = voiceStates.forEach((arg0) => {
      ({ userId, channelId, guildId, selfStream } = arg0);
      const result = encodeStreamKeyResult1.platformHandleVoiceStateUpdate(arg0);
      if (userId !== closure_1_4.getId()) {
        let tmp5 = !selfStream;
        if (selfStream) {
          tmp5 = null == channelId;
        }
        if (tmp5) {
          tmp5 = closure_1_18.size > 0;
        }
        if (tmp5) {
          const item = closure_1_18.forEach((encodeStreamKeyResult) => {
            if (!streamMarkedFull.isStreamMarkedFull(encodeStreamKeyResult)) {
              set.delete(encodeStreamKeyResult);
            }
          });
        }
        if (null != channelId) {
          if (selfStream) {
            let flag = false;
            if (closure_1_8.getVoiceChannelId() === channelId) {
              const channel = closure_1_5.getChannel(channelId);
              flag = false;
              if (null != channel) {
                if (channel.isDM()) {
                  flag = false;
                  if (null == closure_1_3.getActiveStreamForUser(userId, channel.getGuildId())) {
                    const streamForUser = obj.getStreamForUser(userId, channel.getGuildId());
                    flag = false;
                    if (null != streamForUser) {
                      encodeStreamKeyResult = closure_1_0(closure_1_2[13]).encodeStreamKey(streamForUser);
                      let tmp16 = encodeStreamKeyResult !== encodeStreamKeyResult;
                      if (tmp16) {
                        const isStreamMarkedFullResult = obj.isStreamMarkedFull(encodeStreamKeyResult);
                        let flag2 = !isStreamMarkedFullResult;
                        if (!isStreamMarkedFullResult) {
                          tmp12(tmp13[11]).watchStream(streamForUser, { noFocus: true });
                          flag2 = true;
                          const tmp12Result = tmp12(tmp13[11]);
                        }
                        tmp16 = flag2;
                      }
                      flag = tmp16;
                      const obj2 = closure_1_0(closure_1_2[13]);
                      tmp12 = closure_1_0;
                      tmp13 = closure_1_2;
                    }
                  }
                } else {
                  flag = false;
                }
              }
            }
          }
          const activeStreamForUser = closure_1_3.getActiveStreamForUser(userId, guildId);
          if (null != activeStreamForUser) {
            if (activeStreamForUser.channelId === channelId) {
              if (!selfStream) {
                if (activeStreamForUser.state !== closure_1_11.ENDED) {
                  encodeStreamKeyResult1 = closure_1_0(closure_1_2[13]).encodeStreamKey(activeStreamForUser);
                  let timeout = closure_1_12[encodeStreamKeyResult1];
                  if (timeout == null) {
                    timeout = new tmp21(tmp22[14]).Timeout();
                  }
                  timeout.start(closure_1_14, () => encodeStreamKeyResult1(closure_1_2[11]).closeStream(encodeStreamKeyResult1, false));
                  closure_1_12[encodeStreamKeyResult1] = timeout;
                  const obj5 = closure_1_0(closure_1_2[13]);
                  tmp21 = closure_1_0;
                  tmp22 = closure_1_2;
                  const tmp24 = closure_1_12;
                }
              }
              if (selfStream) {
                if (activeStreamForUser.state === closure_1_11.ENDED) {
                  const obj10 = closure_1_0(closure_1_2[13]);
                  const obj11 = closure_1_12[obj10.encodeStreamKey(obj10, activeStreamForUser)];
                  if (obj11 != null) {
                    obj11.stop();
                  }
                  delete tmp[tmp2];
                  const streamForUser1 = obj4.getStreamForUser(userId, guildId);
                  if (null != streamForUser1) {
                    let tmp34Result = tmp34(tmp35[13]);
                    if (!obj4.isStreamMarkedFull(tmp34Result.encodeStreamKey(streamForUser1))) {
                      tmp34Result = tmp34(tmp35[11]);
                      tmp34Result.watchStream(streamForUser1);
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  };
  applyArgumentsResult.handleCallUpdate = function handleCallUpdate(region) {
    region = region.region;
    const currentUserActiveStream = authStore.getCurrentUserActiveStream();
    let channelId;
    if (currentUserActiveStream != null) {
      channelId = currentUserActiveStream.channelId;
    }
    if (channelId === region.channelId) {
      const encodeStreamKeyResult = applyArgumentsResult(4531).encodeStreamKey(currentUserActiveStream);
      if (region == null) {
        region = store2.getPreferredRegion();
      }
      let tmp7 = null != region;
      if (tmp7) {
        tmp7 = region !== store2.getRegion(store3.getHostname(encodeStreamKeyResult));
      }
      if (tmp7) {
        tmp3(9860).changeStreamRegion(encodeStreamKeyResult, region);
        const tmp3Result = tmp3(9860);
      }
      const obj = applyArgumentsResult(4531);
      tmp3 = applyArgumentsResult;
    }
  };
  applyArgumentsResult.handleChannelUpdates = function handleChannelUpdates(channels) {
    channels = channels.channels;
    const currentUserActiveStream = authStore.getCurrentUserActiveStream();
    if (null != currentUserActiveStream) {
      const iter = channels[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (currentUserActiveStream.channelId === nextResult.id) {
          let tmp7 = callback;
          let tmp8 = applyArgumentsResult;
          let tmp9 = dependencyMap;
          let obj = applyArgumentsResult(4531);
          let tmp10 = nextResult;
          let tmp11 = callback(obj.encodeStreamKey(currentUserActiveStream), tmp6.rtcRegion);
        }
        continue;
      }
    }
  };
  applyArgumentsResult.handleSessionReset = function handleSessionReset() {
    closure_18.clear();
  };
  applyArgumentsResult.actions = { STREAM_WATCH: applyArgumentsResult.handleStreamWatch, STREAM_START: applyArgumentsResult.handleStreamStart, STREAM_CREATE: applyArgumentsResult.handleStreamCreate, STREAM_UPDATE: applyArgumentsResult.handleStreamUpdate, STREAM_DELETE: applyArgumentsResult.handleStreamDelete, STREAM_CLOSE: applyArgumentsResult.handleStreamClose, CALL_UPDATE: applyArgumentsResult.handleCallUpdate, CHANNEL_UPDATES: applyArgumentsResult.handleChannelUpdates, VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect, VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates, CONNECTION_CLOSED: applyArgumentsResult.handleSessionReset, LOGOUT: applyArgumentsResult.handleSessionReset };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp7 {
}
let result = set.fileFinishedImporting("modules/go_live/ApplicationStreamingManager.tsx");

export default prototype;