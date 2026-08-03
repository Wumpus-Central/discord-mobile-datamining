// === Module 10673: WakeLock ===

// Module 10673 (WakeLock)
import noop from "noop";
import { NativeModules } from "get ActivityIndicator";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/device/native/WakeLock.tsx");

export default function WakeLock(wakeLockKey) {
  wakeLockKey = wakeLockKey.wakeLockKey;
  const items = [wakeLockKey];
  const effect = React.useEffect(() => {
    if (obj.isAndroid()) {
      const lock = outer1_1(outer1_2[3]).requestLock(wakeLockKey);
      let obj2 = outer1_1(outer1_2[3]);
    } else {
      let ScreenWakeLockManager = outer1_4.ScreenWakeLockManager;
      const lock1 = ScreenWakeLockManager.requestLock(wakeLockKey);
    }
    return () => {
      if (obj.isAndroid()) {
        outer1_1(outer1_2[3]).releaseLock(closure_0);
        const obj2 = outer1_1(outer1_2[3]);
      } else {
        const ScreenWakeLockManager = outer1_4.ScreenWakeLockManager;
        ScreenWakeLockManager.releaseLock(closure_0);
      }
    };
  }, items);
  return null;
};
export const useWakeLock = function useWakeLock(VoiceMessageOverlay) {
  let closure_0 = VoiceMessageOverlay;
  const items = [VoiceMessageOverlay];
  const effect = React.useEffect(() => {
    if (obj.isAndroid()) {
      const lock = outer1_1(outer1_2[3]).requestLock(wakeLockKey);
      let obj2 = outer1_1(outer1_2[3]);
    } else {
      let ScreenWakeLockManager = outer1_4.ScreenWakeLockManager;
      const lock1 = ScreenWakeLockManager.requestLock(wakeLockKey);
    }
    return () => {
      if (obj.isAndroid()) {
        outer1_1(outer1_2[3]).releaseLock(closure_0);
        const obj2 = outer1_1(outer1_2[3]);
      } else {
        const ScreenWakeLockManager = outer1_4.ScreenWakeLockManager;
        ScreenWakeLockManager.releaseLock(closure_0);
      }
    };
  }, items);
};