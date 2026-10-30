// === Module 13076: ? ===

// Module 13076
import _mod13075 from "module_13075" /* 13075 */;

require = arg1;
const dependencyMap = arg6;

export function getTraceMetaTags() {
  const entries = Object.entries(_mod13075.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}