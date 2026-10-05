// discord_app/modules/go_live/native/VoiceEngineStreamingManager.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import react_native from "../../../../_runtime/00017_react-native.js";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import DispatcherDefault from "../../../Dispatcher.tsx";
import intl2 from "../../../intl/index.native.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import useWindowDimensions from "../../screen/useWindowDimensions.native.tsx";
import inject from "../../../../discord_common/js/packages/media-engine/native/inject.tsx";
import Constants2 from "../../activities/Constants.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import Timers from "../../../../discord_common/js/packages/timers/Timers.tsx";
import StreamKeyUtils from "../utils/StreamKeyUtils.tsx";
import StreamActionCreators from "../../../actions/StreamActionCreators.tsx";
import PushNotificationDefault from "../../../lib/pushnotification/PushNotification.tsx";
import useScreenshareUtils from "../../video_calls/native/useScreenshareUtils.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import Constants from "../../../Constants.tsx";
import LifecycleManager from "../../../lib/LifecycleManager.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let allActiveStreams, channel, closure_2, closure_3, closure_4, currentAppIntent, voiceEngine;

let c10;
let c9;
let metroImportAll;
let unpackModuleId;
function handleThumbnailUpload() {
  return obj(...arguments);
}
let obj = function _handleThumbnailUpload() {
  obj = _asyncToGenerator(async (streamKey, arg1) => {
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj6;
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              const DisableStreamPreviews = UserSettings.DisableStreamPreviews;
              if (!DisableStreamPreviews.getSetting()) {
                timeout.stop();
                const _HermesInternal = HermesInternal;
                const combined = "" + closure_2_8 + closure_1;
                const obj5 = { type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey, previewURL: combined };
                obj2 = DispatcherDefault;
                obj2.dispatch(obj5);
                c5 = 1;
                const HTTP = HTTPUtils.HTTP;
                const request = {
                  url: closure_2_9.STREAM_PREVIEW(streamKey),
                  body: obj6,
                  oldFormErrors: true,
                  rejectWithError: false,
                };
                const post = HTTP.post;
                c6 = 2;
                c7 = 1;
                obj6 = { thumbnail: combined };
                const obj7 = { value: post(request), done: false };
                return obj7;
              }
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_2 = closure_4;
            closure_131_13.error("Failed to post stream preview", closure_2);
            closure_131_14.start(60000, () => closure_2_17(streamKey, closure_1_1));
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp21) {
          closure_4 = tmp21;
          if (0 === c5) {
            c7 = 3;
            throw tmp21;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Linking = react_native.Linking;
({ Base64JPEGPrefix: metroImportAll, Endpoints: c9, NOOP_NULL: c10, IOS_BUNDLE_ID: unpackModuleId } = Constants);
const getAppIntentScheme = Constants2.getAppIntentScheme;
let obj2 = new LoggerDefault("VoiceEngineStreamingManager");
obj2.enableNativeLogger(true);
const timeout = new Timers.Timeout();
const timeout1 = new Timers.Timeout();
let closure_16 = [];
const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
class VoiceEngineStreamingManager extends LifecycleManager {
  #e;
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    if (_e in applyArgumentsResult) {
      throw new TypeError("Cannot initialize private field twice.");
    } else {
      applyArgumentsResult[
        (channelId) => {
          channelId = channelId.channelId;
          if (channelId !== channelId) {
            if (closure_19 != null) {
              closure_19.stopBroadcast();
            }
            allActiveStreams = allActiveStreams.getAllActiveStreams();
            const item = allActiveStreams.forEach((channelId) => {
              if (channelId.channelId !== channelId) {
                obj = StreamKeyUtils;
                const encodeStreamKeyResult = obj.encodeStreamKey(channelId);
                obj2 = StreamActionCreators;
                obj2.stopStream(encodeStreamKeyResult, false);
              }
            });
          }
        }
      ] = tmp3;
      return applyArgumentsResult;
    }
  }
  _initialize() {
    let logger;
    let voiceChannelId;
    obj = inject;
    voiceEngine = obj.getVoiceEngine();
    let result = voiceEngine.setBroadcastRequestCallback(() => {
      let currentUserActiveStream;
      logger.log("Broadcast Requested");
      closure_1(closure_2[14])(null != closure_19, "Voice Engine should be initialized in callback");
      closure_16 = [];
      channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
      obj2 = currentAppIntent;
      currentAppIntent = currentAppIntent.getCurrentAppIntent();
      if (null != channel) {
        const guildId = channel.getGuildId();
        const obj3 = currentUserActiveStream(closure_2[15]);
        obj3.startStream(guildId, channel.id, { sourceId: "screen:0" });
        const tmp9 = currentUserActiveStream;
        currentUserActiveStream = obj2.getCurrentUserActiveStream();
        if (null != currentUserActiveStream) {
          const selectParticipant = closure_1(closure_2[16]).selectParticipant;
          const id = channel.id;
          closure_1(closure_2[16]);
          const tmp9Result = tmp9(closure_2[17]);
          const participant = selectParticipant(id, tmp9Result.encodeStreamKey(currentUserActiveStream));
          if ("android" === closure_19.platform) {
            closure_15.start(15000, () => {
              _modDef38(null != voiceEngine, "Voice Engine should be initialized in callback");
              obj = useWindowDimensions;
              size = obj.getWindowDimensions();
              const bound = Math.min(512 / size.width, 288 / size.height);
              const result = voiceEngine.setBroadcastThumbnailCallback(
                size.width * bound,
                size.height * bound,
                300,
                (arg0) => {
                  logger.log("Broadcast thumbnail of size:", arg0.length);
                  obj = currentUserActiveStream(closure_2_2[17]);
                  closure_2_17(obj.encodeStreamKey(closure_1_0), arg0);
                },
              );
            });
          }
          if (null != currentAppIntent) {
            closure_4.openURL(closure_12(currentAppIntent));
          }
        }
      } else {
        let result = closure_19.stopBroadcastWithError(-1, "Not currently in a voice channel");
      }
    });
    const result1 = voiceEngine.setBroadcastFinishedCallback(() => {
      logger.log("Broadcast Finished");
      timeout.stop();
      timeout1.stop();
      obj = useScreenshareUtils;
      const result = obj.handleCloseScreenshare();
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
      let intl;
      logger.log("Broadcast Blocked");
      obj = { alertBody: intl.string(intl2.t.iYQlwv) };
      const presentLocalNotification = PushNotificationDefault.presentLocalNotification;
      PushNotificationDefault;
      intl = intl2.intl;
      const result = presentLocalNotification(obj);
    });
    let obj3 = DispatcherDefault;
    const subscription = obj3.subscribe("VOICE_CHANNEL_SELECT", this.#e);
  }
  _terminate() {
    obj = inject;
    voiceEngine = obj.getVoiceEngine();
    if (null != voiceEngine) {
      const result = voiceEngine.setBroadcastRequestCallback(authStore);
      const result1 = voiceEngine.setBroadcastFinishedCallback(authStore);
      const result2 = voiceEngine.setBroadcastAnnotatedCallback(authStore);
      const result3 = voiceEngine.setBroadcastBlockedCallback(authStore);
    }
    timeout.stop();
    timeout1.stop();
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("VOICE_CHANNEL_SELECT", this.#e);
  }
  getApplicationNames() {
    return closure_16;
  }
}
const prototype = VoiceEngineStreamingManager.prototype;
const voiceEngineStreamingManager = new VoiceEngineStreamingManager();
let size = size_mod;
let result = size.fileFinishedImporting("modules/go_live/native/VoiceEngineStreamingManager.tsx");

export default voiceEngineStreamingManager;
