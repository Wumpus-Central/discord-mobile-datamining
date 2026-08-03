// === Module 10674: NativeModules ===

// Module 10674 (NativeModules)
import get_ActivityIndicator from "get ActivityIndicator";
import set from "set";
import keys from "keys";
import set from "enforcing";

const NativeModules = get_ActivityIndicator.NativeModules;
if (set.isAndroid()) {
  let DCDDeviceThermalStateManager = require("enforcing");
} else {
  DCDDeviceThermalStateManager = NativeModules.DCDDeviceThermalStateManager;
}
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(DCDDeviceThermalStateManager);
let closure_5 = keys.create((arg0) => {
  const _require = arg0;
  let thermalState = dependencyMap;
  if (obj.isAndroid()) {
    if (tmpResult.getSystemVersionMajor() >= 29) {
      thermalState = importDefault(10675).getThermalState();
      let resolved = Promise.resolve(thermalState);
      const obj3 = importDefault(10675);
    } else {
      resolved = Promise.resolve(undefined);
    }
    tmpResult = _require(4235);
  } else {
    const DCDDeviceThermalStateManager = NativeModules.DCDDeviceThermalStateManager;
    const thermalState1 = DCDDeviceThermalStateManager.getThermalState();
    thermalState1.then(function updateThermalState(arg0) {
      const callback = arg0;
      callback(outer1_2[5]).batchUpdates(() => state((rawThermalState) => {
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
      callback(outer1_2[5]).batchUpdates(() => state((rawThermalState) => {
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