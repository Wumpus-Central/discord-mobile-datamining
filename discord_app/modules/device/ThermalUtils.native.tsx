// === Module 5296: ThermalUtils ===

// Module 5296 (ThermalUtils)
import _mod17 from "module_17" /* 17 */;
import NativeDeviceThermalStateModuleDefault from "NativeDeviceThermalStateModule" /* 5297 */;
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const nativeEventEmitter = new _mod17.NativeEventEmitter(NativeDeviceThermalStateModuleDefault);
let closure_4 = module_570.create((arg0) => {
  _require = arg0;
  nativeEventEmitter.addListener("DeviceThermalStateDidChange", (state) => {
    state = state.state;
    state(dependencyMap[5]).batchUpdates(() => state((rawThermalState) => {
      let tmp = rawThermalState;
      if (rawThermalState.rawThermalState !== state) {
        const obj = { rawThermalState: tmp2 };
        tmp = obj;
      }
      return tmp;
    }));
  });
  if (!obj.isAndroid()) {
    const thermalState = NativeDeviceThermalStateModuleDefault.getThermalState();
    const rawThermalState = thermalState;
  } else {
    require("DeviceUtils");
  }
  return { rawThermalState };
});
const result = size.fileFinishedImporting("modules/device/ThermalUtils.native.tsx");

export default {
  getRawThermalState() {
    return closure_4.getState().rawThermalState;
  },
  useRawThermalState() {
    return closure_4((rawThermalState) => rawThermalState.rawThermalState);
  },
  addListener(arg0) {
    return { remove: closure_4.subscribe(arg0) };
  }
};