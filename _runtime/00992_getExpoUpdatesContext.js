// === Module 992: getExpoUpdatesContext ===

// Module 992 (getExpoUpdatesContext)
import getExpoConstants from "getExpoConstants" /* 868 */;

require = arg1;
const dependencyMap = arg6;
function getExpoUpdatesContext() {
  let obj = getExpoConstants;
  const expoUpdates = obj.getExpoUpdates();
  if (expoUpdates) {
    obj = { is_enabled: null, is_embedded_launch: null, is_emergency_launch: null, is_using_embedded_assets: null };
    obj[0] = expoUpdates.isEnabled;
    obj[1] = expoUpdates.isEmbeddedLaunch;
    obj[2] = expoUpdates.isEmergencyLaunch;
    obj[3] = expoUpdates.isUsingEmbeddedAssets;
    const updateId = expoUpdates.updateId;
    let updateId2 = typeof updateId === "string";
    if (typeof updateId === "string") {
      updateId2 = expoUpdates.updateId;
    }
    if (updateId2) {
      obj.update_id = expoUpdates.updateId.toLowerCase();
      const str = expoUpdates.updateId;
    }
    const channel = expoUpdates.channel;
    let channel2 = typeof channel === "string";
    if (typeof channel === "string") {
      channel2 = expoUpdates.channel;
    }
    if (channel2) {
      obj.channel = expoUpdates.channel.toLowerCase();
      const str2 = expoUpdates.channel;
    }
    const runtimeVersion = expoUpdates.runtimeVersion;
    let runtimeVersion2 = typeof runtimeVersion === "string";
    if (typeof runtimeVersion === "string") {
      runtimeVersion2 = expoUpdates.runtimeVersion;
    }
    if (runtimeVersion2) {
      obj.runtime_version = expoUpdates.runtimeVersion.toLowerCase();
      const str3 = expoUpdates.runtimeVersion;
    }
    const checkAutomatically = expoUpdates.checkAutomatically;
    let checkAutomatically2 = typeof checkAutomatically === "string";
    if (typeof checkAutomatically === "string") {
      checkAutomatically2 = expoUpdates.checkAutomatically;
    }
    if (checkAutomatically2) {
      obj.check_automatically = expoUpdates.checkAutomatically.toLowerCase();
      const str4 = expoUpdates.checkAutomatically;
    }
    const emergencyLaunchReason = expoUpdates.emergencyLaunchReason;
    let emergencyLaunchReason2 = typeof emergencyLaunchReason === "string";
    if (typeof emergencyLaunchReason === "string") {
      emergencyLaunchReason2 = expoUpdates.emergencyLaunchReason;
    }
    if (emergencyLaunchReason2) {
      obj.emergency_launch_reason = expoUpdates.emergencyLaunchReason;
    }
    if (typeof expoUpdates.launchDuration === "number") {
      obj.launch_duration = expoUpdates.launchDuration;
    }
    const _Date = Date;
    if (expoUpdates.createdAt instanceof Date) {
      const createdAt = expoUpdates.createdAt;
      obj.created_at = createdAt.toISOString();
    }
    return obj;
  } else {
    return { is_enabled: false };
  }
}
const ota_updates = "ota_updates";
arg5.OTA_UPDATES_CONTEXT_KEY = "ota_updates";
arg5.expoContextIntegration = () => {
  function getExpoUpdatesContextCached() {
    let tmp = closure_0;
    if (!closure_0) {
      const tmp3 = closure_1_3();
      closure_0 = tmp3;
      tmp = tmp3;
    }
    return tmp;
  }
  return {
    name: "ExpoContext",
    setup(on) {
      closure_0 = on;
      on.on("afterInit", () => {
        if (options.getOptions().enableNative) {
          (function setExpoUpdatesNativeContext() {
            if (obj.isExpo()) {
              if (!tmp4Result.isExpoGo()) {
                try {
                  const NATIVE = tmp4(tmp5[1]).NATIVE;
                  NATIVE.setContext(closure_1_2, tmp7);
                } catch (tmp10) {
                  const debug = tmp3(tmp2[2]).debug;
                  debug.error("Error setting Expo updates context:", tmp10);
                }
              }
              tmp4Result = tmp4(tmp5[0]);
            }
          })();
        }
      });
    },
    processEvent(contexts) {
      let obj = closure_1_0(getExpoUpdatesContextCached[0]);
      if (obj.isExpo()) {
        let tmpResult = tmp(tmp2[0]);
        if (tmpResult.isExpoGo()) {
          tmpResult = tmp(tmp2[3]);
          const expoDevice = tmpResult.getExpoDevice();
          let tmp4;
          if (expoDevice) {
            obj = { name: null, simulator: null, model: null, manufacturer: null, memory_size: null };
            obj[0] = expoDevice.deviceName;
            let isDevice;
            if (null != expoDevice) {
              isDevice = expoDevice.isDevice;
            }
            obj[1] = !isDevice;
            ({ modelName: obj4[2], manufacturer: obj4[3], totalMemory: obj4[4] } = expoDevice);
            tmp4 = obj;
          }
          if (tmp4) {
            contexts.contexts = contexts.contexts || {};
            const _Object = Object;
            const _Object2 = Object;
            contexts.contexts.device = Object.assign(Object.assign({}, tmp4), contexts.contexts.device);
          }
          const expoDevice1 = tmp(tmp2[3]).getExpoDevice();
          let tmp9;
          if (expoDevice1) {
            obj = { build: null, version: null, name: null };
            ({ osBuildId: obj6[0], osVersion: obj6[1], osName: obj6[2] } = expoDevice1);
            tmp9 = obj;
          }
          if (tmp9) {
            contexts.contexts = contexts.contexts || {};
            const _Object3 = Object;
            const _Object4 = Object;
            contexts.contexts.os = Object.assign(Object.assign({}, tmp9), contexts.contexts.os);
          }
          const tmpResult1 = tmp(tmp2[3]);
        }
        contexts.contexts = contexts.contexts || {};
        let tmp13 = closure_0;
        if (!closure_0) {
          const tmp15 = closure_1_3();
          closure_0 = tmp15;
          tmp13 = tmp15;
        }
        contexts.contexts[closure_1_2] = Object.assign({}, tmp13);
        const tmp11 = closure_1_2;
      }
      return contexts;
    }
  };
};
arg5.getExpoUpdatesContext = getExpoUpdatesContext;