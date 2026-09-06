// discord_app/modules/device/ThermalUtils.native.tsx
import NativeDeviceThermalStateModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceThermalStateModule.tsx";
import get_ActivityIndicator from "../../../_runtime/metro/00017__.js";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import 00560__ from "../../../_runtime/metro/00560__.js";
import size from "../../../_runtime/metro/00002__.js";

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
    tmpResult = tmp(4539);
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
  obj = require("PlatformUtils");
  tmp = _require;
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