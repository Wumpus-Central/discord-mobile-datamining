// === Module 11337: useLatch ===

// Module 11337 (useLatch)
import noop from "noop" /* 19 */;

const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/hooks/useLatch.tsx");

export default function useLatch(arg0) {
  const React = arg0;
  closure_1 = React.useRef(false);
  const items = [arg0];
  return {
    setLatch: React.useCallback((current) => {
      closure_1.current = current;
      return current;
    }, []),
    tryCallback: React.useCallback(() => {
      if (ref.current) {
        tmp.current = false;
        callback();
      }
    }, items)
  };
};