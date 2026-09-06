// _runtime/metro/05240__.js
import _mod5238 from "05238__.js";

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
    return _mod5238.getStringValue(value);
  },
};

export default obj;
