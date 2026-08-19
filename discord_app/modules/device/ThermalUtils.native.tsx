// discord_app/modules/device/ThermalUtils.native.tsx
import enforcingDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceThermalStateModule.tsx";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import obj132 from "../../utils/PlatformUtils.tsx";
import keys from "../../../_runtime/00644_keys.js";
import { obj132 } from "../../utils/PlatformUtils.tsx";

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
  obj = obj132;
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