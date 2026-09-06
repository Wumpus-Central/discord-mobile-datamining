// === Module 4702: StreamActionCreators ===

// Module 4702 (StreamActionCreators)
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import ChannelUtils from "ChannelUtils" /* 4705 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4753 */;
import transitionToStreamDefault from "transitionToStream" /* 4762 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5411 */;
import StreamQualityUtils from "StreamQualityUtils" /* 9109 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 9182 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GameConsoleStore from "GameConsoleStore" /* 4577 */;
import PopoutWindowStore from "PopoutWindowStore" /* 4703 */;
import ApplicationStreamPreviewStore from "ApplicationStreamPreviewStore" /* 4704 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

require = fn;
function watchStream(stream, forceMultiple) {
  if (null == GameConsoleStore.getRemoteSessionId()) {
    ({ guildId, channelId } = stream);
    if (null == guildId) {
      const encodeStreamKeyResult = StreamKeyUtils.encodeStreamKey(stream);
      forceMultiple = undefined;
      if (forceMultiple != null) {
        forceMultiple = forceMultiple.forceMultiple;
      }
      if (!forceMultiple) {
        const allActiveStreamsForChannel = ApplicationStreamingStore.getAllActiveStreamsForChannel(channelId);
        forceMultiple = allActiveStreamsForChannel.filter((ownerId) => ownerId.ownerId !== id.getId()).length >= MAX_VALUE;
      }
      const tmp12 = require;
      const tmp18 = importDefault;
      let obj = { type: "STREAM_WATCH", streamKey: encodeStreamKeyResult, allowMultiple: forceMultiple };
      DispatcherDefault.dispatch(obj);
      if (null != guildId) {
        const result = tmp12(4716).maybeSetGuildRoomVideoOverlay(true, guildId, channelId);
        const tmp12Result = tmp12(4716);
      }
      let forceFocus;
      if (forceMultiple != null) {
        forceFocus = forceMultiple.forceFocus;
      }
      let tmp22 = true !== forceFocus;
      if (tmp22) {
        if (!forceMultiple) {
          let noFocus;
          if (forceMultiple != null) {
            noFocus = forceMultiple.noFocus;
          }
          forceMultiple = noFocus;
        }
        tmp22 = forceMultiple;
      }
      if (!tmp22) {
        const participant = tmp18(4761).selectParticipant(stream.channelId, encodeStreamKeyResult);
        const tmp18Result = tmp18(4761);
      }
    } else {
      const channel = ChannelStore.getChannel(channelId);
      _modDef38(null != channel, "Cannot join a null voice channel");
      const isInChannelResult = VoiceStateStore.isInChannel(channelId);
      let isChannelFullResult = !isInChannelResult;
      if (!isInChannelResult) {
        obj = ChannelUtils;
        isChannelFullResult = obj.isChannelFull(channel, tmp6, GuildStore);
      }
      tmp6 = VoiceStateStore;
    }
  }
}
let closure_19 = async function _fetchStreamPreview(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          let timestamp = closure_2;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          if (ApplicationStreamPreviewStore.shouldFetchPreview(closure_0, closure_1, closure_2)) {
            let obj5 = _require;
            let result = require("StreamKeyUtils");
            let HTTP = result.encodeStreamKey;
            if (null != tmp54) {
              let CALL = constants.GUILD;
            } else {
              CALL = constants.CALL;
            }
            const obj1 = { streamType: CALL, guildId: tmp54, channelId: Date, ownerId: timestamp };
            const HTTPResult = HTTP(obj1);
            closure_131_0 = HTTPResult;
            const obj2 = { type: "STREAM_PREVIEW_FETCH_START", streamKey: HTTPResult };
            DispatcherDefault.dispatch(obj2);
            c6 = 1;
            HTTP = obj5(1272).HTTP;
            const request = { url: map1.STREAM_PREVIEW(HTTPResult), query: null, oldFormErrors: true, rejectWithError: null };
            let obj3 = { version: null };
            timestamp = Date.now();
            obj3.version = timestamp;
            request.query = obj3;
            obj5 = obj5(1272);
            result = obj5.rejectWithMigratedError();
            request.rejectWithError = result;
            value = HTTP.get(request);
            c7 = 2;
            c8 = 1;
          }
        }
      } else {
        if (1 === tmp7) {
          c6 = 0;
          closure_131_3 = closure_5;
          if (429 === closure_131_3.status) {
            closure_131_2 = closure_131_3.body.retry_after * closure_132_1(closure_132_2[20]).Millis.SECOND;
          }
          obj3 = closure_132_1(closure_132_2[12]);
          const obj4 = { type: "STREAM_PREVIEW_FETCH_FAIL", streamKey: closure_131_0, retryAfter: closure_131_2 };
          obj3.dispatch(obj4);
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_131_1 = value;
          obj = closure_132_1(closure_132_2[12]);
          obj5 = { type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: closure_131_0, previewURL: closure_131_1.body.url };
          obj.dispatch(obj5);
          c6 = 0;
        }
        c6 = 0;
        c8 = 3;
        const obj6 = { value, done: true };
        return obj6;
      }
      c8 = 3;
    } catch (tmp45) {
      closure_5 = tmp45;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp45;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_20 = async function _notifyStreamStart(arg0, arg1) {
  await TrackedHTTPUtilsDefault.post({ url: closure_2_13.STREAM_NOTIFY(closure_0), oldFormErrors: true, trackedActionData: { event: require("discord_common/AnalyticsUtils").NetworkActionNames.STREAM_NOTIFY }, rejectWithError: true });
  if (1 === tmp6) {
    c4 = 0;
    c1 = 3;
  } else if (arg0 === 1) {
    c1 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    c4 = 0;
  }
  return arg1;
};
const Constants = fn(1074);
({ Endpoints: map1, AppContext: closure_14, PopoutWindowKeys: closure_15 } = Constants);
const StreamTypes = fn(4602).StreamTypes;
const size = fn(2);
let result = size.fileFinishedImporting("actions/StreamActionCreators.tsx");

export const startStream = function startStream(guildId, channelId, arg2) {
  let obj = DispatcherDefault;
  if (null != guildId) {
    let CALL = StreamTypes.GUILD;
  } else {
    CALL = StreamTypes.CALL;
  }
  obj = { type: "STREAM_START", streamType: CALL, guildId, channelId, appContext: constants.APP };
  const merged = Object.assign(arg2);
  obj.dispatch(obj);
};
export const setStreamPaused = function setStreamPaused(currentUserActiveStream, paused) {
  let obj = StreamKeyUtils;
  const encodeStreamKeyResult = obj.encodeStreamKey(currentUserActiveStream);
  obj = { type: "STREAM_SET_PAUSED", streamKey: encodeStreamKeyResult, paused };
  DispatcherDefault.dispatch(obj);
};
export { watchStream };
export const toggleSelfStreamHidden = function toggleSelfStreamHidden(channelId, selfStreamHidden) {
  const obj = { type: "STREAM_UPDATE_SELF_HIDDEN", channelId, selfStreamHidden };
  obj.dispatch(obj);
};
export const watchStreamAndTransitionToStream = function watchStreamAndTransitionToStream(stream, forceMultiple) {
  const channelId = stream.channelId;
  if (null == stream.guildId) {
    watchStream(stream, forceMultiple);
    let windowOpen = PopoutWindowStore.getWindowOpen(constants2.CHANNEL_CALL_POPOUT);
    if (windowOpen) {
      windowOpen = SelectedChannelStore.getVoiceChannelId() === channelId;
    }
    if (!windowOpen) {
      transitionToStreamDefault(stream);
    }
  } else {
    const channel = ChannelStore.getChannel(channelId);
    _modDef38(null != channel, "Cannot join a null voice channel");
    const isInChannelResult = VoiceStateStore.isInChannel(channelId);
    let isChannelFullResult = !isInChannelResult;
    if (!isInChannelResult) {
      isChannelFullResult = ChannelUtils.isChannelFull(channel, tmp6, GuildStore);
    }
    tmp6 = VoiceStateStore;
  }
};
export const stopStream = function stopStream(streamKey) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = true;
  }
  if (flag2) {
    if (flag === undefined) {
      flag = true;
    }
    let obj = { type: "STREAM_CLOSE", streamKey, canShowFeedback: flag };
    obj.dispatch(obj);
  }
  obj = { type: "STREAM_STOP", streamKey, appContext: constants.APP };
  DispatcherDefault.dispatch(obj);
};
export const closeStream = function closeStream(encodeStreamKeyResult1, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const obj = { type: "STREAM_CLOSE", streamKey: encodeStreamKeyResult1, canShowFeedback: flag };
  obj.dispatch(obj);
};
export const fetchStreamPreview = function fetchStreamPreview() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setLayout = function setLayout(layout) {
  const obj = { type: "STREAM_LAYOUT_UPDATE", layout };
  obj.dispatch(obj);
};
export const notifyStreamStart = function notifyStreamStart() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateStreamSettings = function updateStreamSettings(noTrack) {
  if (true !== noTrack.noTrack) {
    let obj = StreamQualityUtils;
    const result = obj.trackStreamSettingsUpdate(noTrack.preset, noTrack.resolution, noTrack.frameRate, noTrack.soundshareEnabled);
  }
  obj = { type: "STREAM_UPDATE_SETTINGS" };
  const merged = Object.assign(noTrack);
  DispatcherDefault.dispatch(obj);
};
export const changeStreamRegion = function changeStreamRegion(encodeStreamKeyResult, preferredRegion) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: map1.STREAM(encodeStreamKeyResult), body: { region: preferredRegion }, oldFormErrors: true, rejectWithError: true };
  HTTP.patch(request);
};
export const stopOwnStream = function stopOwnStream(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const encodeStreamKeyResult = StreamKeyUtils.encodeStreamKey(currentUserActiveStream);
    if (flag === undefined) {
      flag = true;
    }
    if (flag === undefined) {
      flag = true;
    }
    let obj = { type: "STREAM_CLOSE", streamKey: encodeStreamKeyResult, canShowFeedback: flag };
    obj.dispatch(obj);
    obj = { type: "STREAM_STOP", streamKey: encodeStreamKeyResult, appContext: constants.APP };
    DispatcherDefault.dispatch(obj);
  }
};
export const joinPrivateChannelAndWatchStream = function joinPrivateChannelAndWatchStream(arg0, streamKey) {
  _require = arg0;
  const id = AuthenticationStore.getId();
  importDefault = require("StreamKeyUtils").decodeStreamKey(streamKey);
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  if (tmp4) {
    SelectedChannelActionCreatorsDefault.disconnect();
  }
  let obj = require("StreamKeyUtils");
  tmp4 = null != voiceChannelId && voiceChannelId !== arg0;
  ChannelActionCreatorsDefault.addRecipient(arg0, id, undefined, () => {
    const tmp = CallActionCreatorsDefault;
    const call = tmp.call;
    const fn = () => {
      const channelId = closure_1_1.channelId;
      if (null == closure_1_1.guildId) {
        watchStream(tmp, undefined);
        windowOpen = windowOpen.getWindowOpen(constants.CHANNEL_CALL_POPOUT);
        if (windowOpen) {
          windowOpen = voiceChannelId.getVoiceChannelId() === channelId;
        }
        if (!windowOpen) {
          closure_1(4762)(tmp);
        }
      } else {
        channel = channel.getChannel(channelId);
        closure_1(38)(null != channel, "Cannot join a null voice channel");
        const isInChannelResult = inChannel.isInChannel(channelId);
        let isChannelFullResult = !isInChannelResult;
        if (!isInChannelResult) {
          isChannelFullResult = closure_0(4705).isChannelFull(channel, tmp7, GuildStore);
          const obj = closure_0(4705);
        }
        tmp7 = inChannel;
      }
    };
    if (typeof call === "unknown") {
      tmp(false, false, null, fn);
    } else {
      call(tmp2, false, false, null, fn);
    }
  });
};