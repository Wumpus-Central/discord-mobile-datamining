// _runtime/metro/07372__.js
import _mod7370 from "07370__.js";

let obj = {
  1: "InteroperabilityIndex",
  2: null,
  4096: "RelatedImageFileFormat",
  4097: "RelatedImageWidth",
  4098: "RelatedImageHeight",
};
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod7370;
    return obj.getStringValue(value);
  },
};

export default obj;
