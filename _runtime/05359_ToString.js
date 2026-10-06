// _runtime/05359_ToString.js
import GetIntrinsic from "01292_GetIntrinsic.js";
import _mod1293 from "metro/01293__.js";

let closure_2 = GetIntrinsic("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1293("Cannot convert a Symbol value to a string");
    throw tmp3;
  } else {
    return closure_2(arg0);
  }
}
