// === Module 2002: VoiceEngine ===

// Module 2002 (VoiceEngine)
import logger_Logger from "logger/Logger" /* 4 */;
import react_native from "react-native" /* 17 */;
import VoiceEngineModule from "VoiceEngineModule" /* 2003 */;
import size from "module_2" /* 2 */;

let stateUpdate;

const f85523 = (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(items, f25817(arg0), 0);
    applyResult = HermesBuiltin.apply(c1, items, undefined);
  }
  return applyResult;
};
const setNoInputCallback = (arg0) => {
  c1 = arg0;
  return arg0;
};
const Platform = react_native.Platform;
const logger = new logger_Logger.Logger("VoiceEngine");
logger.enableNativeLogger(true);
VoiceEngineModule.VoiceEngine.platform = "android";
let VoiceEngine = VoiceEngineModule.VoiceEngine;
const constants = VoiceEngine.getConstants();
let supportedFeatures;
if (constants != null) {
  supportedFeatures = constants.supportedFeatures;
}
if (supportedFeatures == null) {
  supportedFeatures = ["voice_sound_stop_loop", "voice_relative_sounds", "voice_legacy_subsystem", "voice_experimental_subsystem", "elevated_hook", "soundshare", "soundshare_loopback", "set_audio_device_by_id", "set_video_device_by_id", "loopback", "wumpus_video", "hybrid_video", "experiment_config", "remote_locus_network_control", "screen_previews", "window_previews", "audio_debug_state", "connection_replay", "simulcast_bugfix", "RTC_REGION_RANKING", "video_effects", "electron_video", "mediapipe", "fixed_keyframe_interval"];
}
VoiceEngineModule.VoiceEngine.supportsFeature = (arg0) => supportedFeatures.includes(arg0);
const React3 = ["configureConnectionRetries", "getEncryptionModes", "setTransportOptions", "mergeUsers", "destroyUser", "setLocalPan", "setLocalVolume", "setLocalMute", "fastUdpReconnect", "setUdpEndpoint", "wasRemoteDisconnected", "setMinimumOutputDelay", "setSelfMute", "setSelfDeafen", "setNoInputThreshold", "setPTTActive", "setVideoBroadcast", "triggerOnVideoCallback", "getStats", "getFilteredStats", "setPingInterval", "setDesktopSource", "prepareSecureFramesTransition", "executeSecureFramesTransition", "prepareSecureFramesEpoch", "triggerOnSpeakingCallback"];
if (null != VoiceEngineModule.VoiceEngine.consoleLog) {
  const _module = logger_Logger;
  _module.setNativeLogFn((arg0, arg1, arg2) => {
    const VoiceEngine = VoiceEngineModule.VoiceEngine;
    VoiceEngine.consoleLog(arg1, "[" + arg0 + "] " + arg2);
  });
}
if (null != VoiceEngineModule.VoiceEngine.getMLSSigningKeyB64) {
  VoiceEngineModule.VoiceEngine.getMLSSigningKey = (arg0, arg1, arg2) => {
    let closure_0 = arg2;
    const VoiceEngine = VoiceEngineModule.VoiceEngine;
    return VoiceEngine.getMLSSigningKeyB64(arg0, arg1, (arg0, arg1) => {
      let str = arg1;
      const buffer = Buffer.from(arg0, "base64").buffer;
      if (arg1 == null) {
        str = "";
      }
      closure_0(buffer, Buffer.from(str, "base64").buffer);
    });
  };
}
class VoiceConnection {
  constructor() {
    const obj = Object.create(new.target.prototype);
    const tmp = +VoiceConnection.nextId;
    VoiceConnection.nextId = tmp + 1;
    obj.id = tmp;
    obj.subscriptions = [];
    obj.setNoInputCallback = obj.callbackSetter("no-input-callback", (input) => {
      const items = [input.input];
      return items;
    });
    obj.setOnFirstFrameCallback = obj.callbackSetter("on-first-frame-callback", (arg0) => {
      const items = [, , ];
      ({ userId: arr[0], ssrc: arr[1], streamId: arr[2] } = arg0);
      return items;
    });
    obj.setOnNativeMuteChangedCallback = obj.callbackSetter("native-mute-state-changed", (muted) => {
      const items = [muted.muted];
      return items;
    });
    obj.setPingCallback = obj.callbackSetter("ping-callback", (arg0) => {
      const items = [, , , ];
      ({ ping: arr[0], server: arr[1], port: arr[2], seq: arr[3] } = arg0);
      return items;
    });
    obj.setPingTimeoutCallback = obj.callbackSetter("ping-timeout-callback", (arg0) => {
      const items = [, , ];
      ({ server: arr[0], port: arr[1], seq: arr[2] } = arg0);
      return items;
    });
    obj.setOnSpeakingCallback_ = obj.callbackSetter("user-speaking", (arg0) => {
      const items = [, , ];
      ({ userId: arr[0], isSpeaking: arr[1], voiceDb: arr[2] } = arg0);
      return items;
    });
    obj.setOnSpeakingCallback = function setOnSpeakingCallback(handleSpeakingNative) {
      const result = obj.setOnSpeakingCallback_(handleSpeakingNative);
      const result1 = obj.triggerOnSpeakingCallback();
    };
    obj.setOnSpeakingWhileMutedCallback = obj.callbackSetter("speaking-while-muted", () => []);
    obj.setOnVideoCallback_ = obj.callbackSetter("on-video-callback", (arg0) => {
      const items = [, , , , ];
      ({ userId: arr[0], ssrc: arr[1], streamId: arr[2], videoStreamParameters: arr[3], videoStreamParametersJSON: arr[4] } = arg0);
      return items;
    });
    obj.setOnVideoCallback = function setOnVideoCallback(handleVideo) {
      let closure_0 = handleVideo;
      if (null == handleVideo) {
        let tmp2 = obj;
        obj.setOnVideoCallback_(handleVideo);
      } else {
        obj.setOnVideoCallback_((arg0, arg1, arg2, arg3, arg4) => {
          let parsed = arg3;
          const tmp2 = arg4 && !parsed;
          if (tmp2) {
            const _JSON = JSON;
            parsed = JSON.parse(arg4);
          }
          return closure_0(arg0, arg1, arg2, parsed);
        });
      }
      const result = obj.triggerOnVideoCallback();
    };
    obj.getMLSKeyPackage = function getMLSKeyPackage(arg0) {
      let closure_0 = arg0;
      obj.boundConnectionMethod("getMLSKeyPackageB64")((arg0) => {
        closure_0(Buffer.from(arg0, "base64").buffer);
      });
    };
    obj.updateMLSExternalSender = function updateMLSExternalSender(arg0) {
      const str = Buffer.from(arg0);
      const str1 = str.toString("base64");
      logger.info("updateMLSExternalSender: " + str1);
      obj.boundConnectionMethod("updateMLSExternalSenderB64")(str1);
    };
    obj.processMLSProposals = function processMLSProposals(arg0, arg1) {
      let closure_0 = arg1;
      const str = Buffer.from(arg0);
      const str1 = str.toString("base64");
      obj.boundConnectionMethod("processMLSProposalsB64")(str1, (arg0) => {
        closure_0(Buffer.from(arg0, "base64").buffer);
      });
    };
    obj.prepareMLSCommitTransition = function prepareMLSCommitTransition(files, arg1, arg2) {
      const str = Buffer.from(arg1);
      const str1 = str.toString("base64");
      const result = obj.boundConnectionMethod("prepareMLSCommitTransitionB64");
      result(files, str1, obj.wrapRosterCallback(arg2));
    };
    obj.processMLSWelcome = function processMLSWelcome(files, arg1, arg2) {
      const str = Buffer.from(arg1);
      const str1 = str.toString("base64");
      const result = obj.boundConnectionMethod("processMLSWelcomeB64");
      result(files, str1, obj.wrapRosterCallback(arg2));
    };
    obj.getMLSPairwiseFingerprint = function getMLSPairwiseFingerprint(arg0, arg1, arg2) {
      let closure_0 = arg2;
      obj.boundConnectionMethod("getMLSPairwiseFingerprintB64")(arg0, arg1, (arg0) => {
        closure_0(Buffer.from(arg0, "base64").buffer);
      });
    };
    obj.setOnMLSFailureCallback = obj.callbackSetter("mls-failure-callback", (arg0) => {
      const items = [, ];
      ({ source: arr[0], reason: arr[1] } = arg0);
      return items;
    });
    obj.setOnConnectionFailedCallback = obj.callbackSetter("connection-failed-callback", (reason) => {
      const items = [reason.reason];
      return items;
    });
    obj.setSecureFramesStateUpdateCallback = obj.callbackSetter("secure-frames-state-update-callback", (stateUpdate) => {
      stateUpdate = stateUpdate.stateUpdate;
      if (stateUpdate == null) {
        const _JSON = JSON;
        stateUpdate = JSON.parse(tmp);
      }
      const items = [stateUpdate];
      return items;
    });
    const item = closure_4.forEach((item) => {
      obj[item] = obj.boundConnectionMethod(item);
    });
    return obj;
  }
  wrapRosterCallback(arg0) {
    let closure_0 = arg0;
    return (arg0, arg1, arg2) => {
      const obj = {};
      if (null != arg2) {
        const _JSON = JSON;
        const parsed = JSON.parse(arg2);
        for (const key10010 in parsed) {
          let _Buffer = Buffer;
          obj[key10010] = Buffer.from(parsed[key10010], "base64").buffer;
          continue;
        }
      }
      closure_0(arg0, arg1, obj);
    };
  }
  destroy() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    const subscriptions = this.subscriptions;
    const item = subscriptions.forEach((remove) => remove.remove());
    this.subscriptions.length = 0;
    const VoiceEngine = VoiceEngineModule.VoiceEngine;
    const result = VoiceEngine.connectionInstanceDestroy(this.id, flag);
  }
  getId() {
    return this.id;
  }
  boundConnectionMethod(getMLSKeyPackageB64) {
    function connectionInstanceMethod(arr) {
      const str = arr[0];
      const formatted = str.toUpperCase();
      return "connectionInstance" + formatted + arr.slice(1);
    }
    try {
      const self = this;
      const obj = VoiceEngineModule.VoiceEngine[connectionInstanceMethod(0, getMLSKeyPackageB64)];
      return obj.bind(VoiceEngineModule.VoiceEngine, this.id);
    } catch (err) {
      const _HermesInternal = HermesInternal;
      let str = " does not exist.";
      logger.warn("VoiceConnection(...): " + getMLSKeyPackageB64 + " does not exist.");
      return () => {

      };
    }
  }
  callbackSetter(arg0, arg1) {
    const self = this;
    let closure_1 = arg1;
    let c0 = null;
    const subscriptions = this.subscriptions;
    const push = subscriptions.push;
    const VoiceEngineEmitter = VoiceEngineModule.VoiceEngineEmitter;
    push(VoiceEngineEmitter.addListener(arg0, (connectionId) => {
      const tmp2 = self.id === connectionId.connectionId && c0;
      if (tmp2) {
        const items = [];
        HermesBuiltin.arraySpread(items, closure_1(connectionId), 0);
        HermesBuiltin.apply(c0, items, undefined);
      }
    }));
    return (arg0) => {
      c0 = arg0;
      return arg0;
    };
  }
}
const prototype = VoiceConnection.prototype;
VoiceConnection.nextId = 0;
let closure_6 = VoiceEngineModule.VoiceEngine.createVoiceConnectionWithOptions;
VoiceEngineModule.VoiceEngine.createVoiceConnectionWithOptions = (arg0, arg1, arg2) => {
  const obj = new VoiceConnection();
  closure_6(obj.getId(), arg0, arg1, arg2);
  return obj;
};
let closure_7 = VoiceEngineModule.VoiceEngine.createOwnStreamConnectionWithOptions;
VoiceEngineModule.VoiceEngine.createOwnStreamConnectionWithOptions = (arg0, arg1, arg2) => {
  const obj = new VoiceConnection();
  closure_7(obj.getId(), arg0, arg1, arg2);
  return obj;
};
const f25803 = (input) => {
  const items = [input.input];
  return items;
};
const VoiceEngine2 = VoiceEngineModule.VoiceEngine;
let VoiceEngineEmitter = VoiceEngineModule.VoiceEngineEmitter;
VoiceEngineEmitter.addListener("no-input-callback", f85523);
VoiceEngine2.setNoInputCallback = setNoInputCallback;
const f25804 = (arg0) => {
  const items = [, ];
  ({ level: arr[0], speaking: arr[1] } = arg0);
  return items;
};
const VoiceEngine3 = VoiceEngineModule.VoiceEngine;
const VoiceEngineEmitter2 = VoiceEngineModule.VoiceEngineEmitter;
VoiceEngineEmitter2.addListener("on-voice", f85523);
VoiceEngine3.setOnVoiceCallback = setNoInputCallback;
const f25805 = (muted) => {
  const items = [muted.muted];
  return items;
};
const VoiceEngine4 = VoiceEngineModule.VoiceEngine;
const VoiceEngineEmitter3 = VoiceEngineModule.VoiceEngineEmitter;
VoiceEngineEmitter3.addListener("native-mute-state-changed", f85523);
VoiceEngine4.setOnNativeMuteChangedCallback = setNoInputCallback;
const f25806 = (arg0) => {
  const items = [, , ];
  ({ inputDevices: arr[0], outputDevices: arr[1], videoInputDevices: arr[2] } = arg0);
  return items;
};
const VoiceEngine5 = VoiceEngineModule.VoiceEngine;
const VoiceEngineEmitter4 = VoiceEngineModule.VoiceEngineEmitter;
VoiceEngineEmitter4.addListener("device-changed", f85523);
VoiceEngine5.setDeviceChangeCallback = setNoInputCallback;
const f25807 = (arg0) => {
  const items = [, ];
  ({ inputVolume: arr[0], outputVolume: arr[1] } = arg0);
  return items;
};
const VoiceEngine6 = VoiceEngineModule.VoiceEngine;
const VoiceEngineEmitter5 = VoiceEngineModule.VoiceEngineEmitter;
VoiceEngineEmitter5.addListener("volume-changed", f85523);
VoiceEngine6.setVolumeChangeCallback = setNoInputCallback;
const f25808 = (arg0) => {
  const items = [, ];
  ({ streamId: arr[0], active: arr[1] } = arg0);
  return items;
};
const VoiceEngine7 = VoiceEngineModule.VoiceEngine;
const VoiceEngineEmitter6 = VoiceEngineModule.VoiceEngineEmitter;
VoiceEngineEmitter6.addListener("active-sinks-change", f85523);
VoiceEngine7.setActiveSinksChangeCallback = setNoInputCallback;
const f25809 = () => [];
const VoiceEngine8 = VoiceEngineModule.VoiceEngine;
const VoiceEngineEmitter7 = VoiceEngineModule.VoiceEngineEmitter;
VoiceEngineEmitter7.addListener("on-broadcast-requested", f85523);
VoiceEngine8.setBroadcastRequestCallback = setNoInputCallback;
const f25810 = () => [];
const VoiceEngine9 = VoiceEngineModule.VoiceEngine;
const VoiceEngineEmitter8 = VoiceEngineModule.VoiceEngineEmitter;
VoiceEngineEmitter8.addListener("on-broadcast-finished", f85523);
VoiceEngine9.setBroadcastFinishedCallback = setNoInputCallback;
const f25811 = (appBundleIdentifier) => {
  const items = [appBundleIdentifier.appBundleIdentifier];
  return items;
};
const VoiceEngine10 = VoiceEngineModule.VoiceEngine;
const VoiceEngineEmitter9 = VoiceEngineModule.VoiceEngineEmitter;
VoiceEngineEmitter9.addListener("on-broadcast-annotated", f85523);
VoiceEngine10.setBroadcastAnnotatedCallback = setNoInputCallback;
const f25812 = () => [];
const VoiceEngine11 = VoiceEngineModule.VoiceEngine;
const VoiceEngineEmitter10 = VoiceEngineModule.VoiceEngineEmitter;
VoiceEngineEmitter10.addListener("on-broadcast-blocked", f85523);
VoiceEngine11.setBroadcastBlockedCallback = setNoInputCallback;
const f25813 = (mode) => {
  const items = [mode.mode];
  return items;
};
const VoiceEngine12 = VoiceEngineModule.VoiceEngine;
const VoiceEngineEmitter11 = VoiceEngineModule.VoiceEngineEmitter;
VoiceEngineEmitter11.addListener("system-microphone-mode-change", f85523);
VoiceEngine12.setSystemMicrophoneModeChangeCallback = setNoInputCallback;
const f25814 = (error) => {
  const items = [error.error];
  return items;
};
const VoiceEngine13 = VoiceEngineModule.VoiceEngine;
const VoiceEngineEmitter12 = VoiceEngineModule.VoiceEngineEmitter;
VoiceEngineEmitter12.addListener("voice-processing-error-callback", f85523);
VoiceEngine13.setVoiceProcessingErrorCallback = setNoInputCallback;
const f25815 = (imgdata) => {
  const items = [imgdata.imgdata];
  return items;
};
const VoiceEngineEmitter13 = VoiceEngineModule.VoiceEngineEmitter;
VoiceEngineEmitter13.addListener("on-broadcast-thumbnail", f85523);
const setAudioInputInitializationCallback = setNoInputCallback;
VoiceEngineModule.VoiceEngine.setBroadcastThumbnailCallback = (arg0, arg1, arg2, arg3) => {
  if (typeof setAudioInputInitializationCallback === "function") {
    let closure_1 = arg3;
    const VoiceEngine = VoiceEngineModule.VoiceEngine;
    const result = VoiceEngine.setBroadcastThumbnailParams(arg0, arg1, arg2);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const f25817 = (arg0) => {
  const items = [arg0];
  return items;
};
let c1 = null;
const VoiceEngine14 = VoiceEngineModule.VoiceEngine;
const VoiceEngineEmitter14 = VoiceEngineModule.VoiceEngineEmitter;
VoiceEngineEmitter14.addListener("audio-input-initialized", f85523);
VoiceEngine14.setAudioInputInitializationCallback = setNoInputCallback;
const VoiceEngine15 = VoiceEngineModule.VoiceEngine;
VoiceEngine15.initializeEngine();
let result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx");

export default VoiceEngineModule.VoiceEngine;