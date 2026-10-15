// _runtime/metro/15233__.js
import _mod15224 from "15224__.js";
import _mod15232 from "15232__.js";
import _mod15234 from "15234__.js";
import _mod15235 from "15235__.js";

export default _mod15224
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15234("Symbol");
      let tmpResultResult = _mod15232(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15235(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15235;
      }
      return tmpResultResult;
    };
