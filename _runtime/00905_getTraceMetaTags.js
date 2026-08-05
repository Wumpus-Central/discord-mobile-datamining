import { getTraceData } from "00904_getTraceData.js";
// _runtime/00905_getTraceMetaTags.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getTraceMetaTags = function getTraceMetaTags(arg0) {
  let traceData = arg0;
  if (!arg0) {
    traceData = getTraceData /* getTraceData */.getTraceData();
    const obj = getTraceData /* getTraceData */;
  }
  const entries = Object.entries(traceData);
  const mapped = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return "<meta name=\"" + tmp + "\" content=\"" + tmp2 + "\"/>";
  });
  return mapped.join("\n");
};