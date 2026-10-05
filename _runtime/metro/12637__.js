// _runtime/metro/12637__.js
import _mod12636 from "12636__.js";

export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12636;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return '<meta name="' + tmp + '" content="' + tmp2 + '"/>';
  });
  return mapped.join("\n");
};
