// _runtime/metro/00770__.js
import _mod769 from "00769__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getTraceMetaTags = function getTraceMetaTags(arg0) {
  let traceData = arg0;
  if (!arg0) {
    traceData = _mod769.getTraceData();
  }
  const entries = Object.entries(traceData);
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return '<meta name="' + tmp + '" content="' + tmp2 + '"/>';
  });
  return mapped.join("\n");
};
