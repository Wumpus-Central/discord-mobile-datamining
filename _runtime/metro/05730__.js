// _runtime/metro/05730__.js
import react_native from "../00017_react-native.js";
import _mod5728 from "05728__.js";
import react from "../00019_react.js";

const require = globalThis.__r;
let _require;

const findNodeHandle = react_native.findNodeHandle;

export const useRenderDebugInfo = function useRenderDebugInfo(arg0) {
  let closure_0;
  let ref1;
  _require = arg0;
  const ref = ref1.useRef(null);
  ref1 = ref1.useRef(-1);
  let closure_3 = ref1.useEffectEvent((arg0) => {
    const current = ref1.current;
    const RNSLog = _mod5728.RNSLog;
    RNSLog.log("" + closure_0 + " [" + current + "] " + arg0);
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
  let current = ref1.current;
  let RNSLog = require("05728__.js").RNSLog;
  RNSLog.log("" + arg0 + " [" + current + "] " + "rendered");
  return ref;
};
