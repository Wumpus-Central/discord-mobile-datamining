// === Module 9180: WakeLock ===

// Module 9180 (WakeLock)
import NativeScreenWakeLockModuleDefault from "NativeScreenWakeLockModule" /* 9181 */;
import noop from "module_19" /* 19 */;

const require = fn;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] !== arg0) {
    const fn = function n() {
      const lock = NativeScreenWakeLockModuleDefault.requestLock(closure_0);
      return () => {
        NativeScreenWakeLockModuleDefault.releaseLock(closure_1_0);
      };
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  const effect = noop.useEffect(() => {
    const lock = NativeScreenWakeLockModuleDefault.requestLock(closure_0);
    return () => {
      NativeScreenWakeLockModuleDefault.releaseLock(closure_1_0);
    };
  }, items);
});
let closure_4 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/device/native/WakeLock.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((wakeLockKey) => {
  closure_4(wakeLockKey.wakeLockKey);
  return null;
}) : ((wakeLockKey) => {
  closure_4(wakeLockKey.wakeLockKey);
  return null;
});
export const useWakeLock = tmp2;