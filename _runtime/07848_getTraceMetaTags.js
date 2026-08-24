// === Module 7848: getTraceMetaTags ===

// Module 7848 (getTraceMetaTags)
import getTraceData from "getTraceData" /* 7847 */;

require = arg1;
const dependencyMap = arg6;
arg5.getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(getTraceData.getTraceData());
  const mapped = entries.map((arg0) => {
    [tmp, tmp2] = arg0;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};