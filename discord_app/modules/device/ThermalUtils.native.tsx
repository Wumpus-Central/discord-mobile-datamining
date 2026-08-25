// === Module 10693: NativeModules ===

// Module 10693 (NativeModules)
import enforcingDefault from "enforcing" /* 10694 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import set from "set" /* 500 */;
import keys from "keys" /* 644 */;

const NativeModules = get_ActivityIndicator.NativeModules;
if (set.isAndroid()) {
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
      const obj3 = enforcingDefault;
    } else {
      resolved = Promise.resolve(undefined);
    }
    tmpResult = _require(4359);
  } else {
    const DCDDeviceThermalStateManager = NativeModules.DCDDeviceThermalStateManager;
    const thermalState1 = DCDDeviceThermalStateManager.getThermalState();
    thermalState1.then(function updateThermalState(arg0) {
      const callback = arg0;
      callback(closure_1_2[5]).batchUpdates(() => state((rawThermalState) => {
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
      callback(closure_1_2[5]).batchUpdates(() => state((rawThermalState) => {
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
});
const result = set.fileFinishedImporting("modules/device/ThermalUtils.native.tsx");

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