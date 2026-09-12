// discord_app/modules/device/ThermalUtils.native.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import NativeDeviceThermalStateModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceThermalStateModule.tsx";
import 00560__ from "../../../_runtime/metro/00560__.js";
import size from "../../../_runtime/metro/00002__.js";

const nativeEventEmitter = new _mod17.NativeEventEmitter(NativeDeviceThermalStateModuleDefault);
let closure_4 = module_560.create((arg0) => {
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