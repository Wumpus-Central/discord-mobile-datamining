// === Module 4626: handleThumbnailUpload ===

// Module 4626 (handleThumbnailUpload)
import timestampDefault from "timestamp" /* 3 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import inject from "inject" /* 4498 */;
import initializeDefault from "initialize" /* 4627 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { Linking } from "get ActivityIndicator" /* 17 */;
import closure_5 from "reset" /* 4467 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import importDefaultResult from "handleConnectionOpen" /* 1981 */;
import ME from "ME" /* 676 */;
import { getAppIntentScheme } from "items3" /* 4473 */;

require = arg1;
function handleThumbnailUpload() {
  const self = this;
  const apply = _handleThumbnailUpload.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleThumbnailUpload() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              closure_2 = tmp7;
              const DisableStreamPreviews = callback(closure_1_2[9]).DisableStreamPreviews;
              if (!DisableStreamPreviews.getSetting()) {
                closure_1_14.stop();
                const _HermesInternal = HermesInternal;
                const combined = "" + closure_1_8 + tmp34;
                obj1 = callback2(tmp36[10]);
                obj1 = { type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: null, previewURL: null };
                obj1[1] = tmp33;
                obj1[2] = combined;
                obj1.dispatch(obj1);
                c5 = 1;
                const HTTP = tmp35(tmp36[11]).HTTP;
                obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: false };
                obj2[0] = closure_1_9.STREAM_PREVIEW(tmp33);
                const obj3 = { thumbnail: null };
                obj3[0] = combined;
                obj2[1] = obj3;
                c6 = 2;
                c7 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = HTTP.post(obj2);
                return obj4;
              }
              tmp34 = callback2;
              tmp35 = callback;
            }
          } else {
            if (1 === tmp7) {
              c5 = 0;
              closure_2 = closure_4;
              logger.error("Failed to post stream preview", closure_2);
              closure_14.start(60000, () => closure_1_17(closure_0, closure_1));
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c5 = 0;
            }
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c7 = 3;
        } catch (tmp24) {
          closure_4 = tmp24;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp24;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_18 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const error = importDefaultResult;
({ Base64JPEGPrefix: closure_8, Endpoints: c9, NOOP_NULL: c10, IOS_BUNDLE_ID: unpackModuleId } = ME);
let obj2 = new timestampDefault("VoiceEngineStreamingManager");
obj2.enableNativeLogger(true);
const timeout = new require("start").Timeout();
const timeout1 = new require("start").Timeout();
let closure_16 = [];
const voiceChannelId = importDefaultResult.getVoiceChannelId();
initializeDefault;
// CreatePrivateName (0x9e)
class VoiceEngineStreamingManager extends tmp6 {
  constructor() {
    // PrivateIsIn (0x32)
    if (tmp) {
      str = "Cannot initialize private field twice.";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
      return;
    } else {
      fn = (channelId) => {
        channelId = channelId.channelId;
        if (channelId !== channelId) {
          if (closure_19 != null) {
            obj.stopBroadcast();
          }
          allActiveStreams = allActiveStreams.getAllActiveStreams();
          const item = allActiveStreams.forEach((channelId) => {
            if (channelId.channelId !== channelId) {
              const obj = channelId(closure_1_2[17]);
              const encodeStreamKeyResult = channelId(closure_1_2[17]).encodeStreamKey(channelId);
              channelId(closure_1_2[15]).stopStream(encodeStreamKeyResult, false);
              obj2 = channelId(closure_1_2[15]);
            }
          });
          obj = closure_19;
        }
      };
      // AddOwnPrivateBySym (0x64)
      return tmp2;
    }
  }
}
const prototype = VoiceEngineStreamingManager.prototype;
prototype["_initialize"] = function _initialize() {
  const voiceEngine = inject.getVoiceEngine();
  let result = voiceEngine.setBroadcastRequestCallback(() => {
    logger.log("Broadcast Requested");
    callback2(38)(null != voiceEngine, "Voice Engine should be initialized in callback");
    closure_16 = [];
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    currentAppIntent = currentAppIntent.getCurrentAppIntent();
    if (null != channel) {
      const guildId = channel.getGuildId();
      currentUserActiveStream(4628).startStream(guildId, channel.id, { sourceId: "screen:0" });
      currentUserActiveStream = currentAppIntent.getCurrentUserActiveStream();
      if (null != currentUserActiveStream) {
        const tmp2Result = callback2(4674);
        const participant = tmp2Result.selectParticipant(channel.id, tmp9(4511).encodeStreamKey(currentUserActiveStream));
        if ("android" === voiceEngine.platform) {
          closure_15.start(15000, () => {
            closure_1_1(closure_1_2[14])(null != closure_1_19, "Voice Engine should be initialized in callback");
            const size = currentUserActiveStream(closure_1_2[18]).getWindowDimensions();
            const bound = Math.min(512 / size.width, 288 / size.height);
            const result = closure_1_19.setBroadcastThumbnailCallback(size.width * bound, size.height * bound, 300, (arg0) => {
              closure_1_13.log("Broadcast thumbnail of size:", arg0.length);
              closure_1_17(closure_1_0(closure_1_2[17]).encodeStreamKey(closure_0), arg0);
            });
          });
        }
        if (null != currentAppIntent) {
          closure_4.openURL(callback3(currentAppIntent));
        }
        const tmp9Result = tmp9(4511);
      }
      const obj3 = currentUserActiveStream(4628);
      tmp9 = currentUserActiveStream;
    } else {
      let result = voiceEngine.stopBroadcastWithError(-1, "Not currently in a voice channel");
    }
  });
  const result1 = voiceEngine.setBroadcastFinishedCallback(() => {
    logger.log("Broadcast Finished");
    closure_14.stop();
    closure_15.stop();
    const result = callback(9962).handleCloseScreenshare();
  });
  const result2 = voiceEngine.setBroadcastAnnotatedCallback((arg0) => {
    logger.log("Broadcast Annotated:", arg0);
    if (arg0 !== closure_11) {
      const index = arr.indexOf(arg0, 0);
      if (index > -1) {
        arr.splice(index, 1);
      }
      arr = arr.push(arg0);
    }
  });
  const result3 = voiceEngine.setBroadcastBlockedCallback(() => {
    logger.log("Broadcast Blocked");
    let obj = callback2(9578);
    obj = { alertBody: null };
    const intl = callback(1236).intl;
    obj[0] = intl.string(callback(1236).t.iYQlwv);
    const result = obj.presentLocalNotification(obj);
  });
  let obj = inject;
  // GetOwnPrivateBySym (0x65)
  const subscription = dispatcherDefault.subscribe("VOICE_CHANNEL_SELECT", importDefault);
};
prototype["_terminate"] = function _terminate() {
  const voiceEngine = inject.getVoiceEngine();
  if (null != voiceEngine) {
    const result = voiceEngine.setBroadcastRequestCallback(closure_10);
    const result1 = voiceEngine.setBroadcastFinishedCallback(closure_10);
    const result2 = voiceEngine.setBroadcastAnnotatedCallback(closure_10);
    const result3 = voiceEngine.setBroadcastBlockedCallback(closure_10);
  }
  timeout.stop();
  timeout1.stop();
  const obj = inject;
  // GetOwnPrivateBySym (0x65)
  dispatcherDefault.unsubscribe("VOICE_CHANNEL_SELECT", this);
};
prototype["getApplicationNames"] = function getApplicationNames() {
  return closure_16;
};
const voiceEngineStreamingManager = new VoiceEngineStreamingManager();
let result = require("set").fileFinishedImporting("modules/go_live/native/VoiceEngineStreamingManager.tsx");

export default voiceEngineStreamingManager;