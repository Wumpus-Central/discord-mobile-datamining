// === Module 13350: ? ===

// Module 13350
import _mod13349 from "module_13349" /* 13349 */;

require = arg1;
const dependencyMap = arg6;

export function getTraceMetaTags() {
  const entries = Object.entries(_mod13349.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}