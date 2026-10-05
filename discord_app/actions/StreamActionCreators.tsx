// discord_app/actions/StreamActionCreators.tsx
import _modDef38 from "../../_runtime/metro/00038__.js";
import DispatcherDefault from "../Dispatcher.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ChannelActionCreatorsDefault from "ChannelActionCreators.tsx";
import Constants2 from "../modules/go_live/Constants.tsx";
import StreamKeyUtils from "../modules/go_live/utils/StreamKeyUtils.tsx";
import ChannelUtils from "../utils/ChannelUtils.tsx";
import GuildRoomActionCreators from "../modules/guild_rooms/GuildRoomActionCreators.native.tsx";
import TrackedHTTPUtilsDefault from "../utils/TrackedHTTPUtils.tsx";
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators.tsx";
import transitionToStreamDefault from "../modules/go_live/utils/transitionToStream.native.tsx";
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators.tsx";
import StreamQualityUtils from "../utils/StreamQualityUtils.tsx";
import CallActionCreatorsDefault from "CallActionCreators.tsx";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import GameConsoleStore from "../modules/game_console/GameConsoleStore.tsx";
import PopoutWindowStore from "../modules/popout-window/PopoutWindowStore.native.tsx";
import ApplicationStreamPreviewStore from "../stores/ApplicationStreamPreviewStore.tsx";
import ApplicationStreamingStore from "../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import SelectedChannelStore from "../stores/SelectedChannelStore.tsx";
import VoiceStateStore from "../stores/VoiceStateStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c1, c2, closure_4, closure_5, importDefault;

let closure_14;
let closure_15;
let map1;
function watchStream(stream, forceMultiple) {
  let channelId;
  let guildId;
  let id;
  if (null == GameConsoleStore.getRemoteSessionId()) {
    ({ guildId, channelId } = stream);
    if (null == guildId) {
      const obj2 = StreamKeyUtils;
      const encodeStreamKeyResult = obj2.encodeStreamKey(stream);
      forceMultiple = undefined;
      if (forceMultiple != null) {
        forceMultiple = forceMultiple.forceMultiple;
      }
      if (!forceMultiple) {
        const allActiveStreamsForChannel = ApplicationStreamingStore.getAllActiveStreamsForChannel(channelId);
        forceMultiple =
          allActiveStreamsForChannel.filter((ownerId) => ownerId.ownerId !== id.getId()).length >= MAX_VALUE;
      }
      const obj4 = { type: "STREAM_WATCH", streamKey: encodeStreamKeyResult, allowMultiple: forceMultiple };
      const obj3 = DispatcherDefault;
      obj3.dispatch(obj4);
      if (null != guildId) {
        const tmp12Result = GuildRoomActionCreators;
        const result = tmp12Result.maybeSetGuildRoomVideoOverlay(true, guildId, channelId);
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
        const tmp18Result = ChannelRTCActionCreatorsDefault;
        const participant = tmp18Result.selectParticipant(stream.channelId, encodeStreamKeyResult);
      }
    } else {
      const channel = ChannelStore.getChannel(channelId);
      _modDef38(null != channel, "Cannot join a null voice channel");
      let isChannelFullResult = !VoiceStateStore.isInChannel(channelId);
      VoiceStateStore.isInChannel(channelId);
      if (isChannelFullResult) {
        obj = ChannelUtils;
        isChannelFullResult = obj.isChannelFull(channel, VoiceStateStore, GuildStore);
      }
    }
  }
}
let obj = function _fetchStreamPreview() {
  obj = _asyncToGenerator(async (streamKey, arg1, retryAfter) => {
    let guildId;
    let body = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj8;
      let tmp28Result;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let streamKey;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              streamKey = undefined;
              body = undefined;
              retryAfter = undefined;
              const tmp49 = body;
              const tmp50 = retryAfter;
              if (ApplicationStreamPreviewStore.shouldFetchPreview(guildId, body, retryAfter)) {
                let CALL;
                const encodeStreamKey = require("StreamKeyUtils").encodeStreamKey;
                require("StreamKeyUtils");
                if (null != guildId) {
                  CALL = constants.GUILD;
                } else {
                  CALL = constants.CALL;
                }
                const obj5 = { streamType: CALL, guildId, channelId: tmp49, ownerId: tmp50 };
                const encodeStreamKeyResult = encodeStreamKey(obj5);
                streamKey = encodeStreamKeyResult;
                const obj6 = { type: "STREAM_PREVIEW_FETCH_START", streamKey: encodeStreamKeyResult };
                const obj7 = DispatcherDefault;
                obj7.dispatch(obj6);
                c6 = 1;
                const HTTP = require("HTTPUtils").HTTP;
                const request = {
                  url: closure_2_13.STREAM_PREVIEW(encodeStreamKeyResult),
                  query: obj8,
                  oldFormErrors: true,
                  rejectWithError: tmp28Result.rejectWithMigratedError(),
                };
                const get = HTTP.get;
                const _Date = Date;
                obj8 = { version: Date.now() };
                c7 = 2;
                c8 = 1;
                tmp28Result = require("HTTPUtils");
                const obj9 = { value: get(request), done: false };
                return obj9;
              }
            }
          } else if (1 === c7) {
            c6 = 0;
            closure_3 = closure_5;
            if (429 === closure_3.status) {
              retryAfter = closure_3.body.retry_after * closure_132_1(closure_132_2[20]).Millis.SECOND;
            }
            const obj10 = { type: "STREAM_PREVIEW_FETCH_FAIL", streamKey, retryAfter };
            const obj4 = closure_132_1(closure_132_2[12]);
            obj4.dispatch(obj10);
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            body = value;
            const obj12 = { type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey, previewURL: body.body.url };
            obj = closure_132_1(closure_132_2[12]);
            obj.dispatch(obj12);
            c6 = 0;
          }
          c8 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp40) {
          closure_5 = tmp40;
          if (0 === c6) {
            c8 = 3;
            throw tmp40;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _notifyStreamStart() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj5;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c4 = 1;
            const obj4 = {
              url: map1.STREAM_NOTIFY(closure_0),
              oldFormErrors: true,
              trackedActionData: obj5,
              rejectWithError: true,
            };
            const post = TrackedHTTPUtilsDefault.post;
            obj5 = { event: require("discord_common/AnalyticsUtils").NetworkActionNames.STREAM_NOTIFY };
            c2 = 2;
            c1 = 1;
            const obj6 = { value: post(obj4), done: false };
            return obj6;
          }
        } else {
          if (1 === tmp3) {
            c4 = 0;
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
          }
          c1 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp5) {
        let closure_3 = tmp5;
        if (0 === c4) {
          c1 = 3;
          throw tmp5;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ Endpoints: map1, AppContext: closure_14, PopoutWindowKeys: closure_15 } = Constants);
const StreamTypes = Constants2.StreamTypes;
let result = size.fileFinishedImporting("actions/StreamActionCreators.tsx");

export const startStream = function startStream(guildId, channelId, arg2) {
  let CALL;
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  if (null != guildId) {
    CALL = StreamTypes.GUILD;
  } else {
    CALL = StreamTypes.CALL;
  }
  obj = { type: "STREAM_START", streamType: CALL, guildId, channelId, appContext: constants.APP };
  const merged = Object.assign(arg2);
  dispatch(obj);
};
export const setStreamPaused = function setStreamPaused(currentUserActiveStream, paused) {
  obj = StreamKeyUtils;
  const encodeStreamKeyResult = obj.encodeStreamKey(currentUserActiveStream);
  const obj2 = DispatcherDefault;
  const obj3 = { type: "STREAM_SET_PAUSED", streamKey: encodeStreamKeyResult, paused };
  obj2.dispatch(obj3);
};
export { watchStream };
export const toggleSelfStreamHidden = function toggleSelfStreamHidden(channelId, selfStreamHidden) {
  obj = DispatcherDefault;
  const obj2 = { type: "STREAM_UPDATE_SELF_HIDDEN", channelId, selfStreamHidden };
  obj.dispatch(obj2);
};
export const watchStreamAndTransitionToStream = function watchStreamAndTransitionToStream(stream, forceMultiple) {
  const channelId = stream.channelId;
  if (null == stream.guildId) {
    watchStream(stream, forceMultiple);
    const windowOpen =
      PopoutWindowStore.getWindowOpen(constants2.CHANNEL_CALL_POPOUT) &&
      SelectedChannelStore.getVoiceChannelId() === channelId;
    if (!windowOpen) {
      transitionToStreamDefault(stream);
    }
  } else {
    const channel = ChannelStore.getChannel(channelId);
    _modDef38(null != channel, "Cannot join a null voice channel");
    let isChannelFullResult = !VoiceStateStore.isInChannel(channelId);
    VoiceStateStore.isInChannel(channelId);
    if (isChannelFullResult) {
      obj = ChannelUtils;
      isChannelFullResult = obj.isChannelFull(channel, VoiceStateStore, GuildStore);
    }
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
    const obj2 = { type: "STREAM_CLOSE", streamKey, canShowFeedback: flag };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
  const obj3 = DispatcherDefault;
  const obj4 = { type: "STREAM_STOP", streamKey, appContext: constants.APP };
  obj3.dispatch(obj4);
};
export const closeStream = function closeStream(encodeStreamKeyResult1, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  obj = DispatcherDefault;
  const obj2 = { type: "STREAM_CLOSE", streamKey: encodeStreamKeyResult1, canShowFeedback: flag };
  obj.dispatch(obj2);
};
export const fetchStreamPreview = function fetchStreamPreview() {
  return obj(...arguments);
};
export const setLayout = function setLayout(layout) {
  obj = DispatcherDefault;
  const obj2 = { type: "STREAM_LAYOUT_UPDATE", layout };
  obj.dispatch(obj2);
};
export const notifyStreamStart = function notifyStreamStart() {
  return obj(...arguments);
};
export const updateStreamSettings = function updateStreamSettings(noTrack) {
  if (true !== noTrack.noTrack) {
    obj = StreamQualityUtils;
    const result = obj.trackStreamSettingsUpdate(
      noTrack.preset,
      noTrack.resolution,
      noTrack.frameRate,
      noTrack.soundshareEnabled,
    );
  }
  const dispatch = DispatcherDefault.dispatch;
  const obj2 = { type: "STREAM_UPDATE_SETTINGS" };
  DispatcherDefault;
  const merged = Object.assign(noTrack);
  dispatch(obj2);
};
export const changeStreamRegion = function changeStreamRegion(encodeStreamKeyResult, preferredRegion) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: map1.STREAM(encodeStreamKeyResult), body: obj, oldFormErrors: true, rejectWithError: true };
  obj = { region: preferredRegion };
  HTTP.patch(request);
};
export const stopOwnStream = function stopOwnStream(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    const obj5 = StreamKeyUtils;
    const encodeStreamKeyResult = obj5.encodeStreamKey(currentUserActiveStream);
    if (flag === undefined) {
      flag = true;
    }
    if (flag === undefined) {
      flag = true;
    }
    const obj2 = { type: "STREAM_CLOSE", streamKey: encodeStreamKeyResult, canShowFeedback: flag };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
    const obj4 = { type: "STREAM_STOP", streamKey: encodeStreamKeyResult, appContext: constants.APP };
    const obj3 = DispatcherDefault;
    obj3.dispatch(obj4);
  }
};
export const joinPrivateChannelAndWatchStream = function joinPrivateChannelAndWatchStream(arg0, streamKey) {
  let closure_0;
  let closure_1;
  let inChannel;
  _require = arg0;
  const id = AuthenticationStore.getId();
  obj = require("StreamKeyUtils");
  importDefault = obj.decodeStreamKey(streamKey);
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  const tmp4 = null != voiceChannelId && voiceChannelId !== arg0;
  if (tmp4) {
    const obj2 = SelectedChannelActionCreatorsDefault;
    obj2.disconnect();
  }
  const obj3 = ChannelActionCreatorsDefault;
  obj3.addRecipient(arg0, id, undefined, () => {
    obj = CallActionCreatorsDefault;
    const fn = () => {
      const channelId = closure_1_1.channelId;
      if (null == closure_1_1.guildId) {
        watchStream(closure_1_1, undefined);
        windowOpen =
          windowOpen.getWindowOpen(constants.CHANNEL_CALL_POPOUT) && voiceChannelId.getVoiceChannelId() === channelId;
        if (!windowOpen) {
          closure_1(dependencyMap[18])(closure_1_1);
        }
      } else {
        channel = channel.getChannel(channelId);
        closure_1(dependencyMap[14])(null != channel, "Cannot join a null voice channel");
        let isChannelFullResult = !inChannel.isInChannel(channelId);
        inChannel.isInChannel(channelId);
        if (isChannelFullResult) {
          obj = closure_0(dependencyMap[15]);
          isChannelFullResult = obj.isChannelFull(channel, inChannel, GuildStore);
        }
      }
    };
    obj.call(closure_0, false, false, null, fn);
  });
};
