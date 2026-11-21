// === Module 10830: WakeLock ===

// Module 10830 (WakeLock)
import NativeScreenWakeLockModuleDefault from "NativeScreenWakeLockModule" /* 10831 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/device/native/WakeLock.tsx");

export default function WakeLock(wakeLockKey) {
  wakeLockKey = wakeLockKey.wakeLockKey;
  items = [wakeLockKey];
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
  items = [VoiceMessageOverlay];
  const effect = noop.useEffect(() => {
    const lock = NativeScreenWakeLockModuleDefault.requestLock(wakeLockKey);
    return () => {
      wakeLockKey(dependencyMap[1]).releaseLock(closure_1_0);
    };
  }, items);
}