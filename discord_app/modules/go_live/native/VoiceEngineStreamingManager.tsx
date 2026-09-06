// === Module 4701: VoiceEngineStreamingManager ===

// Module 4701 (VoiceEngineStreamingManager)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import useWindowDimensions from "useWindowDimensions" /* 1477 */;
import inject from "inject" /* 1910 */;
import UserSettings from "UserSettings" /* 1935 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import StreamActionCreators from "StreamActionCreators" /* 4702 */;
import PushNotificationDefault from "PushNotification" /* 9687 */;
import useScreenshareUtils from "useScreenshareUtils" /* 9951 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;

require = fn;
function handleThumbnailUpload() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _handleThumbnailUpload() {
  closure_1 = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = streamKey;
            closure_130_1 = closure_1;
            const DisableStreamPreviews = UserSettings.DisableStreamPreviews;
            if (!DisableStreamPreviews.getSetting()) {
              timeout.stop();
              const _HermesInternal = HermesInternal;
              const combined = "" + closure_2_8 + closure_1;
              let obj1 = DispatcherDefault;
              obj1 = { type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey, previewURL: combined };
              obj1.dispatch(obj1);
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_9.STREAM_PREVIEW(streamKey), body: null, oldFormErrors: true, rejectWithError: false };
              obj2 = { thumbnail: combined };
              request.body = obj2;
              c6 = 2;
              c7 = 1;
              const obj3 = { value: HTTP.post(request), done: false };
              return obj3;
            }
          }
        } else {
          if (1 === tmp7) {
            c5 = 0;
            closure_130_2 = closure_4;
            closure_131_13.error("Failed to post stream preview", closure_130_2);
            closure_131_14.start(60000, () => closure_2_17(streamKey, closure_1_1));
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c5 = 0;
          }
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
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
};
const Linking = fn(17).Linking;
const Constants = fn(1074);
({ Base64JPEGPrefix: closure_8, Endpoints: closure_9, NOOP_NULL: c10, IOS_BUNDLE_ID: closure_11 } = Constants);
const getAppIntentScheme = fn(1920).getAppIntentScheme;
let obj2 = new LoggerDefault("VoiceEngineStreamingManager");
obj2.enableNativeLogger(true);
const timeout = new fn(4447).Timeout();
const timeout1 = new fn(4447).Timeout();
let closure_16 = [];
const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
class VoiceEngineStreamingManager extends tmp6 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    if (_e in applyArgumentsResult) {
      str = "Cannot initialize private field twice.";
      throw new TypeError("Cannot initialize private field twice.");
    } else {
      applyArgumentsResult[(channelId) => {
        channelId = channelId.channelId;
        if (channelId !== channelId) {
          if (closure_19 != null) {
            closure_19.stopBroadcast();
          }
          allActiveStreams = allActiveStreams.getAllActiveStreams();
          const item = allActiveStreams.forEach((channelId) => {
            if (channelId.channelId !== channelId) {
              const encodeStreamKeyResult = StreamKeyUtils.encodeStreamKey(channelId);
              StreamActionCreators.stopStream(encodeStreamKeyResult, false);
            }
          });
        }
      }] = tmp3;
      return applyArgumentsResult;
    }
  }
}
const prototype = VoiceEngineStreamingManager.prototype;
prototype["_initialize"] = function _initialize() {
  voiceEngine = inject.getVoiceEngine();
  let result = voiceEngine.setBroadcastRequestCallback(() => {
    logger.log("Broadcast Requested");
    closure_1(38)(null != closure_19, "Voice Engine should be initialized in callback");
    closure_16 = [];
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    currentAppIntent = currentAppIntent.getCurrentAppIntent();
    if (null != channel) {
      const guildId = channel.getGuildId();
      currentUserActiveStream(4702).startStream(guildId, channel.id, { sourceId: "screen:0" });
      currentUserActiveStream = obj2.getCurrentUserActiveStream();
      if (null != currentUserActiveStream) {
        const tmp2Result = closure_1(4761);
        const participant = tmp2Result.selectParticipant(channel.id, tmp9(4612).encodeStreamKey(currentUserActiveStream));
        if ("android" === closure_19.platform) {
          closure_15.start(15000, () => {
            _modDef38(null != voiceEngine, "Voice Engine should be initialized in callback");
            const size = useWindowDimensions.getWindowDimensions();
            const bound = Math.min(512 / size.width, 288 / size.height);
            const result = voiceEngine.setBroadcastThumbnailCallback(size.width * bound, size.height * bound, 300, (arg0) => {
              logger.log("Broadcast thumbnail of size:", arg0.length);
              closure_2_17(currentUserActiveStream(dependencyMap[17]).encodeStreamKey(closure_1_0), arg0);
            });
          });
        }
        if (null != currentAppIntent) {
          closure_4.openURL(closure_12(currentAppIntent));
        }
        const tmp9Result = tmp9(4612);
      }
      const obj3 = currentUserActiveStream(4702);
      tmp9 = currentUserActiveStream;
    } else {
      let result = closure_19.stopBroadcastWithError(-1, "Not currently in a voice channel");
    }
    obj2 = currentAppIntent;
  });
  const result1 = voiceEngine.setBroadcastFinishedCallback(() => {
    logger.log("Broadcast Finished");
    timeout.stop();
    timeout1.stop();
    const result = useScreenshareUtils.handleCloseScreenshare();
  });
  const result2 = voiceEngine.setBroadcastAnnotatedCallback((arg0) => {
    logger.log("Broadcast Annotated:", arg0);
    if (arg0 !== closure_1_11) {
      const index = closure_1_16.indexOf(arg0, 0);
      if (index > -1) {
        closure_1_16.splice(index, 1);
      }
      closure_1_16.push(arg0);
    }
  });
  const result3 = voiceEngine.setBroadcastBlockedCallback(() => {
    logger.log("Broadcast Blocked");
    const obj = { alertBody: null };
    const intl = util.intl;
    obj.alertBody = intl.string(util.t.iYQlwv);
    const result = obj.presentLocalNotification(obj);
  });
  const subscription = DispatcherDefault.subscribe("VOICE_CHANNEL_SELECT", this.#e);
};
prototype["_terminate"] = function _terminate() {
  voiceEngine = inject.getVoiceEngine();
  if (null != voiceEngine) {
    const result = voiceEngine.setBroadcastRequestCallback(closure_1_10);
    const result1 = voiceEngine.setBroadcastFinishedCallback(closure_1_10);
    const result2 = voiceEngine.setBroadcastAnnotatedCallback(closure_1_10);
    const result3 = voiceEngine.setBroadcastBlockedCallback(closure_1_10);
  }
  timeout.stop();
  timeout1.stop();
  DispatcherDefault.unsubscribe("VOICE_CHANNEL_SELECT", this.#e);
};
prototype["getApplicationNames"] = function getApplicationNames() {
  return closure_16;
};
const voiceEngineStreamingManager = new VoiceEngineStreamingManager();
let size = fn(2);
let result = size.fileFinishedImporting("modules/go_live/native/VoiceEngineStreamingManager.tsx");

export default voiceEngineStreamingManager;