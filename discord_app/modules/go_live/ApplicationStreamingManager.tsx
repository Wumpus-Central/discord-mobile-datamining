// === Module 17854: go_live/ApplicationStreamingManager ===

// Module 17854 (go_live/ApplicationStreamingManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import Timers from "Timers" /* 4447 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import StreamActionCreators from "StreamActionCreators" /* 4702 */;
import AVError from "AVError" /* 9110 */;
import AVErrorContext from "AVErrorContext" /* 17834 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4480 */;
import RTCRegionStore from "RTCRegionStore" /* 4610 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4599 */;
import UserStore from "UserStore" /* 1371 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
function updateRegion(encodeStreamKeyResult, preferredRegion) {
  if (preferredRegion == null) {
    preferredRegion = RTCRegionStore.getPreferredRegion();
  }
  let tmp3 = null != preferredRegion;
  if (tmp3) {
    tmp3 = preferredRegion !== RTCRegionStore.getRegion(StreamRTCConnectionStore.getHostname(encodeStreamKeyResult));
  }
  if (tmp3) {
    StreamActionCreators.changeStreamRegion(encodeStreamKeyResult, preferredRegion);
  }
}
let Constants = fn(4602);
({ GO_LIVE_NOTIFY_FRIENDS_MIN_MEMBER_COUNT, STREAM_NOTIFY_GUILD_MAX_SIZE } = Constants);
Constants = fn(1074);
({ ApplicationStreamDeleteReasons: c10, ApplicationStreamStates: closure_11 } = Constants);
const apply = fn(12);
apply.debounce(fn(4702).notifyStreamStart, 1000);
let closure_12 = {};
let closure_13 = {};
let closure_14 = 3 * DurationsDefault.Millis.MINUTE;
let closure_15 = 5 * DurationsDefault.Millis.SECOND;
let closure_16 = 12 * DurationsDefault.Millis.SECOND;
let c17 = null;
const set = new Set();
const prototype = function BaseApplicationStreamingManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.handleStreamWatch = function handleStreamWatch(streamKey) {
    streamKey = streamKey.streamKey;
    channel = channel.getChannel(streamKey(4612).decodeStreamKey(streamKey).channelId);
    if (channel != null) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    closure_129_0 = streamKey;
    allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
    if (allActiveStreamKeys.includes(streamKey)) {
      if (dependencyMap2[streamKey] != null) {
        obj5.stop();
      }
      delete tmp[tmp2];
      if (!streamKey.allowMultiple) {
        const allActiveStreams = authStore.getAllActiveStreams();
        const item = allActiveStreams.forEach((ownerId) => {
          const encodeStreamKeyResult = applyArgumentsResult(4612).encodeStreamKey(ownerId);
          let tmp4 = ownerId.ownerId !== AuthenticationStore.getId();
          if (tmp4) {
            tmp4 = encodeStreamKeyResult !== streamKey;
          }
          if (tmp4) {
            applyArgumentsResult(4702).stopStream(encodeStreamKeyResult, false);
            const tmpResult = applyArgumentsResult(4702);
          }
          const obj = applyArgumentsResult(4612);
        });
      }
    } else {
      let timeout = dependencyMap3[streamKey];
      if (timeout == null) {
        timeout = new tmp3(4447).Timeout();
      }
      dependencyMap3[streamKey] = timeout;
      timeout.start(isGuildStageVoiceResult ? closure_16 : closure_15, () => {
        const obj = { type: "STREAM_TIMED_OUT", streamKey: encodeStreamKeyResult };
        obj.dispatch(obj);
      });
    }
    let obj = streamKey(4612);
    tmp3 = streamKey;
  };
  applyArgumentsResult.handleStreamStart = function handleStreamStart(channelId) {
    channelId = channelId.channelId;
    ({ streamType, guildId } = channelId);
    channel = ChannelStore.getChannel(channelId);
    const obj2 = StreamKeyUtils;
    const encodeStreamKeyResult = obj2.encodeStreamKey({ streamType, guildId, channelId, ownerId: AuthenticationStore.getId() });
    if (channel != null) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    closure_0 = encodeStreamKeyResult;
    allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
    if (allActiveStreamKeys.includes(encodeStreamKeyResult)) {
      const result = applyArgumentsResult.platformHandleStreamStart(channelId);
    } else {
      let timeout = dependencyMap3[encodeStreamKeyResult];
      if (timeout == null) {
        timeout = new Timers.Timeout();
      }
      dependencyMap3[encodeStreamKeyResult] = timeout;
      timeout.start(isGuildStageVoiceResult ? closure_16 : closure_15, () => {
        const obj = { type: "STREAM_TIMED_OUT", streamKey: encodeStreamKeyResult };
        obj.dispatch(obj);
      });
    }
    let obj = { streamType, guildId, channelId, ownerId: AuthenticationStore.getId() };
  };
  applyArgumentsResult.handleStreamCreate = function handleStreamCreate(streamKey) {
    streamKey = streamKey.streamKey;
    if (dependencyMap3[streamKey] != null) {
      obj.stop();
    }
    delete tmp[tmp2];
    const item = set.forEach((item) => {
      if (!streamMarkedFull.isStreamMarkedFull(item)) {
        set.delete(item);
      }
    });
    const obj2 = applyArgumentsResult(4612);
    memberCount = memberCount.getMemberCount(applyArgumentsResult(4612).decodeStreamKey(streamKey).guildId);
  };
  applyArgumentsResult.handleStreamUpdate = function handleStreamUpdate(arg0) {
    if (dependencyMap3[arg0.streamKey] != null) {
      obj.stop();
    }
    delete tmp[tmp2];
    const item = set.forEach((item) => {
      if (!streamMarkedFull.isStreamMarkedFull(item)) {
        set.delete(item);
      }
    });
  };
  applyArgumentsResult.handleStreamDelete = function handleStreamDelete(streamKey) {
    streamKey = streamKey.streamKey;
    let obj = dependencyMap3[streamKey];
    if (obj != null) {
      obj.stop();
    }
    delete tmp[tmp2];
    if (streamKey.reason === constants.STREAM_FULL) {
      obj = { type: AVError.AVError.STREAM_FULL };
      const obj2 = AVError;
      const merged = Object.assign(AVErrorContext.getStreamErrorContext(streamKey));
      obj2.reportAVError(obj);
      if (!set.has(streamKey)) {
        set.add(streamKey);
        const result = applyArgumentsResult.platformShowStreamFull();
      }
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
      const item = set.forEach((item) => {
        if (!streamMarkedFull.isStreamMarkedFull(item)) {
          set.delete(item);
        }
      });
      const allApplicationStreamsForChannel = authStore.getAllApplicationStreamsForChannel(channelId);
      const found = allApplicationStreamsForChannel.find((ownerId) => {
        let tmp = ownerId.ownerId !== id.getId();
        if (tmp) {
          tmp = !streamMarkedFull.isStreamMarkedFull(closure_1_0(dependencyMap[13]).encodeStreamKey(ownerId));
          const obj = closure_1_0(dependencyMap[13]);
        }
        return tmp;
      });
      if (null != found) {
        const ownerId = found.ownerId;
        if (SelectedChannelStore.getVoiceChannelId() === channelId) {
          channel = ChannelStore.getChannel(channelId);
          if (null != channel) {
            if (channel.isDM()) {
              if (null == authStore.getActiveStreamForUser(ownerId, channel.getGuildId())) {
                const streamForUser = authStore.getStreamForUser(ownerId, channel.getGuildId());
                if (null != streamForUser) {
                  const encodeStreamKeyResult = applyArgumentsResult(4612).encodeStreamKey(streamForUser);
                  if (encodeStreamKeyResult !== c17) {
                    const isStreamMarkedFullResult = authStore.isStreamMarkedFull(encodeStreamKeyResult);
                    if (!isStreamMarkedFullResult) {
                      c17 = encodeStreamKeyResult;
                      applyArgumentsResult(4702).watchStream(streamForUser, { noFocus: true });
                      const tmp2Result = applyArgumentsResult(4702);
                    }
                  }
                  let obj = applyArgumentsResult(4612);
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
    let item = voiceStates.forEach((item) => {
      ({ userId, channelId, guildId, selfStream } = item);
      const result = closure_1_0.platformHandleVoiceStateUpdate(item);
      if (userId !== AuthenticationStore.getId()) {
        let tmp5 = !selfStream;
        if (selfStream) {
          tmp5 = null == channelId;
        }
        if (tmp5) {
          tmp5 = set.size > 0;
        }
        if (tmp5) {
          item = set.forEach((item) => {
            if (!streamMarkedFull.isStreamMarkedFull(item)) {
              set.delete(item);
            }
          });
        }
        if (null != channelId) {
          if (selfStream) {
            if (SelectedChannelStore.getVoiceChannelId() === channelId) {
              channel = ChannelStore.getChannel(channelId);
              if (null != channel) {
                if (channel.isDM()) {
                  if (null == authStore.getActiveStreamForUser(userId, channel.getGuildId())) {
                    const streamForUser = authStore.getStreamForUser(userId, channel.getGuildId());
                    if (null != streamForUser) {
                      const encodeStreamKeyResult = applyArgumentsResult(4612).encodeStreamKey(streamForUser);
                      let tmp16 = encodeStreamKeyResult !== c17;
                      if (tmp16) {
                        const isStreamMarkedFullResult = authStore.isStreamMarkedFull(encodeStreamKeyResult);
                        let flag2 = !isStreamMarkedFullResult;
                        if (!isStreamMarkedFullResult) {
                          c17 = encodeStreamKeyResult;
                          applyArgumentsResult(4702).watchStream(streamForUser, { noFocus: true });
                          flag2 = true;
                          const tmp12Result = applyArgumentsResult(4702);
                        }
                        tmp16 = flag2;
                      }
                      const obj2 = applyArgumentsResult(4612);
                    }
                  }
                }
              }
            }
          }
          const activeStreamForUser = authStore.getActiveStreamForUser(userId, guildId);
          if (null != activeStreamForUser) {
            if (activeStreamForUser.channelId === channelId) {
              if (!selfStream) {
                if (activeStreamForUser.state !== constants.ENDED) {
                  const encodeStreamKeyResult1 = applyArgumentsResult(4612).encodeStreamKey(activeStreamForUser);
                  let timeout = dependencyMap2[encodeStreamKeyResult1];
                  if (timeout == null) {
                    timeout = new applyArgumentsResult(4447).Timeout();
                  }
                  timeout.start(closure_2_14, () => closure_2_0(dependencyMap[11]).closeStream(encodeStreamKeyResult1, false));
                  dependencyMap2[encodeStreamKeyResult1] = timeout;
                  const obj5 = applyArgumentsResult(4612);
                }
              }
              if (selfStream) {
                if (activeStreamForUser.state === constants.ENDED) {
                  const obj10 = applyArgumentsResult(4612);
                  const obj11 = dependencyMap2[obj10.encodeStreamKey(obj10, activeStreamForUser)];
                  if (obj11 != null) {
                    obj11.stop();
                  }
                  delete tmp[tmp2];
                  const streamForUser1 = authStore.getStreamForUser(userId, guildId);
                  if (null != streamForUser1) {
                    let tmp34Result = applyArgumentsResult(4612);
                    if (!authStore.isStreamMarkedFull(tmp34Result.encodeStreamKey(streamForUser1))) {
                      tmp34Result = applyArgumentsResult(4702);
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
      const encodeStreamKeyResult = applyArgumentsResult(4612).encodeStreamKey(currentUserActiveStream);
      if (region == null) {
        region = RTCRegionStore.getPreferredRegion();
      }
      let tmp7 = null != region;
      if (tmp7) {
        tmp7 = region !== RTCRegionStore.getRegion(StreamRTCConnectionStore.getHostname(encodeStreamKeyResult));
      }
      if (tmp7) {
        applyArgumentsResult(4702).changeStreamRegion(encodeStreamKeyResult, region);
        const tmp3Result = applyArgumentsResult(4702);
      }
      const obj = applyArgumentsResult(4612);
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
          let obj = applyArgumentsResult(4612);
          let tmp11 = updateRegion(obj.encodeStreamKey(currentUserActiveStream), tmp6.rtcRegion);
        }
        continue;
      }
    }
  };
  applyArgumentsResult.handleSessionReset = function handleSessionReset() {
    set.clear();
  };
  applyArgumentsResult.actions = { STREAM_WATCH: applyArgumentsResult.handleStreamWatch, STREAM_START: applyArgumentsResult.handleStreamStart, STREAM_CREATE: applyArgumentsResult.handleStreamCreate, STREAM_UPDATE: applyArgumentsResult.handleStreamUpdate, STREAM_DELETE: applyArgumentsResult.handleStreamDelete, STREAM_CLOSE: applyArgumentsResult.handleStreamClose, CALL_UPDATE: applyArgumentsResult.handleCallUpdate, CHANNEL_UPDATES: applyArgumentsResult.handleChannelUpdates, VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect, VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates, CONNECTION_CLOSED: applyArgumentsResult.handleSessionReset, LOGOUT: applyArgumentsResult.handleSessionReset };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp7 {
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/go_live/ApplicationStreamingManager.tsx");

export default prototype;