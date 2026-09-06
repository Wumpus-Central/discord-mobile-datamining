// _runtime/00992_expoContextIntegration.js
import _mod867 from "metro/00867__.js";
import _mod868 from "metro/00868__.js";

require = arg1;
const dependencyMap = arg6;
function getExpoUpdatesContext() {
  let obj = _mod868;
  const expoUpdates = obj.getExpoUpdates();
  if (expoUpdates) {
    obj = { is_enabled: expoUpdates.isEnabled, is_embedded_launch: expoUpdates.isEmbeddedLaunch, is_emergency_launch: expoUpdates.isEmergencyLaunch, is_using_embedded_assets: expoUpdates.isUsingEmbeddedAssets };
    const updateId = expoUpdates.updateId;
    let updateId2 = typeof updateId === "string";
    if (typeof updateId === "string") {
      updateId2 = expoUpdates.updateId;
    }
    if (updateId2) {
      obj.update_id = expoUpdates.updateId.toLowerCase();
    }
    const channel = expoUpdates.channel;
    let channel2 = typeof channel === "string";
    if (typeof channel === "string") {
      channel2 = expoUpdates.channel;
    }
    if (channel2) {
      obj.channel = expoUpdates.channel.toLowerCase();
    }
    const runtimeVersion = expoUpdates.runtimeVersion;
    let runtimeVersion2 = typeof runtimeVersion === "string";
    if (typeof runtimeVersion === "string") {
      runtimeVersion2 = expoUpdates.runtimeVersion;
    }
    if (runtimeVersion2) {
      obj.runtime_version = expoUpdates.runtimeVersion.toLowerCase();
    }
    const checkAutomatically = expoUpdates.checkAutomatically;
    let checkAutomatically2 = typeof checkAutomatically === "string";
    if (typeof checkAutomatically === "string") {
      checkAutomatically2 = expoUpdates.checkAutomatically;
    }
    if (checkAutomatically2) {
      obj.check_automatically = expoUpdates.checkAutomatically.toLowerCase();
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

export const OTA_UPDATES_CONTEXT_KEY = "ota_updates";
export () => {
  function getExpoUpdatesContextCached() {
    let tmp = closure_0;
    if (!closure_0) {
      const tmp3 = getExpoUpdatesContext();
      closure_0 = tmp3;
      tmp = tmp3;
    }
    return tmp;
  }
  return {
    name: "ExpoContext",
    setup(on) {
      const options = on;
      on.on("afterInit", () => {
        if (options.getOptions().enableNative) {
          (function setExpoUpdatesNativeContext() {
            if (obj.isExpo()) {
              if (!tmp4Result.isExpoGo()) {
                try {
                  const NATIVE = closure_0(getExpoUpdatesContextCached[1]).NATIVE;
                  NATIVE.setContext(closure_2_2, tmp7);
                } catch (tmp10) {
                  const debug = tmp3(tmp2[2]).debug;
                  debug.error("Error setting Expo updates context:", tmp10);
                }
              }
              tmp4Result = closure_0(getExpoUpdatesContextCached[0]);
            }
            obj = closure_0(getExpoUpdatesContextCached[0]);
          })();
        }
      });
    },
    processEvent(contexts) {
      let obj = _mod867;
      if (obj.isExpo()) {
        let tmpResult = _mod867;
        if (tmpResult.isExpoGo()) {
          tmpResult = _mod868;
          const expoDevice = tmpResult.getExpoDevice();
          let tmp4;
          if (expoDevice) {
            obj = { name: expoDevice.deviceName, simulator: null, model: null, manufacturer: null, memory_size: null };
            let isDevice;
            if (null != expoDevice) {
              isDevice = expoDevice.isDevice;
            }
            obj.simulator = !isDevice;
            ({ modelName: obj4.model, manufacturer: obj4.manufacturer, totalMemory: obj4.memory_size } = expoDevice);
            tmp4 = obj;
          }
          if (tmp4) {
            contexts.contexts = contexts.contexts || {};
            const _Object = Object;
            const _Object2 = Object;
            contexts.contexts.device = Object.assign(Object.assign({}, tmp4), contexts.contexts.device);
          }
          const expoDevice1 = _mod868.getExpoDevice();
          let tmp9;
          if (expoDevice1) {
            obj = { build: null, version: null, name: null };
            ({ osBuildId: obj6.build, osVersion: obj6.version, osName: obj6.name } = expoDevice1);
            tmp9 = obj;
          }
          if (tmp9) {
            contexts.contexts = contexts.contexts || {};
            const _Object3 = Object;
            const _Object4 = Object;
            contexts.contexts.os = Object.assign(Object.assign({}, tmp9), contexts.contexts.os);
          }
          const tmpResult1 = _mod868;
        }
        contexts.contexts = contexts.contexts || {};
        let tmp13 = closure_0;
        if (!closure_0) {
          const tmp15 = getExpoUpdatesContext();
          closure_0 = tmp15;
          tmp13 = tmp15;
        }
        contexts.contexts[ota_updates] = Object.assign({}, tmp13);
      }
      return contexts;
    }
  };
}
export { getExpoUpdatesContext };