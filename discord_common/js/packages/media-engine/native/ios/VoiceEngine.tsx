import { Platform } from "get ActivityIndicator";
import { VoiceEngine } from "constants";
import { VoiceEngineEmitter } from "constants";
import { VoiceEngineEmitter as VoiceEngineEmitter2 } from "constants";
import { VoiceEngineEmitter as VoiceEngineEmitter3 } from "constants";
import { VoiceEngineEmitter as VoiceEngineEmitter4 } from "constants";
import { VoiceEngineEmitter as VoiceEngineEmitter5 } from "constants";
import { VoiceEngineEmitter as VoiceEngineEmitter6 } from "constants";
import { VoiceEngineEmitter as VoiceEngineEmitter7 } from "constants";
import { VoiceEngineEmitter as VoiceEngineEmitter8 } from "constants";
import { VoiceEngineEmitter as VoiceEngineEmitter9 } from "constants";
import { VoiceEngineEmitter as VoiceEngineEmitter10 } from "constants";
import { VoiceEngineEmitter as VoiceEngineEmitter11 } from "constants";
import { VoiceEngineEmitter as VoiceEngineEmitter12 } from "constants";
import { VoiceEngineEmitter as VoiceEngineEmitter13 } from "constants";
import { VoiceEngineEmitter as VoiceEngineEmitter14 } from "constants";
import { VoiceEngine as VoiceEngine2 } from "constants";

let f30609 = require;
let c1 = dependencyMap;
const logger = new require("log").Logger("VoiceEngine");
logger.enableNativeLogger(true);
require("constants").VoiceEngine.platform = "android";
const constants = VoiceEngine.getConstants();
let supportedFeatures;
if (constants != null) {
  supportedFeatures = constants.supportedFeatures;
}
if (supportedFeatures == null) {
  supportedFeatures = ["voice_sound_stop_loop", "voice_relative_sounds", "voice_legacy_subsystem", "voice_experimental_subsystem", "elevated_hook", "soundshare", "soundshare_loopback", "set_audio_device_by_id", "set_video_device_by_id", "loopback", "wumpus_video", "hybrid_video", "experiment_config", "remote_locus_network_control", "screen_previews", "window_previews", "audio_debug_state", "connection_replay", "simulcast_bugfix", "RTC_REGION_RANKING", "video_effects", "electron_video", "mediapipe", "fixed_keyframe_interval"];
}
require("constants").VoiceEngine.supportsFeature = (arg0) => supportedFeatures.includes(arg0);
let closure_4 = ["configureConnectionRetries", "getEncryptionModes", "setTransportOptions", "mergeUsers", "destroyUser", "setLocalPan", "setLocalVolume", "setLocalMute", "fastUdpReconnect", "setUdpEndpoint", "wasRemoteDisconnected", "setMinimumOutputDelay", "setSelfMute", "setSelfDeafen", "setNoInputThreshold", "setPTTActive", "setVideoBroadcast", "triggerOnVideoCallback", "getStats", "getFilteredStats", "setPingInterval", "setDesktopSource", "prepareSecureFramesTransition", "executeSecureFramesTransition", "prepareSecureFramesEpoch", "triggerOnSpeakingCallback"];
if (null != require("constants").VoiceEngine.consoleLog) {
  const _module = require("log");
  _module.setNativeLogFn((arg0, arg1, arg2) => {
    const VoiceEngine = f30609(_null[2]).VoiceEngine;
    VoiceEngine.consoleLog(arg1, "[" + arg0 + "] " + arg2);
  });
}
if (null != require("constants").VoiceEngine.getMLSSigningKeyB64) {
  require("constants").VoiceEngine.getMLSSigningKey = (arg0, arg1, arg2) => {
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
    f30609 = obj;
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
      const obj = handleVideo;
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
      outer1_2.info("updateMLSExternalSender: " + str);
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
    item = f30584.forEach((getMLSKeyPackageB64) => {
      obj[getMLSKeyPackageB64] = obj.boundConnectionMethod(getMLSKeyPackageB64);
    });
    return obj;
  }
}
const prototype = VoiceConnection.prototype;
prototype["wrapRosterCallback"] = function wrapRosterCallback(arg0) {
  let closure_0 = arg0;
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
  const VoiceEngine = f30609(_null[2]).VoiceEngine;
  const result = VoiceEngine.connectionInstanceDestroy(this.id, flag);
};
prototype["getId"] = function getId() {
  return this.id;
};
prototype["boundConnectionMethod"] = function boundConnectionMethod(getMLSKeyPackageB64) {
  try {
    const self = this;
    return f30609(_null[2]).VoiceEngine[(function connectionInstanceMethod(arr) {
      const formatted = arr[0].toUpperCase();
      return "connectionInstance" + formatted + arr.slice(1);
    })(0, getMLSKeyPackageB64)].bind(f30609(_null[2]).VoiceEngine, this.id);
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
    let closure_0 = arg0;
    return arg0;
  };
};
VoiceConnection.nextId = 0;
let closure_6 = require("constants").VoiceEngine.createVoiceConnectionWithOptions;
require("constants").VoiceEngine.createVoiceConnectionWithOptions = (arg0, arg1, arg2) => {
  const obj = new VoiceConnection();
  callback2(obj.getId(), arg0, arg1, arg2);
  return obj;
};
let closure_7 = require("constants").VoiceEngine.createOwnStreamConnectionWithOptions;
require("constants").VoiceEngine.createOwnStreamConnectionWithOptions = (arg0, arg1, arg2) => {
  const obj = new VoiceConnection();
  callback3(obj.getId(), arg0, arg1, arg2);
  return obj;
};
f30609 = (input) => {
  const items = [input.input];
  return items;
};
c1 = null;
VoiceEngineEmitter.addListener("no-input-callback", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f30609(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
require("constants").VoiceEngine.setNoInputCallback = (arg0) => {
  let closure_1 = arg0;
  return arg0;
};
f30609 = (arg0) => {
  const items = [, ];
  ({ level: arr[0], speaking: arr[1] } = arg0);
  return items;
};
c1 = null;
VoiceEngineEmitter2.addListener("on-voice", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f30609(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
require("constants").VoiceEngine.setOnVoiceCallback = (arg0) => {
  let closure_1 = arg0;
  return arg0;
};
f30609 = (muted) => {
  const items = [muted.muted];
  return items;
};
c1 = null;
VoiceEngineEmitter3.addListener("native-mute-state-changed", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f30609(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
require("constants").VoiceEngine.setOnNativeMuteChangedCallback = (arg0) => {
  let closure_1 = arg0;
  return arg0;
};
f30609 = (arg0) => {
  const items = [, , ];
  ({ inputDevices: arr[0], outputDevices: arr[1], videoInputDevices: arr[2] } = arg0);
  return items;
};
c1 = null;
VoiceEngineEmitter4.addListener("device-changed", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f30609(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
require("constants").VoiceEngine.setDeviceChangeCallback = (arg0) => {
  let closure_1 = arg0;
  return arg0;
};
f30609 = (arg0) => {
  const items = [, ];
  ({ inputVolume: arr[0], outputVolume: arr[1] } = arg0);
  return items;
};
c1 = null;
VoiceEngineEmitter5.addListener("volume-changed", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f30609(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
require("constants").VoiceEngine.setVolumeChangeCallback = (arg0) => {
  let closure_1 = arg0;
  return arg0;
};
f30609 = (arg0) => {
  const items = [, ];
  ({ streamId: arr[0], active: arr[1] } = arg0);
  return items;
};
c1 = null;
VoiceEngineEmitter6.addListener("active-sinks-change", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f30609(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
require("constants").VoiceEngine.setActiveSinksChangeCallback = (arg0) => {
  let closure_1 = arg0;
  return arg0;
};
f30609 = () => [];
c1 = null;
VoiceEngineEmitter7.addListener("on-broadcast-requested", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f30609(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
require("constants").VoiceEngine.setBroadcastRequestCallback = (arg0) => {
  let closure_1 = arg0;
  return arg0;
};
f30609 = () => [];
c1 = null;
VoiceEngineEmitter8.addListener("on-broadcast-finished", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f30609(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
require("constants").VoiceEngine.setBroadcastFinishedCallback = (arg0) => {
  let closure_1 = arg0;
  return arg0;
};
f30609 = (appBundleIdentifier) => {
  const items = [appBundleIdentifier.appBundleIdentifier];
  return items;
};
c1 = null;
VoiceEngineEmitter9.addListener("on-broadcast-annotated", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f30609(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
require("constants").VoiceEngine.setBroadcastAnnotatedCallback = (arg0) => {
  let closure_1 = arg0;
  return arg0;
};
f30609 = () => [];
c1 = null;
VoiceEngineEmitter10.addListener("on-broadcast-blocked", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f30609(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
require("constants").VoiceEngine.setBroadcastBlockedCallback = (arg0) => {
  let closure_1 = arg0;
  return arg0;
};
f30609 = (mode) => {
  const items = [mode.mode];
  return items;
};
c1 = null;
VoiceEngineEmitter11.addListener("system-microphone-mode-change", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f30609(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
require("constants").VoiceEngine.setSystemMicrophoneModeChangeCallback = (arg0) => {
  let closure_1 = arg0;
  return arg0;
};
f30609 = (error) => {
  const items = [error.error];
  return items;
};
c1 = null;
VoiceEngineEmitter12.addListener("voice-processing-error-callback", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f30609(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
require("constants").VoiceEngine.setVoiceProcessingErrorCallback = (arg0) => {
  let closure_1 = arg0;
  return arg0;
};
f30609 = (imgdata) => {
  const items = [imgdata.imgdata];
  return items;
};
c1 = null;
VoiceEngineEmitter13.addListener("on-broadcast-thumbnail", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f30609(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
const f74110 = (arg0) => {
  let closure_1 = arg0;
  return arg0;
};
require("constants").VoiceEngine.setBroadcastThumbnailCallback = (arg0, arg1, arg2, arg3) => {
  if (typeof f74110 !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const _null = arg3;
  const VoiceEngine = f30609(_null[2]).VoiceEngine;
  const result = VoiceEngine.setBroadcastThumbnailParams(arg0, arg1, arg2);
};
f30609 = (arg0) => {
  const items = [arg0];
  return items;
};
c1 = null;
VoiceEngineEmitter14.addListener("audio-input-initialized", (arg0) => {
  let applyResult;
  if (c1 != null) {
    const items = [];
    HermesBuiltin.arraySpread(f30609(arg0), 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
});
require("constants").VoiceEngine.setAudioInputInitializationCallback = (arg0) => {
  let closure_1 = arg0;
  return arg0;
};
VoiceEngine2.initializeEngine();
let result = require("constants").fileFinishedImporting("../discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx");

export { VoiceEngine as default } from "constants";