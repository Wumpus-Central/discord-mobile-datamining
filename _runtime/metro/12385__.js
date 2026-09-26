// === Module 12385: ? ===

// Module 12385
import _mod12384 from "module_12384" /* 12384 */;

require = arg1;
const dependencyMap = arg6;

export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(_mod12384.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};