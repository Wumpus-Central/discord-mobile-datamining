// === Module 12637: ? ===

// Module 12637
import _mod12636 from "module_12636" /* 12636 */;

require = arg1;
const dependencyMap = arg6;

export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(_mod12636.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};