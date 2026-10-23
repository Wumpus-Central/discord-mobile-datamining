// _runtime/metro/12611__.js
import _mod12610 from "12610__.js";

require = arg1;
const dependencyMap = arg6;

export const getTraceMetaTags = function getTraceMetaTags() {
  const entries = Object.entries(_mod12610.getTraceData());
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return '<meta name="' + tmp + '" content="' + tmp2 + '"/>';
  });
  return mapped.join("\n");
};
