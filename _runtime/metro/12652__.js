// _runtime/metro/12652__.js
import _mod12651 from "12651__.js";

export const getTraceMetaTags = function getTraceMetaTags() {
  const obj = _mod12651;
  const entries1 = entries(obj.getTraceData());
  const mapped = entries1.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return '<meta name="' + tmp + '" content="' + tmp2 + '"/>';
  });
  return mapped.join("\n");
};
