// === Module 11799: WakeLock ===

// Module 11799 (WakeLock)
import NativeScreenWakeLockModuleDefault from "NativeScreenWakeLockModule" /* 11800 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/device/native/WakeLock.tsx");

export default function WakeLock(wakeLockKey) {
  wakeLockKey = wakeLockKey.wakeLockKey;
  const items = [wakeLockKey];
  const effect = noop.useEffect(() => {
    const lock = NativeScreenWakeLockModuleDefault.requestLock(wakeLockKey);
    return () => {
      wakeLockKey(dependencyMap[1]).releaseLock(closure_1_0);
    };
  }, items);
  return null;
};
export function useWakeLock(VoiceMessageOverlay) {
  closure_0 = VoiceMessageOverlay;
  const items = [VoiceMessageOverlay];
  const effect = noop.useEffect(() => {
    const lock = NativeScreenWakeLockModuleDefault.requestLock(wakeLockKey);
    return () => {
      wakeLockKey(dependencyMap[1]).releaseLock(closure_1_0);
    };
  }, items);
}