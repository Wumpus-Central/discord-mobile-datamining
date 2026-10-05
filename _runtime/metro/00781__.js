// === Module 781: ? ===

// Module 781
import _mod780 from "module_780" /* 780 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getTraceMetaTags = function getTraceMetaTags(arg0) {
  let traceData = arg0;
  const _Object = Object;
  if (!arg0) {
    const obj = _mod780;
    traceData = obj.getTraceData();
  }
  const entries1 = entries(traceData);
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};