// === Module 11460: useLatch ===

// Module 11460 (useLatch)
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/app_launcher/native/hooks/useLatch.tsx");

export default function useLatch(arg0) {
  const React = arg0;
  let closure_1 = React.useRef(false);
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