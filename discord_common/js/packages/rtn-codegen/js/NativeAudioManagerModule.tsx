// discord_common/js/packages/rtn-codegen/js/NativeAudioManagerModule.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import size from "../../../../../_runtime/metro/00002__.js";

const TurboModuleRegistry = react_native.TurboModuleRegistry;
const AudioDeviceType = {
  SPEAKERPHONE: "SPEAKERPHONE",
  WIRED_HEADSET: "WIRED_HEADSET",
  EARPIECE: "EARPIECE",
  BLUETOOTH_HEADSET: "BLUETOOTH_HEADSET",
  INVALID: "INVALID",
};
const enforcing = TurboModuleRegistry.getEnforcing("NativeAudioManagerModule");
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAudioManagerModule.tsx");

export default enforcing;
export { AudioDeviceType };
export const getInvalidAndroidDevice = function getInvalidAndroidDevice() {
  let obj;
  obj = { deviceType: 0, simpleDeviceType: obj.INVALID, deviceId: -1, deviceName: "Invalid" };
  return obj;
};
