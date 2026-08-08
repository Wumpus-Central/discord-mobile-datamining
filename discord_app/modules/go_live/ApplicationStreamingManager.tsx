// discord_app/modules/go_live/ApplicationStreamingManager.tsx
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleInviteData from "handleInviteData";
import initialize from "initialize";
import handleConnectionOpen from "handleConnectionOpen";
import closure_9 from "initialize";
import "mergeGuildAvatar";
import StreamIssueReportReasons from "StreamIssueReportReasons";
import ME from "ME";
import apply from "set";
import "initialize";
import set from "ensureGuildLoaded";
import { watchStream } from "../../actions/StreamActionCreators.tsx";

let GO_LIVE_NOTIFY_FRIENDS_MIN_MEMBER_COUNT;
let STREAM_NOTIFY_GUILD_MAX_SIZE;
let c10;
let unpackModuleId;
let require = arg1;
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
({ GO_LIVE_NOTIFY_FRIENDS_MIN_MEMBER_COUNT, STREAM_NOTIFY_GUILD_MAX_SIZE } = StreamIssueReportReasons);
({ ApplicationStreamDeleteReasons: c10, ApplicationStreamStates: unpackModuleId } = ME);
apply.debounce(require("watchStream").notifyStreamStart, 1000);
let closure_12 = {};
let closure_13 = {};
let closure_14 = 3 * require("set").Millis.MINUTE;
let closure_15 = 5 * require("set").Millis.SECOND;
let closure_16 = 12 * require("set").Millis.SECOND;
let c17 = null;
let set = new Set();
const prototype = function BaseApplicationStreamingManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
  applyArgumentsResult.handleStreamWatch = function handleStreamWatch(streamKey) {
    streamKey = streamKey.streamKey;
    const channel = store.getChannel(streamKey(4367).decodeStreamKey(streamKey).channelId);
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
          const encodeStreamKeyResult = streamKey(outer1_2[13]).encodeStreamKey(ownerId);
          let tmp4 = ownerId.ownerId !== outer1_4.getId();
          if (tmp4) {
            tmp4 = encodeStreamKeyResult !== streamKey;
          }
          if (tmp4) {
            streamKey(outer1_2[11]).stopStream(encodeStreamKeyResult, false);
            const tmpResult = streamKey(outer1_2[11]);
          }
        });
      }
    } else {
      let timeout = dependencyMap3[streamKey];
      if (timeout == null) {
        timeout = new streamKey(4188).Timeout();
      }
      dependencyMap3[streamKey] = timeout;
      timeout.start(isGuildStageVoiceResult ? closure_16 : closure_15, () => {
        let obj = outer1_1(outer1_2[15]);
        obj = { type: "STREAM_TIMED_OUT", streamKey: closure_0 };
        obj.dispatch(obj);
      });
      const tmp6 = dependencyMap3;
    }
  };
  applyArgumentsResult.handleStreamStart = function handleStreamStart(channelId) {
    let guildId;
    let streamType;
    channelId = channelId.channelId;
    ({ streamType, guildId } = channelId);
    const channel = outer1_5.getChannel(channelId);
    const obj2 = applyArgumentsResult(outer1_2[13]);
    const tmp = applyArgumentsResult;
    const tmp2 = outer1_2;
    const encodeStreamKeyResult = obj2.encodeStreamKey({ streamType, guildId, channelId, ownerId: outer1_4.getId() });
    if (channel != null) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    const allActiveStreamKeys = outer1_9.getAllActiveStreamKeys();
    if (allActiveStreamKeys.includes(encodeStreamKeyResult)) {
      const result = applyArgumentsResult.platformHandleStreamStart(channelId);
    } else {
      let timeout = outer1_13[encodeStreamKeyResult];
      if (timeout == null) {
        timeout = new tmp(tmp2[14]).Timeout();
      }
      outer1_13[encodeStreamKeyResult] = timeout;
      timeout.start(isGuildStageVoiceResult ? outer1_16 : outer1_15, () => {
        let obj = outer1_1(outer1_2[15]);
        obj = { type: "STREAM_TIMED_OUT", streamKey: closure_0 };
        obj.dispatch(obj);
      });
      const tmp5 = outer1_13;
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
    const obj2 = applyArgumentsResult(4367);
    memberCount = memberCount.getMemberCount(applyArgumentsResult(4367).decodeStreamKey(streamKey).guildId);
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
    let obj = outer1_13[streamKey];
    if (obj != null) {
      obj.stop();
    }
    delete tmp[tmp2];
    if (streamKey.reason === outer1_10.STREAM_FULL) {
      obj = { type: null };
      obj[0] = applyArgumentsResult(outer1_2[17]).AVError.STREAM_FULL;
      const obj2 = applyArgumentsResult(outer1_2[17]);
      const merged = Object.assign(applyArgumentsResult(outer1_2[18]).getStreamErrorContext(streamKey));
      obj2.reportAVError(obj);
      if (!outer1_18.has(streamKey)) {
        obj5.add(streamKey);
        const result = applyArgumentsResult.platformShowStreamFull();
      }
      const obj4 = applyArgumentsResult(outer1_2[18]);
      obj5 = outer1_18;
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
      let c17 = null;
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
                  const encodeStreamKeyResult = applyArgumentsResult(4367).encodeStreamKey(streamForUser);
                  if (encodeStreamKeyResult !== c17) {
                    const isStreamMarkedFullResult = obj3.isStreamMarkedFull(encodeStreamKeyResult);
                    if (!isStreamMarkedFullResult) {
                      c17 = encodeStreamKeyResult;
                      tmp2(4483).watchStream(streamForUser, { noFocus: true });
                      const tmp2Result = tmp2(4483);
                    }
                  }
                  let obj = applyArgumentsResult(4367);
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
      let channelId;
      let guildId;
      let selfStream;
      let userId;
      ({ userId, channelId, guildId, selfStream } = arg0);
      const result = encodeStreamKeyResult1.platformHandleVoiceStateUpdate(arg0);
      if (userId !== outer1_4.getId()) {
        let tmp5 = !selfStream;
        if (selfStream) {
          tmp5 = null == channelId;
        }
        if (tmp5) {
          tmp5 = outer1_18.size > 0;
        }
        if (tmp5) {
          const item = outer1_18.forEach((encodeStreamKeyResult) => {
            if (!streamMarkedFull.isStreamMarkedFull(encodeStreamKeyResult)) {
              set.delete(encodeStreamKeyResult);
            }
          });
        }
        if (null != channelId) {
          if (selfStream) {
            let flag = false;
            if (outer1_8.getVoiceChannelId() === channelId) {
              const channel = outer1_5.getChannel(channelId);
              flag = false;
              if (null != channel) {
                if (channel.isDM()) {
                  flag = false;
                  if (null == outer1_3.getActiveStreamForUser(userId, channel.getGuildId())) {
                    const streamForUser = obj.getStreamForUser(userId, channel.getGuildId());
                    flag = false;
                    if (null != streamForUser) {
                      const encodeStreamKeyResult = outer1_0(outer1_2[13]).encodeStreamKey(streamForUser);
                      let tmp16 = encodeStreamKeyResult !== outer1_17;
                      if (tmp16) {
                        const isStreamMarkedFullResult = obj.isStreamMarkedFull(encodeStreamKeyResult);
                        let flag2 = !isStreamMarkedFullResult;
                        if (!isStreamMarkedFullResult) {
                          outer1_17 = encodeStreamKeyResult;
                          tmp12(tmp13[11]).watchStream(streamForUser, { noFocus: true });
                          flag2 = true;
                          const tmp12Result = tmp12(tmp13[11]);
                        }
                        tmp16 = flag2;
                      }
                      flag = tmp16;
                      const obj2 = outer1_0(outer1_2[13]);
                      tmp12 = outer1_0;
                      tmp13 = outer1_2;
                    }
                  }
                } else {
                  flag = false;
                }
              }
            }
          }
          const activeStreamForUser = outer1_3.getActiveStreamForUser(userId, guildId);
          if (null != activeStreamForUser) {
            if (activeStreamForUser.channelId === channelId) {
              if (!selfStream) {
                if (activeStreamForUser.state !== outer1_11.ENDED) {
                  encodeStreamKeyResult1 = outer1_0(outer1_2[13]).encodeStreamKey(activeStreamForUser);
                  let timeout = outer1_12[encodeStreamKeyResult1];
                  if (timeout == null) {
                    timeout = new tmp21(tmp22[14]).Timeout();
                  }
                  timeout.start(outer1_14, () => encodeStreamKeyResult1(outer1_2[11]).closeStream(encodeStreamKeyResult1, false));
                  outer1_12[encodeStreamKeyResult1] = timeout;
                  const obj5 = outer1_0(outer1_2[13]);
                  tmp21 = outer1_0;
                  tmp22 = outer1_2;
                  const tmp24 = outer1_12;
                }
              }
              if (selfStream) {
                if (activeStreamForUser.state === outer1_11.ENDED) {
                  const obj10 = outer1_0(outer1_2[13]);
                  const obj11 = outer1_12[obj10.encodeStreamKey(obj10, activeStreamForUser)];
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
      const encodeStreamKeyResult = applyArgumentsResult(4367).encodeStreamKey(currentUserActiveStream);
      if (region == null) {
        region = store2.getPreferredRegion();
      }
      let tmp7 = null != region;
      if (tmp7) {
        tmp7 = region !== store2.getRegion(store3.getHostname(encodeStreamKeyResult));
      }
      if (tmp7) {
        tmp3(4483).changeStreamRegion(encodeStreamKeyResult, region);
        const tmp3Result = tmp3(4483);
      }
      const obj = applyArgumentsResult(4367);
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
          let obj = applyArgumentsResult(4367);
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