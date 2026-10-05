// === Module 8984: ThermalUtils ===

// Module 8984 (ThermalUtils)
import react_native from "react-native" /* 17 */;
import react_nativeDefault from "react-native" /* 8985 */;
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, state;

const nativeEventEmitter = new react_native.NativeEventEmitter(react_nativeDefault);
let closure_4 = module_570.create((arg0) => {
  let closure_0;
  let rawThermalState;
  _require = arg0;
  nativeEventEmitter.addListener("DeviceThermalStateDidChange", (state) => {
    state = state.state;
    let obj = state(dependencyMap[5]);
    obj.batchUpdates(() => state((rawThermalState) => {
      let tmp = rawThermalState;
      if (rawThermalState.rawThermalState !== state) {
        tmp = { rawThermalState: tmp2 };
        const obj = { rawThermalState: tmp2 };
      }
      return tmp;
    }));
  });
  const tmp2 = _require;
  let obj = require("PlatformUtils");
  if (!obj.isAndroid()) {
    const obj3 = react_nativeDefault;
    const thermalState = obj3.getThermalState();
    rawThermalState = thermalState;
  } else {
    tmp2(4866);
  }
  return { rawThermalState };
});
let obj = {
  getRawThermalState() {
    return closure_4.getState().rawThermalState;
  },
  useRawThermalState() {
    return closure_4((rawThermalState) => rawThermalState.rawThermalState);
  },
  addListener(arg0) {
    const obj = { remove: closure_4.subscribe(arg0) };
    return obj;
  }
};
const result = size.fileFinishedImporting("modules/device/ThermalUtils.native.tsx");

export default obj;