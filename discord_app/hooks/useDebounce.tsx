// discord_app/hooks/useDebounce.tsx
import closure_0 from "../../_runtime/metro/00032__slicedToArray.js";
import closure_1 from "../../_runtime/00019_noop.js";

const result = require("set").fileFinishedImporting("hooks/useDebounce.tsx");

export default function useDebounce(arg0, arg1) {
  const callback = arg0;
  const React = arg1;
  const tmp = callback(React.useState(arg0), 2);
  closure_2 = tmp[1];
  const items = [arg0, arg1];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(closure_0);
    }, closure_1);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  return tmp[0];
};