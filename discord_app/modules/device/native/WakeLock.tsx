// === Module 9569: WakeLock ===

// Module 9569 (WakeLock)
import closure_3 from "noop" /* 19 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/device/native/WakeLock.tsx");

export default function WakeLock(wakeLockKey) {
  wakeLockKey = wakeLockKey.wakeLockKey;
  const items = [wakeLockKey];
  const effect = React.useEffect(() => {
    if (obj.isAndroid()) {
      const lock = closure_1_1(closure_1_2[3]).requestLock(wakeLockKey);
      let obj2 = closure_1_1(closure_1_2[3]);
    } else {
      let ScreenWakeLockManager = closure_1_4.ScreenWakeLockManager;
      const lock1 = ScreenWakeLockManager.requestLock(wakeLockKey);
    }
    return () => {
      if (obj.isAndroid()) {
        closure_1_1(closure_1_2[3]).releaseLock(closure_0);
        const obj2 = closure_1_1(closure_1_2[3]);
      } else {
        const ScreenWakeLockManager = closure_1_4.ScreenWakeLockManager;
        ScreenWakeLockManager.releaseLock(closure_0);
      }
    };
  }, items);
  return null;
};
export const useWakeLock = function useWakeLock(VoiceMessageOverlay) {
  closure_0 = VoiceMessageOverlay;
  const items = [VoiceMessageOverlay];
  const effect = React.useEffect(() => {
    if (obj.isAndroid()) {
      const lock = closure_1_1(closure_1_2[3]).requestLock(wakeLockKey);
      let obj2 = closure_1_1(closure_1_2[3]);
    } else {
      let ScreenWakeLockManager = closure_1_4.ScreenWakeLockManager;
      const lock1 = ScreenWakeLockManager.requestLock(wakeLockKey);
    }
    return () => {
      if (obj.isAndroid()) {
        closure_1_1(closure_1_2[3]).releaseLock(closure_0);
        const obj2 = closure_1_1(closure_1_2[3]);
      } else {
        const ScreenWakeLockManager = closure_1_4.ScreenWakeLockManager;
        ScreenWakeLockManager.releaseLock(closure_0);
      }
    };
  }, items);
};