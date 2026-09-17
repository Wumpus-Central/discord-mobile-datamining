// discord_app/actions/StreamActionCreators.tsx
import _modDef38 from "../../_runtime/metro/00038__.js";
import DispatcherDefault from "../Dispatcher.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ChannelActionCreatorsDefault from "ChannelActionCreators.tsx";
import StreamKeyUtils from "../modules/go_live/utils/StreamKeyUtils.tsx";
import ChannelUtils from "../utils/ChannelUtils.tsx";
import GuildRoomActionCreators from "../modules/guild_rooms/GuildRoomActionCreators.native.tsx";
import TrackedHTTPUtilsDefault from "../utils/TrackedHTTPUtils.tsx";
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators.tsx";
import transitionToStreamDefault from "../modules/go_live/utils/transitionToStream.native.tsx";
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators.tsx";
import StreamQualityUtils from "../utils/StreamQualityUtils.tsx";
import CallActionCreatorsDefault from "CallActionCreators.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import GameConsoleStore from "../modules/game_console/GameConsoleStore.tsx";
import PopoutWindowStore from "../modules/popout-window/PopoutWindowStore.native.tsx";
import ApplicationStreamPreviewStore from "../stores/ApplicationStreamPreviewStore.tsx";
import ApplicationStreamingStore from "../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import SelectedChannelStore from "../stores/SelectedChannelStore.tsx";
import VoiceStateStore from "../stores/VoiceStateStore.tsx";

const require = globalThis.__r;

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
        forceMultiple =
          allActiveStreamsForChannel.filter((ownerId) => ownerId.ownerId !== id.getId()).length >= MAX_VALUE;
      }
      const obj4 = { type: "STREAM_WATCH", streamKey: encodeStreamKeyResult, allowMultiple: forceMultiple };
      DispatcherDefault.dispatch(obj4);
      if (null != guildId) {
        const result = GuildRoomActionCreators.maybeSetGuildRoomVideoOverlay(true, guildId, channelId);
        const tmp12Result = GuildRoomActionCreators;
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
        const participant = ChannelRTCActionCreatorsDefault.selectParticipant(stream.channelId, encodeStreamKeyResult);
        const tmp18Result = ChannelRTCActionCreatorsDefault;
      }
    } else {
      const channel = ChannelStore.getChannel(channelId);
      _modDef38(null != channel, "Cannot join a null voice channel");
      const isInChannelResult = VoiceStateStore.isInChannel(channelId);
      if (!isInChannelResult) {
        ChannelUtils.isChannelFull(channel, VoiceStateStore, GuildStore);
      }
    }
  }
}
let closure_19 = async function _fetchStreamPreview() {
  closure_1 = arg1;
  closure_2 = arg2;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            let timestamp = closure_2;
            closure_131_0 = undefined;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            if (ApplicationStreamPreviewStore.shouldFetchPreview(guildId, closure_1, closure_2)) {
              let obj6 = _require;
              let result = require("StreamKeyUtils");
              let HTTP = result.encodeStreamKey;
              if (null != guildId) {
                let CALL = constants.GUILD;
              } else {
                CALL = constants.CALL;
              }
              const obj5 = { streamType: CALL, guildId, channelId: Date, ownerId: timestamp };
              const HTTPResult = HTTP(obj5);
              closure_131_0 = HTTPResult;
              const obj7 = { type: "STREAM_PREVIEW_FETCH_START", streamKey: HTTPResult };
              DispatcherDefault.dispatch(obj7);
              c6 = 1;
              HTTP = obj6(1271).HTTP;
              const request = {
                url: closure_2_13.STREAM_PREVIEW(HTTPResult),
                query: null,
                oldFormErrors: true,
                rejectWithError: null,
              };
              const obj9 = { version: null };
              timestamp = Date.now();
              obj9.version = timestamp;
              request.query = obj9;
              obj6 = obj6(1271);
              result = obj6.rejectWithMigratedError();
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
            const obj10 = { type: "STREAM_PREVIEW_FETCH_FAIL", streamKey: closure_131_0, retryAfter: closure_131_2 };
            closure_132_1(closure_132_2[12]).dispatch(obj10);
            const obj4 = closure_132_1(closure_132_2[12]);
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_131_1 = value;
            const obj11 = {
              type: "STREAM_PREVIEW_FETCH_SUCCESS",
              streamKey: closure_131_0,
              previewURL: closure_131_1.body.url,
            };
            closure_132_1(closure_132_2[12]).dispatch(obj11);
            c6 = 0;
            const obj = closure_132_1(closure_132_2[12]);
          }
          c6 = 0;
          c8 = 3;
          const obj12 = { value, done: true };
          return obj12;
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
};
let closure_20 = async function _notifyStreamStart(arg0) {
  await TrackedHTTPUtilsDefault.post({
    url: closure_2_13.STREAM_NOTIFY(closure_0),
    oldFormErrors: true,
    trackedActionData: { event: require("discord_common/AnalyticsUtils").NetworkActionNames.STREAM_NOTIFY },
    rejectWithError: true,
  });
  if (1 === tmp6) {
    c4 = 0;
    c1 = 3;
  } else if (arg0 === 1) {
    c1 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c4 = 0;
  }
  return value;
};
const Constants = fn(1074);
({ Endpoints: map1, AppContext: closure_14, PopoutWindowKeys: closure_15 } = Constants);
const StreamTypes = fn(4682).StreamTypes;
const size = fn(2);
let result = size.fileFinishedImporting("actions/StreamActionCreators.tsx");

export const startStream = function startStream(guildId, channelId, arg2) {
  if (null != guildId) {
    let CALL = StreamTypes.GUILD;
  } else {
    CALL = StreamTypes.CALL;
  }
  const merged = Object.assign(arg2);
  DispatcherDefault.dispatch({ type: "STREAM_START", streamType: CALL, guildId, channelId, appContext: constants.APP });
  const obj2 = { type: "STREAM_START", streamType: CALL, guildId, channelId, appContext: constants.APP };
};
export const setStreamPaused = function setStreamPaused(currentUserActiveStream, paused) {
  const encodeStreamKeyResult = StreamKeyUtils.encodeStreamKey(currentUserActiveStream);
  DispatcherDefault.dispatch({ type: "STREAM_SET_PAUSED", streamKey: encodeStreamKeyResult, paused });
};
export { watchStream };
export const toggleSelfStreamHidden = function toggleSelfStreamHidden(channelId, selfStreamHidden) {
  DispatcherDefault.dispatch({ type: "STREAM_UPDATE_SELF_HIDDEN", channelId, selfStreamHidden });
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
    if (!isInChannelResult) {
      ChannelUtils.isChannelFull(channel, VoiceStateStore, GuildStore);
    }
  }
};
export const stopStream = function stopStream(streamKey, arg1) {
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
    DispatcherDefault.dispatch(obj2);
  }
  DispatcherDefault.dispatch({ type: "STREAM_STOP", streamKey, appContext: constants.APP });
  const obj4 = { type: "STREAM_STOP", streamKey, appContext: constants.APP };
};
export const closeStream = function closeStream(encodeStreamKeyResult1, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  DispatcherDefault.dispatch({ type: "STREAM_CLOSE", streamKey: encodeStreamKeyResult1, canShowFeedback: flag });
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
  DispatcherDefault.dispatch({ type: "STREAM_LAYOUT_UPDATE", layout });
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
    const obj = StreamQualityUtils;
    const result = obj.trackStreamSettingsUpdate(
      noTrack.preset,
      noTrack.resolution,
      noTrack.frameRate,
      noTrack.soundshareEnabled,
    );
  }
  const merged = Object.assign(noTrack);
  DispatcherDefault.dispatch({ type: "STREAM_UPDATE_SETTINGS" });
  const obj3 = { type: "STREAM_UPDATE_SETTINGS" };
};
export const changeStreamRegion = function changeStreamRegion(encodeStreamKeyResult, preferredRegion) {
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: map1.STREAM(encodeStreamKeyResult),
    body: { region: preferredRegion },
    oldFormErrors: true,
    rejectWithError: true,
  };
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
    const obj2 = { type: "STREAM_CLOSE", streamKey: encodeStreamKeyResult, canShowFeedback: flag };
    DispatcherDefault.dispatch(obj2);
    const obj4 = { type: "STREAM_STOP", streamKey: encodeStreamKeyResult, appContext: constants.APP };
    DispatcherDefault.dispatch(obj4);
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
        watchStream(closure_1_1, undefined);
        windowOpen = windowOpen.getWindowOpen(constants.CHANNEL_CALL_POPOUT);
        if (windowOpen) {
          windowOpen = voiceChannelId.getVoiceChannelId() === channelId;
        }
        if (!windowOpen) {
          closure_1(4842)(closure_1_1);
        }
      } else {
        channel = channel.getChannel(channelId);
        closure_1(38)(null != channel, "Cannot join a null voice channel");
        const isInChannelResult = inChannel.isInChannel(channelId);
        if (!isInChannelResult) {
          closure_0(4785).isChannelFull(channel, inChannel, GuildStore);
          const obj = closure_0(4785);
        }
      }
    };
    if (typeof call === "unknown") {
      tmp(false, false, null, fn);
    } else {
      call(closure_0, false, false, null, fn);
    }
  });
};
