import _slicedToArray from "_slicedToArray";
import noop from "noop";

const result = require("set").fileFinishedImporting("hooks/useLeadingEdgeDebounce.tsx");

export const useLeadingEdgeDebounce = (arg0, arg1) => {
  const callback = arg0;
  const React = arg1;
  let closure_2 = React.useRef(true);
  const tmp = callback(React.useState(arg0), 2);
  let closure_3 = tmp[1];
  const items = [arg0, arg1];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(_slicedToArray);
      closure_2.current = true;
    }, noop);
    if (ref.current) {
      callback(timeout);
    }
    ref.current = false;
    return () => {
      clearTimeout(_slicedToArray);
    };
  }, items);
  return tmp[0];
};