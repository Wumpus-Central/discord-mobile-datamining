// === Module 5219: ? ===

// Module 5219
import _mod5217 from "module_5217" /* 5217 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const findNodeHandle = fn(17).findNodeHandle;

export const useRenderDebugInfo = function useRenderDebugInfo(arg0) {
  _require = arg0;
  const ref = ref1.useRef(null);
  ref1 = ref1.useRef(-1);
  closure_3 = ref1.useEffectEvent((arg0) => {
    const RNSLog = _mod5217.RNSLog;
    RNSLog.log("" + closure_0 + " [" + ref1.current + "] " + arg0);
  });
  const effect = ref1.useEffect(() => {
    if (null != ref.current) {
      let num = findNodeHandle(tmp.current);
      if (num == null) {
        num = -1;
      }
      ref1.current = num;
      if (-1 === ref1.current) {
        closure_3("failed to find node handle");
      }
    }
    closure_3("mounted");
    return () => {
      closure_1_3("unmounted");
    };
  }, []);
  let RNSLog = require("module_5217").RNSLog;
  RNSLog.log("" + arg0 + " [" + ref1.current + "] " + "rendered");
  return ref;
};