// discord_app/actions/StreamActionCreators.tsx
import fetchFingerprint from "fetchFingerprint";
import set from "set";
import initialize from "initialize";
import reset from "reset";
import closure_7 from "reset";
import closure_8 from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import updateVoiceState from "updateVoiceState";
import ME from "ME";
import { StreamTypes } from "StreamIssueReportReasons";
import { 00038__ } from "../../_runtime/metro/00038__.js";
import { sendRequest } from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../Dispatcher.tsx";
import { isStreamKey } from "../modules/go_live/utils/StreamKeyUtils.tsx";
import { transitionToStream } from "../modules/go_live/utils/transitionToStream.native.tsx";
import { allowChannelAccess } from "../utils/ChannelUtils.tsx";
import { isPremiumResolution } from "../utils/StreamQualityUtils.tsx";
import { ChannelActionCreators } from "ChannelActionCreators.tsx";
import { SelectedChannelActionCreators } from "SelectedChannelActionCreators.tsx";

let closure_14;
let closure_15;
let map1;
const require = arg1;
function watchStream(stream, forceMultiple) {
  let channelId;
  let guildId;
  if (null == remoteSessionId.getRemoteSessionId()) {
    ({ guildId, channelId } = stream);
    if (null == guildId) {
      const encodeStreamKeyResult = isStreamKey.encodeStreamKey(stream);
      forceMultiple = undefined;
      if (forceMultiple != null) {
        forceMultiple = forceMultiple.forceMultiple;
      }
      if (!forceMultiple) {
        const allActiveStreamsForChannel = authStore.getAllActiveStreamsForChannel(channelId);
        forceMultiple = allActiveStreamsForChannel.filter((ownerId) => ownerId.ownerId !== id.getId()).length >= MAX_VALUE;
      }
      const obj2 = isStreamKey;
      const tmp12 = require;
      const tmp18 = importDefault;
      let obj = { type: "STREAM_WATCH", streamKey: null, allowMultiple: null };
      obj[1] = encodeStreamKeyResult;
      obj[2] = forceMultiple;
      dispatcher.dispatch(obj);
      if (null != guildId) {
        const result = tmp12(9862).maybeSetGuildRoomVideoOverlay(true, guildId, channelId);
        const tmp12Result = tmp12(9862);
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
        const participant = tmp18(8666).selectParticipant(stream.channelId, encodeStreamKeyResult);
        const tmp18Result = tmp18(8666);
      }
      const obj3 = dispatcher;
    } else {
      const channel = store.getChannel(channelId);
      00038__(null != channel, "Cannot join a null voice channel");
      const isInChannelResult = updateVoiceState.isInChannel(channelId);
      let isChannelFullResult = !isInChannelResult;
      if (!isInChannelResult) {
        obj = allowChannelAccess;
        isChannelFullResult = obj.isChannelFull(channel, tmp6, createGuildRecordFromRust);
      }
      tmp6 = updateVoiceState;
    }
  }
}
function _fetchStreamPreview() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let set = tmp3;
              let fetchFingerprint = tmp7;
              let timestamp = dependencyMap;
              let c0;
              let lib;
              dependencyMap = undefined;
              if (c6.shouldFetchPreview(c0, lib, dependencyMap)) {
                let obj5 = callback;
                let result = callback(4531);
                let HTTP = result.encodeStreamKey;
                if (null != tmp55) {
                  let CALL = outer1_16.GUILD;
                } else {
                  CALL = outer1_16.CALL;
                }
                const obj1 = { streamType: null, guildId: null, channelId: null, ownerId: null };
                obj1[0] = CALL;
                obj1[1] = tmp55;
                obj1[2] = Date;
                obj1[3] = timestamp;
                const HTTPResult = HTTP(obj1);
                c0 = HTTPResult;
                let obj7 = lib(709);
                const obj2 = { type: "STREAM_PREVIEW_FETCH_START", streamKey: null };
                obj2[1] = HTTPResult;
                obj7.dispatch(obj2);
                c6 = 1;
                HTTP = obj5(530).HTTP;
                let obj3 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
                obj3[0] = outer1_13.STREAM_PREVIEW(HTTPResult);
                const obj4 = { version: null };
                timestamp = Date.now();
                obj4[0] = timestamp;
                obj3[1] = obj4;
                obj5 = obj5(530);
                result = obj5.rejectWithMigratedError();
                obj3[3] = result;
                const value = HTTP.get(obj3);
                c7 = 2;
                c8 = 1;
              }
            }
          } else {
            if (1 === tmp7) {
              c6 = 0;
              fetchFingerprint = initialize;
              if (429 === fetchFingerprint.status) {
                dependencyMap = fetchFingerprint.body.retry_after * lib(687).Millis.SECOND;
              }
              obj3 = lib(709);
              obj5 = { type: "STREAM_PREVIEW_FETCH_FAIL", streamKey: null, retryAfter: null };
              obj5[1] = c0;
              obj5[2] = dependencyMap;
              obj3.dispatch(obj5);
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib = arg1;
              obj = lib(709);
              const obj6 = { type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: null, previewURL: null };
              obj6[1] = c0;
              obj6[2] = lib.body.url;
              obj.dispatch(obj6);
              c6 = 0;
            }
            c6 = 0;
            c8 = 3;
            obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          }
          c8 = 3;
        } catch (tmp45) {
          initialize = tmp45;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp45;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  const _fetchStreamPreview = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _notifyStreamStart() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    let c4 = 0;
    return (function*(arg0) {
      let c4 = 1;
      const obj1 = { url: null, oldFormErrors: true, trackedActionData: null, rejectWithError: true };
      obj1[0] = outer1_13.STREAM_NOTIFY(callback);
      const obj2 = { event: null };
      obj2[0] = callback(503).NetworkActionNames.STREAM_NOTIFY;
      obj1[2] = obj2;
      yield v0(5227).post(obj1);
      if (1 === tmp6) {
        c4 = 0;
        v0 = 3;
      } else if (arg0 === 1) {
        v0 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
  });
  const _notifyStreamStart = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: map1, AppContext: closure_14, PopoutWindowKeys: closure_15 } = ME);
let result = require("initialize").fileFinishedImporting("actions/StreamActionCreators.tsx");

export const startStream = function startStream(guildId, channelId) {
  let obj = dispatcher;
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
  let obj = isStreamKey;
  const encodeStreamKeyResult = obj.encodeStreamKey(currentUserActiveStream);
  obj = { type: "STREAM_SET_PAUSED", streamKey: encodeStreamKeyResult, paused };
  dispatcher.dispatch(obj);
};
export { watchStream };
export const toggleSelfStreamHidden = function toggleSelfStreamHidden(channelId, selfStreamHidden) {
  let obj = dispatcher;
  obj = { type: "STREAM_UPDATE_SELF_HIDDEN", channelId, selfStreamHidden };
  obj.dispatch(obj);
};
export const watchStreamAndTransitionToStream = function watchStreamAndTransitionToStream(stream, forceMultiple) {
  const channelId = stream.channelId;
  if (null == stream.guildId) {
    watchStream(stream, forceMultiple);
    windowOpen = windowOpen.getWindowOpen(constants2.CHANNEL_CALL_POPOUT);
    if (windowOpen) {
      windowOpen = store2.getVoiceChannelId() === channelId;
    }
    if (!windowOpen) {
      transitionToStream(stream);
    }
  } else {
    const channel = store.getChannel(channelId);
    00038__(null != channel, "Cannot join a null voice channel");
    const isInChannelResult = updateVoiceState.isInChannel(channelId);
    let isChannelFullResult = !isInChannelResult;
    if (!isInChannelResult) {
      isChannelFullResult = allowChannelAccess.isChannelFull(channel, tmp6, createGuildRecordFromRust);
      const obj = allowChannelAccess;
    }
    tmp6 = updateVoiceState;
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
    let obj = dispatcher;
    obj = { type: "STREAM_CLOSE", streamKey: null, canShowFeedback: null };
    obj[1] = streamKey;
    obj[2] = flag;
    obj.dispatch(obj);
  }
  obj = { type: "STREAM_STOP", streamKey, appContext: constants.APP };
  dispatcher.dispatch(obj);
};
export const closeStream = function closeStream(encodeStreamKeyResult1, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = dispatcher;
  obj = { type: "STREAM_CLOSE", streamKey: encodeStreamKeyResult1, canShowFeedback: flag };
  obj.dispatch(obj);
};
export const fetchStreamPreview = function fetchStreamPreview(closure_0, closure_1, closure_2) {
  const self = this;
  const apply = _fetchStreamPreview.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setLayout = function setLayout(layout) {
  let obj = dispatcher;
  obj = { type: "STREAM_LAYOUT_UPDATE", layout };
  obj.dispatch(obj);
};
export const notifyStreamStart = function notifyStreamStart() {
  const self = this;
  const apply = _notifyStreamStart.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateStreamSettings = function updateStreamSettings(noTrack) {
  if (true !== noTrack.noTrack) {
    let obj = isPremiumResolution;
    const result = obj.trackStreamSettingsUpdate(noTrack.preset, noTrack.resolution, noTrack.frameRate, noTrack.soundshareEnabled);
  }
  obj = { type: "STREAM_UPDATE_SETTINGS" };
  const merged = Object.assign(noTrack);
  dispatcher.dispatch(obj);
};
export const changeStreamRegion = function changeStreamRegion(encodeStreamKeyResult, preferredRegion) {
  const HTTP = sendRequest.HTTP;
  obj = { url: closure_13.STREAM(encodeStreamKeyResult), body: obj, oldFormErrors: true, rejectWithError: true };
  obj = { region: preferredRegion };
  HTTP.patch(obj);
};
export const stopOwnStream = function stopOwnStream(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const currentUserActiveStream = authStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const encodeStreamKeyResult = isStreamKey.encodeStreamKey(currentUserActiveStream);
    if (flag === undefined) {
      flag = true;
    }
    if (flag === undefined) {
      flag = true;
    }
    let obj = dispatcher;
    obj = { type: "STREAM_CLOSE", streamKey: null, canShowFeedback: null };
    obj[1] = encodeStreamKeyResult;
    obj[2] = flag;
    obj.dispatch(obj);
    const obj5 = isStreamKey;
    obj = { type: "STREAM_STOP", streamKey: null, appContext: null };
    obj[1] = encodeStreamKeyResult;
    obj[2] = constants.APP;
    dispatcher.dispatch(obj);
    const obj3 = dispatcher;
  }
};
export const joinPrivateChannelAndWatchStream = function joinPrivateChannelAndWatchStream(arg0, streamKey) {
  const _require = arg0;
  id = id.getId();
  const importDefault = _isStreamKey.decodeStreamKey(streamKey);
  const voiceChannelId = store2.getVoiceChannelId();
  if (tmp4) {
    SelectedChannelActionCreators.disconnect();
    const obj2 = SelectedChannelActionCreators;
  }
  let obj = _isStreamKey;
  tmp4 = null != voiceChannelId && voiceChannelId !== arg0;
  ChannelActionCreators.addRecipient(arg0, id, undefined, () => {
    const tmp = callback(outer1_2[26]);
    const call = tmp.call;
    const fn = () => {
      const channelId = closure_1.channelId;
      if (null == closure_1.guildId) {
        outer1_18(tmp, undefined);
        let windowOpen = outer1_5.getWindowOpen(outer1_15.CHANNEL_CALL_POPOUT);
        if (windowOpen) {
          windowOpen = outer1_11.getVoiceChannelId() === channelId;
        }
        if (!windowOpen) {
          outer1_1(outer1_2[18])(tmp);
        }
      } else {
        const channel = outer1_9.getChannel(channelId);
        outer1_1(outer1_2[14])(null != channel, "Cannot join a null voice channel");
        const isInChannelResult = outer1_12.isInChannel(channelId);
        let isChannelFullResult = !isInChannelResult;
        if (!isInChannelResult) {
          isChannelFullResult = outer1_0(tmp5[15]).isChannelFull(channel, tmp7, outer1_10);
          const obj = outer1_0(tmp5[15]);
        }
        tmp5 = outer1_2;
        tmp7 = outer1_12;
      }
    };
    if (typeof call === "unknown") {
      tmp(false, false, null, fn);
    } else {
      call(tmp2, false, false, null, fn);
    }
  });
};