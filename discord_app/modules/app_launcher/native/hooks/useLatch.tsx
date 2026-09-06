// === Module 12159: useLatch ===

// Module 12159 (useLatch)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useLatch.tsx");

export default function useLatch(arg0) {
  closure_0 = arg0;
  noop.useRef(false);
  const obj = {
    setLatch: noop.useCallback((current) => {
      closure_1.current = current;
      return current;
    }, []),
    tryCallback: null
  };
  const items = [arg0];
  obj.tryCallback = noop.useCallback(() => {
    if (ref.current) {
      tmp.current = false;
      closure_0();
    }
  }, items);
  return obj;
};