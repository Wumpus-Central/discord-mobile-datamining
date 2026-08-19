// discord_app/hooks/useInterval.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import noop from "../../_runtime/00019_noop.js";

({ useEffect: obj1, useRef: c3 } = noop);
const result = obj132.fileFinishedImporting("hooks/useInterval.tsx");

export default function useInterval(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const callback = callback2(arg0);
  callback2 = callback2(null);
  const items = [arg0];
  callback(() => {
    closure_2.current = closure_0;
  }, items);
  const items1 = [arg1];
  callback(() => {
    if (null !== closure_1) {
      const _setInterval = setInterval;
      ref.current = setInterval(() => {
        closure_1_0(closure_1_1[1])(null != ref.current, "Missing callback");
        ref.current();
      }, tmp);
      return () => clearInterval(ref2.current);
    } else if (null !== ref.current) {
      const _clearInterval = clearInterval;
      clearInterval(ref.current);
      ref.current = null;
    }
  }, items1);
};