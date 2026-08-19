// === Module 8720: NativeModules ===

// Module 8720 (NativeModules)
import enforcingDefault from "enforcing" /* 8721 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj132 from "obj132" /* 500 */;
import keys from "keys" /* 644 */;

const NativeModules = get_ActivityIndicator.NativeModules;
if (obj132.isAndroid()) {
  let DCDDeviceThermalStateManager = enforcingDefault;
} else {
  DCDDeviceThermalStateManager = NativeModules.DCDDeviceThermalStateManager;
}
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(DCDDeviceThermalStateManager);
let closure_5 = keys.create((arg0) => {
  const _require = arg0;
  let thermalState = dependencyMap;
  if (obj.isAndroid()) {
    if (tmpResult.getSystemVersionMajor() >= 29) {
      thermalState = enforcingDefault.getThermalState();
      let resolved = Promise.resolve(thermalState);
    } else {
      resolved = Promise.resolve(undefined);
    }
    tmpResult = tmp(4354);
  } else {
    const DCDDeviceThermalStateManager = NativeModules.DCDDeviceThermalStateManager;
    const thermalState1 = DCDDeviceThermalStateManager.getThermalState();
    thermalState1.then(function updateThermalState(result) {
      const callback = result;
      callback(dependencyMap[5]).batchUpdates(() => state((rawThermalState) => {
        let tmp = rawThermalState;
        if (rawThermalState.rawThermalState !== closure_0) {
          const obj = { rawThermalState: null };
          obj[0] = tmp2;
          tmp = obj;
        }
        return tmp;
      }));
    });
    nativeEventEmitter.addListener("DeviceThermalStateDidChange", (state) => {
      state = state.state;
      callback(dependencyMap[5]).batchUpdates(() => state((rawThermalState) => {
        let tmp = rawThermalState;
        if (rawThermalState.rawThermalState !== closure_0) {
          const obj = { rawThermalState: null };
          obj[0] = tmp2;
          tmp = obj;
        }
        return tmp;
      }));
    });
    return { rawThermalState: "r" };
  }
  obj = _require(500);
  tmp = _require;
});
const result = obj132.fileFinishedImporting("modules/device/ThermalUtils.native.tsx");

export default {
  getRawThermalState() {
    return lib.getState().rawThermalState;
  },
  useRawThermalState() {
    return lib((rawThermalState) => rawThermalState.rawThermalState);
  },
  addListener(arg0) {
    return { remove: lib.subscribe(arg0) };
  }
};