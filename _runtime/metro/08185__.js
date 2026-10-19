// _runtime/metro/08185__.js
import _mod8183 from "08183__.js";

require = arg1;
const dependencyMap = arg6;
const obj = {
  1: "InteroperabilityIndex",
  2: null,
  4096: "RelatedImageFileFormat",
  4097: "RelatedImageWidth",
  4098: "RelatedImageHeight",
};
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod8183.getStringValue(value);
  },
};

export default obj;
