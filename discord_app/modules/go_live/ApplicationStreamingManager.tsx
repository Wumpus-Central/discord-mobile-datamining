// === Module 17075: updateRegion ===

// Module 17075 (updateRegion)
import obj132Default from "obj132" /* 687 */;
import mergeGuildAvatarDefault from "mergeGuildAvatar" /* 1922 */;
import initializeDefault from "initialize" /* 5038 */;
import watchStream from "watchStream" /* 9860 */;
import reset from "reset" /* 4652 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import handleInviteData from "handleInviteData" /* 4295 */;
import initialize from "initialize" /* 4565 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import initialize2 from "initialize" /* 4558 */;
import StreamIssueReportReasons from "StreamIssueReportReasons" /* 4532 */;
import ME from "ME" /* 676 */;
import apply from "apply" /* 12 */;

require = fn;
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
  }
}
mergeGuildAvatarDefault;
({ GO_LIVE_NOTIFY_FRIENDS_MIN_MEMBER_COUNT, STREAM_NOTIFY_GUILD_MAX_SIZE } = StreamIssueReportReasons);
({ ApplicationStreamDeleteReasons: c10, ApplicationStreamStates: unpackModuleId } = ME);
apply.debounce(require("watchStream").notifyStreamStart, 1000);
let closure_12 = {};
let closure_13 = {};
let closure_14 = 3 * obj132Default.Millis.MINUTE;
let closure_15 = 5 * obj132Default.Millis.SECOND;
let closure_16 = 12 * obj132Default.Millis.SECOND;
let c17 = null;
const set = new Set();
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
        const item = allActiveStreams.forEach((item, index) => {
          const encodeStreamKeyResult = streamKey(closure_1_2[13]).encodeStreamKey(item);
          let tmp4 = item.ownerId !== closure_1_4.getId();
          if (tmp4) {
            tmp4 = encodeStreamKeyResult !== streamKey;
          }
          if (tmp4) {
            streamKey(closure_1_2[11]).stopStream(encodeStreamKeyResult, false);
            const tmpResult = streamKey(closure_1_2[11]);
          }
          const obj = streamKey(closure_1_2[13]);
        });
      }
    } else {
      let timeout = dependencyMap3[streamKey];
      if (timeout == null) {
        timeout = new tmp3(4259).Timeout();
      }
      dependencyMap3[streamKey] = timeout;
      timeout.start(isGuildStageVoiceResult ? closure_16 : closure_15, () => {
        closure_1_1(closure_1_2[15]);
        const obj = { type: "STREAM_TIMED_OUT", streamKey: closure_0 };
        obj.dispatch(obj);
      });
    }
    let obj = streamKey(4531);
    tmp3 = streamKey;
  };
  applyArgumentsResult.handleStreamStart = function handleStreamStart(channelId) {
    channelId = channelId.channelId;
    ({ streamType, guildId } = channelId);
    const channel = closure_1_5.getChannel(channelId);
    const obj2 = applyArgumentsResult(dependencyMap[13]);
    const tmp = applyArgumentsResult;
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
        timeout = new tmp(dependencyMap[14]).Timeout();
      }
      closure_1_13[encodeStreamKeyResult] = timeout;
      timeout.start(isGuildStageVoiceResult ? closure_1_16 : closure_1_15, () => {
        closure_1_1(closure_1_2[15]);
        const obj = { type: "STREAM_TIMED_OUT", streamKey: closure_0 };
        obj.dispatch(obj);
      });
    }
    let obj = { streamType, guildId, channelId, ownerId: closure_1_4.getId() };
  };
  applyArgumentsResult.handleStreamCreate = function handleStreamCreate(streamKey) {
    streamKey = streamKey.streamKey;
    if (dependencyMap3[streamKey] != null) {
      obj.stop();
    }
    delete tmp[tmp2];
    const item = closure_18.forEach((item, index) => {
      if (!streamMarkedFull.isStreamMarkedFull(item)) {
        set.delete(item);
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
    const item = closure_18.forEach((item, index) => {
      if (!streamMarkedFull.isStreamMarkedFull(item)) {
        set.delete(item);
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
      obj[0] = applyArgumentsResult(dependencyMap[17]).AVError.STREAM_FULL;
      const obj2 = applyArgumentsResult(dependencyMap[17]);
      const merged = Object.assign(applyArgumentsResult(dependencyMap[18]).getStreamErrorContext(streamKey));
      obj2.reportAVError(obj);
      if (!set.has(streamKey)) {
        set.add(streamKey);
        const result = applyArgumentsResult.platformShowStreamFull();
      }
      const obj4 = applyArgumentsResult(dependencyMap[18]);
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
      const item = closure_18.forEach((item, index) => {
        if (!streamMarkedFull.isStreamMarkedFull(item)) {
          set.delete(item);
        }
      });
      const allApplicationStreamsForChannel = authStore.getAllApplicationStreamsForChannel(channelId);
      const found = allApplicationStreamsForChannel.find((item, index) => {
        let tmp = item.ownerId !== id.getId();
        if (tmp) {
          tmp = !streamMarkedFull.isStreamMarkedFull(callback(table[13]).encodeStreamKey(item));
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
              if (null == authStore.getActiveStreamForUser(ownerId, channel.getGuildId())) {
                const streamForUser = authStore.getStreamForUser(ownerId, channel.getGuildId());
                if (null != streamForUser) {
                  const encodeStreamKeyResult = applyArgumentsResult(4531).encodeStreamKey(streamForUser);
                  if (encodeStreamKeyResult !== c17) {
                    const isStreamMarkedFullResult = authStore.isStreamMarkedFull(encodeStreamKeyResult);
                    if (!isStreamMarkedFullResult) {
                      c17 = encodeStreamKeyResult;
                      applyArgumentsResult(9860).watchStream(streamForUser, { noFocus: true });
                      const tmp2Result = applyArgumentsResult(9860);
                    }
                  }
                  let obj = applyArgumentsResult(4531);
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
    let item = voiceStates.forEach((item, index) => {
      ({ userId, channelId, guildId, selfStream } = item);
      const result = encodeStreamKeyResult1.platformHandleVoiceStateUpdate(item);
      if (userId !== closure_1_4.getId()) {
        let tmp5 = !selfStream;
        if (selfStream) {
          tmp5 = null == channelId;
        }
        if (tmp5) {
          tmp5 = closure_1_18.size > 0;
        }
        if (tmp5) {
          item = closure_1_18.forEach((item, index) => {
            if (!streamMarkedFull.isStreamMarkedFull(item)) {
              set.delete(item);
            }
          });
        }
        if (null != channelId) {
          if (selfStream) {
            if (closure_1_8.getVoiceChannelId() === channelId) {
              const channel = closure_1_5.getChannel(channelId);
              if (null != channel) {
                if (channel.isDM()) {
                  if (null == closure_1_3.getActiveStreamForUser(userId, channel.getGuildId())) {
                    const streamForUser = closure_1_3.getStreamForUser(userId, channel.getGuildId());
                    if (null != streamForUser) {
                      encodeStreamKeyResult = closure_1_0(closure_1_2[13]).encodeStreamKey(streamForUser);
                      let tmp16 = encodeStreamKeyResult !== encodeStreamKeyResult;
                      if (tmp16) {
                        const isStreamMarkedFullResult = closure_1_3.isStreamMarkedFull(encodeStreamKeyResult);
                        let flag2 = !isStreamMarkedFullResult;
                        if (!isStreamMarkedFullResult) {
                          closure_1_0(closure_1_2[11]).watchStream(streamForUser, { noFocus: true });
                          flag2 = true;
                          const tmp12Result = closure_1_0(closure_1_2[11]);
                        }
                        tmp16 = flag2;
                      }
                      const obj2 = closure_1_0(closure_1_2[13]);
                    }
                  }
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
                    timeout = new closure_1_0(closure_1_2[14]).Timeout();
                  }
                  timeout.start(closure_1_14, () => encodeStreamKeyResult1(closure_1_2[11]).closeStream(encodeStreamKeyResult1, false));
                  closure_1_12[encodeStreamKeyResult1] = timeout;
                  const obj5 = closure_1_0(closure_1_2[13]);
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
                  const streamForUser1 = closure_1_3.getStreamForUser(userId, guildId);
                  if (null != streamForUser1) {
                    let tmp34Result = closure_1_0(closure_1_2[13]);
                    if (!closure_1_3.isStreamMarkedFull(tmp34Result.encodeStreamKey(streamForUser1))) {
                      tmp34Result = closure_1_0(closure_1_2[11]);
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
        applyArgumentsResult(9860).changeStreamRegion(encodeStreamKeyResult, region);
        const tmp3Result = applyArgumentsResult(9860);
      }
      const obj = applyArgumentsResult(4531);
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
          let obj = applyArgumentsResult(4531);
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
let result = require("obj132").fileFinishedImporting("modules/go_live/ApplicationStreamingManager.tsx");

export default prototype;