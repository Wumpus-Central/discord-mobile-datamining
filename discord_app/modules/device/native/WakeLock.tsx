// === Module 9180: WakeLock ===

// Module 9180 (WakeLock)
import react_nativeDefault from "react-native" /* 9181 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] !== arg0) {
    const fn = function n() {
      let obj = react_nativeDefault;
      const lock = obj.requestLock(closure_0);
      return () => {
        const obj = react_nativeDefault;
        obj.releaseLock(closure_1_0);
      };
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    let obj = react_nativeDefault;
    const lock = obj.requestLock(closure_0);
    return () => {
      const obj = react_nativeDefault;
      obj.releaseLock(closure_1_0);
    };
  }, items);
});
let closure_4 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((wakeLockKey) => {
  closure_4(wakeLockKey.wakeLockKey);
  return null;
}) : ((wakeLockKey) => {
  closure_4(wakeLockKey.wakeLockKey);
  return null;
});
const result = size.fileFinishedImporting("modules/device/native/WakeLock.tsx");

export default tmp3;
export const useWakeLock = tmp2;