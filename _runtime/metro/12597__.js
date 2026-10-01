// === Module 12597: ? ===

// Module 12597
import _mod12596 from "module_12596" /* 12596 */;

require = arg1;
const dependencyMap = arg6;

export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(_mod12596.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};