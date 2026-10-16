// _runtime/metro/15268__.js
import _mod15259 from "15259__.js";
import _mod15267 from "15267__.js";
import _mod15269 from "15269__.js";
import _mod15270 from "15270__.js";

export default _mod15259
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15269("Symbol");
      let tmpResultResult = _mod15267(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15270(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15270;
      }
      return tmpResultResult;
    };
