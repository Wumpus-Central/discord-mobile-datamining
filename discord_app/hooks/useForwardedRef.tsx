// === Module 16188: react ===

// Module 16188 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("hooks/useForwardedRef.tsx");

export default function useForwardedRef(arg0) {
  let closure_0 = arg0;
  const ref = react.useRef(null);
  const items = [arg0];
  const items1 = [
    ref,
    react.useCallback((current) => {
      if (null != closure_0) {
        if (typeof closure_0 === "function") {
          closure_0(current);
        } else {
          closure_0.current = current;
        }
        ref.current = current;
      }
    }, items)
  ];
  return items1;
};