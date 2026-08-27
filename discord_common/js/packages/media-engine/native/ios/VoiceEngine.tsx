// === Module 4499: logger ===

// Module 4499 (logger)
import set from "set" /* 2 */;
import log from "log" /* 4 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import constants2 from "constants" /* 4500 */;

let f31585 = require;
let c1 = dependencyMap;
const Platform = get_ActivityIndicator.Platform;
const logger = new log.Logger("VoiceEngine");
logger.enableNativeLogger(true);
constants2.VoiceEngine.platform = "android";
let VoiceEngine = constants2.VoiceEngine;
const constants = VoiceEngine.getConstants();
let supportedFeatures;
if (constants != null) {
  supportedFeatures = constants.supportedFeatures;
}
if (supportedFeatures == null) {
  supportedFeatures = ["voice_sound_stop_loop", "voice_relative_sounds", "voice_legacy_subsystem", "voice_experimental_subsystem", "elevated_hook", "soundshare", "soundshare_loopback", "set_audio_device_by_id", "set_video_device_by_id", "loopback", "wumpus_video", "hybrid_video", "experiment_config", "remote_locus_network_control", "screen_previews", "window_previews", "audio_debug_state", "connection_replay", "simulcast_bugfix", "RTC_REGION_RANKING", "video_effects", "electron_video", "mediapipe", "fixed_keyframe_interval"];
}
constants2.VoiceEngine.supportsFeature = (arg0) => supportedFeatures.includes(arg0);
let closure_4 = ["configureConnectionRetries", "getEncryptionModes", "setTransportOptions", "mergeUsers", "destroyUser", "setLocalPan", "setLocalVolume", "setLocalMute", "fastUdpReconnect", "setUdpEndpoint", "wasRemoteDisconnected", "setMinimumOutputDelay", "setSelfMute", "setSelfDeafen", "setNoInputThreshold", "setPTTActive", "setVideoBroadcast", "triggerOnVideoCallback", "getStats", "getFilteredStats", "setPingInterval", "setDesktopSource", "prepareSecureFramesTransition", "executeSecureFramesTransition", "prepareSecureFramesEpoch", "triggerOnSpeakingCallback"];
if (null != constants2.VoiceEngine.consoleLog) {
  const _module = log;
  _module.setNativeLogFn((arg0, arg1, arg2) => {
    const VoiceEngine = f31585(_null[2]).VoiceEngine;
    VoiceEngine.consoleLog(arg1, "[" + arg0 + "] " + arg2);
  });
}
if (null != constants2.VoiceEngine.getMLSSigningKeyB64) {
  constants2.VoiceEngine.getMLSSigningKey = (arg0, arg1, arg2) => {
    const callback = arg2;
    const VoiceEngine = callback(_null[2]).VoiceEngine;
    return VoiceEngine.getMLSSigningKeyB64(arg0, arg1, (arg0, arg1) => {
      let str = arg1;
      if (arg1 == null) {
        str = "";
      }
      closure_0(Buffer.from(arg0, "base64").buffer, Buffer.from(str, "base64").buffer);
    });
  };
}
let VoiceConnection;
class VoiceConnection {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    tmp = +VoiceConnection.nextId;
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
      obj = handleVideo;
      if (null == handleVideo) {
        obj.setOnVideoCallback_(handleVideo);
      } else {
        obj.setOnVideoCallback_((arg0, arg1, arg2, arg3, arg4) => {
          let parsed = arg3;
          let tmp2 = arg4;
          if (arg4) {
            tmp2 = !parsed;
          }
          if (tmp2) {
            const _JSON = JSON;
            parsed = JSON.parse(arg4);
          }
          return handleVideo(arg0, arg1, arg2, parsed);
        });
      }
      const result = obj.triggerOnVideoCallback();
    };
    obj.getMLSKeyPackage = function getMLSKeyPackage(arg0) {
      arg0.boundConnectionMethod("getMLSKeyPackageB64")((arg0) => {
        callback(Buffer.from(arg0, "base64").buffer);
      });
    };
    obj.updateMLSExternalSender = function updateMLSExternalSender(arg0) {
      let str = Buffer.from(arg0);
      str = str.toString("base64");
      closure_1_2.info("updateMLSExternalSender: " + str);
      obj.boundConnectionMethod("updateMLSExternalSenderB64")(str);
    };
    obj.processMLSProposals = function processMLSProposals(arg0, arg1) {
      let str = Buffer.from(arg0);
      str = str.toString("base64");
      arg1.boundConnectionMethod("processMLSProposalsB64")(str, (arg0) => {
        callback(Buffer.from(arg0, "base64").buffer);
      });
    };
    obj.prepareMLSCommitTransition = function prepareMLSCommitTransition(g_v) {
      let str = Buffer.from(arg1);
      str = str.toString("base64");
      const result = obj.boundConnectionMethod("prepareMLSCommitTransitionB64");
      result(g_v, str, obj.wrapRosterCallback(arg2));
    };
    obj.processMLSWelcome = function processMLSWelcome(g_v) {
      let str = Buffer.from(arg1);
      str = str.toString("base64");
      const result = obj.boundConnectionMethod("processMLSWelcomeB64");
      result(g_v, str, obj.wrapRosterCallback(arg2));
    };
    obj.getMLSPairwiseFingerprint = function getMLSPairwiseFingerprint(arg0, arg1, arg2) {
      arg2.boundConnectionMethod("getMLSPairwiseFingerprintB64")(arg0, arg1, (arg0) => {
        callback(Buffer.from(arg0, "base64").buffer);
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
    item = closure_4.forEach((getMLSKeyPackageB64) => {
      obj[getMLSKeyPackageB64] = obj.boundConnectionMethod(getMLSKeyPackageB64);
    });
    return obj;
  }
}
const prototype = VoiceConnection.prototype;
prototype["wrapRosterCallback"] = function wrapRosterCallback(arg0) {
  closure_0 = arg0;
  return (arg0, arg1, arg2) => {
    const obj = {};
    if (null != arg2) {
      const _JSON = JSON;
      const parsed = JSON.parse(arg2);
      for (const key10010 in parsed) {
        let tmp5 = key10010;
        let _Buffer = Buffer;
        obj[key10010] = Buffer.from(parsed[key10010], "base64").buffer;
        continue;
      }
    }
    callback(arg0, arg1, obj);
  };
};
prototype["destroy"] = function destroy() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const subscriptions = this.subscriptions;
  const item = subscriptions.forEach((remove) => remove.remove());
  this.subscriptions.length = 0;
  const VoiceEngine = f31585(_null[2]).VoiceEngine;
  const result = VoiceEngine.connectionInstanceDestroy(this.id, flag);
};
prototype["getId"] = function getId() {
  return this.id;
};
prototype["boundConnectionMethod"] = function boundConnectionMethod(getMLSKeyPackageB64) {
  try {
    const self = this;
    return f31585(_null[2]).VoiceEngine[(function connectionInstanceMethod(arr) {
      const formatted = arr[0].toUpperCase();
      return "connectionInstance" + formatted + arr.slice(1);
    })(0, getMLSKeyPackageB64)].bind(f31585(_null[2]).VoiceEngine, this.id);
  } catch (err) {
    const _HermesInternal = HermesInternal;
    logger.warn("VoiceConnection(...): " + tmp + " does not exist.");
    return () => {

    };
  }
};
prototype["callbackSetter"] = function callbackSetter(arg0, arg1) {
  const self = this;
  const _null = arg1;
  const callback = null;
  const subscriptions = this.subscriptions;
  const VoiceEngineEmitter = callback(_null[2]).VoiceEngineEmitter;
  subscriptions.push(VoiceEngineEmitter.addListener(arg0, (connectionId) => {
    if (tmp) {
      const items = [];
      HermesBuiltin.arraySpread(callback(connectionId), 0);
      HermesBuiltin.apply(items, undefined);
    }
  }));
  return (arg0) => {
    closure_0 = arg0;
    return arg0;
  };
};
VoiceConnection.nextId = 0;
let closure_6 = constants2.VoiceEngine.createVoiceConnectionWithOptions;
constants2.VoiceEngine.createVoiceConnectionWithOptions = (arg0, arg1, arg2) => {
  const obj = new VoiceConnection();
  callback2(obj.getId(), arg0, arg1, arg2);
  return obj;
};
let closure_7 = constants2.VoiceEngine.createOwnStreamConnectionWithOptions;
constants2.VoiceEngine.createOwnStreamConnectionWithOptions = (arg0, arg1, arg2) => {
  const obj = new VoiceConnection();
  callback3(obj.getId(), arg0, arg1, arg2);
  return obj;
};
f31585 = (input) => {
  const items = [input.input];
  return items;
};
c1 = null;
let VoiceEngineEmitter = constants2.VoiceEngineEmitter;
VoiceEngineEmitter.addListener("no-input-callback", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f31585(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
constants2.VoiceEngine.setNoInputCallback = (arg0) => {
  closure_1 = arg0;
  return arg0;
};
f31585 = (arg0) => {
  const items = [, ];
  ({ level: arr[0], speaking: arr[1] } = arg0);
  return items;
};
c1 = null;
const VoiceEngineEmitter2 = constants2.VoiceEngineEmitter;
VoiceEngineEmitter2.addListener("on-voice", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f31585(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
constants2.VoiceEngine.setOnVoiceCallback = (arg0) => {
  closure_1 = arg0;
  return arg0;
};
f31585 = (muted) => {
  const items = [muted.muted];
  return items;
};
c1 = null;
const VoiceEngineEmitter3 = constants2.VoiceEngineEmitter;
VoiceEngineEmitter3.addListener("native-mute-state-changed", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f31585(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
constants2.VoiceEngine.setOnNativeMuteChangedCallback = (arg0) => {
  closure_1 = arg0;
  return arg0;
};
f31585 = (arg0) => {
  const items = [, , ];
  ({ inputDevices: arr[0], outputDevices: arr[1], videoInputDevices: arr[2] } = arg0);
  return items;
};
c1 = null;
const VoiceEngineEmitter4 = constants2.VoiceEngineEmitter;
VoiceEngineEmitter4.addListener("device-changed", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f31585(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
constants2.VoiceEngine.setDeviceChangeCallback = (arg0) => {
  closure_1 = arg0;
  return arg0;
};
f31585 = (arg0) => {
  const items = [, ];
  ({ inputVolume: arr[0], outputVolume: arr[1] } = arg0);
  return items;
};
c1 = null;
const VoiceEngineEmitter5 = constants2.VoiceEngineEmitter;
VoiceEngineEmitter5.addListener("volume-changed", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f31585(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
constants2.VoiceEngine.setVolumeChangeCallback = (arg0) => {
  closure_1 = arg0;
  return arg0;
};
f31585 = (arg0) => {
  const items = [, ];
  ({ streamId: arr[0], active: arr[1] } = arg0);
  return items;
};
c1 = null;
const VoiceEngineEmitter6 = constants2.VoiceEngineEmitter;
VoiceEngineEmitter6.addListener("active-sinks-change", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f31585(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
constants2.VoiceEngine.setActiveSinksChangeCallback = (arg0) => {
  closure_1 = arg0;
  return arg0;
};
f31585 = () => [];
c1 = null;
const VoiceEngineEmitter7 = constants2.VoiceEngineEmitter;
VoiceEngineEmitter7.addListener("on-broadcast-requested", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f31585(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
constants2.VoiceEngine.setBroadcastRequestCallback = (arg0) => {
  closure_1 = arg0;
  return arg0;
};
f31585 = () => [];
c1 = null;
const VoiceEngineEmitter8 = constants2.VoiceEngineEmitter;
VoiceEngineEmitter8.addListener("on-broadcast-finished", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f31585(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
constants2.VoiceEngine.setBroadcastFinishedCallback = (arg0) => {
  closure_1 = arg0;
  return arg0;
};
f31585 = (appBundleIdentifier) => {
  const items = [appBundleIdentifier.appBundleIdentifier];
  return items;
};
c1 = null;
const VoiceEngineEmitter9 = constants2.VoiceEngineEmitter;
VoiceEngineEmitter9.addListener("on-broadcast-annotated", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f31585(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
constants2.VoiceEngine.setBroadcastAnnotatedCallback = (arg0) => {
  closure_1 = arg0;
  return arg0;
};
f31585 = () => [];
c1 = null;
const VoiceEngineEmitter10 = constants2.VoiceEngineEmitter;
VoiceEngineEmitter10.addListener("on-broadcast-blocked", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f31585(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
constants2.VoiceEngine.setBroadcastBlockedCallback = (arg0) => {
  closure_1 = arg0;
  return arg0;
};
f31585 = (mode) => {
  const items = [mode.mode];
  return items;
};
c1 = null;
const VoiceEngineEmitter11 = constants2.VoiceEngineEmitter;
VoiceEngineEmitter11.addListener("system-microphone-mode-change", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f31585(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
constants2.VoiceEngine.setSystemMicrophoneModeChangeCallback = (arg0) => {
  closure_1 = arg0;
  return arg0;
};
f31585 = (error) => {
  const items = [error.error];
  return items;
};
c1 = null;
const VoiceEngineEmitter12 = constants2.VoiceEngineEmitter;
VoiceEngineEmitter12.addListener("voice-processing-error-callback", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f31585(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
constants2.VoiceEngine.setVoiceProcessingErrorCallback = (arg0) => {
  closure_1 = arg0;
  return arg0;
};
f31585 = (imgdata) => {
  const items = [imgdata.imgdata];
  return items;
};
c1 = null;
const VoiceEngineEmitter13 = constants2.VoiceEngineEmitter;
VoiceEngineEmitter13.addListener("on-broadcast-thumbnail", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f31585(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
const setAudioInputInitializationCallback = (arg0) => {
  closure_1 = arg0;
  return arg0;
};
constants2.VoiceEngine.setBroadcastThumbnailCallback = (arg0, arg1, arg2, arg3) => {
  if (typeof setAudioInputInitializationCallback !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const _null = arg3;
  const VoiceEngine = f31585(_null[2]).VoiceEngine;
  const result = VoiceEngine.setBroadcastThumbnailParams(arg0, arg1, arg2);
};
f31585 = (arg0) => {
  const items = [arg0];
  return items;
};
c1 = null;
const VoiceEngineEmitter14 = constants2.VoiceEngineEmitter;
VoiceEngineEmitter14.addListener("audio-input-initialized", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f31585(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
constants2.VoiceEngine.setAudioInputInitializationCallback = (arg0) => {
  closure_1 = arg0;
  return arg0;
};
const VoiceEngine2 = constants2.VoiceEngine;
VoiceEngine2.initializeEngine();
let result = set.fileFinishedImporting("../discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx");

export default constants2.VoiceEngine;