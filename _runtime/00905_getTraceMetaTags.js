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
  }
  const entries = Object.entries(traceData);
  const mapped = entries.map((item, index) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};