// discord_app/actions/StreamActionCreators.tsx
import _modDef38 from "module_38" /* 38 */;
import sendRequest from "sendRequest" /* 530 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import isStreamKey from "isStreamKey" /* 4531 */;
import _modDef4770 from "module_4770" /* 4770 */;
import _modDef4975 from "module_4975" /* 4975 */;
import allowChannelAccess from "allowChannelAccess" /* 4979 */;
import isPremiumResolution from "isPremiumResolution" /* 9667 */;
import transitionToStreamDefault from "transitionToStream" /* 9883 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "set" /* 4540 */;
import closure_5 from "initialize" /* 8702 */;
import closure_6 from "reset" /* 9861 */;
import closure_7 from "reset" /* 4652 */;
import closure_8 from "fetchFingerprint" /* 1218 */;
import closure_9 from "ensureGuildLoaded" /* 1391 */;
import closure_10 from "createGuildRecordFromRust" /* 1910 */;
import closure_11 from "handleConnectionOpen" /* 1979 */;
import closure_12 from "updateVoiceState" /* 4542 */;
import ME from "ME" /* 676 */;
import { StreamTypes } from "StreamIssueReportReasons" /* 4532 */;
import { isStreamKey } from "../modules/go_live/utils/StreamKeyUtils.tsx";

require = arg1;
function watchStream(stream, forceMultiple) {
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
      dispatcherDefault.dispatch(obj);
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
      const obj3 = dispatcherDefault;
    } else {
      const channel = store.getChannel(channelId);
      _modDef38(null != channel, "Cannot join a null voice channel");
      const isInChannelResult = closure_12.isInChannel(channelId);
      let isChannelFullResult = !isInChannelResult;
      if (!isInChannelResult) {
        obj = allowChannelAccess;
        isChannelFullResult = obj.isChannelFull(channel, tmp6, closure_10);
      }
      tmp6 = closure_12;
    }
  }
}
function _fetchStreamPreview() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
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
              closure_4 = tmp3;
              closure_3 = tmp7;
              let timestamp = dependencyMap;
              c0 = undefined;
              let lib;
              dependencyMap = undefined;
              if (c6.shouldFetchPreview(c0, lib, dependencyMap)) {
                let obj5 = callback;
                let result = callback(4531);
                let HTTP = result.encodeStreamKey;
                if (null != tmp55) {
                  let CALL = closure_1_16.GUILD;
                } else {
                  CALL = closure_1_16.CALL;
                }
                obj1 = { streamType: null, guildId: null, channelId: null, ownerId: null };
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
                obj3[0] = closure_1_13.STREAM_PREVIEW(HTTPResult);
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
              closure_3 = closure_5;
              if (429 === closure_3.status) {
                dependencyMap = closure_3.body.retry_after * lib(687).Millis.SECOND;
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
          closure_5 = tmp45;
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
  closure_19 = tmp;
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
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    c4 = 0;
    return (function*(arg0) {
      c4 = 1;
      obj1 = { url: null, oldFormErrors: true, trackedActionData: null, rejectWithError: true };
      obj1[0] = closure_1_13.STREAM_NOTIFY(callback);
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
  closure_20 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: map1, AppContext: closure_14, PopoutWindowKeys: closure_15 } = ME);
let result = require("set").fileFinishedImporting("actions/StreamActionCreators.tsx");

export const startStream = function startStream(guildId, channelId) {
  let obj = dispatcherDefault;
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
  dispatcherDefault.dispatch(obj);
};
export { watchStream };
export const toggleSelfStreamHidden = function toggleSelfStreamHidden(channelId, selfStreamHidden) {
  let obj = dispatcherDefault;
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
      transitionToStreamDefault(stream);
    }
  } else {
    const channel = store.getChannel(channelId);
    _modDef38(null != channel, "Cannot join a null voice channel");
    const isInChannelResult = closure_12.isInChannel(channelId);
    let isChannelFullResult = !isInChannelResult;
    if (!isInChannelResult) {
      isChannelFullResult = allowChannelAccess.isChannelFull(channel, tmp6, closure_10);
      const obj = allowChannelAccess;
    }
    tmp6 = closure_12;
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
    let obj = dispatcherDefault;
    obj = { type: "STREAM_CLOSE", streamKey: null, canShowFeedback: null };
    obj[1] = streamKey;
    obj[2] = flag;
    obj.dispatch(obj);
  }
  obj = { type: "STREAM_STOP", streamKey, appContext: constants.APP };
  dispatcherDefault.dispatch(obj);
};
export const closeStream = function closeStream(encodeStreamKeyResult1, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = dispatcherDefault;
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
  let obj = dispatcherDefault;
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
  dispatcherDefault.dispatch(obj);
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
    let obj = dispatcherDefault;
    obj = { type: "STREAM_CLOSE", streamKey: null, canShowFeedback: null };
    obj[1] = encodeStreamKeyResult;
    obj[2] = flag;
    obj.dispatch(obj);
    const obj5 = isStreamKey;
    obj = { type: "STREAM_STOP", streamKey: null, appContext: null };
    obj[1] = encodeStreamKeyResult;
    obj[2] = constants.APP;
    dispatcherDefault.dispatch(obj);
    const obj3 = dispatcherDefault;
  }
};
export const joinPrivateChannelAndWatchStream = function joinPrivateChannelAndWatchStream(arg0, streamKey) {
  const _require = arg0;
  id = id.getId();
  importDefault = _isStreamKey.decodeStreamKey(streamKey);
  const voiceChannelId = store2.getVoiceChannelId();
  if (tmp4) {
    _modDef4975.disconnect();
    const obj2 = _modDef4975;
  }
  let obj = _isStreamKey;
  tmp4 = null != voiceChannelId && voiceChannelId !== arg0;
  _modDef4770.addRecipient(arg0, id, undefined, () => {
    const tmp = callback(closure_1_2[26]);
    const call = tmp.call;
    const fn = () => {
      const channelId = closure_1.channelId;
      if (null == closure_1.guildId) {
        closure_1_18(tmp, undefined);
        let windowOpen = closure_1_5.getWindowOpen(closure_1_15.CHANNEL_CALL_POPOUT);
        if (windowOpen) {
          windowOpen = closure_1_11.getVoiceChannelId() === channelId;
        }
        if (!windowOpen) {
          closure_1_1(closure_1_2[18])(tmp);
        }
      } else {
        const channel = closure_1_9.getChannel(channelId);
        closure_1_1(closure_1_2[14])(null != channel, "Cannot join a null voice channel");
        const isInChannelResult = closure_1_12.isInChannel(channelId);
        let isChannelFullResult = !isInChannelResult;
        if (!isInChannelResult) {
          isChannelFullResult = closure_1_0(tmp5[15]).isChannelFull(channel, tmp7, closure_1_10);
          const obj = closure_1_0(tmp5[15]);
        }
        tmp5 = closure_1_2;
        tmp7 = closure_1_12;
      }
    };
    if (typeof call === "unknown") {
      tmp(false, false, null, fn);
    } else {
      call(tmp2, false, false, null, fn);
    }
  });
};