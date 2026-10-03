// === Module 781: ? ===

// Module 781
import _mod780 from "module_780" /* 780 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getTraceMetaTags = function getTraceMetaTags(arg0) {
  let traceData = arg0;
  if (!arg0) {
    traceData = _mod780.getTraceData();
  }
  const entries = Object.entries(traceData);
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};