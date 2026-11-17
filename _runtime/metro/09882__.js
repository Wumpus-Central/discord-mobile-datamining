// _runtime/metro/09882__.js
import _mod9881 from "09881__.js";

require = arg1;
const dependencyMap = arg6;

export function getTraceMetaTags() {
  const entries = Object.entries(_mod9881.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return '<meta name="' + tmp + '" content="' + tmp2 + '"/>';
  });
  return mapped.join("\n");
}
