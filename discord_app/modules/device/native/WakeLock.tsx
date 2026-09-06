// discord_app/modules/device/native/WakeLock.tsx
import NativeScreenWakeLockModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeScreenWakeLockModule.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const NativeModules = fn(17).NativeModules;
const size = fn(2);
const result = size.fileFinishedImporting("modules/device/native/WakeLock.tsx");

export default function WakeLock(wakeLockKey) {
  wakeLockKey = wakeLockKey.wakeLockKey;
  const items = [wakeLockKey];
  const effect = noop.useEffect(() => {
    if (obj.isAndroid()) {
      const lock = NativeScreenWakeLockModuleDefault.requestLock(wakeLockKey);
    } else {
      let ScreenWakeLockManager = NativeModules.ScreenWakeLockManager;
      const lock1 = ScreenWakeLockManager.requestLock(wakeLockKey);
    }
    return () => {
      if (obj.isAndroid()) {
        NativeScreenWakeLockModuleDefault.releaseLock(closure_1_0);
      } else {
        const ScreenWakeLockManager = NativeModules.ScreenWakeLockManager;
        ScreenWakeLockManager.releaseLock(closure_1_0);
      }
      obj = wakeLockKey(dependencyMap[2]);
    };
  }, items);
  return null;
}
export const useWakeLock = function useWakeLock(VoiceMessageOverlay) {
  closure_0 = VoiceMessageOverlay;
  const items = [VoiceMessageOverlay];
  const effect = noop.useEffect(() => {
    if (obj.isAndroid()) {
      const lock = NativeScreenWakeLockModuleDefault.requestLock(wakeLockKey);
    } else {
      let ScreenWakeLockManager = NativeModules.ScreenWakeLockManager;
      const lock1 = ScreenWakeLockManager.requestLock(wakeLockKey);
    }
    return () => {
      if (obj.isAndroid()) {
        NativeScreenWakeLockModuleDefault.releaseLock(closure_1_0);
      } else {
        const ScreenWakeLockManager = NativeModules.ScreenWakeLockManager;
        ScreenWakeLockManager.releaseLock(closure_1_0);
      }
      obj = wakeLockKey(dependencyMap[2]);
    };
  }, items);
};
