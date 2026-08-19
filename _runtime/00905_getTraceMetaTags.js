// === Module 905: getTraceMetaTags ===

// Module 905 (getTraceMetaTags)
import getTraceData from "getTraceData" /* 904 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getTraceMetaTags = function getTraceMetaTags(arg0) {
  let traceData = arg0;
  if (!arg0) {
    traceData = getTraceData.getTraceData();
    const obj = getTraceData;
  }
  const entries = Object.entries(traceData);
  const mapped = entries.map((arg0) => {
    [tmp, tmp2] = arg0;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};