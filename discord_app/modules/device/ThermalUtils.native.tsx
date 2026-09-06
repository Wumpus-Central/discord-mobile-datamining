// === Module 9521: ThermalUtils ===

// Module 9521 (ThermalUtils)
import NativeDeviceThermalStateModuleDefault from "NativeDeviceThermalStateModule" /* 9522 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const NativeModules = get_ActivityIndicator.NativeModules;
if (PlatformUtils.isAndroid()) {
  let DCDDeviceThermalStateManager = NativeDeviceThermalStateModuleDefault;
} else {
  DCDDeviceThermalStateManager = NativeModules.DCDDeviceThermalStateManager;
}
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(DCDDeviceThermalStateManager);
let closure_5 = module_560.create((arg0) => {
  _require = arg0;
  let thermalState = dependencyMap;
  if (obj.isAndroid()) {
    if (tmpResult.getSystemVersionMajor() >= 29) {
      thermalState = NativeDeviceThermalStateModuleDefault.getThermalState();
      let resolved = Promise.resolve(thermalState);
    } else {
      resolved = Promise.resolve(undefined);
    }
    tmpResult = require("DeviceUtils");
  } else {
    const DCDDeviceThermalStateManager = NativeModules.DCDDeviceThermalStateManager;
    const thermalState1 = DCDDeviceThermalStateManager.getThermalState();
    thermalState1.then(function updateThermalState(result) {
      closure_0 = result;
      closure_0(1249).batchUpdates(() => state((rawThermalState) => {
        let tmp = rawThermalState;
        if (rawThermalState.rawThermalState !== state) {
          const obj = { rawThermalState: tmp2 };
          tmp = obj;
        }
        return tmp;
      }));
    });
    nativeEventEmitter.addListener("DeviceThermalStateDidChange", (state) => {
      state = state.state;
      state(1249).batchUpdates(() => state((rawThermalState) => {
        let tmp = rawThermalState;
        if (rawThermalState.rawThermalState !== state) {
          const obj = { rawThermalState: tmp2 };
          tmp = obj;
        }
        return tmp;
      }));
    });
    return { rawThermalState: "Array" };
  }
});
const result = size.fileFinishedImporting("modules/device/ThermalUtils.native.tsx");

export default {
  getRawThermalState() {
    return closure_5.getState().rawThermalState;
  },
  useRawThermalState() {
    return closure_5((rawThermalState) => rawThermalState.rawThermalState);
  },
  addListener(arg0) {
    return { remove: closure_5.subscribe(arg0) };
  }
};