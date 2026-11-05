// === Module 13353: ? ===

// Module 13353
import _mod13352 from "module_13352" /* 13352 */;

require = arg1;
const dependencyMap = arg6;

export function getTraceMetaTags() {
  const entries = Object.entries(_mod13352.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
}