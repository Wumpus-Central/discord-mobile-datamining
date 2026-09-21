// _runtime/metro/13122__.js
import _mod13121 from "13121__.js";

require = arg1;
const dependencyMap = arg6;

export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(_mod13121.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return '<meta name="' + tmp + '" content="' + tmp2 + '"/>';
  });
  return mapped.join("\n");
};
