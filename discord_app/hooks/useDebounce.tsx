import _slicedToArray from "_slicedToArray";
import noop from "noop";

const result = require("set").fileFinishedImporting("hooks/useDebounce.tsx");

export default function useDebounce(arg0, arg1) {
  const callback = arg0;
  const React = arg1;
  const tmp = callback(React.useState(arg0), 2);
  let closure_2 = tmp[1];
  const items = [arg0, arg1];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(_slicedToArray);
    }, noop);
    return () => {
      clearTimeout(_slicedToArray);
    };
  }, items);
  return tmp[0];
};