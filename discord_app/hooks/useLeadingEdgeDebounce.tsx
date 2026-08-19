// === Module 12480: useLeadingEdgeDebounce ===

// Module 12480 (useLeadingEdgeDebounce)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

const result = require("obj132").fileFinishedImporting("hooks/useLeadingEdgeDebounce.tsx");

export const useLeadingEdgeDebounce = (stateFromStores1, arg1) => {
  const callback = stateFromStores1;
  const React = arg1;
  closure_2 = React.useRef(true);
  const tmp = callback(React.useState(stateFromStores1), 2);
  closure_3 = tmp[1];
  const items = [stateFromStores1, arg1];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(closure_0);
      closure_2.current = true;
    }, closure_1);
    if (ref.current) {
      callback(timeout);
    }
    ref.current = false;
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  return tmp[0];
};