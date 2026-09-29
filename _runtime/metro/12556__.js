// _runtime/metro/12556__.js
import _mod12555 from "12555__.js";

require = arg1;
const dependencyMap = arg6;

export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(_mod12555.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return '<meta name="' + tmp + '" content="' + tmp2 + '"/>';
  });
  return mapped.join("\n");
};
