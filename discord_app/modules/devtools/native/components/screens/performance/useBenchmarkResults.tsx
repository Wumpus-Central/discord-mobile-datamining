// discord_app/modules/devtools/native/components/screens/performance/useBenchmarkResults.tsx
import closure_0 from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_1 from "../../../../../../../_runtime/00019_noop.js";

const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/performance/useBenchmarkResults.tsx");

export default function useBenchmarkResults() {
  const tmp = callback(React.useState([]), 2);
  callback = tmp[1];
  React = React.useRef(0);
  return {
    results: tmp[0],
    addMount: React.useCallback((arg0, arg1) => {
      const callback = arg0;
      closure_1 = arg1;
      callback((arg0) => {
        ref.current = +ref.current + 1;
        const items = [{ kind: "mount", id: tmp, label: closure_0, elapsedMs: ref }, ...arg0];
        return items;
      });
    }, []),
    addScroll: React.useCallback((arg0) => {
      const callback = arg0;
      callback((arg0) => {
        closure_1_1.current = +closure_1_1.current + 1;
        const merged = Object.assign(closure_0);
        const items = [{ kind: "scroll", id: tmp }, ...arg0];
        return items;
      });
    }, []),
    clear: React.useCallback(() => callback([]), [])
  };
};