// === Module 7810: getTraceMetaTags ===

// Module 7810 (getTraceMetaTags)
import getTraceData from "getTraceData" /* 7809 */;

require = arg1;
const dependencyMap = arg6;
arg5.getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(getTraceData.getTraceData());
  const mapped = entries.map((item, index) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};