// discord_app/hooks/useForwardedRef.tsx
import react from "../../_runtime/00019_react.js";
import size from "../../_runtime/metro/00002__.js";

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
    }, items),
  ];
  return items1;
}
