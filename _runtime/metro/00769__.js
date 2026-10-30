// _runtime/metro/00769__.js
import _mod768 from "00768__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function getTraceMetaTags(arg0) {
  let traceData = arg0;
  if (!arg0) {
    traceData = _mod768.getTraceData();
  }
  const entries = Object.entries(traceData);
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return '<meta name="' + tmp + '" content="' + tmp2 + '"/>';
  });
  return mapped.join("\n");
}
