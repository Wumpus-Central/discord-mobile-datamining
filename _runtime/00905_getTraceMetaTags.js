// _runtime/00905_getTraceMetaTags.js
import getTraceData from "00904_getTraceData.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getTraceMetaTags = function getTraceMetaTags(arg0) {
  let traceData = arg0;
  if (!arg0) {
    traceData = getTraceData.getTraceData();
  }
  const entries = Object.entries(traceData);
  const mapped = entries.map((item, index) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};